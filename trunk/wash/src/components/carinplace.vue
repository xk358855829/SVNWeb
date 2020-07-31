<template>
  <div id="order" v-if="showInfo">
    <div class="orders" v-if="order.open==1&&iswash==true">
      <p>已停车到位</p>
      <p style="font-size:0.26rem;padding-top:0.24rem;">快去洗你的爱车吧！</p>
      <div class="orders_bg">
        <span class="signimg">
          <img src="../../static/image/carinplace3.png" alt="">
          <span>按指示灯行驶</span>
        </span>
        <img class="car" src="../../static/image/carinplace2.png" alt="">
        <span class="signlabel">请将车停在黄线内</span>
      </div>
    </div>
    <div class="orders" v-else-if="order.open==1&&iswash==false">
      <p>未停车到位</p>
      <p style="font-size:0.26rem;padding-top:0.24rem;">请根据指示灯行驶到指定位置</p>
      <div class="orders_bg">
        <span class="signimg">
          <img src="../../static/image/carinplace1.png" alt="">
          <span>按指示灯行驶</span>
        </span>
        <img class="car" src="../../static/image/carinplace2.png" alt="">
        <span class="signlabel">请将车停在黄线内</span>
      </div>
    </div>
    <div class="setUp">      
      <div v-if="order.open==1&&iswash==true" @click="washcar">停车确认完毕</div>
      <div v-else-if="order.open==1&&iswash==false" style="opacity:0.5;">停车确认中…</div>
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
      onload:'',
      isvipPrice:0,
      iswhichnext:0,
    };
  },
  methods: {
    washcar() {
      sessionStorage.setItem("iscarshop",this.order.isshop);
      sessionStorage.setItem("sname",this.order.sname);
      sessionStorage.setItem("sid",this.order.sid);   
      sessionStorage.setItem("begintime",this.order.beginTime);
      sessionStorage.setItem("endtime",this.order.endTime);   
      sessionStorage.setItem("isvipPrice",this.isvipPrice);
      // this.$router.push({path: '/attention'});     
      if(this.$route.query.status){
        this.$router.push({path: '/attention'});
      } else if(this.order.isshop==1){
        this.$router.push({path: '/4Spay',query: {sid:this.order.sid}});
      } else{
        this.$router.push({path: '/pay',query: {sid:this.order.sid}});
      }     
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
          if(res.data.result.succ==1&&res.data.result.run==0){
            that.iswash = true; 
            if(that.iswhichnext==1){
              this.$router.replace({ path: "/attention" });
            }    
            // clearInterval(this.onlod);            
          }else if(res.data.result.succ==2&&res.data.result.run==1){
            that.iswash = true;     
            if(that.iswhichnext==2){
              this.$router.replace({ path: "/detailed" });
            }else if(that.iswhichnext==0){
              this.$router.replace({ path: "/carwashing" });
            }
            // clearInterval(this.onlod);
          }else{
            that.iswash = false; 
          }                           
        }else{
          that.iswash = false;
        }        
      });
    },
    insidePrice(){
      let that = this;
      axios({
        method: "post",
        url: `${this.washurl}/bankEmp/checkTelIsInsideVIP`,
        data: Qs.stringify({tel:localStorage.getItem("phone")?localStorage.getItem('phone'):localStorage.getItem("tel")})
      }).then(res => {
        console.log(res);
        if(res.data.code == 0){
          that.isvipPrice = 1;
        } else{
          that.isvipPrice = 0;
        }                
      });
    },
    isMyRunOrder(){
      let that = this;
      axios({
        method: "post",
        url: `${this.washhttpUrl}/parkingCarRecerd/selectByPhone`,
        data: Qs.stringify({
          sid:this.$route.query.sid,
          phone:localStorage.getItem("phone")?localStorage.getItem('phone'):localStorage.getItem("tel")
        })
      }).then(res => {
        console.log(res);
        if(res.data.resCode == 0){
          if(res.data.result.washcarStatus==1){
            that.iswhichnext = 1;
            sessionStorage.setItem("washdetailed",JSON.stringify(res.data.result));
            // this.$router.replace({ path: "/attention" });
          }else if(res.data.result.washcarStatus==2){
            that.iswhichnext = 2;
            sessionStorage.setItem("washdetailed",JSON.stringify(res.data.result));
            // this.$router.replace({ path: "/detailed" });
          }else if(res.data.result.washcarStatus==0){
            that.iswhichnext = 0;
            // this.$router.replace({ path: "/carwashing" });
          }
        } else{
          that.iswhichnext = 0;
          // this.$router.replace({ path: "/carwashing" });
        }              
      });
    }
  },
  mounted: function() {
    
  },
  created(){
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
    let that = this;
    code({sid:this.$route.query.sid}).then(res => {
      console.log(res);
      Indicator.close();
      that.showInfo = true;
      if (res.data.resCode == 0) {
        that.order = res.data.result;
        localStorage.setItem("siteInfo",JSON.stringify(res.data.result));
        if(that.$route.query.km){
          that.order.km = parseFloat(that.$route.query.km).toFixed(1);
        }
        if(that.order.open==0){
          that.$router.replace({ path: "/carstop" });
        }   
        let now = new Date(); 
        let hour = now.getHours();
        let minute = now.getMinutes();
        let begintime = that.order.beginTime.split(":");
        let endtime = that.order.endTime.split(":");
        if(hour < begintime[0] || hour > endtime[0]){
          that.$router.replace({ path: "/carstop" });
        }else if(hour == begintime[0] && minute < begintime[1]){
          that.$router.replace({ path: "/carstop" });
        }else if(hour == endtime[0] && minute > endtime[1]){
          that.$router.replace({ path: "/carstop" });
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
    this.insidePrice();
    // 判断车是否停到位，到位可下单，不到位不可下单
    this.isMyRunOrder();
    this.loadcar();
    this.onload=setInterval(()=>{
      this.loadcar();
    },3000)  
  },
  beforeDestroy () {
    clearInterval(this.onload)
  },
};
</script>

<style scoped="scoped">
#order {
  height: 100%;
  background: #fff;
  font-family: 'PingFang-SC-Regular';
}
.orders{
  margin: 0 auto;
  text-align: center;
  padding-top: 0.96rem;
}
.orders>p{
  font-size: 0.4rem;
  color: #666666;
}
.orders>p:first-of-type{
  color: #303030;
}
.orders_bg {  
  margin: 0.2rem auto 0;
  padding: 0.24rem 0 0;
  position: relative;
}
.orders_bg>p{
  padding-bottom: 10px;
}
.signimg{
  display: inline-block;
  width: 2rem;
  text-align: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-3.65rem);
}
.signimg>img{
  width: 1.05rem;
  height: 1.54rem;
  margin-bottom: 0.24rem; 
}
.signimg>span{
  display: inline-block;
  width: 2rem;
  font-size: 0.3rem;
  color: #303030;
}
.car{
  width: 2.84rem;
  height: 4.38rem;
  vertical-align: top;
  margin-top: 0.56rem;
}
.signlabel{
  display: inline-block;
  color: #303030;
  font-size: 0.3rem;
  background: #F6F6F6;
  width: 1.5rem;
  text-align: left;
  padding: 0.08rem 0.1rem;
  position: absolute;
  bottom: 0.76rem;
  right: 50%;
  transform: translateX(3.4rem);
}
.signlabel:after{
  content: "";
  position: absolute;
  bottom: 0.3rem;
  right: 90%;
  width: 0;
  height: 0;
  border-top: 0.2rem solid #F6F6F6;
  border-left: 0.4rem solid transparent;
  transform: rotate(20deg);
  z-index: -1;
}

.setUp {
  position: fixed;
  bottom: 0px;
  width: 100%;
  background-color: white;
  text-align: center;
}
.setUp div {
  border: 1px solid #F68B1C;
  width: 91.5%;
  margin: 0.32rem auto;
  height: 0.94rem;
  line-height: 0.94rem;
  font-size: 0.4rem;
  background-color: #F68B1C;
  border-radius: 10px;
  color: white;
}
.setUpbottom{
  position: fixed;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid #F68B1C;
  width: 90%;
  margin: 0.2rem auto;
  height: 0.88rem;
  line-height: 0.88rem;
  font-size: 0.34rem;
  background-color: #F68B1C;
  border-radius: 8px;
  color: white;
  text-align: center;
}
</style>