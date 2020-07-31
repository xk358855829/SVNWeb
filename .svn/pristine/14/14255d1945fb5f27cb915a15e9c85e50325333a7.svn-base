// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import axios from 'axios'
import Mint from 'mint-ui';
import moment from 'moment/moment'
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
Vue.use(Mint);
import 'mint-ui/lib/style.css';
import VueLazyload from 'vue-lazyload'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.prototype.httpUrl =

  // 'http://39.104.99.181:8762/'
  // 'http://192.168.2.143:8762/'

  // 'http://192.168.2.195:8762/'
  //  停车
  // 'http://192.168.2.143:8797/'
  // 储物柜


  // 'http://39.104.99.181:8762/'
  'http://114.55.168.103:8762/'

/*Vue.prototype.$echarts = echarts*/
Vue.prototype.newhttpUrl = 'http://114.55.168.103:2088'
Vue.prototype.oldhttpUrl = 'http://114.55.168.103:8797'
Vue.prototype.nowhttpUrl = 'http://39.104.113.112:8799'
Vue.prototype.testOpenid =
  // localStorage.getItem("openid")
  'oOKex1ETMNMC3iNsMwHVRWWWB8Gs'
Vue.use(ElementUI);
Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.filter('change', function (val) {
  if (val == "1") {
    val = '免费时长'
  } else if (val == "2") {
    val = '现金抵用券'
  } else if (val == "3") {
    val = '满减券'
  } else {
    val = '折扣券'
  }
  return val
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    console.log(to.meta.title)
    window.document.title = to.meta.title
  }
  if (to.path == '/homePage' && sessionStorage.getItem('token')) {
    console.log(907)
    next({ path: "/homePage" });
  }
  next()
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

