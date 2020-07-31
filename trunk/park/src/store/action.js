import Qs from "qs";
import axios from "axios";
import {
  getBussinessList,
  getOrderInfo,
  getOrderList,
  searchClicks,
  salePlans,
  getParkingLotListApi,
  getEquipmentList,
  getUserList,
  updateBussiness,
  getWashmodList,
  addWashmod,
  editWashmod,
  deleteWashmod,
  addEquipment,
  editEquipment,
  realBox,
  deleteEquipment,
  deleteUser,
  userOtherInfo,
  parkingDevList,
  deleteDevList,
  addDevList,
  editDevList,
  deorderList,
  bussinessBindDevice,
  bindDeviceList,
  guidePost,
  parkDevPost
} from "../../src/components/api/api";
import {
  INIT_CELL_LIST,
  INIT_USER_LIST,
  INIT_WASHMOD_LIST,
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
  ALIPAYNAME,
  INIT_EQUIPMENT,
  INIT_USER_OTHER_INFO,
  INIT_PARKINGLOT_LIST,
  // INIT_PARKINGLOT_LISTTOTAL,
  INIT_USER_LISTTOAL,
  INIT_BUSSINIESS_LISTTOTAL,
  INIT_WASHMOD_LISTTOTAL,
  INIT_ORDER_LISTTOTAL,
  INIT_DEORDER_LIST,
  INIT_DEORDER_LISTTOTAL,
  LOCKNUM
} from "./mutation-types.js";
import removeEmpty from "@/utils/removeEmpty";
export default {
  // 查询全部停车场
  parktitle ({ commit, state }, data) {
    let res = searchClicks("/Parking/selectLotInfo", {
      page: 1,
      pageSize: 0,
      userId: localStorage.getItem("userId"),
      dealer: localStorage.getItem("dealer")
    }).then(message => {
      console.log(message)
      commit("ONEFANMLI", message.data.result);
    });
  },
  // 车位锁总数
  async locktotal ({ commit }, data) {
    let res = await parkDevPost(data)


  },


  Alipay ({ commit }, data) {
    searchClicks("/Parking/selectLotInfo", data).then(res => {
      if (res.data.resCode == 0) {
        commit("ALIPAYNAME", res.data.result);
        commit("ONETOTAL", res.data.count);
      }
    });
  },

  typenumber ({ commit }, data) {
    searchClicks('/carNumberType/findInfo', data).then(res => {

    })
  },
  typepays ({ commit, state }, data) {
    let res = searchClicks("/feeOrder/orders", {
      page: 1,
      pageSize: 10,
      is_del: 0,
      userId: localStorage.getItem("userId"),
      dealer: localStorage.getItem("dealer")
    }).then(message => {
      if (message.data.resCode == 0) {
        // state.state.typepay=message
        // state.state.typepayLIST=message.data.result
        // localStorage.setItem('usein',JSON.stringify(message.data.result))
        commit("LQOLS", message.data.result);
      }
    });
  },
  facility (state) {
    axios({
      method: "post",
      url: state.state.url + "/deviceCode/list",
      data: Qs.stringify({
        page: 1,
        pageSize: 10,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer")
      })
    }).then(function (message) {
      if (message.data.resCode == 0) {
        state.state.facilitys = message.data.count;
        state.numtitle = state.state.facilitys + state.state.unblues;
      }
    });
  },
  whitedan ({ commit, state }, data) {
    let res = searchClicks("/carInfo/findAll", data).then(res => {
      commit("FANMLI", res.data.result);
      commit("TOTAL", res.data.count);
    });
  },
  parkname ({ commit, state }, data) {
    let res = searchClicks("/Parking/selectLotInfo", data).then(res => {

      commit("NAME", res.data.result);
    });
  },
  unblue (state) {
    axios({
      method: "post",
      url: state.state.url + "/Device/brakeList",
      data: Qs.stringify({
        page: 1,
        pageSize: 10,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer")
      })
    }).then(function (message) {
      if (message.data.resCode == 0) {
        state.state.unblues = message.data.count;
      }
    });
  },
  // 获取车主信息
  getMenu (state) {
    axios({
      method: "post",
      url: state.state.url + "/menu/select/" + localStorage.getItem("userId")
    }).then(function (message) {
      if (message.data.resCode == 0) {
        state.state.sideList = message.data.result;
        state.state.activeName = [];
        let list = message.data.result;
        let len = list.length;
        let arr = [];
        for (let i = 0; i < len; i++) {
          if (list[i].menuLevel == 0) {
            let obj = {
              classA: {},
              classB: []
            };
            obj.classA = list[i];
            state.state.activeName.push(obj);
          } else {
            arr.push(list[i]);
          }
        }
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < state.state.activeName.length; j++) {
            if (
              arr[i].menuAssociated == state.state.activeName[j].classA.menuId
            ) {
              state.state.activeName[j].classB.push(arr[i]);
            }
          }
        }
      } else {
        state.state.sideList = [];
        state.state.activeName = [];
      }
      console.log(state.state.activeName);
      //   if(message.data.resCode==0){
      //       state.state.sideList = message.data.leftLists;
      //       state.state.activeName=[];
      //       let list = message.data.leftLists;
      //       state.state.firstarr=message.data.leftLists
      //       let len = list.length;
      //       let arr = [];
      //       for(let i=0;i<len;i++){
      //           if(list[i].listLevel==1){
      //               let obj = {
      //                   classA:{},
      //                   classB:[]
      //               }
      //               obj.classA = list[i];
      //               state.state.activeName.push(obj)
      //           }else{
      //               arr.push(list[i])
      //           }
      //       }
      //       for(let i=0;i<arr.length;i++){
      //           for(let j=0;j<state.state.activeName.length;j++){
      //               if(arr[i].preListId==state.state.activeName[j].classA.listId){
      //                   state.state.activeName[j].classB.push(arr[i])
      //               }
      //           }
      //       }
      //       console.log(state.state.activeName)
      //   }
    });
  },
  getSalePlans ({ commit }) {
    let param = {
      page: 1,
      pageSize: 10,
      userId: localStorage.getItem("userId"),
      dealer: localStorage.getItem("dealer")
    };
    salePlans("/salePlans/selectAll", param).then(message => {
      if (message.status === 200) {
        commit(SAVE_SALEPLANS, message.data.result);
      }
    });
  },
  getParkingLotList ({ commit }) {
    let params = {
      page: 1,
      pageSize: 0,
      userId: localStorage.getItem("userId"),
      dealer: localStorage.getItem("dealer")
    };
    getParkingLotListApi(params).then(message => {
      if (message.status === 200) {
        commit(SAVE_PARKINGLOTLIST, message.data.result);
      }
    });
  },
  initEquipmentList ({ commit }, payload) {
    let params = {
      dealer: localStorage.getItem("dealer"),
      page: 1,
      pageSize: 10
    };
    if (payload && payload.page && payload.pagesize) {
      params.page = payload.page;
      params.pageSize = payload.pagesize;
    }

    getEquipmentList(removeEmpty(Object.assign(params, payload))).then(msg => {

      if (msg.status === 200) {
        commit(INIT_EQUIPMENT, msg.data);

      }
    });
  },
  initOrderList ({ commit }) {
    let params = {
      dealer: localStorage.getItem("dealer"),
      userId: localStorage.getItem("userId"),
      Page: 1,
      PageSize: 10
    };
    getOrderList(params).then(msg => {
      if (msg.data.resCode === 0) {
        commit(INIT_ORDER_LIST, msg.data.result);
      }
    });
  },
  initOrderInfo ({ commit }, payload) {
    let params = {
      number: payload.number
    };
    getOrderInfo(params).then(msg => {
      if (msg.status === 200) {
        commit(INIT_ORDER_INFO, msg.data.result);
      }
    });
  },
  initBussinessList ({ commit }) {
    let params = {
      dealer: localStorage.getItem("dealer"),
      Page: 1,
      PageSize: 10,
      userId: localStorage.getItem('userId')
    };
    getBussinessList(params).then(msg => {
      if (msg.status === 200) {
        commit(INIT_BUSSINIESS_LIST, msg.data.result);
      }
    });
  },
  searchBussinessList ({ commit }, params) {

    getBussinessList(params).then(msg => {

      if (msg.status === 200) {
        if (msg.data.resCode != 1) {
          commit(INIT_BUSSINIESS_LIST, msg.data.result);
          commit(INIT_BUSSINIESS_LISTTOTAL, msg.data.count);
        } else {
          commit(INIT_BUSSINIESS_LIST, []);
          commit(INIT_BUSSINIESS_LISTTOTAL, 0);
        }
      }
    });
  },
  searchOrderList ({ commit }, params) {
    // let params = removeEmpty({
    //   dealer: localStorage.getItem("dealer"),
    //   Page: 1,
    //   PageSize: 10,
    //   number: payload.number,
    //   phone: payload.phone
    // });
    getOrderList(params).then(msg => {
      if (msg.status === 200) {
        commit(INIT_ORDER_LIST, msg.data.result);
        commit(INIT_ORDER_LISTTOTAL, msg.data.count);
      }
    });
  },
  initWashmodList ({ commit }, params) {
    // let params = {
    //   Page: 1,
    //   PageSize: 10
    // };
    // if (payload) {
    //   params.cname = payload.name;
    // }
    getWashmodList(removeEmpty(params)).then(msg => {
      if (msg.status === 200) {
        commit(INIT_WASHMOD_LIST, msg.data.result);
        commit(INIT_WASHMOD_LISTTOTAL, msg.data.count);
      }
    });
  },
  async updateBussiness ({ commit }, payload) {
    let params = removeEmpty({
      phone: payload.phone,
      name: payload.name,
      deviceId: payload.deviceId,
      address: payload.address,
      person: payload.person,
      account: payload.account,
      password: payload.password,
      typeId: payload.typeId,
      bid: payload.bid
    });
    updateBussiness(params).then(msg => {
      if (msg.status === 200) {

        return true;
      } else {
        return false;
      }
    });
  },
  initUserList ({ commit }, params) {
    // let params = {
    //   Page: 1,
    //   PageSize: 10,
    //   dealer: localStorage.getItem("dealer"),
    // };
    // if (payload) {
    //   params.phone = payload.phone;
    // }
    getUserList(removeEmpty(params)).then(msg => {

      if (msg.status === 200) {
        commit(INIT_USER_LIST, msg.data);
        commit(INIT_USER_LISTTOAL, msg.data.count);
      }
    });
  },
  async toAddWashmod ({ commit }, payload) {
    let params = {
      cname: payload.name,
      money: payload.money,
      discountPrice: payload.discountPrice,
      sold: 0
    };
    let msg = await addWashmod(params);
    if (msg.status === 200) {

      return true;
    } else {
      return false;
    }
  },
  async toEditWashmod ({ commit }, payload) {
    let params = {
      cname: payload.name,
      money: payload.money,
      cid: payload.cid,
      discountPrice: payload.discountPrice,
      sold: 0
    };
    let msg = await editWashmod(params);
    if (msg.status === 200) {

      return true;
    } else {
      return false;
    }
  },
  async toDeleteWashmod ({ commit }, payload) {
    let params = {
      cid: payload.id
    };
    let msg = await deleteWashmod(params);
    if (msg.status === 200) {

      return true;
    } else {
      return false;
    }
  },
  async toAddEquipment ({ commit }, payload) {
    let params = {
      id: payload.id,
      codestyle: payload.codestyle,
      location: payload.location,
      // lattice: payload.lattice,
      deviceId: payload.deviceId,
      cabinet: payload.cabinet,
      color: payload.color,
      // typeName: payload.typeName,
      // email: payload.email,
      // code: payload.code,
      // state: payload.state
      dealer: localStorage.getItem('dealer')
    }
    let msg = await addEquipment(params);
    if (msg.status === 200) {

      return true;
    } else {
      return false;
    }
  },
  async toEditEquipment ({ commit }, payload) {
    let params = {
      // id:payload.id,
      location: payload.location,
      // lattice: payload.lattice,
      // deviceId: payload.deviceId,
      // cabinet: payload.cabinet,
      codestyle: payload.codestyle,
      color: payload.color,
      // typeName: payload.typeName,
      // email: payload.email,
      // code: payload.code,
      // state: payload.state,
      eid: payload.eid
    }
    let msg = await editEquipment(params);
    if (msg.status === 200) {
      console.log("修改成功");
      return true;
    } else {
      return false;
    }
  },
  async toDeletEquipment ({ commit }, payload) {
    let params = {
      eid: payload.eid,
      deviceid: payload.deviceid
    }
    let msg = await deleteEquipment(params)
    if (msg.status === 200) {
      console.log("删除成功");
      return true;
    } else {
      return false;
    }
  },
  async getRealBox ({ commit }, payload) {
    let msg = await realBox({ deviceId: payload.id });
    if (msg.status === 200) {
      console.log("查看柜门详情", msg.data.result);
      commit(INIT_CELL_LIST, msg.data.result)
      return true;
    } else {
      return false;
    }
  },
  async toDeleteUser ({ commit }, payload) {
    let msg = await deleteUser({ openid: payload.openid });
    if (msg.status === 200) {
      console.log("删除用户成功", msg.data.result);
      return true;
    } else {
      return false;
    }
  },
  async getUserOtherInfo ({ commit }, payload) {
    let msg = await userOtherInfo({ openid: payload.openid });
    if (msg.status === 200) {
      console.log("查看用户订单信息", msg.data.result);
      commit(INIT_USER_OTHER_INFO, msg.data.result)
      return true;
    } else {
      return false;
    }
  },
  async initParkingDevList ({ commit }, params) {
    // let params = {
    //   pageSize:10,
    //   page:1
    // }
    // if(payload){
    //   params.devname = payload.name
    //   params.type = payload.type
    //   params.parkid = payload.parkingId
    // }
    let msg = await parkingDevList(removeEmpty(params))
    console.log(msg)
    if (msg.status === 200) {
      console.log("查看车位", msg.data);
      commit(INIT_PARKINGLOT_LIST, msg.data.result)
      commit('LOCKNUM', msg.data.result.count)
      // commit(INIT_PARKINGLOT_LISTTOTAL, parseInt(msg.data.result.count))
    }
  },
  async toDeleteParkdev ({ commit }, payload) {
    let msg = await deleteDevList({
      id: payload.id
    })
    return msg
    // console.log(msg)
    // if (msg.data.resCode === 200) {
    //   return true;
    // } else {
    //   return false;
    // }
  },
  async toAddDevList ({ commit }, payload) {
    let params = {
      type: payload.type,
      devname: payload.devname,
      stantype: payload.stantype,
      devid: payload.devid,
      parkid: payload.parkid,
      remark: payload.remark,
      mark: payload.mark
    }
    let msg = await addDevList(params);
    if (msg.status === 200) {
      console.log("添加成功");
      return true;
    } else {
      return false;
    }
  },
  async toEditDevList ({ commit }, payload) {
    let params = {
      id: payload.id,
      type: payload.type,
      devname: payload.devname,
      stantype: payload.stantype,
      devid: payload.devid,
      parkid: payload.parkid,
      remark: payload.remark,
      mark: payload.mark
    }
    let msg = await editDevList(params);
    return msg
  },
  async toBussinessBindDevice ({ commit }, payload) {
    let msg = await bussinessBindDevice({ bid: payload.bid, deviceid: payload.deviceid });
    if (msg.status === 200) {
      console.log("绑定成功");
      return true;
    } else {
      return false;
    }
  },
  async initBindDeviceList ({ commit }, payload) {
    let msg = await bindDeviceList({ bid: payload.bid });
    if (msg.status === 200) {
      console.log("查询绑定设备");
      return msg;
    } else {
      return false;
    }
  },
  async initDeorderList ({ commit }, params) {
    let msg = await deorderList(removeEmpty(params))
    console.log(msg)
    if (msg.status === 200) {
      console.log("查看订单", msg.data);
      commit(INIT_DEORDER_LIST, msg.data.result)
      commit(INIT_DEORDER_LISTTOTAL, msg.data.result.count)
    }
  }
}
