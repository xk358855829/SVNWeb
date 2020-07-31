import Vue from 'vue'
import Router from 'vue-router'
import http from '@/utils/request'
import { isURL } from '@/utils/validate'
import apiUrl from '@/config/baseUrl.js'

// const routerPush = Router.prototype.push
Vue.use(Router)

// Router.prototype.push = function push(location) {
//     return routerPush.call(this, location).catch(err => err)
// }

// 页面路由(独立页面)
export const pageRoutes = [
    {
        path: '/404',
        component: () => import('@/views/pages/404'),
        name: '404',
        meta: { title: '404未找到' },
        beforeEnter(to, from, next) {
            // 拦截处理特殊业务场景
            // 如果, 重定向路由包含__双下划线, 为临时添加路由
            if (/__.*/.test(to.redirectedFrom)) {
                return next(to.redirectedFrom.replace(/__.*/, ''))
            }
            next()
        }
    },
    { path: '/login', component: () => import('@/views/pages/login'), name: 'login', meta: { title: '登录' } },
]

// 模块路由(基于主入口布局页面)
export const moduleRoutes = {
         path: "/",
         component: () => import("@/views/main"),
         name: "main",
         redirect: { name: "home" },
         meta: { title: "主入口布局" },
         children: [
           {
             path: "/home",
             component: () => import("@/views/modules/runmonitor/home"),
             name: "home",
             meta: { title: "首页", isTab: true, menuId: "1" }
           },
          //  {
          //    path: "/usersList",
          //    component: () => import("@/views/modules/account/roleList"),
          //    name: "usersList",
          //    meta: { title: "账户列表", isTab: true, menuId: "4" }
          //  },
          //  {
          //    path: "/deviceList",
          //    component: () => import("@/views/modules/device/deviceList"),
          //    name: "deviceList",
          //    meta: { title: "设备列表", isTab: true, menuId: "5" }
          //  },
          //  {
          //    path: "/deviceBind",
          //    component: () => import("@/views/modules/device/deviceBind"),
          //    name: "deviceBind",
          //    meta: { title: "设备绑定列表", isTab: true, menuId: "6" }
          //  },
          //  {
          //    path: "/deviceRecord",
          //    component: () => import("@/views/modules/device/deviceRecord"),
          //    name: "deviceRecord",
          //    meta: { title: "设备记录", isTab: true, menuId: "7" }
          //  },
          //  {
          //    path: "/alarmInfo",
          //    component: () => import("@/views/modules/device/alarmInfo"),
          //    name: "alarmInfo",
          //    meta: { title: "报警信息", isTab: true, menuId: "8" }
          //  },
         ]
       };

const router = new Router({
    mode: 'hash',
    scrollBehavior: () => ({ y: 0 }),
    routes: pageRoutes.concat(moduleRoutes)
})

router.beforeEach((to, from, next) => {
    // 添加动态(菜单)路由
    // 已添加或者当前路由为页面路由, 可直接访问
    if (window.SITE_CONFIG['dynamicMenuRoutesHasAdded'] || fnCurrentRouteIsPageRoute(to, pageRoutes)) {
        return next()
    }
    // 获取菜单列表, 添加并全局变量保存
  http.post(apiUrl.baseUrl + '/webUser/findUserMenu', JSON.stringify({ userid: localStorage.getItem("userid")})).then((res) => {
        console.log(res);
        if (res.code == 0){
            let sideList = res.data;
              // activeName = [
              //   {
              //     menuId: "1",
              //     menuAssociated: "0",
              //     menuName: "首页",
              //     menuPagename: "home",
              //     menuLevel: 0,
              //     menuAddress: "home.png",
              //     permissions: "",
              //     menuSort: 0
              //   },
              //   {
              //     menuAddress: "users_mng.png",
              //     menuAssociated: "0",
              //     menuId: "2",
              //     menuLevel: "0",
              //     menuName: "用户管理",
              //     menuPagename: "usersMng",
              //     menuSort: "2",
              //     children: [
              //       {
              //         menuAddress: "users_list.png",
              //         menuAssociated: "2",
              //         menuId: "4",
              //         menuLevel: "1",
              //         menuName: "用户列表",
              //         menuPagename: "usersList",
              //         menuSort: "4",
              //       }
              //     ]
              //   },
              //   {
              //     menuAddress: "device_mng.png",
              //     menuAssociated: "0",
              //     menuId: "3",
              //     menuLevel: "0",
              //     menuName: "设备管理",
              //     menuPagename: "deviceMng",
              //     menuSort: "3",
              //     children: [
              //       {
              //         menuAddress: "device_list.png",
              //         menuAssociated: "3",
              //         menuId: "5",
              //         menuLevel: "1",
              //         menuName: "设备列表",
              //         menuPagename: "deviceList",
              //         menuSort: "5",
              //       },
              //       {
              //         menuAddress: "device_bind.png",
              //         menuAssociated: "3",
              //         menuId: "6",
              //         menuLevel: "1",
              //         menuName: "设备绑定列表",
              //         menuPagename: "deviceBind",
              //         menuSort: "6",
              //       },
              //       {
              //         menuAddress: "device_record.png",
              //         menuAssociated: "3",
              //         menuId: "7",
              //         menuLevel: "1",
              //         menuName: "设备记录",
              //         menuPagename: "deviceRecord",
              //         menuSort: "7",
              //       },
              //       {
              //         menuAddress: "alarm_info.png",
              //         menuAssociated: "3",
              //         menuId: "8",
              //         menuLevel: "1",
              //         menuName: "报警信息",
              //         menuPagename: "alarmInfo",
              //         menuSort: "8",
              //       }
              //     ]
              //   }
              // ];
          let length = sideList.length, arr = [], activeName = [];
            for (let i = 0; i < length; i++) {
              if (sideList[i].menuLevel == 0) {
                let obj = {};
                obj= sideList[i];
                obj.children = [];
                activeName.push(obj);
              } else {
                arr.push(sideList[i]);
              }
            }
            for (let i = 0; i < arr.length; i++) {
              for (let j = 0; j < activeName.length; j++) {
                if (arr[i].menuAssociated == activeName[j].menuId) {
                  activeName[j].children.push(arr[i]);
                }
              }
            }
            console.log(activeName);
            window.SITE_CONFIG["menuList"] = activeName;
            window.SITE_CONFIG["sideList"] = res.data;
            fnAddDynamicMenuRoutes(window.SITE_CONFIG["menuList"]);
            next({ ...to, replace: true });
        } else {
          // Vue.prototype.$message.error(res.message);
          return next({ name: "login" });
        }            
    }).catch(() => {
        next({ name: 'login' })
    })
})

