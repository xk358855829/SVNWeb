<template>
  <div id="detailed" style="background:#fff;padding-bottom:0.4rem;width:100%;min-height:100%;">
    <!-- <div class="toptitle">
      <p v-if="status==1">请确保您的爱车已停到位，点击下方按钮启动洗车机</p>
      <p v-if="status==1"><img src="../../static/image/down.png" alt=""></p>
      <div class="boxY topstart" v-if="status==1">
        <div style="background:#f61c1c;" @click="nextOk()">启动洗车机</div>      
      </div>
    </div> -->
    <div class="detailedtop">
      <div class="detailedtopbg" :style="{ backgroundImage: 'url(' + img + ')' }">
        <img class="circle" src="../../static/image/detailedcircle.png" alt="">
        <div class="circletop">
          <div class="circle-bg"></div>
          <div class="circle-alt">
            <div class="circle-alt-lft" :style="{'--animationtime': animationLtime + 's'}"></div>
            <div class="circle-alt-rht" :style="{'--animationtime': animationRtime + 's','--animationdelay': delaytime + 's'}"></div>
          </div>
        </div>
        <img class="line" src="../../static/image/detailedcircleline.png" alt="">
        <div class="stop" :style="{ backgroundImage: 'url(' + img1 + ')' }" @click="run&&canstop()">{{run?"紧急停止":"洗车完成"}}</div>
        <div>
          <p>{{ title }}</p>
          <p>{{ label }}</p>
        </div>        
      </div>
      <div class="plese">
        <div>注意事项</div>
        <p>
          <img src="../../static/image/detailed2.png" alt="">
          <span>洗车期间，请坐在车内，严禁打开车门或窗，以免发生意外。</span>
        </p>
        <p>
          <img src="../../static/image/detailed1.png" alt="">
          <span>若你不在车内，洗车期间请勿走进洗车房内部，以免发生意外。</span>
        </p>
        <p>
          <img src="../../static/image/detailed3.png" alt="">
          <span>回正方向盘，这样轮毂能刷的更干净哦！</span>
        </p>
      </div>
    </div>
    <div class="lider"></div>
    <div class="boxB">
      <div>订单信息</div>
      <p :class="status==1?'borderb':''">
        <span class="left">订单号</span>
        <span>{{detailed.number}}</span>
      </p>
      <p>
        <span class="left">站点名称</span>
        <span>{{chosesname(detailed.sid)}}</span>
      </p>
      <p>
        <span class="left">车牌号码</span>
        <span>{{detailed.carNumber}}</span>
      </p>
      <p>
        <span class="left">支付时间</span>
        <span>{{detailed.cdate!=""?fmtDate(detailed.cdate.time):"-"}}</span>
      </p>
      <p>
        <span class="left">洗车模式</span>
        <span>{{detailed.carModel==4?"标准快洗":detailed.carModel}}</span>
      </p>
      <p>
        <span class="left">应付金额</span>
        <span>{{detailed.carMoney}}元</span>
      </p>
      <p>
        <span class="left">优惠金额</span>
        <span>{{detailed.carOnsale}}元</span>
      </p>
      <p>
        <span class="left">实付金额</span>
        <span>{{detailed.carAmount}}元</span>
      </p>
    </div>
    <!-- <div class="boxY" v-if="status==0">
      <div style="background:#f61c1c;" @click="deleteOrder()">删除订单</div>      
    </div> -->
    <!-- <div class="boxY" v-if="status==1">
      <div style="background:#f61c1c;" @click="nextOk()">启动洗车机</div>      
    </div> -->
    <!-- <div class="boxY" v-if="status==2 || status == 3">
      <div style="background:#f61c1c;" @click="canstop()">紧急停止</div>      
    </div>    
    <confirm @cancel="close" v-if="show" :count="count" ref="confirm" :onlodaing="onlodaing"></confirm> -->
  </div>
</template>

