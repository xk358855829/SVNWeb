<style>
</style>

<template>
  <div class="box"
       style=""
       ref="wrapper">

    <!-- <scroller :on-infinite="infinite"
              :on-refresh="refresh"
              ref="my_scroller"> -->
    <!-- <div style="height: 1px;"></div> -->
    <!-- <mt-loadmore :top-method="loadTop"
                 ref="loadmore"
                 style=""> -->
    <ul style="padding-top:0.2rem;background:#efefef;"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="50"
        class="lpcile">
      <li v-for="item in tac"
          v-if="!imgl">
        <div class="tan">
          <span>订单编号：{{item.number}}</span>
          <span>{{item.starTime}}</span>
        </div>
        <p class="rolo"></p>
        <div class="tan"
             @click="details(item.number)">
          <span>{{item.cname}}</span>
          <span>{{item.country}}</span>
        </div>
        <div class="tan"
             @click="details(item.number)">
          <span>￥{{item.money}}</span>
          <!--    <span v-if="item.state=='0'"
                :class="{active:item.state=='0'}">{{item.state | Chose}}</span> -->
          <span v-if="item.state=='1'"
                :class="{actives:item.state=='1'}">{{item.state | Chose}}</span>
          <span v-if="item.state=='2'"
                :class="{actives:item.state=='2'}">{{item.state | Chose}}</span>
          <span v-if="item.state=='3'"
                :class="{actives:item.state=='3'}">{{item.state | Chose}}</span>
          <span v-if="item.state=='4'"
                :class="{actives:item.state=='4'}">{{item.state | Chose}}</span>
          <span v-if="item.state=='5'"
                :class="{activesss:item.state=='5'}">{{item.state | Chose}}</span>
          <span v-if="item.state=='7'"
                :class="{actives:item.state=='7'}">{{item.state | Chose}}</span>

        </div>
        <p class="rolo"></p>
        <div v-show="show"
             class="tans">
          <div v-if="item.state=='0'"
               style="color:#fff;background:rgb(255,168,0)"
               @click="unpaid(item)">待支付</div>
          <div v-if="item.state=='1'"
               style="color:#fff;background:rgb(255,168,0)"
               @click="abc(item.number)">存钥匙</div>
          <div v-if="item.state=='2'"
               style="color:#fff;background:rgb(255,168,0)"
               @click="">待洗车</div>
          <div v-if="item.state=='3'"
               style="color:#fff;background:rgb(255,168,0)"
               @click="">洗车中</div>
          <div v-if="item.state=='4'"
               style="color:#fff;background:rgb(255,168,0)"
               @click="tack(item.number)">待取件</div>
          <div v-if="item.state=='5'"
               style="color:#fff;background:rgb(255,168,0)">已完成</div>
          <!-- <div v-if="item.state=='6'"
               style="color:#fff;background:rgb(255,168,0)">已完成</div> -->
          <div v-if="item.state=='7'"
               style="color:#fff;background:rgb(108,108,108)">订单已取消</div>
          <div v-if="item.state=='1'||item.state=='0'"
               style="color:rgb(247,92,76);border:1px solid rgb(247,92,76);"
               @click="monelis(item.number)">取消订单</div>
          <div v-if="item.state=='7'||item.state=='5'"
               style="color:#fff;background:red"
               @click="delorder(item.number)">删除订单</div>
        </div>
      </li>
      <li class="more_loading"
          style="background:#e9e9e9;"
          v-show="!queryLoading">
        <!-- <mt-spinner type="snake"
                    color="#00ccff"
                    :size="20"
                    style=""
                    v-show="loading&&!allLoaded"></mt-spinner> -->
        <span v-show="allLoaded"
              style="text-align:center;">已全部加载</span>
      </li>
    </ul>

    <!-- </mt-loadmore> -->
    <!-- </scroller> -->
    <div style="width:100%;margin-top:2rem;"
         v-if="imgl">
      <p style="width:2.24rem;height:1.4rem;margin:0 auto;">
        <img src="../../../static/image/kbym.png"
             style="width:100%;height:100%;"
             alt="">
        <p style="color:#787878;text-align:center;padding:10px 0;">暂无记录</p>
      </p>
    </div>
    <!-- <pages :list="tac" :fet="fet" @imgs="imgt" @parkimg="search"> -->

    <!-- </pages> -->
  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
