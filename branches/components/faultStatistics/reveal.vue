<template>
	<div id="faultList">
		<div class="header">
			<div class="headerTitle">
				<span>临时车牌</span>
			</div>
		</div>
		<div class="select">
			<span>车牌号码：</span>
			<el-input v-model="search.car_number" clearable placeholder="请输入内容"></el-input>
			<span>进场状态：</span>
			<el-select v-model="search.status" placeholder="请选择">
				<el-option>未选择</el-option>
				<el-option v-for="item in this.$store.state.online" :key="item.id" :label="item.type" :value="item.type"></el-option>
			</el-select>
		</div>
		<div class="select">
			<span>进场时间：</span>
			<el-date-picker v-model="search.in_time" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker>
			<span>出场时间：</span>
			<el-date-picker v-model="search.out_time" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker>
		</div>
		<div class="select">
			<!-- <el-button type="success" class="oyButton" icon="el-icon-plus" @click='universal.add = true'>添加</el-button> -->
			<el-button type="success" class="oyButton" icon="el-icon-search" @click='searchClick'>查询</el-button>
		</div>
		<div class="Content">
			<el-table class='oyTable' :data="tableData" style="width: 100%">
				<el-table-column type="index" :index="indexMethod" label="序号" width="100"> </el-table-column>
				
				<el-table-column label="车牌号码" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.car_number }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.car_number }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="停车场编号" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.parking_id }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.parking_id }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="进场状态" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.status}}</p>
				        	<div slot="reference" class="name-wrapper tagFont">
				        		<!-- <div class="overflowHide">{{ scope.row.status }}</div> -->
								<!-- <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag> -->
								<el-tag color="#5daf34"  v-if="scope.row.status=='已出场'">{{ scope.row.status }}</el-tag>
								<el-tag color="#c9521e"  v-if="scope.row.status=='未出场'">{{ scope.row.status }}</el-tag>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="出场时间" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.out_time}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.out_time }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="入场时间" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.in_time}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.in_time }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
		
				<!-- <el-table-column prop="" label="操作" width='150'>
					<template slot-scope="scope"> -->
						<!-- <el-tooltip class="item" effect="dark" content="修改" placement="top">
    						<i class="icon-change el-icon-edit" @click="changeShow(scope.row)" ></i>
						</el-tooltip> -->
						
						<!-- <el-tooltip v-if="scope.row.roleId == 1" class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-unclick el-icon-delete"></i>
						</el-tooltip> -->
						
						<!-- <el-tooltip class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
						</el-tooltip> -->

					<!-- </template>
				</el-table-column> -->
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
					parking_id:'',
					car_number:'',
					in_time:'',
					out_time:'',
					InroadGateId:'',
					status:''
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
						method:'post',
						url:'http://39.104.113.112:2088/Parking/delEnterOutRecords',
						data:Qs.stringify({
							id:row.id
						})
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
				let data = {
					page:this.paging.page,
					pageSize:this.paging.pageSize,
					userId:localStorage.getItem('userId'),
					dealer:localStorage.getItem('dealer')
				};
				if(this.search.parking_id){
					data.parking_id = this.search.parking_id
				}
				if(this.search.car_number){
					data.car_number = this.search.car_number
				}
				if(this.search.in_time){
					data.in_time = this.search.in_time
				}
				if(this.search.out_time){
					data.out_time = this.search.out_time
				}
				if(this.search.InroadGateId){
					data.InroadGateId = this.search.InroadGateId
				}
				if(this.search.status){
					data.status = this.search.status
				 }
				if(data.status=='未出场'){
					data.status=1
				}else if(data.status=='已出场'){
					data.status=0
				}
				console.log(data)
				let that = this;
				that.tableData = [];
				axios({
					method:'post',
					url:that.$store.state.url+'/carBrand/findAll ',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						for(var i=0;i<message.data.result.length;i++){
							if(message.data.result[i].status==0){
								message.data.result[i].status='已出场'
							}else{
								message.data.result[i].status='未出场'
							}
							if(message.data.result[i].out_time==''){
								message.data.result[i].out_time='-'
							}
							if(message.data.result[i].in_time==''){
								message.data.result[i].in_time='-'
							}
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
</style>