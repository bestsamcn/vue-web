<style src="../../assets/css/sign/signin.css"></style>
<template>
	<div class="router-view">
		<div class="form">
		    <validator name="signinForm">
		    <form novalidate>
			    <h4>登录</h4>
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
				   <a v-link="{path:'/sign/signup'}">去注册?</a>
				</p>
			</form>
			</validator>
		</div>
	   
	</div>
</template>
<script>
    import { IMG_URL,ROOT_API } from '../../api/config.js'
    import validator from '../../utils/validate.js' 
    import { userLogin, setUserBase, setUserInfo, setToast, setAsideState } from '../../vuex/actions.js'

	export default {
		name:'signin',
		components:{
		},
		data(){
			return {
				user:{
                    account:'',
                    password:''
				}
			}
		},
		vuex:{
			actions:{
				userLogin,
				setUserBase,
				setUserInfo,
                setToast,
                setAsideState
			},
			getters:{
				userInfo:({sign})=>sign.userInfo,
				userToken:({ sign })=>sign.userToken
			}
		},
		methods:{
            nameInvalid(e){
            	this.setToast('用户名错误')
            },
            pswdInvalid(e){
            	this.setToast('密码错误')
            },
            signIn(e){
                var that = this;
            	if(!that.$signinForm.dirty) return;
            	if(!that.$signinForm.invalid){
            		this.userLogin(that.user).then((res)=>{
            			this.setUserInfo(res.id)
            			that.$route.router.go({path:'/home'});
            			that.setAsideState('home')
            		},(res)=>{
            			console.log(res)
            			that.setToast('失败')
            		})
            			
            		
            	}
            }
		},
		route: {
	    	data:function (transition) {
	    		
	            !!this.userToken ? transition.redirect('/home') : transition.next()
    		}
    	}
	}
</script>
