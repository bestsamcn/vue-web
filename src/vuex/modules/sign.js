import {USER_LOGIN} from '../mutation-types.js'

const state = {
	userInfo:{}
}

const mutations ={
	[USER_LOGIN](state,user){
		state.userInfo = user;
		if(window.localStorage){
			window.localStorage.userInfo = user
		}
	}
}
export default{
	state,
	mutations
}