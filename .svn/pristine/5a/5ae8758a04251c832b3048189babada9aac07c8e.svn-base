<template>
	<div id="equipmentList">
		<div class="header">
			<div class="headerTitle">
				<span>关联列表</span>
			</div>
		</div>
		<div class="select">
			<span>控制器名称：</span>
			<el-input v-model="store.controName" clearable placeholder="请输入内容"></el-input>
			<span>门店名称：</span>
			<el-input v-model="store.storeName" clearable placeholder="请输入内容"></el-input>
		</div>
		<div class="select">
			<el-button type="success" icon="el-icon-plus"  @click="add = true">添加</el-button>
			<el-button type="success" icon="el-icon-search" @click='searchClick'>查询</el-button>
		</div>
		<div class="Content">
			<el-table :data="tableData" style="width: 100%">
				<el-table-column prop="controId" label="ID" width="100"></el-table-column>
				<el-table-column prop="controName" label="控制器名称" width="120"></el-table-column>
				<el-table-column prop="controMac" label="控制器ID" width="300"></el-table-column>
				<el-table-column prop="controAlias" label="类别编号"></el-table-column>
				<el-table-column prop="storeName" label="所属门店"></el-table-column>
				
				
				<el-table-column label="状态" width="180">
			    	<template slot-scope="scope">
			    		<span class="onRise">使用中</span>
			    	</template>
			    </el-table-column>
				
				<el-table-column label="心跳" width="180">
			    	<template slot-scope="scope">
			    		<span class="onLine">在线</span>
			    	</template>
			  </el-table-column>
				
				<el-table-column prop="" label="操作" width="150" >
					<template slot-scope="scope">
						<el-tooltip class="item" effect="dark" content="修改" placement="top">
    						<i class="el-icon-edit" @click="changeShow(scope.row)" ></i>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="删除" placement="top">
    						<i class="el-icon-delete" @click="deleteClick(scope.row)"></i>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="添加读头" placement="top">
    						<i class="el-icon-circle-plus-outline" @click="addReadHead(scope.row)"></i>
						</el-tooltip>
						<!--<i class="el-icon-edit" @click="changeShow(scope.row)" ></i>
						<i class="el-icon-delete" @click="deleteClick(scope.row)"></i>-->
					</template>
				</el-table-column>
			</el-table>
		</div>
		<el-dialog title="添加" :visible.sync="add">
			<span class="spanClass">门店名称：</span>
			<el-select v-model="storeAdd.storeId" placeholder="请选择">
		    	<el-option v-for="item in storeIdList" :key="item.storeId" :label="item.storeName" :value="item.storeId"></el-option>
  			</el-select><br /><br />
  			
			<span class="spanClass">控制器名称：</span>
			<el-input v-model="storeAdd.controName" clearable placeholder="请输入内容"></el-input><br /><br />
			
			<span class="spanClass">类别编号：</span>
			<el-input v-model="storeAdd.controAlias" :disabled="true" clearable placeholder="请输入内容"></el-input><br /><br />
			
			<span class="spanClass">控制器ID：</span>
			<el-input v-model="storeAdd.controMac" clearable placeholder="请输入内容"></el-input>
			
			<div slot="footer" class="dialog-footer">
		    	<el-button @click="add = false">取 消</el-button>
		    	<el-button type="primary" @click="addClick()">确 定</el-button>
			</div>
		</el-dialog>
		<el-dialog title="修改" :visible.sync="change">
			<span class="spanClass">门店名称：</span>
			<el-select v-model="storeChange.storeId" placeholder="请选择">
		    	<el-option v-for="item in storeIdList" :key="item.storeId" :label="item.storeName" :value="item.storeId"></el-option>
  			</el-select><br /><br />
  			
			<span class="spanClass">控制器名称：</span>
			<el-input v-model="storeChange.controName" clearable placeholder="请输入内容"></el-input><br /><br />
			
			<span class="spanClass">类别编号：</span>
			<el-input v-model="storeChange.controAlias" :disabled="true" clearable placeholder="请输入内容"></el-input><br /><br />
			
			<span class="spanClass">控制器ID：</span>
			<el-input v-model="storeChange.controMac" clearable placeholder="请输入内容"></el-input>
			
			<div slot="footer" class="dialog-footer">
		    	<el-button @click="change = false">取 消</el-button>
		    	<el-button type="primary" @click="changeClick()">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	export default {
		name: 'equipmentList',
		data() {
			return {
				store:{
					controName:'',
					storeName:''
				},
				storeIdList:[],
				storeAdd:{
					storeId:'',
					controName:'',
					controAlias:'F0006',
					controMac:''
				},
				tableData:[],
				add: false,
				change:false,
				storeChange:{
					controAlias:'',
					controId:'',
					controMac:'',
					controName:'',
					storeId:''
				}
			}
		},
		mounted: function() {
			let that = this;
			axios({
				method: 'post',
				url: this.$store.state.http + '/store/selectall'
			}).then((message)=>{
				console.log(message.data)
				if(message.data.resCode == 0){
					that.storeIdList = message.data.result;
					that.storeAdd.storeId = message.data.result[0].storeId
				}
			})
			this.searchClick()
		},
		methods: {
			heartbeatFormat:function(row, column, cellValue){
				console.log(row)
			},
			stateFormat:function(row, column, cellValue){
				console.log(row)
			},
			addReadHead:function(row){
				this.$router.push({path:'/pageHome/addReadHead',query:{controId:row.controId}})
			},
			addClick:function(){
				let that = this;
				let data = that.storeAdd;
				console.log(data)
				axios({
					method: 'post',
					url: that.$store.state.http + '/contro/add',
					data: Qs.stringify(data)
				}).then(function(message) {
					console.log(message.data)
					that.add = false;
					if(message.data.resCode == 0) {
						that.searchClick();
					}else{
						that.$alert(message.data.result, '系统确认框', {
							confirmButtonText: '确定'
						})
					}
				})
			},
			deleteClick:function(row){
				console.log(row)
				let that = this;
				that.$confirm('此操作将永久删除该条数据, 是否继续?', '系统确认框', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					axios({
						method: 'post',
						url: that.$store.state.http + '/contro/del',
						data: Qs.stringify({
							controId: row.controId
						})
					}).then(function(message) {
						console.log(message.data)
						if(message.data.resCode == 0) {
							that.searchClick();
							that.$message({
								type: 'success',
								message: '删除成功'
							});
						} else {
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
			changeShow:function(row){
				this.storeChange = row;
				this.storeChange.storeId = parseInt(this.storeChange.storeId,'10');
				delete this.storeChange.date;
				delete this.storeChange.storeName;
				console.log(row)
				this.change = true;
			},
			changeClick:function(){
				let that = this;
				let data = this.storeChange;
				console.log(data)
				axios({
					method:'post',
					url:this.$store.state.http +'/contro/upContro',
					data:Qs.stringify(data)
				}).then(function(message) {
					console.log(message.data)
					that.change = false;
					if(message.data.resCode == 0) {
						that.searchClick();
					}else{
						that.$alert(message.data.result, '系统确认框', {
							confirmButtonText: '确定'
						})
					}
				})
			},
			searchClick:function(){
				let data = new Object();
				if(this.store.controName){
					data.controName = this.store.controName
				}
				if(this.store.storeName){
					data.storeName = this.store.storeName
				}
				console.log(data)
				let that = this;
				axios({
					method:'post',
					url:this.$store.state.http +'/contro/find',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
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
	.el-input,.el-select {
		width: 180px;
	}
	.onLine{background-color: #5bc0de;padding: 0 10px;color: #FFFFFF;border-radius:4px;}
	.onRise{background-color: #f0ad4e;padding: 0 10px;color: #FFFFFF;border-radius:4px;}
</style>