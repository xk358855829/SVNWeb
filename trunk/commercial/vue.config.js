module.exports = {
  // 选项...
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
  configureWebpack: {
    externals: {
      wx: "wx",
      layer: "layer"
    }
  }
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === 'production') {
  //     // 为生产环境修改配置...
  //     config.module
  //       .rule()
  //   } else {
  //     // 为开发环境修改配置...
  //   }
}
