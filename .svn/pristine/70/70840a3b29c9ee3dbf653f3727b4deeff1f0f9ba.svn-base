<template>
	<div id="faultList">
		<div class="header">
			<div class="headerTitle">
				<span>卡包</span>
					<router-link to="/pageHome/parkWhite"><el-button type="success" class="oyButton back">返回</el-button></router-link>
			</div>
		</div>
		<!-- <div class="select">
			<el-button type="success" class="oyButton" icon="el-icon-search" @click='searchClick'>查询</el-button>
		</div> -->
		<div class="Content">
			<el-table class='oyTable' :data="tableData" style="width: 100%">
				<el-table-column type="index" :index="indexMethod" label="序号" width="100"> </el-table-column>

				<el-table-column label="卡券编号" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.ticketNumber }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.ticketNumber }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				<el-table-column label="使用方式" width="">
					<template slot-scope="scope">
				        <el-popover>
				        	<!-- <p  class="TsMaxWidth">{{ scope.row.useWay | userwaytyape}}</p> -->
				        	<div slot="reference" class="name-wrapper">
				        		<!-- <div class="overflowHide">{{ scope.row.useWay | userwaytyape}}</div> -->
								<el-tag color="#5daf34"  v-if="scope.row.useWay==1">{{ scope.row.useWay | userwaytyape}}</el-tag>
								<el-tag color="#f8c541"  v-if="scope.row.useWay==2">{{ scope.row.useWay | userwaytyape}}</el-tag>
								<el-tag color="#c9521e"  v-if="scope.row.useWay==3">{{ (scope.row.useWay) | userwaytyape}}</el-tag>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="卡券类型" width="">
					<template slot-scope="scope">
				        <el-popover>
				        	<!-- <p  class="TsMaxWidth">{{ scope.row.ticketType}}</p> -->
				        	<div slot="reference" class="name-wrapper">
				        		<!-- <div class="overflowHide">{{ scope.row.ticketType}}</div> -->
								<el-tag color="#5daf34"  v-if="scope.row.ticketType==1">{{ scope.row.ticketType | cardtype}}</el-tag>
								<el-tag color="#f8c541"  v-if="scope.row.ticketType==2">{{ scope.row.ticketType | cardtype}}</el-tag>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="免费时长" width="">
					<template slot-scope="scope">
				        <el-popover>
				        	<p  class="TsMaxWidth">{{ scope.row.freeTime}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.freeTime}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="需满金额" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.full}}元</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.full}}元</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="减去金额" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.sub}}元</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.sub}}元</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="使用状态" width="">
					<template slot-scope="scope">
				        <el-popover>
				        	<!-- <p  class="TsMaxWidth">{{ scope.row.use_status | statusele}}</p> -->
				        	<div slot="reference" class="name-wrapper">
				        		<!-- <div class="overflowHide">{{ scope.row.use_status | statusele}}</div> -->
								<el-tag color="#5daf34"  v-if="scope.row.use_status==1">{{ scope.row.use_status | statusele}}</el-tag>
								<el-tag color="#f8c541"  v-if="scope.row.use_status==-1">{{ scope.row.use_status | statusele}}</el-tag>
								<el-tag color="#c9521e"  v-if="scope.row.use_status==0">{{ (scope.row.use_status) | statusele}}</el-tag>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="卡券说明" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.remark }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.remark }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="开始时间" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.start_time }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.start_time }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="结束时间" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.end_time }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.end_time }}</div>
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
	import {mapMutations} from 'vuex'
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
				fasl:'',
				tableData:[]
			}
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
					car_number:this.fasl.car_number,
				};
				let that = this;
				that.tableData = [];
				searchClicks('/TicketInfo/selectPackageByCarNumber',data).then(res=>{
					if(res.data.resCode==0){
						for(let i=0;i<res.data.result.length;i++){
							if(res.data.result[i].freeTime==''){
								res.data.result[i].freeTime='-'
							}else{
								res.data.result[i].freeTime=res.data.result[i].freeTime+'分钟'
							}
						}
						that.paging.total = res.data.count;
				 		that.tableData = res.data.result;
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