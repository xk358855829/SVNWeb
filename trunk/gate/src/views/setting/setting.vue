<!--设置 -->
<template>
  <div class="setting">
    <div class="settingTop">
      <div class="settingTitle">
        <img src="../../assets/img/setting/setting1.png" alt="">
        <span>设备信息</span>  
      </div>      
      <div class="deviceInfo">
        <span>
          <span>设备名称:</span>
          <input class="deviceName" type="text" v-model="name" placeholder="请输入设备名称">
        </span>
        <span @click="revise">修改</span>
      </div>
      <!-- <van-cell title="设备ID: " value="" /> -->      
      <van-cell title="设备信息" is-link to="/test" />
      <!-- <van-cell title="共享设备" is-link to="" /> -->
      <!-- <van-cell title="常见问题与反馈" is-link to="" /> -->
    </div>
    <div class="settingCenter">
      <div class="settingTitle">
        <img src="../../assets/img/setting/setting2.png" alt="">
        <span>智能设置</span>  
      </div>
      <ul class="settingList">
        <li @click.stop="settingInfo(101)">
          <div class="settingListTitle">
            <span>
              <span v-if="setInfo.length!=0">开门 - </span>
              <span v-else="">开门</span>
              <span>
                <span class="setInfoList" v-for="item in setInfo" :key="item.id">{{item}}</span>
              </span>
            </span>            
            <van-switch v-model="checked" size="27" active-color="#1466E5" inactive-color="#efefef" @click.stop="" @change="open" />
          </div>
          <div v-if="settingTime!=''" class="settingListInfo">
            <p>{{settingTime}}生效</p>
          </div>
        </li>
        <li @click.stop="settingInfo(102)">
          <div class="settingListTitle">
            <span>
              <span v-if="setInfo1.length!=0">关门 - </span>
              <span v-else="">关门</span>
              <span>
                <span class="setInfoList" v-for="item in setInfo1" :key="item.id">{{item}}</span>
              </span>
            </span>
            <van-switch v-model="checked1" size="27" active-color="#1466E5" inactive-color="#efefef" @click.stop="" @change="close" />
          </div>
          <div v-if="settingTime1!=''" class="settingListInfo">
            <p>{{settingTime1}}生效</p>
          </div>
        </li>
        <li @click.stop="settingInfo(103)">
          <div class="settingListTitle">
            <span>
              <span v-if="setInfo2.length!=0">电压异常 - </span>
              <span v-else="">电压异常</span>
              <span>
                <span class="setInfoList" v-for="item in setInfo2" :key="item.id">{{item}}</span>
              </span>
            </span>
            <van-switch v-model="checked2" size="27" active-color="#1466E5" inactive-color="#efefef" @click.stop="" @change="voltage" />
          </div>
          <div v-if="settingTime2!=''" class="settingListInfo">
            <p>{{settingTime2}}生效</p>
          </div>
        </li>
        <li @click.stop="settingInfo(104)">
          <div class="settingListTitle">
            <span>
              <span v-if="setInfo3.length!=0">防拆报警 - </span>
              <span v-else="">防拆报警</span>
              <span>
                <span class="setInfoList" v-for="item in setInfo3" :key="item.id">{{item}}</span>
              </span>
            </span>
            <van-switch v-model="checked3" size="27" active-color="#1466E5" inactive-color="#efefef" @click.stop="" @change="demolition" />
          </div>
          <div v-if="settingTime3!=''" class="settingListInfo">
            <p>{{settingTime3}}生效</p>
          </div>
        </li>
        <li @click.stop="settingInfo(105)">
          <div class="settingListTitle">
            <span>
              <span v-if="setInfo4.length!=0">打开时间过长 - </span>
              <span v-else="">打开时间过长</span>
              <span>
                <span class="setInfoList" v-for="item in setInfo4" :key="item.id">{{item}}</span>
              </span>
            </span>
            <van-switch v-model="checked4" size="27" active-color="#1466E5" inactive-color="#efefef" @click.stop="" @change="longTime" />
          </div>
          <div v-if="settingTime4!=''" class="settingListInfo">
            <p>{{settingTime4}}生效</p>
          </div>
        </li>
        <li @click.stop="settingInfo(106)">
          <div class="settingListTitle">
            <span>
              <span v-if="setInfo5.length!=0">开关用力过猛 - </span>
              <span v-else="">开关用力过猛</span>
              <span>
                <span class="setInfoList" v-for="item in setInfo5" :key="item.id">{{item}}</span>
              </span>
            </span>
            <van-switch v-model="checked5" size="27" active-color="#1466E5" inactive-color="#efefef" @click.stop="" @change="openForce" />
          </div>
          <div v-if="settingTime5!=''" class="settingListInfo">
            <p>{{settingTime5}}生效</p>
          </div>
        </li>
        <li @click.stop="settingInfo(107)">
          <div class="settingListTitle">
            <span>
              <span v-if="setInfo6.length!=0">下雨 - </span>
              <span v-else="">下雨</span>
              <span>
                <span class="setInfoList" v-for="item in setInfo6" :key="item.id">{{item}}</span>
              </span>
            </span>
            <van-switch v-model="checked6" size="27" active-color="#1466E5" inactive-color="#efefef" @click.stop="" @change="rain" />
          </div>
          <div v-if="settingTime6!=''" class="settingListInfo">
            <p>{{settingTime6}}生效</p>
            <!-- <p>{{settingStatus==0?"未同步":"已同步"}}</p> -->
          </div>
        </li>
      </ul>
    </div>
    <div class="settingBottom">
      <p @click="start">校准</p>
      <span></span>
      <p @click="del">删除设备</p>
    </div>
  </div>
