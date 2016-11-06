import Vue from 'vue'

import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
import { sync } from 'vuex-router-sync'
import filter from './filter.js'
import $ from 'jquery'
import '../node_modules/owlcarousel/owl-carousel/owl.carousel.min.js'
import './assets/js/tagcanvas.js'
import './assets/js/countdown.js'
import './assets/js/jcrop.js'



import App from './App.vue'
import routerMap from './router.js'
import store from './vuex/store.js'
Vue.use(filter)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueResource)


Vue.use(VueLazyload, {
  error: '/assets/img/404.png',
  loading: '/assets/img/loading.svg'
})



const router = new VueRouter({
    hashbang:true,
    saveScrollPosition: true,
    //将路径格式化为#!开头
    hashbang:true,
    //启用HTML5 history模式，可以使用pushState和replaceState来管理记录,这样类似node路由链接，不适合用，会和api冲突
    history:false,
    //是否使用路由连接模式，true后，切换路由。链接将不变
    abstract:false,
    //是否在首次加载页面的时候就启用路由切换动画
    transitionOnLoad:false,
    //是否保存滚动高度
    saveScrollPosition:false,
    //路由激活样式
    linkActiveClass:'active'
})

const rootApp =Vue.extend(App)

routerMap(router)


sync(store, router)
router.start(rootApp,'body');


