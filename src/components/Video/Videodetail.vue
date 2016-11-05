<style src="../../assets/css/video/videodetail.css" scoped></style>
<template>
	<div class="router-view video-detail" transition="outLeftInRight">
	    <div class="wrapper">
	    	<Videoheader :header-data="headerData"></Videoheader>
	    	<Videonav :header-data="headerData"></Videonav>
	    	<Videoplay :video-info="videoDetail" :video-id="videoId"></Videoplay>
	    	<Videoscroll :play-list="playList" :play-list-params.sync="playListParams" :is-fetching="isFetching" :is-more-play-list="isMorePlayList"></Videoscroll>
            <Videointr :video-info="videoDetail"></Videointr>
            <Videodiscuss :video-id="videoId" :discuss-list-params.sync="discussListParams" :discuss-list.sync="discussList" :is-more-discuss-list.sync="isMoreDiscussList"></Videodiscuss>
	    </div>
	</div>
</template>
<script>

	import { getVideoDetail, getPlayList, getDiscussList } from '../../vuex/actions.js'
    import Videoheader from './Videoheader.vue'
    import Videonav from './Videonav.vue'
    import Videoplay from './Videoplay.vue'
    import Videoscroll from './Videoscroll.vue'
    import Videointr from './Videointr.vue'
    import Videodiscuss from './Videodiscuss.vue'
    import Morebtn from '../common/Morebtn.vue'


    import IScroll from '../../assets/js/iscroll.js'
    import $$ from '../../utils/tools.js'
	export default{
		name:'videodetail',
		components:{
            Videoheader,
            Videonav,
            Videoplay,
            Videoscroll,
            Videointr,
            Videodiscuss,
            Morebtn
		},
		data(){
			return {
                videoId:'',
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
                	catagoryid:''
                },
                isMorePlayList:true,
                isFetching:false,
                discussListParams:{
                    livevodid:'',
                    page:1,
                    rows:4
                },
                discussList:[],
                isMoreDiscussList:true
			}
		},
		vuex:{
			getters:{
				categoryList:({ common })=>common.categoryList
			},
			actions:{
				getVideoDetail,
				getPlayList,
                getDiscussList
			}

		},
		methods:{
			//拉去视频数据
			pullVideoDetail(){
				if(!this.videoId) return
			    let promise = new Promise((resolve,reject)=>{
			    	this.getVideoDetail({id:this.videoId}).then(res=>{
						this.videoDetail = res;
                        this.playListParams.catagoryid = res.categoryid
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
            //获取评论列表
            pullDiscussList(){
                if(!this.videoId) return
                this.getDiscussList(this.discussListParams).then(res=>{
                    this.discussList = res.rows
                    if(this.discussListParams.page * this.discussListParams.rows >= res.total){
                        this.isMoreDiscussList = false
                    }
                },res=>{
                    this.isMoreDiscussList = false

                }).catch(e=>{
                    this.isMoreDiscussList = false
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
                this.isFetching = true
            	this.getPlayList(this.playListParams).then(res=>{
      				this.playList =this.playList.concat(res.rows) 
            		if(this.playListParams.page * this.playListParams.rows >= res.total){
            			this.isMorePlayList = false
                        this.isFetching = false
            		}
      			},res=>{
            		this.isMorePlayList = false
                    this.isFetching = false
      			}).catch(e=>{
            		this.isMorePlayList = false
                    this.isFetching = false
      			})
            },
            //返回上一级
			goBack(){
				this.$route.router.go(this.headerData.prevRoute)
			}
		},
		watch:{
			'playListParams.page':'getMorePlayList',
            'categoryList':'setCatecory'
		},
		route:{
			data(transition){
                this.videoId = transition.to.params.id
                this.discussListParams.livevodid = transition.to.params.id
                this.headerData.prevRoute = transition.from.path || '/home';
				this.pullVideoDetail().then(()=>{
				    this.setCatecory()
				    this.pullPlayList()
                    this.pullDiscussList()
				})
			}
		}

	}
</script>