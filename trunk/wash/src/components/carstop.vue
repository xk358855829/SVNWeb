<template>
  <div id="finish">
    <div class="finish_bg" :style="{ backgroundImage: 'url(' + img + ')' }"></div>
    <div class="finishinfo">该站点暂停服务</div>
    <div class="finishqrcode">
      <p v-if="isopen==0">该站点处于维护状态，您可以去附近站点服务，给您带来的不便表示歉意。</p>
      <p v-else="">该站点的营业时间为{{siteInfo.beginTime}}~{{siteInfo.endTime}}，其余时间暂停服务，给您带来的不便表示歉意。</p>
      <router-link :to="'/washingList'" tag="span">查看其他站点</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";
import { Indicator, MessageBox } from "mint-ui";
import { code } from '../components/api/api.js'
export default {
  name: "carstop",
  data() {
    return {
      img: './staticxiche/image/carstop.png',
      // img: '../../static/image/carstop.png',
      siteInfo:{},
      isopen:1
    };
  },
  methods: {
    
  },
  mounted: function() {
    
  },
  created(){
    this.siteInfo = JSON.parse(localStorage.getItem("siteInfo"));
    if(this.siteInfo.open==0){
      this.isopen = 0;
    }else{
      this.isopen = 1;
    }
  }
};
</script>

<style scoped="scoped">
#finish {
  height: 100%;
  background: #fff;
  font-family: 'PingFang-SC-Regular';
  padding-top: 1.36rem;
}
.finish_bg{
  width: 81.3%;
  margin: 0 auto;
  height: 3.67rem;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.finishinfo{
  font-size: 0.36rem;
  color: #303030;
  text-align: center;
  padding-top: 0.64rem;
}
.finishqrcode{
  text-align: center;
}
.finishqrcode>P{
  width: 88.8%;
  margin: 0 auto;
  font-size: 0.3rem;
  color: #666666;
  padding: 0.56rem 0;
  line-height: 0.46rem;
}
.finishqrcode>span{
  display: inline-block;
  color: #F68B1C;
  text-align: center;
  font-size: 0.3rem;
  text-decoration: underline;
}
</style>