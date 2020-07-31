<template>
  <div style="width:100%;height:100%;background:#fff;" v-if="showInfo">
    <div style="width:91.5%;margin:0 auto;padding:0.48rem 0 3.9rem;">
      <!-- <p v-if="ismember==true" style="font-size:18px;color:#f68b1c;">会员已到期，请及时续费</p>
      <p v-if="ismemberfree==true" style="font-size:25px;color:#f68b1c;">会员免费</p>
      <p v-else="" style="font-size:25px;color:#f68b1c;">{{y>=0?y:0}}元</p> -->
      <p style="font-size:0.36rem;color:rgb(48,48,48);text-align:left;font-family: 'PingFangSC-Regular';line-height:0.4rem;margin-bottom:0.48rem;">请选择服务</p>
      <ul class="menu">
        <li :id="showmodel4==true?'menulist1':'menulist'" :class="{active:active == item.cid}" :ref="'menulist'+item.cid" v-for="item in menu" :key="item.cid" @click="choosetype(item.cid,item.cname,item.money)"
          v-if="item.cid==1" :style="{ backgroundImage: 'url(' + img1 + ')' }">
          <div class="washtypeinfo">
            <input type="radio" value="" name="reserve" id="radio" class="radio" :checked="active == item.cid">
            <div>
              <p>{{item.cname}}</p>
              <p>机器打蜡洗车</p>
            </div>
          </div>
          <div class="washmoney">
            <p><span>￥</span>{{item.money}}.<span>00</span></p>
            <img v-if="active == item.cid" src="../../static/image/washcartype4.png" alt="">
            <img v-else="" src="../../static/image/washcartype5.png" alt="" style="opacity:0.4;">
          </div>
        </li>
        <li :id="showmodel4==true?'menulist1':'menulist'" :class="{active:active == item.cid}" :ref="'menulist'+item.cid" v-for="item in menu" :key="item.cid" @click="choosetype(item.cid,item.cname,item.money)"
          v-if="item.cid==2" :style="{ backgroundImage: 'url(' + img2 + ')' }">
          <div class="washtypeinfo">
            <input type="radio" value="" name="reserve" id="radio" class="radio" :checked="active == item.cid">
            <div>
              <p>{{item.cname}}</p>
              <p>泡沫极速去污</p>
            </div>
          </div>
          <div class="washmoney">
            <p><span>￥</span>{{item.money}}.<span>00</span></p>
            <img v-if="active == item.cid" src="../../static/image/washcartype2.png" alt="">
            <img v-else="" src="../../static/image/washcartype3.png" alt="" style="opacity:0.4;">
          </div>
        </li>
        <li :id="showmodel4==true?'menulist1':'menulist'" :class="{active:active == item.cid}" :ref="'menulist'+item.cid" v-for="item in menu" :key="item.cid" @click="choosetype(item.cid,item.cname,item.money)"
          v-if="item.cid==4" :style="{ backgroundImage: 'url(' + img3 + ')' }">
          <div class="washtypeinfo">
            <input type="radio" value="" name="reserve" id="radio" class="radio" :checked="active == item.cid">
            <div>
              <p>标准快洗</p>
              <p>共享汽车专用</p>
            </div>
          </div>
          <div class="washmoney">
            <p><span>￥</span>{{item.money}}.<span>00</span></p>
            <img v-if="active == item.cid" src="../../static/image/washcartype4.png" alt="">
            <img v-else="" src="../../static/image/washcartype5.png" alt="" style="opacity:0.4;">
          </div>
        </li>
      </ul>
      <div style="width:90%;margin:0 auto;">
        <ul class="washprogress">
          <li v-for="item in washprogress" :key="item.id" v-if="active==1">
            <p>
              <img :src="item.img" alt="">
              <span>{{item.label}}</span>
            </p>
            <img v-if="item.id!=4" src="../../static/image/washprocess.png" alt="">
          </li>
          <li v-for="item in washprogress1" :key="item.id" v-if="active==2">
            <p>
              <img :src="item.img" alt="">
              <span>{{item.label}}</span>
            </p>
            <img v-if="item.id!=4" style="right:-0.6rem;" src="../../static/image/washprocess.png" alt="">
          </li>
          <li v-for="item in washprogress2" :key="item.id" v-if="active==4">
            <p>
              <img :src="item.img" alt="">
              <span>{{item.label}}</span>
            </p>
            <img v-if="item.id!=4" style="right:-1rem;" src="../../static/image/washprocess.png" alt="">
          </li>
        </ul>
      </div>
    </div>
    <div class="paybottomwrap">
      <div class="openvip" @click="vip">
        <div style="width:91.5%;margin:0 auto;"><span>会员开通 &nbsp;预计可省￥50以上</span><span>立即开通 ></span></div>
      </div>
      <div class="opencoupon" @click="tica">
        <span>优惠券</span>
        <!-- <span>暂无可用 ></span> -->
        <span v-if="loack==1">优惠券 ></span>
        <span v-if="loack==2">免费时长{{disp}}分钟 ></span>
        <span v-if="loack==3" style="color:#f68b1b;">红包优惠{{disp}}元 ></span>
        <span v-if="loack==4">红包折扣{{(disp)/10}}折 ></span>
        <span v-if="loack==5">不使用 ></span>
      </div>
      <div class="paybottom">
        <p>
          <input type="checkbox" v-model="agreewith" value="" name="reserve" id="agree" class="agree" checked="agreewith">
          <span>同意</span>
          <span @click="ckdservices">《车口袋洗车服务协议》</span>
        </p>
        <p>
          <span>总计: <span>￥{{y>=0?y:0}}</span></span>
          <span :class="ispay==false ? 'ispaytime' : ''" @click="ispay&&rightnow()">确认下单</span>
        </p>
      </div>
    </div>
    <!-- <div style="background:#e6e6e6;height:0.26rem;width:100%;"></div> -->
    <!-- <ul class="payul">
      <li style="position:relative" class="meiyong">
        <div>
          <span class="cLeft">选择车牌</span>
        </div>
        <div @click="brandB()" style="color:red;font-size:0.4rem;">{{brandname}}&nbsp;<img style="width: 0.3rem;" src="../../static/image/jt.png" /></div>
        <mt-popup v-model="popupVisible" position="bottom">
          <div v-if="brandnameList.length>0">
            <div v-for="(brand,index) in brandnameList" :key="index" @click="brandN(index)">
              {{brand.brandname}}
            </div>
          </div>
          <div>
            <div @click="clearCarNumber()">清空</div>
          </div>
          <div>
            <router-link class="addCard" :to="{ path:'/card',query: { arr: 7 ,distinction:5}}">+</router-link>
          </div>
        </mt-popup>        
      </li>
      <li style="position:relative" class="meiyong" v-if="userVipInfoList.length>0">
        <div>
          <span class="cLeft">会员名称</span>
        </div>
        <div v-if="userVipInfoList.length > 1" @click="choseVip()" style="color:red;font-size:0.4rem;">{{userVipname}}&nbsp;<img style="width: 0.3rem;" src="../../static/image/jt.png" /></div>
        <div v-else="">{{userVipname}}</div> 
        <mt-popup v-model="popupVisible2" position="bottom">
          <div v-if="userVipInfoList.length>0">
            <div v-for="(brand,index) in userVipInfoList" :key="index" @click="choseVipN(index,brand)">
              {{brand.alias}}
            </div>
          </div>
        </mt-popup>        
      </li>
      <li style="position:relative" class="meiyong">
        <div>
          <span class="cLeft">洗车机名称</span>
        </div>
        <div v-if="carnameList.length > 1" @click="chosecarID()">{{carname}}&nbsp;<img style="width: 0.3rem;"
                src="../../static/image/jt.png" /></div>
        <div v-else="">{{carname}}</div>        
        <mt-popup v-model="popupVisible1" position="bottom">
          <div v-for="(brand,index) in carnameList" :key="index" @click="chosecarIDN(index)">
            {{brand.name}}
          </div>
        </mt-popup>        
      </li>
      <li class="meiyong">
        <div style="sanli">优惠券</div>
        <div>
          <p @click="tica" style="display:inline-block;">
            <span v-if="loack==1">优惠券</span>
            <span v-if="loack==2">免费时长{{disp}}分钟</span>
            <span v-if="loack==3" style="color:#f68b1b;">红包优惠{{disp}}元</span>
            <span v-if="loack==4">红包折扣{{(disp)/10}}折</span>
            <span v-if="loack==5">不使用</span>
            <img
              src="../../static/image/arr.png"
              style="vertical-align: middle;margin-top:-2px;width:0.14rem;height:0.24rem;"
            />
          </p>  
          <img v-if="iscarshop == 1" src="../../static/image/saoyisao.png" alt="" style="vertical-align: middle;margin:-2px 0px 0 8px;width:0.4rem;height:0.4rem;" @click="getcoupon()">        
        </div>        
      </li>
      <li class="meiyong">
        <div style="sanli">开通会员</div>
        <div style="width:50%;text-align:right;" @click="vip">
          <p style="display:inline-block;">            
            <img
              src="../../static/image/arr.png"
              style="vertical-align: middle;margin-top:-2px;width:0.14rem;height:0.24rem;"
            />
          </p>         
        </div>        
      </li>      
    </ul> -->
    <!-- <div v-if="pay.member==1" :class="ispay ? 'paytoot' : 'paytoot1'" @click="ispay&&rightnow()">立即洗车</div>
    <div v-else="" :class="ispay ? 'paytoot' : 'paytoot1'" @click="ispay&&rightnow()">立即付款</div> -->
  </div>
