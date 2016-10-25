<style src="../assets/css/aside.css"></style>
<template>
    <div class="aside-mask" v-show="isShowAside" transition="mask"  @click="close()"></div>
	<div class="aside" v-show="isShowAside" transition="aside">
		<div class="aside-header">
			<a href="">
				<img src="../assets/img/user-nologin.png" alt="">
				<span>name</span>
			</a>
		</div>
		<div class="aside-content">
			<a href="" class="fa fa-home fa-fw active">首页</a>
			<a href="" class="fa fa-file-movie-o fa-fw">主播</a>
			<a href="" class="fa fa-film fa-fw">回放</a>
			<a href="" class="fa fa-address-book-o fa-fw">关于</a>
		</div>
		<div class="aside-footer">
		    <a href="">登录</a>
		</div>
		<a href="javascript:;" class="fa fa-remove fa-lg close" @click="close()"></a>
	</div>
</template>
<script>
    import { setAside } from '../vuex/actions.js'
	export default{
        props:{
        	isShowAside:{
        		type:Boolean,
        		default:false,
        		require:true
        	}
        },
        methods:{
        	close(){
                this.isShowAside = false
        	}
        }
	}
</script>