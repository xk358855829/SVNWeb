import axios from 'axios'
axios.interceptors.response.use(function (response) {
  return response;
}, function (err) {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        Vue.prototype.$message({
          type: "error",
          message: "请输入正确参数"
        });
        err.message = '请求错误'
        break

      case 401:
        Vue.prototype.$message({
          type: "error",
          message: "未授权，请登录"
        });
        err.message = '未授权，请登录'
        break

      case 403:
        Vue.prototype.$message({
          type: "error",
          message: "拒绝访问"
        });
        err.message = '拒绝访问'
        break

      case 404:
        Vue.prototype.$message({
          type: "error",
          message: "请求地址出错"
        });
        err.message = `请求地址出错: ${err.response.config.url}`
        break

      case 408:
        Vue.prototype.$message({
          type: "error",
          message: "请求超时"
        });
        err.message = '请求超时'
        break

      case 500:
        Vue.prototype.$message({
          type: "error",
          message: "请输入正确参数"
        });
        err.message = '请输入正确参数'
        break

      case 501:
        Vue.prototype.$message({
          type: "error",
          message: "服务未实现"
        });
        err.message = '服务未实现'
        break

      case 502:
        Vue.prototype.$message({
          type: "error",
          message: "网关错误"
        });
        err.message = '网关错误'
        break

      case 503:
        Vue.prototype.$message({
          type: "error",
          message: "服务不可用"
        });
        err.message = '服务不可用'
        break

      case 504:
        Vue.prototype.$message({
          type: "error",
          message: "网关超时"
        });
        err.message = '网关超时'
        break

      case 505:
        Vue.prototype.$message({
          type: "error",
          message: "HTTP版本不受支持"
        });
        err.message = 'HTTP版本不受支持'
        break

      default:
    }
  }
  return Promise.reject(err);
});
axios.interceptors.request.use(config => {
  // console.log(config)
  // config.data = JSON.stringify(config.data)
  // config.headers = {
  //   'Content-Type': 'application/json'
  // }
  return config
})