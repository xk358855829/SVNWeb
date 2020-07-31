
<template>
  <div id="card">
    <div style="width:91%;padding-top:0.32rem;margin:0 auto;">
      <p style="font-size:18px;margin-bottom:0.16rem;color:#303030;">车牌类型</p>
      <section>
        <div>
          <div v-for="(item,index) in options" :key="item.id"
               :class="{colorg:index==duration}"
               @click="check(index)">
            <i>
              <span></span>
            </i>
            <span>{{item.label}}</span>
          </div>
        </div>
      </section>
      <p style="font-size:18px;margin-bottom:0.16rem;color:#303030;margin-top:0.32rem;">车牌号码</p>
    </div>
    <div class="used"
         v-if="card == 0">
      <span v-for="(item,index) in plate"
            class="newsquare"
            :key="index"
            :class="{gactive:index==kuaile}"
            @click="chose(item,index)">
        {{item}}
      </span>
    </div>
    <div class="used"
         v-if="card == 1">
      <span v-for="(item,index) in plate"
            class="newsquare"
            :key="index"
            :class="{gactive:index==kuaile}"
            @click="chose(item,index)">
        {{item}}
      </span>
    </div>
    <div class="addBox">
      <div class="add"
           @click="selct()">查询缴费</div>
    </div>
    <section class="pkey-keyboard"
             v-if="hide==1">
      <section class="pkey-keyscontain"
               style="width:100%;">
        <ul class="keybo">
          <li v-show="txtboardshow"
              v-for="(item,index) in cartxt">
            <span v-show="index==cartxt.length-1"
                  @click="txtboardshow=false,numboardshow=true">ABC</span>
            <label v-for="(items,indexi) in item"
                   @click="txtclick(items,indexi,item.length)">{{items}}</label>
            <!-- <span v-show="index==cartxt.length-1" @click="plate=plate.substr(0, plate.length-1)">&nbsp;</span> -->
            <span v-show="index==cartxt.length-1"
                  @click="shanchu">删除</span>
          </li>
          <li v-show="numboardshow"
              v-for="(item,index) in numtxt">
            <span v-show="index==cartxt.length-1"
                  @click="txtboardshow=true,numboardshow=false">省份</span>
            <label v-for="(items,indexi) in item"
                   @click="numclick(items,indexi,item.length)">{{items}}</label>
            <!-- <span v-show="index==cartxt.length-1" @click="plate=plate.substr(0, plate.length-1)"></span> -->
            <span v-show="index==cartxt.length-1"
                  @click="shanchu">删除</span>
          </li>
        </ul>
      </section>
      <transition name="fade">
        <section class="showkey"
                 v-show="keyshow"
                 :keyshow="keyshow"
                 :style="{marginLeft:mleft+'px'}">{{keyb}}</section>
      </transition>
    </section>
  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
