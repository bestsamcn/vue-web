<style src="../../assets/css/home/hometitle.css" scoped=""></style>
<template>
	<div class="home-caption" v-if="!!caption.length">
		<div class="main">{{caption}}</div>
	</div>
</template>
<script>
	export default{
		name:'hometitle',
		props:['caption']
	}
</script>