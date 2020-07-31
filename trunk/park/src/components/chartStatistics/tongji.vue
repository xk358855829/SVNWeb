<template>
  <div class="contrainer">
    <div style="width:90%;margin:0 auto;padding-top:40px;">
      <span>停车场名称：</span>
      <el-select v-model="search.parking_id" placeholder="请选择" @change="change" value="速利停车场">
        <el-option value="9" key label="维多利停车场"></el-option>
        <el-option
          v-for="nice in messArray_get"
          :key="nice.id"
          :label="nice.parking_name"
          :value="nice.parking_id"
        ></el-option>
      </el-select>
      <span>停车收入：</span>
      <el-select v-model="search.isOrdered" placeholder="请选择" @change="changeMoney">
        <!-- <el-option value="">未选择</el-option> -->
        <el-option v-for="nice in moneyorder" :key="nice.id" :label="nice.label" :value="nice.id"></el-option>
      </el-select>
      <span>时间选择：</span>
      <el-select v-model="search.id" placeholder="请选择" @change="changeTime">
        <el-option value>未选择</el-option>
        <el-option v-for="nice in dataChose" :key="nice.id" :label="nice.label" :value="nice.id"></el-option>
      </el-select>
      <!-- <el-button type="success"
                 class="oyButton"
                 icon="el-icon-download"
      @click='export2Excel'>导出</el-button>-->
    </div>
    <el-row class="fa" style="padding-top:50px;margin-bottom:20px;">
      <el-col :span="12" style="background:#fff;">
        <div id="line"></div>
      </el-col>
      <el-col :span="4" style="background:#e9e9e9;width:3%;height:350px;"></el-col>
      <el-col :span="8" style="background:#fff;">
        <div id="carnumberlock" :style="{width: '100%', height: '350px'}"></div>
      </el-col>
    </el-row>
    <el-row class="fa">
      <el-col :span="12" style="background:#fff;">
        <div style="width:90%;margin:0 auto;margin-top:0.1rem">
          <!-- <span>停车场名称：</span>
          <el-select v-model="searchs.parking_id"
                     multiple
                     placeholder="请选择"
                     @change="changebarries"
                     value="速利停车场">
            <el-option value="">未选择</el-option>
            <el-option v-for="nice in messArray_get"
                       :key="nice.id"
                       :label="nice.parking_name"
                       :value="nice.parking_id"></el-option>
          </el-select>
          <span>时间选择：</span>
          <el-select v-model="searchs.id"
                     placeholder="请选择"
                     @change="changebarriesTime">
            <el-option value="">未选择</el-option>
            <el-option v-for="nice in dataChose"
                       :key="nice.id"
                       :label="nice.label"
                       :value="nice.id"></el-option>
          </el-select>-->
        </div>

        <div id="linebarrier"></div>
      </el-col>
      <el-col :span="4" style="background:#e9e9e9;width:3%;height:350px;"></el-col>
      <el-col :span="8" style="background:#fff;">
        <div id="carnumberguil" :style="{width: '100%', height: '360px'}"></div>
      </el-col>
    </el-row>
    <el-row class="fa" style="padding:20px 0;">
      <el-col :span="12" style="background:#fff;">
        <div id="userlogin"></div>
      </el-col>
      <el-col :span="4" style="background:#e9e9e9;width:3%;height:350px;"></el-col>
      <el-col :span="8" style="background:#fff;">
        <div id="remark" :style="{width: '100%', height: '350px'}"></div>
      </el-col>
    </el-row>
    <!-- <div class="mapName">
			<div class="mapNameBox">全国主要城市设备分布</div>
			<div class="mapNameBox">本周车位使用情况</div>
		</div>
		<div class="mapviewDiv">
    <div class="mapview-div" id="mapView"></div>-->
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
    </div>-->
  </div>
</template>

