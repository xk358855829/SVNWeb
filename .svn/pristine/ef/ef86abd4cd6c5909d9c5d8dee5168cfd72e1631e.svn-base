import {
  INIT_CELL_LIST,
  INIT_WASHMOD_LIST,
  INIT_USER_LIST,
  INIT_BUSSINIESS_LIST,
  INIT_ORDER_INFO,
  INIT_ORDER_LIST,
  FANMLI,
  TOTAL,
  ONEFANMLI,
  ONETOTAL,
  LQOLS,
  NAME,
  SAVE_SALEPLANS,
  SAVE_PARKINGLOTLIST,
  INIT_EQUIPMENT,
  INIT_USER_OTHER_INFO,
  INIT_PARKINGLOT_LIST,
  INIT_PARKINGLOT_LISTTOTAL,
  INIT_ORDER_LISTTOTAL,
  INIT_DEORDER_LIST,
  INIT_DEORDER_LISTTOTAL
} from './mutation-types.js'
export default {
  chezhu (state, n) {
    state.recharge = n
    localStorage.setItem('uncharge', JSON.stringify(state.recharge))
  },
  [FANMLI] (state, m) {
    m.forEach((a, b) => {
      if (a.end_time) {
        let start = new Date().getTime();
        let end = new Date(a.end_time.substring(0, 19).replace(/-/g, '/')).getTime();
        if (start > end) {
          a.date.date = '已过期'
        } else {
          a.date.date = '未过期'
        }
      } else {
        a.date.date = '-'
      }
    })
    state.reslist = m
  },
  [TOTAL] (state, m) {
    state.totalnum = m
  },
  [LQOLS] (state, m) {
    state.typepayLIST = m
  },
  [ONEFANMLI] (state, m) {
    console.log("333333")
    console.log(m)
    state.ONEreslist = m
  },
  [ONETOTAL] (state, m) {
    state.parkingtitle = m
  },
  [NAME] (state, m) {
    state.parkingname = m
  },
  [SAVE_SALEPLANS] (state, m) {
    state.mySalePlans = m
  },
  [SAVE_PARKINGLOTLIST] (state, m) {
    state.parkLotInfo = m
  },
  [INIT_EQUIPMENT] (state, m) {
    state.equipmentList.count = m.count
    state.equipmentList.list = m.result
  },
  [INIT_ORDER_LIST] (state, m) {
    state.orderList = m
  },
  [INIT_ORDER_INFO] (state, m) {
    state.orderInfo = m
  },
  [INIT_ORDER_LISTTOTAL] (state, m) {
    state.taobao = m
  },
  [INIT_BUSSINIESS_LIST] (state, m) {
    state.bussinessList = m
  },
  [INIT_WASHMOD_LIST] (state, m) {
    state.washModList = m
  },
  [INIT_USER_LIST] (state, m) {
    state.userList.list = m.result
    state.userList.count = m.count
  },
  [INIT_CELL_LIST] (state, m) {
    state.cellList = m
  },
  [INIT_USER_OTHER_INFO] (state, m) {
    state.userOtherInfo = m
  },
  [INIT_PARKINGLOT_LIST] (state, m) {
    state.parkDevList.count = m.count
    state.parkDevList.list = m.parkingDevList
  },
  ALIPAYNAME: (state, name) => {
    state.apliyparkName = name
  },
  // INIT_PARKINGLOT_LISTTOTAL: (state, totals) => {
  //   state.totals = totals
  // },
  LOCKNUM (state, num) {
    state.totals = num
  },
  INIT_USER_LISTTOAL: (state, totoluser) => {
    state.totoluser = totoluser
  },
  INIT_BUSSINIESS_LISTTOTAL: (state, totalla) => {
    state.totalla = totalla
  },
  INIT_WASHMOD_LISTTOTAL: (state, inltotal) => {
    state.inltotal = inltotal
  },
  [INIT_DEORDER_LIST] (state, m) {
    console.log(m)
    state.orderLotList.count = m.count
    state.orderLotList.list = m.orderLotList
  },
  INIT_DEORDER_LISTTOTAL: (state, totals) => {
    state.totals = totals
  }
}
