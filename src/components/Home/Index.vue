<style src="../../assets/css/home/home.css"></style>
<template>
    <div class="router-view" transition="outLeftInRight">
        <Slider :slider-banner-list="bannerList"></Slider>
        <Cloudtag :cloud-tag-list="cloudTagList"></Cloudtag>
    </div>
</template>

<script>
    import '../../../node_modules/owlcarousel/owl-carousel/owl.carousel.css'
    import * as type from '../../api/config.js'
    import { getBanner, getBannerList, getCloudTagList } from '../../vuex/actions.js'
    import Slider from '../common/Slider.vue'
    import Cloudtag  from './Cloudtag.vue'

    export default {
        components:{
          Slider,
          Cloudtag
        },
        vuex:{
            getters:{
                bannerList:({index})=>index.bannerList,
                cloudTagList:({index})=>index.cloudTagList
            },
            actions:{
                getBannerList,
                getCloudTagList
            }
        },
        methods:{
            setCarousel(){
                $('#owlcarousel').owlCarousel({
                    loop: false,
                    margin: 10,
                    autoplay:true,
                    items: 1,
                    smartSpeed: 600
                });
            },
            setCloudTag(){
                TagCanvas.Start('tags-box','tags-list',{
                    textColour: '#000000',
                    outlineColour: '#fff',
                    reverse: true,
                    depth: 0.8,
                    dragControl: true,
                    decel:0.95,
                    maxSpeed: 0.05,
                    initial: [-0.2, 0],
                    maxSpeed: 0.05,
                    minSpeed: 0.01,

                });
            }
        },
        created(){
            this.$nextTick(()=>{
                var p1 = new Promise((resolve,reject)=>{
                    if(this.bannerList.length<1){
                        this.getBannerList().then(()=>{
                            return resolve()
                        })
                    }else{
                        return resolve()
                    }
                })
                var p2 = new Promise((resolve,reject)=>{
                    if(this.cloudTagList.length<1){
                        this.getCloudTagList().then(()=>{
                            return resolve()
                        })
                    }else{
                        return resolve()
                    }
                })
                Promise.all([p1,p2]).then(()=>{
                    this.setCarousel()
                    this.setCloudTag()
                })
                
            })
        },
        route:{
            data(){
                this.setCarousel()
            }
        }
    }
</script>