<template>
	<div id="Repair">
		<div class="header">
			<div class="headerTitle">
				<span>400报修</span>
			</div>
		</div>
		<div class="select">
			<el-button type="success" @click="searchSClick">设备故障历史记录</el-button>
			<el-button type="success" @click="universal.add = true">选择终端用户以及设备</el-button>
			<el-button type="success" @click="addClick">保存</el-button>
		</div>
		<div class="Content">
			<span class="spanClassT">预留手机号：</span>
			<el-input class='oyInput' :disabled="false" v-model="add.repPhone" clearable placeholder="请输入内容"></el-input><br /><br />
						
			<span class="spanClassT">用户名：</span>
			<el-input class='oyInput' :disabled="false" v-model="add.repName" clearable placeholder="请输入内容"></el-input><br /><br />
				
			<span class="spanClassT">故障编号 ：</span>
			<!--<el-input class='oyInput'  :disabled="false" v-model="add.repName" clearable placeholder="请输入内容"></el-input><br /><br />-->
			<el-select class='oyInput' v-model="add.repFauCode" placeholder="请选择">
				<el-option v-for="item in options" :key="item.fauId" :label="item.fauCode" :value="item.fauId"></el-option>
			</el-select><br /><br />
			
			<span class="spanClassT">投诉或建议：</span>
			<el-input :disabled="false" style="width: 220px;" :rows="5" type='textarea' v-model="add.repOpin" clearable placeholder="请输入内容"></el-input><br /><br />
					
			<span class="spanClassT">设备ID：</span>
			<el-input  class='oyInput' :disabled="false" v-model="add.repTypeCode" clearable placeholder="请输入内容"></el-input><br /><br />
					
			<span class="spanClassT">预约时间：</span>
			<!--<el-input :disabled="false" v-model="add.repAboutDate" clearable placeholder="请输入内容"></el-input><br /><br />-->
			<el-date-picker  class='time' value-format='yyyy-MM-dd HH:mm:ss' v-model="add.repAboutDate" type="datetime" placeholder="选择日期时间"></el-date-picker><br /><br />
			
			<span class="spanClassT">所属地区：</span>
			<el-input class='oyInput'  :disabled="false" v-model="add.repAddress" clearable placeholder="请输入内容"></el-input><br /><br />
			
		</div>
		<el-dialog title="设备故障历史记录" :visible.sync="universal.change">
			<div class="select" style="border-bottom: 1px solid #CCCCCC;padding-bottom: 10px;">
				<span>用户名称：</span>
				<el-input class='oyInput' v-model="searchS.repName" clearable placeholder="请输入内容"></el-input>
				<span>手机号 ：</span>
				<el-input class='oyInput' v-model="searchS.repPhone" clearable placeholder="请输入内容"></el-input>
				<el-button type="success" class="oyButton" icon="el-icon-search" @click='searchSClick'>查询</el-button>
			</div>
			<div>
				<el-table class='oyTable' :data="tableDataS" style="width: 100%">
					<el-table-column type="index":index="indexMethod" label="序号" width="100"></el-table-column>
					
					<el-table-column label="用户名	" width="120">
						<template slot-scope="scope">
					    	<el-popover trigger="hover" placement="top">
					        	<p class="TsMaxWidth">{{ scope.row.repName }}</p>
					        	<div slot="reference" class="name-wrapper">
					        		<div class="overflowHide">{{ scope.row.repName }}</div>
					        	</div>
							</el-popover>
				      </template>
					</el-table-column>
					
					<el-table-column label="手机号" width="150">
						<template slot-scope="scope">
					        <el-popover trigger="hover" placement="top">
					        	<p class="TsMaxWidth">{{ scope.row.repPhone }}</p>
					        	<div slot="reference" class="name-wrapper">
					        		<div class="overflowHide">{{ scope.row.repPhone }}</div>
					        	</div>
					        </el-popover>
				      </template>
					</el-table-column>
					
					<el-table-column label="维修时间" width="200">
						<template slot-scope="scope">
					    	<el-popover trigger="hover" placement="top">
					    		<p class="TsMaxWidth">{{ scope.row.repRepairDate }}</p>
					        	<div slot="reference" class="name-wrapper">
					        		<div class="overflowHide">{{ scope.row.repRepairDate }}</div>
					        	</div>
					        </el-popover>
				      </template>
					</el-table-column>
					
					<el-table-column label="来源" width="200">
						<template slot-scope="scope">
					    	<el-popover trigger="hover" placement="top">
					        	<p class="TsMaxWidth" v-if='scope.row.epFaultName ==1 '>平台</p>
					        	<p class="TsMaxWidth" v-else=''>微信</p>
					        	<div slot="reference" class="name-wrapper">
					        		<div class="overflowHide" v-if='scope.row.epFaultName ==1 '>平台</div>
					        		<div class="overflowHide" v-else=''>微信</div>
					        	</div>
					        </el-popover>
				      </template>
					</el-table-column>
					
					<el-table-column label="故障名称" width="200">
						<template slot-scope="scope">
					        <el-popover trigger="hover" placement="top">
					        	<p class="TsMaxWidth">{{ scope.row.repFaultName }}</p>
					        	<div slot="reference" class="name-wrapper">
					        		<div class="overflowHide">{{ scope.row.repFaultName }}</div>
					        	</div>
					        </el-popover>
				      </template>
					</el-table-column>
				</el-table>
			</div>
			<div class="dialogPage">
				<el-pagination background @current-change="handleCurrentChange"  @size-change="handleSizeChange" :current-page.sync="pagingS.page":page-sizes="[3, 4, 5, 6, 7]" :page-size="pagingS.pageSize" layout="sizes, prev, pager, next, jumper,total" :total="pagingS.total"></el-pagination>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.change = false">取消</el-button>
				<!--<el-button type="success" class="oyButton" @click="">修改</el-button>-->
			</div>
		</el-dialog>
		
		<el-dialog title="选择终端用户以及设备" :visible.sync="universal.add">
			<div class="select" style="border-bottom: 1px solid #CCCCCC;padding-bottom: 10px;">
				<span>用户名称：</span>
				<el-input class='oyInput' v-model="search.masterName" clearable placeholder="请输入内容"></el-input>
				<span>手机号 ：</span>
				<el-input class='oyInput' v-model="search.masterPhone" clearable placeholder="请输入内容"></el-input>
				<el-button type="success" class="oyButton" icon="el-icon-search" @click='searchClick'>查询</el-button>
			</div>
			<div>
				<el-table class='oyTable' :data="tableData" style="width: 100%">
					<el-table-column prop="" label="选择" width='100'>
						<template slot-scope="scope">
							<el-radio v-model="universal.radio" :label="scope.row.conId" @change="radioChange(scope.row)">单选</el-radio>
						</template>
					</el-table-column>
					
					<el-table-column label="设备" width="150">
						<template slot-scope="scope">
					        <el-popover trigger="hover" placement="top">
					        	<p  class="TsMaxWidth">{{ scope.row.conLocaId }}</p>
					        	<div slot="reference" class="name-wrapper">
					        		<div class="overflowHide">{{ scope.row.conLocaId }}</div>
					        	</div>
					        </el-popover>
				      </template>
					</el-table-column>
					
					<el-table-column label="用户名称" width="">
						<template slot-scope="scope">
					        <el-popover trigger="hover" placement="top">
					        	<p  class="TsMaxWidth">{{ scope.row.masterName }}</p>
					        	<div slot="reference" class="name-wrapper">
					        		<div class="overflowHide">{{ scope.row.masterName }}</div>
					        	</div>
					        </el-popover>
				      </template>
					</el-table-column>
					
					<el-table-column label="手机号" width="">
						<template slot-scope="scope">
					        <el-popover trigger="hover" placement="top">
					        	<p  class="TsMaxWidth">{{ scope.row.masterPhone }}</p>
					        	<div slot="reference" class="name-wrapper">
					        		<div class="overflowHide">{{ scope.row.masterPhone }}</div>
					        	</div>
					        </el-popover>
				      </template>
					</el-table-column>
					
					<el-table-column label="终端型号" width="400">
						<template slot-scope="scope">
					        <el-popover trigger="hover" placement="top">
					        	<p>{{ scope.row.positionerType }}</p>
					        	<div slot="reference" class="name-wrapper">
					        		<div class="overflowHide">{{ scope.row.positionerType }}</div>
					        	</div>
					        </el-popover>
				      </template>
					</el-table-column>
					
					<el-table-column label="安装单位地址 " width="200">
						<template slot-scope="scope">
					        <el-popover trigger="hover" placement="top">
					        	<p  class="TsMaxWidth">{{ scope.row.carSingle }}</p>
					        	<div slot="reference" class="name-wrapper">
					        		<div class="overflowHide">{{ scope.row.carSingle }}</div>
					        	</div>
					        </el-popover>
				      </template>
					</el-table-column>
				</el-table>
			</div>
			<div class="dialogPage">
				<el-pagination background @current-change="handleCurrentChange"  @size-change="handleSizeChange" :current-page.sync="paging.page":page-sizes="[3, 4, 5, 6, 7]" :page-size="paging.pageSize" layout="sizes, prev, pager, next, jumper,total" :total="paging.total"></el-pagination>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.add = false;add = {}">取消</el-button>
				<el-button type="success" class="oyButton" @click="radioClick">选择</el-button>
			</div>
		</el-dialog>
		
	</div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
