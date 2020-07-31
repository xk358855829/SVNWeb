<!-- 分享 -->
<template>
  <div class="share">
    <div class="title">
      <p>邀请好友</p>
      <p>1元洗车</p>
    </div>
    <div class="couponcenter" :style="{backgroundImage: 'url(' + img1 + ')' }">      
      <p style="padding:1rem 0 0.2rem;font-size:0.38rem;line-height:0.5rem;color:#ff7e2e;">每成功邀请一位好友洗车<br />即可获得</p>
      <p style="padding:0.5rem 0 1.13rem;font-size:0.55rem;">1元洗车体验券</p>
      <p style="height:0.95rem;line-height:0.95rem;">
        <span style="font-size:0.4rem;color:#e3391d;display:inline-block;width:3.6rem;" @click="share()">分享邀请</span>
      </p>
    </div>
    <div class="rule">
      <p>
        <span>活动规则</span>
        <img src="../../static/image/down1.png" alt="">
      </p>
      <ul>
        <li>1、可分享到朋友圈、微信好友邀请好友领券(只限新用户领取)。</li>
        <li>2、好友通过您分享的链接注册领取一元洗车券，5天内产生洗车订单后(包含使用优惠券)，您即可以获得一张"一元洗车"体验券，有效期15天。</li>
        <li>3、违规刷取优惠券，将封号处理。</li>
        <li>4、本次活动所发优惠券适用于全站点。</li>
        <li>5、本活动最终解释权归车口袋所有。</li>
      </ul>
    </div>
    <div class="dialog" v-if="showSign" @click="hiddenSign">
      <img src="../../static/image/sharesign.png" alt="">
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";
import { MessageBox, Indicator, Popup } from "mint-ui";
import { Encrypt } from "./api/api.js";
export default {
  name: "share",
  data () {
    return {
      img1: './staticxiche/image/couponcenter.png',
      // img1: '../../static/image/couponcenter.png',
      title: "【车口袋智能洗车】您的好友邀请您体验1元洗车",
      fxUrl: "",
      desc: '24小时"车口袋智能洗车"，全城通用，速来体验！',
      pic: 'http://cloud.parkingmore.cn/mp/total/staticxiche/image/zd.png',
      // pic: "../../static/image/zd.png",
      phone: '',
      id: '',
      showSign:false,
    };
  },

  components: {},

  beforeCreate() {
    let that = this;
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
          jsApiList: ["onMenuShareTimeline","onMenuShareAppMessage","updateAppMessageShareData","updateTimelineShareData"]
        });
      });
  },

  mounted(){
    this.phone = localStorage.getItem("phone") ? localStorage.getItem("phone") : localStorage.getItem("tel");
    this.phone = Encrypt(this.phone);
    this.id = Encrypt(localStorage.getItem('openid'));
    this.fxUrl = 'http://cloud.parkingmore.cn/mp/total/indexxiche.html?'+new Date().getTime()+'#/sharepeople?id='+this.id+'&&phone='+this.phone;
    // this.fxUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd70f81c80f806b23&redirect_uri=http://cloud.parkingmore.cn/mp/total/codexiche.html&response_type=code&scope=snsapi_userinfo&state='+this.id+'#wechat_redirect';
  },

  methods: {
    share(){
      this.showSign = !this.showSign;
      let that = this;
      wx.ready(function () {
        //分享到朋友圈
        if(wx.onMenuShareTimeline){
          wx.onMenuShareTimeline({
            title: that.title,   // 分享时的标题
            link: that.fxUrl,     // 分享时的链接
            imgUrl: that.pic,    // 分享时的图标
            success(res) {
              console.log(res);
              if (res.errMsg === "onMenuShareTimeline:ok") {
                setTimeout(() => {
                  that.successPhone();
                }, 300);
              }
            },
            cancel(res){
              console.log("取消分享");
            }
          });
          //分享给朋友
          wx.onMenuShareAppMessage({
            title: that.title,
            desc: that.desc, 
            link: that.fxUrl,
            imgUrl: that.pic, 
            success(res) {
              console.log(res);
              if (res.errMsg === "onMenuShareAppMessage:ok") {
                setTimeout(() => {
                  that.successPhone();
                }, 300);
              }
            },
            cancel(res) {
              console.log("取消分享");
            }
          });
        }else{
          wx.updateTimelineShareData({
            title: that.title,   // 分享时的标题
            link: that.fxUrl,     // 分享时的链接
            imgUrl: that.pic,    // 分享时的图标
            success(res) {
              console.log(res);
              if (res.errMsg === "updateTimelineShareData:ok") {
                setTimeout(() => {
                  that.successPhone();
                }, 300);
              }
            },
            cancel(res){
              console.log("取消分享");
            }
          });
          //分享给朋友
          wx.updateAppMessageShareData({
            title: that.title,
            desc: that.desc, 
            link: that.fxUrl,
            imgUrl: that.pic, 
            success(res) {
              console.log(res);
              if (res.errMsg === "updateAppMessageShareData:ok") {
                setTimeout(() => {
                  that.successPhone();
                }, 300);
              }
            },
            cancel(res) {
              console.log("取消分享");
            }
          });
        }       
      })
    },
    successPhone(){
      let that = this;
      axios({
        method: "post",
        url: `${that.washurl}/shareRecords/shareSucc`,
        data: Qs.stringify({sharerTel:localStorage.getItem("phone") ? localStorage.getItem("phone") : localStorage.getItem("tel")})
      }).then(res => {
        console.log(res);             
      });
    },
    hiddenSign(){
      this.showSign = !this.showSign;
    }
  }
}

</script>
<style scoped>
.share{
  width: 100%;
  min-height: 100%;
  background: #e4614a;
}
.title{
  padding: 0.5rem 0 0.2rem;
  letter-spacing: 0.1rem;
  line-height: 0.9rem;
  font-size: 0.7rem;
  color: #fff;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,0.1), 0 0 5px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.3),0 3px 5px rgba(0,0,0,0.2),0 5px 10px rgba(0,0,0,0.25);
}
.title>p:first-of-type{
  padding-left: 1rem;
  text-align: left;
}
.title>p:last-of-type{
  padding-right: 1rem;
  text-align: right;
}
.couponcenter{
  width: 100%;
  height: 6.3rem;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 115% 100%;
  text-align: center;
  margin-bottom: 0.2rem;
}
.rule>p{
  text-align: center;
  color: #fff;
  font-size: 0.35rem;
  padding-bottom: 0.2rem;
}
.rule>p>span{
  display: inline-block;
  vertical-align: middle;
}
.rule>p>img{
  height: 0.45rem;
  vertical-align: middle;
}
.rule>ul{
  width: 91%;
  margin: auto;
  color: #fff;
  font-size: 0.3rem;
  line-height: 0.5rem;
  padding-bottom: 0.5rem;
}
.dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  text-align: right;
}
.dialog > img{
  width: 60%;
}
</style>