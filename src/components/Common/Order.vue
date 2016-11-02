<style src="../../assets/css/common/order.css"></style>
<template>
	<div class="order-list" >
		<div class="wrapper">
		    排序：
		    <label @click="setLatest()"><input type="radio" style="display:none" checked name="order"><span>最新<i class="fa fa-long-arrow-up"></i></span></label>
		    <label @click="setHotest()"><input type="radio" style="display:none" name="order"><span>最热<i class="fa fa-long-arrow-up"></i></span></label>
		</div>
	</div>
</template>
<script>
	export default{
		name:'order',
		methods:{
			setLatest(){
				if(!this.$parent.videoParams) return
				this.$parent.videoParams.createdat = 1
				this.$parent.videoParams.watchnum = null
			},
			setHotest(){
				if(!this.$parent.videoParams) return
				this.$parent.videoParams.createdat = null
				this.$parent.videoParams.watchnum = 1
			}
		}
	}
</script>