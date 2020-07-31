import axios from 'axios'
import Qs from 'qs'

const oldurl = 'http://114.55.168.103:8762/'
// const oldurl = 'http://192.168.2.143:8762/'
const parkurl = 'http://114.55.168.103:2088/'
let rurl = 'http://114.55.168.103:8797'
let nowurl = 'http://39.104.113.112:8799'
// let nowurl = 'http://192.168.2.143:8799'

import service from './base'

export const brands = (data) =>
  axios.post(`${oldurl}app/brand/list`, Qs.stringify(data))

export function formatDate (secs) {         //type是可选参数，因为json中时间的格式是year-month-date,不能识别XX年XX月XX日
  var t = new Date(secs)
  var year = t.getFullYear()
  var month = t.getMonth() + 1
  if (month < 10) { month = '0' + month }
  var date = t.getDate()
  if (date < 10) { date = '0' + date }
  var hour = t.getHours()
  if (hour < 10) { hour = '0' + hour }
  var minute = t.getMinutes()
  if (minute < 10) { minute = '0' + minute }
  var second = t.getSeconds()
  if (second < 10) { second = '0' + second }

  // return year + '/' + month + '/' + date + '日' + hour +'时' + minute + '分'
  return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
}
export function formatDateadd (secs, type = 0) {         //type是可选参数，因为json中时间的格式是year-month-date,不能识别XX年XX月XX日
  var t = new Date(secs)
  var year = t.getFullYear()
  var month = t.getMonth() + 1
  if (month < 10) { month = '0' + month }
  var date = t.getDate()
  if (date < 10) { date = '0' + date }
  var hour = t.getHours()
  if (hour < 10) { hour = '0' + hour }
  var minute = t.getMinutes()
  if (minute < 10) { minute = '0' + minute }
  var second = t.getSeconds()
  if (second < 10) { second = '0' + second }
  if (type == 0) {
    // return year + '/' + month + '/' + date + '日' + hour +'时' + minute + '分'
    return year + '-' + month + '-' + date + 1 + ' ' + hour + ':' + minute + ':' + second
  } else {
    return year + '-' + month + '-' + date
  }
}
export function showTime (data) {
  var date = new Date();

  var year = date.getFullYear();

  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  if (day < 10) {
    day = '0' + day
  }
  if (month < 10) {
    month = '0' + month
  }
  if (hour < 10) {
    hour = '0' + hour
  }
  if (minute < 10) {
    minute = '0' + minute
  }
  if (second < 10) {
    second = '0' + second
  }
  console.log(minute)
  return (year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second)
}
export const detailP = data => {
  return service({
    url: 'users/selectBylist',
    method: 'post',
    data
  })
}
export const chufa = (data) => {
  return service({
    url: 'plate/queryBypayments',
    method: 'post',
    data
  })
}
// 删除订单记录
export const delOrder = data => {
  return service({
    url: 'users/selectByDelete',
    method: 'post',
    data
  })
}
export const detailS = data => {
  return service({
    url: 'users/view',
    method: 'post',
    data
  })
}
export const Login = (data) => {
  return service({
    url: 'users/add',
    method: 'post',
    data
  })
}
export const send = data => {
  return service({
    url: 'inpark/message/phoneNumbe',
    method: 'post',
    data
  })
}

export const textchange = data => {
  return service({
    url: 'login/queryLoginSave',
    method: 'post',
    data
  })
}
// 查询状态
// export const serchstates= data=>{
//     return service({
//         url:'parkingData/getData',
//         method:'post',
//         data
//     })
// }

export const textchangeup = data => {
  return service({
    url: 'login/queryLoginUpdate',
    method: 'post',
    data
  })
}
export const Order = data => {
  return service({
    url: 'carwash/querylistByCarwash',
    method: 'post',
    data
  })
}
export const Add = data => {
  return service({
    url: 'User/bindCarNumberForWX',
    method: 'post',
    data
  })
}
// 取消订单
// export const no= data=>{
//     return service({
//         url:'User/bindCarNumberForWX',
//         method:'post',
//         data
//     })
// }
// 获取微信个人资料
export const Wxin = data => {
  return service({
    url: 'carwash/queryOpenids',
    method: 'post',
    data
  })
}
export const del = data => {
  return service({
    url: 'plate/queryPlateDelete',
    method: 'post',
    data
  })
}

