<template>
  <div id="people">
    <div ref="lps" v-if="viewop" class="header">
      <img src="../../static/image/a (1).png" alt />
      <div class="wximg">
        <p class="innerimg">
          <img v-if="obk!=''" :src="obk" alt style="border-radius:50%" />
          <img v-else="" src="../../static/image/toux.png" alt style="border-radius:50%" />
        </p>
        <p>{{nickname}}</p>
      </div>
    </div>
    <div class="empty"></div>
    <div class="uldiv">
      <ul ref="lp">
        <router-link to="/people/my" tag="li">
          <div>
            <img
              src="../../static/image/j (2).png"
              alt
              style="width:0.32rem;height:0.34rem;vertical-align: middle;margin-top:-0.05rem;"
            /> 个人信息
          </div>
          <div> 
            <img src="../../static/image/a (2).png" alt />
          </div> 
        </router-link>
        <li @click="tofuzhi">
          <div>
            <img
              src="../../static/image/j (3).png"
              alt
              style="width:0.32rem;height:0.34rem;vertical-align: middle;margin-top:-0.05rem;"
            /> 卡券列表
          </div>
          <div>
            <img src="../../static/image/a (2).png" alt />
          </div>
        </li>
        <router-link :to="cardinfo.length > 0 ? '/people/vipCard' : '/people/vipCardList?vip=1'" tag="li">
          <div>
            <img
              src="../../static/image/j (4).png"
              alt
              style="width:0.38rem;height:0.32rem;vertical-align: middle;margin-top:-0.05rem;"
            /> 会员购买
          </div>
          <div>
            <img src="../../static/image/a (2).png" alt />
          </div>
        </router-link>
        <router-link to="/people/carlist" tag="li">
          <div>
            <img
              src="../../static/image/carv.png"
              alt
              style="width:0.38rem;height:0.32rem;vertical-align: middle;margin-top:-0.05rem;"
            /> 车牌列表
          </div>
          <div>
            <img src="../../static/image/a (2).png" alt />
          </div>
        </router-link>
        <router-link to="/people/viprecord" tag="li">
          <div>
            <img
              src="../../static/image/record.png"
              alt
              style="width:0.38rem;height:0.38rem;vertical-align: middle;margin-top:-0.05rem;"
            /> 充值记录
          </div>
          <div>
            <img src="../../static/image/a (2).png" alt />
          </div>
        </router-link>
        <router-link to="/washrecord" tag="li">
          <div>
            <img
              src="../../static/image/washrecord.png"
              alt
              style="width:0.38rem;height:0.38rem;vertical-align: middle;margin-top:-0.05rem;"
            /> 洗车订单
          </div>
          <div>
            <img src="../../static/image/a (2).png" alt />
          </div>
        </router-link>
      </ul>
    </div>
    <!-- <transition name="router-slid"
    mode="out-in">-->
    <router-view></router-view>
    <!-- </transition> -->
  </div>
</template>

<script>
import Qs from "qs";
import axios from "axios";
export default {
  name: "people",
  data() {
    return {
      viewop: true,
      ips: "",
      Wacth: 2,
      Colors: 2,
      obk: "",
      urll: "",
      show: true,
      nickname: "",
      cardinfo:[],
    };
  },
  watch: {
    $route: {
      handler: function(a, b) {},
      deep: true
    }
  },
  methods: {
    tofuzhi(){
      sessionStorage.setItem("frompeople","1");
      this.$router.push('/fuzhi');
    }
  },
  mounted: function() {
    console.log(localStorage.getItem("nickname"));
    if(localStorage.getItem("nickname")!=null&&localStorage.getItem("nickname")!=undefined){
      this.nickname = localStorage.getItem("nickname");
    }else{
      this.nickname = "";
    }
    if(localStorage.getItem("headimgurl")!=null&&localStorage.getItem("headimgurl")!=undefined){
      this.obk = localStorage.getItem("headimgurl");
    }else{
      this.obk = "";
    }
    let that = this;
    let data = {
      userId: "93f07a1decc14ce69ca82e0d6c5d3761",
      dealer: 1561430951496,
      tel: localStorage.getItem("tel") ? localStorage.getItem("tel") : localStorage.getItem("phone")
    }
    that.cardinfo = [];
    axios({
      method: "post",
      url: `${this.washurl}/carInfoWashCar/selectAll`,
      data: Qs.stringify(data)
    }).then(res => {
      console.log(res);
      if(res.data.resCode == 0){
        for (let i = 0; i< res.data.count; i++) {
          if(res.data.result[i].ofType!="F"){
            that.cardinfo.push(res.data.result[i]);
          }         
        }       
      }else{
        that.cardinfo = [];
      }
    })
  }
};
</script>
<style lang="scss" scoped>
@import "@/style/mixin.scss";
.header {
  @include wh(100%, 2.9rem);
  position: relative;
  .wximg {
    width: 80%;
    margin-top: 0.8rem;
    margin-left: 0.32rem;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    .innerimg {
      @include wh(1.28rem, 1.28rem);
      img {
        @include wh(100%, 100%);
      }
    }
    :nth-child(2) {
      letter-spacing: 2px;
      @include sc(16px, #fff);
      font-family: "PingFang-SC-Regular";
      line-height: 1.28rem;
      margin-left: 0.32rem;
    }
  }
}
.empty {
  @include wh(100%, 0.32rem);
  background: #efefef;
}
.uldiv {
  width: 100%;
  background: #fff;
  ul {
    width: 91.4%;
    margin: 0 auto;
    background: #fff;
    border-radius: 5px;
  }
}
li {
  @include wh(100%, 1.14rem);
  line-height: 1.14rem;
  font-family: "PingFang-SC-Regular";
  @include sc(16px, rgb(48, 48, 48));
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(239, 239, 239);
}
// li div:nth-child(1){text-indent: 0.15rem;}
li div:nth-child(2) {
  width: 20%;
  height: 100%;
  text-align: right;
}
.header img {
  @include wh(100%, 100%);
}
img {
  @include wh(0.14rem, 0.24rem);
}
.router-slid-enter-active,
.router-slid-leave-active {
  transition: all 0.4s;
}
.router-slid-enter,
.router-slid-leave-to {
  transform: translate3d(4rem, 0, 0);
  // -webkit-transform: translate3d(0, 0, 0);
  // -webkit-transform: translate3d(0, 0, 0);
  // -webkit-transform-style: preserve-3d;
  // -webkit-backface-visibility: hidden;
  opacity: 0;
}
</style>
