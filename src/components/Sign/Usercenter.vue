<style src="../../assets/css/sign/usercenter.css" scoped></style>
<style src="../../assets/css/common/jcrop.css" ></style>
<style>
	.modal-content{
		margin-top:100px;
	}
</style>
<template>
	<div class="router-view user-center" transition="outLeftInRight">
		<div class="wrapper">
			<h4>用户名：{{userInfo.account}}</h4>
			<div class="user-img">
			    <label>
					<img   :src="userImg || (userInfo.headimg ? IMG_URL+userInfo.headimg : '../../assets/img/user-nologin.png')">
					<input type="file" style="display:none" @change="fileChange($event)">
				</label>
			</div>
		</div>
		<modal title="剪切图片" cancel-text="关闭" ok-text="确定" :closeCallback="close" effect="fade" :callback="tellSelected" small :show.sync="showModel">
		  	<div slot="modal-body" class="modal-body">
		  		<img v-if="!!userImgData" :src="userImgData" id="preview-img">
		  	</div>
		</modal>
	</div>
</template>
<script>
    import { setToast } from '../../vuex/actions.js'
    import { IMG_URL } from '../../api/config.js'
    import { modal } from 'vue-strap'
	export default{
		name:'usercenter',
		data(){
			return {
				userImg:'',
				userImgData:'',
				IMG_URL:IMG_URL,
				showModel:false,
				jcropApi:null,
				coords:null
			}
		},
		components:{
			modal
		},
		vuex:{
			getters:{
				userToken:({ sign })=>sign.userToken,
				userInfo:({ sign })=>sign.userInfo
			},
			actions:{
				setToast
			}
		},
		route:{
			data(transition){
				if(!this.userToken){
					this.$route.router.go({name:'home'})
					return
				}
			}
		},
		methods:{
			getDataUrl(file){
				let that = this
				let filelll=file
				let promise = new Promise((resolve,reject)=>{
					let reader = new FileReader()
					reader.readAsDataURL(filelll)
					var that = this
					let str = null
		            reader.onload = (e)=>{
		            	str = e.target.result
		            	if(str){
		               		resolve(str)
		            	}
		            }
		            reader.onerror=(e)=>{
		            	reject(e)
		            }
				})
				return promise
			},
			fileChange($event){
				var file = null
				file = $event.srcElement.files[0]
				if(!/image\/\w+/.test(file.type)){ 
					this.setToast("请确保文件为图像类型"); 
					return false; 
				}
				let that = this
				this.getDataUrl(file).then(res=>{
		            that.userImgData = res
					this.showModel = true
					$('#preview-img').attr('src',res)
					this.setCrop()
				}).catch(e=>{
					console.log(e)
				})
			},
			setCrop(){
				let previewImg = $('#preview-img')
				let that = this
				previewImg.Jcrop({
		    		aspectRatio:1,
		    		setSelect:[0,0,100,100],
		    		boxWidth:300,
		    		touchSupport:true
		    	},function(){
                    that.jcropApi = this
		    	})
			},
			tellSelected(){
				this.coords = this.jcropApi.tellSelect();
				console.log(this.coords)
				setTimeout(()=>{
                	this.userImgData = ''
				},500)
			},
			close(){
				alert()
			}

		}
	}
</script>