<template>
	<div id="faultList">
		<div class="header">
			<div class="headerTitle">
				<span>充值记录</span>
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

				<el-table-column label="车牌类型" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.type }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.type }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="充值金额" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.money }}元</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.money }}元</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="充值时间" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.date | validate }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.date | validate }}</div>
				        	</div>
				        </el-popover>
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
			searchClick(){
				if(this.$route.query.mouses.car_number===undefined){
					this.fasl=JSON.parse(localStorage.getItem('uncharge'))
				}else{
					this.fasl=this.$route.query.mouses
				}
				let data = {
					userId:this.fasl.user_id,
					car_number:this.fasl.car_number,
					name:this.fasl.name,
					type:this.fasl.of_type,
					page:this.paging.page,
					pageSize:this.paging.pageSize,
					userId:localStorage.getItem('userId'),
					dealer:localStorage.getItem('dealer')
				};
				let that = this;
				that.tableData = [];
				console.log(data)
				searchClicks('/openVIPRecords/selectVIPRecords',data).then(function(message){
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