<script>
import Qs from 'qs'
import { Indicator, MessageBox, Toast } from 'mint-ui';
import { getsiteList,code } from './api/api.js'
import axios from 'axios'
import confirm from './confirm'
export default {
  name: 'detailed',
  data () {
    return {
      detailed:{},
      parkIist:[],
      carId:"",
      camera:"",
      onlod:"",
      time:1,
      interval:"",
      run:true,
      count: 5,
      timer: null,
      show:false,
      status:"",
      // img:'../../static/image/detailedtopbg.png',
      // img1:'../../static/image/detailedcirclestop.png',
      img:'./staticxiche/image/detailedtopbg.png',
      img1:'./staticxiche/image/detailedcirclestop.png',
      startTime:"",
      alltime: 422,
      animationtime: 422,
      delaytime:211,
      animationLtime:211,
      animationRtime:211,
      title: "",
      label: "",
      loadprogress:"",
    }
  },
  components: {
    confirm
  },
  watch: {
    status() {
      this.status = this.detailed.washcarStatus;
    },
  },
  methods: { 
    close(){
      this.show = false;
    },
    nextOk () {
      let that = this;     
      that.show = true;
      that.$nextTick(() => {
        that.$refs.confirm.goGrdoupRecor();
      })    
    },
    canstop(){
      let that = this;
      MessageBox.confirm('非紧急情况下请勿使用此按钮，此操作将影响洗车机正常运行，请确认是否紧急停止洗车','提示').then(action => {
        that.stopCar();
      });
    },
    stopCar(){
      Indicator.open({
        text: '正在停止中，请稍后...',
        spinnerType: 'fading-circle'
      });
      let that = this;
      // this.time++;
      // this.addTime();
      // console.log(this.time)
      axios({
        method: "post",
        url: `${this.wash_test_url}/parkingCarRecerd/sleletByParkingStop`,
        data: Qs.stringify({
          sid:that.detailed.sid,
          carId:that.detailed.deviceid,
          orderId:that.detailed.number
        })
      }).then(res => {
        console.log(res);
        if(res.data.resCode == 0){   
          // clearInterval(that.interval);
          Indicator.close();
          that.time = 1;
          // sessionStorage.setItem("washrecordstatus",2);   
          MessageBox.alert("洗车机停止成功").then(action => {                    
            // that.onlod=setInterval(()=>{
            //   that.onlodaing()
            // },10000);
          });                           
        }else{
          Indicator.close();
          MessageBox.alert("洗车机停止失败，请重试").then(action => {                    
            
          });
          // that.interval = setInterval(()=>{
          //   that.stopCar();
          // }, 1000);
        }        
      }).catch((response) => {
        Indicator.close();
        Toast("服务器错误，请稍后再试");
      });
    },
    // addTime(){
    //   if(this.time == 30){
    //     clearInterval(this.interval);
    //     Indicator.close();
    //     Toast("停止超时，请稍后再试！");
    //     this.time = 1;
    //     that.onlod=setInterval(()=>{
    //       that.onlodaing()
    //     },10000);
    //   }else{
    //     console.log(this.time);
    //   }
    // },
    fmtDate(obj) {
      let date = new Date(obj);
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let minute = date.getMinutes();
      let second = date.getSeconds();
      minute = minute < 10 ? "0" + minute : minute;
      second = second < 10 ? "0" + second : second;
      return (
        y + "-" + m + "-" + d + " " + h + ":" + minute +':'+second
      );
    },
    getwashsiteList() {
      let params = {
        page: 1,
        pageSize: 500,
        userId: "SURIOT",
        dealer: 123
      };
      let that = this;
      getsiteList(params).then(message => {
        console.log(message);
        if (message.data.result.length > 0) {
          for (var i = 0; i < message.data.result.length; i++) {
            let list = {
              sid: message.data.result[i].sid,
              sname: message.data.result[i].sname,
              carid: message.data.result[i].carid,
              camera: message.data.result[i].camera,
            };
            this.parkIist.push(list);
          }
          console.log(this.parkIist);
          for(var i = 0;i < that.parkIist.length;i++){
            if(that.detailed.sid == that.parkIist[i].sid){              
              that.carId = that.parkIist[i].carid;
              that.camera = that.parkIist[i].camera;
            }
          }
        } else {
          this.parkIist = [];
        }
      });
    },
    chosesname(val) {
      this.parkIist.forEach((a, index) => {
        if (a.sid == val) {
          val = a.sname;
        }
      });
      return val;
    },
    onlodaing(){
      let that = this;
      axios({
        method: "post",
        url: `${this.washhttpUrl}/parkingCarRecerd/sleletByParkingNumber`,
        data: Qs.stringify({
          number:that.detailed.number,
        })
      }).then(res => {
        console.log(res);
        if(res.data.resCode == 0){
          if(res.data.result.carShopId){
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
              sid:that.detailed.sid,
              startTime:res.data.result.washTime,
              status:res.data.result.orderStatus==0?1:0,
              ticketNumber:res.data.result.ticketNumber,
              washcarStatus:res.data.result.washcarStatus,
            }  
            that.status = res.data.result.washcarStatus;   
            sessionStorage.setItem("washdetailed",JSON.stringify(detailed));
          }else{
            that.detailed = res.data.result;
            that.status = res.data.result.washcarStatus;   
            sessionStorage.setItem("washdetailed",JSON.stringify(res.data.result));
          }   
          that.startTime = ((this.detailed.startTime).substring(0,(this.detailed.startTime).length-2)).replace(/-/g, '/');
          that.startTime = (new Date(that.startTime)).getTime();       
          if(res.data.result.washcarStatus == 0){
            clearInterval(that.onlod)
            that.run = false;
            MessageBox.alert("洗车已完成，欢迎下次光临").then(action => {                    
              that.$router.push({
                path: "/finishWash",                
              });
            });
          }else{
            that.run = true;
          }                        
        }else{
          
        }        
      });
    },
    deleteOrder(){
      let that = this;
      let data = {number:this.detailed.number};
      MessageBox.confirm('是否删除订单').then(action => {
        axios.post(that.washhttpUrl + "/parkingCarRecerd/deleteByNumber",Qs.stringify(data)).then(message => {
          console.log(message);
          if(message.data.resCode == 0){
            MessageBox.alert("删除成功").then(action => {                    
              that.$router.push({
                path: "/washrecord",                
              });
            });
          }else{
            MessageBox("提示","删除失败");
          }
        })
      });
    },
    isWhichProgerss(){
      let nowtime = new Date().getTime();
      let seconds = parseInt((nowtime - this.startTime)/1000);
      console.log(seconds);
      if(seconds<45){
        this.title = "泡沫预洗";
        this.label = "分离污渍，带走泥沙";
      }else if(45<seconds&&seconds<135){
        this.title = "轮毂清洗";
        this.label = "进一步带走轮毂上的泥沙污渍";
      }else if(135<seconds&&seconds<240){
        this.title = "深度刷洗";
        this.label = "有效提升清洁度";
      }else if(240<seconds&&seconds<422){
        this.title = "三位立体风干";
        this.label = "无接触仿形吹风，干燥车身";
      }else if(seconds>780&&status==0){
        this.title = "洗车完成";
        this.label = "请驶出洗车区域";
        clearInterval(this.loadprogress);
      }
    }, 
    getAnimationTime(){
      if(this.detailed.carModel=="模式四"){
        this.alltime = 240;
      }else if(this.detailed.carModel=="水蜡快洗"){
        this.alltime = 422;
      }else if(this.detailed.carModel=="打蜡晶洗"){
        this.alltime = 780;
      }    
      let nowtime = new Date().getTime();
      let seconds = parseInt((nowtime - this.startTime)/1000);
      this.animationtime = this.alltime-seconds;
      console.log(this.animationtime);
      this.animationLtime = this.alltime/2-seconds;
      if(seconds<this.alltime/2){
        this.delaytime = this.alltime/2-seconds;      
        this.animationRtime = this.alltime/2;
      }else{
        this.delaytime = 0;      
        this.animationRtime = this.alltime/2-(seconds-this.alltime/2);
      }      
      let lineImg = document.getElementsByClassName("line")[0];
      let length = document.styleSheets.length;
      let style = document.styleSheets[length-1];            
      console.log(style);
      style.insertRule("@keyframes rotateZhizhen{0% {transform: rotate("+((seconds/this.alltime)*360)+"deg)} 100% {transform: rotate(360deg)}}",1);
      if(seconds<this.alltime/2){
        style.insertRule("@keyframes rotateAn{0% {transform: rotate("+((seconds/(this.alltime/2))*180)+"deg)} 100% {transform: rotate(180deg);opacity: 1;}}",2);
        style.insertRule("@keyframes rotateAnR{0% {transform: rotate(0deg)} 100% {transform: rotate(180deg);opacity: 1;}}",3);
      }else{
        style.insertRule("@keyframes rotateAn{0% {transform: rotate(180deg);opacity: 1;} 100% {transform: rotate(180deg);opacity: 1;}}",2);
        style.insertRule("@keyframes rotateAnR{0% {transform: rotate("+(((seconds-(this.alltime/2))/(this.alltime/2))*180)+"deg)} 100% {transform: rotate(180deg);opacity: 1;}}",3);
      }            
      lineImg.style.animationDuration = this.animationtime + "s";

      // let leftImg = document.getElementsByClassName("circle-alt-lft")[0];
      // leftImg.style.animationDuration = this.animationtime/2 + "s";
      // let rightImg = document.getElementsByClassName("circle-alt-rht")[0];
      // rightImg.style.animationDuration = this.animationtime/2 + "s";
      // rightImg.style.animationDelay = this.animationtime/2 + "s";
    }   
  },
  mounted: function () {
    // this.detailed = JSON.parse(sessionStorage.getItem('washdetailed'));
    console.log(this.detailed);
    this.getwashsiteList();
    code({sid:this.detailed.sid}).then(res => {
      console.log(res);
      if (res.data.resCode == 0) {
        sessionStorage.setItem("iscarshop",res.data.result.isshop);        
      } else {
        MessageBox('提示', '站点信息获取失败')
      }
    });
    this.getAnimationTime();
    this.isWhichProgerss();
    this.loadprogress=setInterval(() => {
      this.isWhichProgerss();
    }, 1000);    
  },
  created:function () {
    this.detailed = JSON.parse(sessionStorage.getItem('washdetailed'));
    this.status = this.detailed.washcarStatus; 
    this.startTime = ((this.detailed.startTime).substring(0,(this.detailed.startTime).length-2)).replace(/-/g, '/');
    this.startTime = (new Date(this.startTime)).getTime(); 
    console.log(this.startTime);             
    if(this.status != 0){
      this.onlodaing();
      this.onlod=setInterval(()=>{
        this.onlodaing()
      },3000)
    }else{
      this.run = false;
    }    
  },
  beforeDestroy () {
    clearInterval(this.onlod);
    clearInterval(this.loadprogress);
  },
}
</script>

