<template>
  <div id="card">
    <div style="width:91%;padding-top:0.64rem;margin:0 auto;">
      <p style="font-size:13px;margin-bottom:0.32rem;color:#303030;">车牌类型</p>
      <section>
        <mt-radio v-model="duration" :options="options" @change="check" align="left"></mt-radio>
      </section>
      <p style="font-size:13px;margin-bottom:0.32rem;color:#303030;margin-top:0.64rem;">车牌号码</p>
    </div>
    <div class="used" v-if="card == 0">
      <span
        v-for="(item,index) in plate"
        class="newsquare"
        :key="index"
        :class="{gactive:index==kuaile}"
        @click="chose(item,index)"
      >{{item}}</span>
    </div>
    <div class="used" v-if="card == 1">
      <span
        v-for="(item1,index1) in plate"
        class="newsquare"
        :key="index1"
        :class="{gactive:index1==kuaile}"
        @click="chose(item1,index1)"
      >{{item1}}</span>
    </div>
    <div class="used" v-if="card == 2">
      <input type="text" v-model="lplcar" placeholder="请输入车牌号码" />
    </div>
    <div class="addBox">      
      <div v-if="isnumber==true" class="add" @click="updateCard()">修改车牌</div>
      <div v-else="" class="add" @click="addCard()">添加车牌</div>
    </div>
    <section class="pkey-keyboard" v-if="hide==1">
      <section class="pkey-keyscontain" style="width:100%;">
        <ul class="keybo">
          <li v-show="txtboardshow" v-for="(item,index) in cartxt" :key="index">
            <!-- <span v-show="index==cartxt.length-1" @click="txtboardshow=false,numboardshow=true">ABC</span> -->
            <label
              v-for="(items,indexi) in item" :key="indexi"
              @click="txtclick(items,indexi,item.length)"
            >{{items}}</label>
            <span v-show="index==cartxt.length-1" @click="shanchu">删除</span>
          </li>
          <li v-show="numboardshow" v-for="(item1,index1) in numtxt" :key="index1">
            <!-- <span v-show="index1==cartxt.length-1" @click="txtboardshow=true,numboardshow=false">省份</span> -->
            <label
              v-for="(items1,indexi1) in item1" :key="indexi1"
              @click="numclick(items1,indexi1,item1.length)"
            >{{items1}}</label>
            <span v-show="index1==cartxt.length-1" @click="shanchu">删除</span>
          </li>
        </ul>
      </section>
      <transition name="fade">
        <section
          class="showkey"
          v-show="keyshow"
          :keyshow="keyshow"
          :style="{marginLeft:mleft+'px'}"
        >{{keyb}}</section>
      </transition>
    </section>
  </div>
</template>

<script>
import Qs from "qs";
import axios from "axios";
import { Radio } from "mint-ui";
import { MessageBox } from "mint-ui";

