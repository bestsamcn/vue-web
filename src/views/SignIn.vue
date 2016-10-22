<template>
	<div class="router-view">
		<toast :toast-show.sync="toast.toastShow" :toast-text="toast.toastText"></toast>
	    
		<div class="form">
		    <validator name="signinForm">
		    <form novalidate>
			    <h4>signIn</h4>
				<ul>
					<li>
					    <input type="password" style="position:absolute;top:-100000px;"/>
						<input type="text" @invalid="nameInvalid($event)" initial="off" v-model="user.account" detect-change="off" v-validate:username="{username:true}" placeholder="username">
					</li>
					<li>
					    <input type="password" style="position:absolute;top:-100000px;"/>
						<input type="password" @invalid="pswdInvalid($event)" v-model="user.password" placeholder="password"  initial="off" detect-change="off" v-validate:password="{password:true}">
					</li>
					<li>
						<a href="javascript:;" :class="{'active':!$signinForm.invalid}" @click="signIn($signinForm)">signIn</a>
					</li>
				</ul>
				<p class="to-signup">
				   <a v-link="{path:'/sign/signUp'}">to signUp?</a>
				</p>
			</form>
			</validator>
		</div>
	   
	</div>
</template>
<script>
    import validator from '../validations/validate.js' 
    import Toast from '../components/toast.vue'
    import { userLogin } from '../vuex/actions.js'

	export default {
		name:'signin',
		components:{
			Toast
		},
		data(){
			return {
				user:{
                    account:'',
                    password:''
				},
				toast:{
                    toastShow:false,
                    toastText:'输入出错'
				}
			}
		},
		vuex:{
			actions:{
				userLogin
			},
			getters:{
				userInfo:({sign})=>{
					console.log(sign.userInfo)
					return sign.userInfo
				}
			}
		},
		methods:{
            nameInvalid(e){
            	this.toast.toastText='用户名错误',
            	this.toast.toastShow=true;
            },
            pswdInvalid(e){
            	this.toast.toastText='密码错误',
            	this.toast.toastShow=true
            },
            signIn(e){
            	console.log(this.userInfo)
                var that = this;
            	if(!that.$signinForm.dirty) return;
            	if(!that.$signinForm.invalid){
            		that.$http({
            			url:'http://10.28.10.14:8081/VideoProject/pipes/v1/user/login',
            			method:'post',
            			emulateJSON:true,
            			body:that.user,
            			credentials:true
            		}).then(function(res){
            			if(!res.ok || res.body.retCode !== 0) {
            				that.toast.toastText='登录失败';
            				that.toast.toastShow = true;
            				return;
            			}
            			that.userLogin(res.body.data);
            			that.$route.router.go({path:'/'})
            		},function(res){
            			that.toast.toastText='登录失败';
            			that.toast.toastShow = true;
            		})
            	}
            }
		},
		route: {
	    	activate:function (transition) {
	            this.userInfo.id ? transition.redirect('/') : transition.next()
    		}
    	}
	}
</script>
<style>
	.form{
		width:100%;
		font-size: 14px;
	}
	.form h4{
		text-align:center;
		line-height: 50px;
	}
	.form ul li{
		width:100%;
		margin-bottom: 10px;
	}
	.form ul li input{
		width:100%;
		border:none;
		box-shadow: none;
		border-bottom:1px solid #ddd;
		color:#333;
		height: 30px;
		outline: none;
		text-indent: 5px;
		background:none;
	}
	.form ul li a{
		display: block;
		width:100%;
		height:40px;
		line-height: 40px;
		text-align:center;
		background:#ddd;
		color:#fff;
	}
	.form ul li a.active{
		background:#0090ff;
	}
	.form .to-signup{
        text-align: center;
        margin-top:20px;
	}
	.form .to-signup a{
		color:#0090ff;
	}
</style>