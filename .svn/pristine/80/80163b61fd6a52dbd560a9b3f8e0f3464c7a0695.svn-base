<template>
  <div id="SalesStatistics">
    <el-row class='fa'>
      <el-col :span="11">
        <div class="echartTitle">消防栓设备网络状态</div>
        <div id="cake"
             v-if="!shujuemptyone"></div>
        <div v-if="shujuemptyone"
             style="margin:0.8rem auto;width:50%;text-align:center;">
          <img src="../../../static/image/shuju.png"
               alt=""
               style="">
          <span style="">无数据</span>
        </div>
      </el-col>
      <el-col :span="2"> &nbsp;</el-col>
      <el-col :span="11">
        <div class="echartTitle">报警异常统计</div>
        <div id="falut"></div>
      </el-col>
    </el-row>
    <el-row class='fa'>
      <el-col :span="10">
        <div class="echartTitle">设备水流量统计图</div>
        <div id="lastoption"
             v-if="!shujuempty"></div>
        <div v-if="shujuempty"
             style="margin:0.8rem auto;width:50%;text-align:center;">
          <img src="../../../static/image/shuju.png"
               alt=""
               style="">
          <span style="">无数据</span>
        </div>
      </el-col>
      <el-col :span="4"
              style="margin-top:5%">
        <!-- <el-table :data="tableData"
                  style="height:420px">
          <el-table-column label="设备编号">
            <template slot-scope="scope">
              <el-popover trigger="hover"
                          placement="top">
                <p class="TsMaxWidth">{{ scope.row.deviceId }}</p>
                <div slot="reference"
                     class="name-wrapper">
                  <div class="overflowHide"
                       @click="elding3(scope.row)">{{ scope.row.deviceId }}</div>
                </div>
              </el-popover>
            </template>
          </el-table-column>
        </el-table> -->
        <!-- <div>
          <el-pagination background
                         small
                         :page-sizes="[1,2,3,4]"
                         :page-size="6"
                         @current-change="handleCurrentChange"
                         @size-change="handleSizeChange"
                         layout="prev, pager, next"
                         :total="paging.total">
          </el-pagination>
        </div> -->
      </el-col>
      <el-col :span="10">
        <div class="echartTitle">管理分配人数统计</div>
        <div id="card"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
