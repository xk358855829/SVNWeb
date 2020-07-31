<template>
  <div class="footer">
    <div class="first" @click="abc('/washrecord')" :class="{Colorclick:1==Colors}">
      <p>
        <img :src="Wacth==1?require('../../static/image/home1.png'):require('../../static/image/home1.png')" alt="">
      </p>
      <span>订单</span>
    </div>
    <div class="middle">
      <p @click="saoyisao">
        <img src="../../static/image/saoyisao1.png" alt="">
        <span>扫码洗车</span>
      </p>      
    </div>
    <div class="second" @click="abc('/people')" :class="{Colorclick:2==Colors}">
      <p>
        <img :src="Wacth==2?require('../../static/image/mes1.png'):require('../../static/image/mes1.png')" alt="">
      </p>
      <span>我的</span>
    </div>
  </div>
</template>
<script>
import {  } from './api/api.js'
import { MessageBox } from 'mint-ui';
export default {
  name: "hfooter",
  props: ['Wacth', 'Colors'],
  data () {
    return {
      ss: '99'
    }
  },
  watch: {

  },
  mounted () {

  },
  methods: {
    abc (val) {
      this.$router.push(val)
    },
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
                if(result.substring(result.indexOf('vip=') + 4, result.indexOf('#'))==0){
                  let orderId = result.substring(result.indexOf('state=') + 6, result.indexOf('&vip=0')); 
                  sessionStorage.setItem("orderId",orderId);
                  that.$router.push({path: '/people/vip'})
                }else{
                  let deviceId = result.substring(result.indexOf('state=') + 6, result.indexOf('#'));                
                  that.$router.push({path: '/orders',query: {sid:deviceId}})
                }                
              }
            });
          });
        });
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/style/mixin.scss';
.footer {
  position: fixed;
  bottom: 0;
  @include wh(100%, 1rem);
  // background: #eaeaea;
  background: #fff;
  display: flex;
  justify-content: space-around;
}
.footer .first p, .footer .second p{
  @include wh(0.4rem, 0.4rem);
  margin: 0 auto;
  margin-bottom: 0.04rem;
}
.first,
.second{
  @include wh(10%, 100%);
  margin-top: 0.15rem;
  text-align: center;
}
.footer .first p img,
.footer .second p img{
  @include wh(100%, 100%);
}
.Colorclick span {
  color: rgb(246, 139, 28) !important;
}
// .footer .second p {
//   @include wh(0.34rem, 0.34rem);
//   margin: 0 auto;
//   margin-bottom: 0.04rem;
// }
span {
  @include sc(10px, #1c1c1c);
}
.middle{
  @include wh(32%, 100%);
  margin-top: 0.15rem;
  text-align: center;
}
.footer .middle>p{
  @include wh(100%, 0.65rem);
  background: #f68b1c;
  border-radius: 0.35rem;
  margin: 0 auto;
  margin-bottom: 0.04rem;
  line-height: 0.6rem;
}
.footer .middle>p span{
  display: inline-block;
  vertical-align: middle;
  color: #1c1c1c;
  font-size: 0.3rem;
}
.footer .middle>p img{
  @include wh(0.45rem, 0.45rem);
  vertical-align: middle;
}
</style>


