<template>
  <div style="background:#efefef;"
       id="ap">
    <div class="login"
         v-if="lp">

      <div class="logo"><img src="../../static/image/lioa.png"
             alt=""></div>
      <div class="loginInput topp">
        <label>
          <!-- <span>86</span>&nbsp; -->
          <img src="../../static/image/zh.png" />
        </label>
        <div></div>
        <input type="text"
               v-model="name"
               @blur="bottocent"
               placeholder="请输入您的手机号码" />
      </div>
      <div class="loginInput bott">
        <label>
          <img src="../../static/image/mm.png" />
        </label>
        <div class="mid"></div>
        <input v-model="pass"
               style="width:58%;"
               @blur="bottocent"
               placeholder="请输入验证码" />
        <div class="ma"
             @click="send"
             v-if="this.t==''">{{val}}</div>
        <div class="ma"
             v-else
             style="background:#999;">{{textsend}}</div>
      </div>
      <div @click="log"
           class="log"
           :class="{active:coogrant==true}">登录</div>
      <!-- <div class="aye">8888888888888888</div> -->
    </div>
    <!-- <div style="position:fixed;top:20%;width:100%;"
         v-if="!lp">
      <div style="width:3rem;height:2.5rem;margin:0 auto;">
        <img src="../../static/image/xinren.png"
             alt=""
             style="width:100%;height:100%;"
             @click="lingqu">
      </div>
      <div style="width:0.59rem;margin:0 auto;">
        <img src="../../static/image/xinren (2).png"
             alt=""
             @click="bulingqu">
      </div>
    </div> -->
    <div style="text-align:center;margin-top:0.5rem">
      <input name="test"
             style="width:0.14rem;height:0.14rem;vertical-align: middle;"
             v-model="checkconsent"
             type="checkbox" />
      <span>您已同意</span>
      <span style="color:#f68b1c"
            @click="user">用户注册协议</span>及
      <span style="color:#f68b1c"
            @click="users">隐私政策</span>
    </div>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
