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
import { huoqus } from '../components/api/api.js'
export default {
  name: 'my',
  data () {
    return {
      ips: '',
      nickname: '',
      country: '',
      sex: '',
      // mes:'11111111',
      // phonenum:localStorage.getItem('phones')
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
    // document.title=this.$route.meta.title;
    this.nickname = localStorage.getItem('nickname')
    this.country = localStorage.getItem('country')
    this.sex = localStorage.getItem('sex')
    this.zl = localStorage.getItem('headimgurl')
    // let data={
    // 	openId:'oOKex1EuMmqul_o-d_fwltu27MTI'
    // }
    // huoqus(data).then(res=>{
    // 	console.log(res)
    // })
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
  // -webkit-transform: translate3d(0, 0, 0);

  // p, span{
  //     font-family: Helvetica Neue,Tahoma,Arial;
  // }
}
.rot {
  @include wh(94%, 0.42rem);
  margin: 0 auto;
  line-height: 0.4rem;
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
  @include wh(100%, 0.59rem);
  border-bottom: 1px solid rgb(239, 239, 239);
  line-height: 0.59rem;
  @include sc(16px, rgb(48, 48, 48));
  font-family: 'PingFang-SC-Regular';
}
ul li .talos {
  display: flex;
  justify-content: space-between;
  @include wh(94%, 0.59rem);
  margin: 0 auto;
}
.imgat {
  @include wh(4%, 100%);
  text-align: right;
  margin-right: 0.1rem;
  margin-top: 0.03rem;
}
.imgat img {
  @include wh(0.07rem, 0.12rem);
}
// .helloA {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: #efefef;
// }
// .gong{@include sc(18px,#303030);font-family: 'PingFang-SC-Regular';}
// .box .top{@include wh(6.86rem,2.12rem);border-radius: 5px;margin:0 auto;margin-top:0.37rem;background: #FFFFFF;margin-bottom: 0.52rem;}
// .box .top p{text-align: center;@extend .gong;}
// .box .top p:nth-child(1){padding-top:0.48rem;padding-bottom: 0.21rem;}
// .bottom{@include wh(6.86rem,6.42rem);border-radius: 5px;margin:0 auto;background: #FFFFFF;}
// .bottom div:nth-child(1){@include wh(6.86rem,3.89rem);margin-bottom: 0.53rem;}
// .innert{@include wh(3.71rem!important,100%);margin:0 auto;}
// .innert .ptuo{@include wh(3.71rem,1.83rem);margin:0 auto;background: #D3D3D3;border-radius:1.35rem;border-radius: 50%/50%;margin-top:-1.3rem;}
// .innert p:nth-child(1){@include wh(2.64rem,2.57rem);margin:0 auto;padding-top:0.8rem;}
// .innert p:nth-child(1) img{@include wh(100%,100%);}
// .bottom div:nth-child(2) p{@extend .gong;text-align: center;margin-top:0.1rem;}
</style>
