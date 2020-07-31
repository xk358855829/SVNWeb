<template>
  <div class="order-content">
    <lazy-load>
      <div v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <Card v-for="(item,key) in keyOrders"
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
            :showName='1'
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
import {  Indicator, Loadmore, Spinner, InfiniteScroll } from 'mint-ui'
import { mapGetters,mapActions,mapState} from 'vuex'
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
      keyOrders: 'getKeyOrders'
    }),
    ...mapState({
      count2: 'count2'
    })
  },
  methods: {
    handleClickCard (card) {
      console.log(card)
      this.$router.push({
        path: '/detail',
        query: { id: card.cardHead.cardId }
      })
    },
    ...mapActions([
      'initKeyOrders'
    ]),
    loadMore () {
      this.newpst();
       // this.initKeyOrders(this.Page);
       // setTimeout(() => {
       //  console.log(this.keyOrders.length);
       //     if(this.keyOrders.length!==0){
       //      this.arry=false
       //     }else{
       //      this.arry=true
       //     }
       //  }, 6000)
    },
    async newpst () {
      this.allpage.Page++;
      let res = await this.initKeyOrders(this.allpage);
      if(this.count2>this.allpage.Page*this.allpage.PageSize){
        console.log(999)
        this.loading=false
      }else{
        this.loading=true
      }
      if(this.keyOrders.length!==0){
        this.arry=false
      }else{
        this.arry=true
      }
    },
    typeCardState
  }
}
</script>