import { Radio } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import { isLicensePlate, addtian, chaxunjiao, isLicensePlate1 } from './api/api.js'
export default {
  name: 'card',
  data () {
    return {
      plate: [],
      keyb: '',
      txtboardshow: true,
      numboardshow: false,
      keyshow: false,
      mleft: 0,
      tips: '',
      cartxt: [
        ['京', '津', '渝', '沪', '冀', '晋', '辽', '吉', '黑', '苏'],
        ['浙', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '粤', '琼'],
        ['川', '贵', '云', '陕', '甘', '青', '蒙', '桂', '宁', '新'],
        ['藏', '使', '领', '警', '学', '港', '澳']
      ],
      numtxt: [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
      ],
      a: '',
      kuaile: 0,
      b: '',
      parameter: 0,
      show: false,
      card: 0,
      a: ['', '', '', '', '', '', ''],
      b: ['', '', '', '', '', '', '', ''],
      hide: 1,
      code: 4,
      carnumber: 2,
      slots: [{ values: ['普通车牌', '新能源车牌'] }],
      changenumber: '',
      lplcar: '',
      options: [
        {
          label: '普通车牌',
          value: 1
        },
        {
          label: '新能源车牌',
          value: 2
        }
      ],
      duration: 0
    }
  },
  beforeRouteLeave (to, from, next) {
    if (from.name == 'card' && to.name == 'login') {
      next({ path: '/card' })
    }
    next()
  },
  watch: {
  },
  created() {
    // let url = "http://cloud.parkingmore.cn/indextingche.html#/carNumberSearch?13037673112";
    let url = window.location.href;
    let phone = url.split("?")[1];
    localStorage.setItem("phone",phone);
    localStorage.setItem("tel",phone);
  },
  methods: {
    shanchu () {
      if (this.duration == 0) {
        console.log(this.kuaile)
        this.plate.splice(this.kuaile, 1, '')
        this.kuaile--
        if (this.kuaile < 0) {
          this.kuaile = 0
          this.txtboardshow = true
          this.numboardshow = false
        }
      } else {
        this.plate.splice(this.kuaile, 1, '')
        this.kuaile--
        if (this.kuaile < 0) {
          this.kuaile = 0
          this.txtboardshow = true
          this.numboardshow = false
        }
      }
    },
    chose (a, b) {
      this.kuaile = b
      this.hide = 1
      if (b > 0) {
        this.txtboardshow = false;
        this.numboardshow = true;
      } else {
        this.txtboardshow = true;
        this.numboardshow = false;
      }
    },
    txtclick: function (txt, indexi, size) {
      this.txtboardshow = false;
      this.numboardshow = true;
      if (this.duration == 0) {
        if (this.kuaile > 6) {
          this.txtboardshow = false;
          this.numboardshow = false;
          return false
        } else {
          this.plate.splice(this.kuaile, 1, txt)
        }
      } else {
        if (this.kuaile > 7) {
          this.txtboardshow = false;
          this.numboardshow = false;
          return false
        } else {
          this.plate.splice(this.kuaile, 1, txt)
        }
      }

      this.kuaile++
    },
    async selct () {
      let that = this;
      var html = ''
      that.plate.forEach((a, b) => {
        html += a
      })
      console.log(html)
      if(this.card==0){
        if (!isLicensePlate(html)) {
          MessageBox('提示', '请填写正确的车牌号码')
          return false
        }
      }else if(this.card==1){
        if (!isLicensePlate1(html)) {
          MessageBox('提示', '请填写正确的车牌号码')
          return false
        }
      }     
      let data = {
        car_number: html
      }
      let message = await chaxunjiao(data)
      if (message.data.resCode == 1 || message.data.resCode == 2) {
        console.log(message)
        localStorage.setItem('carnumber', message.data.carnumber)
        localStorage.setItem('longdate', message.data.longdate)
        localStorage.setItem('onsale_price', message.data.onsale_price)
        localStorage.setItem('paid_price', message.data.paid_price)
        localStorage.setItem('paking_lot_name', message.data.paking_lot_name)
        localStorage.setItem('price', message.data.price)
        localStorage.setItem('startdate', message.data.startdate)
        localStorage.setItem('time_out', message.data.time_out)
        localStorage.setItem('img', message.data.img)
        localStorage.setItem('HPrice', message.data.HPrice)
        localStorage.setItem('priceUnit', message.data.priceUnit)
        that.$router.push({ path: '/carOrderPay', query: { vals: message.data } })
      }else if(message.data.resCode == 4){
         MessageBox('提示', '未查询到有临近车牌');
      } else {
        MessageBox('提示', message.data.result);
      }
    },
    numclick: function (num, indexi, size) {
      if (this.duration == 0) {
        if (this.kuaile > 6) {
          return
        } else {
          this.plate.splice(this.kuaile, 1, num)
        }
        this.kuaile++
        if (this.kuaile > 6) {
          this.hide = 0
        }
      } else {
        if (this.kuaile > 7) {
          return
        } else {
          this.plate.splice(this.kuaile, 1, num)
        }
        this.kuaile++
        if (this.kuaile > 7) {
          this.hide = 0
        }
      }
    },
    async addCard () {
      let that = this;
      var html = ''
      that.plate.forEach((a, b) => {
        html += a
      })
      console.log(html)
      if (!isLicensePlate(html)) {
        MessageBox('提示', '请填写正确的车牌号码')
        return false
      }

      let data = {
        openid: that.openid,
        brandname: html
      }
      let message = await addtian(data)
      if (message.data.resCode == 200) {
        MessageBox({
          title: '提示',
          message: '添加成功',
          closeOnClickModal: false
        }).then(res => {
          console.log(res)
          if (this.$route.query.distinction == 5) {
            that.$router.push('/people/vip')
          } else if (this.$route.query.peoplecar == 6) {
            that.$router.push('/people/carlist')
          } else {
            that.$router.push('/list')
          }
        })
      } else if (message.data.resCode === '500') {
        MessageBox('提示', '不能重复添加相同车牌号');
      } else {
        MessageBox('提示', '车牌号最多添加2个');
      }                                                                                                            
    },
    check (val) {
      this.duration = val
      this.hide = 1
      if (val == 0) {
        this.card = 0;
        this.plate = ['', '', '', '', '', '', '']
        this.txtboardshow = true
        this.numboardshow = false
        this.kuaile = 0
        if (this.kuaile == 0) {
          this.txtboardshow = true
          this.numboardshow = false
        } else {
          this.txtboardshow = false
          this.numboardshow = true
        }
      } else if (val == 1) {
        this.txtboardshow = true
        this.numboardshow = false
        this.card = 1
        this.plate = ['', '', '', '', '', '', '', '']
        this.kuaile = 0
        if (this.kuaile == 0) {
          this.txtboardshow = true
          this.numboardshow = false
        } else {
          this.txtboardshow = false
          this.numboardshow = true
        }
      }
    }
  },
  mounted: function () {
    if (this.duration == 0) {
      this.plate = ['', '', '', '', '', '', '']
    } else {
      this.plate = ['', '', '', '', '', '', '', '']
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../style/mixin.scss';
.mint-radiolist {
  width: 100%;
  margin: 0 auto;
  @include sc(16px, #999);
  display: flex;
  justify-content: space-around;
  margin-left: -0.2rem;
  font-size: 16px;
  color: #999;
}
.mint-radiolist .mint-cell {
  width: 33% !important;
}
.card {
  position: relative;
}
.picker-btn-wrap {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
}
.mint {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  z-index: 99;
}
.title {
  display: flex;
  margin-bottom: 0.2rem;
  background-color: #ffffff;
  justify-content: space-around;
  border-bottom: 1px solid #d8d8d8;
}
.title div {
  text-align: center;
  font-size: 0.32rem;
  height: 0.72rem;
  line-height: 0.72rem;
  border-bottom: 2px solid #ffffff;
  color: #333333;
}
.title .active {
  border-bottom: 2px solid #f68b1b;
  color: #f68b1b;
}
.used {
  display: flex;
  width: 90%;
  justify-content: center;
  margin: 0 auto;
}
.used p {
  width: 0.1rem;
  height: 0.1rem;
  background-color: #333333;
  margin: 0.23rem 0.1rem;
  border-radius: 50%;
}
.keyboard {
  bottom: 0;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  height: 2.56rem;
  background: #ced5dd;
}
.buttonOne:active {
  background-color: #f68b1b;
  color: #ffffff;
}
.buttonTwo:active {
  background-color: #f68b1b;
  color: #ffffff;
}
.buttonThree:active {
  background-color: #f68b1b;
  color: #ffffff;
}
.addBox {
  padding-bottom: 1rem;
  margin-top: 0.21rem;
}
.add {
  border-radius: 5px;
  background-color: #f68b1b;
  width: 83%;
  text-align: center;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.15rem;
  border: 1px solid #f68b1b;
  color: #ffffff;
  margin: 0 auto;
}
.add:active {
  border: 1px solid #20b2aa;
}
.unadd {
  border-radius: 5px;
  background-color: #cccccc;
  width: 83%;
  text-align: center;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 15px;
  border: 1px solid #cccccc;
  color: #ffffff;
  margin: 0 auto;
}

#popup {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 0;
  top: 0;
}
.popupBox {
  width: 60%;
  background-color: #ffffff;
  text-align: center;
  margin: 50% 20%;
  border-radius: 5px;
}
.popupBox p {
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.28rem;
  color: #f68b1b;
}
.popupBox p:nth-of-type(1) {
  padding-top: 0.1rem;
}
.popupBox p:nth-of-type(2) {
  margin: 0.18rem 0;
}
.popupBox p:nth-of-type(3) {
  border-top: 1px solid #d8d8d8;
  height: 0.8rem;
  line-height: 0.8rem;
}
.popupBox img {
  width: 0.6rem;
}
.popupBox p:nth-of-type(3):active {
  background-color: #f68b1b;
  color: #ffffff;
}
.popupLod {
  width: 60%;
  text-align: center;
  margin: 50% 20%;
}
.popupLod img {
  width: 50%;
}
.prompt {
  background-color: #ffffff;
  text-align: center;
  color: #787878;
  padding: 0.1rem;
}
input {
  height: 0.3rem;
  margin-top: -0.1rem;
  width: 90%;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  text-indent: 5px;
}
.pkey-header2 {
  height: 0.33rem;
  width: 100%;
  font-size: 14px;
  background: #ededed;
  line-height: 0.33rem;
}
.pkey-header2 span {
  float: right;
  color: #f68b1c;
  margin-right: 0.15rem;
}
.pkey-keyboard {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.pkey-keyscontain {
  background: #ced5dd;
  height: 2.14rem;
  width: 100%;
}
.pkey-keyscontain span,
label {
  box-shadow: 2px 2px 2px #888;
  width: 0.31rem;
  height: 0.4rem;
  font-size: 0.19rem;
  display: inline-block;
  border-radius: 5px;
  margin: 0 0.03rem;
  margin-top: 0.11rem;
  text-align: center;
  line-height: 0.4rem;
  background-color: #ffffff;
  color: #303030;
}
.pkey-keyscontain span {
  width: 0.46rem;
}
.keybo > li:nth-child(7) {
  text-align: center;
}
.newsquare {
  width: 0.34rem;
  height: 0.43rem;
  border: 1px solid #c9c9c9;
  text-align: center;
  line-height: 0.43rem;
  margin: 0 5px;
  border-radius: 4px;
  font-size: 24px;
}
.gactive {
  border: 1px solid #f68b1c;
}
section div {
  display: flex;
  justify-content: space-around;
  font-size: 0.16rem;
  color: #999;
  i {
    display: inline-block;
    background-color: #fff;
    border-radius: 100%;
    border: 1px solid #ccc;
    width: 0.18rem;
    height: 0.18rem;
    vertical-align: middle;
    margin-right: 0.03rem;
    text-align: center;
    span {
      display: inline-block;
      margin-bottom: 0.01rem;
      @include wh(0.08rem, 0.08rem);
      border-radius: 50%;
      transform: scale(0);
      background: #f68b1c;
      transition: transform 0.2s;
    }
  }
}
.colorg {
  i {
    border-color: #f68b1c;
    span {
      transform: scale(1);
    }
  }
  span {
    color: #f68b1c;
  }
}
</style>