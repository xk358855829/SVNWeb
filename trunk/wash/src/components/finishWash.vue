<template>
  <div id="finish">
    <div class="finish_bg" :style="{ backgroundImage: 'url(' + img + ')' }"></div>
    <div class="finishinfo">恭喜您，洗车完成!</div>
    <div class="finishqrcode" v-if="showqrcode==true">
      <p>(关注公众号，即享1元洗车优惠)</p>
      <img src="../../static/image/finishwashqrcode.png" alt="">
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";
import { Indicator, MessageBox } from "mint-ui";
import { code } from '../components/api/api.js'
export default {
  name: "finish",
  data() {
    return {
      img: './staticxiche/image/finishwash.png',
      // img: '../../static/image/finishwash.png',
      showqrcode: true,
    };
  },
  methods: {
    
  },
  mounted: function() {
    if(localStorage.getItem("nickname")!=null&&localStorage.getItem("nickname")!=undefined){
      this.showqrcode = false;
    }else{
      this.showqrcode = true;
    }
  },
};
</script>

<style scoped="scoped">
#finish {
  height: 100%;
  background: #fff;
  font-family: 'PingFang-SC-Regular';
  padding-top: 1.76rem;
}
.finish_bg{
  width: 100%;
  height: 4.08rem;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.finishinfo{
  font-size: 0.36rem;
  color: #303030;
  text-align: center;
  padding-top: 0.39rem;
}
.finishqrcode{
  text-align: center;
}
.finishqrcode>P{
  font-size: 0.3rem;
  color: #666666;
  padding: 0.54rem 0 0.3rem;
}
.finishqrcode>img{
  width: 2.22rem;
  height: 2.22rem;
}
</style>