import axios from 'axios'
import { ADD, start, end, fasong, lingquz, stateus, serarchc } from './api/api.js'
import Qs from 'qs'
export default {
  name: 'login',
  data () {
    return {
      val: '发送验证码',
      t: '',
      name: '',
      textsend: '',
      checkconsent: false,
      coogrant: false,
      pass: '',
      yanz: '',
      lp: true,
      a: '',
      b: '',
      c: '',
      d: '',
      List: []
    }
  },
  created () {
    // let height=document.documentElement.clientHeight;
    // console.log(height)
    // window.onload = function () {
    //     // 把获取到的高度赋值给根div
    //     document.getElementById('ap').style.height = `${height}px`;
    // };
  },
  watch: {
    checkconsent (a, b) {
      if (a) {
        this.coogrant = true
      } else {
        this.coogrant = false
      }
    }
  },
  mounted () {
    console.log(this.$route.query.p)
    // let that=this;
    //  that.$http({
    //     method:'get',
    //     url:'http://39.104.113.112:2088/GetInvoice/tic'
    // }).then(res=>{
    //     console.log(res)

    // })
    let data = {
      openid: this.openid
      // openid:'o8Aq-5juGaY8f5uYhYeGUHyi8TVM'
    }
    console.log(data)
    serarchc(data).then(res => {
      console.log(res)
      if (res.data.resCode == 200) {
        if (res.data.result.length == 0) {

        } else {

          this.List = res.data.result
        }
      }
    })
  },
  methods: {
    user () {
      this.$router.push('/service')
    },
    users () {
      this.$router.push('/privacy')
    },
    bottocent () {
      window.scrollTo(0, 0)
    },
    async send () {

      if (this.name == '') {
        MessageBox('提示', '请输入手机号码');
      } else {
        if (!(/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.name))) {
          MessageBox('提示', '请输入正确的手机号码');
        } else {
          let that = this;
          that.textsend = '剩余' + 60 + 's'
          var time = 59;
          that.t = setInterval(function () {
            if (time <= 0) {
              clearInterval(that.t)
              that.t = ''
              that.val = '重新发送'
            } else {
              that.textsend = '剩余' + time-- + 's'
            }
          }, 1000)
          let data = {
            phoneNumber: that.name
          }
          try {
            let res = await fasong(data)
            if (res.data.resCode == "0") {
              console.log(res)
              that.yanz = res.data.result
            }
          } catch (err) {
            console.log(err)
          }


        }
      }

    },
    async lingqu () {
      let data = {
        tel: localStorage.getItem('tel'),
        parking_id: 'PI1540957659034816320',
        ticketType: 1,
        useWay: 2,
        start_time: end(),
        end_time: start(),
        sub: 6,
        issus_type: 1,
        isTeam: 1,
        // num:2,
        remark: '免费',
        dealer: 123,
      }
      console.log(data)
      let message = await lingquz(data)
      if (message.data.resCode == 0) {
        MessageBox('提示', '领取成功').then(action => {
          if (this.$route.query.p == 1 || this.$route.query.p == undefined) {
            if (this.List.length == 0) {
              this.$router.push({ path: '/card', query: { arr: 7 } })
            } else {
              this.$router.push({ path: '/list' })
            }

          } else if (this.$route.query.p == 2) {
            this.$router.push({ path: '/people', query: { c: 1 } })
          }

        })
      } else {
        MessageBox('提示', '领取失败').then(action => {
          if (this.$route.query.p == 1 || this.$route.query.p == undefined) {
            if (this.List.length == 0) {
              this.$router.push({ path: '/card', query: { arr: 7 } })
            } else {
              this.$router.push({ path: '/list' })
            }

          } else if (this.$route.query.p == 2) {
            this.$router.push({ path: '/people', query: { c: 1 } })
          }

        })
      }
    },
    // add (m) { return m < 10 ? '0' + m : m },
    // timeToDate (data) {
    //   var d = new Date(data);//时间戳记得乘以1000再进行处理
    //   var year = d.getFullYear();
    //   var month = d.getMonth() + 1;
    //   var date = d.getDate();
    //   var hour = d.getHours();
    //   var minute = d.getMinutes();
    //   var second = d.getSeconds();
    //   // return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
    //   return year + "-" + this.add(month) + "-" + this.add(date) + " " + this.add(hour) + ":" + this.add(minute) + ":" + this.add(second);
    // },
    // bulingqu () {
    //   if (this.$route.query.p == 1 || this.$route.query.p == undefined) {
    //     if (this.List.length == 0) {
    //       this.$router.push({ path: '/card', query: { arr: 7 } })
    //     } else {
    //       this.$router.push({ path: '/list' })
    //     }
    //   } else if (this.$route.query.p == 2) {
    //     this.$router.push({ path: '/people', query: { c: 1 } })
    //   }
    // },
    async log () {
      if (this.name == '' || this.pass == '') {
        MessageBox('提示', '手机号码和验证码不能为空');
        return;
      }
      if (!(/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.name))) {
        MessageBox('提示', '请输入正确的手机号码');
        return;
      }
      if (!this.checkconsent) {
        MessageBox('提示', '请勾选用户协议');
        return;
      }

      let data = {
        openId: this.openid,
        phoneNumber: this.name,
        code: this.pass,
        type:1
      }
      let res = await stateus(data)
      if (res.data.resCode == 0) {
        // this.lp = false
        localStorage.setItem('tel', this.name)
        localStorage.setItem('phone', this.name)
        this.$router.replace({ path: '/list' })
        if(res.data.isUsed==0){
          if(sessionStorage.getItem("ticketarr")){
            var arr;
            arr = JSON.parse(localStorage.getItem('ticketarr'))
            for (var i = 0; i < arr[0].length; i++) {
              var datw
              if (arr[0][i].useWay == 4) {
                datw = {
                  tel: this.name,
                  parking_id: arr[0][i].parkingId,
                  ticketType: 1,
                  useWay: arr[0][i].useWay,
                  start_time: end(new Date().getTime()),
                  end_time: arr[0][i].endTime,
                  percent: arr[0][i].useWayType,
                  issus_type: 1,
                  isTeam: 1,
                  num: arr[0][i].num,
                  remark: '免费',
                  dealer: 123,
                }
              } else if (arr[0][i].useWay == 3) {
                datw = {
                  tel: this.name,
                  parking_id: arr[0][i].parkingId,
                  ticketType: 1,
                  useWay: arr[0][i].useWay,
                  start_time: end(new Date().getTime()),
                  end_time: arr[0][i].endTime,
                  full: arr[0][i].useWayType.split(',')[0],
                  sub: arr[0][i].useWayType.split(',')[1],
                  issus_type: 1,
                  isTeam: 1,
                  num: arr[0][i].num,
                  remark: '免费',
                  dealer: 123,
                }

              } else if (arr[0][i].useWay == 2) {
                datw = {
                  tel: this.name,
                  parking_id: arr[0][i].parkingId,
                  ticketType: 1,
                  useWay: arr[0][i].useWay,
                  start_time: end(new Date().getTime()),
                  end_time: arr[0][i].endTime,
                  sub: arr[0][i].useWayType,

                  issus_type: 1,
                  isTeam: 1,
                  num: arr[0][i].num,
                  remark: '免费',
                  dealer: 123,
                }
              } else if (arr[0][i].useWay == 1) {
                datw = {
                  tel: this.name,
                  parking_id: arr[0][i].parkingId,
                  ticketType: 1,
                  useWay: arr[0][i].useWay,
                  start_time: end(new Date().getTime()),
                  end_time: arr[0][i].endTime,
                  freeTime: arr[0][i].useWayType,

                  issus_type: 1,
                  isTeam: 1,
                  num: arr[0][i].num,
                  remark: '免费',
                  dealer: 123,
                }
              }

              axios({
                method: "post",
                url: this.newhttpUrl + "/TicketInfo/bornTicket",
                data: Qs.stringify(datw),
                success: function (message) {
                  console.log(message)

                }
              })
            }
          }
        }
      } else {
        MessageBox('提示', res.data.result);
      }

    }
  }
}
</script>
<style scoped>
.login {
  width: 100%;
}
.logo {
  width: 1rem;
  height: 0.4rem;
  margin: 0 auto;
  padding: 0.94rem;
}
.logo img {
  width: 100%;
}
.loginInput input {
  outline: none;
  border: none;
  text-indent: 5px;
  font-size: 13px;
  font-family: 'PingFang-SC-Regular';
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
  font-family: 'PingFang-SC-Regular';
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
  font-family: 'PingFang-SC-Regular';
  text-align: center;
  position: absolute;
  right: -1px;
  top: -1px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}
.log {
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
}
.active {
  background: #f68b1c;
}
/* .curr{width: 0.4rem;height: 0.4rem;border-radius: 50%;} */
</style>
