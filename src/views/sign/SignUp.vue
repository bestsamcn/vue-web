<template>
	<div class="router-view">
		<toast :toast-show.sync="toastShow" :toast-text="toastText"></toast>
		<div id="signupForm">
			<validator name="signupValidate">
			<form class="form">
			    <h4>signUp</h4>
				<ul>
					<li>
						<input type="text" @invalid="nameInvalid" id="username"  v-validate:username="['username']" initial="off" detect-change="off" v-model="name" name="username" placeholder="id">
					</li>
					<!-- <li>
						<input type="password" @invalid="pwsdInvalid" v-validate:password="['password']" initial="off" detect-change="off" v-model="password" name="password" placeholder="password">
					</li>
					<li>
						<input type="password" @invalid="rePwsdInvalid" v-validate:repassword="['password']" initial="off" detect-change="off" v-model="repassword" name="repassword" placeholder="repassword">
					</li> -->
					<li>
						<a href="javascript:;" @click="signUp()">signUp</a>
					</li>
				</ul>
				<p class="to-signup"><a v-link="{path:'/sign/signIn'}">to signIn?</a></p>
			</form>
			</validator>
		</div>
	</div>

</template>
<script>
    import validator from './validations';
    import Toast from '../../components/toast.vue';
	export default{
		el (){
		    return '#signupForm'
		},
		components:{
			Toast
		},
        data(){
        	return{
        		name:'',
        		password:'',
        		repassword:'',
        		toastShow:false,
                toastText:''
        	}
        },
        methods:{
            nameInvalid(){
            	this.toastShow= true;
            	this.toastText = '用户名格式错误';
            },
            pswdInvalid(){
            	this.toastShow= true;
            	this.toastText = '密码格式错误';
            },

            signUp(){
            	var that = this;

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