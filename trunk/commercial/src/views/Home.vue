<template>
  <div class="home">
    <router-view/>
    <div id="nav">
      <NavButton :to="activeNav.order.url"
                 text="订单"
                 :clickImg="imgSrc.orderSrc.clicked"
                 :unclickImg="imgSrc.orderSrc.unclicked"
                 :active="activeNav.order.active" />
      <!-- <NavButton
        :to="activeNav.key.url"
        text="暂存钥匙"
        :clickImg="imgSrc.keySrc.clicked"
        :unclickImg="imgSrc.keySrc.unclicked"
        :active="activeNav.key.active"
      /> -->
      <!-- <NavButton :to="activeNav.my.url"
                 text="我的"
                 :clickImg="imgSrc.mySrc.clicked"
                 :unclickImg="imgSrc.mySrc.unclicked"
                 :active="activeNav.my.active" /> -->
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import NavButton from '@/components/NavButton'
export default {
  name: 'home',
  components: {
    NavButton
  },
  created () {
    // this.initWaitCarOrders(1)
    // this.initFinishedCarOrders()
    // this.initKeyOrders()
    // this.initAllOrders(1)
    this.initTodayOrderNum()
    this.initWxinfo()
    this.initAllOrderNum()
  },
  methods: {
    ...mapActions([
      'initWaitCarOrders',
      // 'initFinishedCarOrders',
      // 'initKeyOrders',
      // 'initAllOrders',
      'initUserInfo',
      'initWxinfo',
      'initTodayOrderNum',
      'initAllOrderNum'
    ])
  },
  data () {
    return {
      imgSrc: {
        orderSrc: {
          clicked: require('../assets/images/order/orderClicked.png'),
          unclicked: require('../assets/images/order/orderUnclicked.png')
        },
        keySrc: {
          clicked: require('../assets/images/key/keyClicked.png'),
          unclicked: require('../assets/images/key/keyUnclicked.png')
        },
        mySrc: {
          clicked: require('../assets/images/my/myClicked.png'),
          unclicked: require('../assets/images/my/myUnclicked.png')
        }
      },
      activeNav: {
        order: { url: '/order', active: true },
        key: { url: '/key', active: false },
        my: { url: '/my', active: false }
      }
    }
  },
  beforeRouteUpdate (to, from, next) {
    for (let i in this.activeNav) {
      if (this.activeNav[i].url === to.path) {
        this.activeNav[i].active = true
      } else {
        this.activeNav[i].active = false
      }
    }
    next()
  }
}
</script>
<style lang="scss">
.home {
  height: 100%;
}
</style>
