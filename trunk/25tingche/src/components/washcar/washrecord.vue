<template>
  <div style="width:100%;background:#efefef;overflow: scroll;" class="rating_page">
    <ul class="recordli"
        style="padding-top:0.1rem;">
      <li v-for="item in uncompleteList" :key ="item.id"
          style="height:1.1rem;">
        <h5 style="justify-content: space-between;">
          <span style="font-size:0.15rem;color: #333333;">洗车时间：{{fmtDate(item.startTime.time)}}</span>
          <!-- <img src="../../../static/image/alsi.png"
               alt=""
               style="width:0.15rem;height:0.15rem;margin-right:0.2rem"
               @click="delcount(item)"> -->
        </h5>
        <div class="la"
             style="font-size:0.13rem;color: #787878;">
          <div>
            <div style="margin-top:0.1rem;margin-left:0.25rem;">
              <i class="s"
                 style="margin-right:0.1rem;"></i>站点名称: {{chosesname(item.sid)}}
              <span v-if="item.status==0" style="float:right;margin-right:0.2rem;color:#49c58f;">{{status(item.status)}}</span>
              <span v-else="" style="float:right;margin-right:0.2rem;color:#e94255;">{{status(item.status)}}</span>
            </div>
            <div style="margin-top:0.1rem;margin-left:0.25rem;">
              <i class="e"
                 style="margin-right:0.1rem;"></i>车牌号码: {{item.carNumber}}
              <!-- <span style="float:right;margin-right:0.2rem">支付金额：{{item.carMoney}}元</span> -->
            </div>
            <div style="margin-top:0.1rem;margin-left:0.25rem;">
              <i class="e"
                 style="margin-right:0.1rem;"></i>洗车模式: {{item.carModel}}
              <span style="float:right;margin-right:0.2rem">支付金额：{{item.carMoney}}元</span>
            </div>
          </div>
        </div>        
      </li>
    </ul>
    <div v-if="imgal"
         style="padding-top:1rem;">
      <p style="width:1.12rem;height:1.01rem;margin:0rem auto;">
        <img src="../../../static/image/carr.png"
             style="width:100%;height:100%;"
             alt="">
      </p>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Qs from 'qs'
import { Loadmore, MessageBox, Indicator } from 'mint-ui';
import { deloutrec, serarchc,washrecord,getsiteList } from '../api/api.js'
export default {
  name: 'washrecord',
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
      acarnumber: [],
      parkIist:[]
    }
  },
  computed: {
    
  },
  methods: {
    delcount (val) {
      MessageBox.confirm('', {
        message: '确认要删除洗车记录么？',
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
        return '洗车中'
      } else if (val == 0) {
        return '洗车完成'
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
    async loadMore1 (a) {
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
        }
      })
    },
    async loadMore2 (a) {
      this.arr = []
      let data = {
        openid: localStorage.getItem("openid")
      }
      washrecord(data).then(message => {
        console.log(message)
        this.more_loading = true;
        var a = []
        if (message.data.resCode == 0) {
          this.uncompleteList = message.data.result;
          if (message.data.count == 0) {
            this.imgal = true
          } else {
            this.imgal = false
          }
          console.log(this.uncompleteList)
          Indicator.close();
        }
      })
    },
    getwashsiteList () {
      let params = {
        page: 1,
        pageSize: 500,
        userId: 'SURIOT',
        dealer: 123,
      };
      getsiteList(params).then(message => {
        console.log(message);
        if(message.data.result.length > 0){
          for(var i = 0;i < message.data.result.length;i++){
            let list = {
              sid:message.data.result[i].sid,
              sname:message.data.result[i].sname
            };
            this.parkIist.push(list);
          }
          console.log(this.parkIist);
        }else{
          this.parkIist = [];
        }
      });
    },
    chosesname (val) {
      this.parkIist.forEach((a, index) => {
        if (a.sid == val) {
          val = a.sname
        }
      })
      return val
    },
  },

  mounted () {
    Indicator.open('Loading...');
    this.loadMore2();
    this.getwashsiteList();
    // serarchc({ openid: this.openid }).then(res => {
    //   Indicator.close()
    //   this.acarnumber = res.data.result
    //   if (res.data.resCode == 200) {
    //     if (res.data.result.length) {
    //       if (this.acarnumber.length == 1) {
    //         this.loadMore1(this.acarnumber)
    //       } else if (this.acarnumber.length == 2) {
    //         this.loadMore1(this.acarnumber)
    //       }
    //     } else {
    //       this.imgal = true
    //     }
    //   }
    // })
  },
}
</script>
<style scoped>
.main-body {
  overflow: scroll;
}
.rating_page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #efefef;
  z-index: 204;
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


