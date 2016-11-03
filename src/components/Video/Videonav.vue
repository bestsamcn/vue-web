<style src="../../assets/css/video/videonav.css" scoped></style>
<template>
	<div class="video-nav" v-if="!!headerData.pName || !!headerData.cName">
		<h3 class="pos-title">
			MEDIA
			<span class="pos-arrow">&gt;</span>
			<a v-link="{path:'/video/videodetail'}">点播</a>
			<span class="pos-arrow" v-if="!!headerData.pName">&gt;</span>
			<a href="javascript:;" v-if="!!headerData.pName">{{headerData.pName}}</a>
			<span class="pos-arrow" v-if="!!headerData.cName">&gt;</span>
			<a href="javascript:;" v-if="!!headerData.cName">{{headerData.cName}}</a>
		</h3>
	</div>
</template>
<script>
	export default{
		props:['headerData']
	}
</script>