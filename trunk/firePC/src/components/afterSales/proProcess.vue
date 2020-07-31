<template>
	<div id="proProcess">
		<div class="header">
			<div class="headerTitle">
				<span>角色列表</span>
			</div>
		</div>
		<div class="select">
			<span>用户昵称：</span>
			<el-input v-model="search.reName" clearable placeholder="请输入内容"></el-input>
			
			<span>联系方式：</span>
			<el-input v-model="search.phone" clearable placeholder="请输入内容"></el-input>
			
			<span>报修来源：</span>
			<!--<el-input v-model="search.repSource" clearable placeholder="请输入内容"></el-input>-->
			<el-select v-model="search.repSource" placeholder="请选择">
				<el-option key="" label="未选择" value=""></el-option>
    			<el-option key="1" label="平台" value="1"></el-option>
    			<el-option key="2" label="微信" value="2"></el-option>
			</el-select>
		</div>
		<div class="select">
			
			<span>开始时间：</span>
			<el-date-picker class='oyInp' v-model="search.starDate" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker>
			
			<span>结束时间：</span>
			<el-date-picker class='oyInp' v-model="search.endDate" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker>
			
			<span>处理状态：</span>
			<el-select v-model="search.repType" placeholder="请选择">
				<el-option key="" label="未选择" value=""></el-option>
				<el-option key="0" label="未处理" value="0"></el-option>
    			<el-option key="1" label="正在处理" value="1"></el-option>
    			<el-option key="2" label="处理完成" value="2"></el-option>
			</el-select>
		</div>
		<div class="select">
			<el-button type="success" class="oyButton" icon="el-icon-search" @click='searchClick'>查询</el-button>
		</div>
		<div class="Content">
			<el-table class='oyTable' :data="tableData" style="width: 100%">
				<el-table-column type="index":index="indexMethod" label="序号" width="100"></el-table-column>
				
				<el-table-column label="用户昵称" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.repName }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.repName }}</div>
				        	</div>
				        </el-popover>
			    	</template>
				</el-table-column>
				
				<el-table-column label="联系方式" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.repPhone }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.repPhone }}</div>
				        	</div>
				        </el-popover>
			    	</template>
				</el-table-column>

				<el-table-column label="经销商名称" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.userType }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.userType }}</div>
				        	</div>
				        </el-popover>
			    	</template>
				</el-table-column>
				
				<el-table-column label="设备ID" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="">{{ scope.row.repTypeCode }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.repTypeCode }}</div>
				        	</div>
				        </el-popover>
			    	</template>
				</el-table-column>
				
				<el-table-column label="故障编号" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row. repFauCode }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row. repFauCode }}</div>
				        	</div>
				        </el-popover>
			    	</template>
				</el-table-column>
				
				<el-table-column label="报修时间" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.repRepairDate }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.repRepairDate }}</div>
				        	</div>
				        </el-popover>
			    	</template>
				</el-table-column>
				
				<el-table-column label="处理状态" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p v-if="scope.row.repType == 0" class="TsMaxWidth">未处理</p>
				        	<p v-if="scope.row.repType == 1" class="TsMaxWidth">正在处理</p>
				        	<p v-if="scope.row.repType == 2" class="TsMaxWidth">处理完成</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div v-if="scope.row.repType == 0" class="overflowHide">未处理</div>
				        		<div v-if="scope.row.repType == 1" class="overflowHide">正在处理</div>
				        		<div v-if="scope.row.repType == 2" class="overflowHide">处理完成</div>
				        	</div>
				        </el-popover>
			    	</template>
				</el-table-column>
				
				<el-table-column label="报修来源" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.repSource==1?'平台':'微信' }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.repSource==1?'平台':'微信' }}</div>
				        	</div>
				        </el-popover>
			    	</template>
				</el-table-column>
				
				<el-table-column prop="" label="操作" width='100'>
					<template slot-scope="scope">
						<el-tooltip class="item" effect="dark" content="查看详情" placement="top">
    						<i class="icon-change el-icon-search" @click="changeShow(scope.row)" ></i>
						</el-tooltip>
					</template>
				</el-table-column>
			</el-table>
		</div>
		
		<el-dialog title="查看详情" :visible.sync="universal.change">
			<div class='oyDialogWidth'>
				<el-steps :active="actives" finish-status="success" simple>
					<el-step title="待处理" ></el-step>
					<el-step title="正在处理" ></el-step>
					<el-step title="处理完成" ></el-step>
				</el-steps>
			</div>
			<el-menu :default-active="activeIndex" class="oyMenu" mode="horizontal" @select="handleSelect" background-color="#999999" text-color="#fff" active-text-color="#ffd04b">
				<el-menu-item class="oyMenu" index="1">报修详情</el-menu-item>
				<el-menu-item class="oyMenu" index="2">处理详情</el-menu-item>
				<el-menu-item v-if='actives==3' class="oyMenu" index="3">电话回访</el-menu-item>
			</el-menu>
			<div v-if="activeIndex == '1'">
				<br /><span class="oySpanName">用户名</span><span>{{details.repName}}</span><br /><br /><br />
				<span class="oySpanName">手机号</span><span>{{details.repPhone}}</span><br /><br /><br />
				<span class="oySpanName">报修内容</span><span>{{details.repOpin}}</span><br /><br /><br />
				<span class="oySpanName">报修时间</span><span>{{details.repDate}}</span><br /><br /><br />
				<span class="oySpanName">派出时间</span><span>{{details.repSendDate}}</span><br /><br /><br />
				<span class="oySpanName">解决时间</span><span>{{details.repSolveDate}}</span><br />
				<!--<span class="oySpanName">剩余天数</span><span>{{details.repName}}</span><br />-->
			</div>
			<div v-if="activeIndex == '2'">
				<br /><span class="spanClassT">经销商：</span>
				<el-input :disabled="universal.bstop" v-model="problem.userType" clearable placeholder="请输入内容"></el-input><br /><br />
				
				<span class="spanClassT">维修人员：</span>
				<el-select :disabled="universal.bstop" v-model="problem.repRepairName" @change='changeClick' placeholder="请选择">
					<el-option key="" label="未选择" value=""></el-option>
					<el-option v-for='item in options' :key="item.userId" :label="item.userAlias" :value="item.userId"></el-option>
				</el-select><br /><br />
				
				<span class="spanClassT">联系电话：</span>
				<el-input :disabled="universal.bstop" v-model="problem.phoneNum" clearable placeholder="请输入内容"></el-input><br /><br />
				
				<span class="spanClassT">处理日期：</span>
				<el-date-picker class='oyInp'  :disabled="universal.bstop" v-model="problem.repSolveDate" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br />
				
			</div>
			<div v-if="activeIndex == '3'">
				<span class="spanClassT"style='margin-top: 70px;'>电话回访：</span>
				<el-input type="textarea" style='width: 240px;margin-top: 30px;' :rows="5" placeholder="请输入内容" v-model="textarea"></el-input>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button v-if="activeIndex == '2'&&actives==1" type="success" class="" @click="distribution">任务分配</el-button>
				<el-button v-if="activeIndex == '2'&&actives==2" type="info" class="">任务已分配,处理中</el-button>
				<el-button v-if="activeIndex == '2'&&actives==2" type="success" class="" @click="unDistribution">任务撤销</el-button>
				<el-button disabled v-if="activeIndex == '2'&&actives==3" type="info" class="" >任务分配完成</el-button>
				<el-button v-if="activeIndex == '3'" type="success" class="" >回访</el-button>
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
				activeIndex:'1',
				actives:1,
				textarea:'',
				universal:{
					change:false,
					bstop:false
				},
				paging:{
					page:1,
					pageSize:10,
					total:0
				},
				tableData:[],
				search:{
					reName:'',
					phone:'',
					starDate:'',
					endDate:'',
					repType:'',
					repSource:''
				},
				details:{
					repName:'',
					repPhone:'',
					repOpin:'',
					repDate:'',
					repSendDate:'',
					repSolveDate:''
				},
				problem:{
					userType:'',
					repRepairName:'',
					repSolveDate:'',
					phoneNum:'',
					repId:''
				},
				options:[]
			}
		},
		mounted: function() {
			document.title=this.$route.meta.title;
			this.searchClick();
		},
		methods: {
			handleSelect(key, keyPath) {
				this.activeIndex = key;
        		/*console.log(key, keyPath);*/
     		},
			indexMethod(index) {
        		return index + (this.paging.page-1)*this.paging.pageSize+1;
    		},
			handleSizeChange(val){
				this.paging.pageSize = val;
				this.searchClick();
			},
			handleCurrentChange(val){
				this.searchClick();
			},
			changeShow(row){
				let that = this;
				this.universal.change = true;
				this.problem.userType = row.userType;
				this.problem.repId = row.repId;
				axios({
					method:'post',
					url:this.$store.state.http +'/repair/selectByProblemId',/*查看详情*/
					data:Qs.stringify({
						repId:row.repId
					})
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						that.activeIndex = '1';
						that.details = message.data.result;
						that.problem.repRepairName = message.data.result.repRepairName;
						that.problem.phoneNum = message.data.result.repRepairPhone
						that.problem.repSolveDate = message.data.result.repSolveDate
						that.actives = parseInt(message.data.result.repType,10)+1;
						if(that.actives == 3||that.actives == 2){
							that.universal.bstop = true;
						}else{
							that.universal.bstop = false;
						}
						that.downList(that.problem.userType);
					}
				})
				console.log(row)
			},
			changeClick(val){
				if(val){
					for (var i = 0; i < this.options.length; i++) {
						if(this.options[i].userId == val){
							this.problem.phoneNum = this.options[i].phoneNum;
						}
					}
				}else{
					this.problem.phoneNum = '';
				}
			},
			distribution(){
				if(this.problem.repRepairName == ''){
					this.$message.error('请选择维修人员');
					return false;
				}
				let data = this.problem;
				let that = this;
				data.repType = 1;
				console.log(data)
				axios({
					method:'post',
					url:this.$store.state.http +'/repair/updaByProblemId',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						that.searchClick();
						that.$message({
				        	message: '分配成功',
				        	type: 'success'
				    	});
				        that.universal.change = false;
					}
				})
			},
			unDistribution(){
				let data = this.problem;
				let that = this;
				data.repType = 0;
				data.phoneNum = '';
				data.repRepairName = '';
				data.repSolveDate = '';
				console.log(data)
				axios({
					method:'post',
					url:this.$store.state.http +'/repair/updaByProblemId',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						that.searchClick();
						that.$message({
				        	message: '分配成功',
				        	type: 'success'
				    	});
				        that.universal.change = false;
					}
				})
			},
			searchClick(){
				let data = {
					page:this.paging.page,
					pageSize:this.paging.pageSize,
				};
				
				if(this.search.reName){
					data.reName = this.search.reName
				}
				if(this.search.phone){
					data.phone = this.search.phone
				}
				if(this.search.starDate){
					data.starDate = this.search.starDate
				}
				if(this.search.endDate){
					data.endDate = this.search.endDate
				}
				if(this.search.repType){
					data.repType = this.search.repType
				}
				if(this.search.repSource){
					data.repSource = this.search.repSource
				}
				console.log(data)
				let that = this;
				that.tableData = [];
				axios({
					method:'post',
					url:this.$store.state.http +'/repair/selectProblemList',
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
			},
			downList(type){
				let that = this;
				axios({
					method:'post',
					url:this.$store.state.http +'/repair/selByUserProblemId',
					data:Qs.stringify({
						userType:type
					})
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						/*console.log(message.data.result)*/
						that.options = message.data.result;
						console.log(that.options)
					}
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.el-input,.el-select{
		width: 200px!important;
	}
	#proProcess{padding: 20px;}
	
	/*.textareaWidth{width: 200px;}*/
</style>