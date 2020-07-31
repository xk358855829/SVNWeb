<template>
  <div id="pageLogin">
    <div class="login">
      <!-- <div class="title"><img src="../../static/image/suriot.png"/></div> -->
      <div class="center">
        <div class="picture"><img src="../../static/carss.png" /></div>
        <div class="centerMain">
          <input style="display:none">
          <div class="centerlogin">
            <div class="loginfont">登陆/LOGIN</div>
            <div class="user ">
              <div class="textBox">
                <img class="textImg"
                     src="../../static/image/user.png" />
              </div>
              <div class="textBox">
                <input class="textInput"
                       type="text"
                       v-model="userName"
                       @blur="testing(1,userName)"
                       placeholder='请输入您的账号' />
              </div>
            </div>
            <div class="pass">
              <div class="textBox">
                <img class="textImg"
                     src="../../static/image/pass.png" />
              </div>
              <div class="textBox">
                <input class="textInput"
                       type="password"
                       v-model="passWord"
                       @blur="testing(2,passWord)"
                       placeholder='请输入您的密码' />
              </div>
            </div>
            <div class="veri">
              <div class="textBox">
                <img class="textImg"
                     src="../../static/image/veri.png" />
              </div>
              <div class="textBox">
                <input class="veriInput"
                       type="text"
                       v-model="veri"
                       @blur="testing(3,veri)"
                       placeholder='请输入右侧验证码' />
              </div>
              <div class="textCanvas">
                <canvas @click="code"
                        id="codeCanvas"></canvas>
              </div>
            </div>
            <div class="memory clearfix">
              <!-- <div class="memoryOk"
                   :class="{actived:styleMe}"
                   @click="meClick"></div> -->
              <el-checkbox v-model="checked">记住密码</el-checkbox>
              <!-- <div class="meMe"></div> -->
              <router-link class="register" to="/pageRegister">立即注册</router-link>
            </div>
            <button class="buttonOk"
                    @click="login">登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
          </div>
        </div>
      </div>
    </div>
    <div class="Lfooter">
      <p>
        <span>@copyright&nbsp;&nbsp;速利科技有限公司&nbsp;&nbsp;</span>
        <a style="color:#5b829d;" @click="linkDownload('http://www.beian.miit.gov.cn')">浙ICP备17053660号&nbsp;&nbsp;</a>
        <img class="record_icon" src="../../static/image/record_icon.png" alt="">
        <span> 浙公网安备33018502002081号</span></p>
    </div>
  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
import CryptoJS from "crypto-js";
import { searchClicks } from './api/api.js'
import { logins } from '../api/login.js'
export default {
  name: 'login',
  data () {
    return {
      checked: false,
      list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      userName: '',
      passWord: '',
      veri: '',
      user: [0, 0, 0],
      styleMe: false
    }
  },
  mounted: function () {

    // Encrypt 加密 
    var cipherText = CryptoJS.AES.encrypt(
      "suriot",
      "secretkey123"
    ).toString();
    console.log(cipherText)
    // Decrypt 解密
    var bytes = CryptoJS.AES.decrypt(cipherText, "secretkey123");
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    console.log(originalText); // 'my message'
    console.log(this.gloal.state)

    this.code();
    this.userName = localStorage.getItem('userName');
    if (localStorage.getItem('userName')) {
      this.checked = true;
      // this.styleMe.backgroundColor = '#A2CC6D';
    } else {
      this.checked = false;
      // this.styleMe.backgroundColor = 'initial';
    }
    this.passWord = localStorage.getItem('passWord');
    let that = this;
    document.onkeydown = function (e) {
      var key = window.event.keyCode;
      if (key == 13) {
        that.login();
      }
    }
  },
  methods: {
    // meClick () {
    //   this.styleMe = !this.styleMe
    // },
    code () {
      let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
      let text = '';
      for (let i = 0; i < 4; i++) {
        text += list[Math.floor(Math.random() * 36)]
      }
      this.Vcode = text;
      let context = document.getElementById('codeCanvas').getContext('2d');
      context.clearRect(0, 0, 500, 500)
      context.font = "80px Microsoft Yahei";
      context.fillStyle = "#5b829d";
      context.textAlign = "center";
      context.fillText(text, 150, 100);
    },
    testing (k, userVal) {
      let that = this;
      if (k == 1) {
        if (userVal == null) {
          that.user[0] = 0;
          that.$message.error('您输入的账号为空');
        } else {
          that.user[0] = 1;
        }
      } else if (k == 2) {
        if (userVal == null) {
          that.$message.error('请输入的您的密码');
          that.user[1] = 0;
        } else if (userVal.length < 6) {
          that.$message.error('密码有误,请输入大于6位的密码，可包含字母、数字、特殊字符');
          that.user[1] = 0;
        } else {
          that.user[1] = 1;
        }
      } else if (k == 3) {
        if (userVal.toLowerCase() == that.Vcode) {
          that.user[2] = 1;
        } else {
          that.$message.error('验证码不正确');
          that.user[2] = 0;
        }
      }
    },
    async login () {
      let that = this;
      that.testing(1, that.userName);
      that.testing(2, that.passWord);
      that.testing(3, that.veri);
      if (this.user[0] == 1 && this.user[1] == 1 && this.user[2] == 1) {
        let data = {
          userName: this.userName,
          password: this.passWord
        }
        let message = await logins(data)
        if (message.data.resCode == 0) {
          if (that.checked) {
            localStorage.setItem('userName', that.userName);
            localStorage.setItem('passWord', that.passWord);
          } else {
            localStorage.removeItem('userName');
            localStorage.removeItem('passWord');
          }
          sessionStorage.setItem('userAlias', message.data.result.userAlias);
          sessionStorage.setItem('permissions', message.data.result.permissions);
          localStorage.setItem('dealerId', message.data.result.associated);
          localStorage.setItem('userId', message.data.result.userId);



          localStorage.setItem('userType', message.data.result.type);
          localStorage.setItem('dealer', message.data.result.dealer);
          // that.$router.push('/pageHome/big')
          if (message.data.result.type == 9) {
            axios({
              method: 'post',
              url: 'http://39.104.99.181:8762/web/reserve/selectByCarBid',
              // url: 'http://192.168.2.143:8762/web/reserve/selectByCarBid',
              data: Qs.stringify({
                uid: message.data.result.userId
              })
            }).then(res => {
              console.log(res)
              // 
              if (res.data.resCode == 0) {
                var html = ''
                res.data.result.forEach((a, b) => {
                  html += a.bid + ','
                })
                console.log()
                that.$router.push({ path: '/pageHome/big', query: { devid: html.substring(0, html.length - 1) } })
              } else {

              }
            })
          } else {
            that.$router.push('/pageHome')
          }
        } else {
          that.$alert('用户名或密码错误', '系统提示', {
            confirmButtonText: '确定'
          });
        }


      }
    },
    linkDownload(url){
      window.open(url,'_blank') // 新窗口打开外链接
    }
  }
}
</script>

