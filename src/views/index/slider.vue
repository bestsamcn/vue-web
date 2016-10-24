<template>
	<div class="owl-carousel" id="owlcarousel">
        <div class="item">
        	<img src="http://www.3wycmedia.com/VideoProject/files/banner/1ha9okmduj1r.jpg" alt="">
        </div>
        <div class="item">
        	<img src="http://www.3wycmedia.com/VideoProject/files/banner/1ha9okmduj1r.jpg" alt="">
        </div>
        <div class="item">
        	<img src="http://www.3wycmedia.com/VideoProject/files/banner/1ha9okmduj1r.jpg" alt="">
        </div>
	</div>
</template>
<script>
    import '../../../node_modules/owlcarousel/owl-carousel/owl.carousel.css'
    import '../../../node_modules/owlcarousel/owl-carousel/owl.carousel.min.js'
	export default{
		el(){
			return '#owlcarousel'
		},
        components:{
        },
        methods:{
        	owlCarousel(){
                $('#owlcarousel').owlCarousel({
                    loop: true,
                    margin: 10,
                    autoplay:true,
                    items: 1,
                    smartSpeed: 600
                });
        	}
        },
        ready(){
        	this.owlCarousel()
        }
	}
</script>
<style>
	.owl-carousel{
		width:100%;
		/*max-height:250px;*/
	}
	.owl-carousel img{
		width:100%;
	}
</style>