import axios from "axios";
import Qs from "qs";
import Vue from "vue";
import "../../../common/common";
let url = "http://39.104.113.112:2088";
// let url = 'http://192.168.2.141:8086/ZFBrake'
let taiyuan = "http://114.55.168.103:2088";
// let taiyuan = "http://192.168.2.141:8086/ZFBrake";
let http = "http://39.104.99.181:8080";
let abc = "http://39.104.99.181:2080";
// let abcds='http://39.104.99.181:2080'
const yuyue_url = "http://39.104.99.181:8762";
// const yuyue_url = 'http://192.168.2.143:8762'

const chuwugui_test_url = "http://39.104.113.112:8797";
// const chuwugui_test_url='http://114.55.168.103:8797'
// const chuwugui_test_url='http://192.168.2.143:8797'
const dev_url = "http://39.104.113.112:8799";
const cesshitest_url = "http://192.168.2.143:8762";

const new_url = "http://39.104.113.112:8710";

// const yuyue_test_url = 'http://192.168.2.195:8762'
const yuyue_test_url = "http://39.104.113.112:8762";

// 洗车
// const wash_test_url = "http://192.168.2.195:8797";
// const wash_test_url = "http://114.55.168.103:8797";
const wash_test_url = "http://39.104.99.181:8797";
// const wash_url = "http://192.168.2.141:8086/ZFBrake";
const wash_url = "http://114.55.168.103:2088";

// 验证
export function valueop(val) {
  let regPhone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
  return regPhone.test(val);
}
export function isLicensePlate(str) {
  return /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/.test(
    str
  );
}
export function isRealNum(val) {
  if (val === "" || val == null) {
    return false;
  }
  if (!isNaN(val)) {
    return true;
  } else {
    return false;
  }
}
export function messagebox(msg, way, data, wayt1, wayt2) {
  Vue.prototype
    .$confirm(msg, "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
    })
    .then(() => {
      way(data).then(res => {
        if (res.data.resCode == 0) {
          Vue.prototype.$message({
            type: "success",
            message: wayt1,
          });
        } else {
          Vue.prototype.$message({
            type: "success",
            message: wayt2,
          });
        }
      });
    })
    .catch(() => {
      Vue.prototype.$message({
        type: "info",
        message: "已取消删除",
      });
    });
}
export function timeToDate(data) {
  var d = new Date(data * 1000); //时间戳记得乘以1000再进行处理
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var date = d.getDate();
  var hour = d.getHours();
  var minute = d.getMinutes();
  var second = d.getSeconds();
  // return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
  return (
    year +
    "-" +
    add(month) +
    "-" +
    add(date) +
    " " +
    add(hour) +
    ":" +
    add(minute) +
    ":" +
    add(second)
  );
}
Vue.filter("validate", function(val) {
  let value = JSON.stringify(val.time).slice(0, 10);
  var d = new Date(value * 1000);
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var date = d.getDate();
  var hour = d.getHours();
  var minute = d.getMinutes();
  var second = d.getSeconds();
  return (
    year +
    "-" +
    add(month) +
    "-" +
    add(date) +
    " " +
    add(hour) +
    ":" +
    add(minute) +
    ":" +
    add(second)
  );
});
Vue.filter("statusele", function(val) {
  if (val == 0) {
    val = "已使用";
  } else if (val == 1) {
    val = "未使用";
  } else if (val == -1) {
    val = "已失效";
  } else {
    val = "未发放";
  }
  return val;
});
Vue.filter("wires", function(val) {
  if (val == "1") {
    val = val + "分钟";
  } else if (val == "2") {
    val = val + "元";
  } else if (val == "3") {
    val = val + "元";
  } else {
    val = val + "折";
  }
  return val;
});

