<template>
  <div id="parkingLot" style="background:#efefef;padding-bottom: 0.1rem">
    <sousu @serarch="cardnum" @chose="choselist"></sousu>
    <div
      style="margin-top: 59px;-webkit-overflow-scrolling: touch;overflow-scrolling: touch;overflow-y: scroll;"
    >
      <!-- <div style="background:#fff;padding:0.3rem 0 0rem 0.3rem;font-size:0.3rem;">站点列表</div> -->
      <ul
        class="newul"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="moreLoading"
        infinite-scroll-distance="10"
      >
        <li class="newcar" v-for="(lis,index) in list" :key="index" @click="select(lis)">
          <div class="newcardiv">
            <div class="imgdiv">
              <img v-if="lis.parkingurl" :src="lis.parkingurl" alt />
              <img v-else v-lazy="require('../../static/image/th.jpg')" />
              <!-- <img src="https://tse1-mm.cn.bing.net/th?id=OIP._tzSIqdu9Ua3aGfnGBrzfAHaEK&w=286&h=160&c=7&o=5&pid=1.7" alt="" > -->
            </div>
            <div class="pdivl">
              <div style="margin-top:0.3rem;">
                <p
                  style="font-size:0.3rem;font-weight: bold;width:74%;display:inline-block;"
                >{{lis.sname}}</p>
                <p
                  style="width:23%;display:inline-block;text-align: right;"
                >{{lis.open == 1 ? "正常营业" : "站点维护"}}</p>
              </div>
              <p
                style="width:100%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;word-break: break-all;"
              >{{lis.address}}</p>
              <!-- <p>{{lis.price}}元/小时</p>
              <p v-if="">车位总量：{{lis.carportcount}}</p>
              <p v-if="">可约总量：{{lis.ontimecount}}</p>-->
              <p style="margin-top:0.6rem;">
                <img
                  v-lazy="require('../../static/image/icon/km.png')"
                  style="width:0.3rem;height:0.3rem;vertical-align:middle;"
                />
                <span>{{(lis.km).toFixed(1)}}km</span>
                <img
                  v-lazy="require('../../static/image/icon/time.png')"
                  style="width:0.3rem;height:0.3rem;vertical-align:middle;margin-left:0.5rem;"
                />
                <span>{{lis.beginTime}}-{{lis.endTime}}</span>
              </p>
            </div>
          </div>
        </li>
        <li class="more_loading" v-show="!queryLoading">
          <mt-spinner
            type="snake"
            color="#00ccff"
            :size="20"
            style="margin-left:0.8rem"
            v-show="moreLoading&&!allLoaded"
          ></mt-spinner>
          <span v-show="allLoaded" style="text-align:center;">已全部加载</span>
        </li>
      </ul>
    </div>
    <div v-if="parameter == 0&&parameterTwo == 0" class="kbBox">
      <img class="kb" src="../../static/image/kbym.png" />
      <p>附近暂无洗车站点</p>
    </div>
    <div style="display: none;" id="allmap"></div>
    <hfooter @ab="abg" :Wacth="Wacth" :Colors="Colors"></hfooter>
  </div>
</template>