import { detailP, detailS, soayisc, cancel, delOrder, soayiscSave, orderplan } from '../api/api.js'
import { Chose } from '../api/filter.js'
import { mapMutations } from 'vuex'
import { MessageBox, Indicator, Loadmore, Spinner, InfiniteScroll } from 'mint-ui'
export default {
  name: 'detail',
  data () {
    return {
      wrapperHeight: 0,
      tac: [],
      bottomStatus: '',
      fet: {
        Page: 0,

        nodata: false
      },
      queryLoading: false,
      allLoaded: false,
      pages: 5,
      totalnum: '',
      pagenum: '',
      imgl: false,
      morloading: false,
      loadingbox: false,
      loading: false,
      rg: '加载完毕',
      olsei: '',
      show: true,
      appId: '',
      timeStamp: '',
      Obj: {},
      nonceStr: '',
      package: '',
      signType: '',
      noMore: false,
      paySign: '',
      mtools: true,
      appId: '',
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: '',
      paySign: '',
      sstarTime: '',
      snumber: '',
      smoney: '',
      scountry: '',
      scname: ''
    }
  },
  watch: {

  },
  methods: {
    loadMore () {
      console.log(1)
      this.noMore = false;

      this.search()

    },
    // infinite (done) {
    //   this.fet.Page++    //每当向上滑动的时候就让页数加1
    //   this.search(this.fet.Page)
    // },
    // refresh (done) { //这是向下滑动的时候请求最新的数据
    //   this.fet.Page = 1
    //   this.search(this.fet.Page)
    // },
    // loadBottom () {
    //   console.log(this.tac.length)
    //   if (this.tac.length > 5) {
    //     this.fet.Page++    //每当向上滑动的时候就让页数加1
    //     this.search(this.fet.Page)
    //   }
    // },
    loadTop () { //这是向下滑动的时候请求最新的数据






      this.search(1)
      setTimeout(() => {
        this.$refs.loadmore.onTopLoaded();
      }, 500);

    },
    ...mapMutations(['USEOBJ']),
    format (shijianchuo) {
      var time = new Date(shijianchuo);
      var y = time.getFullYear();
      var m = time.getMonth() + 1;
      var d = time.getDate();
      var h = time.getHours();
      var mm = time.getMinutes();
      var s = time.getSeconds();
      return y + '-' + this.add0(m) + '-' + this.add0(d) + ' ' + this.add0(h) + ':' + this.add0(mm) + ':' + this.add0(s);
    },
    add0 (m) { return m < 10 ? '0' + m : m },
    details (val) {
      let that = this;
      detailS({ number: val }).then(res => {
        if (res.status == 200) {
          that.$router.push({ path: '/order' })
          localStorage.setItem('tabs', JSON.stringify(res.data.result))
          that.USEOBJ(res.data.result)
        }
        console.log(res)
      })
    },
    async unpaid (val) {
      console.log(val)
      this.sstarTime = val.starTime
      this.snumber = val.number
      this.smoney = val.money
      this.scountry = val.country
      this.scname = val.cname
      let data = {
        money: val.money,
        weiTrade: val.number,
        openId: val.openid,
        ip: returnCitySN.cip
      }
      let message = await orderplan(data)
      let that = this;
      if (message.data.resCode == 'OK') {

        that.appId = message.data.appId;
        that.timeStamp = message.data.timeStamp;
        that.nonceStr = message.data.nonceStr;
        that.package = message.data.package;
        that.signType = message.data.signType;
        that.paySign = message.data.paySign;


        if (typeof WeixinJSBridge == "undefined") {
          if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
          } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
          }
        } else {
          that.onBridgeReady();

        }

      }
    },
    onBridgeReady () {
      let that = this;
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
          if (res.err_msg == "get_brand_wcpay_request:ok") {


            that.$http({
              method: 'post',
              url: that.oldhttpUrl + '/users/queryByState',
              data: Qs.stringify({
                paystatus: res.err_msg,
                paytime: that.sstarTime,
                carnumber: that.scountry,
                jixing: that.scname,
                number: that.snumber,
                openId: localStorage.getItem("openid"),
                money: that.smoney
              })
            }).then(res => {
              MessageBox({
                title: '提示',
                message: '支付成功',
                closeOnClickModal: false,
              }).then(action => {
                // that.mastepay = true
                // that.$router.push({ path: '/home' })
                window.location.reload()
              })

            })
          }
        });
    },
    delorder (val) {
      console.log(val)
      MessageBox.confirm('', {
        message: '是否取消订单',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        closeOnClickModal: false
      }).then(async (action) => {
        if (action == 'confirm') { //确认的回调
          console.log(val)
          let data = {
            number: val
          }
          console.log(data)
          let res = await delOrder(data)
          if (res.data.resCode == 0) {
            MessageBox('提示', '删除订单成功')
            window.location.reload();
          } else {
            MessageBox('提示', '删除订单失败')
          }
        }

      })
    },
    monelis (num) {
      MessageBox.confirm('', {
        message: '是否取消订单',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        closeOnClickModal: false
      }).then(action => {
        if (action == 'confirm') { //确认的回调
          let data = {
            number: num
          }
          cancel(data).then(res => {
            if (res.data.resCode == 0) {
              MessageBox('提示', '取消成功')
              window.location.reload();
            } else {
              MessageBox('提示', '取消订单失败')
            }
          })
        }

      })

    },
    tack (num) {
      console.log(num)
      let that = this;
      console.log(window.location.href.split('#')[0])
      // Wxin({url:window.location.href.split('#')[0]}).then({})
      this.$http.get(
        `${that.oldhttpUrl}/scan/getJSSDKTicket?url=${window.location.href.split('#')[0]}`).then(message => {
          wx.config({
            debug: false,
            appId: message.data.appid,
            timestamp: message.data.timestamp,
            nonceStr: message.data.nonceStr,
            signature: message.data.signature, // 必填，签名，见附录1
            jsApiList: [message.data.jsApiList]
          })
          wx.ready(function () {
            wx.scanQRCode({
              needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
              scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
              success: function (res) {
                let result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                let deviceId = result.substring(result.indexOf('state=') + 6, result.indexOf('#'));
                Indicator.open('Loading...');
                // alert(deviceId)
                // let deviceId='8cf7106060b0'
                let pa = {
                  number: num,
                  deviceId: deviceId

                }
                //      let pa={
                //  number:"751561022955722",
                //  deviceId:"8cf710609228"

                // }
                console.log(pa);
                soayiscSave(pa).then(res => {
                  console.log(res);
                  if (res.data.resCode == "0") {
                    Indicator.close();
                    MessageBox({
                      title: '提示',
                      message: '开柜成功，请取出钥匙',
                      closeOnClickModal: false,
                    }).then(action => {
                      that.$router.push('/home')
                    })
                  } else {
                    Indicator.close();
                    MessageBox({
                      title: '提示',
                      message: '开柜失败，请重试',
                      closeOnClickModal: false,
                    }).then(action => {
                      that.$router.push('/home')
                    })
                  }
                })

              }
            });
          })
        })
    },

    abc (num) {
      console.log(num)
      let that = this;
      console.log(window.location.href.split('#')[0])
      // Wxin({url:window.location.href.split('#')[0]}).then({})
      this.$http.get(
        `${that.oldhttpUrl}/scan/getJSSDKTicket?url=${window.location.href.split('#')[0]}`).then(message => {
          wx.config({
            debug: false,
            appId: message.data.appid,
            timestamp: message.data.timestamp,
            nonceStr: message.data.nonceStr,
            signature: message.data.signature, // 必填，签名，见附录1
            jsApiList: [message.data.jsApiList]
          })
          wx.ready(function () {
            wx.scanQRCode({
              needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
              scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
              success: function (res) {
                let result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                let deviceId = result.substring(result.indexOf('state=') + 6, result.indexOf('#'));
                alert(deviceId)
                alert(num)
                Indicator.open('Loading...');
                // let deviceId='8cf7106060b0'
                let pa = {
                  number: num,
                  deviceId: deviceId

                }
                console.log(pa)
                soayisc(pa).then(res => {
                  console.log(res);
                  if (res.data.resCode == "0") {
                    Indicator.close();
                    MessageBox({
                      title: '提示',
                      message: '开柜成功',
                      closeOnClickModal: false,
                    }).then(action => {
                      that.$router.push('/home')
                    })
                  } else {
                    Indicator.close();
                    MessageBox({
                      title: '提示',
                      message: res.data.result,
                      closeOnClickModal: false,
                    }).then(action => {
                      that.$router.push('/home')
                    })
                  }
                })

              }
            });
          })
        })
    },
    // imgt(val){
    // 	this.fet.Page=val
    // 	this.search()
    // },
    search () {

      if (this.allLoaded) {
        this.loading = true;
        return;
      }

      if (this.queryLoading) {
        return;
      }
      this.loading = !this.queryLoading
      this.fet.Page++
      let data = {
        phone: localStorage.getItem('phone'),
        // phone: '15267084796',
        Page: this.fet.Page,
        PageSize: 5
      }
      console.log(data)
      detailP(data).then(res => {
        console.log(res)
        if (res.status == 200) {
          // if (res.data.result.length != 0) {

          // this.tac = res.data.result
          console.log(res.data.count)
          console.log(this.fet.Page * 5)
          if (res.data.result.length) {
            this.tac = this.tac.concat(res.data.result)
            if (res.data.count <= this.fet.Page * 5) {
              this.allLoaded = true
              // this.loadingbox = false;
              // this.mtools = true
              // console.log(this.loading);

              // this.noMore = true
            } else {
              this.allLoaded = false
              this.loading = true
              // console.log(this.loading);
              // this.loading = true
              // this.mtools = false
              // this.noMore = true

            }
            this.loading = this.allLoaded
          } else {
            this.imgl = true
            this.queryLoading = true
          }


          // this.tac = this.tac.concat(res.data.result)
          // if (res.data.count < this.fet.Page * 5) {

          // } else {
          //   // this.loading = true;
          //   // this.morloading = true
          // }

          // this.totalnum = res.data.count
          // this.pagenum = Math.ceil(this.totalnum / 5)

          // if (this.fet.Page == 1 && res.data.result.length <= 5) {
          //   this.tac = _list
          //   this.allLoaded = false
          // } else {
          //   console.log(908)
          //   if (this.pagenum == this.fet.Page) {
          //     this.fet.nodata = true;
          //     this.allLoaded = true
          //   }
          //   this.tac = this.tac.concat(_list)
          //   // }
          // } else {
          //   console.log("0222")
          //   this.imgl = true
          // }

        } else {
          // this.$refs.loadmore.onTopLoaded();
        }
      })

    }



  },
  mounted: function () {
    // this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    // :style="{ height: wrapperHeight + 'px' }"
    // this.search(1)
  }
}
	// oOKex1Ow5nB_qymzrzj4L7Gm7snU
	// localStorage.getItem('venid')
	// localStorage.getItem('venid')
