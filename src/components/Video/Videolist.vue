<style src="../../assets/css/video/videolist.css" scoped></style>
<template>
	<div class="video-list" v-if="!!videoList.length">
		<a class="list-item" v-for="item in videoList" v-link="{path:`/video/videodetail/${item.id}`}">
			<div class="bg-box item-img" v-lazy:background-image="POSTER_URL+item.listimg"></div>
			<div class="item-cont">
				<p class="cont-tit">{{item.title}}</p>
				<hr>
				<div class="cont-other">
				    <span class="other-time">{{item.hostpeople}}</span>
					<span class="other-time">{{item.templivetime}}</span>
				</div>
			</div>
		</a>
	</div>
</template>
<script>
    import { POSTER_URL } from '../../api/config.js'
	export default{
		name:'videolist',
        props:['videoList'],
        data(){
        	return {
        		POSTER_URL:POSTER_URL
        	}
        }
	}
</script>