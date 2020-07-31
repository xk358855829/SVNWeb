<template>
  <div style="width:100%;height:100%;background:#fff;padding-top:0.25rem;">
    <img src="../../static/image/coupontop.png" alt="" style="width:100%;">
    <div class="couponwarp">
      <div class="couponcenter" :style="{backgroundImage: 'url(' + img1 + ')' }">
        <p><span v-if="ispower">¥</span><span v-if="ispower">{{y}}</span></p>
        <p v-if="ispower">限{{time}}前使用</p>
        <p v-else="" style="padding:0.7rem 0 2.02rem;font-size:0.5rem;">暂无权限领取</p>
        <p>
          <span v-if="ispower" @click="rightnow()">立即领取使用</span>
          <span v-else="" @click="gotopay()">前往下单</span>
        </p>
      </div>
      <!-- <ul class="menu" v-if="ispower">
        <li
          class="menulist"
          :class="{active:active == item.cid}"
          :ref="'menulist'+item.cid"
          v-for="item in menu"
          :key="item.cid"
          @click="choosetype(item.cid,item.cname,item.money)"
        >{{item.cname}}</li>
      </ul> -->
    </div>
    <!-- <ul class="inner">
      <li v-for="(item,index) in tablesplo" style="position: relative;" :class="{zonp:item.use_status==-1}" :key="index">
        <div style="display:flex;">
          <div style="width:33.2%;height:30%;position:relative;">
            <p style="width:100%;height:100%;">
              <img src="../../static/image/hong.png" alt style="width:100%;height:100%;" />
            </p> -->
            <!-- <p style="width:100%;height:100%;">
              <img src="../../static/image/zg (3).png" alt style="width:100%;height:100%" />
            </p> -->
            <!-- <p
              style="position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:1.8rem;text-align:center;"
              class="imgtext"
            >
              <span>￥</span>
              <span style="font-size:0.76rem;">{{item.sub}}</span>
              <br />
              <span v-if="item.useWay=='2'" style="font-size:0.24rem;">抵扣洗车费{{item.sub}}元</span>
            </p>
          </div>
          <div style="width:70%;margin-top:0.12rem;" class="texts">
            <div style="display:flex;margin-bottom:0.12rem;margin-left:0.12rem;">
              <div
                :class="sstts[(item.useWay)]"
                v-if="item.use_status==1||item.use_status==2"
                style="width:1.07rem;height:0.332rem;text-align:center;line-height:0.332rem;border-radius:2px;color:#fff;font-size:0.24rem;transform:scale(0.84);"
              >{{item.useWay|change}}</div>
              <div
                v-if="item.use_status==-1"
                style="width:1.07rem;height:0.332rem;text-align:center;line-height:0.332rem;border-radius:2px;color:#fff;font-size:0.24rem;transform:scale(0.84);background:#999;"
              >{{item.useWay|change}}</div>
              <div
                v-if="item.use_status==0"
                style="width:1.07rem;height:0.332rem;text-align:center;line-height:0.332rem;border-radius:2px;color:#fff;font-size:0.24rem;transform:scale(0.84);background:#999;"
              >{{item.useWay|change}}</div>
              <div style="color:rgb(109,109,109);font-size:0.28rem;">车口袋电子券</div>
            </div>
            <div style="margin-left:0.22rem">仅限洗车支付时使用</div>
            <div
                style="display:flex;justify-content: space-between;line-height:0.4rem;position: relative;"
              >
                <span
                  style="line-height:0.4rem;font-size:0.24rem;transform:scale(0.84);color:#6d6d6d;"
                >{{(item.start_time).slice(0,10)}}-{{(item.end_time).slice(0,10)}}</span>
              </div>
          </div>
        </div>
      </li>
    </ul>     -->
    <!-- <div class="paytoot" @click="rightnow()">立即使用</div>
    <div class="savecard" @click="saveCard()">存入卡包</div> -->
    <!-- <div class="paytoot" @click="gotopay()">前往下单</div> -->
  </div>
