<template>
	<div id="parkAnomaly">
		<div class="header">
			<div class="headerTitle">
				<span>停车异常</span>
			</div>
		</div>
		<div class="select">
			<span>ID：</span>
			<el-input v-model="search.positionerId" clearable placeholder="请输入内容"></el-input>
			<span>&nbsp;开始时间：</span>
			<el-date-picker class='time'  value-format='yyyy-MM-dd HH:mm:ss' v-model="search.positioneStart" type="datetime" placeholder="选择日期时间"></el-date-picker>
			<span>&nbsp;结束时间：</span>
			<el-date-picker class='time'  value-format='yyyy-MM-dd HH:mm:ss' v-model="search.positionereEnd" type="datetime" placeholder="选择日期时间"></el-date-picker>
		</div>
		<div class="select">
			<el-button type="success" class="oyButton" icon="el-icon-plus" @click='searchClick'>查询</el-button>
		</div>
		<div class="Content">
			<el-table class="oyTable" :data="tableData" style="width: 100%">
				<el-table-column type="index":index="indexMethod" label="序号" width="100"> </el-table-column>
						
				<el-table-column label="ID" width="120">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.positionerId }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.positionerId }}</div>
				        	</div>
				        </el-popover>
			    	</template>
				</el-table-column>
				
				<el-table-column label="分组" width="150">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.gropuName }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.gropuName }}</div>
						   	</div>
					    </el-popover>
					</template>
				</el-table-column>
						
				<el-table-column label="ICCID" width="200">
					<template slot-scope="scope">
						<el-popover trigger="hover" placement="top">
						    <p  class="TsMaxWidth">{{ scope.row.iccid }}</p>
						   	<div slot="reference" class="name-wrapper">
								<div class="overflowHide">{{ scope.row.iccid }}</div>
						    </div>
						</el-popover>
					</template>
				</el-table-column>
						
				<el-table-column label="车牌号" width="">
					<template slot-scope="scope">
						<el-popover trigger="hover" placement="top">
						    <p  class="TsMaxWidth">{{ scope.row.carBrand }}</p>
						    <div slot="reference" class="name-wrapper">
						        <div class="overflowHide">{{ scope.row.carBrand }}</div>
						    </div>
						</el-popover>
					</template>
				</el-table-column>
				
				<el-table-column label="信号时间" width="">
					<template slot-scope="scope">
						<el-popover trigger="hover" placement="top">
						    <p  class="TsMaxWidth">{{ scope.row.parSignalDate }}</p>
						    <div slot="reference" class="name-wrapper">
						        <div class="overflowHide">{{ scope.row.parSignalDate }}</div>
						    </div>
						</el-popover>
					</template>
				</el-table-column>
				
				<el-table-column label="地址" width="">
					<template slot-scope="scope">
						<el-popover trigger="hover" placement="top">
						    <p  class="TsMaxWidth">{{ scope.row.parAddress }}</p>
						    <div slot="reference" class="name-wrapper">
						        <div class="overflowHide">{{ scope.row.parAddress }}</div>
						    </div>
						</el-popover>
					</template>
				</el-table-column>
				
				<el-table-column label="状态" width="100">
					<template slot-scope="scope">
						<el-popover trigger="hover" placement="top">
						    <p  class="TsMaxWidth">{{ scope.row.abnState }}</p>
						    <div slot="reference" class="name-wrapper">
						        <div class="overflowHide">{{ scope.row.parState }}</div>
						    </div>
						</el-popover>
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
		name: 'equipmentList',
		data() {
			return {
				paging:{
					page:1,
					pageSize:10,
					total:0
				},
				tableData:[],
				search:{
					positionerId:'',
					positioneStart:'',
					positionereEnd:''
				}
			}
		},
		mounted: function() {
			document.title=this.$route.meta.title;
			this.searchClick();
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
			addClick(){},
			deleteClick(row){},
			changeShow(row){},
			changeClick(){},
			searchClick(){
				let data = {
					userId:sessionStorage.getItem('userId'),
					page:this.paging.page,
					pageSize:this.paging.pageSize,
				};
				if(this.search.positionerId){
					data.positionerId = this.search.positionerId
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
					url:this.$store.state.http +'/Statistics/CarParking',
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
	#parkAnomaly{padding: 20px;}
</style>