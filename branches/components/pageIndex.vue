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
				<div class='contrainerCont'>
					<div><img src="../../static/image/numzong (1).png"></img></div>
					<div>今年总收入</div>
				</div>
				<div>{{numtotals}}</div>
			</div>
			<div class='contrainerBox'>
				<div class='contrainerCont'>
					<div><img src="../../static/image/numzong (2).png" alt=""></div>
					<div>停车场总数</div>
				</div>
				<div class="devpos">{{this.parkingtitle}}</div>
			</div>
			<div class='contrainerBox'>
				<div class='contrainerCont'>
					<div><img src="../../static/image/numzong (3).png"></img></div>
					<div>设备总数</div>
				</div>
				<div class="devNum">{{this.$store.state.numtitle}}</div>
			</div>

			<div class='contrainerBox'>
				<div class='contrainerCont'>
					<div><img src="../../static/image/numzong (4).png"></img></div>
					<div>流量卡总数</div>
				</div>
				<div>544</div>
			</div>
			
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
				<div class="echartTitle">当天停车场车辆入场时间统计</div>
				<div id="line"></div>
			</el-col>
			<el-col :span="2"> &nbsp;</el-col>
			<el-col :span="11">
				<div class="echartTitle">流量卡使用情况(蛛网)</div>
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

	import Qs from 'qs'
	import axios from 'axios'
	import echarts from 'echarts'
	require('../../static/china.js')
	import {mapState,mapActions,mapGetters} from 'vuex'
	import {searchClicks} from './api/api.js'
	export default {
		name: 'pageIndex',
		data () {
		    return {
				alis:'',
				municipal:0,
				resident:0,
				business:0,
				parik:0,
				commerce:0,
				other:0,
				traffic:0,
				agricul:0,
				table:[],
				feel:0,
				apliay:0,
				wechat:0,
				cash:0,
				tequ:0,
				empty:0,
				one:0,
				two:0,
				three:0,
				four:0,
				five:0,
				six:0,
				seven:0,
				eight:0,
				nine:0,
				ten:0,
				eleven:0,
				twelve:0,
		    	num:{
		    		AbnorCount:'',
					cheCount:'',
					count:'',
					encloseCount:''
				},
				sanitation:'',
				landscaping:'',
				watercom:'',
				firemaster:'',
				paging:{
					page:1,
					pageSize:10,
					total:''
				},
				x:0,
				y:0,
				twotime:'',
				tableDatap:'',
				tableData:[],
				xAxis19:[],
				series18:[],
				arr:[],
				arr2:[],
				value15: '',
				value16: '',
				numtotals:''
		    }
		},
		watch:{
			 messArray_get : function(val){
				console.log(val)
				for(let i=0;i<val.length;i++){
					if(val[i].parking_lot_type==3){
						this.municipal+=1;
					}else if(val[i].parking_lot_type==1){
						this.resident+=1;
					}else if(val[i].parking_lot_type==2){
						this.business+=1;
					}else if(val[i].parking_lot_type==4){
						this.parik+=1;
					}else if(val[i].parking_lot_type==5){
						this.commerce+=1;
					}else if(val[i].parking_lot_type==6){
						this.other+=1;
					}else if(val[i].parking_lot_type==7){
						this.traffic+=1;
					}else{
						this.agricul+=1;
					}
				}
				this.table=[this.municipal,this.resident,this.business,this.parik,this.commerce,this.other,this.traffic,this.agricul]
				console.log(this.table)
				this.draw()
			},
			listup:function(val){
				console.log(val)
				var lcknum=0
				for(let i=0;i<val.length;i++){
					lcknum+=val[i].price
					if(val[i].pay_type==1){
						this.feel+=1;
					}else if(val[i].pay_type==2){
						this.apliay+=1;
					}else if(val[i].pay_type==3){
						this.wechat+=1;
					}else if(val[i].pay_type==8){
						this.tequ+=1;
					}else if(val[i].pay_type==8){
						this.cash+=1;
					}else{
						this.empty+=1
					}
					this.numtotals=lcknum
				}
					for(let i=0;i<val.length;i++){
						console.log(val[i].startdate.slice(5,7))
						if(val[i].startdate.slice(11,13)>0&&val[i].startdate.slice(11,13)<2){
							this.one+=1;
						}else if(val[i].startdate.slice(11,13)>2&&val[i].startdate.slice(11,13)<4){
							this.two+=1;
						}else if(val[i].startdate.slice(11,13)>4&&val[i].startdate.slice(11,13)<6){
							this.three+=1;
						}else if(val[i].startdate.slice(11,13)>6&&val[i].startdate.slice(11,13)<8){
							this.four+=1;
						}else if(val[i].startdate.slice(11,13)>8&&val[i].startdate.slice(11,13)<10){
							this.five+=1;
						}else if(val[i].startdate.slice(11,13)>10&&val[i].startdate.slice(11,13)<12){
							this.six+=1;
						}else if(val[i].startdate.slice(11,13)>12&&val[i].startdate.slice(11,13)<14){
							this.seven+=1;
						}else if(val[i].startdate.slice(11,13)>14&&val[i].startdate.slice(11,13)<16){
							this.eight+=1;
						}else if(val[i].startdate.slice(11,13)>16&&val[i].startdate.slice(11,13)<18){
							this.nine+=1;
						}else if(val[i].startdate.slice(11,13)>18&&val[i].startdate.slice(11,13)<20){
							this.ten+=1;
						}else if(val[i].startdate.slice(11,13)>20&&val[i].startdate.slice(11,13)<22){
							this.eleven+=1;
						}else{
							this.twelve+=1
						}
					}
					this.draw2()
					this.draw1()
			}
		},
		computed:{
			...mapState(['parkingtitle','typepayLIST']),
			...mapGetters(['messArray_get','listup'])
		},
		methods:{
			...mapActions(['parktitle','typepays']),
			draw(){
				let myChartCake = echarts.init(document.getElementById('cake'));
				let optionCake = {
			    title : {
			        text: '',
			        subtext: ""/*'纯属虚构'*/,
			        x:'center'
			    },
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
			        orient: 'horizontal',/*水平*/
			        left: 'center',/*居中*/
			        data: ['浙江','上海','成都','北京','郑州']
			    },
			    series : [
			        {
			            name: '访问来源',
			            type: 'pie',
			            radius : '55%',
			            center: ['50%', '60%'],
			            data:[
			                {value:this.resident, name:'居民小区'},
			                {value:this.municipal, name:'路测停车'},
			                {value:this.business, name:'商圈停车场'},
			                {value:this.parik, name:'公园景点'},
							{value:this.commerce, name:'商务楼宇'},
							{value:this.other, name:'其它'},
							{value:this.traffic, name:'交通枢纽'},
							{value:this.agricul, name:'市政设施'},
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
			draw1(){
				let myChartColumn = echarts.init(document.getElementById('column'));
				let optionColumn = {
			    xAxis: {
			        type: 'category',
			        data: ['支付宝支付', '微信支付', '无感支付', '现金支付', '特权']
			    },
			    yAxis: {
			        type: 'value'
			    },
			    legend: {
			       /* data: ['直接访问','邮件营销','联盟广告']*/
			    },
			    series: [{
			    	/*name:'流量卡使用情况',*/
			        data: [this.apliay,this.wechat,this.feel,this.cash,this.tequ],
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
			draw2(){
				let myChartLine = echarts.init(document.getElementById('line'));
				let optionLine = {
			    title: {
			        text: ''
			    },
			    tooltip: {
			        trigger: 'axis'
			    },
			    legend: {
			        /*data:['浙江','上海','温州','北京','郑州']*/
			    },
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
			    xAxis: {
			        type: 'category',
			        boundaryGap: true,
			        data: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
			    },
			    yAxis: {
			        type: 'value'
			    },
			    series: [
			        {
			            name:'',
			            type:'line',
			            stack: '总量',
						data:[this.one, this.two,this.three,this.four,this.five,this.six,this.seven,this.eight,this.nine, this.ten,this.eleven,this.twelve]
					},
					{
						name: '去年',
						type: 'bar',
						data: [1, 2, 3, 4, 4, 2]
					},
					{
						name: '今年',
						type: 'bar',
						data: [1, 2, 3, 4, 4, 2]
					},
					{
						name: '每月',
						type: 'bar',
						data: [1, 2, 3, 4, 4, 2]
					},
			        /*{
			            name:'',
			            type:'line',
			            stack: '总量',
			            data:[220, 182, 191, 234, 290, 330, 310]
			        },
			        {
			            name:'',
			            type:'line',
			            stack: '总量',
			            data:[150, 232, 201, 154, 190, 330, 410]
			        }*/
			    ],
			    /*color:['#95c53b','#4da6b1','#f28f27']*/
			};
			
		  	myChartLine.setOption(optionLine);
			}
		},
		mounted(){

			document.title=this.$route.meta.title;
			this.parktitle()
			this.typepays()
			console.log(this.typepayLIST)
			// console.log(JSON.parse(localStorage.getItem('usein')))
			// this.alis=JSON.parse(localStorage.getItem('usein'))
			// this.message=JSON.parse(localStorage.getItem('licks'))
			// this.message=this.ONEreslist
			// this.$store.dispatch('parktitle')
			
			// console.log(this.$store.state.ONEreslist)
			// console.log(this.parkingtitle)
			// this.$store.dispatch('typepays')
			
			// console.log(this.table)
			

			
			
			
			let myChartRadar = echarts.init(document.getElementById('radar'));
			let optionRadar = {
			    title: {
			        text: ''
			    },
			    tooltip: {},
			    legend: {
			        /*data: ['浙江','上海','温州','北京','郑州']*/
			    },
			    radar: {
			        // shape: 'circle',
			        name: {
			            textStyle: {
			                color: '#fff',
			                backgroundColor: '#999',
			                borderRadius: 3,
			                padding: [3, 5]
			           }
			        },
			        indicator: [
			           { name: '周一', max: 250},
			           { name: '周二', max: 250},
			           { name: '周三', max: 250},
			           { name: '周四', max: 250},
			           { name: '周五', max: 250},
			           { name: '周六', max: 250},
			           { name: '周日', max: 250}
			        ]
			    },
			    series: [{
			        name: '',
			        type: 'radar',
			        // areaStyle: {normal: {}},
			        data : [
			            {
			                value : [120, 132, 101, 134, 90, 230, 210],
			                name : ''
			            },
			            /*{
			                value : [220, 182, 191, 234, 290, 330, 310],
			                name : '联盟广告'
			            },
			            {
			                value : [150, 232, 201, 154, 190, 330, 410],
			                name : '视频广告'
			            }*/
			        ]
			    }],
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
	}
</script>

<style scoped="scoped">

*{
	font-family: "Microsoft Yahei", simsun, "Times New Roman", Times, serif;
}
.contrainer {
	height: 100%;
	position: relative;
	
}

.mapview-div {
	width: 50%;
	height:500px;
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
.contrainerDiv{
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		width: 96%;
		margin-bottom: 20px;
	}
	.contrainerDiv>div{width: 23%;margin-top: 20px;padding: 20px 0px;border-radius:10px;}
	.contrainerDiv>div:nth-of-type(1){background-color: #6ccbc8;}
	.contrainerDiv>div:nth-of-type(2){background-color: #56c8f3;}
	.contrainerDiv>div:nth-of-type(3){background-color: #f8d447;}
	.contrainerDiv>div:nth-of-type(4){background-color: #fe6e60;}
	.contrainerCont{display: flex;height: 40px;}
	.contrainerCont>div:nth-of-type(1){width: 38px;height: 38px;border: 1px solid #fff;border-radius: 19px;text-align: center;background-color: rgba(0,0,0,0.1);margin: 0 5px 0 10px;color: #fff;}
	.contrainerCont>div:nth-of-type(1)>i{margin: 11px 0;}
	.contrainerCont>div:nth-of-type(2){line-height: 38px;font-size:20px;}
	.contrainerCont img{width:100%;height: 100%;}
	.contrainerBox{display: flex;justify-content: space-between;color: #fff}
	.contrainerBox>div:nth-of-type(2){line-height: 38px;margin-right: 20px;font-size:20px;}
	.mapviewDiv{display: flex;}

	.mapName{
		width: 100%;
		height: 70px;
		display:-webkit-flex;
	    display:flex;
	    text-align: center;
	    align-items:center;
	    justify-content:space-around;
	    margin-top:40px;
	}
	.mapNameBox{
		width: 45%;
		height: 60px;
		background:#f4f3f4;
		border:1px solid #e5e5e5;
		border-radius: 0.25em;
		text-align: center;
		line-height: 60px;
		font-size: 16px;
		color:#2d353c;
	}
	#SalesStatistics{padding: 20px;}
.fa{width: 100%;}
#cake,#column,#line,#radar{width: 100%;height:300px;}
</style>