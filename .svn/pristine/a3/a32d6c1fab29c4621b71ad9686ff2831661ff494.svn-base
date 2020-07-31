<template>
  <div style="height:100%;">
    <header>
      <div class="pimg">
        <img src="../../../static/logo.png"
             alt="">
      </div>
      <div class="right">
        <span>{{timeDate.day}}</span>
        <span>{{timeDate.time}}</span>
        <i style="width:36px;height:36px;border-radius:18px;background:#3672ec;display: inline-block;vertical-align: middle;margin-right:16px;margin-top:-8px;"></i>

        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <span>{{usa}}</span>
            <p style="display: inline-block;"><img src="../../../static/ylse.png"
                   style="margin-top:-8px;vertical-align: middle;"
                   alt=""></p>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <span @click="back">退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span class="icon-contain"
              style="margin-right:80px;cursor: pointer;"
              @click="getFullCreeen">
          全屏
        </span>
      </div>
    </header>
    <section>
      <div class="tol">
        <span style="width:5px;height:18px;background:#fff;display: inline-block;vertical-align: middle;margin-left:15px;"></span>
        <span>出入车抓拍：</span>
        <span>2号出入口</span>
        <span>总车位：{{carportcount}}</span>
        <span @click="websocketClose">剩余车位：{{onTimeCount}}</span>
        <span style="margin-right:80px;cursor: pointer;float:right"
              @click="look">上班</span>
        <!-- <span class="icon-contain"
              style="margin-right:80px;cursor: pointer;float:right"
              @click="getFullCreeen">
          全屏
        </span> -->
      </div>
      <div class="head">
        <div class="phtoo"
             style="height:52%;">
          <div class="liole">
            <div class="photo">
              <!-- <p><img :src="cimg"
                     alt=""></p> -->
              <!-- <p>
                <video-player  class="video-player vjs-custom-skin"
                  ref="videoPlayer"
                  :playsinline="true"
                  :options="playerOptions"
                ></video-player>
              </p>        -->
              <div style="display:flex;">
                <i>出</i>
                <!-- <span>浙A56666</span> -->
              </div>
            </div>
            <div class="vertical"></div>
            <div class="phone">
              <div>
                <p><img src="../../../static/tuo.png"
                       alt=""></p>
                <p>暂无抓拍照片</p>
              </div>
              <i>
                入
              </i>
            </div>
            <div class="clear"></div>
          </div>
          <div class="titles">车辆监控</div>
          <div style="display:flex; justify-content: space-between;    background: #363c46">
            <div class="side"
                 style="">
              <img src="../../../static/xiao (1).png"
                   alt=""
                   style="margin-top:150px"
                   @click="bools">

            </div>
            <div class="liole bottliloe zerptool"
                 style="">
              <ul :style="style"
                  v-if="p.length!=0"
                  style="transition: all 1s ease">
                <li v-for="item in p">
                  <div class="liiner">
                    <img :src="item.img"
                         alt=""
                         style="margin-top:0.6rem;margin-bottom:0.6rem;">
                  </div>
                  <div>{{item.carNumber}}</div>
                </li>
              </ul>
              <ul :style="style"
                  v-if="this.p.length==0"
                  style="transition: all 1s ease">
                <li v-for="item in arrc">
                  <div class="liiner">
                    <img :src="item.img"
                         alt=""
                         style="margin-top:0.6rem;margin-bottom:0.6rem;">
                  </div>
                  <div>{{item.carNumber}}</div>
                </li>
              </ul>

            </div>
            <div class="side">
              <img src="../../../static/da.png"
                   alt=""
                   style="margin-top:150px"
                   @click="aools">
            </div>

          </div>

        </div>
        <div class="vertical"></div>
        <div class="detail">
          <div class="tops">
            <div class="innertops">
              <div class="however">
                <span class="carout">出场车牌</span>
                <input type="text"
                       value=""
                       v-model="tets"
                       disabled="disabled"
                       v-show="show==true">
                <input type="text"
                       value=""
                       v-model="tet"
                       v-show="show==false">
              </div>
            </div>
            <div class="car_number">
              <div class="liscecar_number">
                <div class="cahnge"
                     @click="changecarnumber">修改车牌</div>
                <!-- <div class="cahnge" @click="selectdetail" v-if="details==0">查询详情</div> -->
                <!-- <div class="cahnge" style="background:#ec5036" @click="anew">重新抓拍</div> -->
                <div class="cahnge"
                     style="background:#ec5036"
                     @click="anew">查询详情</div>
              </div>
            </div>
          </div>
          <div class="transverse"></div>
          <div class="botto">
            <div class="mesg">
              <div>
                <p>缴费信息</p>
                <hr>
                <p>
                  <span>车型</span>
                  <span>{{carType}}</span>
                </p>
                <hr>
                <p>
                  <span>车辆性质</span>
                  <span>{{propety}}</span>
                </p>
                <hr>
                <p>
                  <span>停车时长</span>
                  <span>{{longTime}}</span>
                </p>
                <hr>
                <p>
                  <span>入场时间</span>
                  <span>{{start_time}}</span>
                </p>
                <p class="last">
                  <span>请收费</span>
                  <span class="money">￥{{money}}</span>
                </p>
              </div>
            </div>
            <div class="car_number hecar">
              <div class="liscecar_number">
                <div class="cahnge"
                     @click="discharged">收费放行</div>
                <div class="cahnge"
                     style="background:#ec5036"
                     @click="anomaly">异常放行</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Qs from 'qs'
