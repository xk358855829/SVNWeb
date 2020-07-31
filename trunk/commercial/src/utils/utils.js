

import dayjs from "dayjs"

export const timestampsFormat = timestamps => {
  if (typeof timestamps === "number") {
    return dayjs(timestamps).format("YYYY-MM-DD HH:mm:ss")
  } else {
    return false
  }
}

export const typeCardState = id => {
  let typeId = id
  switch (typeId) {
    case "1":
      return { label: "已下单", type: "warning" }
    case "2":
      return { label: "取钥匙", type: "danger" }
    case "3":
      return { label: "存钥匙", type: "warning" }
    case "4":
      return { label: "钥匙未取", type: "warning" }
    case "5":
      return { label: "已完成", type: "finished" }
    case "7":
      return { label: "已取消", type: "finished" }
    default:
      return { label: "", type: "" }
  }
}
export function getQueryString (name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}
export function setCookie (username, password, exdays) {
  let exdate = new Date()
  exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays)

  window.document.cookie =
    "userName=" + username + ";path=/;expires=" + exdate.toGMTString()
  window.document.cookie =
    "userPwd=" + password + ";path=/;expires=" + exdate.toGMTString()
}
export function getCookie () {
  let temp = {}
  if (document.cookie.length > 0) {
    let arr = document.cookie.split("; ")
    for (let i = 0; i < arr.length; i++) {
      let arr2 = arr[i].split("=")
      if (arr2[0] === "userName") {
        temp.account = arr2[1]
      } else if (arr2[0] === "userPwd") {
        temp.password = arr2[1]
      }
    }
  }
  return temp
}
export function clearCookie () {
  setCookie("", "", -1)
}
