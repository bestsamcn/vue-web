import { GET_LIVE_BANNER_LIST, GET_LIVE_VIDEO_LIST, REFRESH_LIVE_VIDEO_LIST } from '../mutation-types.js'

const state = {
	liveBannerList:[],
    bannerParams:{
        modelBanner:2,
        seq:1,
        status:10
    },
	liveVideoList:[]
	
}

const mutations = {
	[GET_LIVE_BANNER_LIST](state,liveBannerList){
		state.liveBannerList = liveBannerList
	},
	[GET_LIVE_VIDEO_LIST](state,liveVideoList){
		if(state.liveVideoList.length<1){
            state.liveVideoList = liveVideoList
		}else{
            state.liveVideoList = state.liveVideoList.concat(liveVideoList)
		}
	},
	[REFRESH_LIVE_VIDEO_LIST](state,liveVideoList){
        state.liveVideoList = liveVideoList
	}
}
export default{
	state,
	mutations
}