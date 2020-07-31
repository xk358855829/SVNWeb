<template>
  <div id="detailed"
       v-if="blockbox"
       style="height: 100%">
    <div class="boxT">
      <div><img src="../../static/image/pCart.png" /></div>
      <div>
        <p>{{detailed.resId}}</p>
        <p>地址：{{detailed.parkingAddress}}</p>
        <p>价格：
          <span>{{detailed.price}}元/{{detailed.priceUnit?detailed.priceUnit:'小时'}}</span>
        </p>
      </div>
      <div @click="herdcome()"
           style="width:0.8rem">
        <img src="../../static/image/daohang.png"
             style="width:30px;margin:0;position: absolute;right:0.2rem;top:1.3rem">

      </div>
    </div>
    <div class="boxB">
      <p v-if="locakdown">
        <span class="left"
              style="    color: rgb(41, 194, 0);"
              @click="guaran(detailed)">
          <img src="../../static/image/guaran.png"
               alt=""
               style="vertical-align: middle;width:0.4rem;height:0.4rem"> 更换车位
        </span>
        <span @click="Findpark()"
              :class="{red:!show,blue:show}"
              style="    color: rgb(41, 194, 0);">
          寻车位&nbsp;&nbsp;
          <img src="../../static/image/lookcar.png"
               style="vertical-align: middle;margin-top:-0.07rem;width:0.5rem;height:0.5rem"
               alt="">
        </span>
      </p>
      <p>
        <span class="left">停车位置</span>
        <span>{{detailed.devidName}}{{detailed.remark}}</span>
      </p>
      <p>
        <span class="left">车牌号码</span>
        <span>{{detailed.carNumber}}</span>
      </p>
      <p>
        <span class="left">开始时间</span>
        <span>{{detailed.startTime}}</span>
      </p>
      <!-- <p><span class="left">结束时间</span><span>{{detailed.timeE}}</span></p> -->
      <p v-if="$route.query.ids==1">
        <span class="left">预约时长</span>
        <span>{{newtimout}}</span>
      </p>
      <p v-if="$route.query.ids==0||$route.query.ids==2">
        <span class="left">预约时长</span>
        <span>{{newtimoutsp}}</span>
      </p>
      <p>
        <span class="left">免费时长</span>
        <span>{{freeTime}}分钟</span>
      </p>
      <!-- <p v-if="detailed.state!=1"><span class="left">付款金额</span><span>{{detailed.amount}}元</span></p> -->
    </div>
    <div v-if="$route.query.ids==1">
      <div class="markMsg"
           v-if="upStateData">注：当前车位没有车辆，请控制车位锁下降后驶入！</div>
      <div class="markMsg"
           v-if="!upStateData">注：当前车位已有车辆，请注意是否为本人车辆！</div>
    </div>

    <div class="boxY">
      <div v-if="locakdown"
           style=" background: #29c200;"
           @click="down">降下地锁</div>
      <div @click="conceal"
           v-if="closeings"
           style="background: #f68b1c;">结账离场</div>
      <div v-if="cancelnpm"
           @click="cancels(detailed)"
           style="background: #f61c1c;">取消订单</div>
    </div>
    <div class="boxY"
         v-if="$route.query.ids==0||$route.query.ids==2">
      <div style=" background:#f61c1c;"
           @click="del()">删除订单</div>
    </div>

    <p v-if="detailed.state==1"
       class="ts">注：下单15分钟内可免费取消订单</p>
    <div class="control"
         v-if="detailed.state==1">
      <router-link :to="{path:'/control',query:{id:detailed.carlockid}}">
        <div>控制车位锁</div>
      </router-link>
      <div @click="callMap()">地图导航</div>
    </div>
    <!-- <div class="delete"
         v-if="detailed.state==0||detailed.state==2"
         @click="deleteOrder()">删除订单记录</div> -->
    <div class="controlBox">
      <div @click="cancelClick()"
           v-if="cancel==1&&detailed.state==1"
           class="controlY">取消</div>
      <div v-if="cancel==0&&detailed.state==1"
           class="uncontrol">取消</div>
      <div v-if="detailed.state==1"
           @click="settlementClick()"
           class="settlement">结算</div>
    </div>
    <!--<router-link :to="{path:'/control',query:{id:detailed.id}}" ><div v-if="detailed.state==1" class="control">删除记录</div></router-link>-->

    <div v-if="popup==0||popup==1||popup==2||popup==3||popup==4||popup==6||popup==7||popup==8"
         id="popup">
      <div v-if="popup==6"
           style="width:3rem;height:3rem;margin:3rem auto;">
        <img src="../../static/image/swith_1.png"
             alt=""
             style="width:100%;height:100%;">
      </div>
      <div v-if="popup==7"
           style="width:3rem;height:3rem;margin:3rem auto;">
        <img src="../../static/image/swith_2.png"
             alt=""
             style="width:100%;height:100%;">
      </div>
      <div v-if="popup==8"
           style="width:3rem;height:3rem;margin:3rem auto;">
        <img src="../../static/image/swith_2.png"
             alt=""
             style="width:100%;height:100%;">
      </div>
      <div v-if="popup==0"
           class="popupBox">
        <p>取消成功</p>
        <p><img src="../../static/image/dg.png" /></p>
        <p @click="nextOk()">确定</p>
      </div>
      <div v-if="popup==1"
           class="popupBox">
        <p>网络超时,取消失败</p>
        <p><img src="../../static/image/dx.png" /></p>
        <p @click="next()">确定</p>
      </div>
      <div v-if="popup==2"
           class="popupBox">
        <p>已超过可取消时间</p>
        <p><img src="../../static/image/dx.png" /></p>
        <p @click="next()">确定</p>
      </div>
      <div v-if="popup==3"
           class="popupBox">
        <p>请先离开车位并升起车位锁</p>
        <p><img src="../../static/image/dx.png" /></p>
        <div class="prompt">若车位锁无法升起请点击报修</div>
        <div class="err">
          <span @click="nextErrB()">报修</span>
          <span @click="nextErrA()">确定</span>
        </div>
      </div>
      <div v-if="popup==4"
           class="popupLod">
        <img src="../../static/image/loading.gif" />
      </div>
    </div>
    <footer v-if="backgool"
            @click="conceal">
      <div class="ulrep">
        <p>选择支付订单</p>
        <ul>

          <li v-for="item in options"
              @click="settle(item.value)">{{item.label}}</li>
        </ul>
      </div>

    </footer>
  </div>
