<template>
  <div style="background:#efefef;padding-bottom: 0.2rem;">
    <header style="font-size:18px;width:94%;margin:0 auto;padding-top:0.4rem;margin-bottom:0.2rem;">
      <p>我的车牌</p>
    </header>
    <section style="height:100%;">
      <ul style="height:100%;width:100%">
        <li v-for="item in List"
            class="listli">
          <div @click="delet(item.brandid)"
               class="deletCar">
            <img src="../../static/image/alsi1.png"
                 alt="">
          </div>
          <div class="liDiv"
               @click="change(item)">
            <div class="firs">
              <div style="color:#999">车牌号</div>
            </div>
            <div style="width:93%;margin:0 auto;margin-top:0.1rem;margin-bottom:0.2rem;">
              <p style="font-size:16px">{{item.brandname}}</p>
            </div>
            <div style="width:93%;margin:0 auto;margin-bottom:0.2rem;">
              <p style="color:#999">车牌类型</p>
            </div>
            <div class="firs bottomfir">
              <div style="font-size:16px"
                   v-if="item.brandname.length==7">普通车牌</div>
              <div style="font-size:16px"
                   v-if="item.brandname.length==8">新能源车牌</div>
              <div class="pari"
                   v-if="item.priority=='1'">默认</div>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <div class="paytoot"
         @click="addnuma"
         v-if="laddcar">新增车牌号</div>
    <div class="paytoot"
         v-if="!laddcar">新增车牌号</div>
    <!-- <div class="paytoot"
         @click="rightrecord">停车记录</div> -->
  </div>
</template>
<script>
import axios from 'axios'
import Qs from 'qs'
import { MessageBox } from 'mint-ui';
import { shanchu, chazli, serarchc, delc } from './api/api.js'
export default {
  data () {
    return {
      List: [],
      laddcar: true,
      conrler: ''
    }
  },
  watch: {

  },
  mounted () {
    // if (window.history && window.history.pushState) {
    //   history.pushState(null, null, document.URL); window.addEventListener('popstate', this.fun, false)//false阻止默认事件  }
    // }
    let data = {
      openid: localStorage.getItem('openid'),
      // openid: "o8Aq-5juGaY8f5uYhYeGUHyi8TVM",
    }
    console.log(data)
    serarchc(data).then(res => {
      console.log(res)
      if (res.data.resCode == 200) {
        if (res.data.result.length == 0) {
          this.$router.push({ path: '/card', query: { arr: 7 } })
        } else {

          this.List = res.data.result
          localStorage.setItem('listcard', JSON.stringify(this.List))
        }
      }
    })
    // if (localStorage.getItem('list')) {
    //   this.List = (JSON.parse(localStorage.getItem('list'))).split(",")
    // } else {
    //   this.$router.push({ path: '/card', query: { arr: 7 } })
    // }
    // console.log(this.List)
  },
  // destroyed () {

  //   window.removeEventListener('popstate', this.fun, false);//false阻止默认事件

  // },
  methods: {
    change (item) {
      console.log(item);
      let len = this.List.length;
      let that = this;
      let brandid;
      for (var i = 0; i < len; i++) {
        if (that.List[i].priority == 1) {
          brandid = i;
        }
      }
      let data = {
        brandid: that.List[brandid].brandid,
        newbrandid: item.brandid
      }
      console.log(data)
      that.$http({
        method: 'post',
        url: that.httpUrl + 'app/brand/updatepriority',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message.data)
        if (message.data.resCode == "200") {
          that.List[brandid].priority = '0';
          item.priority = '1';
        }
      })
    },
    delet (val) {
      this.List.forEach(a => {
        if (a.brandid != val) {
          console.log(a.brandid)
          this.conrler = a.brandid
        }
      })
      MessageBox.confirm('', {
        message: '确认要删除车牌号么？',
        title: '提示',
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(action => {
        if (action == 'confirm') {     //确认的回调
          console.log(val)
          let data = {
            brandid: val,
            id: this.conrler ? this.conrler : 1
          }
          delc(data).then(res => {
            console.log(res)
            if (res.data.resCode == 200) {
              // MessageBox('提示', '删除成功');
              window.location.reload()
            } else {
              MessageBox.confirm(res.data.msg, '提示');
            }
          })
        }
      })
    },
    addnuma () {
      // console.log(this.List.length)
      // if (this.List.length > 1) {
      //   this.laddcar = false
      //   MessageBox('提示', '车牌号码最多添加2个');
      // } else {
      //   this.$router.push({ path: '/card', query: { arr: 7 } })
      // }
      this.$router.push({ path: '/card', query: { arr: 7 } })
    },
    rightrecord () {

      this.$router.push({ path: '/record' })
    },
    // paymoney (val) {
    //   sessionStorage.clear('ticknumbar1')
    //   sessionStorage.clear('ticknumbar2')
    //   sessionStorage.clear('ticknumbar3')
    //   let data = {
    //     car_number: val
    //   }
    //   chazli(data).then(message => {
    //     if (message.data.resCode == 1 || message.data.resCode == 2) {
    //       console.log(message)
    //       localStorage.setItem('carnumber', message.data.carnumber)
    //       localStorage.setItem('longdate', message.data.longdate)
    //       localStorage.setItem('onsale_price', message.data.onsale_price)
    //       localStorage.setItem('paid_price', message.data.paid_price)
    //       localStorage.setItem('paking_lot_name', message.data.paking_lot_name)
    //       localStorage.setItem('price', message.data.price)
    //       localStorage.setItem('startdate', message.data.startdate)
    //       localStorage.setItem('time_out', message.data.time_out)
    //       localStorage.setItem('img', message.data.img)
    //       localStorage.setItem('HPrice', message.data.HPrice)

    //       this.$router.push({ path: '/pay', query: { vals: message.data } })
    //     } else if (message.data.resCode == 0 || message.data.resCode == -1 || message.data.resCode == -2) {
    //       MessageBox('提示', message.data.result);
    //     }
    //   })
    // }
  }
}
</script>
<style scoped>
.listli {
  width: 94%;
  margin: 0 auto;
  border: 1px solid #b4a9a9;
  height: 2.2rem;
  border-radius: 5px;
  margin-top: 0.6rem;
  position: relative;
}
.listli .firs {
  display: flex;
  justify-content: space-between;
  width: 92%;
  margin: 0 auto;
  margin-top: 0.1rem;
}
.listli .bottomfir {
  margin-top: 0rem;
}
.pari {
  width: 1.2rem;
  height: 0.5rem;
  background: #f68b1c;
  line-height: 0.5rem;
  border-radius: 20px;
  text-align: center;
  margin-top: -0.1rem;
  color: #fff;
}
.paytoot {
  width: 94%;
  margin: 0 auto;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-size: 16px;
  border-radius: 5px;
  background: #f68b1b;
  color: #fff;
  cursor: pointer;
  margin-top: 0.4rem;
}
.deletCar {
  z-index: 999;
  width: 40px;
  height: 1rem;
  position: absolute;
  right: 0;
  top: 0;
}
.deletCar img {
  width: 15px;
  margin-top: 10px;
}
</style>


