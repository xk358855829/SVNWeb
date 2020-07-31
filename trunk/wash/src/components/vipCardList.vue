<!--vip卡片列表-->
<template>
  <div class="rating_page" style="background:#fff;">
    <ul v-if="showInfo">
      <li v-if="item.name != 'F'" v-for="item in cardinfo" :key="item.id" @click="getcoupon(item)">
        <div class="cardleft" v-if="item.name == 'A'&&item.model == '01'" :style="item.logoImgUrl?{backgroundImage: 'url(' + item.logoImgUrl + ')' }:{backgroundImage: 'url(' + img11 + ')' }">
          <div>{{item.alias}}</div>
          <p v-if="item.name != 'E'">{{item.times == 0 ? '无限':item.times}}次水蜡快洗</p>
          <p v-else="" style="height:0.28rem;"></p>
          <p><span><span>￥</span>{{item.money}}</span><span class="phone" v-if="isvipPrice">{{item.phone}}</span></p>
        </div>
        <div class="cardleft" v-if="item.name == 'B'&&item.model == '01'" :style="item.logoImgUrl?{backgroundImage: 'url(' + item.logoImgUrl + ')' }:{backgroundImage: 'url(' + img22 + ')' }">
          <div>{{item.alias}}</div>
          <p v-if="item.name != 'E'">{{item.times == 0 ? '无限':item.times}}次水蜡快洗</p>
          <p v-else="" style="height:0.28rem;"></p>
          <p><span><span>￥</span>{{item.money}}</span><span class="phone" v-if="isvipPrice">{{item.phone}}</span></p>
        </div>
        <div class="cardleft" v-if="item.name == 'C'&&item.model == '01'" :style="item.logoImgUrl?{backgroundImage: 'url(' + item.logoImgUrl + ')' }:{backgroundImage: 'url(' + img33 + ')' }">
          <div>{{item.alias}}</div>
          <p v-if="item.name != 'E'">{{item.times == 0 ? '无限':item.times}}次水蜡快洗</p>
          <p v-else="" style="height:0.28rem;"></p>
          <p><span><span>￥</span>{{item.money}}</span><span class="phone" v-if="isvipPrice">{{item.phone}}</span></p>
        </div>
        <div class="cardleft" v-if="item.name == 'D'&&item.model == '01'" :style="item.logoImgUrl?{backgroundImage: 'url(' + item.logoImgUrl + ')' }:{backgroundImage: 'url(' + img44 + ')' }">
          <div>{{item.alias}}</div>
          <p v-if="item.name != 'E'">{{item.times == 0 ? '无限':item.times}}次水蜡快洗</p>
          <p v-else="" style="height:0.28rem;"></p>
          <p><span><span>￥</span>{{item.money}}</span><span class="phone" v-if="isvipPrice">{{item.phone}}</span></p>
        </div>
        <div class="cardleft" v-if="item.name == 'E'&&item.model == '01'" :style="item.logoImgUrl?{backgroundImage: 'url(' + item.logoImgUrl + ')' }:{backgroundImage: 'url(' + img55 + ')' }">
          <div>{{item.alias}}</div>
          <p v-if="item.name != 'E'">{{item.times == 0 ? '无限':item.times}}次水蜡快洗</p>
          <p v-else="" style="height:0.28rem;"></p>
          <p><span><span>￥</span>{{item.money}}</span><span class="phone" v-if="isvipPrice">{{item.phone}}</span></p>
        </div>
        <div class="cardleft" v-if="item.name == 'A'&&item.model == '02'" :style="item.logoImgUrl?{backgroundImage: 'url(' + item.logoImgUrl + ')' }:{backgroundImage: 'url(' + img1 + ')' }">
          <div>{{item.alias}}</div>
          <p v-if="item.name != 'E'">{{item.times == 0 ? '无限':item.times}}次打蜡晶洗</p>
          <p v-else="" style="height:0.28rem;"></p>
          <p><span><span>￥</span>{{item.money}}</span><span class="phone" v-if="isvipPrice">{{item.phone}}</span></p>
        </div>
        <div class="cardleft" v-if="item.name == 'B'&&item.model == '02'" :style="item.logoImgUrl?{backgroundImage: 'url(' + item.logoImgUrl + ')' }:{backgroundImage: 'url(' + img2 + ')' }">
          <div>{{item.alias}}</div>
          <p v-if="item.name != 'E'">{{item.times == 0 ? '无限':item.times}}次打蜡晶洗</p>
          <p v-else="" style="height:0.28rem;"></p>
          <p><span><span>￥</span>{{item.money}}</span><span class="phone" v-if="isvipPrice">{{item.phone}}</span></p>
        </div>
        <div class="cardleft" v-if="item.name == 'C'&&item.model == '02'" :style="item.logoImgUrl?{backgroundImage: 'url(' + item.logoImgUrl + ')' }:{backgroundImage: 'url(' + img3 + ')' }">
          <div>{{item.alias}}</div>
          <p v-if="item.name != 'E'">{{item.times == 0 ? '无限':item.times}}次打蜡晶洗</p>
          <p v-else="" style="height:0.28rem;"></p>
          <p><span><span>￥</span>{{item.money}}</span><span class="phone" v-if="isvipPrice">{{item.phone}}</span></p>
        </div>
        <div class="cardleft" v-if="item.name == 'D'&&item.model == '02'" :style="item.logoImgUrl?{backgroundImage: 'url(' + item.logoImgUrl + ')' }:{backgroundImage: 'url(' + img4 + ')' }">
          <div>{{item.alias}}</div>
          <p v-if="item.name != 'E'">{{item.times == 0 ? '无限':item.times}}次打蜡晶洗</p>
          <p v-else="" style="height:0.28rem;"></p>
          <p><span><span>￥</span>{{item.money}}</span><span class="phone" v-if="isvipPrice">{{item.phone}}</span></p>
        </div>
        <div class="cardleft" v-if="item.name == 'E'&&item.model == '02'" :style="item.logoImgUrl?{backgroundImage: 'url(' + item.logoImgUrl + ')' }:{backgroundImage: 'url(' + img55 + ')' }">
          <div>{{item.alias}}</div>
          <p v-if="item.name != 'E'">{{item.times == 0 ? '无限':item.times}}次打蜡晶洗</p>
          <p v-else="" style="height:0.28rem;"></p>
          <p><span><span>￥</span>{{item.money}}</span><span class="phone" v-if="isvipPrice">{{item.phone}}</span></p>
        </div>
        <div class="cardright" v-if="item.name == 'A'&&item.model == '01'">
          <p>{{item.alias}}</p>
          <p v-if="item.name != 'E'">水蜡快洗{{item.times == 0 ? '无限':item.times}}次，有效期30天</p>
          <p v-else=""></p>
          <p><span><span>￥</span>{{item.money}}</span><span>{{item.logoWord}}</span></p>
        </div>
        <div class="cardright" v-if="item.name == 'B'&&item.model == '01'">
          <p>{{item.alias}}</p>
          <p v-if="item.name != 'E'">水蜡快洗{{item.times == 0 ? '无限':item.times}}次，有效期90天</p>
          <p v-else=""></p>
          <p><span><span>￥</span>{{item.money}}</span><span>{{item.logoWord}}</span></p>
        </div>
        <div class="cardright" v-if="item.name == 'C'&&item.model == '01'">
          <p>{{item.alias}}</p>
          <p v-if="item.name != 'E'">水蜡快洗{{item.times == 0 ? '无限':item.times}}次，有效期365天</p>
          <p v-else=""></p>
          <p><span><span>￥</span>{{item.money}}</span><span>{{item.logoWord}}</span></p>
        </div>
        <div class="cardright" v-if="item.name == 'D'&&item.model == '01'">
          <p>{{item.alias}}</p>
          <p v-if="item.name != 'E'">水蜡快洗{{item.times == 0 ? '无限':item.times}}次</p>
          <p v-else=""></p>
          <p><span><span>￥</span>{{item.money}}</span><span>{{item.logoWord}}</span></p>
        </div>
        <div class="cardright" v-if="item.name == 'E'&&item.model == '01'">
          <p>{{item.alias}}</p>
          <p v-if="item.name != 'E'">水蜡快洗{{item.times == 0 ? '无限':item.times}}次</p>
          <p v-else=""></p>
          <p><span><span>￥</span>{{item.money}}</span><span>{{item.logoWord}}</span></p>
        </div>
        <div class="cardright" v-if="item.name == 'A'&&item.model == '02'">
          <p>{{item.alias}}</p>
          <p v-if="item.name != 'E'">打蜡晶洗{{item.times == 0 ? '无限':item.times}}次，有效期30天</p>
          <p v-else=""></p>
          <p><span><span>￥</span>{{item.money}}</span><span>{{item.logoWord}}</span></p>
        </div>
        <div class="cardright" v-if="item.name == 'B'&&item.model == '02'">
          <p>{{item.alias}}</p>
          <p v-if="item.name != 'E'">打蜡晶洗{{item.times == 0 ? '无限':item.times}}次，有效期90天</p>
          <p v-else=""></p>
          <p><span><span>￥</span>{{item.money}}</span><span>{{item.logoWord}}</span></p>
        </div>
        <div class="cardright" v-if="item.name == 'C'&&item.model == '02'">
          <p>{{item.alias}}</p>
          <p v-if="item.name != 'E'">打蜡晶洗{{item.times == 0 ? '无限':item.times}}次，有效期365天</p>
          <p v-else=""></p>
          <p><span><span>￥</span>{{item.money}}</span><span>{{item.logoWord}}</span></p>
        </div>
        <div class="cardright" v-if="item.name == 'D'&&item.model == '02'">
          <p>{{item.alias}}</p>
          <p v-if="item.name != 'E'">打蜡晶洗{{item.times == 0 ? '无限':item.times}}次</p>
          <p v-else=""></p>
          <p><span><span>￥</span>{{item.money}}</span><span>{{item.logoWord}}</span></p>
        </div>
        <div class="cardright" v-if="item.name == 'E'&&item.model == '02'">
          <p>{{item.alias}}</p>
          <p v-if="item.name != 'E'">打蜡晶洗{{item.times == 0 ? '无限':item.times}}次</p>
          <p v-else=""></p>
          <p><span><span>￥</span>{{item.money}}</span><span>{{item.logoWord}}</span></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";
