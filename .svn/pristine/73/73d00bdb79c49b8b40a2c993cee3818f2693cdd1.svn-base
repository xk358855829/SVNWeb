<template>
  <div id="order" v-if="showInfo">
    <!-- <div id="allmap"></div> -->
    <div class="orders_bg" :style="{backgroundImage: 'url(' + img1 + ')' }">
      <p>客官别急，相关数据正在努力收集中！</p>
      <div @click="mapnavigation">地图导航</div>
    </div>
    <div class="orders_info">
      <div class="orders_info_top">
        <p>
          <span>{{order.sname}}</span>
        </p>
        <p>
          {{order.address}} 
          <span v-if="order.km != 0">（距您{{order.km}}km）</span>
        </p>
      </div>
      <div class="orders_info_center">
        <div class="orders_info_center_left">
          <p>服务项目</p>
          <p>营业时间</p>
        </div>
        <div class="orders_info_center_rigth">
          <p>
            <span v-for="item in menu" :key="item.cid">{{item.cname}}(￥{{item.money}})</span>
          </p>
          <p>{{order.beginTime}}-{{order.endTime}}</p>
        </div>
      </div>
    </div>
    <div class="road">
      <div class="road_top">
        <span>—</span> 园区内指引
        <span>—</span>
      </div>
      <div class="road_info" v-if="showcarinfo!=''">
        <div>
          <img style="width:90%;height:auto;" :src="'./staticxiche/image/'+showcarinfo+'-1.jpg'" alt />
          <p style="padding:0.1rem 0;"></p>
        </div>
        <div>
          <img style="width:90%;height:auto;" :src="'./staticxiche/image/'+showcarinfo+'-2.jpg'" alt />
          <p style="padding:0.1rem 0;"></p>
        </div>
        <div>
          <img style="width:90%;height:auto;" :src="'./staticxiche/image/'+showcarinfo+'-3.jpg'" alt />
          <p style="padding:0.1rem 0 0;"></p>
        </div>
      </div>
      <div class="road_info" v-else="">
        <img src="../../static/image/none.png" alt />
        <p>暂时没有相关数据</p>
      </div>
    </div>
    <div class="sign">
      <div class="sign_top">温馨提示</div>
      <ul class="sign_info">
        <li>1、部分站点洗车模式、价格、支付方式等可能会不同、请事先了解站点信息，以免产生误会。</li>
      </ul>
    </div>
    <div class="setUp">      
      <!-- <div v-if="order.open==1&&iswash==true" @click="washcar">车已到位,立即洗车</div>
      <div v-else-if="order.open==1&&iswash==false" style="background: #b4b4b4;border:1px solid #b4b4b4;">车未到位</div> -->
      <div v-if="order.open==1" @click="washcar">我要洗车</div>
      <div v-else-if="order.open==0" style="background: #b4b4b4;border:1px solid #b4b4b4;">站点维护</div>
    </div> 
    <!-- <div class="setUpbottom" @click="washcar">扫码洗车</div> -->
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";
import { Indicator, MessageBox } from "mint-ui";
import { code } from '../components/api/api.js'
export default {
  name: "orders",
  data() {
    return {
      order: {},
      img1: './staticxiche/image/bg_3.jpg',
      menu: [],
      showInfo:false,
      iswash:false,
      showcarinfo:"",
      onload:'',
    };
  },
  methods: {
    washcar() {
      sessionStorage.setItem("iscarshop",this.order.isshop);
      sessionStorage.setItem("sname",this.order.sname);
      sessionStorage.setItem("sid",this.order.sid);   
      sessionStorage.setItem("begintime",this.order.beginTime);
      sessionStorage.setItem("endtime",this.order.endTime);   
      // this.$router.push({path: '/attention'});
      // this.$router.push({path: '/pay',query: {sid:this.order.sid}}); 
      this.$router.push({path: '/carinplace',query: {sid:this.order.sid}});     
    },
    mapnavigation(){
      let that = this;
      var x_pi = 3.14159265358979324 * 3000.0 / 180.0;
      var x = this.order.longitude - 0.0065;
      var y = this.order.latitude - 0.006;
      var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
      var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
      var lng = z * Math.cos(theta);
      var lat = z * Math.sin(theta);
      wx.openLocation({        
        latitude: lat, // 纬度，浮点数，范围为90 ~ -90
        longitude: lng,
        name: that.order.sname, // 位置名
        address: that.order.address, // 地址详情说明
        scale: 15, // 地图缩放级别,整形值,范围从1~28。默认为最大
        infoUrl: 'http://cloud.sokeed.com/' // 在查看位置界面底部显示的超链接,可点击跳转
      });
    },
    loadcar(){
      let that = this;
      axios({
        method: "post",
        url: `${this.washhttpUrl}/parkingCarRecerd/selectByEquipment`,
        data: Qs.stringify({
          sid:this.$route.query.sid,
        })
      }).then(res => {
        console.log(res);
        if(res.data.resCode == 0){
          if(res.data.result.succ==1){
            that.iswash = true;     
            clearInterval(this.onlod); 
          }else{
            that.iswash = false; 
          }                           
        }else{
          that.iswash = false;
        }        
      });
    }
  },
  mounted: function() {
    if(this.$route.query.sid==11||this.$route.query.sid==19){
      this.showcarinfo = this.$route.query.sid;
    }     
  },
  created(){
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
    let that = this;
    code({sid:this.$route.query.sid}).then(res => {
      console.log(res);
      if (res.data.resCode == 0) {
        that.order = res.data.result;
        if(that.$route.query.km){
          that.order.km = parseFloat(that.$route.query.km).toFixed(1);
        }        
      } else {
        MessageBox('提示', '站点信息获取失败')
      }
    }) 
    this.$http.get(
      `${this.oldhttpUrl}/scan/getJSSDKTicket?url=${window.location.href.split('#')[0]}`).then(message => {
        wx.config({
          debug: false,
          appId: message.data.appid,
          timestamp: message.data.timestamp,
          nonceStr: message.data.nonceStr,
          signature: message.data.signature, // 必填，签名，见附录1
          jsApiList: ['openLocation']
        })
    })
    let data = {
      page: 1,
      pageSize: 10
    }
    axios({
      method: "post",
      url: `${this.washhttpUrl}/carwash/querylistByCarwash`,
      data: Qs.stringify(data)
    }).then(res => {
      Indicator.close();
      that.showInfo = true;
      if (res.status == 200) {
        that.menu = res.data.result;
        console.log(that.menu);
      }
    });
    // 判断车是否停到位，到位可下单，不到位不可下单
    // this.loadcar();
    // this.onlod=setInterval(()=>{
    //   this.loadcar();
    // },10000)  
  },
  // beforeDestroy () {
  //   clearInterval(this.onlod)
  // },
};
</script>

