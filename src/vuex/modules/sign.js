import {USER_LOGIN,USER_LOGOUT} from '../mutation-types.js'

const state = {
	userInfo:{
		headimg:'',
		loginname:'',
		name:'',
		uid:''
	}
}

const mutations ={
	[USER_LOGIN](state,user){
		if(window.localStorage && window.localStorage.userInfo){
			let userInfo = JSON.parse(window.localStorage.userInfo);
			state.userInfo.uid = userInfo.id;
			state.userInfo.headimg = userInfo.headimg;
			state.userInfo.mobile = userInfo.mobile;
			state.userInfo.name = userInfo.account;
			return;
		}
		if(!user) return
		state.userInfo.uid = user.id;
		state.userInfo.headimg = user.headimg;
		state.userInfo.mobile = user.mobile;
		state.userInfo.name = user.account;
	},
	[USER_LOGOUT](state){
		state.userInfo.uid = '';
		state.userInfo.headimg = '';
		state.userInfo.mobile = '';
		state.userInfo.name = '';
		if(window.localStorage && window.localStorage.userInfo){
			window.localStorage.removeItem('userInfo')
		}
	}
}
export default{
	state,
	mutations
}