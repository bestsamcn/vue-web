import { GET_BANNER_LIST,GET_CLOUD_TAG_LIST } from '../mutation-types.js'

const state = {
	bannerList:[],
	cloudTagList:[]
}

const mutations = {
	[GET_BANNER_LIST](state,bannerList){
		state.bannerList = bannerList
	},
	[GET_CLOUD_TAG_LIST](state,cloudTagList){
		state.cloudTagList = cloudTagList
	}
}

export default{
	state,
	mutations
}