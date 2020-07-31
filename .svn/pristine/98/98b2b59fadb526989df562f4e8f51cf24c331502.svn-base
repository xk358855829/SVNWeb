<template>
  <div style="width:100%;height:100%;background:#fff;">
    <div class="table"
         :style="{backgroundImage:'url('+img+')',backgroundSize:'100% 100%'}">
      <p style="font-size:20px">{{e}}</p>
      <p style="font-size:25px;color:#f68b1c;">{{y>0?y:0}}元</p>
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
        <div style="sanli">入场时间</div>
        <div style="margin-right:4%;">{{g}}</div>
      </li>
      <li>
        <div style="sanli">停车时长</div>
        <div style="margin-right:4%;">{{b}}</div>
      </li>
      <li>
        <div style="sanli">停车单价</div>
        <div style="margin-right:4%;">{{k}}元/{{i?i:'小时'}}</div>
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
               style="vertical-align: middle;margin-top:-2px;margin-right:-2px;width: 0.07rem;
    height: 0.12rem;"></img>
        </div>
      </li>
      <li class="meiyong"
          @click="deduction">
        <div style="sanli">积分抵扣</div>
        <div style="margin-right: 4%;">
          <span v-if="markmoney">积分抵扣{{this.$route.query.val}}元</span>
          <span v-if="!markmoney"></span>
          <img src="../../static/image/arr.png"
               style="vertical-align: middle;margin-top:-2px;margin-right:-2px;width: 0.07rem;
                    height: 0.12rem;"></img>
        </div>

        <!-- <div style="margin-right:4%;">
                    {{numji}}
                </div> -->
      </li>
      <!-- <li class="meiyong" style="height:0.5rem;line-height:0.5rem;">
                <div>
                <p style="width: 25px;height: 25px;float: right"><img src="../../static/image/jjj.png" alt="" style="width: 100%;height: 100%;vertical-align: middle" @click="jian" ></p>
                </div>
                <input type="text" v-model="shenum" class="num" readonly="readonly" style="text-align: center;border: none;outline: none;background: #fff;">
                <div>
                <p style="width: 25px;height: 25px;"><img src="../../static/image/kkk.png" alt="" style="width: 100%;height: 100%;vertical-align: middle" @click="addf"></p>
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
    <router-view></router-view>
  </div>

