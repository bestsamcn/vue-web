<style src="../../assets/css/home/home.css"></style>
<template>
    <div class="router-view" transition="outLeftInRight">
        <index-slider :slider-banner-list="bannerList"></index-slider>
        {{sliderFlag}}
    </div>
</template>

<script>
    import '../../../node_modules/owlcarousel/owl-carousel/owl.carousel.css'
    import * as type from '../../api/config.js'
    import { getBanner, getBannerList } from '../../vuex/actions.js'
    import indexSlider from '../common/Slider.vue'
    export default {
        components:{
          indexSlider
        },
        vuex:{
            getters:{
                bannerList:({index})=>index.bannerList
            },
            actions:{
                getBanner,
                getBannerList
            }
        },
        methods:{
            setCarousel(){
                $('#owlcarousel').owlCarousel({
                    loop: true,
                    margin: 10,
                    autoplay:true,
                    items: 1,
                    smartSpeed: 600
                });
            }
        },
        created(){
            if(this.bannerList.length<1){
                this.getBannerList().then(()=>{
                    this.setCarousel()
                })
            }

        }
    }
</script>