<style src="../../assets/css/video/videoplay.css" scoped></style>
<template>
	<div class="video-play">
		<h4>{{videoInfo.title}}</h4>
		<div class="full-screen">
			<div id="player-modal">
				<!-- 播放容器 -->
			</div>
		</div>
	</div>
</template>
<script>
	export default{
        name:'videoplay',
        props:['videoInfo']

	}
</script>