<template>
  <div style="width:100%;height:100%;background:#fff;">
    <!-- <img src="../../static/image/qiantu.png" alt="" style="width: 100%;height: 1.5rem;"> -->
    <!-- <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>-->
    <!-- <div class="con-wrap">
      <div class="out-round"></div>
      <div class="in-round">
        <div class="lt-round"></div>
        <div class="lt-mask"></div>
        <div class="rt-round"></div>
        <div class="rt-mask"></div>
      </div>
    </div> -->
    <div class="loading-center" :style="{backgroundImage: 'url(' + img1 + ')' }">
      <div class="loading-center-absolute">
        <div class="object object_four"></div>
        <div class="object object_three"></div>
        <div class="object object_two"></div>
        <div class="object object_one"></div>
      </div>
    </div>
    <div class="washing">洗车中,请稍后</div>
  </div>
</template>
<script>
import axios from "axios";
import Qs from "qs";
import { MessageBox, Indicator } from "mint-ui";
import {} from "./api/api.js";
export default {
  name: "washing",
  data() {
    return {
      img1: './staticxiche/image/qiantu.png',
    };
  },
  mounted() {},
  components: {},
  methods: {}
};
</script>
<style scoped>
.washing {
  text-align: center;
  font-size: 0.4rem;
  margin: 1.5rem auto;
}
.loading {
  width: 1.2rem;
  height: 0.8rem;
  margin: 0 auto;
  padding-top: 2rem;
}
.loading span {
  display: inline-block;
  width: 0.16rem;
  height: 100%;
  border-radius: 4px;
  background: lightgreen;
  -webkit-animation: load 1s ease infinite;
}
@-webkit-keyframes load {
  0%,
  100% {
    height: 0.8rem;
    background: lightgreen;
  }
  50% {
    height: 1.4rem;
    margin: -0.3rem 0;
    background: lightblue;
  }
}
.loading span:nth-child(2) {
  -webkit-animation-delay: 0.2s;
}
.loading span:nth-child(3) {
  -webkit-animation-delay: 0.4s;
}
.loading span:nth-child(4) {
  -webkit-animation-delay: 0.6s;
}
.loading span:nth-child(5) {
  -webkit-animation-delay: 0.8s;
}
 /*外边框*/
.con-wrap {
  width: 100%;
  height:3rem;
}
/*外圈及其动画*/
.out-round {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin: 2rem auto;
  border: 3px solid #ff298c;
  border-left: 3px solid transparent;
  animation: outRound 1s linear infinite running;
}
@keyframes outRound {
  0% {
    transform: rotate(120deg);
  }
  100% {
    transform: rotate(-240deg);
  }
}
/*内圆*/
.in-round {
  position: relative;
  left: 50%;
  top: -3.8rem;
  transform: translateX(-50%);
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
}
/*左边两个半圆*/
.lt-round,
.lt-mask {
  position: absolute;
  width: 0.7rem;
  height: 1.4rem;
  border-radius: 0.7rem 0 0 0.7rem;
  transform-origin: right center;
}
.lt-round {
  z-index: 3;
  background-color: #ff298c;
  animation: ltRound 2s linear infinite running;
}
.lt-mask {
  z-index: 2;
  background-color: #fca2ca;
  animation: ltMask 2s linear infinite running;
}
/*右边两个半圆*/
.rt-round,
.rt-mask {
  position: absolute;
  left: 50%;
  width: 0.7rem;
  height: 1.4rem;
  border-radius: 0 0.7rem 0.7rem 0;
  transform-origin: left center;
}
.rt-round {
  z-index: 1;
  background-color: #ff298c;
  animation: rtRound 2s linear infinite running;
}
.rt-mask {
  background-color: #fca2ca;
}
@keyframes ltRound {
  0% {
    transform: rotate(360deg);
  }
  24.9% {
    z-index: 3;
  }
  25% {
    z-index: 1;
    transform: rotate(180deg);
  }
  50% {
    transform: rotate(0deg);
  }
  74.9% {
    z-index: 1;
  }
  75%,
  100% {
    z-index: 3;
  }
}
@keyframes rtRound {
  0%,
  24.9% {
    z-index: 1;
  }
  25% {
    z-index: -3;
  }
  74.9% {
    z-index: -3;
  }
  75%,
  100% {
    z-index: 1;
  }
}
@keyframes ltMask {
  0%,
  25%,
  50% {
    transform: rotate(360deg);
  }
  75% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.loading-center{
  width: 100%;
  height: 5rem;
  position: relative;
  /* background: #000; */
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100% 100%;
}
.loading-center-absolute{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5rem;
  height: 5rem;
  margin-top: -2.5rem;
  margin-left: -2.5rem;
  transform: rotate(-135deg);
}
.object{
  border-radius: 50%;
  position: absolute;
  border-top: 5px solid #fff;
  border-bottom: 5px solid transparent;
  border-left: 5px solid #fff;
  border-right: 5px solid transparent; 
  animation: animate 2s infinite;
}
.object_four{
  left: 1.3rem;
  top: 1.3rem;
  width: 2.4rem;
  height: 2.4rem;
  animation-delay: 0.6s;
}
.object_three{
  left: 1.5rem;
  top: 1.5rem;
  width: 2rem;
  height: 2rem;
  animation-delay: 0.4s;
}
.object_two{
  left: 1.7rem;
  top: 1.7rem;
  width: 1.6rem;
  height: 1.6rem;
  animation-delay: 0.2s;
}
.object_one{
  left: 1.9rem;
  top: 1.9rem;
  width: 1.2rem;
  height: 1.2rem;
}
@keyframes animate {
  50% {
    transform: rotate(360deg) scale(0.8);
  }
}
</style>


