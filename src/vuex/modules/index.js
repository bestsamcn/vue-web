import { GET_BANNER,GET_BANNER_LIST } from '../mutation-types.js'

const state = {
	bannerList:[]
}

const mutations = {
	[GET_BANNER](state,bannerList){
        state.bannerList = bannerList
	},
	[GET_BANNER_LIST](state,bannerList){
		state.bannerList = bannerList
	}
}

export default{
	state,
	mutations
}