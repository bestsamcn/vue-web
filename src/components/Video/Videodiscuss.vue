<style src="../../assets/css/video/videodiscuss.css"></style>
<template>
	<div class="video-discuss">
		<div class="wrapper">
			<div class="cm-form">
		        <div class="row">
		            <div class="user-img">
			    	    <img :src="userInfo.headimg ? IMG_URL+userInfo.headimg :'../../assets/img/user-nologin.png'" class="cm-img" id="cm-user-img">
		            </div>
		            <div class="col-xs-12 col-sm-12 cm-text">
		            	<textarea rows="3" :disabled="!userToken" placeholder="{{userToken ? '我的评论' : '请先登录'}}" v-model="discussContent.content"></textarea>
		            </div>
				</div>
				<button class="cm-btn" :disabled="!userToken" @click="pushVideoDiscuss()">评论</button>
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
						<a href="javascript:;" class="cm-good" @click="setGood(item.id)">点赞（<b>{{item.goodnum}}</b>）</a>
						<span>|</span>
						<a href="javascript:;" class="cm-reply" @click="setReply(item.id,item.user.account)">回复</a>
					</div>
				</div>
				<Morebtn v-show="isMoreDiscussList" :current-page.sync="discussListParams.page"></Morebtn>
		    </div>
		</div>
	</div>
</template>
<script>
    import Morebtn from '../common/Morebtn.vue'
    import { IMG_URL } from '../../api/config.js'
    import { getDiscussList, saveVideoDiscuss, setToast, saveVideoGood } from '../../vuex/actions.js'
	export default{
		name:'videodiscuss',
		props:['videoId','discussList','isMoreDiscussList','discussListParams'],
		components:{
			Morebtn
		},
		data(){
            return{
                IMG_URL:IMG_URL,
                isFetching:false,
                discussContent:{
                	livevodid:'',
                	pid:0,
                	content:''
                },
                tempName:''
            }
		},
		vuex:{
 			actions:{
                getDiscussList,
                saveVideoDiscuss,
                setToast,
                saveVideoGood
 			},
 			getters:{
 				userToken:({ sign })=>sign.userToken,
 				userInfo:({ sign })=>sign.userInfo
 			}
		},
		methods:{
			setVideoId(){
				console.log(this.videoId)
				if(!this.videoId) return
				this.discussContent.livevodid = this.videoId
			},
			getMoreDiscussList(){
 				if(this.discussListParams.page ===1) return
                this.isFetching = true
            	this.getDiscussList(this.discussListParams).then(res=>{
      				this.discussList =this.discussList.concat(res.rows) 
            		if(this.discussListParams.page * this.discussListParams.rows >= res.total){
            			this.isMorePlayList = false
                        this.isFetching = false
            		}
      			},res=>{
            		this.isMoreDiscussList = false
                    this.isFetching = false
      			}).catch(e=>{
            		this.isMoreDiscussList = false
                    this.isFetching = false
      			})
			},
            pushVideoDiscuss(){
            	if(this.discussContent.content === ''){
            		this.setToast('评论内容不能为空')
            		return
            	}
            	if(this.discussContent.livevodid === ''){
            		this.setToast('木有找到视频id')
            		return
            	}
            	if(this.discussContent.content.indexOf('@') !==-1){
            		this.discussContent.content.replace('@' + this.tempName + '：', '')
            	}
            	this.saveVideoDiscuss(this.discussContent).then(res=>{
            		let parentDiscuss = null
            		if(this.discussContent.pid !== 0){
            			for(let i =0 ; i<this.discussList.length ; i++){
            				if(this.discussList[i].pid = this.discussContent.pid){
            					parentDiscuss = this.discussList[i]
            				}
            			}
            		}
            		let content = this.discussContent.content
            		let createdat = new Date().getTime()
            		let that = this
                    //重新建立实体
            		let newDiscuss = {
            			id:res,
            			pid:that.discussContent.pid,
            			content:content,
            			createdat:createdat,
            			goodnum:0,
            			user:that.userInfo,
            			parentDiscuss:parentDiscuss
            		}
            		this.discussList.unshift(newDiscuss)
            		//还原默认参数
            		this.discussContent.pid=0
            		this.discussContent.content=''
            	},res=>{
            		this.setToast('评论失败')
            	}).catch(e=>{
            		this.setToast('异常')
            	})

            },
            setReply(parentid,name){
                this.discussContent.pid  = parentid
                this.discussContent.content = '@'+name+': '
                this.tempName = '@'+name+': '
            },
            setGood(discussid){
                if(!this.userToken){
                	this.setToast('请先登录')
                	return
                }
                if(!discussid){
                	this.setToast('木有找到评论id')
                	return
                }
                let cookieName = this.userToken+''+discussid
                if(this.$cookie.get(cookieName) === 'isSetGood'){
                	this.setToast('你已经点赞过了')
                	return
                }
                this.saveVideoGood({id:discussid,goodnum:1}).then(()=>{
                	for(let i = 0 ; i<this.discussList.length ; i++){
                		if(discussid === this.discussList[i].id){
                			this.discussList[i].goodnum=parseInt(this.discussList[i].goodnum)+1
                		}
                	}
                    this.$cookie.set(cookieName, 'isSetGood', 1);
                },()=>{
                	this.setToast('点赞失败')
                }).catch(e=>{
                	this.setToast('点赞失败')
                })
            }
		},
		watch:{
			'discussListParams.page':'getMoreDiscussList',
			'videoId':'setVideoId'
		}
	}
</script>