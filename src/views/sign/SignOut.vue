<template>
	<toast :toast-show.sync="toast.toastShow" :toast-text="toast.toastText"></toast>
	<div class="sign-out">
		<a href="javascipt:;" @click="signOut()">退出</a>
	</div>
</template>
<script>
    import toast from '../../components/toast'
    import { userLogout } from '../../vuex/actions.js'
	export default{
		components:{
			toast
		},
		data(){
			return{
				toast:{
					toastText:'',
					toastShow:false
				}
			}
		},
        vuex:{
        	actions:{
        		userLogout
        	}
        },
		methods:{
			signOut(){
				var that = this;
				that.$http({
					method:'get',
					url:'http://10.28.10.14:8081/VideoProject/pipes/v1/user/logout',
					emulateJSON:true
				}).then(function(res){
					if(!res.ok || res.body.retCode !== 0) {
        				that.toast.toastText='退出失败';
        				that.toast.toastShow = true;
        				return;
        			}
        			that.userLogout()
				})
			}
		}
	}
</script>
<style>
	.sign-out{
		width:100%;
		height:40px;
		position: fixed;
		left:0;
		bottom:0;
		z-index:1000;
		display: -webkit-flex;
		background:#f1f1f1;
		align-items: center;
		justify-content: center;
		box-shadow: 0 1px 3px rgba(0,0,0,0.3)
	}
	.sign-out a{
		width:100%;
		height:40px;
		display: block;
		background:#0090ff;
	    color:#fff;
	    line-height: 40px;
	    text-align: center;
	}

</style>