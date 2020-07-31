<template>
  <div class="contrainer">

    <!--<div class="count-div">
			<div class="count-divitem left">
				<div class="echarts-pattern" id="saleCount"></div>
			</div>
			 <div class="count-divitem" id="countnone">
				<div class="echarts-pattern" id="onlineCount">
				</div>
			</div> 
			<div class="count-divitem right">
				<div class="echarts-pattern" id="faultCount"></div>
			</div>
		</div>-->
    <div class="contrainerDiv">
      <div class='contrainerBox'>
        <div class="imgset"><img src="../../static/image/abc (3).png"></img>
        </div>
        <div class='contrainerCont'>
          <div>今年总收入</div>
          <div>{{numtotals>0?numtotals:0}}
            <span>元</span>
          </div>
        </div>
      </div>
      <div class='contrainerBox'>
        <div class="imgset"><img src="../../static/image/abc (4).png"></img>
        </div>
        <div class='contrainerCont'>
          <div>停车场总数</div>
          <div>{{this.parkingtitle}}
            <span>个</span>
          </div>
        </div>
      </div>
      <div class='contrainerBox'>
        <div class="imgset"><img src="../../static/image/abc (2).png"></img>
        </div>
        <div class='contrainerCont'>
          <div>道闸设备总数</div>
          <div>{{namegate}}
            <span>个</span>
          </div>

        </div>
      </div>
      <div class='contrainerBox'>
        <div class="imgset"><img src="../../static/image/abc (1).png"></img>
        </div>
        <div class='contrainerCont'>
          <div>车位锁总数</div>
          <div>{{totals}}
            <span>台</span>
          </div>
        </div>
      </div>
      <!-- <div class='contrainerBox'>
				<div class='contrainerCont'>
					<div class="imgset"><img src="../../static/image/abc (4).png" alt=""></div>
					<div>停车场总数</div>
				</div>
				<div class="devpos">{{this.parkingtitle}}<span>个</span></div>
			</div> -->
      <!-- <div class='contrainerBox'>
				<div class='contrainerCont'>
					<div class="imgset"><img src="../../static/image/abc (2).png"></img></div>
					<div>设备总数</div>
				</div>
				<div class="devNum">{{this.$store.state.numtitle}}<span>台</span></div>
			</div> -->

      <!-- <div class='contrainerBox'>
				<div class='contrainerCont'>
					<div class="imgset"><img src="../../static/image/abc (1).png"></img></div>
					<div>流量卡总数</div>
				</div>
				<div>544<span>张</span></div>
			</div> -->

    </div>
    <el-row class='fa'>
      <el-col :span="11">
        <div class="echartTitle">停车场类型数量统计</div>
        <div id="cake"></div>
      </el-col>
      <el-col :span="2"> &nbsp;</el-col>
      <el-col :span="11">
        <div class="echartTitle">停车支付类型统计</div>
        <div id="column"></div>
      </el-col>
    </el-row>
    <el-row class='fa'>
      <el-col :span="11">
        <div class="echartTitle">停车场总收入统计</div>
        <div style="width:90%;margin:0 auto;margin-top:0.1rem">
          <!-- <span>停车场名称：</span>
          <el-select v-model="search.parking_id"
                     placeholder="请选择"
                     @change="change"
                     value="速利停车场">
            <el-option value="">未选择</el-option>
            <el-option v-for="nice in messArray_get"
                       :key="nice.id"
                       :label="nice.parking_name"
                       :value="nice.parking_name"></el-option>
          </el-select> -->
          <span>时间选择：</span>
          <el-select v-model="search.id"
                     placeholder="请选择"
                     @change="changeTime">
            <!-- <el-option value="">未选择</el-option> -->
            <el-option v-for="nice in dataChose"
                       :key="nice.id"
                       :label="nice.label"
                       :value="nice.id"></el-option>
          </el-select>
        </div>

        <div id="line"></div>
      </el-col>
      <el-col :span="2"> &nbsp;</el-col>
      <el-col :span="11">
        <div class="echartTitle"
             style="margin-bottom:55px;">停车场预约收入统计</div>

        <div id="radar"></div>
      </el-col>
    </el-row>
    <!-- <div class="mapName">
			<div class="mapNameBox">全国主要城市设备分布</div>
			<div class="mapNameBox">本周车位使用情况</div>
		</div>
		<div class="mapviewDiv">
			<div class="mapview-div" id="mapView"></div> -->
    <!-- <div class="mapview-div" id="mapviewDiv2" style="width: 50%;height:500px;"></div> -->
    <!-- <div class="mapview-div" id="mapviewDiv1"></div>
		</div>
		<div class="mapName">
			<div class="mapNameBox">设备数量TOP5城市</div>
			<div class="mapNameBox">流量卡使用趋势</div>
		</div>
		<div class="mapviewDiv">
			<div class="mapview-div" id="mapviewDiv2"></div>
			<div class="mapview-div" id="mapviewDiv3"></div>
		</div> -->
  </div>
