<template>
  <div style="width:100%;height:100%;background:#fff;" v-if="showInfo">
    <div style="width:91.5%;margin:0 auto;padding:0.48rem 0 3.9rem;">
      <p style="font-size:0.36rem;color:rgb(48,48,48);text-align:left;font-family: 'PingFangSC-Regular';line-height:0.4rem;margin-bottom:0.48rem;">请选择服务</p>
      <ul class="menu">
        <li
          :id="showmodel4==true?'menulist1':'menulist'"
          :class="{active:active == item.cid}"
          :ref="'menulist'+item.cid"
          v-for="item in menu"
          :key="item.cid"
          @click="choosetype(item.cid,item.cname,item.money)"
          v-if="item.cid==1"
          :style="{ backgroundImage: 'url(' + img1 + ')' }"
        >          
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
        <li
          :id="showmodel4==true?'menulist1':'menulist'"
          :class="{active:active == item.cid}"
          :ref="'menulist'+item.cid"
          v-for="item in menu"
          :key="item.cid"
          @click="choosetype(item.cid,item.cname,item.money)"
          v-if="item.cid==2"
          :style="{ backgroundImage: 'url(' + img2 + ')' }"
        >
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
        <li
          :id="showmodel4==true?'menulist1':'menulist'"
          :class="{active:active == item.cid}"
          :ref="'menulist'+item.cid"
          v-for="item in menu"
          :key="item.cid"
          @click="choosetype(item.cid,item.cname,item.money)"
          v-if="item.cid==4"
          :style="{ backgroundImage: 'url(' + img3 + ')' }"
        >
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
        <li
          :id="showmodel4==true?'menulist1':'menulist'"
          :class="{active:active == item.cid}"
          :ref="'menulist'+item.cid"
          v-for="item in menu"
          :key="item.cid"
          @click="choosetype(item.cid,item.cname,item.money)"
          v-if="item.cid==5"
          :style="{ backgroundImage: 'url(' + img3 + ')' }"
        >
          <div class="washtypeinfo">
            <input type="radio" value="" name="reserve" id="radio" class="radio" :checked="active == item.cid">
            <div>
              <p>4S专用</p>
              <p>4S店铺专用</p>
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
          <li v-for="item in washprogress2" :key="item.id" v-if="active==5">
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
          <span @click="ispay&&rightnow()">确认下单</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Qs from "qs";
