<!--  -->
<template>
  <div class="rating_page" style="width:100%;background:#fff;overflow: scroll;">
    <ul>
      <li v-for="item in cardinfo" :key="item.id">
        <div v-if="item.ofType == 'A'" :style="{backgroundImage: 'url(' + img1 + ')' }">
          <p>{{item.alias}}</p>
          <p class="description" v-if="item.allTimes!=0&&item.onlyDailyLimit!=0">{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.allTimes}}次，每日限{{item.onlyDailyLimit}}次</p>
          <p class="description" v-else-if="item.allTimes!=0&&item.onlyDailyLimit==0">{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.allTimes}}次</p>
          <p class="description" v-else-if="item.allTimes==0&&item.onlyDailyLimit!=0">每日限{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.onlyDailyLimit}}次</p>
          <p class="description" v-else="">免费畅享{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}服务</p>
          <p><span>有效期：{{item.startTime}} ~ {{item.endTime}}</span></p>
        </div>
        <div v-if="item.ofType == 'B'" :style="{backgroundImage: 'url(' + img2 + ')' }">
          <p>{{item.alias}}</p>
          <p class="description" v-if="item.allTimes!=0&&item.onlyDailyLimit!=0">{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.allTimes}}次，每日限{{item.onlyDailyLimit}}次</p>
          <p class="description" v-else-if="item.allTimes!=0&&item.onlyDailyLimit==0">{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.allTimes}}次</p>
          <p class="description" v-else-if="item.allTimes==0&&item.onlyDailyLimit!=0">每日限{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.onlyDailyLimit}}次</p>
          <p class="description" v-else="">免费畅享{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}服务</p>
          <p><span>有效期：{{item.startTime}} ~ {{item.endTime}}</span></p>
        </div>
        <div v-if="item.ofType == 'C'" :style="{backgroundImage: 'url(' + img3 + ')' }">
          <p>{{item.alias}}</p>
          <p class="description" v-if="item.allTimes!=0&&item.onlyDailyLimit!=0">{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.allTimes}}次，每日限{{item.onlyDailyLimit}}次</p>
          <p class="description" v-else-if="item.allTimes!=0&&item.onlyDailyLimit==0">{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.allTimes}}次</p>
          <p class="description" v-else-if="item.allTimes==0&&item.onlyDailyLimit!=0">每日限{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.onlyDailyLimit}}次</p>
          <p class="description" v-else="">免费畅享{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}服务</p>
          <p><span>有效期：{{item.startTime}} ~ {{item.endTime}}</span></p>
        </div>
        <div v-if="item.ofType == 'D'" :style="{backgroundImage: 'url(' + img4 + ')' }">
          <p>{{item.alias}}</p>
          <p class="description" v-if="item.allTimes!=0&&item.onlyDailyLimit!=0">{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.allTimes}}次，每日限{{item.onlyDailyLimit}}次</p>
          <p class="description" v-else-if="item.allTimes!=0&&item.onlyDailyLimit==0">{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.allTimes}}次</p>
          <p class="description" v-else-if="item.allTimes==0&&item.onlyDailyLimit!=0">每日限{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.onlyDailyLimit}}次</p>
          <p class="description" v-else="">免费畅享{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}服务</p>
          <p><span></span><span></span></p>
        </div>
        <div v-if="item.ofType == 'E'" :style="{backgroundImage: 'url(' + img5 + ')' }">
          <p>{{item.alias}}</p>
          <p class="description" v-if="item.allTimes!=0&&item.onlyDailyLimit!=0">{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.allTimes}}次，每日限{{item.onlyDailyLimit}}次</p>
          <p class="description" v-else-if="item.allTimes!=0&&item.onlyDailyLimit==0">{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.allTimes}}次</p>
          <p class="description" v-else-if="item.allTimes==0&&item.onlyDailyLimit!=0">每日限{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}{{item.onlyDailyLimit}}次</p>
          <p class="description" v-else="">免费畅享{{item.model=='01'?"水蜡快洗":item.model=='02'?"打蜡晶洗":item.model=='04'?"共享汽车专用":"4S店铺专用"}}服务</p>
          <p><span></span><span></span></p>
        </div>
      </li>
      <div class="user" v-if="phone!=''">
        <p>已识别到您的车口袋账号</p>
        <p>{{phone}}</p>
      </div>
      <div class="nouser" v-else="">
        <div class="loginInput topp">
          <label>
            <!-- <span>86</span>&nbsp; -->
            <img src="../../static/image/zh.png" />
          </label>
          <div></div>
          <input type="number" pattern="\d*" v-model="tel" @blur="bottocenter" placeholder="请输入您的手机号码" />
        </div>
        <div class="loginInput bott">
          <label>
            <img src="../../static/image/mm.png" />
          </label>
          <div class="mid"></div>
          <input type="number" pattern="\d*" v-model="pass" style="width:58%;" @blur="bottocenter" placeholder="请输入验证码" />
          <div class="ma" @click="sendab" v-if="this.t==''">{{val}}</div>
          <div class="ma" v-else style="background:#999;">{{textsend}}</div>
        </div>
      </div>
      <p class="remark" v-if="show&&phone!=''" @click="getcoupon()">
        <span>领取</span>
      </p>
      <p class="remark" v-else-if="show&&phone==''" @click="getvip()">
        <span>领取</span>
      </p>
      <p class="remark" v-else="" style="opacity:0.5;">
        <span>领取</span>
      </p>  
      <div class="giveinfotitle"><span></span>查看方法<span></span></div>  
      <div class="giveinfolist">关注<span>【车口袋停车】</span>公众号，点击<span>我要洗车-个人中心-会员购买</span></div>  
    </ul>   
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";
import { MessageBox, Indicator, Toast } from "mint-ui";
import { getid, fasong } from "./api/api.js";
import register from './register';
export default {
  name: "vipGivePeople",
  data () {
    return {
      cardinfo:[],
      img1: './staticxiche/image/month2.png',
      img2: './staticxiche/image/season2.png',
      img3: './staticxiche/image/year1.png',
      img4: './staticxiche/image/times1.png',
      img5: './staticxiche/image/img55.png',
      // img1: '../../static/image/month2.png',
      // img2: '../../static/image/season2.png',
      // img3: '../../static/image/year1.png',
      // img4: '../../static/image/times1.png',
      // img5: '../../static/image/img55.png',
      req:[],
      show:true,
      phone:"",
      tel:"",
      val: "发送验证码",
      t: "",
      textsend: "",
      pass: "",
      yanz: "",
    };
  },
  components: {
    
  },
  created(){
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
    let that = this;
    let data = {
      id: this.$route.query.id
    }
    axios({
      method: "post",
      url: `${this.washurl}/carInfoWashCar/getCarInfoWashCarById`,
      data: Qs.stringify(data)
    }).then(res => {
      console.log(res);
      if(res.data.code == 200){
        Indicator.close();
        that.cardinfo.push(res.data.data);
        for(var i = 0;i < that.cardinfo.length;i++){
          that.cardinfo[i].startTime = that.cardinfo[i].startTime.split(" ")[0];
          that.cardinfo[i].endTime = that.cardinfo[i].endTime.split(" ")[0];
          that.cardinfo[i].startTime = (that.cardinfo[i].startTime).replace(/-/g,".");
          that.cardinfo[i].endTime = (that.cardinfo[i].endTime).replace(/-/g,".");
        }
        console.log(that.cardinfo);
      }else{
        MessageBox("提示", res.data.message).then(action => {
          that.$router.go(-1);
        });
      }
    });
    this.phone = localStorage.getItem("phone")?localStorage.getItem("phone"):localStorage.getItem("tel");
  },
  mounted(){    
    // this.getVipType();
  },
  methods: {
    bottocenter() {
      window.scrollTo(0, 0);
    },
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
              that.req.push(res.data.result[i]);
            }           
          }
        }
        console.log(that.req);        
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
    async sendab() {
      if (this.tel == "") {
        MessageBox("提示", "请输入手机号码");
      } else {
        if (!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.tel)) {
          MessageBox("提示", "请输入正确的手机号码");
        } else {
          let that = this;
          that.textsend = "剩余" + 60 + "s";
          var time = 59;
          that.t = setInterval(function() {
            if (time <= 0) {
              clearInterval(that.t);
              that.t = "";
              that.val = "重新发送";
            } else {
              that.textsend = "剩余" + time-- + "s";
            }
          }, 1000);
          let data = {
            phoneNumber: that.tel
          };
          let res = await fasong(data);
          if (res.data.resCode == "0") {
            console.log(res);
            that.yanz = res.data.result;
          }
        }
      }
    },
    getcoupon(){
      let that = this;
      axios({
        method: "post",
        url: `${this.washurl}/carInfoWashCar/exchangeVIPTel`,
        data: Qs.stringify({id:this.$route.query.id,tel:this.phone})
      }).then(res => {
        console.log(res);
        if(res.data.code == 0){
          Toast("领取成功");
          that.show = false;
          that.$router.push('/people/vipCard');
        }else{
          Toast(res.data.result);
          that.show = true;
        }
      })     
    },
    getvip(){
      let that = this;
      if(this.tel==""){
        MessageBox("提示", "请输入手机号码");
      }else{
        if (!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.tel)) {
          MessageBox("提示", "请输入正确的手机号码");
        }else{
          if(this.pass==""){
            MessageBox("提示", "请输入验证码");
          }else if(this.pass!=this.yanz){
            MessageBox("提示", "验证码错误");
          }else{
            axios({
              method: "post",
              url: `${this.washurl}/carInfoWashCar/exchangeVIPTel`,
              data: Qs.stringify({id:this.$route.query.id,tel:this.tel})
            }).then(res => {
              console.log(res);
              if(res.data.code == 0){
                localStorage.setItem("phone",that.tel);
                localStorage.setItem("tel",that.tel);
                Toast("领取成功");
                that.show = false;
                that.$router.push('/people/vipCard');
              }else{
                Toast(res.data.result);
                that.show = true;
              }
            })
          }          
        }
      }       
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
  background-color: #fff;
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
  padding-left: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.rating_page>ul>li>div p:first-of-type{
  padding-top: 0.4rem;
  font-size: 0.6rem;
}
.rating_page>ul>li>div p:nth-of-type(2){
  margin-top: -1rem;
  font-size: 0.36rem;
}
.rating_page>ul>li>div p:last-of-type{
  margin-bottom: 0.24rem;
  font-size: 0.26rem;
}
.user{
  text-align: center;
  font-size: 0.34rem;
  padding: 0.2rem 0;
}
.user>p:first-of-type{
  padding-bottom: 0.3rem;
}
.user>p:last-of-type{
  color: #f68b1b;
}
.loginInput input {
  outline: none;
  border: none;
  text-indent: 5px;
  font-size: 13px;
  font-family: "PingFang-SC-Regular";
  color: #a4a4a4;
  background-color: transparent;
  width: 80%;
}
.loginInput label {
  height: 44px;
  width: 53px;
  text-align: center;
  color: #787878;
  font-size: 13px;
  font-family: "PingFang-SC-Regular";
}
.loginInput {
  width: 100%;
  height: 44px;
  line-height: 44px;
  border-radius: 5px;
  border: 1px solid #bfbfbf;
  margin: 0 auto;
  display: flex;
}
.topp {
  margin-bottom: 15px;
}
.topp div,
.bott .mid {
  height: 33px;
  width: 1px;
  background: #bdbdbd;
  margin-top: 5.5px;
}
.topp label img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.bott label img {
  width: 18px;
  height: 20px;
  vertical-align: middle;
}
.bott {
  position: relative;
}
.bott .ma {
  background: #f68b1c;
  color: #fff;
  width: 77px;
  height: 46px;
  line-height: 46px;
  font-size: 13px;
  font-family: "PingFang-SC-Regular";
  text-align: center;
  position: absolute;
  right: -1px;
  top: -1px;
  cursor: pointer;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}
.giveinfotitle{
  text-align: center;
  padding: 0.2rem 0;
  font-size: 0.24rem;
}
.giveinfotitle > span {
  vertical-align: middle;
  display: inline-block;
  width: 0.6rem;
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
  text-align: center;
  font-size: 0.24rem;
  color: #787878;
}
.giveinfolist>span{
  color: #000;
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