Vue.filter("typean", function(val) {
  if (val == "A") {
    val = "打折优惠金额";
  } else if (val == "B") {
    val = "满额优惠";
  } else if (val == "C") {
    val = "满折优惠";
  } else {
    val = "减优惠金额";
  }
  return val;
});
Vue.filter("shiyongtype", function(val) {
  console.log(val);
  if (val == "0") {
    val = "已使用";
  } else if (val == "1") {
    val = "未使用";
  } else if (val == "-1") {
    val = "已失效";
  } else {
    val = "已发放";
  }
  return val;
});
Vue.filter("archtype", function(val) {
  if (val == 1) {
    val = "电子券";
  } else {
    val = "纸券";
  }
  return val;
});
Vue.filter("numnewchose", function(val) {
  if (val == "") {
    val = "无";
  } else {
    val = val + "元";
  }
  return val;
});
Vue.filter("numnew", function(val) {
  if (val == "") {
    val = "-";
  } else {
    val = val;
  }
  return val;
});
Vue.filter("cardtype", function(val) {
  if (val == 1) {
    val = "电子券";
  } else {
    val = "纸券";
  }
  return val;
});

Vue.filter("fangtype", function(val) {
  if (val == 0) {
    val = "团体";
  } else {
    val = "个人";
  }
  return val;
});
Vue.filter("userwaytyape", function(val) {
  if (val == 1) {
    val = "免费时长";
  } else if (val == 2) {
    val = "现金抵用券";
  } else if (val == 3) {
    val = "满减券";
  } else {
    val = "折扣";
  }
  return val;
});
Vue.filter("note", function(val) {
  if (val == 0) {
    val = "已开通";
  } else {
    val = "未开通";
  }
  return val;
});
Vue.filter("issus_typefilter", function(val) {
  if (val == 1) {
    val = "免费";
  } else if (val == 2) {
    val = "收费";
  } else if (val == 4) {
    val = "4s店领取";
  } else if (val == 5) {
    val = "分享";
  }
  return val;
});
Vue.filter("box_state", function(val) {
  if (val == 0) {
    val = "未用";
  } else if (val == 1) {
    val = "已用";
  }
  return val;
});
Vue.filter("sizes", function(val) {
  if (val == "") {
    val = "无";
  }
  return val;
});
Vue.filter("isundefined", function(val) {
  if (val === undefined) {
    val = {
      name: "",
      person: "",
      phone: "",
      devId: "",
      jmoney: "",
      pmoney: "",
      account: "",
      password: "",
    };
  }
  return val;
});
Vue.filter("team", function(val) {
  if (val == "") {
    val = "团体";
  } else {
    val = "个人";
  }
  return val;
});
Vue.filter("moneypay", function(val) {
  return val + "元";
});
Vue.filter("carlistwr", function(val) {
  if (val == "0") {
    val = "是";
  } else if (val == "1") {
    val = "否";
  } else {
    val = "-";
  }
  return val;
});
Vue.filter("paytype", function(val) {
  if (val == 1) {
    val = "居民小区";
  } else if (val == 2) {
    val = "商圈停车场";
  } else if (val == 3) {
    val = "路侧停车";
  } else if (val == 4) {
    val = "公园景点";
  } else if (val == 5) {
    val = "商务楼宇";
  } else if (val == 6) {
    val = "其他";
  } else if (val == 7) {
    val = "交通枢纽";
  } else if (val == 8) {
    val = "市政设施";
  }
  return val;
});
Vue.filter("namechange", function(val) {
  if (val == "A") {
    val = "永久免费";
  } else if (val == "B") {
    val = "月卡";
  } else if (val == "C") {
    val = "年卡";
  } else if (val == "D") {
    val = "限时";
  } else if (val == "E") {
    val = "储值";
  } else if (val == "F") {
    val = "临时";
  } else {
    val = "季卡";
  }
  return val;
});
Vue.filter("verification", function(val) {
  if (val == "1") {
    val = "免费时长";
  } else if (val == "2") {
    val = "现金抵用";
  } else if (val == "3") {
    val = "满减";
  } else if (val == "4") {
    val = "折扣";
  }
  return val;
});
// 查询积分
export const writer = data =>
  axios.post(`${url}/carInfo/sysnList`, Qs.stringify(data));
