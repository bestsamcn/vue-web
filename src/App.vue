<template>
    <div class="index-content">
        <m-nav></m-nav>
        <div class="full-view">
            <router-view></router-view>
        </div>
        <m-footer v-if="isShowFooter"></m-footer>
        <sign-out v-if="!isShowFooter"></sign-out>
    </div>
</template>

<script>
import mNav from './include/nav.vue'
import store from './vuex/store.js'
import mFooter from './include/footer.vue'
import signOut from './views/sign/SignOut.vue'
import {userLogin} from './vuex/actions.js'

import 'reset.css'
import 'animate.css'
import './assets/css/base.css'

//store必须依赖data，否则无法注入根组件
export default {
    name:'App',
    store,
    data(){
        return{
            // isShowFooter:true
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
        mFooter,
        signOut
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
            if(!!this.userInfo.uid){
                b = false; 
            }
            return b
        }
    }
}
</script>

<style>
    .index-content{
        width:100%;
        height:100%;
    }
    
</style>