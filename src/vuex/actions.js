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
export const userLogout = makeActions(type.USER_LOGOUT)
export const setAside = makeActions(type.SET_ASIDE)
export const getBanner = makeActions(type.GET_BANNER)
export const setAsideState = makeActions(type.SET_ASIDE_STATE)
export const setToast = makeActions(type.SET_TOAST)

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
function makeActions(type){
	//3个点不能少
	return ({dispatch},...args) => dispatch(type,...args);
}

