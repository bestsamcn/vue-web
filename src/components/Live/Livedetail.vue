<style src="../../assets/css/live/livedetail.css"></style>
<template>
	<div class="router-view live-detail" transition="outLeftInRight">
	    <div class="wrapper">
	    	<div class="info-box">
	    		<span class="live-status" :class="{'book': liveDetail.vodstatus=== 1, 'live':liveDetail.vodstatus ===2, 'over':liveDetail.vodstatus === 3}">{{liveDetail.vodstatus | videoStatus}}</span>
	    		<h4>{{liveDetail.title}}</h4>
	    		<p>主持人：{{liveDetail.hostpeople}}</p>
	    	    <Countdown :temptime="liveDetail.dealBeginTime"></Countdown>
	    	    <a href="javascript:;" v-if="liveDetail.dealBeginTime > 0" class="book-btn" :class="{'has-book':liveDetail.ifBook}">{{liveDetail.ifBook ? '取消' : '预约'}}</a>
	    	    <a href="javascript:;" v-if="liveDetail.dealBeginTime < 1" class="book-btn" >过期</a>
	    	</div>
	    </div>	
	</div>
</template>
<script>
    import Countdown from '../common/Countdown.vue'
    import { getLiveDetail } from '../../vuex/actions.js'
	export default{
		name:'livedetail',
		data(){
			return {
                liveDetail:{
                	vodstatus:null,
                	title:'',
                	hostpeople:'',
                	dealBeginTime:0,
                	listimg:'',
                	ifBook:false
                }
			}
		},
		components:{
			Countdown
		},
		methods:{
			pullLiveDetail(){
				if(!this.liveId) return
			    this.getLiveDetail({id:this.liveId}).then(res=>{
                    this.liveDetail.vodstatus = res.vodstatus
                    this.liveDetail.title = res.title
                    this.liveDetail.hostpeople = res.hostpeople
                    this.liveDetail.dealBeginTime = res.dealBeginTime
                    this.liveDetail.listimg = res.listimg
                    this.liveDetail.ifBook = res.ifBook
			    },res=>{
			    	console.log(res)
			    }).catch(e=>{})
			}
		},
		vuex:{
			getters:{
			    liveId:({ route })=>route.params.id
			},
			actions:{
                getLiveDetail
			}
		},
		watch:{
			liveId:'pullLiveDetail'
		},
		route:{
			data(){
				this.pullLiveDetail()
			}
		}
	}
</script>