<style src="../../assets/css/common/loading.css" scoped></style>
<template>
    <div class="loadMask" v-show="isLoading" transition="loadMask"></div>
	<div class="loadEffect" v-show="isLoading" transition="loadEffect">
	    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
	</div>
</template>
<script>
	export default{
		name:'loading',
		props:{
			isLoading:{
				type:Boolean,
				default:false
			}
		}
	}
</script>