<template>
  <div class="order">
    <el-tabs v-model="activeName"
             :stretch="true"
             style="height:100%;"
             tab-position="top"
             @tab-click="handletabclick">
      <el-tab-pane label="待洗车辆"
                   name="wait">
        <WaitCar/>
      </el-tab-pane>
      <el-tab-pane label="已完成"
                   name="finished">
        <Finished/>
      </el-tab-pane>
      <el-tab-pane label="存钥匙"
                   name="keySaved">
        <KeySaved/>
      </el-tab-pane>
      <el-tab-pane label="全部订单"
                   name="allOrder">
        <AllOrder/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import WaitCar from '@/views/WaitCar'
import Finished from '@/views/Finished'
import KeySaved from '@/views/KeySaved'
import AllOrder from '@/views/AllOrder'
export default {
  components: {
    WaitCar,
    Finished,
    KeySaved,
    AllOrder
  },
  data () {
    return {
      activeName: 'wait'
    }
  },
  methods: {
    handletabclick (tab) {
      if (tab.name === 'allOrder') {
        let bar = document.getElementsByClassName(
          'el-tabs__active-bar is-top'
        )[0]
        bar.style.left = '-10px'
      }
      if (tab.name === 'wait') {
        let bar = document.getElementsByClassName(
          'el-tabs__active-bar is-top'
        )[0]
        bar.style.left = '10px'
      }
      if (tab.name === 'keySaved') {
        let bar = document.getElementsByClassName(
          'el-tabs__active-bar is-top'
        )[0]
        bar.style.left = '0px'
      }
      if (tab.name === 'finished') {
        let bar = document.getElementsByClassName(
          'el-tabs__active-bar is-top'
        )[0]
        bar.style.left = '0px'
      }
    }
  }
}
</script>
<style lang="scss">
@import '../static/css/mixins';
.order {
  height: calc(100% - 4rem);
}
.el-tabs__header {
  height: 3rem;
  padding: 1rem 2rem;
  background: white;
}
.el-tabs__item {
  color: $unclick-color;
  padding: 0;
}
.el-tabs__item.is-active {
  color: $click-color;
}
// .el-tabs__nav-wrap::after {
//   background-color: white;
// }
// .el-tabs__active-bar {
//   background-color: $click-color;
// }
.el-tabs__content {
  height: calc(100% - 4rem);
}
.el-tab-pane {
  height: 100%;
}
.el-tabs__active-bar {
  left: 10px;
}
</style>
