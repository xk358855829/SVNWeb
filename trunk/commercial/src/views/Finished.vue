<template>
  <div class="order-content">
    <lazy-load>
      <div v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
        <Card v-for="(item,key) in finishedCarOrders"
           :key="key" 
           :cardForm="[
            { label: '洗车模式', content: item.washMode },
            { label: '车主姓名', content: item.uname === '' ? '无' : item.uname },
            { label: '取车地址', content: item.carAddress },
            { label: '车牌号码', content: item.carNum },
            { label: '车主手机', content: item.userPhone },
            { label: '预约时间', content: `${item.startTime} - ${item.endTime}` }
          ]"
              :showButton="false"
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
import Card from '@/components/Card'
import LazyLoad from '@/components/LazyLoad'
import { mapGetters ,mapActions,mapState} from 'vuex'
import {  Indicator, Loadmore, Spinner, InfiniteScroll } from 'mint-ui'
import { typeCardState } from '@/utils/utils'
export default {
  data () {
    return {
      allpage:{
        Page:0,
        PageSize:10,
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
      finishedCarOrders: 'getFinishedCarOrders'
    }),
    ...mapState({
      count3: 'count3'
    })
  },
  methods: {
    handleClickCard (card) {
      this.$router.push({ path: '/detail', query: { id: card.cardHead.cardId } })
    },
    ...mapActions([
      'initFinishedCarOrders'
    ]),
    loadMore () {
      this.Page++;
      // console.log(this.Page);
       // this.initFinishedCarOrders(this.Page);
       // console.log(this.finishedCarOrders);
       // if(this.finishedCarOrders.length!==0){
       //  this.arry=false
       // }else{
       //  this.arry=true
       // }
       this.newpst();
    },
    async newpst () {
      this.allpage.Page++;
      let res = await this.initFinishedCarOrders(this.allpage);
      if(this.count3>this.allpage.Page*this.allpage.PageSize){
        this.loading=false
      }else{
        this.loading=true
      }
      if(this.finishedCarOrders.length!==0){
        this.arry=false
      }else{
        this.arry=true
      }
    },
    typeCardState
  }
}
</script>
