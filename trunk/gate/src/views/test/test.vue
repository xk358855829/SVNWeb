<!-- 测试 -->
<template>
  <div class="test">
    <ul class="testInfoList">
      <li>
        <span><span>设备: </span><span>{{test.deviceId}}</span></span>
        <!-- <span @click="copy">复制</span> -->
      </li>
      <li>
        <span>X: {{test.X}}</span>
      </li>
      <li>
        <span>Y: {{test.Y}}</span>
      </li>
      <li>
        <span>Z: {{test.Z}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "vant"
export default {
  name: "test",
  data () {
    return {
      deviceInfo: {},
      deviceId: "UUUU",
      test: "",
      onload: "",
    };
  },

  beforeDestroy () {
    clearInterval(this.onload);
  },

  created(){
    this.deviceInfo = JSON.parse(sessionStorage.getItem("deviceInfo"));
    this.getInfo();
    this.onload=setInterval(()=>{
      this.getInfo();
    },2000); 
  },

  // mounted: {},

  methods: {
    getInfo(){
      let that = this;
      this.$axios
        .get(this.lurl+"/device/record/deviceRegisterInfo?deviceId="+this.deviceInfo.deviceId)
        .then((res) => {  
          // Toast.clear();  
          // that.showInfo = true;
          console.log(res)      
          if (res.data.code == 200) {
            that.test = res.data.data; 
            that.test.X = that.test.workingStatus.split('_')[0];
            that.test.Y = that.test.workingStatus.split('_')[1];
            that.test.Z = that.test.workingStatus.split('_')[2];
            console.log(that.test);                   
          } else {
            Toast(res.data.message);
          }
        })
    }
  }
}

</script>
<style scoped>
  .test{
    padding: 40px 16px 0;
    background: #fff;
    width: 100%;
    min-height: 100%;
  }
  .testInfoList>li{
    font-size: 15px;
    color: #303030;
    margin-bottom: 40px;
  }
  /* .testInfoList>li:first-of-type{
    display: flex;
    justify-content: space-between;
  } */
  /* .testInfoList>li:first-of-type>span:last-of-type{
    color: #1466E5;
  } */
</style>