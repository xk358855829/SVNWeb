<template>
  <div class="index">
    <div class="indexTop">
      <div class="font">手机号</div>
      <div class="phone">
        <input type="text" name="" v-model='phone' placeholder="请输入手机号码">
      </div>
      <div class="fontCode">验证码</div>
      <div class="codeNumber">
        <input type="number" pattern="\d*" v-model='code' placeholder="请输入验证码">
        <div class="code" @click="sendab" v-if="this.t==''">{{val}}</div>
        <div class="code" v-else style="background: #c0c0c0;">{{textsend}}</div>
        <!-- <div class="code" :class="{'colordisplay':display}" @click="sentPhone">{{sentWord}}</div> -->
      </div>
    </div>
    <div class="login">
      <div @click="bindPhone">立即登录</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios"
import qs from "qs";
import { Toast } from "vant"

export default {
  name: "add",
  data() {
    return {
      phone: "",
      code: "",
      val: "发送验证码",
      t: "",
      textsend: "",
    };
  },
  computed: {
    ...mapState(["url"])
  },  
  methods: {
    async sendab() {
      if (this.phone == "") {
        Toast("请输入手机号");
        return false;
      }
      let myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
      if (!myreg.test(this.phone)) {
        Toast("请输入正确手机号");
        return false;
      }
      let that = this;
      that.textsend = "剩余" + 60 + "s";
      let time = 59;
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
        phoneNumber: that.phone
      };
      let url = this.url + "/weChat/message/code";
      console.log(data);
      this.$axios
        .get(this.url+"/weChat/message/code?phoneNumber="+this.phone)
        .then((res) => {    
          console.log(res)      
          if (res.data.code == 200) {
            Toast("短信发送成功");            
          } else {
            Toast(res.data.message);
          }
        })
    },   
    bindPhone() {
      if (this.phone == "") {
        Toast("请输入手机号");
        return;
      }
      let myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
      if (!myreg.test(this.phone)) {
        Toast("请输入正确手机号");
        return;
      }      
      if (this.code == "") {
        Toast("请输入验证码");
        return;
      }
      let data = {
        phoneNumber: this.phone,
        openId: localStorage.getItem("openId"),
        code: this.code
      };
      let url = this.url + "/weChat/message/register";
      console.log(data);
      this.$axios.post(url,JSON.stringify(data)).then((res)=>{
        console.log(res);
        if(res.data.code==200){
          localStorage.setItem("phone",this.phone);
          if(this.$route.query.deviceId){
            that.$router.push({path: '/addDevice',query: {deviceId:this.$route.query.deviceId}})
          }else{
            this.$router.push("/deviceList");
          }          
        }else{
          Toast(res.data.message);
        }
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
.index {
  width: 100%;
  min-height: 100%;
  /*@extend .fontSet;*/
  overflow: hidden;
}
.indexTop{
  padding: 88px 28px 0;
}
.font, .fontCode {
  margin-bottom: 18px;
  font-size: 13px;
  color: #303030;
}
.phone {  
  padding-bottom: 12px;
  border-bottom: 1px solid #ececec;
}
.phone input {
  width: 100%;
  height: 20px;
  font-size: 17px;
  outline: none;
  border: 0;
  background: #F2F2F2;
  color: #999;
}
.fontCode{
  margin-top: 23px;
}
.codeNumber{
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 1px solid #ececec;
}
.codeNumber input{
  height: 20px;
  font-size: 17px;
  outline: none;
  border: 0;
  background: #F2F2F2;
  color: #999;
}
.code {
  width: 78px;
  height: 24px;
  border-radius: 12px;
  background: #146de5;
  color: #fff;
  text-align: center;
  line-height: 24px;
  font-size: 13px;
}
.login {
  padding: 0 16px;
  margin-top: 52px;
}
.login>div{
  text-align: center;
  font-size: 17px;
  color: #fff;
  height: 44px;
  line-height: 44px;
  background: #146de5;
  border-radius: 22px;
}
::-webkit-input-placeholder { 
  color: #999;
  font-size: 17px;
}
:-moz-placeholder { 
  color: #999;
  font-size: 17px;
}
::-moz-placeholder { 
  color: #999;
  font-size: 17px;
}
:-ms-input-placeholder { 
  color: #999;
  font-size: 17px;
}
</style>