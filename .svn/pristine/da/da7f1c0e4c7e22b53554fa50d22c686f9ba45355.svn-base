<template>
  <div id="finish">
    <div class="finish_bg" :style="{ backgroundImage: 'url(' + img + ')' }"></div>
    <div class="finishinfo">机器正在洗车中，请排队等候</div>
    <div class="finishqrcode">
      <p>购卡洗车更划算</p>
      <router-link :to="'/people/vipCardList'" tag="span">随便逛逛</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";
import { Indicator, MessageBox } from "mint-ui";
import { code } from '../components/api/api.js'
export default {
  name: "carwashing",
  data() {
    return {
      img: './staticxiche/image/carwashing.png',
      // img: '../../static/image/carwashing.png',
    };
  },
  methods: {
    
  },
  mounted: function() {
    
  },
};
</script>

<style scoped="scoped">
#finish {
  height: 100%;
  background: #fff;
  font-family: 'PingFang-SC-Regular';
  padding-top: 1.8rem;
}
.finish_bg{
  width: 84.5%;
  margin: 0 auto;
  height: 2.52rem;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.finishinfo{
  font-size: 0.3rem;
  color: #303030;
  text-align: center;
  padding-top: 0.56rem;
}
.finishqrcode{
  text-align: center;
}
.finishqrcode>P{
  font-size: 0.3rem;
  color: #666666;
  padding: 1.03rem 0 0.23rem;
}
.finishqrcode>span{
  display: inline-block;
  width: 3.6rem;
  height: 0.76rem;
  background: #F68B1C;
  border-radius: 0.06rem;
  color: #fff;
  text-align: center;
  line-height: 0.76rem;
  font-size: 0.3rem;
}
</style>