/**
 * 
 * @authors sam
 * @date    2016-10-13 11:30:21
 * @version 1.0
 */

//index.actions
import * as type from './mutation-types.js'

export const changePrize = makeActions(type.CHANGE_PRIZE)
export const changeStyle = makeActions(type.CHANGE_STYLE)
export const addItem = makeActions(type.ADD_ITEM)
export const delItem = makeActions(type.DEL_ITEM)
export const userLogin = makeActions(type.USER_LOGIN)
export const userLogout = makeActions(type.USER_LOGOUT)
export const setAside = makeActions(type.SET_ASIDE)
export const getBanner = makeActions(type.GET_BANNER)
export const setCarousel = makeActions(type.SET_CAROUSEL)
export const setAsideState = makeActions(type.SET_ASIDE_STATE)


function makeActions(type){
	//3个点不能少
	return ({dispatch},...args) => dispatch(type,...args);
}

