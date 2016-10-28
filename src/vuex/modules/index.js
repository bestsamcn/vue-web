import { GET_BANNER_LIST } from '../mutation-types.js'

const state = {
	bannerList:[]
}

const mutations = {
	[GET_BANNER_LIST](state,bannerList){
		state.bannerList = bannerList
	}
}

export default{
	state,
	mutations
}