<template>
  <div class="hello"
       style="padding-top:0.32rem;">
    <div ref="lps"
         class="header">
      <div>
        <img :src="headimgurl"
             alt=""
             style="border-radius:50%">
      </div>
      <div>{{nickname}}</div>
      <div>
        <!-- <img src="/static/image/arrow.png" alt=""> -->
      </div>
    </div>
    <ul ref="lp">
      <!-- <li @click="ziliao">
				<div>个人资料</div>
				<div>
					<img src="../../../static/image/arrow.png" alt="">
				</div>
			</li> -->
      <router-link to="/detail"
                   tag="li">
        <div>订单列表</div>
        <div>
          <img src="../../../static/image/arrow.png"
               alt="">
        </div>
      </router-link>
      <router-link to="/unphone"
                   tag="li">
        <div>帮助与反馈</div>
        <div>
          <img src="../../../static/image/arrow.png"
               alt="">
        </div>
      </router-link>
    </ul>
    <gfooter :Wacth="Wacth"
             :Colors="Colors"></gfooter>
    <!-- <transition name="first-my" mode="out-in"> -->
    <!-- <router-view></router-view> -->
    <!-- </transition> -->
  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
import gfooter from '../index/gfooter.vue'
import { wodeaic } from '../api/api.js'
import { mapState } from 'vuex'
export default {
  name: 'geren',
  data () {
    return {
      ips: '',
      Wacth: 2,
      Colors: 2,
      urll: '',
      nickname: localStorage.getItem('nickname'),
      headimgurl: localStorage.getItem('headimgurl'),
    }
  },
  watch: {
    // '$route.path':function(a,b){
    // 	if(a=='/geren/my'){
    // 		this.$refs.lp.style.display="none";
    // 		this.$refs.lps.style.display="none";
    // 	}
    // 	if(a=='/geren/detail'){
    // 		this.$refs.lp.style.display="none";
    // 		this.$refs.lps.style.display="none";
    // 	}
    // 	if(a=='/geren'){
    // 		this.$refs.lp.style.display="block";
    // 		this.$refs.lps.style.display="flex";
    // 	}
    // }
  },
  computed: {
    ...mapState(['total'])
  },
  methods: {
    ziliao () {
      this.$router.push({ path: '/my' })
      console.log(this.obk)
    }
  },
  components: {
    gfooter
  },
  mounted: function () {
    let that = this;
    // that.$store.dispatch('lista',{openid:'oOKex1Ow5nB_qymzrzj4L7Gm7snU'})
    that.$store.dispatch('lista', {
      openid: localStorage.getItem('openid')
      // openid:'o8Aq-5v-iRRACkOyuOSAk8Fs0sbg'

    })
    // wodeaic({

    //   openid: localStorage.getItem('openid')

    //   , status: 1    }).then(res => {
    //   console.log(res)
    //   if (res.status == 200) {
    //     localStorage.setItem('phone', res.data.result.phone)
    //   }
    // })
  }
}
</script>
<style lang="scss" scoped>
@import '@/style/mixin.scss';
.header {
  @include wh(94%, 2.06rem);
  background: #fff;
  border-radius: 5px;
  margin: 0 auto;
  display: flex;
  margin-bottom: 0.44rem;
}
.header div:nth-child(1) {
  @include wh(1.44rem, 1.44rem);
  border-radius: 50%;
  margin: 0.3rem 0.3rem;
}
.header div:nth-child(2) {
  @include wh(69%, 2.06rem);
  line-height: 2.06rem;
  font-size: 18px;
  font-family: 'PingFang-SC-Regular';
  @include sc(18px, rgb(48, 48, 48));
}
.header div:nth-child(3) {
  @include wh(0.14rem, 0.24rem);
  line-height: 2.06rem;
}
img {
  vertical-align: middle;
  @include wh(100%, 100%);
}
ul {
  width: 94%;
  margin: 0 auto;
  background: #fff;
  border-radius: 5px;
}
li {
  @include wh(100%, 1.14rem);
  line-height: 1.14rem;
  font-family: 'PingFang-SC-Regular';
  @include sc(16px, rgb(48, 48, 48));
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(239, 239, 239);
}
li div:nth-child(1) {
  text-indent: 0.3rem;
}
li div:nth-child(2) {
  width: 20%;
  height: 100%;
  text-align: right;
  margin-right: 0.3rem;
}
.header img {
  @include wh(100%, 100%);
}
img {
  @include wh(0.14rem, 0.24rem);
}

.first-my-enter-active,
.first-my-leave-active {
  transition: all 0.4s;
}
.first-my-enter,
.first-my-leave-active {
  transform: translate3d(2rem, 0, 0);
  opacity: 0;
}
// .hello{background: #F2F2F2;@include wh(100%,100%);}
// .yes{@include wh(100%,3rem);}
// .yes div{@include wh(1.18rem,1.18rem);margin:0 auto;padding-top:1rem;}
// .yes div img{@include wh(100%,100%);}
// .yes p{text-align: center;margin-top:0.21rem;font-family: 'PingFang-SC-Regular';@include sc(18px,rgb(48,48,48))}
// .square{display: flex;width: 80%;margin:0 auto;}
// .square div{text-align: center;@include wh(1.36rem,0.46rem);@include font(16px,0.46rem,'PingFang-SC-Regular');color: #fff;border-radius: 5px;}
// .square div:nth-child(1){background:rgb(246,139,28);}
// .square div:nth-child(2){background:#fff;border:1px solid rgb(246,139,28);color:rgb(246,139,28);margin-left: 0.2rem;}
// .gong{@include sc(18px,#303030);font-family: 'PingFang-SC-Regular';}
// .box .top{@include wh(6.86rem,2.12rem);border-radius: 5px;margin:0 auto;margin-top:0.37rem;background: #FFFFFF;margin-bottom: 0.52rem;}
// .box .top p{text-align: center;@extend .gong;}
// .box .top p:nth-child(1){padding-top:0.48rem;padding-bottom: 0.21rem;}
// .bottom{@include wh(6.86rem,6.42rem);border-radius: 5px;margin:0 auto;background: #FFFFFF;}
// .bottom div:nth-child(1){@include wh(6.86rem,3.89rem);margin-bottom: 0.53rem;}
// .innert{@include wh(2.7rem!important,100%);margin:0 auto;}
// .innert .ptuo{@include wh(2.7rem,1.35rem);background: #D3D3D3;border-radius:1.35rem;border-radius: 50%/50%;margin-top:-0.98rem;}
// .innert p:nth-child(1){@include wh(1.74rem,2.64rem);margin:0 auto;padding-top:1.02rem;}
// .innert p:nth-child(1) img{@include wh(100%,100%);}
// .bottom div:nth-child(2) p{@extend .gong;text-align: center;margin-top:0.1rem;}
</style>
