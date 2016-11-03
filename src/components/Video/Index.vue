<style src="../../assets/css/video/video.css" scoped></style>
<template>
	<div class="router-view" transition="outLeftInRight">
	    <Videobanner :slider-banner-list="videoBannerList" :carousel-id="idGroup.id1"></Videobanner>
	    <Videotag :all-tag-list="allTagList" :has-choose-tags.sync="videoParams.tagids"></Videotag>
	    <Order v-show="isAllReady"></Order>
	    <div class="list-wrapper">
	    	<Videolist :video-list="videoVideoList"></Videolist>
            <Morebtn  v-show="isMore" :current-page.sync="videoParams.page"></Morebtn>
	    </div>
	    <Foot  v-if="isAllReady"></Foot>
	</div>
</template>
<script>
    import Videobanner from '../common/Banner.vue'
    import Videolist from './Videolist.vue'
    import Foot from '../common/Foot.vue'
    import Morebtn from '../common/Morebtn.vue'
    import Videotag from '../common/Videotag.vue'
    import Order from '../common/Order.vue'
    import { getVideoBannerList, getVideoVideoList, refreshVideoVideoList } from '../../vuex/actions.js'
	export default{
		name:'video',
		data(){
			return {
				idGroup:{
					id1:'video-banner'
				},
				videoParams:{
                    page:1,
                    rows:4,
                    watchnum:null,
                    createdat:1,
                    status:2,
                    tagids:''
                },
                isAllReady:false,
                isMore:true
			}
		},
		components:{
			Videobanner,
			Videolist,
			Foot,
			Morebtn,
			Videotag,
			Order
		},
		vuex:{
			getters:{
				videoBannerList:({ video })=>video.videoBannerList,
				bannerParams:({ video })=>video.bannerParams,
                allTagList:({ common })=>common.allTagList,
                videoVideoList:({ video })=>video.videoVideoList
			},
			actions:{
				getVideoBannerList:getVideoBannerList,
				getVideoVideoList:getVideoVideoList,
				refreshVideoVideoList:refreshVideoVideoList
			}
		},
		methods:{
			setBanner(id){
                $(`#${id}`).owlCarousel({
                    loop: true,
                    margin: 10,
                    autoPlay:true,
                    items: 1,
                    smartSpeed: 600
                });
        	},
        	setOrder(num){
        		if(num === 1){
        			this.videoParams.watchnum = 1
        			this.videoParams.createdat = null
        		}else if(num ===2){
        			this.videoParams.watchnum = null
        			this.videoParams.createdat = 1
        		}
        	},
            getMoreVideo(){
                if(this.videoParams.page === 1) return
                this.getVideoVideoList(this.videoParams).then((res)=>{
                    if(this.videoParams.page*this.videoParams.rows >= res.total){
                        this.isMore = false
                    }else{
                        this.isMore = true
                    }
                })
            },
            refreshVideo(){
                this.videoParams.page = 1;
                this.refreshVideoVideoList(this.videoParams).then((res)=>{
                    if(this.videoParams.page*this.videoParams.rows >= res.total){
                        this.isMore = false
                    }else{
                        this.isMore = true
                    }
                }).catch(e=>{})
            }
		},
		watch:{
			'videoParams.page':'getMoreVideo',
			'videoParams.tagids':'refreshVideo',
			'videoParams.watchnum':'refreshVideo'
		},
		created(){
			this.$nextTick(()=>{
			    let p1 = new Promise((resolve,reject)=>{
			    	if(this.videoBannerList.length < 1){
						this.getVideoBannerList(this.bannerParams).then(()=>{
							return resolve()
						})
					}else{
						return resolve()
					}
			    })
			    let p2 = new Promise((resolve,reject)=>{
			    	if(this.videoVideoList.length < 1){
			    		this.getVideoVideoList(this.videoParams).then((res)=>{
				    		if(this.videoParams.page*this.videoParams.rows >= res.total){
		                        this.isMore = false
		                    }else{
		                        this.isMore = true
		                    }
		                    return resolve()
				    	})
			    	}else{
			    		return resolve()
			    	}
			    })
			    Promise.all([p1,p2]).then(()=>{
                    this.setBanner(this.idGroup.id1)
                    this.isAllReady = true
			    })
			})
		}
	}
</script>