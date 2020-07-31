<template>
	<div id="storeMag">
		<div class="header">
			<div class="headerTitle">
				<span>门店管理</span>
			</div>
		</div>
		<div class="select">
			<span>门店名称：</span>
			<el-input v-model="store.storeName" clearable placeholder="请输入内容"></el-input>
			<span>门店地址：</span>
			<el-input v-model="store.storeAddress" clearable placeholder="请输入内容"></el-input>
			<span>联系人员：</span>
			<el-input v-model="store.storeResponsible" clearable placeholder="请输入内容"></el-input>
			<span>联系电话：</span>
			<el-input v-model="store.storePhone" clearable placeholder="请输入内容"></el-input>
		</div>
		<div class="select">
			<el-button type="success" icon="el-icon-plus"  @click="add = true">添加</el-button>
			<el-button type="success" icon="el-icon-search" @click='searchClick'>查询</el-button>
		</div>
		<div class="Content">
			<el-table :data="tableData" style="width: 100%">
				<el-table-column prop="storeId" label="ID" width="100"></el-table-column>
				<el-table-column prop="storeName" label="门店名称" width="120"></el-table-column>
				<el-table-column prop="storeAddress" label="门店地址" width="300"></el-table-column>
				<el-table-column prop="storeLongitude" label="经度"></el-table-column>
				<el-table-column prop="storeLatitude" label="纬度"></el-table-column>
				<el-table-column prop="storeResponsible" label="联系人员"></el-table-column>
				<el-table-column prop="storePhone" label="联系电话"></el-table-column>
				<el-table-column prop="" label="操作">
					<template slot-scope="scope"  width="150">
						<i class="el-icon-edit" @click="changeShow(scope.row)" ></i>
						<i class="el-icon-delete" @click="deleteClick(scope.row)"></i>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<el-dialog title="添加" :visible.sync="add">
			<span class="spanClass">门店名称：</span>
			<el-input v-model="storeAdd.storeName" clearable placeholder="请输入门店名称"></el-input>
			<br /><br />
			<span class="spanClass">门店地址：</span>
			<el-input v-model="storeAdd.storeAddress" clearable placeholder="请输入门店地址"></el-input>
			<br /><br />
			<span class="spanClass">联系人员：</span>
			<el-input v-model="storeAdd.storeResponsible" clearable placeholder="请输入联系人员姓名"></el-input>
			<br /><br />
			<span class="spanClass">联系电话：</span>
			<el-input v-model="storeAdd.storePhone" clearable placeholder="请输入联系电话"></el-input>
			<br /><br />
			<span class="spanClass">经度：</span>
			<el-input v-model="storeAdd.storeLongitude" clearable placeholder="请输入经度"></el-input>
			<br /><br />
			<span class="spanClass">纬度：</span>
			<el-input v-model="storeAdd.storeLatitude" clearable placeholder="请输入纬度"></el-input>
			
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="add = false">取 消</el-button>
		    <el-button type="primary" @click="addClick">确 定</el-button>
		  </div>
		</el-dialog>
		<el-dialog title="修改" :visible.sync="change">
			<span class="spanClass">门店名称：</span>
			<el-input v-model="storeChange.storeName" clearable placeholder="请输入内容"></el-input><br /><br />
			<span class="spanClass">门店地址：</span>
			<el-input v-model="storeChange.storeAddress" clearable placeholder="请输入内容"></el-input><br /><br />
			<span class="spanClass">联系人员：</span>
			<el-input v-model="storeChange.storeResponsible" clearable placeholder="请输入内容"></el-input><br /><br />
			<span class="spanClass">联系电话：</span>
			<el-input v-model="storeChange.storePhone" clearable placeholder="请输入内容"></el-input><br /><br />
			<span class="spanClass">经度：</span>
			<el-input v-model="storeChange.storeLongitude" clearable placeholder="请输入内容"></el-input><br /><br />
			<span class="spanClass">纬度：</span>
			<el-input v-model="storeChange.storeLatitude" clearable placeholder="请输入内容"></el-input>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="change = false">取 消</el-button>
		    <el-button type="primary"  @click="changeClick">确 定</el-button>
		  </div>
		</el-dialog>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	export default {
		name: 'storeMag',
		data() {
			return {
				store:{
					storeName:'',
					storeAddress:'',
					storeResponsible:'',
					storePhone:''
				},
				storeAdd:{
					storeLongitude:'',
					storeLatitude:'',
					storeName:'',
					storeAddress:'',
					storeResponsible:'',
					storePhone:''
				},
				tableData:[],
				add: false,
				change:false,
				storeChange:{
					storeLongitude:'',
					storeLatitude:'',
					storeName:'',
					storeAddress:'',
					storeResponsible:'',
					storePhone:''
				}
			}
		},
		mounted: function() {
			this.searchClick()
		},
		methods: {
			addClick:function(){
				let that = this;
				if(!this.storeAdd.storeName){
					this.$message({
			        	message: '门店名称不能为空',
			        	type: 'warning'
			        });
				}else if(!this.storeAdd.storeAddress){
					this.$message({
			        	message: '门店地址不能为空',
			        	type: 'warning'
			        });
				}else if(!this.storeAdd.storeResponsible){
					this.$message({
			        	message: '联系人员不能为空',
			        	type: 'warning'
			        });
				}else if(!this.storeAdd.storePhone){
					this.$message({
			        	message: '联系电话不能为空',
			        	type: 'warning'
			        });
				}else if(!this.storeAdd.storeLongitude){
					this.$message({
			        	message: '经度不能为空',
			        	type: 'warning'
			        });
				}else if(!this.storeAdd.storeLatitude){
					this.$message({
			        	message: '纬度不能为空',
			        	type: 'warning'
			        });
				}else{
					let data = {
						storeName: this.storeAdd.storeName,
						storeAddress: this.storeAdd.storeAddress,
						storeLongitude: this.storeAdd.storeLongitude,
						storeLatitude: this.storeAdd.storeLatitude,
						storeResponsible: this.storeAdd.storeResponsible,
						storePhone: this.storeAdd.storePhone
					}
					console.log(data)
					axios({
						method: 'post',
						url: this.$store.state.http + '/store/add',
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
				}
				
			},
			deleteClick:function(row){
				let that = this;
				this.$confirm('此操作将永久删除该条数据, 是否继续?', '系统确认框', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					axios({
						method: 'post',
						url: this.$store.state.http + '/store/delete',
						data: Qs.stringify({
							storeId: row.storeId
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
				this.change = true;
			},
			changeClick:function(){
				let that = this;
				if(!this.storeChange.storeName){
					this.$message({
			        	message: '门店名称不能为空',
			        	type: 'warning'
			        });
				}else if(!this.storeChange.storeAddress){
					this.$message({
			        	message: '门店地址不能为空',
			        	type: 'warning'
			        });
				}else if(!this.storeChange.storeResponsible){
					this.$message({
			        	message: '联系人员不能为空',
			        	type: 'warning'
			        });
				}else if(!this.storeChange.storePhone){
					this.$message({
			        	message: '联系电话不能为空',
			        	type: 'warning'
			        });
				}else if(!this.storeChange.storeLongitude){
					this.$message({
			        	message: '经度不能为空',
			        	type: 'warning'
			        });
				}else if(!this.storeChange.storeLatitude){
					this.$message({
			        	message: '纬度不能为空',
			        	type: 'warning'
			        });
				}else{
					let data = {
						storeId:this.storeChange.storeId,
						storeLatitude:this.storeChange.storeLatitude,
						storeAddress:this.storeChange.storeAddress,
						storeLongitude:this.storeChange.storeLongitude,
						storeName:this.storeChange.storeName,
						storePhone:this.storeChange.storePhone,
						storeResponsible:this.storeChange.storeResponsible,
					}
					console.log(data)
					axios({
						method:'post',
						url:this.$store.state.http +'/store/update',
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
				}
			},
			searchClick:function(){
				let data = new Object();
				if(this.store.storeName){
					data.storeName = this.store.storeName
				}
				if(this.store.storeAddress){
					data.storeAddress = this.store.storeAddress
				}
				if(this.store.storeResponsible){
					data.storeResponsible = this.store.storeResponsible
				}
				if(this.store.storePhone){
					data.storePhone = this.store.storePhone
				}
				console.log(data)
				let that = this;
				axios({
					method:'post',
					url:this.$store.state.http +'/store/selectall',
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
</style>