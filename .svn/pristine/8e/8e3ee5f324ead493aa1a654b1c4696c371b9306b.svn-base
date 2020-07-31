<template>
  <div style="width:100%;height:100%;background:#fff;">
    <div style="width:96%;margin:0 auto;line-height:0.8rem;text-align:center;padding-top:0.44rem;">
      <p style="font-size:20px">{{e}}</p>
      <p style="font-size:25px;color:#f68b1c;">{{y>=0?y:0}}元</p>
      <p style="font-size:13px;color:#999;">车口袋提供计时服务</p>
    </div>
    <div style="background:#e6e6e6;height:0.26rem;width:100%;"></div>
    <ul class="payul">
      <!-- <li>
                <div style="sanli">订单编号</div>
                <div style="margin-right:4%;"></div>
            </li> -->
      <li>
        <div style="sanli">车牌号码</div>
        <div style="margin-right:4%;">{{a}}</div>
      </li>
      <li>
        <div style="sanli">预约时间</div>
        <div style="margin-right:4%;">{{g}}</div>
      </li>
      <li>
        <div style="sanli">预约时长</div>
        <div style="margin-right:4%;">{{b}}</div>
      </li>
      <li style="background:#e6e6e6;height:0.26rem;width:100%;margin-left:0">

      </li>
      <li class="meiyong">
        <div style="sanli">应付金额</div>
        <div style="margin-right:4%;">￥{{f}}</div>
      </li>
      <li class="meiyong"
          @click="tica">
        <div style="sanli">优惠券</div>
        <div style="margin-right:4%;">
          <span v-if="loack==1">优惠券</span>
          <span v-if="loack==2">免费时长{{disp}}分钟</span>
          <span v-if="loack==3">红包优惠{{disp}}元</span>
          <span v-if="loack==4">红包折扣{{(disp)/10}}折</span>
          <img src="../../static/image/arr.png"
               style="vertical-align: middle;margin-top:-2px;margin-right:-2px;width:0.14rem;height:0.24rem;"></img>
        </div>
      </li>
      <router-link :to="{path:'/shengcheng',query:{name:this.e}}">
        <li class="meiyong">
          <div style="sanli">积分</div>
          <div style="margin-right:4%;">
            <span v-if="markmoney">积分抵扣{{this.$route.query.val}}元</span>
            <span v-if="!markmoney"></span>
            <img src="../../static/image/arr.png"
                 style="vertical-align: middle;margin-top:-2px;margin-right:-2px;width: 0.14rem;
                    height: 0.24rem;"></img>
          </div>
        </li>
      </router-link>
      <!-- <li class="meiyong"
          style="height:1rem;line-height:1rem;display:flex;justify-content: space-evenly;">
        <div>
          <p style="width: 25px;height: 25px;float: right"><img src="../../static/image/jjj.png"
                 alt=""
                 style="width: 100%;height: 100%;vertical-align: middle"
                 @click="jian"></p>
        </div>
        <input type="text"
               v-model="shenum"
               class="num"
               readonly="readonly"
               style="text-align: center;border: none;outline: none;background: #fff;">
        <div>
          <p style="width: 25px;height: 25px;"><img src="../../static/image/kkk.png"
                 alt=""
                 style="width: 100%;height: 100%;vertical-align: middle;margin-right:4%;"
                 @click="addf"></p>
        </div>
      </li> -->
      <li class="meiyong">
        <div style="sanli">优惠金额</div>
        <div style="margin-right:4%;">￥{{c}}</div>
      </li>
      <li>
        <div style="sanli">已付金额</div>
        <div style="margin-right:4%;">￥{{d}}</div>
      </li>
    </ul>
    <!-- <div class="footsa">
            <div>优惠券</div>
            <div>立即使用</div>
        </div> -->
    <div style="width: 92%;margin:0 auto;font-size: 14px;
            color: #b9b9b9;margin-top:0.2rem;margin-bottom:0.07rem;">
      <p style="vertical-align: middle;width:0.3rem;height:0.3rem; display: inline-block;">
        <img src="../../static/image/tis.png"
             alt=""
             style="width:100%;height:100%;">
      </p>
      <!-- <span style="color:#999;font-size:11px;">请于付款后
        <span>{{h}}</span>分钟离场，超时将加收停车费</span> -->
      <span style="color:#999;font-size:11px;"
            v-if="sliky">请尽快进场</span>
      <span style="color:#999;font-size:11px;"
            v-else>预约已超时</span>
    </div>
    <div class="paytoot"
         @click="rightnow">立即付款</div>
    <!-- <router-view></router-view> -->
  </div>

