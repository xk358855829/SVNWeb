import Router from "vue-router";
import { resolve } from "url";
// const download = r => require.ensure([], () => r(require('../page/download/download')), 'download')
// import DeorderLit from '@/pages/yuyue/DeorderLit'

const login = g =>
  require.ensure([], () => g(require("@/components/pageLogin")), "login");
const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/pageLogin"
    },
    {
      path: "/pageLogin",
      name: "pageLogin",
      // component:resolve=>require(['@/components/pageLogin'],resolve),
      component: login,
      meta: {
        title: "登入"
        // auth: false,
      }
    },
    {
      path: "/pageRegister",
      name: "pageRegister",
      component: resolve => require(["@/components/pageRegister"], resolve),
      meta: {
        title: "注册"
        // auth: false,
      }
    },
    {
      path: "/404",
      name: "404",
      // component:resolve=>require(['@/components/pageLogin'],resolve),
      component: () => import("@/components/404.vue"),
      meta: {
        title: "404页面"
      }
    },
    {
      path: "/pageHome/big",
      name: "/pageHome/big",
      // component: faultList,
      component: resolve => require(["@/components/afterSales/big"], resolve),
      meta: {
        title: "岗亭操作员"
      }
    },
    {
      path: "/pageSize",
      name: "pageSize",
      component: resolve => require(["@/components/pageSize"], resolve),
      meta: {
        title: "登入"
        // auth: false,
      }
    },
    {
      path: "/pageHome",
      name: "pageHome",
      component: resolve => require(["@/components/pageHome"], resolve),
      children: [
        {
          path: "/",
          name: "/",
          redirect: "/pageHome/pageIndex"
        },
        {
          path: "/pageHome/webset",
          name: "/pageHome/webset",
          component: resolve => require(["@/components/webset"], resolve),
          meta: {
            title: "网站设置"
          }
        },
        {
          path: "/pageHome/pageIndex",
          name: "/pageHome/pageIndex",
          component: resolve => require(["@/components/pageIndex"], resolve),
          meta: {
            title: "首页展示"
            // auth: true,
          }
        },
        {
          path: "/pageHome/ctrlLst",
          name: "/pageHome/ctrlLst",
          component: resolve =>
            require(["@/components/PSTadmin/ctrlLst"], resolve),
          meta: {
            title: "控制器列表"
          }
        },
        {
          path: "/pageHome/idLst",
          name: "/pageHome/idLst",
          component: resolve =>
            require(["@/components/PSTadmin/idLst"], resolve),
          meta: {
            title: "设备编号列表"
          }
        },
        {
          path: "/pageHome/devRegist",
          name: "/pageHome/devRegist",
          component: resolve =>
            require(["@/components/PSTadmin/devRegist"], resolve),
          meta: {
            title: "客户设备分配"
          }
        },
        {
          path: "/pageHome/partList",
          name: "/pageHome/partList",
          component: resolve =>
            require(["@/components/PSTadmin/partList"], resolve),
          meta: {
            title: "道闸列表"
          }
        },
        {
          path: "/pageHome/troProQuery",
          name: "/pageHome/troProQuery",
          component: resolve =>
            require(["@/components/PSTadmin/troProQuery"], resolve),
          meta: {
            title: "故障处理查询"
          }
        },
        {
          path: "/pageHome/tongji",
          name: "/pageHome/tongji",
          component: resolve =>
            require(["@/components/chartStatistics/tongji"], resolve),
          meta: {
            title: "统计"
          }
        },
        {
          path: "/pageHome/repairPro",
          name: "/pageHome/repairPro",
          component: resolve =>
            require(["@/components/PSTadmin/repairPro"], resolve),
          meta: {
            title: "设备问题处理"
          }
        },
        {
          path: "/pageHome/troMsgSta",
          name: "/pageHome/troMsgSta",
          component: resolve =>
            require(["@/components/PSTadmin/troMsgSta"], resolve),
          meta: {
            title: "故障信息统计"
          }
        },
        {
          path: "/pageHome/troLstSta",
          name: "/pageHome/troLstSta",
          component: resolve =>
            require(["@/components/PSTadmin/troLstSta"], resolve),
          meta: {
            title: "故障列表统计"
          }
        },
        {
          path: "/pageHome/newPro",
          name: "/pageHome/newPro",
          component: resolve =>
            require(["@/components/PSTadmin/newPro"], resolve),
          meta: {
            title: "新品列表"
          }
        },
        {
          path: "/pageHome/actBulletin",
          name: "/pageHome/actBulletin",
          component: resolve =>
            require(["@/components/PSTadmin/actBulletin"], resolve),
          meta: {
            title: "活动公告"
          }
        },
        {
          path: "/pageHome/idsKnow",
          name: "/pageHome/idsKnow",
          component: resolve =>
            require(["@/components/PSTadmin/idsKnow"], resolve),
          meta: {
            title: "行业知识"
          }
        },
        {
          path: "/pageHome/mark",
          name: "/pageHome/mark",
          component: resolve =>
            require(["@/components/faultStatistics/mark"], resolve),
          meta: {
            title: "积分管理"
          }
        },
        {
          path: "/pageHome/comProblem",
          name: "/pageHome/comProblem",
          component: resolve =>
            require(["@/components/PSTadmin/comProblem"], resolve),
          meta: {
            title: "常见问题"
          }
        },
        {
          path: "/pageHome/controls",
          name: "/pageHome/controls",
          // component: controls,
          component: resolve =>
            require(["@/components/PSTadmin/controls"], resolve),
          meta: {
            title: "设备控制"
          }
        },
        {
          path: "/pageHome/device",
          name: "/pageHome/device",
          component: resolve =>
            require(["@/components/dataStatistics/device"], resolve),
          meta: {
            title: "设备列表"
          }
        },
        {
          path: "/pageHome/iccCode",
          name: "/pageHome/iccCode",
          component: resolve =>
            require(["@/components/dataStatistics/iccCode"], resolve),
          meta: {
            title: "流量卡管理"
          }
        },
        {
          path: "/pageHome/message",
          name: "/pageHome/message",
          component: resolve => require(["@/components/message"], resolve),
          meta: {
            title: "平台信息设置"
          }
        },
        {
          path: "/pageHome/addRole",
          name: "/pageHome/addRole",
          component: resolve =>
            require(["@/components/manuFacMng/addRole"], resolve),
          meta: {
            title: "添加角色"
          }
        },
        {
          path: "/pageHome/roleLst",
          name: "/pageHome/roleLst",
          // component: roleList,
          component: resolve =>
            require(["@/components/manuFacMng/roleLst"], resolve),
          meta: {
            title: "角色列表"
          }
        },
        {
          path: "/pageHome/TSDLst",
          name: "/pageHome/TSDLst",
          // component: InstallManList,
          component: resolve =>
            require(["@/components/manuFacMng/TSDLst"], resolve),
          meta: {
            title: "维修安装人员列表"
          }
        },
        {
          path: "/pageHome/dealerLst",
          name: "/pageHome/dealerLst",
          // component: customerList,
          component: resolve =>
            require(["@/components/manuFacMng/dealerLst"], resolve),
          meta: {
            title: "客户列表"
          }
        },
        {
          path: "/pageHome/watchhouse",
          name: "/pageHome/watchhouse",
          // component: customerList,
          component: resolve =>
            require(["@/components/manuFacMng/watchhouse"], resolve),
          meta: {
            title: "岗亭操作员"
          }
        },
        {
          path: "/pageHome/adminLst",
          name: "/pageHome/adminLst",
          // component: adminList,
          component: resolve =>
            require(["@/components/manuFacMng/adminLst"], resolve),
          meta: {
            title: "管理员列表"
          }
        },
        {
          path: "/pageHome/people",
          name: "/pageHome/people",
          // component: adminList,
          component: resolve =>
            require(["@/components/manuFacMng/people"], resolve),
          meta: {
            title: "临时登记"
          }
        },
        {
          path: "/pageHome/barrwhite",
          name: "/pageHome/barrwhite",
          // component: adminList,
          component: resolve =>
            require(["@/components/manuFacMng/barrwhite"], resolve),
          meta: {
            title: "道闸白名单"
          }
        },
        {
          path: "/pageHome/ChargingSet",
          name: "/pageHome/ChargingSet",
          // component: adminList,
          component: resolve =>
            require(["@/components/manuFacMng/ChargingSet"], resolve),
          meta: {
            title: "收费管理"
          }
        },
        {
          path: "/pageHome/CSDLst",
          name: "/pageHome/CSDLst",
          // component: serviceList,
          component: resolve =>
            require(["@/components/manuFacMng/CSDLst"], resolve),
          meta: {
            title: "客服人员列表"
          }
        },
        {
          path: "/pageHome/park",
          name: "/pageHome/park",
          // component: faultList,
          component: resolve =>
            require(["@/components/faultStatistics/park"], resolve),
          meta: {
            title: "车位管理"
          }
        },
        {
          path: "/pageHome/parkWhite",
          name: "/pageHome/parkWhite",
          // component: faultList,
          component: resolve =>
            require(["@/components/faultStatistics/parkWhite"], resolve),
          meta: {
            title: "车主管理"
          }
        },
        {
          path: "/pageHome/reveal",
          name: "/pageHome/reveal",
          // component: faultList,
          component: resolve =>
            require(["@/components/faultStatistics/reveal"], resolve),
          meta: {
            title: "车主管理"
          }
        },
        {
          path: "/pageHome/carstyle",
          name: "/pageHome/carstyle",
          // component: faultList,
          component: resolve =>
            require(["@/components/faultStatistics/carstyle"], resolve),
          meta: {
            title: "车辆类型"
          }
        },
        {
          path: "/pageHome/preferential",
          name: "/pageHome/preferential",
          // component: faultList,
          component: resolve =>
            require(["@/components/afterSales/preferential"], resolve),
          meta: {
            title: "优惠方案"
          }
        },
        {
          path: "/pageHome/electronic",
          name: "/pageHome/electronic",
          // component: faultList,
          component: resolve =>
            require(["@/components/afterSales/electronic"], resolve),
          meta: {
            title: "电子卡券"
          }
        },
        {
          path: "/pageHome/configurauthority",
          name: "/pageHome/configurauthority",
          // component: configurauthority,
          component: resolve =>
            require(["@/components/afterSales/configuration"], resolve),
          meta: {
            title: "配置卡券"
          }
        },
        {
          path: "/pageHome/configuration",
          name: "/pageHome/configuration",
          // component: configuration,
          component: resolve =>
            require(["@/components/afterSales/configurauthority"], resolve),
          meta: {
            title: "配置卡券权限"
          }
        },
        {
          path: "/pageHome/records",
          name: "/pageHome/records",
          // component: faultList,
          component: resolve =>
            require(["@/components/afterSales/records"], resolve),
          meta: {
            title: "充值记录",
            keepAlive: true
          }
        },
        {
          path: "/pageHome/Monthlybill",
          name: "/pageHome/Monthlybill",
          // component: faultList,
          component: resolve =>
            require(["@/components/afterSales/Monthlybill"], resolve),
          meta: {
            title: "月账单",
            keepAlive: true
          }
        },
        {
          path: "/pageHome/notes",
          name: "/pageHome/notes",
          // component: faultList,
          component: resolve =>
            require(["@/components/afterSales/notes"], resolve),
          meta: {
            title: "卡包",
            keepAlive: true
          }
        },
        {
          path: "/pageHome/mes",
          name: "/pageHome/mes",
          // component: faultList,
          component: resolve =>
            require(["@/components/afterSales/mes"], resolve),
          meta: {
            title: "短信记录",
            keepAlive: true
          }
        },
        {
          path: "/pageHome/feedback",
          name: "/pageHome/feedback",
          // component: faultList,
          component: resolve =>
            require(["@/components/faultStatistics/feedback"], resolve),
          meta: {
            title: "意见反馈"
          }
        },
        {
          path: "/pageHome/orderList",
          name: "/pageHome/orderList",
          // component: faultList,
          component: resolve =>
            require(["@/components/faultStatistics/orderList"], resolve),
          meta: {
            title: "订单查询"
          }
        },
        {
          path: "/pageHome/anomaly",
          name: "/pageHome/anomaly",
          // component: faultList,
          component: resolve =>
            require(["@/components/faultStatistics/anomaly"], resolve),
          meta: {
            title: "异常放行"
          }
        },
        {
          path: "/pageHome/record",
          name: "/pageHome/record",
          // component: faultList,
          component: resolve =>
            require(["@/components/faultStatistics/record"], resolve),
          meta: {
            title: "出场纪录"
          }
        },
        {
          path: "/pageHome/moneypay",
          name: "/pageHome/moneypay",
          // component: faultList,
          component: resolve =>
            require(["@/components/faultStatistics/moneypay"], resolve),
          meta: {
            title: "现金支付"
          }
        },
        {
          path: "/pageHome/refund",
          name: "/pageHome/refund",
          // component: faultList,
          component: resolve =>
            require(["@/components/faultStatistics/refund"], resolve),
          meta: {
            title: "退款记录"
          }
        },
        {
          path: "/pageHome/recycle",
          name: "/pageHome/recycle",
          // component: faultList,
          component: resolve =>
            require(["@/components/faultStatistics/recycle"], resolve),
          meta: {
            title: "订单回收站"
          }
        },
        {
          path: "/pageHome/recycleOrder",
          name: "/pageHome/recycleOrder",
          // component: faultList,
          component: resolve =>
            require(["@/components/faultStatistics/recycleOrder"], resolve),
          meta: {
            title: "退款回收站"
          }
        },
        {
          path: "/pageHome/copy",
          name: "/pageHome/copy",
          // component: faultList,
          component: resolve =>
            require(["@/components/faultStatistics/copy"], resolve),
          meta: {
            title: "故障列表统计"
          }
        },
        {
          path: "/pageHome/zfb",
          name: "/pageHome/zfb",
          // component: faultList,
          component: resolve =>
            require(["@/components/faultStatistics/zfb"], resolve),
          meta: {
            title: "停车场列表"
          }
        },
        {
          path: "/pageHome/guide",
          name: "/pageHome/guide",
          // component: faultList,
          component: resolve =>
            require(["@/components/faultStatistics/guide"], resolve),
          meta: {
            title: "车牌引导"
          }
        },
        {
          path: "/pageHome/parkDevic",
          name: "/pageHome/parkDevic",
          // component: faultList,
          component: resolve =>
            require(["@/components/faultStatistics/parkDevic"], resolve),
          meta: {
            title: "车位锁列表"
          }
        },
        {
          path: "/pageHome/zfbInfo",
          name: "/pageHome/zfbInfo",
          component: resolve => require(["@/components/zfbInfo"], resolve),
          meta: {
            title: "停车场查看详情"
          }
        },
        {
          path: "/pageHome/filter",
          name: "/pageHome/filter",
          // component: faultList,
          component: resolve =>
            require(["@/components/faultStatistics/filter"], resolve),
          meta: {
            title: "电量管理"
          }
        },
        {
          path: "/pageHome/mapView",
          name: "/pageHome/mapView",
          // component: Edistribution,
          component: resolve =>
            require(["@/components/chartStatistics/mapView"], resolve),
          meta: {
            title: "设备分布"
          }
        },
        {
          path: "/pageHome/saleSta",
          name: "/pageHome/saleSta",
          // component: SalesStatistics,
          component: resolve =>
            require(["@/components/chartStatistics/saleSta"], resolve),
          meta: {
            title: "销售统计"
          }
        },
        {
          path: "/pageHome/shebeiguanli",
          name: "/pageHome/shebeiguanli",
          // component: SalesStatistics,
          component: resolve =>
            require(["@/pages/chuwugui/shebeiguanli"], resolve),
          meta: {
            title: "设备管理"
          }
        },
        {
          path: "/pageHome/yonghuguanli",
          name: "/pageHome/yonghuguanli",
          // component: SalesStatistics,
          component: resolve =>
            require(["@/pages/chuwugui/yonghuguanli"], resolve),
          meta: {
            title: "用户管理"
          }
        },
        {
          path: "/pageHome/shangjiaguanli",
          name: "/pageHome/shangjiaguanli",
          // component: SalesStatistics,
          component: resolve =>
            require(["@/pages/chuwugui/shangjiaguanli"], resolve),
          meta: {
            title: "商家管理"
          }
        },
        {
          path: "/pageHome/dingdanguanli",
          name: "/pageHome/dingdanguanli",
          // component: SalesStatistics,
          component: resolve =>
            require(["@/pages/chuwugui/dingdanguanli"], resolve),
          meta: {
            title: "订单管理"
          }
        },
        {
          path: "/pageHome/xichemoshi",
          name: "/pageHome/xichemoshi",
          // component: SalesStatistics,
          component: resolve =>
            require(["@/pages/chuwugui/xichemoshi"], resolve),
          meta: {
            title: "洗车模式"
          }
        },
        {
          path: "/pageHome/cheweisuo",
          name: "/pageHome/cheweisuo",
          // component: faultList,
          component: resolve => require(["@/pages/yuyue/cheweisuo"], resolve),
          meta: {
            title: "车位锁"
          }
        },
        {
          path: "/pageHome/DeorderLit",
          name: "/pageHome/DeorderLit",
          // component: DeorderLit,
          component: resolve => require(["@/pages/yuyue/DeorderLit"], resolve),
          meta: {
            title: "预约订单"
          }
        },
        {
          path: "/pageHome/siteList",
          name: "/pageHome/siteList",
          // component: siteList,
          component: resolve => require(["@/pages/washcar/siteList"], resolve),
          meta: {
            title: "站点列表"
          }
        },
        {
          path: "/pageHome/siteInfo",
          name: "/pageHome/siteInfo",
          // component: siteInfo,
          component: resolve => require(["@/pages/washcar/siteInfo"], resolve),
          meta: {
            title: "站点详情"
          }
        },
        {
          path: "/pageHome/washEquipment",
          name: "/pageHome/washEquipment",
          // component: washEquipment,
          component: resolve =>
            require(["@/pages/washcar/washEquipment"], resolve),
          meta: {
            title: "洗车机设备列表"
          }
        },
        {
          path: "/pageHome/cameraEquipment",
          name: "/pageHome/cameraEquipment",
          // component: washEquipment,
          component: resolve =>
            require(["@/pages/washcar/cameraEquipment"], resolve),
          meta: {
            title: "摄像头设备列表"
          }
        },
        {
          path: "/pageHome/washRecord",
          name: "/pageHome/washRecord",
          // component: washRecord,
          component: resolve =>
            require(["@/pages/washcar/washRecord"], resolve),
          meta: {
            title: "洗车记录"
          }
        },
        {
          path: "/pageHome/associatorList",
          name: "/pageHome/associatorList",
          // component: associatorList,
          component: resolve =>
            require(["@/pages/washcar/associatorList"], resolve),
          meta: {
            title: "会员列表"
          }
        },
        {
          path: "/pageHome/associatorType",
          name: "/pageHome/associatorType",
          // component: associatorType,
          component: resolve =>
            require(["@/pages/washcar/associatorType"], resolve),
          meta: {
            title: "会员类型"
          }
        },
        {
          path: "/pageHome/associatorRecord",
          name: "/pageHome/associatorRecord",
          // component: associatorRecord,
          component: resolve =>
            require(["@/pages/washcar/associatorRecord"], resolve),
          meta: {
            title: "会员开通记录"
          }
        },
        {
          path: "/pageHome/cardCoupon",
          name: "/pageHome/cardCoupon",
          // component: cardCoupon,
          component: resolve =>
            require(["@/pages/washcar/cardCoupon"], resolve),
          meta: {
            title: "卡券列表"
          }
        },
        {
          path: "/pageHome/storeList",
          name: "/pageHome/storeList",
          // component: storeList,
          component: resolve => require(["@/pages/washcar/storeList"], resolve),
          meta: {
            title: "店铺管理"
          }
        },
        {
          path: "/pageHome/storestaff",
          name: "/pageHome/storestaff",
          // component: storestaff,
          component: resolve =>
            require(["@/pages/washcar/storestaff"], resolve),
          meta: {
            title: "店员管理"
          }
        },
        {
          path: "/pageHome/storeStaffWash",
          name: "/pageHome/storeStaffWash",
          // component: storeStaffWash,
          component: resolve =>
            require(["@/pages/washcar/storeStaffWash"], resolve),
          meta: {
            title: "店员洗车模式管理"
          }
        },
        {
          path: "/pageHome/staffwashRecord",
          name: "/pageHome/staffwashRecord",
          // component: staffwashRecord,
          component: resolve =>
            require(["@/pages/washcar/staffwashRecord"], resolve),
          meta: {
            title: "员工洗车记录"
          }
        },
        {
          path: "/pageHome/washRefund",
          name: "/pageHome/washRefund",
          // component: washRefund,
          component: resolve =>
            require(["@/pages/washcar/washRefund"], resolve),
          meta: {
            title: "退款记录"
          }
        },
        {
          path: "/pageHome/bankInfo",
          name: "/pageHome/bankInfo",
          // component: bankInfo,
          component: resolve =>
            require(["@/pages/washcar/bankInfo"], resolve),
          meta: {
            title: "银行信息"
          }
        },
        {
          path: "/pageHome/bankUserInfo",
          name: "/pageHome/bankUserInfo",
          // component: bankUserInfo,
          component: resolve =>
            require(["@/pages/washcar/bankUserInfo"], resolve),
          meta: {
            title: "银行用户信息"
          }
        },

        {
          path: "/pageHome/magnetismList",
          name: "/pageHome/magnetismList",
          // component: magnetismList,
          component: resolve =>
            require(["@/pages/magnetism/magnetismList"], resolve),
          meta: {
            title: "地磁管理"
          }
        },
        {
          path: "/pageHome/magnetismRecord",
          name: "/pageHome/magnetismRecord",
          // component: magnetismRecord,
          component: resolve =>
            require(["@/pages/magnetism/magnetismRecord"], resolve),
          meta: {
            title: "设备记录"
          }
        },
        {
          path: "/pageHome/parkingList",
          name: "/pageHome/parkingList",
          // component: parkingList,
          component: resolve =>
            require(["@/pages/magnetism/parkingList"], resolve),
          meta: {
            title: "车位列表"
          }
        },
        {
          path: "/pageHome/parkingLot",
          name: "/pageHome/parkingLot",
          // component: parkingLot,
          component: resolve =>
            require(["@/pages/magnetism/parkingLot"], resolve),
          meta: {
            title: "停车场列表"
          }
        },
        // 闲林山水
        {
          path: "/pageHome/parkingManage",
          name: "/pageHome/parkingManage",
          // component: parkingManage,
          component: resolve =>
            require(["@/pages/parking/parkingManage"], resolve),
          meta: {
            title: "车位管理"
          }
        },
        {
          path: "/pageHome/parkingListBind",
          name: "/pageHome/parkingListBind",
          // component: parkingListBind,
          component: resolve =>
            require(["@/pages/parking/parkingListBind"], resolve),
          meta: {
            title: "车位绑定列表"
          }
        },
        {
          path: "/pageHome/villageManage",
          name: "/pageHome/villageManage",
          // component: villageManage,
          component: resolve =>
            require(["@/pages/parking/villageManage"], resolve),
          meta: {
            title: "小区管理"
          }
        },
        {
          path: "/pageHome/carManage",
          name: "/pageHome/carManage",
          // component: carManage,
          component: resolve => require(["@/pages/parking/carManage"], resolve),
          meta: {
            title: "车辆管理"
          }
        },
        {
          path: "/pageHome/chargeRules",
          name: "/pageHome/chargeRules",
          // component: chargeRules,
          component: resolve =>
            require(["@/pages/parking/chargeRules"], resolve),
          meta: {
            title: "收费规则"
          }
        },
        {
          path: "/pageHome/vehicleCategory",
          name: "/pageHome/vehicleCategory",
          // component: vehicleCategory,
          component: resolve =>
            require(["@/pages/parking/vehicleCategory"], resolve),
          meta: {
            title: "车类管理"
          }
        },
        {
          path: "/pageHome/vehicleType",
          name: "/pageHome/vehicleType",
          // component: vehicleType,
          component: resolve =>
            require(["@/pages/parking/vehicleType"], resolve),
          meta: {
            title: "车型管理"
          }
        }
      ]
    }
  ]
});

export default router;
