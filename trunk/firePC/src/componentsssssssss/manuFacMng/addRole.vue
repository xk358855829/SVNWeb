<template>
	<div id="addRole">
		<div class="header">
			<div class="headerTitle">
				<span>角色管理</span>
			</div>
		</div>
		<div class="select">
			<span>用户类型：</span>
			<el-input v-model="search.roleName" clearable placeholder="请输入内容"></el-input>
		</div>
		<div class="select">
			<el-button type="success" class="oyButton" icon="el-icon-plus" @click='universal.add = true'>添加</el-button>
			<el-button type="success" class="oyButton" icon="el-icon-search" @click='searchClick'>查询</el-button>
		</div>
		<div class="Content">
			<el-table class='oyTable' :data="tableData" style="width: 100%">
				<el-table-column type="index":index="indexMethod" label="序号" width="100"> </el-table-column>
				
				<el-table-column label="用户类型	" width="150">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.roleName }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.roleName }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				<el-table-column label="角色描述" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.roleDescribe }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.roleDescribe }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
		
				<el-table-column prop="" label="操作" width='150'>
					<template slot-scope="scope">
						<el-tooltip class="item" effect="dark" content="修改" placement="top">
    						<i class="icon-change el-icon-edit" @click="changeShow(scope.row)" ></i>
						</el-tooltip>
						
						<el-tooltip v-if="scope.row.roleId == 1" class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-unclick el-icon-delete"></i>
						</el-tooltip>
						
						<el-tooltip v-else = "" class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
						</el-tooltip>

						
						
						<el-tooltip v-if="scope.row.roleId == 1" class="item" effect="dark" content="计费规则" placement="top">
    						<i class="icon-change billingicon el-icon-tickets" @click="rulesClick(scope.row)"></i>
						</el-tooltip>
						<el-tooltip v-else = "" class="item" effect="dark" content="计费规则" placement="top">
    						<i class="icon-unclick el-icon-tickets"></i>
						</el-tooltip>

						<!-- <el-tooltip class="item" effect="dark" content="计费规则" placement="top">
    						<i class="icon-change billingicon el-icon-tickets" @click="billing(scope.row)" ></i>
						</el-tooltip> -->
					</template>
				</el-table-column>
			</el-table>
		</div>
		<el-dialog title="新增" :visible.sync="universal.add">
			<div>
				<span class="spanClass"><span class="aKey">*</span>用户类型：</span>
				<el-input v-model="add.roleName" clearable placeholder="请输入内容"></el-input><br /><br />
						
				<span class="spanClass"><span class="aKey">*</span>用户类型描述：</span>
				<el-input class="textareaWidth" type="textarea" :rows="5" v-model="add.roleDescribe" clearable placeholder="请输入内容"></el-input>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.add = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="addClick">添加</el-button>
			</div>
		</el-dialog>
		<el-dialog title="修改" :visible.sync="universal.change">
			<div>
				<span class="spanClass"><span class="aKey">*</span>用户类型：</span>
				<el-input v-model="change.roleName" clearable placeholder="请输入内容"></el-input><br /><br />
						
				<span class="spanClass"><span class="aKey">*</span>用户类型描述：</span>
				<el-input class="textareaWidth" type="textarea" :rows="5" v-model="change.roleDescribe" clearable placeholder="请输入内容"></el-input>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="hideclick">取消</el-button>
				<el-button type="success" class="oyButton" @click="changeClick">修改</el-button>
			</div>
		</el-dialog>
		<el-dialog title="计费规则" :visible.sync="universal.rules">
			<div>
				<span class="spanClass">一级：</span>
				<el-input v-model="rules.one" clearable class="inputrule"></el-input>--<el-input v-model="rules.two" clearable class="inputrule"></el-input>&nbsp;吨&nbsp;&nbsp;&nbsp;<el-input v-model="rules.three" clearable class="inputrule"></el-input>元<br /><br />
				<span class="spanClass">二级：</span>
				<el-input v-model="rules.four" clearable class="inputrule"></el-input>--<el-input v-model="rules.five" clearable class="inputrule"></el-input>&nbsp;吨&nbsp;&nbsp;&nbsp;<el-input v-model="rules.six" clearable class="inputrule"></el-input>元<br /><br />
				<span class="spanClass">三级：</span>
				<el-input v-model="rules.seven" clearable class="inputrule"></el-input>--<el-input v-model="rules.eight" clearable class="inputrule"></el-input>&nbsp;吨&nbsp;&nbsp;&nbsp;<el-input v-model="rules.nine" clearable class="inputrule"></el-input>元<br /><br />
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="hideclickrules">取消</el-button>
				<el-button type="success" class="oyButton" @click="changeClickrules">结算</el-button>
			</div>
		</el-dialog>
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
				universal:{
					add:false,
					change:false,
					rules:false
				},
				rules:{
					one:'',
					two:'',
					three:'',
					four:'',
					five:'',
					six:'',
					seven:'',
					eight:'',
					nine:''
				},
				paging:{
					page:1,
					pageSize:10,
					total:0
				},
				tableData:[],
				search:{
					roleName:''
				},
				add:{
					roleName:'',
					roleDescribe:''
				},
				change:{
					roleName:'',
					roleDescribe:''
				}
			}
		},
		mounted: function() {
			document.title=this.$route.meta.title;
			this.searchClick();
		},
		methods: {
			changeClickrules(){
				let data={
					one:this.rules.one
				}
				console.log(data)
				axios({
					method:'post',
					// url:this.$store.state.http +'/role/add',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message)
				})
			},
			rulesClick(row){
				this.universal.rules=true;
			},
			hideclickrules(){
				this.universal.rules=false;
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
				if(this.add.roleName==''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				if(this.add.roleDescribe==''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				console.log(this.add)
				let data = this.add;
				let that = this;
				axios({
					method:'post',
					url:this.$store.state.http +'/role/add',
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
						url:this.$store.state.http +'/role/delete',
						data:Qs.stringify({
							roleId:row.roleId
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
			hideclick(){
				this.universal.change = false;
			},
			changeClick(){
				if(this.change.roleName==''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				if(this.change.roleDescribe==''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				console.log(this.change)
				let data = this.change;
				let that = this;
				axios({
					method:'post',
					url:this.$store.state.http +'/role/update',
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
						that.searchClick();
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
				if(this.search.roleName){
					data.roleName = this.search.roleName
				}
				if(this.search.positioneStart){
					data.positioneStart = this.search.positioneStart
				}
				if(this.search.positionereEnd){
					data.positionereEnd = this.search.positionereEnd
				}
				console.log(data)
				let that = this;
				that.tableData = [];
				axios({
					method:'post',
					url:this.$store.state.http +'/role/findAll',
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
	#addRole{padding: 20px;}
	/*.textareaWidth{width: 200px;}*/
	.billingicon{background: #409EFF!important;}
	.inputrule{width: 100px;}
</style>