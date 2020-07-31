<template>
	<div id="pageIndex">
		<el-row>
			<el-col :span="5">
				<div class="contrainerCont colorA">
					<el-row>
						<el-col :span="5"><div class="i"><i class="el-icon-goods"></i></div></el-col>
						<el-col :span="15">门店总量</el-col>
						<el-col :span="4">2</el-col>
					</el-row>
				</div>
			</el-col>
			<el-col :span="1">&nbsp;</el-col>
			<el-col :span="5">
				<div class="contrainerCont colorB">
					<el-row>
						<el-col :span="5"><div class="i"><i class="el-icon-mobile-phone"></i></div></el-col>
						<el-col :span="15">控制器信息</el-col>
						<el-col :span="4"></el-col>
					</el-row>
				</div>
			</el-col>
			<el-col :span="1">&nbsp;</el-col>
			<el-col :span="1">&nbsp;</el-col>
			<el-col :span="5">
				<div class="contrainerCont colorC">
					<el-row>
						<el-col :span="5"><div class="i"><i class="el-icon-view"></i></div></el-col>
						<el-col :span="15">读头信息</el-col>
						<el-col :span="4"></el-col>
					</el-row>
				</div>
			</el-col>
			<el-col :span="1">&nbsp;</el-col>
			<el-col :span="5">
				<div class="contrainerCont colorD">
					<el-row>
						<el-col :span="5"><div class="i"><i class="el-icon-setting"></i></div></el-col>
						<el-col :span="15">设备信息</el-col>
						<el-col :span="4"></el-col>
					</el-row>
				</div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="24">
				<div id="myChart" :style="{width: '100%%', height: '700px'}"></div>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	import Qs from 'qs'
	import axios from 'axios'
	import echarts from 'echarts'
	require('../../static/china.js')
	export default {
		name: 'pageIndex',
		data () {
		    return {
		    	CHINA_ALL_PROVINCES_INJECT:{
					'china':{name:'china',center:[116.41667,39.91667]},
					'北京':{name:'beijing',center:[116.24,39.55]},
					'天津':{name:'tianjin',center:[117.12,39.02]},
					'上海':{name:'shanghai',center:[121.29,31.14]},
					'重庆':{name:'chongqing',center:[106.54,29.59]},
					'河北省':{name:'hebei',center:[114.30,38.02]},
					'河南省':{name:'henan',center:[113.40,34,46]},
					'云南省':{name:'yunnan',center:[102.42,25.04]},
					'黑龙江省':{name:'heilongjiang',center:[126.36,45.44]},
					'湖南省':{name:'hunan',center:[112.59,28.12]},
					'安徽省':{name:'anhui',center:[117.17,31.52]},
					'山东省':{name:'shandong',center:[117.00,36.40]},
					'新疆维吾尔自治区':{name:'xinjiang',center:[87.36,43.45]},
					'江苏省':{name:'jiangsu',center:[118.46,32.03]},
					'浙江省':{name:'zhejiang',center:[120.10,30.16]},
					'浙江':{name:'zhejiang',center:[120.10,30.16]},
					'江西省':{name:'jiangxi',center:[115.55,28.40]},
					'湖北省':{name:'hubei',center:[114.17,30.35]},
					'广西壮族自治区':{name:'guangxi',center:[108.19,22.48]},
					'甘肃省':{name:'gansu',center:[103.51,36.04]},
					'山西省':{name:'shanxi',center:[112.33,37.54]},
					'内蒙古自治区':{name:'neimenggu',center:[111.41,40.48]},
					'陕西省':{name:'shanxi1',center:[108.57,34.17]},
					'吉林省':{name:'jilin',center:[125.19,43.54]},
					'福建省':{name:'fujian',center:[119.18,26.05]},
					'贵州省':{name:'guizhou',center:[106.42,26.35]},
					'广东省':{name:'guangdong',center:[113.14,23.08]},
					'青海省':{name:'qinghai',center:[101.48,36.38]},
					'西藏自治区':{name:'xizang',center:[91.08,29.39]},
					'四川省':{name:'sichuan',center:[104.04,30.40]},
					'宁夏回族自治区':{name:'ningxia',center:[106.16,38.27]},
					'海南省':{name:'hainan',center:[110.20,20.02]},
					'台湾':{name:'taiwan',center:[121.30,25.03]},
					'香港特别行政区':{name:'xianggang',center:[115.12,21.33]},
					'澳门特别行政区':{name:'aomen',center:[115.07,21.33]},
					'辽宁省':{name:'liaoning',center:[123.25,41.48]},
					'河北':{name:'hebei',center:[114.30,38.02]},
					'河南':{name:'henan',center:[113.40,34,46]},
					'云南':{name:'yunnan',center:[102.42,25.04]},
					'黑龙江':{name:'heilongjiang',center:[126.36,45.44]},
					'湖南':{name:'hunan',center:[112.59,28.12]},
					'安徽':{name:'anhui',center:[117.17,31.52]},
					'山东':{name:'shandong',center:[117.00,36.40]},
					'新疆':{name:'xinjiang',center:[87.36,43.45]},
					'江苏':{name:'jiangsu',center:[118.46,32.03]},
					'浙江':{name:'zhejiang',center:[120.10,30.16]},
					'浙江':{name:'zhejiang',center:[120.10,30.16]},
					'江西':{name:'jiangxi',center:[115.55,28.40]},
					'湖北':{name:'hubei',center:[114.17,30.35]},
					'广西':{name:'guangxi',center:[108.19,22.48]},
					'甘肃':{name:'gansu',center:[103.51,36.04]},
					'山西':{name:'shanxi',center:[112.33,37.54]},
					'内蒙古':{name:'neimenggu',center:[111.41,40.48]},
					'陕西':{name:'shanxi1',center:[108.57,34.17]},
					'吉林':{name:'jilin',center:[125.19,43.54]},
					'福建':{name:'fujian',center:[119.18,26.05]},
					'贵州':{name:'guizhou',center:[106.42,26.35]},
					'广东':{name:'guangdong',center:[113.14,23.08]},
					'青海':{name:'qinghai',center:[101.48,36.38]},
					'西藏':{name:'xizang',center:[91.08,29.39]},
					'四川':{name:'sichuan',center:[104.04,30.40]},
					'宁夏':{name:'ningxia',center:[106.16,38.27]},
					'海南':{name:'hainan',center:[110.20,20.02]},
					'台湾':{name:'taiwan',center:[121.30,25.03]},
					'香港':{name:'xianggang',center:[115.12,21.33]},
					'澳门':{name:'aomen',center:[115.07,21.33]},
					'辽宁':{name:'liaoning',center:[123.25,41.48]}
				},
				arr1:[
				     {name: '上海', value: 218},
				     {name: '昆山', value: 4},
				     {name: '宁波', value: 5},
				     {name: '湛江', value: 7},
				     {name: '揭阳', value: 2},
				     {name: '荣成', value: 4},
				     {name: '连云港', value: 2},
				     {name: '葫芦岛', value: 5},
				     {name: '常熟', value: 5},
				     {name: '东莞', value: 102},
				     {name: '河源', value: 4},
				     {name: '淮安', value: 6},
				     {name: '泰州', value: 4},
				     {name: '南宁', value: 4},
				     {name: '营口', value: 2},
				     {name: '惠州', value: 7},
				     {name: '江阴', value: 6},
				     {name: '蓬莱', value: 2},
				     {name: '韶关', value: 2},
				     {name: '嘉峪关', value: 6},
				     {name: '广州', value: 231},
				     {name: '深圳', value: 63},
				     {name: '珠海', value: 8},
				     {name: '宿迁', value: 8},
				     {name: '咸阳', value: 13},
				     {name: '铜川', value: 26},
				     {name: '平度', value: 14},
				     {name: '佛山', value: 51},
				     {name: '海口', value: 43},
				     {name: '江门', value: 7},
				     {name: '章丘', value: 6},
				     {name: '肇庆', value: 5},
				     {name: '大连', value: 31},
				     {name: '临汾', value: 1},
				     {name: '吴江', value: 5},
				     {name: '石嘴山', value: 2},
				     {name: '沈阳', value: 136},
				     {name: '苏州', value: 2},
				     {name: '南昌', value: 164},
				     {name: '柳州', value: 5},
				     {name: '三亚', value: 77},
				     {name: '自贡', value: 6},
				     {name: '吉林', value: 3},
				     {name: '阳江', value: 6},
				     {name: '泸州', value: 5},
				     {name: '西宁', value: 50},
				     {name: '宜宾', value: 1},
				     {name: '呼和浩特', value: 55},
				     {name: '成都', value: 158},
				     {name: '大同', value: 3},
				     {name: '镇江', value: 6},
				     {name: '桂林', value: 5},
				     {name: '张家界', value: 18},
				     {name: '宜兴', value: 5},
				     {name: '北海', value: 4},
				     {name: '西安', value: 44},
				     {name: '金坛', value: 6},
				     {name: '东营', value: 4},
				     {name: '牡丹江', value: 1},
				     {name: '遵义', value: 33},
				     {name: '绍兴', value: 67},
				     {name: '扬州', value: 61},
				     {name: '常州', value: 5},
				     {name: '潍坊', value: 3},
				     {name: '重庆', value: 169},
				     {name: '北京', value: 205},
				     {name: '徐州', value: 1},
				     {name: '衡水', value: 6},
				     {name: '包头', value: 5},
				     {name: '绵阳', value: 3},
				     {name: '乌鲁木齐', value: 135},
				     {name: '枣庄', value: 1},
				     {name: '杭州', value: 268},
				     {name: '淄博', value: 5},
				     {name: '鞍山', value: 1},
				     {name: '溧阳', value: 1},
				     {name: '库尔勒', value: 5},
				     {name: '安阳', value: 4},
				     {name: '开封', value: 11},
				     {name: '济南', value: 62},
				     {name: '德阳', value: 13},
				     {name: '温州', value: 68},
				     {name: '九江', value: 8},
				     {name: '邯郸', value: 11},
				     {name: '临安', value: 13},
				     {name: '兰州', value: 34},
				     {name: '沧州', value: 11},
				     {name: '临沂', value: 13},
				     {name: '南充', value: 13},
				     {name: '天津', value: 68},
				     {name: '富阳', value: 5},
				     {name: '泰安', value: 3},
				     {name: '诸暨', value: 1},
				     {name: '郑州', value: 15},
				     {name: '哈尔滨', value: 135},
				     {name: '聊城', value: 13},
				     {name: '芜湖', value: 1},
				     {name: '唐山', value: 6},
				     {name: '平顶山', value: 4},
				     {name: '邢台', value: 8},
				     {name: '德州', value: 2},
				     {name: '济宁', value: 7},
				     {name: '荆州', value: 9},
				     {name: '宜昌', value: 5},
				     {name: '义乌', value: 39},
				     {name: '丽水', value: 26},
				     {name: '洛阳', value: 16},
				     {name: '秦皇岛', value: 11},
				     {name: '株洲', value: 8},
				     {name: '石家庄', value: 10},
				     {name: '莱芜', value: 1},
				     {name: '常德', value: 5},
				     {name: '保定', value: 4},
				     {name: '湘潭', value: 8},
				     {name: '金华', value: 31},
				     {name: '岳阳', value: 5},
				     {name: '长沙', value: 156},
				     {name: '衢州', value: 11},
				     {name: '廊坊', value: 5},
				     {name: '菏泽', value: 4},
				     {name: '合肥', value: 29},
				     {name: '武汉', value: 123},
				     {name: '大庆', value: 13}
				],
				geoCoordMap:{
				    '上海':[121.48,31.22],
				    '昆山':[120.95,31.39],
				    '宁波':[121.56,29.86],
				    '湛江':[110.359377,21.270708],
				    '揭阳':[116.35,23.55],
				    '荣成':[122.41,37.16],
				    '连云港':[119.16,34.59],
				    '葫芦岛':[120.836932,40.711052],
				    '常熟':[120.74,31.64],
				    '东莞':[113.75,23.04],
				    '河源':[114.68,23.73],
				    '淮安':[119.15,33.5],
				    '泰州':[119.9,32.49],
				    '南宁':[108.33,22.84],
				    '营口':[122.18,40.65],
				    '惠州':[114.4,23.09],
				    '江阴':[120.26,31.91],
				    '蓬莱':[120.75,37.8],
				    '韶关':[113.62,24.84],
				    '嘉峪关':[98.289152,39.77313],
				    '广州':[113.23,23.16],
				    '深圳':[114.07,22.62],
				    '珠海':[113.52,22.3],
				    '宿迁':[118.3,33.96],
				    '咸阳':[108.72,34.36],
				    '铜川':[109.11,35.09],
				    '平度':[119.97,36.77],
				    '佛山':[113.11,23.05],
				    '海口':[110.35,20.02],
				    '江门':[113.06,22.61],
				    '章丘':[117.53,36.72],
				    '肇庆':[112.44,23.05],
				    '大连':[121.62,38.92],
				    '临汾':[111.5,36.08],
				    '吴江':[120.63,31.16],
				    '石嘴山':[106.39,39.04],
				    '沈阳':[123.38,41.8],
				    '苏州':[120.62,31.32],
				    '南昌':[115.89,28.68],
				    '柳州':[109.4,24.33],
				    '三亚':[109.511909,18.252847],
				    '自贡':[104.778442,29.33903],
				    '吉林':[126.57,43.87],
				    '阳江':[111.95,21.85],
				    '泸州':[105.39,28.91],
				    '西宁':[101.74,36.56],
				    '宜宾':[104.56,29.77],
				    '呼和浩特':[111.65,40.82],
				    '成都':[104.06,30.67],
				    '大同':[113.3,40.12],
				    '镇江':[119.44,32.2],
				    '桂林':[110.28,25.29],
				    '张家界':[110.479191,29.117096],
				    '宜兴':[119.82,31.36],
				    '北海':[109.12,21.49],
				    '西安':[108.95,34.27],
				    '金坛':[119.56,31.74],
				    '东营':[118.49,37.46],
				    '牡丹江':[129.58,44.6],
				    '遵义':[106.9,27.7],
				    '绍兴':[120.58,30.01],
				    '扬州':[119.42,32.39],
				    '常州':[119.95,31.79],
				    '潍坊':[119.1,36.62],
				    '重庆':[106.54,29.59],
				    '北京':[116.46,39.92],
				    '徐州':[117.2,34.26],
				    '衡水':[115.72,37.72],
				    '包头':[110,40.58],
				    '绵阳':[104.73,31.48],
				    '乌鲁木齐':[87.68,43.77],
				    '枣庄':[117.57,34.86],
				    '杭州':[120.19,30.26],
				    '淄博':[118.05,36.78],
				    '鞍山':[122.85,41.12],
				    '溧阳':[119.48,31.43],
				    '库尔勒':[86.06,41.68],
				    '安阳':[114.35,36.1],
				    '开封':[114.35,34.79],
				    '济南':[117,36.65],
				    '德阳':[104.37,31.13],
				    '温州':[120.65,28.01],
				    '九江':[115.97,29.71],
				    '邯郸':[114.47,36.6],
				    '临安':[119.72,30.23],
				    '兰州':[103.73,36.03],
				    '沧州':[116.83,38.33],
				    '临沂':[118.35,35.05],
				    '南充':[106.110698,30.837793],
				    '天津':[117.2,39.13],
				    '富阳':[119.95,30.07],
				    '泰安':[117.13,36.18],
				    '诸暨':[120.23,29.71],
				    '郑州':[113.65,34.76],
				    '哈尔滨':[126.63,45.75],
				    '聊城':[115.97,36.45],
				    '芜湖':[118.38,31.33],
				    '唐山':[118.02,39.63],
				    '平顶山':[113.29,33.75],
				    '邢台':[114.48,37.05],
				    '德州':[116.29,37.45],
				    '济宁':[116.59,35.38],
				    '荆州':[112.239741,30.335165],
				    '宜昌':[111.3,30.7],
				    '义乌':[120.06,29.32],
				    '丽水':[119.92,28.45],
				    '洛阳':[112.44,34.7],
				    '秦皇岛':[119.57,39.95],
				    '株洲':[113.16,27.83],
				    '石家庄':[114.48,38.03],
				    '莱芜':[117.67,36.19],
				    '常德':[111.69,29.05],
				    '保定':[115.48,38.85],
				    '湘潭':[112.91,27.87],
				    '金华':[119.64,29.12],
				    '岳阳':[113.09,29.37],
				    '长沙':[113,28.21],
				    '衢州':[118.88,28.97],
				    '廊坊':[116.7,39.53],
				    '菏泽':[115.480656,35.23375],
				    '合肥':[117.27,31.86],
				    '武汉':[114.31,30.52],
				    '大庆':[125.03,46.58]
				}
		    }
		},
		mounted(){
			this.getMap('myChart')
		},
		methods: {
			getMap:function(domId){
				let myChart = echarts.init(document.getElementById(domId));
				let data = this.arr1;
				let geoCoordMap = this.geoCoordMap;
				
				let convertData = function (data) {
				    var res = [];
				    for (var i = 0; i < data.length; i++) {
				        var geoCoord = geoCoordMap[data[i].name];
				        if (geoCoord) {
				            res.push({
				                name: data[i].name,
				                value: geoCoord.concat(data[i].value)
				            });
				        }
				    }
				    return res;
				};
				
				let option = {
				    backgroundColor: '#fff',
				    title: {
				        // text: '全国主要城市设备分布',
				        // // subtext: 'data from PM25.in',
				        // // sublink: 'http://www.pm25.in',
				        // left: 'center',
				        // textStyle: {
				        //     color: '#56c8f3'
				        // }
				    },
				    tooltip : {
				        trigger: 'item'
				    },
				    legend: {
				        orient: 'vertical',
				        y: 'bottom',
				        x:'right',
				        data:['设备'],
				        textStyle: {
				            color: '#56c8f3'
				        }
				    },
				    geo: {
				        map: 'china',
				        roam:false,
				        label: {
				        	show: false/*隐藏或显示省份名称*/
				        	// normal: {
				         //            show: true,
				         //            color:"#bbb"
				         //    },
				        },
				         emphasis: {
				                show: true,
				                color:"#56c8f3"
				         },
				        itemStyle: {
				            normal: {
				                areaColor: '#fff',
				                borderColor: '#111'
				            },
				            emphasis: {
				                areaColor: '#fff'
				            }
				        }
				    },
				    series : [
				        {
				            name: '设备',
				            type: 'scatter',
				            coordinateSystem: 'geo',
				            data: convertData(data),
				            symbolSize: function (val) {
				                return val[2] / 10;
				            },
				            label: {
				                normal: {
				                    formatter: '{b}',
				                    position: 'right',
				                    show: false
				                },
				                emphasis: {
				                    show: true
				                }
				            },
				            itemStyle: {
				                normal: {
				                    color: '#f58a20'
				                }
				            }
				        },
				        {
				            name: 'Top 5',
				            type: 'effectScatter',
				            coordinateSystem: 'geo',
				            data: convertData(data.sort(function (a, b) {
				                return b.value - a.value;
				            }).slice(0, 6)),
				            symbolSize: function (val) {
				                return val[2] / 10;
				            },
				            showEffectOn: 'render',
				            rippleEffect: {
				                brushType: 'stroke'
				            },
				            hoverAnimation: true,
				            label: {
				                normal: {
				                    formatter: '{b}',
				                    position: 'right',
				                    show: true/*图上的点对应的省份是否显示*/
				                }
				            },
				            itemStyle: {
				                normal: {
				                    color: '#f58a20',
				                    shadowBlur: 10,
				                    shadowColor: '#333'
				                }
				            },
				            zlevel: 1
				        }
				    ]
				};
				myChart.setOption(option);
			}
		}
	}
</script>

<style scoped="scoped">
	.contrainerCont{
		width: 100%;
		height: 80px;
		background-color: rgb(108, 203, 200);
		border-radius:10px;
		text-align: left;
		line-height: 80px;
		font-size: 24px;
		color: #FFFFFF;
	}
	.contrainerCont .el-col:nth-of-type(1){text-align: center;}
	.colorB{background-color: rgb(86, 200, 243)!important;}
	.colorC{background-color: rgb(248, 212, 71);}
	.colorD{background-color: rgb(254, 110, 96);}
	.i>i{padding:7px; border: 1px solid #FFFFFF;border-radius:50%;background-color: rgba(0,0,0,0.2);}
</style>