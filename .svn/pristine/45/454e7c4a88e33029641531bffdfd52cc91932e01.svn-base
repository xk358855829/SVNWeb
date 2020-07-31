import axios from 'axios'
import Vue from 'vue'
import Qs from 'qs'



const service = axios.create({
  // baseURL:process.env.API_ROOT,
  // baseURL: 'http://192.168.2.141:8086/ZFBrake',
  baseURL: "http://114.55.168.103:2088",
  // baseURL: "http://39.104.113.112:2088",
  timeout: 5000
});
// 添加请求拦截器
service.interceptors.request.use(function (config) {
  config.method == 'post' ? config.data = Qs.stringify({ ...config.data }) : config.params = { ...config.params };
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
});

service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  if (error) {
    // Vue.prototype.$message({
    //      type: "error",
    //     message: "请求错误"
    // })
    // alert('操作失败')
  }
  return Promise.reject(error)
});
export default service;