 <template>
  <div class="alet_container">
    <section class="tip_text_container">
      <div class="tip_icon">
        <span></span>
        <span></span>
      </div>
      <p class="tip_text">{{zmeg}}</p>
      <div class="confrim"
           @click="closeTip">确认</div>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      timer: null,
      alertText: ''
    }
  },
  props: ['zmeg'],
  mounted () {
    // console.log(this.zmeg)
    // this.alertText=this.zmeg
  },
  methods: {
    closeTip () {
      if (this.zmeg == '绑定成功') {
        this.$router.push('/my')
      }
      this.$emit('closeTip')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/mixin.scss';
@keyframes tipMove {
  0% {
    transform: scale(1);
  }
  35% {
    transform: scale(0.8);
  }
  70% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
.alet_container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  background: rgba(255, 255, 255, 0.1);
}
.tip_text_container {
  position: absolute;
  top: 20%;
  left: 50%;
  margin-left: -1.5rem;
  // margin-top: -6rem;
  // margin-left: -6rem;
  // margin:0 auto;
  // margin-top:1.5rem;
  width: 3rem;
  animation: tipMove 0.4s;
  background-color: rgba(255, 255, 255, 1);
  border: 1px;
  // padding-top: .6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px;
  border-radius: 0.25rem;
  .tip_icon {
    @include wh(0.5rem, 0.5rem);
    border: 0.08rem solid #f8cb86;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    span:nth-of-type(1) {
      @include wh(0.08rem, 0.3rem);
      background-color: #f8cb86;
    }
    span:nth-of-type(2) {
      @include wh(0.1rem, 0.1rem);
      border: 1px;
      border-radius: 50%;
      margin-top: 0.1rem;
      background-color: #f8cb86;
    }
  }
  .tip_text {
    @include sc(0.18rem, #333);
    line-height: 0.4rem;
    text-align: center;
    // margin-top: .8rem;
    padding: 0 0.2rem;
  }
  .confrim {
    @include sc(0.2rem, #fff);
    // font-weight: bold;
    // margin-top: .2rem;
    background-color: #4cd964;
    width: 100%;
    text-align: center;
    line-height: 0.8rem;
    border: 1px;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
}
</style>
