import Vue from 'vue'
import VueValidator from 'vue-validator'
Vue.use(VueValidator)

Vue.validator('email', val=> {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
})
Vue.validator('username',val=> {
    return /^\w{2,20}$/.test(val)
});
Vue.validator('password',val=> {
    return /^\w{6,20}$/.test(val)
});
Vue.validator('match',(val,result)=> {
    return result
});
