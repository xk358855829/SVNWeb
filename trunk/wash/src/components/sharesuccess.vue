<!-- 分享 -->
<template>
  <div class="share" v-if="showInfo">
    <div class="title">
      <p>恭喜您已领取</p>
    </div>
    <div class="couponcenter" :style="{backgroundImage: 'url(' + img1 + ')' }">     
      <p style="padding:0.8rem 0 0.2rem;font-size:0.55rem;line-height:0.5rem;color:#ff7e2e;">1元水蜡快洗券</p>
      <p style="padding:0.25rem 0 1.2rem;font-size:0.3rem;color:#b9b9b9;">有效期 15天</p>
    </div>
    <div class="ew">
      <p id="code"><img src="../../static/image/zhiwen1.png" alt=""><img class="code" src="../../static/image/chekoudai.jpg" alt=""></p>
      <p>长按识别二维码关注公众号即可用券</p>
    </div>
    <div class="rule">
      <p>
        <span>活动规则</span>
        <img src="../../static/image/down1.png" alt="">
      </p>
      <ul>
        <li>1、此优惠券限尚未注册的用户领取，已注册的用户无法领取。</li>
        <li>2、使用洗车券的用户所关联的手机号需与领取洗车券时的手机号一致。</li>
        <li>3、若用户使用该洗车券下单后未洗车，此优惠券将失效。</li>
        <li>4、领取后，登录到"车口袋"公众号即可使用。</li>
        <li>5、本次活动所发优惠券适用于全站点。</li>
        <li>6、本活动最终解释权归车口袋所有。</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";
import { MessageBox, Indicator, Popup } from "mint-ui";
import { Encrypt,getid,Decrypt } from "./api/api.js";
import QRCode from 'qrcode'
export default {
  name: "sharepeople",
  data () {
    return {
      img1: './staticxiche/image/sharesuccess.png',
      // img1: '../../static/image/sharesuccess.png',      
      showInfo:true,
    };
  },

  components: {
    
  },

  created() {
    // Indicator.open({
    //   text: '加载中...',
    //   spinnerType: 'fading-circle'
    // });
    
  },
  mounted(){
            
  },
  methods: {
    
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
  width: 85%;
  height: 2.8rem;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100% 100%;
  text-align: center;
  margin: 0.2rem auto;
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
.ew{
  margin: 0.4rem auto;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.2rem 0;
}
.ew>p:first-of-type{
  width: 85%;
  margin: 0rem auto 0.2rem;
  display: flex;
  justify-content: space-between;
}
.ew>p:first-of-type>img{
  width: 3.06rem;
  height: 3.06rem;
}
.ew>p:last-of-type{
  text-align: center;
  font-size: 0.25rem;
}
</style>