<template>
  <div style="width:100%;background:#efefef;height:100%;">
    <!-- <div class="main-body" ref="wrapper" :style="{ height: (wrapperHeight) + 'px' }"> -->
    <!-- <mt-loadmore :top-method="loadTop"

　　　　:bottom-all-loaded="allLoaded"

　　　　ref="loadmore"> -->
    <!-- :autoFill="isAutoFill" -->
    <ul class="recordli"
        style="padding-top:0.1rem;">
      <!-- v-infinite-scroll="loadMore"
        infinite-scroll-disabled="more_loading"
        infinite-scroll-distance="10" -->
      <li v-for="item in uncompleteList"
          style="height:1.1rem;">
        <h5 style="justify-content: space-between;">
          <span style="font-size:0.15rem;    color: #333333;">入场时间：{{fmtDate(item.date.time)}}</span>
          <img src="../../static/image/alsi.png"
               alt=""
               style="width:0.15rem;height:0.15rem;margin-right:0.2rem"
               @click="delcount(item)">
          </span>
        </h5>
        <div class="la"
             style="font-size:0.13rem;    color: #787878;">
          <div>
            <div style="margin-top:0.1rem;margin-left:0.25rem;">
              <i class="s"
                 style="margin-right:0.1rem;"></i>停车场名称: {{item.parking_lot_name}}
              <span style="float:right;margin-right:0.2rem">{{status(item.order_status)}}</span>
            </div>
            <div style="margin-top:0.1rem;margin-left:0.25rem;">
              <i class="e"
                 style="margin-right:0.1rem;"></i>停车时长: {{item.longdate?item.longdate:'暂无记录'}}
              <span style="float:right;margin-right:0.2rem">优惠金额：{{item.onsale_price}}元</span>
            </div>
            <div style="margin-top:0.1rem;margin-left:0.25rem;">
              <i class="e"
                 style="margin-right:0.1rem;"></i>车牌号码: {{item.carnumber}}
              <span style="float:right;margin-right:0.2rem">总计：{{item.price}}元</span>
            </div>
          </div>
        </div>
        <!-- <div class="ohtal">
          <div style="height:0.38rem;border-bottom:1px solid #ebebeb;line-height:0.38rem;">
            <img src=""
                 alt="">
            <span style="color:#999;font-size:13px;">{{item.pay_time}}</span>
          </div>
          <div class="ofalse"
               style="display: flex;justify-content: space-between">
            <div style="height:0.38rem;color:#303030;font-size:15px;line-height:0.38rem;">
              <span>车牌号：</span>
              <span style="color:#666">{{item.carnumber}}</span>
            </div>
            <div style="height:0.38rem;font-size:15px;line-height:0.38rem;"
                 :class="[item.order_status=='已完成'?'color8':'color9']">
              {{item.order_status}}
            </div>
          </div>
          <div style="border-bottom:1px solid #ebebeb;">
            <div style="height:0.38rem;color:#303030;font-size:15px;line-height:0.38rem;">
              <span>停车场：</span>
              <span style="color:#666">{{item.parking_lot_name}}</span>
            </div>
          </div>
          <div style="height:0.42rem;color:#f68b1c;font-size:16px;line-height:0.42rem;text-align:right;">
            <span>总计：</span>
            <span>{{item.price}}元</span>
          </div>
        </div> -->
      </li>
    </ul>
    <div v-if="imgal"
         style="padding-top:1rem;">
      <p style="width:1.12rem;height:1.01rem;margin:0rem auto;">
        <img src="../../static/image/carr.png"
             style="width:100%;height:100%;"
             alt="">
      </p>

    </div>
    <!-- <div v-if="texts==1" style="text-align: center;background: #fff;font-size: 14px;" @click="gengduo">
                点击加载更多
            </div>
            <div v-if="texts==2" style="text-align: center;background: #fff;font-size: 14px;">
                没有更多数据了。。。
            </div> -->
    <!-- </mt-loadmore> -->
    <!-- </div> -->
  </div>
