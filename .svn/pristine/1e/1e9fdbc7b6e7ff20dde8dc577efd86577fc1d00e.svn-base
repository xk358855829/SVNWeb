<template>
	<div id="faultList">
		<div class="header">
			<div class="headerTitle">
				<span>现金支付</span>
			</div>
		</div>
		<!-- <div class="select">
			<span>车牌号码：</span>
			<el-input v-model="search.carNumber" clearable placeholder="请输入内容"></el-input>
			<el-button type="success" class="oyButton" icon="el-icon-search" @click='searchClick'>查询</el-button>
		</div> -->
		<div style="text-align:center;margin-bottom:70px;margin-top:70px">
			<span style="font-size:20px">车牌号码：</span>
			<el-input v-model="search.carNumber" clearable placeholder="请输入内容"></el-input>
			<el-button type="success" class="oyButton" icon="el-icon-search" @click='searchClick'>查询</el-button>
		</div>
		<div class="Content">
			<!-- <p class="title">越秀维多利中心停车场</p> -->
			<!-- <p class="parknum">当前车辆：浙A123456</p> -->
			<div v-if="dishow==5" class="order identical">停车场名称：{{paking_lot_name}}</div>
			<div v-if="dishow==1" class="order identical">停车场名称：xxxxx</div>
			<div class="identical">
				<p v-if="dishow==5">入场时间：{{startdate}}</p>
				<p v-if="dishow==1">入场时间：xxxxx</p>
				<p v-if="dishow==5" class="last">停车时长：{{longdate}}</p>
				<p v-if="dishow==1" class="last">停车时长：xxxxx</p>
			</div>
			<div class="identical">
				<p v-if="dishow==5">已付金额：{{paid_price}}</p>
				<p v-if="dishow==1">已付金额：xxxxx</p>
				<p v-if="dishow==5" class="last">优惠金额：{{onsale_price}}</p>
				<p v-if="dishow==1" class="last">优惠金额：xxxxx</p>
			</div>
			<div class="identical">
				<p v-if="dishow==5">停车费用：{{price}}</p>
				<p v-if="dishow==1">停车费用：xxxxx</p>
				<p v-if="dishow==5" class="last">超时时间：{{time_out}}</p>
				<p v-if="dishow==1" class="last">超时时间：xxxxx</p>
			</div>
			<div class="identical">
				<p><el-checkbox @change="changeboxticket"></el-checkbox>
			是否使用优惠券</p>
				<p class="last">输入优惠券码：<el-input style="width:200px;margin-left:-50px;" v-model="ticket"></el-input></p>
			</div>
			<!-- <p class="total">费用总计：{{price}}元</p> -->
			<div class="pay identical" style="margin-top:40px;" v-if="changehuan==2" @click="changeClick">支付</div>
			<div class="pay identical" style="margin-top:40px;" v-if="changehuan==1">支付</div>
		</div>
		<!-- <el-dialog title="现金支付" :visible.sync="universal.change">
			<div>
				<span class="spanClass">车牌号码：</span>
				<el-input :disabled="true" v-model="change.carnumber" clearable placeholder="请输入内容"></el-input><br /><br />
				<span class="spanClass">应付金额：</span>
				<el-input :disabled="true" v-model="change.price" clearable placeholder="请输入内容"></el-input><br /><br />
				
				<span class="spanClass">付款金额：</span>
				<el-input :disabled="false" v-model="change.paid_price" clearable placeholder="请输入内容" @blur="focus6()"></el-input><br /><br />

				<span class="spanClass">停车时长：</span>
				<el-input :disabled="true" v-model="change.longdate" clearable placeholder="请输入内容"></el-input><br /><br />

				<span class="spanClass">入场时间：</span>
				<el-input :disabled="true" v-model="change.startdate" clearable placeholder="请输入内容"></el-input><br /><br />
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="hideclick">取消</el-button>
				<el-button type="success" class="oyButton" @click="changeClick">支付</el-button>
			</div>
		</el-dialog>
		<div class="footer">
			<el-pagination background @current-change="handleCurrentChange"  @size-change="handleSizeChange" :current-page.sync="paging.page" :page-sizes="[1,2,3,10,11,12]" :page-size="paging.pageSize" layout="sizes, prev, pager, next, jumper,total" :total="paging.total"></el-pagination>
		</div> -->
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	import {searchClicks} from '../api/api.js'
	export default {
		name: 'equipmentList',
		data() {
			return {
				changehuan:2,
				dishow:1,
				choseticket:'',
				obj:[],
				numw:[],
				ticket:'',
				numvalue:[],
				universal:{
					change:false
				},
				paging:{
					page:1,
					pageSize:10,
					total:0
				},
				tableData:[],
				search:{
					carNumber:'',
				},
				onsale_price:'',
				paid_price:'',
				longdate:'',
				startdate:'',
				paking_lot_name:'',
				carnumber:'',
				numlost:1
			}
		},
		mounted: function() {
			document.title=this.$route.meta.title;
		},
		methods: {
			focus6(){
				if(!(/[\u4e00-\u9fa5]+/).test(this.change.paid_price)&&this.change.paid_price!=''){ 
						this.change.paid_price=this.change.paid_price+'元'
				}
			},
			changeboxticket(val){
				console.log(val)
				if(val){
					// if(this.ticket==''){
						
					// }else{
					// 	let data={
					// 		ticketNumber:this.ticket,
					// 		carNumber:this.carnumber,
					// 	}	
					// }
					this.numlost=0
				}else{
					this.numlost=1
				}
			},
			hideclick(){
				this.universal.change = false
			},
			indexMethod(index) {
        		return index + (this.paging.page-1)*this.paging.pageSize+1;
    		},
			handleSizeChange(val){
				this.paging.pageSize = val;
				/*console.log(this.paging.pageSize)*/
				this.searchClick();
			},
			handleCurrentChange(val){
				this.searchClick();
			},
			changeShow(row){
				this.universal.change = true;
				this.change.price=row.price+'元'
				this.change.paid_price=row.paid_price+'元'
				this.change.longdate=row.longdate
				this.change.startdate=row.startdate
				this.change.carnumber=row.carnumber
				console.log(row)
			},
			changeClick(){
				if(this.price==0){
					this.$message({
						message: '无需支付，请驶离停车场',
						type: 'success'
					});
					return false;
				}

				if(this.carnumber==''){
					this.$message.error('请查询车牌详情再付款！');
					return false;
				}
				console.log(this.carnumber)
				let data={}
				if(this.numlost==0){
					if(this.ticket==''){
						this.$message.error('优惠券码不能为空');
						return false;
					}else{
						let dataS={
							carNumber:this.carnumber,
							isTicket:this.numlost,
							ticketNumber:this.ticket
						}
						searchClicks('/cash/giveSale',dataS).then(res=>{
							console.log(res)
							if(res.data.fun=='no'){
								this.$message({
									message: '优惠券不存在,请核实',
									type: 'error'
								});
							}else{
								console.log(res.data.price)
								this.$confirm('支付金额'+res.data.price+'元，是否继续?', '提示', {
									confirmButtonText: '确定',
									cancelButtonText: '取消',
									type: 'warning'
								}).then(() => {
									searchClicks('/cash/payByCash',dataS).then(res=>{
										if(res.data.resCode==0){
											this.$message({
												message: '支付成功',
												type: 'success'
											});
											this.searchClick();
											this.ticket=''
											this.changehuan=1
										}else{
											this.$message({
												message: '支付失败',
												type: 'error'
											});
										}
									})
								}).catch(() => {
									this.$message({
										type: 'info',
										message: '已取消支付'
									});
								});
							}
						})
					}
				}else if(this.numlost==1){
					data.carNumber=this.carnumber
					data.isTicket=this.numlost
					searchClicks('/cash/payByCash',data).then(res=>{
						if(res.data.resCode==0){
							this.$message({
								message: '支付成功',
								type: 'success'
							});
							this.searchClick();
							this.ticket=''
							this.changehuan=1
						}else{
							this.$message({
								message: '支付失败',
								type: 'error'
							});
						}
					})
				}
			},
			searchClick(){
				if(this.search.carNumber==''){
					this.$message.error('查询车牌不能为空');
					return false;
				}
				let data = {
					page:this.paging.page,
					pageSize:this.paging.pageSize,
				};
				if(this.search.carNumber){
					data.carNumber = this.search.carNumber
				}
				
				console.log(data)
				let that = this;
				that.tableData = [];
				axios({
					method:'post',
					url:'http://39.104.113.112:2088/cash/queryFee',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message)
					
					if(message.data.resCode==-1){
						that.$message({
				        	message: message.data.remake,
				        	type: 'error'
						});
						// that.onsale_price=message.data.onsale_price
						// that.paid_price=message.data.paid_price
						// that.longdate=message.data.longdate
						// that.startdate=message.data.startdate
						// that.startdate=message.data.paking_lot_name
					}else{
						that.changehuan=2
						// that.tableData=[]
						// that.$message({
				        // 	message: '已支付，请在规定时间驶离停车场',
				        // 	type: 'success'
						// });
						that.dishow=5;
						that.onsale_price=message.data.onsale_price+'元'
						that.paid_price=message.data.paid_price+'元'
						that.longdate=message.data.longdate
						that.startdate=message.data.startdate
						that.paking_lot_name=message.data.paking_lot_name
						that.time_out=message.data.time_out+'分钟'
						that.price=message.data.price+'元'
						that.carnumber=message.data.carnumber
					}
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.el-input,.el-select{
		width: 200px;
	}
	#faultList{padding: 20px;}
	.Content .title{
		font-size: 40px;
		font-family: 'MicrosoftYaHei';
		color:#303030;
		margin-bottom: 90px;
		text-align: center;
	}
	.Content .parknum{
		font-size: 50px;
		font-family: 'MicrosoftYaHei';
		color:#303030;
		margin-bottom: 58px;
		text-align: center;
	}
	.Content .identical{
		width: 1002px;
		height: 61px;
		line-height: 61px;
		border: 1px solid #bfbfbf;
		margin:0 auto;
		font-size: 20px;
		font-family: 'MicrosoftYaHei';
		color:#303030;
		text-indent: 60px;
		border-top: none;
	}
	.Content .order{
		text-indent: 120px;
		border-top:1px solid #bfbfbf;
	}
	.Content div p{
		display: inline-block;
		width: 46%;
		border-right: 1px solid #bfbfbf;
	}
	.Content div .last{
		border-right: none;
	}
	.Content .total{
		margin-top:62px;
		font-size: 30px;
		font-family: 'MicrosoftYaHei';
		color:#303030;
		text-align: center;
		margin-bottom: 72px;
	}
	.pay{
		width: 208px!important;
		height: 62px;
		background: #a2cc6d;
		border-radius: 10px;
		color: #fff!important;
		line-height: 62px;
		text-align: center;
		text-indent: 0!important;
	}
	.el-checkbox{
		text-indent: 0
	}
</style>