<script>
import Qs from "qs";
import axios from "axios";
import { Indicator, MessageBox, Spinner } from "mint-ui";
import sousu from "./sousu";
import service from "./api/base";
import hfooter from './hfooter.vue'
export default {
  name: "washingList",
  data() {
    return {
      Wacth: 0,
      Colors: 0,
      list: [],
      allmapList: [],
      parameter: '',
      parameterTwo: '',
      lista: [],
      cval: "",
      allLoaded: false,
      moreLoading: false,
      queryLoading: false,
      page: 0,
      listold: [],
      newlng: "",
      newlat: ""
    };
  },
  components: {
    sousu,
    hfooter
  },
  watch: {
    list: {
      handler(a, b) {
        this.list = a;
      },
      deep: true
    },
    cval: function(a, b) {
      let that = this;
      if (a) {
        that
          .$http({
            method: "post",
            url: that.washhttpUrl + "/parkingSite/selectByparkingSiteLike",
            data: Qs.stringify({
              longitude: localStorage.getItem("mLng"),
              latitude: localStorage.getItem("mLat"),
              // longitude: 120,
              // latitude: 30,
              page: 1,
              pageSize: 1000,
              sname: a
            })
          })
          .then(message => {
            console.log(message);
            // Indicator.close();
            if (message.data.resCode == "0") {
              that.list = message.data.result;
              that.allLoaded = true;
            } else {
            }
          });
      } else {
        that
          .$http({
            method: "post",
            url: that.washhttpUrl + "/parkingSite/selectByparkingSite",
            data: Qs.stringify({
              longitude: localStorage.getItem("mLng"),
              latitude: localStorage.getItem("mLat"),
              // longitude: 120,
              // latitude: 30,
              page: 1,
              pageSize: 1000
            })
          })
          .then(message => {
            console.log(message);
            if (message.data.resCode == "0") {
              that.list = message.data.result;
              that.allLoaded = true;
            } else {
            }
          });
      }
    }
  },
  beforeRouteLeave (to, from, next) {
    console.log(to)
    console.log(from)
    if (to.name == 'detailed' && from.name == 'washingList') {
      next({ path: '/washingList' })
    } else {
      next()
    }
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
  created() {
    
  },
  mounted: function() {
    let that = this;
    this.parameter = 2
    // wx.ready(function() {
    //   wx.getLocation({
    //     type: "gcj02", // 返回可以用于wx.openLocation的经纬度
    //     success(res) {
    //       console.log(res);
    //       const latitude = res.latitude; //纬度
    //       const longitude = res.longitude; //经度
    //       var x_pi = (3.14159265358979324 * 3000.0) / 180.0;
    //       var baidu_point = { lon: 0, lat: 0 };
    //       var x = longitude;
    //       var y = latitude;
    //       var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
    //       var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
    //       that.newlng = z * Math.cos(theta) + 0.0065;
    //       that.newlat = z * Math.sin(theta) + 0.006;
    //       localStorage.setItem("mLat", that.newlat);
    //       localStorage.setItem("mLng", that.newlng);
    //     }
    //   });
    // });
  },
  methods: {
    choselist(val) {
      console.log(val);
    },
    loadMore() {
      if (this.allLoaded) {
        this.moreLoading = true;
        return;
      }
      if (this.queryLoading) {
        return;
      }
      this.moreLoading = !this.queryLoading;
      this.page++;
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
            that
              .$http({
                method: "post",
                url: that.washhttpUrl + "/parkingSite/selectByparkingSite",
                // 'parkinglot/parkingloglist',
                data: Qs.stringify({
                  longitude: localStorage.getItem("mLng"),
                  latitude: localStorage.getItem("mLat"),
                  // longitude: 120,
                  // latitude: 30,
                  page: that.page,
                  pageSize: 5
                })
              })
              .then(message => {
                console.log(message);
                if (message.data.resCode == "0") {
                  that.listold = message.data.result;
                  // that.listold = this.listold.sort((a, b) => {
                  //   return a.km - b.km;
                  // });
                  let a = message.data.result;
                  if (message.data.count!=0) {
                    that.parameter = 1;
                    that.list = that.list.concat(that.listold);
                    console.log(that.list);
                    if (message.data.count < that.page * 5) {
                      that.allLoaded = true;
                    } else {
                      that.moreLoading = true;
                      that.allLoaded = false;
                    }
                    that.moreLoading = that.allLoaded;
                  } else {
                    that.list = [];
                    that.parameter = 0;
                    that.parameterTwo = 0;
                    that.queryLoading = true;
                  }
                } else {

                }
              });
          },
          cancel(res){
            MessageBox("提示", "用户拒绝授权获取地理位置");
          }
        });
      });

      // this.$http({
      //   method: "post",
      //   url: this.washhttpUrl + "/parkingSite/selectByparkingSite",
      //   // 'parkinglot/parkingloglist',
      //   data: Qs.stringify({
      //     longitude: localStorage.getItem("mLng"),
      //     latitude: localStorage.getItem("mLat"),
      //     // longitude: 120,
      //     // latitude: 30,
      //     page: this.page,
      //     pageSize: 5
      //   })
      // }).then(message => {
      //   console.log(message);
      //   if (message.data.resCode == "0") {
      //     that.listold = message.data.result;
      //       // that.listold = this.listold.sort((a, b) => {
      //       //   return a.km - b.km;
      //       // });
      //       let a = message.data.result;
      //       if (a.length) {
      //         that.parameter = 1;
      //         that.list = that.list.concat(that.listold);
      //         console.log(that.list);
      //         if (message.data.count < that.page * 5) {
      //           that.allLoaded = true;
      //         } else {
      //           that.moreLoading = true;
      //           that.allLoaded = false;
      //         }
      //         that.moreLoading = that.allLoaded;
      //       } else {
      //         that.list = [];
      //         that.parameter = 0;
      //         that.parameterTwo = 0;
      //         that.queryLoading = true;
      //       }
      //   } else {
      //   }
      // });
    },
    abg (val) {
      console.log(val)
    },
    cardnum(val) {
      this.cval = val;
    },
    select(lis) {
      this.$router.push({
        path: "/orders",
        query: {
          sid: lis.sid,
          // sname: lis.sname,
          // address: lis.address,
          km: lis.km,
          // longitude: lis.longitude,
          // latitude: lis.latitude,
          // beginTime: lis.beginTime,
          // endTime: lis.endTime,
        }
      });
    },
    // toRad(d) {
    //   return (d * Math.PI) / 180;
    // },
    // getDisance(lat1, lng1, lat2, lng2) {
    //   /*#lat为纬度, lng为经度, 一定不要弄错*/
    //   var dis = 0;
    //   var radLat1 = this.toRad(lat1);
    //   var radLat2 = this.toRad(lat2);
    //   var deltaLat = radLat1 - radLat2;
    //   var deltaLng = this.toRad(lng1) - this.toRad(lng2);
    //   var dis =
    //     2 *
    //     Math.asin(
    //       Math.sqrt(
    //         Math.pow(Math.sin(deltaLat / 2), 2) +
    //           Math.cos(radLat1) *
    //             Math.cos(radLat2) *
    //             Math.pow(Math.sin(deltaLng / 2), 2)
    //       )
    //     );
    //   return dis * 6378137;
    // },
    // space(lat1, lng1, lat2, lng2) {
    //   /*#lat为纬度, lng为经度, 一定不要弄错*/
    //   console.log(lat1, lng1, lat2, lng2)
    //   var radLat1 = lat1 * Math.PI / 180.0;
    //   var radLat2 = lat2 * Math.PI / 180.0;
    //   var a = radLat1 - radLat2;
    //   var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
    //   var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    //   s = s * 6378.137;
    //   s = Math.round(s * 10000) / 10000;
    //   return s  // 单位千米
    // }
  }
};
</script>