</template>

<script>
import Qs from 'qs'
import { Indicator, MessageBox, Toast } from 'mint-ui';
import { serchstates, malfunction, chosecar, showTime, chazli, changecarnumber } from './api/api.js'
import moment from 'moment/moment'
import axios from 'axios'
import { mapGetters, mapState, mapMutations } from 'vuex';
export default {
  name: 'detailed',
  data () {
    return {
      options: [{ label: '预约订单', value: '1' }, { label: '进场订单', value: '2' }],
      backgool: '',
      regtime: '',
      request: false,
      show: true,
      dis: true,
      newtimoutsp: '',
      findparktime: '',
      detailed: {
        'address': '',
        'price': '',
        'orderid': '',
        'carnumber': '',
        'timeS': '',
        'timeE': '',
        'longTime': '',
        'carlockid': '',
        'money': 0,
        'latitude': '',
        'longitude': '',
        'remark': ''
      },
      locakdown: '',
      potool: true,
      devname: '',
      timeout: '',
      newtimout: '',
      endTime: '',
      startTime: '',
      namepark: '',
      newtime: '',
      jingdu: '',
      weidu: '',
      cancelnpm: '',
      closeings: '',
      id: '',
      popup: 5,
      cancel: 0,
      statePH: '',
      parameter: 1,
      parkingAddress: '',
      upStateData: true,
      freeTime: '',
      creatgetorder: '',
      blockbox: false,
      idmole: '',
      namecarnum: ''
    }
  },
  methods: {
    ...mapMutations(['initparkmeg']),
    conceal () {
      sessionStorage.removeItem('ticknumbar1')
      sessionStorage.removeItem('ticknumbar2')
      sessionStorage.removeItem('ticknumbar3')
      sessionStorage.removeItem('ticknumbar4')
      axios({
        method: 'post',
        url: this.newhttpUrl + '/api/checkCarNumberIsOrdered',
        data: Qs.stringify({
          carNumber: localStorage.getItem('carnumbar')
          // carNumber: '京A12349'
        })
      }).then(res => {
        if (res.data.resCode == 2) {
          this.licektl()
        } else if (res.data.resCode == 1 || res.data.resCode == 3) {
          this.pmoney()
        } else if (res.data.resCode == 4) {
          this.backgool = true
        } else {
          this.pmoney()
        }
      })

    },
    guaran (val) {
      MessageBox.confirm('', {
        message: '是否更换车位？',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        closeOnClickModal: false
      }).then(async action => {
        if (action == 'confirm') { //确认的回调
          let data = {
            parkingId: this.detailed.parkingId,
            resId: this.detailed.resId,
            devid: this.idmole
          }
          let res = await malfunction(data)
          if (res.data.resCode == 1) {




            MessageBox({
              title: '提示',
              message: '停车场暂无车位',
              closeOnClickModal: false
            }).then(action => {
              let dataS = {
                openid: val.openid,
                resId: val.resId,
                parkId: val.parkingId,
                devId: val.devid
              }
              axios({
                method: 'post',
                url: `${this.httpUrl}/app/reserve/parkingCancel`,
                data: Qs.stringify(dataS)
              }).then(res => {
                console.log(res)
                if (res.data.resCode == 0) {
                  this.$router.push('/homePage')
                }
              })

            })
          } else if (res.data.resCode == 2) {
            MessageBox('提示', '车位锁没有问题')
          }

          else {
            MessageBox('提示', '用户重新分配车位成功')
            window.location.reload()
          }
        }

      })
    },
    herdcome () {
      console.log(this.jingdu)
      //百度坐标转火星坐标GCJ02
      var x_pi = 3.14159265358979324 * 3000.0 / 180.0;
      var x = this.jingdu - 0.0065;
      var y = this.weidu - 0.006;
      var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
      var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
      var lng = z * Math.cos(theta);
      var lat = z * Math.sin(theta);

      //GCJ02 转换为 WGS84
      wx.openLocation({
        // latitude: this.infow.devLatitude, // 纬度，浮点数，范围为90 ~ -90
        // longitude: this.infow.devLongitude, // 经度，浮点数，范围为180 ~ -180。
        latitude: lat, // 纬度，浮点数，范围为90 ~ -90
        longitude: lng,
        name: this.namepark, // 位置名
        address: this.parkingAddress, // 地址详情说明
        scale: 15, // 地图缩放级别,整形值,范围从1~28。默认为最大
        infoUrl: 'http://cloud.sokeed.com/' // 在查看位置界面底部显示的超链接,可点击跳转
      });
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
          localStorage.setItem('parkingIda', message.data.result.parkingIds)
          if (message.data.result.price == '0.00') {

            MessageBox({
              title: '提示',
              message: '本次停车免费',
              closeOnClickModal: false
            }).then(action => {
              that.$router.push('/homePage')
            })
          } else {
            that.$router.push({ path: '/payyuyue', query: { vals: message.data.result, orderg: that.$route.query.orderid } })
          }
        } else {
          MessageBox({
            title: '提示',
            message: '暂无订单信息',
            closeOnClickModal: false
          }).then(action => {
            that.$router.push('/homePage')
          })
        }
      })
    },
    pmoney () {
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
          if (parseInt(message.data.price) > 0) {
            localStorage.setItem('longdate', message.data.longdate)
            localStorage.setItem('onsale_price', message.data.onsale_price)
            localStorage.setItem('paid_price', message.data.paid_price)
            localStorage.setItem('paking_lot_name', message.data.paking_lot_name)
            localStorage.setItem('price', message.data.price)
            localStorage.setItem('startdate', message.data.startdate)
            localStorage.setItem('parkingIds', message.data.parkingId)
            localStorage.setItem('time_out', message.data.time_out)
            that.$router.push({ path: '/pay', query: { vals: message.data, orderg: that.$route.query.orderid } })
          } else {
            MessageBox({
              title: '提示',
              message: '本次停车免费',
              closeOnClickModal: false
            })
          }



        } else if (message.data.resCode == 0 || message.data.resCode == -1) {
          MessageBox({
            title: '提示',
            message: message.data.result,
            closeOnClickModal: false
          })
        } else if (message.data.resCode == -2) {
          localStorage.setItem('setskip', -2)
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
              localStorage.setItem('parkingIda', message.data.result.parkingId)
              if (message.data.result.price == '0.00') {

                MessageBox({
                  title: '提示',
                  message: '本次停车免费',
                  closeOnClickModal: false
                }).then(action => {
                  that.$router.push('/homePage')
                })
              } else {
                that.$router.push({ path: '/payyuyue', query: { vals: message.data.result, orderg: that.$route.query.orderid } })
              }

            } else {
              MessageBox({
                title: '提示',
                message: '暂无订单信息',
                closeOnClickModal: false
              }).then(action => {
                that.$router.push('/homePage')
              })
            }
          })

        } else if (message.data.resCode == 4) {
          MessageBox.confirm('', {
            message: `请确认${message.data.result.carNumber}是否为您的车牌？`,
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            closeOnClickModal: false
          }).then(async action => {
            if (action == 'confirm') { //确认的回调
              axios({
                method: 'get',
                url: `${that.newhttpUrl}/ISVEnterOut/exchangeCarNumber?correctCarNumber=${localStorage.getItem('carnumbar')}&errorCarNumber=${message.data.result.carNumber}`,
              }).then(res => {
                console.log(res)
                if (res.data.resCode == 0) {
                  MessageBox('提示', '更换成功')
                }
              })
            }

          })
        }
      }).catch(error => {
        MessageBox({
          title: '提示',
          message: '暂无停车信息',
          closeOnClickModal: false
        })
      })
    },
    settle (val) {

      this.namecarnum = val

      if (val == 2) {
        this.pmoney()
      } else if (val == 1) {
        this.licektl()
      }

      // console.log(this.$route.query.orderid)

    },
    cancels (val) {
      MessageBox.confirm('', {
        message: '是否取消订单？',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        closeOnClickModal: false
      }).then(async action => {
        if (action == 'confirm') { //确认的回调
          console.log(this.newtimout)
          localStorage.setItem('newlongtime', this.newtimout)
          clearInterval(this.newtime)
          let data = {
            openid: val.openid,
            resId: val.resId,
            parkId: val.parkingId,
            devId: val.devid
          }
          axios({
            method: 'post',
            url: `${this.httpUrl}/app/reserve/parkingCancel`,
            data: Qs.stringify(data)
          }).then(res => {
            console.log(res)
            if (res.data.resCode == 0) {
              this.popup = 0
              // this.$rouetr.push('/')
            }
          })
        }

      })
    },
    Findpark () {
      console.log(this.findparktime)
      let otgtime = new Date().getTime()
      if (this.findparktime || this.regtime) {
        if (otgtime - this.findparktime < 2000 || otgtime - this.regtime < 2000) {
          MessageBox('提示', '寻车位或降下车位锁过快')
          return
        } else {
          this.cartfind()
        }
      } else {
        this.cartfind()
      }


    },
    cartfind () {
      MessageBox.confirm('', {
        message: '是否启用寻车位？',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        closeOnClickModal: false
      }).then(async action => {
        if (action == 'confirm') { //确认的回调
          this.findparktime = new Date().getTime()
          this.show = false;
          let data = {
            devId: this.idmole,
            cmd: 19,
            cmdValue: '11',
            resId: this.creatgetorder,
            address: this.parkingAddress,
            carNumber: localStorage.getItem('carnumbar'),
            startTime: localStorage.getItem('startTime'),
            dateTime: showTime(),
            name: localStorage.getItem('nickname'),
            phone: localStorage.getItem('phone'),
          };
          console.log(data)
          axios({
            method: 'post',
            url: this.nowhttpUrl + '/parkingData/queryGetDate',
            data: Qs.stringify(data)
          }).then(res => {
            console.log(res)
            if (res.data.resCode == 0) {
              MessageBox('提示', '请根据蜂鸣声驶入停车位')
            } else {
              MessageBox('提示', '寻车位失败')
            }
            let that = this;
            let t = setTimeout(function () {
              console.log(987)
              that.show = true;
            }, 2000)
          })
        }

      })
    },
    deleteOrder () {

      let that = this;
      that.popup = 4;
      this.$http({
        method: 'post',
        url: this.httpUrl + 'order/updateDelRecord',
        data: Qs.stringify({
          orderid: this.detailed.orderid,
          delrecord: '0'
        })
      }).then(function (message) {
        if (message.data.resCode == 0) {
          that.$router.push('/orderList')
        }
      })
    },
    callMap () {
      wx.openLocation({
        latitude: this.detailed.latitude, // 纬度，浮点数，范围为90 ~ -90
        longitude: this.detailed.longitude, // 经度，浮点数，范围为180 ~ -180。
        name: this.detailed.address, // 位置名
        address: '停车场', // 地址详情说明
        scale: 15, // 地图缩放级别,整形值,范围从1~28。默认为最大
        infoUrl: 'http://cloud.sokeed.com/' // 在查看位置界面底部显示的超链接,可点击跳转
      });
    },
    fmtDate (obj) {
      var date = new Date(obj);
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? ('0' + m) : m;
      var d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      var h = date.getHours();
      h = h < 10 ? ('0' + h) : h;
      var minute = date.getMinutes();
      var second = date.getSeconds();
      minute = minute < 10 ? ('0' + minute) : minute;
      second = second < 10 ? ('0' + second) : second;
      return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
    },
    cancelClick () {
      console.log(this.detailed.orderid)
      let that = this;
      this.$http({
        method: 'post',
        url: this.httpUrl + 'order/cancelorderid',
        data: Qs.stringify({
          orderid: this.detailed.orderid
        })
      }).then(function (message) {
        console.log(message.data);
        that.popup = message.data.resCode;
      })
    },
    settlementZ () {
      let that = this;
      this.$http({
        method: 'post',
        url: this.httpUrl + 'order/settlement',
        data: Qs.stringify({
          orderid: this.detailed.orderid
        })
      }).then(function (message) {
        console.log(message.data);
        if (message.data.resCode == 0) {
          that.$router.push({ path: '/money', query: { orderid: that.detailed.orderid } });
        }
      })
    },
    del () {
      // console.log(this.$route.query.orderid)
      MessageBox.confirm('', {
        message: '是否删除订单',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        closeOnClickModal: false
      }).then((action) => {
        if (action == 'confirm') { //确认的回调
          let data = {
            resId: this.$route.query.orderid
          }
          axios({
            method: 'post',
            url: this.httpUrl + 'app/reserve/deleteOrderByStatus',
            data: Qs.stringify(data)
          }).then(res => {
            if (res.data.resCode == "0") {
              MessageBox({
                title: '提示',
                message: '删除订单成功',
                closeOnClickModal: false
              }).then(action => {
                this.$router.replace('/orderList')
              })
            } else {
              MessageBox('提示', '删除订单失败')
            }
          })
        }

      })
    },
    settlementClick () {
      let that = this;
      this.$http({
        method: 'post',
        url: this.httpUrl + 'state/date',
        data: Qs.stringify({
          id: that.detailed.carlockid
        })
      }).then(function (message) {
        console.log(message.data);
        if (message.data.date == 0) {
          that.settlementZ()
        } else if (message.data.date == 1) {
          that.popup = 3;
        }
      })
    },
    nextOk () {
      this.$router.push({ path: '/homePage' })
    },
    down () {

      let otgtimes = new Date().getTime()
      if (parseInt(this.findparktime) || parseInt(this.regtime)) {
        if (parseInt(otgtimes) - parseInt(this.findparktime) < 2000 || parseInt(otgtimes) - parseInt(this.regtime) < 2000) {
          MessageBox('提示', '寻车位或降下车位锁过快')
        } else {
          MessageBox.confirm('', {
            message: '是否降下车位锁',
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            closeOnClickModal: false
          }).then((action) => {
            if (action == 'confirm') { //确认的回调
              this.downowfile()

            }

          })
          // if (this.statePH == 3) {
          //   MessageBox('提示', '车位锁处于下降状态，请驶入')
          // } else {
          //   // Indicator.open({
          //   //   text: 'Loading...',
          //   //   spinnerType: '加载中'
          //   // });

          // }
        }
      } else {
        MessageBox.confirm('', {
          message: '是否降下车位锁',
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          closeOnClickModal: false
        }).then((action) => {
          if (action == 'confirm') { //确认的回调
            this.downowfile()

          }

        })

      }



    },
    downowfile () {
      let data = {
        devId: this.idmole,
        // devId:'56008352',
        // datastreamIds: '3001'
      };
      console.log(data);

      axios({
        method: 'post',
        url: this.nowhttpUrl + '/parkingData/getBatData',
        // url: this.nowhttpUrl + '/parkingData/getData',
        data: Qs.stringify(data)
      }).then(message => {

        if (message.data.resCode == 0) {

          this.regtime = new Date().getTime()
          this.cancelnpm = false;
          let list = message.data.errMsg.data.devices[0].datastreams , state = '';
          for (let i = 0; i < list.length; i++) {
            switch (list[i].id) {
              case '3001':
                state = list[i].value;
                break;                        
              default:
                break;
            }              
          }
          // let state = JSON.parse(message.data.errMsg.substring(6, message.data.errMsg.length)).data.datastreams[0].datapoints[0].value;
          if (state == 3) {
            MessageBox.alert('车位锁处于下降状态，请驶入').then(action => {
              window.location.reload()
            });
          } else {
            let data = {
              devId: this.idmole,
              // devId:'56008352',
              cmd: 18,
              cmdValue: '12',
              resId: this.creatgetorder,
              address: this.parkingAddress,
              carNumber: localStorage.getItem('carnumbar'),
              startTime: localStorage.getItem('startTime'),
              dateTime: showTime(),
              name: localStorage.getItem('nickname'),
              phone: localStorage.getItem('phone'),
            };
            axios({
              method: 'post',
              url: this.nowhttpUrl + '/parkingData/queryGetDate',
              // url: 'http://192.168.2.143:8799/parkingData/queryGetDate',
              data: Qs.stringify(data)
            }).then(res => {
              console.log(res)
              if (res.data.resCode == 3) {
                Indicator.close();
                MessageBox('提示', '设备离线！')
              } else if (res.data.resCode == 0) {
                this.popup = 6
                let that = this;
                var timeB = setInterval(function () {
                  let data = {
                    devId: that.idmole,
                    // devId:'56008352',
                    // datastreamIds: '3001'
                  };
                  console.log(data);
                  axios({
                    method: 'post',
                    url: this.nowhttpUrl + '/parkingData/getBatData',
                    // url: that.nowhttpUrl + '/parkingData/getData',
                    data: Qs.stringify(data)
                  }).then(message => {
                    that.popup = 7
                    // window.location.reload()
                    console.log(JSON.parse(message.data.errMsg.substring(6, message.data.errMsg.length)))
                    let list = message.data.errMsg.data.devices[0].datastreams , state = '';
                    for (let i = 0; i < list.length; i++) {
                      switch (list[i].id) {
                        case '3001':
                          state = list[i].value;
                          break;                        
                        default:
                          break;
                      }              
                    }
                    // let state = JSON.parse(message.data.errMsg.substring(6, message.data.errMsg.length)).data.datastreams[0].datapoints[0].value;
                    console.log(state);
                    that.parameter += 1;
                    if (state == 3) {
                      // Indicator.close();
                      that.popup = 8
                      MessageBox.alert('下降已完成，请驶入车位').then(action => {
                        window.location.reload()
                      });
                      that.cancelnpm = false;
                      clearInterval(timeB);
                      // window.location.reload()
                    } else if (that.parameter >= 30) {
                      Indicator.close();
                      clearInterval(timeB);
                      MessageBox.alert('请重试！').then(action => {
                        window.location.reload()
                      });
                    }
                  })

                }, 1000)
              } else if (res.data.resCode == 10) {
                Indicator.close();
                MessageBox('提示', '设备离线！')
              } else {
                Indicator.close();
                MessageBox('提示', '设备离线！')
              }
            })
          }
        } else if (message.data.resCode == 3) {
          MessageBox('提示', '操作失败，请重试')
        }


      })
    },
    next () {
      this.popup = 3;
      let that = this;
      this.$http({
        method: 'post',
        url: this.httpUrl + 'order/findorderid',
        data: Qs.stringify({
          orderid: that.detailed.orderid
        })
      }).then(function (message) {
        console.log(message.data);
        if (message.data.resCode == 0) {
          that.detailed = message.data.result;
          that.detailed.timeS = that.fmtDate(message.data.result.startdate.time);
          that.detailed.timeE = that.fmtDate(message.data.result.enddate.time);
          that.detailed.longTime = ((((message.data.result.enddate.time - message.data.result.startdate.time) / 1000) / 60) / 60).toFixed(0);
          if ((new Date().getTime() - message.data.result.date.time - 900000) > 0) {
            that.cancel = 0;
          } else {
            that.cancel = 1;
          }
        }
      })
    },
    nextErrA () {
      this.$router.push({ path: '/control', query: { id: this.detailed.carlockid } })
    },
    nextErrB () {
      this.settlementZ()
    },
  },
  created () {
    console.log(this.$route.query.carNumberval)
    chazli({ car_number: this.$route.query.carNumberval }).then(message => {
      if (message.data.resCode == 4) {
        MessageBox.confirm('', {
          message: '请确认' + this.$route.query.carNumberval + '是否为您的车牌？',
          title: '提示',
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(action => {
          if (action == 'confirm') {
            let params = {
              errorCarNumber: message.data.result.carNumber,
              correctCarNumber: this.$route.query.carNumberval,
            }
            changecarnumber(params).then(res => {
              if (res.data.resCode == 0) {
                MessageBox('提示', '更换成功');
              }
            })
          }
        })
      } else {
        if (this.$route.query.ids == 0 || this.$route.query.ids == 2) {
          this.blockbox = true
          Indicator.close()
          this.locakdown = false
        } else {
          this.initparkmeg()
          let parm = {
            carNumber: this.$route.query.carNumberval
            // carNumber: '京A12349'
          }
          console.log(parm)
          chosecar(parm).then(res => {
            console.log(res)
            if (res.data.resCode == 3) {
              this.locakdown = true
            } else {
              this.blockbox = true
              Indicator.close()
              this.locakdown = false
            }
          })
        }
      }
    })


  },
  mounted: function () {
    console.log(this.$route.query.name)
    console.log(this.$route.query.id)
    let that = this;
    Indicator.open('Loading...')
    console.log(that.$route.query.ids)
    let getorder = localStorage.getItem('setOrder')
    if (getorder) {
      that.creatgetorder = getorder
    } else {
      that.creatgetorder = that.$route.query.orderid
    }
    console.log(this.$route.query.ids)
    that.$http.get(
      `${that.oldhttpUrl}/scan/getJSSDKTicket?url=${window.location.href.split('#')[0]}`).then(message => {
        wx.config({
          debug: false,
          appId: message.data.appid,
          timestamp: message.data.timestamp,
          nonceStr: message.data.nonceStr,
          signature: message.data.signature, // 必填，签名，见附录1
          jsApiList: ['openLocation']
        })
      })
    let data = {
      orderId: that.creatgetorder
    }
    console.log(data)
    this.$http({
      method: 'post',
      url: this.httpUrl + 'app/reserve/selectOrderId',
      data: Qs.stringify(data)
    }).then(function (message) {
      console.log(message.data);
      if (message.data.resCode == 0) {
        that.detailed = message.data.result;

        localStorage.setItem('carnumbar', message.data.result.carNumber)
        localStorage.setItem('phone', message.data.result.phone)
        localStorage.setItem('devid', message.data.result.devid)
        localStorage.setItem('addres', message.data.result.parkingAddress)
        localStorage.setItem('name', message.data.result.parkingName)
        localStorage.setItem('startTime', message.data.result.startTime)
        that.detailed.latitude = message.data.result.latitude;
        that.detailed.longitude = message.data.result.longitude;
        that.devname = message.data.result.devname
        that.freeTime = message.data.result.freeTime
        // that.timeout = message.data.result.timeout;
        that.startTime = message.data.result.startTime.replace(/-/g, '/')
        that.endTime = message.data.result.endTime.replace(/-/g, '/')
        that.idmole = message.data.result.devid
        that.jingdu = message.data.result.longitude
        that.weidu = message.data.result.latitude
        console.log(that.jingdu)
        that.parkingAddress = message.data.result.parkingAddress
        that.namepark = message.data.result.parkingName

        let transTime = new Date(that.startTime).getTime()
        let transTimeend = new Date(that.endTime).getTime()
        let changtimes = (transTimeend - transTime) / (1000 * 60)

        that.newtimoutsp = (parseInt(changtimes / 60) > 0 ? parseInt(changtimes / 60) : 0) + '小时' + parseInt(changtimes % 60) + '分钟'
        if (localStorage.getItem('carlock')) {
          that.id = localStorage.getItem('carlock')
        }

        let datas = {
          devId: that.idmole,
          // devId:"56008352",
          // datastreamIds: '3001,4002,4003'
        }
        serchstates(datas).then(message => {
          if (JSON.parse(message.data.errMsg.substring(6, message.data.errMsg.length)).errno == 3) {
            // MessageBox('提示', '车位锁设备故障')
          } else {
            let list = message.data.errMsg.data.devices[0].datastreams , upState = '' , xinState = '';
            for (let i = 0; i < list.length; i++) {
              switch (list[i].id) {
                case '3001':
                  that.statePH = list[i].value;
                  break;
                case '4002':
                  upState = list[i].value;
                  break;
                case '4003':
                  xinState = list[i].value;
                  break;  
                default:
                  break;
              }              
            }
            // that.statePH = JSON.parse(message.data.errMsg.substring(6, message.data.errMsg.length)).data.datastreams[2].datapoints[0].value;
            // let upState = JSON.parse(message.data.errMsg.substring(6, message.data.errMsg.length)).data.datastreams[0].datapoints[0].value;
            // let xinState = JSON.parse(message.data.errMsg.substring(6, message.data.errMsg.length)).data.datastreams[1].datapoints[0].value;
            if (upState == 3) {
              that.upStateData = true;
            } else if (upState == 2) {
              that.upStateData = false;
            } else {
              that.upStateData = false;
            }
          }
        })
      }
    })

    if (that.$route.query.ids == 0 || that.$route.query.ids == 2) {
      that.potool = true
      console.log(that.endTime)
      console.log(that.startTime)
      // Indicator.close()
      // that.blockbox = true
      clearInterval(that.newtime)
      return false
    } else {
      that.newtime = setInterval(function () {

        let transTime = new Date(that.startTime).getTime()
        var times = new Date().getTime()
        // that.newtimout = that.newtimout + 1
        let changtime = parseInt((times - transTime) / (1000 * 60))
        console.log(changtime)
        console.log(that.freeTime)
        if (changtime < that.freeTime) {
          that.potool = true;
          that.cancelnpm = true
        } else {
          that.potool = true;
          that.closeings = true;
          that.cancelnpm = false
        }
        console.log(changtime)
        that.newtimout = (parseInt(changtime / 60) > 0 ? parseInt(changtime / 60) : 0) + '小时' + parseInt(changtime % 60) + '分钟'
        // Indicator.close()
        // that.blockbox = true
      }, 1000)
      setTimeout(() => {
        that.blockbox = true
        Indicator.close()
      }, 1000);
    }
    // this.$http({
    // 	method: 'get',
    // 	url: that.httpUrl + 'scan/getJSSDKTicket?url=' + window.location.href.split('#')[0]
    // }).then(function(message) {
    // 	console.log(message.data)
    // 	wx.config({
    // 		debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    // 		appId: message.data.appid, // 必填，公众号的唯一标识
    // 		timestamp: message.data.timestamp, // 必填，生成签名的时间戳
    // 		nonceStr: message.data.nonceStr, // 必填，生成签名的随机串
    // 		signature: message.data.signature, // 必填，签名，见附录1
    // 		jsApiList: ['openLocation'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    // 	});
    // })
  },
  destroyed () {
    clearInterval(this.newtime)
  }
}
</script>

<style scoped="scoped" lang="scss">
@import '../style/mixin.scss';
.boxB,
.boxT {
  background-color: white;
}
.boxT {
  margin-bottom: 0.2rem;
  display: flex;
}
.boxT img {
  width: 1.2rem;
  margin: 0.4rem 0.36rem 0.4rem 0.24rem;
}
.boxT div:nth-of-type(2) {
  padding: 0.3rem 0;
}
.boxT p:nth-of-type(1) {
  font-size: 0.36rem;
  color: #333333;
}
.boxT p:nth-of-type(2) {
  font-size: 0.26rem;
  color: #787878;
  padding: 0.2rem 0;
}
.boxT p:nth-of-type(3) {
  font-size: 0.26rem;
  color: #787878;
}
.boxT p:nth-of-type(3) span {
  color: #f68b1b;
}
.boxB p {
  width: 90%;
  margin: 0 5%;
  display: flex;
  justify-content: space-between;
  font-size: 0.28rem;
  color: #787878;
  height: 1rem;
  line-height: 1rem;
  border-bottom: 1px solid $hui;
}
.boxB p:nth-last-of-type(1) {
  border: none;
}
.boxB p span {
  display: block;
  width: 50%;
  text-align: right;
}
.boxB .left {
  text-align: left;
  color: #333333;
}
/*.boxB{margin-bottom: 30px;}*/
.ts {
  padding: 5%;
  color: #333333;
}

.controlBox {
  display: flex;
  margin: 0 auto;
  border-radius: 0.16rem;
  position: fixed;
  width: 100%;
  bottom: 0;
}
.control {
  display: flex;
  color: #ffffff;
  border-radius: 0.16rem;
  width: 85%;
  height: 0.9rem;
  text-align: center;
  line-height: 0.9rem;
  font-size: 0.32rem;
  background-color: #f68b1b;
  margin: 0.2rem auto;
}
.control > div {
  width: 50%;
  color: #ffffff;
}
.control > div:active {
  color: #f68b1b;
  background-color: #ffffff;
}
.control > a {
  width: 50%;
  color: #ffffff;
  background-color: #f68b1b;
  border-top-left-radius: 0.16rem;
  border-bottom-left-radius: 0.16rem;
  border-right: 1px solid #ffffff;
}
.control > a:active {
  color: #f68b1b;
  background-color: #ffffff;
}
.controlY {
  color: #787878;
  width: 85%;
  height: 0.9rem;
  border: 1px solid #ffffff;
  text-align: center;
  line-height: 0.9rem;
  font-size: 0.32rem;
  background-color: #ffffff;
}
.uncontrol {
  color: #ffffff;
  width: 85%;
  height: 0.9rem;
  border: 1px solid #787878;
  text-align: center;
  line-height: 0.9rem;
  font-size: 0.32rem;
  background-color: #787878;
}
.settlement {
  color: #ffffff;
  width: 85%;
  height: 0.9rem;
  border: 1px solid #f68b1b;
  text-align: center;
  line-height: 0.9rem;
  font-size: 0.32rem;
  background-color: #f68b1b;
}
.settlement:active {
  border-color: #eee;
}
#popup {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 0;
  top: 0;
}
.popupBox {
  width: 60%;
  background-color: #ffffff;
  text-align: center;
  margin: 50% 20%;
  border-radius: 5px;
}
.popupBox p {
  height: 30px;
  line-height: 0.6rem;
  font-size: 0.28rem;
  color: #f68b1b;
}
.popupBox p:nth-of-type(1) {
  padding-top: 0.1rem;
}
.popupBox p:nth-of-type(2) {
  margin: 0.18rem 0;
}
.popupBox p:nth-of-type(3) {
  border-top: 1px solid #d8d8d8;
  height: 0.8rem;
  line-height: 0.8rem;
}
.markMsg {
  width: 100%;
  height: 20px;
  line-height: 20px;
  text-align: center;
  color: #333333;
  margin-top: 0.2rem;
}
.popupBox img {
  width: 0.6rem;
}
.popupBox p:nth-of-type(3):active {
  background-color: #f68b1b;
  color: #ffffff;
}
.popupLod {
  width: 60%;
  text-align: center;
  margin: 50% 20%;
}
.popupLod img {
  width: 50%;
}

