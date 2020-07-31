<template>
	<div id="pageIndex">
		<div class="row toprow">
			<div class="col-sm-3 leftcol" >
				<div class="contrainerCont first colorA">
						<el-row>
						<el-col :span="8"><div class="i"><img src="../../static/image/ic1.png" alt=""></div></el-col>
						<el-col :span="16">
							<div class="fireTop">{{paging.total}}</div>
							<div class="fire">消防栓数量</div>
						</el-col>
						</el-row>
				</div>
				<div class="contrainerCont colorB">
					<el-row>
						<el-col :span="8"><div class="i"><img src="../../static/image/ic2.png" alt=""></div></el-col>
						<el-col :span="16">
							<div class="fireTop">{{twotime}}</div>
							<div class="fire">流量卡数量</div>
						</el-col>
					</el-row>
				</div>
				<div class="contrainerCont colorC">
					<el-row>
						<el-col :span="8"><div class="i"><img src="../../static/image/ic3.png" alt=""></div></el-col>
						<el-col :span="16">
							<div class="fireTop">{{threetimels}}</div>
							<div class="fire">电量报警</div>
						</el-col>
					</el-row>
				</div>
				<!-- <div class="contrainerCont colorD">
					<el-row>
						<el-col :span="5"><div class="i"><i class="el-icon-setting"></i></div></el-col>
						<el-col :span="15">异常报警</el-col>
						<el-col :span="4">{{num.encloseCount}}</el-col>
					</el-row>
				</div> -->
			</div>
			<!-- <div class="col-sm-6">
				<!-- <div class="echartTitle">设备使用率趋势</div> -->
				<!-- <div id="line"></div> -->
				<!-- <div id="main"></div> -->
			<!-- </div>  -->
			<div class="col-sm-3 bottomrightcol">
				<div id="lastoption"></div>
			</div>
			<div class="col-sm-3 rightcolnew">
				<el-table class='pint' :data="tableData" style="height:89%">
					<el-table-column label="设备编号">
						<template slot-scope="scope">
							<el-popover trigger="hover" placement="top">
								<p  class="TsMaxWidth">{{ scope.row.deviceId }}</p>
								<div slot="reference" class="name-wrapper">
									<div class="overflowHide" @click="elding3(scope.row)">{{ scope.row.deviceId }}</div>
								</div>
							</el-popover>
					</template>
					</el-table-column>
				</el-table>
				<div>
					<el-pagination
					background

					small
					:page-sizes="[1,2,3,4]"
					:page-size="6"

					@current-change="handleCurrentChange"
					@size-change="handleSizeChange" layout="prev, pager, next" :total="paging.total">
				</el-pagination>
				</div>
			</div>
			<div class="col-sm-3 rightcol">
				<div class="topcol">
					<!-- <div class="echartTitle">本周用水使用情况(柱状)</div> -->
					<div id="column"></div>
				</div>
				<div class="rightbot">
					<!-- <div id="cake"></div> -->
					<div class="cardtop"></div>
					<div id="card"></div>
				</div>
			</div>
		</div>
		<div class="row bottomrow">
			<div class="col-sm-1 leftbox">
				<div></div>
			</div>
			<div class="col-sm-5 bottomcol">
				<div id="cake"></div>
			</div>
			<div class="col-sm-1 middlebox">
				<div></div>
			</div>
			<!-- <div class="col-sm-3 bottomrightcol">
				<div id="lastoption"></div>
			</div> -->
			<div class="col-sm-5 rightcolnews lesscol">
				<!-- <el-table class='pint' :data="tableData" max-height="300px">
					<el-table-column label="设备编号">
						<template slot-scope="scope">
							<el-popover trigger="hover" placement="top">
								<p  class="TsMaxWidth">{{ scope.row.deviceId }}</p>
								<div slot="reference" class="name-wrapper">
									<div class="overflowHide" @click="elding3(scope.row)">{{ scope.row.deviceId }}</div>
								</div>
							</el-popover>
					</template>
					</el-table-column>
				</el-table> -->
				<div id="falut"></div>
			</div>
		</div>
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
					pageSize:6,
					total:''
				},
				x:0,
				y:0,
				threetimels:'',
				twotime:'',
				tableDatap:[],
				tableData:[],
				xAxis19:[],
				series18:[],
				arr:[],
				arr2:[],
				value15: '',
        		value16: '',
		    }
		},
		mounted(){
			// this.getMap('myChart')

			document.title=this.$route.meta.title;
			let that=this
			that.nice()
			let arr=[]
			 axios({
				method:"post",
				url:this.$store.state.http+'/fault/selecCount'
			}).then(function(message){
				
					console.log(message)
					console.log(1999999)
					for(var t=0;t<message.data.result.length;t++){
						that.arr.push(message.data.result[t].fauCode)
						that.arr2.push(message.data.result[t].count)
					}
					console.log(that.arr)
					let falustsl = echarts.init(document.getElementById('falut'));
					let falusts={
						 color: ['#3398DB'],
						tooltip : {
							trigger: 'axis',
							axisPointer : {            // 坐标轴指示器，坐标轴触发有效
								type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
							}
						},
						xAxis : [
							{
								type : 'category',
								data :  that.arr,
								axisTick: {
									alignWithLabel: true
								},
								axisLabel : {//坐标轴刻度标签的相关设置。
								formatter : function(params){
								var newParamsName = "";// 最终拼接成的字符串
											var paramsNameNumber = params.length;// 实际标签的个数
											var provideNumber = 4;// 每行能显示的字的个数
											var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
											/**
											 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
											 */
											// 条件等同于rowNumber>1
											if (paramsNameNumber > provideNumber) {
												/** 循环每一行,p表示行 */
												for (var p = 0; p < rowNumber; p++) {
													var tempStr = "";// 表示每一次截取的字符串
													var start = p * provideNumber;// 开始截取的位置
													var end = start + provideNumber;// 结束截取的位置
													// 此处特殊处理最后一行的索引值
													if (p == rowNumber - 1) {
														// 最后一次不换行
														tempStr = params.substring(start, paramsNameNumber);
													} else {
														// 每一次拼接字符串并换行
														tempStr = params.substring(start, end) + "\n";
													}
													newParamsName += tempStr;// 最终拼成的字符串
												}

											} else {
												// 将旧标签的值赋给新标签
												newParamsName = params;
											}
											//将最终的字符串返回
											return newParamsName
									}
								},
							}
						],
						yAxis : [
							{
								type : 'value'
							}
						],
						series : [
							{
								name:'直接访问',
								type:'bar',
								barWidth: '60%',
								data:that.arr2
							}
						]
					}
					falustsl.setOption(falusts);
					setTimeout(function (){
						window.onresize = function () {
							falustsl.resize();
						}
	        		},200)
				
			})
			that.htime = [String(new Date().getFullYear()),String((new Date().getMonth())<=9?'0'+(new Date().getMonth()):(new Date().getMonth())),String(new Date().getDate()<=9?'0'+(new Date().getDate()):(new Date().getDate())),String(new Date().getHours()<=9?'0'+(new Date().getHours()):(new Date().getHours())),String(new Date().getMinutes()<=9?'0'+(new Date().getMinutes()):(new Date().getMinutes()))];
        	that.wtime = [String(new Date().getFullYear()),String((new Date().getMonth()+1)<=9?'0'+(new Date().getMonth()+1):(new Date().getMonth()+1)),String(new Date().getDate()<=9?'0'+(new Date().getDate()):(new Date().getDate())),String(new Date().getHours()<=9?'0'+(new Date().getHours()):(new Date().getHours())),String(new Date().getMinutes()<=9?'0'+(new Date().getMinutes()):(new Date().getMinutes()))];
        // this.ktime = [String(new Date().getFullYear()),String((new Date().getMonth()+1)<=9?'0'+(new Date().getMonth()+1):(new Date().getMonth()+1)),String(new Date().getDate()<=9?'0'+(new Date().getDate()):(new Date().getDate()))]
			let series5=[];
            let xAxis6=[];
           	let data={
                devId:53998641,
                end:that.wtime[0]+'-'+that.wtime[1]+'-'+that.wtime[2]+'T00:00:00',
                start:that.htime[0]+'-'+that.htime[1]+'-'+that.htime[2]+'T00:00:00'
                    }
                        console.log(data)
                        console.log(77777333333333)
                        let series4=[];
						 let xAxis3=[];
						 axios({
							method:'post',
							url:this.$store.state.http+'/Datapoints/getHistoryData',
							data:Qs.stringify(data)
						}).then(function(res){
							console.log(res);
								if(res.data.resCode==0){
									let waters=JSON.parse((res.data.errMsg).slice(6))
                                    console.log(waters);
                                    for(let i=0;i<waters.data.datastreams.length;i++){
                                        if(waters.data.datastreams[i].id=="2006"){
                                            let water=waters.data.datastreams[i].datapoints;
                                            console.log(water);
                                            console.log(789789)
                                            console.log(water.length);
                                            for(let j=0;j<water.length;j++){
                                                console.log(water[j].at.slice(0,10))
                                            xAxis6.push(water[j].at.slice(0,10));
                                            series5.push(water[j].value);
                                            }
                                            console.log(xAxis3);
                                            console.log(series4);
                                        ({
                             				series: [{
                                                    data: series5,
                                                    type: 'bar',
                                                    barWidth : 16,
                                                    itemStyle:{
                                                    normal:{
                                                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                                            offset: 0,
                                                            color: "#6577fe" // 0% 处的颜色
                                                        },{
                                                            offset: 1,
                                                            color: "#4896ff" // 100% 处的颜色
                                                        }], false)
                                                    }
                                                }
                                                }]
                                                })// 绘制图表
                                        }else{
                                            
										}
									}
								}
							})
			// let myChartLine = echarts.init(document.getElementById('line'));
			
			// let abc = echarts.init(document.getElementById('card'));
			
			
			// let cmd = echarts.init(document.getElementById('lastoption'));
			
			let myChartColumn = echarts.init(document.getElementById('column'));
			let optionColumn = {
			    xAxis: {
			        type: 'category',
			        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
			    },
			    yAxis: {
			        type: 'value'
			    },
			    legend: {
			       data: ['直接访问','邮件营销','联盟广告']
			    },
			    series: [{
			    	/*name:'流量卡使用情况',*/
			        data: [120, 132, 101, 134, 90, 230, 210],
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
			setTimeout(function (){
				window.onresize = function () {
					myChartColumn.resize();
				}
			},200)
			// myChartCake.setOption(optionCake);
			// abc.setOption(optionCard);
			// this.getNumber();
				this.searchClick()
				this.address = 0;
				let datap = {
					userId:sessionStorage.getItem('userId'),
					Page:this.paging.page,
					PageSize:this.paging.pageSize,
				};
				datap.userId=sessionStorage.getItem('userId')
				datap.dealer=sessionStorage.getItem('dealer');
				console.log(data)
				that.tableDatap = [];
				axios({
					method:'post',
					url:this.$store.state.http +'/viccid/lists',
					data:Qs.stringify(datap)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						that.twotime= message.data.count;
						console.log(that.tableDatap)
					}else{
						that.tableDatap = [];
					}
				})
				
				let daty=[]
				axios({
					method:"post",
					url:that.$store.state.http+'/devices/accurate'
					// data:Qs.stringify()
				}).then(function(message){
					console.log(message);
					let x=0;
					let y=0;
					for(var o=0;o<message.data.data.devices.length;o++){
						if(message.data.data.devices[o].online){
							that.x++
							
						}else{
							that.y++
							
						}
						that.xs='在线'
						that.ys='离线'
					}
					var itexian=[
						{
						name:that.xs,
						value:that.x
						},
						{
						name:that.ys,
						value:that.y
						}
					]
					console.log(that.xs,that.ys)
					daty.push(that.xs,that.ys)
					let myChart5 = echarts.init(document.getElementById('cake'));
					myChart5.setOption({
							title : {
								text: '消防栓设备网络状态',
								subtext: ""/*'纯属虚构'*/,
								x:'center',
								padding:[15,0,12,0],
								textStyle:{
									fontSize:45,
									fontStyle:'bold',
									fontFamily:'PingFang-SC-regula',
									color:'#303030'
								}
							},
							tooltip : {
								trigger: 'item',
								formatter: "{a} <br/>{b} : {c} ({d}%)"
							},
							legend: {
								// orient: 'vertical',
								orient: 'vertical',/*水平*/
								left: 'left',/*居中*/
								data: daty
							},
							series : [
								{
									name: '访问来源',
									type: 'pie',
									radius : '55%',
									center: ['50%', '60%'],
									data:itexian,
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
				let datat = {
					page:this.paging.page,
					pageSize:100000000,
				};
				datat.userId=sessionStorage.getItem('userId');
				datat.dealer=sessionStorage.getItem('dealer');
				if(data.dealer==0){
					data.dealer=sessionStorage.getItem('orderDealers')
				}

				console.log(datat)
				axios({
					method:'post',
					url:this.$store.state.http +'/user/list',
					data:Qs.stringify(datat)
				}).then(function(message){
					console.log(message)
					let firemaster=0;
					let watercom=0;
					let landscaping=0;
					let sanitation=0;
					let datak=[]
					let dataks=[]
					if(message.data.resCode==0){
						for(var u=0;u<message.data.result.length;u++){
							if(message.data.result[u].roleName=="消防队"){
								that.firemaster++;
								that.firemasters="消防队"
							}else
							if(message.data.result[u].roleName=="水司"){
								that.watercom++
								that.watercoms="水司"
							}else
							if(message.data.result[u].roleName=="园林"){
								that.landscaping++
								that.landscapings="园林"
							}
							if(message.data.result[u].roleName=="环卫"){
								that.sanitation++
								that.sanitations="环卫"
							}
						}
						console.log(that.firemaster)
						var itemnums=[
							{
						 	name:that.firemasters,
						 	value:that.firemaster
							},{
						 	name:that.watercoms,
						 	value:that.watercom
							},{
						 	name:that.landscapings,
						 	value:that.landscaping
							},{
						 	name:that.sanitations,
						 	value:that.sanitation
							},
						]
						datak.push(that.firemaster,that.watercom,that.landscaping,that.sanitation)
						
						dataks.push(that.firemasters,that.watercoms,that.landscapings,that.sanitations)
						let myChart4 = echarts.init(document.getElementById('card'))
						myChart4.setOption({
							tooltip: {
								trigger: 'item',
								formatter: "{a} <br/>{b}: {c} ({d}%)"
							},
							legend: {
								orient: 'vertical',
								x: 'left',
								data:dataks
							},
							series: [
								{
									name:'访问来源',
									type:'pie',
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
									data:itemnums
								}
							]
						})
					}else{
						
					}
				})
			
		
			
		},
		methods: {
			searchClick(){
				let dataF = {
					pageNum:this.paging.page,
					pageSize:this.paging.pageSize
				};
				dataF.userId=sessionStorage.getItem('userId'),
				dataF.dealer=sessionStorage.getItem("dealer")
				if(dataF.dealer==0){
					dataF.dealer=sessionStorage.getItem('orderDealers')
				}
				let that=this;
				console.log(dataF);
				that.tableData = [];
				console.log(123)
				axios({
					method:'post',
					url:this.$store.state.http+'/devices/conditionFind',
					data:Qs.stringify(dataF)
				}).then(function(message){
					console.log(message)
					if(message.data.resCode==0){
						that.tableData=message.data.result;
						that.paging.total = message.data.result2;	
						console.log(that.tableData)
						that.sa()
				
					}else{
						that.tableData = [];
						that.paging.total = message.data.result2;
					}
				})
			},
			handleSizeChange(val){
				console.log(val)
				
				console.log(this.paging.pageSize)
				this.searchClick();
			},
			handleCurrentChange(val){
				this.paging.page = val;
				console.log(val)
				this.searchClick();
			},
			nice(){
				let data = {
					pageNum:this.paging.page,
					pageSize:this.paging.pageSize,
				};
				data.userId=sessionStorage.getItem('userId')
				if(sessionStorage.getItem('dealer')==0){
					console.log(890)
					data.dealer=sessionStorage.getItem('orderDealers')
				}else{
					data.dealer=sessionStorage.getItem('dealer')
				}
				console.log(data)
				let that = this;
				that.tableData = [];
				axios({
					method:'post',
					url:this.$store.state.http +'/fault/list',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						that.threetimels = message.data.count;
					}else{
						that.tableData = [];
					}
				})
			},
    		sa(){
				let that=this;
				let series37=[];
				 let xAxis16=[];
				let datas={
					devId:that.tableData[0].deviceId,
					start:that.common.getNowFormatDatenew(),
					end:that.common.getNowFormatDate()
				}
				console.log(datas)
				 axios({
					method:"post",
					url:that.$store.state.http+'/Datapoints/getHistoryData',
					data:Qs.stringify(datas)
				}).then(function(message){
					let waters=message.data.errMsg
					console.log(waters);
					for(let i=0;i<waters.data.datastreams.length;i++){
						if(waters.data.datastreams[i].id=="2006"){
							let water=waters.data.datastreams[i].datapoints;
							console.log(water);
							console.log(water.length);
							for(let j=0;j<water.length;j++){
								console.log(water[j].at.slice(0,10))
									xAxis16.push(water[j].at.slice(0,19));
									series37.push(water[j].value);
									}
								}else{
									
								}
							}
							let myChart3 = echarts.init(document.getElementById('lastoption'));
								// 绘制图表
							myChart3.setOption({
							dataZoom: [
								{
									show: true,
									realtime: true,
									start: 65,
									end: 85
								},
								{
									type: 'inside',
									realtime: true,
									start: 65,
									end: 85
								}
							],
							tooltip : {
								trigger: 'axis',
								axisPointer: {
									type: 'cross',
								}
							},
							xAxis : [
								{
									type : 'category',
									boundaryGap : false,
													data:xAxis16.map(function (str) {
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
										name:'电压',
										type:'line',
									
							

										markArea: {
										
									
										},
										data:series37
									},

								]
							});
						})
			},
			elding3(row){
				let series18=[];
 				let xAxis19=[];
				let that=this;
				let dataw={
					devId:row.deviceId,
					start:this.common.getNowFormatDatenew(),
					end:this.common.getNowFormatDate()
				}
				console.log(dataw)
				 axios({
					method:"post",
					url:this.$store.state.http+'/Datapoints/getHistoryData',
					data:Qs.stringify(dataw)
				}).then(function(message){
					let waters=message.data.errMsg
					console.log(waters);
					for(let i=0;i<waters.data.datastreams.length;i++){
						if(waters.data.datastreams[i].id=="2001"){
							let water=waters.data.datastreams[i].datapoints;
							console.log(water);
							console.log(water.length);
							for(let j=0;j<water.length;j++){
								console.log(water[j].at.slice(0,10))
							xAxis19.push(water[j].at.slice(0,19));
							series18.push(water[j].value);
							}
						}else{
							
						}
					}
					let mv = echarts.init(document.getElementById('lastoption'));
						// 绘制图表
					let myChart3 =({
					dataZoom: [
						{
							show: true,
							realtime: true,
							start: 65,
							end: 85
						},
						{
							type: 'inside',
							realtime: true,
							start: 65,
							end: 85
						}
					],
					 tooltip : {
						trigger: 'axis',
						axisPointer: {
							type: 'cross',
						}
					},
					xAxis : [
						{
							type : 'category',
							boundaryGap : false,
											data:xAxis19.map(function (str) {
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
								name:'电压',
								type:'line',
							
					

								markArea: {
								
							
								},
								data:series18
							},

						]
					});
					mv.setOption(myChart3);
					setTimeout(function (){
						window.onresize = function () {
							mv.resize();
						}
					},200)
				})
			}
		}
	}
</script>

<style scoped="scoped">
	#pageIndex{padding: 20px;background-color: #eeeeee;}
	.contrainerCont{
		width: 74%;
		height: 90px;
		background-color: rgb(255, 255, 255);
		/* border-radius:10px; */
		text-align: left;
		line-height: 90px;
		font-size: 16px;
		color: #999;
		margin-top:50px;
		margin-right: 13%;
		margin-left: 13%;
	}
	.contrainerCont .el-col:nth-of-type(1){text-align: center;}
	.colorB{background-color: rgb(255, 255, 255)!important;}
	.colorC{background-color: rgb(255, 255, 255);}
	.colorD{background-color: rgb(255, 255, 255);}
	.i>img{padding:14px; border: 1px solid #68b828;border-radius:50%;background-color:#68b828;margin-left:10px;vertical-align: middle;}
	.centerediv{height: 90px;background: #999;width: 100%;}
	.row {
		width: 100%;
		margin-left: -15px;
		margin-right: -15px;
	}

	#column{width: 100%;height:200px;}
	#falut{width: 100%;height: 400px;}
	#card{width: 100%;height: 171px;}
	.first{margin-top:0}
	#cake{width: 100%;height: 100%;display: inline-block;}
	#lastoption{width: 100%;height: 370px;}
	.rightbot{background: #fff;}
	@media (min-width: 768px){
		.leftcol{
			float: left;
			width: 21%;
		}
		.rightcol{
			float: right;
			width: 26%;
		}
		.col-sm-6{
			float: left;
			width: 50%;
		}
		.bottomcol{
			float: left;
			width: 47%;
			height: 100%;
			background:#fff;
		}
		.bottomrightcol{
			float: left;
			width: 36%;
			height:370px;
			background:#fff;
		}
		.rightcolnew{
			float: left;
			width: 14%;
			height:370px;
			background:#fff;
		}
		.rightcolnews{
			float: left;
			width: 54%;
			height:400px;
			background:#fff;
		}
		.lesscol{
			width: 48%!important;
		}
		.toprow{
			height: 410px;
		}
		.bottomrow{
			height: 400px;
		}
	}
	.topcol{
		height: 171px;
		background:#fff;
		margin-bottom: 8%;
	}
	.i2{
		width: 100%;
		height: 90px;;
	}
	#main{background:#fff;margin:0 auto;height: 370px;}
	.fireTop{
		width: 100%;
		height:60px;text-align: center;line-height: 65px;font-size: 22px;
	}
	.fire{width: 100;height:30px;text-align: center;line-height: 0px;font-size: 14px;}
	.middlebox{width: 2.5%;height: 100%;float: left;}
	.leftbox{width: 2.5%;height: 100%;float: left;}
	.pint{cursor: pointer;}
</style>