<style scoped="scoped">
#order {
  height: 100%;
  /* background: white; */
}
#allmap {
  width: 100%;
  height: 100%;
}
.orders_bg {
  height: 30%;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100% 100%;
  /* margin-bottom: 2%; */
}
.orders_bg > p {
  font-size: 0.3rem;
  color: #9a9a9a;
  text-align: center;
  padding-top: 15%;
}
.orders_bg > div{
  width: 2.8rem;
  height: 1rem;
  margin: 0.5rem auto 0;
  background: #fcd903;
  border-radius: 0.5rem;
  text-align: center;
  line-height: 1rem;
  font-size: 0.32rem;  
  cursor:pointer;
}
.orders_info {
  background: #fff;
}
.orders_info_top,
.orders_info_center {
  width: 90%;
  margin: auto;
  padding: 0.3rem 0;
  border-bottom: 1px solid rgb(239, 239, 239);
}
.orders_info_top > p:first-child {
  font-size: 0.4rem;
  margin-bottom: 0.3rem;
}
.orders_info_top > p:nth-child(2) {
  font-size: 0.25rem;
}
.orders_info_top > p:nth-child(2) > span {
  color: #f68b1c;
}
.orders_info_center {
  border-bottom: none;
  display: flex;
  justify-content: start;
}
.orders_info_center_left {
  font-size: 0.25rem;
  color: #afafaf;
}
.orders_info_center_rigth {
  font-size: 0.25rem;
  margin-left: 0.3rem;
}
.orders_info_center_left > p,
.orders_info_center_rigth > p {
  margin-bottom: 0.15rem;
}
.orders_info_center_rigth > p > span {
  padding-left: 0.15rem;
}
.orders_info_center_rigth > p > span:first-child {
  padding-left: 0;
}
.road {
  background: #fff;
  margin-top: 0.2rem;
  border-bottom: 1px solid rgb(239, 239, 239);
}
.road_top {
  text-align: center;
  font-size: 0.25rem;
  padding: 0.2rem 0;
}
.road_top > span {
  color: #afafaf;
  vertical-align: text-top;
}
.road_info {
  text-align: center;
  min-height: 1rem;
  padding-bottom: 0.3rem;
}
.road_info > img {
  width: 30%;
  margin: 0.5rem 0;
}
.road_info > p {
  font-size: 0.25rem;
  color: #afafaf;
}
.sign {
  background: #fff;
  padding: 0.3rem 0 1.52rem;
  font-size: 0.25rem;
}
.sign_top {
  width: 90%;
  margin: 0 auto 0.3rem;
}
.sign_info {
  width: 90%;
  margin: auto;
  min-height: 1rem;
}
.sign_info>li{
  line-height: 0.35rem;
  margin-bottom: 0.2rem;
}



