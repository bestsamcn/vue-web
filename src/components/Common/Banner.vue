<style src="../../../node_modules/owlcarousel/owl-carousel/owl.theme.css" scoped></style>
<style src="../../../node_modules/owlcarousel/owl-carousel/owl.carousel.css" scoped></style>
<style src="../../assets/css/common/banner.css" ></style>
<template>
	<div class="owl-carousel" v-if="!!sliderBannerList.length" id="{{carouselId}}">
        <div class="item" v-for="item in sliderBannerList">
        	<img v-lazy="BANNER_URL+item.banner">
        </div>
	</div>
</template>
<script>
    import { BANNER_URL } from '../../api/config.js'
	export default{
        props:['sliderBannerList','carouselId'],
        data(){
            return{
                BANNER_URL:BANNER_URL
            }
        }
	}
</script>