<style scoped="scoped" lang="scss">
@import "../style/mixin.scss";
.newul {
  max-height: 100vh; //与屏幕一样高度
  overflow-y: auto;
  margin: 0 auto;
  padding-bottom: 0.98rem;
  .newcar {
    background: #fff;
    position: relative;
    border-bottom: 1px solid rgb(239, 239, 239);
    p {
      span {
        display: inline-block;
      }
    }
    .newcardiv {
      height: 2.4rem;
      display: flex;
      justify-content: start;
    }
    .imgdiv {
      width: 32%;
      height: 2.4rem;
      img {
        width: 1.8rem;
        height: 1.8rem;
        margin: 0.3rem;
      }
    }
    &:last-child {
      margin-bottom: 0 !important;
    }
  }
}
.newul {
  .newcar:last-child {
    border-bottom: none;
  }
}
.pdivl {
  width: 64%;
}
.pdivl p {
  font-size: 0.24rem;
  color: #303030;
  line-height: 0.4rem;
}
.saveMade {
  width: 50px;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  color: #fff;
  font-size: 0.24rem;
  background: #49c58f;
  border-radius: 5px;
  z-index: 99;
}
.bottomDiv {
  width: 120px;
  position: absolute;
  right: 10px;
  bottom: 0.2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.savelink {
  width: 50px;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  color: #fff;
  font-size: 0.24rem;
  background: #f68b1b;
  border-radius: 5px;
}
.title {
  border-bottom: 1px solid $hui;
  display: flex;
  justify-content: space-around;
  font-size: 0.32rem;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
}
.titleZoom {
  height: 1.1rem;
}
.title span {
  border-bottom: 2px solid #ffffff;
  height: 0.88rem;
  line-height: 0.88rem;
  color: #333333;
}
.title .spanActive {
  color: #f68b1b;
  border-bottom: 2px solid #f68b1b;
}
.card {
  position: relative;
  height: 3rem;
}
.card img {
  width: 100%;
  height: 100%;
}
.name {
  display: block;
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 0.44rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  height: 3rem;
  top: 0;
  left: 0;
  line-height: 3rem;
}
.na {
  font-size: 0.32rem;
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
}
.na > span:nth-of-type(2) {
  font-size: 0.24rem;
  color: #787878;
  position: relative;
  bottom: 3px;
}
.na > span img {
  width: 0.16rem;
  margin-right: 5px;
  position: relative;
  top: 2px;
}

.many {
  color: #f68b1b;
  font-size: 0.24rem;
}
.many img {
  width: 0.32rem;
  position: relative;
  top: 3px;
  margin-right: 8px;
  margin-left: 0.2rem;
}
.many span:nth-last-of-type(1) {
  margin-right: 0.6rem;
}

.cot {
  padding: 0.2rem;
  text-align: left;
  font-size: 0.28rem;
  color: #787878;
  display: flex;
}
.cot span {
  display: flex;
}
.cot span:nth-of-type(2) {
  margin-left: 1rem;
}
.cot span i:nth-of-type(3) {
  margin-left: 0.1rem;
}
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
.dianR {
  background-color: #e94255;
}
.dianB {
  background-color: #49c58f;
}

.km {
  margin-left: 0.4rem;
}
.kbBox {
  width: 100%;
  text-align: center;
  color: #787878;
  padding-top: 2rem;
}
.kb {
  width: 30%;
  margin: auto;
}
.kbBox p {
  padding: 0.2rem 0;
}
#ggtcc {
  background-color: #ffffff;
}
#ggtcc li {
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  border-bottom: 1px solid $hui;
  padding: 0.36rem 0;
  margin: 0 0.3rem;
  height: 0.82rem;
}
#ggtcc li div:nth-of-type(1) {
}
#ggtcc li div:nth-of-type(2) {
  width: 100%;
  padding-left: 0.38rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#ggtcc li div:nth-of-type(3) {
}
#ggtcc li .img img {
  height: 0.6rem;
  margin: 0.11rem 0;
}
#ggtcc li .imgs img {
  height: 0.7rem;
  margin: 0.06rem 0;
}
.more_loading {
  width: 17%;
  margin: 0.2rem auto;
  text-align: center;
  font-size: 0.2rem;
}
</style>