<style scoped="scoped" lang="scss">
@import '../style/mixin.scss';
.detailedtopbg{
  height: 5.53rem;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  text-align: center;
  padding-top: 0.4rem;
  box-sizing: border-box;
  position: relative;
}
.detailedtopbg>.circle{
  width: 3.25rem;
  height: 3.25rem;
}
.detailedtopbg>.circletop{
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 50%;
  // background: #313131;
  position: absolute;
  top: 0.4rem;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
}
.circle-bg, .circle-alt {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(49, 49, 49, 0);
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
.circle-alt-lft, .circle-alt-rht {
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
}
.circle-alt-lft {
  left: 0;
  overflow: hidden;
  border-radius: 50% 0 0 50%; 
}
.circle-alt-lft:after {
  background: #313131;
  display: block;
  content: "";
  width: 100%;
  height: 100%;
  transform-origin: right center;
  animation-name: rotateAn;
  animation-timing-function: linear;
  animation-duration: var(--animationtime);
  animation-fill-mode: forwards;
  // animation: rotateAn 210s linear forwards;
}
.circle-alt-rht {
  right: 0;
  overflow: hidden;
  border-radius: 0 50% 50% 0; 
}
.circle-alt-rht:after {
  background: #313131;
  display: block;
  content: "";
  width: 100%;
  height: 100%;
  transform-origin: left center;   
  animation-name: rotateAnR;
  animation-timing-function: linear;
  animation-duration: var(--animationtime);
	animation-delay: var(--animationdelay);
  animation-fill-mode: forwards;
  // animation: rotateAn 210s 210s linear forwards;
}
// @keyframes rotateAn {
//   0% {
//     transform: rotate(0deg);
//   }

//   // 99% {
//   //   transform: rotate(180deg);
//   //   opacity: 1;
//   // }

//   100% {
//     transform: rotate(180deg);
//     opacity: 1;
//   }
// }
// @keyframes rotateAnR {
//   0% {
//     transform: rotate(0deg);
//   }

//   99% {
//     transform: rotate(180deg);
//     opacity: 1;
//   }

//   100% {
//     transform: rotate(180deg);
//     opacity: 1;
//   }
// }
.detailedtopbg>.line{
  width: 0.08rem;
  height: 1.38rem;
  position: absolute;
  top: 1.97rem;
  left: 50%;
  transform: translateX(-100%);
  transform-origin: top;
  z-index: 2;
  animation-name: rotateZhizhen;
	animation-duration: 0s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  // animation: rotateZhizhen 420s linear forwards;
}
// @keyframes rotateZhizhen{
//   0% {
//     transform: rotate(0deg);
//   }

//   // 50% {
//   //   transform: rotate(180deg);
//   // }

//   100% {
//     transform: rotate(360deg);
//   }
// }
.detailedtopbg>.stop{
  width: 1.81rem;
  height: 1.81rem;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  // background: #F64B1D;
  // opacity: 0.98;
  // border-radius: 50%;
  text-align: center;
  line-height: 1.81rem;
  position: absolute;
  font-size: 0.28rem;
  font-family: 'PingFang-SC-Regular';
  top: 1.07rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  // box-shadow:0px 0px 6px 6px #F64B1D;
}
.detailedtopbg>div{
  color: #fff;
  font-size: 0.26rem;
  font-family: 'PingFang-SC-Regular';
}
.detailedtopbg>div>p:first-of-type{
  font-size: 0.34rem;
  padding-bottom: 0.24rem;
}
.plese{
  font-size:0.3rem;
  font-family:'PingFang SC';
  color: #303030;
}
.plese>div{
  text-align: center;
  font-size: 0.34rem;
  padding: 0.1rem 0 0.37rem;
}
.plese>p{
  width: 91.5%;
  margin: 0 auto;
  display: flex;
  justify-content: left;
  margin-bottom: 0.48rem;
}
.plese>p>img{
  width: 0.84rem;
  height: 0.84rem;
  margin-right: 0.32rem;
}
.plese>p>span{
  text-align: left;
  line-height: 0.42rem;
}
.plese>p:last-of-type>span{
  line-height: 0.84rem;
}
.lider{
  height: 0.08rem;
  // background: #E5E5E5;
  background: rgb(247, 247, 247);
}
.boxB{
  background-color: white;
}
.boxB>div{
  width: 91.5%;
  margin: 0 auto;
  font-size: 0.34rem;
  color: #303030;
  font-family: 'PingFang SC';
  padding: 0.46rem 0 0.365rem;
}
.boxB p {
  width: 91.5%;
  margin: 0 auto;
  font-family:'PingFang SC';
  display: flex;
  justify-content: space-between;
  font-size: 0.3rem;
  color: #666666;
  height: 0.76rem;
  line-height: 0.76rem;
  // border-bottom: 1px solid #E5E5E5;
  border-bottom: 1px solid rgb(247, 247, 247);
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
  color: #303030;
}
.boxY div {
  width: 90%;
  height: 0.88rem;
  color: #fff;
  line-height: 0.88rem;
  text-align: center;
  font-size: 0.34rem;
  margin: auto;
  border-radius: 8px;
}
.boxY div:nth-child(1) {
  margin-top: 0.3rem;
}
.toptitle{
  background: #fff;
  padding-bottom: 0.3rem;  
}
.toptitle>p{
  text-align: center;
  padding: 0.3rem 0.3rem 0;
  font-size: 0.3rem;
  color: #F68B1C;
}
.topstart{
  margin: 0.3rem 0 0;
}
</style>