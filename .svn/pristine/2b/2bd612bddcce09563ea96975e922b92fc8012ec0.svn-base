<style>
.picker-items .picker-slot:nth-child(1) {
  display: none !important;
}
.pic .picker-items .picker-slot:nth-child(1) {
  display: block !important;
}
</style>

<template>
  <div style="background:#efefef;"
       id="vip"
       class="rating_page">
    <div style="width:100%;background:#fff;">
      <div style="width:96%;margin:0 auto;">
        <div>

          <div style="display:flex; "
               class="park">
            <p class="asz">停车场名称</p>
            <dropdown @item-click="dropDownClick"
                      v-if="!nllerct"
                      :isNeedSearch="true"
                      :itemlist="itemlist"
                      style="margin-left:0.4rem;font-size:0.15rem;margin-top: 0.01rem;"></dropdown>
            <div v-if="nllerct"
                 style="width:61%;margin-left:0.45rem;font-size:15px;margin-top:0.05rem;color:#606266;
    margin-top: 0.12rem;">
              {{aname}}
            </div>
          </div>
          <!-- <select v-model="parking_id"
                  v-if="!nllerct"
                  filterable
                  placeholder=""
                  @change="changval(parking_id)"
                  class="selectInput selectInputonde">
            <option value=""
                    disabled
                    selected>请选择停车场名称</option>
            <option v-for="item in arr"
                    :key="item.parking_id"
                    :label="item.parking_name"
                    :value="item.parking_id">
            </option>
          </select> -->

        </div>
        <div style="display:flex;"
             class="park">
          <p style=""
             class="asz">类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型</p>
          <el-select v-model="typecar"
                     placeholder="请选择类型"
                     style="outline: none;font-size:0.15rem;"
                     class="selectInput selectInputonde"
                     @change="changvallop(typecar)">
            <el-option v-for="item in req"
                       :key="item.id"
                       :label="item.name"
                       :value="item.id">
            </el-option>
          </el-select>
          <!-- <p class="imgp"><img src="../../static/image/a (2).png"
                 alt=""></p> -->
        </div>
        <div style="display:flex;"
             class="park">
          <p style=""
             class="asz">车牌号码</p>
          <!-- <el-select v-model="car_number"
                     placeholder="请选择车牌号码"
                     @change="changvala">
            <el-option>未选择</el-option>
            <el-option v-for="item in List"
                       :key="item"
                       :label="item.brandname"
                       :value="item"></el-option>
          </el-select> -->
          <span @click="brandB()"
                style="width:60.8%;
                    margin-left: 0.45rem;
                    color:#606266;
                        font-size: 15px;
    margin-top: 0.13rem;">{{brandname}}&nbsp;
            <img style="    margin-top:-0.05rem;
    float: right;width:15px"
                 src="../../static/image/jt.png" />
          </span>
          <mt-popup v-model="popupVisible" position="bottom">
            <div v-for="(brand,index) in brandnameList" :key="index" @click="brandN(index)">
              {{brand.brandname}}
            </div>
            <div>
              <router-link class="addCard" :to="{ path:'/card',query: { arr: 7 ,distinction:5}}">+</router-link>
            </div>
          </mt-popup>
          <!-- <ul v-if="brand==1"
              class="brandnameList">
            <li @click="brandN(index)"
                v-for="(brand,index) in brandnameList"
                :key="index">{{brand.brandname}}</li>
            <li>
              <router-link class='addCard acar'
                           :to="{ path:'/card',query: { arr: 7 ,distinction:5}}">+</router-link>
            </li>
          </ul> -->
          <!-- <p class="imgp"><img src="../../static/image/a (2).png"
                 alt=""></p> -->
        </div>
        <div style="display:flex;"
             class="park"
             @click="nameclick">
          <p class="asz"
             style="width:26%;">车主姓名</p>
          <input placeholder="请输入车主姓名"
                 style="width:76%;margin-left: 0.3rem;height: 0.22rem !important;font-size: 0.15rem;padding: 0.1rem 0 !important;"
                 ref="nameval"
                 v-model="name">
        </div>
        <div style="display:flex;"
             @click="phoneclick"
             class="park">
          <p style="width:26%;"
             class="asz">车主电话</p>
          <input placeholder="请输入车主电话"
                 ref="phoneval"
                 style="width:76%;margin-left: 0.3rem;height: 0.22rem !important;font-size: 0.15rem;
    padding: 0.1rem 0 !important;"
                 v-model="tel">
        </div>
        <!-- <mt-field type="text" label="车主姓名：" placeholder="请输入车主姓名" v-model="name" style="margin-bottom:0.2rem;">
                <span class="input-group-addon"></span>
            </mt-field> -->
        <!-- <mt-field type="number" label="车主电话：" placeholder="请输入车主电话" v-model="tel" style="margin-bottom:0.2rem;">
                <span class="input-group-addon"></span>
            </mt-field> -->
        <div style="display:flex;"
             class="park">
          <p style="width:25%;"
             class="asz">充值金额</p>
          <input style="width:1.8rem;margin-left: 0.45rem;height: 0.22rem !important;font-size: 0.15rem;padding: 0.1rem 0 !important;text-indent:0!important;"
                 placeholder="请输入充值金额"
                 :readonly="lopop"
                 v-model="money"
                 @blur="bottocent">
          <p style="font-size:15px;line-height:0.35rem;width:18%;text-align:right;">元</p>
        </div>

        <div style="display:flex;"
             class="park">
          <p style="margin-right:0.2rem;width:23.5%;"
             class="asz">开始时间</p>
          <div style="line-height:0.4rem;    font-size: 15px;color:#606266;margin-left:0.25rem"
               @click="chosestart"
               v-if="start">选择开始时间</div>
          <div style="line-height:0.4rem;    font-size: 15px;margin-left:0.25rem"
               @click="chosestart"
               v-if="!start">{{(value1).replace(/\-/g,'/')}}</div>
          <!-- <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
                </el-date-picker> -->
          <mt-datetime-picker lockScroll="true"
                              ref="picker"
                              v-model="sel"
                              class="myPicker"
                              type="date"
                              month-format="{value}月"
                              date-format="{value}日"
                              hour-format="{value}"
                              minute-format="{value}"
                              second-format="{value}"
                              :startDate="startDate"
                              :endDate="endDate"
                              @confirm="handleConfirms">
          </mt-datetime-picker>
        </div>
        <!-- <div style="display:flex;"
             class="park">
          <p style=""
             class="asz">选择月份</p>
          <div @click="yue"
               style="line-height:0.4rem;margin-left:0.3rem;">选择</div>
          <div style="line-height:0.4rem;margin-left:0.3rem;">{{y}}</div>
          <div style="
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          opacity:.5;
          background:#000;
          z-index:2002"
               v-if="timeyue">
          </div>
          <div style="
          position: fixed;
          bottom: 0;
          width: 100%;
          text-align: center;
          background: #fff;
          left: 0;
          z-index:2007"
               class="pic"
               v-if="timeyue">
            <mt-picker :slots="slots"
                       valueKey="name"
                       :visibleItemCount="5"
                       :itemHeight="40"
                       showToolbar
                       ref="pickeryue">

              <div class="picker-btn-wrap"
                   style="color:#26a2ff;display:flex;
                     border-bottom: solid 1px #eaeaea;height:0.4rem;line-height:0.4rem;    font-size: 16px;">

                <div class="picker-cancel"
                     style="width:50%"
                     @click="timeyue=false">取消</div>

                <div class="picker-sure"
                     style="width:50%"
                     @click="confirmChoose">确定</div>

              </div>

            </mt-picker>
          </div>

          <mt-datetime-picker lockScroll="true"
                              ref="pickeryue"
                              class="myPicker"
                              type="date"
                              month-format="{value}"
                              @confirm="handleConfirms">
          </mt-datetime-picker>
        </div> -->
        <div style="display:flex;"
             class="park"
             v-if="ctime">
          <p style="margin-right:0.2rem;"
             class="asz">结束时间</p>
          <div style="line-height:0.4rem; font-size: 15px;    margin-left: 0.25rem;"
               @click="choseend"
               v-if="end">{{value2}}

          </div>

          <!-- <el-date-picker
                v-model="value2"
                type="date"
                placeholder="选择日期">
                </el-date-picker> -->
          <!-- <mt-datetime-picker lockScroll="true"
                              ref="pickers"
                              v-model="sels"
                              class="myPicker"
                              type="date"
                              month-format="{value}"
                              date-format="{value}"
                              hour-format="{value}"
                              minute-format="{value}"
                              @confirm="handleConfirm">
          </mt-datetime-picker> -->
        </div>
      </div>
    </div>

    <div style="width:90%;margin:0.2rem auto;background:#fb861c;height:0.4rem;text-align:center;line-height:0.4rem;color:#fff;border-radius:5px;    font-size: 0.16rem;"
         @click="kai">
      开通
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { kaitong, kaitongtwo, shaixuan, start } from './api/people.js'
import { valueop, isLicensePlate, serarchc, end } from './api/api.js'
import { MessageBox, Picker, Popup } from 'mint-ui';
import Calendar from 'vue-calendar-component';
import Dropdown from './sousukuang'
import Qs from 'qs'
export default {
  name: 'vip',
  data () {
    return {
      itemlist: {
        cur: {
          val: "",
          name: "请选择停车场"
        },
        data: []
      },


      anameid: '',
      aname: '',
      nllercta: false,
      ctime: false,
      nllerct: '',
      brand: 0,
      brandname: '',
      brandnameList: [{ brandname: '' }],
      startDate: new Date('2019-07'),
      endDate: new Date('2019-12-31'),
      start: true,
      end: true,
      dateVal: '',
      car_number: '',
      money: '',
      parking_id: '',
      List: [],
      sel: '',
      sels: '',
      lopop: '',
      ida: '',
      reats: '',
      idc: '',
      typecar: '',
      pickerValue: '',
      value1: '',
      value2: '',
      name: '',
      tel: '',
      req: [],
      start_time: '',
      end_time: '',
      moneyadd: '',
      y: '',
      az: '',
      appId: '',
      timeStamp: '',
      nonceStr: '',
      package: '',
      paySign: '',
      signType: '',
      timeyue: false,
      slots: [{ values: [1, 2, 3, 4, 5, 6, 7, 8, 9] }],
      popupVisible:false,
    }
  },
  components: {
    Calendar,
    Dropdown
  },
  watch: {
    $route: {
      handler: function (a, b) {
        console.log(a)
        console.log(b)
      },
      deep: true
    }
  },
  methods: {
    dropDownClick (e) {
      this.typecar = ''
      this.ida = e
      let data = {
        parking_id: e,
        page: 1,
        pageSize: 10,
        userId: 'SURIOT',
        dealer: 123
      }
      shaixuan(data).then(res => {
        this.req = res.data.result
        this.req.find((a, y) => {
          if (a.name == 'A') {
            a.name = '永久免费'
          } else if (a.name == 'B') {
            a.name = '月卡'
          } else if (a.name == 'C') {
            a.name = '年卡'
          } else if (a.name == 'D') {
            a.name = '限时'
          } else if (a.name == 'E') {
            a.name = '储值'
          } else {
            a.name = '季卡'
          }
        })
      })
    },
    nameclick () {
      this.$nextTick(function () {
        this.$refs.nameval.focus()
      })
    },
    phoneclick () {
      this.$nextTick(function () {
        this.$refs.phoneval.focus()
      })
    },
    confirmChoose () {
      this.y = this.$refs.pickeryue.getValues()[0]
      this.timeyue = false
    },
    brandN (index) {
      console.log(index)
      this.brandname = this.brandnameList[index].brandname;
      this.brand = 0;
      this.popupVisible = false;
    },
    brandB () {
      // if (this.brand == 0) {
      //   this.brand = 1;
      // } else {
      //   this.brand = 0;
      // }
      this.popupVisible = true;
    },
    yue () {
      this.timeyue = !this.timeyue;
    },
    bottocent () {
      window.scrollTo(0, 0)
    },
    handelChange (val) {
      console.log(this.formatDate(val).slice(0, 10))
    },
    dateConfirm () { // 时间选择器确定按钮，并把时间转换成我们需要的时间格式
      this.selectedValue = formatDateMin(this.dateVal)
    },
    chosestart () {
      this.$refs.picker.open()
      this.sel = start()
      this.value1 = start().slice(0, 10)
      console.log(this.value1)
      this.start = false
    },
    parseTime (date) {

      var seperator1 = "/";
      var seperator2 = ":";
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      var strHours = date.getHours();
      var strMinutes = date.getMinutes();
      var strSeconds = date.getSeconds();

      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      if (strHours >= 0 && strHours <= 9) {
        strHours = "0" + strHours;
      }
      if (strMinutes >= 0 && strMinutes <= 9) {
        strMinutes = "0" + strMinutes;
      }
      if (strSeconds >= 0 && strSeconds <= 9) {
        strSeconds = "0" + strSeconds;
      }

      var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + strHours + seperator2 + strMinutes
        + seperator2 + '00';
      return currentdate;
    },
    handleConfirms (val) {
      console.log(val)
      this.value1 = this.parseTime(val).slice(0, 10)
      console.log(this.typecar)
      console.log(this.req)
      console.log(this.value1)
      let nows = new Date(this.value1);
      console.log(new Date())
      console.log(9012)
      console.log(nows)
      this.req.find((x, y) => {
        if (x.id == this.typecar) {
          let typename = x.name
          console.log(typename)

          if (typename == '储值') {
            this.value2 = '2099/12/31'
            this.ctime = true
          } else if (typename == '月卡') {
            // console.log(this.DateAdd("m ", 3, nows))
            // console.log(this.replatime(this.DateAdd("m", 1, nows)))
            // alert(this.DateAdd("m ", 3, nows))
            // alert(this.func((this.DateAdd("m ", 1, nows))))
            this.value2 = this.replatime((this.DateAdd("m", 30, nows)))
            // this.value2 = this.replatime((this.DateAdd("m ", 1, nows)))
            this.ctime = true
            console.log(1999999)
            return false;
          } else if (typename == '年卡') {
            this.value2 = this.replatime(this.DateAdd("y", 365, nows))
            // this.value2 = this.replatime(this.DateAdd("y ", 1, nows))

            this.ctime = true
            console.log(1888888)
            return false;
          } else if (typename == '季卡') {
            this.value2 = this.replatime((this.DateAdd("m", 90, nows)))
            // this.value2 = this.replatime((this.DateAdd("m ", 3, nows)))
            this.ctime = true
            console.log(177777)
            return false;
          }
        }
      })
    },
    pomitst (ap) {
      console.log(ap)
      let b = ap.indexOf('/') + 1
      let d = ap.lastIndexOf('/')
      let f = ap.substring(b, d)
      if (f < 10) {
        f = '0' + f
      }
      return ap.substring(0, b) + f + ap.substring(d, ap.length)



    },
    choseend () {
      this.$refs.pickers.open()
      this.sels = start()
      // this.value2 = start()
      this.end = false
    },

    // this.htime=
    changval (val) {
      console.log(val)
      this.typecar = ''

      let data = {
        parking_id: val,
        page: 1,
        pageSize: 10,
        userId: 'SURIOT',
        dealer: 123
      }
      shaixuan(data).then(res => {
        this.req = res.data.result
        this.req.find((a, y) => {
          if (a.name == 'A') {
            a.name = '永久免费'
          } else if (a.name == 'B') {
            a.name = '月卡'
          } else if (a.name == 'C') {
            a.name = '年卡'
          } else if (a.name == 'D') {
            a.name = '限时'
          } else if (a.name == 'E') {
            a.name = '储值'
          } else {
            a.name = '季卡'
          }
        })
      })
    },
    changvallop (val) {
      console.log(val)
      console.log(this.value1)
      if (this.value1) {
        console.log(1)
        console.log(this.value1)
        // var nowq = ;
        // console.log(nowq)
        this.req.find((x, y) => {
          if (x.id == val) {
            if (x.name == '限时') {
              this.money = x.money

              this.start_time = this.value1
              this.end_time = this.value2

            } else if (x.name == '储值') {
              this.shoz = false
              this.lopop = false
              this.money = ''
              // this.start_time = this.getNowFormatDate()
              this.ctime = true
              this.value2 = '2099/12/31'
            } else if (x.name == '月卡') {
              this.lopop = true
              this.shoz = false
              this.money = x.money
              // this.start_time = this.getNowFormatDate()
              console.log(this.replatime((this.DateAdd("m", 30, new Date(this.value1)))))
              this.value2 = this.replatime((this.DateAdd("m", 30, new Date(this.value1))))

              // this.value2 = this.replatime((this.DateAdd("m ", 1, now)))
              this.ctime = true
            } else if (x.name == '年卡') {
              this.lopop = true
              this.shoz = false
              this.money = x.money
              // this.start_time = this.getNowFormatDate()
              this.value2 = this.replatime(this.DateAdd("y", 365, new Date(this.value1)))
              // this.value2 = this.replatime(this.DateAdd("y ", 1, now))
              this.ctime = true
            } else if (x.name == '季卡') {
              this.shoz = false
              this.lopop = true
              this.money = x.money
              this.value2 = this.replatime((this.DateAdd("m", 90, new Date(this.value1))))
              // this.start_time = this.getNowFormatDate()
              // this.value2 = this.replatime((this.DateAdd("m ", 3, now)))
              console.log(this.value2)
              this.ctime = true
            } else if (x.name == '永久免费') {
              this.shoz = false
              this.lopop = true
              this.money = ''
              // this.start_time = this.getNowFormatDate()
              this.end_time = '2099-05-24 11:07:57'
            }
          }
        })
      } else {
        console.log(2)
        let nows = new Date();
        this.req.find((x, y) => {
          if (x.id == val) {
            if (x.name == '限时') {
              this.money = x.money

              this.start_time = this.value1
              this.end_time = this.value2

            } else if (x.name == '储值') {
              this.shoz = false
              this.lopop = false
              this.money = ''
              // this.start_time = this.getNowFormatDate()
              this.value2 = '2099/05/24 11:07:57'
            } else if (x.name == '月卡') {
              this.lopop = true
              this.shoz = false
              this.money = x.money
              // this.start_time = this.getNowFormatDate()
              // this.value2 =
              this.value2 = this.replatime((this.DateAdd("m", 1, nows)))

            } else if (x.name == '年卡') {
              this.lopop = true
              this.shoz = false
              this.money = x.money
              // this.start_time = this.getNowFormatDate()
              // this.value2 = 
              this.value2 = this.replatime((this.DateAdd("m", 1, nows)))
            } else if (x.name == '季卡') {
              this.shoz = false
              this.lopop = true
              this.money = x.money
              // this.start_time = this.getNowFormatDate()
              // 
              console.log(this.replatime(this.DateAdd("m", 3, nows)))
              // this.value2 =
              this.value2 = this.replatime((this.DateAdd("m", 3, nows)))
            } else if (x.name == '永久免费') {
              this.shoz = false
              this.lopop = true
              this.money = ''
              // this.start_time = this.getNowFormatDate()
              this.end_time = '2099/05/24 11:07:57'
            }
          }
        })
      }

    },
    changvala (val) {
      this.idc = val
    },
    kai () {

      if (this.name == '') {
        MessageBox('提示', '请输入车主姓名')
        return false
      }
      if (this.tel == '') {
        MessageBox('提示', '请输入车主电话')
        return false
      } else {
        if (!valueop(this.tel)) {
          MessageBox('提示', '请输入正确的车主电话')
          return false
        }
      }
      if (this.aname) {
        this.itemlist.data.forEach((a, b) => {
          if (a.parking_name == this.aname) {
            this.reats = a.parking_id
          }
        })
      } else {
        if (this.ida == '') {
          MessageBox('提示', '请输入停车场名称')
          return false
        } else {
          console.log(90879)
          this.reats = this.ida
        }
      }
      if (this.typecar == '' || this.typecar == undefined) {
        MessageBox('提示', '请输入会员类型')
        return false
      } else {
        this.req.find((x, y) => {
          if (x.id == this.typecar) {
            if (x.name == '储值' && this.money == '') {
              MessageBox('提示', '请输入充值金额')
              return false
            } else if (this.money < 0) {
              MessageBox('提示', '请输入充值金额')
              return false
            }
          }
        })
      }
      if (this.brandname == '' || this.brandname == undefined) {

        MessageBox('提示', '请输入车牌号码')
        return false
      }

      if (this.value2 == '') {
        MessageBox('提示', '请输入结束时间')
        return false
      }
      if (this.value1 == '') {
        MessageBox('提示', '请输入开始时间')
        return false
      }

      let data = {
        car_number: this.brandname,
        // car_number:'浙AW19333',
        money: this.money,
        parking_id: this.reats,
        openId: localStorage.getItem('openid'),
        // openId:'oOKex1Ow5nB_qymzrzj4L7Gm7snU',
        ip: returnCitySN.cip
      }
      console.log(this.reats)

      console.log(this.typecar)
      if (this.value1) {
        this.start_time = (this.value1 + ' 00:00:00').replace(/\//g, '-')
      }
      if (this.value2) {
        this.end_time = (this.value2 + ' 00:00:00').replace(/\//g, '-')
      }
      console.log(this.start_time)
      console.log(this.end_time)
      kaitong(data).then(res => {
        console.log(res)
        if (res.data.resCode == "0") {
          if (res.data.nowStatus.substring(0, 1) == 'E') {
            this.moneyadd = res.data.nowStatus.substring(2, res.data.nowStatus.length - 2)
          }
          console.log(this.moneyadd)
          this.appId = res.data.appId
          this.timeStamp = res.data.timeStamp
          this.nonceStr = res.data.nonceStr
          this.package = res.data.package
          this.paySign = res.data.paySign
          this.signType = res.data.signType

          this.az = Number(this.money) + Number(this.moneyadd)
          if (typeof WeixinJSBridge == "undefined") {
            if (document.addEventListener) {
              document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
            } else if (document.attachEvent) {
              document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
              document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
            }
          } else {
            this.onBridgeReady();

          }

        } else {
          MessageBox('提示', res.data.result)
        }
      })
    },
    onBridgeReady () {
      let that = this;
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
          "appId": that.appId,     //公众号名称，由商户传入     
          "timeStamp": that.timeStamp,         //时间戳，自1970年以来的秒数     
          "nonceStr": that.nonceStr, //随机串     
          "package": that.package,
          "signType": that.signType,         //微信签名方式：     
          "paySign": that.paySign //微信签名 
        },
        function (res) {
          //  alert(res.err_msg)
          if (res.err_msg == "get_brand_wcpay_request:ok") {
            let dataA = {
              car_number: that.brandname,
              money: that.az,
              parking_id: that.reats,
              end_time: that.end_time,
              start_time: that.start_time,
              name: that.name,
              tel: that.tel,
              of_type: that.typecar,
              openId: localStorage.getItem('openid')
            }

            kaitongtwo(dataA).then(mes => {
              if (mes.data.resCode == 0) {
                MessageBox('提示', '开通成功').then(action => {
                  this.$router.go(-1)
                })
              } else {
                MessageBox('提示', '开通失败').then(action => {
                  this.$router.go(-1)
                })
              }
            })
          }
        });
    },



    num (s) {
      s < 10 ? '0' + s : s;
    },
    DateAdd (interval, number, date) {
      // var seperator1 = "-";
      // var seperator2 = ":";
      // var m = date.getMonth() + 1;
      // var d = date.getDate();
      var atime;
      switch (interval) {
        case "y ": {
          atime = date.setFullYear(date.getFullYear() + number);
          return atime;
          break;
        }
        case "q ": {
          atime = date.setMonth(date.getMonth() + number * 3);

          return atime;
          break;
        }
        case "m ": {
          atime = date.setMonth(date.getMonth() + number);

          return atime;
          break;
        }
        case "w ": {

          atime = date.setDate(date.getDate() + number * 7);

          return atime;
          break;
        }
        case "d ": {
          atime = date.setDate(date.getDate() + number);

          return atime;
          break;
        }
        case "h ": {
          atime = date.setHours(date.getHours() + number);
          return atime;
          break;
        }
        case "m ": {
          atime = date.setMinutes(date.getMinutes() + number);
          return atime;
          break;
        }
        case "s ": {
          atime = date.setSeconds(date.getSeconds() + number);
          return atime;
          break;
        }
        default: {
          atime = date.setDate(date.getDate() + number);
          return atime;
          break;
        }
      }
    },
    add0 (val) {
      return val < 10 ? '0' + val : val
    },
    replatime (val) {
      var time = new Date(val);
      var year = time.getFullYear();
      var month = time.getMonth() + 1;
      var date = time.getDate();
      var hours = time.getHours();
      var minutes = time.getMinutes();
      var seconds = time.getSeconds();
      return year + '/' + this.add0(month) + '/' + this.add0(date)
    }

  },
  mounted () {
    var nows = new Date()
    let a = this.DateAdd("m ", 3, nows)
    // alert(a)
    // alert(this.replatime(a))




    let data = {
      page: 1,
      pageSize: 10000000,
      userId: 'SURIOT',
      dealer: 123
    }
    axios({
      method: 'post',
      url: `${this.httpUrl}/Parking/selectLotInfo`,
      data: Qs.stringify(data)
    }).then(res => {
      this.itemlist.data = res.data.result
      if (this.$route.query.id) {
        this.nllerct = true;
        this.itemlist.data.forEach((a, b) => {
          if (a.id == this.$route.query.id) {
            this.aname = a.parking_name
            this.anameid = a.parking_id
          }
        })
        let data = {
          parking_id: this.anameid,
          page: 1,
          pageSize: 10,
          userId: 'SURIOT',
          dealer: 123
        }
        shaixuan(data).then(res => {
          this.req = res.data.result
          this.req.find((a, y) => {
            if (a.name == 'A') {
              a.name = '永久免费'
            } else if (a.name == 'B') {
              a.name = '月卡'
            } else if (a.name == 'C') {
              a.name = '年卡'
            } else if (a.name == 'D') {
              a.name = '限时'
            } else if (a.name == 'E') {
              a.name = '储值'
            } else {
              a.name = '季卡'
            }
          })
        })
      } else {
        this.nllerct = false
        this.nllercta = true
      }
    })
    // document.title=this.$route.meta.title;
    // this.brandnameList = JSON.parse(localStorage.getItem('listcard'))
    this.tel = localStorage.getItem('tel') ? localStorage.getItem('tel') : localStorage.getItem('phone')
    let datas = {
      openid: this.openid
    }
    serarchc(datas).then(res => {
      console.log(res)
      if (res.data.resCode == 200) {

        res.data.result.forEach((a, b) => {
          if (a.priority == '1') {
            this.brandname = a.brandname
          }
        })
        this.brandnameList = res.data.result
        console.log(this.brandname)
      }
    })






  },
}
</script>
<style>
.rating_page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #efefef;
  z-index: 204;
}
.asz {
  font-size: 0.15rem;
  line-height: 0.4rem;
  width: 23%;
  text-align: right;
}
.input[type='text'] {
  border-radius: 5px;
  border: none;
  outline: none;
}
input {
  width: 1.8rem;
  height: 0.4rem;
  border-radius: 5px;
  text-indent: 0.1rem;
}
.el-input__inner {
  /* height: 0.3rem !important;
  padding: 0.2rem 0 !important; */
  /* height: 20px !important; */
  width: 2.3rem !important;
}
.park {
  border-bottom: 1px solid #efefef;
  padding: 0.05rem 0;
}
.el-icon-arrow-up:before {
  content: '' !important;
}
.el-select {
  margin-left: 0.2rem;
  line-height: 0.4rem;
}
input {
  border: none !important;
  outline: none !important;
}
.imgp {
  width: 0.07rem;
  height: 0.12rem;
  margin-top: 0.12rem;
}
.imgp img {
  width: 100%;
  height: 100%;
}
.brandnameList {
  position: absolute;
  width: 1rem;
  background-color: #ffffff;
  z-index: 999;
  right: 0;
  top: 1.61rem;
  text-align: center;
  border: 1px solid #d8d8d8;
  overflow: scroll;
  max-height: 1.86rem;
}
.brandnameList li {
  line-height: 0.36rem;
  border-bottom: 1px solid #d8d8d8;
}
.brandnameList li:nth-last-of-type(1) {
  border: none;
}
.el-input.is-disabled .el-input__inner {
  color: rgb(251, 134, 28);
}
select:focus {
  outline: 0;
}
.addCard {
  border: 1px solid #787878;
  width: 0.2rem;
  height: 0.2rem;
  display: inline-block;
  line-height: 0.2rem;
  border-radius: 50%;
  color: #787878;
}
.selectInputonde {
  width: 64%;
  outline: 0;
  border: none;
  font-size: 0.15rem;
  color: #676767;
}
.selectInput option {
  border: 0;
  outline: 0;
}
.mint-popup{
  width: 100%;
  max-height: 164px;
  overflow-y: auto;
}
.mint-popup div{
  text-align: center;
  border-bottom: 1px solid #E4E4E4;
  height: 40px;
  line-height: 40px;
  font-size: 0.15rem;
  color: #303030;
}
.mint-popup div:last-of-type{
  border-bottom: 1px solid transparent;
}
</style>
