<style src="../../assets/css/video/videoscroll.css" scoped></style>
<template>
	<div class="video-scroll" v-if="!!playList.length" >
		<div class="wrapper iscroll-list" id="video-scroll">
			<ul>
				<li v-for="item in playList" class="video-item video-content" :class="{'active': videoId==item.id}">
					<div class="img-box">
						<a v-link="{path:`/video/videodetail?id=${item.id}`}">
							<img :src="POSTER_URL+item.listimg ? POSTER_URL+item.listimg : '../../assets/img/shipingbeijing.png'">
							<div class="img-back"></div>
							<h5 class="play">播放</h5>
							<span class="mark_custom">
								<span class="mark_inner">{{item.duration | formatTime}}</span>
							</span>
						</a>
					    <div class="mask">播放中...(^0^)</div>
					</div>
					<div class="item-info">
						<p class="name">{{item.title}}</p>
					</div>
				</li>
				
			</ul>
		</div>
	</div>
</template>
<script>
    import { POSTER_URL } from '../../api/config.js'
    import IScroll from '../../assets/js/iscroll.js'
    
	export default{
		name:'videoscroll',
		props:['playList','playListParams','isMorePlayList'],
		data(){
			return{
				POSTER_URL:POSTER_URL
			}
		},
        vuex:{
        	getters:{
        		videoId:({ route })=>route.params.id
        	}
        },
		methods:{
			setScroll(){
				this.$nextTick(()=>{
					let mPlayListVm = document.getElementById('video-scroll').getElementsByTagName('li')
	                let nodeLen = mPlayListVm.length;
	                var itemWidth = mPlayListVm[0].offsetWidth;
	                mPlayListVm[0].parentNode.style.width = ((itemWidth + 10) * nodeLen - 10)+'px';
					let myScroll = new IScroll('#video-scroll', {
	                    eventPassthrough: true,
	                    scrollX: true,
	                    scrollY: false,
	                    preventDefault: false
	                });
	                myScroll.on('scrollEnd',()=>{
	                	if(!this.isMorePlayList) return
	                	this.playListParams.page++
	                })
				})
			}
		},
		watch:{
			'playList':'setScroll'
		}
	}
</script>