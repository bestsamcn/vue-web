<style src="../../assets/css/common/slider.css" scoped></style>
<template>
	<div class="owl-carousel" v-if="!!sliderBannerList.length" id="owlcarousel">
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