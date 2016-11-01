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

//用户——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

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
			if(res.ok &&　res.data.retCode === 0 && res.data.data){
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

//公共——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//获取标签
export const getAllTagList = ({ dispatch })=>{
	let promise = new Promise((resolve,reject)=>{
		api.getAllTagList().then(res=>{
			if(res.ok && res.data.retCode === 0 && !!res.data.rows.length){
				resolve(res.data.rows)
				return dispatch(type.GET_ALL_TAG_LIST,res.data.rows)
			}
			reject(res.data.retCode)
		},res=>{
			reject(res)
		})
	})
	return promise
}



//首页——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

//获取banner
export const getBannerList = ({ dispatch },bannerParams)=>{
	let examList = [{"tempCreatedat":"2016-10-27","tempUpdatedat":null,"id":23,"banner":"1hutnndp68ne.jpg","detail":"","seq":1,"status":10,"modelBanner":1,"url":"liveDetail.html?id=134","createdat":1477497600000,"title":"南方医科大学主持人大赛"}]
	//返回后可以作为链式调用
    return api.getBannerList(bannerParams).then(res=>{
    	if(res.ok && res.data.retCode ===0){
            return dispatch(type.GET_BANNER_LIST,res.data.rows)
    	}
        dispatch(type.GET_BANNER_LIST,examList)
    },res=>{
        dispatch(type.GET_BANNER_LIST,examList)
    })
}

//获取元标签
export const getCloudTagList = ({ dispatch },page,rows)=>{
	let examList = [{"tempCreatedat":"1970-01-01","tempUpdatedat":null,"id":1,"name":"名校","description":"名校","createdat":-28800000,"type":0}]
    return api.getCloudTagList(page,rows).then(res=>{
    	if(res.ok && res.data.retCode === 0){
            return dispatch(type.GET_CLOUD_TAG_LIST,res.data.rows)
    	}
        dispatch(type.GET_CLOUD_TAG_LIST,examList)
    },res=>{
        dispatch(type.GET_CLOUD_TAG_LIST,examList)
    })
}

//获取最热
export const getLiveVodList = ({ dispatch },listParams)=>{
	let examList = [{"@id":1,"tempCreatedat":"2016-09-14","tempUpdatedat":null,"id":33,"title":"三万英尺波士顿大学白鸥创业挑战赛","description":"","listimg":"0iftb0inpjuh.jpg","livetime":1474416000000,"duration":3647,"watchnum":122023,"ordernum":0,"hostpeople":"Emma","categoryid":36,"seq":0,"itemid":7,"companyid":0,"lookid":0,"liveurl":"","status":2,"clicknum":122023,"videourl":"http://v.qq.com/x/cover/cu0y0xh094ya43g.html?vid=w01937y7vqa","freestatus":1,"price":0,"createdat":1473782400000,"templivetime":"2016-09-21 08:00","tempduration":"36:47","tagNames":"名校","tagIds":"1","categorypid":0,"lookName":null,"itemName":"对话世界名校","companyName":null,"categoryName":"对话世界名校","begintime":0,"endtime":0,"userId":0,"vodcode":"w01937y7vqa","tags":[{"tempCreatedat":null,"tempUpdatedat":null,"id":1,"name":"名校","description":"名校","createdat":-28800000,"type":0}],"livetags":"1","tagids":0,"item":null,"company":null,"look":null,"vodstatus":3,"discusstotal":18,"ifBook":false,"dealBeginTime":0,"idlist":[]}]
    return api.getLiveVodList(listParams).then(res=>{
    	if(res.ok && res.data.retCode === 0){
            return dispatch(type.GET_LIVE_VOD_LIST,res.data.rows)
    	}
        dispatch(type.GET_LIVE_VOD_LIST,examList)
    },res=>{
        dispatch(type.GET_LIVE_VOD_LIST,examList)
    })
}

//获取猜你喜欢
export const getGuessLikeList = ({ dispatch })=>{
	let examList = [{"@id":1,"tempCreatedat":null,"tempUpdatedat":null,"id":33,"title":"三万英尺波士顿大学白鸥创业挑战赛","description":"","listimg":"0iftb0inpjuh.jpg","livetime":1474416000000,"duration":3647,"watchnum":122023,"ordernum":0,"hostpeople":"Emma","categoryid":36,"seq":0,"itemid":7,"companyid":0,"lookid":0,"liveurl":"","status":2,"clicknum":122023,"videourl":"http://v.qq.com/x/cover/cu0y0xh094ya43g.html?vid=w01937y7vqa","freestatus":1,"price":0.0,"createdat":1473782400000,"templivetime":null,"tempduration":null,"tagNames":null,"tagIds":null,"categorypid":0,"lookName":null,"itemName":null,"companyName":null,"categoryName":null,"begintime":0,"endtime":0,"userId":0,"vodcode":"w01937y7vqa","tags":[{"tempCreatedat":null,"tempUpdatedat":null,"id":1,"name":"名校","description":"名校","createdat":-28800000,"type":0}],"livetags":"1","tagids":0,"item":null,"company":null,"look":null,"vodstatus":3,"discusstotal":0,"ifBook":false,"dealBeginTime":0,"idlist":[]}]
    return api.getGuessLikeList().then(res=>{
    	if(res.ok && res.data.retCode === 0){
            return dispatch(type.GET_GUESS_LIKE_LIST,res.data.rows)
    	}
        dispatch(type.GET_GUESS_LIKE_LIST,examList)
    },res=>{
        dispatch(type.GET_GUESS_LIKE_LIST,examList)
    })
}

//主播——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//获取banner列表
export const getLiveBannerList = ({ dispatch },bannerParams)=>{
	let examList = [{"tempCreatedat":"2016-10-27","tempUpdatedat":null,"id":23,"banner":"1hutnndp68ne.jpg","detail":"","seq":1,"status":10,"modelBanner":1,"url":"liveDetail.html?id=134","createdat":1477497600000,"title":"南方医科大学主持人大赛"}]
	//返回后可以作为链式调用
    return api.getBannerList(bannerParams).then(res=>{
    	if(res.ok && res.data.retCode ===0){
            return dispatch(type.GET_LIVE_BANNER_LIST,res.data.rows)
    	}
        dispatch(type.GET_LIVE_BANNER_LIST,examList)
    },res=>{
        dispatch(type.GET_LIVE_BANNER_LIST,examList)
    })
}
//获取直播列表
export const getLiveVideoList = ({ dispatch },videoParams)=>{
	let examList = [{"@id":1,"tempCreatedat":"2016-10-26","tempUpdatedat":null,"id":139,"title":"Selfridges奢侈品牌看看看","description":"","listimg":"1hut3lebd3u0.jpg","livetime":1477731600000,"duration":6000,"watchnum":0,"ordernum":0,"hostpeople":"Summer","categoryid":58,"seq":99,"itemid":13,"companyid":0,"lookid":0,"liveurl":"","status":1,"clicknum":0,"videourl":"","freestatus":1,"price":0.0,"createdat":1477411200000,"templivetime":"2016-10-29 17:00","tempduration":"60:00","tagNames":"人物","tagIds":"2","categorypid":0,"lookName":null,"itemName":"网红","companyName":null,"categoryName":"我型我秀","begintime":0,"endtime":0,"userId":0,"vodcode":"6007","tags":[{"tempCreatedat":null,"tempUpdatedat":null,"id":2,"name":"人物","description":"人物","createdat":-28800000,"type":0}],"livetags":"2","tagids":0,"item":null,"company":null,"look":null,"vodstatus":2,"discusstotal":0,"ifBook":false,"dealBeginTime":0,"idlist":[]}]
	//返回后可以作为链式调用
	let promise = new Promise((resolve,reject)=>{
	    api.getVideoList(videoParams).then(res=>{
	    	if(res.ok && res.data.retCode ===0){
	    		resolve(res.data)
	            return dispatch(type.GET_LIVE_VIDEO_LIST,res.data.rows)
	    	}
	    	resolve(res.data)
	    },res=>{
	        dispatch(type.GET_LIVE_VIDEO_LIST,examList)
	        reject()
	    })
    })
    return promise
}
export const refreshLiveVideoList = ({ dispatch },videoParams)=>{
	//返回后可以作为链式调用
	let promise = new Promise((resolve,reject)=>{
	    api.getVideoList(videoParams).then(res=>{
	    	if(res.ok && res.data.retCode ===0){
	    		resolve(res.data)
	            return dispatch(type.REFRESH_LIVE_VIDEO_LIST,res.data.rows)
	    	}
	    	reject(res.data.retCode)
	    },res=>{
	        reject(res)
	    })
    })
    return promise
}
//获取直播详情
export const getLiveDetail = ({ dispath },id)=>{
	let promise = new Promise ((resolve,reject)=>{
		api.getLiveDetail(id).then(res=>{
			if(res.ok && res.data.retCode === 0 && !!res.data.data){
				return resolve(res.data.data)
			}
			reject(res.data.retCode)
		},res=>{
			reject(res)
		})
	})
	return promise
}

//点播——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
export const getVideoBannerList = ({ dispatch },bannerParams)=>{
	let examList = [{"tempCreatedat":"2016-10-27","tempUpdatedat":null,"id":23,"banner":"1hutnndp68ne.jpg","detail":"","seq":1,"status":10,"modelBanner":1,"url":"liveDetail.html?id=134","createdat":1477497600000,"title":"南方医科大学主持人大赛"}]
	//返回后可以作为链式调用
    return api.getBannerList(bannerParams).then(res=>{
    	if(res.ok && res.data.retCode ===0 && !!res.data.rows.length){
            return dispatch(type.GET_VIDEO_BANNER_LIST,res.data.rows)
    	}
        dispatch(type.GET_VIDEO_BANNER_LIST,examList)
    },res=>{
        dispatch(type.GET_VIDEO_BANNER_LIST,examList)
    })
}


function makeActions(type){
	//3个点不能少
	return ({dispatch},...args) => dispatch(type,...args);
}

