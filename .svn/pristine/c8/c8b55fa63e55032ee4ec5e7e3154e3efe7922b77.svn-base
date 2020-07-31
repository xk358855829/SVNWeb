<template>
  <div id="pageRegister">
    <el-container>
      <el-header class="oyHeader">
        <span class="icommy">
          <img src="../../static/qee.png" />
        </span>
        <span class="siaze">智慧泊车设备服务云平台</span>
        <div class="imgset">
          <el-button @click="register">注册</el-button>
          <el-button @click="login">登录</el-button>
        </div>
      </el-header>
      <div class="main">
        <div class="content">
          <div class="content-header">
            <span class="content-left">注册账号</span>
            <el-steps :active="active" align-center>
              <el-step title="填写手机号码" description></el-step>
              <el-step title="完善信息" description></el-step>
              <el-step title="注册成功" description></el-step>
            </el-steps>
          </div>
          <div class="content-main" v-if="active == 1">
            <div class="user">
              <div class="textBox">
                <img class="textImg" src="../../static/image/phoneNumber.png" />
              </div>
              <div class="textBox">
                <input
                  class="textInput"
                  type="text"
                  v-model="phoneNumber"
                  placeholder="请输入手机号码"
                />
              </div>
            </div>
            <div class="veri">
              <div class="textBox">
                <img class="textImg" src="../../static/image/veri1.png" />
              </div>
              <div class="textBox">
                <input
                  class="veriInput"
                  type="text"
                  v-model="veri"
                  placeholder="请输入验证码"
                />
              </div>
              <div class="ma" @click="send" v-if="this.t==''">{{val}}</div>
              <div class="ma" v-else>{{textsend}}</div>
            </div>
            <div class="next"><el-button type="success" @click="next">下一步</el-button></div>
          </div>
          <div class="content-main" v-if="active == 2">
            <div class="user">
              <div class="textBox">
                <img class="textImg" src="../../static/image/userName.png" />
              </div>
              <div class="textBox">
                <input
                  class="textInput"
                  type="text"
                  v-model="userName"
                  placeholder="请设置登录账号"
                />
              </div>
            </div>
            <div class="user">
              <div class="textBox">
                <img class="textImg" src="../../static/image/password.png" />
              </div>
              <div class="textBox">
                <input
                  class="textInput"
                  type="password"
                  v-model="password"
                  placeholder="请设置登录密码"
                />
              </div>
            </div>
            <div class="user">
              <div class="textBox">
                <img class="textImg" src="../../static/image/repeatPSD.png" />
              </div>
              <div class="textBox">
                <input
                  class="textInput"
                  type="password"
                  v-model="repeatPSD"
                  placeholder="请再次确认密码"
                />
              </div>
            </div>            
            <div class="user">
              <div class="textBox">
                <img class="textImg" src="../../static/image/userAlias.png" />
              </div>
              <div class="textBox">
                <input
                  class="textInput"
                  type="text"
                  v-model="userAlias"
                  placeholder="请设置用户名"
                />
              </div>
            </div>
            <div class="next"><el-button type="success" @click="renext">下一步</el-button></div>
          </div>
          <div class="content-main" v-if="active == 3">           
            <div class="next">
              <img src="../../static/image/success.png" alt="">
              <p>注册成功</p>
              <el-button type="success" @click="login">立即登录</el-button>
              </div>
          </div>
        </div>
      </div>
      <div class="Lfooter">
        <p>@copyright&nbsp;&nbsp;速利科技有限公司&nbsp;&nbsp;浙ICP备17053660号</p>
      </div>
    </el-container>
  </div>
</template>