import { MessageBox, Indicator } from "mint-ui";
import {  } from "./api/api.js";
export default {
  name: "vipCardList",
  data () {
    return {
      showInfo:false,
      cardinfo:[],
      img1: './staticxiche/image/month1.png',
      img11: './staticxiche/image/month2.png',
      img2: './staticxiche/image/season1.png',
      img22: './staticxiche/image/season2.png',
      img3: './staticxiche/image/year1.png',
      img33: './staticxiche/image/year2.png',
      img4: './staticxiche/image/times1.png',
      img44: './staticxiche/image/times2.png',
      img55: './staticxiche/image/img55.png',
      // img1: '../../static/image/month1.png',
      // img11: '../../static/image/month2.png',
      // img2: '../../static/image/season1.png',
      // img22: '../../static/image/season2.png',
      // img3: '../../static/image/year1.png',
      // img33: '../../static/image/year2.png',
      // img4: '../../static/image/times1.png',
      // img44: '../../static/image/times2.png',
      // img55: '../../static/image/img55.png',
      req:[],
      isvipPrice:false,
      vipPriceInfo:{}
    };
  },
  created() {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
    if(this.$route.query.vip==2){
      this.isvipPrice = true;
      this.getVipType();
    }else{
      this.insidePrice();
    }        
  },
  mounted(){
    
  },
  methods: {
    insidePrice(){
      let that = this;
      axios({
        method: "post",
        url: `${this.washurl}/bankEmp/checkTelIsInsideVIP`,
        data: Qs.stringify({tel:localStorage.getItem("phone")?localStorage.getItem('phone'):localStorage.getItem("tel")})
      }).then(res => {
        console.log(res);
        if(res.data.code == 0){
          that.isvipPrice = true;
          that.vipPriceInfo = res.data.result;
        } else{
          that.isvipPrice = false;
        }
        that.getVipType();                
      });
    },
    getVipType() {
      let that = this;
      let data = {
        page: 1,
        pageSize: 100,
        userId: "93f07a1decc14ce69ca82e0d6c5d3761",
        dealer: 1561430951496
      };
      axios({
        method: "post",
        url: `${this.washurl}/carNumberTypeWashCar/selectAll`,
        data: Qs.stringify(data)
      }).then(res => {
        Indicator.close();
        that.showInfo = true;
        console.log(res);
        if(res.data.resCode == 0){
          if(res.data.count > 0){
            that.cardinfo = res.data.result;
            if(that.isvipPrice== true){
              for(let i = 0;i < res.data.count;i++){
                if(res.data.result[i].insidePrice==0){
                  that.cardinfo[i].money = res.data.result[i].money;
                }else{
                  that.cardinfo[i].money = res.data.result[i].insidePrice;
                }
                if(that.$route.query.vip==2){
                  if(that.cardinfo[i].name=='A'){
                    that.cardinfo[i].alias='车口袋亲友专属月卡';
                  } else if(that.cardinfo[i].name=='B'){
                    that.cardinfo[i].alias='车口袋亲友专属季卡';
                  } else if(that.cardinfo[i].name=='C'){
                    that.cardinfo[i].alias='车口袋亲友专属年卡';
                  } else if(that.cardinfo[i].name=='D'){
                    that.cardinfo[i].alias='车口袋亲友专属次卡';
                  } else if(that.cardinfo[i].name=='E'){
                    that.cardinfo[i].alias='车口袋亲友专属券卡';
                  }
                  // that.cardinfo[i].logoImgUrl = "../../static/image/chekoudaivip.png";
                  that.cardinfo[i].logoImgUrl = "./staticxiche/image/chekoudaivip.png";
                }else{
                  if(that.cardinfo[i].name=='A'){
                    that.cardinfo[i].alias=that.vipPriceInfo.bankDesc+'月卡';
                  } else if(that.cardinfo[i].name=='B'){
                    that.cardinfo[i].alias=that.vipPriceInfo.bankDesc+'季卡';
                  } else if(that.cardinfo[i].name=='C'){
                    that.cardinfo[i].alias=that.vipPriceInfo.bankDesc+'年卡';
                  } else if(that.cardinfo[i].name=='D'){
                    that.cardinfo[i].alias=that.vipPriceInfo.bankDesc+'次卡';
                  } else if(that.cardinfo[i].name=='E'){
                    that.cardinfo[i].alias=that.vipPriceInfo.bankDesc+'券卡';
                  }             
                  if(that.vipPriceInfo.img!=""){
                    that.cardinfo[i].logoImgUrl = that.vipPriceInfo.img;
                  }
                  let phone = that.vipPriceInfo.phone;
                  phone = phone.split('');
                  phone.splice(4,0,'-');
                  that.cardinfo[i].phone = phone.join('');
                }                                
              }
            }
            console.log(that.cardinfo);
          }else{
            that.cardinfo = [];
          }
        }                
      });
    },
    changetype(val){
      this.req.forEach((a, y) => {
        if (a.type == val) {
          val = a.name;
        }
      });
      return val;
    },
    getcoupon(val){
      sessionStorage.setItem('vipCardListinfo',JSON.stringify(val));
      this.$router.push({path: '/people/vip'});
    }
  },
}

