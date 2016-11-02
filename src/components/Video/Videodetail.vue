<style src="../../assets/css/video/videodetail.css" scoped></style>
<template>
	<div class="router-view video-detail" transition="outLeftInRight">
	    <div class="wrapper">
	    	<Videoheader></Videoheader>	
	    </div>
	</div>
</template>
<script>
    import Videoheader from './Videoheader.vue'
	export default{
		name:'videodetail',
		components:{
            Videoheader
		}

	}
</script>