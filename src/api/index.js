/**
 * 
 * @authors sam
 * @date    2016-10-20 15:23:11
 * @version 1.0
 */

import {
	getBannerList,
	userLogin,
	setUserBase,
	setUserInfo,
	userLogout,
	getCloudTagList,
	getLiveVodList,
	getGuessLikeList,
	getVideoList,
	getAllTagList,
	getCategoryList,
    getLiveDetail,
    getVideoDetail,
    getPlayList
} from './resource.js'
export default {
	//用户
	userLogin: (data) => userLogin.save(data),
	userLogout: () => userLogout.delete(),
	setUserBase: () => setUserBase.get(),
	setUserInfo: (id) => setUserInfo.get({id: id}),

	//公共
	getBannerList: (data) => getBannerList.get(data),
	getVideoList: (videoParams) => getVideoList.get(videoParams),
    getAllTagList:()=>getAllTagList.get(),
    getCategoryList:()=>getCategoryList.get(),
    
    //首页
	getCloudTagList: (page, rows) => getCloudTagList.get({page: 1,rows: 20}),
	getLiveVodList: (liveParams) => getLiveVodList.get(liveParams),
	getGuessLikeList: () => getGuessLikeList.get(),

	//直播
	getLiveDetail:(id)=>getLiveDetail.get(id),

	//视频
	getVideoDetail:(id)=>getVideoDetail.get(id),
	getPlayList:(relatedParams)=>getPlayList.get(relatedParams)
}