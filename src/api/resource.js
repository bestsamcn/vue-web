import Vue from 'vue'
import VueResource from 'vue-resource'
import VueCookie from 'vue-cookie'
import {
    ROOT_API
} from './config.js'

//挂载
Vue.use(VueResource)
Vue.use(VueCookie)

//各种处理,都很重要
Vue.http.options.emulateHTTP = true;
Vue.http.options.emulateJSON = true;
Vue.http.options.crossOrigin = true
Vue.http.options.xhr = {withCredentials: true}

// Vue.http.interceptors.push({
//     request(request) {
//         console.log(Vue.cookie);
//         return request
//     },
//     response(response) {
//         // 这里可以对响应的结果进行处理
//         if (response.status === 401) {
//             console.log(response)
//         }
//         return response
//     }
// })


export const getBannerList = Vue.resource(ROOT_API + '/banner/getListBanner?modelBanner={modelBanner}&seq={seq}&status={status}')
export const userLogin = Vue.resource(ROOT_API + '/user/login')
