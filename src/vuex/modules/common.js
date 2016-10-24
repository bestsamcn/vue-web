import { SET_ASIDE } from '../mutation-types.js'

const state ={
	isShowAside:false
}

const mutations = {
	[SET_ASIDE](state,flag){
        state.isShowAside = flag
	}
}
export default{
	state,
	mutations
}