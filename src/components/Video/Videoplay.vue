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
        props:['videoInfo'],
        methods:{
        	setPlayer(){
        		var video = new tvp.VideoInfo();
				video.setVid(this.videoInfo.vodcode);
				var player = new tvp.Player();
				player.create({
				    video: video,
                    modId: 'player-modal',
                    isHtml5ShowPlayBtnOnPause: true,
                    flashWmode: 'transparent',
                    onfullscreen: onfullscreen
				});
				function onfullscreen(isFullScreen) {
                    if (!$$.isMobile()) return;
                    var oVideo = $$.getId('mod_tenvideo_video_player_0');
                    var docElm = document.documentElement;
                    var cssString = 'left: 0px;top: 0px;width: 100%;height: 100%;z-index: 1000;position: fixed !important;';
                    if (!isFullScreen) {
                        oVideo.style.cssText = '';
                        document.webkitCancelFullScreen && document.webkitCancelFullScreen();
                    } else {
                        docElm.webkitRequestFullScreen && docElm.webkitRequestFullScreen();
                        oVideo.style.cssText = cssString;
                    }
                }
        	}
        },
        watch:{
        	'videoInfo.vodcode':'setPlayer'
        }

	}
</script>