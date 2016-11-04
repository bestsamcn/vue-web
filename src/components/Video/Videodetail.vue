<style src="../../assets/css/video/videodetail.css" scoped></style>
<template>
	<div class="router-view video-detail" transition="outLeftInRight">
	    <div class="wrapper">
	    	<Videoheader :header-data="headerData"></Videoheader>
	    	<Videonav :header-data="headerData"></Videonav>
	    	<Videoplay :video-info="videoDetail" :video-id="videoId"></Videoplay>
	    	<Videoscroll :play-list="playList" :play-list-params.sync="playListParams"  :is-more-play-list="isMorePlayList"></Videoscroll>
	    </div>
	</div>
</template>
<script>

	import { getVideoDetail, getPlayList } from '../../vuex/actions.js'
    import Videoheader from './Videoheader.vue'
    import Videonav from './Videonav.vue'
    import Videoplay from './Videoplay.vue'
    import Videoscroll from './Videoscroll.vue'
    import IScroll from '../../assets/js/iscroll.js'
    import $$ from '../../utils/tools.js'
	export default{
		name:'videodetail',
		components:{
            Videoheader,
            Videonav,
            Videoplay,
            Videoscroll
		},
		data(){
			return {
                videoDetail:{},
                prevRoute:'',
                headerData:{
                	pName:'',
                	cName:'',
                    playListTotal:null
                },
                playList:[],
                playListParams:{
                	page:1,
                	rows:10,
                	catagoryid:()=>{
                		return this.videoDetail.categoryid
                	}
                },
                isMorePlayList:true
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
			//拉去视频数据
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
			//拉取播放列表
			pullPlayList(){
      			if(!this.videoDetail.categoryid) return
      			this.getPlayList(this.playListParams).then(res=>{
      				this.playList = res.rows
      				this.headerData.playListTotal = res.total
      			})
			},
			//设置导航地图分类
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
			//滚动加载更多
            getMorePlayList(){
            	if(this.playListParams.page ===1) return
            	this.getPlayList(this.playListParams).then(res=>{
      				this.playList =this.playList.concat(res.rows) 
            		if(this.playListParams.page * this.playListParams.rows >= res.total){
            			this.isMorePlayList = false
            		}
      			},res=>{
            		this.isMorePlayList = false
      			}).catch(e=>{
            		this.isMorePlayList = false
      			})
            },
            //返回上一级
			goBack(){
				this.$route.router.go(this.headerData.prevRoute)
			}
		},
		watch:{
			videoId:'pullVideoDetail',
			'playListParams.page':'getMorePlayList'
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