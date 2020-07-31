<template>
  <div class="order-detail">
    <FormCard :formState="{
        label: '订单状态',
        content: typeCardState(orderInfo.state).label,
        color: typeCardState(orderInfo.state).type
      }" />
    <FormCard :formList="[
      { label: '订单编号', content: orderInfo.orderId },
      { label: '下单时间', content: orderInfo.starTime },
      { label: '支付方式', content: orderInfo.payType }
    ]"
              :title="'订单信息'" />
    <FormCard :formList="[
        { label: '清洗模式', content: orderInfo.washMode },
        { label: '清洗费用', content: orderInfo.washCost },
        { label: '预约时间', content: orderInfo.starTime },
        { label: '联系人', content: orderInfo.connectUser },
        { label: '联系方式', content: orderInfo.connectPhone},
        { label: '车牌号', content: orderInfo.carId },
        { label: '停车地址', content: orderInfo.carAddress }
      ]"
              :title="'订单详情'" />
  </div>
</template>
<script>
import FormCard from '@/components/FormCard'
import { typeCardState } from '@/utils/utils'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'detail',
  components: {
    FormCard
  },
  methods: {
    ...mapActions(['initOrderInfo']),
    typeCardState
  },
  created () {
    this.initOrderInfo({
      number: this.$route.query.id
    })
  },
  computed: {
    ...mapGetters({
      orderInfo: 'getOrderInfo'
    })
  }
}
</script>
<style lang="scss">
@import '../static/css/mixins';
.order-detail {
  padding: 1.3rem;
  background: $background-color;
}
</style>