</template>
<script>
import axios from "axios";
import Qs from "qs";
import { MessageBox, Indicator } from "mint-ui";
// import { Order } from "./api/api.js";
export default {
  name: "getCoupon",
  data() {
    return {
      tablesplo: [],
      page: 1,
      pageSize: 10,
      sstts: ["ss1s", "ss2s", "ss3s", "ss4s", "ss5s"],
      // img1: './staticxiche/image/couponcenter.png',
      img1: '../../static/image/couponcenter.png',
      menu:[],
      active:1,
      y:"",
      ispower:true,
      time:"",
      ticketinfo:{}
    };
  },
  mounted() {
    Indicator.open(); 
    let data1 = {
      page: 1,
      pageSize: 10
    }
    let that = this;
    // axios({
    //   method: "post",
    //   url: `${this.washhttpUrl}/carwash/querylistByCarwash`,
    //   data: Qs.stringify(data1)
    // }).then(res => {
    //   Indicator.close();
    //   console.log(res);
    //   if (res.status == 200) {
    //     that.menu = res.data.result;
    //     console.log(that.menu);
    //     that.y = that.menu[0].money;
    //   }
    // })  
    // Order(data1).then(res => {
    //   Indicator.close();
    //   console.log(res);
    //   if (res.status == 200) {
    //     that.menu = res.data.result;
    //     console.log(that.menu);
    //     that.y = that.menu[0].money;
    //   }
    // });   
    sessionStorage.setItem("sid",this.$route.query.sid);
    this.getcoupon();
  },
  methods: {
    choosetype(id, title, price) {
      this.active = id;
      this.y = price;
      this.getcoupon();
    },
    rightnow(){
      let that = this;
      let data = {
        openId:localStorage.getItem("openid"),
        type:that.$route.query.type,
        tel:this.ticketinfo.tel,
        // date:this.ticketinfo.date,
        dealer:this.ticketinfo.dealer,
        end_time:this.ticketinfo.end_time,
        isTeam:this.ticketinfo.isTeam,
        // issus_obj:this.ticketinfo.issus_obj,
        issus_type:this.ticketinfo.issus_type,
        // num:this.ticketinfo.num,
        // remark:this.ticketinfo.remark,
        start_time:this.ticketinfo.start_time,
        sub:this.ticketinfo.sub,
        // team_isv_id:this.ticketinfo.team_isv_id,
        // ticketNumber:this.ticketinfo.ticketNumber,
        ticketType:this.ticketinfo.ticketType,
        useWay:this.ticketinfo.useWay,
        // use_obj:this.ticketinfo.use_obj,
        // use_status:this.ticketinfo.use_status,
        used_car_shop:this.ticketinfo.used_car_shop
      }
      console.log(data);
      this.$http({
        method: "post",
        url: this.washurl + "/carShopEmp/getTicket",
        data: Qs.stringify(data)
      }).then(message => {
        console.log(message.data);
        if(message.data.resCode == 0){  
          if (message.data.result instanceof Array) {
            sessionStorage.setItem("ticknumbar1", message.data.result.tel);
            sessionStorage.setItem("ticknumbar2", message.data.result.sub);
            sessionStorage.setItem("ticknumbar3", message.data.result.ticketNumber);
          } else {
            let result = Object.values(message.data.result);
            sessionStorage.setItem("ticknumbar1", result[0].tel);
            sessionStorage.setItem("ticknumbar2", result[0].sub);
            sessionStorage.setItem("ticknumbar3", result[0].ticketNumber);
          }         
          that.$router.push("/pay");
        }else{
          MessageBox("提示", message.data.result);
          that.ispower = false;
        }
      })      
    },
    saveCoupon(){
      this.$router.push("/fuzhi");
    },
    gotopay(){
      this.$router.push("/pay");
    },
    getcoupon(){
      let that = this;
      let data = {
        tel:localStorage.getItem("phone") ? localStorage.getItem("phone") : localStorage.getItem("tel"),
        openId:localStorage.getItem("openid"),
        // type: that.$route.query.type
      }
      this.$http({
        method: "post",
        url: this.washurl + "/carShopEmp/authentication",
        data: Qs.stringify(data)
      }).then(message => {
        Indicator.close();
        console.log(message.data);
        if(message.data.resCode == 0){  
          that.ticketinfo = message.data.result;   
          that.ticketinfo.date = that.fmtDate(that.ticketinfo.date.time);     
          that.y = message.data.result.sub;
          that.time = message.data.result.end_time;                   
          that.ispower = true;
        }else{
          MessageBox("提示", message.data.result);
          that.ispower = false;
        }
      })
    },
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
        y + "-" + m + "-" + d + " " + h + ":" + minute +':'+ second
      );
    },
  }
};
</script>
<style lang="scss" scoped>
@import "../style/mixin.scss";
$he: rgb(109, 109, 109);
.imgtext {
  color: #fff;
}
.zonp {
  color: #999;
}
.title {
  @include wh(100%, 0.8rem);
  display: flex;
  justify-content: space-around;
  background: #fff;
  line-height: 0.8rem;
  p {
    @include sc(15px, rgb(102, 102, 102));
  }
}
.inner {
  width: 91%;
  margin: 0 auto;
  padding-top: 0.32rem;
  li {
    // @include wh(100%,0.9rem);
    background: #fff;
    margin: 0 auto 0.32rem;
    // display: flex;
  }
}
.ss4 {
  color: #5294d1;
  border: 2px solid #5294d1;
}
.ss2 {
  color: #47ccb7;
  border: 2px solid #47ccb7;
}
.ss3 {
  color: #fd8587;
  border: 2px solid #fd8587;
}
.ss2s {
  background: #47ccb7;
}
.ss3s {
  background: #fd8587;
}
.ss4s {
  background: #5294d1;
}
.ss5s {
  background: #fb861c;
}
.square {
  @include wh(0.3rem, 0.3rem);
  border: 1px solid #666;
  margin-right: 0.3rem;
  margin-top: -0.25rem;
  border-radius: 50%;
}
.paytoot {
  width: 91%;
  margin: 0.4rem auto;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  font-size: 14px;
  border-radius: 20px;
  background: #f68b1b;
  color: #fff;
  cursor: pointer;
}
.savecard {
  width: 91%;
  margin: 0.4rem auto;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  font-size: 14px;
  border-radius: 20px;
  background: #999;
  color: #fff;
  cursor: pointer;
}
.couponwarp{
  padding-top: 0.5rem;
}
.menu{
  width: 76%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.menulist{
  width: 45%;
  height: 1rem;
  line-height: 1rem;
  background: #f7be62;
  text-align: center;
  color: #fff;
  font-size: 0.4rem;
  border-radius: 6px;
}
.menulist.active {
  border: 1px solid #ce6346;
}
.couponcenter{
  width: 100%;
  height: 5.58rem;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100% 100%;
  text-align: center;
  margin-bottom: 0.2rem;
}
.couponcenter>p:first-of-type{
  padding-top: 0.9rem;
  font-size: 0.6rem;
  color: #e3391d;
}
.couponcenter>p:first-of-type>span:last-of-type{
  font-size: 1.2rem;
}
.couponcenter>p:nth-of-type(2){
  padding: 0.2rem 0 1.37rem;
  font-size: 0.3rem;
  color: #918679;
}
.couponcenter>p:last-of-type{
  font-size: 0.35rem;
  color: #e3391d;
}
</style>


