<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin:0 auto;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>

<template>
    <div class="router-view" id="app" transition="outLeftInRight">
        <index-slider></index-slider>
    </div>
</template>

<script>
  import { getBanner,setCarousel } from '../vuex/actions.js'
  import indexSlider from './index/slider.vue'
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
          })
      }
    },
    create(){
        this.getBannerList()
    },
    ready(){
      console.log(this.bannerList)
    }
  }
</script>