import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './font/style.css'
import Calendar from 'vue-mobile-calendar'
import axios from 'axios'
import Mint from 'mint-ui';
Vue.use(Mint);
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Calendar)
Vue.prototype.$http = axios
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    let login = JSON.parse(localStorage.getItem('login'))
    if (login) {
      next()
    } else {
      next('/')
    }
  } else {
    next()
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