<script>
import Qs from "qs";
import axios from "axios";
import { searchClicks } from "./api/api.js";
export default {
  name: "pageRegister",
  data() {
    return {
      active: 1,
      phoneNumber:"",
      veri:"",
      vcode:"",
      val: "发送验证码",
      t: "",
      textsend: "",
      userName:"",
      userAlias:"",
      password:"",
      repeatPSD:"",
      roleName:"物业",
      type:2,
      email:"",
      dealer:"123",
      superior:"速利总公司"
    };
  },
  mounted: function() {},
  methods: {
    async send() {
      if (this.phoneNumber == "") {
        this.$message.error('您输入手机号码');
      } else {
        if (!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.phoneNumber)) {
          this.$message.error('您输入正确的手机号码');
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
            phoneNumber:this.phoneNumber
          }
          axios.post("http://39.104.113.112:2088/SMS/checkTel",Qs.stringify(data),{
						headers:{'Content-Type': 'application/x-www-form-urlencoded'}}).then(function(res) {
            console.log(res);
            if(res.data.resCode == 0){
              that.$message.success("发送成功");
              that.vcode = res.data.result;
            }else{
              that.$message.error(res.data.result);
            }
          }).catch(function(error) {
            console.log(error);
          });
        }
      }
    },
    next(){
      if (this.phoneNumber == "") {
        this.$message.error('您输入手机号码');
      } else {
        if (!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.phoneNumber)) {
          this.$message.error('您输入正确的手机号码');
        }else{
          if(this.veri == ""){
            this.$message.error('您输入验证码');
          }else{
            if(this.veri == this.vcode){
              this.active += 1;
            }else{
              this.$message.error('验证码错误');
            }
          }
        }
      }
    },
    renext(){
      if(this.userName == ""){
        this.$message.error('请输入账号');
        return false;
      }
      if(this.password == ""){
        this.$message.error('请输入密码');
        return false;
      }
      if(this.repeatPSD == ""){
        this.$message.error('请再次输入密码');
        return false;
      }
      if(this.userAlias == ""){
        this.$message.error('请输入用户名');
        return false;
      }
      if (this.password != this.repeatPSD) {
        this.$message.error('两次密码不一致');
        return false;
      }
      if (this.userName.length < 6) {
        this.$message.error('账号长度不能小于6位');
        return false;
      }
      if (this.password.length < 6) {
        this.$message.error('密码长度不能小于6位');
        return false;
      }
      let data = {
        userName:this.userName,
        password:this.password,
        repeatPSD:this.repeatPSD,
        userAlias:this.userAlias,
        phoneNum:this.phoneNumber,
        email:this.email,
        type:this.type,
        dealer:this.dealer,
        superior:this.superior
      }
      console.log(data);
      searchClicks('/s_user/add', data).then(res => {
        console.log(res);
        if (res.data.resCode == 0) {
          this.active += 1;
        } else {
          this.$message({
            type: 'error',
            message: res.data.result
          });
        }
      })      
    },
    login(){
      this.$router.push('/pageLogin');
    },
    register(){
      this.$router.push('/pageRegister');
    }
  }
};
</script>

<style scoped="scoped">
#pageRegister {
  height: 100%;
  width: 100%;
  /* background: #2c394b; */
  min-height: 600px;
}
.oyHeader {
  background-color: #252a2f;
  height: 50px !important;
  text-align: right;
  padding-left: 0 !important;
}
.oyHeader .el-button {
  margin: 9px 3px;
  padding: 8px 20px;
}
.oyHeader .el-button:hover{
  background: #fff;
  color: #67c23a;
}
.icommy {
  float: left;
}
.icommy img {
  margin: 0 auto;
  padding: 0px 27px;
}
.siaze {
  float: left;
  font-size: 22px;
  color: #fff;
  padding: 12px 0;
}
.content {
  width: 1100px;
  margin: 70px auto 0;
  background: #fff;
  box-shadow: 0 0 10px 0 rgba(18, 29, 30, 0.08);
}
.content,
.content-header {
  padding: 0 40px;
  border-bottom: 1px solid #e4e4e4;
}
.content-left {
  height: 70px;
  line-height: 70px;
  font-size: 24px;
  color: #67c23a;
}
.el-steps {
  width: 450px;
  float: right;
  margin-top: 6.5px;
}
.el-step__head.is-finish{
  color: #67c23a !important;
  border-color: #67c23a !important;
}
.el-step__title.is-finish{
  color: #67c23a !important;
}
.el-step__head.is-process {
  color: #c0c4cc !important;
  border-color: #c0c4cc !important;
}
.el-step__title.is-process{
  color: #c0c4cc !important;
}
.content-main {
  width: 480px;
  margin: 0 auto;
  padding: 40px 0;
}
.user,
.pass,
.veri {
  width: 100%;
  height: 0.6rem;
  border-bottom: 1px solid #e4e4e4;
  text-align: left;
}
.textBox {
  float: left;
  height: 100%;
}
.textBox > img {
  height: 0.2rem;
  width: 0.2rem;
}
.textImg {
  margin: 0.2rem 0.15rem;
}
.textInput {
  height: 100%;
  border: none;
  background-color: initial;
  color: #000;
  font-size: 0.16rem;
  width: 2.74rem;
  border-radius: 0;
}
.veri{
  position: relative;
}
.veriInput {
  height: 100%;
  border: none;
  background-color: initial;
  color: #000;
  font-size: 0.16rem;
  width: 1.56rem;
}
.next{
  text-align: center;
  margin-top: 40px; 
}
.next .el-button{
  width: 150px;
  text-align: center;
}
.next>img{
  width: 50px;
  height: 50px;
}
.next>p{
  font-size: 24px;
  color: #67c23a;
  padding: 20px 0 25px;
}
.ma {
  /* background: #38adff; */
  border-radius: 3px;
  border: 1px solid #67c23a;
  color: #67c23a;
  width: 100px;
  height: 30px;
  line-height: 30px;
  font-size: 0.13rem;
  font-family: "PingFang-SC-Regular";
  text-align: center;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.Lfooter {
  height: 5%;
  position: fixed;
  bottom: 20px;
  left: 40%;
  color: #5b829d;
}
.Lfooter > p {
  color: #ffffff;
  font-size: 0.13rem;
  text-align: center;
  color: #5b829d;
}
</style>