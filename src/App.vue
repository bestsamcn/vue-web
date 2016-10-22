<template>
    <div class="index-content">
        <m-nav></m-nav>
        <div class="full-view">
            <router-view></router-view>
        </div>
        <m-footer v-if="isShowFooter"></m-footer>
    </div>
</template>

<script>
import mNav from './include/nav.vue'
import store from './vuex/store.js'
import mFooter from './include/footer.vue'

import 'reset.css'
import 'animate.css'
import './assets/css/base.css'

//store必须依赖data，否则无法注入根组件
export default {
    name:'App',
    store,
    data(){
        return{
            isShowFooter:true
        }
    },
    replace:false,
    components: {
        mNav,
        mFooter
    },
    create(){
        if(!!this.$store.store.sign.userInfo){
            this.isShowFooter = false;
            console.log(this.$store.store)
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