import echarts from 'echarts'
export default {
  name: 'equipmentList',
  data () {
    return {
      shujuemptyone: false,
      shujuempty: false,
      num: {
        AbnorCount: '',
        cheCount: '',
        count: '',
        encloseCount: ''
      },
      xAxis646: [],
      ddddds: [],
      sanitation: '',
      landscaping: '',
      watercom: '',
      other: '',
      firemaster: '',
      paging: {
        page: 1,
        pageSize: 8,
        total: ''
      },
      x: 0,
      xAxis37: [],
      series16: [],
      xAxis64: [],
      series5: [],
      xAxis6: [],
      ddddd: [],
      y: 0,
      threetime: '',
      twotime: '',
      tableDatap: [],
      tableData: [],
      xAxis19: [],
      series18: [],
      arr: [],
      arr2: [],
      value15: '',
      value16: '',
      onelinetrue: 0,
      onlinefalse: 0,
      countfault_pressure: 0,
      countfault_pay: 0,
      countfault_temperature: 0,
      countfault_opening: 0,
      countfault_leakage: 0,
      countfault_hit: 0,
      countfault_destruction: 0,
      countfault_abnormal: 0,
      countfauCode: 0

    }
  },
  mounted: function () {
    // this.drawLinessd()
    // 		document.title=this.$route.meta.title;
    // 		let myChartCake = echarts.init(document.getElementById('cake'));
    // 		let myChartColumn = echarts.init(document.getElementById('column'));
    // 		let myChartLine = echarts.init(document.getElementById('line'));
    // 		let myChartRadar = echarts.init(document.getElementById('radar'));
    // 		let optionRadar = {
    // 		    title: {
    // 		        text: ''
    // 		    },
    // 		    tooltip: {},
    // 		    legend: {
    // 		        /*data: ['浙江','上海','温州','北京','郑州']*/
    // 		    },
    // 		    radar: {
    // 		        // shape: 'circle',
    // 		        name: {
    // 		            textStyle: {
    // 		                color: '#fff',
    // 		                backgroundColor: '#999',
    // 		                borderRadius: 3,
    // 		                padding: [3, 5]
    // 		           }
    // 		        },
    // 		        indicator: [
    // 		           { name: '周一', max: 250},
    // 		           { name: '周二', max: 250},
    // 		           { name: '周三', max: 250},
    // 		           { name: '周四', max: 250},
    // 		           { name: '周五', max: 250},
    // 		           { name: '周六', max: 250},
    // 		           { name: '周日', max: 250}
    // 		        ]
    // 		    },
    // 		    series: [{
    // 		        name: '',
    // 		        type: 'radar',
    // 		        // areaStyle: {normal: {}},
    // 		        data : [
    // 		            {
    // 		                value : [120, 132, 101, 134, 90, 230, 210],
    // 		                name : ''
    // 		            },
    // 		            /*{
    // 		                value : [220, 182, 191, 234, 290, 330, 310],
    // 		                name : '联盟广告'
    // 		            },
    // 		            {
    // 		                value : [150, 232, 201, 154, 190, 330, 410],
    // 		                name : '视频广告'
    // 		            }*/
    // 		        ]
    // 		    }],
    // 		    /*color:['#95c53b','#4da6b1','#f28f27']*/
    // 		};

    // 		let optionLine = {
    // 		    title: {
    // 		        text: ''
    // 		    },
    // 		    tooltip: {
    // 		        trigger: 'axis'
    // 		    },
    // 		    legend: {
    // 		        /*data:['浙江','上海','温州','北京','郑州']*/
    // 		    },
    // 		    grid: {
    // 		        left: '3%',
    // 		        right: '4%',
    // 		        bottom: '3%',
    // 		        containLabel: true
    // 		    },
    // 		    toolbox: {
    // 		        feature: {
    // 		            /*saveAsImage: {}*//*下载图标*/
    // 		        }
    // 		    },
    // 		    xAxis: {
    // 		        type: 'category',
    // 		        boundaryGap: false,
    // 		        data: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
    // 		    },
    // 		    yAxis: {
    // 		        type: 'value'
    // 		    },
    // 		    series: [
    // 		        {
    // 		            name:'',
    // 		            type:'line',
    // 		            stack: '总量',
    // 		            data:[120, 132, 101, 134, 90, 230, 210, 240, 270, 250, 300, 290]
    // 		        },
    // 		        /*{
    // 		            name:'',
    // 		            type:'line',
    // 		            stack: '总量',
    // 		            data:[220, 182, 191, 234, 290, 330, 310]
    // 		        },
    // 		        {
    // 		            name:'',
    // 		            type:'line',
    // 		            stack: '总量',
    // 		            data:[150, 232, 201, 154, 190, 330, 410]
    // 		        }*/
    // 		    ],
    // 		    /*color:['#95c53b','#4da6b1','#f28f27']*/
    // 		};
    // 		let optionColumn = {
    // 		    xAxis: {
    // 		        type: 'category',
    // 		        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    // 		    },
    // 		    yAxis: {
    // 		        type: 'value'
    // 		    },
    // 		    legend: {
    // 		       /* data: ['直接访问','邮件营销','联盟广告']*/
    // 		    },
    // 		    series: [{
    // 		    	/*name:'流量卡使用情况',*/
    // 		        data: [120, 132, 101, 134, 90, 230, 210],
    // 		        type: 'bar'
    // 		    }/*,{
    // 		    	name:'邮件营销',
    // 		        data: [220, 182, 191, 234, 290, 330, 310],
    // 		        type: 'bar'
    // 		    },{
    // 		    	name:'联盟广告',
    // 		        data: [150, 232, 201, 154, 190, 330, 410],
    // 		        type: 'bar'
    // 		    }*/],
    // 		    /*color:['#95c53b','#4da6b1','#f28f27']*/
    // 		};
    // 		let optionCake = {
    // 		    title : {
    // 		        text: '',
    // 		        subtext: ""/*'纯属虚构'*/,
    // 		        x:'center'
    // 		    },
    // 		    tooltip : {
    // 		        trigger: 'item',
    // 		        formatter: "{a} <br/>{b} : {c} ({d}%)"
    // 		    },
    // 		    legend: {
    // 		        orient: 'horizontal',/*水平*/
    // 		        left: 'center',/*居中*/
    // 		        data: ['浙江','上海','成都','北京','郑州']
    // 		    },
    // 		    series : [
    // 		        {
    // 		            name: '访问来源',
    // 		            type: 'pie',
    // 		            radius : '55%',
    // 		            center: ['50%', '60%'],
    // 		            data:[
    // 		                {value:210, name:'浙江'},
    // 		                {value:310, name:'上海'},
    // 		                {value:410, name:'成都'},
    // 		                {value:210, name:'北京'},
    // 		                {value:310, name:'郑州'},
    // 		            ],
    // 		            itemStyle: {
    // 		                emphasis: {
    // 		                    shadowBlur: 10,
    // 		                    shadowOffsetX: 0,
    // 		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
    // 		                }
    // 		            }
    // 		        }
    // 		    ],
    // 		    /*color:['#95c53b','#4da6b1','#f28f27']*/
    // 		};
    // 	  	myChartCake.setOption(optionCake);
    // 	  	myChartColumn.setOption(optionColumn);
    // 	  	myChartLine.setOption(optionLine);
    // 	  	myChartRadar.setOption(optionRadar);
    // 	},
    // 	methods: {

    // 	}
    // }
    document.title = this.$route.meta.title;
    let that = this
    let arr = []
    axios({
      method: "post",
      url: this.$store.state.http + '/equipment/list',
      data: Qs.stringify({
        page: 1,
        pageSize: 10000,
        userId: sessionStorage.getItem('userId'),
        dealer: sessionStorage.getItem("dealer"),

      })
    }).then(function (message) {

      console.log(message)
      console.log(1999999)
      for (var t = 0; t < message.data.results.length; t++) {
        if (message.data.results[t].fault_pressure == "1") {
          that.countfault_pressure++
        } else if (message.data.results[t].fault_pay == "1") {
          that.countfault_pay++
        } else if (message.data.results[t].fault_temperature == "1") {
          that.countfault_temperature++
        } else if (message.data.results[t].fault_opening == "1") {
          that.countfault_opening++
        } else if (message.data.results[t].fault_leakage == "1") {
          that.countfault_leakage++
        } else if (message.data.results[t].fault_hit == "1") {
          that.countfault_hit++
        } else if (message.data.results[t].fault_destruction == "1") {
          that.countfault_destruction++
        } else if (message.data.results[t].fault_abnormal == "1") {
          that.countfault_abnormal++
        } else if (message.data.results[t].fauCode == "1") {
          that.countfauCode++
        }




      }


      console.log(that.arr2)
      let myChartColumn = echarts.init(document.getElementById('falut'));
      let optionColumn = {
        tooltip: {
                  trigger: 'item'
                  // formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                // legend: {
                //   // orient: 'vertical',
                //   orient: 'vertical',/*水平*/
                //   left: 'left',/*居中*/
                //   data: [that.onelinetrue, that.onlinefalse]
                // },
        xAxis: {
          type: 'category',
          data: ['压力异常', '刷卡异常', '温度异常', '非法开启', '设备漏水', '设备受到撞击', '应急开关破坏', '电机控制异常', '设备倾倒']
        },
        yAxis: {
          type: 'value'
        },
        legend: {
          data: ['直接访问', '邮件营销', '联盟广告']
        },
        series: [{
          /*name:'流量卡使用情况',*/
          data: [that.countfault_pressure, that.countfault_pay, that.countfault_temperature, that.countfault_opening, that.countfault_leakage, that.countfault_hit, that.countfault_destruction, that.countfault_destruction, that.countfault_abnormal, that.countfauCode],
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
      setTimeout(function () {
        window.onresize = function () {
          myChartColumn.resize();
        }
      }, 200)
      //   let falustsl = echarts.init(document.getElementById('falut'));
      //   let falusts = {
      //     color: ['#3398DB'],
      //     tooltip: {
      //       trigger: 'axis',
      //       axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      //         type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      //       }
      //     },
      //     xAxis: [
      //       {
      //         type: 'category',
      //         data: that.arr,
      //         axisTick: {
      //           alignWithLabel: true
      //         },
      //         axisLabel: {//坐标轴刻度标签的相关设置。
      //           // formatter: function (params) {
      //           //   var newParamsName = "";// 最终拼接成的字符串
      //           //   var paramsNameNumber = params.length;// 实际标签的个数
      //           //   var provideNumber = 4;// 每行能显示的字的个数
      //           //   var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
      //           //   /**
      //           //    * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
      //           //    */
      //           //   // 条件等同于rowNumber>1
      //           //   if (paramsNameNumber > provideNumber) {
      //           //     /** 循环每一行,p表示行 */
      //           //     for (var p = 0; p < rowNumber; p++) {
      //           //       var tempStr = "";// 表示每一次截取的字符串
      //           //       var start = p * provideNumber;// 开始截取的位置
      //           //       var end = start + provideNumber;// 结束截取的位置
      //           //       // 此处特殊处理最后一行的索引值
      //           //       if (p == rowNumber - 1) {
      //           //         // 最后一次不换行
      //           //         tempStr = params.substring(start, paramsNameNumber);
      //           //       } else {
      //           //         // 每一次拼接字符串并换行
      //           //         tempStr = params.substring(start, end) + "\n";
      //           //       }
      //           //       newParamsName += tempStr;// 最终拼成的字符串
      //           //     }

      //           //   } else {
      //           //     // 将旧标签的值赋给新标签
      //           //     newParamsName = params;
      //           //   }
      //           //   //将最终的字符串返回
      //           //   return newParamsName
      //           // }
      //         },
      //       }
      //     ],
      //     yAxis: [
      //       {
      //         type: 'value'
      //       }
      //     ],
      //     series: [
      //       {
      //         // name:'直接访问',
      //         type: 'bar',
      //         barWidth: '60%',
      //         data: that.arr2
      //       }
      //     ]
      //   }
      //   falustsl.setOption(falusts);
      //   setTimeout(function () {
      //     window.onresize = function () {
      //       falustsl.resize();
      //     }
      //   }, 200)

    })
    that.htime = [String(new Date().getFullYear()), String((new Date().getMonth()) <= 9 ? '0' + (new Date().getMonth()) : (new Date().getMonth())), String(new Date().getDate() <= 9 ? '0' + (new Date().getDate()) : (new Date().getDate())), String(new Date().getHours() <= 9 ? '0' + (new Date().getHours()) : (new Date().getHours())), String(new Date().getMinutes() <= 9 ? '0' + (new Date().getMinutes()) : (new Date().getMinutes()))];
    that.wtime = [String(new Date().getFullYear()), String((new Date().getMonth() + 1) <= 9 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)), String(new Date().getDate() <= 9 ? '0' + (new Date().getDate()) : (new Date().getDate())), String(new Date().getHours() <= 9 ? '0' + (new Date().getHours()) : (new Date().getHours())), String(new Date().getMinutes() <= 9 ? '0' + (new Date().getMinutes()) : (new Date().getMinutes()))];
    // this.ktime = [String(new Date().getFullYear()),String((new Date().getMonth()+1)<=9?'0'+(new Date().getMonth()+1):(new Date().getMonth()+1)),String(new Date().getDate()<=9?'0'+(new Date().getDate()):(new Date().getDate()))]
    let series5 = [];
    let xAxis6 = [];
    let data = {
      devId: 54015378,
      end: that.wtime[0] + '-' + that.wtime[1] + '-' + that.wtime[2] + 'T00:00:00',
      start: that.htime[0] + '-' + that.htime[1] + '-' + that.htime[2] + 'T00:00:00'
    }
    console.log(data)
    console.log(77777333333333)
    let series4 = [];
    let xAxis3 = [];
    axios({
      method: 'post',
      url: this.$store.state.http + '/Datapoints/getHistoryData',
      data: Qs.stringify(data)
    }).then(function (res) {
      console.log(res);
      if (res.data.resCode == 0) {
        let waters = JSON.parse((res.data.errMsg).slice(6))
        console.log(waters);
        if (waters.data.datastreams.length) {
          for (let i = 0; i < waters.data.datastreams.length; i++) {
            if (waters.data.datastreams[i].id == "2006") {
              let water = waters.data.datastreams[i].datapoints;
              console.log(water);
              console.log(789789)
              console.log(water.length);
              for (let j = 0; j < water.length; j++) {
                console.log(water[j].at.slice(0, 10))
                xAxis6.push(water[j].at.slice(0, 10));
                series5.push(water[j].value);
              }
              console.log(xAxis3);
              console.log(series4);
              // ({
              //   series: [{
              //     data: series5,
              //     type: 'bar',
              //     barWidth: 16,
              //     itemStyle: {
              //       normal: {
              //         color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              //           offset: 0,
              //           color: "#6577fe" // 0% 处的颜色
              //         }, {
              //           offset: 1,
              //           color: "#4896ff" // 100% 处的颜色
              //         }], false)
              //       }
              //     }
              //   }]
              // })// 绘制图表
            } else {
              that.shujuempty = true
            }
          }
        } else {
          that.shujuempty = true
        }

      } else {
        that.shujuempty = true
      }
    })
    // let myChartLine = echarts.init(document.getElementById('line'));

    // let abc = echarts.init(document.getElementById('card'));


    // let cmd = echarts.init(document.getElementById('lastoption'));


    // myChartCake.setOption(optionCake);
    // abc.setOption(optionCard);
    // this.getNumber();
    this.searchClick()
    this.address = 0;
    let datap = {
      userId: sessionStorage.getItem('userId'),
      Page: this.paging.page,
      PageSize: this.paging.pageSize,
    };
    datap.dealer = sessionStorage.getItem('dealer')
    console.log(data)
    that.tableDatap = [];
    axios({
      method: 'post',
      url: this.$store.state.http + '/viccid/lists',
      data: Qs.stringify(datap)
    }).then(function (message) {
      console.log(message.data)
      if (message.data.resCode == 0) {
        that.twotime = message.data.count;
        console.log(that.tableDatap)
      } else {
        that.tableDatap = [];
      }
    })

    // let daty = []
    // axios({
    //   method: "post",
    //   url: that.$store.state.http + '/devices/accurate'
    //   // data:Qs.stringify()
    // }).then(function (message) {
    //   console.log(message);
    //   let x = 0;
    //   let y = 0;
    //   for (var o = 0; o < message.data.data.devices.length; o++) {
    //     if (message.data.data.devices[o].online) {
    //       that.x++

    //     } else {
    //       that.y++

    //     }
    //     that.xs = '在线'
    //     that.ys = '离线'
    //   }
    //   var itexian = [
    //     {
    //       name: that.xs,
    //       value: that.x
    //     },
    //     {
    //       name: that.ys,
    //       value: that.y
    //     }
    //   ]
    //   console.log(that.xs, that.ys)
    //   daty.push(that.xs, that.ys)
    //   let myChart5 = echarts.init(document.getElementById('cake'));
    //   myChart5.setOption({
    //     title: {
    //       text: '消防栓设备网络状态',
    //       subtext: ""/*'纯属虚构'*/,
    //       x: 'center',
    //       padding: [15, 0, 12, 0],
    //       textStyle: {
    //         fontSize: 45,
    //         fontStyle: 'bold',
    //         fontFamily: 'PingFang-SC-regula',
    //         color: '#303030'
    //       }
    //     },
    //     tooltip: {
    //       trigger: 'item',
    //       formatter: "{a} <br/>{b} : {c} ({d}%)"
    //     },
    //     legend: {
    //       // orient: 'vertical',
    //       orient: 'vertical',/*水平*/
    //       left: 'left',/*居中*/
    //       data: daty
    //     },
    //     series: [
    //       {
    //         name: '访问来源',
    //         type: 'pie',
    //         radius: '55%',
    //         center: ['50%', '60%'],
    //         data: itexian,
    //         itemStyle: {
    //           emphasis: {
    //             shadowBlur: 10,
    //             shadowOffsetX: 0,
    //             shadowColor: 'rgba(0, 0, 0, 0.5)'
    //           }
    //         }
    //       }
    //     ],
    //     /*color:['#95c53b','#4da6b1','#f28f27']*/
    //   })
    // })
    let datat = {
      page: this.paging.page,
      pageSize: 100000000,
    };
    datat.userId = sessionStorage.getItem('userId');
    datat.dealer = sessionStorage.getItem('dealer');
    if (data.dealer == 0) {
      data.dealer = sessionStorage.getItem('orderDealers')
    }

    console.log(datat)
    axios({
      method: 'post',
      url: this.$store.state.http + '/user/list',
      data: Qs.stringify(datat)
    }).then(function (message) {
      console.log(message)
      let firemaster = 0;
      let watercom = 0;
      let landscaping = 0;
      let sanitation = 0;
      let other = 0;
      let datak = []
      let dataks = []
      if (message.data.resCode == 0) {
        for (var u = 0; u < message.data.result.length; u++) {
          if (message.data.result[u].roleName == "消防队") {
            that.firemaster++;
            that.firemasters = "消防队"
          } else
            if (message.data.result[u].roleName == "水司") {
              that.watercom++
              that.watercoms = "水司"
            } else
              if (message.data.result[u].roleName == "园林") {
                that.landscaping++
                that.landscapings = "园林"
              }
          if (message.data.result[u].roleName == "环卫") {
            that.sanitation++
            that.sanitations = "环卫"
          } else
            if (message.data.result[u].roleName == "其它") {
              that.other++
              that.others = "其它"
            }
        }
        console.log(that.firemaster)
        var itemnums = [
          {
            name: that.firemasters,
            value: that.firemaster
          }, {
            name: that.watercoms,
            value: that.watercom
          }, {
            name: that.landscapings,
            value: that.landscaping
          }, {
            name: that.sanitations,
            value: that.sanitation
          }, , {
            name: that.others,
            value: that.other
          }
        ]
        datak.push(that.firemaster, that.watercom, that.landscaping, that.sanitation, that.other)

        dataks.push(that.firemasters, that.watercoms, that.landscapings, that.sanitations, that.others)
        let myChart4 = echarts.init(document.getElementById('card'))
        myChart4.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data: dataks
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '18',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: itemnums
            }
          ]
        })
      } else {

      }
    })


    that.nice()
  },
  methods: {
    searchClick () {
      let dataF = {
        pageNum: this.paging.page,
        pageSize: 100
      };
      dataF.userId = sessionStorage.getItem('userId'),
        dataF.dealer = sessionStorage.getItem("dealer")
      // if (dataF.dealer == 0) {
      //   dataF.dealer = sessionStorage.getItem('orderDealers')
      // }
      let that = this;
      console.log(dataF);
      that.tableData = [];
      console.log(123)
      axios({
        method: 'post',
        url: this.$store.state.http + '/devices/conditionFind',
        data: Qs.stringify(dataF)
      }).then(function (message) {
        console.log(message)
        if (message.data.resCode == 0) {
          that.tableData = message.data.result;
          that.paging.total = message.data.result2;
          if (that.tableData.length) {
            that.tableData.forEach(a => {
              if (a.online == "true") {
                that.onelinetrue++
              } else {
                that.onlinefalse++
              }
              let myChart5 = echarts.init(document.getElementById('cake'));
              myChart5.setOption({
                title: {
                  text: '消防栓设备网络状态',
                  subtext: ""/*'纯属虚构'*/,
                  x: 'center',
                  padding: [15, 0, 12, 0],
                  textStyle: {
                    fontSize: 45,
                    fontStyle: 'bold',
                    fontFamily: 'PingFang-SC-regula',
                    color: '#303030'
                  }
                },
                tooltip: {
                  trigger: 'item',
                  formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                  // orient: 'vertical',
                  orient: 'vertical',/*水平*/
                  left: 'left',/*居中*/
                  data: [that.onelinetrue, that.onlinefalse]
                },
                series: [
                  {
                    name: '网络状态',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                      {
                        name: '在线',
                        value: that.onelinetrue
                      },
                      {
                        name: '离线',
                        value: that.onlinefalse
                      }
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
                /*color:['#95c53b','#4da6b1','#f28f27']*/
              })
            })
          } else {
            that.shujuemptyone = true
          }

          // that.sa()

        } else {
          that.shujuemptyone = true
          that.tableData = [];
          that.paging.total = 0;
        }
      })
    },
    handleSizeChange (val) {
      console.log(val)

      console.log(this.paging.pageSize)
      this.searchClick();
    },
    handleCurrentChange (val) {
      this.paging.page = val;
      console.log(val)
      this.searchClick();
    },
    nice () {
      let data = {
        Page: this.paging.page+1,
        pageSize: this.paging.pageSize,
      };
      data.userId = sessionStorage.getItem('userId')
      data.dealer = sessionStorage.getItem('dealer')
      console.log(data)
      let that = this;
      that.tableData = [];
      axios({
        method: 'post',
        url: this.$store.state.http + '/fault/list',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message.data)
        if (message.data.resCode == 0) {
          that.threetime = message.data.count;
        } else {
          that.tableData = [];
        }
      })
    },
    sa (row) {
      console.log(row)
      let that = this;
      let datalos = {
        devId: that.tableData[0].deviceId,
        start: that.common.yestoday(),
        end: that.common.yestodays(),
        datastreamIds: '2006',
        limit: 50
      }
      console.log(datalos)
      axios({
        method: "post",
        url: that.$store.state.http + '/Datapoints/getHistoryData',
        data: Qs.stringify(datalos)
      }).then(function (message) {
        let waters = message.data.errMsg
        console.log(waters);
        for (let i = 0; i < waters.data.datastreams.length; i++) {
          if (waters.data.datastreams[i].id == "2006") {
            let water = waters.data.datastreams[i].datapoints;
            console.log(waters)
            for (let j = 0; j < water.length; j++) {
              that.xAxis37.push(water[j].at.slice(0, 11));
              that.series16.push(water[j].value / 100);
            }
            console.log(that.xAxis18)
            console.log(that.series19)
            // that.drawLine()
          } else {

          }
        }
        let datalosa = {
          devId: that.tableData[0].deviceId,
          start: that.common.yestodaya(),
          end: that.common.yestodayb(),
          datastreamIds: '2006',
          limit: 50
        }
        console.log(datalosa)
        axios({
          method: "post",
          url: that.$store.state.http + '/Datapoints/getHistoryData',
          data: Qs.stringify(datalosa)
        }).then(function (message) {
          let waters = message.data.errMsg
          console.log(waters);
          for (let i = 0; i < waters.data.datastreams.length; i++) {
            if (waters.data.datastreams[i].id == "2006") {
              let water = waters.data.datastreams[i].datapoints;
              console.log(waters)
              for (let j = 0; j < water.length; j++) {
                that.xAxis37.push(water[j].at.slice(0, 11));
                that.series16.push(water[j].value / 100);
              }
            } else {

            }
          }
          let datalosab = {
            devId: that.tableData[0].deviceId,
            start: that.common.yestodayd(),
            end: that.common.yestodayc(),
            datastreamIds: '2006',
            limit: 50
          }
          console.log(datalosab)
          axios({
            method: "post",
            url: that.$store.state.http + '/Datapoints/getHistoryData',
            data: Qs.stringify(datalosab)
          }).then(function (message) {
            let waters = message.data.errMsg
            console.log(waters);
            for (let i = 0; i < waters.data.datastreams.length; i++) {
              if (waters.data.datastreams[i].id == "2006") {
                let water = waters.data.datastreams[i].datapoints;
                console.log(waters)
                for (let j = 0; j < water.length; j++) {
                  that.xAxis37.push(water[j].at.slice(0, 11));
                  that.series16.push(water[j].value / 100);
                }

              } else {

              }
            }
            let datalosabs = {
              devId: that.tableData[0].deviceId,
              start: that.common.yestodayp(),
              end: that.common.yestodayf(),
              datastreamIds: '2006',
              limit: 50
            }
            console.log(datalosabs)
            axios({
              method: "post",
              url: that.$store.state.http + '/Datapoints/getHistoryData',
              data: Qs.stringify(datalosabs)
            }).then(function (message) {
              let waters = message.data.errMsg
              console.log(waters);
              for (let i = 0; i < waters.data.datastreams.length; i++) {
                if (waters.data.datastreams[i].id == "2006") {
                  let water = waters.data.datastreams[i].datapoints;
                  console.log(waters)
                  for (let j = 0; j < water.length; j++) {
                    that.xAxis37.push(water[j].at.slice(0, 11));
                    that.series16.push(water[j].value / 100);
                  }

                } else {

                }
              }
              let datalosabsa = {
                devId: that.tableData[0].deviceId,
                start: that.common.yestodayl(),
                end: that.common.yestodayk(),
                datastreamIds: '2006',
                limit: 50
              }
              console.log(datalosabsa)
              axios({
                method: "post",
                url: that.$store.state.http + '/Datapoints/getHistoryData',
                data: Qs.stringify(datalosabsa)
              }).then(function (message) {
                let waters = message.data.errMsg
                console.log(waters);
                for (let i = 0; i < waters.data.datastreams.length; i++) {
                  if (waters.data.datastreams[i].id == "2006") {
                    let water = waters.data.datastreams[i].datapoints;
                    console.log(waters)
                    for (let j = 0; j < water.length; j++) {
                      that.xAxis37.push(water[j].at.slice(0, 11));
                      that.series16.push(water[j].value / 100);
                    }

                  } else {

                  }
                }
                let datalosabsaad = {
                  devId: that.tableData[0].deviceId,
                  start: that.common.yestodaym(),
                  end: that.common.yestodayn(),
                  datastreamIds: '2006',
                  limit: 50
                }
                console.log(datalosabsaad)
                axios({
                  method: "post",
                  url: that.$store.state.http + '/Datapoints/getHistoryData',
                  data: Qs.stringify(datalosabsaad)
                }).then(function (message) {
                  let waters = message.data.errMsg
                  console.log(waters);
                  for (let i = 0; i < waters.data.datastreams.length; i++) {
                    if (waters.data.datastreams[i].id == "2006") {
                      let water = waters.data.datastreams[i].datapoints;
                      console.log(waters)
                      for (let j = 0; j < water.length; j++) {
                        that.xAxis37.push(water[j].at.slice(0, 11));
                        that.series16.push(water[j].value / 100);
                      }

                    } else {

                    }
                  }
                  let datalosabsaadfsdf = {
                    devId: that.tableData[0].deviceId,
                    start: that.common.yestodayo(),
                    end: that.common.yestodayi(),
                    datastreamIds: '2006',
                    limit: 50
                  }
                  console.log(datalosabsaadfsdf)
                  axios({
                    method: "post",
                    url: that.$store.state.http + '/Datapoints/getHistoryData',
                    data: Qs.stringify(datalosabsaadfsdf)
                  }).then(function (message) {
                    let waters = message.data.errMsg
                    console.log(waters);
                    for (let i = 0; i < waters.data.datastreams.length; i++) {
                      if (waters.data.datastreams[i].id == "2006") {
                        let water = waters.data.datastreams[i].datapoints;
                        console.log(waters)
                        for (let j = 0; j < water.length; j++) {
                          that.xAxis37.push(water[j].at.slice(0, 11));
                          that.series16.push(water[j].value / 100);
                        }


                      } else {

                      }
                    }
                    let datalosabsaadfsdfssss = {
                      devId: that.tableData[0].deviceId,
                      start: '2019-01-01T00:00:00',
                      end: '2019-01-01T04:00:00',
                      datastreamIds: '2006',
                      limit: 100
                    }
                    console.log(datalosabsaadfsdfssss)
                    axios({
                      method: "post",
                      url: that.$store.state.http + '/Datapoints/getHistoryData',
                      data: Qs.stringify(datalosabsaadfsdfssss)
                    }).then(function (message) {
                      let waters = message.data.errMsg
                      console.log(waters);
                      for (let i = 0; i < waters.data.datastreams.length; i++) {
                        if (waters.data.datastreams[i].id == "2006") {
                          let water = waters.data.datastreams[i].datapoints;
                          console.log(waters)
                          for (let j = 0; j < water.length; j++) {
                            that.xAxis646.push(water[j].at.slice(0, 11));
                            that.ddddds.push(water[j].value / 100);
                          }
                        } else {

                        }
                      }
                      let datalosabsaadfsdfssssaaa = {
                        devId: that.tableData[0].deviceId,
                        start: '2019-02-01T00:00:00',
                        end: '2019-02-01T04:00:00',
                        datastreamIds: '2006',
                        limit: 100
                      }
                      console.log(datalosabsaadfsdfssssaaa)
                      axios({
                        method: "post",
                        url: that.$store.state.http + '/Datapoints/getHistoryData',
                        data: Qs.stringify(datalosabsaadfsdfssssaaa)
                      }).then(function (message) {
                        let waters = message.data.errMsg
                        console.log(waters);
                        for (let i = 0; i < waters.data.datastreams.length; i++) {
                          if (waters.data.datastreams[i].id == "2006") {
                            let water = waters.data.datastreams[i].datapoints;
                            console.log(waters)
                            for (let j = 0; j < water.length; j++) {
                              that.xAxis646.push(water[j].at.slice(0, 11));
                              that.ddddds.push(water[j].value / 100);
                            }
                          } else {

                          }
                        }
                        let datalosabsaadfsdfssssaaas = {
                          devId: that.tableData[0].deviceId,
                          start: '2019-03-01T00:00:00',
                          end: '2019-03-01T04:00:00',
                          datastreamIds: '2006',
                          limit: 100
                        }
                        console.log(datalosabsaadfsdfssssaaas)
                        axios({
                          method: "post",
                          url: that.$store.state.http + '/Datapoints/getHistoryData',
                          data: Qs.stringify(datalosabsaadfsdfssssaaas)
                        }).then(function (message) {
                          let waters = message.data.errMsg
                          console.log(waters);
                          for (let i = 0; i < waters.data.datastreams.length; i++) {
                            if (waters.data.datastreams[i].id == "2006") {
                              let water = waters.data.datastreams[i].datapoints;
                              console.log(waters)
                              for (let j = 0; j < water.length; j++) {
                                that.xAxis646.push(water[j].at.slice(0, 11));
                                that.ddddds.push(water[j].value / 100);
                              }
                              console.log(that.aaaaaaaa)
                              // that.drawLine(that.aaaaaaaa)
                            } else {

                            }
                          }
                          let datalosabsaadfsdfssssaaasas = {
                            devId: that.tableData[0].deviceId,
                            start: '2019-03-01T00:00:00',
                            end: '2019-03-01T04:00:00',
                            datastreamIds: '2006',
                            limit: 100
                          }
                          console.log(datalosabsaadfsdfssssaaasas)
                          axios({
                            method: "post",
                            url: that.$store.state.http + '/Datapoints/getHistoryData',
                            data: Qs.stringify(datalosabsaadfsdfssssaaasas)
                          }).then(function (message) {
                            let waters = message.data.errMsg
                            console.log(waters);
                            for (let i = 0; i < waters.data.datastreams.length; i++) {
                              if (waters.data.datastreams[i].id == "2006") {
                                let water = waters.data.datastreams[i].datapoints;
                                console.log(waters)
                                for (let j = 0; j < water.length; j++) {
                                  that.xAxis646.push(water[j].at.slice(0, 11));
                                  that.ddddds.push(water[j].value / 100);
                                }
                                that.drawLinessd(that.ddddds)
                              } else {

                              }
                            }

                          })

                        })

                      })

                    })

                  })

                })

              })

            })

          })

        })

      })


      // that.drawLine()








    },
    //     		sa(){
    // 				let that=this;
    // 				let series37=[];
    //  				let xAxis16=[];
    // 				let datas={
    // 					devId:that.tableData[0].deviceId,
    // 					start:that.common.getNowFormatDatenew(),
    // 					end:that.common.getNowFormatDate()
    // 				}
    // 				console.log(datas)
    // 				 axios({
    // 					method:"post",
    // 					url:that.$store.state.http+'/Datapoints/getHistoryData',
    // 					data:Qs.stringify(datas)
    // 				}).then(function(message){
    // 					let waters=message.data.errMsg
    // 					console.log(waters);
    // 					for(let i=0;i<waters.data.datastreams.length;i++){
    // 						if(waters.data.datastreams[i].id=="2006"){
    // 							let water=waters.data.datastreams[i].datapoints;
    // 							console.log(water);
    // 							console.log(water.length);
    // 							for(let j=0;j<water.length;j++){
    // 								console.log(water[j].at.slice(0,10))
    // 									xAxis16.push(water[j].at.slice(0,19));
    // 									series37.push(water[j].value);
    // 									}
    // 								}else{

    // 								}
    // 							}
    // 							let myChart3 = echarts.init(document.getElementById('lastoption'));
    // 				// 绘制图表
    // 							myChart3.setOption({
    // 							dataZoom: [
    // 								{
    // 									show: true,
    // 									realtime: true,
    // 									start: 0,
    // 									end: 100
    // 								},
    // 								{
    // 									type: 'inside',
    // 									realtime: true,
    // 									start: 0,
    // 									end: 100
    // 								}
    // 							],
    // 								tooltip : {
    // 								trigger: 'axis',
    // 								axisPointer: {
    // 									type: 'cross',
    // 								}
    // 							},
    // 							xAxis : [
    // 								{
    // 									type : 'category',
    // 									boundaryGap : false,
    // 									data:xAxis16.map(function (str) {
    // 										return str.replace(' ', '\n')
    // 									})
    // 								}
    // 							],
    // 									yAxis: [
    // 									{
    // 										name: '',
    // 										type: 'value',

    // 									}
    // 								],
    // 								legend: {
    // 										data: ['最近7天','当年'],
    // 										align: 'left'
    // 									},
    // 								grid: {
    // 										// left: '3%',
    // 										// right: '4%',
    // 										bottom: '10%',
    // 										containLabel: true
    // 									},
    // 								series: [
    // 									{
    // 										name:'最近7天',
    // 										type:'line',
    // 										markArea: {
    // 										},
    // 										data:series37
    // 									}

    // 								]
    // 							});



    // 						})
    // 			},
    drawLinessd (ddd) {
      let myChart3 = echarts.init(document.getElementById('lastoption'));
      // 绘制图表
      myChart3.setOption({
        dataZoom: [
          {
            show: true,
            realtime: true,
            start: 0,
            end: 100
          },
          {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 100
          }
        ],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
          }
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: this.xAxis37.map(function (str) {
              return str.replace(' ', '\n')
            })
          },
          {
            type: 'category',
            boundaryGap: false,
            data: this.xAxis646.map(function (str) {
              return str.replace(' ', '\n')
            })
          }
        ],
        yAxis: [
          {
            name: '',
            type: 'value',

          }
        ],
        legend: {
          data: ['最近7天', '当年'],
          align: 'left'
        },
        grid: {
          // left: '3%',
          // right: '4%',
          bottom: '10%',
          containLabel: true
        },
        series: [
          {
            name: '最近7天',
            type: 'line',
            markArea: {
            },
            data: this.series16
          },
          {
            name: '当年',
            type: 'line',
            markArea: {
            },
            data: ddd
          },

        ]
      });
    },
    drawLiness (ddd) {
      let myChart3 = echarts.init(document.getElementById('lastoption'));
      // 绘制图表
      myChart3.setOption({
        dataZoom: [
          {
            show: true,
            realtime: true,
            start: 0,
            end: 100
          },
          {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 100
          }
        ],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
          }
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: this.xAxis6.map(function (str) {
              return str.replace(' ', '\n')
            })
          },
          {
            type: 'category',
            boundaryGap: false,
            data: this.xAxis64.map(function (str) {
              return str.replace(' ', '\n')
            })
          }
        ],
        yAxis: [
          {
            name: '',
            type: 'value',

          }
        ],
        legend: {
          data: ['最近7天', '当年'],
          align: 'left'
        },
        grid: {
          // left: '3%',
          // right: '4%',
          bottom: '10%',
          containLabel: true
        },
        series: [
          {
            name: '最近7天',
            type: 'line',
            markArea: {
            },
            data: this.series5
          },
          {
            name: '当年',
            type: 'line',
            markArea: {
            },
            data: ddd
          },

        ]
      });
    },
    elding3 (row) {
      console.log(row)
      let that = this;
      let datalos = {
        devId: row.deviceId,
        start: that.common.yestoday(),
        end: that.common.yestodays(),
        datastreamIds: '2006',
        limit: 50
      }
      console.log(datalos)
      axios({
        method: "post",
        url: that.$store.state.http + '/Datapoints/getHistoryData',
        data: Qs.stringify(datalos)
      }).then(function (message) {
        let waters = message.data.errMsg
        console.log(waters);
        for (let i = 0; i < waters.data.datastreams.length; i++) {
          if (waters.data.datastreams[i].id == "2006") {
            let water = waters.data.datastreams[i].datapoints;
            console.log(waters)
            for (let j = 0; j < water.length; j++) {
              that.xAxis6.push(water[j].at.slice(0, 11));
              that.series5.push(water[j].value / 100);
            }
            console.log(that.xAxis18)
            console.log(that.series19)
            // that.drawLine()
          } else {

          }
        }
        let datalosa = {
          devId: row.deviceId,
          start: that.common.yestodaya(),
          end: that.common.yestodayb(),
          datastreamIds: '2006',
          limit: 50
        }
        console.log(datalosa)
        axios({
          method: "post",
          url: that.$store.state.http + '/Datapoints/getHistoryData',
          data: Qs.stringify(datalosa)
        }).then(function (message) {
          let waters = message.data.errMsg
          console.log(waters);
          for (let i = 0; i < waters.data.datastreams.length; i++) {
            if (waters.data.datastreams[i].id == "2006") {
              let water = waters.data.datastreams[i].datapoints;
              console.log(waters)
              for (let j = 0; j < water.length; j++) {
                that.xAxis6.push(water[j].at.slice(0, 11));
                that.series5.push(water[j].value / 100);
              }
            } else {

            }
          }
          let datalosab = {
            devId: row.deviceId,
            start: that.common.yestodayd(),
            end: that.common.yestodayc(),
            datastreamIds: '2006',
            limit: 50
          }
          console.log(datalosab)
          axios({
            method: "post",
            url: that.$store.state.http + '/Datapoints/getHistoryData',
            data: Qs.stringify(datalosab)
          }).then(function (message) {
            let waters = message.data.errMsg
            console.log(waters);
            for (let i = 0; i < waters.data.datastreams.length; i++) {
              if (waters.data.datastreams[i].id == "2006") {
                let water = waters.data.datastreams[i].datapoints;
                console.log(waters)
                for (let j = 0; j < water.length; j++) {
                  that.xAxis6.push(water[j].at.slice(0, 11));
                  that.series5.push(water[j].value / 100);
                }

              } else {

              }
            }
            let datalosabs = {
              devId: row.deviceId,
              start: that.common.yestodayp(),
              end: that.common.yestodayf(),
              datastreamIds: '2006',
              limit: 50
            }
            console.log(datalosabs)
            axios({
              method: "post",
              url: that.$store.state.http + '/Datapoints/getHistoryData',
              data: Qs.stringify(datalosabs)
            }).then(function (message) {
              let waters = message.data.errMsg
              console.log(waters);
              for (let i = 0; i < waters.data.datastreams.length; i++) {
                if (waters.data.datastreams[i].id == "2006") {
                  let water = waters.data.datastreams[i].datapoints;
                  console.log(waters)
                  for (let j = 0; j < water.length; j++) {
                    that.xAxis6.push(water[j].at.slice(0, 11));
                    that.series5.push(water[j].value / 100);
                  }

                } else {

                }
              }
              let datalosabsa = {
                devId: row.deviceId,
                start: that.common.yestodayl(),
                end: that.common.yestodayk(),
                datastreamIds: '2006',
                limit: 50
              }
              console.log(datalosabsa)
              axios({
                method: "post",
                url: that.$store.state.http + '/Datapoints/getHistoryData',
                data: Qs.stringify(datalosabsa)
              }).then(function (message) {
                let waters = message.data.errMsg
                console.log(waters);
                for (let i = 0; i < waters.data.datastreams.length; i++) {
                  if (waters.data.datastreams[i].id == "2006") {
                    let water = waters.data.datastreams[i].datapoints;
                    console.log(waters)
                    for (let j = 0; j < water.length; j++) {
                      that.xAxis6.push(water[j].at.slice(0, 11));
                      that.series5.push(water[j].value / 100);
                    }

                  } else {

                  }
                }
                let datalosabsaad = {
                  devId: row.deviceId,
                  start: that.common.yestodaym(),
                  end: that.common.yestodayn(),
                  datastreamIds: '2006',
                  limit: 50
                }
                console.log(datalosabsaad)
                axios({
                  method: "post",
                  url: that.$store.state.http + '/Datapoints/getHistoryData',
                  data: Qs.stringify(datalosabsaad)
                }).then(function (message) {
                  let waters = message.data.errMsg
                  console.log(waters);
                  for (let i = 0; i < waters.data.datastreams.length; i++) {
                    if (waters.data.datastreams[i].id == "2006") {
                      let water = waters.data.datastreams[i].datapoints;
                      console.log(waters)
                      for (let j = 0; j < water.length; j++) {
                        that.xAxis6.push(water[j].at.slice(0, 11));
                        that.series5.push(water[j].value / 100);
                      }

                    } else {

                    }
                  }
                  let datalosabsaadfsdf = {
                    devId: row.deviceId,
                    start: that.common.yestodayo(),
                    end: that.common.yestodayi(),
                    datastreamIds: '2006',
                    limit: 50
                  }
                  console.log(datalosabsaadfsdf)
                  axios({
                    method: "post",
                    url: that.$store.state.http + '/Datapoints/getHistoryData',
                    data: Qs.stringify(datalosabsaadfsdf)
                  }).then(function (message) {
                    let waters = message.data.errMsg
                    console.log(waters);
                    for (let i = 0; i < waters.data.datastreams.length; i++) {
                      if (waters.data.datastreams[i].id == "2006") {
                        let water = waters.data.datastreams[i].datapoints;
                        console.log(waters)
                        for (let j = 0; j < water.length; j++) {
                          that.xAxis6.push(water[j].at.slice(0, 11));
                          that.series5.push(water[j].value / 100);
                        }


                      } else {

                      }
                    }
                    let datalosabsaadfsdfssss = {
                      devId: row.deviceId,
                      start: '2019-01-01T00:00:00',
                      end: '2019-01-01T04:00:00',
                      datastreamIds: '2006',
                      limit: 100
                    }
                    console.log(datalosabsaadfsdfssss)
                    axios({
                      method: "post",
                      url: that.$store.state.http + '/Datapoints/getHistoryData',
                      data: Qs.stringify(datalosabsaadfsdfssss)
                    }).then(function (message) {
                      let waters = message.data.errMsg
                      console.log(waters);
                      for (let i = 0; i < waters.data.datastreams.length; i++) {
                        if (waters.data.datastreams[i].id == "2006") {
                          let water = waters.data.datastreams[i].datapoints;
                          console.log(waters)
                          for (let j = 0; j < water.length; j++) {
                            that.xAxis64.push(water[j].at.slice(0, 11));
                            that.ddddd.push(water[j].value / 100);
                          }
                        } else {

                        }
                      }
                      let datalosabsaadfsdfssssaaa = {
                        devId: row.deviceId,
                        start: '2019-02-01T00:00:00',
                        end: '2019-02-01T04:00:00',
                        datastreamIds: '2006',
                        limit: 100
                      }
                      console.log(datalosabsaadfsdfssssaaa)
                      axios({
                        method: "post",
                        url: that.$store.state.http + '/Datapoints/getHistoryData',
                        data: Qs.stringify(datalosabsaadfsdfssssaaa)
                      }).then(function (message) {
                        let waters = message.data.errMsg
                        console.log(waters);
                        for (let i = 0; i < waters.data.datastreams.length; i++) {
                          if (waters.data.datastreams[i].id == "2006") {
                            let water = waters.data.datastreams[i].datapoints;
                            console.log(waters)
                            for (let j = 0; j < water.length; j++) {
                              that.xAxis64.push(water[j].at.slice(0, 11));
                              that.ddddd.push(water[j].value / 100);
                            }
                          } else {

                          }
                        }
                        let datalosabsaadfsdfssssaaas = {
                          devId: row.deviceId,
                          start: '2019-03-01T00:00:00',
                          end: '2019-03-01T04:00:00',
                          datastreamIds: '2006',
                          limit: 100
                        }
                        console.log(datalosabsaadfsdfssssaaas)
                        axios({
                          method: "post",
                          url: that.$store.state.http + '/Datapoints/getHistoryData',
                          data: Qs.stringify(datalosabsaadfsdfssssaaas)
                        }).then(function (message) {
                          let waters = message.data.errMsg
                          console.log(waters);
                          for (let i = 0; i < waters.data.datastreams.length; i++) {
                            if (waters.data.datastreams[i].id == "2006") {
                              let water = waters.data.datastreams[i].datapoints;
                              console.log(waters)
                              for (let j = 0; j < water.length; j++) {
                                that.xAxis64.push(water[j].at.slice(0, 11));
                                that.ddddd.push(water[j].value / 100);
                              }
                              console.log(that.aaaaaaaa)
                              // that.drawLine(that.aaaaaaaa)
                            } else {

                            }
                          }
                          let datalosabsaadfsdfssssaaasas = {
                            devId: row.deviceId,
                            start: '2019-03-01T00:00:00',
                            end: '2019-03-01T04:00:00',
                            datastreamIds: '2006',
                            limit: 100
                          }
                          console.log(datalosabsaadfsdfssssaaasas)
                          axios({
                            method: "post",
                            url: that.$store.state.http + '/Datapoints/getHistoryData',
                            data: Qs.stringify(datalosabsaadfsdfssssaaasas)
                          }).then(function (message) {
                            let waters = message.data.errMsg
                            console.log(waters);
                            for (let i = 0; i < waters.data.datastreams.length; i++) {
                              if (waters.data.datastreams[i].id == "2006") {
                                let water = waters.data.datastreams[i].datapoints;
                                console.log(waters)
                                for (let j = 0; j < water.length; j++) {
                                  that.xAxis64.push(water[j].at.slice(0, 11));
                                  that.ddddd.push(water[j].value / 100);
                                }
                                console.log(that.ddddd)
                                that.drawLiness(that.ddddd)
                              } else {

                              }
                            }

                          })

                        })

                      })

                    })

                  })

                })

              })

            })

          })

        })

      })


      // that.drawLine()








    },
  }
}
</script>

<style>
#SalesStatistics {
  padding: 20px;
}
.fa {
  width: 100%;
}
#cake,
#card,
#lastoption,
#falut {
  width: 100%;
  height: 500px;
}
</style>