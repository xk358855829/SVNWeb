<template>
  <div id="Edistribution">
    <div id="allmap" v-loading="listLoading">

    </div>
    <div class="shezhi">
      <el-input class='oYinp'
                v-model="inputDev"
                clearable
                placeholder="请输入查询的设备SN"></el-input>
      <el-button class="oyButton ccc"
                 type="success"
                 icon="el-icon-search"
                 @click='mappInput'>查询</el-button>
    </div>
    <el-dialog title="数据统计"
               :visible.sync="universal.statistic">
      <template>
        <el-tabs type="card"
                 v-model="activeName">
          <el-tab-pane label="水压统计"
                       name="fourth">
            <div>
              <div class="block">
                <span class="demonstration">开始时间:</span>
                <el-date-picker v-model="value1"
                                type="datetime"
                                value-format="yyyy-MM-ddTHH:mm:ss"
                                placeholder="选择日期时间">
                </el-date-picker>
                <span class="demonstration">结束时间:</span>
                <el-date-picker v-model="value2"
                                type="datetime"
                                value-format="yyyy-MM-ddTHH:mm:ss"
                                placeholder="选择日期时间">
                </el-date-picker>
              </div>
              <el-button class="oyButton butt"
                         type="success"
                         icon="el-icon-search"
                         @click='elding'>确定</el-button>
              <div id="main3"
                   style="width: 700px;height:600px;"></div>
            </div>

          </el-tab-pane>

          <el-tab-pane label="水流量统计"
                       name="fifth">
            <!-- <el-select class='roomS' @change="selectClick2" size='small' placeholder="请选择">
						    <el-option label="当年" value="year"></el-option>
						    <el-option label="当月" value="month"></el-option>
						</el-select> -->
            <div class="block">
              <span class="demonstration">开始时间:</span>
              <el-date-picker v-model="value3"
                              type="datetime"
                              value-format="yyyy-MM-dd HH:mm:ss"
                              placeholder="选择日期时间">
              </el-date-picker>
              <span class="demonstration">结束时间:</span>
              <el-date-picker v-model="value4"
                              type="datetime"
                              value-format="yyyy-MM-dd HH:mm:ss"
                              placeholder="选择日期时间">
              </el-date-picker>
            </div>
            <el-button class="oyButton butt"
                       type="success"
                       icon="el-icon-search"
                       @click='elding1'>确定</el-button>
            <div id="main4"
                 style="width: 700px;height:600px;"></div>

          </el-tab-pane>

          <el-tab-pane label="水温统计"
                       name="sixth">
            <!-- <el-select class='roomS' @change="selectClick2" size='small' placeholder="请选择">
						    <el-option label="当年" value="year"></el-option>
						    <el-option label="当月" value="month"></el-option>
						</el-select> -->
            <div class="block">
              <span class="demonstration">开始时间:</span>
              <el-date-picker v-model="value8"
                              type="datetime"
                              value-format="yyyy-MM-ddTHH:mm:ss"
                              placeholder="选择日期时间">
              </el-date-picker>
              <span class="demonstration">结束时间:</span>
              <el-date-picker v-model="value9"
                              type="datetime"
                              value-format="yyyy-MM-ddTHH:mm:ss"
                              placeholder="选择日期时间">
              </el-date-picker>
            </div>
            <el-button class="oyButton butt"
                       type="success"
                       icon="el-icon-search"
                       @click='elding2'>确定</el-button>
            <div id="main5"
                 style="width: 700px;height:600px;"></div>

          </el-tab-pane>

          <el-tab-pane label="电压统计"
                       name="seventh">
            <!-- <el-select class='roomS' @change="selectClick2" size='small' placeholder="请选择">
						    <el-option label="当年" value="year"></el-option>
						    <el-option label="当月" value="month"></el-option>
						</el-select> -->
            <div class="block">
              <span class="demonstration">开始时间:</span>
              <el-date-picker v-model="value15"
                              type="datetime"
                              value-format="yyyy-MM-ddTHH:mm:ss"
                              placeholder="选择日期时间">
              </el-date-picker>
              <span class="demonstration">结束时间:</span>
              <el-date-picker v-model="value16"
                              type="datetime"
                              value-format="yyyy-MM-ddTHH:mm:ss"
                              placeholder="选择日期时间">
              </el-date-picker>
            </div>
            <el-button class="oyButton butt"
                       type="success"
                       icon="el-icon-search"
                       @click='elding3'>确定</el-button>
            <div id="main8"
                 style="width: 700px;height:640px;"></div>

          </el-tab-pane>

        </el-tabs>
      </template>
    </el-dialog>
    <el-dialog title="设备控制"
               :visible.sync="universal.onfile"
               width="20%">
      <div class="flexdisply">
        <div class="divswitch">
          <span>设备状态：</span>
          <span>设备{{value5}}</span>
          <div class="innerone"
               @click="changestatu(onfile)">
            <el-tooltip :content="value5"
                        placement="top">
              <el-switch v-model="value5"
                         active-color="#13ce66"
                         inactive-color="#ff4949"
                         active-value="已激活"
                         inactive-value="未激活">
              </el-switch>
            </el-tooltip>
          </div>
        </div>
        <div class="divswitch"
             v-if="hidestatus">
          <span>栓锁状态：</span>
          <span>设备{{value6}}</span>
          <div class="innertwo"
               @click="changelock(onfile)">
            <el-tooltip :content="value6"
                        placement="top">
              <el-switch v-model="value6"
                         active-color="#13ce66"
                         inactive-color="#ff4949"
                         active-value="已开阀"
                         inactive-value="未开阀">
              </el-switch>
            </el-tooltip>
          </div>
        </div>
        <div class="divswitch"
             v-if="hidestatus">
          <span>布防状态：</span>
          <span>设备{{value7}}</span>
          <div class="innerthree"
               @click="changeting(onfile)">
            <el-tooltip :content="value7"
                        placement="top">
              <el-switch v-model="value7"
                         active-color="#13ce66"
                         inactive-color="#ff4949"
                         active-value="已布防"
                         inactive-value="未布防">
              </el-switch>
            </el-tooltip>
          </div>
        </div>

      </div>
      <div>
        <el-button class="lokway"
                   type="danger"
                   @click="recover(onfile)">恢复出厂设置</el-button>
        <el-button class="lokway"
                   type="primary"
                   @click="read(onfile)">读取定位信息</el-button>
        <el-button type="success"
                   @click="renewal(onfile)">更新位置</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<style>
