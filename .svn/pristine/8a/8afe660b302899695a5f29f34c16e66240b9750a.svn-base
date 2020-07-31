<template>
	<div id="PSTlist">
		<div class="header">
			<div class="headerTitle">
				<span>数据流管理</span>
			</div>
		</div>
		<div class="select">
			<span>数据流ID：&nbsp;&nbsp;&nbsp;</span>
			<el-input v-model="search.dsid" clearable placeholder="请输入内容"></el-input>

			<span>设备ID：&nbsp;&nbsp;&nbsp;</span>
			<el-input v-model="search.devId" clearable placeholder="请输入内容"></el-input>


		</div>
		<div class="select">
			<el-button class="oyButton" type="success" icon="el-icon-search" @click='searchClick'>查询</el-button>
			<el-button type="success" class="oyButton" icon="el-icon-plus" @click='universal.add = true'>添加</el-button>
			<!--<el-button class="oyButton" type="success" icon="el-icon-download" @click=''>导出</el-button>-->
		</div>
		<el-dialog title="新增" :visible.sync="universal.add">
			<div>
				<span class="spanClass">设备ID：</span>
				<el-input v-model="add1.devId" clearable placeholder="请输入内容"></el-input><br /><br />

				<span class="spanClass">数据流名称：</span>
				<el-input v-model="add1.dsid" clearable placeholder="请输入内容"></el-input><br /><br />

				<span class="spanClass">数据流标签：</span>
				<el-input v-model="add1.tags" clearable placeholder="请输入内容"></el-input><br /><br />
						
				<span class="spanClass">数据单位：</span>
				<el-input v-model="add1.unit" clearable placeholder="请输入内容"></el-input><br /><br />

				<span class="spanClass">单位符号：</span>
				<el-input v-model="add1.unitSymbol" clearable placeholder="请输入内容"></el-input><br /><br />

				<!-- <span class="spanClass">设备填写：</span>
				<el-input v-model="add1.cmd" clearable placeholder="请输入内容"></el-input><br /><br />

				<span class="spanClass">设备填写：</span>
				<el-input v-model="add1.interval" clearable placeholder="请输入内容"></el-input><br /><br />

				<span class="spanClass">设备填写：</span>
				<el-input v-model="add1.formula" clearable placeholder="请输入内容"></el-input><br /><br /> -->

				<!-- <el-input class="textareaWidth" type="textarea" :rows="5" v-model="add.roleDescribe" clearable placeholder="请输入内容"></el-input> -->
			 </div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.add = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="addClick">添加</el-button>
			</div>
		</el-dialog> 
		<el-dialog title="修改" :visible.sync="universal.change">
			<div>
				<span class="spanClass">设备ID：</span>
				<el-input v-model="change.devId" clearable placeholder="请输入内容" :disabled="true"></el-input><br /><br />
				
				<span class="spanClass">数据流名称：</span>
				<el-input v-model="change.dsid" clearable placeholder="请输入内容"></el-input><br /><br />

				<span class="spanClass">数据标签：</span>
				<el-input v-model="change.tags" clearable placeholder="请输入内容"></el-input><br /><br />
						
				<span class="spanClass">数据单位：</span>
				<el-input v-model="change.unit" clearable placeholder="请输入内容"></el-input><br /><br />

				<span class="spanClass">单位符号：</span>
				<el-input v-model="change.unitSymbol" clearable placeholder="请输入内容"></el-input><br /><br />
				
				<!-- <span class="spanClass">主键：</span>
				<el-input v-model="change.datastreamsId" clearable placeholder="请输入内容"></el-input><br /><br /> -->
				<!-- <el-input class="textareaWidth" type="textarea" :rows="5" v-model="add.roleDescribe" clearable placeholder="请输入内容"></el-input> -->
			 </div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.change = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="changeclick(change)">修改</el-button>
			</div>
		</el-dialog>
		<el-dialog title="查看" :visible.sync="universal.look">
			<div>
				<span class="spanClass">数据流ID：</span>
				<el-input v-model="look.dsid" clearable placeholder="请输入内容"></el-input><br /><br />

				<span class="spanClass">数据标签：</span>
				<el-input v-model="look.tags" clearable placeholder="请输入内容"></el-input><br /><br />
						
				<span class="spanClass">数据单位：</span>
				<el-input v-model="look.unit" clearable placeholder="请输入内容"></el-input><br /><br />

				<span class="spanClass">单位符号：</span>
				<el-input v-model="look.unitSymbol" clearable placeholder="请输入内容"></el-input><br /><br />

				<span class="spanClass">创建时间：</span>
				<el-input v-model="look.create_time" clearable placeholder="请输入内容"></el-input><br /><br />
				<!-- <el-input class="textareaWidth" type="textarea" :rows="5" v-model="add.roleDescribe" clearable placeholder="请输入内容"></el-input> -->
			 </div>
		</el-dialog> 
		<div class="Content">
			<el-table class='oyTable' :data="tableData" style="width: 100%">
				<el-table-column type="index" :index="indexMethod" label="序号" width="100"> </el-table-column>
				
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

				<el-table-column label="数据流ID" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.dsid }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.dsid }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				<el-table-column label="数据标签" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{scope.row.tags }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.tags }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				<el-table-column label="数据单位" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.unit }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.unit}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				
				<el-table-column label="单位符号" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{scope.row.unitSymbol}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.unitSymbol}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
		
				<el-table-column prop="" label="操作" width=''>
					<template slot-scope="scope">
						<!--<el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-search" @click="seeClick(scope.row)" ></i>
						</el-tooltip>-->
						
						<el-tooltip class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
						</el-tooltip>
						
						<el-tooltip class="item" effect="dark" content="修改" placement="top">
    						<i class="icon-setup el-icon-setting" @click="changeshow(scope.row)"></i>
						</el-tooltip>
						
						<!-- <el-tooltip class="item" effect="dark" content="修改分组" placement="top">
    						<i class="icon-menu el-icon-menu" @click="changeGroupShow(scope.row)"></i>
						</el-tooltip> -->
						<!-- <el-button icon="el-icon-search" circle></el-button> -->
						<!-- <el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-export" @click="changeGroupShow(scope.row)" ></i>
						</el-tooltip> -->

						<el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-search" @click="changeGroupShow(scope.row)" ></i>
						</el-tooltip>
					</template>
				</el-table-column>
			</el-table>
		</div>

		<!-- <el-dialog title="修改分组" :visible.sync="changeGroups">
			<div>
				<span class="spanClassT">组名：</span>
				<el-select v-model="changeGrouping.changeGrouping" placeholder="请选择">
					<el-option v-for="item in this.$store.state.conGroupList" :key="item.groupId" :label="item.gropuName" :value="item.groupId"></el-option></el-option>
				</el-select>
			</div>
			<div slot="footer" class="dialog-footer">
			    <el-button type="success" class="oyButton" @click="changeGroups = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="changeGroup">修改</el-button>
			</div>
		</el-dialog> -->
		<div class="footer">
			<el-pagination background @current-change="handleCurrentChange"  @size-change="handleSizeChange" :current-page.sync="paging.page":page-sizes="[10, 11, 12]" :page-size="paging.pageSize" layout="sizes, prev, pager, next, jumper,total" :total="paging.total"></el-pagination>
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
				add1:{
					dsid:"",
					tags:"",
					unit:"",
					unitSymbol:'',
					devId:''
				},
				change:{
					dsid:"",
					tags:"",
					unit:"",
					unitSymbol:"",
					devId:"",
					create_time:'',
				},
				look:{
					dsid:"",
					tags:"",
					unit:"",
					unitSymbol:"",
					devId:"",
					create_time:''
				},
				universal:{
					add:false,
					change:false,
					look:false
				},
				tableData:[],
				add: false,
				conGroup:false,
				change:false,
				see:false,
				changeGroups:false,
				changeGrouping:{
					changeGrouping:'',
					conId:''
				},
				step: 0,
				seeStep:1,
				paging:{
					page:1,
					pageSize:10,
					total:0
				},
				search:{
					dsid:'',
					devId:''
				},
				addTo:{
					group:{
						userId:sessionStorage.getItem('userId'),
						gropuName:'',
						groupPhone:'',
						name:'',
						groupNotes:''
					},
				},
			}
		},
		mounted: function() {
			this.searchClick();
			this.$store.dispatch('group');
			document.title=this.$route.meta.title;
		},
		methods: {
			indexMethod(index) {
        		return index + (this.paging.page-1)*this.paging.pageSize+1;
    		},
			handleSizeChange(val){
				this.paging.pageSize = val;
				console.log(this.paging.pageSize)
				this.searchClick();
			},
			next() {
				/*this.addClick();*/
				let that = this;
				if(this.step==0){
					axios({
						method:'post',
						url:that.$store.state.http +'/concode/conByCarBrand',
						data:Qs.stringify({
							conLocaid:that.addTo.list.conLocaid,
							carBrand:that.addTo.list.carBrand
						})
					}).then(function(message){
						console.log(message.data)
						if(message.data.resCode==0){
							console.log(message.data.result)
							if (that.step++ > 3) {
					        	that.step = 0;
					        	// that.addClick();
					        	that.add = false;
					        }
						}else{
							that.$message.error('此定位器ID不存在');
							that.addTo.list.conLocaid = '';
							return false;
						}
					})
				}else{
					if (that.step++ > 3) {
					    that.step = 0;
					    // that.addClick();
					    that.add = false;
					}
				}
		        
			},
			nextSee(){
				if (this.seeStep++ > 1) {
		        	this.seeStep = 1;
		        }
			},
			handleCurrentChange(val){
				this.searchClick();
			},
			addClick(){
				/*console.log(parameter)*/
				if(this.add1.dsid == ''){
					this.$message.error('数据不能为空哦！');
					return false;
				}
				if(this.add1.tags == ''){
					this.$message.error('数据不能为空哦！');
					return false;
				}
				if(this.add1.devId == ''){
					this.$message.error('数据不能为空哦！');
					return false;
				}
				if(this.add1.unit == ''){
					this.$message.error('数据不能为空哦！');
					return false;
				}
				if(this.add1.unitSymbol == ''){
					this.$message.error('数据不能为空哦！');
					return false;
				}
				let that = this;
				let data = this.add1;
				console.log(data);
				axios({
					method:'post',
					dataType: 'jsonp',
					url:'http://192.168.2.123:8080/DataStreams/AddDataStreams',
					data:Qs.stringify(data)
					}).then(function(message){
					console.log(message)
					if(message.data.resCode==0){
						that.searchClick();
						// that.$store.dispatch('group');
						that.$message({
				        	message: '添加成功',
				        	type: 'success'
				        });
					}else if(message.data.resCode==6){
						that.$alert(message.data.result, '请勿重复添加', {
							confirmButtonText: '确定'
						})
					}
				})
				that.universal.add = false;
			},
			deleteClick(row){
				let that = this;
				// console.log(localStorage.getItem('id'))
				let data={
					devId:row.devId,
					dsid:row.dsid
				}
				console.log(data)
				// console.log(333333333)
				this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					console.log(row)
					axios({
						method:'post',
						url:'http://192.168.2.123:8080/DataStreams/RemoveDataStream',
						data:Qs.stringify(data)
					}).then(function(message){
						console.log(message)
						if(message.data.resCode==0){
							that.searchClick();
							that.$message({
					        	message: '删除成功',
					        	type: 'success'
					        });
						}else{
							that.$alert(message.data.result, '系统确认框', {
								confirmButtonText: '确定'
							})
						}
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			
				
			},
			changeshow(row){
				this.universal.change = true;
				this.change = row;
				console.log(row)
			},
			changeclick(row){
				let that = this;
				let data = this.change;
				console.log(data);
				axios({
					method:'post',
					url:'http://192.168.2.123:8080/DataStreams/ModifyDataStreams',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						that.searchClick();
						that.$message({
				        	message: '修改成功',
				        	type: 'success'
				        });
					}else{
						that.searchClick();
						that.$message({
				        	message: '修改失败',
				        	type: 'error'
				        });
					}
				})
				this.universal.change = false;
			},
			searchClick(){
				let data = {
					page:this.paging.page,
					pageSize:this.paging.pageSize
				};
				data.devId=this.search.devId;
				data.dsid=this.search.dsid;
				let that = this;
				console.log(data);
				that.tableData = [];
				console.log(that.tableData)
				axios({
					method:'post',
					url:'http://192.168.2.123:8080/DataStreams/conditionFind',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message)
					console.log(33333333333333333)
					if(message.data.resCode==0){
						console.log(message.data.result)
						that.tableData = message.data.result;
					}else{
						that.tableData = [];
						that.paging.total = 0;
					}
				})
			},
			changeGroupShow(row){
				// this.changeGroups = true;
				// this.changeGrouping.conId = row.conId;
				// this.changeGrouping.changeGrouping = row.groupId;
				// console.log(row)
				let that = this;
				that.universal.look = true;
				let data={
					devId:row.devId,
					dsid:row.dsid,
				}
				axios({
					method:'post',
					url:'http://192.168.2.123:8080/DataStreams/GetDataStream',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(JSON.parse((message.data.errMsg).slice(4)));
					let messData=JSON.parse((message.data.errMsg).slice(4));
					that.look.tags=messData.data.tags[0];
					that.look.unit=messData.data.unit;
					that.look.unitSymbol=messData.data.unit_symbol;
					that.look.dsid=messData.data.id;
					that.look.create_time=messData.data.create_time
					
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.el-input,.el-select {
		width: 180px;
	}
	.el-input[data-v-5aab9e49], .el-select[data-v-5aab9e49]{width: 190px;}
	.firImg{width: 50%;height: 100%;position: absolute;right: 0;top:89px;}
	.el-date-editor.el-input{width: 180px;}
	#PSTlist{padding: 20px;}
</style>