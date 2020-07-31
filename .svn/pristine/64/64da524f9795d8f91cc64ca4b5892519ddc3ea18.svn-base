import axios from "axios";
import Qs from "qs";

let url = "http://39.104.113.112:2088";

// const oldurl = 'http://192.168.2.143:8762/'
const oldurl = "http://114.55.168.103:8762/";
// const oldurl = "http://39.104.99.181:8762/";

// let washurl = "http://192.168.2.195:2088/ZFBrake/";
let washurl = "http://114.55.168.103:2088/";
// let washurl = "http://39.104.113.112:2088/";

// let wash_test_url = "http://192.168.2.195:8797";
let wash_test_url = "http://114.55.168.103:8797";
// let wash_test_url = "http://39.104.99.181:8797";

import service from "./base";

// 洗车票券
export const ticket = data =>
  axios.post(
    `${washurl}ticketInfoWashCar/selectPackageByTel`,
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

// 获取站点信息
export const code = data =>
  axios.post(
    `${wash_test_url}/parkingSite/selectByparkingSiteSid`,
    Qs.stringify(data)
  );
// 获取停车场信息
export const getParkingLotListApi = params =>
  axios.post(`${url}/Parking/selectLotInfo`, Qs.stringify(params));
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
// 查询车牌号码
export const serarchc = data =>
  axios.post(`${oldurl}app/brand/list`, Qs.stringify(data));

export const bandcard = data =>
  axios.post(`${oldurl}app/brand/updatepriority`, Qs.stringify(data));

export const brands = data =>
  axios.post(`${oldurl}app/brand/list`, Qs.stringify(data));

export const fasong = data =>
  axios.post(`${washurl}SMS/checkTel`, Qs.stringify(data));
export const stateus = data =>
  axios.post(`${washurl}SMS/checkTelStatus`, Qs.stringify(data));

// 添加车牌
// export const addtian = data =>
//   axios.post(`${oldurl}app/brand/add`, Qs.stringify(data));
// 删除车牌
export const delc = data =>
  axios.post(`${oldurl}app/brand/delect`, Qs.stringify(data));

// 更换车牌
// export const changecarnumber = data =>
//   axios.post(`${washurl}ISVEnterOut/exchangeCarNumber`, Qs.stringify(data));

export function start() {
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
    strHours +
    seperator2 +
    strMinutes +
    seperator2 +
    strSeconds;
  return currentdate;
}

export function valueop(val) {
  let regPhone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
  return regPhone.test(val);
}
export function add(m) { return m < 10 ? '0' + m : m }
export function nowDate() {
    var d = new Date(); 
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
export function getid(url){
  var arr = url.split("&");
  var obj = {};
  for(var i = 0;i < arr.length;i++){
    var arr1 = arr[i].split("=");
    obj[arr1[0]] = Decrypt(arr1[1]);
  }
  return obj;
}
