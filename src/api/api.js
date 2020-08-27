/*引入Vue框架*/
import Vue from 'vue';
/*引入资源请求插件*/
import axios from 'axios';

import { baseUrl } from '@/config/env'

import Qs from 'qs'// 引入qs模块，用来序列化post类型的数据


axios.defaults.baseURL = baseUrl;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/*使用axios插件*/
Vue.prototype.$axios = axios;
Vue.prototype.$qs = Qs;

export default ({

});