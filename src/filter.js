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
	Vue.filter('dateDesc',oldDate=>{
		let now=new Date().getTime(),
            past =  !isNaN(oldDate) ? oldDate : new Date(oldDate).getTime(),
            diffValue = now - past,
            res='',
            s = 1000,
            m = 1000 * 60,
            h = m * 60,
            d = h * 24,
            hm = d * 15,
            mm = d * 30,
            y = mm * 12,
            _y = diffValue/y,
            _mm =diffValue/mm,
            _w =diffValue/(7*d),
            _d =diffValue/d,
            _h =diffValue/h,
            _m =diffValue/m,
            _s = diffValue/s;
        if(_y>=1) res=parseInt(_y) + '年前';
        else if(_mm>=1) res=parseInt(_mm) + '个月前';
        else if(_w>=1) res=parseInt(_w) + '周前';
        else if(_d>=1) res=parseInt(_d) +'天前';
        else if(_h>=1) res=parseInt(_h) +'小时前';
        else if(_m>=1) res=parseInt(_m) +'分钟前';
        else if(_s>=1) res=parseInt(_s) +'秒前';
        else res='刚刚';
        return res;
	})
}
export default allFilter
