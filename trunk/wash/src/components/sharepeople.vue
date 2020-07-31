<!-- 分享 -->
<template>
  <div class="share" v-if="showInfo">
    <div class="title">
      <p>邀请好友</p>
      <p>1元洗车</p>
    </div>
    <div class="couponcenter" :style="{backgroundImage: 'url(' + img1 + ')' }">  
      <p style="padding:0.9rem 0 0.05rem;">
        <span style="display:inline-block;width:1rem;height:1rem;border-radius:50%;">
          <img :src='img' alt="" style="width:100%;height:100%;border-radius:50%;">
        </span>
      </p>    
      <p style="padding:0 0 0.2rem;font-size:0.32rem;line-height:0.5rem;color:#ff7e2e;">您的好友{{phone}}送您一张</p>
      <p style="padding:0.25rem 0 0.93rem;font-size:0.55rem;">1元洗车体验券</p>
      <p style="height:0.95rem;line-height:0.95rem;">
        <span style="font-size:0.4rem;color:#e3391d;display:inline-block;width:3.6rem;" @click="share()">领取</span>
      </p>
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
    <register @cancel="close" v-if="show" ref="register"></register>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";
import { MessageBox, Indicator, Popup } from "mint-ui";
import register from './register';
import { Encrypt,getid,Decrypt } from "./api/api.js";
export default {
  name: "sharepeople",
  data () {
    return {
      img1: './staticxiche/image/couponcenter.png',
      // img1: '../../static/image/couponcenter.png',
      img: './staticxiche/image/toux.png',
      // img:"../../static/image/toux.png",
      phone:"",
      show:false,
      shareTel:'',
      shareId:'',
      showInfo:false,
    };
  },

  components: {
    register
  },

  created() {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
    let url = window.location.href;
    console.log(url);
    if(url.indexOf("?") != -1){
      url = url.split("?");
      console.log(url);
      if(url.length > 2){
        url = url[2];
        console.log(url);
        this.shareTel = getid(url).phone;        
        this.shareId = getid(url).id;
        let reg = /^(\d{3})\d*(\d{4})$/;
        this.phone = this.shareTel.replace(reg,'$1****$2');
        sessionStorage.setItem("shareTel",this.shareTel);
      }      
    }
  },
  mounted(){
    let that = this;
    axios({
      method: "post",
      url: `${that.washurl}/User/findTelByOpenId`,
      data: Qs.stringify({openId: this.shareId})
    }).then(res => {
      Indicator.close();
      that.showInfo = true;   
      console.log(res);              
      if (res.data.resCode == 0) {
        that.img = res.data.result.headImg;
      }             
    });        
  },
  methods: {
    share(){   
      this.show = true;
    },
    close(){
      this.show = false;
    },
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
</style>