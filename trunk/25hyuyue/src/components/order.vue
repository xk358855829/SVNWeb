<template>
  <div style="background:#efefef;">
    <div style="height:0.12rem;background:#efefef;"></div>
    <header>
      订单状态：{{this.arr.state|Chose}}
    </header>
    <!-- <valutide :management='copute'></valutide> -->
    <ul style="margin-bottom:0.2rem;">
      <li class="imp">订单详情</li>
      <li>
        <div>
          <span>清洗模式</span>
          <span>{{this.arr.cname}}</span>
        </div>
      </li>
      <li>
        <div>
          <span>清洗费用</span>
          <span>￥{{this.arr.money}}</span>
        </div>
      </li>
      <li>
        <div>
          <span>预约时间</span>
          <span>{{this.arr.starTime}}</span>
        </div>
      </li>
      <li>
        <div>
          <span>联系人</span>
          <span>{{this.arr.uname}}</span>
        </div>
      </li>
      <li>
        <div>
          <span>联系方式</span>
          <span>{{this.arr.phone}}</span>
        </div>
      </li>
      <li>
        <div>
          <span>车牌号</span>
          <span>{{this.arr.country}}</span>
        </div>
      </li>
      <li>
        <div>
          <span>停车地址</span>
          <span>{{this.arr.address}}</span>
        </div>
      </li>
      <li>
        <div>
          <span>备注</span>
          <span>{{this.arr.memarks}}</span>
        </div>
      </li>
    </ul>
    <!-- <valutide :management="coputeo"></valutide> -->
    <!-- <valutide :management="copute"></valutide> -->
    <!-- <valutide :management="copute1"></valutide> -->
    <!-- <ul>
            <li class="imp">取车信息</li>
            <li>
                <div>s
                    <span>取钥匙地址</span>
                    <span>{{this.arr.keyaddress}}</span>
                </div>
            </li>
            <li>
                <div>
                    <span>取车地址</span>
                    <span>{{this.arr.vehicle}}</span>
                </div>
            </li>
            <li>
                <div>
                    <span>联系店家</span>
                    <span>{{this.arr.business}}</span>
                </div>
            </li>
        </ul> -->
    <ul style="">
      <li class="imp">订单信息</li>
      <li>
        <div>
          <span>订单编号</span>
          <span>{{this.arr.number}}</span>
        </div>
      </li>
      <li>
        <div>
          <span>下单时间</span>
          <span>{{this.arr.orderTime}}</span>
        </div>
      </li>
      <li>
        <div>
          <span>支付方式</span>
          <span>微信支付</span>
        </div>
      </li>
      <li>
        <div>
          <span>洗车公司</span>
          <span>{{this.arr.company}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import valutide from './index/valutide'
import { Chose } from './api/filter.js'
export default {
  name: 'order',
  data () {
    return {
      coputeo: [
        { laber: '订单详情', value: '' },
        { laber: '清洗模式', value: this.$store.state.peopleuser.cname },
        { laber: '清洗费用', value: this.$store.state.peopleuser.money + '元' },
        { laber: '预约时间', value: this.$store.state.peopleuser.starTime },
        { laber: '联系人', value: this.$store.state.peopleuser.uname },
        { laber: '联系方式', value: this.$store.state.peopleuser.phone },
        { laber: '车牌号', value: this.$store.state.peopleuser.country },
        { laber: '停车地址', value: this.$store.state.peopleuser.address },
        { laber: '备注', value: this.$store.state.peopleuser.memarks },
      ],
      copute: [
        { laber: '取车信息', value: '' },
        { laber: '取钥匙地址', value: this.$store.state.peopleuser.keyaddress },
        { laber: '取车地址', value: this.$store.state.peopleuser.vehicle },
        { laber: '联系店家', value: this.$store.state.peopleuser.business },
      ],
      copute1: [
        { laber: '订单信息', value: '' },
        { laber: '订单编号', value: this.$store.state.peopleuser.number },
        { laber: '下单时间', value: this.$store.state.peopleuser.orderTime },
        { laber: '支付方式', value: '微信支付' },
        { laber: '洗车公司', value: this.$store.state.peopleuser.company },
      ],
      arr: Object
    }
  },
  components: {
    valutide
  },
  computed: {
    ...mapState(['peopleuser']),
  },
  mounted () {
    console.log(this.$store.state.peopleuser.money)
    if (this.$store.state.peopleuser.money == 'undefined') {
      this.$store.state.peopleuser = this.arr
    }
    this.arr = JSON.parse(localStorage.getItem('tabs'))
    console.log(this.arr)
    // var arr=this.$route.query.val
    // console.log(this.$route.query.val)
    // this.this.arr.value[1]=arr.cname
    // this.coputeo[0].value[2]=arr.money
    // this.coputeo[0].value[3]=arr.cname
    // this.coputeo[0].value[4]=arr.uname
    // this.coputeo[0].value[5]=arr.phone
    // this.coputeo[0].value[6]=arr.country
    // this.coputeo[0].value[7]=arr.vehicle
    // this.coputeo[0].value[8]=arr.memarkspeopleuser
    // format(this.arr.starTime.time)).slice(5,16)}}--{{(format(this.arr.endTime.time)).slice(5,16)
  },
  methods: {
    format (shijianchuo) {
      //shijianchuo是整数，否则要parseInt转换
      var time = new Date(shijianchuo);
      var y = time.getFullYear();
      var m = time.getMonth() + 1;
      var d = time.getDate();
      var h = time.getHours();
      var mm = time.getMinutes();
      var s = time.getSeconds();
      return y + '-' + this.add0(m) + '-' + this.add0(d) + ' ' + this.add0(h) + ':' + this.add0(mm) + ':' + this.add0(s);
    },
    add0 (m) { return m < 10 ? '0' + m : m },
  }
}
</script>
<style lang="scss" scoped>
@import '@/style/mixin.scss';
header {
  @include wh(94%, 1.24rem);
  margin: 0 auto;
  background: #fff;
  border-radius: 5px;
  line-height: 1.4rem;
  text-indent: 0.3rem;
  @include sc(18px, rgb(246, 139, 28));
  margin: 0.2rem auto;
}
ul {
  width: 94%;
  background: #fff;
  margin: 0 auto;
  border-radius: 5px;
}
ul li {
  @include wh(92%, 1rem);
  margin: 0 auto;
  line-height: 1rem;
  border-bottom: 1px solid rgb(239, 239, 239);
}
ul .imp {
  @include wh(94%, 1.1rem);
  margin: 0 auto;
  line-height: 1.1rem;
  font-size: 0.3rem;
}
ul li div {
  display: flex;
  justify-content: space-between;
}
ul li div span:nth-child(1) {
  @include sc(15px, rgb(48, 48, 48));
}
ul li div span:nth-child(2) {
  @include sc(15px, rgb(104, 104, 104));
}
</style>