router.onError((error) => {
    const pattern = /Loading chunk (\d)+ failed/g;
    const isChunkLoadFailed = error.message.match(pattern);
    const targetPath = router.history.pending.fullPath;
    if (isChunkLoadFailed) {
        router.replace(targetPath);
    }
});

/**
 * 判断当前路由是否为页面路由
 * @param {*} route 当前路由
 * @param {*} pageRoutes 页面路由
 */
function fnCurrentRouteIsPageRoute(route, pageRoutes = []) {
    var temp = []
    for (var i = 0; i < pageRoutes.length; i++) {
        if (route.path === pageRoutes[i].path) {
            return true
        }
        if (pageRoutes[i].children && pageRoutes[i].children.length >= 1) {
            temp = temp.concat(pageRoutes[i].children)
        }
    }
    return temp.length >= 1 ? fnCurrentRouteIsPageRoute(route, temp) : false
}

/**
 * 添加动态(菜单)路由
 * @param {*} menuList 菜单列表
 * @param {*} routes 递归创建的动态(菜单)路由
 */
function fnAddDynamicMenuRoutes(menuList = [], routes = []) {
    var temp = []
    for (var i = 0; i < menuList.length; i++) {
        if (menuList[i].children && menuList[i].children.length >= 1) {
            temp = temp.concat(menuList[i].children)
            continue
        }
        // 组装路由
        var route = {
            path: '',
            component: null,
            name: '',
            meta: {
                ...window.SITE_CONFIG['contentTabDefault'],
                menuId: menuList[i].menuId,
                title: menuList[i].menuName
            }
        }
        // eslint-disable-next-line
        // let URL = (menuList[i].menuPagename || '').replace(/{{([^}}]+)?}}/g, (s1, s2) => eval(s2)) // URL支持{{ window.xxx }}占位符变量
        // if (isURL(URL)) {
        //     route["path"] = route["name"] = `i-${menuList[i].menuId}`;
        //     route['meta']['iframeURL'] = URL
        // } else {
        //     URL = URL.replace(/^\//, '').replace(/_/g, '-')
        //     route['path'] = route['name'] = URL.replace(/\//g, '-')
        //     route['component'] = () => import(`@/views/modules/${URL}`)
        // }
        let URL = (menuList[i].url || '').replace(/{{([^}}]+)?}}/g, (s1, s2) => eval(s2)) // URL支持{{ window.xxx }}占位符变量
        if (isURL(URL)) {
          route['path'] = route['name'] = `i-${menuList[i].id}`
          route['meta']['iframeURL'] = URL
        } else {
          URL = URL.replace(/^\//, '').replace(/_/g, '-')
          route['path'] = route['name'] = URL.replace(/\//g, '-')
          route['component'] = () => import(`@/views/modules/${URL}`)
        }
        routes.push(route)
    }
    if (temp.length >= 1) {
        return fnAddDynamicMenuRoutes(temp, routes)
    }
    // 添加路由
    router.addRoutes([
        {
            ...moduleRoutes,
            name: 'main-dynamic-menu',
            children: routes
        },
        { path: '*', redirect: { name: '404' } }
    ])
    window.SITE_CONFIG['dynamicMenuRoutes'] = routes
    window.SITE_CONFIG['dynamicMenuRoutesHasAdded'] = true
}

export default router
