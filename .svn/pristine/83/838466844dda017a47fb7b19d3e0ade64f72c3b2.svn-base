<template>
  <div class="order-content">
     <!-- <mt-loadmore :top-method="loadTop" ref="loadmore" style="margin-top:-1.5rem;"> -->
    <lazy-load>
     <div v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <Card v-for="(item,key) in waitCarOrders"
            :key="key"
            :cardForm="[
            { label: '洗车模式', content: item.washMode },
            { label: '车主姓名', content: item.uname === '' ? '无' : item.uname },
            { label: '取车地址', content: item.carAddress },
            { label: '车牌号码', content: item.carNum },
            { label: '车主手机', content: item.userPhone },
            { label: '预约时间', content: `${item.startTime} - ${item.endTime}` }
          ]"
            :showButton="true"
            :showName='2'
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
    </mt-loadmore>
  </div>
</template>
<script>
import Card from '@/components/Card'
import { Loadmore } from 'mint-ui';
import LazyLoad from '@/components/LazyLoad'
import { mapGetters, mapActions ,mapState} from 'vuex'
import { typeCardState } from '@/utils/utils'
import {  Indicator, Spinner, InfiniteScroll } from 'mint-ui'
import { setTimeout } from 'timers';
export default {
  components: {
    Card,
    LazyLoad
  },
  data () {
    return {
      hascontent: false,
      allpage:{
        Page:0,
        PageSize:2
      },
      // PageSize:10,
      arry:false,
      loading:false
    }
  },
  computed: {
    ...mapGetters({
      waitCarOrders: 'getWaitCarOrders'
    }),
    ...mapState({
      count4: 'count4'
    })
  },
  // created(){
  //   this.initWaitCarOrders(1)
  // },
  methods: {
    ...mapActions(['initWaitCarOrders']),
    loadMore () {
      this.newpst();
    },
    async newpst () {
      this.allpage.Page++;
      let res = await this.initWaitCarOrders(this.allpage);
      console.log(this.count4);
      if(this.count4>this.allpage.Page*this.allpage.PageSize){
        console.log(999)
        this.loading=false
      }else{
        this.loading=true
      }
      if(this.waitCarOrders.length!==0){
        this.arry=false
      }else{
        this.arry=true
      }
    },
    handleClickCard (card) {
      this.$router.push({
        path: '/detail',
        query: {
          id: card.cardHead.cardId
        }
      })
    },
    typeCardState
  }
}
</script>
