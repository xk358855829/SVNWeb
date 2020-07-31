<template>
	<div id="faultList">
		<div class="header">
			<div class="headerTitle">
				<span>故障统计</span>
			</div>
		</div>
		<div class="select">
			<span>设备ID：</span>
			<el-input v-model="search.devId" clearable placeholder="请输入内容"></el-input>
			<span>故障类型：</span>
			<!-- <el-input v-model="search.fauMode" clearable placeholder="请输入内容"></el-input> -->
			<!--<el-input :disabled="false" v-model="add.type" clearable placeholder="请输入内容"></el-input><br /><br />-->
			<el-select v-model="search.fauMode" placeholder="请选择">
				<el-option v-for="item in options" :key="item.id" :label="item.type" :value="item.id"></el-option>
			</el-select><br /><br />
		</div>
		<div class="select">
			<!-- <el-button type="success" class="oyButton" icon="el-icon-plus" @click='universal.add = true'>添加</el-button> -->
			<el-button type="success" class="oyButton" icon="el-icon-search" @click='searchClick'>查询</el-button>
		</div>
		<div class="Content">
			<el-table class='oyTable' :data="tableData" style="width: 100%">
				<el-table-column type="index":index="indexMethod" label="序号" width="100"> </el-table-column>
				
				<el-table-column label="设备ID" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.devId }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.devId }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<!-- <el-table-column label="故障编码" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.fauMode }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.fauMode }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column> -->

				<el-table-column label="故障类型" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.fauCode }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.fauCode }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				
				
				
				
				<el-table-column label="上报时间" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.date}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.date }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
		
				<el-table-column prop="" label="操作" width='150'>
					<template slot-scope="scope">
						<!-- <el-tooltip class="item" effect="dark" content="修改" placement="top">
    						<i class="icon-change el-icon-edit" @click="changeShow(scope.row)" ></i>
						</el-tooltip> -->
						
						<el-tooltip v-if="scope.row.roleId == 1" class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-unclick el-icon-delete"></i>
						</el-tooltip>
						
						<el-tooltip v-else = "" class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
						</el-tooltip>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<el-dialog title="新增" :visible.sync="universal.add">
			<div>
				<span class="spanClass">设备ID：</span>
				<el-input :disabled="false" v-model="add.devId" clearable placeholder="请输入内容"></el-input><br /><br />
				<span class="spanClass">设备型号：</span>
				<!--<el-input :disabled="false" v-model="add.type" clearable placeholder="请输入内容"></el-input><br /><br />-->
				<!-- <el-select v-model="add.fauMode" placeholder="请选择">
    				<el-option v-for="item in options" :key="item.id" :label="item.type" :value="item.id"></el-option>
				</el-select><br /><br /> -->
				<el-input :disabled="false" v-model="add.fauMode" clearable placeholder="请输入内容"></el-input><br /><br />
				
				<!-- <span class="spanClass">故障编码：</span>
				<el-input :disabled="false" v-model="add.fauCode" clearable placeholder="请输入内容"></el-input><br /><br /> -->
				
				<!-- <span class="spanClass">故障名称：</span>
				<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br /> -->
						
				<span class="spanClass">解决方法：</span>
				<el-input :disabled="false" class="textareaWidth" type="textarea" :rows="5" v-model="add.fauSolve" clearable placeholder="请输入内容"></el-input>
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
					devId:'',
					fauMode:''
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
				options:[
					{
						id:0,
						type:'未选择'
					},
					{
						id:1,
						type:'设备倾倒'
					},
					{
						id:2,
						type:'应急开关破坏'
					},
					{
						id:3,
						type:'设备受到撞击'
					},
					{
						id:4,
						type:'非法开启'
					},
					{
						id:5,
						type:'电机控制异常'
					},
					{
						id:6,
						type:'设备漏水'
					},
					{
						id:7,
						type:'温度异常'
					},
					{
						id:8,
						type:'刷卡异常'
					},
					{
						id:9,
						type:'压力异常'
					},
				]
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
						url:this.$store.state.http +'/fault/delById',
						data:Qs.stringify({
							fauId:row.fauId
						})
					}).then(function(message){
						console.log(message.data)
						if(message.data.resCode==0){
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
				};
				data.userId=sessionStorage.getItem('userId')
				
				// data.dealer=sessionStorage.getItem('dealer')
				if(this.search.devId){
					data.devId = this.search.devId
				}
				if(this.search.fauMode){
					data.fauCode = this.options[this.search.fauMode].type
				}
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
						for(var i=0;i<message.data.results.length;i++){
							message.data.results[i].date=that.common.timeToDate(JSON.stringify(message.data.results[i].date.time).slice(0,10))
							
						}
						that.paging.total = message.data.count;
						that.tableData = message.data.results;
						
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
</style>