import axios from 'axios'
import { searchClicks } from '../api/api.js'
// import '../../reconnecting-websocket.min.js'
export default {
  name: 'visitors',
  inject: ['reload'],
  data () {
    return {
      p: [],
      ps: [
        {
          url: require('../../../static/tuo.png'),
          id: ''
        },
        {
          url: '../../../static/tuo.png',
          id: ''
        },
        {
          url: '../../../static/tuo.png',
          id: ''
        },
        {
          url: '../../../static/tuo.png',
          id: ''
        }
      ],
      listtable: [],
      timeoutObj: null,
      serverTimeoutObj: null,
      show: true,
      tet: '',
      tets: '',
      wensocket: null,
      carNumber: '',
      carType: '',
      propety: '',
      longTime: '',
      start_time: '',
      img: '',
      isPay: '',
      money: '',
      exception: '',
      ips: '',
      cimg: '',
      timeDate: {
        day: '',
        time: ''
      },
      n: 0,
      objmy: [],
      datas: [],
      carportcount: '',
      onTimeCount: '',
      repals: '',
      arrc: [
        {
          img: '../../../static/shipin.png',
          carNumber: '测试1'
        },
        {
          img: '../../../static/shipin.png',
          carNumber: '测试1'
        },
        {
          img: '../../../static/shipin.png',
          carNumber: '测试1'
        },
        {
          img: '../../../static/shipin.png',
          carNumber: '测试1'
        },
        {
          img: '../../../static/shipin.png',
          carNumber: '测试1'
        },
        {
          img: '../../../static/shipin.png',
          carNumber: '测试1'
        },
        {
          img: '../../../static/shipin.png',
          carNumber: '测试1'
        }
      ],
      longTimes: '',
      start_times: '',
      carTypes: '',
      propetys: '',
      moneys: '',
      marginLeft: 0,
      usa: '',

      // 视频播放
//       playerOptions : {
//         playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
//         autoplay: false, //如果true,浏览器准备好时开始回放。
//         muted: false, // 默认情况下将会消除任何音频。
//         loop: false, // 导致视频一结束就重新开始。
//         preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
//         language: 'zh-CN',
//         aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
//         techOrder: ['flash', 'html5'],      // 兼容顺序
// // 　　　　flash: {
// //           hls: { withCredentials: false },
// //           swf: 'https://cdn.bootcss.com/videojs-swf/5.4.2/video-js.swf' // 引入静态文件swf
// //         },
//         html5: { hls: { withCredentials: false } },
//         sources: [{ // 流配置，数组形式，会根据兼容顺序自动切换
//           type: 'rtmp/hls',
//           src: 'rtmp://192.168.2.123:1935/live/test'
//         }],
//         poster: "", //你的封面地址
//         // width: document.documentElement.clientWidth,
//         notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
//         controlBar: {
//           timeDivider: true,
//           durationDisplay: true,
//           remainingTimeDisplay: false,
//           fullscreenToggle: true  //全屏按钮
//         }
//       }
    }
  },
  computed: {
    style () {
      return {
        marginLeft: this.marginLeft + 'px'
      }
    }
  },




  mounted: function () {
    console.log(this.p)
    this.p = JSON.parse(localStorage.getItem('setimg'))
    this.p = this.p.reverse()
    this.usa = sessionStorage.getItem('userAlias')

    let that = this;
    setInterval(function () {
      that.timeDate = that.getNowFormatDate()
    }, 1000)
  },
  methods: {
    bools () {
      console.log(2)
      if (this.marginLeft == 0) {
        return
      } else {
        this.marginLeft += 180;
      }
    },
    aools () {
      if (this.marginLeft == -540) {

      } else {
        this.marginLeft -= 180;
      }
    },
    anew () {
      if (!this.isLicensePlate(this.tets)) {
        this.$message({
          message: '请输入正确的车牌号码',
          type: 'error'
        });
      } else {
        axios({
          method: 'post',
          url: 'http://39.104.113.112:2088/feeOrder/orders',
          data: Qs.stringify({
            page: 1,
            is_del: 0,
            pageSize: 1,
            userId: 'SURIOT',
            dealer: 123,
            carnumber: that.tet
            // carnumber: '浙A12345'
          })
        }).then(message => {
          console.log(message)
          if (message.data.resCode == "0") {
            console.log(typeof this.money)
            this.longTime = message.data.result[0].longdate
            this.start_time = message.data.result[0].startdate
            this.carType = '小轿车'
            this.propety = '普通车辆'
            this.money = message.data.result[0].price

          }
        })
      }

    },
    anomaly () {
      let that = this;
      if (that.tet) {
        that.repals = that.tet
      } else {
        that.repals = that.tets
      }
      console.log(that.repals)
      axios({
        method: 'post',
        url: 'http://39.104.113.112:2088/ExceptionCarNumberInfo/add',
        data: Qs.stringify({
          carNumber: that.repals,
          outTime: that.timeDate.day + ' ' + that.timeDate.time,
          outDeviceId: that.$route.query.devid,
          imgUrl: that.img ? that.img : 1
        })
      }).then(function (message) {
        console.log(message)
        if (message.data == 1) {
          that.discharged();
        } else if (message.data == 2) {
          that.$message({
            message: '设备不能为空',
            type: 'error'
          });
        }


        else {
          that.$message({
            message: '异常放行失败',
            type: 'error'
          });
        }
      }).catch(err => {
        that.$message({
          message: '异常放行失败',
          type: 'error'
        });
      })
    },
    // toolcar (offset, direction) {

    //   if (!this.transitionEnd) return
    //   this.transitionEnd = false
    //   direction === -1 ? this.currentIndex++ : this.currentIndex--

    //   const destination = this.distance + offset * direction
    //   // this.animate(destination, direction)

    // },
    back () {
      this.$router.go(-1)
      sessionStorage.clear()
    },
    look () {
      console.log(9)
      this.websocketSend()
    },
    changecarnumber () {
      if (this.tets) {
        this.show = false
      } else {
        this.$message({
          message: '请输入车牌号码',
          type: 'error'
        });
      }

    },
    isLicensePlate (str) {
      return /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/.test(str);
    },
    discharged () {
      // this.carType=''
      // this.propety=''
      // this.longTime=''
      // this.start_time=''   
      // this.money=''
      // let that=this;
      // axios({
      // 	method: 'post',
      // 	url: 'http://39.104.113.112:2088/cash/payByCash',
      // 	data: Qs.stringify({
      // 		carNumber:that.set,
      // 		isTicket:1,
      // 	})
      // 	}).then(function(message) {
      // 		console.log(message)
      // 		if(res.data.resCode==0){
      // 			that.$message({
      // 				message: '支付成功',
      // 				type: 'success'
      // 			});
      // 		console.log(message)
      // 		if(message.data.code==0){
      // 		}else{
      // 			that.$message({
      // 				message: '支付失败',
      // 				type: 'error'
      // 			});
      // 		}
      // 	})

      let that = this;
      axios({
        method: 'post',
        url: 'http://39.104.99.181:3011/wirite/single/openid',
        data: Qs.stringify({
          str: 1,
          deviceid: that.$route.query.devid
        })
      }).then(function (message) {
        console.log(message)
        if (message.data.code == 200) {
          that.$message({
            message: '抬杆成功',
            type: 'success'
          });
        } else {
          that.$message({
            message: '抬杆失败',
            type: 'error'
          });
        }
      })
    },
    // selectdetail () {
    //   let that = this;
    //   axios({
    //     method: 'post',
    //     url: 'http://39.104.113.112:2088/feeOrder/orders',
    //     data: Qs.stringify({
    //       page: 1,
    //       is_del: 0,
    //       pageSize: 1,
    //       userId: 'SURIOT',
    //       dealer: 123,
    //       carnumber: that.tet
    //     })
    //   }).then(function (message) {
    //     console.log(message)
    //     if (message.data.resCode == 0) {
    //       that.longTime = message.data.result[0].longdate
    //       that.start_time = message.data.result[0].startdate
    //       that.carType = '小轿车'
    //       that.propety = '普通车辆'
    //       that.money = message.data.result[0].price
    //     }
    //   })
    // },
    getFullCreeen () {
      this.n++;
      this.n % 2 == 0 ?
        this.outFullCreeen(document) : this.inFullCreeen(document.documentElement)
    },
    inFullCreeen (element) {
      let el = element;
      let rfs = el.requestFullScreen || el.webkitRequestFullScreen ||
        el.mozRequestFullScreen || el.msRequestFullScreen;
      if (typeof rfs != "undefined" && rfs) {
        rfs.call(el);
      } else if (typeof window.ActiveXObject != "undefined") {
        let wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
          wscript.SendKeys("{F11}");
        }
      }
    },
    outFullCreeen (element) {
      let el = element;
      let cfs = el.cancelFullScreen || el.webkitCancelFullScreen ||
        el.mozCancelFullScreen || el.exitFullScreen;
      if (typeof cfs != "undefined" && cfs) {
        cfs.call(el);
      } else if (typeof window.ActiveXObject != "undefined") {
        let wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
          wscript.SendKeys("{F11}");
        }
      }
    },
    //初始化weosocket
    initWebSocket () {

      const wsuri = "ws://39.104.113.112:2088/websocketSendMsg";
      this.websock = new WebSocket(wsuri);
      // if( this.websock.readyState !== WebSocket.OPEN ){
      // 	this.websock.onopen = this.websocketonopen;
      // }else{
      // 	this.websocketsend();
      // }
      this.websock.onmessage = this.websocketReceive;
      this.websock.onopen = this.websocketOpen;
      this.websock.onclose = this.websocketClose;
      this.websock.onerror = this.wensocketError;


    },
    //连接建立失败重连    
    wensocketError () {
      console.log("WebSocket连接发生错误,正在重新连接");
      // this.initWebSocket();
    },
    //重新建立连接
    websocketAgainOpen () {
      console.log(",正在重新连接");
      this.initWebSocket();
    },
    //连接建立之后回调函数
    websocketOpen () {
      // this.start();
      console.log("WebSocket连接成功，您看要不要发送消息");
    },


    websocketReceive (e) {
      // this.start();        
      console.log("已接受到后台返回的数据");
      console.log(e.data)
      this.p = this.p.reverse()
      this.p.push(JSON.parse(e.data))
      localStorage.setItem('setimg', JSON.stringify(this.p))

      this.cimg = this.p[0].img
      this.carType = this.p[0].carType
      this.propety = this.p[0].propety
      this.longTime = this.p[0].longTime
      this.start_time = this.p[0].start_time
      this.money = this.p[0].money
      this.tets = this.p[0].carNumber
      // this.p.forEach((a, b) => {
      //   if (a.OutroadGateId == this.$route.query.val) {
      //     console.log(1)
      //     this.tets = a.carNumber

      //     this.carType = a.carType
      //     this.propety = a.propety
      //     this.longTime = a.longTime
      //     this.start_time = a.start_time
      //     this.img = a.img
      //     this.money = a.money
      //     this.carportcount = a.carportcount
      //     this.onTimeCount = a.onTimeCount
      //   }
      //   this.$route.query.vals.forEach((x, y) => {
      //     if (a.OutroadGateId == x.deviceld) {
      //       x.url = a.img
      //     }
      //   })
      // })
    },
    //数据发送     
    websocketSend () {
      // var html = ''
      // this.$route.query.vals.forEach((a, b) => {
      //   html += a.deviceld + ','
      // })
      // html = html.substring(0, html.length - 1)
      // console.log(html)
      this.websock.send(this.$route.query.devid)

      // let data={
      // 	page:1,
      // 	pageSize:1000000,
      // 	userId:localStorage.getItem('userId'),
      // 	dealer:localStorage.getItem('dealer')
      // }
      // searchClicks('/Device/brakeList',data).then(res=>{
      // 	if(res.data.resCode==0){
      // 		this.listtable=res.data.result
      // 	}
      // 	console.log(this.listtable)
      // 	// this.listtable.forEach((a,b)=>{
      // 	// 	console.log(a.deviceld)
      // 	// 	let actions = {"userno":a.deviceld};     
      // 	// 	this.websock.send(JSON.stringify(actions));  
      // 	// 	console.log("已发送数据给后台")
      // 	// 	console.log(JSON.stringify(actions))    
      // 	// })
      // })


    },
    //关闭    
    websocketClose (e) {
      console.log('断开连接', e);
    },
    getNowFormatDate () {
      let date = new Date();
      let seperator1 = "-";
      let seperator2 = ":";
      let month = date.getMonth() + 1;
      let strDate = date.getDate();
      let Hours = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
      let Minutes = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
      let Seconds = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      let data = {
        day: date.getFullYear() + seperator1 + month + seperator1 + strDate,
        time: Hours + seperator2 + Minutes + seperator2 + Seconds
      };
      return data;
    },
  },
  created () {
    //判断当前浏览器是否支持WebSocket
    if ('WebSocket' in window) {
      this.initWebSocket()
    }
    else {
      alert('当前浏览器 Not support websocket')
    }


  },
  destroyed () {
    window.onbeforeunload = function () {
      console.log(1)
      this.websocketClose();
    }
  },
  components: {

  }
}
</script>	
<style lang="scss" scoped>
@import '../../styles/mixin.scss';
.pos {
  p {
    background: #666;
  }
  > span {
    background: red !important;
  }
}
// .hello{background: #F2F2F2;}
$hui: #fefefe;
header {
  background: #2c3037;
  display: flex;
  justify-content: space-around;
}
.right {
  text-align: right;
  line-height: 0.95rem;
  @include sc(16px, #fefefe);
  font-family: 'PingFang-SC-Regular';
  span:nth-child(3) {
    margin-right: 60px;
    display: inline-block;
  }
}
header {
  .pimg,
  .right {
    width: 50%;
  }
}
.pimg img {
  @include wh(176px, 34px);
  margin: 27.5px 15px;
}
header span {
  @include sc(16px, #fefefe);
}
section {
  background: #363c46;
  @include wh(100%, 91.1%);
}
.head {
  width: 100%;
  background: #363c46;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.phtoo {
  @include wh(70%, 70%);
  background: #3f4551;
  .liole {
    @include wh(100%, auto);
  }
}
.detail {
  width: 30%;
  background: #3f4551;
}
.tol {
  background: #363c46;
  @include wh(100%, 80px);
}
.tops {
  @include wh(100%, 230px);
  @include sc(24px, #fefefe);
}
.tol span {
  @include sc(16px, #fefefe);
  font-family: 'PingFang-SC-Regular';
  line-height: 80px;
  vertical-align: middle;
}
.innertops,
.car_number {
  @include wh(100%, 59%);
}
// .car_number{display: flex;justify-content:space-around;}
.liscecar_number {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.car_number .cahnge {
  @include wh(46%, 60px);
  background: #9ecc46;
  color: #fff;
  line-height: 60px;
  text-align: center;
  border-radius: 8px;
  @include sc(24px, #fefefe);
  cursor: pointer;
}
.mesg {
  @include wh(80%, 472px);
  margin: 0 auto;
  @include sc(24px, #fefefe);
  font-family: 'PingFang-SC-Regular';
  p {
    margin: 26px 0;
    @include sc(20px, #fefefe);
    display: flex;
    justify-content: space-between;
  }
}
.transverse {
  @include wh(100%, 14px);
  background: #363c46;
}
.mesg p:nth-child(1) {
  margin: 32px 0;
  @include sc(24px, #fefefe);
}
.mesg .last {
  margin: 46px 0;
  @include sc(24px, #fefefe);
}
.botto {
  @include wh(100%, 550px);
}
.vertical {
  @include wh(0.9%, 414px);
  background: #363c46;
  float: left;
}
.photo {
  float: left;
  @include wh(49.5%, 414px);
  position: relative;
}
.photo p {
  @include wh(100%, 100%);
}
.photo p img {
  @include wh(100%, 100%);
}
.photo div {
  @include wh(37%, 60px);
  position: absolute;
  top: 0;
  left: 0;
  @include sc(24px, #fefefe);
}
.photo i {
  @include wh(37%, 100%);
  line-height: 60px;
  text-align: center;
  background: #353a44;
  opacity: 0.8;
}
.photo span {
  background: rgba(146, 149, 153, 0.5);
  @include wh(63%, 100%);
  text-align: center;
  line-height: 60px;
}
.phone {
  float: right;
  @include wh(49.5%, 414px);
  background: #3f4551;
  position: relative;
}
.phone i {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  background: #353a44;
  @include wh(10.5%, 60px);
  line-height: 60px;
  text-align: center;
  @include sc(24px, #fefefe);
}
.phone div {
  @include wh(36%, 100%);
  margin: 0 auto;
  margin-top: 90px;
}
.phone div p:nth-child(2) {
  @include sc(24px, #fefefe);
  text-align: center;
  margin-top: 40px;
}
.phone div p img {
  @include wh(100%, 100%);
}
.however {
  width: 80%;
  margin: 0 auto;
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.however span {
  line-height: 60px;
}
.however input {
  background: #51596a;
  outline: none;
  border: none;
  text-align: center;
  @include wh(72%, 60px);
  color: #fefefe;
}
.hecar {
  height: 0% !important;
}
.clear {
  clear: both;
}
hr {
  background: #525b6d;
  border: none;
  height: 1px;
}
.bottliloe {
  // display: flex;
  // justify-content: space-between;
  height: 86% !important;
  background: #363c46;
}
.bottliloe .side {
  // @include wh(26px, 88px);
  background: #202327;
  margin-top: 10%;
}
.bottliloe .side img {
  margin-top: 32px;
}
.bottliloe ul {
  height: 100%;
  width: 2000px;
  background: #363c46;

  // justify-content: space-evenly;
}
.titles {
  @include wh(100%, 0.5rem);
  @include sc(16px, #fefefe);
  font-family: 'PingFang-SC-Regular';
  line-height: 0.5rem;
  background: #363c46;
}
.bottliloe ul li {
  width: 220px;
  margin: 1%;
  float: left;
}
.bottliloe ul li div:nth-child(1) {
  width: 100%;
  background: #3f4551;
}
.bottliloe ul li:nth-child(1) {
  margin-left: 0 !important;
}
.liiner {
  text-align: center;
  // img {
  //   margin-top: 0.6rem;
  // }
}
.money {
  @include sc(40px, #9bdd48);
}
.el-popper {
  margin-top: -23px;
}
.bottliloe ul li div:nth-child(2) {
  @include wh(100%, 58px);
  background: #3f4551;
  text-align: center;
  line-height: 58px;
  @include sc(20px, #fff);
  font-family: 'PingFang-SC-Regular';
  margin-top: 10px;
}
// .gong{@include sc(18px,#303030);font-family: 'PingFang-SC-Regular';}
// .box .top{@include wh(6.86rem,2.12rem);border-radius: 5px;margin:0 auto;margin-top:0.37rem;background: #FFFFFF;margin-bottom: 0.52rem;}
// .box .top p{text-align: center;@extend .gong;}
// .box .top p:nth-child(1){padding-top:0.48rem;padding-bottom: 0.21rem;}
// .bottom{@include wh(6.86rem,6.42rem);border-radius: 5px;margin:0 auto;background: #FFFFFF;}
// .bottom div:nth-child(1){@include wh(6.86rem,3.89rem);margin-bottom: 0.53rem;}
// .innert{@include wh(3.71rem!important,100%);margin:0 auto;}
// .innert .ptuo{@include wh(3.71rem,1.83rem);margin:0 auto;background: #D3D3D3;border-radius:1.35rem;border-radius: 50%/50%;margin-top:-1.3rem;}
// .innert p:nth-child(1){@include wh(2.64rem,2.57rem);margin:0 auto;padding-top:0.8rem;}
// .innert p:nth-child(1) img{@include wh(100%,100%);}
// .bottom div:nth-child(2) p{@extend .gong;text-align: center;margin-top:0.1rem;}
// @media screen and (min-width:1590px) and (max-width:1920px){
// 	header{@include wh(100%,0.57rem);}
// 	.right{text-align: right;line-height: 0.57rem;}
// 	section{height: 892px;}
// 	.pimg img{@include wh(176px,34px);margin-top:9px;}
// 	.tol{background:#363c46;@include wh(100%,50px);}
// 	.tol span{line-height: 0.5rem;}
// }
@media screen and (min-width: 1360px) and (max-width: 1620px) {
  .however span {
    font-size: 18px;
  }
  .photo div {
    font-size: 18px;
  }
}

.el-carousel__item.el-carousel__item--card.is-in-stage {
  text-align: center;
}

/*修改高度*/
.el-carousel__container {
  height: 100px;
}

.van-collapse-item__content {
  padding: 14px 0;
}

/*左右箭头的样式*/
button.el-carousel__arrow.el-carousel__arrow--left,
button.el-carousel__arrow.el-carousel__arrow--right {
  font-size: 12px;
  height: 20px;
  width: 20px;
  background: #a099f0;
}
.zerptool {
  width: 1000px !important;
  margin: 0 auto;
  overflow: hidden;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}

.video-player{
  width: 100% !important;
}
.video-js .vjs-big-play-button{
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%,-50%) !important;
}
</style>
