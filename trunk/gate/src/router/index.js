import Vue from "vue";
import Router from "vue-router";
import store from "../store/index";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/login"
    },    
    {
      path: "/login",
      component: () => import("@/views/login/index"),
      meta: {
        title: "登录"
      }
    },
    {
      path: "/add",
      component: () => import("@/views/add/add"),
      meta: {
        title: "门磁"
      }
    },
    {
      path: "/addDevice",
      component: () => import("@/views/add/addDevice"),
      meta: {
        title: "添加设备"
      }
    },
    {
      path: "/calibrationone",
      component: () => import("@/views/calibration/calibrationone"),
      meta: {
        title: "校准"
      }
    }, 
    {
      path: "/calibrationtwo",
      component: () => import("@/views/calibration/calibrationtwo"),
      meta: {
        title: "校准"
      }
    },  
    {
      path: "/deviceList",
      component: () => import("@/views/device/deviceList"),
      meta: {
        title: "设备列表"
      }
    },
    {
      path: "/deviceStatus",
      component: () => import("@/views/device/deviceStatus"),
      meta: {
        title: "设备状态"
      }
    },
    {
      path: "/setting",
      component: () => import("@/views/setting/setting"),
      meta: {
        title: "设置"
      }
    },
    {
      path: "/settingInfo",
      component: () => import("@/views/setting/settingInfo"),
      meta: {
        title: "设置详细信息"
      }
    },
    {
      path: "/deviceInfo",
      component: () => import("@/views/device/deviceInfo"),
      meta: {
        title: "设备信息"
      }
    },
    {
      path: "/deviceRecord",
      component: () => import("@/views/device/deviceRecord"),
      meta: {
        title: "设备记录"
      }
    },
    {
      path: "/test",
      component: () => import("@/views/test/test"),
      meta: {
        title: "测试"
      }
    },
    // {
    //   path: "/my",
    //   component: () => import("@/views/my/index"),
    //   redirect: "/my/center",
    //   children: [
    //     {
    //       path: "center",
    //       meta: {
    //         title: "个人中心"
    //       },
    //       component: () => import("@/views/my/children/center")
    //     },
    //     {
    //       path: "set",
    //       meta: {
    //         title: "设置"
    //       },
    //       component: () => import("@/views/my/children/set")
    //     }
    //   ]
    // },    
    {
      path: "*",
      component: () => import("@/components/NotFound")
    }
  ]
});

router.beforeEach((to, from, next) => {
  let { title, needLogin } = to.meta;
  let { isLogin } = store.state;
  document.title = title;

  if (needLogin && !isLogin) {
    next({
      path: "/login"
    });
  } else {
    next();
  }
});

export default router;
