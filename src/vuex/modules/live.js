import { GET_LIVE_BANNER_LIST, GET_LIVE_VIDEO_LIST } from '../mutation-types.js'

const state = {
	liveBannerList:[],
	liveVideoList:[],
	params:{
		page:1,
		rows:10,
		watchnum:1,
		status:1,
		livetime:1,
		seq:1,
		tagids:''
	}
}

const mutations = {
	[GET_LIVE_BANNER_LIST](state,liveBannerList){
		state.liveBannerList = liveBannerList
	},
	[GET_LIVE_VIDEO_LIST](state,liveVideoList){
        state.liveVideoList = liveVideoList
	}
}
export default{
	state,
	mutations
}