
<template>
  <div id="card">
    <!-- <div class="title">
			<div class="switch active" @click="news">普通车牌</div>
			<div class="switch" @click="used">新能源车牌</div>
		</div> -->
    <div style="width:91%;padding-top:0.32rem;margin:0 auto;">
      <!-- <p style="font-size:18px;">新增车牌号</p> -->
      <p style="font-size:18px;margin-bottom:0.16rem;color:#303030;">车牌类型</p>
      <!-- <p style="font-size:18px;margin-top:0.3rem;display: flex;justify-content: space-between;" @click="putongcar">
				<span v-if="carnumber==2" style="color:#f68b1b">普通车牌</span>	
				<span v-if="carnumber==1" style="color:#f68b1b">{{changenumber}}</span>
				<img src="../../static/image/arrow.png" alt="" style="vertical-align:middle;">
			</p> -->
      <!-- <hr style="margin-top:0.2rem;"> -->
      <section style="background:#efefef!important;z-index:2">
        <mt-radio v-model="duration"
                  :options=o
                  ptions
                  @change="check"
                  align="left">
        </mt-radio>
      </section>
      <p style="font-size:18px;margin-bottom:0.16rem;color:#303030;margin-top:0.32rem;">车牌号码</p>
    </div>

    <!-- <div>{{plate}}</div> -->

    <!-- <p class="prompt">点击对应输入框可单独修改输入文字</p> -->
    <div class="used"
         v-if="card == 0">
      <!-- <div class="a" @click="cardA('0')">{{a[0]}}</div>
			<div class="a" @click="cardA('1')">{{a[1]}}</div>
			
			<div class="a" @click="cardA('2')">{{a[2]}}</div>
			<div class="a" @click="cardA('3')">{{a[3]}}</div>
			<div class="a" @click="cardA('4')">{{a[4]}}</div>
			<div class="a" @click="cardA('5')">{{a[5]}}</div>
			<div class="a" @click="cardA('6')">{{a[6]}}</div> -->

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
      <!-- <div class="a" @click="cardA('0')">{{b[0]}}</div>
			<div class="a" @click="cardA('1')">{{b[1]}}</div>
			<div class="a" @click="cardA('2')">{{b[2]}}</div>
			<div class="a" @click="cardA('3')">{{b[3]}}</div>
			<div class="a" @click="cardA('4')">{{b[4]}}</div>
			<div class="a" @click="cardA('5')">{{b[5]}}</div>
			<div class="a" @click="cardA('6')">{{b[6]}}</div>
			<div class="a" @click="cardA('7')">{{b[7]}}</div> -->
    </div>
    <!-- <div class="used" v-if="card == 2">
			
			<input type="text" v-model="lplcar" placeholder="请输入车牌号码">
		</div> -->
    <!-- <div style="text-align:center;">
            <i style="width:0.08rem;height:0.08rem;border:1px solid #999;display:inline-block;margin-top:0.2rem;border-radius:50%;" v-if="nicei" @click="dianji"></i>
			<i style="width:0.1rem;height:0.1rem;display:inline-block;margin-top:0.2rem;border-radius:50%;background:#f68b1b;" v-if="!nicei" @click="dianji"></i>
            <span>设为常用车牌</span>
        </div> -->
    <div class="addBox">
      <div v-if="add==0"
           class="unadd">添加车牌</div>
      <!-- <div v-if="add==1" class="add" @click="addCard()">添加车牌</div> -->
      <div class="add"
           @click="addCard()">添加车牌</div>
    </div>

    <!-- <div class="keyboard" v-if="hide == 1">
			<span v-if="zeroList==1" class="buttonOne" @click="choice(list)" v-for="list in oneList">{{list}}</span>
			<span v-if="zeroList==2" class="buttonTwo" @click="choice(list)" v-for="list in twoList">{{list}}</span>
			<span v-if="zeroList==3" class="buttonThree" @click="choice(list)" v-for="list in threeList">{{list}}</span>
		</div> -->
    <section class="pkey-keyboard"
             v-if="hide==1">
      <!-- <header class="pkey-header2">
                <span class="pkey-okbtn" @click="checkplate">完成</span>
            </header> -->
      <section class="pkey-keyscontain"
               style="width:100%;">
        <ul class="keybo">
          <li v-show="txtboardshow"
              v-for="(item,index) in cartxt">
            <span v-show="index==cartxt.length-1"
                  @click="txtboardshow=false,numboardshow=true">ABC</span>
            <label v-for="(items,indexi) in item"
                   @click="txtclick(items,indexi,item.length)">{{items}}</label>
            <span v-show="index==cartxt.length-1"
                  @click="shanchu">删除</span>
          </li>
          <li v-show="numboardshow"
              v-for="(item,index) in numtxt">
            <span v-show="index==cartxt.length-1"
                  @click="txtboardshow=true,numboardshow=false">省份</span>
            <label v-for="(items,indexi) in item"
                   @click="numclick(items,indexi,item.length)">{{items}}</label>
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
    <!-- <div v-if="code==0||code==1||code==2||code==3" id="popup">
			<div v-if="code==0" class="popupBox">
				<p>添加成功</p>
				<p><img src="../../static/image/dg.png"/></p>
				<p @click="next()">确定</p>
			</div>
			<div v-if="code==1" class="popupBox">
				<p>添加失败</p>
				<p><img src="../../static/image/dx.png"/></p>
				<p @click="next()">确定</p>
			</div>
			<div v-if="code==2" class="popupBox">
				<p>请勿重复添加相同车牌</p>
				<p><img src="../../static/image/dx.png"/></p>
				<p @click="next()">确定</p>
			</div>
			<div v-if="code==3" class="popupLod">
				<img src="../../static/image/loding.gif"/>
			</div>
		</div> -->
    <!-- <div style="z-index:88;background:rgba(255,255,255,.1);position:fixed;top:0;bottom:0;width:100%;" v-if="show==true">
			<div   class="mint">
				<div class="picker-btn-wrap">

					<div  class="picker-cancel" @click="addressChooseCancel">取消</div>
					<div  class="picker-sure" @click="confirmChoose">确定</div>

				</div>
				<mt-picker :slots="slots"
				@change="handleConfirm"
				>
				
				</mt-picker>
			</div>
		</div> -->

  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
