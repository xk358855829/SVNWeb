<template>
	<!-- <div id="SalesStatistics">

		<div class="boxA" style="display: flex;justify-content: space-between;color: #fff;margin: 0 auto;width: 96%; margin-bottom: 20px;">
			<div class='pois'>
				<div class="Boxl"><img src="../../../static/image/abc (3).png"></img></div>
				<div class='noclk'>
					<div style="font-size: 20px;">今年总收入</div>
					<div>{{numtotals}}<span>元</span></div>
				</div>
			</div>
			<div class='pois'>
				<div class="Boxl"><img src="../../../static/image/abc (4).png"></img></div>
				<div class='noclk'>
					<div style="font-size: 20px;">停车场总数</div>
					<div>{{this.parkingtitle}}<span>个</span></div>
				</div>
			</div>
			<div class='pois'>
				<div class="Boxl"><img src="../../../static/image/abc (2).png"></img></div>
				<div class='noclk'>
					<div style="font-size: 20px;">设备总数</div>
					<div>{{this.$store.state.numtitle}}<span>台</span></div>
				</div>
			</div>
			<div class='pois'>
				<div class="Boxl"><img src="../../../static/image/abc (1).png"></img></div>
				<div class='noclk'>
					<div style="font-size: 20px;">流量卡总数</div>
					<div>544<span>张</span></div>
				</div>
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
			 <div class="select">
				<span> 开始时间：</span>
				<el-date-picker
					v-model="search.startdate"
					type="date"
					placeholder="选择日期"
					value-format="yyyy-MM-dd"
					>
				</el-date-picker>
				<span> 结束时间：</span>
				<el-date-picker
					v-model="search.payTime"
					type="date"
					placeholder="选择日期"
					value-format="yyyy-MM-dd"
					>
				</el-date-picker>
				<span>停车场名称：</span>
				<el-select v-model="search.parkingName" placeholder="请选择">
					<el-option>未选择</el-option>
					<el-option v-for="item in apliyparkName" :key="item.parkingId" :label="item.parkingId" :value="item.parking_name"></el-option>
				</el-select>
			</div>
			<div class="select">
				<el-button type="success" class="oyButton" icon="el-icon-search" @click='searchClick'>查询</el-button>
			</div>
			<el-table class="oyTable" :data="tableData">
				<el-table-column label="序号" :index="indexMethod"  type="index" width="50"></el-table-column>
				<el-table-column label="停车场编号">
					<template slot-scope="scope">
							<el-popover trigger="hover" placement="top">
								<p  class="TsMaxWidth">{{ scope.row.parkingId }}</p>
								<div slot="reference" class="name-wrapper">
									<div class="overflowHide">{{ scope.row.parkingId }}</div>
								</div>
							</el-popover>
					</template>
				</el-table-column>
				<el-table-column label="停车场名称">
					<template slot-scope="scope">
							<el-popover trigger="hover" placement="top">
								<p  class="TsMaxWidth">{{ scope.row.parkingName }}</p>
								<div slot="reference" class="name-wrapper">
									<div class="overflowHide">{{ scope.row.parkingName }}</div>
								</div>
							</el-popover>
					</template>
				</el-table-column>
				<el-table-column label="收入">
					<template slot-scope="scope">
							<el-popover trigger="hover" placement="top">
								<p  class="TsMaxWidth">{{ scope.row.inCome }}元</p>
								<div slot="reference" class="name-wrapper">
									<div class="overflowHide">{{ scope.row.inCome }}元</div>
								</div>
							</el-popover>
					</template>
				</el-table-column>
				<el-table-column label="收入笔数">
					<template slot-scope="scope">
							<el-popover trigger="hover" placement="top">
								<p  class="TsMaxWidth">{{ scope.row.inComeCNT }}</p>
								<div slot="reference" class="name-wrapper">
									<div class="overflowHide">{{ scope.row.inComeCNT }}</div>
								</div>
							</el-popover>
					</template>
				</el-table-column>
				<el-table-column label="退款">
					<template slot-scope="scope">
							<el-popover trigger="hover" placement="top">
								<p  class="TsMaxWidth">{{ scope.row.refund }}</p>
								<div slot="reference" class="name-wrapper">
									<div class="overflowHide">{{ scope.row.refund }}</div>
								</div>
							</el-popover>
					</template>
				</el-table-column>
				<el-table-column label="退款笔数">
					<template slot-scope="scope">
							<el-popover trigger="hover" placement="top">
								<p  class="TsMaxWidth">{{ scope.row.refundCNT }}</p>
								<div slot="reference" class="name-wrapper">
									<div class="overflowHide">{{ scope.row.refundCNT }}</div>
								</div>
							</el-popover>
					</template>
				</el-table-column>
				<el-table-column label="日期">
					<template slot-scope="scope">
							<el-popover trigger="hover" placement="top">
								<p  class="TsMaxWidth">{{ scope.row.YM }}</p>
								<div slot="reference" class="name-wrapper">
									<div class="overflowHide">{{ scope.row.YM }}</div>
								</div>
							</el-popover>
					</template>
				</el-table-column>

			</el-table>
		</el-row>
	</div> -->
	<div>

	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	import echarts from 'echarts'
	import {mapState,mapActions,mapGetters} from 'vuex'
	import {searchClicks} from '../api/api.js'
	export default {
		name: 'equipmentList',
		data () {
		    return {
				search:{
					startdate:'',
					payTime:'',
					parkingName:''
				},
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
			}
		},
		computed:{
			...mapState(['parkingtitle','typepayLIST','apliyparkName','ONEreslist']),
			...mapGetters(['messArray_get','listup'])
		},
		methods:{
			...mapActions(['typepays','Alipay']),
			searchClick(){
				
				let that = this
				let params = {
					// parkingId : this.parkingId,
					// parkingName : this.parkingName,
					userId : localStorage.getItem('userId'),
					page : that.paging.page,
					pageSize : that.paging.pageSize,
					// is_del : 0,
					dealer:localStorage.getItem('dealer')
				}
				if(that.search.startdate){
				 	params.startdate = that.search.startdate
				}
				if(that.search.pay_time){
					params.pay_time = that.search.pay_time
				}
				if(that.search.parkingName){
					params.parkingName = that.search.parkingName
				}
				
				axios({
					method: 'post',
					url:`${this.$store.state.url}/bills/queryBills`,
					data: Qs.stringify(params)
				}).then(function(msg){
					let data = msg.data
					if(data.resCode === "0"){
						that.tableData = data.result
						that.paging.total = data.count
					}
				})
			},
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
		},
		mounted: function() {
			document.title=this.$route.meta.title;
			window.location.href="http://xlife.sokeed.com/#/parkLot"
		},
		// mounted(){

		// 	document.title=this.$route.meta.title;
			
		// 	this.typepays()
		// 	searchClicks('/feeOrder/orders',{page:1,
    //         pageSize:1000,is_del: 0,userId:localStorage.getItem('userId'),
		// 	dealer:localStorage.getItem('dealer')}).then(message=>{
		// 		if(message.data.resCode==0){
		// 			console.log(message)
		// 			let mesarr=message.data.result;
		// 			var lcknum=0
		// 			for(let i=0;i<mesarr.length;i++){
		// 				lcknum+=mesarr[i].price
		// 				if(mesarr[i].pay_type==1){
		// 					this.feel+=1;
		// 				}else if(mesarr[i].pay_type==2){
		// 					this.apliay+=1;
		// 				}else if(mesarr[i].pay_type==3){
		// 					this.wechat+=1;
		// 				}else if(mesarr[i].pay_type==6){
		// 					this.tequ+=1;
		// 				}else if(mesarr[i].pay_type==5){
		// 					this.cash+=1;
		// 				}else if(mesarr[i].pay_type==0){
		// 					this.empty+=1
		// 				}
		// 				this.numtotals=(lcknum).toFixed(2)
		// 			}
		// 			this.draw1()
		// 		}
		// 	})
		// 	let data={
		// 		page:1,
		// 		pageSize:1000,
		// 		userId:localStorage.getItem('userId'),
		// 		dealer:localStorage.getItem('dealer')
		// 	}
		// 	this.Alipay(data)
		// 	let val=this.ONEreslist
		// 	for(let i=0;i<val.length;i++){
		// 		if(val[i].parking_lot_type==3){
		// 			this.municipal+=1;
		// 		}else if(val[i].parking_lot_type==1){
		// 			this.resident+=1;
		// 		}else if(val[i].parking_lot_type==2){
		// 			this.business+=1;
		// 		}else if(val[i].parking_lot_type==4){
		// 			this.parik+=1;
		// 		}else if(val[i].parking_lot_type==5){
		// 			this.commerce+=1;
		// 		}else if(val[i].parking_lot_type==6){
		// 			this.other+=1;
		// 		}else if(val[i].parking_lot_type==7){
		// 			this.traffic+=1;
		// 		}else{
		// 			this.agricul+=1;
		// 		}
		// 	}
		// 	this.table=[this.municipal,this.resident,this.business,this.parik,this.commerce,this.other,this.traffic,this.agricul]
		// 	console.log(this.table)
		// 	this.draw()
		// 	console.log(this.typepayLIST)
			
			
		// 	// console.log(JSON.parse(localStorage.getItem('usein')))
		// 	// this.alis=JSON.parse(localStorage.getItem('usein'))
		// 	// this.message=JSON.parse(localStorage.getItem('licks'))
		// 	// this.message=this.ONEreslist
		// 	// this.$store.dispatch('parktitle')
			
		// 	// console.log(this.$store.state.ONEreslist)
		// 	// console.log(this.parkingtitle)
		// 	// this.$store.dispatch('typepays')
			
		// 	// console.log(this.table)
			

			
			
			
		// 	let myChartRadar = echarts.init(document.getElementById('radar'));
		// 	let optionRadar = {
		// 	    title: {
		// 	        text: ''
		// 	    },
		// 	    tooltip: {},
		// 	    legend: {
		// 	        /*data: ['浙江','上海','温州','北京','郑州']*/
		// 	    },
		// 	    radar: {
		// 	        // shape: 'circle',
		// 	        name: {
		// 	            textStyle: {
		// 	                color: '#fff',
		// 	                backgroundColor: '#999',
		// 	                borderRadius: 3,
		// 	                padding: [3, 5]
		// 	           }
		// 	        },
		// 	        indicator: [
		// 	           { name: '周一', max: 250},
		// 	           { name: '周二', max: 250},
		// 	           { name: '周三', max: 250},
		// 	           { name: '周四', max: 250},
		// 	           { name: '周五', max: 250},
		// 	           { name: '周六', max: 250},
		// 	           { name: '周日', max: 250}
		// 	        ]
		// 	    },
		// 	    series: [{
		// 	        name: '',
		// 	        type: 'radar',
		// 	        // areaStyle: {normal: {}},
		// 	        data : [
		// 	            {
		// 	                value : [120, 132, 101, 134, 90, 230, 210],
		// 	                name : ''
		// 	            },
		// 	            /*{
		// 	                value : [220, 182, 191, 234, 290, 330, 310],
		// 	                name : '联盟广告'
		// 	            },
		// 	            {
		// 	                value : [150, 232, 201, 154, 190, 330, 410],
		// 	                name : '视频广告'
		// 	            }*/
		// 	        ]
		// 	    }],
		// 	    /*color:['#95c53b','#4da6b1','#f28f27']*/
		// 	};
			
			
		//   	myChartRadar.setOption(optionRadar);
		// 	// setTimeout(function(){
		// 	// 	window.onresize = function () {
		// 	// 		// resizeWorldMapContainer();
		// 	// 		myChartCake.resize();
		// 	// 		myChartColumn.resize();
		// 	// 		myChartLine.resize();
		// 	// 		myChartRadar.resize();
		// 	// 	}
		// 	// },20)
			
		// }
	}
