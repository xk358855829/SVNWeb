<template>
  <div class="homePage"
       @touchstart="_touchStart()"
       @touchmove="_touchMove()">
    <div class="logo"
         :style="{backgroundImage: 'url(' + img1 + ')' }">
      <img @click="myup()"
           id="wd"
           src="../../static/image/lpz.png" />
      <img src="../../static/image/zd.png" />
      <!-- <p>车位预约系统</p> -->
    </div>
    <div class="inputBorder">
      <img src="../../static/image/bg_2.png" />
      <!-- <router-link to='/search'> -->
      <div class="input"
           @click="parkingLot()">
        <div class="val">
          <p :style="{backgroundImage: 'url(' + img2 + ')' }">请输入目的地</p>
        </div>
        <div class="btn">
          <p>搜索</p>
        </div>
      </div>
      <!-- </router-link> -->
    </div>
    <div class="content">
      <div class="box">
        <div class="prak"
             @click="parkingLot()">
          <img src="../../static/image/parkingLot.png"
               alt="" />
          <span>找车位</span>
          <p>查看附近停车场<br />提前预定车位</p>
        </div>
        <div class="y"></div>
        <div class="prak"
             @click="saoyisao()">
          <img src="../../static/image/sys.png" />
          <span>扫码</span>
          <p>通过扫码直接停车<br />&nbsp;</p>
        </div>
      </div>
      <div class="x"></div>
      <div class="box">
        <router-link class="prak"
                     to='/orderList'>
          <img src="../../static/image/orderList.png"
               style="" />
          <span>订单</span>
          <p>查看您的所有订单<br />&nbsp;</p>
        </router-link>
        <div class="y"></div>
        <!-- <router-link class="prak" to='/logincopy'> -->
        <div class="prak"
             @click="pcli">
          <img src="../../static/image/card.png" />
          <span>洗车</span>
          <p>预约个人洗车<br />&nbsp;</p>
          <!-- </router-link> -->
        </div>
      </div>
    </div>
    <div v-if="cs==1"
         id="my"
         ref="my"
         @click="mydown()">
      <div id="myleft"
           ref="myleft"
           class="left">
        <img :src="imgMy" />
        <p>{{nickname}}</p>
        <p @click="yyjl()">
          <i><img src="../../static/image/yyjl.png" /></i>
          <span>预约记录</span>
          <i><img src="../../static/image/shangjiant.png" /></i>
        </p>
        <p @click="tcjl()">
          <i><img src="../../static/image/tcjl.png" /></i>
          <span>停车记录</span>
          <i><img src="../../static/image/shangjiant.png" /></i>
        </p>
        <p @click="cphgl()">
          <i><img src="../../static/image/cphgl.png" /></i>
          <span>车牌号管理</span>
          <i><img src="../../static/image/shangjiant.png" /></i>
        </p>
        <!--<p @click="wdqb()"><i><img src="../../static/image/wdqb.png"/></i><span>我的钱包</span><i><img src="../../static/image/shangjiant.png"/></i></p>-->
        <p @click="sz()">
          <i><img src="../../static/image/sz.png" /></i>
          <span>设置</span>
          <i><img src="../../static/image/shangjiant.png" /></i>
        </p>
      </div>
    </div>
    <div id="allmap"></div>
  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
