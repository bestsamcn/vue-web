<style src="../../assets/css/shop/count.css" scoped></style>
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
    import {delItem} from '../../vuex/actions.js'
	export default{
        name:'count',
        vuex:{
        	getters:{
        		iphone:({shop})=>{
        			return shop.carts
        		}
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