export const serach = data => {
  return service({
    url: 'plate/queryPlatelist',
    method: 'post',
    data
  })
}
export const ADDcarnun = data => {
  return service({
    url: 'plate/queryPlateSave',
    method: 'post',
    data
  })
}
export const beforyan = data => {
  return service({
    url: 'users/queryOpenId',
    method: 'post',
    data
  })
}
// 是否为常用车牌
export const othercar = data => {
  return service({
    url: 'queryPlateUpdate',
    method: 'post',
    data
  })
}
export const wodeaic = data => {
  return service({
    url: 'users/selectByPhone',
    method: 'post',
    data
  })
}
export const xiugalwq = data => {
  return service({
    url: 'plate/queryPlateUpdate',
    method: 'post',
    data
  })
}

// 扫一扫开门
export const soayisc = data => {
  return service({
    url: 'users/queryByDeviceId',
    method: 'post',
    data
  })
}

// 扫一扫开门取钥匙
export const soayiscSave = data => {
  return service({
    url: 'users/queryByScans',
    method: 'post',
    data
  })
}


/*取消订单*/
export const cancel = data => {
  return service({
    url: 'users/queryByStates',
    method: 'post',
    data
  })
}

// export const xiugaI= data=>{
//     return service({
//         url:'queryPlateUpdate',
//         method:'post',
//         data
//     })
// }
// http://39.104.99.181:8080
// export const detailP=data =>axios.post(`${url}users/list`,Qs.stringify(data))
// export const detailS=data=>axios.post(`${url}users/view`,Qs.stringify(data))
// export const Login= data=>axios.post(`${url}users/add`,Qs.stringify(data))
// export const Add= data=>axios.post(`${url}User/bindCarNumberForWX`,Qs.stringify(data))
// export const Order= data=>axios.post(`${url}carwash/querylistByCarwash`,Qs.stringify(data))
// export const Wxin=data=>axios.post(`${url}scan/getJSSDKTicket`,Qs.stringify(data))
export const ticket = data => axios.post(`${parkurl}TicketInfo/selectPackageByTel`, Qs.stringify(data))



// 获取车位锁指定数据流(领导说不能用，废弃)
// export const serchstates = data => axios.post(`${nowurl}/parkingData/getData`, Qs.stringify(data))
// 获取车位锁所有数据流
export const serchstates = data => axios.post(`${nowurl}/parkingData/getBatData`, Qs.stringify(data))
// 故障上报
export const malfunction = data => axios.post(
  `${oldurl}web/parkingdevList/updateByParkIdByRetypes`, Qs.stringify(data)
)

// 添加车牌
export const addtian = data => axios.post(`${oldurl}app/brand/add`, Qs.stringify(data))
// 查询车牌号码
export const serarchc = data => axios.post(`${oldurl}app/brand/list`, Qs.stringify(data))
// 删除车牌
export const delc = data => axios.post(`${oldurl}app/brand/delect`, Qs.stringify(data))

// 车辆是否进场
export const chosecar = data => axios.post(`${parkurl}api/checkCarNumberIsOrdered`, Qs.stringify(data))
export const fasong = data => axios.post(`${parkurl}SMS/checkTel`, Qs.stringify(data))
export const stateus = data => axios.post(`${parkurl}SMS/checkTelStatus`, Qs.stringify(data))
// 获取二维码信息
export const code = data => axios.post(`${oldurl}web/parkingdevList/selectByMarke`, Qs.stringify(data))
// 根据二维码下单
export const toolcode = data => axios.post(`${oldurl}app/reserve/orderSheets`, Qs.stringify(data))

export const takePark = data => axios.post(`${parkurl}Parking/selectLotInfo`, Qs.stringify(data))


// 储物柜下单
export const orderplan = data => axios.post(`${rurl}/Winxins/querySate`, Qs.stringify(data))
// 查询缴费查摄像头
export const chazli = data => axios.post(`${parkurl}Park/queryInfo`, Qs.stringify(data))
// 更换车牌
export const changecarnumber = data => axios.post(`${parkurl}ISVEnterOut/exchangeCarNumber`, Qs.stringify(data))