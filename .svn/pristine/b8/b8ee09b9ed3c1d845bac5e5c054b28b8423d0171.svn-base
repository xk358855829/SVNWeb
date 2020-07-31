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
		</div>
		<div class="Content">
			<el-table class='oyTable' :data="tableData" style="width: 100%">
				<el-table-column type="index":index="indexMethod" label="序号" width="100"> </el-table-column>
				
				<el-table-column label="车牌号码" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.carNumber }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.carNumber }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
					
				<el-table-column label="出场道闸" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.outDeviceId}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.outDeviceId }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="出场时间" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.outTime}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.outTime }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="出场图片" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<!-- <p  class="TsMaxWidth">{{ scope.row.imgUrl}}</p> -->
				        	<div slot="reference" class="name-wrapper">
				        		<!-- <div class="overflowHide">{{ scope.row.imgUrl }}</div> -->
								<div class="overflowHide imgout">
									<img :src='scope.row.imgUrl' alt="">
								</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>


		
				<el-table-column prop="" label="操作" width='150'>
					<template slot-scope="scope">

						
						<el-tooltip class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-delete el-icon-delete"  @click="deleteClick(scope.row)"></i>
						</el-tooltip>

					</template>
				</el-table-column>
			</el-table>
		</div>
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
						url:that.$store.state.url+'/ExceptionCarNumberInfo/del',
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
		
			
			searchClick(){
				
				let data = {
					page:this.paging.page,
					pageSize:this.paging.pageSize,
					userId:localStorage.getItem('userId'),
					dealer:localStorage.getItem('dealer')
				};
				if(this.search.refund_type){
					data.refund_type=this.search.refund_type
				}
				console.log(data)
				let that = this;
				that.tableData = [];
				axios({
					method:'post',
					url:this.$store.state.url+'/ExceptionCarNumberInfo/selectAll',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
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
	.imgout{
		width: 80px;
		height: 80px;
		margin-left: 30%;
	}
	.imgout img{
		width: 100%;
		height: 100%;
	}
</style>