import { Indicator, MessageBox } from 'mint-ui'
import { code, toolcode } from '../components/api/api.js'
export default {
  name: 'homePage',
  data () {
    return {
      img1: './staticyuyue/image/bg_1.png',
      img2: './static/image/ss.png',
      imgMy: '',
      nickname: '',
      cs: 0,
      startX: '',
      newlat: '',
      newlng: '',
    }
  },
  beforeRouteLeave (to, from, next) {
    console.log(to)
    console.log(from)
    if (to.name == 'login' && from.name == 'homePage') {
      next({ path: '/homePage' })
    } else if (to.name == 'detailed' && from.name == 'homePage') {
      next({ path: '/homePage' })
    } else if (to.name == 'return' && from.name == 'homePage') {
      next({ path: '/homePage' })
    } else if (to.name == 'pay' && from.name == 'homePage') {
      next({ path: '/homePage' })
    } else if (to.name == 'payyuyue' && from.name == 'homePage') {
      next({ path: '/homePage' })
    } else {
      next()
    }

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
          jsApiList: ['getLocation', 'openLocation']
        });

      })
  },
  mounted: function () {

    localStorage.removeItem('setOrder')
    this.pushHistory()
    window.addEventListener('popstate', this.backage, false);

    this.nickname = localStorage.getItem('nickname')
    this.imgMy = localStorage.getItem('headimgurl')


    let bm = new BMap.Map("allmap");

    let point = new BMap.Point(116.32715863448607, 39.990912172420714);






  },
  destroyed () {
    window.removeEventListener('popstate', this.backage, false)
  },
  methods: {
    // marsTobaidu (mars_point) {

    //   return baidu_point;
    // },
    backage (e) {
      MessageBox.confirm('', {
        message: '是否退出微信公众号',
        title: '提示',
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        closeOnClickModal: false
      }).then(action => {
        if (action == 'confirm') {
          // window.android.outSystem();
          window.WeixinJSBridge.call('closeWindow')
        } else {
          window.location.reload()
        }
      })
    },
    pushHistory () {
      var state = {
        title: "title",
        url: "#"
      };
      window.history.pushState(state, "title", "#/homePage");
    },
    herdcome (val) {
      console.log(val)


      //GCJ02 转换为 WGS84
      // wx.openLocation({
      //   // latitude: this.infow.devLatitude, // 纬度，浮点数，范围为90 ~ -90
      //   // longitude: this.infow.devLongitude, // 经度，浮点数，范围为180 ~ -180。
      //   latitude: lat, // 纬度，浮点数，范围为90 ~ -90
      //   longitude: lng,
      //   name: val.parkingName, // 位置名
      //   address: val.parkingAddress, // 地址详情说明
      //   scale: 15, // 地图缩放级别,整形值,范围从1~28。默认为最大
      //   infoUrl: 'http://cloud.sokeed.com/' // 在查看位置界面底部显示的超链接,可点击跳转
      // });
    },
    pcli () {
      this.$router.push('/home')
      // axios({
      // 	method:'post',
      // 	// url:'http://114.55.168.103:8797/login/queryOpenId',
      // 	url:'http://192.168.2.143:8797/login/queryOpenId',
      // 	data:Qs.stringify({
      // 		openid: localStorage.getItem('openid')
      // 	})
      // }).then(res=>{
      // 	if(res.data.resCode==1){
      // 		this.$router.push('/logincopy')
      // 	}else{
      // 		this.$router.push('/home')
      // 	}
      // })
    },
    _touchStart (index, ev) {
      ev = ev || event;
      if (ev.touches.length == 1) {
        this.startX = ev.touches[0].clientX;
      }
    },
    _touchMove (index, ev) {
      ev = ev || event;
      let that = this;
      if (ev.touches.length == 1) {
        if (this.startX - ev.touches[0].clientX >= 100) {
          that.mydown()
        } else if (this.startX - ev.touches[0].clientX <= -100) {
          this.cs = 1;
          if (this.$refs.my) {
            this.$refs.my.setAttribute('class', 'my')
            this.$refs.myleft.setAttribute('class', 'myleft')
          }
        }
      }
    },
    parkingLot () {
      // this.$router.push({ path: '/parkingLot' });
      // sessionStorage.clear('dLng')
      // sessionStorage.clear('dLat')

      let that = this;
      wx.ready(function () {
        console.log(222);
        wx.getLocation({
          type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
          success (res) {
            console.log(res)
            const latitude = res.latitude
            const longitude = res.longitude
            var x_pi = 3.14159265358979324 * 3000.0 / 180.0;
            var baidu_point = { lon: 0, lat: 0 };
            var x = longitude;
            var y = latitude;
            var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
            var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
            that.newlng = z * Math.cos(theta) + 0.0065;
            that.newlat = z * Math.sin(theta) + 0.006;
            // alert(that.newlng)
            // alert(that.newlat)
            localStorage.setItem('dLng', that.newlng)
            localStorage.setItem('dLat', that.newlat)
            localStorage.setItem('mLat', localStorage.getItem('dLat'))
            localStorage.setItem('mLng', localStorage.getItem('dLng'))
            that.$router.push({ path: '/parkingLot' });


          }
        })
      })




    },
    myup () {
      let that = this;
      that.cs = 1;
      setTimeout(function () {
        if (that.$refs.my) {
          that.$refs.my.setAttribute('class', 'my')
          that.$refs.myleft.setAttribute('class', 'myleft')
        }
      }, 50)
    },
    mydown () {
      let that = this;
      if (this.$refs.my.getAttribute('class') == 'my') {
        this.$refs.my.setAttribute('class', 'active1');
        this.$refs.myleft.setAttribute('class', 'active2');
        setTimeout(function () {
          that.cs = 0;
        }, 500)
      }
    },
    yyjl () {
      this.$router.push({
        path: '/orderList'
      });
    },
    tcjl () {
      this.$router.push({ path: '/parkingRecord' });
    },
    cphgl () {
      this.$router.push({
        path: '/list'
      });
    },
    wdqb () {

    },
    sz () {
      this.$router.push({ path: '/setUp' });
    },
    getQueryString (name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },
    async saoyisao () {
      // MessageBox({
      //   title: '提示',
      //   message: res.data.msg,
      //   closeOnClickModal: false
      // }).then(action => {
      //   that.$router.push('/homePage')
      // })





      MessageBox.confirm('', {
        message: '请确认本人是否在车锁旁边？',
        title: '提示',
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        closeOnClickModal: false
      }).then(action => {
        if (action == 'confirm') {     //确认的回调
          let that = this;
          that.$http({
            method: 'get',
            url: that.oldhttpUrl + '/scan/getJSSDKTicket?url=' + window.location.href.split('#')[0]
          }).then(function (message) {
            console.log(message.data)
            wx.config({
              debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
              appId: message.data.appid, // 必填，公众号的唯一标识
              timestamp: message.data.timestamp, // 必填，生成签名的时间戳
              nonceStr: message.data.nonceStr, // 必填，生成签名的随机串
              signature: message.data.signature, // 必填，签名，见附录1
              jsApiList: [message.data.jsApiList] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
            wx.ready(function () {
              wx.scanQRCode({
                needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                success: function (res) {
                  let result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                  let deviceId = result.substring(result.indexOf('state=') + 6, result.indexOf('#'));
                  localStorage.setItem('carlock', deviceId)
                  Indicator.open('Loading...');
                  let data = {
                    mark: deviceId
                  }
                  code(data).then(res => {
                    // alert(JSON.stringify(res))
                    Indicator.close()
                    if (res.data.resCode == 0) {
                      that.$router.push({                        path: '/orderTwo',
                        query: {
                          devname: res.data.result.devname,
                          remark: res.data.result.remark,
                          devid: res.data.result.devid,
                          parkid: res.data.result.parkid,
                          parkingName: res.data.result.parkingName,
                          price: res.data.result.price,
                          freeTime: res.data.result.freeTime,
                        }                      })
                    } else {
                      MessageBox('提示', '停车场暂无车位')
                    }
                  })



                }
              });
            })
          })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#my {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  z-index: 999;
}

#myleft {
  position: relative;
  width: 60%;
  background-color: #ffffff;
  text-align: left;
}

.left {
  left: -60%;
}

.my {
  animation: mymove2 0.5s;
  -webkit-animation: mymove2 0.5s;
  -o-animation: mymove2 0.5s;
  -moz-animation: mymove2 0.5s;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -ms-perspective: 1000;
  perspective: 1000;
}

.myleft {
  animation: mymove1 0.5s;
  -webkit-animation: mymove1 0.5s;
  -o-animation: mymove1 0.5s;
  -moz-animation: mymove1 0.5s;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -ms-perspective: 1000;
  perspective: 1000;
}

@keyframes mymove1 {
  from {
    left: -60%;
  }
  to {
    left: 0;
  }
}

@-webkit-keyframes mymove1 {
  from {
    left: -60%;
  }
  to {
    left: 0;
  }
}

@-moz-keyframes mymove1 {
  from {
    left: -60%;
  }
  to {
    left: 0;
  }
}

@-o-keyframes mymove1 {
  from {
    left: -60%;
  }
  to {
    left: 0;
  }
}

@keyframes mymove3 {
  from {
    left: 0;
  }
  to {
    left: -60%;
  }
}

@-webkit-keyframes mymove3 {
  from {
    left: 0;
  }
  to {
    left: -60%;
  }
}

@-moz-keyframes mymove3 {
  from {
    left: 0;
  }
  to {
    left: -60%;
  }
}

@-o-keyframes mymove3 {
  from {
    left: 0;
  }
  to {
    left: -60%;
  }
}

@keyframes mymove2 {
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    background-color: rgba(0, 0, 0, 0.5);
  }
}

@-webkit-keyframes mymove2 {
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    background-color: rgba(0, 0, 0, 0.5);
  }
}

@-moz-keyframes mymove2 {
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    background-color: rgba(0, 0, 0, 0.5);
  }
}

@-o-keyframes mymove2 {
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    background-color: rgba(0, 0, 0, 0.5);
  }
}

@keyframes mymove4 {
  from {
    background-color: rgba(0, 0, 0, 0.5);
  }
  to {
    background-color: rgba(0, 0, 0, 0);
  }
}

@-webkit-keyframes mymove4 {
  from {
    background-color: rgba(0, 0, 0, 0.5);
  }
  to {
    background-color: rgba(0, 0, 0, 0);
  }
}

@-moz-keyframes mymove4 {
  from {
    background-color: rgba(0, 0, 0, 0.5);
  }
  to {
    background-color: rgba(0, 0, 0, 0);
  }
}

@-o-keyframes mymove4 {
  from {
    background-color: rgba(0, 0, 0, 0.5);
  }
  to {
    background-color: rgba(0, 0, 0, 0);
  }
}

.active1 {
  display: none;
  animation: mymove4 0.5s;
  -webkit-animation: mymove4 0.5s;
  -o-animation: mymove4 0.5s;
  -moz-animation: mymove4 0.5s;
  background-color: rgba(0, 0, 0, 0);
}

.active2 {
  animation: mymove3 0.5s;
  -webkit-animation: mymove3 0.5s;
  -o-animation: mymove3 0.5s;
  -moz-animation: mymove3 0.5s;
  left: -60%;
}

#myleft > img {
  width: 1rem;
  border-radius: 50%;
  margin: 33px 0 0 37px;
}