export const unpyouh = data =>
  axios.post(`${url}/salePlans/unbound`, Qs.stringify(data));
export function add(m) {
  return m < 10 ? "0" + m : m;
}
export const searchji = data =>
  axios.post(`${url}/MarkRecords/findMark`, Qs.stringify(data));
export const addji = data =>
  axios.post(`${url}/MarkRecords/sendMarks`, Qs.stringify(data));
export const searchClicks = (baseurl, data) =>
  axios.post(url + baseurl, Qs.stringify(data));
export const logins = (baseurl, data) =>
  axios.post(http + baseurl, Qs.stringify(data));
export const jurisdictionShows = (baseurl, data) =>
  axios.post(url + baseurl, Qs.stringify(data));
export const salePlans = (baseurl, data) =>
  axios.post(`${url}${baseurl}`, Qs.stringify(data));
export const bindDevice = data =>
  axios.post(`${url}/Device/queryBindDeviceld`, Qs.stringify(data));
export const unbindDevice = params =>
  axios.post(`${url}/Device/unbound`, Qs.stringify(params));
export const whiteBarkeList = params =>
  axios.get(
    `http://192.168.2.110:3011/wirite/single/list`,
    Qs.stringify(params)
  );
export const updateParkingInfo = params =>
  axios.post(`${url}/Parking/updateParkingInfoForThird`, Qs.stringify(params));
export const getParkingLotListApi = params =>
  axios.post(`${url}/Parking/selectLotInfo`, Qs.stringify(params));
export const ifUseMark = params =>
  axios.post(`${url}/MarkRecords/isUseMark`, Qs.stringify(params));
export const getEquipmentList = params =>
  axios.post(
    `${chuwugui_test_url}/equipment/selectByPrimaryKey`,
    Qs.stringify(params)
  );
export const getOrderList = params =>
  axios.post(`${chuwugui_test_url}/users/list`, Qs.stringify(params));
export const getOrderInfo = params =>
  axios.post(`${chuwugui_test_url}/users/view `, Qs.stringify(params));
export const addBussiness = params =>
  axios.post(
    `${chuwugui_test_url}/business/queryBySave `,
    Qs.stringify(params)
  );
export const getBussinessList = params =>
  axios.post(
    `${chuwugui_test_url}/business/queryByBusiness`,
    Qs.stringify(params)
  );
export const imgupload = (formdata, config) =>
  axios.post(`${chuwugui_test_url}/carwash/upload`, formdata, config);
export const apkupload = (formdata, config) =>
  axios.post(`${chuwugui_test_url}/uploadHandle/upload`, formdata, config);
export const cunupload = params =>
  axios.post(
    `${chuwugui_test_url}/equipment/queryByBinding`,
    Qs.stringify(params)
  );
export const updateBussiness = params =>
  axios.post(
    `${chuwugui_test_url}/business/queryByUpdate`,
    Qs.stringify(params)
  );
export const getUserList = params =>
  axios.post(`${chuwugui_test_url}/login/queryLogin`, Qs.stringify(params));
export const getWashmodList = params =>
  axios.post(
    `${chuwugui_test_url}/carwash/querylistByCarwash`,
    Qs.stringify(params)
  );
export const addWashmod = params =>
  axios.post(
    `${chuwugui_test_url}/carwash/querylistByCarwashSave`,
    Qs.stringify(params)
  );
export const editWashmod = params =>
  axios.post(
    `${chuwugui_test_url}/carwash/querylistByCarwashUpdate`,
    Qs.stringify(params)
  );
export const deleteWashmod = params =>
  axios.post(`${chuwugui_test_url}/carwash/queryDelete`, Qs.stringify(params));
export const addEquipment = params =>
  axios.post(
    `${chuwugui_test_url}/equipment/queryByEquipmentSave`,
    Qs.stringify(params)
  );
