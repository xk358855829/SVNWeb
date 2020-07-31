<template>
  <div id="pageLogin"
       v-bind:style="{background:'url(' + backgroundURL + ')', backgroundRepeat:'no-repeat', backgroundSize: 'cover'}">
    <div class="login">
      <div class="title">
        <!--<img src="../../static/image/suriot.png"/>--></div>
      <div class="center">
        <p>{{name}}</p>
        <div class="centerMain">
          <div class="leftindex">
            <div class="topleftindex">
              <div class="innerbox">
                <p>智慧消防 · 平安城市</p>
              </div>
              <div class="innerimg">
                <img src="../../static/image/indeximg.png"
                     alt="">
              </div>
            </div>
          </div>
          <div class="rightindex">
            <div class="peo">
              <img src="../../static/image/peo.png"
                   alt="">
              <p>用户登录</p>
            </div>
            <input style="display:none">
            <!-- <div class="user">
							<div class="textBox">
								<img class="textImg" src="../../static/image/user.png" />
							</div>
							<div class="textBox">
								<input class="textInput" type="text" v-model="userName" @blur="testing(1,userName)" placeholder='请输入您的账号'/>
							</div>
						</div> -->
            <div class="pass">
              <div class="textBox">
                <img class="textImg"
                     src="../../static/image/ple.png" />
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
                     src="../../static/image/ply.png" />
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
                     src="../../static/image/pac.png" />
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
              <div class="memoryOk"
                   v-bind:style="styleMe"
                   @click="meClick"></div>
              <div class="meMe">记住密码</div>
            </div>
            <button class="buttonOk"
                    @click="login">登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
          </div>
        </div>
      </div>
      <div class="Lfooter">

        <p>
          <a href="http://www.beian.miit.gov.cn"
             style="color:#fff;">{{copyright}}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      ps: 0,
      styleMe: {
        backgroundColor: 'initial'
      },
      userName: '',
      passWord: '',
      name: '',
      copyright: '',
      veri: '',
      backgroundURL: '',
      user: [0, 0, 0]
    }
  },
  mounted: function () {
    // let arrn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    // var texts = ''
    // for (var c = 0; c < 1; c++) {
    //   texts += arrn[Math.floor(Math.random() * 12)]
    // }
    // console.log(texts)
    this.code();
    this.userName = localStorage.getItem('userName');
    if (localStorage.getItem('userName')) {
      this.ps = 1;
      this.styleMe.backgroundColor = '#A2CC6D';
    } else {
      this.ps = 0;
      this.styleMe.backgroundColor = 'initial';
    }
    this.passWord = localStorage.getItem('passWord');
    document.title = this.$route.meta.title;
    let that = this;
    document.onkeydown = function (e) {
      var key = window.event.keyCode;
      if (key == 13) {
        // that.login();
      }
    }
    let data={
      dealer:sessionStorage.getItem("dealer")
    }
    axios({
      method: 'post',
      url: this.$store.state.http + '/website/findWebsite',
      data:Qs.stringify(data)
    }).then(function (message) {
      that.backgroundURL = message.data.website.background;
      that.name = message.data.website.name;
      that.copyright = message.data.website.copyright
    })
  },
  methods: {
    meClick () {
      if (this.ps) {
        this.styleMe.backgroundColor = 'initial';
        this.ps = 0;
      } else {
        this.styleMe.backgroundColor = '#A2CC6D';
        this.ps = 1;
      }
    },
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
      context.fillStyle = "#FF5907";
      context.textAlign = "center";
      context.fillText(text, 150, 100);
    },
    testing (k, userVal) {
      console.log(userVal)
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
    login () {
      let that = this;
      that.testing(1, that.userName);
      that.testing(2, that.passWord);
      that.testing(3, that.veri);
      if (this.user[0] == 1 && this.user[1] == 1 && this.user[2] == 1) {
        axios({
          method: 'post',
          url: this.$store.state.http + '/user/login',
          data: Qs.stringify({
            userName: this.userName,
            password: this.passWord
          })
        }).then(function (message) {
          console.log(message)
          if (message.data.resCode == 0) {
            if (that.ps) {
              localStorage.setItem('userName', that.userName);
              localStorage.setItem('passWord', that.passWord);
            } else {
              localStorage.removeItem('userName');
              localStorage.removeItem('passWord');
            }
            localStorage.setItem('userAlias', message.data.result.userAlias);
            sessionStorage.setItem('userAlias', message.data.result.userAlias);
            sessionStorage.setItem('userId', message.data.result.userId);
            sessionStorage.setItem('dealer', message.data.result.dealer);
            sessionStorage.setItem('type', message.data.result.type);
            sessionStorage.setItem('orderDealers', message.data.result.orderDealer);
            that.$router.push('/pageHome')
          } else {
            that.$alert('用户名或密码错误', '系统提示', {
              confirmButtonText: '确定'
            });
          }
        })
      }
    }
  }
}
</script>