</template>
<script>
import axios from "axios";
import Qs from "qs";
import { MessageBox, Indicator, Popup } from "mint-ui";
import {
  chosecar,
  serarchc,
  valueop,
  Order,
  code,
  getParkingLotListApi,
  nowDate
} from "./api/api.js";
export default {
  name: "pay",
  data() {
    return {
      img1: "./staticxiche/image/washcartype1.png",
      img2: "./staticxiche/image/washcartype.png",
      img3: "./staticxiche/image/washcartype1.png",
      // img1: '../../static/image/washcartype1.png',
      // img2: '../../static/image/washcartype.png',
      // img3: '../../static/image/washcartype1.png',
      showInfo: false,
      active: 1,
      markmoney: false,
      shenum: 0,
      a: "",
      b: "",
      c: "",
      d: "",
      e: "",
      f: "",
      g: "",
      h: "",
      fullscreen: false,
      y: "",
      appId: "",
      loack: "5",
      timeStamp: "",
      nonceStr: "",
      package: "",
      signType: "",
      paySign: "",
      ticketNumber: "",
      disp: "",
      isTicket: "",
      numji: "",
      moneys: "",
      isOrdered: "",
      onsale: "",
      out_trade_no: "",
      wrigh: "",
      useMark: "",
      menu: [],
      menulist: {
        cid: 4,
        cname: "4",
        money: "0",
        sid: 19,
        sold: 0
      },
      weiTrade: "",
      pay: {
        sid: "",
        sname: "",
        name: "",
        phone: "",
        carNumber: "",
        carModel: "",
        carMoney: "",
        ip: "",
        openid: "",
        coupon: "",
        member: "",
        carOnsale: 0,
        carAmount: "",
        deviceid: "",
        carName: "",
        deleteId: "0",
        dealer: 1561430951496
      },
      // brand: 0,
      brandname: "",
      brandnameList: [],
      gui: {
        uname: "",
        phone: "",
        country: "",
        ip: "",
        openid: "",
        payment: "微信",
        starTime: "",
        cname: "",
        money: "",
        keyaddress: "",
        address: "",
        memarks: "精洗",
        number: ""
      },
      guinumber: "",
      parkIist: [],
      carshop: {
        openid: "",
        carNumber: "",
        payType: "",
        typeWashCar: "",
        ticketNumber: "",
        price: "",
        parkingSiteId: "",
        relName: "",
        tel: "",
        ip: ""
      },
      iscarshop: "",
      carnameList: [],
      // chosecar:0,
      carname: "",
      ispay: true,
      popupVisible: false,
      popupVisible1: false,
      canUseVip: [],
      isUserVip: false,
      userVipInfoList: [],
      userVipname: "",
      userVipId: "",
      popupVisible2: false,
      ismember: false,
      showmodel4: false,
      req: [],
      memberType: "F",
      modelType: "",
      model: "",
      ismemberfree: false,
      washprogress: [
        {
          id: 1,
          img: "./staticxiche/image/washprocess1.png",
          label: "预洗消毒"
        },
        {
          id: 2,
          img: "./staticxiche/image/washprocess2.png",
          label: "精洗消毒"
        },
        {
          id: 3,
          img: "./staticxiche/image/washprocess3.png",
          label: "喷淋消毒"
        },
        {
          id: 5,
          img: "./staticxiche/image/washprocess5.png",
          label: "打蜡消毒"
        },
        {
          id: 4,
          img: "./staticxiche/image/washprocess4.png",
          label: "快速风干"
        }
      ],
      washprogress1: [
        {
          id: 1,
          img: "./staticxiche/image/washprocess1.png",
          label: "预洗消毒"
        },
        {
          id: 2,
          img: "./staticxiche/image/washprocess2.png",
          label: "精洗消毒"
        },
        {
          id: 3,
          img: "./staticxiche/image/washprocess3.png",
          label: "喷淋消毒"
        },
        {
          id: 4,
          img: "./staticxiche/image/washprocess4.png",
          label: "快速风干"
        }
      ],
      washprogress2: [
        {
          id: 1,
          img: "./staticxiche/image/washprocess1.png",
          label: "预洗消毒"
        },
        {
          id: 3,
          img: "./staticxiche/image/washprocess3.png",
          label: "喷淋消毒"
        },
        {
          id: 4,
          img: "./staticxiche/image/washprocess4.png",
          label: "快速风干"
        }
      ],
      agreewith: true,
      handle: function(e) {
        e.preventDefault();
      },
    };
  },
  watch: {
    popupTopVisible(value) {
      if (value) {
        this.closeTouch();
      } else {
        this.openTouch();
      }
    },
    popupTopVisible1(value) {
      if (value) {
        this.closeTouch();
      } else {
        this.openTouch();
      }
    }
  },
  created() {
    Indicator.open({
      text: "加载中...",
      spinnerType: "fading-circle"
    });
    let that = this;
    if (this.$route.query.sid) {
      this.pay.sid = this.$route.query.sid;
    } else {
      if (sessionStorage.getItem("sid")) {
        this.pay.sid = sessionStorage.getItem("sid");
      }
    }

    if (sessionStorage.getItem("ticknumbar3")) {
      if (sessionStorage.getItem("ticknumbar4")) {
        this.loack = 4;
        this.disp = sessionStorage.getItem("ticknumbar4");
      } else {
        this.loack = 3;
        this.disp = sessionStorage.getItem("ticknumbar2");
      }
      this.pay.coupon = "1";
      this.pay.ticketNumber = sessionStorage.getItem("ticknumbar3");
    } else {
      this.loack = 5;
      this.pay.coupon = "0";
    }

    if (sessionStorage.getItem("menu")) {
      this.menu = JSON.parse(sessionStorage.getItem("menu"));
      if (sessionStorage.getItem("title")) {
        that.pay.carModel = sessionStorage.getItem("title");
        for (var i = 0; i < that.menu.length; i++) {
          if (sessionStorage.getItem("title") == that.menu[i].cname) {
            that.active = that.menu[i].cid;
          }
        }
      } else {
        that.pay.carModel = that.menu[0].cname;
      }
      console.log(that.active);

      if (sessionStorage.getItem("price")) {
        if (sessionStorage.getItem("ticknumbar3")) {
          if (sessionStorage.getItem("ticknumbar4")) {
            let price = sessionStorage.getItem("price") * (this.disp / 100);
            price = price > 0 ? price : 0;
            that.y = price.toFixed(2);
          } else {
            let price = sessionStorage.getItem("price") - this.disp;
            price = price > 0 ? price : 0;
            that.y = price.toFixed(2);
          }
          that.pay.carMoney = sessionStorage.getItem("price");
        } else {
          that.y = sessionStorage.getItem("price");
          that.pay.carMoney = sessionStorage.getItem("price");
        }
      } else {
        that.y = Number(that.menu[0].money).toFixed(2);
        that.pay.carMoney = Number(that.menu[0].money).toFixed(2);
      }

      let datas = {
        openid: localStorage.getItem("openid")
      };
      if (sessionStorage.getItem("washcarNumber")) {
        that.brandname = sessionStorage.getItem("washcarNumber");
        that.pay.carNumber = sessionStorage.getItem("washcarNumber");
        that.isVipType(that.pay.phone);
        serarchc(datas).then(mes => {
          console.log(mes);
          if (mes.data.resCode == 200) {
            that.brandnameList = mes.data.result;
          }
        });
      } else {
        that.getcarNumberList();
      }
    } else {
      let data = {
        page: 1,
        pageSize: 10
      };
      axios({
        method: "post",
        url: `${this.washhttpUrl}/carwash/querylistByCarwash`,
        data: Qs.stringify(data)
      }).then(res => {
        Indicator.close();
        console.log(res);
        if (res.status == 200) {
          that.menu = res.data.result;
          // 如果是银行专属用户则价格调整
          if (sessionStorage.getItem("isvipPrice") == 1) {
            for (let i = 0; i < res.data.result.length; i++) {
              that.menu[i].money = res.data.result[i].discountPrice;
            }
          }
          console.log(that.menu);
          if (sessionStorage.getItem("showmodel4")) {
            that.showmodel4 = sessionStorage.getItem("showmodel4");
          } else {
            that.showmodel4 = false;
          }

          if (sessionStorage.getItem("title")) {
            that.pay.carModel = sessionStorage.getItem("title");
            for (var i = 0; i < that.menu.length; i++) {
              if (sessionStorage.getItem("title") == that.menu[i].cname) {
                that.active = that.menu[i].cid;
              }
            }
          } else {
            that.pay.carModel = that.menu[0].cname;
          }
          console.log(that.active);

          if (sessionStorage.getItem("price")) {
            if (sessionStorage.getItem("ticknumbar3")) {
              if (sessionStorage.getItem("ticknumbar4")) {
                let price = sessionStorage.getItem("price") * (this.disp / 100);
                price = price > 0 ? price : 0;
                that.y = price.toFixed(2);
              } else {
                let price = sessionStorage.getItem("price") - this.disp;
                price = price > 0 ? price : 0;
                that.y = price.toFixed(2);
              }
              that.pay.carMoney = sessionStorage.getItem("price");
            } else {
              that.y = sessionStorage.getItem("price");
              that.pay.carMoney = sessionStorage.getItem("price");
            }
          } else {
            that.y = Number(that.menu[0].money).toFixed(2);
            that.pay.carMoney = Number(that.menu[0].money).toFixed(2);
          }

          let datas = {
            openid: localStorage.getItem("openid")
          };
          if (sessionStorage.getItem("washcarNumber")) {
            that.brandname = sessionStorage.getItem("washcarNumber");
            that.pay.carNumber = sessionStorage.getItem("washcarNumber");
            that.isVipType(that.pay.phone);
            serarchc(datas).then(mes => {
              console.log(mes);
              if (mes.data.resCode == 200) {
                that.brandnameList = mes.data.result;
              }
            });
          } else {
            that.getcarNumberList();
          }
        }
      });
    }
    this.getVipType();

    this.getParkingLotListApiList();
    this.getcarIdinfo();
    let data1 = {
      sid: this.pay.sid
    };
    code(data1).then(res => {
      Indicator.close();
      that.showInfo = true;
      console.log(res);
      if (res.data.resCode == 0) {
        that.gui.keyaddress = res.data.result.parkingid;
        that.gui.address = this.chosesname(res.data.result.parkingid);
      } else {
        MessageBox("提示", "站点信息获取失败");
      }
    });
    // this.getUserIP((ip) => {
    //   sessionStorage.setItem("ip",ip);
    // });
  },
  mounted() {
    let that = this;

    if (sessionStorage.getItem("contactname")) {
      this.pay.name = sessionStorage.getItem("contactname");
    } else if (localStorage.getItem("nickname")) {
      this.pay.name = localStorage.getItem("nickname");
    }
    if (sessionStorage.getItem("contactphone")) {
      this.pay.phone = sessionStorage.getItem("contactphone");
    } else {
      this.pay.phone = localStorage.getItem("phone");
    }

    this.pay.ip = returnCitySN.cip;
    this.pay.openid = localStorage.getItem("openid");

    this.iscarshop = sessionStorage.getItem("iscarshop");
    this.pay.sname = sessionStorage.getItem("sname");
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let begintime = sessionStorage.getItem("begintime").split(":");
    let endtime = sessionStorage.getItem("endtime").split(":");
    if (hour < begintime[0] || hour > endtime[0]) {
      this.ispay = false;
    } else if (hour == begintime[0] && minute < begintime[1]) {
      this.ispay = false;
    } else if (hour == endtime[0] && minute > endtime[1]) {
      this.ispay = false;
    }
  },
  beforeCreate() {
    this.$http
      .get(
        `${this.oldhttpUrl}/scan/getJSSDKTicket?url=${
          window.location.href.split("#")[0]
        }`
      )
      .then(message => {
        console.log(message);
        wx.config({
          debug: false,
          appId: message.data.appid,
          timestamp: message.data.timestamp,
          nonceStr: message.data.nonceStr,
          signature: message.data.signature, // 必填，签名，见附录1
          jsApiList: ["chooseWXPay"]
        });
      });
  },
  methods: {
    getUserIP(onNewIP) {
      let MyPeerConnection =
        window.RTCPeerConnection ||
        window.mozRTCPeerConnection ||
        window.webkitRTCPeerConnection;
      let pc = new MyPeerConnection({
        iceServers: []
      });
      let noop = () => {};
      let localIPs = {};
      let ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;
      let iterateIP = ip => {
        if (!localIPs[ip]) onNewIP(ip);
        localIPs[ip] = true;
      };
      pc.createDataChannel("");
      pc.createOffer()
        .then(sdp => {
          sdp.sdp.split("\n").forEach(function(line) {
            if (line.indexOf("candidate") < 0) return;
            line.match(ipRegex).forEach(iterateIP);
          });
          pc.setLocalDescription(sdp, noop, noop);
        })
        .catch(reason => {});
      pc.onicecandidate = ice => {
        if (
          !ice ||
          !ice.candidate ||
          !ice.candidate.candidate ||
          !ice.candidate.candidate.match(ipRegex)
        )
          return;
        ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
      };
    },
    closeTouch() {
      document
        .getElementsByTagName("body")[0]
        .addEventListener("touchmove", this.handler, { passive: false }); //阻止默认事件
    },
    openTouch() {
      document
        .getElementsByTagName("body")[0]
        .removeEventListener("touchmove", this.handler, { passive: false }); //打开默认事件
    },
    getParkingLotListApiList() {
      let params = {
        page: 1,
        pageSize: 500,
        userId: "93f07a1decc14ce69ca82e0d6c5d3761",
        dealer: 1561430951496
      };
      getParkingLotListApi(params).then(message => {
        console.log(message);
        this.parkIist = message.data.result;
      });
    },
    clearCarNumber() {
      this.brandname = "";
      this.popupVisible = false;
    },
    getcarNumberList() {
      let that = this;
      let datas = {
        openid: localStorage.getItem("openid")
      };
      serarchc(datas).then(res => {
        console.log(res);
        that.isVipType(that.pay.phone);
        if (res.data.resCode == 200) {
          res.data.result.forEach((a, b) => {
            if (a.priority == "1") {
              // that.brandname = a.brandname;
              that.brandname = "";
            }
          });
          that.brandnameList = res.data.result;
          that.pay.carNumber = that.brandname;
          console.log(that.pay.carNumber);
          // axios({
          //   method: "post",
          //   url: `${that.washurl}/carInfoWashCar/useByCarNumber`,
          //   data: Qs.stringify({carNumber:that.pay.carNumber})
          // }).then(res => {
          //   console.log(res);
          //   if(res.data.code == 0){
          //     if(res.data.result.remark == "Excel导入"){
          //       that.showmodel4 = true;
          //       if(that.showmodel4){
          //         let menulist = {
          //           cid:4,
          //           cname:"4",
          //           money:"0",
          //           sid:19,
          //           sold:0
          //         }
          //         that.menu.push(menulist);
          //         that.modelType = 4;
          //       }
          //       if(that.modelType == that.active){
          //         that.pay.member = "1";
          //         that.ismemberfree = true;
          //       }else{
          //         that.pay.member = "0";
          //         that.ismemberfree = false;
          //       }
          //     }else{
          //       that.showmodel4 = false;
          //       for(var i = 0;i < that.menu.length;i++){
          //         if(that.menu[i].cid == 4){
          //           that.menu.splice(i,1);
          //           if(that.active == 4){
          //             that.active = that.menu[0].cid;
          //             that.y = Number(that.menu[0].money).toFixed(2);
          //             that.pay.carMoney = Number(that.menu[0].money).toFixed(2);
          //             that.pay.carModel = that.menu[0].cname;
          //           }
          //           i--;
          //         }
          //       }
          //       that.req.find((x, y) => {
          //         if (x.id == res.data.result.of_type) {
          //           if (x.name == "C"&&x.model == '01') {
          //             that.memberType = x.name;
          //             that.modelType = 2;
          //           } else if (x.name == "A"&&x.model == '01') {
          //             that.memberType = x.name;
          //             that.modelType = 2;
          //           } else if (x.name == "B"&&x.model == '01') {
          //             that.memberType = x.name;
          //             that.modelType = 2;
          //           } else if (x.name == "C"&&x.model == '02') {
          //             that.memberType = x.name;
          //             that.modelType = 1;
          //           } else if (x.name == "A"&&x.model == '02') {
          //             that.memberType = x.name;
          //             that.modelType = 1;
          //           } else if (x.name == "B"&&x.model == '02') {
          //             that.memberType = x.name;
          //             that.modelType = 1;
          //           } else {
          //             that.memberType = "F";
          //             that.modelType = 0;
          //           }
          //         }
          //       });
          //       if(that.modelType == that.active){
          //         that.pay.member = "1";
          //         that.ismemberfree = true;
          //       }else{
          //         that.pay.member = "0";
          //         that.ismemberfree = false;
          //       }
          //     }
          //   }else{
          //     that.pay.member = "0";
          //     that.ismemberfree = false;
          //     that.memberType = "F";
          //     that.modelType = 0;
          //     if(res.data.result == "不在月卡有效期" || res.data.result == "不在季卡有效期" || res.data.result == "不在年卡有效期"){
          //       that.ismember = true;
          //     }else{
          //       that.ismember = false;
          //     }
          //   }
          // });
        }
      });
    },
    bottocenter() {
      window.scrollTo(0, 0);
    },
    brandB() {
      this.popupVisible = true;
    },
    brandN(index) {
      console.log(index);
      this.brandname = this.brandnameList[index].brandname;
      this.brand = 0;
      this.pay.carNumber = this.brandname;
      console.log(this.pay.carNumber);
      this.isVipType(this.pay.phone);
      // axios({
      //   method: "post",
      //   url: `${this.washurl}/carInfoWashCar/useByCarNumber`,
      //   data: Qs.stringify({carNumber:this.pay.carNumber})
      // }).then(res => {
      //   console.log(res);
      //   if(res.data.code == 0){
      //     if(res.data.result.remark == "Excel导入"){
      //       that.showmodel4 = true;
      //       if(that.showmodel4){
      //         let menulist = {
      //           cid:4,
      //           cname:"4",
      //           money:"0",
      //           sid:19,
      //           sold:0
      //         }
      //         that.menu.push(menulist);
      //         that.modelType = 4;
      //       }
      //       if(that.modelType == that.active){
      //         that.pay.member = "1";
      //         that.ismemberfree = true;
      //       }else{
      //         that.pay.member = "0";
      //         that.ismemberfree = false;
      //       }
      //     }else{
      //       that.showmodel4 = false;
      //       for(var i = 0;i < that.menu.length;i++){
      //         if(that.menu[i].cid == 4){
      //           that.menu.splice(i,1);
      //           if(that.active == 4){
      //             that.active = that.menu[0].cid;
      //             that.y = Number(that.menu[0].money).toFixed(2);
      //             that.pay.carMoney = Number(that.menu[0].money).toFixed(2);
      //             that.pay.carModel = that.menu[0].cname;
      //           }
      //           i--;
      //         }
      //       }
      //       that.req.find((x, y) => {
      //         if (x.id == res.data.result.of_type) {
      //           if (x.name == "C"&&x.model == '01') {
      //             that.memberType = x.name;
      //             that.modelType = 2;
      //           } else if (x.name == "A"&&x.model == '01') {
      //             that.memberType = x.name;
      //             that.modelType = 2;
      //           } else if (x.name == "B"&&x.model == '01') {
      //             that.memberType = x.name;
      //             that.modelType = 2;
      //           } else if (x.name == "C"&&x.model == '02') {
      //             that.memberType = x.name;
      //             that.modelType = 1;
      //           } else if (x.name == "A"&&x.model == '02') {
      //             that.memberType = x.name;
      //             that.modelType = 1;
      //           } else if (x.name == "B"&&x.model == '02') {
      //             that.memberType = x.name;
      //             that.modelType = 1;
      //           } else {
      //             that.memberType = "F";
      //             that.modelType = 0;
      //           }
      //         }
      //       });
      //       if(that.modelType == that.active){
      //         that.pay.member = "1";
      //         that.ismemberfree = true;
      //       }else{
      //         that.pay.member = "0";
      //         that.ismemberfree = false;
      //       }
      //     }
      //   }else{
      //     that.pay.member = "0";
      //     that.ismemberfree = false;
      //     that.memberType = "F";
      //     that.modelType = 0;
      //     if(res.data.result == "不在月卡有效期" || res.data.result == "不在季卡有效期" || res.data.result == "不在年卡有效期"){
      //       that.ismember = true;
      //     }else{
      //       that.ismember = false;
      //     }
      //   }
      // });
      this.popupVisible = false;
    },
    myFunction(e) {
      console.log(e.target.value);
      axios({
        method: "post",
        url: `${this.washurl}/User/updateRelName`,
        data: Qs.stringify({ openId: this.pay.openid, relName: e.target.value })
      }).then(res => {
        console.log(res);
      });
    },
    chosecarID() {
      this.popupVisible1 = true;
    },
    chosecarIDN(index) {
      this.carname = this.carnameList[index].name;
      this.pay.deviceid = this.carnameList[index].deviceid;
      this.pay.carName = this.carnameList[0].name;
      this.chosecar = 0;
      this.popupVisible1 = false;
    },
    choseVip() {
      this.popupVisible2 = true;
    },
    choseVipN(index, val) {
      this.userVipname = this.userVipInfoList[index].alias;
      this.userVipId = this.userVipInfoList[index].id;
      this.popupVisible2 = false;
      if (this.active == 1) {
        this.model = "02";
      } else if (this.active == 2) {
        this.model = "01";
      } else if (this.active == 4) {
        this.model = "04";
      }
      this.isVip(this.pay.phone, this.userVipId, this.model);
    },
    getcarIdinfo() {
      this.carnameList = [];
      let that = this;
      axios({
        method: "post",
        url: `${this.washhttpUrl}/parkingCarRecerd/selectByCarid`,
        data: Qs.stringify({ sid: this.pay.sid })
      }).then(res => {
        console.log(res);
        if (res.data.resCode == 0) {
          that.carnameList = res.data.result;
          that.carname = that.carnameList[0].name;
          that.pay.deviceid = that.carnameList[0].deviceid;
          that.pay.carName = that.carnameList[0].name;
        }
      });
    },
    tica() {
      sessionStorage.setItem("sid", this.pay.sid);
      sessionStorage.setItem("price", this.pay.carMoney);
      sessionStorage.setItem("title", this.pay.carModel);
      sessionStorage.setItem("contactname", this.pay.name);
      sessionStorage.setItem("contactphone", this.pay.phone);
      sessionStorage.setItem("washcarNumber", this.brandname);
      sessionStorage.setItem("menu", JSON.stringify(this.menu));
      sessionStorage.setItem("showmodel4", this.showmodel4);
      this.$router.push("/fuzhi");
    },
    ckdservices() {
      sessionStorage.setItem("sid", this.pay.sid);
      sessionStorage.setItem("price", this.pay.carMoney);
      sessionStorage.setItem("title", this.pay.carModel);
      sessionStorage.setItem("contactname", this.pay.name);
      sessionStorage.setItem("contactphone", this.pay.phone);
      sessionStorage.setItem("washcarNumber", this.brandname);
      sessionStorage.setItem("menu", JSON.stringify(this.menu));
      sessionStorage.setItem("showmodel4", this.showmodel4);
      this.$router.push("/service");
    },
    choosetype(id, title, price) {
      console.log(id);
      this.active = id;
      if (this.isUserVip) {
        if (this.active == 1) {
          this.model = "02";
        } else if (this.active == 2) {
          this.model = "01";
        } else if (this.active == 4) {
          this.model = "04";
        }
        this.isVip(this.pay.phone, this.userVipId, this.model);
      }
      this.pay.carMoney = Number(price).toFixed(2);
      this.pay.carModel = title;
      if (sessionStorage.getItem("ticknumbar3")) {
        if (sessionStorage.getItem("ticknumbar4")) {
          let price =
            this.pay.carMoney * (sessionStorage.getItem("ticknumbar4") / 100);
          price = price > 0 ? price : 0;
          this.y = price.toFixed(2);
        } else {
          let price = this.pay.carMoney - sessionStorage.getItem("ticknumbar2");
          price = price > 0 ? price : 0;
          this.y = price.toFixed(2);
        }
      } else {
        this.y = Number(price).toFixed(2);
      }
    },
    rightnow() {
      console.log(this.agreewith);
      let that = this;
      // this.pay.startTime = nowDate();
      this.pay.cdate = nowDate();
      if (this.pay.member == 1) {
        // if(this.ismemberfree == true){
        //   this.pay.member = 1;
        this.pay.carAmount = "0.00";
        this.pay.carOnsale = this.pay.carMoney;
        this.pay.id = this.userVipId;
        this.carshop.payType = 3;
        if (this.pay.coupon == 1) {
          this.pay.coupon = "0";
          this.pay.ticketNumber = "";
          delete this.carshop.ticketNumber;
        }
        // }else{
        //   this.pay.member = 0;
        //   this.pay.carAmount = this.pay.carMoney;
        // }
      } else {
        if (this.pay.coupon == 1) {
          if (sessionStorage.getItem("ticknumbar4")) {
            this.pay.carAmount = (
              that.pay.carMoney *
              (sessionStorage.getItem("ticknumbar4") / 100)
            ).toFixed(2);
            let sub = that.pay.carMoney - this.pay.carAmount;
            this.pay.carOnsale = sub.toFixed(2);
          } else {
            this.pay.carOnsale = Number(
              sessionStorage.getItem("ticknumbar2")
            ).toFixed(2);
            let sub = that.pay.carMoney - this.pay.carOnsale;
            this.pay.carAmount = sub > 0 ? sub.toFixed(2) : "0.00";
          }
          this.carshop.payType = 2;
          this.carshop.ticketNumber = this.pay.ticketNumber;
        } else {
          this.pay.carOnsale = "0.00";
          this.pay.carAmount = this.pay.carMoney;
          delete this.carshop.ticketNumber;
          this.carshop.payType = 1;
        }
      }
      console.log(this.pay);
      this.gui.uname = this.pay.name;
      this.gui.phone = this.pay.phone;
      this.gui.country = this.pay.carNumber;
      this.gui.ip = this.pay.ip;
      this.gui.openid = this.pay.openid;
      this.gui.cname = this.pay.carModel;
      this.gui.money = this.pay.carAmount;
      this.gui.starTime = nowDate();
      console.log(this.gui);
      this.carshop.openid = this.pay.openid;
      this.carshop.ip = this.pay.ip;
      this.carshop.parkingSiteId = this.pay.sid;
      this.carshop.relName = this.pay.name;
      this.carshop.tel = this.pay.phone;
      this.carshop.price = this.pay.carMoney;
      this.carshop.carNumber = this.pay.carNumber;
      this.carshop.deviceld = this.pay.deviceid;
      this.carshop.alias = this.pay.carName;
      // if(this.pay.coupon == 1){
      //   this.carshop.payType = 2;
      //   this.carshop.ticketNumber = this.pay.ticketNumber;
      // }else{
      //   delete this.carshop.ticketNumber;
      //   if(this.pay.member == 1){
      //     this.carshop.payType = 3;
      //   }else{
      //     this.carshop.payType = 1;
      //   }
      // }
      if (this.pay.carModel == "精洗") {
        this.carshop.typeWashCar = 1;
      } else {
        this.carshop.typeWashCar = 2;
      }
      if (this.pay.carModel == 4) {
        this.pay.id = this.userVipId;
        this.pay.member = 1;
      }
      console.log(this.carshop);
      // alert(JSON.stringify(this.pay));

      if (this.pay.carNumber == "") {
        delete this.pay.carNumber;
      }
      if (this.carshop.carNumber == "") {
        delete this.carshop.carNumber;
      }

      // 判断是否有同意条款
      if (this.agreewith == true) {
        // if (this.pay.carNumber == "" || this.pay.carNumber == undefined) {
        //   MessageBox("提示", "请输入车牌号码");
        //   return false;
        // }
        if (this.pay.carModel == "精洗") {
          that
            .$http({
              method: "post",
              url: that.washhttpUrl + "/parkingCarRecerd/selectByOrder",
              data: Qs.stringify(that.pay)
            })
            .then(message => {
              console.log(message);
              // alert(JSON.stringify(message));
              // that.$http({
              //   method: "post",
              //   url: that.washhttpUrl + "/users/add",
              //   data: Qs.stringify(that.gui)
              // })
              // .then(message => {
              //   console.log(message);
              //   // alert(JSON.stringify(message));
              //   if(message.data.resCode == "0k"){
              //     sessionStorage.setItem("guinumber",message.data.result);
              //     that.gui.number = message.data.result;
              //   }else{
              //     MessageBox("提示", message.data.result);
              //   }
              // });
              if (message.data.resCode == 0) {
                that.moneys = message.data.result.money;
                that.appId = message.data.result.appId;
                that.timeStamp = message.data.result.timeStamp;
                that.nonceStr = message.data.result.nonceStr;
                that.package = message.data.result.package;
                that.signType = message.data.result.signType;
                that.paySign = message.data.result.paySign;
                that.weiTrade = message.data.result.tradeNo;
                that.pay.carOnsale = message.data.result.carOnsale;
                that.pay.carAmount = message.data.result.carAmount;
                that.pay.deleteId = message.data.result.deleteId;
                that
                  .$http({
                    method: "post",
                    url: that.washhttpUrl + "/users/add",
                    data: Qs.stringify(that.gui)
                  })
                  .then(res => {
                    console.log(res);
                    // alert(JSON.stringify(res));
                    if (res.data.resCode == "0k") {
                      sessionStorage.setItem("guinumber", res.data.result);
                      that.gui.number = res.data.result;
                    } else {
                      MessageBox("提示", res.data.result);
                    }
                  });
                wx.ready(function() {
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
                    success(res) {
                      console.log(res);
                      if (
                        res.errMsg === "chooseWXPay:ok" ||
                        res.errMsg == "getBrandWCPayRequest:ok"
                      ) {
                        Indicator.open("Loading...");
                        that.polling();
                      }
                    },
                    fail(res) {
                      MessageBox("提示", "支付失败");
                      that.markmoney = false;
                      return;
                    }
                  });
                });
              } else if (message.data.resCode == 1) {
                MessageBox("提示", message.data.result + "，立即前往查看").then(
                  action => {
                    that.$router.push({ path: "/washrecord" });
                  }
                );
                // MessageBox("提示",message.data.result + "，请选择其他票券").then(action => {
                //   sessionStorage.removeItem("ticknumbar1");
                //   sessionStorage.removeItem("ticknumbar2");
                //   sessionStorage.removeItem("ticknumbar3");
                //   that.loack = 5;
                //   that.pay.coupon = "0";
                //   return;
                // });
              } else if (message.data.resCode == 2) {
                that.pay.paystatus = message.data.result.paystatus;
                that.pay.number = message.data.result.number;
                that.pay.carMoney = message.data.result.carMoney;
                that.pay.carOnsale = message.data.result.carOnsale;
                that.pay.carAmount = message.data.result.carAmount;
                that.pay.deleteId = message.data.result.deleteId;
                // alert(JSON.stringify(that.pay));
                that
                  .$http({
                    method: "post",
                    url:
                      this.washhttpUrl + "/parkingCarRecerd/selectByOrderOrPay",
                    data: Qs.stringify(that.pay)
                  })
                  .then(res => {
                    // alert(JSON.stringify(res));
                    that
                      .$http({
                        method: "post",
                        url: that.washhttpUrl + "/users/add",
                        data: Qs.stringify(that.gui)
                      })
                      .then(message => {
                        console.log(message);
                        // alert(JSON.stringify(message));
                        if (message.data.resCode == "0k") {
                          sessionStorage.setItem(
                            "guinumber",
                            message.data.result
                          );
                          that.gui.number = message.data.result;
                          that
                            .$http({
                              method: "post",
                              url: this.washhttpUrl + "/users/queryByState",
                              data: Qs.stringify({
                                paystatus: that.pay.paystatus,
                                paytime: that.gui.starTime,
                                carnumber: that.gui.country,
                                jixing: that.gui.cname,
                                number: sessionStorage.getItem("guinumber"),
                                openId: localStorage.getItem("openid"),
                                money: that.pay.carMoney
                              })
                            })
                            .then(res => {
                              // alert(JSON.stringify(res))
                            });
                        } else {
                          MessageBox("提示", message.data.result);
                        }
                      });
                    if (res.data.resCode == 0) {
                      MessageBox.alert("本次洗车免费").then(action => {
                        if (that.pay.coupon == 1) {
                          that
                            .$http({
                              method: "post",
                              url:
                                this.washhttpUrl +
                                "/parkingCarRecerd/selectByCoupon",
                              data: Qs.stringify({
                                carNumber: that.pay.carNumber,
                                ticketNumber: that.pay.ticketNumber
                              })
                            })
                            .then(res => {
                              // alert(JSON.stringify(res));
                              sessionStorage.removeItem("ticknumbar1");
                              sessionStorage.removeItem("ticknumbar2");
                              sessionStorage.removeItem("ticknumbar3");
                            });
                        }
                        sessionStorage.setItem(
                          "washdetailed",
                          JSON.stringify(res.data.result)
                        );
                        sessionStorage.setItem(
                          "carInfoWashcarId",
                          res.data.result.id
                        );
                        // this.$router.push({ path: "/detailed" });
                        this.$router.push({ path: "/attention" });
                        // sessionStorage.removeItem("sid");
                        sessionStorage.removeItem("price");
                        sessionStorage.removeItem("title");
                        sessionStorage.removeItem("contactname");
                        sessionStorage.removeItem("contactphone");
                        sessionStorage.removeItem("washcarNumber");
                      });
                    }
                  });
              } else {
                MessageBox("提示", message.data.result);
              }
            });
        } else {
          that
            .$http({
              method: "post",
              url: that.washhttpUrl + "/parkingCarRecerd/selectByOrder",
              data: Qs.stringify(that.pay)
            })
            .then(message => {
              console.log(message);
              // alert(JSON.stringify(message));
              if (message.data.resCode == 0) {
                that.moneys = message.data.result.money;
                that.appId = message.data.result.appId;
                that.timeStamp = message.data.result.timeStamp;
                that.nonceStr = message.data.result.nonceStr;
                that.package = message.data.result.package;
                that.signType = message.data.result.signType;
                that.paySign = message.data.result.paySign;
                that.weiTrade = message.data.result.tradeNo;
                that.pay.carOnsale = message.data.result.carOnsale;
                that.pay.carAmount = message.data.result.carAmount;
                wx.ready(function() {
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
                    success(res) {
                      console.log(res);
                      if (
                        res.errMsg === "chooseWXPay:ok" ||
                        res.errMsg == "getBrandWCPayRequest:ok"
                      ) {
                        Indicator.open("Loading...");
                        that.polling();
                      }
                    },
                    fail(res) {
                      MessageBox("提示", "支付失败");
                      that.markmoney = false;
                      return;
                    }
                  });
                });
              } else if (message.data.resCode == 1) {
                MessageBox("提示", message.data.result + "，立即前往查看").then(
                  action => {
                    that.$router.push({ path: "/washrecord" });
                  }
                );
                // MessageBox("提示",message.data.result + "，请选择其他票券").then(action => {
                //   sessionStorage.removeItem("ticknumbar1");
                //   sessionStorage.removeItem("ticknumbar2");
                //   sessionStorage.removeItem("ticknumbar3");
                //   that.loack = 5;
                //   that.pay.coupon = "0";
                //   return;
                // });
              } else if (message.data.resCode == 2) {
                that.pay.paystatus = message.data.result.paystatus;
                that.pay.number = message.data.result.number;
                that.pay.carMoney = message.data.result.carMoney;
                that.pay.carOnsale = message.data.result.carOnsale;
                that.pay.carAmount = message.data.result.carAmount;
                // alert(JSON.stringify(that.pay));
                that
                  .$http({
                    method: "post",
                    url:
                      this.washhttpUrl + "/parkingCarRecerd/selectByOrderOrPay",
                    data: Qs.stringify(that.pay)
                  })
                  .then(res => {
                    // alert(JSON.stringify(res));
                    if (res.data.resCode == 0) {
                      MessageBox.alert("本次洗车免费").then(action => {
                        if (that.pay.coupon == 1) {
                          that
                            .$http({
                              method: "post",
                              url:
                                this.washhttpUrl +
                                "/parkingCarRecerd/selectByCoupon",
                              data: Qs.stringify({
                                carNumber: that.pay.carNumber,
                                ticketNumber: that.pay.ticketNumber
                              })
                            })
                            .then(res => {
                              // alert(JSON.stringify(res));
                              sessionStorage.removeItem("ticknumbar1");
                              sessionStorage.removeItem("ticknumbar2");
                              sessionStorage.removeItem("ticknumbar3");
                            });
                        }
                        sessionStorage.setItem(
                          "washdetailed",
                          JSON.stringify(res.data.result)
                        );
                        sessionStorage.setItem(
                          "carInfoWashcarId",
                          res.data.result.id
                        );
                        // this.$router.push({ path: "/detailed" });
                        this.$router.push({ path: "/attention" });
                        // sessionStorage.removeItem("sid");
                        sessionStorage.removeItem("price");
                        sessionStorage.removeItem("title");
                        sessionStorage.removeItem("contactname");
                        sessionStorage.removeItem("contactphone");
                        sessionStorage.removeItem("washcarNumber");
                      });
                    }
                  });
              } else {
                MessageBox("提示", message.data.result);
              }
            });
        }
      } else {
        MessageBox("提示", "请勾选《车口袋洗车服务协议》");
      }
    },
    polling() {
      let that = this;
      delete this.pay.carNumber;
      if (this.iscarshop == 1) {
        this.carshop.PayStatus = "get_brand_wcpay_request:ok";
        this.carshop.orderId = this.weiTrade;
        this.carshop.price = this.moneys;
        this.$http({
          method: "post",
          url: this.washurl + "/carShopWashRecords/recvStatus",
          data: Qs.stringify({
            orderId: that.carshop.orderId,
            price: that.carshop.price,
            ticketNumber: that.carshop.ticketNumber,
            payType: that.carshop.payType,
            PayStatus: that.carshop.PayStatus
          })
        }).then(res => {
          // alert(JSON.stringify(res))
          Indicator.close();
          if (res.data.resCode == 0) {
            let detailed = {
              carAmount: res.data.result.paidPrice,
              carModel: res.data.result.typeWashCar == 1 ? "精洗" : "普洗",
              carMoney: res.data.result.price,
              carName: res.data.result.alias,
              carNumber: res.data.result.carNumber,
              carOnsale: res.data.result.onsalePrice,
              cdate: res.data.result.date,
              coupon: res.data.result.payType == 2 ? "1" : "0",
              crid: res.data.result.id,
              deleteId: res.data.result.isDel,
              deviceid: res.data.result.deviceld,
              // endTime:res.data.result.paidPrice,
              error: res.data.result.error,
              // imageUrl:res.data.result.paidPrice,
              // ip:res.data.result.paidPrice,
              member: res.data.result.payType == 3 ? "1" : "0",
              name: res.data.result.relName,
              number: res.data.result.orderId,
              openid: res.data.result.openid,
              paystatus: "get_brand_wcpay_request:ok",
              phone: res.data.result.tel,
              sid:
                sessionStorage.getItem("sid") != ""
                  ? sessionStorage.getItem("sid")
                  : that.$route.query.sid,
              sname: sessionStorage.getItem("sname"),
              startTime: res.data.result.washTime,
              status: res.data.result.orderStatus == 0 ? 1 : 0,
              ticketNumber: res.data.result.ticketNumber,
              washcarStatus: res.data.result.washcarStatus
            };
            sessionStorage.setItem("washdetailed", JSON.stringify(detailed));
            sessionStorage.setItem(
              "carInfoWashcarId",
              res.data.result.carInfoWashcarId
            );
            // this.$router.push({ path: "/detailed" });
            this.$router.push({ path: "/attention" });
          } else {
          }
        });
      } else {
        this.pay.paystatus = "get_brand_wcpay_request:ok";
        this.pay.number = this.weiTrade;
        this.pay.carAmount = this.moneys;
        // alert(JSON.stringify(this.pay));
        if (this.pay.carModel == "精洗") {
          this.$http({
            method: "post",
            url: this.washhttpUrl + "/parkingCarRecerd/selectByOrderOrPay",
            data: Qs.stringify(this.pay)
          }).then(res => {
            // alert(JSON.stringify(res))
            this.$http({
              method: "post",
              url: this.washhttpUrl + "/users/queryByState",
              data: Qs.stringify({
                paystatus: "get_brand_wcpay_request:ok",
                paytime: that.gui.starTime,
                carnumber: that.gui.country,
                jixing: that.gui.cname,
                number: sessionStorage.getItem("guinumber"),
                openId: localStorage.getItem("openid"),
                money: that.gui.money
              })
            }).then(res => {
              // alert(JSON.stringify(res));
            });
            Indicator.close();
            if (that.pay.coupon == 1) {
              that
                .$http({
                  method: "post",
                  url: this.washhttpUrl + "/parkingCarRecerd/selectByCoupon",
                  data: Qs.stringify({
                    carNumber: that.pay.carNumber,
                    ticketNumber: that.pay.ticketNumber
                  })
                })
                .then(res => {
                  // alert(JSON.stringify(res));
                  sessionStorage.removeItem("ticknumbar1");
                  sessionStorage.removeItem("ticknumbar2");
                  sessionStorage.removeItem("ticknumbar3");
                });
            }
            sessionStorage.setItem(
              "washdetailed",
              JSON.stringify(res.data.result)
            );
            sessionStorage.setItem("carInfoWashcarId", res.data.result.id);
            // this.$router.push({ path: "/detailed" });
            this.$router.push({ path: "/attention" });
            // sessionStorage.removeItem("sid");
            sessionStorage.removeItem("price");
            sessionStorage.removeItem("title");
            sessionStorage.removeItem("contactname");
            sessionStorage.removeItem("contactphone");
            sessionStorage.removeItem("washcarNumber");
          });
        } else {
          this.$http({
            method: "post",
            url: this.washhttpUrl + "/parkingCarRecerd/selectByOrderOrPay",
            data: Qs.stringify(this.pay)
          }).then(res => {
            // alert(JSON.stringify(res))
            Indicator.close();
            if (that.pay.coupon == 1) {
              that
                .$http({
                  method: "post",
                  url: this.washhttpUrl + "/parkingCarRecerd/selectByCoupon",
                  data: Qs.stringify({
                    carNumber: that.pay.carNumber,
                    ticketNumber: that.pay.ticketNumber
                  })
                })
                .then(res => {
                  // alert(JSON.stringify(res));
                  sessionStorage.removeItem("ticknumbar1");
                  sessionStorage.removeItem("ticknumbar2");
                  sessionStorage.removeItem("ticknumbar3");
                });
            }
            sessionStorage.setItem(
              "washdetailed",
              JSON.stringify(res.data.result)
            );
            sessionStorage.setItem("carInfoWashcarId", res.data.result.id);
            // this.$router.push({ path: "/detailed" });
            this.$router.push({ path: "/attention" });
            // sessionStorage.removeItem("sid");
            sessionStorage.removeItem("price");
            sessionStorage.removeItem("title");
            sessionStorage.removeItem("contactname");
            sessionStorage.removeItem("contactphone");
            sessionStorage.removeItem("washcarNumber");
          });
        }
      }
    },
    onBridgeReady() {
      let that = this;
      WeixinJSBridge.invoke(
        "getBrandWCPayRequest",
        {
          appId: that.appId, //公众号名称，由商户传入
          timeStamp: that.timeStamp, //时间戳，自1970年以来的秒数
          nonceStr: that.nonceStr, //随机串
          package: that.package,
          signType: that.signType, //微信签名方式：
          paySign: that.paySign //微信签名
        },
        function(res) {
          if (res.err_msg == "get_brand_wcpay_request:ok") {
            that.polling();
          } else {
            MessageBox("提示", "支付失败");
          }
        }
      );
    },
    chosesname(val) {
      this.parkIist.forEach((a, index) => {
        if (a.id == val) {
          val = a.parking_name;
        }
      });
      return val;
    },
    getcoupon() {
      let that = this;
      this.$http
        .get(
          `${that.oldhttpUrl}/scan/getJSSDKTicket?url=${
            window.location.href.split("#")[0]
          }`
        )
        .then(message => {
          console.log(message);
          wx.config({
            debug: false,
            appId: message.data.appid,
            timestamp: message.data.timestamp,
            nonceStr: message.data.nonceStr,
            signature: message.data.signature, // 必填，签名，见附录1
            jsApiList: [message.data.jsApiList]
          });
          wx.ready(function() {
            wx.scanQRCode({
              needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
              scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
              success: function(res) {
                console.log(res);
                let result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                let deviceId = result.substring(
                  result.indexOf("state=") + 6,
                  result.indexOf("#")
                );
                sessionStorage.setItem("sid", that.pay.sid);
                sessionStorage.setItem("price", that.pay.carMoney);
                sessionStorage.setItem("title", that.pay.carModel);
                sessionStorage.setItem("contactname", that.pay.name);
                sessionStorage.setItem("contactphone", that.pay.phone);
                sessionStorage.setItem("washcarNumber", that.brandname);
                that.$router.push({
                  path: "/getCoupon",
                  query: { sid: deviceId, type: that.active }
                });
              }
            });
          });
        });
    },
    vip() {
      sessionStorage.setItem("sid", this.pay.sid);
      sessionStorage.setItem("price", this.pay.carMoney);
      sessionStorage.setItem("title", this.pay.carModel);
      sessionStorage.setItem("contactname", this.pay.name);
      sessionStorage.setItem("contactphone", this.pay.phone);
      sessionStorage.setItem("washcarNumber", this.brandname);
      sessionStorage.setItem("menu", JSON.stringify(this.menu));
      sessionStorage.setItem("showmodel4", this.showmodel4);
      this.$router.push("/people/vipCardList");
    },
    getVipType() {
      let data = {
        page: 1,
        pageSize: 100,
        userId: "93f07a1decc14ce69ca82e0d6c5d3761",
        dealer: 1561430951496
      };
      let that = this;
      axios({
        method: "post",
        url: `${this.washurl}/carNumberTypeWashCar/selectAll`,
        data: Qs.stringify(data)
      }).then(res => {
        console.log(res);
        if (res.data.count > 0) {
          for (var i = 0; i < res.data.count; i++) {
            if (res.data.result[i].name != "F") {
              let list = res.data.result[i];
              that.req.push(list);
            }
          }
        }
        console.log(that.req);
        // that.req.find((a, y) => {
        //   if (a.name == "A") {
        //     a.name = "月卡";
        //   } else if (a.name == "B") {
        //     a.name = "季卡";
        //   } else if (a.name == "C") {
        //     a.name = "年卡";
        //   }
        // });
      });
    },
    getUserVipInfo() {
      let that = this;
      that.canUseVip = [];
      axios({
        method: "post",
        url: `${this.washurl}/carInfoWashCar/selectVIPByTel`,
        data: Qs.stringify({
          dealer: 1561430951496,
          tel: localStorage.getItem("phone")
            ? localStorage.getItem("phone")
            : localStorage.getItem("tel")
        })
      }).then(res => {
        console.log(res);
        if (res.data.code == 0) {
          let canuse = res.data.result;
          let length = res.data.result.length;
          for (var i = 0; i < length; i++) {
            if (canuse[i].isUse == 0) {
              that.canUseVip.push(canuse[i]);
            }
          }
          console.log(that.canUseVip);
        }
      });
    },
    isVipType(val) {
      console.log(val);
      let that = this;
      that.canUseVip = [];
      this.userVipInfoList = [];
      axios({
        method: "post",
        url: `${this.washurl}/carInfoWashCar/selectVIPByTel`,
        data: Qs.stringify({
          dealer: 1561430951496,
          tel: val
        })
      }).then(res => {
        console.log(res);
        if (res.data.code == 0) {
          let canuse = res.data.result;
          let length = res.data.result.length;
          for (var i = 0; i < length; i++) {
            if (canuse[i].isUse == 0) {
              that.canUseVip.push(canuse[i]);
            }
          }
          console.log(that.canUseVip);
          that.userVipInfoList = that.canUseVip;

          // let length = that.canUseVip.length;
          // for(var i = 0;i < length;i++){
          //   if(val == that.canUseVip[i].car_number){
          //     that.userVipInfoList.push(that.canUseVip[i]);
          //   }
          // }
          console.log(that.userVipInfoList);
          if (that.userVipInfoList.length > 0) {
            that.isUserVip = true;
            that.userVipname = that.userVipInfoList[0].alias;
            that.userVipId = that.userVipInfoList[0].id;
            if (that.userVipInfoList[0].model == "04") {
              that.showmodel4 = true;
              if (that.showmodel4 == true) {
                for (var i = 0; i < that.menu.length; i++) {
                  if (that.menu[i].cid == 4) {
                    that.menu.splice(i, 1);
                    // if(that.active == 4){
                    //   that.active = that.menu[0].cid;
                    //   that.y = Number(that.menu[0].money).toFixed(2);
                    //   that.pay.carMoney = Number(that.menu[0].money).toFixed(2);
                    //   that.pay.carModel = that.menu[0].cname;
                    // }
                    i--;
                  }
                }
                that.menu.push(that.menulist);
                // this.modelType = 4;
              }
              // if(this.modelType == this.active){
              //   this.pay.member = "1";
              //   this.ismemberfree = true;
              // }else{
              //   this.pay.member = "0";
              //   this.ismemberfree = false;
              // }
            } else {
              that.showmodel4 = false;
              for (var i = 0; i < that.menu.length; i++) {
                if (that.menu[i].cid == 4) {
                  that.menu.splice(i, 1);
                  if (that.active == 4) {
                    that.active = that.menu[0].cid;
                    that.y = Number(that.menu[0].money).toFixed(2);
                    that.pay.carMoney = Number(that.menu[0].money).toFixed(2);
                    that.pay.carModel = that.menu[0].cname;
                  }
                  i--;
                }
              }
            }
            if (that.active == 1) {
              that.model = "02";
            } else if (that.active == 2) {
              that.model = "01";
            } else if (that.active == 4) {
              that.model = "04";
            }
            that.isVip(that.pay.phone, that.userVipInfoList[0].id, that.model);
          } else {
            that.pay.member = "0";
            that.ismemberfree = false;
            that.isUserVip = false;
          }
        } else {
          that.pay.member = "0";
          that.ismemberfree = false;
          that.isUserVip = false;
          that.showmodel4 = false;
          for (var i = 0; i < that.menu.length; i++) {
            if (that.menu[i].cid == 4) {
              that.menu.splice(i, 1);
              if (that.active == 4) {
                that.active = that.menu[0].cid;
                that.y = Number(that.menu[0].money).toFixed(2);
                that.pay.carMoney = Number(that.menu[0].money).toFixed(2);
                that.pay.carModel = that.menu[0].cname;
              }
              i--;
            }
          }
        }
      });
    },
    isVip(phone, id, model) {
      let that = this;
      axios({
        method: "post",
        url: `${this.washurl}/carInfoWashCar/useById`,
        data: Qs.stringify({ tel: phone, id: id, model: model })
      }).then(res => {
        console.log(res);
        if (res.data.code == 0) {
          that.pay.member = "1";
          that.ismemberfree = true;
          that.y = "0.00";
        } else {
          that.pay.member = "0";
          that.ismemberfree = false;
        }
      });
    }
  }
};
</script>
<style scoped>
.paytoot {
  width: 94%;
  margin: 0.2rem auto;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-size: 0.34rem;
  border-radius: 8px;
  background: #f68b1b;
  color: #fff;
  cursor: pointer;
  margin-top: 0.4rem;
}
.paytoot1 {
  width: 94%;
  margin: 0.2rem auto;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-size: 0.34rem;
  border-radius: 8px;
  background: #b4b4b4;
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
/* .menu {
  display: flex;
  justify-content: space-between;
} */
/* #menulist {
  width: 45%;
  border: 2px solid #f5f5f5;
  border-radius: 6px;
}
#menulist.active {
  border: 2px solid #f7bd00;
}
#menulist > p:first-child {
  font-size: 20px;
  line-height: 1rem;
}
#menulist > p:nth-child(2) {
  font-size: 24px;
  color: #f68b1b;
  line-height: 1rem;
}
#menulist1 {
  width: 30%;
  border: 2px solid #f5f5f5;
  border-radius: 6px;
}
#menulist1.active {
  border: 2px solid #f7bd00;
}
#menulist1 > p:first-child {
  font-size: 20px;
  line-height: 1rem;
}
#menulist1 > p:nth-child(2) {
  font-size: 24px;
  color: #f68b1b;
  line-height: 1rem;
} */
.brandnameList {
  position: absolute;
  width: 2rem;
  background-color: #ffffff;
  z-index: 999;
  right: 0;
  top: 0.94rem;
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
  display: inline-block;
  line-height: 0.4rem;
  border-radius: 50%;
  color: #ac9e9e;
}
.remark {
  width: 94%;
  margin: 0 auto;
  text-align: right;
  color: rgb(153, 153, 153);
}
.remark p {
  display: inline-block;
}
.remark img {
  vertical-align: middle;
  width: 0.35rem;
  height: 0.35rem;
  margin-right: 0.05rem;
}
.remark span {
  vertical-align: middle;
}
.mint-popup {
  width: 100%;
  max-height: 164px;
  overflow-y: auto;
}
.mint-popup > div > div {
  text-align: center;
  border-bottom: 1px solid #e4e4e4;
  height: 40px;
  line-height: 40px;
  font-size: 0.3rem;
  color: #303030;
}
.mint-popup > div:last-of-type {
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 0.3rem;
  color: #303030;
  border-bottom: 1px solid transparent;
}

.menu > li {
  height: 2.14rem;
  border-radius: 0.1rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-bottom: 0.16rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
}
.menu > li:not(.active) {
  opacity: 0.6;
}
.radio {
  -webkit-appearance: none;
  width: 22px;
  height: 22px;
  padding: 0;
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  margin-left: 0.32rem;
  vertical-align: middle;
}
.radio:checked {
  background: url("../../static/image/yes.png") no-repeat center;
  background-size: 24px 24px;
  background-color: #fff;
  border: none;
}
.washtypeinfo > div {
  display: inline-block;
  margin-left: 0.32rem;
  padding: 0.56rem 0;
  vertical-align: middle;
}
.washtypeinfo > div > p:first-of-type {
  font-size: 0.46rem;
  font-family: "PingFangSC-Regular";
  margin-bottom: 0.22rem;
}
.washtypeinfo > div > p:last-of-type {
  font-size: 0.26rem;
  font-family: "PingFangSC-Regular";
}
.washmoney {
  font-size: 0.5rem;
  font-family: "PingFangSC-Regular";
  padding-top: 0.56rem;
  margin-right: 0.14rem;
}
.washmoney > p > span {
  font-size: 0.34rem;
}
.washmoney > img {
  width: 1.88rem;
  height: 1.01rem;
}
.washprogress {
  display: flex;
  justify-content: space-between;
  margin-top: 0.46rem;
}
.washprogress > li > p,
.washprogress > li > div {
  display: inline-block;
}
.washprogress > li > p {
  text-align: center;
  font-size: 0.26rem;
  color: rgb(48, 48, 48);
}
.washprogress > li > p > img {
  height: 0.48rem;
  width: auto;
  margin-bottom: 0.12rem;
}
.washprogress > li > p > span {
  display: block;
}
.washprogress > li {
  position: relative;
}
.washprogress > li > img {
  height: 0.44rem;
  width: auto;
  position: absolute;
  top: 0;
  right: -0.4rem;
}
.openvip {
  background: rgb(255, 244, 233);
  font-size: 0.26rem;
  color: rgb(102, 102, 102);
  font-family: "AdobeHeitiStd-Regular";
  border-top-right-radius: 0.24rem;
  border-top-left-radius: 0.24rem;
  height: 0.72rem;
  line-height: 0.72rem;
}
.openvip > div {
  display: flex;
  justify-content: space-between;
}
.opencoupon {
  width: 91.5%;
  margin: 0.24rem auto;
  display: flex;
  justify-content: space-between;
  height: 0.8rem;
  line-height: 0.8rem;
  background: rgb(247, 247, 247);
  border-radius: 0.4rem;
  font-family: "PingFangSC-Regular";
  padding: 0 0.32rem;
  box-sizing: border-box;
}
.opencoupon > span:first-of-type {
  font-size: 0.3rem;
  color: rgb(48, 48, 48);
}
.opencoupon > span:last-of-type {
  font-size: 0.3rem;
  color: rgb(153, 153, 153);
}
.paybottom {
  width: 91.5%;
  margin: 0 auto;
}
.paybottom > p:first-of-type {
  font-size: 0.26rem;
  font-family: "PingFangSC-Regular";
  color: rgb(102, 102, 102);
  margin-bottom: 0.16rem;
}
.paybottom > p:first-of-type > span:last-of-type {
  color: rgb(24, 144, 255);
}
.agree {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  padding: 0;
  background-color: rgb(247, 247, 247);
  border: 2px solid rgb(247, 247, 247);
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
}
.agree:checked {
  background: url("../../static/image/yes.png") no-repeat center;
  background-size: 16px 16px;
  background-color: #fff;
  border: none;
}
.paybottom > p:last-of-type {
  display: flex;
  justify-content: space-between;
  font-family: "PingFangSC-Regular";
  padding-bottom: 0.16rem;
}
.paybottom > p:last-of-type > span:first-of-type {
  font-size: 0.3rem;
  color: rgb(48, 48, 48);
}
.paybottom > p:last-of-type > span:first-of-type > span {
  font-size: 0.4rem;
  color: rgb(246, 138, 29);
}
.paybottom > p:last-of-type > span:last-of-type {
  font-size: 0.32rem;
  color: #fff;
  display: inline-block;
  width: 2.5rem;
  height: 0.72rem;
  background: rgb(246, 138, 29);
  border-radius: 0.36rem;
  text-align: center;
  line-height: 0.72rem;
}
.paybottomwrap {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
}
.ispaytime {
  background: #b4b4b4;
}
</style>


