export default {
  messArray_get: state => state.ONEreslist,
  listup: state => state.typepayLIST,
  parkingLotType: state => id => {
    return state.gstylelast.find(list => list.value == id);
  },
  getParkingLotInfoById: state => id => {
    return state.parkLotInfo.find(list => list.id == id);
  },
  getSalePlansById: state => id => {
    return state.mySalePlans.find(list => list.plans_id == id);
  },
  getParkingLotDevList: state => {
    let parkinglitDevList = state.parkDevList;
    if (state.parkDevList.list) {
      let list = parkinglitDevList.list
      let temp = new Array(0);
      for (let i = 0; i < list.length; i++) {
        let filter = {
          type: list[i].type,
          devname: list[i].devname,
          stantype: list[i].stantype,
          devid: list[i].devid,
          parkid: list[i].parkid,
          remark: list[i].remark,
          id: list[i].id,
          number: list[i].number,
          rentype: list[i].rentype,
          timeslot: list[i].timeslot,
          mark: list[i].mark,
        };
        temp.push(filter);
      }
      console.log(temp)
      return {
        list: temp,
        count: parkinglitDevList.count
      };
    }
  },
  getParkingLotDevListByid: state => id => {
    return state.parkDevList.list.find(list => list.id == id);
  },
  getEquipmentList: state => {
    console.log(state.equipmentList)
    let equipmentList = state.equipmentList;
    if (state.equipmentList.list) {
      let list = equipmentList.list
      let temp = new Array(0);
      for (let i = 0; i < list.length; i++) {
        let parkinglot = state.parkLotInfo.find(l => l.parking_id == list[i].id)
        // console.log(state.parkLotInfo)
        let parkna = parkinglot.parking_name
        let filter = {
          parking_name: parkna,
          // parking_name: list[i].name,
          boxId: list[i].deviceId,
          boxName: list[i].ename,
          boxType: list[i].typeName,
          id: list[i].id,
          eid: list[i].eid,
          deviceId: list[i].deviceId,
          codestyle: list[i].codestyle,
          state: list[i].state
        };
        temp.push(filter);
      }

      return {
        list: temp,
        count: equipmentList.count
      };
    }
  },
  getEquipment: state => id => {
    console.log(id)
    return state.equipmentList.list.find(list => list.eid == id);
  },
  getOrderList: state => {
    let orderList = state.orderList;
    console.log(orderList)
    if (orderList != '暂无数据') {
      let temp = new Array(0);
      for (let i = 0; i < orderList.length; i++) {
        let filter = {
          orderId: orderList[i].number,
          userName: orderList[i].uname,
          carAddress: orderList[i].address,
          carId: orderList[i].country,
          phone: orderList[i].phone,
        };
        temp.push(filter);
      }
      return temp;
    }

  },
  getOrderInfo: state => {
    let orderInfo = state.orderInfo;
    let filter = {
      userName: orderInfo.uname,
      washMod: orderInfo.cname,
      carId: orderInfo.country,
      devId: orderInfo.devId,
      keyAddress: orderInfo.keyaddress,
      money: orderInfo.money,
      orderId: orderInfo.number,
      password: orderInfo.password,
      phone: orderInfo.phone,
      carAddress: orderInfo.carAddress,
      state: orderInfo.state,
      typeId: orderInfo.typeId
    };
    return filter;
  },
  getBussinessList: state => {
    let bussinessList = state.bussinessList;
    let temp = new Array(0);
    console.log(bussinessList);
    for (let i = 0; i < bussinessList.length; i++) {
      let filter = {
        address: bussinessList[i].address,
        name: bussinessList[i].name,
        // carId:bussinessList[i].country,
        // devId:bussinessList[i].deviceid,
        // keyAddress:bussinessList[i].keyaddress,
        // money:bussinessList[i].money,
        // orderId:bussinessList[i].number,
        // password:bussinessList[i].password,
        phone: bussinessList[i].phone,
        // carAddress:bussinessList[i].carAddress,
        // state:bussinessList[i].state,
        bid: bussinessList[i].bid
        // person:bussinessList[i].person
      };
      temp.push(filter);
    }
    return temp;
  },
  getUserList: state => {
    let userList = state.userList;
    return userList;
  },
  getBussinessInfo: state => id => {
    console.log(state.bussinessList);
    if (state.bussinessList.length === 0 || !id) {
      return {
        name: "",
        person: "",
        phone: "",
        deviceid: "",
        jmoney: "",
        pmoney: "",
        account: "",
        password: ""
      };
    } else {
      let bussiness = state.bussinessList.find(list => list.bid == id);
      let cname = bussiness.cname;
      let jmoney = cname.split(",")[0];
      let pmoney = cname.split(",")[1];
      console.log(jmoney, pmoney);
      let filter = {
        name: bussiness.name,
        jmoney: jmoney ? cname.split(",")[0].match(/[0-9]+/g) : 0,
        pmoney: pmoney ? cname.split(",")[1].match(/[0-9]+/g) : 0,
        person: bussiness.person,
        phone: bussiness.phone,
        deviceid: bussiness.deviceid,
        account: bussiness.account,
        password: bussiness.password,
        address: bussiness.address,
        bid: bussiness.bid
      };
      return filter;
    }
  },
  getWashmodList: state => {
    let washModList = state.washModList;
    let temp = new Array(0);
    for (let i = 0; i < washModList.length; i++) {
      let filter = {
        id: washModList[i].cid,
        washMod: washModList[i].cname,
        bussinessId: washModList[i].sid,
        count: washModList[i].sold,
        money: washModList[i].money,
        discountPrice: washModList[i].discountPrice,
      };
      temp.push(filter);
    }
    return temp;
  },
  getParkingLotInfo: state => {
    return state.parkLotInfo
  },
  getCellList: state => {
    return state.cellList
  },
  getUserOtherInfo: state => {
    return state.userOtherInfo
  },
  getdeOrderInfo: state => {
    return state.orderLotInfo
  },
  getdeOrderList: state => {
    console.log(state)
    let orderLotList = state.orderLotList;
    if (state.orderLotList.list) {
      let list = orderLotList.list
      let temp = new Array(0);
      for (let i = 0; i < list.length; i++) {
        let filter = {
          type: list[i].res_id,
          devid: list[i].devid,
          devid_name: list[i].devid_name,
          phone: list[i].phone,
          car_number: list[i].car_number,
          parking_id: list[i].parking_id,
          parking_name: list[i].parking_name,
          start_time: list[i].start_time,
          end_time: list[i].end_time,
          money: list[i].money,
          status: list[i].status
        };
        temp.push(filter);
      }
      console.log(temp)
      return {
        list: temp,
        count: orderLotList.count
      };
    }
  }
};
