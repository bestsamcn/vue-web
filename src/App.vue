<style lang="styl" src="./assets/styl/main/styl-main.styl"></style>
<style>
    .index-content{
        width:100%;
        height:100%;
        transition: all cubic-bezier(0.36, 0.66, 0.04, 1) 500ms;
        -webkit-transform:translate3d(0,0,0)
    }
    .index-content.active{
        -webkit-transform:translate3d(30%,0,0)
    }
    
</style>
<template>
    <div class="index-content" :class="{'active':isShowAside}">
        <m-nav :is-show-aside.sync="isShowAside"></m-nav>
        <div class="full-view">
            <router-view keep-alive></router-view>
        </div>
    </div>
    <aside :is-show-aside.sync="isShowAside" :is-login.sync="isShowFooter"></aside>
</template>

<script>
//component
import mNav from './include/nav.vue'
import aside  from './components/aside.vue'

//vuex
import store from './vuex/store.js'
import {userLogin } from './vuex/actions.js'
import * as type from './api/config.js'

//css/js

import '../node_modules/font-awesome/css/font-awesome.min.css'
import 'reset.css'
import 'animate.css'
import './assets/css/base.css'

//store必须依赖data，否则无法注入根组件
export default {
    name:'App',
    store,
    data(){
        return{
            isShowAside:false
        }
    },
    vuex:{
        actions:{
            userLogin
        },
        getters:{
            userInfo:({sign})=>sign.userInfo
        }
    },
    replace:false,
    components: {
        mNav,
        aside
    },
    methods:{

    },
    created(){
        this.userLogin()
    },
    ready(){
        if(!!this.userInfo.uid){
            this.isShowFooter =false;
        }
        console.log('app')
    },
    computed:{
        isShowFooter(){
            let b = true;
            if(!this.userInfo.uid){
                b = false; 
            }
            return b
        }
    }
}
</script>
