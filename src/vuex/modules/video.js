import { GET_VIDEO_BANNER_LIST, GET_VIDEO_VIDEO_LIST, REFRESH_VIDEO_VIDEO_LIST } from '../mutation-types.js'

const state = {
	bannerParams:{
		modelBanner:3,
		seq:1,
		status:10
	},
	videoBannerList:[],
	videoVideoList:[]
}
const mutations = {
	[GET_VIDEO_BANNER_LIST](state,videoBannerList){
        state.videoBannerList = videoBannerList
	},
	[GET_VIDEO_VIDEO_LIST](state,videoVideoList){
		if(state.videoVideoList.length < 1){
			state.videoVideoList = videoVideoList
		}else{
			state.videoVideoList = state.videoVideoList.concat(videoVideoList) 
		}
	},																
	[REFRESH_VIDEO_VIDEO_LIST](state,videoVideoList){
		state.videoVideoList = videoVideoList
	}
}
export default{
	state,
	mutations
}