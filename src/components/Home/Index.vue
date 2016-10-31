<style src="../../assets/css/home/home.css"></style>
<template>
    <div class="router-view" transition="outLeftInRight" transition-mode="in">
        <Banner :slider-banner-list="bannerList" :carousel-id="idGroup.id1"></Banner>
        <Cloudtag :cloud-tag-list="cloudTagList"></Cloudtag>
        <Hometitle v-if="isAllReady" :caption="titleGroup.title1"></Hometitle>
        <Slider :slider-list="liveVodList" :slider-id="idGroup.id2"></Slider>
        <Hometitle v-if="isAllReady" :caption="titleGroup.title2"></Hometitle>
        <Guesslike :guess-like-list="guessLikeList"></Guesslike>
        <Foot v-if="isAllReady"></Foot>
    </div>
</template>

<script>
    import { getBanner, getBannerList, getCloudTagList, setLoading, getLiveVodList, getGuessLikeList } from '../../vuex/actions.js'
    import Banner from '../common/Banner.vue'
    import Cloudtag  from './Cloudtag.vue'
    import Slider from '../common/Slider.vue'
    import Hometitle from './Hometitle.vue'
    import Guesslike from './Guesslike.vue'
    import Foot  from '../common/Foot.vue'

    export default {
        data(){
            return{
                idGroup:{
                    id1:'banner-slider',
                    id2:'most-hot'
                },
                titleGroup:{
                    title1:'最热',
                    title2:'猜你喜欢'
                },
                vodParams:{
                   page:1,
                   rows:4,
                   watchnum:1
                },
                isAllReady:false
            }
        },
        components:{
            Banner,
            Cloudtag,
            Slider,
            Hometitle,
            Guesslike,
            Foot
        },
        vuex:{
            getters:{
                bannerList:({index})=>index.bannerList,
                bannerParams:({ index })=>index.bannerParams,
                cloudTagList:({index})=>index.cloudTagList,
                liveVodList:({index})=>index.liveVodList,
                guessLikeList:({index})=>index.guessLikeList
            },
            actions:{
                getBannerList,
                getCloudTagList,
                setLoading,
                getLiveVodList,
                getGuessLikeList
            }
        },
        methods:{
            setCarousel(id){
                $(`#${id}`).owlCarousel({
                    loop: true,
                    margin: 10,
                    autoPlay:true,
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
            },
            setSlider(id){
                $(`#${id}`).owlCarousel({
                    margin: 17,
                    loop: true,
                    dotsEach:1,
                    responsiveClass:true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 3
                        }
                    }
                })
            }
        },
        created(){
            this.$nextTick(()=>{
                let p1 = new Promise((resolve,reject)=>{
                    if(this.bannerList.length<1){
                        this.getBannerList(this.bannerParams).then(()=>{
                            return resolve()
                        })
                    }else{
                        return resolve()
                    }
                })
                let p2 = new Promise((resolve,reject)=>{
                    if(this.cloudTagList.length<1){
                        this.getCloudTagList().then(()=>{
                            return resolve()
                        })
                    }else{
                        return resolve()
                    }
                })
                let p3 = new Promise((resolve,reject)=>{
                    if(this.liveVodList.length<1){
                        this.getLiveVodList(this.vodParams).then(()=>{
                            return resolve()
                        })
                    }else{
                        return resolve()
                    }
                })
                let p4 = new Promise((resolve,reject)=>{
                    if(this.guessLikeList.length<1){
                        this.getGuessLikeList().then(()=>{
                            return resolve()
                        })
                    }else{
                        return resolve()
                    }
                })
                Promise.all([p1,p2,p3,p4]).then(()=>{
                    this.setCarousel(this.idGroup.id1)
                    this.setCloudTag()
                    this.setSlider(this.idGroup.id2)
                    this.isAllReady = true
                })
                
            })
        },
        route:{
            data(transition){

            }
        }
    }
</script>