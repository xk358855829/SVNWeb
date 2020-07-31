<template>
  <div>
    <div style="height:0.4rem;"></div>
    <div class="title">
      <div style="height:1.2rem">
        <p>官方微信号</p>
        <p style="color:#f68b1c">车口袋：车口袋</p>
      </div>
      <i></i>
      <div style="margin-top:0.1rem;">
        <p>客服联系号码</p>
        <p style="color:#f68b1c">(0351)7659777</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'unphone'
}
</script>
<style scoped>
i {
  height: 1px;
  width: 70%;
  background: #999;
  display: block;
  margin: 0 auto;
}
.title {
  width: 90%;
  margin: 0 auto;
  height: 2.8rem;
  text-align: center;
  -moz-box-shadow: 0px 0px 12px #292929;
  -webkit-box-shadow: 0px 0px 12px #292929;
  box-shadow: 0px 0px 12px #292929;
  font-size: 0.3rem;
  font-family: 'PingFang-SC-Regular';
  padding-top: 0.2rem;
}
.title div {
  height: 1.4rem;
}
.title div p {
  line-height: 0.5rem;
}
</style>
