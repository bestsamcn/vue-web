<style src="../assets/css/aside.css"></style>
<template>
    <toast :toast-show.sync="toast.toastShow" :toast-text="toast.toastText"></toast>
    <div class="aside-mask" v-show="isShowAside" transition="mask"  @click="close()"></div>
	<div class="aside" v-show="isShowAside" transition="aside">
		<div class="aside-header">
			<a>
				<img :src="userInfo.headimg ? IMG_URL+userInfo.headimg : '../assets/img/user-nologin.png'" alt="">
				<span>{{userInfo.name ? userInfo.name :'Your Name'}}</span>
			</a>
		</div>
		<div class="aside-content" :class="navState">
			<a id="index" @click="goUrl('index')" class="fa fa-home fa-fw" :class="{}">首页</a>
			<a id="cart" @click="goUrl('cart')" class="fa fa-file-movie-o fa-fw">主播</a>
			<a id="count" @click="goUrl('count')" class="fa fa-film fa-fw">回放</a>
			<a id="about" class="fa fa-address-book-o fa-fw">关于</a>
		</div>
		<div class="aside-footer">
		    <a v-if="!isLogin" @click="goUrl('signin')" v-link="{name:'signin'}">登录</a>
		    <a v-if="isLogin" @click="logout()">退出</a>
		</div>
		<a href="javascript:;" class="fa fa-remove fa-lg close" @click="close()"></a>
	</div>
</template>
<script>
    import Toast from './toast.vue'
    import { userLogout,setAsideState } from '../vuex/actions.js'
    import { IMG_URL,ROOT_API } from '../api/config.js'
	export default{
		components:{
            Toast
		},
        props:{
        	isShowAside:{
        		type:Boolean,
        		default:false,
        		require:true
        	},
        	isLogin:{
        		type:Boolean,
        		default:false
        	}
        },
        data(){
            return{
            	IMG_URL:IMG_URL,
            	ROOT_API:ROOT_API,
                toast:{
                    toastShow:false,
                    toastText:'输入出错'
                },
                navState:'index'
            }
        },
        vuex:{
            actions:{
            	userLogout,
                setAsideState
            },
            getters:{
            	userInfo:({sign})=>sign.userInfo,
                routeName:({ route })=>route.name
            }
        },
        methods:{
        	close(){
                this.isShowAside = false
        	},
        	goUrl(name){
                this.$route.router.go({
                	name:name
                })
                this.isShowAside = false
        	},
        	logout(){
                var that = this;
				that.$http({
					method:'get',
					url:ROOT_API+'/pipes/v1/user/logout',
					emulateJSON:true
				}).then(function(res){
					if(!res.ok || res.body.retCode !== 0) {
        				that.toast.toastText='退出失败';
        				that.toast.toastShow = true;
        				return;
        			}
        			that.userLogout()
        			that.isShowAside=false
				})
        	},
            setNavState(){
                this.navState = this.routeName
            }
        },
        watch:{
            routeName:'setNavState'
        },
        ready(){
            alert()
            this.setNavState()
            this.$nextTick(()=>{
                let routeName= this.$route.name;
                this.setAsideState(routeName)
            })
        }
	}
</script>