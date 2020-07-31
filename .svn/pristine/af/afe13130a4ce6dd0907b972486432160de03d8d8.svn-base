<template>
  <div style="width:100%;height:100%;background:#fff;">
    <div style="width:96%;margin:0 auto;line-height:0.4rem;text-align:center;padding-top:0.22rem;">
      <p style="font-size:20px">{{e}}</p>
      <p style="font-size:25px;color:#f68b1c;">{{y>=0?y:0}}元</p>
      <p style="font-size:13px;color:#999;">车口袋提供计时服务</p>
    </div>
    <div style="background:#e6e6e6;height:0.13rem;width:100%;"></div>
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
      <li>
        <div style="sanli">停车单价</div>
        <div style="margin-right:4%;">{{k}}元/小时</div>
      </li>
      <li style="background:#e6e6e6;height:0.13rem;width:100%;margin-left:0">

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
          <span v-if="loack==4">红包折扣{{disp}}折</span>
          <img src="../../static/image/arr.png"
               style="vertical-align: middle;margin-top:-2px;margin-right:-2px;width:0.07rem;height:0.12rem;"></img>
        </div>
      </li>
      <router-link to="/shengcheng">
        <li class="meiyong">
          <div style="sanli">积分抵扣</div>
          <div style="margin-right: 4%;">
            <span v-if="markmoney">积分抵扣{{this.$route.query.val}}元</span>
            <span v-if="!markmoney"></span>
            <img src="../../static/image/arr.png"
                 style="vertical-align: middle;margin-top:-2px;margin-right:-2px;width: 0.07rem;
                    height: 0.12rem;"></img>
          </div>
        </li>
      </router-link>
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
            color: #b9b9b9;margin-top:0.1rem;margin-bottom:0.03rem;">
      <p style="vertical-align: middle;width:0.15rem;height:0.15rem; display: inline-block;">
        <img src="../../static/image/tis.png"
             alt=""
             style="width:100%;height:100%;">
      </p>
      <span style="color:#999;font-size:11px;">请于付款后
        <span>{{h}}</span>分钟离场，超时将加收停车费</span>
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
      useMark: '',
      markmoney: false,
      a: '',
      b: '',
      c: '',
      d: '',
      e: '',
      f: '',
      g: '',
      h: '',
      k: '',
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
      tradeNo: ''
    }
  },
  mounted () {
    if (this.$route.query.val) {
      this.markmoney = true
    }
    this.a = localStorage.getItem('carnumber')
    this.b = localStorage.getItem('longdate')
    this.c = localStorage.getItem('onsale_price')
    this.d = localStorage.getItem('paid_price')
    this.e = localStorage.getItem('paking_lot_name')
    this.f = localStorage.getItem('price')
    this.g = localStorage.getItem('startdate')
    this.h = localStorage.getItem('time_out')
    this.k = localStorage.getItem('HPrice')
    this.y = (Number(this.f) + Number(this.c)).toFixed(2)
    console.log(this.e)
    console.log(sessionStorage.getItem('ticknumbar2'))
    console.log(sessionStorage.getItem('ticknumbar3'))
    if (sessionStorage.getItem('ticknumbar1') && sessionStorage.getItem('ticknumbar2') == 0) {
      this.loack = 2
      this.disp = sessionStorage.getItem('ticknumbar1')
    } else if (sessionStorage.getItem('ticknumbar4')) {
      this.loack = 4
      this.disp = (sessionStorage.getItem('ticknumbar4')) / 10
    } else {
      this.loack = 3
      this.disp = sessionStorage.getItem('ticknumbar2')
      if (sessionStorage.getItem('ticknumbar2')) {

      } else {
        this.loack = 1
      }
      // this.y = (Number(this.f) - Number(this.disp)).toFixed(2)
    }
    let that = this;
    that.$http({
      method: 'post',

      url: that.httpUrl + '/MarkRecords/findMark',
      data: Qs.stringify({
        tel: localStorage.getItem('phone')
      })
    }).then(res => {
      if (res.data.resCode == 0) {
        that.numji = res.data.result
      } else {
        that.numji = 0
      }
    }).catch(err => {
      that.numji = 0
    })
  },
  beforeCreate () {
    console.log(18)
    axios.get(

      this.httpUrl + '/User/getSignture?url=' + window.location.href.split('#')[0]).then(message => {
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

    duihuan () {
      this.$router.push('/shengcheng')
    },
    tica () {
      this.$router.push({ path: '/discount', query: { num: 6, val: 7 } })
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
          money: this.f,
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
          money: this.f,
          openId: openid,
          carNumber: this.a,
          ip: returnCitySN.cip,
          start: this.g,
          mark: 0
        }
      } else {
        if (!sessionStorage.getItem('ticknumbar3')) {
          if (this.$route.query.valmark != 0) {
            this.type = 2;
            data = {
              type: 2,
              openId: openid,
              money: this.f,
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
              money: this.f,
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
      let that = this;
      that.$http({
        method: 'post',
        url: that.oldurl + '/web/parkingPay/pay',
        data: Qs.stringify(data)
      }).then(message => {
        console.log(message)
        that.tradeNo = message.data.result.tradeNo
        if (message.data.resCode == 0) {
          // if (this.y != message.data.result.price) {
          //   MessageBox('提示', '您支付时已超过临界点，请支付')
          // }
          if (message.data.result.useMark) {
            that.useMark = message.data.result.useMark
          }

          that.moneys = message.data.result.money
          that.appId = message.data.result.appId;
          that.timeStamp = message.data.result.timeStamp;
          that.nonceStr = message.data.result.nonceStr;
          that.package = message.data.result.package;
          that.signType = message.data.result.signType;
          that.paySign = message.data.result.paySign;
          if (message.data.result.price == 0 || message.data.result.price < 0) {
            that.$http({
              method: 'post',
              url: that.oldurl + '/web/parkingPay/afterPay',
              data: Qs.stringify({
                // pay_status: 'get_brand_wcpay_request:ok',
                parkingId: localStorage.getItem('parkingId'),
                carNumber: localStorage.getItem("carnumber"),
                ticketNumber: sessionStorage.getItem('ticknumbar3') ? sessionStorage.getItem('ticknumbar3') : null,
                mark: that.useMark,
                openId: localStorage.getItem("openid"),
                type: that.type,
                // openId:'o8Aq-5juGaY8f5uYhYeGUHyi8TVM',
                money: 0,
                resId: that.tradeNo
              })
            }).then(res => {
              MessageBox({
                title: '提示',
                message: '本次停车免费',
                closeOnClickModal: false
              }).then(action => {
                axios({
                  method: 'post',
                  url: that.httpUrl + 'app/reserve/selectResId',
                  data: Qs.stringify({
                    resId: that.$route.query.orderg
                  })
                }).then(res => {
                  console.log(res)
                })
                that.$router.replace({ path: '/list' })
              })

            })

          } else {
            // if (typeof WeixinJSBridge == "undefined") {
            //   if (document.addEventListener) {
            //     document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
            //   } else if (document.attachEvent) {
            //     document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            //     document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
            //   }
            // } else {
            //   that.onBridgeReady();

            // }
            wx.ready(function () {
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
                  this.$route.query.val = ''
                  this.markmoney = false
                  MessageBox('提示', '支付失败')
                  return
                },
                complete (res) {

                },
              })
            })
          }


        } else if (message.data.resCode == 1) {
          that.$http({
            method: 'post',
            url: that.oldurl + '/web/parkingPay/afterPay',
            data: Qs.stringify({
              // pay_status: 'get_brand_wcpay_request:ok',
              parkingId: localStorage.getItem('parkingId'),
              carNumber: localStorage.getItem("carnumber"),
              ticketNumber: sessionStorage.getItem('ticknumbar3') ? sessionStorage.getItem('ticknumbar3') : null,
              mark: that.useMark,
              openId: localStorage.getItem("openid"),
              type: that.type,
              // openId:'o8Aq-5juGaY8f5uYhYeGUHyi8TVM',
              money: 0,
              resId: that.tradeNo
            })
          }).then(res => {
            MessageBox({
              title: '提示',
              message: '本次停车免费',
              closeOnClickModal: false
            }).then(action => {
              axios({
                method: 'post',
                url: that.httpUrl + 'app/reserve/selectResId',
                data: Qs.stringify({
                  resId: that.$route.query.orderg
                })
              }).then(res => {
                console.log(res)
              })
              that.$router.push({ path: '/list' })
            })

          })
        } else if (message.data.resCode == 2) {
          this.markmoney = false
          MessageBox({
            title: '提示',
            message: '本次停车免费',
            closeOnClickModal: false
          }).then(action => {
            that.$router.push({ path: '/list' })
            sessionStorage.clear('ticknumbar1')
            sessionStorage.clear('ticknumbar2')
            sessionStorage.clear('ticknumbar3')
          })
        } else if (message.data.resCode == 10) {
          this.markmoney = false
          MessageBox({
            title: '提示',
            message: message.data.result,
            closeOnClickModal: false
          }).then(action => {
            sessionStorage.clear('ticknumbar1')
            sessionStorage.clear('ticknumbar2')
            sessionStorage.clear('ticknumbar3')
          })
        }


      })
    },
    polling () {
      if (!this.useMark) {
        this.useMark = 0
      }
      let that = this;
      that.$http({
        method: 'post',
        url: that.oldurl + '/web/parkingPay/afterPay',
        data: Qs.stringify({
          parkingId: localStorage.getItem('parkingId'),
          carNumber: localStorage.getItem("carnumber"),
          ticketNumber: sessionStorage.getItem('ticknumbar3') ? sessionStorage.getItem('ticknumbar3') : null,
          mark: that.useMark,
          type: that.type,
          openId: localStorage.getItem("openid"),
          money: that.moneys,
          resId: that.tradeNo
        })
      }).then(res => {
        axios({
          method: 'post',
          url: that.httpUrl + 'app/reserve/selectResId',
          data: Qs.stringify({
            resId: that.$route.query.orderg
          })
        }).then(res => {
          console.log(res)
        })
        Indicator.close()
        that.$router.replace({ path: '/list' })
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
            that.$http({
              method: 'post',
              url: that.oldurl + '/web/parkingPay/afterPay',
              data: Qs.stringify({
                parkingId: localStorage.getItem('parkingId'),
                carNumber: localStorage.getItem("carnumber"),
                ticketNumber: sessionStorage.getItem('ticknumbar3') ? sessionStorage.getItem('ticknumbar3') : null,
                mark: that.$route.query.valmark,
                type: that.type,
                openId: localStorage.getItem("openid"),
                money: that.moneys
              })
            }).then(res => {
              axios({
                method: 'post',
                url: that.httpUrl + 'app/reserve/selectResId',
                data: Qs.stringify({
                  resId: that.$route.query.orderg
                })
              }).then(res => {
                console.log(res)
              })
              that.$router.replace({ path: '/return' })
            })
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
  line-height: 0.47rem;
  color: #b9b9b9;
  font-size: 14px;
}
.paytoot {
  width: 94%;
  margin: 0.1rem auto;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  font-size: 14px;
  border-radius: 5px;
  background: #f68b1b;
  color: #fff;
  cursor: pointer;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
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


