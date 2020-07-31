<template>
  <div style="width:100%;height:100%;background:#fff;">
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="list"><img src="../../static/image/attention1.png" alt=""> <span>箭头变红停</span></div>
        <div class="list"><img src="../../static/image/attention4.png" alt=""> <span>关车窗</span></div>
        <div class="list"><img src="../../static/image/attention3.png" alt=""> <span>关雨刷</span></div>
        <div class="list"><img src="../../static/image/attention8.png" alt=""> <span>收起加装件</span></div>
      </el-col>
      <el-col :span="12">
        <div class="list"><img src="../../static/image/attention5.png" alt=""> <span>挂P/空挡</span></div>
        <div class="list"><img src="../../static/image/attention2.png" alt=""> <span>拉手刹</span></div>
        <div class="list"><img src="../../static/image/attention6.png" alt=""> <span>收后视镜</span></div>
        <div class="list"><img src="../../static/image/attention7.png" alt=""> <span>天线已拆卸</span></div>       
      </el-col>
    </el-row>
    <div v-if="ifclick" class="paytoot" @click="ture">确认无误，启动洗车机</div>
    <!-- <div v-else="" class="paytoot" style="opacity: 0.5;">确认无误，启动洗车机</div> -->
    <!-- <div v-else="" class="paytoot" style="background:#999;">开始洗车</div> -->
    <!-- <div class="main-bottom" v-if="!isdistance" style="color:red;">您与该站点距离过远，请移步到站点50米内，再启动洗车机</div> -->
    <div class="main-bottom">因未按注意事项操作所造成的问题自行承担</div>
    <confirm @cancel="close" v-if="show" :count="count" ref="confirm"></confirm>
  </div>
