import Vue from "vue";
import Router from "vue-router";
import homePage from "@/components/homePage";
import search from "@/components/search";
import parkingLot from "@/components/parkingLot";
import orders from "@/components/orders";
import orderTwo from "@/components/orderTwo";
import orderList from "@/components/orderList";
import detailed from "@/components/detailed";
import card from "@/components/card";
import cardList from "@/components/cardList";
// import control from '@/components/control'
import records from "@/components/records";
import money from "@/components/money";
import codeOrder from "@/components/codeOrder";
import parkingRecord from "@/components/parkingRecord";
import saoyisao from "@/components/saoyisao";
import setUp from "@/components/setUp";
import service from "@/components/service";
import privacy from "@/components/privacy";
import setPhone from "@/components/setPhone";
import validate from "@/components/validate";
import modifyPhone from "@/components/modifyPhone";
import unphone from "@/components/unphone";

import login from "@/components/customer/login";
import list from "@/components/list";
import listPage from "@/components/list/list";
Vue.use(Router);

export default new Router({
  /*mode: 'history',*/ //由哈希路由换为history路由，此模式下，可去掉地址栏中的#号！但有其他缺陷需后台配置服务器！
  routes: [
    {
      path: "/homePage",
      name: "homePage",
      component: homePage,
      meta: {
        title: "首页"
      }
    },
    {
      path: "/search",
      name: "search",
      component: search,
      meta: {
        title: "搜索"
      }
    },
    {
      path: "/parkingLot",
      name: "parkingLot",
      component: parkingLot,
      meta: {
        title: "停车场列表"
      }
    },
    {
      path: "/orders",
      name: "orders",
      component: orders,
      meta: {
        title: "进入预约"
      }
    },
    {
      path: "/orderList",
      name: "orderList",
      component: orderList,
      meta: {
        title: "订单列表"
      }
    },
    {
      path: "/detailed",
      name: "detailed",
      component: detailed,
      meta: {
        title: "订单信息",
        keepalive: false
      }
    },
    {
      path: "/orderTwo",
      name: "orderTwo",
      component: orderTwo,
      meta: {
        title: "确认预约"
      }
    },
    {
      path: "/shengcheng",
      name: "shengcheng",
      component: () => import("@/components/shengcheng.vue"),
      meta: {
        title: "积分抵扣"
      }
    },
    {
      path: "/card",
      name: "card",
      component: card,
      meta: {
        title: "添加车牌"
      }
    },
    {
      path: "/cardList",
      name: "cardList",
      component: cardList,
      meta: {
        title: "车牌列表"
      }
    },
    {
      path: "/list",
      name: "list",
      component: list,
      meta: {
        title: "车牌列表"
      }
    },
    {
      path: "/unphone",
      name: "unphone",
      component: unphone,
      meta: {
        title: "帮助与反馈"
      }
    },
    {
      path: "/records",
      name: "records",
      component: records,
      meta: {
        title: "停车记录"
      }
    },
    {
      path: "/money",
      name: "money",
      component: money,
      meta: {
        title: "付款"
      }
    },
    {
      path: "/codeOrder",
      name: "codeOrder",
      component: codeOrder,
      meta: {
        title: "扫码下单"
      }
    },
    {
      path: "/saoyisao",
      name: "saoyisao",
      component: saoyisao,
      meta: {
        title: "扫码下单"
      }
    },
    {
      path: "/parkingRecord",
      name: "parkingRecord",
      component: parkingRecord,
      meta: {
        title: "停车记录"
      }
    },
    {
      path: "/setUp",
      name: "setUp",
      component: setUp,
      meta: {
        title: "设置"
      }
    },
    {
      path: "/service",
      name: "service",
      component: service,
      meta: {
        title: "服务条款"
      }
    },
    {
      path: "/setPhone",
      name: "setPhone",
      component: setPhone,
      meta: {
        title: "绑定手机号码"
      }
    },
    {
      path: "/privacy",
      name: "privacy",
      component: privacy,
      meta: {
        title: "隐私协议"
      }
    },
    {
      path: "/validate",
      name: "validate",
      component: validate,
      meta: {
        title: "验证码"
      }
    },
    {
      path: "/modifyPhone",
      name: "modifyPhone",
      component: modifyPhone,
      meta: {
        title: "手机号码"
      }
    },
    {
      path: "/pay",
      name: "pay",
      component: () => import("@/components/pay.vue"),
      meta: {
        title: "停车支付"
      }
    },
    {
      path: "/payyuyue",
      name: "payyuyue",
      component: () => import("@/components/payyuyue.vue"),
      meta: {
        title: "停车支付"
      }
    },
    {
      path: "/fuzhi",
      name: "fuzhi",
      component: () => import("@/components/fuzhi.vue"),
      meta: {
        title: "优惠券"
      }
    },
    ,
    {
      path: "/",
      name: "login",
      component: login,
      meta: {
        title: "登录"
      }
    },
    {
      path: "/b",
      name: "b",
      component: () => import("@/view/b.vue"),
      meta: {
        title: "登录"
      }
    },
    {
      path: "/return",
      name: "return",
      component: () => import("@/components/return.vue"),
      meta: {
        title: "支付成功"
      }
    },
    {
      path: "/lock",
      name: "lock",
      component: () => import("@/components/lock.vue"),
      meta: {
        title: "我的车位"
      }
    },

    {
      path: "/home",
      name: "home",
      component: () => import("@/components/home/home"),
      meta: {
        title: "主页"
      }
    },
    // {
    //   path: "/home",
    //   name: "home",
    //   component: () => import("@/components/home/wash"),
    //   meta: {
    //     title: "主页",
    //   },
    // },
    {
      path: "/success",
      name: "success",
      component: () => import("@/components/success"),
      meta: {
        title: "开柜成功"
      }
    },
    {
      path: "/listPage",
      name: "listPage",
      component: () => import("@/components/list/list"),
      meta: {
        title: "下单"
      }
    },
    {
      path: "/inputadress",
      name: "inputadress",
      component: () => import("@/components/list/inputadress.vue"),
      meta: {
        title: "添加停车场地址"
      }
    },
    {
      path: "/inputdetail",
      name: "inputdetail",
      component: () => import("@/components/list/inputdetail.vue"),
      meta: {
        title: "添加备注"
      }
    },
    {
      path: "/geren",
      name: "geren",
      component: () => import("@/components/geren/geren"),
      meta: {
        title: "我的"
      }
    },
    {
      path: "/my",
      name: "my",
      component: () => import("@/components/geren/my"),
      meta: {
        title: "我的"
      }
    },
    {
      path: "/detail",
      name: "detail",
      component: () => import("@/components/geren/detail"),
      meta: {
        title: "订单列表"
      }
    },
    {
      path: "/bangding",
      name: "bangding",
      component: () => import("@/components/bangding"),
      meta: {
        title: "我的"
      }
    },
    {
      path: "/changephone",
      name: "changephone",
      component: () => import("@/components/changephone"),
      meta: {
        title: "我的"
      }
    },
    {
      path: "/pages",
      name: "pages",
      component: () => import("@/view/pages.vue"),
      meta: {
        title: "我的"
      }
    },
    {
      path: "/order",
      name: "order",
      component: () => import("@/components/order"),
      meta: {
        title: "订单详情"
      }
    },
    {
      path: "/carnumber",
      name: "carnumber",
      component: () => import("@/components/carnumber"),
      meta: {
        title: "车牌列表"
      }
    },
    {
      path: "/none",
      name: "none",
      component: () => import("@/components/none"),
      meta: {
        title: "我的爱车"
      }
    },
    // {
    //   path: '/herad',
    //   name: 'herad',
    //   component: () => import('@/components/herad'),
    //   meta: {
    //     title: '我的爱车'
    //   }
    // },
    {
      path: "/add",
      name: "add",
      component: () => import("@/components/add"),
      meta: {
        title: "添加车牌"
      }
    },
    {
      path: "/parkingSMS",
      name: "parkingSMS",
      component: () => import("@/components/parkingSMS"),
      meta: {
        title: "停车场列表"
      }
    },
    {
      path: "/parkingAppointment",
      name: "parkingAppointment",
      component: () => import("@/components/parkingAppointment"),
      meta: {
        title: "进入预约"
      }
    },
    {
      path: "/parkingFollow",
      name: "parkingFollow",
      component: () => import("@/components/parkingFollow"),
      meta: {
        title: "关注"
      }
    }
  ]
});
