<!--设置 -->
<template>
  <div class="setting">
    <div class="settingTop">
      <div class="settingTitle">
        <img src="../../assets/img/setting/setting3.png" alt="">
        <span>如果</span>  
      </div>
      <div class="settingTopInfo">
        <span>{{type==101?"打开":type==102?"关闭":type==103?"电压异常":type==104?"防拆报警":type==105?"开门时间超过":type==106?"开门用力过猛":"下雨"}}</span>
        <span v-if="type==105">
          <input class="settingTime" type="number" v-model="times">
          <span>分钟</span>
        </span>
        <span class="nameInfo" v-else="">
          <img src="../../assets/img/setting/settinginfo.png" alt="">
          <span>{{name}}</span>
        </span>
      </div>
    </div>
    <div class="settingCenter">
      <div class="settingTitle">
        <img src="../../assets/img/setting/setting4.png" alt="">
        <span>就执行</span>  
      </div>
      <van-field name="checkboxGroup">
        <template #input>
          <van-checkbox-group v-model="checkboxGroup">
            <van-checkbox name="1" shape="square">保存在设备记录</van-checkbox>
            <van-checkbox name="2" shape="square">向手机发送通知</van-checkbox>
            <!-- <van-checkbox name="3" shape="square" disabled>设备发出报警</van-checkbox> -->
            <van-checkbox name="4" shape="square">向手机打电话</van-checkbox>
            <van-checkbox name="5" shape="square">向手机发送短信</van-checkbox>
          </van-checkbox-group>
        </template>
      </van-field>      
    </div>
    <div class="settingStartTime">
      <van-field
        readonly
        clickable
        name="datetimePicker"
        :value="time"
        label="生效时间"
        placeholder="点击选择时间"
        @click="showPicker = true"
        input-align="right"
      />
      <!-- <van-field
        readonly
        clickable
        name="datetimePicker"
        :value="endTime"
        label="生效结束时间"
        placeholder="点击选择时间"
        @click="showPicker1 = true"
        input-align="right"
      /> -->
      <van-popup v-model="showPicker" position="bottom">
        <van-datetime-picker
          type="time"
          @confirm="onConfirm"
          @cancel="showPicker = false"
          confirm-button-text="下一步"
        />
      </van-popup>
      <van-popup v-model="showPicker1" position="bottom">
        <van-datetime-picker
          type="time"
          @confirm="onConfirm1"
          @cancel="showPicker1 = false"
        />
      </van-popup>
    </div>
    <div class="settingBottom" @click="sure">确定</div>
  </div>
</template>

