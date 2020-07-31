<template>
  <div style="background:#efefef;"
       v-if="pagefile"
       class="rating_page">
    <div class="title">
      <p v-for="(item,index) in arr"
         :class="{active:index==num}"
         @click="use(index)"
         :key="item.id">{{item.value}}</p>
    </div>

    <ul class="inner">
      <li v-for="(item,index) in tablesplo.length==0?imgl:!imgl&&tablesplo"
          style="position: relative;"
          :class="{zonp:item.use_status==-1}">
        <div style="display:flex;">
          <div style="width:33.2%;position:relative;height:100%;background:#efefef;">
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
            <p style="position:absolute;top:19%;left:8%;text-align:center;width:0.9rem;height:0.6rem;"
               class="imgtext">

              <span v-if="!item.freeTime&&item.percent==''"
                    style="font-size:0.17rem">￥</span>
              <span v-if="item.freeTime&&item.percent==''"
                    style="font-size:0.17rem">m</span>
              <span style="font-size:0.38rem;">{{(item.freeTime?item.freeTime:item.sub)==''?(item.percent)/10:(item.freeTime?item.freeTime:item.sub)}}</span>

              <br>
              <span v-if="item.useWay=='2'"
                    style="font-size:0.12rem;">抵扣停车费{{item.sub}}元</span>
              <span v-if="item.useWay=='1'"
                    style="font-size:0.12rem;">免费时长{{item.freeTime}}分钟</span>
              <span v-if="item.useWay=='3'"
                    style="font-size:0.12rem;">满{{item.full}}元减{{item.sub}}元</span>
              <span v-if="item.useWay=='4'"
                    style="font-size:0.12rem;">折扣{{(item.percent)/10}}折</span>
            </p>

          </div>
          <div style="width:70%;margin-top:0.06rem;"
               class="texts">
            <div style="display:flex;margin-bottom:0.06rem;margin-left:0.11rem;">
              <div :class="sstts[(item.useWay)]"
                   v-if="item.use_status==1"
                   style="width:0.535rem;height:0.166rem;text-align:center;line-height:0.166rem;border-radius:2px;color:#fff;font-size:0.12rem;transform:scale(0.84);">{{item.useWay|change}}</div>
              <div v-if="item.use_status==-1"
                   style="width:0.535rem;height:0.166rem;text-align:center;line-height:0.166rem;border-radius:2px;color:#fff;font-size:0.12rem;transform:scale(0.84);background:#999;">{{item.useWay|change}}</div>
              <div v-if="item.use_status==0"
                   style="width:0.535rem;height:0.166rem;text-align:center;line-height:0.166rem;border-radius:2px;color:#fff;font-size:0.12rem;transform:scale(0.84);background:#999;">{{item.useWay|change}}</div>
              <div style="color:rgb(109,109,109);font-size:0.13rem;">车口袋电子券</div>
            </div>
            <div style="margin-left:0.11rem"
                 v-if="item.issus_obj">仅限车牌号码{{item.issus_obj}}使用</div>
            <div style="margin-left:0.11rem"
                 v-else>全部车牌号码可使用</div>
            <div style="display:flex;justify-content: space-between;line-height:0.2rem;position: relative;">
              <span style="line-height:0.2rem;font-size:0.12rem;transform:scale(0.84);color:#6d6d6d;">{{(item.start_time).slice(0,10)}}-{{(item.end_time).slice(0,10)}}</span>
              <!-- <div :class="sstt[(item.useWay)]" style="margin-right:8px;width:0.58rem;height:0.2rem;border-radius:10px;text-align:center;line-height:0.2rem;" @click="shiyong(item)">立即使用</div> -->
              <div class="square"
                   @click="check(item)"
                   v-if="(item.use_status==1||item.use_status==2)&&$route.query.num!=1"></div>
              <div style="position: absolute;right:0.16rem;margin-top:-0.01rem;"
                   v-if="item.remark&&(item.use_status==1||item.use_status==2)&&$route.query.num!=1">
                <img src="../../static/image/rong.png"
                     alt=""
                     style="margin-top:-0.1rem;">
              </div>
              <div style="position: absolute;width:0.5rem;height:0.5rem;top:-0.42rem;right:0"
                   v-if="item.use_status==-1">
                <img src="../../static/image/zg (1).png"
                     alt=""
                     style="width:100%;height:100%;">
              </div>
              <div style="position: absolute;width:0.5rem;height:0.5rem;top:-0.42rem;right:0"
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
              <span style="height:0.25rem;line-height:0.2rem;font-size:0.12rem;transform:scale(0.84);margin-left:0.06rem;color:#6d6d6d">详细信息</span>
              <p style="z-index:89;height:0.15rem;line-height:0.2rem;margin-right:0.1rem;width:0.15rem;"
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
              <span style="margin-top:0.05rem;font-size:0.12rem;transform:scale(0.84);margin-left:0.06rem;color:#6d6d6d">详细信息</span>
              <p style="z-index:89;height:0.15rem;line-height:0.2rem;margin-right:0.1rem;width:0.15rem;"
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
              <span style="height:0.1rem;margin-top:0.05rem;font-size:0.12rem;transform:scale(0.84);margin-left:0.06rem;color:#6d6d6d">详细信息</span>
              <p style="z-index:89;height:0.15rem;line-height:0.2rem;margin-right:0.1rem;width:0.15rem;"
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
              <span style="height:0.1rem;margin-top:0.05rem;font-size:0.12rem;transform:scale(0.84);margin-left:0.06rem;color:#6d6d6d">详细信息</span>
              <p style="z-index:89;height:0.15rem;line-height:0.2rem;margin-right:0.1rem;width:0.15rem;"
                 @click.stop="ggg(item.id)"> <img :src="item.use_obj?a:b"
                     alt=""
                     style="vertical-align: middle;width:100%;height:100%;"></p>
              <!-- 满<span>{{item.full}}元</span>减<span>{{item.sub}}元</span> -->
            </div>
          </div>
        </div>
        <div style="background:#efefef;height:0.03rem;width:100%;"></div>
        <div style="height:0.3rem;width:91%;margin:0 auto;line-height:0.3rem;font-size:0.12rem;color:#6d6d6d;"
             v-if="item.use_obj">
          <span v-if="item.useWay=='2'">抵扣停车费{{item.sub}}元</span>
          <span v-if="item.useWay=='1'">免费时长{{item.freeTime}}分钟</span>
          <span v-if="item.useWay=='3'">满{{item.full}}元减{{item.sub}}元</span>
          <span v-if="item.useWay=='4'">折扣{{(item.percent)/10}}折</span>
          <span v-if="item.issus_obj">仅限车牌号码{{item.issus_obj}}使用</span>
        </div>
      </li>
    </ul>

    <div class="iimga"
         v-if="imgl">
      <div style="width:1rem;margin:1rem auto;">
        <img src="../../static/image/atz.png"
             alt=""
             style="width:1.1rem;height:1.13rem;">
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Qs from 'qs'
import { Loadmore, Indicator } from 'mint-ui';
import { mapState, mapActions, mapGetters } from 'vuex'
import { ticket } from './api/api.js'
export default {
  name: 'record',
  data () {
    return {
      pagefile: false,
      arr: [{ value: '未使用', id: 1 }, { value: '已使用', id: 2 }, { value: '已过期', id: 3 }],
      num: '',
      tablesplo: [],
      rong: '',
      a: require('../../static/image/az (2).png'),
      b: require('../../static/image/az (1).png'),
      remark: false,
      sstts: [
        "ss1s",
        "ss2s",
        "ss3s",
        "ss4s",
        "ss5s"
      ],
      sstt: [
        "ss1",
        "ss2",
        "ss3",
        "ss4",
      ],
      row: 1,
      imgl: false,
      fool: '',
      // 分页
      page: '',
      pageSize: '',
      quanlist: [],
    }
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
    //   if (this.num == 1) {
    //     console.log(9)
    //     this.tablesplo = this.arr2
    //   } else if (this.num == 2) {
    //     this.tablesplo = this.arr1
    //   } else {
    //     let data = {
    //       page: this.page,
    //       pageSize: 1000,
    //       tel: localStorage.getItem('tel')
    //     }
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
      if (this.$route.query.num == 1) {
        return false
      } else {
        console.log(item)
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
          if (that.$route.query.val == 8) {
            that.$router.push('/pay')
          } else {
            that.$router.push('/payyuyue')
          }

        }, 300)
      }
    },
    init () {

      sessionStorage.clear('ticknumbar1')
      sessionStorage.clear('ticknumbar2')
      sessionStorage.clear('ticknumbar3')
      // Indicator.open('Loading...');
      let data = {
        page: 1,
        pageSize: 1000,
        // tel: '17549206920'
        tel: localStorage.getItem('tel')
      }

      // let data={tel:localStorage.getItem('tel')}
      // 
      this.tablesplo = []

      ticket(data).then(res => {
        this.pagefile = true
        Indicator.close();
        if (res.data.resCode == "0") {
          this.quanlist = res.data.result
          if (this.quanlist.length != 0) {
            this.quanlist.forEach((a, b) => {
              a.remark = ''
              a.use_obj = ''
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
    }
  },
  created () {
    this.$http({
      method: 'post',
      url: this.httpUrl + '/TicketInfo/flushOverDue'
    }).then(res => {

    })
  },
  mounted () {
    Indicator.open()
    this.init()
    // var alootl = this.$route.query.num
    // window.addEventListener('popstate', function (e) {
    //   console.log(alootl)
    //   if (alootl) {
    //     // window.location.href = '/home/list'
    //   } else {
    //   }
    // }, false)
    // console.log(this.$route.query.num)
    // this.fool = false;
    // let _this = this;
    // setTimeout(() => {
    //   _this.fool = true
    // }, 1000);

    // let a = localStorage.getItem('tabz')
    // console.log(JSON.parse(a))
    // this.tablesplo = JSON.parse(a)
    // console.log(this.mplist)
    // this.tablesplo = this.mplist
    // this.tablesplo = []
    // this.$store.state.quanlist.forEach((a, b) => {


    // })
    // console.log(this.tablesplo)
    // if (this.tablesplo.length == 0) {
    //   this.imgl = false;
    // } else {
    //   this.imgl = true;
    // }
    // ticket(data).then(res => {
    //   res.data.result.forEach(a=>{
    //     if(a.use_status==1){

    //     }
    //   })
    // })

  },

}
</script>
<style lang="scss" scoped>
@import '../style/mixin.scss';
.rating_page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  // bottom: 0;
  background-color: #efefef;
  z-index: 204;
}
$he: rgb(109, 109, 109);
.imgtext {
  color: #fff;
}
.zonp {
  color: #999;
}
.title {
  @include wh(100%, 0.4rem);
  display: flex;
  justify-content: space-around;
  background: #fff;
  line-height: 0.4rem;
  p {
    @include sc(0.15rem, rgb(102, 102, 102));
    width: 0.59rem;
    text-align: center;
  }
}
.active {
  color: rgb(246, 139, 28) !important;
  border-bottom: 2px solid rgb(246, 139, 28) !important;
}
.inner {
  width: 91%;
  margin: 0 auto;
  overflow: scroll;
  li {
    // @include wh(100%,0.9rem);
    background: #fff;
    margin: 0.16rem auto;
    // display: flex;
  }
}
.mint-loadmore {
  background: #efefef;
}
.ss4 {
  color: #5294d1;
  border: 2px solid #5294d1;
}
.ss2 {
  color: #47ccb7;
  border: 0.2rem solid #47ccb7;
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
  margin-top: -0.05rem;
  @include wh(0.15rem, 0.15rem);
  border: 1px solid #666;
  margin-right: 0.2rem;
  border-radius: 50%;
}
</style>


