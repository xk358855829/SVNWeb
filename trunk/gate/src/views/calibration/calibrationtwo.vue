<!-- 校准 -->
<template>
  <div class="calibration">
    <div class="title">2.安装</div>
    <div class="calibrationone"><img src="../../assets/img/device/calibration2.png" alt=""></div>
    <div class="progress">将门（窗）关上，将设备贴在门（窗）任意位置</div>
    <div class="next" @click="start()">开始校准</div>
  </div>
</template>

<script>
import { Toast } from "vant"
export default {
  name: "calibrationtwo",
  data () {
    return {
      deviceId: "",
      onload: "",
      time: 1,
      toast1: "",
    };
  },

  created(){
    this.deviceId = this.$route.query.deviceId;
  },

  // mounted: {},

  methods: {
    start(){      
      this.toast1 = Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: '校准中...',
      });      
      let data = {
        deviceId: this.deviceId
      };
      let that = this;
      let url = this.lurl + "/device/calibration/tryCalibration";
      this.$axios.post(url,JSON.stringify(data)).then((res)=>{
        console.log(res);
        if(res.data.code==200){
          that.getStatus();
          that.onload=setInterval(()=>{
            that.getStatus();
          },3000)
        }
        else if(res.data.code==50000){
          that.toast1.clear();
          Toast(res.data.message);                     
        }
        else{
          that.toast1.clear();
          Toast(res.data.message);
        }
      })
    },
    getStatus(){
      this.time++;
      this.addTime();
      let that = this;
      this.$axios.get(this.lurl+"/device/calibration/getStatus?deviceId="+this.deviceId).then((res) => {  
        console.log(res)      
        if (res.data.code == 200) {
          if(res.data.data.status==2){
            that.toast1.clear();
            that.time = 1;
            Toast(res.data.message);
            clearInterval(that.onload);
            that.$router.push("/setting");  
          }else{
            // that.onload=setInterval(()=>{
            //   that.getStatus();
            // },3000)
          }              
        } else {
          Toast(res.data.message);
        }
      })
    },
    addTime(){
      if(this.time == 20){
        clearInterval(this.onload);
        this.toast1.clear();
        Toast("校准失败，请稍后再试！");
        this.time = 1;
      }else{
        console.log(this.time);
      }
    },
  },
  beforeDestroy () {
    clearInterval(this.onload);
  },
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
    margin-top: 33.5px;
    text-align: center;
  }
  .calibrationone>img{
    width: 90px;
    height: auto;
  }
  .progress{
    font-size: 15px;
    color: #303030;
    text-align: center;
    margin: 20px 0 118px;
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
</style>