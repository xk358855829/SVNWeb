<template>
  <div class="lazy-load-zone">
    <div>
      <slot name="top"></slot>
    </div>
    <div class="lazy-content" 
      
    >
      <slot>
        <div>
          <img src="../assets/images/order/nomess.png">
          <p class="noword">
            抱歉，这里没有找到数据
            <!-- <i class="icon-5"></i> -->
          </p>
        </div>
      </slot>
    </div>
    <div>
      <slot name="bottom"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'lazy-load',
  data(){
    return{
      loading:false
    }
  },
  mounted () {
     // console.log(this.$slots.default)
    if (!this.$slots.default) {
      // console.log(this.$slots.default)
      this.$slots.default = '没有数据'
    }
  },
  methods: {
    // loadMore () {
    //   console.log(1)
    //   // this.noMore = false;

    //   // this.search()

    // }
  }
}
</script>
<style lang="scss" scoped>
.lazy-load-zone {
  height: 100%;
}
.lazy-content {
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 100%;
  -webkit-overflow-scrolling: touch;
}
.noword {
  margin-top: 40px;
}
</style>
