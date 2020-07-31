import Vue from "vue";
import Router from "vue-router";
import washingList from "@/components/washingList";
import orders from "@/components/orders";
import card from "@/components/card";
import service from "@/components/service";
import privacy from "@/components/privacy";
import login from "@/components/login";

Vue.use(Router);

export default new Router({
  /*mode: 'history',*/ //由哈希路由换为history路由，此模式下，可去掉地址栏中的#号！但有其他缺陷需后台配置服务器！
  routes: [
    {
      path: "/",
      name: "login",
      component: login,
      meta: {
        title: "登录"
      }
    },
    {
      path: "/login",
      name: "login",
      component: login,
      meta: {
        title: "登录"
      }
    },
    {
      path: "/washingList",
      name: "washingList",
      component: washingList,
      meta: {
        title: "站点列表"
      }
    },
    {
      path: "/orders",
      name: "orders",
      component: orders,
      meta: {
        title: "站点详情"
      }
    },
    {
      path: "/carinplace",
      name: "carinplace",
      component: () => import("@/components/carinplace.vue"),
      meta: {
        title: "车辆到位"
      }
    },
    {
      path: "/carwashing",
      name: "carwashing",
      component: () => import("@/components/carwashing.vue"),
      meta: {
        title: "站点状态"
      }
    },
    {
      path: "/carstop",
      name: "carstop",
      component: () => import("@/components/carstop.vue"),
      meta: {
        title: "站点维护"
      }
    },
    {
      path: "/pay",
      name: "pay",
      component: () => import("@/components/pay.vue"),
      meta: {
        title: "洗车支付"
      }
    },
    {
      path: "/4Spay",
      name: "4Spay",
      component: () => import("@/components/4Spay.vue"),
      meta: {
        title: "洗车支付"
      }
    },
    {
      path: "/finishWash",
      name: "finishWash",
      component: () => import("@/components/finishWash.vue"),
      meta: {
        title: "洗车完成"
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
          path: "vipCard",
          name: "vipCard",
          component: () => import("@/components/vipCard.vue"),
          meta: {
            title: "会员卡片"
          }
        },
        {
          path: "vipCardList",
          name: "vipCardList",
          component: () => import("@/components/vipCardList.vue"),
          meta: {
            title: "办理会员卡"
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
          component: () => import("@/components/my.vue"),
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
        }
      ]
    },
    {
      path: "/fuzhi",
      name: "fuzhi",
      component: () => import("@/components/fuzhi.vue"),
      meta: {
        title: "优惠券"
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
      path: "/service",
      name: "service",
      component: service,
      meta: {
        title: "服务条款"
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
      path: "/attention",
      name: "attention",
      component: () => import("@/components/attention.vue"),
      meta: {
        title: "注意事项"
      }
    },
    {
      path: "/washing",
      name: "washing",
      component: () => import("@/components/washing.vue"),
      meta: {
        title: "洗车中"
      }
    },
    {
      path: "/washrecord",
      name: "washrecord",
      component: () => import("@/components/washrecord.vue"),
      meta: {
        title: "订单列表"
      }
    },
    {
      path: "/detailed",
      name: "detailed",
      component: () => import("@/components/detailed.vue"),
      meta: {
        title: "订单详情"
      }
    },
    {
      path: "/getcoupon",
      name: "getcoupon",
      component: () => import("@/components/getCoupon.vue"),
      meta: {
        title: "领取优惠券"
      }
    },
    {
      path: "/rightnow",
      name: "rightnow",
      component: () => import("@/components/rightnow.vue"),
      meta: {
        title: "立即洗车"
      }
    },
    {
      path: "/howWash",
      name: "howWash",
      component: () => import("@/components/howwash.vue"),
      meta: {
        title: "如何洗车"
      }
    },
    {
      path: "/share",
      name: "share",
      component: () => import("@/components/share.vue"),
      meta: {
        title: "邀请好友"
      }
    },
    {
      path: "/sharepeople",
      name: "sharepeople",
      component: () => import("@/components/sharepeople.vue"),
      meta: {
        title: "邀请好友"
      }
    },
    {
      path: "/sharesuccess",
      name: "sharesuccess",
      component: () => import("@/components/sharesuccess.vue"),
      meta: {
        title: "邀请好友"
      }
    },
    {
      path: "/test",
      name: "test",
      component: () => import("@/components/test.vue"),
      meta: {
        title: "启动洗车机"
      }
    },
    {
      path: "/washFollow",
      name: "washFollow",
      component: () => import("@/components/washFollow.vue"),
      meta: {
        title: "关注"
      }
    },
    {
      path: "/vipGive",
      name: "vipGive",
      component: () => import("@/components/vipGive.vue"),
      meta: {
        title: "转赠会员卡",
      },
    },
    {
      path: "/vipGivePeople",
      name: "vipGivePeople",
      component: () => import("@/components/vipGivePeople.vue"),
      meta: {
        title: "领取会员卡",
      },
    },
    // {
    //   path: "/shengcheng",
    //   name: "shengcheng",
    //   component: () => import("@/components/shengcheng.vue"),
    //   meta: {
    //     title: "积分抵扣",
    //   },
    // },
  ]
});
