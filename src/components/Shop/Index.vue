<style src="../../assets/css/shop/cart.css" scoped></style>
<template>
	<div class="router-view cart" transition="outLeftInRight">
		<div class="product-pic">
			<img :src="'../assets/img/'+iphone6s.activeStyleUrl" alt="">
		</div>
		<div class="product-detail">
			<h4 class="d-name">{{iphone6s.name}}</h4>
			<div class="d-descript">
				<span class="d-tit">
					描述：
				</span>
				<div class="d-cont">
					<p class="intro">{{iphone6s.desc}}</p>
				</div>
			</div>
			<div class="d-descript">
				<span class="d-tit">
					价格：
				</span>
				<div class="d-cont">
					<b class="prize">￥{{iphone6s.prize}}</b>
				</div>
			</div>
			<div class="d-descript">
				<span class="d-tit">
					外观：
				</span>
				<div class="d-cont">
				    <a href="javascript:;" v-for="styleUrl in iphone6s.style" @click="changeStyle($key,styleUrl)" class="color" :class="styleUrl === iphone6s.activeStyleUrl ? 'active' : ''">{{$key}}</a>
				</div>
			</div>
			<div class="d-descript">
				<span class="d-tit">
					存储容量:
				</span>
				<div class="d-cont">
				    <a href="javascript:;" v-for="prize in iphone6s.storage" @click="changePrize($key,prize)" class="rom" :class="prize === iphone6s.prize ? 'active' : ''">{{$key}}</a>
				</div>
			</div>
			<div class="get-it">
				<a href="javascript:;" :class="{active:iphone6s.isSelected}" @click="iphone6s.isSelected ? addItem() :''" >加入购物车</a>
				<a v-link="{path:'/shop/count'}" class="my-cart">我的购物车</a>
			</div>
		</div>
		
	</div>
</template>
<script>
    import {changePrize,changeStyle,addItem} from '../../vuex/actions.js'
	export default{
        name:'cart',
        data(){
        	return{
        		activeStyle:'',
        		prize:'',
        		storage:''
        	}
        },
        vuex:{
        	getters:{
                iphone6s:({shop})=>{
                	return shop.iphone6s;
                }
        	},
        	actions:{
        		changeStyle,
        		changePrize,
        		addItem
        	}
        }
	}
</script>