</template>
<script>
import axios from "axios";
import Qs from "qs";
import { MessageBox, Indicator } from "mint-ui";
import confirm from './confirm'
import { getsiteList } from "./api/api.js";
export default {
  name: "attention",
  data() {
    return {
      count: 5,
      timer: null,
      show:false,
      carNumber:"",
      sname:"",
      carId:"",
      camera:"",
      member:"",
      detailed:{},
      parkIist:[],
      ifclick:true,
      siteInfo:{},    
      onload:'',
      isdistance:false,  
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
          jsApiList: ["getLocation"]
        });
      });
  },
  created(){
    let that = this;
    this.siteInfo = JSON.parse(localStorage.getItem("siteInfo"));
    // MessageBox("提示", "您与该站点距离过远，请移步到站点50米内，再启动洗车机");
    // this.getLocation();
    // this.onlod=setInterval(()=>{
    //   this.getLocation();
    // },3000)
  },
  mounted() {
    // this.detailed = JSON.parse(sessionStorage.getItem('washdetailed'));
    // console.log(this.detailed);
    // this.getwashsiteList();
    // this.carNumber = this.detailed.carNumber;
    // this.member = this.detailed.member;  
    // console.log(this.distanceCheck(localStorage.getItem("mLng"),localStorage.getItem("mLat"),this.siteInfo.longitude,this.siteInfo.latitude))  
  },
  components: {
    confirm
  },
  // beforeDestroy () {
  //   clearInterval(this.onlod)
  // },
  destroyed () {
    window.removeEventListener('popstate', this.backage, false)
  },
  methods: {
    backage (e) {
      MessageBox.confirm('', {
        message: '是否退出启动界面',
        title: '提示',
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        closeOnClickModal: false
      }).then(action => {
        if (action == 'confirm') {
          // window.WeixinJSBridge.call('closeWindow')
          this.$router.push({path:'/washingList'})
        } else {
          window.location.reload()
        }
      })
    },
    close(){
      this.show = false;
    },
    ture() { 
      // this.$router.push({path: '/pay',query: {sid:sessionStorage.getItem("sid")}});
      // this.getLocation();
      let that = this;     
      that.show = true;
      that.$nextTick(() => {
        that.$refs.confirm.goGrdoupRecor();
      })     
    },
    getwashsiteList() {
      let that = this;
      let params = {
        page: 1,
        pageSize: 500,
        userId: "93f07a1decc14ce69ca82e0d6c5d3761",
        dealer: 1561430951496
      };
      getsiteList(params).then(message => {
        console.log(message);
        if (message.data.result.length > 0) {
          for (var i = 0; i < message.data.result.length; i++) {
            let list = {
              sid: message.data.result[i].sid,
              sname: message.data.result[i].sname,
              carid: message.data.result[i].carid,
              camera: message.data.result[i].camera,
            };
            that.parkIist.push(list);
          }
          console.log(that.parkIist);
          for(var i = 0;i < that.parkIist.length;i++){
            if(that.detailed.sid == that.parkIist[i].sid){
              that.sname = that.parkIist[i].sname;
              that.carId = that.parkIist[i].carid;
              that.camera = that.parkIist[i].camera;
            }
          }
        } else {
          that.parkIist = [];
        }
      });
    },
    distanceCheck(lng_a, lat_a, lng_b, lat_b){
      let pk = 180 / 3.14169;
      let a1 = lat_a / pk;
      let a2 = lng_a / pk;
      let b1 = lat_b / pk;
      let b2 = lng_b / pk;
      let t1 = Math.cos(a1) * Math.cos(a2) * Math.cos(b1) * Math.cos(b2);
      let t2 = Math.cos(a1) * Math.sin(a2) * Math.cos(b1) * Math.sin(b2);
      let t3 = Math.sin(a1) * Math.sin(b1);
      let tt = Math.acos(t1 + t2 + t3);
      return Math.floor(6366000 * tt);
    },
    getLocation(){
      let that = this;
      wx.ready(function() {
        wx.getLocation({
          type: "gcj02", // 返回可以用于wx.openLocation的经纬度
          success(res) {
            console.log(res);
            const latitude = res.latitude; //纬度
            const longitude = res.longitude; //经度
            var x_pi = (3.14159265358979324 * 3000.0) / 180.0;
            var baidu_point = { lon: 0, lat: 0 };
            var x = longitude;
            var y = latitude;
            var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
            var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
            that.newlng = z * Math.cos(theta) + 0.0065;
            that.newlat = z * Math.sin(theta) + 0.006;
            localStorage.setItem("mLat", that.newlat);
            localStorage.setItem("mLng", that.newlng); 
            let distance = that.distanceCheck(that.newlng,that.newlat,that.siteInfo.longitude,that.siteInfo.latitude);
            console.log(distance);
            if(distance>1000){
              MessageBox("提示", "您已超出洗车范围，请移步到站点500米内，再启动洗车机");
              // return false;
            }else{    
              that.show = true;
              that.$nextTick(() => {
                that.$refs.confirm.goGrdoupRecor();
              })
            }           
          },
          cancel(res){
            MessageBox("提示", "用户拒绝授权获取地理位置");
          }
        });
      });
    }
  }
};
</script>
<style scoped>
.el-row {
  width: 94%;
  margin: 0 auto;
  margin-left: auto !important;
  margin-right: auto !important;
  padding-top: 0.8rem;
}
.el-col{
  padding-left: 8px !important;
  padding-right: 8px !important;
}
.list {
  margin-bottom: 0.8rem;
  font-size: 0.29rem;
}
.list>img{
  width: 1.5rem;
  height: 1.5rem;
  vertical-align: middle;
}
.list>span{
  vertical-align: middle;
  padding-left: 0.1rem;
}
.paytoot {
  width: 94%;
  margin: 0rem auto 0.2rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-size: 0.34rem;
  border-radius: 8px;
  background: #f68b1b;
  color: #fff;
  cursor: pointer;
}
.main-bottom {
  font-size: 0.2rem;
  color: #afafaf;
  text-align: center;
  margin-bottom: 0.5rem;  
}
</style>


