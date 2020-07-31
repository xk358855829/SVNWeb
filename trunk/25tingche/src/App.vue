<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
import { ADD } from './components/api/api.js'
import { MessageBox } from 'mint-ui';
import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'App',
  methods: {},
  mounted: function () {
    // mui.init({
    //   keyEventBind: {
    //     backbutton: true //关闭back按键监听
    //   }
    // });
    // // //首页返回键处理
    // // //处理逻辑：1秒内，连续两次按返回键，则退出应用；
    // var first = null;
    // mui.back = function () {
    //   //首次按键，提示 再按一次退出应用
    //   if (!first) {
    //     first = new Date().getTime(); //记录第一次按下回退键的时间
    //     MessageBox('再按一次退出应用')
    //     history.go(-1); //回退到上一页面
    //     setTimeout(function () {
    //       //1s中后清除
    //       first = null;
    //     }, 1000);
    //   } else {
    //     if (new Date().getTime() - first < 1000) {
    //       //如果两次按下的时间小于1s，
    //       plus.runtime.quit(); //那么就退出app
    //     }
    //   }
    // };

  },
  methods: {
    // onDeviceReady () {
    //   document.addEventListener("resume", this.onResume(), false);
    // },
    // onResume () {

    // }
    // ...mapActions(['ADDs'])
  }
}
</script>
<style>
#app {
  background: #efefef;
  height: 100%;
}
</style>