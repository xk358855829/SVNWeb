<template>
  <div class="box">
    <header>
      <div>
        <img src="../../../static/image/logo.png"
             alt="">
      </div>
    </header>
    <homesection></homesection>
    <gfooter @ab="abg"
             :Wacth="Wacth"
             :Colors="Colors"></gfooter>
  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
import homesection from '../homesection.vue'
import gfooter from '../index/gfooter.vue'
export default {
  name: 'home',
  // inject: ['reload'],
  data () {
    return {
      Wacth: 1,
      Colors: 1
    }
  },
  methods: {
    bexist () {
      this.$router.push({ path: '/listPage' })
    },
    abg (val) {
      console.log(val)
    }
  },
  mounted: function () {

  },
  components: {
    homesection,
    gfooter
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/mixin.scss';
.box {
  @include wh(100%, 100%);
  background: #f2f2f2;
}
header div {
  @include wh(6.86rem, 3.6rem);
  margin: 0 auto;
  margin-bottom: 0.44rem;
  padding-top: 0.32rem;
}
header div img {
  @include wh(100%, 100%);
}
// .box .title{@include wh(100%,6.56rem);padding-top:3.56rem;}
// .title .longt,.longb{@include wh(3.88rem,1.73rem);background: #00A0E9;border-radius: 10px;margin:0 auto;position: relative;}
// .cerror{@include sc(30px,#fff);@include font(30px,1.73rem,'PingFang-SC-Regul');}
// .square{@include wh(2.4rem,2.4rem);border-radius:1.2rem;border:5px solid #00A0E9;position: absolute;bottom: 0;z-index: 5;background: #fff;}
// .title .longt{margin-bottom: 1.82rem;}
// .title .longb p{@extend .cerror;text-align: left;margin-left: 0.8rem;}
// .title .longt p{@extend .cerror;text-align: right;margin-right: 0.77rem;}
// .title .longt div{@extend .square;left:-1.2rem;}
// .title .longb div{@extend .square;right:-1.2rem;}
// i{@include wh(1.15rem,1.08rem);display: inline-block;margin:0.66rem 62rem 0.66rem 0.66rem;}
// i img{@include wh(100%,100%);}
// .quickmark{margin:0 auto;@include wh(0.96rem,0.96rem);}
</style>
