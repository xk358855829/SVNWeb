<!-- 设备状态 -->
<template>
  <div class="deviceStatus">
    <div class="deviceStatusTop">
      <div class="deviceStatusTopLeft">
        <div class="container">
          <div class="battery">
            <div class="batteryBody"></div>
            <div class="batteryHead"></div>
          </div>
        </div>
        <div class="batteryContent">
          电量: <span class="batteryText">{{device.volPercent}}</span>%
        </div>
      </div>
      <div class="deviceStatusTopRight" @click="setting()">
        <van-icon class="setting" name="setting-o" color="#1466E5" />
        <span>设置</span>
      </div>
    </div>
    <div class="deviceStatusCenter">
      <img :src="openStatus==1?img:img1" alt="">
      <p>{{device.alias}}{{openStatus==0?"已关闭":openStatus==1?"已打开":"未知"}}</p>
    </div>
    <div class="lookRecord" @click="lookRecord()">查看记录</div>
  </div>
</template>

<script>
import { Toast } from "vant"
export default {
  name: "deviceStatus",
  data () {
    return {
      img: require("../../assets/img/device/door_open.png"),
      img1: require("../../assets/img/device/door_close.png"),
      device:{},
      deviceInfo:{},
      onlineStatus: "",
      openStatus: "",      
      onload: "",
    };
  },

  beforeDestroy () {
    clearInterval(this.onload);
  },

  created(){
    // Toast.loading({
    //   message: '加载中...',
    //   forbidClick: true,
    //   loadingType: 'spinner',
    //   duration: 0
    // });
    this.deviceInfo = JSON.parse(sessionStorage.getItem("deviceInfo"));
    this.getDeviceStatus();
    // this.getOnlineStatus();
    this.getOpenStatus();
    this.onload=setInterval(()=>{
      // this.getOnlineStatus();
      this.getOpenStatus();
    },3000) 
  },

  mounted(){
    let height = ((this.device.volPercent)/100*16)*0.02667;
    let battery = document.getElementsByClassName("batteryBody")[0];
    battery.style.height = height+"rem";
  },

  methods: {
    getDeviceStatus(){
      let that = this;
      this.$axios
        .get(this.url+"/device/dmInfo/deviceDetail?dmInfoId="+this.$route.query.id)
        .then((res) => {  
          // Toast.clear(); 
          console.log(res)      
          if (res.data.code == 200) {
            that.device = res.data.data;  
            if(that.device.volPercent==null){
              that.device.volPercent = 0;
            }
            let height = ((this.device.volPercent)/100*16)*0.02667;
            let battery = document.getElementsByClassName("batteryBody")[0];
            battery.style.height = height+"rem";                 
          } else {
            Toast(res.data.message);
          }
        })
    },
    getOnlineStatus(){
      let that = this;
      this.$axios.get(this.url+"/device/dmInfo/getDeviceStatus?deviceId="+this.deviceInfo.deviceId)
        .then((res) => {  
          console.log(res)      
          if (res.data.code == 200) {
            that.onlineStatus = res.data.data;                 
          } else {
            Toast(res.data.message);
          }
        })
    },
    getOpenStatus(){
      let that = this;
      this.$axios.get(this.url+"/device/dmInfo/getDoorStatus?deviceId="+this.deviceInfo.deviceId)
        .then((res) => {  
          console.log(res)      
          if (res.data.code == 200) {
            that.openStatus = res.data.data;                 
          } else {
            Toast(res.data.message);
          }
        })
    },
    setting(){ 
      this.$router.push({path:"/setting"})
    },
    lookRecord(){
      this.$router.push({path:"/deviceRecord"})
    }
  }
}

</script>
<style scoped>
  .deviceStatus{
    width: 100%;
    min-height: 100%;
    background: #fff;
    padding: 24px 16px 0;
  }
  .deviceStatusTop{
    display: flex;
    justify-content: space-between;
  }
  .deviceStatusTopLeft>div{
    display: inline-block;
    vertical-align: middle;
  }
  .deviceStatusTopRight>.setting,.deviceStatusTopRight>span{
    display: inline-block;
    vertical-align: middle;
    font-size: 15px;
    color: #1466E5;
  }
  .deviceStatusTopRight>span{
    margin-left: 6px;
  }
  .container{
    width: 10px;
    height: 18px;
    border: 1.15px solid #303030;
    border-radius: 2px;
    box-sizing: content-box;
    position: relative;
  }
  .batteryHead{
    position: absolute;
    top: -2.5px;
    left: 3px;
    width: 4px;
    height: 2.5px;
    border-radius: 0.5px;
    background: #303030;
  }
  .batteryBody{
    width: 8px;
    position: absolute;
    left: 1px;
    bottom: 1px;
    background: #303030;
  }
  .batteryContent{
    font-size: 15px;
    color: #303030;
    margin-left: 5px;
  }
  .deviceStatusCenter{
    text-align: center;
    padding-top: 103px;
  }
  .deviceStatusCenter>img{
    width: 148px;
    height: 148px;
  }
  .deviceStatusCenter>p{
    font-size: 15px;
    color: #303030;
    text-align: center;
    padding: 23px 0 154px;
  }
  .lookRecord{
    width: 267px;
    height: 40px;
    border: 1px solid #1466E5;
    border-radius: 20px;
    color: #1466E5;
    font-size: 15px;
    text-align: center;
    line-height: 40px;
    margin: auto;
  }
</style>