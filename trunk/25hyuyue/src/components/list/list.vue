<template>
  <div class="box"
       style="">
    <div style="overflow-y:auto;-webkit-overflow-scrolling : touch;">
      <div v-if="!detailshow"
           style="margin-bottom:0.99rem;height:101%;overflow-y:auto;">
        <footer>
          <img src="../../../static/image/puxi.png"
               alt="">
          <div>{{$route.query.priceid}}</div>
        </footer>
        <section class="top">
          <ul>
            <li class="time">
              <div>预约时间</div>
              <div>
                <!-- <span @click="openPickerstart">{{(dangtime).slice(5,16)}}</span>
                <mt-datetime-picker ref="picker"
                                    v-model="pickerVisible"
                                    type="datetime"
                                    year-format="{value}"
                                    month-format="{value}"
                                    date-format="{value}"
                                    hour-format="{value}"
                                    minute-format="{value}"
                                    @confirm="handleConfirm">
                </mt-datetime-picker> -->
                <span>{{(dangtime).slice(0,16)}}</span>
                <!-- <span @click="openPickerend">{{(dangtimes).slice(5,16)}}</span>
                <mt-datetime-picker ref="picekrs"
                                    v-model="pickerVisibles"
                                    type="datetime"
                                    year-format="{value}"
                                    month-format="{value}"
                                    date-format="{value}"
                                    hour-format="{value}"
                                    minute-format="{value}"
                                    @confirm="handleConfirms">
                </mt-datetime-picker> -->
                <!-- <img src="../../../static/image/arrow.png"
                     alt=""> -->
              </div>
            </li>
            <li>
              <div>支付方式</div>
              <div>微信

              </div>
            </li>
          </ul>
        </section>
        <section>
          <ul class="secul">
            <li>
              <div>联系人</div>
              <div>
                <input type="text"
                       v-model="name"
                       style=""
                       placeholder="请输入联系人"
                       @blur="bottocenter">
              </div>

            </li>
            <li>
              <div>联系方式</div>
              <div>
                <input type="text"
                       v-model="phone"
                       placeholder="请输入联系方式"
                       @blur="bottocenter">
              </div>

            </li>
            <li style="position:relative">
              <!-- <div>车牌号</div>
							<div>
								<input type="text" v-model="carnumber" placeholder="请输入车牌号" @blur="bottocenter">
							</div> -->
              <div>
                <span>

                </span>
                <span class="cLeft">选择车牌：</span>
              </div>
              <div @click="brandB()">{{brandname}}&nbsp;<img style="width: 0.3rem;"
                     src="../../../static/image/jt.png" /></div>
              <ul v-if="brand==1"
                  class="brandnameList">
                <li @click="brandN(index)"
                    v-for="(brand,index) in arrlistcarnam"
                    :key="index"
                    class="brandli">{{brand.brandname}}</li>
                <li class="brandli">
                  <router-link class='addCard'
                               to='/card'>+</router-link>
                </li>
              </ul>
            </li>
            <li style="position:relative">
              <div>停车场:</div>
              <div>
                <!--  <select v-model="arr"
                          placeholder="请选择停车场" class='parkSel'>
               <option v-for="item in parkList"
                          :label="item.parking_name"
                           :value="item.id"></option>
               </select> -->
                <div @click="brandC()">{{arr}}&nbsp;<img style="width: 0.3rem;"
                       src="../../../static/image/jt.png" /></div>
                <ul v-if="posin==1"
                    class="brandnameListC">
                  <li @click="brandP(index)"
                      v-for="(brand,index) in parkList"
                      :key="index"
                      class="brandli">{{brand.parking_name}}</li>
                </ul>
                <!--  <input type="text"
                       v-model="arr"
                       placeholder="请输入停车地址"
                       @blur="bottocenter"></input> -->
                <!-- <img src="../../../static/image/arrow.png" alt=""> -->
              </div>
            </li>
            <li>
              <div>备注</div>
              <div>
                <input type="text"
                       v-model="listremark"
                       placeholder="请输入备注"
                       @blur="bottocenter">
              </div>
            </li>
          </ul>
        </section>

      </div>
    </div>
    <div class="foot">
      <div>￥{{$route.query.money}}</div>
      <div @click="yesPay"
           v-if="mastepay">确认支付</div>
      <div v-else>确认支付</div>
    </div>
  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
