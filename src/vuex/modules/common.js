import { SET_ASIDE, SET_ASIDE_STATE } from '../mutation-types.js'

const state ={
	isShowAside:false,
	routeName:''
}

const mutations = {
	[SET_ASIDE](state,flag){
        state.isShowAside = flag
	},
	[SET_ASIDE_STATE](state,name){
		state.routeName = name || 'index'
	}
}
export default{
	state,
	mutations
}