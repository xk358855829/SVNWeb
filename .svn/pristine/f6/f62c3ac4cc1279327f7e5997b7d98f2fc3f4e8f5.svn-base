<template>
  <div class="order-content">
    <lazy-load >
      <div v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <Card v-for="(item,key) in AllOrders"
            :key="key"
            :cardForm="[
            { label: '洗车模式', content: item.washMode },
            { label: '车主姓名', content: item.uname === '' ? '无' : item.uname },
            { label: '取车地址', content: item.carAddress },
            { label: '车牌号码', content: item.carNum },
            { label: '车主手机', content: item.userPhone },
            { label: '预约时间', content: `${item.startTime} - ${item.endTime}` }
          ] "
            :showButton="item.state == '3'?true:false"
            :cardHead="{
              cardId: item.OrderId,
              time: item.startTime
            }"
            :cardState="typeCardState(item.state)"
            @click="handleClickCard" />
      </div>
      <div v-if='arry'>
          <img src="../assets/images/order/nomess.png">
          <p class="noword">
            抱歉，这里没有找到数据
            <!-- <i class="icon-5"></i> -->
          </p>
        </div>
    </lazy-load>
  </div>
</template>
<script>
import LazyLoad from '@/components/LazyLoad'
import Card from '@/components/Card'
import { mapGetters,mapActions,mapState } from 'vuex'
import { typeCardState } from '@/utils/utils'
import {  Indicator, Loadmore, Spinner, InfiniteScroll } from 'mint-ui'
export default {
  data () {
    return {
      allpage:{
        Page:0,
        PageSize:2,
      },
      allMsg:[],
      loading:false,
      arry:false
    }
  },
  components: {
    Card,
    LazyLoad
  },
  computed: {
    ...mapGetters({
      AllOrders: 'getAllOrders'
    }),
    ...mapState({
      count1: 'count1'
    })
  },
  methods: {
    ...mapActions([
      'initAllOrders'
    ]),
    handleClickCard (card) {
      this.$router.push({
        path: '/detail',
        query: { id: card.cardHead.cardId }
      })
    },
    loadMore () {
      this.newpst();
    },
    async newpst () {
      this.allpage.Page++;
      let res = await this.initAllOrders(this.allpage);
      console.log(this.count1);
      if(this.count1>this.allpage.Page*this.allpage.PageSize){
        console.log(999)
        this.loading=false
      }else{
        this.loading=true
      }
      if(this.AllOrders.length!==0){
        this.arry=false
      }else{
        this.arry=true
      }
    },
    typeCardState
  }
}
</script>
