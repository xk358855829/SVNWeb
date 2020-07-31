<template>
  <div style="background:#efefef;" id="vip" class="rating_page">
    <div style="width:100%;background:#fff;">
      <div style="width:96%;margin:0 auto;">
        <div>
          <div style="display:flex; " class="park">
            <p class="asz">站点名称</p>
            <input
              style="width:64%;margin-left: 0.3rem;height: 0.22rem !important;font-size: 0.15rem;padding: 0.1rem 0 !important;"
              value="所有站点"
              disabled
              class="sitename"
            />
            <!-- <dropdown
              @item-click="dropDownClick"
              v-if="!nllerct"
              :isNeedSearch="true"
              :itemlist="itemlist"
              style="margin-left:0.4rem;font-size:0.15rem;margin-top: 0.01rem;"
            ></dropdown>
            <div
              v-if="nllerct"
              style="width:61%;margin-left:0.4rem;font-size:15px;color:#606266;
    margin-top: 0.12rem;"
            >{{aname}}</div>-->
          </div>
        </div>
        <div style="display:flex;" class="park">
          <p style class="asz">会员类型</p>
          <el-select
            v-model="typecar"
            placeholder="请选择类型"
            style="outline: none;font-size:0.3rem;"
            class="selectInput selectInputonde"
            @change="changvallop(typecar)"
          >
            <el-option v-for="item in req" :key="item.type" :label="item.name" :value="item.type"></el-option>
          </el-select>
          <!-- <p class="imgp"><img src="../../static/image/a (2).png"
          alt=""></p>-->
        </div>
        <div style="display:flex;" class="park">
          <p style class="asz">车牌号码</p>
          <span
            @click="brandB()"
            style="width:64%;
                    margin-left: 0.4rem;
                    color:#606266;
                        font-size: 15px;
    margin-top: 0.125rem;"
          >
            {{brandname}}&nbsp;
            <img
              style="float: right;width:15px;margin-right:9px;"
              src="../../../static/image/jt.png"
            />
          </span>
          <ul v-if="brand==1" class="brandnameList">
            <li
              @click="brandN(index)"
              v-for="(brand,index) in brandnameList"
              :key="index"
            >{{brand.brandname}}</li>
            <li>
              <router-link
                class="addCard acar"
                :to="{ path:'/card',query: { arr: 7 ,distinction:5}}"
              >+</router-link>
            </li>
          </ul>
        </div>
        <div style="display:flex;" class="park" @click="nameclick">
          <p class="asz">车主姓名</p>
          <input
            placeholder="请输入车主姓名"
            style="width:64%;margin-left: 0.3rem;height: 0.22rem !important;font-size: 0.15rem;padding: 0.1rem 0 !important;"
            ref="nameval"
            v-model="name"
          />
        </div>
        <div style="display:flex;" @click="phoneclick" class="park">
          <p class="asz">车主电话</p>
          <input
            placeholder="请输入车主电话"
            ref="phoneval"
            style="width:64%;margin-left: 0.3rem;height: 0.22rem !important;font-size: 0.15rem;
    padding: 0.1rem 0 !important;"
            v-model="tel"
          />
        </div>
        <div style="display:flex;" class="park">
          <p class="asz">充值金额</p>
          <input
            style="width:45%;margin-left: 0.4rem;height: 0.22rem !important;font-size: 0.15rem;padding: 0.1rem 0 !important;text-indent:0!important;"
            placeholder="请输入充值金额"
            :disabled="lopop"
            v-model="money"
            @blur="bottocent"
          />
          <p
            style="font-size:15px;line-height:0.4rem;width:18%;text-align:right;padding-right:9px;"
          >元</p>
        </div>

        <div style="display:flex;" class="park">
          <p class="asz">开始时间</p>
          <div
            style="line-height:0.4rem;    font-size: 15px;color:#606266;margin-left:0.4rem"
            @click="chosestart"
            v-if="start"
          >选择开始时间</div>
          <div
            style="line-height:0.4rem;    font-size: 15px;margin-left:0.4rem"
            @click="chosestart"
            v-if="!start"
          >{{(value1).replace(/\-/g,'/')}}</div>
          <mt-datetime-picker
            lockScroll="true"
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
            @confirm="handleConfirms"
          ></mt-datetime-picker>
        </div>
        <div style="display:flex;" class="park" v-if="ctime">
          <p class="asz">结束时间</p>
          <div
            style="line-height:0.4rem; font-size: 15px;    margin-left: 0.4rem;"
            @click="choseend"
            v-if="end"
          >{{value2}}</div>
        </div>
      </div>
    </div>

    <div
      style="width:90%;margin:0.2rem auto;background:#fb861c;height:0.4rem;text-align:center;line-height:0.4rem;color:#fff;border-radius:5px;    font-size: 0.16rem;"
      @click="kai"
    >开通</div>
  </div>
