<template>
  <div style="width:100%;height:100%;background:#fff;">
    <div style="width:96%;margin:0 auto;line-height:0.8rem;text-align:center;padding-top:0.44rem;">
      <p style="font-size:20px">{{e}}</p>
      <p style="font-size:25px;color:#f68b1c;">{{y>=0?y:0}}元</p>
      <p style="font-size:13px;color:#999;">车口袋提供计时服务</p>
    </div>
    <div style="background:#e6e6e6;height:0.26rem;width:100%;"></div>
    <ul class="payul">
      <li>
        <div style="sanli">车牌号码</div>
        <div style="margin-right:4%;">{{a}}</div>
      </li>
      <li>
        <div style="sanli">入场时间</div>
        <div style="margin-right:4%;">{{g}}</div>
      </li>
      <li>
        <div style="sanli">停车时长</div>
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
      <li class="meiyong"
          @click="deduction">
        <div style="sanli">积分</div>
        <div style="margin-right:4%;">
          <span v-if="markmoney">积分抵扣{{this.$route.query.val}}元</span>
          <span v-if="!markmoney"></span>
          <img src="../../static/image/arr.png"
               style="vertical-align: middle;margin-top:-2px;margin-right:-2px;width: 0.14rem;
                    height: 0.24rem;"></img>
        </div>
      </li>
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
      <span style="color:#999;font-size:11px;">请于付款后
        <span style="color:red">{{h}}分钟</span>离场，超时将加收停车费</span>
    </div>
    <div class="paytoot"
         @click="rightnow">立即付款</div>
    <!-- <router-view></router-view> -->
    <!-- <div class="fullscreen"
         v-if="fullscreen">
      <p @click="retu">
        111111111111111111
      </p>
    </div> -->
  </div>

