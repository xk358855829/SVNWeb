<template>
	<div id="add">
		<div class="select">
			<span>菜单名称：</span>
			<el-input v-model="menuName" clearable placeholder="请输入内容"></el-input>
			<span>路径名称：</span>
			<el-input v-model="menuPagename" clearable placeholder="请输入内容"></el-input>
			<span>菜单等级：</span>
			<el-select @change='levelChange' v-model="level" placeholder="请选择">
				<el-option v-for="item in levelList" :key="item.value" :label="item.label" :value="item.value"></el-option>
			</el-select>
		</div>
		<div class="select">
			<span>图片名称：</span>
			<el-input v-model="menuAddress" clearable placeholder="请输入内容"></el-input>
			<span>排序数字：</span>
			<el-input v-model="menuSort" clearable placeholder="请输入内容"></el-input>
			<span>菜单关联：</span>
			<el-select v-model="associated" filterable placeholder="请选择">
				<el-option v-for="item in associatedList" :key="item.menuId" :label="item.menuName" :value="item.menuId"></el-option>
			</el-select>
		</div>
		<div class="select">
			<el-button type="success" class="oyButton" icon="el-icon-plus" @click='addClick'>添加</el-button>
		</div>
		<div class="Content">
			<el-table class="oyTable" :data="tableData" style="width: 100%">
				<el-table-column type="index":index="indexMethod" label="序号" width="100"></el-table-column>
				<el-table-column prop="menuId" label="ID" width="80"></el-table-column>
				<el-table-column prop="menuName" label="菜单名称" width="150"></el-table-column>
				<el-table-column prop="menuPagename" label="路径名称" width="200"></el-table-column>
				<el-table-column prop="menuSort" label="排序数字" width="100"></el-table-column>
				<el-table-column prop="menuAddress" label="图片路径" width="250"></el-table-column>
				<el-table-column prop="menuLevel" label="菜单等级" width=""></el-table-column>
				<el-table-column prop="menuAssociated" label="菜单关联" width=""></el-table-column>
				<el-table-column prop="" label="操作">
					<template slot-scope="scope">
						<el-tooltip class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
						</el-tooltip>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div class="footer">
			<el-pagination background @current-change="handleCurrentChange"  @size-change="handleSizeChange" :current-page.sync="paging.page":page-sizes="[10, 11, 12]" :page-size="paging.pageSize" layout="sizes, prev, pager, next, jumper,total" :total="paging.total"></el-pagination>
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	export default {
		name: 'pageHome',
		data() {
			return {
				paging:{
					page:1,
					pageSize:10,
					total:0
				},
				menuName: '',
				menuAddress: '',
				menuPagename: '',
				menuSort: '',
				levelList: [{
					value: '0',
					label: '一级菜单'
				}, {
					value: '1',
					label: '二级菜单'
				}],
				level: '0',
				associatedList: [{
					menuId: '0',
					menuName: '一级菜单'
				}],
				associated: '0',
				LevelA: [],
				tableData: []
			}
		},
		mounted: function() {
			this.searchClick();
			document.title=this.$route.meta.title;
		},
		methods: {
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
			searchClick() {
				let that = this;
				this.$store.dispatch('getMenu');
				that.tableData = [];
				axios({
					method: 'post',
					url: this.$store.state.http + '/menu/page',
					data: Qs.stringify({
						page:this.paging.page,
						pageSize:this.paging.pageSize,
					})
				}).then(function(message) {
					console.log(message.data)
					if(message.data.resCode == 0) {
						that.tableData = message.data.result;
						that.paging.total = message.data.count;
						console.log(that.tableData)
					}
				})

				axios({
					method: 'post',
					url: this.$store.state.http + '/menu/level',
					data: Qs.stringify({
						menuLevel: 0
					})
				}).then(function(message) {
					console.log(message.data)
					if(message.data.resCode == 0) {
						that.LevelA = message.data.result;
					}
				})
			},
			levelChange() {
				//console.log(this.level)
				if(this.level == 1) {
					this.associatedList = this.LevelA;
					this.associated = this.associatedList[0].menuId;
				} else {
					this.associatedList = [{
						menuId: '0',
						menuName: '一级菜单'
					}];
					this.associated = '0';
				}
			},
			addClick() {
				let that = this;
				let data = {
					menuName: this.menuName,
					menuAddress: this.menuAddress,
					menuPagename: this.menuPagename,
					menuSort: this.menuSort,
					menuLevel: this.level,
					menuAssociated: this.associated,
					menuId: this.menuSort
				}
				console.log(data)
				axios({
					method: 'post',
					url: this.$store.state.http + '/menu/add',
					data: Qs.stringify(data)
				}).then(function(message) {
					console.log(message.data)
					if(message.data.resCode == 0) {
						that.searchClick();
					}
				})
			},
			deleteClick(row) {
				let that = this;
				this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					axios({
						method: 'post',
						url: this.$store.state.http + '/menu/delete',
						data: Qs.stringify({
							menuId: row.menuId
						})
					}).then(function(message) {
						console.log(message.data)
						if(message.data.resCode == 0) {
							that.searchClick();
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
			}
		}
	}
</script>

<style scoped="scoped">
	.el-input {
		width: 180px;
	}
	#add{padding: 20px;}
</style>