export const upaddimg = data =>
  axios.post(`${chuwugui_test_url}/carwash/upload`, data);
export const editEquipment = params =>
  axios.post(
    `${chuwugui_test_url}/equipment/queryByUpdate`,
    Qs.stringify(params)
  );
export const realBox = params =>
  axios.post(
    `${chuwugui_test_url}/cabinetType/queryCabinetType`,
    Qs.stringify(params)
  );
export const deleteEquipment = params =>
  axios.post(
    `${chuwugui_test_url}/equipment/queryByDelete`,
    Qs.stringify(params)
  );
export const deleteUser = params =>
  axios.post(
    `${chuwugui_test_url}/login/queryLoginDelete`,
    Qs.stringify(params)
  );
export const userOtherInfo = params =>
  axios.post(`${chuwugui_test_url}/login/selectLogin`, Qs.stringify(params));
export const parkingDevList = params =>
  axios.post(`${yuyue_url}/web/parkingdevList/list`, Qs.stringify(params));
export const deleteDevList = params =>
  axios.post(`${yuyue_url}/web/parkingdevList/del`, Qs.stringify(params));
export const addDevList = params =>
  axios.post(`${yuyue_url}/web/parkingdevList/add`, Qs.stringify(params));
export const editDevList = params =>
  axios.post(`${yuyue_url}/web/parkingdevList/update`, Qs.stringify(params));
export const deorderList = params =>
  axios.post(`${yuyue_url}/app/reserve/selectByCarList`, Qs.stringify(params));
export const cancelDeorder = params =>
  axios.post(`${yuyue_url}/app/reserve/selectByCar`, Qs.stringify(params));

export const bussinessBindDevice = params =>
  axios.post(
    `${chuwugui_test_url}/business/queryBybusinessDeviceid`,
    Qs.stringify(params)
  );
export const bindDeviceList = params =>
  axios.post(
    `${chuwugui_test_url}/business/selectBybusinessByDeviceid`,
    Qs.stringify(params)
  );
export const guidePost = params =>
  axios.post(`${new_url}/equipment/selectByList`, Qs.stringify(params));
export const toAddguide = params =>
  axios.post(`${new_url}/equipment/selectBySave`, Qs.stringify(params));
export const bindPark = params =>
  axios.post(`${new_url}/equipment/selectByViwes`, Qs.stringify(params));
export const bindparkInPost = params =>
  axios.post(`${new_url}/equipment/selectByBinding`, Qs.stringify(params));
export const unbinkParkingId = params =>
  axios.post(
    `${new_url}/equipment/selectByBindingDelete`,
    Qs.stringify(params)
  );
export const toDeleParLink = params =>
  axios.post(`${new_url}/equipment/selectByDelete`, Qs.stringify(params));
export const toeditPark = params =>
  axios.post(`${new_url}/equipment/selectByUpdate`, Qs.stringify(params));
export const parkDevPost = params =>
  axios.post(`${dev_url}/park/selectByDeviceId`, Qs.stringify(params));
export const toDeleDevic = params =>
  axios.post(`${dev_url}/park/selectDelete`, Qs.stringify(params));
// 配置优惠券
export const configs = data =>
  axios.post(`${taiyuan}/TicketISV/findISV1`, Qs.stringify(data));
// 添加优惠券
export const addfigs = data =>
  axios.post(`${taiyuan}/TicketISV/config01`, Qs.stringify(data));
export const addfigt = data =>
  axios.post(`${taiyuan}/TicketISV/config02`, Qs.stringify(data));

export const searchfigt = data =>
  axios.post(`${taiyuan}/TicketISV/findISV2`, Qs.stringify(data));
// 删除优惠券
export const delfigtwo = data =>
  axios.post(`${taiyuan}/TicketISV/delOneISV1`, Qs.stringify(data));
export const delfigt = data =>
  axios.post(`${taiyuan}/TicketISV/delOneISV2`, Qs.stringify(data));
