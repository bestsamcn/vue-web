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
    import { getBanner,setCarousel } from '../../vuex/actions.js'
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
                setCarousel,
                getBanner
            }
        },
        methods:{
            getBannerList(){
                var that = this
                this.$http({
                    method:'get',
                    url:type.ROOT_API+'/pipes/v1/banner/getListBanner',
                    emulateJSON:true,
                    params:{modelBanner:1,seq:1,status:10}
                }).then(function(res){
                    if(res.ok && res.data.retCode===0){
                        that.getBanner(res.data.rows)
                    }
                }).then(function(){
                    setTimeout(()=>{
                        this.setCarousel();
                    },500)
                })
            }
        },
        created(){
            if(this.bannerList.length<1){
                this.getBannerList()
            }

        }
    }
</script>