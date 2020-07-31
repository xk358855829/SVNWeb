<style scoped>
.mint-cell-value {
  width: 100% !important;
}
</style>


<template>
  <div id="orderList"
       style="background:#efefef;">
    <div class="title">
      <div v-for="(tit,index) in title"
           :key="index"
           :class="{active:parameter==index}"
           @click="active(index)">{{tit}}</div>
    </div>
    <div class="clear"></div>
    <div class="complete"
         v-if="parameter==0">
      <ul>

        <li v-for='complete in reptools'
            :key="complete.orderid"
            @click="completeClick(complete)">
          <h5>
            <span>订单号：{{complete.resId}}</span>
            <span v-if='complete.status==1'>进行中</span>
            <span v-if='complete.status==0'>已完成</span>
            <span v-if='complete.status==2'>已取消</span>
          </h5>
          <div class="la">
            <div>
              <div>
                <i class="s"></i>开始时间: {{complete.startTime}}</div>
              <div>
                <i class="e"></i>结束时间: {{complete.endTime?complete.endTime:'-'}}</div>
            </div>
            <div><img style="margin-top:-0.1rem;"
                   src="../../static/image/shangjiant.png" /></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="complete"
         v-if="parameter==1">
      <ul>
        <li @click="completeClick(complete)"
            v-for='complete in completeList'
            :key="complete.orderid">
          <h5>
            <span>订单号：{{complete.resId}}</span>
            <span v-if='complete.status==1'>进行中</span>
            <span v-if='complete.status==0'>已完成</span>
            <span v-if='complete.status==2'>已取消</span>
          </h5>
          <div class="la">
            <div>
              <div>
                <i class="s"></i>开始时间: {{complete.startTime}}</div>
              <div>
                <i class="e"></i>结束时间: {{complete.endTime?complete.endTime:'-'}}</div>
            </div>
            <div><img style="margin-top:-0.1rem;"
                   src="../../static/image/shangjiant.png" /></div>
          </div>
        </li>
      </ul>
    </div>

    <div v-if="parameter==2"
         class="unComplete">
      <ul>

        <!-- <router-link :to="{path:'/detailed',query:{orderid:uncomplete.resId,ids:uncomplete.status}}"
                       v-for='uncomplete in uncompleteList'
                       :key="uncomplete.orderid"
                       tag="li"> -->
        <li v-for='uncomplete in uncompleteList'
            :key="uncomplete.orderid"
            @click="perform(uncomplete)">
          <h5>
            <span>订单号：{{uncomplete.resId}}</span>
            <span v-if='uncomplete.status==1'>进行中</span>
            <span v-if='uncomplete.status==0'>已完成</span>
            <span v-if='uncomplete.status==2'>已取消</span>
          </h5>
          <div class="la">
            <div>
              <div>
                <i class="s"></i>开始时间: {{uncomplete.startTime}}</div>
              <div>
                <i class="e"></i>结束时间: {{uncomplete.endTime?uncomplete.endTime:'-'}}</div>
            </div>
            <div><img style="margin-top:-0.1rem;"
                   src="../../static/image/shangjiant.png" /></div>
          </div>
        </li>
        <!-- </router-link> -->
      </ul>

    </div>
    <!--   <mt-cell-swipe v-for='uncomplete in uncompleteList'
                       :key="uncomplete.orderid"
                       :right="[
                {
                    content: '删除',
                    style: { background: '#ff7900', color: '#fff'},
                    handler: () => deleteSection(uncomplete.resId)
                }
            	]"> -->
    <!-- {path:'/detailed',query:{orderid:uncomplete.resId,ids:uncomplete.status}} -->
    <!--  <router-link :to="{path:'/detailed',query:{orderid:uncomplete.resId,ids:uncomplete.status}}"
                       tag="li">
          <li @click="appclick(uncomplete)">
            <h5>
              <span>订单号：{{uncomplete.resId}}</span>
              <span v-if="uncomplete.state==2">已取消</span>
              <span v-if="uncomplete.state==0">已完成</span>
            </h5>
            <div class="la"> 
              <div>
                <div>
                  <i class="s"></i>开始时间: {{uncomplete.startTime}}</div>
                <div>
                  <i class="e"></i>结束时间: {{uncomplete.endTime?uncomplete.endTime:'-'}}</div>
              </div>
              <div><img style="margin-top:-0.1rem;"
                     src="../../static/image/shangjiant.png" /></div>
            </div>
          </li>
          </router-link>
        </mt-cell-swipe> -->

    <div v-if="kbBox==0"
         class="kbBox">
      <p style="padding-top: 100px;">
        <img class="kb"
             src="../../static/image/kbym.png" />
      </p>

      <p>暂无记录</p>
    </div>
  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