import { ADDcarnun, othercar, xiugalwq } from './api/api.js'
import { Radio } from 'mint-ui';
import { MessageBox } from 'mint-ui';
export default {
  name: 'card',
  data () {
    return {
      nicei: 1,
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
      b: '',
      parameter: 0,
      show: false,
      add: 1,
      card: 0,
      a: ['', '', '', '', '', '', ''],
      b: ['', '', '', '', '', '', '', ''],
      hide: 1,
      // zeroList:1,
      // oneList:["京","沪","浙","苏","粤","鲁","晋","冀","豫","川","渝","辽","吉","黑","皖","鄂","津","贵","云","桂","琼","青","新","藏","蒙","宁","甘","陕","闽","赣","湘"],
      //twoList:['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'],
      // twoList:[0,1,2,3,4,5,6,7,8,9,'Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M','领','警','学','港','澳','使'],
      //threeList:[0,1,2,3,4,5,6,7,8,9,'Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M','领','警','学','港','澳','使'],
      code: 4,
      carnumber: 2,
      kuaile: 0,
      slots: [{ values: ['普通车牌', '新能源车牌', '特殊车牌'] }],
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
      duration: '1'
    }
  },
  methods: {
    shanchu () {
      if (this.duration == 1) {
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
    isLicensePlate (str) {
      return /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/.test(str);
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
      if (this.duration == 1) {
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
    numclick: function (num, indexi, size) {
      if (this.duration == 1) {
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
      // this.composition(indexi,size);

    },
    addCard () {

      let that = this;
      var html = ''
      that.plate.forEach((a, b) => {
        html += a
      })
      console.log(html)
      if (!that.isLicensePlate(html)) {
        MessageBox('提示', '请填写正确的车牌号码')
        return false
      }
      let data = {
        country: html,
        // openid:localStorage.getItem('openid'),
        // openid:'oOKex1Ow5nB_qymzrzj4L7Gm7snU',
        openid: localStorage.getItem('openid'),
        status: that.duration,
      }
      console.log(this.nicei)
      ADDcarnun(data).then(res => {
        console.log(res)
        if (res.data.resCode == "0") {
          MessageBox({
            title: '提示',
            message: '车牌号添加成功',
            closeOnClickModal: false,
          }).then(action => {
            that.$router.push({ path: '/carnumber', query: { lis: that.nicei } })
          })
        }
        if (res.data.result == '已绑定') {
          MessageBox('提示', '请勿重复添加车牌号码')
        }
      })
    },
    // addCardChange(){
    // 	// let a = document.getElementsByClassName('a');
    // 	// let len = a.length
    // 	// let str = ''
    // 	// for (let i=0;i<len;i++) {
    // 	// 	str = str + a[i].innerHTML
    // 	// }
    // 	// console.log(str)
    // 	let data={
    // 		country:str,
    // 		// openid:localStorage.getItem('openid'),
    // 		openid:'oOKex1Ow5nB_qymzrzj4L7Gm7snU',
    // 	}
    // 	console.log(data)
    // 	if(this.nicei){
    // 		data.state=0
    // 	}else{
    // 		data.state=1

    // 	}
    // 	let that=this;
    // 	xiugalwq(data).then(res=>{
    // 		console.log(res)
    // 		if(res.data.resCode=="0"){
    // 			MessageBox('提示', '修改成功').then(res=>{
    // 				that.$router.push('/carnumber')
    // 			})
    // 		}else{
    // 			MessageBox('提示', '修改失败')
    // 		}
    // 	})
    // },

    check (val) {
      console.log(val)
      this.hide = 1
      if (val == 1) {
        // this.add=0;
        this.titleg = document.querySelectorAll('.mint-radio-label')[0]
        this.titlegg = document.querySelectorAll('.mint-radio-label')[1]
        this.titleg.style.color = '#f68b1b'
        this.titlegg.style.color = '#999'
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
      } else if (val == 2) {
        this.titleg = document.querySelectorAll('.mint-radio-label')[1]
        this.titlegg = document.querySelectorAll('.mint-radio-label')[0]
        this.titleg.style.color = '#f68b1b'
        this.titlegg.style.color = '#999'
        this.txtboardshow = true
        this.numboardshow = false
        // this.add=0;
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

    this.duration == 1 ?
      (this.plate = ['', '', '', '', '', '', ''],
        this.titleg = document.querySelectorAll('.mint-radio-label')[0],
        this.titleg.style.color = '#f68b1b')
      : this.plate = ['', '', '', '', '', '', '', '']
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
// .used div{width: 0.34rem;height: 0.43rem;border: 1px solid #c9c9c9;text-align: center;line-height: 0.43rem;margin:0 5px;border-radius:4px ;font-size: 0.24rem}
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
.mint-cell {
  background-color: #efefef !important;
  border: none !important;
}
.mint-cell-wrapper {
  background-color: #efefef !important;
  border: none !important;
}
.mint-radiolist {
  background-color: #efefef !important;
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
</style>