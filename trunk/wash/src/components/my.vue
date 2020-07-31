<template>
  <div class="helloA rating_page"
       id="my">
    <div>
      <div class="rot">
        <span>基础信息</span>
      </div>
      <ul>
        <li>
          <div class="talos">
            <div>头像</div>
            <div style="width:0.5rem;height:0.5rem;margin-top:0.04rem;">
              <!-- <i></i> -->
              <img :src='zl'
                   alt=""
                   style="width:100%;height:100%;">
            </div>
          </div>
        </li>
        <li>
          <div class="talos">
            <span>昵称</span>
            <span>{{nickname}}</span>
          </div>
        </li>
        <li>
          <div class="talos">
            <span>性别</span>
            <span>{{sex}}</span>
            <!-- <div><img src="/static/image/arrow.png" alt=""></div> -->
          </div>
        </li>
        <li>
          <div class="talos">
            <span>地区</span>
            <span>{{country}}</span>
            <!-- <div><img src="/static/image/arrow.png" alt=""></div> -->
          </div>
        </li>
      </ul>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
export default {
  name: 'my',
  data () {
    return {
      ips: '',
      nickname: '',
      country: '',
      sex: '',
      phonenum: '',
      aiche: '',
      zl: ''
    }
  },
  methods: {

  },
  computed: {

  },
  mounted: function () {
    if(localStorage.getItem("nickname")!=null&&localStorage.getItem("nickname")!=undefined){
      this.nickname = localStorage.getItem("nickname");
    }else{
      this.nickname = "";
    }
    if(localStorage.getItem("country")!=null&&localStorage.getItem("country")!=undefined){
      this.country = localStorage.getItem("country");
    }else{
      this.country = "";
    }
    if(localStorage.getItem("sex")!=null&&localStorage.getItem("sex")!=undefined){
      this.sex = localStorage.getItem("sex");
    }else{
      this.sex = "";
    }
    if(localStorage.getItem("headimgurl")!=null&&localStorage.getItem("headimgurl")!=undefined){
      this.zl = localStorage.getItem("headimgurl");
    }else{
      this.zl = "";
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/style/mixin.scss';
.rating_page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #efefef;
  z-index: 204;
}
.rot {
  @include wh(94%, 0.84rem);
  margin: 0 auto;
  line-height: 0.8rem;
  @include sc(16px, rgb(48, 48, 48));
  font-family: 'PingFang-SC-Regular';
}
ul {
  width: 94%;
  margin: 0 auto;
  background: #fff;
  border-radius: 5px;
}
ul li {
  @include wh(100%, 1.08rem);
  border-bottom: 1px solid rgb(239, 239, 239);
  line-height: 1.08rem;
  @include sc(16px, rgb(48, 48, 48));
  font-family: 'PingFang-SC-Regular';
}
ul li .talos {
  display: flex;
  justify-content: space-between;
  @include wh(94%, 1.08rem);
  margin: 0 auto;
}
.imgat {
  @include wh(4%, 100%);
  text-align: right;
  margin-right: 0.2rem;
  margin-top: 0.06rem;
}
.imgat img {
  @include wh(0.14rem, 0.24rem);
}
</style>
