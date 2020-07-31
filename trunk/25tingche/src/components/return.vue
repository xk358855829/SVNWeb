<template>
  <div class="body">
    <div class="top">
      <img src="../../static/image/zfb.png"
           style="width:100px;height:100px;">
    </div>
    <!--  -->
    <div class="pay">支付成功</div>
    <div class="emty"></div>
    <!-- <div class="price">10.00</div> -->
    <div class="leve">请于尽快离场,超时将加收停车费</div>
    <div class="emtyTwo"></div>
    <div style="font-size:15px;text-align:center;width:80%;height:0.4rem;background:#fb851c;margin:0 auto;border-radius:5px;line-height:0.4rem;color:#fff;"
         @click="go">返回</div>
  </div>

</template>
<script>
export default {
  mounted () {
    let that = this;
    window.addEventListener('popstate', function (e) {
      that.$router.push('/list')
    }, false)
  },
  methods: {
    go () {
      this.$router.push('/list')
    }
  }
}
</script>
<style scoped>
body {
  background: #efefef;
  width: 100%;
  height: 100%;
}
.top {
  width: 100%;
  height: 1.5rem;
  background: #efefef;
  line-height: 1.5rem;
  text-align: center;
}
.top img {
  margin-top: 0.25rem;
}
.pay {
  width: 100%;
  height: 0.24rem;
  line-height: 0.24rem;
  text-align: center;
  font-size: 24px;
  color: #00a0e9;
  background: #efefef;
}
.emty {
  width: 100%;
  height: 28px;
  background: #efefef;
}
.price {
  width: 100%;
  height: 0.28rem;
  line-height: 0.28rem;
  text-align: center;
  color: #000;
  font-weight: bold;
  font-size: 28px;
  background: #efefef;
  font-family: 'Microsoft Yahei';
}
.leve {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  background: #efefef;
  color: #666;
  font-size: 16px;
  font-family: 'Microsoft Yahei';
}
.emtyTwo {
  width: 100%;
  height: 0.2rem;
  background: #efefef;
}
</style>
