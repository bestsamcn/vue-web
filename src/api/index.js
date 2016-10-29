/**
 * 
 * @authors sam
 * @date    2016-10-20 15:23:11
 * @version 1.0
 */

import { getBannerList, userLogin, setUserBase, setUserInfo, userLogout, getCloudTagList, getLiveVodList, getGuessLikeList } from './resource.js'
export default{
	getBannerList:()=> getBannerList.get({modelBanner:'1',seq:'1',status:'10'}),
	userLogin:(data)=>userLogin.save(data),
	userLogout:()=>userLogout.delete(),
	setUserBase:()=>setUserBase.get(),
	setUserInfo:(id)=>setUserInfo.get({id:id}),
	getCloudTagList:(page,rows)=>getCloudTagList.get({page:'1',rows:'20'}),
	getLiveVodList:(page,rows,watchnum,status,tagids)=>getLiveVodList.get({page:page, rows:rows, watchnum:watchnum,status:status,tagids:tagids}),
	getGuessLikeList:()=>getGuessLikeList.get()
}