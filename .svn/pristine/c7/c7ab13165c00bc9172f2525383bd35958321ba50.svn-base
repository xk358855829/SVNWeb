<template>
	<div id="faultList">
		<div class="header">
			<div class="headerTitle">
				<span>订单回收站</span>
			</div>
		</div>
		<div class="select">
			<span>车牌号码：</span>
			<el-input v-model="search.car_number" clearable placeholder="请输入内容"></el-input>
			<span>停车场名称：</span>
			<el-input v-model="search.parking_lot_name" clearable placeholder="请输入内容"></el-input>
			<span>订单状态：</span>
			<el-select v-model="search.order_status" placeholder="请选择">
				<el-option>未选择</el-option>
				<el-option v-for="item in online1" :key="item.id" :label="item.type" :value="item.type"></el-option>
			</el-select>
		</div>
		<div class="select">
			<span>开始时间：</span>
			<el-date-picker v-model="search.start_pay_time" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker>
			<span>&nbsp;&nbsp;&nbsp;结束时间：</span>
			<el-date-picker v-model="search.end_pay_time" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker>
		</div>
		<div class="select">
			<!-- <el-button type="success" class="oyButton" icon="el-icon-plus" @click='universal.add = true'>添加</el-button> -->
			<el-button type="success" class="oyButton" icon="el-icon-search" @click='searchClick'>查询</el-button>
			<div class="boxselect">
				<img src="../../../static/image/alipay.png" alt=""><span>支付宝支付</span>
				<img src="../../../static/image/wechat.png" alt=""><span>微信支付</span>
				<img src="../../../static/image/cash.png" alt=""><span>现金支付</span>
				<img src="../../../static/image/noninductive.png" alt=""><span>无感支付</span>
				<img src="../../../static/image/teq.png" alt=""><span>特权</span>
				<img src="../../../static/image/free.png" alt=""><span>免费</span>
			</div>
		</div>
		<div class="Content">
			<el-table class='oyTable' :data="tableData" style="width: 100%">
				<el-table-column type="index":index="indexMethod" label="序号" width="100"> </el-table-column>
				
				<el-table-column label="车牌号码" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.carnumber }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.carnumber }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="停车场名称" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.parking_lot_name }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.parking_lot_name }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="付款金额" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.price}}元</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.price }}元</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="支付类型" width="">
					<template slot-scope="scope">
				        <el-popover>
				        	<!-- <p  class="TsMaxWidth">{{ scope.row.pay_type}}</p> -->
				        	<div slot="reference" class="name-wrapper">
				        		<!-- <div class="overflowHide">{{ scope.row.pay_type }}</div> -->
								<div>
									<img v-if="scope.row.pay_type==5" src="../../../static/image/cash.png" alt="">
									<img v-if="scope.row.pay_type==2" src="../../../static/image/alipay.png" alt="">
									<img v-if="scope.row.pay_type==3" src="../../../static/image/wechat.png" alt="">
									<img v-if="scope.row.pay_type==1" src="../../../static/image/noninductive.png" alt="">
									<img v-if="scope.row.pay_type==8" src="../../../static/image/teq.png" alt="">
									<img v-if="scope.row.pay_type==0" src="../../../static/image/free.png" alt="">
									<i v-if="scope.row.pay_type==58">-</i>
								</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="订单状态" width="">
					<template slot-scope="scope">
				        <el-popover>
				        	<!-- <p  class="TsMaxWidth">{{ scope.row.order_status}}</p> -->
				        	<div slot="reference" class="name-wrapper tagFont">
				        		<!-- <div class="overflowHide">{{ scope.row.order_status }}</div> -->
								<!-- <el-tag :type="scope.row.status | statusFilter">{{ scope.row.order_status }}</el-tag> -->
								<div>
									<el-tag color="#5daf34"  v-if="scope.row.order_status=='完成'">已完成</el-tag>
									<el-tag color="#f8c541"  v-if="scope.row.order_status=='已退款'">{{ scope.row.order_status }}</el-tag>
									<el-tag color="#c9521e"  v-if="(scope.row.order_status)=='未支付'">{{ scope.row.order_status }}</el-tag>

								</div>
				        	</div>
							
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="停车时长" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.longdate}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.longdate }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="支付时间" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.pay_time}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.pay_time }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
		
				<el-table-column prop="" label="操作" width='150'>
					<template slot-scope="scope">
						<!-- <el-tooltip class="item" effect="dark" content="修改" placement="top">
    						<i class="icon-change el-icon-edit" @click="changeShow(scope.row)" ></i>
						</el-tooltip> -->
						<el-tooltip class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
						</el-tooltip>

						<el-tooltip class="item" effect="dark" content="恢复订单记录" placement="top">
    						<i class="icon-See el-icon-refresh" @click="recover(scope.row)" ></i>
						</el-tooltip>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<!-- <el-dialog title="查看" :visible.sync="universal.look">
			<div class="alipays">
				<div class="alipay">
					<span class="spanClass">停车场名称：</span>
					<el-input :disabled="false" v-model="look.parking_lot_name" clearable placeholder="请输入内容"></el-input><br /><br />

					<span class="spanClass">车牌号码：</span>
					<el-input :disabled="false" v-model="look.carnumber" clearable placeholder="请输入内容"></el-input><br /><br />

					<span class="spanClass">订单状态：</span>
					<el-input :disabled="false" v-model="look.order_status" clearable placeholder="请输入内容"></el-input><br /><br />

					<span class="spanClass">停车时长：</span>
					<el-input :disabled="false" v-model="look.longdate" clearable placeholder="请输入内容"></el-input><br /><br />

					<span class="spanClass">入场时间：</span>
					<el-input :disabled="false" v-model="look.startdate" clearable placeholder="请输入内容"></el-input><br /><br />
					
					
					<span class="spanClass">支付时间：</span>
					<el-input :disabled="false" v-model="look.pay_time" clearable placeholder="请输入内容"></el-input><br /><br />
				</div>
				<div class="alipay">

					<span class="spanClass">支付类型：</span>
					<el-input :disabled="false" v-model="look.pay_type" clearable placeholder="请输入内容"></el-input><br /><br />
					<span class="spanClass">商户订单：</span>
					<el-input :disabled="false" v-model="look.out_trade_no" clearable placeholder="请输入内容"></el-input><br /><br />
				
					<span class="spanClass">收单时间：</span>
					<el-input :disabled="false" v-model="look.date" clearable placeholder="请输入内容"></el-input><br /><br />
					<span class="spanClass">优惠金额：</span>
					<el-input :disabled="false" v-model="look.onsale_price" clearable placeholder="请输入内容"></el-input><br /><br />

					<span class="spanClass">付款金额：</span>
					<el-input :disabled="false" v-model="look.price" clearable placeholder="请输入内容"></el-input><br /><br />

					<span class="spanClass">已付金额：</span>
					<el-input :disabled="false" v-model="look.paid_price" clearable placeholder="请输入内容"></el-input><br /><br />
				</div>
			</div>
		</el-dialog> -->
		<!-- <el-dialog title="新增" :visible.sync="universal.add">
			<div class="alipays">
				<div class="alipay">
					<span class="spanClass">停车场编号：</span>
					<el-input :disabled="false" v-model="add.devId" clearable placeholder="请输入内容"></el-input><br /><br />
					<span class="spanClass">停车场地址：</span>
					<el-input :disabled="false" v-model="add.fauMode" clearable placeholder="请输入内容"></el-input><br /><br />
					
					<span class="spanClass">停车场类型：</span>
					<el-input :disabled="false" v-model="add.fauCode" clearable placeholder="请输入内容"></el-input><br /><br />
					
					<span class="spanClass">停车场名称：</span>
					<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br />
							
					<span class="spanClass">客服电话：</span>
					<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br />

					<span class="spanClass">支付方式：</span>
					<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br />

					<span class="spanClass">收费说明：</span>
					<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br />
				</div>
				<div class="alipay">

					<span class="spanClass">收款方编号：</span>
					<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br />
					<span class="spanClass">高德标识：</span>
					<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br />
					<span class="spanClass">超时时间：</span>
					<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input>分钟<br /><br />

					<span class="spanClass">免费时长：</span>
					<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input>分钟<br /><br />

					<span class="spanClass">最高时长：</span>
					<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input>分钟<br /><br />
					
					<span class="spanClass">最高收费：</span>
					<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input>元<br /><br />

					<span class="spanClass">停车单价：</span>
					<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input>元/时<br /><br />

				</div>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.add = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="addClick">添加</el-button>
			</div>
		</el-dialog> -->
	
		<div class="footer">
			<el-pagination background @current-change="handleCurrentChange"  @size-change="handleSizeChange" :current-page.sync="paging.page" :page-sizes="[1,2,3,10,11,12]" :page-size="paging.pageSize" layout="sizes, prev, pager, next, jumper,total" :total="paging.total"></el-pagination>
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	import {mapState} from 'vuex'
	import {searchClicks} from '../api/api.js'
	export default {
		name: 'equipmentList',
		data() {
			return {
				obj:[],
				numw:[],
				numvalue:[],
				universal:{
					add:false,
					change:false,
					look:false
				},
				paging:{
					page:1,
					pageSize:10,
					total:0
				},
				tableData:[],
				search:{
					parking_lot_name:'',
					car_number:'',
					order_status:'',
					start_pay_time:'',
					end_pay_time:''
				},
				pays:0,
				look:{
					onsale_price:'',
					paid_price:'',
					pay_time:'',
					carnumber:'',
					parking_lot_name:'',
					out_trade_no:'',
					order_status:'',
					longdate:'',
					startdate:'',
					price:'',
					pay_type:'',
					date:''
				},
				add:{
					fauMode:'',
					fauName:'',
					fauSolve:'',
					fauCode:'',
					devId:''
				},
				change:{
					fauId:'',
					fauMode:'',
					fauName:'',
					fauSolve:'',
					fauCode:'',
					devId:''
				},
				valpay:''
			}
		},
		computed:{
			...mapState(['online1'])
		},
		mounted: function() {
			document.title=this.$route.meta.title;
			this.searchClick();
		},
		methods: {
			seeClick(row){
				console.log(row)
					this.look = Object.assign({},row);
					this.look.price=row.price+'元'
					this.look.paid_price=row.paid_price+'元'
					this.look.onsale_price=row.onsale_price+'元'
					this.universal.look=true
			},
			hideclick(){
				this.universal.change = false
			},
			indexMethod(index) {
        		return index + (this.paging.page-1)*this.paging.pageSize+1;
    		},
			handleSizeChange(val){
				this.paging.pageSize = val;
				this.searchClick();
			},
			handleCurrentChange(val){
				this.searchClick();
			},
			addClick(){
				console.log(this.add)
				let data = this.add;
				let that = this;
				console.log(data)
				axios({
					method:'post',
					url:this.$store.state.http +'/fault/add',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						that.searchClick();
					}else{
						that.$message({
				        	message: '添加失败',
				        	type: 'error'
				        });
					}
				})
				that.universal.add = false;
			},
			deleteClick(row){
				console.log(row)
				let that = this;
				this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					axios({
						method:'get',
						url:that.$store.state.url+'/recycleOrders/delOrderByOutTradeNo?out_trade_no='+row.out_trade_no,
						// data:Qs.stringify({
						// 	out_trade_no:row.out_trade_no
						// })
					}).then(function(message){
						console.log(message.data)
						if(message.data.resCode==0){
							that.searchClick();
							that.$message({
					        	message: '删除成功',
					        	type: 'success'
					        });
						}else{
							that.$message({
					        	message: '删除失败',
					        	type: 'error'
					        });
						}
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			recover(row){
				console.log(row)
				let that = this;
				this.$confirm('此操作将恢复订单数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					axios({
						method:'get',
						url:that.$store.state.url+'/recycleOrders/replyOrderByOutTradeNo?out_trade_no='+row.out_trade_no,
						// data:Qs.stringify({
						// 	out_trade_no:row.out_trade_no
						// })
					}).then(function(message){
						console.log(message.data)
						if(message.data.resCode==0){
							that.searchClick();
							that.$message({
					        	message: '恢复订单成功',
					        	type: 'success'
					        });
						}else{
							that.$message({
					        	message: '恢复订单失败',
					        	type: 'error'
					        });
						}
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消恢复订单'
					});
				});
			},
			searchClick(){
				// console.log(this.search.order_status)
				// let data = {
				// 	page:this.paging.page,
				// 	pageSize:this.paging.pageSize,
				// 	is_del: 1,
				// 	userId:localStorage.getItem('userId')                          
				// };
				let data = {
					page:this.paging.page,
					pageSize:this.paging.pageSize,
					userId:localStorage.getItem('userId'),
					dealer:localStorage.getItem('dealer'),
					is_del:1
				};
				// if(localStorage.getItem('userId')=='SURIOT'){
				// 	data = {
				// 	page:this.paging.page,
				// 	pageSize:this.paging.pageSize,
				// 	is_del: 1,
				//    };
				// }else{
				// 	data = {
				// 	page:this.paging.page,
				// 	pageSize:this.paging.pageSize,
				// 	userId:localStorage.getItem('userId'),
				// 	is_del: 1,
				//    };
				// }
				if(this.search.parking_lot_name){
					data.parking_lot_name = this.search.parking_lot_name
				}
				if(this.search.car_number){
				 	data.car_number = this.search.car_number
				}
				// consoe.log(this.search.order_status)
				if(this.search.order_status=='未支付'){
					data.order_status = 1
				}else if(this.search.order_status=='完成'){
					data.order_status = 0
				}else if(this.search.order_status=='已退款'){
					data.order_status = -1
				}else if(this.search.order_status=='未选择'){
					data.order_status = ''
				}
				if(this.search.start_pay_time){
				 	data.start_pay_time = this.search.start_pay_time
				}
				if(this.search.end_pay_time){
					data.end_pay_time = this.search.end_pay_time
				}
				console.log(data)
				let that = this;
				that.tableData = [];
				searchClicks('/Order/orders',data).then(message=>{
					if(message.data.resCode==0){
						for(var i=0;i<message.data.result.length;i++){
							if(message.data.result[i].order_status==0){
								message.data.result[i].order_status='完成'
							}else if(message.data.result[i].order_status==1){
								message.data.result[i].order_status='未支付'
							}else if(message.data.result[i].order_status==-1){
								message.data.result[i].order_status='已退款'
							}
							if(message.data.result[i].longdate==''){
								message.data.result[i].longdate='-'
							}else{
								message.data.result[i].longdate=message.data.result[i].longdate+'分钟'
							}
							if(message.data.result[i].pay_time==''){
								message.data.result[i].pay_time='-'
							}
							if(message.data.result[i].order_status=='未支付'){
								message.data.result[i].pay_type=58
							}
						 	message.data.result[i].date=that.common.timeToDate(JSON.stringify(message.data.result[i].date.time).slice(0,10))
						}
						
						that.paging.total = message.data.count;
						that.tableData = message.data.result;
					}else{
						that.tableData = [];
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
	/*.textareaWidth{width: 200px;}*/
	.spanClass{
		width: 106px!important;
	}
	.alipay:nth-child(1){
		width: 49%;
		float: left;
	}
	.alipay:nth-child(2){
		width: 51%;
		float: right;
	}
	.alipays{
		width: 100%;
		display:inline-block;
	}
	.el-tag{
		color:#fff;
		width: 50px;
		height: 26px;
		line-height: 26px!important;
		padding:0 0!important;
	}
	.el-tag span{
		margin:0 auto;
		
	}
	.select .boxselect{
		float: right;
	}
	.select .boxselect img{
		vertical-align: middle;
		margin-right:5px;
	}
</style>