.err {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #d8d8d8;
  height: 0.8rem;
  line-height: 0.8rem;
  color: #f68b1b;
}
.err span {
  width: 50%;
}
.err span:active {
  color: #ffffff;
  background-color: #f68b1b;
}
.delete {
  color: #ffffff;
  border-radius: 0.16rem;
  width: 85%;
  height: 0.9rem;
  line-height: 0.9rem;
  font-size: 0.32rem;
  background-color: #f68b1b;
  margin: 0.2rem auto;
  text-align: center;
}
.delete:active {
  background-color: #ffffff;
  color: #f68b1b;
}
.prompt {
  color: #788778;
  padding-bottom: 0.1rem;
}
// .boxY{width: 80%;margin:1rem auto;display: flex;justify-content: space-between;}
.boxY {
  margin-bottom: 0.4rem;
}
.boxY div {
  width: 80%;
  height: 0.8rem;
  color: #fff;
  line-height: 0.8rem;
  text-align: center;
  font-size: 15px;
  margin: 0.2rem auto;
  border-radius: 5px;
}
.boxY div:nth-child(1) {
  margin-top: 0.3rem;
}
.boxY div:nth-child(2) {
}
.boxY div:nth-child(3) {
}
.red {
  color: red;
}
.blue {
  color: #676767;
}
footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  top: 0;
  // opacity: 0.5;
  background: rgba(0, 0, 0, 0.5);
}
footer .ulrep {
  width: 100%;
  position: fixed;
  bottom: 0;
  background: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  text-align: center;
  font-size: 15px;
  color: #303030;
  font-family: 'PingFang-SC-Regular';
  // border-bottom: 1px solid #999;
  height: 2.72rem;
}
footer ul li {
  // line-height: 0.9rem;
  height: 1.17rem;
  line-height: 1.17rem;
}

footer ul li:nth-last-child(1) {
  border-top: none;
}
footer ul li:nth-last-child(2) {
  // padding-top: 0.08rem;
  line-height: 1.17rem;
  border-bottom: 1px solid #999;
}

footer div p {
  margin-top: 0.22rem;
  color: #666;
  font-family: 'PingFang-SC-Regular';
  font-size: 0.2rem;
}
</style>