import Vue from "vue";
import Router from "vue-router";

import card from "@/components/card";

Vue.use(Router);
export default new Router({
  /*mode: 'history',*/ //由哈希路由换为history路由，此模式下，可去掉地址栏中的#号！但有其他缺陷需后台配置服务器！
  // mode: 'history',
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("@/components/login.vue"),
      meta: {
        title: "登陆"
      }
    },
    {
      path: "/logins",
      name: "logins",
      component: () => import("@/components/logins.vue"),
      meta: {
        title: "登录"
      }
    },

    {
      path: "/list",
      name: "list",
      component: () => import("@/components/list.vue"),
      meta: {
        title: "车牌列表"
      }
      // children: [
      //   {
      //     path: 'list',
      //     name: 'list',
      //     component: () => import('@/components/list.vue'),
      //     meta: {
      //       title: '车牌列表'
      //     }

      //   }
      // ]
    },
    {
      path: "/discount",
      name: "discount",
      component: () => import("@/components/discount.vue"),
      meta: {
        title: "优惠券码"
      }
    },
    {
      path: "/service",
      name: "service",
      component: () => import("@/components/service.vue"),
      meta: {
        title: "服务协议"
      }
    },
    {
      path: "/privacy",
      name: "privacy",
      component: () => import("@/components/privacy.vue"),
      meta: {
        title: "隐私政策"
      }
    },
    {
      path: "/card",
      name: "card",
      component: card,
      meta: {
        title: "车牌号码"
      }
    },

    {
      path: "/record",
      name: "record",
      component: () => import("@/components/record.vue"),
      meta: {
        title: "停车记录"
      }
    },
    {
      path: "/kong",
      name: "kong",
      component: () => import("@/components/kong.vue"),
      meta: {
        title: "卡券列表"
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
      path: "/people",
      name: "people",
      component: () => import("@/components/people.vue"),
      meta: {
        title: "个人中心"
      },
      children: [
        {
          path: "sheng",
          name: "sheng",
          component: () => import("@/components/sheng.vue"),
          meta: {
            title: "积分兑换"
          }
        },
        {
          path: "fuzhi",
          name: "fuzhi",
          component: () => import("@/components/fuzhi.vue"),
          meta: {
            title: "卡券列表"
          }
        },
        {
          path: "vip",
          name: "vip",
          component: () => import("@/components/vip.vue"),
          meta: {
            title: "会员开通"
          }
        },
        {
          path: "my",
          name: "my",
          component: () => import("@/page/my.vue"),
          meta: {
            title: "个人信息"
          }
        },
        {
          path: "carlist",
          name: "carlist",
          component: () => import("@/components/carlist.vue"),
          meta: {
            title: "车牌列表"
          }
        },
        {
          path: "viprecord",
          name: "viprecord",
          component: () => import("@/components/viprecord.vue"),
          meta: {
            title: "充值记录"
          }
        },
        {
          path: "washfuzhi",
          name: "washfuzhi",
          component: () => import("@/components/washcar/washfuzhi.vue"),
          meta: {
            title: "洗车卡券列表"
          }
        },
        {
          path: "washvip",
          name: "washvip",
          component: () => import("@/components/washcar/vip.vue"),
          meta: {
            title: "洗车会员开通"
          }
        },
        {
          path: "washviprecord",
          name: "washviprecord",
          component: () => import("@/components/washcar/viprecord.vue"),
          meta: {
            title: "洗车充值记录"
          }
        },
        {
          path: "washrecord",
          name: "washrecord",
          component: () => import("@/components/washcar/washrecord.vue"),
          meta: {
            title: "洗车记录"
          }
        }
      ]
    },
    {
      path: "/shengcheng",
      name: "shengcheng",
      component: () => import("@/components/shengcheng.vue"),
      meta: {
        title: "积分兑换"
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
      path: "/foot",
      name: "foot",
      component: () => import("@/components/foot.vue"),
      meta: {
        title: "停车记录"
      }
    },
    {
      path: "/payyuyue",
      name: "payyuyue",
      component: () => import("@/components/payyuyue.vue"),
      meta: {
        title: "支付"
      }
    },
    {
      path: "/vipcard",
      name: "vipcard",
      component: () => import("@/components/vipcard.vue"),
      meta: {
        title: "vip会员"
      }
    },
    {
      path: "/carNumberSearch",
      name: "carNumberSearch",
      component: () => import("@/components/carNumberSearch.vue"),
      meta: {
        title: "车牌查询"
      }
    },
    {
      path: "/carOrderPay",
      name: "carOrderPay",
      component: () => import("@/components/carOrderPay.vue"),
      meta: {
        title: "订单支付"
      }
    },
    {
      path: "/carCoupon",
      name: "carCoupon",
      component: () => import("@/components/carCoupon.vue"),
      meta: {
        title: "优惠券"
      }
    },
    {
      path: "/carFollow",
      name: "carFollow",
      component: () => import("@/components/carFollow.vue"),
      meta: {
        title: "关注"
      }
    }
  ]
});
