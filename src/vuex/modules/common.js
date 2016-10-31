import { SET_ASIDE, SET_ASIDE_STATE, SET_TOAST, SET_LOADING, GET_ALL_TAG_LIST } from '../mutation-types.js'

const state ={
	isShowAside:false,
	routeName:'',
	toast:{
		isShow:false,
		text:''
	},
	isLoading:false,
	allTagList:[]
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
	},
	[SET_LOADING](state,isLoading){
		state.isLoading = isLoading
	},
	[GET_ALL_TAG_LIST](state,allTagList){
        state.allTagList = allTagList
	}
}
export default{
	state,
	mutations
}