// 修改
export const changfigt = data =>
  axios.post(`${taiyuan}/TicketISV/upISV1`, Qs.stringify(data));
export const changfigttwo = data =>
  axios.post(`${taiyuan}/TicketISV/upISV2`, Qs.stringify(data));
export const lockstaic = data =>
  axios.post(
    `${yuyue_url}/web/parkingdevList/selectByList`,
    Qs.stringify(data)
  );
export const userlogin = data =>
  axios.post(`${wash_url}/User/countByType`, Qs.stringify(data));
// 预约订单退款
export const refunds = data =>
  axios.post(`${yuyue_url}/app/reserve/wxWithSecret`, Qs.stringify(data));
// export const refundsab = data => axios.post('http://192.168.2.143:8762/app/reserve/selectByVReserveCount', Qs.stringify(data))
// 解绑商家管理
export const itembind = data =>
  axios.post(`${yuyue_url}/business/queryBybusinessDelete`, Qs.stringify(data));
// 商家绑定洗车模式
export const bingDing = data =>
  axios.post(
    `${chuwugui_test_url}/business/queryBybusinessCid`,
    Qs.stringify(data)
  );
// 查看车场积分规则绑定的数据
export const rulemark = data =>
  axios.post(`${url}/lotInfoMarkConfig/findMarkRules`, Qs.stringify(data));
// 新增积分规则
export const addrule = data =>
  axios.post(`${url}/lotInfoMarkConfig/addRuleConfig`, Qs.stringify(data));
// 查看车场积分规则绑定的数据
export const searchrule = data =>
  axios.post(`${url}/lotInfoMarkConfig/findRuleConfig`, Qs.stringify(data));
// 解绑绑定积分规则
export const deletes = data =>
  axios.post(`${url}/lotInfoMarkConfig/delRuleConfig`, Qs.stringify(data));
// 车场绑定积分规则，多对一
export const parkbrule = data =>
  axios.post(`${url}/lotInfoMarkConfig/bindMarkRules`, Qs.stringify(data));
// 解绑绑定积分规则就是删除
export const unbindRule = data =>
  axios.post(`${url}/lotInfoMarkConfig/delMarkRules`, Qs.stringify(data));
// 查询主页支付类型
export const payerules = data =>
  axios.post(`${url}/feeOrder/orders`, Qs.stringify(data));
// 道闸查询
export const gates = data =>
  axios.post(`${url}/Device/brakeList`, Qs.stringify(data));
// 洗车站点列表
export const getsiteList = data =>
  axios.post(
    `${wash_test_url}/parkingSite/selectByparkingSiteExample`,
    Qs.stringify(data)
  );
// 根据sid获取站点信息
export const getsiteListinfo = data =>
  axios.post(
    `${wash_test_url}/parkingSite/selectByparkingSiteSid`,
    Qs.stringify(data)
  );
// 添加站点
export const addsite = data =>
  axios.post(
    `${wash_test_url}/parkingSite/selectByparkingSiteSave`,
    Qs.stringify(data)
  );
// 删除站点
export const delsite = data =>
  axios.get(
    `${wash_test_url}/parkingSite/deleteByParkingSite`,
    Qs.stringify(data)
  );
// 修改站点
export const exitsite = data =>
  axios.post(
    `${wash_test_url}/parkingSite/selectByparkingSiteUpdate`,
    Qs.stringify(data)
  );
// 修改站点时间
export const exitsiteOpen = data =>
  axios.post(
    `${wash_test_url}/parkingLotopentimeSite/updateByPrimaryKeySelective`,
    Qs.stringify(data)
  );
// 获取摄像头、储物柜、洗车机、停车场列表
export const getwashinfo = data =>
  axios.post(
    `${wash_test_url}/parkingSite/selectByParkAndInfoAndRecerd`,
    Qs.stringify(data)
  );
// 获取4s店铺列表
export const getwashcarshopinfo = data =>
  axios.post(
    `${wash_test_url}/parkingSite/selectByCarShop`,
    Qs.stringify(data)
  );
