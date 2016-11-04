/**
 * 
 * @authors sam
 * @date    2016-10-20 15:23:11
 * @version 1.0
 */

let allFilter = {}

allFilter.install = Vue => {
	Vue.filter('videoStatus', val => {
		let status = ''
		switch (val) {
			case 1:
				status = '预约中'
				break
			case 2:
				status = '直播中'
				break
			case 3:
				status = '已结束'
				break
			default:
				status = '未知状态'
		}
		return status
	})
	Vue.filter('formatTime',str=>{
		var arr = str.toString().split('');
        // var arr1 = arr.splice(-2,0,':');
        arr.splice(-2, 0, ':');

        return arr.join('');
	})
}
export default allFilter
