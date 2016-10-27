<style lang="styl" src="../../assets/styl/main/styl-main.styl"></style>
<style lang="styl" src="../../assets/styl/main/nav.styl"></style>
<style src="../../assets/css/common/navbar.css" scoped></style>
<template>
	<div class="nav">
		<!-- <a v-link="{path:'/index'}">首页</a>
		<a v-link="{path:'/cart'}">商品</a>
		<a v-link="{path:'/count'}">购物车<i>{{cartsAmout}}</i></a> -->
		<a href="javascript:;" @click="toggleAside()" class="icon fa fa-navicon fa-lg left-btn"></a>
		<span class="header-tit">首页</span>
		<a href="javascript:;" class="icon fa fa-user-circle-o fa-lg right-btn"></a>
	</div>
</template>
<script>
    import { setAside } from '../../vuex/actions.js'
	export default{
        name:'nav',
        data(){
        	return{
        		sum:0
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
        		carts:({index})=>index.carts
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
        	}
        }
	}
</script>
