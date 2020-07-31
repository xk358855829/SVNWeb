import base from './base'
export const getWaitCarOrders = payload =>
  base.post('users/selectUsersBys', {
    state: "2",
    bid: localStorage.getItem('bid'),
    Page: payload.Page,
    PageSize: payload.PageSize
    // bid: '30'
  })
export const getFinishedCarOrders =payload =>
  base.post('users/selectUsersBys', {
    state: "5",
    Page: payload.Page,
    PageSize: payload.PageSize,
    bid: localStorage.getItem('bid')
    // bid:'30'
  })
export const getKeyOrders = payload =>
  base.post('users/selectUsersBys', {
    state: "3",
    Page: payload.Page,
    PageSize: payload.PageSize,
    bid: localStorage.getItem('bid')
    // bid:'30'
  })
export const getAllOrders = payload =>
  base.post('users/selectUsersBys', {
    bid: localStorage.getItem('bid'),
    Page: payload.Page,
    PageSize: payload.PageSize
    // bid:'30'
  })
export const initOrderInfo = number =>
  base.post('users/view', {
    number: number
  })
export const todayOrderNum = () =>
  base.post('users/queryByDate', {
    status: localStorage.getItem('bid')
    // bid:'30'
  })

export const allOrderNum = () =>
  base.post('users/queryCount', {
    status: localStorage.getItem('bid')
    // bid:'30'
  })

export const wxInfo = () =>
  base.post('carwash/queryOpenids', {
    openid: localStorage.getItem('openid')
    // openid: 'o8Aq-5v-iRRACkOyuOSAk8Fs0sbg'
  })
export const wxConfig = () =>
  base.get(
    `/scan/getJSSDKTicket?url=${window.location.href}${new Date().getTime()}`
  )
export const userLogin = payload =>
  base.post('business/queryByBusinessLogin', {
    phone: payload.phone,
    password: payload.password
  })
export const open = payload =>
  base.post('users/queryByDeviceIds', {
    number: payload.number,
    deviceId: payload.deviceId
  })
export const opentakeKey = payload =>
  base.post('users/queryByScan', {
    number: payload.number,
    deviceId: payload.deviceId
  })