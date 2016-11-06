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

    common.state.isLoading = true

	request.credentials=true;
	next(response=>{
        common.state.isLoading = false
	 	return response
	})
})
// Vue.http.interceptors.push((request,next)=>{
// 	next(response=>{
// 		if(httpTimer){
// 			clearTimeout(httpTimer)
// 			setTimeout(()=>{
//                 common.state.isLoading = false
// 			},500)
// 		}
//         common.state.isLoading = false
// 	 	return response
// 	})
// })

//用户部分
export const userLogin = Vue.resource(ROOT_API + '/user/login')
export const userLogout = Vue.resource(ROOT_API + '/user/logout')
export const setUserBase = Vue.resource(ROOT_API+'/user/getCurrentUser')
export const setUserInfo = Vue.resource(ROOT_API+'/user/getById?id={id}')

//公共部分
export const getBannerList = Vue.resource(ROOT_API + '/banner/getListBanner?modelBanner={modelBanner}&seq={seq}&status={status}')
export const getAllTagList = Vue.resource(ROOT_API + '/tag/getListTag')
export const getCategoryList = Vue.resource(ROOT_API + '/catagory/getListCatagory')

//首页
export const getCloudTagList = Vue.resource(ROOT_API + '/tag/getListTag?page={page}&rows={rows}')
export const getLiveVodList = Vue.resource(ROOT_API + '/liveVod/getListLiveVod?page={page}&rows={rows}&watchnum={watchnum}')
export const getGuessLikeList = Vue.resource(ROOT_API + '/userAll/getGuessLike')

//直播
export const getVideoList = Vue.resource(ROOT_API + '/liveVod/getListLiveVod?page={page}&rows={rows}&seq={seq}&order={order}&status={status}&livetime={livetime}&watchnum={watchnum}&createdat={createdat}&tagids={tagids}')
export const getLiveDetail = Vue.resource(ROOT_API + '/liveVod/getById?id={id}')

//视频
export const getVideoDetail = Vue.resource(ROOT_API+'/liveVod/getById?id={id}')
export const getPlayList = Vue.resource(ROOT_API+'/liveVod/getListLiveVod?catagoryid={catagoryid}&page={page}&rows={rows}')
export const getDiscussList = Vue.resource(ROOT_API+'/liveDiscuss/getListLiveDiscuss?livevodid={livevodid}&page={page}&rows={rows}')
export const saveVideoDiscuss = Vue.resource(ROOT_API+'/liveDiscuss/add')
export const saveVideoGood = Vue.resource(ROOT_API+'/liveDiscuss/edit')



