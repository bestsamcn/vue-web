<style src="../../assets/css/live/livedetail.css"></style>
<template>
	<div class="live-detail">
	    <div class="wrapper">
	    	<div class="info-box">
	    		<span class="live-status">已结束</span>
	    		<h4>啊撒旦发拉萨三大发</h4>
	    		<p>主持人：黄渤</p>
	    	</div>
	    	<div class="count-down">
	    		
	    	</div>
	    </div>	
	</div>
</template>
<script>
	export default{
		methods:{
			getLiveDetail(){
                console.log(this.liveId)
			}
		},
		vuex:{
			getters:{
			    liveId:({ route })=>route.params.id

			}
		},
		watch:{
			liveId:'getLiveDetail'
		}
	}
</script>