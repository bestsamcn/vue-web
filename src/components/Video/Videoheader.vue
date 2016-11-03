<style src="../../assets/css/video/videoheader.css" scoped></style>
<template>
	<div class="video-header" v-if="!!headerData">
		<h1>{{headerData.cName ? headerData.cName : (headerData.pName ? headerData.pName : '分类')}}</h1>
		<p>（共{{headerData.playListTotal}}集）</p>
		<a href="javascript:;" @click="goBack()" class="back">返回</a>
	</div>
</template>
<script>
	export default{
		name:'videoheader',
		props:['headerData'],
		methods:{
			goBack(){
				this.$parent.goBack()
			}
		}
	}

</script>