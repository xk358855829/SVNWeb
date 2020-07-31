import axios from 'axios';
import Qs from 'qs';



const sevice = axios.create({
  baseURL: 'http://39.104.99.181:3011/',
  // baseURL:process.env.url
  timeout: 5000
})
sevice.interceptors.request.use(config => {
  config.method == 'post' ? config.data = Qs.stringify({ ...config.data }) : config.params = { ...config.params }
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  return config
}), (err => {
  return Promise.reject(err)
})
sevice.interceptors.response.use(config => {
  return config
}), (err => {
  return Promise.reject(err)
})
export default sevice;