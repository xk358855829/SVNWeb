<template>
  <div style="background:#efefef;">
    <header style="font-size:18px;width:94%;margin:0 auto;padding-top:0.2rem;margin-bottom:0.2rem;">
      <h2 style="font-size: 0.25rem;
    font-weight: 600;">我的车牌</h2>
      <p style="margin-top:0.2rem;font-size:0.15rem;line-height:0.25rem;font-family: 'PingFang-SC-Regular'">亲爱的会员，您可添加您的爱车车牌，获得停车信息查询和快速缴费服务。</p>
    </header>
    <section style="height:100%;">
      <ul style="height:100%;width:100%">
        <li v-for="item in List"
            class="listli">
          <div class="firs">
            <div style="color:#999">
              <span v-if="item.priority==1">默认</span>车牌号</div>
            <div @click="delet(item.brandid,item)">
              <img src="../../static/image/alsi.png"
                   alt=""
                   style="width:0.15rem;height:0.15rem;">
            </div>
          </div>
          <div style="width:93%;margin:0 auto;margin-top:0.1rem;margin-bottom:0.1rem;">
            <p style="font-size:16px">{{item.brandname}}</p>
          </div>
          <div style="width:93%;margin:0 auto;margin-bottom:0.1rem;">
            <p style="color:#999">车牌类型</p>
          </div>
          <div class="firs bottomfir">
            <div style="font-size:16px"
                 v-if="item.brandname.length==7">普通车牌</div>
            <div style="font-size:16px"
                 v-if="item.brandname.length==8">新能源车牌</div>
            <div class="pari"
                 @click="paymoney(item.brandname)">停车缴费</div>
          </div>
        </li>
      </ul>
    </section>
    <div v-if="carnumber_hie">
      <div class="paytoot nicenew"
           @click="addnuma"
           v-if="laddcar">新增车牌号</div>
      <div class="paytoot nicenew"
           v-if="!laddcar">新增车牌号</div>
    </div>

    <div class="paytoot"
         @click="rightrecord">停车记录</div>
    <footer v-if="backgool"
            @click="conceal">
      <div>
        <p>选择支付订单</p>
        <ul>
          <li v-for="item in options"
              @click="checkeds(item.value)">{{item.label}}</li>
        </ul>
      </div>
    </footer>
  </div>
