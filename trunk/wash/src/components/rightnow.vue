<!-- 立即洗车 -->
<template>
  <div></div>
</template>

<script>
export default {
  name: "rightnow",
  data () {
    return {

    };
  },

  components: {},

  mounted(){
    this.saoyisao();
  },

  methods: {
    saoyisao(){
      let that = this;
      console.log(window.location.href.split("#")[0]);
      this.$http
        .get(
          `${that.oldhttpUrl}/scan/getJSSDKTicket?url=${
            window.location.href.split("#")[0]
          }`
        )
        .then(message => {
          console.log(message);
          wx.config({
            debug: false,
            appId: message.data.appid,
            timestamp: message.data.timestamp,
            nonceStr: message.data.nonceStr,
            signature: message.data.signature, // 必填，签名，见附录1
            jsApiList: [message.data.jsApiList]
          });
          wx.ready(function() {
            wx.scanQRCode({
              needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
              scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
              success: function(res) {
                console.log(res);
                let result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                let deviceId = result.substring(result.indexOf('state=') + 6, result.indexOf('#'));                
                that.$router.push({path: '/orders',query: {sid:deviceId}})
              }
            });
          });
        });
    }
  }
}

</script>
<style scoped>

</style>