.setUp {
  position: fixed;
  bottom: 0px;
  /* z-index: 9; */
  width: 100%;
  background-color: white;
  text-align: center;
  /* margin: 0 5%; */
  /* border-top-left-radius: 0.2rem; */
  /* border-top-right-radius: 0.2rem; */
}
.setUp div {
  border: 1px solid #f68b1c;
  width: 90%;
  margin: 0.2rem auto;
  height: 0.88rem;
  line-height: 0.88rem;
  font-size: 0.34rem;
  background-color: #f68b1c;
  border-radius: 8px;
  color: white;
}
.setUpbottom{
  position: fixed;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid #f68b1c;
  width: 90%;
  margin: 0.2rem auto;
  height: 0.88rem;
  line-height: 0.88rem;
  font-size: 0.34rem;
  background-color: #f68b1c;
  border-radius: 8px;
  color: white;
  text-align: center;
}
/* .setUpT {
  display: flex;
  padding: 0.2rem;
  justify-content: space-between;
}
.setUpT span:nth-of-type(1) {
  font-size: 0.36rem;
  height: 0.64rem;
  line-height: 0.76rem;
}
.setUpT span:nth-of-type(2) {
  font-size: 0.28rem;
  position: relative;
  top: 5px;
  color: #787878;
}
.setUpT span:nth-of-type(2) img {
  width: 0.2rem;
  position: relative;
  top: 3px;
}

.setUpC {
  color: #f68b1b;
  display: flex;
  justify-content: space-between;
}
.setUpC img {
  width: 16px;
  position: relative;
  top: 3px;
  margin-right: 8px;
  margin-left: 0.2rem;
}
.setUpC span:nth-last-of-type(1) {
  font-size: 0.36rem;
  margin-right: 0.2rem;
}
.setUpC span:nth-last-of-type(2) {
  margin-right: 0.6rem;
}

.setUpB {
  padding: 0.2rem;
  text-align: left;
  font-size: 0.24rem;
  color: #787878;
  display: flex;
}
.setUpB span {
  display: flex;
}
.setUpB span:nth-of-type(2) {
  margin-left: 0.4rem;
}
.setUpB span i:nth-of-type(3) {
  margin-left: 0.1rem;
}

.setUpB span:nth-of-type(3) {
  margin-left: 0.4rem;
}
.setUpB span i:nth-of-type(3) {
  margin-left: 0.1rem;
} */
.dianR,
.dianB {
  width: 0.16rem;
  height: 0.16rem;
  display: block;
  border-radius: 50%;
  margin: 0.06rem 0;
  margin-right: 0.1rem;
  margin-left: 0.05rem;
}

.dianL,
.dianB {
  width: 0.16rem;
  height: 0.16rem;
  display: block;
  border-radius: 50%;
  margin: 0.06rem 0;
  margin-right: 0.1rem;
  margin-left: 0.05rem;
}
.dianB {
  background-color: #e94255;
}
.dianL {
  background-color: #49c58f;
}

.dianR {
  background-color: #f68b1b;
}
</style>