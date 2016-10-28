import { USER_LOGIN, USER_LOGOUT, SET_USER_BASE, SET_USER_INFO } from '../mutation-types.js'

const state = {
	//作为以id的形式判断是否已经登录
	userToken:'',

	//对应通过当前用id获取用户详情
	userInfo:{
        account:'',
        email:'',
        headimg:'',
        id:''
	}
}

const mutations ={
	//用户登录
	[USER_LOGIN](state,userLoginInfo){
		if(window.localStorage && window.localStorage.userBase){
            window.localStorage['uid'] = userLoginInfo.uid
		}
		state.userToken = userLoginInfo.uid
	},
	//当前用户
    [SET_USER_BASE](state,currentUser){
    	state.userToken = state.userToken
    },
    //根据id获取用户详情
    [SET_USER_INFO](state,userInfo){
    	state.userToken = userInfo.id
    	state.userInfo.account = userInfo.account
    	state.userInfo.email = userInfo.email
    	state.userInfo.headimg = userInfo.headimg
    	state.userInfo.id = userInfo.id
    },
	[USER_LOGOUT](state){
		state.userToken = ''
    	state.userInfo.account = ''
    	state.userInfo.email = ''
    	state.userInfo.headimg = ''
    	state.userInfo.id = ''
		if(window.localStorage && window.localStorage.userInfo){
			window.localStorage.removeItem('userInfo')
		}
	}
}
export default{
	state,
	mutations
}