<style scoped="scoped">
.actived {
  background: #a2cc6d;
}
canvas {
  width: 100%;
  height: 100%;
}
/*#pageLogin{height: 100%;width: 100%;background: url(../../static/image/pageLogin.png) no-repeat ;background-size:cover;min-height: 600px;}*/
#pageLogin {
  height: 100%;
  width: 100%;
  background: #2c394b;
  min-height: 600px;
  justify-content: center;
  display: flex;
  display: -webkit-flex;
  align-items: center;
}
.login {
  width: 700px;
  height: 380px;
  justify-content: center;
}
.title {
  height: 10%;
}
.title > img {
  width: 2.16rem;
  height: 0.43rem;
  margin: 0.3rem 0 0 0.3rem;
}
.center {
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
}
.center > p {
  font-size: 0.36rem;
  color: #ffffff;
  margin-bottom: 0.52rem;
  padding-top: 2%;
}
.centerMain {
  width: 60%;
  height: 100%;
  border-left: 1px solid #5b829d;
}
.user,
.pass,
.veri {
  width: 100%;
  height: 0.4rem;
  border-bottom: 1px solid #5b829d;
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
.textCanvas {
  background-color: rgb(45, 45, 45, 0.17);
  float: left;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
  width: 1.18rem;
  height: 0.4rem;
  color: #5b829d;
}
.textImg {
  margin: 0.1rem 0.15rem;
}
.textInput {
  height: 100%;
  border: none;
  background-color: initial;
  color: #ffffff;
  font-size: 0.16rem;
  width: 2.74rem;
  border-radius: 0;
}
.veriInput {
  height: 100%;
  border: none;
  background-color: initial;
  color: #ffffff;
  font-size: 0.16rem;
  width: 1.56rem;
}

.pass {
  margin: 0.2rem auto;
}
.memory {
  width: 3.24rem;
  margin: 0.3rem auto 0.22rem;
}
.memory .register{
  float: right;
  color: #606266;
  font-size: 14px;
  line-height: 19px;
}
.memoryOk {
  height: 0.16rem;
  width: 0.15rem;
  border: 1px solid #ffffff;
  border-radius: 5px;
  float: left;
}
.meMe {
  float: left;
  line-height: 0.18rem;
  margin-left: 0.12rem;
  color: #5b829d;
  font-size: 13px;
}
.buttonOk {
  width: 100%;
  background-color: #a2cc6d;
  height: 0.42rem;
  margin: 0 auto;
  border-radius: 5px;
  text-align: center;
  line-height: 0.42rem;
  font-size: 0.16rem;
  color: #ffffff;
  border: none;
  margin-top: 0.2rem;
}
.buttonOk:active {
  background-color: #67c23a;
}
.Lfooter {
  height: 5%;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: #5b829d;
}
.Lfooter > p {
  color: #ffffff;
  font-size: 0.13rem;
  text-align: center;
  color: #5b829d;
}
::-webkit-input-placeholder {
  color: #ffffff;
  font-size: 0.16rem;
}
　　 :-moz-placeholder {
  color: #ffffff;
  font-size: 0.16rem;
}
　　 ::-moz-placeholder {
  color: #ffffff;
  font-size: 0.16rem;
}
　　 :-ms-input-placeholder {
  color: #ffffff;
  font-size: 0.16rem;
}
.picture {
  width: 30%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}
.picture img {
  width: 100%;
}
.centerlogin {
  width: 80%;
  height: 100%;
  float: right;
}
.loginfont {
  width: 100%;
  height: 60px;
  font-size: 20px;
  color: #fff;
  text-align: left;
  line-height: 60px;
}
input::-webkit-input-placeholder {
  color: #5b829d;
}
.Lfooter > p > a{
  vertical-align: middle;
}
.Lfooter > p > span{
  vertical-align: middle;
}
.record_icon{
  vertical-align: middle;
}
</style>