// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import index from './index'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'

import '../src/assets/css/iconfont.css'
import Blob from './excel/Blob.js'
import Export2Excel from './excel/Export2Excel.js'

import $ from 'jquery'
import common from './../common/common.js'
Vue.prototype.common = common;
/*Vue.prototype.$echarts = echarts*/
Vue.use(ElementUI);

Vue.config.productionTip = false
/* eslint-disable no-new */
// filters:{
//     myTextTransform: function (myInput,isUpper) {
//         if(isUpper)
//         {
//             return myInput.toUpperCase();
//         }
//         else{
//             return myInput.toLowerCase();
//         }
//     }
// }
router.beforeEach((to, from, next) => {
  if (to.path == '/pageLogin') {
      sessionStorage.removeItem('userAlias');
  }
  let userName =sessionStorage.getItem('userAlias');
  if (!userName && to.path != '/pageLogin') {
      next({
          path: '/pageLogin'
      });
  } else {
      next();
  }
});
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
return response;
}, function (err) {
    if (err && err.response) {
        switch (err.response.status) {
          case 400:
            Vue.prototype.$message({
                type: "error",
                message: "请求错误"
            });
            err.message = '请求错误'
            break
    
          case 401:
            Vue.prototype.$message({
                type: "error",
                message: "未授权，请登录"
            });
            err.message = '未授权，请登录'
            break
    
          case 403:
            Vue.prototype.$message({
                type: "error",
                message: "拒绝访问"
            });
            err.message = '拒绝访问'
            break
    
          case 404:
            Vue.prototype.$message({
                type: "error",
                message: "请求地址出错"
            });
            err.message = `请求地址出错: ${err.response.config.url}`
            break
    
          case 408:
            Vue.prototype.$message({
                type: "error",
                message: "请求超时"
            });
            err.message = '请求超时'
            break
    
          case 500:
            Vue.prototype.$message({
                type: "error",
                message: "服务器内部错误"
            });
            err.message = '服务器内部错误'
            break
    
          case 501:
            Vue.prototype.$message({
                type: "error",
                message: "服务未实现"
            });
            err.message = '服务未实现'
            break
    
          case 502:
            Vue.prototype.$message({
                type: "error",
                message: "网关错误"
            });
            err.message = '网关错误'
            break
    
          case 503:
            Vue.prototype.$message({
                type: "error",
                message: "服务不可用"
            });
            err.message = '服务不可用'
            break
    
          case 504:
            Vue.prototype.$message({
                type: "error",
                message: "网关超时"
            });
            err.message = '网关超时'
            break
    
          case 505:
            Vue.prototype.$message({
                type: "error",
                message: "HTTP版本不受支持"
            });
            err.message = 'HTTP版本不受支持'
            break
    
          default:
        }
    }
return Promise.reject(err);
});


new Vue({
  el: '#app',
  router,
  store,
  components: { index },
  template: '<index/>'
})
