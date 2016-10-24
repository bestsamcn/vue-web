<style scoped>
	.cart{
        width:100%;
        display: -webkit-flex;
        align-items: center;
		justify-content: center;
	}
	.cart .product-pic{
		width:50%;
		display: -webkit-flex;
		align-items: center;
		justify-content: center;
	}
	.cart .product-pic img{
		width:60%;
		display: block;
		margin:0 auto;
	}
	.cart .product-detail{
		width:50%;
		align-items: center;
		justify-content: center;
	}
	.cart .product-detail .d-name{
		text-align: left;
		line-height: 60px;
		font-size: 20px;
		color:#333;
		border-bottom:1px solid #999;
	}
	.cart .product-detail .d-descript{
		margin-top:20px;
		position: relative;
	}
	.cart .product-detail .d-descript .d-tit{
		color:#0090ff;
		font-size: 14px;
		text-align: left;
		position: absolute;
		left:0;
		top:0;
	}
	.cart .product-detail .d-descript .d-cont{
		padding-left:100px;
	}
	.cart .product-detail .d-descript .d-cont .intro{
		line-height: 18px;
		font-size: 14px; 
	}
	.cart .product-detail .d-descript .d-cont .prize{
		color:#f54f4f;
	}
	.cart .product-detail .d-descript .d-cont .color{
		padding:6px 14px;
		display: inline-block;
		font-size: 12px;
		margin-top:10px;
		margin:10px 5px;
		border:1px solid #999;
	}
	.cart .product-detail .d-descript .d-cont .color.active{
		border:1px solid red;

	}
	.cart .product-detail .d-descript .d-cont .rom{
		padding:6px 14px;
		display: inline-block;
		font-size: 12px;
		margin-top:10px;
		margin:10px 5px;
		border:1px solid #999;
	}
	.cart .product-detail .d-descript .d-cont .rom.active{
		border:1px solid red;
	}
	.cart .product-detail  .get-it{
        width:100%;
        margin-top: 20px;
	}
	.cart .product-detail .get-it a{
	    height:40px;
	    width:60%;
        line-height: 40px;
        text-align: center;
        color:#fff;
        background: #ccc;
        display: block;	
	}
	.cart .product-detail .get-it a.active{
		background:#0090ff;
	}
	.rom.active,.color.active{
		border:1px solid red;
	}
	@media screen and (max-width: 768px){
		.cart {
			display: block;
			text-align: center;
		}
		.cart .product-detail,.cart .product-pic{
			display: block;
			width:100%;
			margin:0 auto;
		}
	}
</style>
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
			</div>
		</div>
		
	</div>
</template>
<script>
    import {changePrize,changeStyle,addItem} from '../vuex/actions.js'

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
                iphone6s:({index})=>{
                	console.log(index.iphone6s);
                	return index.iphone6s;
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