import { MessageBox, Indicator, Popup } from "mint-ui";
import { chosecar,serarchc,valueop,Order,code,getParkingLotListApi,nowDate } from "./api/api.js";
export default {
  name: "pay",
  data() {
    return {
      img1: './staticxiche/image/washcartype1.png',
      img2: './staticxiche/image/washcartype.png',
      img3: './staticxiche/image/washcartype1.png',
      // img1: '../../static/image/washcartype1.png',
      // img2: '../../static/image/washcartype.png',
      // img3: '../../static/image/washcartype1.png',
      showInfo:false,
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
        cid:4,
        cname:"4",
        money:"0",
        sid:19,
        sold:0
      },
      menulist4s: {
        cid:5,
        cname:"5",
        money:"0",
        sid:19,
        sold:0
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
        carOnsale:0,
        carAmount:"",
        deviceid:"",
        carName:"",
        deleteId:"0"
      },
      // brand: 0,
      brandname: "",
      brandnameList: [],
      guinumber:"",
      parkIist: [],
      carshop: {
        openid:"",
        carNumber:"",
        payType:"",
        typeWashCar:"",
        ticketNumber:"",
        price:"",
        parkingSiteId:"",
        relName:"",
        tel:"",
        ip:"",
        dealer: 1561430951496
      },
      iscarshop:"",
      carnameList:[],
      // chosecar:0,
      carname:"",
      ispay:true,
      popupVisible:false,
      popupVisible1:false,
      canUseVip:[],
      isUserVip:false,
      userVipInfoList:[],
      userVipname:"",
      userVipId:"",
      popupVisible2:false,
      ismember:false,
      showmodel4:false,
      req:[],
      memberType:"F",
      modelType:"",
      model:"",
      ismemberfree:false,
      washprogress:[
        {
          id:1,
          img:'./staticxiche/image/washprocess1.png',
          label:'预洗消毒'
        },
        {
          id:2,
          img:'./staticxiche/image/washprocess2.png',
          label:'精洗消毒'
        },
        {
          id:3,
          img:'./staticxiche/image/washprocess3.png',
          label:'喷淋消毒'
        },
        {
          id:5,
          img:'./staticxiche/image/washprocess5.png',
          label:'打蜡消毒'
        },
        {
          id:4,
          img:'./staticxiche/image/washprocess4.png',
          label:'快速风干'
        },
      ],
      washprogress1:[
        {
          id:1,
          img:'./staticxiche/image/washprocess1.png',
          label:'预洗消毒'
        },
        {
          id:2,
          img:'./staticxiche/image/washprocess2.png',
          label:'精洗消毒'
        },
        {
          id:3,
          img:'./staticxiche/image/washprocess3.png',
          label:'喷淋消毒'
        },
        {
          id:4,
          img:'./staticxiche/image/washprocess4.png',
          label:'快速风干'
        },
      ],
      washprogress2:[
        {
          id:1,
          img:'./staticxiche/image/washprocess1.png',
          label:'预洗消毒'
        },
        {
          id:3,
          img:'./staticxiche/image/washprocess3.png',
          label:'喷淋消毒'
        },
        {
          id:4,
          img:'./staticxiche/image/washprocess4.png',
          label:'快速风干'
        },
      ],
      agreewith:true,
      staffwashList:[],
      ispower:false,
      cseId:"",
      handle: function(e){
        e.preventDefault()
      },
    };
  },
  watch:{
    popupTopVisible(value) {
      if(value) {
        this.closeTouch ();
      }else{
        this.openTouch ();
      }
    },
    popupTopVisible1(value) {
      if(value) {
        this.closeTouch ();
      }else{
        this.openTouch ();
      }
    },
  },
  created() {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
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
      if (sessionStorage.getItem('ticknumbar4')) {
        this.loack = 4
        this.disp = sessionStorage.getItem('ticknumbar4')
      }else{
        this.loack = 3;
        this.disp = sessionStorage.getItem("ticknumbar2");
      }      
      this.pay.coupon = "1";
      this.pay.ticketNumber = sessionStorage.getItem("ticknumbar3");
    } else {
      this.loack = 5;
      this.pay.coupon = "0";
    }

    if(sessionStorage.getItem("contactphone")){
      this.pay.phone = sessionStorage.getItem("contactphone");
    }else{
      this.pay.phone = localStorage.getItem("phone");
    }    

    if (sessionStorage.getItem("menu")) {
      this.isStaff();
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
        if(sessionStorage.getItem("ticknumbar3")){
          if (sessionStorage.getItem('ticknumbar4')) {
            let price = sessionStorage.getItem("price")*(this.disp/100);
            price = price > 0 ? price : 0;
            that.y = price.toFixed(2);
          }else{
            let price = sessionStorage.getItem("price") - this.disp;
            price = price > 0 ? price : 0;
            that.y = price.toFixed(2);              
          }  
          that.pay.carMoney = sessionStorage.getItem("price");          
        }else{
          that.y = sessionStorage.getItem("price");
          that.pay.carMoney = sessionStorage.getItem("price");
        }          
      } else {
        if(this.staff==true){
          that.y = "0.00";
        }else{
          that.y = Number(that.menu[0].money).toFixed(2);
        }
        that.pay.carMoney = Number(that.menu[0].money).toFixed(2);
      }

      let datas = {
        openid: localStorage.getItem("openid")
      };
      if(sessionStorage.getItem("washcarNumber")){
        that.brandname = sessionStorage.getItem("washcarNumber")
        that.pay.carNumber = sessionStorage.getItem("washcarNumber");
        // that.isVipType(that.pay.phone);
        serarchc(datas).then(mes => {
          console.log(mes);
          if (mes.data.resCode == 200) {          
            that.brandnameList = mes.data.result;           
          }
        });
      }else{
        that.getcarNumberList();
      }
    }else{
      let data = {
        page: 1,
        pageSize: 10
      }
      axios({
        method: "post",
        url: `${this.washhttpUrl}/carwash/querylistByCarwash`,
        data: Qs.stringify(data)
      }).then(res => {
        Indicator.close();
        console.log(res);
        if (res.status == 200) {
          that.menu = res.data.result;
          if(sessionStorage.getItem('isvipPrice')==1){
            for(let i = 0;i < res.data.result.length;i++){
              that.menu[i].money = res.data.result[i].discountPrice;                              
            }
          }
          console.log(that.menu); 
          this.isStaff();
          if(sessionStorage.getItem("showmodel4")){
            that.showmodel4 = sessionStorage.getItem("showmodel4");                 
          }else{
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
            if(sessionStorage.getItem("ticknumbar3")){
              if (sessionStorage.getItem('ticknumbar4')) {
                let price = sessionStorage.getItem("price")*(this.disp/100);
                price = price > 0 ? price : 0;
                that.y = price.toFixed(2);
              }else{
                let price = sessionStorage.getItem("price") - this.disp;
                price = price > 0 ? price : 0;
                that.y = price.toFixed(2);              
              }  
              that.pay.carMoney = sessionStorage.getItem("price");          
            }else{
              that.y = sessionStorage.getItem("price");
              that.pay.carMoney = sessionStorage.getItem("price");
            }          
          } else {
            if(this.staff==true){
              that.y = "0.00";
            }else{
              that.y = Number(that.menu[0].money).toFixed(2);
            }            
            that.pay.carMoney = Number(that.menu[0].money).toFixed(2);
          }

          let datas = {
            openid: localStorage.getItem("openid")
          };
          if(sessionStorage.getItem("washcarNumber")){
            that.brandname = sessionStorage.getItem("washcarNumber")
            that.pay.carNumber = sessionStorage.getItem("washcarNumber");
            // that.isVipType(that.pay.phone);
            serarchc(datas).then(mes => {
              console.log(mes);
              if (mes.data.resCode == 200) {          
                that.brandnameList = mes.data.result;           
              }
            });
          }else{
            that.getcarNumberList();
          }
        }
      });
    }
    
    this.getVipType();
    // 判断是否有员工权限
    // this.isStaff();
    this.getcarIdinfo();
    // this.getUserIP((ip) => {
    //   sessionStorage.setItem("ip",ip);
    // });
  },
  mounted() {    
    let that = this;
    
    if(sessionStorage.getItem("contactname")){
      this.pay.name = sessionStorage.getItem("contactname");
    }else if(localStorage.getItem("nickname")){
      this.pay.name = localStorage.getItem("nickname");
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
    if(hour < begintime[0] || hour > endtime[0]){
      this.ispay = false;
    }else if(hour == begintime[0] && minute < begintime[1]){
      this.ispay = false;
    }else if(hour == endtime[0] && minute > endtime[1]){
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
    closeTouch () {
      document.getElementsByTagName('body')[0].addEventListener('touchmove', this.handler, {passive:false})//阻止默认事件
    },
    openTouch () {
      document.getElementsByTagName('body')[0].removeEventListener('touchmove', this.handler, {passive:false})//打开默认事件
    },
    // getParkingLotListApiList () {
    //   let params = {
    //     page: 1,
    //     pageSize: 500,
    //     userId: "93f07a1decc14ce69ca82e0d6c5d3761",
    //     dealer: 1561430951496
    //   };
    //   getParkingLotListApi(params).then(message => {
    //     console.log(message);
    //     this.parkIist = message.data.result;
    //   });
    // },
    clearCarNumber(){
      this.brandname = "";
      this.popupVisible = false;
    },
    getcarNumberList(){
      let that = this;
      let datas = {
        openid: localStorage.getItem("openid")
      };
      serarchc(datas).then(res => {
        console.log(res);
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
          // that.isVipType(that.pay.phone);
        }
      });
    },
    bottocenter () {
      window.scrollTo(0, 0)
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
      // this.isVipType(this.pay.phone);
      this.popupVisible = false;
    },
    myFunction(e){
      console.log(e.target.value);
      axios({
        method: "post",
        url: `${this.washurl}/User/updateRelName`,
        data: Qs.stringify({openId:this.pay.openid,relName:e.target.value})
      }).then(res => {
        console.log(res);              
      });
    },
    // chosecarID(){
    //   this.popupVisible1 = true;
    // },
    // chosecarIDN(index){
    //   this.carname = this.carnameList[index].name;
    //   this.pay.deviceid = this.carnameList[index].deviceid;
    //   this.pay.carName = this.carnameList[0].name;
    //   this.chosecar = 0;
    //   this.popupVisible1 = false;
    // },
    // choseVip(){
    //   this.popupVisible2 = true;
    // },
    // choseVipN(index,val){
    //   this.userVipname = this.userVipInfoList[index].alias;
    //   this.userVipId = this.userVipInfoList[index].id;
    //   this.popupVisible2 = false;
    //   if(this.active==1){
    //     this.model = "02";
    //   }else if(this.active==2){
    //     this.model = "01";
    //   }else if(this.active==4){
    //     this.model = "04";
    //   }
    //   this.isVip(this.pay.phone,this.userVipId,this.model);
    // },
    getcarIdinfo(){
      this.carnameList = [];
      let that = this;
      axios({
        method: "post",
        url: `${this.washhttpUrl}/parkingCarRecerd/selectByCarid`,
        data: Qs.stringify({sid:this.pay.sid})
      }).then(res => {
        console.log(res);
        if(res.data.resCode == 0){
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
      sessionStorage.setItem("menu",JSON.stringify(this.menu));
      sessionStorage.setItem("showmodel4",this.showmodel4);
      this.$router.push("/fuzhi");
    },
    ckdservices(){
      sessionStorage.setItem("sid", this.pay.sid);
      sessionStorage.setItem("price", this.pay.carMoney);
      sessionStorage.setItem("title", this.pay.carModel);
      sessionStorage.setItem("contactname", this.pay.name);
      sessionStorage.setItem("contactphone", this.pay.phone);
      sessionStorage.setItem("washcarNumber", this.brandname);
      sessionStorage.setItem("menu",JSON.stringify(this.menu));
      sessionStorage.setItem("showmodel4",this.showmodel4);
      this.$router.push("/service");
    },
    choosetype(id, title, price) {
      console.log(id);      
      this.active = id;
      if(this.ispower == true){
        if(this.active==1){
          this.model = "02";
        }else if(this.active==2){
          this.model = "01";
        }else if(this.active==4){
          this.model = "04";
        }else if(this.active==5){
          this.model = "05";
        }
        this.isStaffPrice(this.model);
      }
      if(this.isUserVip == true && this.ispower == false){
        if(this.active==1){
          this.model = "02";
        }else if(this.active==2){
          this.model = "01";
        }else if(this.active==4){
          this.model = "04";
        }
        this.isVip(this.pay.phone,this.userVipId,this.model);
      }                
      this.pay.carMoney = Number(price).toFixed(2);
      this.pay.carModel = title;
      if(sessionStorage.getItem("ticknumbar3")){
        if(this.staff == true){
          this.y = "0.00";
        }else{
          if (sessionStorage.getItem('ticknumbar4')) {
            let price = this.pay.carMoney*(sessionStorage.getItem("ticknumbar4")/100);
            price = price > 0 ? price : 0;
            this.y = price.toFixed(2);
          }else{
            let price = this.pay.carMoney - sessionStorage.getItem("ticknumbar2");
            price = price > 0 ? price : 0;
            this.y = price.toFixed(2);            
          } 
        }                   
      } else{
        if(this.staff == true){
          this.y = "0.00";
        }else{
          this.y = Number(price).toFixed(2);
        }                              
      }
    },
    rightnow() {
      console.log(this.agreewith);
      let that = this;
      this.pay.cdate = nowDate();   
      if(this.pay.member == 1){
          this.pay.carAmount = "0.00";
          this.pay.carOnsale = this.pay.carMoney;
          this.pay.id = this.userVipId;
          this.carshop.payType = 3;
          this.carshop.carInfoWashcarId = this.userVipId;
          if (this.pay.coupon == 1) {
            this.pay.coupon = "0";
            this.pay.ticketNumber = "";
            delete this.carshop.ticketNumber;
          }                
      }else{
        if(this.pay.coupon == 1){
          if (sessionStorage.getItem('ticknumbar4')) {
            this.pay.carAmount = (that.pay.carMoney*(sessionStorage.getItem("ticknumbar4")/100)).toFixed(2);
            let sub = that.pay.carMoney - this.pay.carAmount;
            this.pay.carOnsale = sub.toFixed(2);                        
          }else{
            this.pay.carOnsale = Number(sessionStorage.getItem("ticknumbar2")).toFixed(2);
            let sub = that.pay.carMoney - this.pay.carOnsale;
            this.pay.carAmount = sub > 0 ? sub.toFixed(2) : "0.00";            
          }          
          this.carshop.payType = 2;
          this.carshop.ticketNumber = this.pay.ticketNumber;
        }else{
          this.pay.carOnsale = "0.00";
          this.pay.carAmount = this.pay.carMoney;
          delete this.carshop.ticketNumber;     
          this.carshop.payType = 1;          
        }        
      }
      console.log(this.pay)
      this.carshop.openid = this.pay.openid;
      this.carshop.ip = this.pay.ip;
      this.carshop.parkingSiteId = this.pay.sid;
      this.carshop.relName = this.pay.name;
      this.carshop.tel = this.pay.phone;
      if(this.staff==true){
        this.carshop.price = 0;
      }else{
        this.carshop.price = this.pay.carMoney;
      }      
      this.carshop.carNumber = this.pay.carNumber;
      this.carshop.deviceId = this.pay.deviceid;
      this.carshop.alias = this.pay.carName;
      if(this.pay.carModel == "打蜡晶洗"){
        this.carshop.typeWashCar = 1;
      }else if(this.pay.carModel == "水蜡快洗"){
        this.carshop.typeWashCar = 2;
      }else if(this.pay.carModel == "4"){
        this.carshop.typeWashCar = 4;
        this.carshop.payType = 3;
        this.carshop.carInfoWashcarId = this.userVipId;
      }else if(this.pay.carModel == "5"){
        this.carshop.typeWashCar = 5;
      } 
      console.log(this.carshop)     

      if(this.pay.carNumber==""){
        delete this.pay.carNumber;
      }
      if(this.carshop.carNumber==""){
        delete this.carshop.carNumber;
      }      

      // 判断是否有同意条款
      if(this.agreewith==true){
        that.$http({
          method: "post",
          url: that.washurl + "/carShopWashRecords/pay",
          data: Qs.stringify(that.carshop)
        })
        .then(message => {
          console.log(message);
          // alert(JSON.stringify(message));
          if (message.data.resCode == 0) {
            that.moneys = message.data.money;
            that.appId = message.data.appId;
            that.timeStamp = message.data.timeStamp;
            that.nonceStr = message.data.nonceStr;
            that.package = message.data.package;
            that.signType = message.data.signType;
            that.paySign = message.data.paySign;
            that.weiTrade = message.data.tradeNo;
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
            that.carshop.PayStatus = "get_brand_wcpay_request:ok";
            that.carshop.orderId = message.data.tradeNo;
            that.carshop.price = 0;
            if(that.carshop.payType == 3){
              that.carshop.carInfoWashcarId = that.userVipId;
            }
            // alert(JSON.stringify(that.pay));
            let data = {
              orderId:that.carshop.orderId,
              price:that.carshop.price,
              ticketNumber:that.carshop.ticketNumber,
              payType:that.carshop.payType,
              PayStatus:that.carshop.PayStatus
            }
            if(that.staff==true){
              data.cseId = that.cseId;
              data.carInfoWashcarId = 0;
            }
            if(that.carshop.payType == 3){
              data.carInfoWashcarId = that.userVipId;
            }
            console.log(data);
            that
              .$http({
                method: "post",
                url: this.washurl + "/carShopWashRecords/recvStatus",
                data: Qs.stringify(data)
              })
              .then(res => {
                // alert(JSON.stringify(res));
                if (res.data.resCode == 0) {
                  MessageBox.alert("本次洗车免费").then(action => {
                    let detailed = {
                      carAmount:res.data.result.paidPrice,
                      carModel:res.data.result.typeWashCar==1?"打蜡晶洗":res.data.result.typeWashCar==2?"水蜡快洗":res.data.result.typeWashCar==4?"模式四":"模式五",
                      carMoney:res.data.result.price,
                      carName:res.data.result.alias,
                      carNumber:res.data.result.carNumber,
                      carOnsale:res.data.result.onsalePrice,
                      cdate:res.data.result.date,
                      coupon:res.data.result.payType==2?"1":"0",
                      crid:res.data.result.id,
                      deleteId:res.data.result.isDel,
                      deviceid:res.data.result.deviceId,
                      // endTime:res.data.result.paidPrice,
                      error:res.data.result.error,
                      // imageUrl:res.data.result.paidPrice,
                      // ip:res.data.result.paidPrice,
                      member:res.data.result.payType==3?"1":"0",
                      name:res.data.result.relName,
                      number:res.data.result.orderId,
                      openid:res.data.result.openid,
                      paystatus:"get_brand_wcpay_request:ok",
                      phone:res.data.result.tel,
                      sid:sessionStorage.getItem("sid")!=""?sessionStorage.getItem("sid"):that.$route.query.sid,
                      // sname:sessionStorage.getItem("sname"),
                      startTime:res.data.result.washTime,
                      status:res.data.result.orderStatus==0?1:0,
                      ticketNumber:res.data.result.ticketNumber,
                      washcarStatus:res.data.result.washcarStatus,
                    }                    
                    sessionStorage.setItem("washdetailed",JSON.stringify(detailed));
                    sessionStorage.setItem("carInfoWashcarId",that.userVipId);
                    // this.$router.replace({ path: "/detailed" });
                    this.$router.replace({ path: "/attention" });
                  });
                }else{

                }
              });
          } else {
            if(message.data.result == "已有订单待洗车"){
              MessageBox.alert(message.data.result).then(action => {                    
                that.$router.replace({ path: "/washrecord"});
              });
            }else{
              MessageBox("提示", message.data.result);
            }
          }
        });
      }else{
        MessageBox("提示", "请勾选《车口袋洗车服务协议》");
      }                        
    },
    polling() {
      let that = this;
      this.carshop.PayStatus = "get_brand_wcpay_request:ok";
      this.carshop.orderId = this.weiTrade;
      this.carshop.price = this.moneys;
      let data = {
        orderId:that.carshop.orderId,
        price:that.carshop.price,
        ticketNumber:that.carshop.ticketNumber,
        payType:that.carshop.payType,
        PayStatus:that.carshop.PayStatus
      }
      if(that.staff==true){
        data.cseId = that.cseId;
        data.carInfoWashcarId = 0;
      }
      if(that.carshop.payType == 3){
        data.carInfoWashcarId = that.userVipId;
      }
      console.log(data);
      this.$http({
        method: "post",
        url: this.washurl + "/carShopWashRecords/recvStatus",
        data: Qs.stringify(data)
      }).then(res => {
        // alert(JSON.stringify(res))
        Indicator.close();
        if(res.data.resCode == 0){
          let detailed = {
            carAmount:res.data.result.paidPrice,
            carModel:res.data.result.typeWashCar==1?"打蜡晶洗":res.data.result.typeWashCar==2?"水蜡快洗":res.data.result.typeWashCar==4?"模式四":"模式五",
            carMoney:res.data.result.price,
            carName:res.data.result.alias,
            carNumber:res.data.result.carNumber,
            carOnsale:res.data.result.onsalePrice,
            cdate:res.data.result.date,
            coupon:res.data.result.payType==2?"1":"0",
            crid:res.data.result.id,
            deleteId:res.data.result.isDel,
            deviceid:res.data.result.deviceId,
            // endTime:res.data.result.paidPrice,
            error:res.data.result.error,
            // imageUrl:res.data.result.paidPrice,
            // ip:res.data.result.paidPrice,
            member:res.data.result.payType==3?"1":"0",
            name:res.data.result.relName,
            number:res.data.result.orderId,
            openid:res.data.result.openid,
            paystatus:"get_brand_wcpay_request:ok",
            phone:res.data.result.tel,
            sid:sessionStorage.getItem("sid")!=""?sessionStorage.getItem("sid"):that.$route.query.sid,
            sname:sessionStorage.getItem("sname"),
            startTime:res.data.result.washTime,
            status:res.data.result.orderStatus==0?1:0,
            ticketNumber:res.data.result.ticketNumber,
            washcarStatus:res.data.result.washcarStatus,
          }
          sessionStorage.setItem("washdetailed",JSON.stringify(detailed));
          sessionStorage.setItem("carInfoWashcarId",that.userVipId);
          // this.$router.replace({ path: "/detailed" });
          this.$router.replace({ path: "/attention" });
        }else{

        }                              
      });      
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
    getcoupon(){
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
                let deviceId = result.substring(result.indexOf('state=') + 6, result.indexOf('#')); 
                sessionStorage.setItem("sid", that.pay.sid);
                sessionStorage.setItem("price", that.pay.carMoney);
                sessionStorage.setItem("title", that.pay.carModel);
                sessionStorage.setItem("contactname", that.pay.name);
                sessionStorage.setItem("contactphone", that.pay.phone);
                sessionStorage.setItem("washcarNumber", that.brandname);               
                that.$router.push({path: '/getCoupon',query: {sid:deviceId,type:that.active}})
              }
            });
          });
        });
    },
    vip(){
      sessionStorage.setItem("sid", this.pay.sid);
      sessionStorage.setItem("price", this.pay.carMoney);
      sessionStorage.setItem("title", this.pay.carModel);
      sessionStorage.setItem("contactname", this.pay.name);
      sessionStorage.setItem("contactphone", this.pay.phone);
      sessionStorage.setItem("washcarNumber", this.brandname);
      sessionStorage.setItem("menu",JSON.stringify(this.menu));
      sessionStorage.setItem("showmodel4",this.showmodel4);
      this.$router.push('/people/vipCardList');
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
            if(res.data.result[i].name != "F"){
              let list = res.data.result[i];
              that.req.push(list);
            }           
          }
        }
        console.log(that.req);
      });
    },
    // getUserVipInfo(){
    //   let that = this;
    //   that.canUseVip = [];
    //   axios({
    //     method: "post",
    //     url: `${this.washurl}/carInfoWashCar/selectVIPByTel`,
    //     data: Qs.stringify({
    //       dealer: 1561430951496,
    //       tel:localStorage.getItem("phone")?localStorage.getItem("phone"):localStorage.getItem("tel")
    //     })
    //   }).then(res => {        
    //     console.log(res);
    //     if(res.data.code == 0){
    //       let canuse = res.data.result;
    //       let length = res.data.result.length;
    //       for(var i = 0;i < length;i++){
    //         if(canuse[i].isUse==0){
    //           that.canUseVip.push(canuse[i]);
    //         }
    //       }
    //       console.log(that.canUseVip);
    //     }        
    //   });
    // },
    isVipType(val){
      console.log(val);
      let that = this;
      that.canUseVip = [];
      this.userVipInfoList = [];
      axios({
        method: "post",
        url: `${this.washurl}/carInfoWashCar/selectVIPByTel`,
        data: Qs.stringify({
          dealer: 1561430951496,
          tel:val
        })
      }).then(res => {        
        console.log(res);
        if(res.data.code == 0){
          let canuse = res.data.result;
          let length = res.data.result.length;
          for(var i = 0;i < length;i++){
            if(canuse[i].isUse==0){
              that.canUseVip.push(canuse[i]);
            }
          }
          console.log(that.canUseVip);
          that.userVipInfoList = that.canUseVip;
          console.log(that.userVipInfoList);
          if(that.userVipInfoList.length>0){
            that.isUserVip = true;
            that.userVipname = that.userVipInfoList[0].alias; 
            that.userVipId = that.userVipInfoList[0].id;
            if(that.userVipInfoList[0].model=="04"){
              that.showmodel4 = true;
              if(that.showmodel4==true){
                for(var i = 0;i < that.menu.length;i++){
                  if(that.menu[i].cid == 4){
                    that.menu.splice(i,1);                
                    i--;
                  }
                }
                that.menu.push(that.menulist);
              }
            }else{
              that.showmodel4 = false;
              for(var i = 0;i < that.menu.length;i++){
                if(that.menu[i].cid == 4){
                  that.menu.splice(i,1);
                  if(that.active == 4){
                    that.active = that.menu[0].cid;
                    that.y = Number(that.menu[0].money).toFixed(2);                
                    that.pay.carMoney = Number(that.menu[0].money).toFixed(2);
                    that.pay.carModel = that.menu[0].cname;
                  }                
                  i--;
                }
              }
            }        
            if(that.active==1){
              that.model = "02";
            }else if(that.active==2){
              that.model = "01";
            }else if(that.active==4){
              that.model = "04";
            }
            that.isVip(that.pay.phone,that.userVipInfoList[0].id,that.model);      
          }else{
            that.pay.member = "0";
            that.ismemberfree = false;
            that.isUserVip = false;
          } 
        }else{
          that.pay.member = "0";
          that.ismemberfree = false;
          that.isUserVip = false;
          that.showmodel4 = false;
          for(var i = 0;i < that.menu.length;i++){
            if(that.menu[i].cid == 4){
              that.menu.splice(i,1);
              if(that.active == 4){
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
    isVip(phone,id,model){
      let that = this;
      axios({
        method: "post",
        url: `${this.washurl}/carInfoWashCar/useById`,
        data: Qs.stringify({tel:phone,id:id,model:model})
      }).then(res => {        
        console.log(res);
        if(res.data.code == 0){
          that.pay.member = "1";
          that.ismemberfree = true;
          that.y = "0.00";
        }else{
          that.pay.member = "0";
          that.ismemberfree = false;
        }        
      });
    },

    // 判断是否有员工权限
    isStaff(){
      let that = this;
      let data = {
        tel:localStorage.getItem("phone") ? localStorage.getItem("phone") : localStorage.getItem("tel"),
        openId:localStorage.getItem("openid"),
      }
      this.$http({
        method: "post",
        url: this.washurl + "/carShopEmp/authentication",
        data: Qs.stringify(data)
      }).then(message => {
        Indicator.close();
        that.showInfo = true;
        console.log(message.data);
        if(message.data.resCode == 0){  
          that.staffwashList = message.data.result;                   
          that.ispower = true;
          // 判断是否有模式四
          that.staffwashList.forEach((item, index) => {
            if (item.model == "04") {
              that.showmodel4 = true;
              for(var i = 0;i < that.menu.length;i++){
                if(that.menu[i].cid == 4){
                  that.menu.splice(i,1);                
                  i--;
                }
              }
              that.menu.push(that.menulist);
            }else{
              that.showmodel4 = false;
            }
            if (item.model == "05") {
              that.showmodel5 = true;
              for(var i = 0;i < that.menu.length;i++){
                if(that.menu[i].cid == 5){
                  that.menu.splice(i,1);                
                  i--;
                }
              }
              that.menu.push(that.menulist4s);
            }else{
              that.showmodel5 = false;
            }
          });  
          if(that.active==1){
            that.model = "02";
          }else if(that.active==2){
            that.model = "01";
          }else if(that.active==4){
            that.model = "04";
          }else if(that.active==5){
            that.model = "05";
          }
          that.isStaffPrice(that.model);        
        }else{
          that.staffwashList = [];
          that.ispower = false;          
        }
        that.isVipType(that.pay.phone);
      })
    },
    // 判断是否符合员工洗车模式
    isStaffPrice(model){
      console.log(this.ispower);
      console.log(model);
      let that = this;
      let length = this.staffwashList.length;
      for(let i = 0;i < length;i++){
        if(model==this.staffwashList[i].model){
          if(this.staffwashList[i].onlyTimes>0){
            this.staff = true;
            this.cseId = this.staffwashList[i].id;
            this.y = "0.00";
            break;
          }else{
            this.staff = false;
          }
        }else{
          this.staff = false;
        }
      }
      // this.staffwashList.forEach((item, index) => {
      //   if (item.model == model) {
      //     if(item.onlyTimes>0){
      //       that.staff = true;
      //       that.cseId = item.id;
      //       that.y = "0.00";
      //     }else{
      //       that.staff = false;                 
      //     }
      //   }else{
      //     that.staff = false;
      //   }
      // });      
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
  color: #787878;
}
.remark{
  width: 94%;
  margin: 0 auto;
  text-align: right;
  color: rgb(153, 153, 153);
}
.remark p{
  display: inline-block;
}
.remark img{
  vertical-align: middle;
  width: 0.35rem;
  height: 0.35rem;
  margin-right: 0.05rem;
}
.remark span{
  vertical-align: middle;
}
.mint-popup{
  width: 100%;
  max-height: 164px;
  overflow-y: auto;
}
.mint-popup>div>div{
  text-align: center;
  border-bottom: 1px solid #E4E4E4;
  height: 40px;
  line-height: 40px;
  font-size: 0.3rem;
  color: #303030;
}
.mint-popup>div:last-of-type{
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 0.3rem;
  color: #303030;
  border-bottom: 1px solid transparent;
}


.menu>li{
  height: 2.14rem;
  border-radius: 0.1rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-bottom: 0.16rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
}
.menu>li:not(.active){
  opacity: 0.6;
}
.radio{
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
.radio:checked{
  background: url('../../static/image/yes.png') no-repeat center;
  background-size: 24px 24px;
  background-color: #fff;
  border: none;
}
.washtypeinfo>div{
  display: inline-block;
  margin-left: 0.32rem;
  padding: 0.56rem 0;
  vertical-align: middle;
}
.washtypeinfo>div>p:first-of-type{
  font-size: 0.46rem;
  font-family: 'PingFangSC-Regular';
  margin-bottom: 0.22rem;
}
.washtypeinfo>div>p:last-of-type{
  font-size: 0.26rem;
  font-family: 'PingFangSC-Regular';
}
.washmoney{
  font-size: 0.50rem;
  font-family: 'PingFangSC-Regular';
  padding-top: 0.56rem;
  margin-right: 0.14rem;
}
.washmoney>p>span{
  font-size: 0.34rem;
}
.washmoney>img{
  width: 1.88rem;
  height: 1.01rem;
}
.washprogress{
  display: flex;
  justify-content: space-between;
  margin-top: 0.46rem;
}
.washprogress>li>p,.washprogress>li>div{
  display: inline-block;
}
.washprogress>li>p{
  text-align: center;
  font-size: 0.26rem;
  color: rgb(48, 48, 48);
}
.washprogress>li>p>img{
  height: 0.48rem;
  width: auto;
  margin-bottom: 0.12rem;
}
.washprogress>li>p>span{
  display: block;
}
.washprogress>li{
  position: relative;
}
.washprogress>li>img{
  height: 0.44rem;
  width: auto;
  position: absolute;
  top: 0;
  right: -0.4rem;
}
.openvip{
  background: rgb(255, 244, 233);
  font-size: 0.26rem;
  color: rgb(102, 102, 102);
  font-family: 'AdobeHeitiStd-Regular'; 
  border-top-right-radius: 0.24rem;
  border-top-left-radius: 0.24rem;
  height: 0.72rem;
  line-height: 0.72rem;
}
.openvip>div{
  display: flex;
  justify-content: space-between;
}
.opencoupon{
  width: 91.5%;
  margin: 0.24rem auto;
  display: flex;
  justify-content: space-between;
  height: 0.8rem;
  line-height: 0.8rem;
  background: rgb(247, 247, 247);
  border-radius: 0.4rem;
  font-family: 'PingFangSC-Regular';
  padding: 0 0.32rem;
  box-sizing: border-box;
}
.opencoupon>span:first-of-type{
  font-size: 0.3rem;
  color: rgb(48, 48, 48); 
}
.opencoupon>span:last-of-type{
  font-size: 0.3rem;
  color: rgb(153, 153, 153); 
}
.paybottom{
  width: 91.5%;
  margin: 0 auto;
}
.paybottom>p:first-of-type{
  font-size: .26rem;
  font-family: 'PingFangSC-Regular';
  color: rgb(102, 102, 102);
  margin-bottom: 0.16rem;
}
.paybottom>p:first-of-type>span:last-of-type{
  color: rgb(24, 144, 255);
}
.agree{
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
.agree:checked{
  background: url('../../static/image/yes.png') no-repeat center;
  background-size: 16px 16px;
  background-color: #fff;
  border: none;
}
.paybottom>p:last-of-type{
  display: flex;
  justify-content: space-between;
  font-family: 'PingFangSC-Regular';
  padding-bottom: 0.16rem;
}
.paybottom>p:last-of-type>span:first-of-type{
  font-size: .3rem;  
  color: rgb(48, 48, 48);
}
.paybottom>p:last-of-type>span:first-of-type>span{
  font-size: .4rem;  
  color: rgb(246, 138, 29);
}
.paybottom>p:last-of-type>span:last-of-type{
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
.paybottomwrap{
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
}
</style>


