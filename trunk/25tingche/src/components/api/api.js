import service from "./base";
import axios from "axios";
import Qs from "qs";

// let washurl = "http://192.168.2.141:8086/ZFBrake/";
let washurl = "http://114.55.168.103:2088/";

// let wash_test_url = "http://192.168.2.143:8797";
let wash_test_url = "http://114.55.168.103:8797";

// 洗车票券
export const washticket = data =>
  axios.post(
    `${washurl}ticketInfoWashCar/selectPackageByTel`,
    Qs.stringify(data)
  );
// 洗车记录
export const washrecord = data =>
  axios.post(
    `${wash_test_url}/parkingCarRecerd/selectByOpenid`,
    Qs.stringify(data)
  );
// 洗车站点列表
export const getsiteList = data =>
  axios.post(
    `${wash_test_url}/parkingSite/selectByparkingSiteExample`,
    Qs.stringify(data)
  );
// 洗车会员开通
export const washkaitongtwo = data => {
  return service({
    method: "post",
    url: "/carInfoWashCar/openVIPForApp2",
    data,
  });
};

export const ADD = data => {
  return service({
    method: "post",
    url: "/User/add",
    data,
  });
};
export const lesscode = data => {
  return service({
    url: "/person_pay/getpersoninfo",
    method: "post",
    data,
  });
};
// 切换车牌
export const changecarnumber = params => {
  return service({
    url: "/ISVEnterOut/exchangeCarNumber",
    method: "get",
    params,
  });
};
// 刷新失效券
export const shuaxin = data => {
  return service({
    url: "/TicketInfo/flushOverDue",
    method: "post",
    data,
  });
};
export const ticket = data => {
  console.log(data);
  return service({
    method: "post",
    url: "/TicketInfo/selectPackageByTel",
    data,
  });
};
export const cseshi = data => {
  console.log(data);
  return service({
    method: "post",
    url: "/Parking/selectLotInfo",
    data,
  });
};
export const kaitong = data => {
  return service({
    method: "post",
    url: "/carInfo/openVIPforAPP1",
    data,
  });
};
export const kaitongtwo = data => {
  return service({
    method: "post",
    url: "/carInfo/openVIPforAPP2",
    data,
  });
};
export const shaixuan = data => {
  return service({
    method: "post",
    url: "/carNumberType/findInfo",
    data,
  });
};

export const deloutrec = data => {
  return service({
    method: "post",
    url: "/feeOrder/delOrderByOutTradeNo",
    data,
  });
};
const newurl = "http://114.55.168.103:8797/";
const oldurl = "http://114.55.168.103:8762/";
const nowurl = "http://114.55.168.103:2088";

export const bandcard = data =>
  axios.post(`${oldurl}app/brand/updatepriority`, Qs.stringify(data));

// const oldurl = 'http://192.168.2.143:8762/'
// 添加车牌
export const addtian = data =>
  axios.post(`${oldurl}app/brand/add`, Qs.stringify(data));
// 查询车牌号码
export const serarchc = data =>
  axios.post(`${oldurl}app/brand/list`, Qs.stringify(data));
// 删除车牌
export const delc = data =>
  axios.post(`${oldurl}app/brand/delect`, Qs.stringify(data));
// export const addtian = data => {
//   return service({
//     method: 'post',
//     url: '/User/bindCarNumberForWX',
//     data
//   })
// }
// 停车记录
export const recode = data =>
  axios.post(`${nowurl}feeOrder/orders`, Qs.stringify(data));
// 取消订单
export const odertoos = data =>
  axios.post(`${oldurl}app/reserve/parkingCancel`, Qs.stringify(data));
export const shanchu = data => {
  return service({
    method: "post",
    url: "/User/unBondCarNumberForWX",
    data,
  });
};
export const chazli = data => {
  return service({
    method: "post",
    url: "/Park/queryInfo",
    data,
  });
};
export const lingquz = data => {
  return service({
    method: "post",
    url: "/TicketInfo/bornTicket",
    data,
  });
};
// 短信状态
export const stateus = data => {
  return service({
    method: "post",
    url: "/SMS/checkTelStatus",
    data,
  });
};
export const fasong = data => {
  return service({
    method: "post",
    url: "/SMS/checkTel",
    data,
  });
};
export const chaxunjiao = data => {
  return service({
    method: "post",
    url: "/Park/queryInfo",
    data,
  });
};
export function valueop(val) {
  let regPhone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
  return regPhone.test(val);
}
export const searchpark = data => {
  return service({
    method: "post",
    url: "/Parking/selectLotInfo",
    data,
  });
};
export function isLicensePlate(str) {
  return /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/.test(
    str
  );
}
export function isLicensePlate1(str) {
  return /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/.test(
    str
  );
}
export function start() {
  var date = new Date();
  var seperator1 = "-";
  var seperator2 = ":";
  var month = date.getMonth() + 1;
  var strDate = date.getDate() + 1;
  var strHours = date.getHours();
  var strMinutes = date.getMinutes();
  var strSeconds = date.getSeconds();

  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  if (strHours >= 0 && strHours <= 9) {
    strHours = "0" + strHours;
  }
  if (strMinutes >= 0 && strMinutes <= 9) {
    strMinutes = "0" + strMinutes;
  }
  if (strSeconds >= 0 && strSeconds <= 9) {
    strSeconds = "0" + strSeconds;
  }

  var currentdate =
    date.getFullYear() +
    seperator1 +
    month +
    seperator1 +
    strDate +
    " " +
    strHours +
    seperator2 +
    strMinutes +
    seperator2 +
    strSeconds;
  return currentdate;
}
export function end() {
  var date = new Date();
  var seperator1 = "-";
  var seperator2 = ":";
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  var strHours = date.getHours();
  var strMinutes = date.getMinutes();
  var strSeconds = date.getSeconds();

  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  if (strHours >= 0 && strHours <= 9) {
    strHours = "0" + strHours;
  }
  if (strMinutes >= 0 && strMinutes <= 9) {
    strMinutes = "0" + strMinutes;
  }
  if (strSeconds >= 0 && strSeconds <= 9) {
    strSeconds = "0" + strSeconds;
  }

  var currentdate =
    date.getFullYear() +
    seperator1 +
    month +
    seperator1 +
    strDate +
    " " +
    "00" +
    seperator2 +
    "00" +
    seperator2 +
    "00";
  return currentdate;
}

const CryptoJS = require("crypto-js"); //引用AES源码js
const key = CryptoJS.enc.Utf8.parse("1234123412ABCDEF"); //十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse("ABCDEF1234123412"); //十六位十六进制数作为密钥偏移量

//加密方法
export function Encrypt(word) {
  let srcs = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.ciphertext.toString().toUpperCase();
}
//解密方法
export function Decrypt(word) {
  let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  let decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}