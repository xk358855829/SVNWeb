// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import index from './index'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'


import Blob from './excel/Blob.js'
import Export2Excel from './excel/Export2Excel.js'

import $ from 'jquery'

import common from './../common/common.js'
Vue.prototype.common = common;
/*Vue.prototype.$echarts = echarts*/
Vue.use(ElementUI);

Vue.config.productionTip = false
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { index },
  template: '<index/>'
})
