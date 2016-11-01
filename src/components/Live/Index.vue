<style src="../../assets/css/live/live.css" scoped></style>
<template>
    <div class="router-view" transition="outLeftInRight">
        <Banner :slider-banner-list="liveBannerList" :carousel-id="idGroup.id1"></Banner>
        <Videotag :all-tag-list="allTagList" :has-choose-tags.sync="videoParams.tagids"></Videotag>
   	    <div class="live-wrapper">
            <Videolist :video-list="liveVideoList"></Videolist>
            <Morebtn v-show="isMore" :current-page.sync="videoParams.page"></Morebtn>
   	    </div>
   	    <Foot v-if="isAllReady"></Foot>
    </div>
</template>
<script>
    import Banner from '../common/Banner.vue'
    import Videolist from '../common/Videolist.vue'
    import Foot from '../common/Foot.vue'
    import Morebtn from './Morebtn.vue'
    import Videotag from './Videotag.vue'
    import { getLiveBannerList, getLiveVideoList, refreshLiveVideoList } from '../../vuex/actions.js'
	export default{
        name:'live',
		data(){
			return{
				idGroup:{
					id1:'live-banner'
				},
				isAllReady:false,
                videoParams:{
                    page:1,
                    rows:4,
                    watchnum:1,
                    status:1,
                    livetime:1,
                    seq:1,
                    tagids:''
                },
                isMore:true
			}
		},
        components:{
        	Banner,
        	Foot,
            Videolist,
            Morebtn,
            Videotag
        },
        vuex:{
        	getters:{
        		bannerParams:({ live })=>live.bannerParams,
        		liveBannerList:({ live })=>live.liveBannerList,
                liveVideoList:({ live })=>live.liveVideoList,
                allTagList:({ common })=>common.allTagList
        	},
        	actions:{
        		getLiveBannerList,
                getLiveVideoList,
                refreshLiveVideoList
        	}
        },
        methods:{
        	setLiveBanner(id){
                $(`#${id}`).owlCarousel({
                    loop: true,
                    margin: 10,
                    autoPlay:true,
                    items: 1,
                    smartSpeed: 600
                });
        	},
            getMoreVideo(){
                if(this.videoParams.page === 1) return
                this.getLiveVideoList(this.videoParams).then((res)=>{
                    if(this.videoParams.page*this.videoParams.rows >= res.total){
                        this.isMore = false
                    }else{
                        this.isMore = true
                    }
                })
            },
            refreshVideo(){
                this.videoParams.page = 1;
                this.refreshLiveVideoList(this.videoParams).then((res)=>{
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
            'videoParams.tagids':'refreshVideo'
        },
        created(){
        	this.$nextTick(()=>{
        		let p1 = new Promise((resolve,reject)=>{
        			if(this.liveBannerList.length < 1){
        				this.getLiveBannerList(this.bannerParams).then(()=>{
        					return resolve()
        				})
        			}else{
        				return resoleve()
        			}
        		})
                let p2 = new Promise((resolve,reject)=>{
                    if(this.liveVideoList.length < 1){
                        this.getLiveVideoList(this.videoParams).then((res)=>{
                            if(this.videoParams.page*this.videoParams.rows > res.total){
                                this.isMore = false
                            }
                            return resolve()
                        })
                    }else{
                        return resoleve()
                    }
                })
        		Promise.all([p1,p2]).then(()=>{
        			this.setLiveBanner(this.idGroup.id1)
        			this.isAllReady = true
        		})
        	})
        }
	}
</script>