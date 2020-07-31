<template>
  <section>
    <ul>
      <li v-for="item in table">
        <div class="left">
          <div>{{item.cname}}</div>
          <div class="detail"
               v-if="item.cname=='精洗'">内部精洗+外部清洗</div>
          <div class="price">￥{{item.money}}</div>
        </div>
        <div class="right">
          <div @click="subscribe(item)">
            下单预约
          </div>
          <p>已售{{item.sold}}</p>
        </div>
      </li>
    </ul>
    <!-- <ulli :tabDate="table"></ulli> -->
  </section>
</template>
<script>
import { Order } from './api/api.js'
import { mapMutations } from 'vuex'
import { Indicator } from 'mint-ui';
// import ulli from './index/ulli.vue'
export default {
  name: 'homeesection',
  data () {
    return {
      table: [],
      inner: false
    }
  },
  methods: {
    ...mapMutations(['ORDER', 'USER', 'MARK', 'ADDRESS']),
    subscribe (vals) {
      console.log(vals)
      this.ORDER(vals)
      this.USER({
        name: '',
        phone: '',
        carnumber: '',
        birthday: '',
        birthdays: ''
      })

      this.MARK(

      )
      this.ADDRESS(

      )
      console.log(this.mark)
      this.$router.push({ path: '/listPage', query: { priceid: vals.cname, money: vals.money } })
    }
  },
  components: {

  },
  mounted () {
    Indicator.open()
    let data = {
      page: 1,
      pageSize: 10
    }
    Order(data).then(res => {
      Indicator.close()
      if (res.status == 200) {
        this.table = res.data.result
      }
    })
    this.$store.dispatch('defalt', 88)
    console.log(this.$store.state.num)
  }
}
</script>
<style lang="scss" scoped>
@import '@/style/mixin.scss';
@import '@/style/home.scss';
</style>


