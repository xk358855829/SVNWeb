<template>
  <div>
    <MyAvatar :name="wxinfo.nickname"
              :todayOrder="todayOrderNum"
              :orderSum="orderSum"
              :avatar="wxinfo.img" />
    <NavRow :text="nav.text1" />
    <NavRow :text="nav.text2" />
    <NavRow :text="nav.text3" />
  </div>
</template>
<script>
import MyAvatar from '@/components/MyAvatar'
import NavRow from '@/components/NavRow'
import { mapGetters } from 'vuex'
export default {
  components: {
    MyAvatar,
    NavRow
  },
  data () {
    return {
      nav: {
        text1: '公司资料',
        text2: '账户安全',
        text3: '帮助与反馈'
      }
    }
  },
  computed: {
    ...mapGetters({
      wxinfo: 'getWxinfo'
    }),
    todayOrderNum () {
      return this.$store.state.todayOrderNum
    },
    orderSum () {
      return this.$store.state.allOrderNum
    }
  }
}
</script>
