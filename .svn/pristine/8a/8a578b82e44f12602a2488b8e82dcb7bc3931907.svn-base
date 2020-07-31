import Vue from "vue";
// import "vant/lib/index.css";
import App from "./App.vue";
import router from "./router/index";
// import "@/assets/style/font/iconfont.css";
import "@/assets/style/index.less";
import $axios from "@/utils/request";
import mixin from "./mixin/index";
import store from "./store/index";
import qs from "qs"
import axios from 'axios'
import wx from 'weixin-js-sdk'

import "@/components/Vant";
import { Switch, Step, Steps, Checkbox, CheckboxGroup, DatetimePicker, Toast, Dialog } from 'vant';
// rem
import "amfe-flexible";
axios.defaults.headers.post["Content-Type"] = "application/json";
// 把变量挂载到vue的原型上
Vue.prototype.$axios = $axios;

Vue.mixin(mixin);

Vue.config.productionTip = false;

Vue.use(Switch);
Vue.use(Step);
Vue.use(Steps);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(DatetimePicker);
Vue.use(Toast);
Vue.use(Dialog);
Vue.use(qs);

// Vue.prototype.url = "http://192.168.2.195:8711";
Vue.prototype.url = "http://39.104.99.181:8711";
// Vue.prototype.surl = "http://192.168.2.143:8711";
Vue.prototype.surl = "http://39.104.99.181:8711";
// Vue.prototype.lurl = "http://192.168.2.123:8711";
Vue.prototype.lurl = "http://39.104.99.181:8711";

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");

router.afterEach(route => {
  Dialog.close();
  Toast.clear();
});