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
					<img   :src="imgBaseData || (userInfo.headimg ? IMG_URL+userInfo.headimg : '../../assets/img/user-nologin.png')">
					<input type="file" style="display:none" @change="fileChange($event)">
				</label>
			</div>
		</div>
		<Modal title="剪切图片" cancel-text="关闭" ok-text="确定" :no-callback="close" effect="fade" :ok-callback="getCorpImg" small :show.sync="showModal">
		  	<div slot="modal-body" class="modal-body" id="preview-img">
		  		<img v-if="!!imgCropData" :src="imgCropData" >
		  	</div>
		</Modal>
	</div>
</template>
<script>
    import { setToast } from '../../vuex/actions.js'
    import { IMG_URL } from '../../api/config.js'
    import Modal from '../common/Modal'
	export default{
		name:'usercenter',
		data(){
			return {
				//最终发给服务器的数据,记住只要第一个逗号后面的字符串
				imgBaseData:'',
				//临时作为剪切用的数据
				imgCropData:'',
				IMG_URL:IMG_URL,
				showModal:false,
				jcropApi:null,
				//截取后的坐标，用来canvas剪切用
				coords:null
			}
		},
		components:{
			Modal
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
			//返回base64编码
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
			//选择图片
			fileChange($event){
				let file = $event.srcElement.files[0]
				if(!/image\/\w+/.test(file.type)){ 
					this.setToast("请确保文件为图像类型"); 
					return false; 
				}
				let that = this
				that.imgCropData = null
				this.getDataUrl(file).then(res=>{
		            that.imgCropData = res
					this.showModal = true
				}).catch(e=>{
					console.log(e)
				})
			},
			//设置剪切
			setCropImg(){
				if(!this.imgCropData) return 
				let previewImg = $('#preview-img').find('img')
				let that = this
				previewImg.Jcrop({
		    		aspectRatio:1,
		    		setSelect:[0,0,100,100],
		    		boxWidth:300,
		    		touchSupport:true
		    	},function(){
                    that.jcropApi = this
		    	})
		    	this.jcropApi.enable()
			},
			getCorpImg(){
				//获取剪切坐标
				this.coords = this.jcropApi.tellSelect();

				//剪切开始
				let image = new Image()
				image.src = this.imgCropData
				let canvas = $('<canvas width="'+this.coords.w+'" height="'+this.coords.h+'"></canvas>')[0]
				let ctx=canvas.getContext('2d')
				ctx.drawImage(image,this.coords.x,this.coords.y,this.coords.w,this.coords.h,0,0,this.coords.w,this.coords.h)
				this.imgBaseData = canvas.toDataURL()

				//剪切成功后imgCropData作为临时数据清空，收起modal，清除jcrop
				setTimeout(()=>{
                	this.imgCropData = ''
                	this.showModal = false
				    this.jcropApi.destroy()
				},500)
			},
			close(){
                this.imgCropData = ''
                this.jcropApi.destroy()
			}

		},
		watch:{
			imgCropData:'setCropImg'
		}
	}
</script>