.letg {
  display: flex;
  justify-content: space-between;
}
.letg div {
  font-size: 15px;
  line-height: 36px;
  overflow: hidden;
  width: 39%;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.grid-content {
  width: 38%;
  float: left;
  text-align: right;
}
</style>

<script>
import Qs from 'qs'
import axios from 'axios'
import $ from 'jquery'
import { searchClicks, serachlong } from '../api/api.js'
import iconCar from '../../../static/image/xxx.png'; //以import的方式导入图片文件
import newiconCar from '../../../static/image/ccc.png'; //以import的方式导入图片文件
import { wgs84togcj02 } from '../../../common/common.js'
export default {
  name: 'equipmentList',
  data () {
    return {
      // opts:{
      // 	width: 250, // 信息窗口宽度
      // 	height: 80, // 信息窗口高度
      // 	title: "信息窗口", // 信息窗口标题
      // 	enableMessage: true //设置允许信息窗发送短息
      // },
      end: '',
      listLoading:false,
      universal: {
        onfile: false,
        statistic: false,
      },
      inputDev: '',
      mapchangelist: [],
      mapchangelistlp: [],
      mapchangelists: [],
      maxLists: [],
      con: {
        devVOL: '',
        waterMeter: '',
        waterTemperature: '',
        devDefence: '',
        devUnlockWay: '',
        devLockState: '',
        waterMeterTotal: '',
        waterMeterTemp: '',
        devHardVerison: '',
        waterPressure: '',
        devSoftVerison: '',
        devParaSn: '',
        devWarning: '',
        devIccid: '',
        devLongitude: '',
        devStatus: '',
        devLatitude: '',
        devUnlockTime: '',
        waterMeterTrip: ''

      },
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value8: '',
      value9: '',
      value15: '',
      value16: '',
      lice: '',
      lace: '',
      ying: '',
      newmes: '',
      roomid: '',
      maxListLength:''
    }
  },
  created:function () {
    let data={
      page: 1,
      pageSize: 1000
    }
    axios({
      method: "post",
      url: 'http://39.104.102.213:8796/devices/accurate',
      data: Qs.stringify(data)
    }).then(res => {
      console.log(res)
    })
  },
  mounted: function () {
    document.title = this.$route.meta.title;
    // console.log(this.$route.query.mouse)
    if (this.$route.query.mouse == undefined) {

    } else {
      this.inputDev = this.$route.query.mouse
      this.mappInput()
    }
    document.getElementById('allmap').style.height = document.body.clientHeight - 70 + 'px';
    let that = this
    that.map = new BMap.Map("allmap");
    that.map.setMapStyle({
      styleJson: [{
        "featureType": "land",
        "elementType": "all",
        "stylers": {
          "color": "#ccccccff",
          "hue": "#000000"
        }
      }, {
        "featureType": "boundary",
        "elementType": "geometry.fill",
        "stylers": {
          "color": "#999999ff"
        }
      }]
    });
    let point = new BMap.Point(120.21937542, 30.25924446);
    that.map.centerAndZoom(point, 6);

    that.map.enableScrollWheelZoom();
    that.listLoading=true
    let data = {
      // pageNum: 1,
      // pageSize: 1000,
      userId: sessionStorage.getItem('userId'),
      dealer: sessionStorage.getItem('dealer'),
      status: 0
    }
    axios({
      method: "post",
      url: this.$store.state.http + '/devices/findDevByCd',
      data: Qs.stringify(data)
    }).then(res => {
      // console.log(res)
      if (res.data.resCode == 0) {
        that.maxListLength=res.data.result2;
        var maxList = [];
        for (let i = 0; i < res.data.result.length; i++) {
          let deviceId = res.data.result[i].deviceId;
          let online = res.data.result[i].online;
        //        axios({
        //     method: 'post',
        //     url: 'http://39.104.102.213:8796/Amend/findOne',
        //     data: Qs.stringify({
        //       id: res.data.result[i].deviceId
        //     })
        //   }).then(function (message) {
        //     if (message.status == 200) {
              let lat = '';
              let lng = '';
              let obj = {
                lng: res.data.result[i].amendLongitude ? res.data.result[i].amendLongitude : 0,
                lat: res.data.result[i].amendLatitude ? res.data.result[i].amendLatitude : 0,
                id: deviceId,
                online: online
              };
              maxList.push(obj)
        //     }
        //   })
        }
        console.log(maxList)
        let MAX = maxList.length;
            let markers = [];
            let pt = null;
            for (let i = 0; i < MAX; i++) {
              pt = new BMap.Point(maxList[i].lng, maxList[i].lat);

              let marker = new BMap.Marker(pt);
              const deviceSize = new BMap.Size(16, 26);
              if (maxList[i].online == "true") {
                const deviceIcon = new BMap.Icon(iconCar, deviceSize, { //会以base64的方式传参iconCar
                  imageSize: deviceSize
                });
                marker = new BMap.Marker(pt, {
                  icon: deviceIcon
                })
              } else {
                const deviceIcon = new BMap.Icon(newiconCar, deviceSize, { //会以base64的方式传参iconCar
                  imageSize: deviceSize
                });
                marker = new BMap.Marker(pt, {
                  icon: deviceIcon
                })
              }

              // console.log(maxList[i].id)
              // that.dispose(maxList[i].id)
              that.addClickHandler('设备编号:' + maxList[i].id, marker);
              // that.addClickHandler('id:'+maxList[i].id+'<br/>'+'devVOL:'+that.con.devVOL, marker); 
              markers.push(marker);
              // console.log(markers)
            //最简单的用法，生成一个marker数组，然后调用markerClusterer类即可。
            // let markerClusterer = new BMapLib.MarkerClusterer(that.map, { markers: markers });
            that.listLoading=false
          }
          let markerClusterer = new BMapLib.MarkerClusterer(that.map, { markers: markers });
        // console.log(that.maxListLength)
        // console.log(maxList.length)
        // if(that.maxListLength==maxList.length){
            // console.log(maxList);
        // setTimeout(function(){
        //     let MAX = maxList.length;
        //     let markers = [];
        //     let pt = null;
        //     for (let i = 0; i < MAX; i++) {
        //       pt = new BMap.Point(maxList[i].lng, maxList[i].lat);

        //       let marker = new BMap.Marker(pt);
        //       const deviceSize = new BMap.Size(16, 26);
        //       if (maxList[i].online == "true") {
        //         const deviceIcon = new BMap.Icon(iconCar, deviceSize, { //会以base64的方式传参iconCar
        //           imageSize: deviceSize
        //         });
        //         marker = new BMap.Marker(pt, {
        //           icon: deviceIcon
        //         })
        //       } else {
        //         const deviceIcon = new BMap.Icon(newiconCar, deviceSize, { //会以base64的方式传参iconCar
        //           imageSize: deviceSize
        //         });
        //         marker = new BMap.Marker(pt, {
        //           icon: deviceIcon
        //         })
        //       }

        //       // console.log(maxList[i].id)
        //       // that.dispose(maxList[i].id)
        //       that.addClickHandler('设备编号:' + maxList[i].id, marker);
        //       // that.addClickHandler('id:'+maxList[i].id+'<br/>'+'devVOL:'+that.con.devVOL, marker); 
        //       markers.push(marker);
        //       // console.log(markers)
        //     //最简单的用法，生成一个marker数组，然后调用markerClusterer类即可。
        //     // let markerClusterer = new BMapLib.MarkerClusterer(that.map, { markers: markers });
        //     that.listLoading=false
        //   }
        //   let markerClusterer = new BMapLib.MarkerClusterer(that.map, { markers: markers });
        // },1000);
          // }
      } else {

      }
    })
  },
  methods: {
    statistics () {
      // console.log(123)
      this.universal.statistic = true;
      let that = this
      if (that.value1 == '') {
        that.value1 = that.common.getNowFormatDatenew()
      } else {
        that.value1 = (JSON.stringify(that.value1)).slice(1, 20).replace(' ', 'T')
      }
      if (that.value2 == '') {
        that.value2 = that.common.getNowFormatDate()
      } else {
        that.value2 = (JSON.stringify(that.value2)).slice(1, 20).replace(' ', 'T')
      }
      that.elding()
      if (that.value3 == '') {
        that.value3 = that.common.getNowFormatDatenew()
      } else {
        that.value3 = (JSON.stringify(that.value3)).slice(1, 20).replace(' ', 'T')
      }
      if (that.value4 == '') {

        that.value4 = that.common.getNowFormatDate()
      } else {
        that.value4 = (JSON.stringify(that.value4)).slice(1, 20).replace(' ', 'T')
      }
      that.elding1()
      if (that.value8 == '') {
        that.value8 = that.common.getNowFormatDatenew()
      } else {
        that.value8 = (JSON.stringify(that.value8)).slice(1, 20).replace(' ', 'T')
      }
      if (that.value9 == '') {
        that.value9 = that.common.getNowFormatDate()
      } else {
        that.value9 = (JSON.stringify(that.value9)).slice(1, 20).replace(' ', 'T')
      }
      that.elding2()
      if (that.value15 == '') {
        that.value15 = that.common.getNowFormatDatenew()
      } else {
        that.value15 = (JSON.stringify(that.value15)).slice(1, 20)
      }
      if (that.value16 == '') {
        that.value16 = that.common.getNowFormatDate()
      } else {
        that.value16 = (JSON.stringify(that.value16)).slice(1, 20)
      }
      that.elding3()
    },
    elding () {
      let series4 = [];
      let xAxis3 = [];
      let that = this;
      let data = {
        devId: that.roomid,
        start: that.value1,
        end: that.value2,
        datastreamIds: '2005'
      }
      // console.log(data)
      axios({
        method: "post",
        url: this.$store.state.http + '/Datapoints/getHistoryData',
        data: Qs.stringify(data)
      }).then(function (message) {
        let waters =JSON.parse((message.data.errMsg).slice(6))
        // console.log(waters);
        for (let i = 0; i < waters.data.datastreams.length; i++) {
          if (waters.data.datastreams[i].id == "2005") {
            let water = waters.data.datastreams[i].datapoints;
            //console.log(water);
            //console.log(water.length);
            for (let j = 0; j < water.length; j++) {
              //console.log(water[j].at.slice(0,10))
              xAxis3.push(water[j].at.slice(0, 19));
              series4.push(water[j].value / 100);
            }
            // console.log(xAxis3);
            // console.log(series4);
          } else {

          }
        }
        // 	let myChart3 = echarts.init(document.getElementById('main3'));
        // 		// 绘制图表
        // 		myChart3.setOption({
        // 		title: {
        // 			text: ''
        // 		},
        // 		tooltip: {
        // 			trigger: 'axis'
        // 		},
        // 		legend: {
        // 			/*data:['浙江','上海','温州','北京','郑州']*/
        // 		},
        // 		grid: {
        // 			// left: '3%',
        // 			// right: '4%',
        // 			// bottom: '3%',
        // 			containLabel: true
        // 		},
        // 		toolbox: {
        // 			feature: {
        // 				/*saveAsImage: {}*//*下载图标*/
        // 			}
        // 		},
        // 		xAxis: {
        // 			type: 'category',
        // 			data:xAxis3
        // 		},
        // 		yAxis: {
        // 			type: 'value'
        // 		},
        // 		series: [
        // 			{
        // 				name:'',
        // 				type:'line',
        // 				stack: '总量',
        // 				data:series4
        // 			},
        // 			/*{
        // 				name:'',
        // 				type:'line',
        // 				stack: '总量',
        // 				data:[220, 182, 191, 234, 290, 330, 310]
        // 			},
        // 			{
        // 				name:'',
        // 				type:'line',
        // 				stack: '总量',
        // 				data:[150, 232, 201, 154, 190, 330, 410]
        // 			}*/
        // 		],
        // 		/*color:['#95c53b','#4da6b1','#f28f27']*/
        // 	});
        // })
        let myChart3 = echarts.init(document.getElementById('main3'));
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
              data: xAxis3.map(function (str) {
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
          grid: {
            // left: '3%',
            // right: '4%',
            bottom: '10%',
            containLabel: true
          },
          series: [
            {
              name: '水压',
              type: 'line',
              markArea: {
              },
              data: series4
            },

          ]
        });
      })

    },
    elding3 () {
      let series18 = [];
      let xAxis19 = [];
      let that = this;
      axios({
        method: "post",
        url: this.$store.state.http + '/Datapoints/getHistoryData',
        data: Qs.stringify({
          devId: that.roomid,
          start: that.value15,
          end: that.value16,
          datastreamIds: '2001'
        })
      }).then(function (message) {
        let waters =JSON.parse((message.data.errMsg).slice(6))
        // console.log(waters);
        for (let i = 0; i < waters.data.datastreams.length; i++) {
          if (waters.data.datastreams[i].id == "2001") {
            let water = waters.data.datastreams[i].datapoints;
            // console.log(water);
            // console.log(water.length);
            for (let j = 0; j < water.length; j++) {
              // console.log(water[j].at.slice(0,10))
              xAxis19.push(water[j].at.slice(0, 19));
              series18.push(water[j].value);
            }
          } else {

          }
        }
        let myChart3 = echarts.init(document.getElementById('main8'));
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
              data: xAxis19.map(function (str) {
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
          grid: {
            // left: '3%',
            // right: '4%',
            bottom: '10%',
            containLabel: true
          },
          series: [
            {
              name: '电压',
              type: 'line',



              markArea: {


              },
              data: series18
            },

          ]
        });
      })
    },
    elding1 () {
      let series5 = [];
      let xAxis6 = [];
      let that = this;
      let data = {
        devId: that.roomid,
        start: that.value1,
        end: that.value4,
        datastreamIds: '2006'
      }
      // console.log(data);
      axios({
        method: "post",
        url: this.$store.state.http + '/Datapoints/getHistoryData',
        data: Qs.stringify(data)
      }).then(function (message) {
        let waters = JSON.parse((message.data.errMsg).slice(6))
        // console.log(waters);
        for (let i = 0; i < waters.data.datastreams.length; i++) {
          if (waters.data.datastreams[i].id == "2006") {
            let water = waters.data.datastreams[i].datapoints;
            // console.log(water);
            // console.log(water.length);
            for (let j = 0; j < water.length; j++) {
              //console.log(water[j].at)
              xAxis6.push(water[j].at.slice(0, 19));
              series5.push(water[j].value);
            }
          } else {

          }
        }
        let myChart3 = echarts.init(document.getElementById('main4'));
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
              data: xAxis6.map(function (str) {
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
          grid: {
            // left: '3%',
            // right: '4%',
            bottom: '10%',
            containLabel: true
          },
          series: [
            {
              name: '水流量',
              type: 'line',
              markArea: {
              },
              data: series5
            },

          ]
        });
      })
      // 	let myChart3 = echarts.init(document.getElementById('main4'));
      // 		// 绘制图表
      // 		myChart3.setOption({
      // 		title: {
      // 			text: ''
      // 		},
      // 		tooltip: {
      // 			trigger: 'axis'
      // 		},
      // 		legend: {
      // 			/*data:['浙江','上海','温州','北京','郑州']*/
      // 		},
      // 		grid: {
      // 			// left: '3%',
      // 			// right: '4%',
      // 			// bottom: '3%',
      // 			containLabel: true
      // 		},
      // 		toolbox: {
      // 			feature: {
      // 				/*saveAsImage: {}*//*下载图标*/
      // 			}
      // 		},
      // 		xAxis: {
      // 			type: 'category',
      // 			data:xAxis6
      // 		},
      // 		yAxis: {
      // 			type: 'value'
      // 		},
      // 		 dataZoom: [{
      // 			type: 'inside'
      // 		}],
      // 		series: [
      // 			{
      // 				name:'',
      // 				type:'line',
      // 				stack: '总量',
      // 				data:series5
      // 			},
      // 			/*{
      // 				name:'',
      // 				type:'line',
      // 				stack: '总量',
      // 				data:[220, 182, 191, 234, 290, 330, 310]
      // 			},
      // 			{
      // 				name:'',
      // 				type:'line',
      // 				stack: '总量',
      // 				data:[150, 232, 201, 154, 190, 330, 410]
      // 			}*/
      // 		],
      // 		/*color:['#95c53b','#4da6b1','#f28f27']*/
      // 	});
      // })


    },
    elding2 () {
      let series11 = [];
      let xAxis12 = [];
      let that = this;
      axios({
        method: "post",
        url: this.$store.state.http + '/Datapoints/getHistoryData',
        data: Qs.stringify({
          devId: that.roomid,
          start: that.value8,
          end: that.value9,
          datastreamIds: '2004'
        })
      }).then(function (message) {
        // console.log(message);
        let waters = JSON.parse((message.data.errMsg).slice(6))
        console.log(waters);
        for (let i = 0; i < waters.data.datastreams.length; i++) {
          if (waters.data.datastreams[i].id == "2004") {
            let water = waters.data.datastreams[i].datapoints;
            // console.log(water);
            // console.log(water.length);
            for (let j = 0; j < water.length; j++) {
              // console.log(water[j].at.slice(0,10))
              xAxis12.push(water[j].at.slice(0, 19));
              series11.push(water[j].value / 10);
            }
          } else {

          }
        }
        let myChart3 = echarts.init(document.getElementById('main5'));
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
              data: xAxis12.map(function (str) {
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
          grid: {
            // left: '3%',
            // right: '4%',
            bottom: '10%',
            containLabel: true
          },
          series: [
            {
              name: '水温',
              type: 'line',
              markArea: {
              },
              data: series11
            },

          ]
        });
      })
      // 	let myChart3 = echarts.init(document.getElementById('main5'));
      // 		// 绘制图表
      // 		myChart3.setOption({
      // 		title: {
      // 			text: ''
      // 		},
      // 		tooltip: {
      // 			trigger: 'axis'
      // 		},
      // 		legend: {
      // 			/*data:['浙江','上海','温州','北京','郑州']*/
      // 		},
      // 		grid: {
      // 			// left: '3%',
      // 			// right: '4%',
      // 			// bottom: '3%',
      // 			containLabel: true
      // 		},
      // 		toolbox: {
      // 			feature: {
      // 				/*saveAsImage: {}*//*下载图标*/
      // 			}
      // 		},
      // 		xAxis: {
      // 			type: 'category',
      // 			data:xAxis12
      // 		},
      // 		yAxis: {
      // 			type: 'value'
      // 		},
      // 		//  dataZoom: [{
      // 		// 	startValue: '2014-06-01'
      // 		// }, {
      // 		// 	type: 'inside'
      // 		// }],
      // 		series: [
      // 			{
      // 				name:'',
      // 				type:'line',
      // 				stack: '总量',
      // 				data:series11
      // 			},
      // 			/*{
      // 				name:'',
      // 				type:'line',
      // 				stack: '总量',
      // 				data:[220, 182, 191, 234, 290, 330, 310]
      // 			},
      // 			{
      // 				name:'',
      // 				type:'line',
      // 				stack: '总量',
      // 				data:[150, 232, 201, 154, 190, 330, 410]
      // 			}*/
      // 		],
      // 		/*color:['#95c53b','#4da6b1','#f28f27']*/
      // 	});
      // })


    },
    changestatu (row) {
      let that = this;
      if (that.value5 == '已激活') {
        that.value5 = '已激活'
        this.$confirm('此操作将设备激活, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          that.listLoading = true;
          that.universal.look = false;
          that.universal.onfile = false;
          let dataBN = {
            devId: that.roomid,
            cmd: 17,
            cmdValue: '12',
            remark:localStorage.getItem("userAlias"),
            type:'平台'
          }
          // console.log(dataBN)
          axios({
            method: 'post',
            url: that.$store.state.http + "/send/sendCmd",
            data: Qs.stringify(dataBN)
          })
            .then(function (message) {
              if (message.data.resCode == 0) {
                let timer = setTimeout(function () {
                  let data = {
                    devId: that.roomid
                  }
                  // console.log(row)
                  searchClicks('/Datapoints/getBatData', data).then(message => {
                    // console.log(message.data.errMsg)
                    let messData = message.data.errMsg
                    messData=messData.data.devices[0].datastreams
                    for (let i = 0; i < messData.length; i++) {
                      // console.log(messData.data.datastreams[i].id);
                      switch (messData[i].id) {
                        case '2012': that.con.devControl = messData[i].value
                          break;
                        default: break;
                      }
                    }
                    // console.log(that.con.devControl)
                    if (that.con.devControl != 18) {
                      // that.value5='未激活';
                      // that.hidestatus=false;
                      clearTimeout(timer)
                      // that.$message({
                      //  message: '激活失败',
                      //  type: 'success'
                      // });
                      // that.listLoading = false;
                      // that.universal.onfile=true;
                      // that.universal.look=true;
                      let calculate = setTimeout(() => {
                        let dataWERLZ = {
                          devId: that.roomid
                        }
                        searchClicks('/Datapoints/getBatData', dataWERLZ).then(message => {
                          // console.log(message.data.errMsg)
                          let messData = message.data.errMsg
                          messData=messData.data.devices[0].datastreams
                          for (let i = 0; i <messData.length; i++) {
                            // console.log(messData.data.datastreams[i].id);
                            switch (messData[i].id) {
                              case '2012': that.con.devControl = messData[i].value
                                break;
                              default: break;
                            }
                          }
                          // console.log(that.con.devControl)
                          if (that.con.devControl != 18) {
                            // that.value5='未激活';
                            // that.hidestatus=false;
                            clearTimeout(calculate)
                            // that.$message({
                            //  message: '激活失败',
                            //  type: 'success'
                            // });
                            // that.listLoading = false;
                            // that.universal.onfile=true;
                            // that.universal.look=true;
                            let recalculation = setTimeout(() => {
                              let dataDSFWX = {
                                devId: that.roomid
                              }
                              searchClicks('/Datapoints/getBatData', dataDSFWX).then(message => {
                                // console.log(message.data.errMsg)
                                let messData = message.data.errMsg
                                messData=messData.data.devices[0].datastreams
                                for (let i = 0; i < messData.length; i++) {
                                  switch (messData[i].id) {
                                    case '2012': that.con.devControl = messData[i].value
                                      break;
                                    default: break;
                                  }
                                }
                                // console.log(that.con.devControl)
                                if (that.con.devControl != 18) {
                                  that.value5 = '未激活';
                                  that.hidestatus = false;
                                  clearTimeout(recalculation)
                                  that.$message({
                                    message: '激活超时',
                                    type: 'error'
                                  });
                                  that.listLoading = false;
                                  that.universal.onfile = true;
                                  that.universal.look = true;
                                } else {
                                  that.listLoading = false;
                                  that.universal.onfile = true;
                                  that.universal.look = true;
                                  clearTimeout(recalculation)
                                  that.value5 = '已激活';
                                  that.hidestatus = true;
                                  that.$message({
                                    message: '激活成功',
                                    type: 'success'
                                  });
                                  that.getTimeToDevice(that.roomid);
                                }
                              })
                            })
                          } else {
                            that.listLoading = false;
                            that.universal.onfile = true;
                            that.universal.look = true;
                            clearTimeout(calculate)
                            that.value5 = '已激活';
                            that.hidestatus = true;
                            that.$message({
                              message: '激活成功',
                              type: 'success'
                            });
                            that.getTimeToDevice(that.roomid);
                          }
                        })
                      }, 5000)
                    } else {
                      that.listLoading = false;
                      that.universal.onfile = true;
                      that.universal.look = true;
                      clearTimeout(timer)
                      that.value5 = '已激活';
                      that.hidestatus = true;
                      that.$message({
                        message: '激活成功',
                        type: 'success'
                      });
                      that.getTimeToDevice(that.roomid);
                    }
                  })
                }, 5000)
              } else {
                that.listLoading = false;
                that.universal.onfile = true;
                that.universal.look = true;
                clearTimeout(timer)
                that.value5 = '已激活';
                that.hidestatus = true;
                that.$message({
                  message: '激活成功',
                  type: 'success'
                });
                that.getTimeToDevice(that.roomid);
              }
            })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消激活'
          });
          that.value5 = '未激活'
        });
      } else if (that.value5 == '未激活') {
        let data = {
          devId: that.roomid
        }
        that.value5 = '未激活'
        this.$confirm('此操作将设备停用, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          that.listLoading = true;
          that.universal.look = false;
          that.universal.onfile = false;
          let datasp = {
            devId: that.roomid,
            cmd: 17,
            cmdValue: '11',
            remark:localStorage.getItem("userAlias"),
            type:'平台'
          }
          // console.log(datasp)
          axios({
            method: 'post',
            url: that.$store.state.http + "/send/sendCmd",
            data: Qs.stringify(datasp)
          })
            .then(function (message) {
              if (message.data.resCode == 0) {
                let timer = setTimeout(function () {
                  searchClicks('/Datapoints/getBatData', data).then(message => {
                    // console.log(message.data.errMsg)
                    let messData = message.data.errMsg
                    messData=messData.data.devices[0].datastreams
                    for (let i = 0; i <messData.length; i++) {
                      // console.log(messData.data.datastreams[i].id);
                      switch (messData[i].id) {
                        case '2012': that.con.devControl =messData[i].value
                          break;
                        default: break;
                      }
                    }
                    // console.log(that.con.devControl)
                    if (that.con.devControl != 18) {
                      // console.log(1)
                      clearTimeout(timer)
                      that.value5 = '未激活';
                      that.hidestatus = false;
                      that.listLoading = false;
                      that.universal.onfile = true;
                      that.universal.look = true;
                      that.$message({
                        message: '停用成功',
                        type: 'success'
                      });
                    } else {
                      clearTimeout(timer)
                      // console.log(2)
                      // that.value5='已激活';
                      // that.listLoading = false;
                      // that.universal.onfile=true;
                      // that.universal.look=true;
                      // that.hidestatus=true;
                      // that.$message({
                      //  message: '停用失败',
                      //  type: 'success'
                      // });
                      let calculate = setTimeout(() => {
                        searchClicks('/Datapoints/getBatData', data).then(message => {
                          let messData = message.data.errMsg
                          messData=messData.data.devices[0].datastreams
                          for (let i = 0; i <messData.length; i++) {
                            switch (messData[i].id) {
                              case '2012': that.con.devControl = messData[i].value
                                break;
                              default: break;
                            }
                          }
                          console.log(that.con.devControl)
                          if (that.con.devControl != 18) {
                            console.log(1)
                            clearTimeout(calculate)
                            that.value5 = '未激活';
                            that.hidestatus = false;
                            that.listLoading = false;
                            that.universal.onfile = true;
                            that.universal.look = true;
                            that.$message({
                              message: '停用成功',
                              type: 'success'
                            });
                          } else {
                            clearTimeout(calculate)
                            // console.log(2)
                            // that.value5='已激活';
                            // that.listLoading = false;
                            // that.universal.onfile=true;
                            // that.universal.look=true;
                            // that.hidestatus=true;
                            // that.$message({
                            //  message: '停用失败',
                            //  type: 'success'
                            // });
                            let recalculation = setTimeout(() => {
                              searchClicks('/Datapoints/getBatData', data).then(message => {
                                let messData = message.data.errMsg
                                messData=messData.data.devices[0].datastreams
                                for (let i = 0; i < messData.length; i++) {
                                  switch (messData[i].id) {
                                    case '2012': that.con.devControl = messData[i].value
                                      break;
                                    default: break;
                                  }
                                }
                                console.log(that.con.devControl)
                                if (that.con.devControl != 18) {
                                  console.log(1)
                                  clearTimeout(recalculation)
                                  that.value5 = '未激活';
                                  that.hidestatus = false;
                                  that.listLoading = false;
                                  that.universal.onfile = true;
                                  that.universal.look = true;
                                  that.$message({
                                    message: '停用成功',
                                    type: 'success'
                                  });
                                } else {
                                  clearTimeout(recalculation)
                                  console.log(2)
                                  that.value5 = '已激活';
                                  that.listLoading = false;
                                  that.universal.onfile = true;
                                  that.universal.look = true;
                                  that.hidestatus = true;
                                  that.$message({
                                    message: '停用超时',
                                    type: 'error'
                                  });

                                }
                              })
                            }, 5000)
                          }
                        })
                      }, 5000)
                    }
                  })
                }, 5000)
              } else {
                console.log(2)
                that.listLoading = false;
                that.universal.onfile = true;
                that.universal.look = true;
                that.value5 = '已激活';
                that.hidestatus = true;
                that.$message({
                  message: '停用失败',
                  type: 'success'
                });
              }
            })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消停用'
          });
          that.value5 = '已激活'
        });
      }
    },
    changelock (row) {
      let that = this;
      if (that.value6 == '已开阀') {
        that.value6 = '已开阀'
        this.$confirm('此操作将设备开阀, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          that.listLoading = true;
          that.universal.look = false;
          that.universal.onfile = false;
          let dataso = {
            devId: that.roomid,
            cmd: 18,
            cmdValue: '11',
            remark:localStorage.getItem("userAlias"),
            type:'平台'
          }
          console.log(dataso)
          axios({
            method: 'post',
            url: that.$store.state.http + "/send/sendCmd",
            data: Qs.stringify(dataso)
          })
            .then(function (message) {
              if (message.data.resCode == 0) {
                let timer = setTimeout(function () {
                  let data = {
                    devId: that.roomid
                  }
                  console.log(data)
                  searchClicks('/Datapoints/getBatData', data).then(message => {
                    let messData = message.data.errMsg
                    messData=messData.data.devices[0].datastreams
                    for (let i = 0; i < messData.length; i++) {
                      switch (messData[i].id) {
                        case '2008': that.con.devLockState = messData[i].value
                          break;
                        default: break;
                      }
                    }
                    console.log(that.con.devLockState)
                    if (that.con.devLockState == 17) {
                      that.value6 = '已开阀';
                      that.listLoading = false;
                      that.universal.onfile = true;
                      that.universal.look = true;
                      clearTimeout(timer)
                      that.$message({
                        message: '开阀成功',
                        type: 'success'
                      });
                    } else {
                      clearTimeout(timer)
                      let calculate = setInterval(() => {
                        let dataFSDW = {
                          devId: that.roomid
                        }
                        console.log(data)
                        searchClicks('/Datapoints/getBatData', dataFSDW).then(message => {
                          let messData = message.data.errMsg
                          messData=messData.data.devices[0].datastreams
                          for (let i = 0; i < messData.length; i++) {
                            switch (messData[i].id) {
                              case '2008': that.con.devLockState = messData[i].value
                                break;
                              default: break;
                            }
                          }
                          console.log(that.con.devLockState)
                          if (that.con.devLockState == 17) {
                            that.value6 = '已开阀';
                            that.listLoading = false;
                            that.universal.onfile = true;
                            that.universal.look = true;
                            clearTimeout(calculate)
                            that.$message({
                              message: '开阀成功',
                              type: 'success'
                            });
                          } else {
                            clearTimeout(calculate)
                            // that.listLoading = false;
                            // that.universal.onfile=true;
                            // that.universal.look=true;
                            // that.value6='未开阀';
                            // that.$message({
                            //  message: '开阀失败',
                            //  type: 'error'
                            // });
                            let recalculation = setInterval(() => {
                              let dataWERWL = {
                                devId: that.roomid
                              }
                              searchClicks('/Datapoints/getBatData', dataWERWL).then(message => {
                                let messData = message.data.errMsg
                                messData=messData.data.devices[0].datastreams
                                for (let i = 0; i < messData.length; i++) {
                                  switch (messData[i].id) {
                                    case '2008': that.con.devLockState = messData[i].value
                                      break;
                                    default: break;
                                  }
                                }
                                console.log(that.con.devLockState)
                                if (that.con.devLockState == 17) {
                                  that.value6 = '已开阀';
                                  that.listLoading = false;
                                  that.universal.onfile = true;
                                  that.universal.look = true;
                                  clearTimeout(recalculation)
                                  that.$message({
                                    message: '开阀成功',
                                    type: 'success'
                                  });
                                } else {
                                  clearTimeout(recalculation)
                                  that.listLoading = false;
                                  that.universal.onfile = true;
                                  that.universal.look = true;
                                  that.value6 = '未开阀';
                                  that.$message({
                                    message: '开阀超时',
                                    type: 'error'
                                  });
                                }
                              })
                            }, 5000)

                          }
                        })
                      }, 5000)

                    }
                  })
                }, 5000)
              } else {
                that.listLoading = false;
                that.universal.onfile = true;
                that.universal.look = true;
                that.value6 = '未开阀';
                that.$message({
                  message: '开阀失败',
                  type: 'error'
                });
              }
            })
        }).catch(() => {
          that.$message({
            type: 'info',
            message: '已取消开阀'
          });
          that.value6 = '未开阀'
        });
      } else if (that.value6 == '未开阀') {
        that.value6 = '未开阀'
        that.$confirm('此操作将设备关阀, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          that.listLoading = true;
          that.universal.look = false;
          that.universal.onfile = false;
          let dataOP = {
            devId: that.roomid,
            cmd: 18,
            cmdValue: '12',
            remark:localStorage.getItem("userAlias"),
            type:'平台'
          }
          console.log(dataOP)
          axios({
            method: 'post',
            url: that.$store.state.http + "/send/sendCmd",
            data: Qs.stringify(dataOP)
          })
            .then(function (message) {
              if (message.data.resCode == 0) {
                let timer = setTimeout(function () {
                  let data = {
                    devId: that.roomid
                  }
                  console.log(data)
                  searchClicks('/Datapoints/getBatData', data).then(message => {
                    let messData = message.data.errMsg
                    messData=messData.data.devices[0].datastreams
                    for (let i = 0; i < messData.length; i++) {
                      switch (messData[i].id) {
                        case '2008': that.con.devLockState = messData[i].value
                          break;
                        default: break;
                      }
                    }
                    console.log(that.con.devLockState)
                    if (that.con.devLockState !== 17) {
                      that.value6 = '已关阀';
                      that.listLoading = false;
                      that.universal.onfile = true;
                      that.universal.look = true;
                      clearTimeout(timer)
                      that.$message({
                        message: '关阀成功',
                        type: 'success'
                      });
                    } else {
                      clearTimeout(timer)
                      let calculate = setInterval(() => {
                        let dataFSDW = {
                          devId: that.roomid
                        }
                        console.log(data)
                        searchClicks('/Datapoints/getBatData', dataFSDW).then(message => {
                          let messData = message.data.errMsg
                          messData=messData.data.devices[0].datastreams
                          for (let i = 0; i < messData.length; i++) {
                            switch (messData[i].id) {
                              case '2008': that.con.devLockState = messData[i].value
                                break;
                              default: break;
                            }
                          }
                          console.log(that.con.devLockState)
                          if (that.con.devLockState !== 17) {
                            that.value6 = '已关阀';
                            that.listLoading = false;
                            that.universal.onfile = true;
                            that.universal.look = true;
                            clearTimeout(calculate)
                            that.$message({
                              message: '关阀成功',
                              type: 'success'
                            });
                          } else {
                            clearTimeout(calculate)
                            // that.listLoading = false;
                            // that.universal.onfile=true;
                            // that.universal.look=true;
                            // that.value6='未开阀';
                            // that.$message({
                            //  message: '开阀失败',
                            //  type: 'error'
                            // });
                            let recalculation = setInterval(() => {
                              let dataWERWL = {
                                devId: that.roomid
                              }
                              searchClicks('/Datapoints/getBatData', dataWERWL).then(message => {
                                let messData = message.data.errMsg
                                messData=messData.data.devices[0].datastreams
                                for (let i = 0; i < messData.length; i++) {
                                  switch (messData[i].id) {
                                    case '2008': that.con.devLockState = messData[i].value
                                      break;
                                    default: break;
                                  }
                                }
                                console.log(that.con.devLockState)
                                if (that.con.devLockState !== 17) {
                                  that.value6 = '已关阀';
                                  that.listLoading = false;
                                  that.universal.onfile = true;
                                  that.universal.look = true;
                                  clearTimeout(recalculation)
                                  that.$message({
                                    message: '关阀成功',
                                    type: 'success'
                                  });
                                } else {
                                  clearTimeout(recalculation)
                                  that.listLoading = false;
                                  that.universal.onfile = true;
                                  that.universal.look = true;
                                  that.value6 = '未关阀';
                                  that.$message({
                                    message: '关阀超时',
                                    type: 'error'
                                  });
                                }
                              })
                            }, 5000)

                          }
                        })
                      }, 5000)

                    }
                  })
                }, 5000)
              } else {
                that.listLoading = false;
                that.universal.onfile = true;
                that.universal.look = true;
                that.value6 = '未关阀';
                that.$message({
                  message: '关阀失败',
                  type: 'error'
                });
              }
            })
        }).catch(() => {
          that.$message({
            type: 'info',
            message: '已取消关阀'
          });
          that.value6 = '已关阀'
        });
      }
    },
    changeting (row) {
      let that = this;
      if (that.value7 == '已布防') {
        that.value7 = '已布防'
        this.$confirm('此操作将设备布防, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          that.listLoading = true;
          that.universal.onfile = false;
          that.universal.look = false;
          let dataiu = {
            devId: that.roomid,
            cmd: 19,
            cmdValue: '11',
            remark:localStorage.getItem("userAlias"),
            type:'平台'
          }
          console.log(dataiu)
          axios({
            method: 'post',
            url: that.$store.state.http + "/send/sendCmd",
            data: Qs.stringify(dataiu)
          })
            .then(function (message) {
              if (message.data.resCode == 0) {
                let timer = setTimeout(function () {
                  let data = {
                    devId: that.roomid
                  }
                  console.log(data)
                  searchClicks('/Datapoints/getBatData', data).then(message => {
                    let messData = message.data.errMsg
                    messData=messData.data.devices[0].datastreams
                    for (let i = 0; i < messData.length; i++) {
                      switch (messData[i].id) {
                        case '2010': that.con.devDefence =messData[i].value;
                        console.log(that.con.devDefence)
                      if (that.con.devDefence == 17) {
                        // console.log(1)
                        // that.value7='未布防';
                        clearTimeout(timer)
                        let calculate = setTimeout(() => {
                          let dataFLWEO = {
                            devId: that.roomid
                          }
                          console.log(data)
                          searchClicks('/Datapoints/getBatData', dataFLWEO).then(message => {
                            let messData = message.data.errMsg
                            messData=messData.data.devices[0].datastreams
                            for (let i = 0; i < messData.length; i++) {
                              switch (messData[i].id) {
                                case '2010': that.con.devDefence = messData[i].value;
                                console.log(that.con.devDefence)
                              if (that.con.devDefence == 17) {
                                // console.log(1)
                                // that.value7='未布防';
                                clearTimeout(calculate)
                                // that.listLoading = false;
                                // that.universal.onfile=true;
                                // that.universal.onfile=true;
                                // that.$message({
                                //  message: '布防失败',
                                //  type: 'error'
                                // })
                                let recalculation = setTimeout(() => {
                                  let dataLWFf = {
                                    devId: that.roomid
                                  }
                                  console.log(data)
                                  searchClicks('/Datapoints/getBatData', dataLWFf).then(message => {
                                    let messData = message.data.errMsg
                                    messData=messData.data.devices[0].datastreams
                                    for (let i = 0; i <messData.length; i++) {
                                      switch (messData[i].id) {
                                        case '2010': that.con.devDefence = messData[i].value;
                                        console.log(that.con.devDefence)
                                          if (that.con.devDefence == 17) {
                                            console.log(1)
                                            that.value7 = '未布防';
                                            clearTimeout(recalculation)
                                            that.listLoading = false;
                                            that.universal.onfile = true;
                                            that.universal.onfile = true;
                                            that.$message({
                                              message: '布防超时',
                                              type: 'error'
                                            })
                                          } else {
                                            console.log(2)
                                            that.listLoading = false;
                                            that.universal.onfile = true;
                                            that.universal.onfile = true;
                                            that.value7 = '已布防';
                                            clearTimeout(recalculation)
                                            that.$message({
                                              message: '布防成功',
                                              type: 'success'
                                            })
                                          }
                                          break;
                                        default: break;
                                      }
                                    }

                                  })
                                }, 5000)
                              } else {
                                console.log(2)
                                that.listLoading = false;
                                that.universal.onfile = true;
                                that.universal.onfile = true;
                                that.value7 = '已布防';
                                clearTimeout(calculate)
                                that.$message({
                                  message: '布防成功',
                                  type: 'success'
                                })
                              }
                                  break;
                                default: break;
                              }

                            }

                          })
                        }, 5000)
                      } else {
                        console.log(2)
                        that.listLoading = false;
                        that.universal.onfile = true;
                        that.universal.onfile = true;
                        that.value7 = '已布防';
                        clearTimeout(timer)
                        that.$message({
                          message: '布防成功',
                          type: 'success'
                        })
                      }
                          break;
                        default: break;
                      }
                    }

                  })
                }, 5000)
              } else {
                that.listLoading = false;
                that.universal.onfile = true;
                that.universal.onfile = true;
                that.value7 = '未布防';
                that.$message({
                  message: '布防失败',
                  type: 'error'
                })
              }
            })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消布防'
          });
          that.value7 = '未布防'
        });
      } else if (that.value7 == '未布防') {
        that.value7 = '未布防'
        console.log(787)
        this.$confirm('此操作将设备撤防, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          that.listLoading = true;
          that.universal.look = false;
          that.universal.onfile = false;
          let datays = {
            devId: that.roomid,
            cmd: 19,
            cmdValue: '12',
            remark:localStorage.getItem("userAlias"),
            type:'平台'
          }
          console.log(datays)
          axios({
            method: 'post',
            url: that.$store.state.http + "/send/sendCmd",
            data: Qs.stringify(datays)
          })
            .then(function (message) {
              if (message.data.resCode == 0) {
                let timer = setTimeout(function () {
                  let data = {
                    devId: that.roomid
                  }
                  console.log(data)
                  searchClicks('/Datapoints/getBatData', data).then(message => {
                    let messData = message.data.errMsg
                    messData=messData.data.devices[0].datastreams
                    console.log(messData)
                    for (let i = 0; i < messData.length; i++) {
                      switch (messData[i].id) {
                        case '2010': that.con.devDefence =messData[i].value;
                        console.log(that.con.devDefence)
                      if (that.con.devDefence == 18) {
                        // that.value7='已布防';
                        // that.listLoading = false;
                        // that.universal.look=true;
                        // that.universal.onfile=true;
                        clearTimeout(timer)
                        that.$message({
                         message: '撤防失败',
                         type: 'error'
                        })
                        let calculate = setTimeout(() => {
                          let dataDFWXO = {
                            devId: that.roomid
                          }
                          searchClicks('/Datapoints/getBatData', dataDFWXO).then(message => {
                            let messData = message.data.errMsg
                            messData=messData.data.devices[0].datastreams
                            for (let i = 0; i < messData.length; i++) {
                              switch (messData[i].id) {
                                case '2010': that.con.devDefence = messData[i].value
                                if (that.con.devDefence == 17) {
                                // that.value7='已布防';
                                // that.listLoading = false;
                                // that.universal.look=true;
                                // that.universal.onfile=true;
                                clearTimeout(calculate)
                                // that.$message({
                                //   message: '撤防失败',
                                //   type: 'error'
                                // })
                                let recalculation = setTimeout(() => {
                                  let dataWEUQ = {
                                    devId: that.roomid
                                  }
                                  searchClicks('/Datapoints/getBatData', dataWEUQ).then(message => {
                                    let messData = message.data.errMsg
                                    messData=messData.data.devices[0].datastreams
                                    for (let i = 0; i < messData.length; i++) {
                                      switch (messData[i].id) {
                                        case '2010': that.con.devDefence = messData[i].value
                                        console.log(that.con.devDefence)
                                      if (that.con.devDefence == 17) {
                                        that.value7 = '已布防';
                                        that.listLoading = false;
                                        that.universal.look = true;
                                        that.universal.onfile = true;
                                        clearTimeout(recalculation)
                                        that.$message({
                                          message: '撤防超时',
                                          type: 'error'
                                        })
                                      } else {
                                        that.value7 = '未布防';
                                        that.listLoading = false;
                                        that.universal.look = true;
                                        that.universal.onfile = true;
                                        clearTimeout(recalculation)
                                        that.$message({
                                          message: '撤防成功',
                                          type: 'success'
                                        })
                                      }
                                          break;
                                        default: break;
                                      }
                                    }

                                  })
                                }, 5000)
                              } else {
                                that.value7 = '未布防';
                                that.listLoading = false;
                                that.universal.look = true;
                                that.universal.onfile = true;
                                clearTimeout(calculate)
                                that.$message({
                                  message: '撤防成功',
                                  type: 'success'
                                })
                              }
                                  break;
                                default: break;
                              }
                              console.log(that.con.devDefence)

                            }

                          })
                        }, 5000)
                      } else {
                        that.value7 = '未布防';
                        that.listLoading = false;
                        that.universal.look = true;
                        that.universal.onfile = true;
                        clearTimeout(timer)
                        that.$message({
                          message: '撤防成功',
                          type: 'success'
                        })
                      }
                          break;
                        default: break;
                      }
                    }

                  })
                }, 5000)
              } else {
                that.value7 = '已布防';
                that.listLoading = false;
                that.universal.look = true;
                that.universal.onfile = true;
                that.$message({
                  message: '撤防失败',
                  type: 'error'
                })
              }
            })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消撤防'
          });
          that.value7 = '已布防'
        });
      }
    },
    recover (row) {
      let that = this;
      this.$confirm('此操作将恢复出厂设置, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios({
          method: 'post',
          url: this.$store.state.http + "/send/sendCmd",
          data: Qs.stringify({
            devId: that.roomid,
            cmd: 22,
            cmdValue: '11',
            remark:localStorage.getItem("userAlias"),
            type:'平台'
          })
        })
          .then(function (message) {
            console.log(message)
            if (message.data.resCode == 0) {
              console.log(message)
              let t = setTimeout(function () {
                axios({
                  method: 'post',
                  url: that.$store.state.http + "/send/QueryCmdsStatus",
                  data: Qs.stringify({
                    cmdsId: message.data.cmd_uuid
                  })
                })
                  .then(function (res) {
                    if (JSON.parse((res.data.errMsg).slice(4, res.data.errMsg.length)).data.status == 4) {
                      that.$message({
                        message: '恢复出厂设置成功',
                        type: 'success'
                      })
                    } else if (JSON.parse((res.data.errMsg).slice(4, res.data.errMsg.length)).data.status == 0) {
                      // if(message.data.resCode==0){
                      // 	that.$message({
                      // 		message: '恢复出厂设置成功',
                      // 		type: 'success'
                      // 	})
                      that.$message({
                        message: '设备未在线',
                        type: 'error'
                      })
                    } else {
                      that.$message({
                        message: '恢复出厂设置失败',
                        type: 'error'
                      })
                    }
                  })
              }, 10000)
            } else {
              that.$message({
                message: '恢复出厂设置失败',
                type: 'error'
              })
            }
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消恢复出厂设置'
        });
      });
    },
    read (row) {
      let that = this;
      this.$confirm('此操作将读取定位信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios({
          method: 'post',
          url: this.$store.state.http + "/send/sendCmd",
          data: Qs.stringify({
            devId: that.roomid,
            cmd: 21,
            cmdValue: '11',
            remark:localStorage.getItem("userAlias"),
            type:'平台'
          })
        })
          .then(function (message) {
            console.log(message)
            if (message.data.resCode == 0) {
              console.log(message)
              let t = setTimeout(function () {
                axios({
                  method: 'post',
                  url: that.$store.state.http + "/send/QueryCmdsStatus",
                  data: Qs.stringify({
                    cmdsId: message.data.cmd_uuid
                  })
                })
                  .then(function (res) {
                    if (JSON.parse((res.data.errMsg).slice(4, res.data.errMsg.length)).data.status == 4) {
                      that.$message({
                        message: '读取定位信息成功',
                        type: 'success'
                      })
                    } else if (JSON.parse((res.data.errMsg).slice(4, res.data.errMsg.length)).data.status == 0) {
                      that.$message({
                        message: '设备未在线',
                        type: 'error'
                      })
                      // if(message.data.resCode==0){
                      // 	that.$message({
                      // 		message: '读取定位信息成功',
                      // 		type: 'success'
                      // 	})
                    } else {
                      that.$message({
                        message: '读取定位信息失败',
                        type: 'error'
                      })
                    }
                  })
              }, 10000)
            } else {
              that.$message({
                message: '读取定位信息失败',
                type: 'error'
              })
            }
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消读取定位信息'
        });
      });
    },
    renewal (row) {
      console.log(row)
      let that = this;
      this.$confirm('此操作将更新位置, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios({
          method: 'post',
          url: this.$store.state.http + "/send/sendCmd",
          data: Qs.stringify({
            devId: that.roomid,
            cmd: 21,
            cmdValue: '12',
            remark:localStorage.getItem("userAlias"),
            type:'平台'
          })
        })
          .then(function (message) {
            console.log(message)
            if (message.data.resCode == 0) {
              console.log(message)
              let t = setTimeout(function () {
                axios({
                  method: 'post',
                  url: that.$store.state.http + "/send/QueryCmdsStatus",
                  data: Qs.stringify({
                    cmdsId: message.data.cmd_uuid
                  })
                })
                  .then(function (res) {
                    if (JSON.parse((res.data.errMsg).slice(4, res.data.errMsg.length)).data.status == 4) {
                      that.$message({
                        message: '更新位置成功',
                        type: 'success'
                      })
                    } else if (JSON.parse((res.data.errMsg).slice(4, res.data.errMsg.length)).data.status == 0) {
                      that.$message({
                        message: '设备未在线',
                        type: 'error'
                      })
                    } else {
                      // if(message.data.resCode==0){
                      // 	that.$message({
                      // 		message: '更新位置成功',
                      // 		type: 'success'
                      // 	})
                      // }else{
                      that.$message({
                        message: '更新位置失败',
                        type: 'error'
                      })
                    }
                  })
              }, 10000)
            } else {
              that.$message({
                message: '更新位置失败',
                type: 'error'
              })
            }
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消更新位置'
        });
      });
    },
    mappInput () {
      if(this.inputDev==''){
        return;
      }
      let data = {
        dealer: "123",
        devId: '',
        devParaSn: this.inputDev,
        deviceModel: '',
        pageNum: 1,
        pageSize: 10,
        personnel: '',
        userId: '331fa66faa314260a2d557c65e3e884b'
      }
      console.log(data)
      let that = this;
      axios({
        method: 'post',
        url: that.$store.state.http + '/devices/conditionFind',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message)
        let datas = {
          id: message.data.result[0].deviceId
        }
        axios({
          method: 'post',
          url: that.$store.state.http + '/Amend/findOne',
          data: Qs.stringify(datas)
        }).then(function (message) {
          // let messData = JSON.parse((res.data.errMsg).slice(6))
          // console.log(messData)
          // for (let i = 0; i < messData.data.datastreams.length; i++) {
          //   console.log(messData.data.datastreams[i].id);
          //   switch (messData.data.datastreams[i].id) {
          //     case '2003': that.lice = messData.data.datastreams[i].datapoints[0].value;
          //       break;
          //     case '2002': that.lace = messData.data.datastreams[i].datapoints[0].value;
          //       break;
          //     default: break;
          //   }
          // }
          // that.mapchangelists = wgs84togcj02((that.lice) / 100000, (that.lace) / 100000)
          // that.lice = that.mapchangelists[1];
          // that.lace = that.mapchangelists[0];
          // if (that.lice == 0.008728984041221487 || that.lace == 0.02200129584349762) {
          //   that.lace = 120.2282128307
          //   that.lice = 30.2693046269
          // }
          // let objs = {
          //   a: that.lice,
          //   b: that.lace
          // }
          // console.log(that.lice)
          // console.log(that.lace)
          if (message.status == 200) {
              // let lican=wgs84togcj02((message.data.amend.amendLongitude) / 100000, (message.data.amend.amendLatitude) / 100000)
              // console.log(lican)
              var obj = {
                b: message.data.amend.amendLongitude,
                a: message.data.amend.amendLatitude
              };
            }
          that.newmes = '设备SN:' + message.data.amend.deviceId
          that.openInfo(that.newmes, obj)
          setTimeout(function () {
            setZoom();
          }, 1000)
          function setZoom () {
            // console.log(obj);
            let point = new BMap.Point(obj.b, obj.a);
            that.map.centerAndZoom(point, 18);
          }
        })

      })
    },
    contrloceie (i) {
      this.$router.push({        path: '/pageHome/faultList', query: {
          mouse: i.deviceIds
        }      });
    },
    changecontrol (val) {
      this.universal.onfile = true;

      let that = this;
      let data = {
        devId: that.roomid
      }
      console.log(data)
      axios({
        method: "post",
        url: this.$store.state.http + '/Datapoints/getBatData',
        data: Qs.stringify(data)
      }).then(function (message) {
        let messData = message.data.errMsg
        messData=messData.data.devices[0].datastreams
        for (let i = 0; i < messData.length; i++) {
          switch (messData[i].id) {
            case '2010': that.lon.devDefence = messData[i].value;
              break;

            case '2012': that.lon.devControl = messData[i].value
              break;
            case '2009': that.lon.devUnlockWay = messData.data.datastreams[i].value;
              that.lon.devUnlockTime = messData[i].at;
              break;
            case '2008': that.lon.devLockState = messData[i].value
              break;
            case '1001': that.lon.devStatus = mmessData[i].value
              break;
            default: break;
          }
        }
        if (that.lon.devControl == 17) {
          console.log(1)
          that.value5 = '未激活';
          that.hidestatus = false;
        } else {
          console.log(2)
          that.value5 = '已激活';
          that.hidestatus = true;
        }
        if (that.lon.devLockState == 17) {
          console.log(1)
          that.value6 = '已开阀';
        } else {
          console.log(2)
          that.value6 = '未开阀';
        }
        if (that.lon.devDefence == 17) {
          // console.log(1)
          that.value7 = '未布防';
        } else {
          // console.log(2)
          that.value7 = '已布防';
        }
      })







    },
    mapdetail (val) {
      // console.log(890)
      // console.log(val)
      this.$router.push({        path: '/pageHome/Edistribution', query: {
          mouse: val.devParaSn
        }      });
    },
    addClickHandler (idclose, marker) {
      let that = this;
      marker.addEventListener("click", function (e) {
        // console.log(e.target)
        that.openInfo(idclose, e)
      });
    },
    openInfo (idclose, e) {
      // console.log(idclose)
      // console.log(e)
      // console.log(idclose.slice(5,idclose.length))
      let that = this;
      axios({
        method: 'post',
        url: that.$store.state.http + '/devices/findsn',
        data: Qs.stringify({
          devId: idclose.slice(5, idclose.length)
        })
      }).then(function (message) {
        // console.log(message)
        if (message.data.resCode == 0) {
          if (message.data.i.devParaSn == '') {
            that.ying = '无'
          } else {
            that.ying = message.data.i.devParaSn
            that.end = message.data.i.end
          }
        } else {

        }
      })
      // console.log(that.ying)
      searchClicks('/Datapoints/getBatData', { devId: idclose.slice(5, idclose.length) }).then(res => {
        let messData = res.data.errMsg
        messData=messData.data.devices[0].datastreams
        console.log(messData)
        for (let i = 0; i < messData.length; i++) {
          // console.log(messData.data.datastreams[i].id);
          switch (messData[i].id) {
            case '2001': that.con.devVOL = messData[i].value
              break;
            case '2011': that.con.devWarning = messData[i].value
              break;
            case '2010': that.con.devDefence = messData[i].value;
              break;
            case '2009': that.con.devUnlockWay = messData[i].value;
              that.con.devUnlockTime = messData[i].at;
              break;
            case '2008': that.con.devLockState = messData[i].value
              break;
            case '2007': that.con.waterMeterTotal = messData[i].value
              that.con.waterMeterTotal = that.con.waterMeterTotal + 'm³'
              break;
            case '1005': that.con.devHardVerison = messData[i].value
              break;
            //  case '2013':that.con.waterMeterTrip=messData.data.datastreams[i].datapoints[0].value
            //        that.con.waterMeterTrip=that.con.waterMeterTrip+'m³'
            //  break;
            case '2006': that.con.waterMeterTemp = messData[i].value
              that.con.waterMeterTemp = that.con.waterMeterTemp + 'm³'
              break;
            case '1004': that.con.devSoftVerison = messData[i].value
              break;
            case '2005': that.con.waterPressure = messData[i].value
              break;
            case '2004': that.con.waterTemperature = (messData[i].value) / 10
              that.con.waterTemperature = that.con.waterTemperature + '℃'
              break;
            case '1002': that.con.devIccid = messData[i].value
              break;
            case '2003': that.con.devLongitude = messData[i].value;
              that.con.devLongitude = (that.con.devLongitude) / 100000 + '°'

              break;
            case '1001': that.con.devStatus = messData[i].value
              break;
            case '2002': that.con.devLatitude = messData[i].value;
              that.con.devLatitude = (that.con.devLatitude) / 100000 + '°'

              break;
            default: break;
          }
        }
        //  that.mapchangelistlp=wgs84togcj02(that.con.devLongitude,that.con.devLatitude)
        // that.con.devLatitude=that.mapchangelistlp[1];
        // that.con.devLongitude=that.mapchangelistlp[0];
        // console.log(that.con.devLongitude)
        if (that.con.devVOL > 3550 && that.con.devVOL < 4200) {
          that.con.devVOL = '<span style="color:green;">正常</span>'
        } else if (that.con.devVOL > 3500 && that.con.devVOL <= 3550) {
          that.con.devVOL = '<span style="color:purple;">低压</span>'
        } else if (that.con.devVOL > 3000 && that.con.devVOL <= 3500) {
          that.con.devVOL = '<span style="color:rgb(2, 86, 243);">更换电池</span>'
        } else {
          that.con.devVOL = '<span style="color:red;">电量异常</span>'
        }
        // console.log(that.con.waterPressure)
        if (that.con.waterPressure == '' || that.con.waterPressure == '无数据') {
          that.con.waterPressure = that.con.waterPressure + 'Mpa'
        } else if (that.con.waterPressure >= 160 || that.con.waterPressure < 0) {
          that.con.waterPressure = '设备水压异常'
        } else if (that.con.waterPressure >= 0 || that.con.waterPressure <= 30) {
          that.con.waterPressure = ((that.con.waterPressure + 85) / 10).toFixed(2) + 'Mpa'
        } else if (that.con.waterPressure > 30 || that.con.waterPressure <= 60) {
          that.con.waterPressure = ((that.con.waterPressure + 105) / 10).toFixed(2) + 'Mpa'
        } else if (that.con.waterPressure > 60 || that.con.waterPressure <= 90) {
          that.con.waterPressure = ((that.con.waterPressure + 125) / 10).toFixed(2) + 'Mpa'
        } else if (that.con.waterPressure > 90 || that.con.waterPressure <= 159) {
          that.con.waterPressure = ((that.con.waterPressure + 155) / 10).toFixed(2) + 'Mpa'
        }
        // if (that.con.devStatus == 17) {
        //   that.con.devStatus = '<span style="color:red;">异常</span>'
        // } else {
        //   that.con.devStatus = '<span style="color:green;">正常</span>'
        // }
        if (that.con.devWarning == 0||that.con.devWarning == 64) {
          that.con.devWarning = '<span style="color:green;">正常</span>'
        } else {
          that.con.devWarning = '<span style="color:red;">异常</span>'
        }
        if (that.con.devLockState == 17) {
          that.con.devLockState = '开启';
          that.value2 = true;
        } else {
          that.con.devLockState = '关闭'
          that.value2 = false;
        }
        if (that.ying == '') {
          that.ying = '无'
        }
        if (that.con.devIccid == '') {
          that.con.devIccid = '无'
        }
        if (that.con.devHardVerison == '') {
          that.con.devHardVerison = '无'
        }
        if (that.con.devDefence == 17) {
          that.con.devDefence = '未布防'
          that.value3 = true
        } else {
          that.con.devDefence = '已布防'
          that.value3 = false
        }

        if (that.con.devUnlockWay == 17) {
          that.con.devUnlockWay = 'IC卡'
        } else if (that.con.devUnlockWay == 18) {
          that.con.devUnlockWay = '手机'
        } else if (that.con.devUnlockWay == 20) {
          that.con.devUnlockWay = '应急开锁'
        } else {
          that.con.devUnlockWay = '未激活'
        }

        if (that.con.devLockState == 0x11) {
          that.con.devLockState = '倾斜报警'
        }
        if (that.con.devDefence == 0x21) {
          that.con.devDefence = '温度压力传感器异常'
        }
        if (that.con.devDefence == 0x24) {
          that.con.devDefence = '压力传感器初始化失败'
        }
        // console.log(that.con.devUnlockWay)
        // console.log(e.target)
        let datas={
          id:idclose.slice(5, idclose.length)
        }
        axios({
          method: "post",
          url: that.$store.state.http + '/Amend/findOne',
          data: Qs.stringify(datas)
        }).then(function (message) {
          var p;
        var once;
        var tewo;
        if (e.target == undefined) {
          p = e
          once = p.b
          tewo = p.a
        } else {
          p = e.target;
          once = p.getPosition().lng
          tewo = p.getPosition().lat
        }
        // console.log(p)
        // console.log(that.con.devHardVerison);
        var opts = {
          width: 620,
          height: 310,
          title: "<div>" +
            "<div class='letg'>" +
            "<div>" +
            "<div class='grid-content'>" + "自定义编号：" + "</div>" + that.end + "<br/>" +
            "<div class='grid-content'>" + "设备编号：" + "</div>" + that.ying + "<br/>" +
            "<div class='grid-content'>" + "锁的状态：" + "</div>" + that.con.devLockState + "<br/>" +
            "<div class='grid-content' :class='adad'>" + "设备电量：" + "</div>" + that.con.devVOL + "<br/>" +
            "<div class='grid-content'>" + "设备纬度：" + "</div>" + that.con.devLatitude + "<br/>" +
            // "<div class='grid-content'>" + "设备水温：" + "</div>" + that.con.waterTemperature + "<br/>" +
            "<div class='grid-content'>" + "瞬间流量：" + "</div>" + that.con.waterMeterTemp + "<br/>" +
            "<div class='grid-content'>" + "硬件版本：" + "</div>" + that.con.devHardVerison + "<br/>" +
            "<div class='grid-content'>" + "设备地址：" + "</div>" + message.data.amend.address + "<br/>" +
            "</div>" +
            "<div style='width:40%'>" +
            "<div class='grid-content'>" + "设备编号：" + "</div>" + idclose.slice(5, idclose.length) + "<br/>" +
            "<div class='grid-content'>" + "流量卡号：" + "</div>" + that.con.devIccid + "<br/>" +
            "<div class='grid-content'>" + "是否布防：" + "</div>" + that.con.devDefence + "<br/>" +
            "<div class='grid-content'>" + "设备状态：" + "</div>" + that.con.devWarning + "<br/>" +
            "<div class='grid-content'>" + "设备经度：" + "</div>" + that.con.devLongitude + "<br/>" +
            "<div class='grid-content'>" + "设备水压：" + "</div>" + that.con.waterPressure + "<br/>" +
            "<div class='grid-content'>" + "累计流量：" + "</div>" + that.con.waterMeterTotal + "<br/>" +
            "</div>" +
            "<div style='width:25%;height:310px'>" +
            "<img src='../../../static/image/fira.jpg' style='height:100%;'>" +
            "</div>" +
            "</div>" +
            "<div>" +
            "<button type='success' class='oyButton' onClick=\"task('" + idclose.slice(5, idclose.length) + "')\">" + "可视化" + "</button>" +
            "</div>" +
            "</div>"
        }
        let point = new BMap.Point(once, tewo);
        let infoWindow = new BMap.InfoWindow(idclose, opts); // 创建信息窗口对象 
        console.log(infoWindow);
        that.map.openInfoWindow(infoWindow, point); //开启信息窗口
        })
      })

    }
  }
}
		// $(function(){
		// 	window.task= function(value){
		// 		console.log(value)

		// 	}	
		// })
</script>



<style scoped="scoped">
#Edistribution {
  position: relative;
}
.shezhi {
  position: absolute;
  top: 0;
  right: 0;
}
.oYinp {
  margin: 5px 5px;
}
.oyButton {
  margin-left: 4px;
  margin-bottom: 5px;
}
.adad {
  color: red;
}

/* .totals{width: 400px;height: 300px;border: 1px solid red;}
	.totals .lefts{width: 50%;height: 200px;display: inline-block;}
	.totals .rights{width: 50%;height: 200px;display: inline-block;} */
/*.textareaWidth{width: 200px;}*/
</style>