export default {
  name: "card",
  data() {
    return {
      plate: [],
      keyb: "",
      txtboardshow: true,
      numboardshow: false,
      keyshow: false,
      mleft: 0,
      tips: "",
      cartxt: [
        ["京", "津", "渝", "沪", "冀", "晋", "辽", "吉", "黑", "苏"],
        ["浙", "皖", "闽", "赣", "鲁", "豫", "鄂", "湘", "粤", "琼"],
        ["川", "贵", "云", "陕", "甘", "青", "蒙", "桂", "宁", "新"],
        ["藏", "使", "领", "警", "学", "港", "澳"]
      ],
      numtxt: [
        ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["Z", "X", "C", "V", "B", "N", "M"]
      ],

      a: "",
      kuaile: 0,
      b: "",
      parameter: 0,
      show: false,
      card: 0,
      a: ["", "", "", "", "", "", ""],
      b: ["", "", "", "", "", "", "", ""],
      hide: 1,
      code: 4,
      carnumber: 2,
      slots: [{ values: ["普通车牌", "新能源车牌"] }],
      changenumber: "",
      lplcar: "",
      options: [
        {
          label: "普通车牌",
          value: 1
        },
        {
          label: "新能源车牌",
          value: 2
        }
      ],
      duration: "1",
      number: '',
      isnumber: false,
    };
  },
  methods: {
    shanchu() {
      if (this.duration == 1) {
        console.log(this.kuaile);
        this.plate.splice(this.kuaile, 1, "");
        this.kuaile--;
        if (this.kuaile < 0) {
          this.kuaile = 0;
          this.txtboardshow = true;
          this.numboardshow = false;
        }
      } else {
        this.plate.splice(this.kuaile, 1, "");
        this.kuaile--;
        if (this.kuaile < 0) {
          this.kuaile = 0;
          this.txtboardshow = true;
          this.numboardshow = false;
        }
      }
    },
    chose(a, b) {
      this.kuaile = b;
      this.hide = 1;
      if (b > 0) {
        this.txtboardshow = false;
        this.numboardshow = true;
      } else {
        this.txtboardshow = true;
        this.numboardshow = false;
      }
    },
    txtclick: function(txt, indexi, size) {
      this.txtboardshow = false;
      this.numboardshow = true;
      if (this.duration == 1) {
        if (this.kuaile > 6) {
          this.txtboardshow = false;
          this.numboardshow = false;
          return false;
        } else {
          this.plate.splice(this.kuaile, 1, txt);
        }
      } else {
        if (this.kuaile > 7) {
          this.txtboardshow = false;
          this.numboardshow = false;
          return false;
        } else {
          this.plate.splice(this.kuaile, 1, txt);
        }
      }

      this.kuaile++;
    },
    numclick: function(num, indexi, size) {
      if (this.duration == 1) {
        if (this.kuaile > 6) {
          return;
        } else {
          this.plate.splice(this.kuaile, 1, num);
        }
        this.kuaile++;
        if (this.kuaile > 6) {
          this.hide = 0;
        }
      } else {
        if (this.kuaile > 7) {
          return;
        } else {
          this.plate.splice(this.kuaile, 1, num);
        }
        this.kuaile++;
        if (this.kuaile > 7) {
          this.hide = 0;
        }
      }

      console.log(this.plate);
    },

    isLicensePlate(str) {
      return /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/.test(
        str
      );
    },

    addCard() {
      let that = this;

      console.log(this.plate);
      var html = "";
      that.plate.forEach((a, b) => {
        html += a;
      });
      console.log(html.length);
      if(this.duration == "1"&&html.length!=7){
        MessageBox("提示", "请输入正确的车牌");
        return false;
      }
      if(this.duration == "2"&&html.length!=8){
        MessageBox("提示", "请输入正确的车牌");
        return false;
      }
      let data = {
        openid: localStorage.getItem("openid"),
        brandname: html
      };
      that
        .$http({
          method: "post",
          url: `${that.httpUrl}app/brand/add`,
          data: Qs.stringify(data)
        })
        .then(message => {
          if (message.data.resCode === "200") {
            MessageBox({
              title: "提示",
              message: "添加成功",
              closeOnClickModal: false
            }).then(res => {
              window.history.back(-1);
            });
          } else if (message.data.resCode === "500") {
            MessageBox("提示", "不能重复添加相同车牌号");
          } else {
            MessageBox("提示", "最多添加2个车牌号码");
          }
        })
        .catch(error => {
          MessageBox("提示", "添加失败");
        });      
    },
    updateCard(){
      let that = this;

      console.log(this.plate);
      var html = "";
      that.plate.forEach((a, b) => {
        html += a;
      });
      console.log(html.length);
      if(this.duration == "1"&&html.length!=7){
        MessageBox("提示", "请输入正确的车牌");
        return false;
      }
      if(this.duration == "2"&&html.length!=8){
        MessageBox("提示", "请输入正确的车牌");
        return false;
      }
      let data = {
        number: this.number,
        carNumber: html
      };
      that
        .$http({
          method: "post",
          url: `${that.washhttpUrl}/parkingCarRecerd/selectByOrderUpdateCarNumber`,
          data: Qs.stringify(data)
        })
        .then(message => {
          if (message.data.resCode === 0) {
            MessageBox({
              title: "提示",
              message: "修改成功",
              closeOnClickModal: false
            }).then(res => {
              window.history.back(-1);
            });
          } else {
            MessageBox("提示", "修改失败");
          }
        })
        .catch(error => {
          MessageBox("提示", "修改失败");
        }); 
    },
    next() {
      this.code = 3;
      this.$router.go(-1);
    },
    putongcar() {
      this.show = true;
    },
    hangleConfirm(picker, values) {
      console.log(picker);
      console.log(values);
    },
    addressChooseCancel() {
      this.show = false;
    },
    check(val) {
      console.log(val);
      this.hide = 1;
      if (val == 1) {
        this.card = 0;
        this.plate = ["", "", "", "", "", "", ""];
        this.txtboardshow = true;
        this.numboardshow = false;
        if (this.kuaile == 0) {
          this.txtboardshow = true;
          this.numboardshow = false;
        } else {
          this.txtboardshow = false;
          this.numboardshow = true;
        }
      } else if (val == 2) {
        this.txtboardshow = true;
        this.numboardshow = false;
        this.card = 1;
        this.plate = ["", "", "", "", "", "", "", ""];
        this.kuaile = 0;
        if (this.kuaile == 0) {
          this.txtboardshow = true;
          this.numboardshow = false;
        } else {
          this.txtboardshow = false;
          this.numboardshow = true;
        }
      }
    }
  },
  mounted: function() {
    if (this.duration == 1) {
      this.plate = ["", "", "", "", "", "", ""];
    } else {
      this.plate = ["", "", "", "", "", "", "", ""];
    }    
    console.log(this.$route.query.number)
    if(this.$route.query.number!=undefined){
      this.number = this.$route.query.number;
      this.isnumber = true;
    }else{
      this.isnumber = false;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../style/mixin.scss";

.mint-radiolist {
  width: 100%;
  margin: 0 auto;
  @include sc(16px, #999);
  display: flex;
  justify-content: space-around;
  margin-left: -0.4rem;
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
  margin-bottom: 0.4rem;
  background-color: #ffffff;
  justify-content: space-around;
  border-bottom: 1px solid #d8d8d8;
}
.title div {
  text-align: center;
  font-size: 32px;
  height: 1.44rem;
  line-height: 1.44rem;
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
  width: 0.2rem;
  height: 0.2rem;
  background-color: #333333;
  margin: 0.46rem 0.2rem;
  border-radius: 50%;
}
.keyboard {
  bottom: 0;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  height: 3.12rem;
  background: #ced5dd;
}
// .buttonOne{font-size: 0.19rem; display: block;border-radius: 5px;margin: 0.05rem 0.03rem;margin-top:0.11rem;width: 0.31rem;height: 0.4rem;text-align: center;line-height: 0.4rem;background-color: #FFFFFF;color:#303030;}
// .buttonTwo{font-size: 0.19rem; display: block;margin:0.03rem;border-radius: 5px;width: 0.31rem;height: 0.4rem;text-align: center;line-height: 0.4rem;background-color: #FFFFFF;}
// .buttonThree{font-size: 0.19rem; display: block;margin: 0.03rem;width: 0.31rem;border-radius: 5px;height: 0.4rem;text-align: center;line-height: 0.4rem;background-color: #FFFFFF;}
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
  padding-bottom: 2rem;
  margin-top: 0.42rem;
}
.add {
  border-radius: 5px;
  background-color: #f68b1b;
  width: 83%;
  text-align: center;
  height: 1rem;
  line-height: 1rem;
  font-size: 15px;
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
  height: 1rem;
  line-height: 1rem;
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
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: 0.56rem;
  color: #f68b1b;
}
.popupBox p:nth-of-type(1) {
  padding-top: 0.2rem;
}
.popupBox p:nth-of-type(2) {
  margin: 0.36rem 0;
}
.popupBox p:nth-of-type(3) {
  border-top: 1px solid #d8d8d8;
  height: 1.6rem;
  line-height: 1.6rem;
}
.popupBox img {
  width: 1.2rem;
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
  padding: 0.2rem;
}
input {
  height: 0.6rem;
  margin-top: -0.2rem;
  width: 90%;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  text-indent: 5px;
}
.pkey-header2 {
  height: 0.66rem;
  width: 100%;
  font-size: 14px;
  background: #ededed;
  line-height: 0.66rem;
}
.pkey-header2 span {
  float: right;
  color: #f68b1c;
  margin-right: 0.3rem;
}
.pkey-keyboard {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.pkey-keyscontain {
  background: #ced5dd;
  height: 4.28rem;
  width: 100%;
}
.keybo>li{
  display: flex;
  justify-content: center;
} 
.pkey-keyscontain span,
label {
  width: 0.62rem;
  height: 0.8rem;
  font-size: 0.38rem;
  display: inline-block;
  border-radius: 5px;
  margin: 0.22rem 0.1rem 0 0;
  // margin-top: 0.22rem;
  text-align: center;
  line-height: 0.8rem;
  background-color: #ffffff;
  color: #303030;
}
.pkey-keyscontain label:last-of-type{
  margin-right: 0;
}
.pkey-keyscontain span {
  width: 0.92rem;
  margin: 0.22rem 0 0 0.1rem;
}
.keybo > li:nth-child(7) {
  text-align: center;
}

.newsquare {
  width: 0.68rem;
  height: 0.86rem;
  border: 1px solid #c9c9c9;
  text-align: center;
  line-height: 0.86rem;
  margin: 0 5px;
  border-radius: 4px;
  font-size: 24px;
}
.gactive {
  border: 1px solid #f68b1c;
}
.mint-cell-value {
  width: 0px !important;
}
</style>