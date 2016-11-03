<style src="./assets/css/common/app.css"></style>
<template>
<Loading :is-loading="isLoading"></Loading>
    <Toast :toast-show.sync="toast.isShow" :toast-text="toast.text"></Toast>
    <Navbar :is-show-aside.sync="isShowAside"></Navbar>
    <div class="index-content" :class="{'active':isShowAside}">
        <div class="full-view">
            <router-view keep-alive></router-view>
        </div>
    </div>
    <Aside :is-show-aside.sync="isShowAside" :is-login.sync="isShowFooter"></Aside>
    <Gotop :use-flag="routeChange"></Gotop>
</template>

<script>
//component
import Aside  from './components/common/Aside.vue'
import Navbar  from './components/common/Navbar.vue'
import Toast  from './components/common/Toast.vue'
import Loading  from './components/common/Loading.vue'
import Gotop  from './components/common/Gotop.vue'

//vuex
import store from './vuex/store.js'
import $$ from './utils/tools.js'
import { setUserBase, setUserInfo, userLogout, setLoading, getAllTagList, getCategoryList } from './vuex/actions.js'

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
            setUserBase,
            setUserInfo,
            userLogout,
            setLoading,
            getAllTagList,
            getCategoryList

        },
        getters:{
            userToken:({ sign })=>sign.userToken,
            userInfo:({ sign })=>sign.userInfo,
            toast:({ common })=>common.toast,
            isLoading:({ common })=>common.isLoading,
            allTagList:({ common })=>common.allTagList,
            categoryList:({ common })=>common.categoryList,
            routeChange:({ route })=>route.name
        }
    },
    replace:false,
    components: {
        Navbar,
        Aside,
        Toast,
        Loading,
        Gotop
    },

    created(){
        this.setUserBase().then(res=>{
            this.setUserInfo(res)
        },res=>{
            // this.userLogout()
        })
        this.$nextTick(()=>{
            if(this.allTagList.length<1){
                this.getAllTagList().catch(err=>{})
            }
            if(this.categoryList.length <1){
                this.getCategoryList().catch(err=>{})
            }
        })
    },
    computed:{
        isShowFooter(){
            let b = true;
            if(!this.userToken){
                b = false; 
            }
            return b
        }
    }
}
</script>
