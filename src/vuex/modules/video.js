import { GET_VIDEO_BANNER_LIST } from '../mutation-types.js'

const state = {
	bannerParams:{
		modelBanner:3,
		seq:1,
		status:10
	},
	videoBannerList:[]
}
const mutations = {
	[GET_VIDEO_BANNER_LIST](state,videoBannerList){
        state.videoBannerList = videoBannerList
	}
}
export default{
	state,
	mutations
}