// 查询绑定的4s店铺
export const getbindcarshopinfo = data =>
  axios.post(
    `${wash_test_url}/parkingSite/selectByCarParkingShop`,
    Qs.stringify(data)
  );  
// 洗车机设备管理列表
export const getwashEquipment = data =>
  axios.post(
    `${wash_test_url}/parkingCarId/selectByParkingCarId`,
    Qs.stringify(data)
  );
// 添加洗车机
export const addwashEquipment = data =>
  axios.post(
    `${wash_test_url}/parkingCarId/insertSelective`,
    Qs.stringify(data)
  );
// 删除洗车机
export const delwashEquipment = data =>
  axios.delete(
    `${wash_test_url}/parkingCarId/deleteByPrimaryKey`,
    Qs.stringify(data)
  );
// 修改洗车机
export const exitwashEquipment = data =>
  axios.post(
    `${wash_test_url}/parkingCarId/updateByPrimaryKeySelective`,
    Qs.stringify(data)
  );
// 摄像头设备管理列表
export const getcameraEquipment = data =>
  axios.post(`${wash_test_url}/brakeWashCar/selectAll`, Qs.stringify(data));
// 添加摄像头
export const addcameraEquipment = data =>
  axios.post(`${wash_test_url}/brakeWashCar/insert`, Qs.stringify(data));
// 删除摄像头
export const delcameraEquipment = data =>
  axios.post(`${wash_test_url}/brakeWashCar/delete`, Qs.stringify(data));
// 修改摄像头
export const exitcameraEquipment = data =>
  axios.post(`${wash_test_url}/brakeWashCar/update`, Qs.stringify(data));
// 洗车记录列表
export const getwashRecord = data =>
  axios.post(
    `${wash_test_url}/parkingCarRecerd/selectByParkingCarRecerd`,
    Qs.stringify(data)
  );
// 洗车记录条件查询列表
export const getwashRecordList = data =>
  axios.post(
    `${wash_test_url}/parkingCarRecerd/selectByLikes`,
    Qs.stringify(data)
  );
// 洗车记录详情
export const washRecordinfo = data =>
  axios.post(
    `${wash_test_url}/parkingCarRecerd/selectByView`,
    Qs.stringify(data)
  );
// 洗车会员模块，获取会员列表
export const getassociatorList = data =>
  axios.post(`${wash_url}/carInfoWashCar/selectAll`, Qs.stringify(data));
// 添加会员
export const addassociator = data =>
  axios.post(`${wash_url}/carInfoWashCar/insert`, Qs.stringify(data));
// 删除会员
export const delassociator = data =>
  axios.post(`${wash_url}/carInfoWashCar/delete`, Qs.stringify(data));
// 修改会员
export const exitassociator = data =>
  axios.post(`${wash_url}/carInfoWashCar/update`, Qs.stringify(data));
// 获取会员类型列表
export const getassociatorType = data =>
  axios.post(`${wash_url}/carNumberTypeWashCar/selectAll`, Qs.stringify(data));
// 添加会员类型
export const addassociatorType = data =>
  axios.post(`${wash_url}/carNumberTypeWashCar/insert`, Qs.stringify(data));
// 删除会员类型
export const delassociatorType = data =>
  axios.post(`${wash_url}/carNumberTypeWashCar/delete`, Qs.stringify(data));
// 修改会员类型
export const exitassociatorType = data =>
  axios.post(`${wash_url}/carNumberTypeWashCar/update`, Qs.stringify(data));
export const getassociatorTypeMoney = data =>
  axios.post(
    `${wash_url}/carNumberTypeWashCar/selectByDealerAndName`,
    Qs.stringify(data)
  );
// 获取会员开通记录列表
export const getassociatorRecord = data =>
  axios.post(`${wash_url}/openVIPRecordsWashCar/selectAll`, Qs.stringify(data));
