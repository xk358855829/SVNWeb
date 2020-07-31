import axios from "axios";
let url = "http://39.104.99.181:8711";
// let url = "http://192.168.2.143:8711";
// 设备列表
export const deviceList = data =>
  axios.post(`${url}/device/dmInfo/getDeviceInfoList`, JSON.stringify(data));
// 设备绑定列表   
export const deviceBind = data =>
  axios.post(`${url}/device/user/bindDeviceList`, JSON.stringify(data));
// 设备解绑   
export const toUnbound = data =>
  axios.post(`${url}/device/dmInfo/deleteDevice`, JSON.stringify(data));
// 获取开关记录  
export const getdeviceRecord = data =>
  axios.post(`${url}/device/record/openCloseRecord`, JSON.stringify(data));
// 获取报警信息  
export const getalarmInfo = data =>
  axios.post(`${url}/device/record/warningRecord`, JSON.stringify(data));