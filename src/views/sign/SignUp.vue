<template>
	<div class="router-view">
		<toast :toast-show.sync="user.toastShow" :toast-text="user.toastText"></toast>
		<div class="form">
			<validator name="signupForm">
				<form novalidate>
					<h4>signIn</h4>
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
						<a  v-link="{path:'/sign/signIn'}">to signIn?</a>
					</p>
				</form>
			</validator>
		</div>
	</div>

</template>
<script>
    import validator from '../../validations/validate.js'
    import Toast from '../../components/toast.vue'
	export default{
		components:{
			Toast
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
		background:#ddd;
		text-align:center;
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