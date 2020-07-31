let url = 'http://39.104.102.213:8796'
 // let url='http://192.168.2.143:8796'

import Qs from 'qs'
import axios from 'axios'
export function searchClicks (baseurl, data) {
  return axios.post(url + baseurl, Qs.stringify(data))
}
// 查询每一个的经纬度
export const serachlong = data => axios(`${url}/Amend/findOne`, Qs.stringify(data)) 