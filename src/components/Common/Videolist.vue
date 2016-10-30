<style src="../../assets/css/common/videolist.css"></style>
<template>
	<div class="video-list" v-if="!!videoList.length">
		<div class="list-item" v-for="item in videoList">
			<img class="item-img" :src="POSTER_URL+item.listimg" alt="">
			<div class="item-cont">
				<p class="cont-tit">{{item.title}}</p>
				<div class="cont-other">
					<span class="other-time">{{item.templivetime}}</span>
					<a class="other-status" :class="{'book': item.vodstatus=== 1, 'live':item.vodstatus ===2, 'over':item.vodstatus === 3}">{{item.vodstatus | videoStatus}}</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
    import { POSTER_URL } from '../../api/config.js'
	export default{
        props:['videoList'],
        data(){
        	return {
        		POSTER_URL:POSTER_URL
        	}
        }
	}
</script>