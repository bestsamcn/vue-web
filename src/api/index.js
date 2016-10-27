/**
 * 
 * @authors sam
 * @date    2016-10-20 15:23:11
 * @version 1.0
 */

import { getBannerList, userLogin } from './resource.js'
export default{
	getBannerList:()=> getBannerList.get({modelBanner:'1',seq:'1',status:'10'}),
	userLogin:(data)=>userLogin.save(data)
}