</template>

<script>
import { Toast, Dialog } from "vant"
export default {
  name: "setting",
  data () {
    return {
      name: "",
      checked: true,
      checked1: true,
      checked2: true,
      checked3: true,
      checked4: true,
      checked5: true,
      checked6: true,
      settingTime: "",
      settingTime1: "",
      settingTime2: "",
      settingTime3: "",
      settingTime4: "",
      settingTime5: "",
      settingTime6: "",
      setInfo: [],
      setInfo1: [],
      setInfo2: [],
      setInfo3: [],
      setInfo4: [],
      setInfo5: [],
      setInfo6: [],
      settingStatus: 0,
      setting:{},
      data:{},
    };
  },

  created(){
    this.data = JSON.parse(sessionStorage.getItem("deviceInfo"));
    this.name = this.data.alias;
    this.getsetting(this.data);
  },

  methods: {
    getsetting(val){
      let that = this;
      let data = {
        devid: val.deviceId,
      };
      let url = this.surl + "/dmConfig/findEnable";
      console.log(data);
      this.$axios.post(url,JSON.stringify(data)).then((res)=>{
        console.log(res);
        if(res.data.code==0){
          that.setting = res.data.data;  
          that.settingTime = that.setting.one.effectiveStarttime+'-'+that.setting.one.effectiveEndtime;  
          that.settingTime1 = that.setting.two.effectiveStarttime+'-'+that.setting.two.effectiveEndtime; 
          that.settingTime2 = that.setting.three.effectiveStarttime+'-'+that.setting.three.effectiveEndtime; 
          that.settingTime3 = that.setting.four.effectiveStarttime+'-'+that.setting.four.effectiveEndtime; 
          that.settingTime4 = that.setting.five.effectiveStarttime+'-'+that.setting.five.effectiveEndtime; 
          that.settingTime5 = that.setting.six.effectiveStarttime+'-'+that.setting.six.effectiveEndtime; 
          that.settingTime6 = that.setting.seven.effectiveStarttime+'-'+that.setting.seven.effectiveEndtime; 
          if(that.setting.openEnable==1){
            that.checked = true;
          }else{
            that.checked = false;
          }  
          if(that.setting.closeEnable==1){
            that.checked1 = true;
          }else{
            that.checked1 = false;
          }
          if(that.setting.volLowEnable==1){
            that.checked2 = true;
          }else{
            that.checked2 = false;
          }
          if(that.setting.tollBreakdownEnable==1){
            that.checked3 = true;
          }else{
            that.checked3 = false;
          }
          if(that.setting.openedOvertimeEnable==1){
            that.checked4 = true;
          }else{
            that.checked4 = false;
          }
          if(that.setting.overexertEnable==1){
            that.checked5 = true;
          }else{
            that.checked5 = false;
          }   
          if(that.setting.rainEnable==1){
            that.checked6 = true;
          }else{
            that.checked6 = false;
          }
          that.isSetting(that.setting);
        }else{
          Toast(res.data.message);
        }
      })
    },
    isSetting(val){
      if(val.one.recEnable==1){
        this.setInfo.push("保存在设备记录");
      }
      if(val.one.noticeWxEnable==1){
        this.setInfo.push("向手机发送通知");
      }
      if(val.one.noticePhoneEnable==1){
        this.setInfo.push("向手机打电话");
      }
      if(val.one.noticeSmsEnable==1){
        this.setInfo.push("向手机发送短信");
      }
      if(val.two.recEnable==1){
        this.setInfo1.push("保存在设备记录");
      }
      if(val.two.noticeWxEnable==1){
        this.setInfo1.push("向手机发送通知");
      }
      if(val.two.noticePhoneEnable==1){
        this.setInfo1.push("向手机打电话");
      }
      if(val.two.noticeSmsEnable==1){
        this.setInfo1.push("向手机发送短信");
      }
      if(val.three.recEnable==1){
        this.setInfo2.push("保存在设备记录");
      }
      if(val.three.noticeWxEnable==1){
        this.setInfo2.push("向手机发送通知");
      }
      if(val.three.noticePhoneEnable==1){
        this.setInfo2.push("向手机打电话");
      }
      if(val.three.noticeSmsEnable==1){
        this.setInfo2.push("向手机发送短信");
      }
      if(val.four.recEnable==1){
        this.setInfo3.push("保存在设备记录");
      }
      if(val.four.noticeWxEnable==1){
        this.setInfo3.push("向手机发送通知");
      }
      if(val.four.noticePhoneEnable==1){
        this.setInfo3.push("向手机打电话");
      }
      if(val.four.noticeSmsEnable==1){
        this.setInfo3.push("向手机发送短信");
      }
      if(val.five.recEnable==1){
        this.setInfo4.push("保存在设备记录");
      }
      if(val.five.noticeWxEnable==1){
        this.setInfo4.push("向手机发送通知");
      }
      if(val.five.noticePhoneEnable==1){
        this.setInfo4.push("向手机打电话");
      }
      if(val.five.noticeSmsEnable==1){
        this.setInfo4.push("向手机发送短信");
      }
      if(val.six.recEnable==1){
        this.setInfo5.push("保存在设备记录");
      }
      if(val.six.noticeWxEnable==1){
        this.setInfo5.push("向手机发送通知");
      }
      if(val.six.noticePhoneEnable==1){
        this.setInfo5.push("向手机打电话");
      }
      if(val.six.noticeSmsEnable==1){
        this.setInfo5.push("向手机发送短信");
      }
      if(val.seven.recEnable==1){
        this.setInfo6.push("保存在设备记录");
      }
      if(val.seven.noticeWxEnable==1){
        this.setInfo6.push("向手机发送通知");
      }
      if(val.seven.noticePhoneEnable==1){
        this.setInfo6.push("向手机打电话");
      }
      if(val.seven.noticeSmsEnable==1){
        this.setInfo6.push("向手机发送短信");
      }
    },
    settingInfo(val){
      this.$router.push({path:"/settingInfo",query:{type:val}})
    },
    revise(){
      let that = this;
      let data = {
        deviceId: this.data.deviceId,
        alias: this.name,
        id: this.data.id
      };
      let url = this.url + "/device/dmInfo/updateDevice";
      console.log(data);
      this.$axios.post(url,JSON.stringify(data)).then((res)=>{
        console.log(res);
        if(res.data.code==200){
          that.data.alias = that.name;
          sessionStorage.setItem("deviceInfo",JSON.stringify(that.data));
          Toast(res.data.message);
        }else{
          Toast(res.data.message);
        }
      })
    },
    open(){
      if(this.checked==true){
        this.setting.openEnable = 1;
      }else{
        this.setting.openEnable = 0;
      }
      this.changeSetting();
    },
    close(){
      if(this.checked1==true){
        this.setting.closeEnable = 1;
      }else{
        this.setting.closeEnable = 0;
      }
      this.changeSetting();
    },
    voltage(){
      if(this.checked2==true){
        this.setting.volLowEnable = 1;
      }else{
        this.setting.volLowEnable = 0;
      }
      this.changeSetting();
    },
    demolition(){
      if(this.checked3==true){
        this.setting.tollBreakdownEnable = 1;
      }else{
        this.setting.tollBreakdownEnable = 0;
      }
      this.changeSetting();
    },
    longTime(){
      if(this.checked4==true){
        this.setting.openedOvertimeEnable = 1;
      }else{
        this.setting.openedOvertimeEnable = 0;
      }
      this.changeSetting();
    },
    openForce(){
      if(this.checked5==true){
        this.setting.overexertEnable = 1;
      }else{
        this.setting.overexertEnable = 0;
      }
      this.changeSetting();
    },
    rain(){
      if(this.checked6==true){
        this.setting.rainEnable = 1;
      }else{
        this.setting.rainEnable = 0;
      }
      this.changeSetting();
    },
    changeSetting(){
      delete this.setting.one;
      delete this.setting.two;
      delete this.setting.three;
      delete this.setting.four;
      delete this.setting.five;
      delete this.setting.six;
      delete this.setting.seven;
      delete this.setting.createdAt;
      delete this.setting.updatedAt;
      console.log(this.setting);
      let url = this.surl + "/dmConfig/addOrUpdateEnable";
      this.$axios.post(url,JSON.stringify(this.setting)).then((res)=>{
        console.log(res);
        if(res.data.code==0){
          
        }else{
          Toast(res.data.message);
        }
      })
    },
    start(){
      // Toast("该功能敬请期待!");
      this.$router.push({path:"/calibrationone",query:{deviceId:this.data.deviceId}});
    },
    del(){
      let that = this;
      let data = {
        id: this.data.id,
        deviceId: this.data.deviceId,
        userId: localStorage.getItem("openId"),
      } 
      let url = this.url + "/device/dmInfo/deleteDevice";
      console.log(data);
      Dialog.confirm({
        title: '提示',
        message: '确认删除设备吗?',
      }).then(() => {
        // on confirm
        that.$axios.post(url,JSON.stringify(data)).then((res)=>{
          console.log(res);
          if(res.data.code==200){
            that.$router.push("/deviceList");
          }else{
            Toast(res.data.message);
          }
        })
      }).catch(() => {
        // on cancel        
      });      
    }
  }
}

