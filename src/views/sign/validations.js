import Vue from 'vue'
import Validator from 'vue-validator'
Vue.use(Validator)
//自定义验证器
//添加一个简单的手机号验证 
//匹配0-9之间的数字,并且长度是11位
Vue.validator('username', function (val) {
	return /^\w{6,20}$/.test(val)
});
