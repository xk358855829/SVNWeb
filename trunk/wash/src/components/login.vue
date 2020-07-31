<template>
  <div style="background:#efefef;">
    <div class="login" v-if="lp">
      <div class="logo">
        <img src="../../static/image/lioa.png" alt />
      </div>
      <div class="loginInput topp">
        <label>
          <!-- <span>86</span>&nbsp; -->
          <img src="../../static/image/zh.png" />
        </label>
        <div></div>
        <input type="number" pattern="\d*" v-model="name" @blur="bottocenter" placeholder="请输入您的手机号码" />
      </div>
      <div class="loginInput bott">
        <label>
          <img src="../../static/image/mm.png" />
        </label>
        <div class="mid"></div>
        <input type="number" pattern="\d*" v-model="pass" style="width:58%;" @blur="bottocenter" placeholder="请输入验证码" />
        <div class="ma" @click="sendab" v-if="this.t==''">{{val}}</div>
        <div class="ma" v-else style="background:#999;">{{textsend}}</div>
      </div>
      <div @click="log" class="log" :class="{active:coogrant==true}">登录</div>
      <div style="text-align:center;margin-top:0.5rem">
        <input name="test" v-model="checkconsent" style="vertical-align: middle;" type="checkbox" />
        <span>您已同意</span>
        <span style="color:#f68b1c" @click="user">用户注册协议</span>及
        <span style="color:#f68b1c" @click="users">隐私政策</span>
      </div>
    </div>
  </div>
