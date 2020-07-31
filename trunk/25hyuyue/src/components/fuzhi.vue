<template>
  <div style="background:#efefef;">
    <div class="title">
      <p v-for="(item,index) in arr"
         :class="{active:index==num}"
         @click="use(index)"
         :key="item.id">{{item.value}}</p>
    </div>

    <ul class="inner">
      <li v-for="(item,index) in tablesplo"
          style="position: relative;"
          :class="{zonp:item.use_status==-1}">
        <div style="display:flex;">
          <div style="width:30%;height:30%;position:relative;">
            <p style="width:100%;height:100%;"><img src="../../static/image/hong.png"
                   alt=""
                   v-if="'2'==item.useWay&&item.use_status!=-1&&item.use_status!=0"
                   style="width:100%;height:100%;"></p>
            <p style="width:100%;height:100%;"><img src="../../static/image/green.png"
                   alt=""
                   v-if="'1'==item.useWay&&item.use_status!=-1&&item.use_status!=0"
                   style="width:100%;height:100%;"></p>
            <p style="width:100%;height:100%;"><img src="../../static/image/lan.png"
                   alt=""
                   v-if="'3'==item.useWay&&item.use_status!=-1&&item.use_status!=0"
                   style="width:100%;height:100%"></p>
            <p style="width:100%;height:100%;"><img src="../../static/image/huan.png"
                   alt=""
                   v-if="'4'==item.useWay&&item.use_status!=-1&&item.use_status!=0"
                   style="width:100%;height:100%"></p>
            <p style="width:100%;height:100%;"><img src="../../static/image/zg (3).png"
                   alt=""
                   v-if="item.use_status==-1"
                   style="width:100%;height:100%"></p>
            <p style="width:100%;height:100%;"><img src="../../static/image/zg (3).png"
                   alt=""
                   v-if="item.use_status==0"
                   style="width:100%;height:100%"></p>
            <p style="position:absolute;top:28%;left:27%;width:1.1rem;height:1.2rem;"
               class="imgtext">
              <span v-if="!item.freeTime&&!item.percent">￥</span>
              <span v-if="item.freeTime&&!item.percent">m</span>
              <span style="font-size:20px;">{{(item.freeTime?item.freeTime:item.sub)==''?(item.percent)/10:(item.freeTime?item.freeTime:item.sub)}}</span>
              <span v-if="item.percent">折</span>
              <br/>
              <span v-if="item.useWay=='2'"
                    style="font-size:0.12rem;">抵扣停车费{{item.sub}}元</span>
              <span v-if="item.useWay=='1'"
                    style="font-size:0.12rem;">免费时长{{item.freeTime}}分钟</span>
              <span v-if="item.useWay=='3'"
                    style="font-size:0.12rem;">满{{item.full}}元减{{item.sub}}元</span>
              <span v-if="item.useWay=='4'"
                    style="font-size:0.12rem;">折扣{{(item.percent/10)}}折</span>

            </p>
          </div>
          <div style="width:70%;height:30%;margin-top:0.2rem;"
               class="texts">
            <div style="display:flex;">
              <div :class="sstts[(item.useWay)]"
                   v-if="item.use_status==1||item.use_status==2"
                   style="width:1.16rem;height:0.4rem;text-align:center;line-height:0.4rem;border-radius:5px;margin:0.06rem;margin-top:-0.1rem;color:#fff;">{{item.useWay|change}}</div>
              <div v-if="item.use_status==-1"
                   style="width:1.16rem;height:0.4rem;text-align:center;line-height:0.4rem;border-radius:5px;margin:0.06rem;margin-top:-0.1rem;color:#fff;background:#999;">{{item.useWay|change}}</div>
              <div v-if="item.use_status==0"
                   style="width:1.16rem;height:0.4rem;text-align:center;line-height:0.4rem;border-radius:5px;margin:0.06rem;margin-top:-0.1rem;color:#fff;background:#999;">{{item.useWay|change}}</div>
              <div>车口袋电子券</div>
            </div>
            <div v-if="item.issus_obj">仅限{{item.issus_obj}}车牌号码使用</div>

            <div style="display:flex;justify-content: space-between;line-height:0.4rem;position: relative;margin-bottom:0.25rem;">
              <div>{{(item.start_time).slice(0,10)}}-{{(item.end_time).slice(0,10)}}</div>

              <!-- <div :class="sstt[(item.useWay)]" style="margin-right:8px;width:0.58rem;height:0.2rem;border-radius:10px;text-align:center;line-height:0.2rem;" @click="shiyong(item)">立即使用</div> -->
              <div class="square"
                   @click="check(item)"
                   v-if="item.use_status==1||item.use_status==2"></div>
              <div style="position: absolute;right:0.32rem;margin-top:-0.04rem;"
                   v-if="item.remark&&(item.use_status==1||item.use_status==2)">
                <img src="../../static/image/rong.png"
                     alt="">
              </div>
              <div style="position: absolute;width:1rem;height:1rem;top:-0.56rem;right:0"
                   v-if="item.use_status==-1">
                <img src="../../static/image/zg (1).png"
                     alt=""
                     style="width:100%;height:100%;">
              </div>
              <div style="position: absolute;width:1rem;height:1rem;top:-0.56rem;right:0"
                   v-if="item.use_status==0">
                <img src="../../static/image/zg (2).png"
                     alt=""
                     style="width:100%;height:100%;">
              </div>
            </div>
            <div style="margin-top:0.05rem;
                                width: 100%;
                                height: 1px;
                                background-image: linear-gradient(to right, #ccc 0%, #ccc 50%, transparent 50%);
                                background-size: 15px 1px;
                                background-repeat: repeat-x;
                                display: flex;
                                justify-content: space-between
                           "
                 v-if="item.useWay=='2'">
              <span style="height:0.5rem;line-height:0.4rem;font-size:0.24rem;margin-left:0.12rem;color:#6d6d6d">详细信息</span>
              <p style="z-index:89;height:0.3rem;line-height:0.4rem;margin-right:0.2rem;width:0.3rem;"
                 @click.stop="ggg(item.id)"> <img :src="item.use_obj?a:b"
                     alt=""
                     style="vertical-align: middle;width:100%;height:100%;"></p>
              <!-- 抵扣停车费<span>{{item.sub}}</span>元 -->
            </div>
            <div style="margin-top:0.05rem;
                                width: 100%;
                                height: 1px;
                                background-image: linear-gradient(to right, #ccc 0%, #ccc 50%, transparent 50%);
                                background-size: 15px 1px;
                                background-repeat: repeat-x;
                                display: flex;
                                justify-content: space-between
                           "
                 v-if="item.useWay=='1'">
              <span style="margin-top:0.1rem;font-size:0.24rem;margin-left:0.12rem;color:#6d6d6d">详细信息</span>
              <p style="z-index:89;height:0.3rem;line-height:0.4rem;margin-right:0.2rem;width:0.3rem;"
                 @click.stop="ggg(item.id)"> <img :src='item.use_obj?a:b'
                     alt=""
                     style="vertical-align: middle;width:100%;height:100%;"></p>
              <!-- 免费时长<span>{{item.freeTime}}分钟</span> -->
            </div>
            <div style="margin-top:0.05rem;
                                width: 100%;
                                height: 1px;
                                background-image: linear-gradient(to right, #ccc 0%, #ccc 50%, transparent 50%);
                                background-size: 15px 1px;
                                background-repeat: repeat-x;
                                display: flex;
                                justify-content: space-between
                           "
                 v-if="item.useWay=='3'">
              <span style="margin-top:0.1rem;font-size:0.24rem;margin-left:0.12rem;color:#6d6d6d">详细信息</span>
              <p style="z-index:89;height:0.3rem;line-height:0.4rem;margin-right:0.2rem;width:0.3rem;"
                 @click.stop="ggg(item.id)"> <img :src="item.use_obj?a:b"
                     alt=""
                     style="vertical-align: middle;width:100%;height:100%;"></p>
              <!-- 满<span>{{item.full}}元</span>减<span>{{item.sub}}元</span> -->
            </div>
            <div style="margin-top:0.05rem;
                                width: 100%;
                                height: 1px;
                                background-image: linear-gradient(to right, #ccc 0%, #ccc 50%, transparent 50%);
                                background-size: 15px 1px;
                                background-repeat: repeat-x;
                                display: flex;
                                justify-content: space-between
                           "
                 v-if="item.useWay=='4'">
              <span style="margin-top:0.1rem;font-size:0.24rem;margin-left:0.12rem;color:#6d6d6d">详细信息</span>
              <p style="z-index:89;height:0.3rem;line-height:0.4rem;margin-right:0.2rem;width:0.3rem;"
                 @click.stop="ggg(item.id)"> <img :src="item.use_obj?a:b"
                     alt=""
                     style="vertical-align: middle;width:100%;height:100%;"></p>
              <!-- 满<span>{{item.full}}元</span>减<span>{{item.sub}}元</span> -->
            </div>

            <!-- <div v-if="!item.issus_obj"
                 style="height:0.2rem"></div>
            <div v-if="item.useWay=='2'">抵扣停车费
              <span>{{item.sub}}</span>元</div>
            <div v-if="item.useWay=='1'">免费时长
              <span>{{item.freeTime}}分钟</span>
            </div>
            <div v-if="item.useWay=='3'">满
              <span>{{item.full}}元</span>减
              <span>{{item.sub}}元</span>
            </div> -->
          </div>
        </div>
        <div style="background:#efefef;height:0.06rem;width:100%;"></div>
        <div style="height:0.6rem;width:91%;margin:0 auto;line-height:0.6rem;font-size:0.12rem;color:#6d6d6d;"
             v-if="item.use_obj">
          <span v-if="item.useWay=='2'">抵扣停车费{{item.sub}}元</span>
          <span v-if="item.useWay=='1'">免费时长{{item.freeTime}}分钟</span>
          <span v-if="item.useWay=='3'">满{{item.full}}元减{{item.sub}}元</span>
          <span v-if="item.useWay=='4'">折扣{{(item.percent/10)}}折</span>
          <span v-if="item.issus_obj">仅限车牌号码{{item.issus_obj}}使用</span>
        </div>
      </li>
    </ul>
    <div class="iimga"
         v-if="imgl">
      <div style="width:2rem;margin:2rem auto;">
        <img src="../../static/image/atz.png"
             alt=""
             style="width:2.2rem;height:2.26rem;">
      </div>
    </div>
    <!-- <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
            <span v-show="topStatus === 'loading'">Loading...</span>
        </div> -->
  </div>
</template>
<script>
import axios from 'axios';
import Qs from 'qs'
import { Loadmore, Indicator } from 'mint-ui';
import { mapState, mapActions, mapGetters } from 'vuex'
import { ticket } from './api/api.js'
// import foot from '../view/foot'

export default {
  name: 'record',
  data () {
    return {
      arr: [{ value: '未使用', id: 1 }, { value: '已使用', id: 2 }, { value: '已过期', id: 3 }],
      num: '',
      tablesplo: [],
      rong: '',
      remark: false,
      a: require('../../static/image/az (2).png'),
      b: require('../../static/image/az (1).png'),
      sstts: [
        "ss1s",
        "ss2s",
        "ss3s",
        "ss4s",
        "ss5s",
      ],
      sstt: [
        "ss1",
        "ss2",
        "ss3",
        "ss4",
      ],
      row: 1,
      imgl: false,
      // 分页
      page: 1,
      pageSize: 10,
      quanlist: []
    }
  },
  beforeRouteLeave (to, from, next) {
    if (!sessionStorage.getItem('ticknumbar1') || !sessionStorage.getItem('ticknumbar2') || !sessionStorage.getItem('ticknumbar3') || !sessionStorage.getItem('ticknumbar4')) {
    }
    next()
  },
  created () {
    this.$http({
      method: 'post',
      url: this.newhttpUrl + '/TicketInfo/flushOverDue'
    }).then(res => {

    })
    sessionStorage.removeItem('ticknumbar1')
    sessionStorage.removeItem('ticknumbar2')
    sessionStorage.removeItem('ticknumbar3')
    sessionStorage.removeItem('ticknumbar4')

  },
  methods: {
    ...mapActions(['tickets']),
    ggg (val) {
      this.tablesplo.forEach((a, b) => {
        if (a.id == val) {
          console.log(b)
          this.tablesplo[b].use_obj = !this.tablesplo[b].use_obj
        }
      })
    },
    // loadTop () {
    //   // let data = {
    //   //   page: this.page,
    //   //   pageSize: 1000,
    //   //   // tel:17549206920
    //   //   tel: localStorage.getItem('tel')
    //   // }
    //   // // let data={tel:localStorage.getItem('tel')}
    //   // // tel:localStorage.getItem('tel')
    //   // this.tickets(data)
    //   // setTimeout(() => {
    //   //   this.$refs.loadmore.onTopLoaded();
    //   // }, 1500);
    //   if (this.num == 1) {
    //     console.log(9)
    //     this.tablesplo = this.arr2
    //   } else if (this.num == 2) {
    //     this.tablesplo = this.arr1
    //   } else {
    //     let data = {
    //       page: this.page,
    //       pageSize: 1000,
    //       // tel:17549206920
    //       tel: localStorage.getItem('tel')
    //     }
    //     // let data={tel:localStorage.getItem('tel')}
    //     // tel:localStorage.getItem('tel')
    //     this.tickets(data)
    //   }

    //   setTimeout(() => {
    //     this.$refs.loadmore.onTopLoaded();
    //   }, 1500);
    // },
    use (index) {
      var arr1 = []
      var arr2 = []
      var arr3 = []

      console.log(this.quanlist)
      this.quanlist.forEach((a, b) => {
        if (a.use_status == -1) {
          arr1.push(a)

        } else if (a.use_status == 0) {
          arr2.push(a)
        } else {
          a.remark = ''
          a.use_obj = ''
          arr3.push(a)
        }
      })
      if (index == 0) {
        this.tablesplo = arr3
        if (this.tablesplo.length == 0) {
          this.imgl = true;
        } else {
          this.imgl = false;
        }
      } else if (index == 1) {
        this.tablesplo = arr2
        console.log(this.tablesplo.length)
        if (this.tablesplo.length == 0) {
          this.imgl = true;
        } else {
          this.imgl = false;
        }
      } else if (index == 2) {
        this.tablesplo = arr1
        console.log(this.tablesplo.length)
        if (this.tablesplo.length == 0) {
          this.imgl = true;
        } else {
          this.imgl = false;
        }
      }
      this.num = index
    },
    check (item) {
      this.tablesplo.forEach((a, b) => {
        if (a.id == item.id) {
          console.log(b)
          this.tablesplo[b].remark = !this.tablesplo[b].remark
        }
      })
      sessionStorage.setItem('ticknumbar1', item.freeTime)
      sessionStorage.setItem('ticknumbar2', item.sub)
      sessionStorage.setItem('ticknumbar3', item.ticketNumber)
      sessionStorage.setItem('ticknumbar4', item.percent)
      let that = this;
      setTimeout(function () {
        // window.history.back(-1)
        if (that.$route.query.websock == 1) {
          that.$router.push('/pay')
        } else {
          that.$router.push('/payyuyue')
        }
      }, 300)
    }
    // shiyong(val){
    //     sessionStorage.setItem('ticknumbar1',val.freeTime)
    //     sessionStorage.setItem('ticknumbar2',val.sub)
    //     sessionStorage.setItem('ticknumbar3',val.ticketNumber)
    //     this.$router.push('/pay')
    //     console.log(val)
    // }
  },
  mounted () {
    Indicator.open()
    let data = {
      page: this.page,
      pageSize: 1000,
      tel: localStorage.getItem('phone')
      // tel: '17549206920'
      // tel: '17549206921'
      // tel: localStorage.getItem('tel')
    }
    // let data={tel:localStorage.getItem('tel')}
    // 
    ticket(data).then(res => {
      Indicator.close()
      if (res.data.resCode == 0) {
        this.quanlist = res.data.result
        if (this.quanlist.length != 0) {
          this.quanlist.forEach((a, b) => {
            a.remark = ''
            sessionStorage.removeItem('ticknumbar1')
            sessionStorage.removeItem('ticknumbar2')
            sessionStorage.removeItem('ticknumbar3')
            if (a.use_status == 1 || a.use_status == 2) {
              this.tablesplo.push(a)
            }

          })
          if (this.tablesplo.length == 0) {
            this.imgl = true
          } else {
            this.imgl = false
          }
        } else {
          this.imgl = true
        }
      }
    })
  },

}
</script>
<style lang="scss" scoped>
@import '../style/mixin.scss';
$he: rgb(109, 109, 109);
.imgtext {
  color: #fff;
}
.zonp {
  color: #999;
}
.title {
  @include wh(100%, 0.8rem);
  display: flex;
  justify-content: space-around;
  background: #fff;
  line-height: 0.8rem;
  p {
    @include sc(15px, rgb(102, 102, 102));
  }
}
.active {
  color: rgb(246, 139, 28) !important;
  border-bottom: 2px solid rgb(246, 139, 28) !important;
}
.inner {
  width: 91%;
  margin: 0 auto;
  li {
    // @include wh(100%,0.9rem);
    background: #fff;
    margin: 0.32rem auto;
    // display: flex;
  }
}
.ss4 {
  color: #5294d1;
  border: 2px solid #5294d1;
}
.ss2 {
  color: #47ccb7;
  border: 2px solid #47ccb7;
}
.ss3 {
  color: #fd8587;
  border: 2px solid #fd8587;
}
.ss2s {
  background: #47ccb7;
}
.ss3s {
  background: #fd8587;
}
.ss4s {
  background: #5294d1;
}
.ss5s {
  background: #fb861c;
}
.square {
  @include wh(0.4rem, 0.4rem);
  border: 1px solid #666;
  margin-right: 0.4rem;
  border-radius: 50%;
}
</style>


