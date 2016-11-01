import Vue from 'vue'
import VueResource from 'vue-resource'
import VueCookie from 'vue-cookie'
//直接引入，想都想不多
import common from '../vuex/modules/common.js'

import {
    ROOT_API
} from './config.js'

//挂载
Vue.use(VueResource)
Vue.use(VueCookie)

//各种处理,都很重要
Vue.http.options.emulateHTTP = true
Vue.http.options.emulateJSON = true
Vue.http.options.crossOrigin = true
Vue.http.options.xhr = {withCredentials: true}

let httpTimer = null;
//请求全局设置
Vue.http.interceptors.push((request,next)=>{
	httpTimer = setTimeout(()=>{
        common.state.isLoading = true
	},500)
	request.credentials=true;
	next()
})
Vue.http.interceptors.push((request,next)=>{
	next(response=>{
		if(httpTimer){
			clearTimeout(httpTimer)
			setTimeout(()=>{
                common.state.isLoading = false
			},500)
		}
        common.state.isLoading = false
	 	return response
	})
})

//用户部分
export const userLogin = Vue.resource(ROOT_API + '/user/login')
export const userLogout = Vue.resource(ROOT_API + '/user/logout')
export const setUserBase = Vue.resource(ROOT_API+'/user/getCurrentUser')
export const setUserInfo = Vue.resource(ROOT_API+'/user/getById?id={id}')

//公共部分
export const getBannerList = Vue.resource(ROOT_API + '/banner/getListBanner?modelBanner={modelBanner}&seq={seq}&status={status}')
export const getAllTagList = Vue.resource(ROOT_API + '/tag/getListTag')

//首页
export const getCloudTagList = Vue.resource(ROOT_API + '/tag/getListTag?page={page}&rows={rows}')
export const getLiveVodList = Vue.resource(ROOT_API + '/liveVod/getListLiveVod?page={page}&rows={rows}&watchnum={watchnum}')
export const getGuessLikeList = Vue.resource(ROOT_API + '/userAll/getGuessLike')

//直播播
export const getVideoList = Vue.resource(ROOT_API + '/liveVod/getListLiveVod?page={page}&rows={rows}&seq={seq}&status={status}&livetime={livetime}&order={order}&tagids={tagids}')
export const getLiveDetail = Vue.resource(ROOT_API + '/liveVod/getById?id={id}')