</script>
<style lang="scss" scoped>
@import '@/style/mixin.scss';
li {
  width: 92%;
  margin: 0 auto;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 0.4rem;
}
.rolo {
  border-bottom: 1px solid rgb(239, 239, 239) !important;
}
li .tan {
  display: flex;
  justify-content: space-between;
}
li .tan:nth-child(1) {
  @include wh(94%, 0.8rem);
  line-height: 0.8rem;
  @include sc(12px, rgb(144, 144, 144));
  font-family: 'PingFang-SC-Regular';
  margin: 0 auto;
}
li .tan:nth-of-type(2) {
  @include wh(94%, 0.74rem);
  @include sc(12px, rgb(144, 144, 144));
  font-family: 'PingFang-SC-Regular';
  margin: 0 auto;
  margin-top: 0.42rem;
}
li .tan:nth-of-type(2) span {
  font-size: 16px;
  font-family: 'PingFang-SC-Regular';
  color: rgb(48, 48, 48);
  padding: 0 !important;
}
li .tan:nth-of-type(3) {
  @include wh(94%, 0.48rem);
  @include sc(12px, rgb(144, 144, 144));
  font-family: 'PingFang-SC-Regular';
  margin: 0 auto;
}
li .tan:nth-of-type(3) span {
  font-size: 16px;
  font-family: 'PingFang-SC-Regular';
  color: rgb(246, 139, 28);
  padding: 0 !important;
}
li .tans {
  @include wh(94%, 1.18rem);
}
li .tans div {
  @include wh(1.6rem, 0.56rem);
  border-radius: 5px;
  text-align: center;
  line-height: 0.56rem;
  margin-top: 0.3rem;
  float: right;
  margin-bottom: 0.3rem;
}
li .tans div:nth-child(2) {
  margin-right: 0.16rem;
}
li:nth-last-child(2) {
  margin-bottom: 0;
}
.active {
  color: rgb(255, 65, 54) !important;
}
.activess {
  color: rgb(139, 139, 139) !important;
}
.activesss {
  color: rgb(46, 206, 64) !important;
}
.lpcile li:nth-last-child() {
  margin-bottom: 0;
}
ul li:last-of-type {
  margin-bottom: 0;
  text-align: center;
}
.loading-box {
  width: 15%;
  margin: 0 auto;
}
.more_loading {
  margin: 0 auto;
  padding-top: 0.2rem;
}
</style>