</script>

<style>
#SalesStatistics{padding: 20px;}
.fa{width: 100%;}
#cake,#column,#line,#radar{width: 100%;height:500px;}
	.contrainerDiv{
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		width: 96%;
		margin-bottom: 20px;
	}
	.boxA>div:nth-of-type(1){background-color: #6ccbc8;}
	.boxA>div:nth-of-type(2){background-color: #56c8f3;}
	.boxA>div:nth-of-type(3){background-color: #f8d447;}
	.boxA>div:nth-of-type(4){background-color: #fe6e60;}
	.pois{width: 23%;border-radius: 10px;display: flex;}
	.Boxl{margin:20px;}
	.noclk{text-align: right;width: 100%;font-size: 20px;margin-right:20px;line-height: 38px;}
	.noclk span{font-size: 14px;}
	/* .contrainerDiv>div{width: 23%;margin-top: 20px;border-radius:10px;}
	.contrainerDiv>div:nth-of-type(1){background-color: #6ccbc8;}
	.contrainerDiv>div:nth-of-type(2){background-color: #56c8f3;}
	.contrainerDiv>div:nth-of-type(3){background-color: #f8d447;}
	.contrainerDiv>div:nth-of-type(4){background-color: #fe6e60;}
	.contrainerCont{display: flex;height: 40px;}
	.contrainerCont>div:nth-of-type(1)>i{margin: 11px 0;}
	.contrainerCont>div:nth-of-type(2){line-height: 38px;font-size:20px;}
	.contrainerCont img{width:100%;height: 100%;}
	.contrainerBox{display: flex;justify-content: space-between;color: #fff}
	.contrainerBox>div:nth-of-type(2){line-height: 38px;margin-right: 20px;font-size:20px;}
	.pois{padding:20px 0!important;} */


</style>