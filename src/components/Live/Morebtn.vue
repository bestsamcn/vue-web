<style src="../../assets/css/live/morebtn.css"></style>
<template>
	<div class="more-video">
	    <a @click="getMore">加载更多</a>
	</div>
</template>
<script>
	export default{
        props:{
            currentPage:{
            	type:Number,
            	default:1
            }
        },
        methods:{
        	getMore(){
        		this.currentPage++
        	}
        }
	}
</script>