#myleft p {
  width: 70%;
  display: flex;
  justify-content: space-between;
  font-size: 0.28rem;
  color: #333333;
  margin: 17px 0 0 37px;
  border-bottom: 1px solid #d8d8d8;
  padding-bottom: 20px;
}

#myleft p img {
  width: 20px;
}

#myleft p i:nth-of-type(2) img {
  transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  -o-transform: rotate(90deg);
}

#myleft p span {
  line-height: 20px;
  text-align: left;
  width: 60%;
}

#myleft p:nth-of-type(1) {
  font-size: 0.4rem;
  color: #333333;
  margin: 7px 0 40px 37px;
}

#myleft p:nth-of-type(6) {
  border-bottom: none;
}

.homePage {
  text-align: center;
  height: 100%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -ms-perspective: 1000;
  perspective: 1000;
}

.logo {
  height: 30%;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;
  margin-bottom: 2%;
}

.logo img {
  width: 30%;
  margin-top: 20px;
}

.logo p {
  font-size: 0.32rem;
  color: #f68b1b;
  text-align: right;
  margin: 15px 20%;
}

.inputBorder {
  height: 20%;
  margin: 0 5px;
  border: 1px solid #d8d8d8;
  position: relative;
  overflow: hidden;
}

.inputBorder img {
  height: 100%;
  width: 100%;
}