</template>

<script>
var myChartpaytupe;
import Qs from 'qs'
import axios from 'axios'
import echarts from 'echarts'
require('../../static/china.js')
import { mapState, mapActions, mapGetters } from 'vuex'
import { searchClicks, refundsab, payerules } from './api/api.js'
export default {
  name: 'pageIndex',
  data () {
    return {
      dataChose: [
        {
          label: '当天',
          id: 1
        },
        {
          label: '当周',
          id: 2
        },
        {
          label: '当月',
          id: 3
        }, {
          label: '当年',
          id: 4
        }
      ],
      search: {
        parking_id: '速利停车场',
        id: '当天'
      },
      alis: '',
      municipal: 0,
      resident: 0,
      business: 0,
      parik: 0,
      commerce: 0,
      other: 0,
      traffic: 0,
      agricul: 0,
      table: [],
      feel: 0,
      apliay: 0,
      wechat: 0,
      cash: 0,
      tequ: 0,
      empty: 0,
      one: 0,
      two: 0,
      three: 0,
      four: 0,
      five: 0,
      six: 0,
      seven: 0,
      eight: 0,
      nine: 0,
      ten: 0,
      eleven: 0,
      twelve: 0,
      num: {
        AbnorCount: '',
        cheCount: '',
        count: '',
        encloseCount: ''
      },
      sanitation: '',
      landscaping: '',
      watercom: '',
      firemaster: '',
      paging: {
        page: 1,
        pageSize: 10,
        total: ''
      },
      arrays4: [],
      x: 0,
      y: 0,
      twotime: '',
      tableDatap: '',
      tableData: [],
      xAxis19: [],
      series18: [],
      arr: [],
      arr2: [],
      value15: '',
      value16: '',
      parkid: '',
      numtotals: '',
      array1: '',
      array2: '',
      array3: '',
      arrays1: '',
      arrays2: '',
      arrays3: '',
      coupon: [],
      paytupe: []
    }
  },
  watch: {
    messArray_get: function (val) {
      console.log(val)
      for (let i = 0; i < val.length; i++) {
        if (val[i].parking_lot_type == 3) {
          this.municipal += 1;
        } else if (val[i].parking_lot_type == 1) {
          this.resident += 1;
        } else if (val[i].parking_lot_type == 2) {
          this.business += 1;
        } else if (val[i].parking_lot_type == 4) {
          this.parik += 1;
        } else if (val[i].parking_lot_type == 5) {
          this.commerce += 1;
        } else if (val[i].parking_lot_type == 6) {
          this.other += 1;
        } else if (val[i].parking_lot_type == 7) {
          this.traffic += 1;
        } else {
          this.agricul += 1;
        }
      }
      this.table = [this.municipal, this.resident, this.business, this.parik, this.commerce, this.other, this.traffic, this.agricul]
      console.log(this.table)
      this.draw()
    }
  },
  computed: {
    ...mapState(['parkingtitle', 'typepayLIST', 'ONEreslist', 'totals']),
    ...mapState({
      'namegate': state => state.gate.gatelistcount
    }),
    ...mapGetters(['messArray_get', 'listup'])
  },
  methods: {
    ...mapActions(['Alipay', 'facility', 'initParkingDevList', 'gatepeople', 'locktotal']),

    async changeTime (val) {
      console.log(val);
      console.log(this.parkid);
      if (val == undefined) {
        val = 1
      }
      if (val == "2" || val == "3") {
        await searchClicks('/bills/getPointBillsIncome', { isOrdered: 0, type: val, time: this.common.obtainnewtime() }).then(mes => {
          let that = this;
          console.log(mes)
          that.array3 = []
          that.array3 = Object.keys(mes.data.result).map(key => mes.data.result[key])
          that.array3 = that.array3.reverse()
          that.arrays3 = Object.keys(mes.data.result)
          that.arrays4 = []
          that.arrays3.reverse().forEach((a, b) => {
            that.arrays4.push(a.slice(6, 10))
          })
        })
        console.log(this.array3)
        console.log(this.arrays4)
        this.draw2();
      } else if (val == "1") {
        await searchClicks('/bills/getPointBillsIncome', { isOrdered: 0, type: val, time: this.common.obtainnewtime().slice(0, 10) }).then(mes => {
          let that = this;
          console.log(mes)
          that.array3 = Object.keys(mes.data.result).map(key => mes.data.result[key])
          that.array3 = that.array3.reverse()
          that.arrays3 = Object.keys(mes.data.result)
          that.arrays4 = []
          that.arrays3.reverse().forEach((a, b) => {
            that.arrays4.push(a)
          })
        })
        this.draw2();
      } else {
        await searchClicks('/bills/getPointBillsIncome', { isOrdered: 0, type: val, time: this.common.obtainnewtime().slice(0, 4) }).then(mes => {
          let that = this;
          console.log(mes)
          that.array3 = Object.keys(mes.data.result).map(key => mes.data.result[key])
          that.array3 = that.array3.reverse()
          that.arrays3 = Object.keys(mes.data.result)
          that.arrays4 = []
          that.arrays3.reverse().forEach((a, b) => {
            that.arrays4.push(a)
          })
        })
        this.draw2();
      }
    },
    async change (val) {
      console.log(val)
      let that = this;
      that.messArray_get.forEach((a, b) => {
        if (a.parking_name == val) {
          that.parkid = a.parking_id
        }
      })
      console.log(198)
      console.log(this.search.id)
      if (this.search.id == '' || this.search.id == 3) {
        await searchClicks('/bills/getPointBillsIncome', { isOrdered: 0, type: 3, time: that.common.obtainnewtime().slice(0, 10), parkingId: null }).then(mes => {
          let that = this;
          console.log(mes)
          that.array3 = Object.keys(mes.data.result).map(key => mes.data.result[key])
          that.array3 = that.array3.reverse()
          that.arrays3 = Object.keys(mes.data.result)
          that.arrays4 = []
          that.arrays3.reverse().forEach((a, b) => {
            that.arrays4.push(a.slice(6, 10))
          })
        })
        this.draw2();
      } else if (this.search.id == 2) {
        await searchClicks('/bills/getPointBillsIncome', { type: 2, time: this.common.obtainnewtime().slice(0, 10), parkingId: null }).then(mes => {
          let that = this;
          console.log(mes)
          that.array3 = []
          that.array3 = Object.keys(mes.data.result).map(key => mes.data.result[key])
          that.array3 = that.array3.reverse()
          that.arrays3 = Object.keys(mes.data.result)
          that.arrays4 = []
          that.arrays3.reverse().forEach((a, b) => {
            that.arrays4.push(a.slice(6, 10))
          })
        })
        console.log(this.array3)
        console.log(this.arrays4)
        this.draw2();
      }
    },
    draw () {
      let myChartCake = echarts.init(document.getElementById('cake'));
      let optionCake = {
        title: {
          text: '',
          subtext: ""/*'纯属虚构'*/,
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'horizontal',/*水平*/
          left: 'center',/*居中*/
          data: ['浙江', '上海', '成都', '北京', '郑州']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: this.resident, name: '居民小区' },
              { value: this.municipal, name: '路测停车' },
              { value: this.business, name: '商圈停车场' },
              { value: this.parik, name: '公园景点' },
              { value: this.commerce, name: '商务楼宇' },
              { value: this.other, name: '其它' },
              { value: this.traffic, name: '交通枢纽' },
              { value: this.agricul, name: '市政设施' },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ],
      };
      myChartCake.setOption(optionCake);

    },
    drawcanvs () {
      let myChartColumn = echarts.init(document.getElementById('radar'));
      let optionColumn = {
        xAxis: {
          type: 'category',
          data: ['近7天', '近30天', '本月', '本季度', '本年', '上一年', '上一月']
        },
        tooltip: {
          trigger: 'axis'
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}'
          }
        },
        legend: {
          /* data: ['直接访问','邮件营销','联盟广告']*/
        },
        toolbox: {
          feature: {
            /*saveAsImage: {}*//*下载图标*/
          }
        },
        series: [{
          /*name:'流量卡使用情况',*/
          data: [this.coupon[0],this.coupon[1],this.coupon[2],this.coupon[4],this.coupon[3],this.coupon[5],this.coupon[6]],
          type: 'bar'
        }/*,{
			    	name:'邮件营销',
			        data: [220, 182, 191, 234, 290, 330, 310],
			        type: 'bar'
			    },{
			    	name:'联盟广告',
			        data: [150, 232, 201, 154, 190, 330, 410],
			        type: 'bar'
			    }*/],
        /*color:['#95c53b','#4da6b1','#f28f27']*/
      };
      myChartColumn.setOption(optionColumn);

    },
    draw2 () {
      let myChartLine = echarts.init(document.getElementById('line'));
      let optionLine = {
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        // legend: {
        // 	data: ['当天','最近一周','最近一月'],
        // 	align: 'left'
        //     /*data:['浙江','上海','温州','北京','郑州']*/
        // },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            /*saveAsImage: {}*//*下载图标*/
          }
        },
        xAxis: [{
          type: 'category',
          boundaryGap: true,
          data: this.arrays4,
          axisLabel: {
            interval: 0,
            rotate: 40
          }
        },


        ],
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}元'
          }
        },
        series: [
          {
            name: '当天',
            type: 'bar',
            data: this.array1
          },
          {
            name: '最近一周',
            type: 'bar',
            data: this.array2
          },
          {
            name: '当天收入',
            type: 'bar',
            data: this.array3
          }
        ],
        /*color:['#95c53b','#4da6b1','#f28f27']*/
      };

      myChartLine.setOption(optionLine);
    },
    async initlist () {
      myChartpaytupe = echarts.init(document.getElementById('column'));
      myChartpaytupe.showLoading({
        text: "图表数据正在努力加载..."
      });
      let data = {
        page: 1,
        pageSize: 0,
        is_del: 0,
        userId: localStorage.getItem('userId'),
        dealer: localStorage.getItem('dealer')
      }
      let res = await payerules(data)
      if (res.data.resCode == 0) {
        var lcknum = 0
        let mesarr = res.data.result;
        for (let i = 0; i < mesarr.length; i++) {
          lcknum += mesarr[i].price
          this.numtotals = (lcknum).toFixed(2)
        }
        this.paytupe = Object.values(res.data.payTypeCount)
        let optionColumn = {
          xAxis: {
            type: 'category',
            data: ['无感支付', '支付宝支付', '微信支付', '现金支付', '特权', '免费']
          },
          tooltip: {
            trigger: 'axis'
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value}单'
            }
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          series: [{
            data: this.paytupe,
            type: 'bar'
          }]
        };
        myChartpaytupe.setOption(optionColumn);
        myChartpaytupe.hideLoading();
      }
    }
  },
  mounted () {
    this.initlist()
    axios({
      method: 'post',
      url: 'http://39.104.99.181:8762/app/reserve/selectByVReserveCount',
      data: Qs.stringify({
        userId: localStorage.getItem('userId'),
        dealer: localStorage.getItem('dealer')
      })
    }).then(res => {
      console.log(res)
      this.coupon = Object.values(res.data)
      this.drawcanvs();
      console.log(this.coupon);
    })    
    document.title = this.$route.meta.title;
    let params = {
      pageSize: this.paging.pageSize,
      page: this.paging.page
    }

    this.initParkingDevList(params)
    let datas = {
      page: 1,
      pageSize: 100,
      userId: localStorage.getItem('userId'),
      dealer: localStorage.getItem('dealer')
    }
    this.gatepeople(datas)
    this.Alipay(datas)
    this.locktotal({
      pageSize: 100,
      page: 1
    })
    this.change()
    this.changeTime()
    let val = this.ONEreslist
    for (let i = 0; i < val.length; i++) {
      if (val[i].parking_lot_type == 3) {
        this.municipal += 1;
      } else if (val[i].parking_lot_type == 1) {
        this.resident += 1;
      } else if (val[i].parking_lot_type == 2) {
        this.business += 1;
      } else if (val[i].parking_lot_type == 4) {
        this.parik += 1;
      } else if (val[i].parking_lot_type == 5) {
        this.commerce += 1;
      } else if (val[i].parking_lot_type == 6) {
        this.other += 1;
      } else if (val[i].parking_lot_type == 7) {
        this.traffic += 1;
      } else {
        this.agricul += 1;
      }
    }
    this.table = [this.municipal, this.resident, this.business, this.parik, this.commerce, this.other, this.traffic, this.agricul]
    console.log(this.table)
    this.draw()





    // console.log(JSON.parse(localStorage.getItem('usein')))
    // this.alis=JSON.parse(localStorage.getItem('usein'))
    // this.message=JSON.parse(localStorage.getItem('licks'))
    // this.message=this.ONEreslist
    // this.$store.dispatch('parktitle')

    // console.log(this.$store.state.ONEreslist)
    // console.log(this.parkingtitle)
    // this.$store.dispatch('typepays')

    // console.log(this.table)

  }
}
</script>

