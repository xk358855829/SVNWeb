<template>
	<div id="faultList">
		<div class="header">
			<div class="headerTitle">
				<span>退款回收站</span>
			</div>
		</div>
		<div class="select">
			<span>退款类型：</span>
			<el-input v-model="search.refund_type" clearable placeholder="请输入内容"></el-input>
		</div>
		<div class="select">
			<!-- <el-button type="success" class="oyButton" icon="el-icon-plus" @click='universal.add = true'>添加</el-button> -->
			<el-button type="success" class="oyButton" icon="el-icon-search" @click='searchClick'>查询</el-button>
			<div class="boxselect">
				<img src="../../../static/image/alipay.png" alt=""><span>支付宝支付</span>
				<img src="../../../static/image/wechat.png" alt=""><span>微信支付</span>
				<img src="../../../static/image/cash.png" alt=""><span>现金支付</span>
				<img src="../../../static/image/noninductive.png" alt=""><span>无感支付</span>
				<img src="../../../static/image/free.png" alt=""><span>免费</span>
				<!-- <img src="../../../static/image/teq.png" alt=""><span>特权</span> -->
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
								<img v-if="scope.row.refund_type==5" src="../../../static/image/cash.png" alt="">
								<img v-if="scope.row.refund_type==2" src="../../../static/image/alipay.png" alt="">
								<img v-if="scope.row.refund_type==3" src="../../../static/image/wechat.png" alt="">
								<img v-if="scope.row.refund_type==1" src="../../../static/image/noninductive.png" alt="">
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
    						<i class="icon-delete el-icon-delete"  @click="deleteClick(scope.row)"></i>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="恢复订单记录" placement="top">
    						<i class="icon-See el-icon-refresh" @click="recover(scope.row)" ></i>
						</el-tooltip>
						<!-- <el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-document" @click="seeClick(scope.row)" ></i>
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
		<el-dialog title="修改" :visible.sync="universal.change">
			<div>
				<span class="spanClass">设备型号：</span>
				<el-input :disabled="true" v-model="change.devId" clearable placeholder="请输入内容"></el-input><br /><br />
				
				<span class="spanClass">故障类型：</span>
				<el-input :disabled="true" v-model="change.fauMode" clearable placeholder="请输入内容"></el-input><br /><br />
<!-- 				
				<span class="spanClass">故障名称：</span>
				<el-input :disabled="false" v-model="change.fauName" clearable placeholder="请输入内容"></el-input><br /><br /> -->
						
				<span class="spanClass">解决方法：</span>
				<el-input :disabled="false" class="textareaWidth" type="textarea" :rows="5" v-model="change.fauSolve" clearable placeholder="请输入内容"></el-input>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="hideclick">取消</el-button>
				<el-button type="success" class="oyButton" @click="changeClick">修改</el-button>
			</div>
		</el-dialog>
		<!-- <div class="footer">
			<el-pagination background @current-change="handleCurrentChange"  @size-change="handleSizeChange" :current-page.sync="paging.page" :page-sizes="[10, 11, 12]" :page-size="paging.pageSize" layout="sizes, prev, pager, next, jumper,total" :total="paging.total"></el-pagination>
		</div> -->
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
					change:false
				},
				paging:{
					page:1,
					pageSize:10,
					total:0
				},
				tableData:[],
				search:{
					refund_type:''
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
			
			}
		},
		mounted: function() {
			document.title=this.$route.meta.title;
			this.searchClick();
			// this.downList();
			// this.common.login()
		},
		methods: {
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
						url:that.$store.state.url+'/recycleOrders/delRefundOrder?out_trade_no='+row.out_trade_no,
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
						url:that.$store.state.url+'/recycleOrders/replyRefundOrder?out_trade_no='+row.out_trade_no,
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
				// let data = {
				// 	page:this.paging.page,
				// 	pageSize:this.paging.pageSize,
				// 	is_del:1,
				// 	userId:localStorage.getItem('userId')                  
				// };
				let data = {
					page:this.paging.page,
					pageSize:this.paging.pageSize,
					is_del: 1,
					userId:localStorage.getItem('userId'),
					dealer:localStorage.getItem('dealer')
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
				if(this.search.refund_type=='无感支付'){
					data.refund_type=1
				}else if(this.search.refund_type=='支付宝支付'){
					data.refund_type=2
				}else if(this.search.refund_type=='微信支付'){
					data.refund_type=3
				}else if(this.search.refund_type=='现金支付'){
					data.refund_type=5
				}
				if(this.search.refund_type){
					data.refund_type=this.search.refund_type
				}
				console.log(data)
				let that = this;
				that.tableData = [];
				axios({
					method:'post',
					url:this.$store.state.url+'/refund/selectRefundOrder',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						for(var i=0;i<message.data.result.length;i++){
							// if(message.data.result[i].refund_type==1){
							// 	message.data.result[i].refund_type='无感支付'
							// }else if(message.data.result[i].refund_type==2){
							// 	message.data.result[i].refund_type='支付宝支付'
							// }else if(message.data.result[i].refund_type==3){
							// 	message.data.result[i].refund_type='微信支付'
							// }else if(message.data.result[i].refund_type==5){
							// 	message.data.result[i].refund_type='现金支付'
							// }
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
	.select .boxselect{
		float: right;
	}
	.select .boxselect img{
		vertical-align: middle;
		margin-right:5px;
	}
</style>