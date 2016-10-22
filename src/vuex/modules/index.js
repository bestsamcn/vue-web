/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-15 23:16:06
 * @version $Id$
 */

import {
	CHANGE_PRIZE,
	CHANGE_STYLE,
	ADD_ITEM,
	DEL_ITEM
} from '../mutation-types.js'
console.log(CHANGE_STYLE)

//初始化数据
const state = {
	iphone6s:{
		name:'Apple/苹果 iPhone 6S',
		desc:'3D Touch、1200万像素照片、4k视频，强大功能于一身。',
		prize:'5288-6888',
		isSelected:false,
		style:{
			'银色': 'iphone6s-silver-select-2015.png',
		    '深空灰色': 'iphone6s-gray-select-2015.png',
		    '金色': 'iphone6s-gold-select-2015.png',
		    '玫瑰金色': 'iphone6s-rosegold-select-2015.png'
		},
		activeStyleUrl:'iphone6s-silver-select-2015.png',
		storage:{
			'16GB':5288,
			'64GB':6088,
			'128GB':6888
		},
		activeStyle:'银色',
		activeStorage:''
	},
	carts:[]
}

//mutation函数控制
//activeStyle == active class
//activeStyleUrl == 当前选择图片

const mutations = {
	[CHANGE_STYLE](state,styleName,styleUrl){
		//外形
		state.iphone6s.activeStyle = styleName;
		//外形图片
		state.iphone6s.activeStyleUrl = styleUrl;
	},
	[CHANGE_PRIZE](state,storage,prize){
		state.iphone6s.prize = prize;
		state.iphone6s.activeStorage = storage;
		state.iphone6s.isSelected = true;
	},
	[ADD_ITEM](state){
		let activeStyle = state.iphone6s.activeStyle 
		let activeStorage = state.iphone6s.activeStorage
		
		console.log(state.carts,info)
		for(let i = 0 ;i<state.carts.length ;i++){
			if(state.carts[i].style === activeStyle && state.carts[i].storage === activeStorage){
				let newCount = state.carts[i].count+1;
			    let newPrize = state.iphone6s.prize*newCount;
	            let newInfo = {
	            	style:activeStyle,
					storage:activeStorage,
					count:newCount,
					prize:newPrize
	            }
	            state.carts.splice(state.carts.indexOf(info),1,newInfo);
		    	return;
			}
		}
		let info = {
			style:activeStyle,
			storage:activeStorage,
			count:1,
			prize:state.iphone6s.prize
		}
		state.carts.push(info);
	},
	[DEL_ITEM](state,item){
		console.log(item)
		if(state.carts.indexOf(item) === -1) return;
		state.carts.splice(state.carts.indexOf(item),1);
	}
}
export default{
	state,
	mutations
}