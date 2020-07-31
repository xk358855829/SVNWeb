<template>
	<div id="faultList">
		<div class="header">
			<div class="headerTitle">
				<span>短信记录</span>
					<router-link to="/pageHome/parkWhite"><el-button type="success" class="oyButton back">返回</el-button></router-link>
			</div>
		</div>
		<!-- <div class="select">
			<el-button type="success" class="oyButton" icon="el-icon-search" @click='searchClick'>查询</el-button>
		</div> -->
		<div class="Content">
			<el-table class='oyTable' :data="tableData" style="width: 100%">
				<el-table-column type="index" :index="indexMethod" label="序号" width="100"> </el-table-column>

				<el-table-column label="车主姓名" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">方案{{ scope.row.name }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">方案{{ scope.row.name }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
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

				<el-table-column label="支付类型" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.pay_type }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.pay_type }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="短信状态" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.sms_status }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.sms_status }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column prop="" label="操作" width='150'>
					<template slot-scope="scope">
						<el-tooltip class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
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
	import {mapState,mapMutations} from 'vuex'
	import {searchClicks} from '../api/api.js'
	import '../api/api.js'
	export default {
		name: 'equipmentList',
		data() {
			return {
				paging:{
					page:1,
					pageSize:10,
					total:0
				},
				fasl:{},
				tableData:[]
			}
		},
		computed:{
			...mapState(["recharge"])
		},
		mounted: function() {
			document.title=this.$route.meta.title;
			this.searchClick();
		},
		methods: {
			...mapMutations(['chezhu']),
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
						method:'get',
						url:that.$store.state.url+'/SMS/delOne?id='+row.id
					}).then(res=>{
						if(res.data.resCode==0){
							that.searchClick();
							that.$message({
								type: 'success',
								message: '删除成功'
							});
						}else{
							that.$message({
								type: 'error',
								message: '删除失败'
							});
						}
					})
				}).catch(() => {
					that.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			searchClick(){
				console.log(this.$route.query.mouses)
				if(this.$route.query.mouses.car_number===undefined){
					this.fasl=JSON.parse(localStorage.getItem('uncharge'))
				}else{
					this.fasl=this.$route.query.mouses
				}
				let data = {
					phone_number:this.fasl.tel,
					car_number:this.fasl.car_number,
					page:this.paging.page,
					pageSize:this.paging.pageSize,
					dealer:localStorage.getItem('dealer')
				};
				let that = this;
				that.tableData = [];
				console.log(data)
				searchClicks('/SMS/findAll',data).then(function(message){
					console.log(message)
					if(message.data.resCode==0){
						that.paging.total = message.data.count;
				 		that.tableData = message.data.result;
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
	.back{float: right;}
</style>