<style scoped="scoped">
* {
  font-family: 'Microsoft Yahei', simsun, 'Times New Roman', Times, serif;
}
.contrainer {
  height: 100%;
  position: relative;
}

.mapview-div {
  width: 50%;
  height: 500px;
}

.count-div {
  width: 100%;
  height: 200px;
  margin-top: 20px;
}

.count-divitem {
  width: 44%;
  height: 100%;
  background: #fff;
  border: 1px solid #cdcdcd;
  box-shadow: 0 0 1px #cdcdcd;
  position: relative;
}

.left {
  float: left;
}

.right {
  float: right;
}

.count-top-line {
  position: absolute;
  width: 30px;
  height: 100%;
  background: #79b9f3;
  color: #fff;
}

.echarts-pattern {
  width: 100%;
  height: 100%; /* padding-left: 30px; */
}

.top-label {
  text-align: center;
  display: inline-block;
  padding-top: 9px;
  font-size: 16px;
  font-family: 'Microsoft Yahei', simsun, 'Times New Roman', Times, serif;
  width: 100%;
}
.contrainerDiv {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 96%;
  margin-bottom: 20px;
}
.contrainerDiv > div {
  width: 23%;
  margin-top: 20px;
  border-radius: 10px;
}
.contrainerDiv > div:nth-of-type(1) {
  background-color: #6ccbc8;
}
.contrainerDiv > div:nth-of-type(2) {
  background-color: #56c8f3;
}
.contrainerDiv > div:nth-of-type(3) {
  background-color: #f8d447;
}
.contrainerDiv > div:nth-of-type(4) {
  background-color: #fe6e60;
}
/* .contrainerCont{display: flex;height: 40px;} */
/* .contrainerCont>div:nth-of-type(1){width: 38px;height: 38px;border: 1px solid #fff;border-radius: 19px;text-align: center;background-color: rgba(0,0,0,0.1);margin: 0 5px 0 10px;color: #fff;} */
.contrainerCont > div:nth-of-type(1) > i {
  margin: 11px 0;
}
.contrainerCont > div:nth-of-type(2) {
  line-height: 38px;
  font-size: 20px;
}
.contrainerCont img {
  width: 100%;
  height: 100%;
}
.contrainerBox {
  display: flex;
  justify-content: space-between;
  color: #fff;
}
.contrainerBox > div:nth-of-type(2) {
  line-height: 38px;
  margin-right: 20px;
  font-size: 20px;
  width: 100%;
  text-align: right;
}
.mapviewDiv {
  display: flex;
}

.mapName {
  width: 100%;
  height: 70px;
  display: -webkit-flex;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
}
.mapNameBox {
  width: 45%;
  height: 60px;
  background: #f4f3f4;
  border: 1px solid #e5e5e5;
  border-radius: 0.25em;
  text-align: center;
  line-height: 60px;
  font-size: 16px;
  color: #2d353c;
}
#SalesStatistics {
  padding: 20px;
}
.fa {
  width: 96%;
  margin: 0 auto;
}
#cake,
#column,
#line,
#radar {
  width: 100%;
  height: 300px;
}
.imgset {
  width: 30px;
  height: 30px;
  margin: 20px;
}
.contrainerBox span {
  font-size: 14px;
  margin-left: 0.1rem;
}
</style>