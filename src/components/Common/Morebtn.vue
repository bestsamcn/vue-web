<style src="../../assets/css/common/morebtn.css"></style>
<template>
	<div class="more-video">
	    <a @click="getMore">加载更多</a>
	</div>
</template>
<script>
	export default{
        name:'morebtn',
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

