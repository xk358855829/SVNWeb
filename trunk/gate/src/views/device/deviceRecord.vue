<!-- 设备记录 -->
<template>
  <div class="deviceRecord" v-if="showInfo">
    <van-steps direction="vertical" v-for="item in recordList" :key="item.id">
      <h3 class="day" v-if="item.time=='今天'||item.time=='昨天'">{{item.time}}</h3>
      <h3 v-else="">{{item.time}}</h3>
      <!-- <span></span> -->
      <van-step v-for="item1 in item.children" :key="item1.id1">
        <span class="recordTime">{{item1.time}}</span>
        <img class="recordLogo" :src="item1.warningType==101?img0:item1.warningType==102?img1:item1.warningType==103?img2:item1.warningType==106?img3:item1.warningType==107?img4:item1.warningType==105?img5:img6" alt="">
        <div class="recordInfo">
          <p>{{item1.warningType==101?"打开":item1.warningType==102?"关闭":item1.warningType==103?"电压异常":item1.warningType==106?"用力过猛":item1.warningType==107?"天气异常":item1.warningType==105?"开门时间过长":"强力拆除"}}</p>
          <p>{{item1.warningType==101?data.alias+"已打开":item1.warningType==102?data.alias+"已关闭":item1.warningType==103?"请及时更换电池":item1.warningType==106?"开/关时用力过猛，请小心呵护":item1.warningType==107?"下雨啦，请及时关窗":item1.warningType==105?"开门时间过长":"请查看是否有人恶意拆除"}}</p>
        </div>
      </van-step>
      <!-- <span></span> -->
    </van-steps>
    <div class="norecord" v-if="noList==true">
      <img src="../../assets/img/device/norecord.png" alt="">
      <p>暂无记录</p>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant"
export default {
  name: "deviceRecord",
  data () {
    return {
      img0:require("../../assets/img/device/open.png"),
      img1:require("../../assets/img/device/close.png"),
      img2:require("../../assets/img/device/voltage.png"),
      img3:require("../../assets/img/device/power.png"),
      img4:require("../../assets/img/device/rain.png"),
      img5:require("../../assets/img/device/times.png"),
      img6:require("../../assets/img/device/demolition.png"),
      recordList: [],
      noList: false,
      data: {},
      showInfo: false,
    };
  },

  created(){
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      loadingType: 'spinner',
      duration: 0
    });
    this.getRecord();
  },

  methods: {
    getRecord(){
      let that = this;
      this.data = JSON.parse(sessionStorage.getItem("deviceInfo"));
      this.$axios
        .get(this.url+"/device/record/deviceRecord?deviceId="+this.data.deviceId)
        .then((res) => {    
          Toast.clear();  
          that.showInfo = true;
          console.log(res)      
          if (res.data.code == 200) {
            if(res.data.data.length>0){
              that.updateList(res.data.data);
              that.noList = false;
            }else{
              that.noList = true;
            }                               
          } else {
            Toast(res.data.message);
          }
        })
    },
    updateList(list){
      //获取当天的日期，昨天的日期
      let date = new Date();
      let Y = date.getFullYear() + '-';
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      let today = Y + M + D;
      let date1 = date.setDate(date.getDate() - 1);
      date1 = new Date(date1);
      let Y1 = date1.getFullYear() + '-';
      let M1 = (date1.getMonth() + 1 < 10 ? '0' + (date1.getMonth() + 1) : date1.getMonth() + 1) + '-';
      let D1 = date1.getDate() < 10 ? '0' + date1.getDate() : date1.getDate();
      let yesterday = Y1 + M1 + D1;
      console.log("今天:"+today+",昨天:"+yesterday);

      let length = list.length;
      for (let i = 0; i < length; i++) {
        let day = list[i].eventTime.trim().split(/\s+/);
        if(day[0] === today){
          day[0] = "今天";
        }else if(day[0] === yesterday){
          day[0] = "昨天";
        }
        list[i].day = day[0];
        list[i].time = day[1];
      }

      this.recordList = this.getList(list);
      console.log(this.recordList);
    },
    getList(arr){
      let newArr = [];
      let alreadyExists = false;
      arr.forEach((address, i) => {
        let index = -1;
        for (let j = 0; j < newArr.length; j++) {
          if(address.day === newArr[j].time){
            index = j;
            alreadyExists = true;
          }else{
            alreadyExists = false;
          }         
        }
        if (!alreadyExists) {
          newArr.push({
            time: address.day,
            children: [address]
          });
        } else {
          newArr[index].children.push(address);
        }
      });
      return newArr;
    }
  }
}

</script>
<style scoped>
  .deviceRecord{
    width: 100%;
    min-height: 100%;
    background: #fff;
    padding: 0 20px 24px;
  }
  .van-steps--vertical{
    padding: 0;
  }
  .van-step--vertical{
    padding: 0;
    margin-bottom: 30px;
  }
  .van-steps__items>.van-step--vertical:last-of-type{
    margin-bottom: 0;
  }
  .deviceRecord h3{
    padding: 24px 0 14px 17px;
    color: #666666;
    font-size: 17px;
  }
  .deviceRecord h3.day{
    padding: 24px 0 14px 41px;
  }
  /* .van-steps__items>span{
    display: inline-block;
    width: 6px;
    height: 6px;
    background: #CDCDCD;
    border-radius: 50%;
    margin-left: 54px;
  } */
  .van-step--vertical:not(:last-child)::after{
    border-bottom-width: 0;
  }
  .van-step__icon--active, .van-step__title--active{
    color: #969799 !important;
  }
  .recordTime{
    display: inline-block;
    vertical-align: middle;
    font-size: 13px;
    color: #303030;
  }
  .recordLogo{
    width: 32px;
    height: 32px;
    vertical-align: middle;
    margin: 0 16px 0 9px;
  }
  .recordInfo{
    display: inline-block;
    vertical-align: middle;
  }
  .recordInfo>p:first-of-type{
    padding-bottom: 8px;
    font-size: 15px;
    color: #303030;
  }
  .recordInfo>p:last-of-type{
    font-size: 13px;
    color: #999999;
  }
  .norecord{
    padding-top: 145px;
    text-align: center;
    font-size: 15px;
    color: #999999;
  }
  .norecord>img{
    width: 121px;
    height: auto;
    margin-bottom: 15px;
  }
</style>