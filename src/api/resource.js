import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

//跨域
Vue.http.options.crossOrigin = true
Vue.http.options.xhr = {withCredentials: true}
const ROOT_API = 'http://www.3wycmedia.com/VideoProject'

//请求处理
Vue.http.interceptors.push({
  request (request) {
    // 这里对请求体进行处理
    request.headers = request.headers || {}
    if (getCookie('token')) {
      request.headers.Authorization = 'Bearer ' + getCookie('token').replace(/(^\")|(\"$)/g, '')
    }
    return request
  },
  response (response) {
    // 这里可以对响应的结果进行处理
    if (response.status === 401) {
      signOut()
      window.location.pathname = '/login'
    }
    return response
  }
});


export userLogin = Vue.resource(ROOT_API+'/pipes/v1/user/login{/}')