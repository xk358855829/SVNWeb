<template>
  <div class="my-avatar">
    <div class="avatar">
      <img :src="img">
    </div>
    <p>{{ nickname }}</p>
    <div class="order-Statistics">
      <div>
        <p>今日单数</p>
        <p>{{ `${todayOrder}` }}</p>
      </div>
      <div class="block"></div>
      <div>
        <p>总单数</p>
        <p>{{ `${orderSum}` }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyAvatar',
  props: ['name', 'todayOrder', 'orderSum', 'avatar'],
  data () {
    return {
      nickname: localStorage.getItem('nickname'),
      img: localStorage.getItem('headimgurl')
    }
  }
}
</script>
<style lang="scss" scoped>
.avatar {
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  position: relative;
  top: 2rem;
  display: inline-block;
  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
}
.my-avatar {
  width: 100%;
  height: 15rem;
  background: no-repeat url('../assets/images/background/background.png');
  background-origin: content-box;
  background-size: 100% 100%;
  color: rgb(255, 255, 255);
  p {
    position: relative;
    top: 2.5rem;
    font-size: 1rem;
  }
}
.order-Statistics {
  top: 1rem;
  position: relative;
  div {
    display: inline-table;
    vertical-align: middle;
    &.block {
      width: 20%;
    }
    & > p {
      margin-bottom: 0.8rem;
    }
  }
}
</style>
