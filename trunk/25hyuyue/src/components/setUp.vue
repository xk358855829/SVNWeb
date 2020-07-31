<template>
  <div id="setUp">
    <ul>
      <router-link to='/bangding'>
        <li>
          <div>手机号码</div>
          <div>
            <div>{{phone}}</div>
            <div><img src="../../static/image/shangjiant.png" /></div>
          </div>
        </li>
      </router-link>
      <a href="https://mp.weixin.qq.com/s?__biz=Mzg3MTIxNDMyMA==&mid=100000004&idx=1&sn=b941faed77f7bdc7119dfd7d1538854f&chksm=4e80bc9b79f7358d1f89714c28492915e1881c9dd8e03510a73ca45460dba9337df8675d6965&scene=0&xtrack=1&ascene=0&devicetype=iOS11.2.5&version=1700042c&nettype=WIFI&abtest_cookie=BQABAAoACwASABMAFQAGACOXHgBWmR4AwJkeANyZHgD2mR4ACpoeAAAA&lang=zh_CN&fontScale=100&pass_ticket=RspuIkRZAbGeIsal0%2FBmTYJOT7%2Fwdp0KZiFjMYJnu1IIzWr0oULUppT1Er4bSn0W&wx_header=1
">
        <li>
          <div>关于我们</div>
          <div>
            <div><img src="../../static/image/shangjiant.png" /></div>
          </div>
        </li>
      </a>
      <a href="https://mp.weixin.qq.com/s/nprmKfhKzQBTdjOMzcB8bA">
        <li>
          <div>用户指南</div>
          <div>
            <div><img src="../../static/image/shangjiant.png" /></div>
          </div>
        </li>
      </a>
      <router-link to='/service'>
        <li>
          <div>服务条款</div>
          <div>
            <div></div>
            <div><img src="../../static/image/shangjiant.png" /></div>
          </div>
        </li>
      </router-link>
      <router-link to='/privacy'>
        <li>
          <div>隐私协议</div>
          <div>
            <div></div>
            <div><img src="../../static/image/shangjiant.png" /></div>
          </div>
        </li>
      </router-link>
      <router-link to=''>
        <li>
          <div>客服电话</div>
          <div>
            <div></div>
            <div>(0351)7659777</div>
          </div>
        </li>
      </router-link>
    </ul>
  </div>

</template>

<script>
import Qs from 'qs'
import axios from 'axios'
export default {
  name: 'homePage',
  data () {
    return {
      phone: '暂未填写',
    }
  },
  mounted: function () {
    this.phone = localStorage.getItem('phone')
  },
  methods: {}
}
</script>

<style scoped="scoped">
#setUp {
  margin: 0.2rem 0;
}
ul {
  background-color: #ffffff;
}
li {
  display: flex;
  background-color: #ffffff;
  height: 1.02rem;
  border-bottom: 1px solid #d8d8d8;
  line-height: 1.02rem;
  justify-content: space-between;
  margin: 0 0.24rem;
  font-size: 0.28rem;
}
li > div:nth-of-type(1) {
  color: #333333;
}
li > div:nth-of-type(2) {
  display: flex;
  color: #787878;
}
img {
  transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  width: 0.6rem;
  margin: 0.21rem 0;
}
/* a:nth-last-of-type(1) li{border: none;} */
</style>