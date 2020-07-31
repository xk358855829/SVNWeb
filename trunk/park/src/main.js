// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import index from './index.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import '../static/fugai.css'
import '../src/assets/css/iconfont.css'
import '../src/assets/css1/iconfont.css'
import '../src/assets/css2/iconfont.css'
import Blob from './excel/Blob.js'
import Export2Excel from './excel/Export2Excel.js'
import './components/api/interceptor'
import $ from 'jquery'
import common from './../common/common.js'
import gloal from './api/global'
import Cookies from 'js-cookie'
import preview from "vue-photo-preview";
import "vue-photo-preview/dist/skin.css";
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'videojs-flash'
Vue.use(VideoPlayer)
Vue.use(preview); 
// import './icons'
Vue.prototype.common = common;
Vue.prototype.gloal = gloal
/*Vue.prototype.$echarts = echarts*/
Vue.use(ElementUI);

router.beforeEach((to, from, next) => {
  if (to.path == '/pageLogin') {
    sessionStorage.removeItem('userAlias');
  }
  if (to.meta.title) {
    document.title = to.meta.title
  }
  let userName = sessionStorage.getItem('userAlias');

  if (!userName && to.path != '/pageLogin' && to.path != '/pageRegister') {
    next({
      path: '/pageLogin'
    });
  } else {
    next();
  }
});

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { index },
  template: '<index/>'
})
