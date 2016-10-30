import { GET_BANNER_LIST, GET_CLOUD_TAG_LIST, GET_LIVE_VOD_LIST, GET_GUESS_LIKE_LIST } from '../mutation-types.js'

const state = {
	bannerList:[],
	cloudTagList:[],
	liveVodList:[],
	guessLikeList:[],
	bannerParams:{modelBanner:1,seq:1,status:10}
}

const mutations = {
	[GET_BANNER_LIST](state,bannerList){
		state.bannerList = bannerList
	},
	[GET_CLOUD_TAG_LIST](state,cloudTagList){
		state.cloudTagList = cloudTagList
	},
	[GET_LIVE_VOD_LIST](state,liveVodList){
		state.liveVodList = liveVodList
	},
	[GET_GUESS_LIKE_LIST](state,guessLikeList){
		state.guessLikeList = guessLikeList
	}
}

export default{
	state,
	mutations
}