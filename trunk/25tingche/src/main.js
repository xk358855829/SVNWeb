// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import axios from "axios";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Calendar from "vue-mobile-calendar";
import VueWechatTitle from "vue-wechat-title";
// import FastClick from 'fastclick'
import moment from "moment/moment";

import Mui from "vue-awesome-mui";
Vue.use(Mui);

// FastClick.attach(document.body);
Vue.use(VueWechatTitle);
Vue.use(Calendar);
Vue.use(ElementUI);
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
Vue.prototype.$http = axios;
Vue.config.productionTip = false;
// Vue.prototype.httpUrl = 'http://39.104.113.112:2088';
// Vue.prototype.openid = 'o8Aq-5gAUA6dtxc059K4AI6LZ6sw';
Vue.prototype.openid = localStorage.getItem("openid");
Vue.prototype.httpUrl = "http://114.55.168.103:2088";
// Vue.prototype.httpUrl = 'http://192.168.2.141:8086/ZFBrake'

Vue.prototype.oldurl = "http://114.55.168.103:8762";
Vue.prototype.aaa = "http://39.104.113.112:2088";
// Vue.prototype.oldurl = 'http://192.168.2.143:8762'
//Vue.prototype.httpUrl = 'http://192.168.2.129:8080/BlockEven/';

// Vue.prototype.washhttpUrl = "http://192.168.2.143:8797";
Vue.prototype.washhttpUrl = "http://114.55.168.103:8797";

// Vue.prototype.washurl = "http://192.168.2.141:8086/ZFBrake";
Vue.prototype.washurl = "http://114.55.168.103:2088";
/* eslint-disable no-new */
Vue.use(MintUI);

Vue.filter("change", function(val) {
  if (val == "1") {
    val = "免费时长";
  } else if (val == "2") {
    val = "抵用券";
  } else if (val == "3") {
    val = "满减券";
  } else if (val == "4") {
    val = "折扣";
  }
  return val;
});
router.beforeEach((to, from, next) => {
  console.log(from);
  console.log(to);
  // if (from.name == 'people' && localStorage.getItem('phone') && to.name == 'login') {
  //   console.log(10)
  //   next({ path: '/people', query: { redirect: from.fullPath } })
  // }
  // if (from.path == '/home/list' && localStorage.getItem('phone') && to.name == 'login') {
  //   next({ path: '/home/list', query: { redirect: from.fullPath } })
  // }

  if (
    from.name == "vip" &&
    localStorage.getItem("phone") &&
    to.name != "people"
  ) {
    window.addEventListener(
      "popstate",
      function(e) {
        console.log(10);
        window.location.href =
          "http://cloud.parkingmore.cn/mp/total/indexyuyue.html?1562930068936#/parkingLot";
      },
      false
    );
  } else {
  }
  if (to.meta.title) {
    document.title = to.meta.title;
    // console.log(document.title)
  }
  next();
});

new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>",
});
