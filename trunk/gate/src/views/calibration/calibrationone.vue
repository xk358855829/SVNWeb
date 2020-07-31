<!-- 校准 -->
<template>
  <div class="calibration">
    <div class="title">1.联网</div>
    <div class="calibrationone"><img src="../../assets/img/device/calibration1.png" alt=""></div>
    <div class="progress">长按设备上的按钮，直至指示灯亮起</div>
    <div class="next" @click="next()">下一步</div>
  </div>
</template>

<script>
import { Toast } from "vant"
export default {
  name: "calibrationone",
  data () {
    return {
      deviceId: "",
      onlineStatus: "",
      onload: "",
    };
  },

  created(){
    this.deviceId = this.$route.query.deviceId;
    // this.getOnlineStatus();
    // this.onload=setInterval(()=>{
    //   this.getOnlineStatus();
    // },3000) 
  },

  // mounted: {},

  methods: {
    next(){
      this.getOnlineStatus();
    },
    getOnlineStatus(){
      let that = this;
      this.$axios.get(this.url+"/device/dmInfo/getDeviceStatus?deviceId="+this.deviceId).then((res) => {  
        console.log(res)      
        if (res.data.code == 200) {
          that.onlineStatus = res.data.data;  
          if(that.onlineStatus==1){
            that.$router.push({path:"/calibrationtwo",query:{deviceId:that.deviceId}});
          }else{
            Toast("设备未联网,请长按设备上的按钮,直至指示灯亮起");
          }               
        } else {
          Toast(res.data.message);
        }
      })
    },
  }
}

</script>
<style scoped>
  .calibration{
    width: 100%;
    min-height: 100%;
    background: #fff;
    padding-top: 58px;
  }
  .title{
    color: #303030;
    font-size: 18px;
    text-align: center;
  }
  .calibrationone{
    margin-top: 50px;
    padding-left: 62.5px;
  }
  .calibrationone>img{
    width: 185px;
    height: 120px;
  }
  .progress{
    font-size: 15px;
    color: #303030;
    text-align: center;
    margin: 50px 0 118px;
  }
  .next{
    width: 163px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    color: #146DE5;
    font-size: 15px;
    border: 2px solid #146DE5;
    margin: auto;
    border-radius: 22.5px;
  }
  /* .nonext{
    border: 2px solid #146DE5;
    color: #146DE5;
  } */
</style>