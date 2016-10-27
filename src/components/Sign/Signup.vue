<style src="../../assets/css/sign/signup.css"></style>
<template>
	<div class="router-view">
		<div class="form">
			<validator name="signupForm">
				<form novalidate>
					<h4>注册</h4>
					<ul>
						<li>
						    <input type="password" style="position:absolute;top:-100000px;"/>
							<input type="text" @invalid="nameInvalid()" v-validate:username="{username:true}" initial="off" detect-change="off" autocomplete="off" v-model="user.username" name="username" placeholder="username"></li>
						<li>
						    <input type="password" style="position:absolute;top:-100000px;"/>
							<input type="password" @invalid="pwsdInvalid()" v-validate:password="{password:true}" initial="off" autocomplete="off" detect-change="off" v-model="user.password" name="password" placeholder="password"></li>
						<li>
						    <input type="password" style="position:absolute;top:-100000px;"/>
							<input type="password" @invalid="rePwsdInvalid()" v-validate:repassword="{match:matchPassword}" initial="off" detect-change="off" autocomplete="off" v-model="user.repassword" name="repassword" placeholder="repassword"></li>
						<li>
							<a href="javascript:;" :class="{'active':!$signupForm.invalid}" @click="signUp($signupForm)">signUp</a>
						</li>
					</ul>
					<p class="to-signup">
						<a  v-link="{path:'/sign/signin'}">去登录?</a>
					</p>
				</form>
			</validator>
		</div>
	</div>

</template>
<script>
    import validator from '../../utils/validate.js'
	export default{
		components:{
		},
        data(){
        	return{
        		user:{
        			username:'',
	        		password:'',
	        		repassword:'',
	        		toastShow:false,
	                toastText:'',
	                isValid:false
        		}
        	}
        },
        vuex:{
        	getters:{
        		userInfo:({sign})=>{
					return sign.userInfo
				}
        	}
        },
        methods:{
            nameInvalid(){
            	this.user.toastText = '用户名错误';
        		this.user.toastShow= true;
            },
            pwsdInvalid(){
            	this.user.toastShow= true;
            	this.user.toastText = '密码错误';
            },
            rePwsdInvalid(){
                this.user.toastShow= true;
            	this.user.toastText = '密码不一致';
            },
            signUp(){
            	var that = this;
            	if(!that.$signupForm.dirty) return;
            	if(!that.$signupForm.invalid){
                    this.$http({
                    	headers: {
			                'X-Requested-With': 'XMLHttpRequest'
			            },
                    	url:'http://10.28.10.14:8081/VideoProject/pipes/v1/liveVod/getListLiveVod',
                    	method:'get',
                    	emulateJSON:true,

                    }).then(res=>{console.log(res)},res=>{console.log(res)})
            	}
            }
        },
        computed: {
    		matchPassword: function () {
    			console.log(this.$signupForm)
		        return this.user.password === this.user.repassword;
		    }
		},
		route: {
	    	activate:function (transition) {
	            this.userInfo.uid ? transition.redirect('/') : transition.next()
    		}
    	}
	}
</script>
