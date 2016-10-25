<template>
	<div class="owl-carousel" v-if="bannerList" id="owlcarousel">
        <div class="item" v-for="item in bannerList">
        	<img :src="BANNER_URL+item.banner">
        </div>
	</div>
</template>
<script>
    import '../../../node_modules/owlcarousel/owl-carousel/owl.carousel.css'
    import '../../../node_modules/owlcarousel/owl-carousel/owl.carousel.min.js'
  
    import { setCarousel } from '../../vuex/actions.js'
    
    import { ROOT_API ,BANNER_URL } from '../../api/config.js'

	export default{
		el(){
			return '#owlcarousel'
		},
        vuex:{
            getters:{
                bannerList:({index})=>index.bannerList
            },
            actions:{
                setCarousel
            }
        },
        data(){
            return{
                BANNER_URL:BANNER_URL
            }
        },
        ready(){
            this.$nextTick(function(){
                console.log(this.bannerList)
               this.setCarousel()
            });
            // this.setCarousel()
        }
	}
</script>
<style>
	.owl-carousel{
		width:100%;
		/*max-height:250px;*/
	}
	.owl-carousel img{
		width:100%;
	}
</style>