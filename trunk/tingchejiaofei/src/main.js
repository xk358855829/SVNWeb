// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Calendar from 'vue-mobile-calendar'
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)
Vue.use(Calendar)
Vue.use(ElementUI)
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$http = axios
Vue.config.productionTip = false
// Vue.prototype.httpUrl = 'http://39.104.113.112:2088';
// Vue.prototype.openid = 'oOKex1Ow5nB_qymzrzj4L7Gm7snU';
Vue.prototype.openid = localStorage.getItem('openid');
// Vue.prototype.httpUrl = 'http://114.55.168.103:2088'
Vue.prototype.httpUrl = 'http://39.104.113.112:2088'
//Vue.prototype.httpUrl = 'http://192.168.2.129:8080/BlockEven/';
/* eslint-disable no-new */
Vue.use(MintUI)

Vue.filter('change',function(val){
  if(val=="1"){
    val='免费时长'
  }else if(val=="2"){
    val='抵用券'
  }else if(val="3"){
    val='满减券'
  }
  return val
})
router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    console.log(to.meta.title)
    document.title=to.meta.title
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

