<template>
  <div id="search">
    <div class="input">
      <!-- <img src="../../static/image/saoyisao.png" alt="" style="width:0.6rem;height:0.6rem;margin-top:0.06rem;margin-right:0.18745rem;" @click="saoyisao"> -->
      <input v-model="val" @input="lookup($event)" placeholder='请输入站点名称' />
      <div @click="lookup()">搜索</div>
      <img src="../../static/image/share.png" alt="" style="width:0.6rem;height:0.6rem;margin-top:0.06rem;margin-left:0.18745rem;" @click="share">
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  props: ['list'],
  data () {
    return {
      val: '',
      searchList: [],
      tocel: false
    }
  },
  methods: {
    lookup () {
      this.$emit('serarch', this.val)
    },
    share(){
      this.$router.push("/share");
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
                let deviceId = result.substring(result.indexOf('state=') + 6, result.indexOf('#'));                
                that.$router.push({path: '/orders',query: {sid:deviceId}})
              }
            });
          });
        });
    }
  },
  mounted () {
    
  }
}
</script>
<style scoped="scoped">
#search {
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 59px;
  background: rgb(239, 239, 239);
  width: 100%;
}
li {
  margin: 0 2.5%;
  width: 95%;
  background-color: #ffffff;
  display: flex;
}
li img {
  margin: 0.44rem 0.2rem;
}
li .li {
  width: 90%;
  padding-top: 0.2rem;
}
li p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.32rem;
  line-height: 0.48rem;
}
li p:nth-of-type(2) {
  font-size: 0.24rem;
  border-bottom: 1px solid #d8d8d8;
  padding-bottom: 0.2rem;
  color: #787878;
}
.input {
  width: 95%;
  margin: 0 2.5%;
  padding: 3% 0;
  display: flex;
  height: 0.72rem;
}
.input input {
  -webkit-appearance: none;
  width: 80%;
  text-indent: 0.24rem;
  font-size: 0.28rem;
  border-radius: 0px;
  border: 1px solid #d8d8d8;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  border-right: none;
}
.input div {
  width: 20%;
  background-color: #f68b1b;
  text-align: center;
  line-height: 0.72rem;
  font-size: 0.32rem;
  color: #ffffff;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}
</style>