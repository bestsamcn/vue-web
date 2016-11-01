<style src="../../assets/css/home/guesslike.css"></style>
<template>
	<div class="guess-like" v-if="!!guessLikeList.length">
		<ul class="list">
			<li class="item" v-for="item in guessLikeList "  track-by="$index">
			    <div class="bg-box" v-lazy:background-image="POSTER_URL+item.listimg"></div>
				<!-- <img class="fade-img" v-lazy.container="POSTER_URL+item.listimg" alt="{{item.title}}"> -->
				<h5>{{item.title}}</h5>
			</li>
		</ul>
	</div>
</template>
<script>
    import { POSTER_URL } from '../../api/config.js'
	export default{
		name:'guesslike',
		props:['guessLikeList'],
		data(){
			return{
				POSTER_URL:POSTER_URL
			}
		}
	}
</script>