</template>
<script>
import axios from 'axios'
import Qs from 'qs'
import { MessageBox, Radio } from 'mint-ui';
import { shanchu, chazli, serarchc, delc, odertoos, changecarnumber } from './api/api.js'
export default {
  data () {
    return {
      List: [],
      laddcar: true,
      options: [{ label: '预约订单', value: '1' }, { label: '进场订单', value: '2' }],
      first: '',
      valueChoose: "1",
      backgool: false,
      repcarnumber: '',
      conrler: '',
      carnumber_hie: true
    }
  },
  watch: {

  },
  beforeRouteLeave (to, from, next) {
    if (to.name == 'login' && from.name == 'list') {
      next({ path: '/list' })
    } else {
      next()
    }

  },
  mounted () {
    // if (window.history && window.history.pushState) {
    //   history.pushState(null, null, document.URL); window.addEventListener('popstate', this.fun, false)//false阻止默认事件  }
    // }
    // history.pushState(null, null, document.URL);
    // window.addEventListener('popstate', function () {
    //   history.pushState(null, null, document.URL);
    // });
    window.addEventListener('popstate', this.backage, false)
    let data = {
      openid: this.openid
      // openid:'o8Aq-5juGaY8f5uYhYeGUHyi8TVM'
    }
    console.log(data)
    serarchc(data).then(res => {
      console.log(res)
      if (res.data.resCode == 200) {
        if (res.data.result.length == 0) {
          this.$router.push({ path: '/card', query: { arr: 7 } })
        } else {

          this.List = res.data.result
          if (this.List.length == 2) {
            this.carnumber_hie = false
          } else {
            this.carnumber_hie = true
          }
          // localStorage.setItem('listcard', JSON.stringify(this.List))
        }
      }
    })
    // if (localStorage.getItem('list')) {
    //   this.List = (JSON.parse(localStorage.getItem('list'))).split(",")
    // } else {
    //   this.$router.push({ path: '/card', query: { arr: 7 } })
    // }
    // console.log(this.List)
  },
  destroyed () {
    window.removeEventListener('popstate', this.backage, false);//false阻止默认事件
  },
  methods: {
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
      let state = {
        title: 'title',
        url: '#'
      }
      window.history.pushState(state, 'title', "#/list")
    },
    checkeds (val) {
      // console.log(val)
      sessionStorage.removeItem('ticknumbar1')
      sessionStorage.removeItem('ticknumbar2')
      sessionStorage.removeItem('ticknumbar3')
      console.log(this.valueChoose)
      if (val == 2) {
        this.pmoney()
      } else if (val == 1) {
        this.licektl()
      }
      // repcarnumber
    },
    licektl () {
      let data = {
        carNumber: this.repcarnumber
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
          localStorage.setItem('parkingIds', message.data.result.parkingIds)
          localStorage.setItem('HPrice', message.data.result.HPrice)
          if (message.data.result.price == '0.00') {
            MessageBox.confirm('', {
              message: '您在免费时长内,您未驶入停车场,是否取消订单？',
              title: '提示',
              confirmButtonText: '确定',
              cancelButtonText: '取消'
            }).then(action => {
              if (action == 'confirm') {
                let datas = {
                  openid: this.openid,
                  resId: message.data.result.tradeNo,
                  parkId: message.data.result.parkingId,
                  devId: message.data.result.devid
                }
                odertoos(datas).then(res => {
                  if (res.data.resCode == 0) {

                  }
                })
              }
            })

          } else {
            this.$router.push({              path: '/payyuyue', query: { vals: message.data.result, orderg: this.$route.query.orderid }
            })
          }

        } else {
          MessageBox('提示', '暂无订单信息')
        }
      })
    },
    // fun () {
    //   this.first = null;
    //   if (!this.first) {
    //     this.first = new Date().getTime()
    //     this.$router.push('/home/list')
    //     this.first = null
    //   } else {

    //   }
    //   // } else {
    //   //   alert(90)
    //   //   if (new Date().getTime() - this.first < 1000) {

    //   //     plus.runtime.quit(); //那么就退出app
    //   //   }
    //   // }
    // },
    delet (val, vals) {
      console.log(val)
      this.List.forEach(a => {
        if (a.brandid != val) {
          console.log(a.brandid)
          this.conrler = a.brandid
        }
      })
      MessageBox.confirm('', {
        message: '确认要删除车牌号么？',
        title: '提示',
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(action => {
        if (action == 'confirm') {     //确认的回调
          console.log(val)
          let data = {
            brandid: val,
            id: this.conrler ? this.conrler : 1
          }
          delc(data).then(res => {
            console.log(res)
            if (res.data.resCode == 200) {
              // MessageBox('提示', '删除成功');
              window.location.reload()

            } else {
              MessageBox.confirm('默认车牌不能删除', '提示');
              // res.data.msg
            }
          })
        }
      })
    },
    addnuma () {
      // console.log(this.List.length)
      // if (this.List.length > 1) {
      //   this.laddcar = false
      //   MessageBox('提示', '车牌号码最多添加2个');
      // } else {
      //   this.$router.push({ path: '/card', query: { arr: 7 } })
      // }
      this.$router.push({ path: '/card', query: { arr: 7 } })
    },
    rightrecord () {

      this.$router.push({ path: '/record' })
    },
    conceal () {
      this.backgool = !this.backgool
    },
    paymoney (val) {

      this.repcarnumber = val
      chazli({ car_number: val }).then(message => {
        if (message.data.resCode == 4) {
          MessageBox.confirm('', {
            message: '请确认' + this.repcarnumber + '是否为您的车牌？',
            title: '提示',
            confirmButtonText: '确定',
            cancelButtonText: '取消'
          }).then(action => {
            if (action == 'confirm') {
              let params = {
                errorCarNumber: message.data.result.carNumber,
                correctCarNumber: this.repcarnumber,
              }
              changecarnumber(params).then(res => {
                if (res.data.resCode == 0) {
                  MessageBox('提示', '更换成功');
                }
              })
            }
          })
        } else {
          axios({
            method: 'post',
            url: this.httpUrl + '/api/checkCarNumberIsOrdered',
            data: Qs.stringify({
              carNumber: val
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
              // MessageBox('提示', '暂无订单信息');
            }
          })
        }
      })
    },
    pmoney () {

      let data = {
        car_number: this.repcarnumber
      }
      console.log(this.repcarnumber)
      chazli(data).then(message => {
        if (message.data.resCode == 1 || message.data.resCode == 2) {
          console.log(message)
          localStorage.setItem('carnumber', message.data.carnumber)
          localStorage.setItem('longdate', message.data.longdate)
          localStorage.setItem('onsale_price', message.data.onsale_price)
          localStorage.setItem('paid_price', message.data.paid_price)
          localStorage.setItem('paking_lot_name', message.data.paking_lot_name)
          localStorage.setItem('price', message.data.price)
          localStorage.setItem('startdate', message.data.startdate)
          localStorage.setItem('time_out', message.data.time_out)
          localStorage.setItem('img', message.data.img)
          localStorage.setItem('parkingId', message.data.parkingId)
          localStorage.setItem('HPrice', message.data.HPrice)
          if (message.data.price == 0) {
            MessageBox('提示', '本次停车在免费内！');
          } else {
            this.$router.push({ path: '/pay', query: { vals: message.data } })
          }


        } else if (message.data.resCode == 0 || message.data.resCode == -1) {
          MessageBox('提示', message.data.result);
        } else if (message.data.resCode == -2) {
          MessageBox('提示', message.data.result);
        } else if (message.data.resCode == 3) {
          this.$router.push({ path: '/vipcard', query: { carnumber: this.repcarnumber } })
        } else if (message.data.resCode == 4) {
          MessageBox.confirm('', {
            message: '请确认' + this.repcarnumber + '是否为您的车牌？',
            title: '提示',
            confirmButtonText: '确定',
            cancelButtonText: '取消'
          }).then(action => {
            if (action == 'confirm') {
              let params = {
                errorCarNumber: message.data.result.carNumber,
                correctCarNumber: this.repcarnumber,
              }
              changecarnumber(params).then(res => {
                if (res.data.resCode == 0) {
                  MessageBox('提示', '更换成功');
                }
              })
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.listli {
  width: 94%;
  margin: 0 auto;
  border: 1px solid #b4a9a9;
  height: 1.2rem;
  border-radius: 5px;
  margin-top: 0.3rem;
}
.listli .firs {
  display: flex;
  justify-content: space-between;
  width: 92%;
  margin: 0 auto;
  margin-top: 0.1rem;
}
.listli .bottomfir {
  margin-top: 0rem;
}
.pari {
  width: 0.7rem;
  height: 0.3rem;
  background: #f68b1c;
  line-height: 0.3rem;
  border-radius: 20px;
  text-align: center;
  margin-top: -0.05rem;
  color: #fff;
}
.paytoot {
  width: 94%;
  margin: 0 auto;
  height: 0.5rem;

  line-height: 0.5rem;
  text-align: center;
  font-size: 16px;
  border-radius: 5px;
  background: #f68b1b;
  color: #fff;
  cursor: pointer;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
}
.nicenew {
  height: 1.2rem;
  background: rgb(239, 239, 239);
  border: 1px dashed #b4a9a9;
  line-height: 1.2rem;
  color: #000;
}
footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  top: 0;
  height: 100%;
  left: 0;
  right: 0;
  /* opacity: 0.5; */
  background: rgba(0, 0, 0, 0.5);
  font-family: 'PingFang-SC-Regular';
  z-index: 5;
}
footer div {
  height: 1.36rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  background: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  text-align: center;
  font-size: 15px;
  z-index: 55;
  /* color: #fff; */
}
footer ul li {
  height: 0.55rem;
  line-height: 0.55rem;
  color: #303030 !important;
}
footer p {
  margin-top: 0.11rem;
  color: #666 !important;
  transform: scale(0.84);
}
footer ul li:nth-last-child(1) {
  border-top: 1px solid #999;
}
</style>


