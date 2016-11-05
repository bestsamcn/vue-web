<style src="../../assets/css/video/videodiscuss.css"></style>
<template>
	<div class="video-discuss">
		<div class="wrapper">
			<div class="cm-form">
		        <div class="row">
		            <div class="user-img">
			    	    <img src="../../assets/img/user-nologin.png" class="cm-img" id="cm-user-img">
		            </div>
		            <div class="col-xs-12 col-sm-12 cm-text">
		            	<textarea rows="3" id="cm-text" placeholder="我的评论"></textarea>
		            </div>
				</div>
				<button class="cm-btn" :class="{}">评论</button>
		    </div>
		    <div class="comment-list">
				<div class="comment-item" v-for="item  in discussList">
				    <div class="row item-wrap">
				        <input type="hidden" name="cid" v-model="item.id">
				        <input type="hidden" name="uid" v-model="item.pid">
				    	<div class="cm-img">
					        <a href="javascript:;">

						       <img :src="item.user.headimg ? IMG_URL+item.user.headimg : '../../assets/img/user-nologin.png'">
						    </a>
					    </div>
						<div class="col-xs-12 col-sm-12 cm-cont">
							<h4 class="cm-name">
								<b>{{item.user.account}}</b>
								<span class="cm-time">{{item.createdat | dateDesc}}</span>
							</h4>
							<!-- 引入的评论 -->
							
							<div class="col-xs-12 col-sm-12 cm-cont inside" v-if="!!item.parentDiscuss">
								<h4 class="cm-name">
									引用 @{{item.parentDiscuss.user.account}} ：
								</h4>
								<p class="cm-text">{{item.parentDiscuss.content}}</p>
							</div>
							
							<p class="cm-text">{{item.content}}</p>
						</div>
				    </div>
					<div class="cm-others">
						<a href="javascript:;" class="cm-good">点赞（<b>0</b>）</a>
						<span>|</span>
						<a href="javascript:;" class="cm-reply">回复</a>
					</div>
				</div>
				<Morebtn v-show="isMoreDiscussList" :current-page="1"></Morebtn>

		    </div>
		</div>
	</div>
</template>
<script>
    import Morebtn from '../common/Morebtn.vue'
    import { IMG_URL } from '../../api/config.js'
	export default{
		name:'videodiscuss',
		props:['discussList','isMoreDiscussList'],
		components:{
			Morebtn
		},
		data(){
            return{
                IMG_URL:IMG_URL
            }
		}
	}
</script>