<style src="../../assets/css/video/videointr.css"></style>
<template>
	<div class="video-intr">
	    <div class="wrapper">
			<h4 class="video-tit">视频介绍</h4>
			<div class="intr-cont">
				<p class="text-center">
				    <span v-show="!videoInfo.description">暂无描述</span>
					{{{videoInfo.description}}}
					<a href="javascript:;" v-show="!!videoInfo.description">
						[展开全部]
					</a>
				</p>
			</div>
			<div class="intr-img">
			    <img :src="POSTER_URL+'1hripmibssps.jpg'" class="outfit-img">
			    <img src="../../assets/img/video_detail_01.png" class="outfit-logo">
			</div>
	    </div>
	</div>
</template>
<script>
    import { POSTER_URL } from '../../api/config.js'
	export default{
		name:'videointr',
		props:['videoInfo'],
		data(){
			return {
				POSTER_URL:POSTER_URL
			}
		}
	}
</script>