const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");
const path = require('path');
const themePath = path.resolve(__dirname,'src/assets/style/theme.less');

module.exports = {
  publicPath: './',
  outputDir: "dist", // 输出文件目录
  lintOnSave: false, // eslint 是否在保存时检查
  assetsDir: 'static', // 配置js、css静态资源二级目录的位置 
  // 配置css前缀,px转rem
  css: {
    loaderOptions: {
      less: {
        // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
        // `primary` is global variables fields name
        // modifyVars: {
        //   // 直接覆盖变量
        //   "text-color": "#111",
        //   "border-color": "#eee",
        //   "nav-bar-text-color": "#c03131",
        //   "van-nav-bar__text": "#c03131",
        //   "nav-bar-title-text-color": "#c03131",

        //   // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
        //   // hack: `true; @import "@/assets/style/my-theme.less";`
        // }
        modifyVars: {
          hack: `true; @import "${themePath}";`
        }
      },
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ["*"]
          })
        ]
      }
    }
  },

  configureWebpack: {
    externals: {
      axios: "axios" // 配置使用CDN
    }
  }
  
  // devServer: {
  //     // 代理
  //     proxy: {
  //         // 只要请求地址有'api'都会匹配上
  //         "/api": {
  //             target: "http://132.232.94.151:3005",
  //             ws: true,
  //             // 允许跨域
  //             changeOrigin: true,
  //             pathRewrite: {
  //                 "^/api": "" //通过pathRewrite重写地址，将前缀/api转为/
  //             }
  //         }
  //     }
  // }
};