</template>
<script>
import axios from 'axios';
import Qs from 'qs'
import { MessageBox, Indicator } from 'mint-ui';
import { chosecar } from './api/api.js'
export default {
  data () {
    return {
      markmoney: false,
      shenum: 0,
      a: '',
      b: '',
      c: '',
      d: '',
      e: '',
      f: '',
      g: '',
      h: '',
      fullscreen: false,
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
      moneys: '',
      isOrdered: '',
      onsale: '',
      out_trade_no: '',
      wrigh: '',
      useMark: ''
    }
  },
  mounted () {
    if (this.$route.query.val) {
      this.markmoney = true
    }
    this.a = localStorage.getItem('carnumbar')
    this.b = localStorage.getItem('longdate')
    this.c = localStorage.getItem('onsale_price')
    this.d = localStorage.getItem('paid_price')
    this.e = localStorage.getItem('paking_lot_name')
    this.f = localStorage.getItem('price')
    this.g = localStorage.getItem('startdate')
    this.h = localStorage.getItem('time_out')
    this.y = (Number(this.f) + Number(this.c)).toFixed(2)
    console.log(sessionStorage.getItem('ticknumbar1'))
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
    let that = this;
    that.$http({
      method: 'post',
      // url: 'http://192.168.2.141:2088/MarkRecords/findMark',
      url: that.newhttpUrl + '/MarkRecords/findMark',
      data: Qs.stringify({
        tel: localStorage.getItem('phone'),
        dealer: '1561430951496'
      })
    }).then(res => {
      console.log(res)
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
    duihuan () {
      this.$router.push('/shengcheng')
    },
    tica () {
      this.$router.push({ path: '/fuzhi', query: { websock: 1 } })
    },
    rightnow () {


      var data = {};
      var openid = localStorage.getItem("openid");

      if (sessionStorage.getItem('ticknumbar3') && this.$route.query.valmark) {
        data = {
          useType: 3,
          openId: openid,
          car_number: this.a,
          ip: returnCitySN.cip,
          mark: this.$route.query.valmark,
          ticketNumber: sessionStorage.getItem('ticknumbar3')
        }
      }
      if (!sessionStorage.getItem('ticknumbar3') && !this.$route.query.valmark) {
        data = {
          useType: 0,
          openId: openid,
          car_number: this.a,
          ip: returnCitySN.cip,
          mark: 0
        }
      } else {
        if (!sessionStorage.getItem('ticknumbar3')) {
          if (this.$route.query.valmark) {
            data = {
              useType: 2,
              openId: openid,
              car_number: this.a,
              ip: returnCitySN.cip,
              tel: localStorage.getItem('phone'),
              mark: this.$route.query.valmark
            }
          }
        } else {
          if (!this.$route.query.valmark) {
            data = {
              useType: 1,
              openId: openid,
              car_number: this.a,
              ip: returnCitySN.cip,
              ticketNumber: sessionStorage.getItem('ticknumbar3'),
              mark: 0
            }
          }
        }
      }
      let that = this;
      that.$http({
        method: 'post',

        url: that.newhttpUrl + '/Park/pay',
        data: Qs.stringify(data)
      }).then(message => {
        that.isOrdered = message.data.msg.isOrdered
        that.onsale = message.data.msg.onsale
        if (message.data.msg.useMark) {
          that.useMark = message.data.msg.useMark
        }
        if (message.data.resCode == 0) {

          // if (that.loack)
          // if (message.data.msg.longTime != this.y) {
          //   MessageBox('提示', '您支付时已超过临界点，请支付')
          // }
          // let p = message.data.msg.longTime
          // let p1 = message.data.msg.longTime.substring(p.length - 3, p.length - 1)
          // let p2 = message.data.msg.longTime.substring(p.length - 7, p.length - 5)
          // let p3 = message.data.msg.longTime.substring(p, p.length - 9)
          // let p1 = message.data.msg.longTime.IndexOf('分钟')
          // message.data.msg.longTime.
          // console.log(p1)
          // console.log(p2)
          // console.log(p3)

          // if (that.loack == 3) {
          //   if (that.y - that.disp != message.data.money) {
          //     MessageBox('提示', '您支付时已超过临界点，请支付')
          //     return
          //   }
          // }
          // if (that.loack == 4) {
          //   console.log(that.y * (that.disp) / 10)
          //   if (that.y * (that.disp) / 100 != message.data.money) {
          //     MessageBox('提示', '您支付时已超过临界点，请支付')
          //     return
          //   }
          // }
          that.moneys = message.data.money
          that.appId = message.data.appId;
          that.timeStamp = message.data.timeStamp;
          that.nonceStr = message.data.nonceStr;
          that.package = message.data.package;
          that.signType = message.data.signType;
          that.paySign = message.data.paySign;

          that.out_trade_no = message.data.tradeNo

          if (message.data.money <= 0) {
            that.$http({
              method: 'post',

              url: that.newhttpUrl + '/Park/recvStatus',
              data: Qs.stringify({
                pay_status: 'get_brand_wcpay_request:ok',
                pay_time: that.getFormatDate(),
                carnumber: localStorage.getItem("carnumbar"),
                ticketNumber: sessionStorage.getItem('ticknumbar3') ? sessionStorage.getItem('ticknumbar3') : null,
                mark: that.useMark ? that.useMark : 0,
                openId: localStorage.getItem("openid"),
                price: 0,
                longdate: that.b,
                isOrdered: that.isOrdered,
                onsale_price: that.onsale
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
                let parm = {
                  carNumber: localStorage.getItem("carnumbar")
                }
                console.log(parm)
                chosecar(parm).then(res => {
                  console.log(res)
                  // 需要修改
                  if (res.data.resCode == 3 || res.data.resCode == 1) {
                    that.$router.replace('/return')

                  } else {

                    that.$router.replace('/homePage')

                  }
                })
                // window.location.href = 'http://cloud.parkingmore.cn/mp/total/indexyuyue.html?#/return';

              })

            })
          }
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
                MessageBox('提示', '支付失败')
                // that.$route.query.val = ''
                that.markmoney = false
                return
              },
              complete (res) {
                // that.licektl()
              },
            })
          })
        } else if (message.data.resCode == 1) {
          that.markmoney = false
          that.$http({
            method: 'post',

            url: that.newhttpUrl + '/Park/recvStatus',
            data: Qs.stringify({
              pay_status: 'get_brand_wcpay_request:ok',
              pay_time: that.getFormatDate(),
              carnumber: localStorage.getItem("carnumbar"),
              ticketNumber: sessionStorage.getItem('ticknumbar3') ? sessionStorage.getItem('ticknumbar3') : null,
              mark: that.useMark ? that.useMark : 0,
              openId: localStorage.getItem("openid"),
              price: 0,
              longdate: that.b,
              isOrdered: that.isOrdered,
              onsale_price: that.onsale
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
              let parm = {
                carNumber: localStorage.getItem("carnumbar")
              }
              console.log(parm)
              chosecar(parm).then(res => {
                console.log(res)
                // 需要修改
                if (res.data.resCode == 3 || res.data.resCode == 1) {
                  that.$router.replace('/return')


                } else {

                  that.$router.replace('/homePage')

                }
              })
              // window.location.href = 'http://cloud.parkingmore.cn/mp/total/indexyuyue.html?#/return';

            })

          })
        } else if (message.data.resCode == 2) {
          MessageBox({
            title: '提示',
            message: message.data.result,
            closeOnClickModal: false
          }).then(action => {
            // that.$router.push({ path: '/pay' })
            sessionStorage.removeItem('ticknumbar1')
            sessionStorage.removeItem('ticknumbar2')
            sessionStorage.removeItem('ticknumbar3')
          })
        } else if (message.data.resCode == 3) {
          MessageBox({
            title: '提示',
            message: '您是本车场会员，无需支付',
            closeOnClickModal: false
          }).then(action => {
            that.$router.push({ path: '/homePage' })
          })
        }



      })
      // that.$http({
      //   method: 'post',

      //   url: 'http://114.55.168.103:2088/Park/pay',
      //   data: Qs.stringify(data)
      // }).then(message => {
      //   console.log(message)
      //   if (message.data.resCode == 0) {
      //     that.moneys = message.data.money
      //     that.appId = message.data.appId;
      //     that.timeStamp = message.data.timeStamp;
      //     that.nonceStr = message.data.nonceStr;
      //     that.package = message.data.package;
      //     that.signType = message.data.signType;
      //     that.paySign = message.data.paySign;
      //     that.isOrdered = message.data.msg.isOrdered
      //     that.out_trade_no = message.data.tradeNo
      //     that.onsale = message.data.msg.onsale



      //     if (typeof WeixinJSBridge == "undefined") {
      //       if (document.addEventListener) {
      //         document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
      //       } else if (document.attachEvent) {
      //         document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
      //         document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
      //       }
      //     } else {
      //       that.onBridgeReady();

      //     }

      //   } else if (message.data.resCode == 1) {
      //     if (that.shenum == undefined) {
      //       that.shenum = 0
      //     }
      //     that.$http({
      //       method: 'post',

      //       url: 'http://114.55.168.103:2088/Park/recvStatus',
      //       data: Qs.stringify({
      //         pay_status: 'get_brand_wcpay_request:ok',
      //         pay_time: that.getFormatDate(),
      //         carnumber: localStorage.getItem("carnumbar"),
      //         ticketNumber: sessionStorage.getItem('ticknumbar3') ? sessionStorage.getItem('ticknumbar3') : null,
      //         mark: that.shenum,
      //         openId: localStorage.getItem("openid"),

      //         price: 0,
      //         longdate: that.b,


      //         isOrdered: that.isOrdered,
      //         onsale_price: that.onsale,
      //         out_trade_no: that.out_trade_no,

      //       })
      //     }).then(res => {
      //       MessageBox({
      //         title: '提示',
      //         message: '本次停车免费',
      //         closeOnClickModal: false
      //       }).then(action => {
      //         axios({
      //           method: 'post',
      //           url: that.httpUrl + 'app/reserve/selectResId',
      //           data: Qs.stringify({
      //             resId: that.$route.query.orderg
      //           })
      //         }).then(res => {
      //           console.log(res)
      //         })
      //         that.$router.push({ path: '/homePage' })
      //       })

      //     })
      //   } else if (message.data.resCode == 2) {
      //     MessageBox({
      //       title: '提示',
      //       message: '本次停车免费',
      //       closeOnClickModal: false
      //     }).then(action => {
      //       that.$router.push({ path: '/homePage' })
      //       sessionStorage.removeItem('ticknumbar1')
      //       sessionStorage.removeItem('ticknumbar2')
      //       sessionStorage.removeItem('ticknumbar3')
      //     })
      //   }
      // })
    },
    deduction () {
      this.$router.push({ path: '/shengcheng', query: { recognition: 5 } })
    },
    licektl () {
      let that = this;
      that.$http({
        method: 'post',
        url: that.newhttpUrl + '/Park/queryInfo',
        data: Qs.stringify({
          car_number: localStorage.getItem('carnumbar')
        })
      }).then(message => {
        console.log(message)
        if (message.data.resCode == "1" || message.data.resCode == 2) {

          localStorage.setItem('longdate', message.data.longdate)
          localStorage.setItem('onsale_price', message.data.onsale_price)
          localStorage.setItem('paid_price', message.data.paid_price)
          localStorage.setItem('paking_lot_name', message.data.paking_lot_name)
          localStorage.setItem('price', message.data.price)
          localStorage.setItem('startdate', message.data.startdate)
          localStorage.setItem('time_out', message.data.time_out)
          window.location.reload()
          // that.$router.push({ path: '/pay', query: { vals: message.data, orderg: that.$route.query.orderid } })

        }
      })

    },
    polling () {
      // let that = this;
      // alert(that.getFormatDate())
      // alert(localStorage.getItem("carnumber"))
      // alert(sessionStorage.getItem('ticknumbar3') ? sessionStorage.getItem('ticknumbar3') : null)
      // alert(that.shenum)

      // alert(localStorage.getItem("openid"))
      // alert(that.moneys)
      // alert(that.b)
      // alert(that.isOrdered)
      // alert(that.onsale)
      // alert(that.out_trade_no)

      // alert(sessionStorage.getItem('ticknumbar3'))
      this.$http({
        method: 'post',
        // url:'http://39.104.113.112:2088/Park/recvStatus',
        url: this.newhttpUrl + '/Park/recvStatus',
        data: Qs.stringify({
          pay_status: 'get_brand_wcpay_request:ok',
          pay_time: this.getFormatDate(),
          carnumber: localStorage.getItem("carnumbar"),
          ticketNumber: sessionStorage.getItem('ticknumbar3') ? sessionStorage.getItem('ticknumbar3') : null,
          mark: this.useMark ? this.useMark : 0,
          openId: localStorage.getItem("openid"),
          price: this.moneys,
          longdate: this.b,
          isOrdered: this.isOrdered,
          onsale_price: this.onsale,
          out_trade_no: this.out_trade_no,
        })
      }).then(res => {


        axios({
          method: 'post',
          url: this.httpUrl + 'app/reserve/selectResId',
          data: Qs.stringify({
            resId: this.$route.query.orderg
          })
        }).then(res => {
          console.log(res)
        })
        // this.fullscreen = true


        Indicator.close()
        // this.$router.replace('/return')
        let parm = {
          carNumber: localStorage.getItem("carnumbar")
        }
        //  alert(localStorage.getItem("carnumbar"))
        chosecar(parm).then(res => {
          console.log(res)
          // 需要修改
          // alert(JSON.stringify(res))
          if (res.data.resCode == 3 || res.data.resCode == 1) {

            // this.$router.replace('/return')
            window.location.href = 'http://cloud.parkingmore.cn/mp/total/indexyuyue.html?#/return'
            // window.location.href = 'http://cloud.parkingmore.cn/mp/total/indexyuyue.html?#/return'
            // alert(1)
          } else {

            this.$router.replace('/homePage')

          }
        })
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
      // alert(that.appId)
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
            that.polling();

            //    alert(res.err_msg)
            //     alert(that.getFormatDate())
            //    alert(localStorage.getItem("carnumber"))
            //     alert(sessionStorage.getItem('ticknumbar3')?sessionStorage.getItem('ticknumbar3'):null)
            //     alert(that.shenum)
            //     alert(localStorage.getItem("openid"))
            //     alert(that.y)



          } else {
            MessageBox('提示', '支付失败')
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
.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #efefef;
  z-index: 55;
}
</style>


