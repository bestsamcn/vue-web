<style src="./assets/css/common/app.css"></style>
<template>
    <Toast :toast-show.sync="toast.isShow" :toast-text="toast.text"></Toast>
    <Navbar :is-show-aside.sync="isShowAside"></Navbar>
    <div class="index-content" :class="{'active':isShowAside}">
        <div class="full-view">
            <router-view keep-alive></router-view>
        </div>
    </div>
    <Aside :is-show-aside.sync="isShowAside" :is-login.sync="isShowFooter"></Aside>
</template>

<script>
//component
import Aside  from './components/common/Aside.vue'
import Navbar  from './components/common/Navbar.vue'
import Toast  from './components/common/Toast.vue'

//vuex
import store from './vuex/store.js'
import { userLogin } from './vuex/actions.js'

//css/js
import '../node_modules/font-awesome/css/font-awesome.min.css'
import 'reset.css'
import 'animate.css'
import './assets/css/common/base.css'

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
            userInfo:({ sign })=>sign.userInfo,
            toast:({ common })=>common.toast
        }
    },
    replace:false,
    components: {
        Navbar,
        Aside,
        Toast
    },
    created(){
        this.userLogin()
    },
    ready(){
        if(!!this.userInfo.uid){
            this.isShowFooter =false;
        }
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
