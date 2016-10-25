<style lang="styl" src="../assets/styl/main/styl-main.styl"></style>
<style lang="styl" src="../assets/styl/main/nav.styl"></style>
<style scoped>
	.nav{
		width:100%;
		height:40px;
		position: fixed;
		left:0;
		top:0;
		z-index:1000;
		background:#f1f1f1;
		box-shadow: 0 1px 3px rgba(0,0,0,0.3)
	}
	.nav a{
		width:40px;
		display: inline-block;
		height:40px;
		text-align: center;
		line-height: 40px;
		color:#333;
		position: relative;
	}
	.nav a:before{
		line-height: 43px;
	}
    .nav a.right-btn{
    	float: right;
    }
    .nav span.header-tit{
    	position: absolute;
    	left:50%;
    	width:150px;
    	height: 40px;
    	line-height: 40px;
    	text-align:center;
    	margin-left:-75px;
    	top:0;
    }
	.nav a i{
		background:red;
		border-radius: 50%;
		height:20px;
	    width:20px;
	    line-height: 20px;
	    display: inline-block;
        color:#fff;
        font-style: normal
	}
	.active {
	  background: #0090ff;
	  color:#fff !important;
	}
</style>
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
    import { setAside } from '../vuex/actions.js'
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
