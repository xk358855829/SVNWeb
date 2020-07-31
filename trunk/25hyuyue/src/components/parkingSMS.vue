<template>
  <div id="parkingLot"
       style="background:#efefef;padding: 0.1rem 0">
    <!-- <sousu @serarch="cardnum"
           @chose="choselist"></sousu> -->
    <div style="-webkit-overflow-scrolling: touch;
	overflow-scrolling: touch;
	overflow-y: scroll;
">
      <ul class="newul"
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="moreLoading"
          infinite-scroll-distance="10">
        <li class="newcar"
            v-for="(lis,index) in list"
            :key="index">
          <div class="newcardiv">
            <div class="imgdiv">
              <img v-lazy="require('../../static/image/th.jpg')"
                   @click="select(lis)">
            </div>
            <div class="pdivl">
              <p style="font-size:0.3rem;font-weight: bold;margin-top:10px">{{lis.parkingName}}</p>
              <p>{{lis.price}}元/{{lis.priceUnit?lis.priceUnit:'小时'}}</p>
              <p v-if="">车位总量：{{lis.carportcount}}</p>
              <p v-if="">可约总量：{{lis.ontimecount}}</p>
              <p v-if="">可约剩余：{{lis.count}}</p>
            </div>
            <div class="pdiv"
                 style="width:30%;margin-top:0.4rem;text-align: right;margin-right: 0.2rem">
              <p>{{(lis.km).toFixed(1)}}km</p>
              <p>可预约时间</p>
              <p>{{lis.beginTime}}-{{lis.endTime}}</p>
            </div>
          </div>
          <p style="margin-left:0.2rem;width: 60%;overflow: hidden;height: 15px;text-overflow: ellipsis; -o-text-overflow: ellipsis;white-space:nowrap;">{{lis.parkingAddress}}
          </p>
          <div class="bottomDiv" style="justify-content:flex-end;">
            <!-- <div class="saveMade"
                 @click="openVip(lis)">包月</div> -->
            <div class="savelink"
                 @click="select(lis)">预约</div>
          </div>
        </li>
        <li class="more_loading"
            v-show="!queryLoading">
          <mt-spinner type="snake"
                      color="#00ccff"
                      :size="20"
                      style="margin-left:0.8rem"
                      v-show="moreLoading&&!allLoaded"></mt-spinner>
          <span v-show="allLoaded"
                style="text-align:center;">已全部加载</span>
        </li>
      </ul>
    </div>
    <div v-if="parameter == 0&&parameterTwo == 0"
         class="kbBox">
      <img class="kb"
           src="../../static/image/kbym.png" />
      <p>附近暂无停车场</p>
    </div>
    <div style="display: none;"
         id="allmap"></div>
  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
