import Router from 'vue-router'
import { resolve } from 'url';

export default new Router({
  routes: [{
    path: '/',
    redirect: '/pageLogin'
  }, {
    path: '/pageLogin',
    name: 'pageLogin',
    component: resolve => require(['@/components/pageLogin'], resolve),
    meta: {
      title: '登入'
    }
  },{
    path: '/pageHome',
    name: 'pageHome',
    component: resolve => require(['@/components/pageHome'], resolve),
    children: [{
      path: '/',
      name: '/',
      redirect: '/pageHome/pageIndex'
    }, {
      path: '/pageHome/add',
      name: '/pageHome/add',
      component: resolve => require(['@/components/add'], resolve),
      meta: {
        title: '添加分支'
      }
    }, {
      path: '/pageHome/pageIndex',
      name: '/pageHome/pageIndex',
      component: resolve => require(['@/components/pageIndex'], resolve),
      meta: {
        title: '首页展示'
      }
    }, {
      path: '/pageHome/PSTlist',
      name: '/pageHome/PSTlist',
      component: resolve => require(['@/components/PSTadmin/PSTlist'], resolve),
      meta: {
        title: '消防栓列表'
      }
    }, {
      path: '/pageHome/PSTadminallot',
      name: '/pageHome/PSTadminallot',
      component: resolve => require(['@/components/PSTadmin/PSTadminallot'], resolve),
      meta: {
        title: '消防栓分配'
      }
    }, {
      path: '/pageHome/power',
      name: '/pageHome/power',
      component: resolve => require(['@/components/PSTadmin/power'], resolve),
      meta: {
        title: '微信权限'
      }
    }, {
      path: '/pageHome/iccard',
      name: '/pageHome/iccard',
      component: resolve => require(['@/components/PSTadmin/iccard'], resolve),
      meta: {
        title: 'IC卡'
      }
    }, {
      path: '/pageHome/controls',
      name: '/pageHome/controls',
      // component: controls,
      component: resolve => require(['@/components/PSTadmin/controls'], resolve),
      meta: {
        title: '设备控制'
      }
    }, {
      path: '/pageHome/carMonitor',
      name: '/pageHome/carMonitor',
      component: resolve => require(['@/components/mapService/carMonitor'], resolve),
      meta: {
        title: '消防栓定位'
      }
    }, {
      path: '/pageHome/CarTrajectory',
      name: '/pageHome/CarTrajectory',
      component: resolve => require(['@/components/trajectory/CarTrajectory'], resolve),
      meta: {
        title: '车辆轨迹'
      }
    }, {
      path: '/pageHome/fenceSet',
      name: '/pageHome/fenceSet',
      component: resolve => require(['@/components/electronicFence/fenceSet'], resolve),
      meta: {
        title: '电子围栏'
      }
    }, {
      path: '/pageHome/childpro',
      name: '/pageHome/childpro',
      component: resolve => require(['@/components/childpro'], resolve),
      meta: {
        title: 'sn管理'
      }
    }, {
      path: '/pageHome/offReport',
      name: '/pageHome/offReport',
      component: resolve => require(['@/components/dataStatistics/offReport'], resolve),
      meta: {
        title: '流量卡列表'
      }
    }, {
      path: '/pageHome/abnormalAlarm',
      name: '/pageHome/abnormalAlarm',
      component: resolve => require(['@/components/dataStatistics/abnormalAlarm'], resolve),
      meta: {
        title: '异常报警'
      }
    }, {
      path: '/pageHome/parkAnomaly',
      name: '/pageHome/parkAnomaly',
      component: resolve => require(['@/components/dataStatistics/parkAnomaly'], resolve),
      meta: {
        title: '停车异常'
      }
    }, {
      path: '/pageHome/fenceAlarm',
      name: '/pageHome/fenceAlarm',
      component: resolve => require(['@/components/dataStatistics/fenceAlarm'], resolve),
      meta: {
        title: '围栏报警'
      }
    }, {
      path: '/pageHome/message',
      name: '/pageHome/message',
      component: resolve => require(['@/components/message'], resolve),
      meta: {
        title: '平台信息设置'
      }
    }, {
      path: '/pageHome/addRole',
      name: '/pageHome/addRole',
      component: resolve => require(['@/components/manuFacMng/addRole'], resolve),
      meta: {
        title: '添加类别'
      }
    }, {
      path: '/pageHome/roleList',
      name: '/pageHome/roleList',
      // component: roleList,
      component: resolve => require(['@/components/manuFacMng/roleList'], resolve),
      meta: {
        title: '角色列表'
      }
    }, {
      path: '/pageHome/InstallManList',
      name: '/pageHome/InstallManList',
      // component: InstallManList,
      component: resolve => require(['@/components/manuFacMng/InstallManList'], resolve),
      meta: {
        title: '维修安装人员列表'
      }
    }, {
      path: '/pageHome/customerList',
      name: '/pageHome/customerList',
      // component: customerList,
      component: resolve => require(['@/components/manuFacMng/customerList'], resolve),
      meta: {
        title: '客户列表'
      }
    }, {
      path: '/pageHome/adminList',
      name: '/pageHome/adminList',
      // component: adminList,
      component: resolve => require(['@/components/manuFacMng/adminList'], resolve),
      meta: {
        title: '管理员列表'
      }
    }, {
      path: '/pageHome/other',
      name: '/pageHome/other',
      // component: adminList,
      component: resolve => require(['@/components/manuFacMng/other'], resolve),
      meta: {
        title: '管理员列表'
      }
    }, {
      path: '/pageHome/serviceList',
      name: '/pageHome/serviceList',
      // component: serviceList,
      component: resolve => require(['@/components/manuFacMng/serviceList'], resolve),
      meta: {
        title: '客服人员列表'
      }
    }, {
      path: '/pageHome/400Repair',
      name: '/pageHome/400Repair',
      // component: Repair,
      component: resolve => require(['@/components/afterSales/400Repair'], resolve),
      meta: {
        title: '400报修'
      }
    }, {
      path: '/pageHome/recycle',
      name: '/pageHome/recycle',
      // component: Repair,
      component: resolve => require(['@/components/PSTadmin/recycle'], resolve),
      meta: {
        title: '回收站'
      }
    }, {
      path: '/pageHome/proProcess',
      name: '/pageHome/proProcess',
      // component: proProcess,
      component: resolve => require(['@/components/afterSales/proProcess'], resolve),
      meta: {
        title: '设备问题处理'
      }
    }, {
      path: '/pageHome/faultList',
      name: '/pageHome/faultList',
      // component: faultList,
      component: resolve => require(['@/components/faultStatistics/faultList'], resolve),
      meta: {
        title: '故障列表统计'
      }
    }, {
      path: '/pageHome/Edistribution',
      name: '/pageHome/Edistribution',
      // component: Edistribution,
      component: resolve => require(['@/components/chartStatistics/Edistribution'], resolve),
      meta: {
        title: '设备分布'
      }
    }, {
      path: '/pageHome/alarm',
      name: '/pageHome/alarm',
      // component: Edistribution,
      component: resolve => require(['@/components/chartStatistics/alarm'], resolve),
      meta: {
        title: '状态分布'
      }
    }, {
      path: '/pageHome/openList',
      name: '/pageHome/openList',
      // component: Edistribution,
      component: resolve => require(['@/components/chartStatistics/openList'], resolve),
      meta: {
        title: '开阀记录'
      }
    }, {
      path: '/pageHome/messgList',
      name: '/pageHome/messgList',
      // component: Edistribution,
      component: resolve => require(['@/components/chartStatistics/messgList'], resolve),
      meta: {
        title: '短信记录'
      }
    }, {
      path: '/pageHome/twonum',
      name: '/pageHome/twonum',
      // component: Edistribution,
      component: resolve => require(['@/components/twonum'], resolve),
      meta: {
        title: '数据展示二'
      }
    }, {
      path: '/pageHome/onenum',
      name: '/pageHome/onenum',
      // component: Edistribution,
      component: resolve => require(['@/components/onenum'], resolve),
      meta: {
        title: '数据展示一'
      }
    }
      , {
      path: '/pageHome/SalesStatistics',
      name: '/pageHome/SalesStatistics',
      // component: SalesStatistics,
      component: resolve => require(['@/components/chartStatistics/SalesStatistics'], resolve),
      meta: {
        title: '销售统计'
      }
    }]
  }]
})
