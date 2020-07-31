import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import getters from "./getters";
import actions from "./action";

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  actions,
  getters,
  mutations,
  state: {
    ids: "",
    exportIds: "",
    // 导航条, 布局风格, defalut(白色) / colorful(鲜艳)
    navbarLayoutType: "colorful",
    // 侧边栏, 布局皮肤, default(白色) / dark(黑色)
    sidebarLayoutSkin: "dark",
    // 侧边栏, 折叠状态
    sidebarFold: false,
    // 侧边栏, 菜单
    sidebarMenuList: [], //整理好的侧边栏
    sideList: [], //后台返回的侧边栏
    sidebarMenuActiveName: "",
    // 内容, 是否需要刷新
    contentIsNeedRefresh: false,
    // 内容, 标签页(默认添加首页)
    contentTabs: [
      {
        ...window.SITE_CONFIG["contentTabDefault"],
        name: "home",
        title: "home"
      }
    ],
    contentTabsActiveName: "home",
    dataForm: "", //获取网关信息刷新
    bindTotal: "", //设备绑定用户总数
    deviceList: [], //设备列表
    deviceTotal: "", //设备总数
  }
});