import { Indicator, MessageBox, Spinner } from 'mint-ui'
import sousu from './sousu'
import service from './api/base';
import { mapMutations } from 'vuex'
import { showTime } from './api/api.js'
export default {
  name: 'parkingLot',
  data () {
    return {
      list: [],
      allmapList: [],
      parameter: '',
      parameterTwo: '',
      lista: [],
      cval: '',
      allLoaded: false,
      moreLoading: false,
      queryLoading: false,
      page: 0,
      listold: [],
      getLongitude: "",
      getLatitude: ""
    }
  },
  components: {
    // sousu
  },
  watch: {
    list: {
      handler (a, b) {
        this.list = a
      },
      deep: true,
    }
  },
  computed: {
    
  },
  watch: {
    
  },
  created() {
//     let that = this;
// 　　if(navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//     　　//locationSuccess 获取成功的话
//     　　function(position) {
//           that.getLongitude = position.coords.longitude;  //position就是我们通过api获取的信息，而我们想获取的经纬度就在coords下，随后将经纬度分别赋值给外部data设定好的变量
//           that.getLatitude = position.coords.latitude;    //记住如果这里直接写this可能会导致找不到外部的变量而报错，所以提前设置一下this的指向
//           // 　　alert(that.getLatitude)　　　　　　　　　　　　　　 //弹出经度测试
//           localStorage.setItem('dLng', that.getLongitude)
//           localStorage.setItem('dLat', that.getLatitude)
//           localStorage.setItem('mLat', localStorage.getItem('dLat'))
//           localStorage.setItem('mLng', localStorage.getItem('dLng'))
//     　　},
//     　　//locationError  获取失败的话
//     　　function(error) {
//     　　　　var errorType = ['您拒绝共享位置信息', '获取不到位置信息', '获取位置信息超时'];
//     　　　　alert(errorType[error.code - 1]);
//     　　}
//       );
// 　　}
    // let url = "http://cloud.parkingmore.cn/indexyuyue.html#/parkingSMS?longitude=130&latitude=30";
    let url = window.location.href;
    let location = url.split("?")[1];
    let getLongitude = (location.split("&")[0]).split("=")[1];
    let getLatitude = (location.split("&")[1]).split("=")[1];
    localStorage.setItem('dLng', getLongitude)
    localStorage.setItem('dLat', getLatitude)
    localStorage.setItem('mLat', localStorage.getItem('dLat'))
    localStorage.setItem('mLng', localStorage.getItem('dLng'))
  },
  mounted: function () {
    
  },
  methods: {
    ...mapMutations(['gatherparkmeg']),
    loadMore () {
      console.log(1)
      if (this.allLoaded) {
        this.moreLoading = true;
        return;
      }
      if (this.queryLoading) {
        return;
      }
      this.moreLoading = !this.queryLoading;
      // Indicator.open('加载中...');
      this.page++
      this.$http({
        method: 'post',
        url: this.httpUrl +
          'app/reserve/parkingloglistz',
        // 'parkinglot/parkingloglist',
        data: Qs.stringify({
          longitude: localStorage.getItem('mLng'),
          latitude: localStorage.getItem('mLat'),
          // longitude: 120,
          // latitude: 30,
          page: this.page,
          pageSize: 100,
          parkingName: "山姆士超市学府街店"
        })
      }).then(message => {
        // Indicator.close();
        console.log(message);
        if (localStorage.getItem('openid') == 'o8Aq-5v-iRRACkOyuOSAk8Fs0sbg' || localStorage.getItem('openid') == 'o8Aq-5scVD4vnGs5fzj54wiLHz8Q') {
            message.data.result.ParkingLotDirectionList.forEach((a, b) => {
              if (a.id == 128) {
                message.data.result.splice(b, 3)
              }
            })
          }
          console.log(message);
          if (message.data.resCode == "200") {
            this.list = message.data.result.ParkingLotDirectionList;
            this.allLoaded = true;
            this.parameter = 1;
            this.moreLoading = this.allLoaded;
          }else{
            this.list = []
            this.parameter = 0
            this.parameterTwo = 0
            this.queryLoading = true
          }
      })

    },
    openVip (lis) {
      console.log(lis);
      window.location.href = "http://cloud.parkingmore.cn/mp/total/indextingche.html?1562930068936#/people/vip?id=" + lis.id + ""
    },
    select (lis) {
      var subscribe = showTime().substring(11, 13)
      if (subscribe.substring(0, 1) == 0) {
        subscribe = subscribe.substring(1, 2)
      } else {
        subscribe = subscribe.substring(0, 2)
      }
      var residue = lis.beginTime.substring(0, 2)
      if (residue.substring(0, 1) == 0) {
        residue = residue.substring(1, 2)
      } else {
        residue = residue.substring(0, 2)
      }
      var endold = lis.endTime.substring(0, 2)
      if (endold.substring(0, 1) == 0) {
        endold = endold.substring(1, 2)
      } else {
        endold = endold.substring(0, 2)
      }
      console.log(subscribe)
      console.log(residue)
      console.log(endold)
      if (lis.count == '0') {
        MessageBox('提示', '该停车场暂无可预约车位')
        return false;
      }
      if (parseInt(residue) > parseInt(subscribe) || parseInt(subscribe) > parseInt(endold)) {
        MessageBox('提示', '该停车场预约时间未到')
        return false;
      }
      localStorage.setItem('tLng', lis.longitude),
      localStorage.setItem('tLat', lis.latitude)
      this.gatherparkmeg({
        id: lis.id,
        price: lis.price,
        name: lis.parkingName,
        km: lis.km,
        totalNumber: lis.carportcount,
        count: lis.count,
        remaining: lis.ontimecount,
        timeout: lis.timeOut,
        freeTime: lis.freeTime,
        priceUnit: lis.priceUnit,
      })
      this.$router.push({ path: '/parkingAppointment', query: {
          'id': lis.id,
          'price': lis.price,
          'name': lis.parkingName,
          'km': lis.km,
          'totalNumber': lis.carportcount,
          'count': lis.count,
          'remaining': lis.ontimecount,
          "priceUnit": lis.priceUnit,
          timeout: lis.timeOut
      } })
    },   
  }
}
</script>

<style scoped="scoped" lang="scss">
@import '../style/mixin.scss';
.newul {
  max-height: 100vh; //与屏幕一样高度
  overflow-y: auto;
  width: 96%;
  margin: 0 auto;
  .newcar {
    background: #fff;
    // border: 1px dashed #c1c1c1;
    position: relative;
    height: 2.8rem;
    margin-bottom: 0.1rem;
    border-radius: 5px;
    p {
      span {
        color: red;
      }
    }
    .newcardiv {
      height: 2.3rem;
      display: flex;
      justify-content: space-between;
    }
    .imgdiv {
      width: 35%;
      height: 1.8rem;
      img {
        width: 1.8rem;
        height: 1.8rem;
        margin: 0.3rem;
      }
    }
    .pdiv {
      p {
        font-size: 0.24rem;
        color: #303030;
        line-height: 0.48rem;
      }
    }
    &:last-child {
      margin-bottom: 0 !important;
    }
  }
}
.pdivl {
  width: 60%;
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
  margin: 0 auto;
  text-align: center;
  font-size: 0.2rem;
}
</style>