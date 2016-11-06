<style lang="styl" src="../../assets/styl/main/styl-main.styl"></style>
<style lang="styl" src="../../assets/styl/main/nav.styl"></style>
<style src="../../assets/css/common/navbar.css" scoped></style>
<template>
	<div class="nav">
		<a href="javascript:;" @click="toggleAside()" class="icon fa fa-navicon fa-lg left-btn"></a>
		<span class="header-tit">{{title}}</span>
        <a @click="goUrl('signin')" v-if="!userToken" class="icon fa fa-user-circle-o fa-lg right-btn"></a>
		<a @click="goUrl('userinfo')" v-if="userToken" class="right-btn">
            <img :src="userInfo.headimg ? IMG_URL+userInfo.headimg :'../assets/img/user-nologin.png'" alt="avatar">      
        </a>
	</div>
</template>
<script>
    import { setAside } from '../../vuex/actions.js'
    import { IMG_URL } from '../../api/config.js'
	export default{
        name:'nav',
        data(){
        	return{
        		sum:0,
                IMG_URL:IMG_URL
        	}
        },
        props:{
        	isShowAside:{
        		type:Boolean,
        		default:false
        	}
        },
        vuex:{
        	getters:{
        		carts:({ index })=>index.carts,
                userInfo:({ sign })=>sign.userInfo,
                userToken:({ sign })=>sign.userToken,
                title:({ route })=>route.title
        	}
        },
        computed:{
        	cartsAmout(){
        		let cartsAmout = 0 ;
        		for(let i =0 ;i<this.carts.length; i++){
                    cartsAmout += this.carts[i].count
        		}
        		return cartsAmout
        	}
        },
        methods:{
        	toggleAside(){
        		this.isShowAside = true;
        	},
            goUrl(name){
                this.$route.router.go({
                    name:name
                })
                this.isShowAside = false
            }
        }
	}
</script>