import { bus } from '../bus/bus.js'
import { formatDate, Login, showTime, takePark, orderplan } from '../api/api.js'
import { isLicensePlate } from '../api/filter.js'
import { MessageBox, DatetimePicker } from 'mint-ui';
import { mapMutations, mapState, mapActions } from 'vuex'
export default {
  name: 'list',
  data () {
    return {
      brandname: '',
      brandnameList: [{ brandname: '' }],
      detailshow: false,
      listremark: '',
      posin: 0,
      keyaddress: '',
      listdetail: '',
      arr: '请选择停车场',
      name: '',
      phone: '',
      pickerVisible: '',
      pickerVisibles: '',
      // birthday:'',
      objs: Object,
      dangtime: '',
      dangtimes: '',
      mastepay: true,
      brand: 0,
      appId: '',
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: '',
      paySign: '',
      cardnumber: '',
      arrlistcarnam: [],
      parkList: []
    }
  },
  created () {
    // var that=this;
    // bus.$on("nols",function(val){
    // 	that.arr=val
    // })
    // 111111111111111111111?
    this.selectAll();
    console.log(this.mark)
  },
  watch: {
    $route (to, from) {
      console.log(to.path);
      if (to.path == '/home') {
        that.USER({
          name: '',
          phone: '',
          birthday: '',
          birthdays: ''
        })
      }
    },
    namebra (a, b) {
      console.log(a)
      this.arrlistcarnam = a
      this.arrlistcarnam.forEach((x, y) => {
        if (x.priority == "1") {
          this.brandname = x.brandname
          // sessionStorage.setItem('brands', this.brandname)
        }
      })
    }
  },
  computed: {
    ...mapState(['mark', 'address', 'userInfo', 'orders']),
    ...mapState({
      namebra: state => state.brand.brandarrs
    })
  },
  methods: {
    ...mapMutations(['ORDERDETAIL', 'USER']),
    ...mapActions(['gbrands']),
    bottocenter () {
      window.scrollTo(0, 0)
    },
    brandB () {
      if (this.brand == 0) {
        this.brand = 1;
        this.posin = 0;
      } else {
        this.brand = 0;
        this.posin = 0;
      }
    },
    brandC () {
      if (this.posin == 0) {
        this.brand = 0;
        this.posin = 1;
      } else {
        this.posin = 0;
        this.brand = 0;
      }
    },
    brandN (index) {
      console.log(index)
      this.brandname = this.namebra[index].brandname;
      this.brand = 0;
    },
    brandP (index) {
      console.log()
      this.arr = this.parkList[index].parking_name;
      this.keyaddress = this.parkList[index].id;
      this.posin = 0;
    },
    nic (val) {
      console.log(this.dangtime)
      this.USER({
        name: this.name,
        phone: this.phone,
        carnumber: this.brandname,
        birthday: this.dangtime,
        birthdays: this.dangtimes
      })
      this.$router.push({ path: val })
    },
    async yesPay () {
      console.log(11)
      console.log(this.arr)
      this.mastepay = false;
      console.log(this.brandarr)
      if (!this.name || !this.phone || !this.brandname || this.arr == '请选择停车场') {
        MessageBox('提示', '请输入订单信息');
      } else {
        if (!(/^1[2|3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.phone)) || !isLicensePlate(this.brandname)) {
          MessageBox('提示', '手机号码或车牌号码不正确');
        } else {
          let that = this;

          let data = {
            // openid:'o8Aq-5v-iRRACkOyuOSAk8Fs0sbg',
            openid: localStorage.getItem('openid'),
            payment: '微信',
            uname: that.name,
            money: that.$route.query.money,

            cname: that.$route.query.priceid,
            phone: that.phone,
            // phone:'17549206920',

            country: that.brandname,
            keyaddress: that.keyaddress,
            address: that.arr,
            memarks: that.listremark,
            starTime: that.dangtime,

          }
          console.log(data)


          let res = await Login(data)
          if (res.data.resCode == "0k") {
            this.cardnumber = res.data.result
          } else {
            MessageBox({
              title: '提示',
              message: res.data.result,
              closeOnClickModal: false,
            }).then(action => {
              that.mastepay = true;
            })
          }
          let datas = {
            money: this.$route.query.money,
            weiTrade: this.cardnumber,
            openId: localStorage.getItem('openid'),
            ip: returnCitySN.cip
          }
          let message = await orderplan(datas)

          if (message.data.resCode == 'OK') {

            that.appId = message.data.appId;
            that.timeStamp = message.data.timeStamp;
            that.nonceStr = message.data.nonceStr;
            that.package = message.data.package;
            that.signType = message.data.signType;
            that.paySign = message.data.paySign;


            if (typeof WeixinJSBridge == "undefined") {
              if (document.addEventListener) {
                document.addEventListener('WeixinJSBridgeReady', that.onBridgeReady(), false);
              } else if (document.attachEvent) {
                document.attachEvent('WeixinJSBridgeReady', that.onBridgeReady());
                document.attachEvent('onWeixinJSBridgeReady', that.onBridgeReady());
              }
            } else {
              that.onBridgeReady();

            }


          }





          // 接
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
                paytime: that.dangtime,
                carnumber: that.country,
                jixing: that.cname,
                number: that.cardnumber,
                openId: localStorage.getItem("openid"),
                money: that.money
              })
            }).then(res => {
              MessageBox({
                title: '提示',
                message: '支付成功',
                closeOnClickModal: false,
              }).then(action => {
                that.mastepay = true
                that.$router.push({ path: '/home' })

              })

            })
          }
        });
    },
    selectAll () {
      let data = {
        page: 1,
        pageSize: 200,
        userId: 'SURIOT',
        dealer: '123'
      }
      takePark(data).then(res => {
        console.log(res);
        this.parkList = res.data.result
      })
    },
    openPickerstart () {
      this.$refs.picker.open();
      console.log(this.pickerVisible)
      this.pickerVisible = this.dangtime
      console.log()
    },
    openPickerend () {
      this.$refs.picekrs.open()
      this.pickerVisibles = this.dangtimes
    },
    openPicker () {
      this.$refs.picker.open();
    },

    handleConfirm (data) {
      this.dangtime = formatDate(data);   //获取的时间为时间戳，getdata是自己写的一个转换时间的方法
      console.log(this.birthday)
    },
    handleConfirms (data) {
      this.dangtimes = formatDate(data);
    }
  },
  mounted: function () {

    let parm = {
      openid: localStorage.getItem('openid')
      // openid:'o8Aq-5v-iRRACkOyuOSAk8Fs0sbg'
    }
    this.gbrands(parm)
    // this.$http({
    // 	method: 'post',
    // 	url:  this.httpUrl+'app/brand/list',
    // 	data: Qs.stringify({
    // 		openid:localStorage.getItem('openid')
    // 	})
    // }).then(message=>{
    // 	console.log(message.data.result)
    // 	if(message.data.result=='未添加车牌'){
    // 		this.code=5;
    // 	}else{
    // 		this.brandnameList = message.data.result;
    // 		let len=this.brandnameList.length;
    // 		for (var i=0;i<len;i++) {
    // 			if(this.brandnameList[i].priority==1){
    // 				this.brandname = message.data.result[i].brandname;
    // 			}
    // 		}

    // 	}
    // })

    // setInterval(function () {
    this.dangtime = showTime()
    // }, 1000);

    // this.dangtimes = showTime()
    console.log(this.dangtime)
    this.listremark = this.mark
    // this.arr = this.address
    this.name = this.userInfo.name
    this.phone = localStorage.getItem('tel')
    // this.carnumber = this.userInfo.brandname
    this.objs = this.$route.query.val
    // if (this.userInfo.birthday) {
    //   this.dangtime = this.userInfo.birthday
    // } else {
    //   this.dangtime = this.dangtime
    // }
    // if (this.userInfo.birthday) {
    //   this.dangtimes = this.userInfo.birthdays
    // } else {
    //   this.dangtimes = this.dangtimes
    // }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/mixin.scss';
html,
body {
  -webkit-overflow-scrolling: touch;
}
.square {
  @include font(15px, 0.98rem, 'PingFang-SC-Regul');
  color: #fff;
}
.box {
  background: #efefef;
  @include wh(100%, 100%);
}
footer {
  @include wh(6.86rem, 1.76rem);
  position: relative;
  margin: 0 auto;
  padding-top: 0.4rem;
  margin-bottom: 0.4rem;
}
footer img {
  @include wh(100%, 100%);
}
footer div {
  @include wh(100%, 0.4rem);
  margin: 0 auto;
  position: absolute;
  top: 40%;
  text-align: center;
  @include font(34px, 0.6rem, 'PingFang-SC-Regul');
  color: rgb(254, 254, 254);
}
section,
ul {
  width: 6.86rem;
  margin: 0 auto;
}
section li {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @include wh(91%, 1.2rem);
  background: #fff;
  padding: 0 0.3rem;
}
section li div:nth-child(1) {
  @include font(15px, 1.2rem, 'PingFang-SC-Regul');
}
.time {
  border-bottom: 0.02rem solid rgb(239, 239, 239);
}
section li div:nth-child(2) {
  @include font(15px, 1.2rem, 'PingFang-SC-Regul');
  color: rgb(246, 139, 28);
}
.top {
  margin-bottom: 0.4rem !important;
}
// li p{@include wh(0.07rem,0.12rem);}
li img {
  @include wh(0.16rem, 0.24rem);
}
input {
  border: none;
  outline: none;
  text-align: right;
  @include font(15px, 1.2rem, 'PingFang-SC-Regul');
  color: rgb(104, 104, 104);
  height: 0.8rem;
}
.foot {
  @include wh(100%, 0.98rem);
  display: flex;
  position: fixed;
  bottom: 0;
  font-size: 15px;
}
.foot div {
  color: #fff;
}
.foot div:nth-child(1) {
  @include wh(70%, 100%);
  background: rgb(41, 41, 41);
  @extend .square;
  padding-left: 0.6rem;
}
.foot div:nth-child(2) {
  @extend .square;
  @include wh(30%, 100%);
  background: rgb(246, 139, 28);
  text-align: center;
}
.secul li {
  border-bottom: 0.02rem solid rgb(239, 239, 239);
}
// .time span{font-size:10px;}
textarea {
  width: 100%;
  height: 98%;
  border: 0;
  text-align: right;
  line-height: 30px;
}
input {
  line-height: 0.35rem !important;
}
.parkSel {
  border: 0 !important;
  outline: 0 !important;
  text-align: right !important;
}
.parkSel option {
  border: 0 !important;
  outline: 0 !important;
  text-align: right !important;
}
.brandnameListC {
  position: absolute;
  width: 4rem;
  background-color: #ffffff;
  z-index: 999;
  right: 0;
  top: -3.8rem;
  text-align: center;
  border: 1px solid #d8d8d8;
  overflow: scroll;
  max-height: 3.7rem;
}
.brandnameListC .brandli {
  line-height: 0.7rem;
  border-bottom: 1px solid #d8d8d8;
  height: 0.7rem;
  text-align: center;
}
.brandnameListC .brandli:nth-last-of-type(1) {
  border: none;
}
.brandnameList {
  position: absolute;
  width: 2rem;
  background-color: #ffffff;
  z-index: 999;
  right: 0;
  top: 1.22rem;
  text-align: center;
  border: 1px solid #d8d8d8;
  overflow: scroll;
  max-height: 3.7rem;
}
.brandnameList .brandli {
  line-height: 0.7rem;
  border-bottom: 1px solid #d8d8d8;
  height: 0.7rem;
  text-align: center;
}
.brandnameList .brandli:nth-last-of-type(1) {
  border: none;
}
.addCard {
  border: 1px solid #787878;
  width: 0.4rem;
  height: 0.4rem;
  display: block;
  line-height: 0.4rem;
  border-radius: 50%;
  margin: 0.17rem 0.5rem;
  color: #787878;
}
</style>
