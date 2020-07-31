<!--  -->
<template>
  <div class="rating_page" style="width:100%;background:#efefef;overflow: scroll;">
    <ul>
      <li v-for="item in cardinfo" :key="item.id">
        <div v-if="changetype(item.ofType) == '月卡'" :style="{backgroundImage: 'url(' + img1 + ')' }">
          <p class="description" v-if="item.allTimes!=0&&item.onlyDailyLimit!=0">{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.allTimes}}次，每日限{{item.onlyDailyLimit}}次</p>
          <p class="description" v-else-if="item.allTimes!=0&&item.onlyDailyLimit==0">{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.allTimes}}次</p>
          <p class="description" v-else-if="item.allTimes==0&&item.onlyDailyLimit!=0">每日限{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.onlyDailyLimit}}次</p>
          <p class="description" v-else="">免费畅享{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}服务</p>
          <p class="times" v-if="item.allTimes!=0"><span>剩余：</span><span>{{item.onlyTime}}</span><span>次</span></p>
          <p class="date">有效期：{{item.startTime}} - {{item.endTime}}</p>
          <!-- <span @click="give(item.id)">转赠</span> -->
        </div>
        <div v-if="changetype(item.ofType) == '季卡'" :style="{backgroundImage: 'url(' + img2 + ')' }">
          <p class="description" v-if="item.allTimes!=0&&item.onlyDailyLimit!=0">{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.allTimes}}次，每日限{{item.onlyDailyLimit}}次</p>
          <p class="description" v-else-if="item.allTimes!=0&&item.onlyDailyLimit==0">{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.allTimes}}次</p>
          <p class="description" v-else-if="item.allTimes==0&&item.onlyDailyLimit!=0">每日限{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.onlyDailyLimit}}次</p>
          <p class="description" v-else="">免费畅享{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}服务</p>
          <p class="times" v-if="item.allTimes!=0"><span>剩余：</span><span>{{item.onlyTime}}</span><span>次</span></p>
          <p class="date">有效期：{{item.startTime}} - {{item.endTime}}</p>
          <!-- <span @click="give(item.id)">转赠</span> -->
        </div>
        <div v-if="changetype(item.ofType) == '年卡'" :style="{backgroundImage: 'url(' + img3 + ')' }">
          <p class="description" v-if="item.allTimes!=0&&item.onlyDailyLimit!=0">{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.allTimes}}次，每日限{{item.onlyDailyLimit}}次</p>
          <p class="description" v-else-if="item.allTimes!=0&&item.onlyDailyLimit==0">{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.allTimes}}次</p>
          <p class="description" v-else-if="item.allTimes==0&&item.onlyDailyLimit!=0">每日限{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.onlyDailyLimit}}次</p>
          <p class="description" v-else="">免费畅享{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}服务</p>
          <p class="times" v-if="item.allTimes!=0"><span>剩余：</span><span>{{item.onlyTime}}</span><span>次</span></p>
          <p class="date">有效期：{{item.startTime}} - {{item.endTime}}</p>
          <!-- <span @click="give(item.id)">转赠</span> -->
        </div>
        <div v-if="changetype(item.ofType) == '次卡'" :style="{backgroundImage: 'url(' + img4 + ')' }">
          <p class="description" v-if="item.allTimes!=0&&item.onlyDailyLimit!=0">{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.allTimes}}次，每日限{{item.onlyDailyLimit}}次</p>
          <p class="description" v-else-if="item.allTimes!=0&&item.onlyDailyLimit==0">{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.allTimes}}次</p>
          <p class="description" v-else-if="item.allTimes==0&&item.onlyDailyLimit!=0">每日限{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.onlyDailyLimit}}次</p>
          <p class="description" v-else="">免费畅享{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}服务</p>
          <p class="times" v-if="item.allTimes!=0"><span>剩余：</span><span>{{item.onlyTime}}</span><span>次</span></p>
          <p class="date"></p>
          <!-- <span @click="give(item.id)">转赠</span> -->
        </div>
        <div v-if="changetype(item.ofType) == '券卡'" :style="{backgroundImage: 'url(' + img5 + ')' }">
          <p class="description" v-if="item.allTimes!=0&&item.onlyDailyLimit!=0">{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.allTimes}}次，每日限{{item.onlyDailyLimit}}次</p>
          <p class="description" v-else-if="item.allTimes!=0&&item.onlyDailyLimit==0">{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.allTimes}}次</p>
          <p class="description" v-else-if="item.allTimes==0&&item.onlyDailyLimit!=0">每日限{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.onlyDailyLimit}}次</p>
          <p class="description" v-else="">免费畅享{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}服务</p>
          <p class="times" v-if="item.allTimes!=0"><span>剩余：</span><span>{{item.onlyTime}}</span><span>次</span></p>
          <p class="date"></p>
          <!-- <span @click="give(item.id)">转赠</span> -->
        </div>
      </li>
      <p class="remark" @click="getcoupon()">
        <!-- <img src="../../static/image/question.png" alt=""> -->
        <span>会员购买</span>
      </p>
    </ul>   
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";
import { MessageBox, Indicator } from "mint-ui";
import { getid } from "./api/api.js";
import register from './register';
export default {
  name: "vipCard",
  data () {
    return {
      cardinfo:[],
      img1: './staticxiche/image/yueka.png',
      img2: './staticxiche/image/jika.png',
      img3: './staticxiche/image/nianka.png',
      img4: './staticxiche/image/times1.png',
      img5: './staticxiche/image/img55.png',
      // img1: '../../static/image/yueka.png',
      // img2: '../../static/image/jika.png',
      // img3: '../../static/image/nianka.png',
      // img4: '../../static/image/times1.png',
      // img5: '../../static/image/img55.png',
      req:[],
      show:false,
    };
  },
  components: {
    register
  },
  mounted(){
    let url = window.location.href;
    console.log(url);
    if(url.indexOf("?") != -1){
      url = url.split("?");
      console.log(url);
      if(url.length > 2){
        url = url[2];
        console.log(url);
        localStorage.setItem("openid",getid(url).id);
        localStorage.setItem("phone",getid(url).phone);
        localStorage.setItem("tel",getid(url).phone);
        // console.log(localStorage.getItem("openid")+","+localStorage.getItem("phone"));
      }      
    }
    this.getVipType();
    let that = this;
    let data = {
      // userId: "93f07a1decc14ce69ca82e0d6c5d3761",
      dealer: 1561430951496,
      tel: localStorage.getItem("tel") ? localStorage.getItem("tel") : localStorage.getItem("phone")
    }
    axios({
      method: "post",
      url: `${this.washurl}/carInfoWashCar/selectVIPByTel`,
      data: Qs.stringify(data)
    }).then(res => {
      console.log(res);
      if(res.data.code == 0){
        that.cardinfo = res.data.result;
        for(var i = 0;i < res.data.result.length;i++){
          that.cardinfo[i].startTime = that.cardinfo[i].startTime.split(" ")[0];
          that.cardinfo[i].endTime = that.cardinfo[i].endTime.split(" ")[0];
          that.cardinfo[i].startTime = (that.cardinfo[i].startTime).replace(/-/g,".");
          that.cardinfo[i].endTime = (that.cardinfo[i].endTime).replace(/-/g,".");
        }
      }else{
        MessageBox("提示", res.data.result).then(action => {
          that.$router.go(-1);
        });
      }
    })
  },
  methods: {
    getVipType() {
      let data = {
        page: 1,
        pageSize: 10,
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
              let list = {};
              list.name = res.data.result[i].name;
              list.type = res.data.result[i].id;
              that.req.push(list);
            }           
          }
        }
        console.log(that.req);
        that.req.find((a, y) => {
          if (a.name == "A") {
            a.name = "月卡";
          } else if (a.name == "B") {
            a.name = "季卡";
          } else if (a.name == "C") {
            a.name = "年卡";
          } else if (a.name == "D") {
            a.name = "次卡";
          } else if (a.name == "E") {
            a.name = "券卡";
          }
        });
      });
    },
    changetype(val){
      if (val == "A") {
        val = "月卡";
      } else if (val == "B") {
        val = "季卡";
      } else if (val == "C") {
        val = "年卡";
      } else if (val == "D") {
        val = "次卡";
      } else if (val == "E") {
        val = "券卡";
      }
      return val;
    },
    getcoupon(){
      this.$router.push({path: '/people/vipCardList',query:{vip:1}});
    },
    give(id){  
      // MessageBox.prompt(' ','请输入好友手机号',{
      //   inputPattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,    //正则条件
      //   inputErrorMessage:'请输入正确的手机号码',
      // }).then(({ value, action }) => {
      //   if (action == 'confirm') {
      //       axios({
      //       method: "post",
      //       url: `${this.washurl}/carInfoWashCar/exchangeVIPTel`,
      //       data: Qs.stringify({id:id,tel:value})
      //     }).then(res => {
      //       console.log(res);
      //       if(res.data.code == 0){
              
      //       }else{
              
      //       }
      //     })
      //   }
      // });  
      this.$router.push({path:"/vipGive",query:{id:id}});     
    },
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
  background-color: #efefef;
  z-index: 204;
}
.rating_page>ul{
  padding: 0.4rem 0.32rem;
}
.rating_page>ul>li{
  margin-bottom: 0.4rem;
  color: #fff;
}
.rating_page>ul>li>div{
  height: 3.72rem;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100% 100%;
  position: relative;
}
.rating_page>ul>li>div .description{
  padding-top: 1.76rem;
  padding-left: 0.4rem;
  font-size: 0.3rem;
  opacity: 0.9;
}
.rating_page>ul>li>div .times{
  padding: 0.24rem 0 0 0.4rem;
  font-size: 0.3rem;
}
.rating_page>ul>li>div .times>span:first-of-type,.rating_page>ul>li>div .times>span:last-of-type{
  opacity: 0.9;
}
.rating_page>ul>li>div .times>span:nth-of-type(2){
  font-size: 0.36rem;
}
.rating_page>ul>li>div .date{
  position: absolute;
  left: 0;
  bottom: 0.24rem;
  padding-left: 0.4rem;
  font-size: 0.26rem;
  opacity: 0.9;
}
.rating_page>ul>li>div>span{
  display: inline-block;
  width: 1.4rem;
  height: 0.7rem;
  text-align: center;
  line-height: 0.7rem;
  border-top-left-radius: 0.35rem;
  border-bottom-left-radius: 0.35rem;
  color: #fff;
  font-size: 0.32rem;
  background: rgba(255, 255, 255, 0.16);
  position: absolute;
  top: 0.54rem;
  right: 0;
}
.remark{
  /* text-align: right; */
  text-align: center;
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
.remark img{
  vertical-align: middle;
  width: 0.4rem;
  height: 0.4rem;
  margin-right: 0.05rem;
  display: inline-block;
}
.give{
  padding: 0.2rem 0.25rem 0;
  text-align: right;
  font-size: 0.3rem;
}
/* .remark span{
  vertical-align: middle;
  color: #666;
  font-size: 0.3rem;
  display: inline-block;
  line-height: 0.4rem;
} */
</style>