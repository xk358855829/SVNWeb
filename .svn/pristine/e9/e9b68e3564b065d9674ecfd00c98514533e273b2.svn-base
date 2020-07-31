<template>
  <div class="bosx">
    <div>
      <p style="padding-top:1.3rem;color:#303030;">您已绑定手机：{{meg}}</p>
      <p style="margin-top:0.5rem;color:#303030;">您的订单信息，</p>
      <p style="margin-top:0.24rem;color:#303030;">我们将通过短信的形式发送到您绑定的手机号上</p>
    </div>
    <div class="foot"
         style="margin-top:0.72rem;"
         @click="changenumcar">
      修改绑定手机号
    </div>
  </div>
</template>
<script>
export default {
  name: 'bangding',
  data () {
    return {
      meg: ''
    }
  },
  mounted () {

    this.meg = localStorage.getItem('phone')
  },
  methods: {
    changenumcar () {
      this.$router.push({ path: '/setPhone' })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/style/mixin.scss';
.bosx {
  @include wh(100%, 100%);
  background: #f2f2f2;
}
div {
  text-align: center;
  @include sc(15px, #999);
}
.foot {
  @include wh(74%, 1rem);
  @include sc(15px, #fff);
  margin: 0 auto;
  background: #f68b1c;
  line-height: 1rem;
  border-radius: 5px;
}
</style>