// 添加会员开通记录
export const addassociatorRecord = data =>
  axios.post(`${wash_url}/openVIPRecordsWashCar/insert`, Qs.stringify(data));
// 删除会员开通记录
export const delassociatorRecord = data =>
  axios.post(`${wash_url}/openVIPRecordsWashCar/delete`, Qs.stringify(data));
// 修改会员开通记录
export const exitassociatorRecord = data =>
  axios.post(`${wash_url}/openVIPRecordsWashCar/update`, Qs.stringify(data));
// 获取洗车票券列表
export const getCardCoupon = (baseurl, data) =>
  axios.post(wash_url + baseurl, Qs.stringify(data));
// 获取店铺列表
export const getstoreList = data =>
  axios.post(`${wash_url}/carShop/selectAll`, Qs.stringify(data));
// 添加店铺
export const addstore = data =>
  axios.post(`${wash_url}/carShop/insert`, Qs.stringify(data));
// 删除店铺
export const delstore = data =>
  axios.post(`${wash_url}/carShop/del`, Qs.stringify(data));
// 修改店铺
export const exitstore = data =>
  axios.post(`${wash_url}/carShop/update`, Qs.stringify(data));  
// 获取店员列表
export const getstorestaffList = data =>
  axios.post(`${wash_url}/carShopEmp/selectAll`, Qs.stringify(data));
// 添加店员
export const addstaff = data =>
  axios.post(`${wash_url}/carShopEmp/insert`, Qs.stringify(data));
// 删除店员
export const delstaff = data =>
  axios.post(`${wash_url}/carShopEmp/del`, Qs.stringify(data));
// 修改店员
export const exitstaff = data =>
  axios.post(`${wash_url}/carShopEmp/update`, Qs.stringify(data));
// 获取店员洗车模式列表
export const getstorestaffwashList = data =>
  axios.post(`${wash_url}/carShopEmpModelTimes/selectByCseId`, Qs.stringify(data));
// 添加店员洗车模式
export const addstaffwash = data =>
  axios.post(`${wash_url}/carShopEmpModelTimes/insert`, Qs.stringify(data));
// 删除店员洗车模式
export const delstaffwash = data =>
  axios.post(`${wash_url}/carShopEmpModelTimes/del`, Qs.stringify(data));
// 修改店员洗车模式
export const exitstaffwash = data =>
  axios.post(`${wash_url}/carShopEmpModelTimes/update`, Qs.stringify(data));   
// 店铺洗车记录列表
export const getstaffwashRecordList = data =>
  axios.post(
    `${wash_url}/carShopWashRecords/selectAll`,
    Qs.stringify(data)
  );
// 删除店铺洗车记录
export const delstaffwashRecord = data =>
  axios.post(`${wash_url}/carShopWashRecords/del`, Qs.stringify(data)); 

// 获取银行信息
export const getbankinfo = data =>
  axios.post(`${wash_url}/bankInfo/selectAll`, Qs.stringify(data));
// 添加银行
export const addbank = data =>
  axios.post(`${wash_url}/bankInfo/insert`, Qs.stringify(data));
// 修改银行
export const exitbank = data =>
  axios.post(`${wash_url}/bankInfo/update`, Qs.stringify(data));  
// 删除银行
export const delbank = data =>
  axios.post(`${wash_url}/bankInfo/delete`, Qs.stringify(data));  
// 获取银行客户信息
export const getbankuserinfo = data =>
  axios.post(`${wash_url}/bankEmp/selectAll`, Qs.stringify(data));
// 添加银行用户信息
export const addbankuser = data =>
  axios.post(`${wash_url}/bankEmp/insert`, Qs.stringify(data));
// 修改银行用户信息
export const exitbankuser = data =>
  axios.post(`${wash_url}/bankEmp/update`, Qs.stringify(data));
// 删除银行用户信息
export const delbankuser = data =>
  axios.post(`${wash_url}/bankEmp/delete`, Qs.stringify(data));  