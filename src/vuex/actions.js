/**
 * 
 * @authors sam
 * @date    2016-10-13 11:30:21
 * @version 1.0
 */

//index.actions
import * as type from './mutation-types.js'
import api from '../api'

export const changePrize = makeActions(type.CHANGE_PRIZE)
export const changeStyle = makeActions(type.CHANGE_STYLE)
export const addItem = makeActions(type.ADD_ITEM)
export const delItem = makeActions(type.DEL_ITEM)



export const setAside = makeActions(type.SET_ASIDE)
export const setAsideState = makeActions(type.SET_ASIDE_STATE)
export const setToast = makeActions(type.SET_TOAST)
export const setLoading = makeActions(type.SET_LOADING)

//获取banner
export const getBannerList = ({ dispatch })=>{
	//返回后可以作为链式调用
    return api.getBannerList().then(res=>{
    	if(!res.ok) return
        dispatch(type.GET_BANNER_LIST,res.data.rows)
    })

}

//登录
export const userLogin = ({ dispatch },data)=>{
	return new Promise((resolve,reject)=>{
		api.userLogin(data).then(res=>{
			if(res.ok && res.data.retCode === 0){
	            dispatch(type.USER_LOGIN,res.data.data);
	            return resolve(res.data.data);
			}
			return reject(res);
		},res=>{
			return reject(res);
		})
	})
}

//获取当前用户信息，适用于当用户刷新了浏览器
export const setUserBase = ({ dispatch })=>{
	var promise = new Promise((resolve,reject)=>{
		api.setUserBase().then(res=>{
			if(res.ok &&　res.data.retCode === 0){
				dispatch(type.SET_USER_BASE,res.data.data.uid)
				return resolve(res.data.data.uid)
			}
			return reject(res.data)
		},res=>{
            return reject(res)
		})
	})
	return promise
}

//获取用户信息详情，依赖于当前用户接口的uid
export const setUserInfo = ({ dispatch },id)=>{
	if(!id) return
	var promise = new Promise((resolve,reject)=>{
		api.setUserInfo(id).then(res=>{
			if(res.ok &&　res.data.retCode === 0){
			    dispatch(type.SET_USER_INFO,res.data.data)
			    return resolve(res.data.data)
			}
			return reject(res.data.retCode)
		},res=>{
			return reject(res)
		})
	})
	return promise
}

//退出登录
export const userLogout = ({ dispatch })=>{
	var promise = new Promise((resolve,reject)=>{
		api.userLogout().then(res=>{
			if(res.ok &&　res.data.retCode === 0){
			    dispatch(type.USER_LOGOUT)
			    return resolve()
			}
			return reject(res.data.retCode)
		},res=>{
			return reject(res)
		})
	})
	return promise
}



function makeActions(type){
	//3个点不能少
	return ({dispatch},...args) => dispatch(type,...args);
}

