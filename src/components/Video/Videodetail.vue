<style src="../../assets/css/video/videodetail.css" scoped></style>
<template>
	<div class="router-view video-detail" transition="outLeftInRight">
	    <div class="wrapper">
	    	<Videoheader :header-data="headerData"></Videoheader>
	    	<Videonav :header-data="headerData"></Videonav>
	    	<Videoplay :video-info="videoDetail"></Videoplay>
	    </div>
	</div>
</template>
<script>
	import { getVideoDetail, getPlayList } from '../../vuex/actions.js'
    import Videoheader from './Videoheader.vue'
    import Videonav from './Videonav.vue'
    import Videoplay from './Videoplay.vue'
    import $$ from '../../utils/tools.js'
	export default{
		name:'videodetail',
		components:{
            Videoheader,
            Videonav,
            Videoplay
		},
		data(){
			return {
                videoDetail:{},
                headerData:{
                	pName:'',
                	cName:'',
                    playListTotal:null
                },
                prevRoute:'',
                playList:[]
			}
		},
		vuex:{
			getters:{
				videoId:({ route })=>route.params.id,
				categoryList:({ common })=>common.categoryList
			},
			actions:{
				getVideoDetail,
				getPlayList
			}

		},
		methods:{
			pullVideoDetail(){
				if(!this.videoId) return
			    let promise = new Promise((resolve,reject)=>{
			    	this.getVideoDetail({id:this.videoId}).then(res=>{
						this.videoDetail = res;
						resolve()
					})
			    })
			    return promise
			},
			pullPlayList(){
      			if(!this.videoDetail.categoryid) return
      			this.getPlayList({catagoryid:this.videoDetail.categoryid,page:1,rows:10}).then(res=>{
      				this.playList = res.rows
      				this.headerData.playListTotal = res.total
      			})
			},
			setCatecory(){
				if (!this.categoryList) return;
                let paramsId = this.videoDetail.categoryid
                let cateRows = this.categoryList
                let pName = '',
                    cName = '',
                    pId = '',
                    cId = '';
                for (let i = 0, plen = cateRows.length; i < plen; i++) {
                    if (cateRows[i].id == paramsId) {
                        pName = cateRows[i].name;
                        cName = null;
                        pId = paramsId;
                        cId = null;
                        break;

                    }
                    for (let j = 0, clen = cateRows[i].children.length; j < clen; j++) {
                        if (cateRows[i].children[j].id == paramsId) {
                            pName = cateRows[i].name;
                            cName = cateRows[i].children[j].name;
                            pId = cateRows[i].id;
                            cId = cateRows[i].children[j].id;
                        }
                    }
                }
                this.headerData.pName = pName
                this.headerData.cName = cName
			},
			goBack(){
				this.$route.router.go(this.headerData.prevRoute)
			}
		},
		watch:{
			videoId:'pullVideoDetail'
		},
		route:{
			data(transition){
                this.headerData.prevRoute = transition.from.path || '/home';
				this.pullVideoDetail().then(()=>{
				    this.setCatecory()
				    this.pullPlayList()
				})
			}
		}

	}
</script>