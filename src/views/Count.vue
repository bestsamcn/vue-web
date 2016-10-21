<template>
	<div class="router-view" transition="outLeftInRight">
	    <div class="count">
			<div class="c-header">
				<span class="c-tit">购物车</span>
				<span class="c-sum">总计：{{ totalPrize }}</span>
			</div>
			<div class="c-cont">
				<ul>
					<li v-for="item in iphone">
					    <div class="left">
					    	<a href="javascript:;" class="i-del" @click="delItem(item)">删除</a>
							<span class="i-name"> Apple/苹果 iPhone6s</span>
							<span class="i-type">{{item.style}}，{{item.storage}}</span>
							<span class="i-num">{{item.count}}</span>
					    </div>
						<div class="right">
							<span>{{item.prize}}</span>
						</div>
					</li>
				</ul>
			</div>
			<div class="count-it">
				<a href="javascript:;">结算</a>
			</div>
		</div>
	</div>
</template>
<script>
    import {delItem} from '../vuex/actions.js'
	export default{
        name:'count',
        vuex:{
        	getters:{
        		iphone:({index})=>index.carts
        	},
        	actions:{
        		delItem
        	}
        },
        computed:{
	      'totalPrize': function() {
	      	//this指向当前组件
	        let totalPrize = 0
	        for (let i in this.iphone) {
	          totalPrize += this.iphone[i].prize ;
	        }
	        return totalPrize
	      }
	    }
	}
</script>
<style scoped>
	.count{
		margin:0 auto;
        margin-bottom: 20px;
        width:100%;
        margin-top:20px;
	    background-color: #fff;
	    border: 1px solid transparent;
	    border-radius: 4px;
	    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
	    box-shadow: 0 1px 1px rgba(0,0,0,.05);
	    border-color: #ebccd1;
	}
	.count .c-header{
		height: 40px;
		width:100%;
		display: -webkit-flex;
		padding:0 10px;
		justify-content:space-between;
		align-items:center;
		color: #a94442;
	    background-color: #f2dede;
	    border-color: #ebccd1;
		width:100%;
	}
	.count .c-header span{
		display: block;
		padding:0 0;
	}
	.count .c-cont{

	}
	.count .c-cont ul{
		padding:10px;
	}
	.count .c-cont ul li{
		margin-top:10px;
		align-items: center;
		display: -webkit-flex;
		justify-content: space-between;
	}
	.count .c-cont ul li .i-type{
		background:green;
		padding:2px 4px;
		border-radius: 2px;
		color:#fff;
	}
	.count .c-cont ul li .i-num{
		background:red;
		border-radius: 50%;
		color:#fff;
		width:20px;
		height:20px;
		font-size: 12px;
		display:  inline-block;
		line-height: 20px;
		text-align:center;
	}
	.count .count-it{
		margin-top:20px;
	}
	.count .count-it a{
		width: 100%;
		height:40px;
		text-align: center;
		line-height: 40px;
		display: block;
		color:#fff;
		background:red;
	}
</style>