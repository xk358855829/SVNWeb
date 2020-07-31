<!-- 添加设备 -->
<template>
  <div class="addDevice">
    <div class="addDeviceTop">
      <div>
        <span>设备: <span>{{deviceId}}</span></span>
        <span @click="sys"><img src="../../assets/img/device/sys.png" alt=""></span>
      </div>
      <div>
        <span>设备名称</span>
        <input class="deviceName" type="text" v-model="name" placeholder="请输入设备名称">
      </div>
    </div>
    <!-- <div class="start" @click="start">校准设备</div> -->
    <div class="add" @click="add">立即添加</div>
  </div>
</template>

<script>
import { Toast } from "vant"
export default {
  name: "addDevice",
  data () {
    return {
      deviceId:2569874112,
      name: "",
      timer: "",
    };
  },

  beforeDestroy () {
    clearTimeout(this.timer);
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

  created(){
    this.deviceId = this.$route.query.deviceId;
  },

  methods: {
    sys(){
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
    },
    start(){

    },
    add(){
      let data = {
        alias: this.name,
        userId: localStorage.getItem("openId"),
        deviceId: this.deviceId
      };
      let that = this;
      let url = this.url + "/device/dmInfo/bindDevice";
      console.log(data);
      this.$axios.post(url,JSON.stringify(data)).then((res)=>{
        console.log(res);
        if(res.data.code==200){
          Toast(res.data.message);  
          this.$router.push("/deviceList");      
          // this.$router.push({path:"/calibrationone",query:{deviceId:that.deviceId}});
        }else if(res.data.code==5000){
          Toast(res.data.message);
          that.timer = setTimeout(()=>{
            that.$router.push("/deviceList");  
          },1000);           
        }else{
          Toast(res.data.message);
        }
      })
    }
  }
}

</script>
<style scoped>
  .addDevice{
    min-height: 100%;
    padding: 20px 16px;
  }
  .addDeviceTop{
    background: #fff;
    border-radius: 10px;
    font-size: 15px;
    color: #2F2F2F;
  }
  .addDeviceTop>div{
    display: flex;
    justify-content: space-between;
    /* height: 54px;
    line-height: 54px; */
    padding: 16px;
  }
  .addDeviceTop>div>span{
    height: 21px;
    line-height: 21px;
  }
  .addDeviceTop>div:first-of-type>span:last-of-type{
    display: inline-block;
    width: 30px;
    text-align: right;
  }
  .addDeviceTop>div:first-of-type img{
    width: 19px;
    height: 19px;
  }
  .addDeviceTop>div:first-of-type{
    position: relative;
  }
  .addDeviceTop>div:first-of-type::after{
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    right: 0;
    bottom: 0;
    left: 16px;
    right: 16px;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    border-bottom: 1px solid #EDEDED;
  }
  .deviceName{
    text-align: right;
    border: none;
  }
  .start, .add{
    background: #fff;
    font-size: 15px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    border-radius: 10px;
  }
  .start{
    color: #303030;
    margin: 12px 0;
  }
  .add{
    margin-top: 12px;
    color: #146DE5;
  }
</style>