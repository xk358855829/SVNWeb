// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import index from './index'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import axios from 'axios'
import Mint from 'mint-ui';
import moment from 'moment/moment'
Vue.use(Mint);
import 'mint-ui/lib/style.css';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.prototype.httpUrl = 

// 'http://39.104.113.112:8762/'
// 'http://192.168.2.143:8762/'
// 'http://192.168.2.143:8797/'


'http://39.104.99.181:8762/'
// 'http://114.55.168.103:8762/'

/*Vue.prototype.$echarts = echarts*/
Vue.prototype.testOpenid = 
// localStorage.getItem("openid")
'oOKex1ETMNMC3iNsMwHVRWWWB8Gs'
Vue.use(ElementUI);
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.filter('change',function(val){
  if(val=="1"){
    val='免费时长'
  }else if(val=="2"){
    val='现金抵用券'
  }else if(val="3"){
    val='满减券'
  }
  return val
})

new Vue({
  el: '#app',
  router,
  store,
  components: { index },
  template: '<index/>'
})

