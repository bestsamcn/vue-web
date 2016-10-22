<template>
	<div class="nav">
		<a v-link="{path:'/hello'}">首页</a>
		<a v-link="{path:'/cart'}">商品</a>
		<a v-link="{path:'/count'}">购物车<i>{{cartsAmout}}</i></a>
	</div>
</template>
<script>
	export default{
        name:'nav',
        data(){
        	return{
        		sum:0
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
        }
	}
</script>
<style scoped>
	.nav{
		width:100%;
		height:40px;
		position: fixed;
		left:0;
		top:0;
		z-index:1000;
		display: -webkit-flex;
		background:#f1f1f1;
		align-items: center;
		justify-content: center;
		box-shadow: 0 1px 3px rgba(0,0,0,0.3)
	}
	.nav a{
		width:33%;
		display: block;
		height:40px;
		text-align: center;
		line-height: 40px;
		color:#333;
		position: relative;
		display: -webkit-flex;
		align-items: center;
		justify-content: center;
	}
	.nav a:nth-of-type(2){
		width:34%;
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