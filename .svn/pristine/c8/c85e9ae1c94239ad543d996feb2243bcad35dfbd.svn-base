<template>
  <div style="background:#efefef;
  height:100%;
	overflow-y: scroll;" class="rating_page">
    <section style>
      <ul style>
        <li v-for="item in List" class="listli" :key="item.id">
          <div class="firs">
            <div style="color:#999">车牌号</div>
          </div>
          <div style="width:93%;margin:0 auto;margin-top:0.2rem;margin-bottom:0.2rem;">
            <p style="font-size:16px">{{item.license}}</p>
          </div>
          <div style="width:93%;margin:0 auto;margin-bottom:0.2rem;">
            <p style="color:#999">时间</p>
          </div>
          <div class="firs bottomfir">
            <p style="font-size:16px">{{fmtDate(item.date.time)}}</p>
          </div>
        </li>
      </ul> 
      <div v-if="show" style="padding:1.4rem 0 1rem;">
        <p style="width:2rem;height:1.8rem;margin:auto;">
          <img src="../../static/image/carr.png"
              style="width:100%;height:100%;"
              alt="">
        </p>
      </div>  
      <div v-if="show" class="paytoot1">启动洗车机</div>   
      <div v-else="" class="paytoot" @click="start">启动洗车机</div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
import Qs from "qs";
import { MessageBox } from "mint-ui";
import { serarchc, delc, bandcard } from "./api/api.js";
export default {
  name:'test',
  data() {
    return {
      List: [],
      show:false
    };
  },
  watch: {},
  mounted() {
    let that = this;
    axios(`${this.washhttpUrl}/parkingCarRecerd/sleletByParkingDistinguish?seriaIno=ffff29410021b67b`).then(res => {
      console.log(res);
      if (res.data.resCode == 0) {
        if(res.data.result.length > 0){
          that.List = res.data.result;
          that.show = false;
        }else{
          that.List = [];
          that.show = true;
        }        
      }else{
        that.List = [];
        MessageBox.alert("获取车牌失败，请稍后重试").then(action => { });
      }
    });
  },
  methods: {
    start(){
      let that = this;
      axios(`${this.washhttpUrl}/parkingCarRecerd/sleletByParkingStartA`).then(res => {
        console.log(res);
        if (res.data.resCode == 0) {
          MessageBox.alert("启动成功").then(action => { });
        }else{
          MessageBox.alert("启动失败，请稍后重试").then(action => { });
        }
      });
    },
    fmtDate(obj) {
      let date = new Date(obj);
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let minute = date.getMinutes();
      let second = date.getSeconds();
      minute = minute < 10 ? "0" + minute : minute;
      second = second < 10 ? "0" + second : second;
      return (
        y + "-" + m + "-" + d + " " + h + ":" + minute +':'+second
      );
    },
  }
};
</script>
<style scoped>
.rating_page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #efefef;
  z-index: 204;
}
.listli {
  height: 2.4rem;
  width: 94%;
  margin: 0 auto;
  border: 1px solid #b4a9a9;
  border-radius: 5px;
  margin-top: 0.6rem;
}
.listli .firs {
  display: flex;
  justify-content: space-between;
  width: 92%;
  margin: 0 auto;
  margin-top: 0.2rem;
}
.listli .bottomfir {
  margin-top: 0rem;
}
.pari {
  width: 1.4rem;
  height: 0.6rem;
  background: #f68b1c;
  line-height: 0.6rem;
  border-radius: 20px;
  text-align: center;
  margin-top: -0.05rem;
  color: #fff;
}
.paytoot {
  width: 94%;
  margin: 0.4rem auto;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-size: 0.34rem;
  border-radius: 8px;
  background: #f68b1b;
  color: #fff;
  cursor: pointer;
}
.paytoot1 {
  width: 94%;
  margin: 0.4rem auto;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-size: 0.34rem;
  border-radius: 8px;
  background: #b4b4b4;
  color: #fff;
  cursor: pointer;
}
</style>


