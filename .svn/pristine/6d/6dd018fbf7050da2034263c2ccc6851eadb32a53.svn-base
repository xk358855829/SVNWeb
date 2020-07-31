<template>
	<div id="faultList">
		<div class="header">
			<div class="headerTitle">
				<span>退款纪录</span>
			</div>
		</div>
		<div class="select">
			<span>退款类型：</span>
			<!-- <el-input v-model="search.refund_type" clearable placeholder="请输入内容"></el-input> -->
			<el-select v-model="search.refund_type" placeholder="请选择">
				<el-option>未选择</el-option>
				<el-option v-for="item in this.$store.state.paytypes" :key="item.id" :label="item.type" :value="item.type"></el-option>
			</el-select>
			<span>订单流水号：</span>
			<el-input v-model="search.out_trade_no" clearable placeholder="请输入内容"></el-input>
			<el-tooltip placement="top">
				<div slot="content">输入订单流水号可查询当前退款状态</div>
				<img style="vertical-align: middle" src="../../../static/image/ming.png" alt="">
			</el-tooltip>	
		</div>
		<div class="select">
			<!-- <el-button type="success" class="oyButton" icon="el-icon-plus" @click='universal.add = true'>添加</el-button> -->
			<el-button type="success" class="oyButton" icon="el-icon-search" @click='searchClick'>查询</el-button>
			<div class="boxselect">
				<img src="../../../static/image/alipay.png" alt=""><span>支付宝支付</span>
				<img src="../../../static/image/wechat.png" alt=""><span>微信支付</span>
				<img src="../../../static/image/cash.png" alt=""><span>现金支付</span>
				<img src="../../../static/image/noninductive.png" alt=""><span>无感支付</span>
				<!-- <img src="../../../static/image/teq.png" alt=""><span>特权</span> -->
				<img src="../../../static/image/free.png" alt=""><span>免费</span>
			</div>
		</div>
		<div class="Content">
			<el-table class='oyTable' :data="tableData" style="width: 100%">
				<el-table-column type="index":index="indexMethod" label="序号" width="100"> </el-table-column>
				
				<el-table-column label="订单流水号" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.out_trade_no }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.out_trade_no }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
					
				<el-table-column label="退款流水号" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.out_refund_no}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.out_refund_no }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="退款金额" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.refund_fee}}元</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.refund_fee }}元</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="退款理由" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.refund_reason}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.refund_reason }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="退款时间" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.date}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.date }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="退款类型" width="">
					<template slot-scope="scope">
				        <el-popover>
				        	<!-- <p  class="TsMaxWidth">{{ scope.row.refund_type}}</p> -->
				        	<div slot="reference" class="name-wrapper">
				        		<!-- <div class="overflowHide">{{ scope.row.refund_type }}</div> -->
								<div>
									<img v-if="scope.row.refund_type==5" src="../../../static/image/cash.png" alt="">
									<img v-if="scope.row.refund_type==2" src="../../../static/image/alipay.png" alt="">
									<img v-if="scope.row.refund_type==3" src="../../../static/image/wechat.png" alt="">
									<img v-if="scope.row.refund_type==1" src="../../../static/image/noninductive.png" alt="">
									<!-- <img v-if="scope.row.pay_type==8" src="../../../static/image/privilege.png" alt=""> -->
								</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
		
				<el-table-column prop="" label="操作" width='150'>
					<template slot-scope="scope">
						<!-- <el-tooltip class="item" effect="dark" content="修改" placement="top">
    						<i class="icon-change el-icon-edit" @click="changeShow(scope.row)" ></i>
						</el-tooltip> -->
						
						<!-- <el-tooltip v-if="scope.row.roleId == 1" class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-unclick el-icon-delete"></i>
						</el-tooltip> -->
						
						<el-tooltip class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
						</el-tooltip>
						
						<!-- <el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-document" @click="seeClick(scope.row)" ></i>
						</el-tooltip> -->
						<!-- <el-tooltip class="item" effect="dark" content="状态" placement="top">
    						<i class="jilu iconfont icon-weibiaoti-" @click="lookStatus(scope.row)" ></i>
						</el-tooltip> -->
					</template>
				</el-table-column>
			</el-table>
		</div>
		<el-dialog title="新增" :visible.sync="universal.add">
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

					<span class="spanClass">收款方编号：</span>
					<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br />

					
					<span class="spanClass">高德标识：</span>
					<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br />
							
					<span class="spanClass">客服电话：</span>
					<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br />
				</div>
				<div class="alipay">
					<span class="spanClass">支付方式：</span>
					<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br />

					<span class="spanClass">收费说明：</span>
					<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br />
					<span class="spanClass">停车单价：</span>
					<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br />

					<span class="spanClass">超时时间：</span>
					<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br />

					<span class="spanClass">免费时长：</span>
					<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br />

					<span class="spanClass">最高时长：</span>
					<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br />
					
					<span class="spanClass">最高收费：</span>
					<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br />
				</div>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.add = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="addClick">添加</el-button>
			</div>
		</el-dialog>
		<el-dialog title="查看" :visible.sync="universal.look">
			<div class="letg">
				<el-row>
					<el-col :span="12"><div class="grid-content">订单号码：</div>{{look.out_trade_no}}</el-col>
					<el-col :span="12"><div class="grid-content">退款理由：</div>{{look.refund_reason}}</el-col>
				</el-row>
				<el-row>
					<el-col :span="12"><div class="grid-content">退款金额：</div>{{look.refund_fee}}</el-col>
					<el-col :span="12"><div class="grid-content">退款时间：</div>{{look.date}}</el-col>
				</el-row>
				<el-row>
					<el-col :span="12"><div class="grid-content">退款流水号：</div><div>{{look.out_refund_no}}</div></el-col>
					<el-col :span="12"><div class="grid-content">退款状态：</div>{{status}}</el-col>
				</el-row>
				<el-row>
					<div class="grid-content longsieze">支付宝交易号：</div>{{look.trade_no}}
				</el-row>
			</div>
		</el-dialog>
		<div class="footer">
			<el-pagination background @current-change="handleCurrentChange"  @size-change="handleSizeChange" :current-page.sync="paging.page" :page-sizes="[1,2,3,10,11,12]" :page-size="paging.pageSize" layout="sizes, prev, pager, next, jumper,total" :total="paging.total"></el-pagination>
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
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
					refund_type:'',
					out_trade_no:''
				},
				add:{
					fauMode:'',
					fauName:'',
					fauSolve:'',
					fauCode:'',
					devId:''
				},
				look:{
					out_refund_no:'',
					trade_no:'',
					out_trade_no:'',
					refund_fee:'',
					refund_reason:'',
					refund_type:'',
					state:'',
					date:''
				},
				status:'',
				change:{
					fauId:'',
					fauMode:'',
					fauName:'',
					fauSolve:'',
					fauCode:'',
					devId:''
				},
			
			}
		},
		mounted: function() {
			document.title=this.$route.meta.title;
			this.searchClick();
			// this.downList();
			// this.common.login()
		},
		methods: {
			// lookStatus(row){
			// 	let that=this;
			// 	console.log(row)
			// 	axios({
			// 		method:'get',
			// 		url:that.$store.state.url +'/refund/queryRefundStatus?pay_type='+row.refund_type+'&out_trade_no='+row.out_trade_no,
			// 	}).then(function(message){
			// 		console.log(message.data)
			// 		if(message.data.resCode==0){
			// 			that.status=message.data.result
			// 		}else{
			// 			that.status=message.data.result
			// 		}
			// 		if(that.status==''){
			// 			that.status='无'
			// 		}
			// 	})
			// 	that.universal.look=true;
			// 	that.look.out_refund_no=row.out_refund_no
			// 	that.look.trade_no=row.trade_no
			// 	that.look.out_trade_no=row.out_trade_no
			// 	that.look.refund_fee=row.refund_fee
			// 	that.look.refund_reason=row.refund_reason
			// 	that.look.date=row.date
			// 	if(row.refund_type=='无感支付'){
			// 		that.look.refund_type=1
			// 	}else if(row.refund_type=='支付宝支付'){
			// 		that.look.refund_type=2
			// 	}else if(row.refund_type=='微信支付'){
			// 		that.look.refund_type=3
			// 	}else if(row.refund_type=='现金支付'){
			// 		that.look.refund_type=5
			// 	}
			// 	that.look.refund_fee=that.look.refund_fee+'元'
				
				
				
				
				
			// },
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
						url:that.$store.state.url+'/refund/delRefundOrder?out_trade_no='+row.out_trade_no+'&id_del='+1,
						// data:Qs.stringify({
						// 	id:row.id
						// })
					}).then(function(message){
						console.log(message.data)
						if(message.data.resCode==0){
							that.$message({
					        	message: '删除成功',
					        	type: 'success'
					        });
							that.searchClick();
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
			changeShow(row){
				this.universal.change = true;
				this.change = Object.assign({},row);
				console.log(row)
			},
	
			changeClick(){
				let data = this.change;
				delete data.date;
				/*console.log(data)*/
				let that = this;
				axios({
					method:'post',
					url:this.$store.state.http +'/fault/update',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						that.$message({
				        	message: '修改成功',
				        	type: 'success'
				        });
						that.searchClick();
					}else{
						that.$message({
				        	message: '修改失败',
				        	type: 'error'
				        });
					}
				})
				that.universal.change = false;
			},
			searchClick(){
				let that = this;
				if(that.search.out_trade_no){
					axios({
						method:'get',
						url:that.$store.state.url +'/refund/queryRefundStatus?out_trade_no='+that.search.out_trade_no,
					}).then(function(message){
						console.log(message.data)
						if(message.data.resCode==0){
							that.$message({
								message: message.data.result,
								type: 'success'
							});
						}else{
							that.$message({
								message: message.data.result,
								type: 'error'
							});
						}
					})
				}else{
					let data = {
						page:that.paging.page,
						pageSize:that.paging.pageSize,
						is_del: 0,
						userId:localStorage.getItem('userId'),
						dealer:localStorage.getItem('dealer')
					};
					if(that.search.refund_type=='无感支付'){
						data.refund_type=1
					}else if(that.search.refund_type=='支付宝支付'){
						data.refund_type=2
					}else if(that.search.refund_type=="微信支付"){
						data.refund_type=3
					}else if(that.search.refund_type=='现金支付'){
						data.refund_type=5
					}
					console.log(data)
					
					that.tableData = [];
					axios({
						method:'post',
						url:this.$store.state.url+'/refund/selectRefundOrder',
						data:Qs.stringify(data)
					}).then(function(message){
						console.log(message.data)
						if(message.data.resCode==0){
							for(var i=0;i<message.data.result.length;i++){
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
	}
</script>

<style scoped="scoped">
	.el-input,.el-select{
		width: 200px;
	}
	#faultList{padding: 20px;}
	.alipay{
		width: 50%;
		float: left;
	}
	.alipays{
		display:inline-block;
	}
	.spanClass{
		width: 106px!important;
	}
	.letg div{font-size: 15px;line-height: 40px;}
	.grid-content{width: 30%;float: left;text-align: right;margin-right: 10px;}
	.longsieze{width: 15%;}
	.select .boxselect{
		float: right;
	}
	.select .boxselect img{
		vertical-align: middle;
		margin-right:5px;
	}
	 .jilu{
		width: 22px;
		height: 22px;
		display: inline-block;
		background: #59CB18;
		border-radius: 3px;
		color: #fff;
		
	}
</style>