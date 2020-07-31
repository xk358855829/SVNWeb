<template>
  <div class="vipGive" style="width:100%;height:100%;background:#F2F2F2;padding-top:1.04rem;">
    <div class="couponcenter" :style="{backgroundImage: 'url(' + img + ')' }">
      <span class="share" @click="chosepeople()">选择好友</span>
    </div>
    <div class="phonegive" @click="givepeople()">通过手机号码转赠</div>
    <div class="giveinfo">
      <div class="giveinfotitle"><span></span>转赠说明<span></span></div>
      <ul class="giveinfolist">
        <li>1、微信分享转赠：您的微信好友，通过您分享的转赠链接，就可以获得此会员卡。</li>
        <li>2、手机号转赠：会将此会员卡，放入您输入的手机号的账户中。</li>
      </ul>
    </div>
    <div class="dialog" v-if="showSign" @click="hiddenSign">
      <img src="../../static/image/chosepeople.png" alt="">
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Qs from "qs";
import { MessageBox, Indicator, Toast } from "mint-ui";
export default {
  name: "getCoupon",
  data() {
    return {
      title: "【车口袋智能洗车】您的好友送您一张洗车卡",
      fxUrl: "",
      desc: '24小时"车口袋智能洗车"，全城通用，速来体验！',
      pic: 'http://cloud.parkingmore.cn/mp/total/staticxiche/image/zd.png',
      // pic: "../../static/image/zd.png",
      // img: './staticxiche/image/vipgive.png',
      img: '../../static/image/vipgive.png',
      showSign:false,
    };
  },
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
  mounted() {
    this.fxUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd70f81c80f806b23&redirect_uri=http://cloud.parkingmore.cn/mp/total/codegive.html?id='+this.$route.query.id+'&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect';   
  },
  methods: {  
    givepeople(){
      let that = this;
      MessageBox.prompt(' ','请输入好友手机号',{
        inputPattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,    //正则条件
        inputErrorMessage:'请输入正确的手机号码',
      }).then(({ value, action }) => {
        if (action == 'confirm') {
            axios({
            method: "post",
            url: `${this.washurl}/carInfoWashCar/exchangeVIPTel`,
            data: Qs.stringify({id:this.$route.query.id,tel:value})
          }).then(res => {
            console.log(res);
            if(res.data.code == 0){
              Toast("转赠成功");
              that.$router.go(-1);
            }else{
              Toast(res.data.result);
            }
          })
        }
      });
    },
    chosepeople(){
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
                
              }
            },
            cancel(res) {
              console.log("取消分享");
            }
          });
        }       
      })
    },
    hiddenSign(){
      this.showSign = !this.showSign;
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
.vipGive{
  font-family: "PingFang-SC-Medium";
}
.couponcenter{
  width: 69.33%;
  height: 5.58rem;  
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100% 100%;
  text-align: center;
  margin: 0 auto;
}
.share{
  display: inline-block;
  width: 2.8rem;
  height: 0.68rem;
  line-height: 0.68rem;
  margin-top: 4.37rem;
  color: #E3391D;
}
.phonegive{
  text-align: center;
  font-size: 0.3rem;
  color: #303030;
  padding-top: 0.24rem;
  text-decoration: underline;
}
.giveinfo{
  padding: 0.87rem 0.32rem;
  color: #666666;
  font-size: 0.26rem;
}
.giveinfotitle{
  text-align: center;
  padding-bottom: 0.57rem;
}
.giveinfotitle > span {
  vertical-align: middle;
  display: inline-block;
  width: 1.08rem;
  height: 1px;
  background: #535353;
}
.giveinfotitle > span:first-of-type{
  margin-right: 0.4rem;
}
.giveinfotitle > span:last-of-type{
  margin-left: 0.4rem;
}
.giveinfolist{
  line-height: 0.4rem;
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