.input {
  display: flex;
  position: absolute;
  top: 0;
  width: 100%;
  height: 37.5%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.val {
  height: 100%;
  width: 70%;
}

.val p {
  text-indent: -30px;
  color: #787878;
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: 20px 11px;
  padding: 13px;
  font-size: 0.32rem;
  border: 1px solid #d8d8d8;
  border-right: none;
  margin-left: 8%;
  line-height: 1;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}

.btn {
  height: 100%;
  width: 30%;
}

.btn p {
  padding: 13px;
  font-size: 0.32rem;
  border: 1px solid #f68b1b;
  background-color: #f68b1b;
  color: white;
  border-left: none;
  margin-right: 20%;
  line-height: 1;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}

.content {
  background-color: #ffffff;
  margin: 0 5px;
  margin-top: 3%;
  height: 45%;
  border: 1px solid #d8d8d8;
  display: flex;
  flex-direction: column;
}

.content .x {
  width: 100%;
  height: 1px;
  background: #d8d8d8;
}

.box {
  display: flex;
  justify-content: space-around;
  height: 50%;
}

.y {
  width: 1px;
  background: #d8d8d8;
}

.box .prak {
  width: 50%;
  text-align: left;
  position: relative;
  overflow: hidden;
}

.box .prak img {
  width: 24%;
  margin: 20% 10px 0 20%;
}

.box .prak span {
  font-size: 0.4rem;
  color: #f68b1b;
  line-height: 1;
  position: absolute;
  top: 35%;
}

.box .prak p {
  width: 120%;
  font-size: 0.4rem;
  color: #787878;
  margin-left: 15%;
  -webkit-transform: scale(0.5);
  line-height: 24px;
}

#wd {
  position: absolute;
  width: 30px;
  left: 10px;
  top: -15px;
  z-index: 999;
}
</style>