</script>
<style scoped>
  .setting{
    padding: 12px 16px;
    min-height: 100%;
  }
  .van-cell{
    padding: 16px;
    color: #303030;
    line-height: 1;
    font-size: 15px;
  }
  .van-cell::after{
    right: 16px;
    border-bottom: 1px solid #EDEDED;
  }
  .van-cell__left-icon, .van-cell__right-icon{
    height: 17px;
    line-height: 17px;
  }
  .settingTop{
    border-radius: 10px;
    background: #fff;
  }
  .settingTop>.van-cell:last-of-type{
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
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
    width: 20px;
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
  .deviceInfo{
    padding: 16px;
    font-size: 15px;
    color: #303030;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .deviceInfo::after{
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
  .deviceInfo>span:last-of-type{
    color: #1466E5;
  }
  .deviceName{
    border: none;
    padding: 0 0 0 5px;
    font-size: 15px;
    vertical-align: baseline;
  }
  .settingCenter{
    margin: 12px 0;
    border-radius: 10px;
  } 
  .settingList>li{
    background: #fff;
    padding: 13px 16px;
    position: relative;
  }
  .settingList>li:last-of-type{
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .settingList>li::after{
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
  .settingList>li>div{
    display: flex;
    justify-content: space-between;
  }
  .settingListTitle>span{
    display: inline-block;
    vertical-align: middle;   
    font-size: 15px;
    color: #303030;
  }
  .settingListTitle>span>span:first-of-type{
    height: 0.77333333rem;
    line-height: 0.77333333rem;
    vertical-align: top;
  }
  .settingListTitle>span>span:last-of-type{
    display: inline-block;
    vertical-align: top;
  }
  .settingListTitle>span>span:last-of-type>span{
    display: block;
    line-height: 0.77333333rem;
  }
  .settingListTitle>.van-switch{
    vertical-align: middle;
  }
  .settingListInfo{
    font-size: 13px;
    color: #999999;
    margin-top: 8px;
  }
  /* .setInfoList{
    display: block;
  } */
  .settingBottom{
    background: #fff;
    font-size: 15px;
    border-radius: 10px;
    position: relative;
  }
  .settingBottom>p{
    display: inline-block;
    width: 50%;
    text-align: center;
    padding: 16px 0;
  }
  .settingBottom>p:first-of-type{
    color: #303030;
  }
  .settingBottom>p:last-of-type{
    color: #FF0000;
  }
  .settingBottom>span{
    width: 1px;
    height: 40px;
    background: #F2F2F2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
</style>