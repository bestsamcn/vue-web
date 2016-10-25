/**
 * 
 * @authors sam
 * @date    2016-10-13 11:30:08
 * @version 1.0
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import index from './modules/index.js'
import shop from './modules/shop.js'
import sign from './modules/sign.js'
import common from './modules/common.js'

export default new Vuex.Store({
	modules:{
		shop,
        sign,
        common,
        index
	}
})