<template>
  <div>
    <header>
      <img src="../../static/image/card.jpg"
           alt="">
    </header>
    <section>
      <div class="boxtop">
        <div>
        </div>
        <p>
          <span>{{$route.query.carnumber}}</span>
          <img src=""
               alt="">
        </p>
        <p class="pardname">速利停车场</p>
        <p>
          <img src=""
               alt="">
        </p>
        <p class="imgmonth">
          <img src="../../static/image/month.png"
               alt="">
        </p>
        <p class="me">您是本车场月卡用户</p>
        <span class="free">停车免费</span>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'vipcard',
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
@import '../style/mixin.scss';
header {
  padding-bottom: 0.2rem;
  @include wh(100%, 1.3rem);
  img {
    @include wh(100%, 100%);
  }
}
section {
  text-align: center;
  .boxtop {
    @include wh(94%, 2.2rem);
    margin: 0 auto;
    background: #fff;
    border-radius: 2%;
    border: 1px solid #a1d9ff;
    @include sc(0.18rem, black);
    div {
      @include wh(100%, 0.05rem);
      background: #9dd7fd;
    }
    .imgmonth {
      @include wh(0.8rem, 0.5rem);
      margin: 0 auto;
      img {
        @include wh(100%, 100%);
      }
    }
    .pardname {
      line-height: 0.2rem;
      @include sc(0.14rem, #e6e6e8);
      border-bottom: 1px dashed #999;
      padding-bottom: 0.1rem;
    }
    p {
      span {
        line-height: 0.4rem;
      }
    }
    .me,
    .free {
      @include sc(0.18rem, #53535c);
      line-height: 0.35rem;
      font-weight: bold;
    }
  }
}
</style>