<style scoped="scoped" lang="scss">
@import '../styles/vars.scss';
canvas {
  width: 100%;
  height: 100%;
}
// #pageLogin{height: 100%;width: 100%;background-size:cover;}
#pageLogin {
  height: 100%;
  width: 100%;
  background-size: cover;
  min-height: 700px;
}
.login {
  height: 100%;
}
.title {
  height: 15.5%;
}
/* .title>img{width: 2.16rem;height: 0.43rem;margin: 0.3rem 0 0 0.3rem;} */
.center {
  height: 80.9%;
  text-align: center;
}
.center > p {
  font-size: 0.36rem !important;
  color: $color;
  margin-bottom: 0.55rem;
}
.centerMain {
  width: 12rem;
  height: 5.03rem;
  background: $white;
  border-radius: 0.2rem;
  margin: auto;
  text-align: center;
  padding-top: 0.45rem;
  padding-bottom: 0.46rem;
  opacity: 0.87;
}
.user,
.pass,
.veri {
  width: 3.24rem;
  height: 0.4rem;
  border: 1px solid $color;
  margin: 0px 0.5rem;
  border-radius: 5px;
  text-align: left;
}
.veri {
  margin: 0.2rem auto;
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
  background: rgba($rol, 0.17);
  float: left;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
  width: 1.18rem;
  height: 0.4rem;
}
.textImg {
  margin: 0.1rem 0.15rem;
}
.textInput {
  height: 100%;
  background-color: initial;
  color: $color;
  @include text1;
  width: 2.74rem;
  border-radius: 0;
}
.veriInput {
  height: 100%;
  background-color: initial;
  color: $color;
  @include text1;
  width: 1.56rem;
}

.pass {
  margin: 0.2rem auto;
}
.memory {
  width: 3.24rem;
  margin: 0.16rem auto 0.22rem;
}
.memoryOk {
  height: 0.16rem;
  width: 0.15rem;
  border: 1px solid $color;
  border-radius: 5px;
  float: left;
}
.meMe {
  float: left;
  line-height: 0.18rem;
  margin-left: 0.12rem;
  color: $color;
  font-size: 13px;
}
.buttonOk {
  width: 3.24rem;
  height: 0.42rem;
  margin: 0 auto;
  border-radius: 5px;
  text-align: center;
  line-height: 0.42rem;
  color: $white;
  @include text1;
  background: linear-gradient(
    180deg,
    rgba(255, 89, 7, 1),
    rgba(255, 42, 25, 1)
  );
}
.buttonOk:active {
  background-color: #ff5907;
}
.Lfooter {
  height: 3.6%;
}
.Lfooter > p {
  color: $color;
  font-size: 0.13rem;
  text-align: center;
}
::-webkit-input-placeholder {
  color: $color;
  font-size: 0.16rem;
}
　　 :-moz-placeholder {
  color: $color;
  font-size: 0.16rem;
}
　　 ::-moz-placeholder {
  color: $color;
  font-size: 0.16rem;
}
　　 :-ms-input-placeholder {
  color: $color;
  font-size: 0.16rem;
}
.leftindex {
  width: 6.76rem;
  height: 100%;
  float: left;
}
.rightindex {
  width: 5.22rem;
  height: 100%;
  float: right;
  border-left: 1px solid rgba(173, 173, 173, 1);
}
.topleftindex {
  height: 17.6%;
  width: 100%;
  margin-top: 0.14rem;
}
.topleftindex .innerbox {
  width: 3.56rem;
  height: 0.7rem;
  border: 2px solid rgba(255, 42, 25, 1);
  margin: 0 auto;
}
.topleftindex .innerbox p {
  width: 3.01rem;
  height: 34px;
  font-size: 0.34rem !important;
  font-family: 'MicrosoftYaHei';
  font-weight: 400;
  color: rgba(255, 42, 25, 1);
  padding: 0.22rem 0.31rem 0.17rem 0.24rem;
}
.innerimg {
  margin-top: 0.35rem;
}
.rightindex .peo {
  margin: 0 auto;
  margin-top: 0.35rem;
  width: 1.92rem;
}
.rightindex .peo p {
  display: inline-block;
  width: 1.36rem;
  height: 0.32rem;
  font-size: 0.34rem !important;
  font-family: 'MicrosoftYaHei';
  font-weight: 400;
  color: rgba(48, 48, 48, 1);
  margin-left: 0.08rem;
  margin-bottom: 0.17rem;
  vertical-align: middle;
}
@media screen and (max-width: 1400px) {
  .title {
    height: 3.5%;
  }
  .Lfooter p {
    margin-top: 0.7rem;
  }
  .centerMain {
    height: 4.8rem;
  }
}
</style>