</template>
<script>
import axios from "axios";
import { serarchc, start, valueop,washkaitongtwo } from "../api/api.js";
import { MessageBox, Picker } from "mint-ui";
import Calendar from "vue-calendar-component";
import Dropdown from "./sousukuang";
import Qs from "qs";
export default {
  name: "vip",
  data() {
    return {
      itemlist: {
        cur: {
          val: "",
          name: "所有站点"
        },
        data: []
      },

      anameid: "",
      aname: "",
      nllercta: false,
      ctime: false,
      nllerct: "",
      brand: 0,
      brandname: "",
      brandnameList: [{ brandname: "" }],
      startDate: new Date("2019-07"),
      endDate: new Date("2019-12-31"),
      start: true,
      end: true,
      dateVal: "",
      car_number: "",
      money: "",
      parking_id: "",
      List: [],
      sel: "",
      sels: "",
      lopop: "",
      ida: "",
      dealer: "1561430951496",
      idc: "",
      typecar: "",
      pickerValue: "",
      value1: "",
      value2: "",
      name: "",
      tel: "",
      req: [],
      start_time: "",
      end_time: "",
      moneyadd: "",
      y: "",
      az: "",
      appId: "",
      timeStamp: "",
      nonceStr: "",
      package: "",
      paySign: "",
      signType: "",
      timeyue: false,
      slots: [{ values: [1, 2, 3, 4, 5, 6, 7, 8, 9] }]
    };
  },
  components: {
    Calendar,
    Dropdown
  },
  watch: {
    $route: {
      handler: function(a, b) {
        console.log(a);
        console.log(b);
      },
      deep: true
    }
  },
  methods: {
    getVipType() {
      let data = {
        page: 1,
        pageSize: 10,
        userId: "SURIOT",
        dealer: 123
      };
      let that = this;
      axios({
        method: "post",
        url: `${this.washurl}/carNumberTypeWashCar/selectAll`,
        data: Qs.stringify(data)
      }).then(res => {
        console.log(res);
        if (res.data.count > 0) {
          for (var i = 0; i < res.data.count; i++) {
            if (res.data.result[i].name != "F") {
              let list = {};
              list.name = res.data.result[i].name;
              list.type = res.data.result[i].id;
              list.money = res.data.result[i].money;
              that.req.push(list);
            }
          }
        }
        console.log(that.req);
        that.req.find((a, y) => {
          if (a.name == "A") {
            a.name = "月卡";
          } else if (a.name == "B") {
            a.name = "季卡";
          } else if (a.name == "C") {
            a.name = "年卡";
          }
        });
      });
    },
    dropDownClick(e) {
      this.ida = e;
    },
    nameclick() {
      this.$nextTick(function() {
        this.$refs.nameval.focus();
      });
    },
    phoneclick() {
      this.$nextTick(function() {
        this.$refs.phoneval.focus();
      });
    },
    confirmChoose() {
      this.y = this.$refs.pickeryue.getValues()[0];
      this.timeyue = false;
    },
    brandN(index) {
      console.log(index);
      this.brandname = this.brandnameList[index].brandname;
      this.brand = 0;
    },
    brandB() {
      if (this.brand == 0) {
        this.brand = 1;
        this.posin = 0;
      } else {
        this.brand = 0;
      }
    },
    yue() {
      this.timeyue = !this.timeyue;
    },
    bottocent() {
      window.scrollTo(0, 0);
    },
    handelChange(val) {
      console.log(this.formatDate(val).slice(0, 10));
    },
    dateConfirm() {
      // 时间选择器确定按钮，并把时间转换成我们需要的时间格式
      this.selectedValue = formatDateMin(this.dateVal);
    },
    chosestart() {
      this.$refs.picker.open();
      // this.sel = start()
      this.sel = new Date();
      this.value1 = start().slice(0, 10);
      console.log(this.value1);
      this.start = false;
    },
    parseTime(date) {
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

      var currentdate =
        date.getFullYear() +
        seperator1 +
        month +
        seperator1 +
        strDate +
        " " +
        strHours +
        seperator2 +
        strMinutes +
        seperator2 +
        "00";
      return currentdate;
    },
    handleConfirms(val) {
      console.log(val);
      this.value1 = this.parseTime(val).slice(0, 10);
      console.log(this.typecar);
      console.log(this.req);
      console.log(this.value1);
      let nows = new Date(this.value1);
      console.log(new Date());
      console.log(9012);
      console.log(nows);
      this.req.find((x, y) => {
        if (x.type == this.typecar) {
          let typename = x.name;
          console.log(typename);
          if (typename == "月卡") {
            this.value2 = this.replatime(this.DateAdd("m", 30, nows));
            this.ctime = true;
            return false;
          } else if (typename == "季卡") {
            this.value2 = this.replatime(this.DateAdd("m", 90, nows));
            this.ctime = true;
            return false;
          } else if (typename == "年卡") {
            this.value2 = this.replatime(this.DateAdd("y", 365, nows));
            this.ctime = true;
            return false;
          }
        }
      });
    },
    pomitst(ap) {
      console.log(ap);
      let b = ap.indexOf("/") + 1;
      let d = ap.lastIndexOf("/");
      let f = ap.substring(b, d);
      if (f < 10) {
        f = "0" + f;
      }
      return ap.substring(0, b) + f + ap.substring(d, ap.length);
    },
    choseend() {
      this.$refs.pickers.open();
      this.sels = start();
      this.end = false;
    },
    changval(val) {
      console.log(val);
      this.typecar = "";
      let data = {
        page: 1,
        pageSize: 10,
        userId: "SURIOT",
        dealer: 123
      };
      axios({
        method: "post",
        url: `${this.washurl}/carNumberTypeWashCar/selectAll`,
        data: Qs.stringify(data)
      }).then(res => {
        console.log(res);
        if (res.data.count > 0) {
          let list = {};
          for (var i = 0; i < res.data.count; i++) {
            list.name = res.data.result[i].name;
            this.req.push(list);
          }
        }
        console.log(this.req);
        this.req.find((a, y) => {
          if (a.name == "A") {
            a.name = "月卡";
          } else if (a.name == "B") {
            a.name = "季卡";
          } else if (a.name == "C") {
            a.name = "年卡";
          }
        });
      });
    },
    changvallop(val) {
      console.log(val);
      console.log(this.req);
      let nows = new Date();
      this.req.find((x, y) => {
        if (x.type == val) {
          if (x.name == "月卡") {
            this.lopop = true;
            this.shoz = false;
            this.money = x.money;
            this.value2 = this.replatime(this.DateAdd("m", 30, nows));
          } else if (x.name == "季卡") {
            this.shoz = false;
            this.lopop = true;
            this.money = x.money;
            this.value2 = this.replatime(this.DateAdd("m", 90, nows));
          } else if (x.name == "年卡") {
            this.lopop = true;
            this.shoz = false;
            this.money = x.money;
            this.value2 = this.replatime(this.DateAdd("m", 365, nows));
          }
        }
      });
    },
    changvala(val) {
      this.idc = val;
    },
    kai() {
      // if (this.aname) {
      //   this.itemlist.data.forEach((a, b) => {
      //     if (a.sname == this.aname) {
      //       this.reats = a.sid;
      //     }
      //   });
      // } else {
      //   if (this.ida == "") {
      //     MessageBox("提示", "请输入站点名称");
      //     return false;
      //   } else {
      //     console.log(90879);
      //     this.reats = this.ida;
      //   }
      // }
      if (this.typecar == "" || this.typecar == undefined) {
        MessageBox("提示", "请输入会员类型");
        return false;
      }
      if (this.brandname == "" || this.brandname == undefined) {
        MessageBox("提示", "请输入车牌号码");
        return false;
      }
      if (this.name == "") {
        MessageBox("提示", "请输入车主姓名");
        return false;
      }
      if (this.tel == "") {
        MessageBox("提示", "请输入车主电话");
        return false;
      } else {
        if (!valueop(this.tel)) {
          MessageBox("提示", "请输入正确的车主电话");
          return false;
        }
      }
      if (this.value2 == "") {
        MessageBox("提示", "请输入结束时间");
        return false;
      }
      if (this.value1 == "") {
        MessageBox("提示", "请输入开始时间");
        return false;
      }
      let that = this;
      let data = {
        car_number: this.brandname,
        // car_number:'浙AW19333',
        money: this.money,
        dealer: this.dealer,
        openId: localStorage.getItem("openid"),
        // openId:'oOKex1Ow5nB_qymzrzj4L7Gm7snU',
        ip: returnCitySN.cip
      };
      if (this.value1) {
        this.start_time = (this.value1 + " 00:00:00").replace(/\//g, "-");
      }
      if (this.value2) {
        this.end_time = (this.value2 + " 00:00:00").replace(/\//g, "-");
      }
      console.log(data);
      axios({
        method: "post",
        url: `${this.washurl}/carInfoWashCar/openVIPForApp1`,
        data: Qs.stringify(data)
      }).then(res => {
        console.log(res);
        if (res.data.resCode == "0") {
          that.appId = res.data.appId;
          that.timeStamp = res.data.timeStamp;
          that.nonceStr = res.data.nonceStr;
          that.package = res.data.package;
          that.paySign = res.data.paySign;
          that.signType = res.data.signType;
          that.az = Number(that.money);
          if (typeof WeixinJSBridge == "undefined") {
            if (document.addEventListener) {
              document.addEventListener(
                "WeixinJSBridgeReady",
                onBridgeReady,
                false
              );
            } else if (document.attachEvent) {
              document.attachEvent("WeixinJSBridgeReady", onBridgeReady);
              document.attachEvent("onWeixinJSBridgeReady", onBridgeReady);
            }
          } else {
            this.onBridgeReady();
          }
        } else {
          MessageBox("提示", res.data.result);
        }
      });
    },
    onBridgeReady() {
      let that = this;
      WeixinJSBridge.invoke(
        "getBrandWCPayRequest",
        {
          appId: that.appId, //公众号名称，由商户传入
          timeStamp: that.timeStamp, //时间戳，自1970年以来的秒数
          nonceStr: that.nonceStr, //随机串
          package: that.package,
          signType: that.signType, //微信签名方式：
          paySign: that.paySign //微信签名
        },
        function(res) {
          // alert(JSON.stringify(res))
          if (res.err_msg == "get_brand_wcpay_request:ok") {
            let dataA = {
              car_number: that.brandname,
              money: that.az,
              dealer: that.dealer,
              end_time: that.end_time,
              start_time: that.start_time,
              name: that.name,
              tel: that.tel,
              of_type: that.typecar,
              openId: localStorage.getItem("openid")
            };
            console.log(dataA);
            // alert(JSON.stringify(dataA));
            washkaitongtwo(dataA).then(mes => {
              console.log(mes);
              // alert(JSON.stringify(mes));
              if (mes.data.resCode == 0) {
                MessageBox("提示", "开通成功").then(action => {
                  that.$router.go(-1);
                });
              } else {
                MessageBox("提示", "开通失败").then(action => {
                  that.$router.go(-1);
                });
              }
            });
          }
        }
      );
    },

    num(s) {
      s < 10 ? "0" + s : s;
    },
    DateAdd(interval, number, date) {
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
    add0(val) {
      return val < 10 ? "0" + val : val;
    },
    replatime(val) {
      var time = new Date(val);
      var year = time.getFullYear();
      var month = time.getMonth() + 1;
      var date = time.getDate();
      var hours = time.getHours();
      var minutes = time.getMinutes();
      var seconds = time.getSeconds();
      return year + "/" + this.add0(month) + "/" + this.add0(date);
    }
  },
  mounted() {
    var nows = new Date();
    let a = this.DateAdd("m ", 3, nows);
    let data = {
      page: 1,
      pageSize: 10000000,
      userId: "SURIOT",
      dealer: 123
    };
    axios({
      method: "post",
      url: `${this.washhttpUrl}/parkingSite/selectByparkingSiteExample`,
      data: Qs.stringify(data)
    }).then(res => {
      console.log(res);
      if (res.data.result.length > 0) {
        for (var i = 0; i < res.data.result.length; i++) {
          let list = {
            sid: res.data.result[i].sid,
            sname: res.data.result[i].sname
          };
          this.itemlist.data.push(list);
        }
        console.log(this.itemlist.data);
      }
      // if (this.$route.query.id) {
      //   this.nllerct = true;
      //   this.itemlist.data.forEach((a, b) => {
      //     if (a.sid == this.$route.query.id) {
      //       this.aname = a.sname;
      //       this.anameid = a.sid;
      //     }
      //   });
      // } else {
      //   this.nllerct = false;
      //   this.nllercta = true;
      // }
    });
    this.tel = localStorage.getItem("tel")
      ? localStorage.getItem("tel")
      : localStorage.getItem("phone");
    this.getVipType();
    let datas = {
      openid: localStorage.getItem("openid")
    };
    serarchc(datas).then(res => {
      console.log(res);
      if (res.data.resCode == 200) {
        res.data.result.forEach((a, b) => {
          if (a.priority == "1") {
            this.brandname = a.brandname;
          }
        });
        this.brandnameList = res.data.result;
        console.log(this.brandname);
      }
    });
  }
};
</script>
<style scoped>
.picker-items .picker-slot:nth-child(1) {
  display: none !important;
}
.pic .picker-items .picker-slot:nth-child(1) {
  display: block !important;
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
.asz {
  font-size: 0.15rem;
  line-height: 0.4rem;
  width: 23%;
  text-align: right;
}
.input[type="text"] {
  border-radius: 5px;
  border: none;
  outline: none;
}
input {
  width: 1.8rem;
  height: 0.4rem;
  border-radius: 5px;
  text-indent: 0.1rem;
  border: none !important;
  outline: none !important;
}
.el-input .el-input__inner {
  border: none !important;
  outline: none !important;
}
.el-input__inner {
  /* height: 0.3rem !important;
  padding: 0.2rem 0 !important; */
  /* height: 20px !important; */
  width: 2.3rem !important;
  border: none !important;
  outline: none !important;
}
.park {
  border-bottom: 1px solid #efefef;
  padding: 0.05rem 0;
}
.el-icon-arrow-up:before {
  content: "" !important;
}
.el-select {
  margin-left: 0.18rem;
  line-height: 0.4rem;
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
  top: 1.54rem;
  text-align: center;
  border: 1px solid #d8d8d8;
  overflow: scroll;
  max-height: 1.88rem;
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
.acar {
  border: 1px solid #787878;
  width: 0.2rem;
  height: 0.2rem;
  display: block;
  line-height: 0.2rem;
  border-radius: 50%;
  margin: 0.1rem 0.4rem;
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
.park input.sitename:disabled {
  cursor: default;
  background-color: #fff;
}
</style>