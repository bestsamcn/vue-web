<style src="../../assets/css/live/countdown.css"></style>
<template>
	<div class="count-down">
		<div id="hidden-box" v-show="false"></div>
        <div class="show-time">
        	<span>{{days}}</span>天<span>{{hours}}</span>时<span>{{minutes}}</span>分<span>{{seconds}}</span>秒
        </div>
	</div>
</template>
<script>
	export default{
		props:{
			temptime:{
				type:Number,
				default:0
			}
		},
		data(){
			return {
				days:0,
				hours:0,
				minutes:0,
				seconds:0
			}
		},
		methods:{
			countDown(){
				if(this.temptime < 1) return;
                let aftertime = this.temptime + (new Date()).getTime()             
				let that = this
				this.$nextTick(()=>{
					$('#hidden-box').countdown({
						timestamp:aftertime,
						callback:(days, hours, minutes, seconds)=>{
	                        that.days = days
	                        that.hours = hours
	                        that.minutes = minutes
	                        that.seconds = seconds
						}
					})
				})
				
			}
		},
		watch:{
			temptime:'countDown'
		}
	}
</script>
