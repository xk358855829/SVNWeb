<!-- 设备列表 -->
<template>
  <div class="deviceList" v-if="showInfo">
    <div class="title"><img src="../../assets/img/device/device_list.png" alt=""><span>所有设备</span></div>
    <ul class="allDeviceList">
      <li v-for="item in deviceList" :key="item.id" @click="lookInfo(item)">
        <img src="../../assets/img/device/device_img.png" alt="">
        <span>{{item.alias}}</span>
      </li>
    </ul>
    <div class="deviceListBottom" @click="add"><img src="../../assets/img/device/add.png" alt=""><span>添加设备</span></div>
  </div>
</template>

<script>
import { Toast } from "vant"
export default {
  name: "deviceList",
  data () {
    return {
      deviceList: [],
      showInfo: false,
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
  created(){
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      loadingType: 'spinner',
      duration: 0
    });
    this.getList();
  },

  methods: {
    getList(){
      let that = this;
      this.$axios
        .get(this.url+"/device/dmInfo/getDeviceList?openId="+localStorage.getItem("openId"))
        .then((res) => {  
          Toast.clear();  
          that.showInfo = true;
          console.log(res)      
          if (res.data.code == 200) {
            if(res.data.data.length>0){
              that.deviceList = res.data.data; 
            }else{
              that.$router.push("/add");
            }                    
          } else {
            Toast(res.data.message);
          }
        })
    },
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
    },
    lookInfo(val){
      sessionStorage.setItem("deviceInfo",JSON.stringify(val));
      this.$router.push({path: "/deviceStatus",query: {id:val.id}});
    }
  }
}

</script>
<style scoped>
  .deviceList{
    padding: 24px 16px 0;
    min-height: 100%;
  }
  .title{
    font-size: 15px;
    color: #303030;
    margin-bottom: 12px;
  }
  .title>img{
    height: 17px;
    width: auto;
    vertical-align: middle;
  }
  .title>span{
    display: inline-block;
    vertical-align: middle;
    margin-left: 6px;
  }
  .allDeviceList>li{
    background: #fff;
    padding: 7.5px;
    font-size: 15px;
    color: #303030;
    margin-bottom: 12px;
    border-radius: 10px;
  }
  .allDeviceList>li>img{
    width: 75px;
    height: 75px;
    margin-right: 7.5px;
    vertical-align: middle;
  }
  .allDeviceList>li>span{
    display: inline-block;
    vertical-align: middle;
  }
  .deviceListBottom{
    text-align: center;
    border: 1px solid #1466E5;
    color: #1466E5;
    font-size: 17px;
    border-radius: 10px;
    height: 90px;
    line-height: 90px;
  }
  .deviceListBottom>img{
    width: 18px;
    height: 18px;
    vertical-align: middle;
  }
  .deviceListBottom>span{
    display: inline-block;
    vertical-align: middle;
    margin-left: 7.5px;
  }
</style>