import {
  getWaitCarOrders,
  getFinishedCarOrders,
  getKeyOrders,
  getAllOrders,
  initOrderInfo,
  todayOrderNum,
  wxInfo,
  allOrderNum,
  wxConfig,
  userLogin,
  opentakeKey,
  open
} from "@/api/api"
import * as types from "@/store/types"
import wx from "wx"
export default {
  async initWaitCarOrders ({ commit },payload) {
    let res = await getWaitCarOrders(payload)
    console.log(payload)
    commit(types.INIT_WAITCAR_INFO, res)
  },
  async initFinishedCarOrders ({ commit },payload) {
    let res = await getFinishedCarOrders(payload)
    commit(types.INIT_FINISHED_CAR_ORDERS, res)
  },
  async initTodayOrderNum ({ commit }) {
    let res = await todayOrderNum()
    if (res) {
      commit(types.INIT_USER_ORDER_TODAY_NUM, res.count)
    }
  },
  async initWxinfo ({ commit }) {
    let res = await wxInfo()
    if (res) {
      commit(types.INIT_WXINFO, res.key)
    }
  },
  async initKeyOrders ({ commit },payload) {
    let res = await getKeyOrders(payload)
    commit(types.INIT_KEY_ORDERS, res)
  },
  async initAllOrders ({ commit },payload) {
    console.log(payload)
    let res = await getAllOrders(payload)
    commit(types.INIT_ALL_ORDERS, res)
  },
  async initOrderInfo ({ commit }, payload) {
    let res = await initOrderInfo(payload.number)
    commit(types.INIT_USER_ORDER_INFO, res)
  },
  async initAllOrderNum ({ commit }) {
    let res = await allOrderNum()
    commit(types.INIT_USER_ORDER_ALL_NUM, res.count)
  },
  async saoyisao ({ commit }) {
    let res = await wxConfig()
    wx.config({
      debug: false,
      appId: res.appid,
      timestamp: res.timestamp,
      nonceStr: res.nonceStr,
      signature: res.signature, // 必填，签名，见附录1
      jsApiList: [res.jsApiList]
    })
    // wx.ready(function() {
    wx.scanQRCode({
      needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
      scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
      success: function (res) {
        alert(res)
        let result = res.resultStr // 当needResult 为 1 时，扫码返回的结果
        let p1 = result.indexOf("state")
        let p2 = result.indexOf("redirect_uri")
        if (result.substring(p2 + 13, p2 + 36) === "http://cloud.sokeed.com") {
          alert(result.substring(p1 + 6, p1 + 14))
        }
      }
    })
    // })
    // 发送短信接口  开柜接口
  },
  async login ({ commit }, payload) {
    let res = await userLogin({
      phone: payload.account,
      password: payload.password
    })
    return res
  },
  async getKey ({ commit }, payload) {
    let res = await open({
      number: payload.number,
      deviceId: payload.deviceId
    })
    return res
  },
  async takeKey ({ commit }, payload) {
    let res = await opentakeKey({
      number: payload.number,
      deviceId: payload.deviceId
    })
    return res
  }
}