</template>
<script>
import axios from 'axios';
import Qs from 'qs'
import { Loadmore, MessageBox, Indicator } from 'mint-ui';
import { mapState, mapActions } from 'vuex'
import { deloutrec, serarchc } from './api/api.js'
export default {
  name: 'record',
  data () {
    return {
      col: '',
      texts: 1,
      griddata: [], //每次加载出来的新数据
      Data: [],　　//每次加载累加后的总数据
      //若为真，则 bottomMethod 不会被再次触发
      num: 1,　　//num为0时表示刷新或第一次加载，每加载一次增加1，刷新时默认为0
      table: '',
      wrapperHeight: 0,
      arr: [],
      imgal: false,
      gval: [],
      uncompleteList: [],
      parameter: true,
      allLoaded: false,
      page: 0,
      queryLoading: false,
      moreLoading: false,
      onelist: [],
      twolist: [],
      acarnumber: []
    }
  },
  computed: {
    ...mapState(['listrecord'])
  },
  methods: {
    ...mapActions(['rcodes']),
    delcount (val) {
      MessageBox.confirm('', {
        message: '确认要删除停车记录么？',
        title: '提示',
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(async action => {
        if (action == 'confirm') {

          console.log(val)
          let data = {
            out_trade_no: val.out_trade_no
          }
          let res = await deloutrec(data)
          console.log(res)
          if (res.data.resCode == 0) {
            MessageBox('提示', '删除成功')
            window.location.reload()
          } else {
            MessageBox('提示', '删除失败')
          }
        }
      })

    },
    status (val) {
      if (val == 1) {
        return '未支付'
      } else if (val == 0) {
        return '完成'
      } else {
        return '已退款'
      }
    },
    fmtDate (obj) {
      let date = new Date(obj);
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? ('0' + m) : m;
      let d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      let h = date.getHours();
      h = h < 10 ? ('0' + h) : h;
      let minute = date.getMinutes();
      let second = date.getSeconds();
      minute = minute < 10 ? ('0' + minute) : minute;
      second = second < 10 ? ('0' + second) : second;
      return y + ' 年 ' + m + ' 月 ' + d + ' 日 ' + h + ':' + minute/*+':'+second*/;
    },
    search () {
      // let b = ['浙A25G1D', '晋J0E662']
      // b.forEach(a => {
      //   // brandname
      //   this.loadMore(a)

      // })

    },
    async loadMore1 (a) {
      // if (this.allLoaded) {
      //   this.moreLoading = true;
      //   return
      // }
      // if (this.queryLoading) {
      //   return;
      // }
      // this.page++;
      // this.moreLoading = this.queryLoading
      this.arr = []
      this.$http({
        method: 'post',
        url: this.httpUrl + '/feeOrder/orders',
        data: Qs.stringify({
          page: 1,
          is_del: 0,
          pageSize: 1000,
          userId: 'SURIOT',
          dealer: 123,
          carnumber: a[0].brandname
        })
      }).then(message => {
        console.log(message)
        this.more_loading = true;
        var a = []
        if (message.data.resCode == 0) {
          console.log(message.data.result)
          Indicator.close();
          // if (message.data.result.length != 0) {
          // this.parameter = true;
          // a = message.data.result


          // this.uncompleteList = this.uncompleteList.concat(a)
          // this.uncompleteList = this.uncompleteList.sort(a, b => {
          //   return a.date.time - b.date.time
          // })
          // if (message.data.count < this.page * 10) {
          //   this.allLoaded = true

          // }
          // this.moreLoading = this.allLoaded
          console.log(this.acarnumber.length)
          if (this.acarnumber.length == 1) {

            if (message.data.result.length) {
              this.uncompleteList = message.data.result
            } else {
              this.imgal = true
            }
          } else {
            this.onelist = message.data.result
            console.log(a)
            this.loadMore2(this.acarnumber)
          }

          // console.log(this.uncompleteList)
          // this.arr = this.uncompleteList.concat(message.data.result)
          // } else {
          //   this.parameter = false
          // }
        }
      })
    },
    async loadMore2 (a) {
      // if (this.allLoaded) {
      //   this.moreLoading = true;
      //   return
      // }
      // if (this.queryLoading) {
      //   return;
      // }
      // this.page++;
      // this.moreLoading = this.queryLoading
      this.arr = []
      this.$http({
        method: 'post',
        url: this.httpUrl + '/feeOrder/orders',
        data: Qs.stringify({
          page: 1,
          is_del: 0,
          pageSize: 1000,
          userId: 'SURIOT',
          dealer: 123,
          carnumber: a[1].brandname
        })
      }).then(message => {
        console.log(message)
        this.more_loading = true;
        var a = []
        if (message.data.resCode == 0) {
          console.log(this.onelist)
          console.log(message.data.result)
          // if (message.data.result.length != 0) {
          // this.parameter = true;
          // a = message.data.result
          // this.uncompleteList = this.uncompleteList.concat(a)
          // this.uncompleteList = this.uncompleteList.sort(a, b => {
          //   return a.date.time - b.date.time
          // })
          // if (message.data.count < this.page * 10) {
          //   this.allLoaded = true

          // }
          // this.moreLoading = this.allLoaded

          this.twolist = message.data.result
          this.uncompleteList = this.onelist.concat(this.twolist)

          this.uncompleteList = this.uncompleteList.sort((b, a) => {
            return a.date.time - b.date.time
          })
          if (this.uncompleteList.length == 0) {
            this.imgal = true
          } else {
            this.imgal = false
          }
          console.log(this.uncompleteList)
          Indicator.close();
          // this.arr = this.uncompleteList.concat(message.data.result)
          // } else {
          //   this.parameter = false
          // }
        }
      })
    },
    // filr (val) {
    //   if (val == 0) {
    //     val = '已完成'
    //   } else if (val == -1) {
    //     val = '已退款'
    //   } else {
    //     val = ''
    //   }
    //   return val
    // },
    // loadTop: function () { //组件提供的下拉触发方法 
    //   this.num = 1;
    //   this.update(0, 'top');
    // },
    // gengduo: function () {
    //   console.log(this.col)
    //   this.num += 1;
    //   let offset = this.num * 10　　//offset为分页偏移量，这里是每次加载增加十条数据
    //   this.update(offset, 'bottom');
    //   console.log(this.col)
    // },
    // update(a,type){　　//每次触发上拉加载或下拉刷新时触发的数据接口
    // update () {
    //   console.log(this.table)
    //   let param = {
    //     // carnumber:'津A12345',
    //     // parkingId:'PI1540957659034816320',
    //     // page: this.num,
    //     // is_del: 0,
    //     // pageSize: 10,
    //     // userId: 'SURIOT',
    //     // dealer: 123,
    //     // number:10,　　//每页多少条数据
    //     carNumber: this.table
    //   }
    //   let that = this;
    //   that.$http({
    //     method: 'post',
    //     url: `${this.httpUrl}/ISVEnterOut/findByCarNumber`,
    //     data: Qs.stringify(param)
    //   }).then(res => {
    //     Object.keys(res.data.value).map(keys => {
    //       let c = JSON.parse(JSON.stringify(res.data.value[keys]))
    //       for (var i in c) {
    //         that.arr.push(c[i])

    //       }
    //       that.arr.forEach((a, b) => {
    //         if (a.order_status == "1") {
    //           a.order_status = '未支付'
    //           that.col = 2
    //         } else if (a.order_status == "-1") {
    //           a.order_status = '已退款'
    //           that.col = 1
    //         } else if (a.order_status == "0") {
    //           a.order_status = '已完成'
    //           that.col = 1
    //         }
    //       });

    //     })
    //     if (that.arr.length == 0) {
    //       that.imgal = true
    //     } else {
    //       that.imgal = false
    //     }
    // console.log(that.arr)
    // if(res.data.resCode==0){
    //     // that.tab=res.data.result

    //     if(a==0){
    //         that.Data =res.data.result

    //     }else{
    //         that.griddata=res.data.result
    //         let len=that.griddata.length
    //          for(let i=0;i<len;i++){
    //             that.Data.push(that.griddata[i])　　//将新数据push到Data中
    //    　　 }
    //         if(that.num*10>that.Data.length){
    //            that.texts=2
    //         }
    //     }
    //     let arsc;


    // }
    // console.log(type)
    //通过传过来的type值不同分辨上拉加载或下拉刷新
    // 　　　　　　　　if(type=='top'){　　
    //                     setTimeout(function(){
    //                         that.$refs.loadmore.onTopLoaded();
    //                     },2000)  
    // 　　　　　　　　
    // 　　　　　　　　}else if(type=='bottom'){
    //                     setTimeout(function(){
    //                         that.$refs.loadmore.onBottomLoaded();
    //                     },2000)
    // 　　　　　　　　}

    // })
    // },
    //    loadPageList:function (){ 
    //      // 查询数据 
    //          let offset = this.num*10
    //         let data={
    //             car_number:'津A12345',
    //             parkingId:'PI1540957659034816320',
    //             page: this.num,
    //             is_del: 0,
    //             pageSize:offset,
    //             userId: 'SURIOT',
    //             dealer: 123
    //         }
    //         let that=this;
    //         that.$http({
    //             method:'post',
    //             url:'http://39.104.113.112:2088/Order/orders',
    //             data:Qs.stringify(data)
    //         }).then(res=>{
    //             if(res.data.resCode==0){
    //                 // that.tab=res.data.result
    //                 res.data.result.forEach((a,b) => {
    //                     if(a.order_status==1){
    //                         a.order_status='未支付'
    //                         that.col=1
    //                     }else if(a.order_status==-1){
    //                         a.order_status='已退款'
    //                         that.col=1
    //                     }else{
    //                         a.order_status='已完成'
    //                         that.col=2
    //                     }
    //                 });
    //                 that.Data =res.data.result
    //             }
    //         })
    //     
    //    }
  },

  mounted () {
    // document.title=this.$route.meta.title;
    //      this.wrapperHeight =
    //   document.documentElement.clientHeight -
    //   this.$refs.wrapper.getBoundingClientRect().top;
    //     this.loadTop()

    Indicator.open('Loading...');

    serarchc({ openid: this.openid }).then(res => {
      Indicator.close()
      this.acarnumber = res.data.result
      if (res.data.resCode == 200) {
        if (res.data.result.length) {
          if (this.acarnumber.length == 1) {
            this.loadMore1(this.acarnumber)
          } else if (this.acarnumber.length == 2) {
            this.loadMore1(this.acarnumber)
          }
        } else {
          this.imgal = true
        }
      }
    })

    // this.acarnumber = res.data.result
    // if (this.acarnumber.length == 0) {


    //   this.imgal = true



    // }

    // this.acarnumber = this.listrecord
    // console.log(JSON.parse(localStorage.getItem('listcard')))
    // let a = JSON.parse(localStorage.getItem('listcard'))
    // this.acarnumber = JSON.parse(localStorage.getItem('listcard'))
    // a.forEach((a, b) => {
    //   this.table += a.brandname + ','
    // })
    // this.table = this.table.substring(0, this.table.length - 1)
    // console.log(this.table)





    // this.update()
    // str.replace(/\[|]/g,'')
    // var str = this.$route.query.val;

  },

}
</script>
<style scoped>
.main-body {
  overflow: scroll;
}

.recordli li {
  /* width: 91%;
  margin: 0 auto;
  height: 1.63rem;
  box-shadow: 0px 2px 12px 0px #f2f2f2; */
  background-color: white;
  width: 97%;
  margin: 0 auto;
  margin-bottom: 0.1rem;
  border-radius: 5px;
}
.ohtal {
  width: 98%;
  margin: 0rem auto;
  height: 100%;
  background: #fff;
  margin-bottom: 0.3rem;
}
.color8 {
  color: #fe4444;
}
.color9 {
  color: #999;
}
h5 {
  display: flex;
  line-height: 0.12rem;
  padding-top: 0.1rem;
  padding-left: 0.1rem;
}
h5 span {
  display: block;
  padding: 2px 5px;
  line-height: 1;
  margin-left: 10px;
  margin-right: 10px;
}
.la div i {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.s {
  background-color: #49c58f;
}
.la div i {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.e {
  background-color: #e94255;
}
</style>


