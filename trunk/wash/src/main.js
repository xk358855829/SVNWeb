// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import Mint from "mint-ui";
import VueScroller from "vue-scroller";
Vue.use(VueScroller);
Vue.use(Mint);
import "mint-ui/lib/style.css";
import VueLazyload from "vue-lazyload";
import { MessageBox, Indicator } from "mint-ui";
// import returnCitySN from 'returnCitySN' // 新浪 获取设备IP

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.prototype.httpUrl = "http://114.55.168.103:8762/";
// Vue.prototype.httpUrl = "http://39.104.99.181:8762/";
Vue.prototype.oldhttpUrl = "http://114.55.168.103:8797";
// Vue.prototype.oldhttpUrl = "http://39.104.99.181:8797";

// Vue.prototype.washhttpUrl = "http://192.168.2.195:8797";
Vue.prototype.washhttpUrl = "http://114.55.168.103:8797";
// Vue.prototype.washhttpUrl = "http://39.104.99.181:8797";
// Vue.prototype.wash_test_url = "http://192.168.2.195:8797";
Vue.prototype.wash_test_url = "http://39.104.99.181:8797";

// Vue.prototype.washurl = "http://192.168.2.195:2088/ZFBrake";
Vue.prototype.washurl = "http://114.55.168.103:2088";
// Vue.prototype.washurl = "http://39.104.113.112:2088";

Vue.prototype.testOpenid =
  // localStorage.getItem("openid")
  "oOKex1ETMNMC3iNsMwHVRWWWB8Gs";
Vue.use(ElementUI);
Vue.use(VueLazyload);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: "dist/error.png",
  loading: "dist/loading.gif",
  attempt: 1,
});
Vue.config.productionTip = false;
// /* eslint-disable no-new */
Vue.filter("change", function(val) {
  if (val == "1") {
    val = "免费时长";
  } else if (val == "2") {
    val = "抵用券";
  } else if (val == "3") {
    val = "满减券";
  } else {
    val = "折扣券";
  }
  return val;
});
// let equipmentIp = returnCitySN.cip;
// router.beforeEach((to, from, next) => {
//   if (to.meta.title) {
//     console.log(to.meta.title);
//     window.document.title = to.meta.title;
//   }
//   if (to.path == "/washingList" && sessionStorage.getItem("token")) {
//     next({ path: "/washingList" });
//   }
//   next();
// });
new Vue({
  el: "#app",
  router,
  store,
  // returnCitySN,
  components: { App },
  template: "<App/>",
});
// const router = new VueRouter({
//   routes,
// });
router.afterEach(route => {
  MessageBox.close();
  Indicator.close();
});