</script>
<style scoped>
.rating_page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 204;
}
.rating_page>ul{
  padding: 0.4rem 0.2rem;
}
.rating_page>ul>li{
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.4rem; 
  margin-bottom: 0.4rem;
  border-bottom: 1px solid #efefef;
}
.rating_page>ul>li>.cardleft{
  width: 47%;
  height: 2.2rem;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100% 100%;
  color: #fff;
  padding: 0 0.2rem;
  box-sizing: border-box;
}
.rating_page>ul>li>.cardright{
  width: 51%;
  height: 2.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100% 100%;
}
.rating_page>ul>li>.cardleft div{
  padding: 0.2rem 0 0;
  font-size: 0.26rem;
}
.rating_page>ul>li>.cardleft p:first-of-type{
  padding: 0.15rem 0 0.55rem;
  font-size: 0.25rem;
}
.rating_page>ul>li>.cardleft p:last-of-type{
  font-size: 0.35rem;
  display: flex;
  justify-content: space-between;
  line-height: 0.35rem;
}
.rating_page>ul>li>.cardleft p:last-of-type .phone{
  font-size: 0.25rem;  
}
.cardleft p:last-of-type>span>span{
  font-size: 0.2rem;
}
.rating_page>ul>li>.cardright p:first-of-type{
  font-size: 0.33rem;
}
.rating_page>ul>li>.cardright p:nth-of-type(2){
  font-size: 0.25rem;
  color: #b9b9b9;
  padding: 0.15rem 0 0.85rem;
}
.rating_page>ul>li>.cardright p:last-of-type{
  display: flex;
  justify-content: space-between;
}
.rating_page>ul>li>.cardright p:last-of-type>span:first-of-type{
  font-size: 0.35rem;
  color: #f68b1b;
  vertical-align: bottom;
}
.rating_page>ul>li>.cardright p:last-of-type>span:last-of-type{
  font-size: 0.3rem;
  color: #f68b1b;
  vertical-align: bottom;
}
.cardright p:last-of-type>span>span{
  font-size: 0.2rem;
}
</style>