<script>
import Qs from "qs";
import axios from "axios";
import echarts from "echarts";
import { mapState, mapActions, mapGetters } from "vuex";
import { searchClicks, lockstaic,userlogin } from "../api/api.js";
export default {
  name: "pageIndex",
  data() {
    return {
      carnumrtype: [],
      todaycar1: [],
      todaycar4: [],
      dataChose: [
        {
          label: "当日",
          id: 1
        },
        {
          label: "当周",
          id: 2
        },
        {
          label: "当月",
          id: 3
        },
        {
          label: "当年",
          id: 4
        }
      ],
      moneyorder: [
        {
          label: "正常进场单",
          id: 1
        },
        {
          label: "预约进场单",
          id: 2
        },
        {
          label: "全部",
          id: 0
        }
      ],
      search: {
        parking_id: "",
        id: 1,
        isOrdered: 1
      },
      searchs: {
        parking_id: "",
        id: 1,
        isOrdered: 1
      },
      alis: "",
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
        AbnorCount: "",
        cheCount: "",
        count: "",
        encloseCount: ""
      },
      sanitation: "",
      landscaping: "",
      watercom: "",
      firemaster: "",
      paging: {
        page: 1,
        pageSize: 10,
        total: ""
      },
      arrays4: [],
      x: 0,
      y: 0,
      twotime: "",
      tableDatap: "",
      tableData: [],
      xAxis19: [],
      series18: [],
      arr: [],
      arr2: [],
      value15: "",
      value16: "",
      parkid: "",
      numtotals: "",
      array1: "",
      array2: "",
      array3: "",
      arrays1: "",
      arrays2: "",
      arrays3: "",
      akeabn: "",
      akeabns: "",
      locktool: [],
      userlogininfo:[]
    };
  },
  watch: {
    messArray_get: function(val) {
      console.log(val);
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
      this.table = [
        this.municipal,
        this.resident,
        this.business,
        this.parik,
        this.commerce,
        this.other,
        this.traffic,
        this.agricul
      ];
      console.log(this.table);
      this.draw();
    }
  },
  computed: {
    ...mapState(["parkingtitle", "typepayLIST", "ONEreslist", "totals"]),
    ...mapState({
      namegate: state => state.gate.gatelistcount
    }),
    ...mapGetters(["messArray_get", "listup"])
  },
  methods: {
    ...mapActions([
      "Alipay",
      "typepays",
      "facility",
      "initParkingDevList",
      "gatepeople",
      "locktotal"
    ]),

    async changeMoney(val) {
      await searchClicks("/bills/getPointBillsIncome", {
        isOrdered: val,
        type: this.search.id,
        time: this.common.obtainnewtime().slice(0, 10),
        parkingId: this.parkid
      }).then(mes => {
        let that = this;
        console.log(mes);
        that.array3 = [];
        that.array3 = Object.keys(mes.data.result).map(
          key => mes.data.result[key]
        );
        that.array3 = that.array3.reverse();
        that.arrays3 = Object.keys(mes.data.result);
        that.arrays4 = [];
        if (this.search.id == 1) {
          that.arrays4 = ["当日"];
        } else if (this.search.id == 2) {
          that.arrays4 = ["当周"];
        } else if (this.search.id == 3) {
          that.arrays4 = ["当月"];
        } else if (this.search.id == 4) {
          that.arrays3.reverse().forEach((a, b) => {
            that.arrays4.push(a);
          });
        }
      });
      console.log(this.array3);
      console.log(this.arrays4);
      this.draw2();
    },
    async changeTime(val) {
      if (val == undefined) {
        val = 1;
      }

      // if (val == "2") {
      await searchClicks("/bills/getPointBillsIncome", {
        isOrdered: this.search.isOrdered,
        type: val,
        time: this.common.obtainnewtime().slice(0, 10),
        parkingId: this.search.parking_id
      }).then(mes => {
        let that = this;
        console.log(mes);
        that.array3 = [];
        that.array3 = Object.keys(mes.data.result).map(
          key => mes.data.result[key]
        );
        that.array3 = that.array3.reverse();
        that.arrays3 = Object.keys(mes.data.result);
        that.arrays4 = [];
        if (this.search.id == 1) {
          that.arrays4 = ["当日"];
        } else if (this.search.id == 2) {
          that.arrays4 = ["当周"];
        } else if (this.search.id == 3) {
          that.arrays4 = ["当月"];
        } else if (this.search.id == 4) {
          that.arrays3.reverse().forEach((a, b) => {
            that.arrays4.push(a);
          });
        }
        // that.arrays3.reverse().forEach((a, b) => {
        //   that.arrays4.push(a.slice(5, 10))
        // })
      });
      console.log(this.array3);
      console.log(this.arrays4);
      this.draw2();
      // } else if (val == "3") {
      //   await searchClicks('/bills/getPointBillsIncome', { type: 3, time: this.common.obtainnewtime(), parkingId: this.parkid }).then(mes => {
      //     let that = this;
      //     console.log(mes)
      //     that.array3 = Object.keys(mes.data.result).map(key => mes.data.result[key])
      //     that.array3 = that.array3.reverse()
      //     that.arrays3 = Object.keys(mes.data.result)
      //     that.arrays4 = []
      //     that.arrays3.reverse().forEach((a, b) => {
      //       that.arrays4.push(a.slice(6, 10))
      //     })
      //   })
      //   this.draw2();
      // }
      console.log(val);
      var days;
      if (val == 2 || val == 3) {
        days = {
          type: val,
          parkingId: this.search.parking_id
        };
      } else {
        days = {
          type: val,
          time: this.common.obtainnewtime().slice(0, 10),
          parkingId: this.search.parking_id
        };
      }
      if (val == 1) {
        await searchClicks("/ISVEnterOut/countEnterOut", days).then(mes => {
          this.carnumrtype = Object.keys(mes.data.resMsg[0]);
          this.todaycar1 = Object.values(mes.data.resMsg[0]);
          console.log(this.todaycar1);
          if (Object.values(mes.data.resMsg[2]).length) {
            this.akeabn = Object.values(mes.data.resMsg[2])[0][1];
            this.akeabns = Object.values(mes.data.resMsg[2])[1][1];
          }
        });
      } else if (val == 2) {
        await searchClicks("/ISVEnterOut/countEnterOut", days).then(mes => {
          this.carnumrtype = Object.keys(mes.data.resMsg[0]);
          this.todaycar1 = Object.values(mes.data.resMsg[0]);
          if (Object.values(mes.data.resMsg[2]).length) {
            this.akeabn = Object.values(mes.data.resMsg[2])[0][1];
            this.akeabns = Object.values(mes.data.resMsg[2])[1][1];
          }
        });
      } else if (val == 3) {
        await searchClicks("/ISVEnterOut/countEnterOut", days).then(mes => {
          this.carnumrtype = Object.keys(mes.data.resMsg[0]);
          this.todaycar1 = Object.values(mes.data.resMsg[0]);
          if (Object.values(mes.data.resMsg[2]).length) {
            this.akeabn = Object.values(mes.data.resMsg[2])[0][1];
            this.akeabns = Object.values(mes.data.resMsg[2])[1][1];
          }
        });
      } else if (val == 4) {
        await searchClicks("/ISVEnterOut/countEnterOut", days).then(mes => {
          this.carnumrtype = Object.keys(mes.data.resMsg[0]);
          this.todaycar4 = Object.values(mes.data.resMsg[0]);
          if (Object.values(mes.data.resMsg[2]).length) {
            this.akeabn = Object.values(mes.data.resMsg[2])[0][1];
            this.akeabns = Object.values(mes.data.resMsg[2])[1][1];
          }
        });
      }

      this.draw5();
      this.draw8();
    },
    async changebarriesTime(val) {
      // } else if (val == "3") {
      //   await searchClicks('/bills/getPointBillsIncome', { type: 3, time: this.common.obtainnewtime(), parkingId: this.parkid }).then(mes => {
      //     let that = this;
      //     console.log(mes)
      //     that.array3 = Object.keys(mes.data.result).map(key => mes.data.result[key])
      //     that.array3 = that.array3.reverse()
      //     that.arrays3 = Object.keys(mes.data.result)
      //     that.arrays4 = []
      //     that.arrays3.reverse().forEach((a, b) => {
      //       that.arrays4.push(a.slice(6, 10))
      //     })
      //   })
      //   this.draw2();
      // }
    },
    async change(val) {
      let that = this;
      // var htmls = ''
      // val.forEach(a => {
      //   htmls += a + ','
      // })
      // console.log(htmls)
      // that.parkid = htmls.slice(0, htmls.length - 1)
      that.parkid = val;
      if (this.search.id == "" || this.search.id == 3) {
        await searchClicks("/bills/getPointBillsIncome", {
          isOrdered: this.search.isOrdered,
          type: 3,
          time: that.common.obtainnewtime().slice(0, 10),
          parkingId: that.search.parking_id
        }).then(mes => {
          let that = this;
          console.log(mes);
          that.array3 = Object.keys(mes.data.result).map(
            key => mes.data.result[key]
          );
          that.array3 = that.array3.reverse();
          that.arrays3 = Object.keys(mes.data.result);
          that.arrays4 = ["当月"];
          // that.arrays3.reverse().forEach((a, b) => {
          //   that.arrays4.push(a.slice(6, 10))
          // })
        });
        this.draw2();
      } else if (this.search.id == 2) {
        await searchClicks("/bills/getPointBillsIncome", {
          isOrdered: this.search.isOrdered,
          type: 2,
          time: this.common.obtainnewtime().slice(0, 10),
          parkingId: that.search.parking_id
        }).then(mes => {
          let that = this;
          console.log(mes);
          that.array3 = [];
          that.array3 = Object.keys(mes.data.result).map(
            key => mes.data.result[key]
          );
          that.array3 = that.array3.reverse();
          that.arrays3 = Object.keys(mes.data.result);
          that.arrays4 = ["当周"];
        });
        console.log(this.array3);
        console.log(this.arrays4);
        this.draw2();
      } else if (this.search.id == 1) {
        await searchClicks("/bills/getPointBillsIncome", {
          isOrdered: this.search.isOrdered,
          type: 1,
          time: this.common.obtainnewtime().slice(0, 10),
          parkingId: that.search.parking_id
        }).then(mes => {
          let that = this;
          console.log(mes);
          that.array3 = [];
          that.array3 = Object.keys(mes.data.result).map(
            key => mes.data.result[key]
          );
          that.array3 = that.array3.reverse();
          that.arrays3 = Object.keys(mes.data.result);
          that.arrays4 = ["当日"];
          // that.arrays3.reverse().forEach((a, b) => {
          //   that.arrays4.push(a.slice(6, 10))
          // })
        });
        console.log(this.array3);
        console.log(this.arrays4);
        this.draw2();
      } else if (this.search.id == 4) {
        await searchClicks("/bills/getPointBillsIncome", {
          isOrdered: this.search.isOrdered,
          type: 4,
          time: this.common.obtainnewtime().slice(0, 10),
          parkingId: that.search.parking_id
        }).then(mes => {
          let that = this;
          console.log(mes);
          that.array3 = [];
          that.array3 = Object.keys(mes.data.result).map(
            key => mes.data.result[key]
          );
          that.array3 = that.array3.reverse();
          that.arrays3 = Object.keys(mes.data.result);
          that.arrays4 = [];
          that.arrays3.reverse().forEach((a, b) => {
            that.arrays4.push(a);
          });
        });
        console.log(this.array3);
        console.log(this.arrays4);
        this.draw2();
      }
      console.log(val);

      console.log(this.search.id);

      if (this.search.id == 3) {
        await searchClicks("/ISVEnterOut/countEnterOut", {
          type: 3,
          parkingId: this.search.parking_id
        }).then(mes => {
          console.log(mes);
          this.carnumrtype = Object.keys(mes.data.resMsg[0]);
          this.todaycar1 = Object.values(mes.data.resMsg[0]);
          if (Object.values(mes.data.resMsg[2]).length) {
            this.akeabn = Object.values(mes.data.resMsg[2])[0][1];
            this.akeabns = Object.values(mes.data.resMsg[2])[1][1];
          }
          this.draw5();
          this.draw8();
        });
      } else if (this.search.id == 2) {
        await searchClicks("/ISVEnterOut/countEnterOut", {
          type: 2,
          parkingId: this.search.parking_id
        }).then(mes => {
          this.carnumrtype = Object.keys(mes.data.resMsg[0]);
          this.todaycar1 = Object.values(mes.data.resMsg[0]);
          if (Object.values(mes.data.resMsg[2]).length) {
            this.akeabn = Object.values(mes.data.resMsg[2])[0][1];
            this.akeabns = Object.values(mes.data.resMsg[2])[1][1];
          }
          this.draw5();
          this.draw8();
        });
      } else if (this.search.id == "" || this.search.id == 1) {
        await searchClicks("/ISVEnterOut/countEnterOut", {
          type: 1,
          time: this.common.obtainnewtime().slice(0, 10),
          parkingId: this.search.parking_id
        }).then(mes => {
          this.carnumrtype = Object.keys(mes.data.resMsg[0]);
          this.todaycar1 = Object.values(mes.data.resMsg[0]);
          if (Object.values(mes.data.resMsg[2]).length) {
            this.akeabn = Object.values(mes.data.resMsg[2])[0][1];
            this.akeabns = Object.values(mes.data.resMsg[2])[1][1];
          }
          this.draw5();
          this.draw8();
        });
      } else if (this.search.id == 4) {
        await searchClicks("/ISVEnterOut/countEnterOut", {
          type: 4,
          time: this.common.obtainnewtime().slice(0, 10),
          parkingId: this.search.parking_id
        }).then(mes => {
          this.carnumrtype = Object.keys(mes.data.resMsg[0]);
          this.todaycar4 = Object.values(mes.data.resMsg[0]);
          if (Object.values(mes.data.resMsg[2]).length) {
            this.akeabn = Object.values(mes.data.resMsg[2])[0][1];
            this.akeabns = Object.values(mes.data.resMsg[2])[1][1];
          }
          this.draw5();
          this.draw8();
        });
      }
    },
    draw() {
      let myChartCake = echarts.init(document.getElementById("cake"));
      let optionCake = {
        title: {
          text: "",
          subtext: "" /*'纯属虚构'*/,
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "horizontal" /*水平*/,
          left: "center" /*居中*/,
          data: ["浙江", "上海", "成都", "北京", "郑州"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: this.resident, name: "居民小区" },
              { value: this.municipal, name: "路测停车" },
              { value: this.business, name: "商圈停车场" },
              { value: this.parik, name: "公园景点" },
              { value: this.commerce, name: "商务楼宇" },
              { value: this.other, name: "其它" },
              { value: this.traffic, name: "交通枢纽" },
              { value: this.agricul, name: "市政设施" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      myChartCake.setOption(optionCake);
    },
    draw1() {
      let myChartColumn = echarts.init(document.getElementById("column"));
      let optionColumn = {
        xAxis: {
          type: "category",
          data: [
            "支付宝支付",
            "微信支付",
            "无感支付",
            "现金支付",
            "特权",
            "免费"
          ]
        },
        tooltip: {
          trigger: "axis"
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value}单"
          }
        },
        legend: {
          /* data: ['直接访问','邮件营销','联盟广告']*/
        },
        toolbox: {
          feature: {
            /*saveAsImage: {}*/
            /*下载图标*/
          }
        },
        series: [
          {
            /*name:'流量卡使用情况',*/
            data: [this.apliay, this.wechat, this.feel, this.cash, this.tequ],
            type: "bar"
          } /*,{
			    	name:'邮件营销',
			        data: [220, 182, 191, 234, 290, 330, 310],
			        type: 'bar'
			    },{
			    	name:'联盟广告',
			        data: [150, 232, 201, 154, 190, 330, 410],
			        type: 'bar'
			    }*/
        ]
        /*color:['#95c53b','#4da6b1','#f28f27']*/
      };
      myChartColumn.setOption(optionColumn);
    },
    draw8() {
      let myChart = echarts.init(document.getElementById("carnumberguil"));
      myChart.setOption({
        title: {
          text: "停车场道闸进场统计",
          subtext: "车位锁",
          x: "right"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["进场", "出场"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: this.akeabn, name: "进场" },
              { value: this.akeabns, name: "出场" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    },
    draw3() {
      let myChart = echarts.init(document.getElementById("carnumberlock"));
      myChart.setOption({
        title: {
          text: "停车场车位统计图",
          subtext: "车位锁",
          x: "right"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["剩余车位", "已占用车位", "车位锁离线", "车位锁异常"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: this.locktool,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    },

    draw4() {
      let myChart = echarts.init(document.getElementById("userlogin"));
      myChart.setOption({
        title: {
          text: "注册渠道统计图",
          // subtext: '车位锁',
          x: 'right'
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["速利物联", "车口袋"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: this.userlogininfo,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    },

    draw2() {
      let myChartLine = echarts.init(document.getElementById("line"));
      let optionLine = {
        title: {
          text: "停车费用查询",
          left: "center"
        },
        tooltip: {
          trigger: "axis"
        },
        // legend: {
        // 	data: ['当天','最近一周','最近一月'],
        // 	align: 'left'
        //     /*data:['浙江','上海','温州','北京','郑州']*/
        // },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            /*saveAsImage: {}*/
            /*下载图标*/
          }
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: true,
            data: this.arrays4,
            axisLabel: {
              interval: 0,
              rotate: 40
            }
          }
        ],
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value}元"
          }
        },
        series: [
          {
            name: "当天",
            type: "bar",
            data: this.array1
          },
          {
            name: "最近一周",
            type: "bar",
            data: this.array2
          },
          {
            name: "当天收入",
            type: "bar",
            data: this.array3
          }
        ]
        /*color:['#95c53b','#4da6b1','#f28f27']*/
      };

      myChartLine.setOption(optionLine);
    },
    draw5() {
      console.log(this.todaycar1);
      let myChart = echarts.init(document.getElementById("linebarrier"));
      let optionLine = {
        title: {
          text: "停车类型统计",
          left: "center"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          // data: ['当天', '当周', '当月', '当年'],
          // 	align: 'left'
          //     /*data:['浙江','上海','温州','北京','郑州']*/
          left: "left"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            /*saveAsImage: {}*/
            /*下载图标*/
          }
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: true,
            data: [
              "永久免费",
              "限时车",
              "储值车",
              "临时车",
              "年租车",
              "季租车",
              "月租车"
            ],
            axisLabel: {
              interval: 0,
              rotate: 40
            }
          }
        ],
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value}"
          }
        },
        series: [
          {
            type: "bar",
            data: [
              this.todaycar1[8],
              this.todaycar1[10],
              this.todaycar1[12],
              this.todaycar1[14],
              this.todaycar1[16],
              this.todaycar1[18],
              this.todaycar1[20]
            ]
          }
        ]
        /*color:['#95c53b','#4da6b1','#f28f27']*/
      };

      myChart.setOption(optionLine);
    }
  },
  mounted() {
    if (this.search.parking_id == "") {
    }
    lockstaic().then(res => {
      this.locktool.push(
        { name: "剩余车位", value: res.data.count1 },
        { name: "已占用车位", value: res.data.count2 },
        { name: "车位锁离线", value: res.data.count3 },
        { name: "车位锁异常", value: res.data.count4 }
      );
      this.draw3();
    });
    userlogin().then(res => {
      console.log(res);
      this.userlogininfo.push(
        { name: "速利物联", value: res.data.type2.count },
        { name: "车口袋", value: res.data.type1.count },
      );
      this.draw4();
    });

    document.title = this.$route.meta.title;
    this.draw5();

    let params = {
      pageSize: this.paging.pageSize,
      page: this.paging.page
    };

    this.initParkingDevList(params);
    let datas = {
      page: 1,
      pageSize: 100,
      userId: localStorage.getItem("userId"),
      dealer: localStorage.getItem("dealer")
    };
    this.gatepeople(datas);
    this.Alipay(datas);
    this.locktotal({
      pageSize: 0,
      page: 1
    });
    this.change();

    this.changeTime();
    let val = this.ONEreslist;
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
    this.table = [
      this.municipal,
      this.resident,
      this.business,
      this.parik,
      this.commerce,
      this.other,
      this.traffic,
      this.agricul
    ];
    console.log(this.table);
    this.draw();
    let that = this;
    searchClicks("/feeOrder/orders", {
      page: 1,
      pageSize: 10,
      is_del: 0,
      userId: localStorage.getItem("userId"),
      dealer: localStorage.getItem("dealer")
    }).then(message => {
      if (message.data.resCode == 0) {
        console.log(message);
        let mesarr = message.data.result;
        var lcknum = 0;
        // for (let i = 0; i < mesarr.length; i++) {
        //   lcknum += mesarr[i].price
        //   if (mesarr[i].pay_type == 1) {
        //     that.feel += 1;
        //   } else if (mesarr[i].pay_type == 2) {
        //     that.apliay += 1;
        //   } else if (mesarr[i].pay_type == 3) {
        //     that.wechat += 1;
        //   } else if (mesarr[i].pay_type == 6) {
        //     that.tequ += 1;
        //   } else if (mesarr[i].pay_type == 5) {
        //     that.cash += 1;
        //   } else if (mesarr[i].pay_type == 0) {
        //     that.empty += 1
        //   }
        //   that.numtotals = (lcknum).toFixed(2)
        // }
        that.draw1();
      }
    });

    // console.log(JSON.parse(localStorage.getItem('usein')))
    // this.alis=JSON.parse(localStorage.getItem('usein'))
    // this.message=JSON.parse(localStorage.getItem('licks'))
    // this.message=this.ONEreslist
    // this.$store.dispatch('parktitle')

    // console.log(this.$store.state.ONEreslist)
    // console.log(this.parkingtitle)
    // this.$store.dispatch('typepays')

    // console.log(this.table)

    let myChartRadar = echarts.init(document.getElementById("radar"));
    let optionRadar = {
      title: {
        text: ""
      },
      tooltip: {},
      legend: {
        /*data: ['浙江','上海','温州','北京','郑州']*/
      },
      radar: {
        // shape: 'circle',
        name: {
          textStyle: {
            color: "#fff",
            backgroundColor: "#999",
            borderRadius: 3,
            padding: [3, 5]
          }
        },
        indicator: [
          { name: "周一", max: 250 },
          { name: "周二", max: 250 },
          { name: "周三", max: 250 },
          { name: "周四", max: 250 },
          { name: "周五", max: 250 },
          { name: "周六", max: 250 },
          { name: "周日", max: 250 }
        ]
      },
      series: [
        {
          name: "",
          type: "radar",
          // areaStyle: {normal: {}},
          data: [
            {
              value: [120, 132, 101, 134, 90, 230, 210],
              name: ""
            }
            /*{
              value : [220, 182, 191, 234, 290, 330, 310],
              name : '联盟广告'
          },
          {
              value : [150, 232, 201, 154, 190, 330, 410],
              name : '视频广告'
          }*/
          ]
        }
      ]
      /*color:['#95c53b','#4da6b1','#f28f27']*/
    };

    myChartRadar.setOption(optionRadar);
    // setTimeout(function(){
    // 	window.onresize = function () {
    // 		// resizeWorldMapContainer();
    // 		myChartCake.resize();
    // 		myChartColumn.resize();
    // 		myChartLine.resize();
    // 		myChartRadar.resize();
    // 	}
    // },20)
  }
};
</script>

<style scoped="scoped">
* {
  font-family: "Microsoft Yahei", simsun, "Times New Roman", Times, serif;
}
.main {
  background: transparent !important;
}
.contrainer {
  /* height: 100%; */
  position: relative;
  background: #e9e9e9;
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
  font-family: "Microsoft Yahei", simsun, "Times New Roman", Times, serif;
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
#linebarrier,
#carnumberguil,
#userlogin,
#remark,
#radar {
  width: 100%;
  height: 350px;
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
.el-col-8 {
  width: 46%;
}
</style>