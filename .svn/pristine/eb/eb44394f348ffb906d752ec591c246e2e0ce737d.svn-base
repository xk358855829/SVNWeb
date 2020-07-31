import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import getters from "./getters";
import actions from "./action";
import createPersistedState from "vuex-persistedstate";
import gate from "./module/gate";
import login from "./module/login";
Vue.use(Vuex);

const state = {
  //  http:'http://39.104.113.112:8796',
  // http:'http://192.168.2.123:8796',
  // http:'http://39.104.113.112:8796',
  httpRust: "http://192.168.2.123:8796",
  http: "http://39.104.99.181:8080",
  url: "http://39.104.113.112:2088",
  // url: "http://192.168.2.141:8086/ZFBrake",
  // url:'http://mm107010.xyz:19180/ZFBrake'
  /*http:process.env.API_ROOT,*/
  abc: "http://39.104.99.181:2080",
  abcds: "http://192.168.2.123:7895",
  // wash_test_url: "http://192.168.2.195:8797",
  // wash_test_url: "http://114.55.168.103:8797",
  wash_test_url: "http://39.104.99.181:8797",
  // wash_url: "http://192.168.2.141:8086/ZFBrake",
  wash_url: "http://114.55.168.103:2088",
  // magnetism_url: "http://192.168.2.143:8762",
  magnetism_url: "http://39.104.99.181:8762",
  // parking_url: "http://192.168.2.143:2088/ZFBrake",
  parking_url: "http://39.104.113.112:8130",
  activeName: [],
  conGroupList: [],
  objpark: "",
  sideList: [],
  typepayLIST: [],
  firstarr: [],
  blurtime: "",
  totals: "",
  bluryuan: "",
  bluryuanhour: "",
  parkingtitle: "",
  ONEreslist: [],
  unblues: "",
  facilitys: "",
  numtitle: "",
  inltotal: "",
  typepay: [],
  abcd: 2,
  taobao: "",
  recharge: "",
  reslist: [],
  apliyparkName: [],
  totalnum: "",
  parkingname: [],
  mySalePlans: [],
  totoluser: "",
  totalla: "",
  parkLotInfo: [],
  count: 77,
  parkDevList: {
    list: [],
    count: 0
  },
  orderLotInfo: [],
  orderLotList: {
    list: [],
    count: 0
  },
  equipmentList: {
    list: [],
    count: 0
  },
  orderList: [],
  orderInfo: {},
  bussinessList: [],
  userList: {
    list: [],
    count: 0
  },
  washModList: [],
  cellList: [],
  userOtherInfo: {},
  size: "请按输入框提示输入内容，带*号不能为空！",
  online: [
    {
      value: 1,
      type: "已出场"
    },
    {
      value: -1,
      type: "未出场"
    }
  ],
  paytypes: [
    {
      value: 2,
      type: "支付宝支付"
    },
    {
      value: 3,
      type: "微信支付"
    },
    {
      value: 5,
      type: "现金支付"
    },
    {
      value: 1,
      type: "无感支付"
    }
    // {
    // 	value:-1,
    // 	type:'特权'
    // }
  ],
  paytypes1: [
    // {
    //   value: "2",
    //   type: "支付宝",
    // },
    {
      value: "3",
      type: "微信"
    }
  ],
  paytypes2: [
    {
      value: 1,
      type: "支付宝支付"
    },
    {
      value: 2,
      type: "微信支付"
    },
    {
      value: 3,
      type: "现金支付"
    }
  ],
  online1: [
    {
      value: "1",
      type: "未支付"
    },
    {
      value: "0",
      type: "完成"
    },
    {
      value: "-1",
      type: "已退款"
    }
  ],
  use_statuslist: [
    {
      value: "0",
      type: "已使用"
    },
    {
      value: "1",
      type: "未使用"
    },
    {
      value: "-1",
      type: "已失效"
    },
    {
      value: "2",
      type: "已发放"
    }
  ],
  use_statuslist1: [
    {
      value: "0",
      type: "已使用"
    },
    {
      value: "1",
      type: "未使用"
    },
    {
      value: "-1",
      type: "已失效"
    },
    {
      value: "2",
      type: "已发放"
    }
  ],
  Distributing: [
    {
      value: "1",
      type: "免费"
    },
    {
      value: "2",
      type: "收费"
    }
  ],
  Distributing1: [
    {
      value: "1",
      type: "免费"
    },
    {
      value: "2",
      type: "收费"
    },
    {
      value: "3",
      type: "积分兑换"
    },
    {
      value: "4",
      type: "4S店领取"
    }
  ],
  disbursement: [
    {
      value: "0",
      type: "多张"
    },
    {
      value: "1",
      type: "单张"
    }
  ],
  usage: [
    {
      value: 1,
      type: "免费时长"
    },
    {
      value: 2,
      type: "现金抵用券"
    },
    {
      value: 3,
      type: "满减券"
    },
    {
      value: 4,
      type: "折扣"
    }
  ],
  usage1: [
    {
      value: "2",
      type: "现金抵用券"
    },
    {
      value: "4",
      type: "折扣"
    }
  ],
  existingList: [
    {
      name: "永久免费",
      id: "A"
    },
    {
      name: "月卡",
      id: "B"
    },
    {
      name: "年卡",
      id: "C"
    },
    {
      name: "限时",
      id: "D"
    },
    {
      name: "储值",
      id: "E"
    },
    {
      name: "季卡",
      id: "G"
    }
  ],
  existWashingList: [
    {
      label: "月卡",
      name: "A"
    },
    {
      label: "季卡",
      name: "B"
    },
    {
      label: "年卡",
      name: "C"
    },
    {
      label: "次卡",
      name: "D"
    },
    {
      label: "券卡",
      name: "E"
    }
  ],
  existWashingList1: [
    {
      label: "全年畅洗卡",
      name: "C"
    }
  ],
  tickettype: [
    {
      value: "1",
      type: "电子券"
    },
    {
      value: "2",
      type: "纸券"
    }
  ],
  gstylelast: [
    {
      value: "1",
      type: "居民小区"
    },
    {
      value: "2",
      type: "商圈停车场"
    },
    {
      value: "3",
      type: "路测停车"
    },
    {
      value: "4",
      type: "公园景点"
    },
    {
      value: "5",
      type: "商务楼宇"
    },
    {
      value: "6",
      type: "其他"
    },
    {
      value: "7",
      type: "交通枢纽"
    },
    {
      value: "8",
      type: "市政设施"
    }
  ],
  pagytype: [
    {
      value: "支付宝支付",
      type: "支付宝支付"
    },
    {
      value: "微信支付",
      type: "微信支付"
    },
    {
      value: "现金支付",
      type: "现金支付"
    },
    {
      value: "银联支付",
      type: "银联支付"
    }
  ]
  // tableData:[]
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {
    gate,
    login,
  },
  getters,
  plugins: [
    createPersistedState({
      storage: window.localStorage,
      reducer(v) {
        return {
          parkLotInfo: v.parkLotInfo,
          mySalePlans: v.mySalePlans,
        };
      },
    }),
  ],
});
