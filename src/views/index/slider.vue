<template>
	<div class="owl-carousel" v-if="sliderBannerList" id="owlcarousel">
        <div class="item" v-for="item in sliderBannerList">
        	<img :src="BANNER_URL+item.banner">
        </div>
	</div>
</template>
<script>
    import { setCarousel } from '../../vuex/actions.js'
    import { ROOT_API ,BANNER_URL } from '../../api/config.js'
	export default{
        props:['sliderBannerList'],
        data(){
            return{
                BANNER_URL:BANNER_URL
            }
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