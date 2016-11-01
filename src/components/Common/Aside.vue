<style src="../../assets/css/common/aside.css"></style>
<template>
    <div class="aside-mask" v-show="isShowAside" transition="mask"  @click="close()"></div>
	<div class="aside" v-show="isShowAside" transition="aside">
		<div class="aside-header">
			<a>
				<img :src="userInfo.headimg ? IMG_URL+userInfo.headimg : '../assets/img/user-nologin.png'" alt="">
				<span>{{userInfo.account ? userInfo.account :'Your Name'}}</span>
			</a>
		</div>
		<div class="aside-content" :class="routeName">
			<a id="home" @click="goUrl('home')" class="fa fa-home fa-fw" :class="{}">首页</a>
            <a id="live" @click="goUrl('live')" class="fa fa-file-movie-o fa-fw">主播</a>
            <a id="video" @click="goUrl('video')" class="fa fa-file-movie-o fa-fw">视频</a>
            <a id="shop" @click="goUrl('shop')" class="fa fa-film fa-fw">商店</a>
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
    import { userLogout,setAsideState, setToast } from '../../vuex/actions.js'
    import { IMG_URL,ROOT_API } from '../../api/config.js'
	export default{
        name:'aside',
		components:{
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
                navState:'index'
            }
        },
        vuex:{
            actions:{
            	userLogout,
                setAsideState,
                setToast
            },
            getters:{
            	userInfo:({sign})=>sign.userInfo,
                routeName:({ common })=>common.routeName
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
                this.setAsideState(name)
        	},
        	logout(){
                let that = this;
    			that.userLogout().then(()=>{
                    that.setToast='退出成功'
                },res=>{
                    that.setToast='退出失败'
                }).catch(e=>{
                    that.setToast ='退出失败'
                })
    			that.isShowAside=false
        	}
        },
        ready(){
            this.setAsideState(this.$route.name)
        }
	}
</script>