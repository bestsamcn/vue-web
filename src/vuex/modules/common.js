import { SET_ASIDE, SET_ASIDE_STATE, SET_TOAST } from '../mutation-types.js'

const state ={
	isShowAside:false,
	routeName:'',
	toast:{
		isShow:false,
		text:''
	}
}

const mutations = {
	[SET_ASIDE](state,flag){
        state.isShowAside = flag
	},
	[SET_ASIDE_STATE](state,name){
		state.routeName = name || 'index'
	},
	[SET_TOAST](state,text){
		state.toast.text = text || '未知错误'
		state.toast.isShow = true
	}
}
export default{
	state,
	mutations
}