import axios from 'axios'
import Qs from 'qs'
// const testUrl = 'http://192.168.2.143:8797'
const serverUrl = 'http://114.55.168.103:8797'
// const serverUrl = 'http://192.168.2.143:8797'
const instance = axios.create({
  baseURL: serverUrl,
  // serverUrl,
  timeout: 100000,
  method: 'post',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
instance.interceptors.request.use(req => {
  req.data = Qs.stringify(req.data)
  return req
})
instance.interceptors.response.use(
  res => {
    if (res.status === 200) {
      return res.data
    } else {
      console.log(res)
    }
  },
  err => {
    console.log(err)
    return err
  }
)

export default instance
