// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'whatwg-fetch'


import './components/Toast/toast.css';
import Toast from './components/Toast/index';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
Vue.use(ElementUI)
Vue.use(Toast);

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$http = axios
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
// Vue.prototype.httpUrl = 'http://39.104.99.181:2080/';
// Vue.prototype.httpUrl = 'http://192.168.2.123:8091/';
Vue.prototype.httpUrl = 'http://39.104.113.112:2088';
// Vue.prototype.httpUrl = 'http://114.55.168.103:2088';

// Vue.prototype.httpUrl = 'http://192.168.2.110:8080/SURBrake/';
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