<script>
import { Toast } from "vant"
export default {
  name: "settingInfo",
  data () {
    return {
      type: "",
      name: "",
      times: "",
      timesInfo: {},
      checkboxGroup: [],
      startTime: "",
      startTime1: "",
      endTime: "",
      time: "",
      showPicker: false,
      showPicker1: false,
      istime: false,
      setting: {},
      deviceInfo:{},
      timer: ""
    };
  },

  beforeDestroy () {
    clearTimeout(this.timer);
  },

  created(){
    this.type = this.$route.query.type;
    this.data = JSON.parse(sessionStorage.getItem("deviceInfo"));
    this.name = this.data.alias;
    this.getInfo(this.data);
    if(this.$route.query.type==105){
      this.getOverTime(this.data);
    }
  },

  methods: {
    getInfo(val){
      let that = this;
      let data = {
        devid: val.deviceId,
        type: this.$route.query.type
      };
      let url = this.surl + "/dmConfig/findEnableDetail";
      console.log(data);
      this.$axios.post(url,JSON.stringify(data)).then((res)=>{
        console.log(res);
        if(res.data.code==0){
          that.setting = res.data.data; 
          if(that.setting.recEnable==1){
            that.checkboxGroup.push("1");
          }  
          if(that.setting.noticeWxEnable==1){
            that.checkboxGroup.push("2");
          }
          if(that.setting.noticePhoneEnable==1){
            that.checkboxGroup.push("4");
          }
          if(that.setting.noticeSmsEnable==1){
            that.checkboxGroup.push("5");
          }
          if(that.setting.effectiveStarttime){
            that.startTime = that.setting.effectiveStarttime;
          }
          if(that.setting.effectiveEndtime){
            that.endTime = that.setting.effectiveEndtime;
          }
          that.time = that.startTime + "-" + that.endTime;
        }else{
          Toast(res.data.message);
        }
      })
    },
    getOverTime(val){
      let that = this;
      let data = {
        devid: val.deviceId
      };
      let url = this.surl + "/dmConfig/findOverTime";
      console.log(data);
      this.$axios.post(url,JSON.stringify(data)).then((res)=>{
        console.log(res);
        if(res.data.code==0){
          that.timesInfo = res.data.data;
          that.times = res.data.data.overtimeSetting;
        }else{
          Toast(res.data.message);
        }
      })
    },
    onConfirm(time) {
      this.startTime1 = time;
      this.showPicker = false;
      this.showPicker1 = true;
    },
    onConfirm1(time) {
      this.endTime = time;
      this.showPicker1 = false;
      this.time = this.startTime1 + "-" + this.endTime;
      this.istime = true;
    },
    sure(){
      let that = this;
      if(this.$route.query.type==105){        
        let data = {
          id: this.timesInfo.id,
          deviceId: this.setting.deviceId,
          overtimeSetting: parseInt(this.times)
        };
        let url = this.surl + "/dmConfig/addOrUpdateOverTime";
        console.log(data);
        this.$axios.post(url,JSON.stringify(data)).then((res)=>{
          console.log(res);
          if(res.data.code==0){
            // Toast(res.data.message);
          }else{
            Toast(res.data.message);
          }
        })
      }
      console.log(this.checkboxGroup);      
      if(this.istime==true){
        this.startTime = this.startTime1;
      }
      let settingInfo = {
        id: this.setting.id,
        enableType: this.$route.query.type,
        deviceId: this.setting.deviceId,
        effectiveStarttime: this.startTime,
        effectiveEndtime: this.endTime
      };
      if(this.checkboxGroup.includes("1")){
        settingInfo.recEnable = 1;
      }else{
        settingInfo.recEnable = 0;
      }
      if(this.checkboxGroup.includes("2")){
        settingInfo.noticeWxEnable = 1;
      }else{
        settingInfo.noticeWxEnable = 0;
      }
      if(this.checkboxGroup.includes("4")){
        settingInfo.noticePhoneEnable = 1;
      }else{
        settingInfo.noticePhoneEnable = 0;
      }
      if(this.checkboxGroup.includes("5")){
        settingInfo.noticeSmsEnable = 1;
      }else{
        settingInfo.noticeSmsEnable = 0;
      }
      let url = this.surl + "/dmConfig/addOrUpdateEnableDetail";
      console.log(settingInfo);
      this.$axios.post(url,JSON.stringify(settingInfo)).then((res)=>{
        console.log(res);
        if(res.data.code==0){
          Toast(res.data.message);
          that.timer = setTimeout(()=>{
            that.$router.go(-1);  
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
  .setting{
    padding: 16px;
    min-height: 100%;
  }
  .settingTop{
    border-radius: 10px;
    background: #fff;
  }
  .settingTitle{
    background: #fff;
    height: 48px;
    line-height: 48px;
    padding: 0 16px;    
    position: relative;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .settingTitle::after{
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
  .settingTitle>img{
    width: auto;
    height: 20px;
    vertical-align: middle;
  }
  .settingTitle>span{
    color: #303030;
    font-size: 17px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
  }
  .settingTopInfo{
    font-size: 15px;
    color: #303030;
    padding: 14px 16px;
    display: flex;
    justify-content: space-between;
  }
  .settingTopInfo>span{
    line-height: 25px;
  }
  .nameInfo>img{
    height: 25px;
    width: auto;
    margin-right: 10px;
    vertical-align: middle;
  }
  .nameInfo>span{
    display: inline-block;
    vertical-align: middle;
  }
  .settingTime{
    border: none;
    padding: 0 5px;
    font-size: 15px;
    vertical-align: baseline;
    height: 25px;
    width: 130px;
    text-align: right;
  }
  .settingCenter{
    margin: 16px 0;
    border-radius: 10px;
  }
  .van-checkbox{
    margin-bottom: 20px;
  }
  .settingCenter>.van-cell{
    padding: 20px 16px 0;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .settingStartTime{
    border-radius: 10px;
    margin-bottom: 16px;
  }
  .settingStartTime>.van-cell{
    border-radius: 10px;
    font-size: 15px;
    color: #303030;
  }
  .settingStartTime>.van-cell:first-of-type{
    margin-bottom: 16px;
  }
  .settingBottom{
    background: #fff;
    font-size: 17px;
    border-radius: 10px;
    position: relative;
    color: #1365E5;
    padding: 15px 0;
    text-align: center;
  }
</style>