export default {
	name: 'pageHome',
	data(){
  		return{
  			universal:{
				add:false,
				change:false
			},
			paging:{
				page:1,
				pageSize:5,
				total:0
			},
			pagingS:{
				page:1,
				pageSize:5,
				total:0
			},
  			add:{
  				repFauCode:0,
  				repPhone:'',
  				repName:'',
  				repTypeCode:'',
  				repAddress:'',
  				repOpin:'',
  				repAboutDate:''
  			},
  			search:{
  				masterName:'',
  				masterPhone:''
  			},
  			searchS:{
  				masterName:'',
  				masterPhone:''
  			},
  			tableData:[],
  			tableDataS:[],
  			options:{}
  		}
	},
	mounted:function(){
		document.title=this.$route.meta.title;
		this.searchClick();
		let that = this;
		axios({
			method:'post',
			url:this.$store.state.http +'/repair/selByfauCode'
		}).then(function(message){
			console.log(message.data)
			if(message.data.resCode==0){
				that.options = message.data.result;
				that.add.repFauCode = message.data.result[0].fauId;
			}
		})
	},
	methods:{
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
  		radioChange(row){
  			console.log(row)
  			this.add = {
  				repPhone:row.masterPhone,
  				repName:row.masterName,
  				repTypeCode:row.conLocaId,
  				repAddress:row.carSingle,
  			};
  		},
  		radioClick(){
  			this.universal.add = false;
  		},
  		addClick(){
  			console.log(this.add)
  			let data = this.add;
  			let that = this;
  			if(that.add.repPhone==''||that.add.repName==''){
  				that.$message.error('请先选择终端设备');
  				return false;
  			}
  			axios({
				method:'post',
				url:this.$store.state.http +'/repair/add',
				data:Qs.stringify(data)
			}).then(function(message){
				console.log(message.data)
				if(message.data.resCode==0){
					that.$message({
			        	message: '保存成功',
			        	type: 'success'
			        });
			        that.$router.push('/pageHome/proProcess')
				}else{
					that.$message.error(message.data.result);
				}
			})
  		},
  		searchClick(){
			let data = {
				page:this.paging.page,
				pageSize:this.paging.pageSize,
			};
			
			if(this.search.masterName){
				data.masterName = this.search.masterName
			}
			if(this.search.masterPhone){
				data.masterPhone = this.search.masterPhone
			}
			console.log(data)
			let that = this;
			axios({
				method:'post',
				url:this.$store.state.http +'/repair/list',
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
		searchSClick(){
			this.universal.change = true
			let data = {
				page:this.pagingS.page,
				pageSize:this.pagingS.pageSize,
				repTypeCode:this.add.repTypeCode
			};
			if(this.searchS.repName){
				data.repName = this.searchS.repName
			}
			if(this.searchS.masterPhone){
				data.repPhone = this.searchS.repPhone
			}
			console.log(data)
			let that = this;
			axios({
				method:'post',
				url:this.$store.state.http +'/repair/selectByCode',
				data:Qs.stringify(data)
			}).then(function(message){
				console.log(message.data)
				if(message.data.resCode==0){
					that.pagingS.total = message.data.count;
					that.tableDataS = message.data.result;
				}else{
					that.tableDataS = [];
				}
			})
		}
	}
}
</script>

<style scoped="scoped">
	.oyInput{
		width: 220px;
	}
	#Repair{padding: 20px;}
	.dialogPage{margin-top: 30px;}
</style>