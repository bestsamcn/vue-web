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
	getVideoList
} from './resource.js'
export default {
	getBannerList: (data) => getBannerList.get(data),
	userLogin: (data) => userLogin.save(data),
	userLogout: () => userLogout.delete(),
	setUserBase: () => setUserBase.get(),
	setUserInfo: (id) => setUserInfo.get({
		id: id
	}),
	getCloudTagList: (page, rows) => getCloudTagList.get({
		page: 1,
		rows: 20
	}),
	getLiveVodList: (liveParams) => getLiveVodList.get(liveParams),
	getGuessLikeList: () => getGuessLikeList.get(),
	getVideoList: (videoParams) => getVideoList.get(videoParams)
}