import { MessageBox, CellSwipe } from 'mint-ui';
export default {
  name: 'orderList',
  data () {
    return {
      completeList: [],
      uncompleteList: [],
      parameter: 1,
      title: ['全部', '进行中', '已完成',],
      kbBox: 1,
      reptool: [],
      pic: '-',
      reptools: []
    }
  },
  methods: {
    perform (val) {
      this.$router.push({ path: '/detailed', query: { orderid: val.resId, ids: val.status } })
    },
    completeClick (val) {
      console.log(val)
      if (val.status == 3) {
        this.$router.push({ path: '/money', query: { 'orderid': val.orderid } })
      } else {
        console.log(190)
        this.$router.push({ path: '/detailed', query: { 'orderid': val.resId, ids: val.status, carNumberval: val.carNumber, id: val.parkingId } })
      }
    },
    // appclick (val) {
    //   console.log(val)
    //   this.$router.push({ path: '/detailed', query: { orderid: val.resId, ids: val.status, carNumberval: val.carNumber } })
    //   // 
    // },
    deleteSection (val) {
      console.log(val)


    },
    active (index) {
      this.parameter = index
      console.log(index)
      // console.log(index)
      // let a = document.getElementsByClassName('a');
      // let len = a.length;
      // for (let i = 0; i < len; i++) {
      //   a[i].style.borderColor = '#FFFFFF';
      //   a[i].style.color = '#333333';
      // }
      // a[index].style.borderColor = '#f68b1b';
      // a[index].style.color = '#f68b1b';
      // this.parameter = index;
      if (index == 0) {
        console.log(98)
        if (this.completeList.length == 0 && this.uncompleteList.length == 0) {
          this.kbBox = 0;
        } else {
          this.kbBox = 1;
        }
      } else if (index == 1) {
        if (this.completeList.length == 0) {
          this.kbBox = 0;
        } else {
          this.kbBox = 1;
        }
      } else {
        console.log(this.uncompleteList);
        if (this.uncompleteList.length == 0) {
          this.kbBox = 0;
        } else {
          this.kbBox = 1;
        }
      }
    },
    fmtDate (obj) {
      if (obj) {
        var date = new Date(obj);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        var minute = date.getMinutes();
        var second = date.getSeconds();
        minute = minute < 10 ? ('0' + minute) : minute;
        second = second < 10 ? ('0' + second) : second;
        return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
      } else {
        return '无'
      }
    }
  },
  mounted: function () {
    /*console.log(this.fmtDate(1524533280000))*/;
    // let a = document.getElementsByClassName('a')[1];
    let that = this;
    this.$http({
      method: 'post',
      url: this.httpUrl + 'app/reserve/orderTinishType',
      data: Qs.stringify({
        // openid: 'o8Aq-5juGaY8f5uYhYeGUHyi8TVM',
        openid: localStorage.getItem('openid'),
        // 
        status: 3
      })
    }).then(function (message) {
      console.log(message.data);
      if (message.data.resCode == "200") {
        if (message.data.result.vreserve) {
          // message.data.result.vreserve.reverse()
          if (message.data.result.vreserve.length > 0) {
            that.reptool = message.data.result.vreserve
            that.reptool.forEach((a, b) => {
              if (a.status == 1) {
                that.completeList.push(a)
              } else {
                that.uncompleteList.push(a)
              }
            })
            // console.log(that.completeList)
            // console.log(that.uncompleteList)

            that.reptools = that.completeList.concat(that.uncompleteList)
            // for (let i = 0; i < message.data.result.vreserve.length; i++) {
            //   if (message.data.result.vreserve[i].status == 1) {
            //     //未完成
            //     that.completeList.push(message.data.result.vreserve[i])
            //   } else {
            //     //已完成
            //     that.uncompleteList.push(message.data.result.vreserve[i])
            //   }
            if (that.completeList.length == 0) {
              that.kbBox = 0
            } else {
              that.kbBox = 1
            }
            // }
            // console.log(that.uncompleteList)
          }
        }
      } else {
        that.kbBox = 0
      }
    })

  }
}
</script>

<style scoped="scoped">
.title {
  z-index: 999;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  margin-bottom: 10px;
  background-color: #ffffff;
  justify-content: space-around;
  border-bottom: 1px solid #d8d8d8;
}
.title div {
  text-align: center;
  font-size: 0.32rem;
  height: 36px;
  line-height: 36px;
  border-bottom: 2px solid #ffffff;
  color: #333333;
}
.title .active {
  border-bottom: 2px solid #f68b1b;
  color: #f68b1b;
}
.clear {
  height: 50px;
}
li {
  background-color: white;
  width: 97%;
  margin: 0 auto;
  /* border-bottom: 1px solid #D8D8D8;
		border-top: 1px solid #D8D8D8; */
  margin-bottom: 0.2rem;
  border-radius: 5px;
}
.la {
  display: flex;
  justify-content: space-between;
}
.la img {
  transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  -o-transform: rotate(90deg);
}
.la > div {
  padding: 5px 0;
}
.la div img {
  margin: 6px 0;
}
.la div div {
  color: #787878;
  font-size: 0.24rem;
  display: flex;
  height: 26px;
  line-height: 26px;
}
.la div i {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 10px 10px 10px 20px;
}
.s {
  background-color: #49c58f;
}
.e {
  background-color: #e94255;
}
h5 {
  color: #333333;
  font-size: 0.28rem;
  display: flex;
  line-height: 24px;
  padding-top: 10px;
  padding-left: 10px;
  justify-content: space-between;
}
h5 span {
  display: block;
  padding: 2px 5px;
  line-height: 1;
  margin-left: 10px;
  margin-right: 10px;
}
h5 span:nth-of-type(2) {
  color: #f68b1b;
  font-size: 0.24rem;
}
.kbBox {
  width: 100%;
  text-align: center;
  color: #787878;
  height: 10rem;
  z-index: 5;
}
.kb {
  width: 30%;
  margin: auto;
}
.kbBox p {
  padding: 10px 0;
}
</style>