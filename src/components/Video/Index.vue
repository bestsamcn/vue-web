<style src="../../assets/css/video/video.css"></style>
<template>
	<div class="router-view" transition="outLeftInRight">
	    <Videobanner :slider-banner-list="videoBannerList" :carousel-id="idGroup.id1"></Videobanner>
	</div>
</template>
<script>
    import Videobanner from '../Common/Banner.vue'
    import { getVideoBannerList } from '../../vuex/actions.js'
	export default{
		name:'video',
		data(){
			return {
				idGroup:{
					id1:'video-banner'
				}
			}
		},
		components:{
			Videobanner
		},
		vuex:{
			getters:{
				videoBannerList:({ video })=>video.videoBannerList,
				bannerParams:({ video })=>video.bannerParams
			},
			actions:{
				getVideoBannerList:getVideoBannerList
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
			    Promise.all([p1]).then(()=>{
                    this.setBanner(this.idGroup.id1)
			    })
				
			})
		}
	}
</script>