</template>
<script>
import axios from 'axios';
import Qs from 'qs'
import { MessageBox, Indicator } from 'mint-ui';
export default {
  data () {
    return {
      trade_no: '',
      markmoney: false,
      a: '',
      b: '',
      c: '',
      d: '',
      e: '',
      f: '',
      g: '',
      h: '',
      i: '',
      y: '',
      img: '',
      k: '',
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
      isOrdered: '',
      longTime: '',
      onsale: '',
      trade_no: '',
      useMark: ''
    }
  },
  watch: {

  },
  // beforeRouteLeave (to, from, next) {
  //   console.log(to)
  //   console.log(from)
  //   next()
  // },
  mounted () {
    // window.history.pushState(null, null, "#");
    // window.addEventListener('popstate', function (e) {
    //   window.history.pushState(null, null, "#");
    //   console.log(90)
    // }, false)
    // let arr=JSON.parse(JSON.stringify(this.$route.query.vals))
    // console.log(JSON.parse(JSON.stringify(this.$route.query.vals)))
    // document.title=this.$route.meta.title;
    if (this.$route.query.val) {
      this.markmoney = true
    }
    this.a = localStorage.getItem('carnumber')
    this.b = localStorage.getItem('longdate')
    console.log(this.b)
    this.c = localStorage.getItem('onsale_price')
    this.d = localStorage.getItem('paid_price')
    this.e = localStorage.getItem('paking_lot_name')
    this.f = localStorage.getItem('price')
    this.g = localStorage.getItem('startdate')
    this.h = localStorage.getItem('time_out')
    this.img = localStorage.getItem('img')
    this.k = localStorage.getItem('HPrice')
    this.i = localStorage.getItem("priceUnit");
    this.y = (Number(this.f) + Number(this.c))

    console.log(sessionStorage.getItem('ticknumbar1'))
    console.log(sessionStorage.getItem('ticknumbar2'))
    console.log(sessionStorage.getItem('ticknumbar3'))
    if (sessionStorage.getItem('ticknumbar1') && sessionStorage.getItem('ticknumbar2') == 0) {
      this.loack = 2
      this.disp = sessionStorage.getItem('ticknumbar1')
    } else if (sessionStorage.getItem('ticknumbar4')) {
      this.loack = 4
      this.disp = (sessionStorage.getItem('ticknumbar4') / 10)
    } else {
      this.loack = 3
      this.disp = sessionStorage.getItem('ticknumbar2')
      if (sessionStorage.getItem('ticknumbar2')) {

      } else {
        this.loack = 1
      }
      console.log(this.disp)
      // this.y = (Number(this.f) - Number(this.disp)).toFixed(2)
      console.log(this.y)
    }

    // if (this.$route.query.val) {
    //   this.y = this.y - Number((this.$route.query.val) / 100)
    // }
    console.log(this.y)
    //  let that=this;
    // that.$http({
    //     method:'post',
    //     url:'http://39.104.113.112:2088/MarkRecords/findMark',
    //     data:Qs.stringify({
    //         tel:'localStorage.getItem('tel')'
    //     })
    // }).then(res=>{
    //     if(res.data.resCode==0){
    //         that.numji=res.data.result
    //     }else{
    //         that.numji=0
    //     }
    // }).catch(err=>{
    //      that.numji=0
    // })
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
    deduction () {
      this.$router.push({ path: '/shengcheng', query: { recognition: 5 } })
    },
    // addf(){


    //     if(this.numji==''){
    //         console.log(98)
    //     }else{

    //         if(this.shenum>this.numji-100){
    //             MessageBox('提示','积分不足')
    //             return false

    //         }else{
    //             this.shenum=this.shenum+=100
    //             if(this.y<1){
    //                 this.shenum=this.shenum-100
    //                 MessageBox('提示','已抵扣实付金额')
    //                 return false
    //             }else{
    //                 this.y=this.y-1

    //             }
    //         } 


    //     }

    // },
    // jian(){
    //     console.log(this.shenum)
    //     if(this.shenum<=0){

    //     }else{
    //         this.shenum=this.shenum-=100

    //             this.y=this.y+1

    //     }
    // },
    duihuan () {
      this.$router.push('/shengcheng')
    },
    tica () {
      this.$router.push({ path: '/discount', query: { num: 6, val: 8 } })
    },

    rightnow () {
      // /Park/pay
      console.log(sessionStorage.getItem('ticknumbar3'))
      var data = {};
      var openid = this.openid;
      //    var openid= 'oOKex1Ow5nB_qymzrzj4L7Gm7snU'

      if (!sessionStorage.getItem('ticknumbar3') && !this.$route.query.valmark) {
        data = {
          useType: 0,
          openId: openid,
          car_number: this.a,
          ip: returnCitySN.cip,
          mark: 0,
        }
      } else {

        if (!sessionStorage.getItem('ticknumbar3')) {

          if (this.$route.query.valmark != 0) {

            data = {
              useType: 2,
              openId: openid,
              car_number: this.a,
              ip: returnCitySN.cip,
              mark: this.$route.query.valmark,
              tel: localStorage.getItem('phone')
            }
          } else {
            data = {
              useType: 0,
              openId: openid,
              car_number: this.a,
              ip: returnCitySN.cip,
              mark: 0,
            }

          }
        } else {

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
      // alert(data.useType);
      let that = this;
      that.$http({
        method: 'post',
        url: `${that.httpUrl}/Park/pay`,
        data: Qs.stringify(data)
      }).then(message => {
        console.log(message)
        // if (that.loack == 3) {
        //   if (that.y - that.disp != message.data.money) {
        //     MessageBox('提示', '您支付时已超过临界点，请支付')
        //     return
        //   }
        // }
        // if (that.loack == 4) {
        //   if (that.y * (that.disp) / 100 != message.data.money) {
        //     MessageBox('提示', '您支付时已超过临界点，请支付')
        //     return
        //   }
        // }
        // if (message.data.money != this.y) {
        //   MessageBox('提示', '您支付时已超过临界点，请支付')
        // }
        if (message.data.msg.useMark) {
          that.useMark = message.data.msg.useMark
        }
        if (message.data.money) {
          that.moneys = message.data.money.toFixed(2)
        }

        console.log(that.moneys)
        that.isOrdered = message.data.msg.isOrdered
        that.longTime = message.data.msg.longTime
        that.onsale = message.data.msg.onsale
        if (message.data.resCode == 0) {
          if (message.data.money <= 0) {
            that.$http({
              method: 'post',
              url: `${that.httpUrl}/Park/recvStatus`,
              data: Qs.stringify({
                pay_status: 'get_brand_wcpay_request:ok',
                pay_time: that.getFormatDate(),
                carnumber: localStorage.getItem("carnumber"),
                ticketNumber: sessionStorage.getItem('ticknumbar3') ? sessionStorage.getItem('ticknumbar3') : null,
                mark: that.useMark ? that.useMark : 0,
                openId: localStorage.getItem("openid"),
                // openId:'oOKex1Ow5nB_qymzrzj4L7Gm7snU',
                price: 0,
                longdate: that.b,
                isOrdered: that.isOrdered,
                onsale_price: that.onsale,
                // out_trade_no: that.trade_no,

              })
            }).then(res => {
              MessageBox({
                title: '提示',
                message: '本次停车免费',
                closeOnClickModal: false
              }).then(action => {
                that.$router.push({ path: '/list' })
              })
            })
          }
          that.appId = message.data.appId;
          that.timeStamp = message.data.timeStamp;
          that.nonceStr = message.data.nonceStr;
          that.package = message.data.package;
          that.signType = message.data.signType;
          that.paySign = message.data.paySign;
          that.trade_no = message.data.tradeNo
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
                // this.$route.query.val = ''
                this.markmoney = false
                MessageBox('提示', '支付失败')
                return
              },
              complete (res) {
                // that.licektl()
              },
            })
          })

        } else if (message.data.resCode == 2) {
          that.markmoney = false
          MessageBox({
            title: '提示',
            message: message.data.result,
            closeOnClickModal: false
          }).then(action => {
            that.$router.push({ path: '/pay' })
            sessionStorage.removeItem('ticknumbar1')
            sessionStorage.removeItem('ticknumbar2')
            sessionStorage.removeItem('ticknumbar3')
          })
        } else if (message.data.resCode == 1) {
          that.$http({
            method: 'post',
            url: `${that.httpUrl}/Park/recvStatus`,
            data: Qs.stringify({
              pay_status: 'get_brand_wcpay_request:ok',
              pay_time: that.getFormatDate(),
              carnumber: localStorage.getItem("carnumber"),
              ticketNumber: sessionStorage.getItem('ticknumbar3') ? sessionStorage.getItem('ticknumbar3') : null,
              mark: that.useMark ? that.useMark : 0,
              openId: localStorage.getItem("openid"),
              // openId:'oOKex1Ow5nB_qymzrzj4L7Gm7snU',
              price: 0,
              longdate: that.b,
              isOrdered: that.isOrdered,
              onsale_price: that.onsale,
              // out_trade_no: that.trade_no,

            })
          }).then(res => {
            MessageBox({
              title: '提示',
              message: '本次停车免费',
              closeOnClickModal: false
            }).then(action => {
              that.$router.push({ path: '/list' })
            })
          })
        }


      })
    },
    licektl () {
      let data = {
        carNumber: localStorage.getItem('carnumber')
      }
      console.log(data);
      this.$http({
        method: 'post',
        url: this.oldurl + '/web/parkingPay/charging',
        data: Qs.stringify(data)
      }).then(message => {
        if (message.data.resCode != 1) {
          console.log(message)
          localStorage.setItem('carnumber', message.data.result.carnumber)
          localStorage.setItem('longdate', message.data.result.longdate)
          localStorage.setItem('onsale_price', message.data.result.onsale_price)
          localStorage.setItem('paid_price', message.data.result.paid_price)
          localStorage.setItem('paking_lot_name', message.data.result.paking_lot_name)
          localStorage.setItem('price', message.data.result.price)
          localStorage.setItem('startdate', message.data.result.startdate)
          localStorage.setItem('time_out', message.data.result.time_out)
          localStorage.setItem('parkingId', message.data.result.parkingId)
          localStorage.setItem('HPrice', message.data.result.HPrice)
          window.location.reload()
        }
      })
    },
    polling () {
      // alert(this.useMark)



      if (!this.useMark) {
        this.useMark = 0
      }
      // alert(this.getFormatDate())
      // alert(localStorage.getItem("carnumber"))
      // alert(sessionStorage.getItem('ticknumbar3') ? sessionStorage.getItem('ticknumbar3') : null)
      // alert(this.useMark)
      // alert(localStorage.getItem("openid"))
      // alert(this.moneys)
      // alert(this.b)
      // alert(this.isOrdered)
      // alert(this.onsale)
      // alert(this.trade_no)

      this.$http({
        method: 'post',
        url: `${this.httpUrl}/Park/recvStatus`,
        data: Qs.stringify({
          pay_status: 'get_brand_wcpay_request:ok',
          pay_time: this.getFormatDate(),
          carnumber: localStorage.getItem("carnumber"),
          ticketNumber: sessionStorage.getItem('ticknumbar3') ? sessionStorage.getItem('ticknumbar3') : null,
          mark: this.useMark,
          openId: localStorage.getItem("openid"),
          price: this.moneys,
          longdate: this.b,
          isOrdered: this.isOrdered,
          onsale_price: this.onsale,
          out_trade_no: this.trade_no,


        })
      }).then(res => {
        Indicator.close();
        this.$router.replace({ path: '/return' })
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
      if (that.$route.query.valmark == undefined) {
        that.$route.query.valmark = 0
      }
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

            // alert(res.err_msg)
            // alert(that.getFormatDate())
            // alert(localStorage.getItem("carnumber"))
            // alert(sessionStorage.getItem('ticknumbar3') ? sessionStorage.getItem('ticknumbar3') : null)
            // alert(that.shenum == undefined)

            // alert(localStorage.getItem("openid"))
            // alert(that.moneys)
            // alert(that.b)
            // alert(that.isOrdered)
            // alert(that.c)
            // alert(that.$route.query.vals.outTradeNo)
            // alert(that.trade_no)
            that.$http({
              method: 'post',
              url: `${that.httpUrl}/Park/recvStatus`,
              data: Qs.stringify({
                pay_status: res.err_msg,
                pay_time: that.getFormatDate(),
                carnumber: localStorage.getItem("carnumber"),
                ticketNumber: sessionStorage.getItem('ticknumbar3') ? sessionStorage.getItem('ticknumbar3') : null,
                mark: that.useMark,
                openId: localStorage.getItem("openid"),
                price: that.moneys,
                longdate: that.b,
                isOrdered: that.isOrdered,
                onsale_price: that.onsale,
                out_trade_no: that.trade_no,


              })
            }).then(res => {
              that.$router.push({ path: '/return' })
            })
          }
        });
    }
  }
}
</script>
<style scoped>
.table {
  width: 100%;
  margin: 0 auto;
  line-height: 0.4rem;
  text-align: center;
  padding-top: 0.22rem;
  background-size: 100% 100%;
}
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
  margin: 0 auto;
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