</template>
<script>
import axios from 'axios';
import Qs from 'qs'
import { MessageBox, Indicator } from 'mint-ui';
export default {
  data () {
    return {
      markmoney: false,
      shenum: 0,
      sliky: true,
      a: '',
      b: '',
      c: '',
      d: '',
      e: '',
      f: '',
      g: '',
      h: '',
      y: '',
      appId: '',
      loack: '',
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: '',
      paySign: '',
      ticketNumber: '',
      disp: '',
      isTicket: '',
      numji: '',
      type: "",
      moneys: '',
      useMark: '',
      tradeNo: ''
    }
  },
  mounted () {
    if (this.$route.query.val) {
      this.markmoney = true
    }
    this.a = localStorage.getItem('carnumbar')
    this.b = localStorage.getItem('longdate')
    let p1 = this.b.indexOf('小时')
    let p2 = this.b.indexOf("分钟")
    if (this.b.split("小时")[0] == 9 && this.b.substring(p1 + 2, p2) == 59) {
      this.sliky = false
    }
    this.c = localStorage.getItem('onsale_price')
    this.d = localStorage.getItem('paid_price')
    this.e = localStorage.getItem('paking_lot_name')
    this.f = localStorage.getItem('price')
    this.g = localStorage.getItem('startdate')
    this.h = localStorage.getItem('time_out')
    this.y = (Number(this.f) + Number(this.c)).toFixed(2)
    console.log(this.e)
    console.log(sessionStorage.getItem('ticknumbar2'))
    console.log(sessionStorage.getItem('ticknumbar3'))
    if (sessionStorage.getItem('ticknumbar1') && sessionStorage.getItem('ticknumbar2') == 0) {
      this.loack = 2
      this.disp = sessionStorage.getItem('ticknumbar1')
    } else if (sessionStorage.getItem('ticknumbar4')) {
      this.loack = 4
      this.disp = sessionStorage.getItem('ticknumbar4')
    } else {
      this.loack = 3
      this.disp = sessionStorage.getItem('ticknumbar2')
      if (sessionStorage.getItem('ticknumbar2')) {

      } else {
        this.loack = 1
      }
      // this.y = (Number(this.f) - Number(this.disp))
    }
    this.$http({
      method: 'post',
      url: this.newhttpUrl + '/MarkRecords/findMark',
      data: Qs.stringify({
        tel: localStorage.getItem('phone'),
        dealer: '1561430951496'
      })
    }).then(res => {
      if (res.data.resCode == 0) {
        this.numji = res.data.result[0].allMark
      } else {
        this.numji = 0
      }
    }).catch(err => {
      this.numji = 0
    })
  },
  beforeCreate () {
    this.$http.get(
      `${this.oldhttpUrl}/scan/getJSSDKTicket?url=${window.location.href.split('#')[0]}`).then(message => {
        console.log(message);
        wx.config({
          debug: false,
          appId: message.data.appid,
          timestamp: message.data.timestamp,
          nonceStr: message.data.nonceStr,
          signature: message.data.signature, // 必填，签名，见附录1
          jsApiList: ['chooseWXPay']
        });
        console.log(111);

      })
  },
  methods: {
    addf () {


      if (this.numji == '') {
        console.log(98)
      } else {

        if (this.shenum > this.numji - this.mark02) {
          MessageBox('提示', '积分不足')
          return false

        } else {
          this.shenum = this.shenum += this.mark02
          if (this.y < 1) {
            this.shenum = this.shenum - this.mark02
            MessageBox('提示', '已抵扣实付金额')
            return false
          } else {
            // this.y = this.y - 1

          }
        }


      }

    },
    jian () {
      console.log(this.shenum)
      if (this.shenum <= 0) {

      } else {
        this.shenum = this.shenum -= this.mark02

        // this.y = this.y + 1

      }
    },
    duihuan () {
      this.$router.push('/shengcheng')
    },
    tica () {
      this.$router.push({ path: '/fuzhi', query: { websock: 2 } })
    },
    rightnow () {
      // /Park/pay
      var data = {};
      var openid = localStorage.getItem("openid");
      // var openid = 'o8Aq-5juGaY8f5uYhYeGUHyi8TVM'
      if (sessionStorage.getItem('ticknumbar3') && this.$route.query.valmark) {
        this.type = 3;
        data = {
          type: 3,
          openId: openid,
          money: this.y,
          carNumber: this.a,
          ip: returnCitySN.cip,
          mark: this.$route.query.valmark,
          ticketNumber: sessionStorage.getItem('ticknumbar3'),
          start: this.g
        }
      }
      if (!sessionStorage.getItem('ticknumbar3') && !this.$route.query.valmark) {
        this.type = 0;
        data = {
          type: 0,
          money: this.y,
          openId: openid,
          carNumber: this.a,
          ip: returnCitySN.cip,
          start: this.g,
          mark: 0
        }
      } else {
        if (!sessionStorage.getItem('ticknumbar3')) {
          if (this.$route.query.valmark) {
            this.type = 2;
            data = {
              type: 2,
              openId: openid,
              money: this.y,
              carNumber: this.a,
              ip: returnCitySN.cip,
              mark: this.$route.query.valmark,
              start: this.g
            }
          }
        } else {
          if (!this.$route.query.valmark) {
            this.type = 1;
            data = {
              type: 1,
              openId: openid,
              money: this.y < 0 ? 0 : this.y,
              carNumber: this.a,
              ip: returnCitySN.cip,
              ticketNumber: sessionStorage.getItem('ticknumbar3'),
              start: this.g,
              mark: 0
            }
          }
        }
      }
      console.log(data);
      this.$http({
        method: 'post',
        url: this.httpUrl + 'web/parkingPay/pay',

        data: Qs.stringify(data)
      }).then(message => {
        console.log(message)
        this.tradeNo = message.data.result.tradeNo
        if (message.data.resCode == 0) {
          if (message.data.result.useMark) {
            this.useMark = message.data.result.useMark
          }
          if (message.data.result.price == 0 || message.data.result.price < 0) {
            this.$http({
              method: 'post',

              url: this.httpUrl + 'web/parkingPay/afterPay',
              data: Qs.stringify({
                // pay_status: 'get_brand_wcpay_request:ok',
                parkingId: localStorage.getItem('parkingId'),
                carNumber: localStorage.getItem("carnumbar"),
                ticketNumber: sessionStorage.getItem('ticknumbar3') ? sessionStorage.getItem('ticknumbar3') : null,
                mark: this.useMark ? this.useMark : 0,
                openId: localStorage.getItem("openid"),
                type: this.type,
                // openId:'o8Aq-5juGaY8f5uYhYeGUHyi8TVM',
                money: 0,
                resId: this.tradeNo
              })
            }).then(res => {
              MessageBox({
                title: '提示',
                message: '本次停车免费',
                closeOnClickModal: false
              }).then(action => {
                axios({
                  method: 'post',
                  url: this.httpUrl + 'app/reserve/selectResId',
                  data: Qs.stringify({
                    resId: this.$route.query.orderg
                  })
                }).then(res => {
                  console.log(res)
                })
                this.$router.push({ path: '/homePage' })
              })
            })
          } else {
            // if (this.y != message.data.result.money) {
            //   MessageBox('提示', '您支付时已超过临界点，请支付')
            // }
            this.moneys = message.data.result.price
            this.appId = message.data.result.appId;
            this.timeStamp = message.data.result.timeStamp;
            this.nonceStr = message.data.result.nonceStr;
            this.package = message.data.result.package;
            this.signType = message.data.result.signType;
            this.paySign = message.data.result.paySign;

            localStorage.setItem('setOrder', message.data.result.tradeNo)

            let that = this;
            wx.ready(() => {
              wx.chooseWXPay({
                timestamp: that.timeStamp,
                // 支付签名随机串，不长于 32 位
                nonceStr: that.nonceStr,
                // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
                package: that.package,
                // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                signType: that.signType,
                // 支付签名
                paySign: that.paySign,

                success (res) {
                  if (res.errMsg === 'chooseWXPay:ok' || res.errMsg == 'getBrandWCPayRequest:ok') {
                    Indicator.open('Loading...');
                    that.polling()





                  }
                },
                fail (res) {
                  MessageBox('提示', '支付失败')
                  that.$route.query.val = ''
                  that.markmoney = false
                  return
                },
                complete (res) {
                  // that.licektl()
                },
              })
            })
            // if (typeof WeixinJSBridge == "undefined") {
            //   if (document.addEventListener) {
            //     document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
            //   } else if (document.attachEvent) {
            //     document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            //     document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
            //   }
            // } else {
            //   this.onBridgeReady();

            // }
          }


        } else if (message.data.resCode == 1) {
          this.$http({
            method: 'post',

            url: this.httpUrl + 'web/parkingPay/afterPay',
            data: Qs.stringify({
              // pay_status: 'get_brand_wcpay_request:ok',
              parkingId: localStorage.getItem('parkingId'),
              carNumber: localStorage.getItem("carnumbar"),
              ticketNumber: sessionStorage.getItem('ticknumbar3') ? sessionStorage.getItem('ticknumbar3') : null,
              mark: this.useMark ? this.useMark : 0,
              openId: localStorage.getItem("openid"),
              type: this.type,
              // openId:'o8Aq-5juGaY8f5uYhYeGUHyi8TVM',
              money: 0,
              resId: this.tradeNo
            })
          }).then(res => {
            this.markmoney = false
            MessageBox({
              title: '提示',
              message: '本次停车免费',
              closeOnClickModal: false
            }).then(action => {
              axios({
                method: 'post',
                url: this.httpUrl + 'app/reserve/selectResId',
                data: Qs.stringify({
                  resId: this.$route.query.orderg
                })
              }).then(res => {
                console.log(res)
              })
              this.$router.push({ path: '/homePage' })
            })

          })
        } else if (message.data.resCode == 2) {
          MessageBox({
            title: '提示',
            message: '本次停车免费',
            closeOnClickModal: false
          }).then(action => {
            this.$router.push({ path: '/homePage' })
            this.markmoney = false
            sessionStorage.removeItem('ticknumbar1')
            sessionStorage.removeItem('ticknumbar2')
            sessionStorage.removeItem('ticknumbar3')
            sessionStorage.removeItem('ticknumbar4')
          })
        } else if (message.data.resCode == 10) {
          MessageBox({
            title: '提示',
            message: message.data.result,
            closeOnClickModal: false
          }).then(action => {
            window.location.reload()
            this.markmoney = false
            sessionStorage.removeItem('ticknumbar1')
            sessionStorage.removeItem('ticknumbar2')
            sessionStorage.removeItem('ticknumbar3')
            sessionStorage.removeItem('ticknumbar4')
          })
        }
      })
    },
    licektl () {
      let that = this;
      let data = {
        carNumber: localStorage.getItem('carnumbar')
      }
      console.log(data);
      that.$http({
        method: 'post',
        url: that.httpUrl + 'web/parkingPay/charging',
        data: Qs.stringify(data)
      }).then(message => {
        if (message.data.resCode != 1) {
          console.log(message)
          localStorage.setItem('longdate', message.data.result.longdate)
          localStorage.setItem('onsale_price', message.data.result.onsale_price)
          localStorage.setItem('paid_price', message.data.result.paid_price)
          localStorage.setItem('paking_lot_name', message.data.result.paking_lot_name)
          localStorage.setItem('price', message.data.result.price)
          localStorage.setItem('startdate', message.data.result.startdate)
          localStorage.setItem('time_out', message.data.result.time_out)
          localStorage.setItem('parkingId', message.data.result.parkingId)
          window.location.reload()
        }
      })
    },
    polling () {
      let that = this;
      that.$http({
        method: 'post',
        url: that.httpUrl + 'web/parkingPay/afterPay',
        data: Qs.stringify({
          parkingId: localStorage.getItem('parkingId'),
          carNumber: localStorage.getItem("carnumbar"),
          ticketNumber: sessionStorage.getItem('ticknumbar3') ? sessionStorage.getItem('ticknumbar3') : null,
          mark: that.useMark ? that.useMark : 0,
          type: that.type,
          openId: localStorage.getItem("openid"),
          money: that.moneys,
          resId: that.tradeNo
        })
      }).then(res => {
        Indicator.close()
        that.$router.replace({ path: '/homePage' })
        axios({
          method: 'post',
          url: that.httpUrl + 'app/reserve/selectResId',
          data: Qs.stringify({
            resId: that.$route.query.orderg
          })
        }).then(res => {
          console.log(res)
        })

        // if (localStorage.getItem('setskip') == -2) {
        //   that.$router.push({ path: '/homePage' })
        //   localStorage.removeItem('setskip')
        // } else {
        //   that.$router.push({ path: '/return' })
        //   localStorage.removeItem('setskip')
        // }
      })
    },
    getFormatDate () {
      var nowDate = new Date();
      //alert(11);
      var year = nowDate.getFullYear();
      var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
      var date = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
      var hour = nowDate.getHours() < 10 ? "0" + nowDate.getHours() : nowDate.getHours();
      var minute = nowDate.getMinutes() < 10 ? "0" + nowDate.getMinutes() : nowDate.getMinutes();
      var second = nowDate.getSeconds() < 10 ? "0" + nowDate.getSeconds() : nowDate.getSeconds();
      //alert(year + "-" + month + "-" + date+" "+hour+":"+minute+":"+second);
      return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
    },
    onBridgeReady () {
      let that = this;
      // alert(that.appId)npm 
      // alert(that.timeStamp)
      // alert(that.nonceStr)
      // alert(that.package)
      // alert(that.paySign)
      // alert(that.signType)
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
          "appId": that.appId,     //公众号名称，由商户传入     
          "timeStamp": that.timeStamp,         //时间戳，自1970年以来的秒数     
          "nonceStr": that.nonceStr, //随机串     
          "package": that.package,
          "signType": that.signType,         //微信签名方式：     
          "paySign": that.paySign //微信签名 
        },
        function (res) {
          //  alert(res.err_msg)
          if (res.err_msg == "get_brand_wcpay_request:ok") {
            // Indicator.open('Loading...');

          }
        });
    }
  }
}
</script>
<style scoped>
.payul li,
.footsa {
  display: flex;
  justify-content: space-between;
  width: 92%;
  margin: 0 auto;
  margin-left: 4%;
  line-height: 0.94rem;
  color: #b9b9b9;
  font-size: 14px;
}
.paytoot {
  width: 94%;
  margin: 0.2rem auto;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-size: 14px;
  border-radius: 5px;
  background: #f68b1b;
  color: #fff;
  cursor: pointer;
  margin-top: 0.4rem;
}
.payul li div {
  color: #999;
}
.payul .meiyong {
  border-bottom: 1px solid #f5f5f5;
}
.sanli {
  color: #303030 !important;
}
</style>