</template>
<script>
import { MessageBox, Checklist } from "mint-ui";
import axios from "axios";
import { fasong, stateus,nowDate } from "./api/api.js";
import Qs from "qs";
export default {
  name: "login",
  data() {
    return {
      coogrant: false,
      checkconsent: false,
      val: "发送验证码",
      t: "",
      name: "",
      textsend: "",
      pass: "",
      yanz: "",
      lp: true,
      a: "",
      b: "",
      c: "",
      d: ""
    };
  },
  watch: {
    checkconsent(a, b) {
      if (a) {
        this.coogrant = true;
      } else {
        this.coogrant = false;
      }
    }
  },
  mounted() {    
    
  },
  methods: {
    user() {
      this.$router.push("/service");
    },
    users() {
      this.$router.push("/privacy");
    },
    bottocenter() {
      window.scrollTo(0, 0);
    },
    async sendab() {
      if (this.name == "") {
        MessageBox("提示", "请输入手机号码");
      } else {
        if (!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.name)) {
          MessageBox("提示", "请输入正确的手机号码");
        } else {
          let that = this;
          that.textsend = "剩余" + 60 + "s";
          var time = 59;
          that.t = setInterval(function() {
            if (time <= 0) {
              clearInterval(that.t);
              that.t = "";
              that.val = "重新发送";
            } else {
              that.textsend = "剩余" + time-- + "s";
            }
          }, 1000);
          let data = {
            phoneNumber: that.name
          };
          let res = await fasong(data);
          if (res.data.resCode == "0") {
            console.log(res);
            that.yanz = res.data.result;
          }
        }
      }
    },
    async log() {      
      if (this.name == "" || this.pass == "") {
        MessageBox("提示", "手机号码和验证码不能为空");
        return;
      }
      if (!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.name)) {
        MessageBox("提示", "请输入正确的手机号码");
        return;
      }
      if (!this.checkconsent) {
        MessageBox("提示", "请勾选用户协议");
        return;
      }
      let data = {
        openId: localStorage.getItem("openid"),
        phoneNumber: this.name,
        code: this.pass,
        type: 2
      };
      console.log(data);
      let res = await stateus(data);
      if (res.data.resCode == 0) {                
        localStorage.setItem("phone", this.name);
        localStorage.setItem("tel", this.name);
        sessionStorage.setItem("token", this.name);
        if(this.$route.query.deviceId){
          this.$router.push({ 
            path: "/carinplace", 
            query: {sid: this.$route.query.sid, deviceId: this.$route.query.deviceId} 
          });
        } else if(this.$route.query.vip){
          this.$router.push({ 
            path: "/people/vipCardList",
            query: {vip: this.$route.query.vip}
          });
        } else{
          this.$router.push({ path: "/washingList" });
        }
        // if(res.data.isUsed==0){
        //   if(sessionStorage.getItem("ticketarr")){
        //     let arr = JSON.parse(sessionStorage.getItem("ticketarr"));
        //     if (arr instanceof Array) {
        //       arr = arr;
        //     } else {
        //       arr = Object.values(arr);
        //     }
        //     console.log(arr);
        //     let ticket = [];
        //     let ticketpark = [];
        //     for(var i = 0;i < arr.length;i++){
        //       if(arr[i].workType == 'W1'){
        //         ticket.push(arr[i]);
        //       }else if(arr[i].workType == 'T1'){
        //         ticketpark.push(arr[i]);
        //       }
        //     }
        //     console.log(ticket);
        //     console.log(ticketpark);
        //     // 领取洗车券码
        //     for (var j = 0; j < ticket.length; j++) {
        //       var datw;
        //       if (ticket[j].useWay == 4) {
        //         datw = {
        //           tel: this.name,
        //           sid: ticket[j].parkingId,
        //           ticketType: 1,
        //           useWay: ticket[j].useWay,
        //           start_time: nowDate(),
        //           end_time: ticket[j].endTime,
        //           percent: ticket[j].useWayType,
        //           issus_type: 1,
        //           isTeam: 1,
        //           num: ticket[j].num,
        //           remark: "洗车新用户注册",
        //           dealer: 1561430951496
        //         };
        //       } else if (ticket[j].useWay == 3) {
        //         datw = {
        //           tel: this.name,
        //           sid: ticket[j].parkingId,
        //           ticketType: 1,
        //           useWay: ticket[j].useWay,
        //           start_time: nowDate(),
        //           end_time: ticket[j].endTime,
        //           full: ticket[j].useWayType.split(",")[0],
        //           sub: ticket[j].useWayType.split(",")[1],
        //           issus_type: 1,
        //           isTeam: 1,
        //           num: ticket[j].num,
        //           remark: "洗车新用户注册",
        //           dealer: 1561430951496
        //         };
        //       } else if (ticket[j].useWay == 2) {
        //         datw = {
        //           tel: this.name,
        //           sid: ticket[j].parkingId,
        //           ticketType: 1,
        //           useWay: ticket[j].useWay,
        //           start_time: nowDate(),
        //           end_time: ticket[j].endTime,
        //           sub: ticket[j].useWayType,
        //           issus_type: 1,
        //           isTeam: 1,
        //           num: ticket[j].num,
        //           remark: "洗车新用户注册",
        //           dealer: 1561430951496
        //         };
        //       } else if (ticket[j].useWay == 1) {
        //         datw = {
        //           tel: this.name,
        //           sid: ticket[j].parkingId,
        //           ticketType: 1,
        //           useWay: ticket[j].useWay,
        //           start_time: nowDate(),
        //           end_time: ticket[j].endTime,
        //           freeTime: ticket[j].useWayType,
        //           issus_type: 1,
        //           isTeam: 1,
        //           num: ticket[j].num,
        //           remark: "洗车新用户注册",
        //           dealer: 1561430951496
        //         };
        //       }
        //       console.log(datw);
        //       axios({
        //         method: "post",
        //         url: this.washurl + "/ticketInfoWashCar/bornTicket",
        //         data: Qs.stringify(datw),
        //         success: function(message) {
        //           console.log(message);
        //         }
        //       });
        //     }
        //     // 领取停车券码
        //     for (var i = 0; i < ticketpark.length; i++) {
        //       var parkarr;
        //       if (ticketpark[i].useWay == 4) {
        //         parkarr = {
        //           tel: this.name,
        //           parking_id: ticketpark[i].parkingId,
        //           ticketType: 1,
        //           useWay: ticketpark[i].useWay,
        //           start_time: nowDate(),
        //           end_time: ticketpark[i].endTime,
        //           percent: ticketpark[i].useWayType,
        //           issus_type: 1,
        //           isTeam: 1,
        //           num: ticketpark[i].num,
        //           remark: '洗车新用户注册',
        //           dealer: 1561430951496,
        //         }
        //       } else if (ticketpark[i].useWay == 3) {
        //         parkarr = {
        //           tel: this.name,
        //           parking_id: ticketpark[i].parkingId,
        //           ticketType: 1,
        //           useWay: ticketpark[i].useWay,
        //           start_time: nowDate(),
        //           end_time: ticketpark[i].endTime,
        //           full: ticketpark[i].useWayType.split(',')[0],
        //           sub: ticketpark[i].useWayType.split(',')[1],
        //           issus_type: 1,
        //           isTeam: 1,
        //           num: ticketpark[i].num,
        //           remark: '洗车新用户注册',
        //           dealer: 1561430951496,
        //         }

        //       } else if (ticketpark[i].useWay == 2) {
        //         parkarr = {
        //           tel: this.name,
        //           parking_id: ticketpark[i].parkingId,
        //           ticketType: 1,
        //           useWay: ticketpark[i].useWay,
        //           start_time: nowDate(),
        //           end_time: ticketpark[i].endTime,
        //           sub: ticketpark[i].useWayType,
        //           issus_type: 1,
        //           isTeam: 1,
        //           num: ticketpark[i].num,
        //           remark: '洗车新用户注册',
        //           dealer: 1561430951496,
        //         }
        //       } else if (ticketpark[i].useWay == 1) {
        //         parkarr = {
        //           tel: this.name,
        //           parking_id: ticketpark[i].parkingId,
        //           ticketType: 1,
        //           useWay: ticketpark[i].useWay,
        //           start_time: nowDate(),
        //           end_time: ticketpark[i].endTime,
        //           freeTime: ticketpark[i].useWayType,
        //           issus_type: 1,
        //           isTeam: 1,
        //           num: ticketpark[i].num,
        //           remark: '洗车新用户注册',
        //           dealer: 1561430951496,
        //         }
        //       }
        //       axios({
        //         method: 'post',
        //         url: this.washurl + "/TicketInfo/bornTicket",
        //         data: Qs.stringify(parkarr),
        //         success: function (message) {
        //           console.log(message)
        //         }
        //       })
        //     }
        //   }
        // }               
      } else {
        MessageBox("提示", res.data.result);
      }
    }
  }
};
</script>
<style scoped>
.login {
  width: 100%;
}
.logo {
  width: 2rem;
  height: 0.8rem;
  margin: 0 auto;
  padding: 1.68rem;
}
.logo img {
  width: 100%;
}
.loginInput input {
  outline: none;
  border: none;
  text-indent: 5px;
  font-size: 13px;
  font-family: "PingFang-SC-Regular";
  color: #a4a4a4;
  background-color: transparent;
  width: 80%;
}
.loginInput label {
  height: 44px;
  width: 53px;
  text-align: center;
  color: #787878;
  font-size: 13px;
  font-family: "PingFang-SC-Regular";
}
.loginInput {
  width: 81.6%;
  height: 44px;
  line-height: 44px;
  border-radius: 5px;
  border: 1px solid #bfbfbf;
  margin: 0 auto;
  display: flex;
}
.topp {
  margin-bottom: 15px;
}
.topp div,
.bott .mid {
  height: 33px;
  width: 1px;
  background: #bdbdbd;
  margin-top: 5.5px;
}
.topp label img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.bott label img {
  width: 18px;
  height: 20px;
  vertical-align: middle;
}
.bott {
  position: relative;
}
.bott .ma {
  background: #f68b1c;
  color: #fff;
  width: 77px;
  height: 46px;
  line-height: 46px;
  font-size: 13px;
  font-family: "PingFang-SC-Regular";
  text-align: center;
  position: absolute;
  right: -1px;
  top: -1px;
}
.log {
  font-size: 0.3rem;
  cursor: pointer;
  margin: 0 auto;
  width: 81.6%;
  height: 44px;
  background: #999;
  border-radius: 5px;
  color: #fff;
  margin-top: 20px;
  line-height: 44px;
  text-align: center;
}
.ma {
  cursor: pointer;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}
.active {
  background: #f68b1c;
}
/* .curr{width: 0.4rem;height: 0.4rem;border-radius: 50%;} */
</style>
		