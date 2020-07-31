<!-- 添加设备 -->
<template>
  <div class="add">
    <div>暂无设备</div>
    <div @click="add()">立即添加</div>
  </div>
</template>

<script>
import { Toast } from "vant"
export default {
  name: "add",
  data () {
    return {

    };
  },

  beforeCreate() {
    let that = this;
    this.$axios
      .get(
        `${this.url}/weChat/message/JSSDKTicket?url=${
          encodeURIComponent(window.location.href.split("#")[0])
        }`
      )
      .then(message => {
        console.log(message);
        wx.config({
          debug: false,
          appId: message.data.data.appId,
          timestamp: message.data.data.timestamp,
          nonceStr: message.data.data.nonceStr,
          signature: message.data.data.signature, // 必填，签名，见附录1
          jsApiList: ["scanQRCode"]
        });
      });
  },

  methods: {
    add(){
      let that = this;
      wx.ready(function() {
        wx.scanQRCode({
          needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
          scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
          success: function(res) {
            console.log(res);
            let result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
            let deviceId = result.substring(result.indexOf('state=') + 6, result.indexOf('#'));                
            that.$router.push({path: '/addDevice',query: {deviceId:deviceId}})               
          }
        });
      });
    }
  }
}

</script>
<style lang="less" scoped>
  .add{
    width: 100%;
    min-height: 100%;
    background: #fff;
  }
  .add>div{
    text-align: center;      
  }
  .add>div:first-of-type{
    font-size: 30px;
    color: #999999;
    padding: 212px 0 32px;
  }
  .add>div:nth-of-type(2){
    font-size: 15px;
    color: #1466E5;
    text-decoration: underline;
  }
</style>