<template>
	<div id="faultList">
		<div class="header">
			<div class="headerTitle">
				<span>优惠方案</span>
			</div>
		</div>
		<div class="select">
			<span>优惠方案：</span>
			<el-input v-model="search.plans_id" clearable placeholder="请输入内容"></el-input>
			<span>停车场编号：</span>
			<el-input v-model="search.parking_id" clearable placeholder="请输入内容"></el-input>
		</div>
		<div class="select">
			<el-button type="success" class="oyButton" icon="el-icon-plus" @click='ADD' v-show="showchose">添加</el-button>
			<el-button type="success" class="oyButton" icon="el-icon-search" @click='searchClick'>查询</el-button>
		</div>
		<div class="Content">
			<el-table class='oyTable' :data="tableData" style="width: 100%">
				<el-table-column type="index" :index="indexMethod" label="序号" width="100"> </el-table-column>
				
				<el-table-column label="停车场编号" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.parking_id }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.parking_id }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="方案名称" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.plans_name }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.plans_name }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				<el-table-column label="打折优惠金额" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.percent}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.percent }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="满优惠金额" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.full }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.full }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="减优惠金额" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.subtract }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.subtract }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="金额优惠说明" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.remark }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.remark }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="优惠开始时间" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.start_time}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.start_time }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="优惠结束时间" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.end_time}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.end_time }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column prop="" label="操作" width='150'>
					<template slot-scope="scope">
						<el-tooltip class="item" effect="dark" content="修改" placement="top">
    						<i class="icon-change el-icon-edit" @click="changeShow(scope.row)" ></i>
						</el-tooltip>
						
						<el-tooltip class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
						</el-tooltip>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<el-dialog title="新增优惠方案" :visible.sync="universal.add">
			<div>
				<span class="spanClass"><span class="aKey">*</span>停车场编号：</span>
				<el-input :disabled="false" v-model="add.parking_id" clearable placeholder="请输入内容"></el-input><br /><br />
				<span class="spanClass"><span class="aKey">*</span>方案名字：</span>
				<el-input :disabled="false" v-model="add.plans_name" clearable placeholder="请输入内容"></el-input><br /><br />
				<span class="spanClass">减优惠金额：</span>
				<el-input :disabled="false" v-model="add.subtract" clearable placeholder="请输入内容"></el-input>&nbsp;&nbsp;&nbsp;元
				<el-tooltip placement="top">
					<div slot="content">达到一定额度优惠的金额<br/></div>
					<img src="../../../static/image/ming.png" style="vertical-align: middle;" alt="">
				</el-tooltip><br /><br />
				<span class="spanClass">打折优惠金额：</span>
				<el-input :disabled="false" v-model="add.percent" clearable placeholder="请输入折扣" maxlength="1"></el-input>&nbsp;&nbsp;&nbsp;折
				<el-tooltip placement="top">
					<div slot="content">达到一定额度可以打几折<br/></div>
					<img src="../../../static/image/ming.png" style="vertical-align: middle;" alt="">
				</el-tooltip><br /><br />

				<span class="spanClass">满优惠金额：</span>
				<el-input :disabled="false" v-model="add.full" clearable placeholder="请输入内容"></el-input>&nbsp;&nbsp;&nbsp;元
				<el-tooltip placement="top">
					<div slot="content">必需达到一定额度才可以打折或优惠<br/></div>
					<img src="../../../static/image/ming.png" style="vertical-align: middle;" alt="">
				</el-tooltip><br /><br />

				<span class="spanClass"><span class="aKey">*</span>优惠开始时间：</span>
				<el-date-picker v-model="add.start_time" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />

				<span class="spanClass"><span class="aKey">*</span>优惠结束时间：</span>
				<el-date-picker v-model="add.end_time" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />

				<span class="spanClass">金额优惠说明：</span>
				<el-input :disabled="false" class="textareaWidth" type="textarea" :rows="3" v-model="add.remark" clearable placeholder="请输入内容"></el-input><br /><br />
				<span class="spanClass">备注：</span><div class="little">{{this.$store.state.size}}</div>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.add = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="addClick">添加</el-button>
			</div>
		</el-dialog>
		<el-dialog title="修改优惠方案" :visible.sync="universal.change">
			<div>
				<span class="spanClass"><span class="aKey">*</span>方案名字：</span>
				<el-input :disabled="false" v-model="change.plans_name" clearable placeholder="请输入内容"></el-input><br /><br />
				<span class="spanClass">减优惠金额：</span>
				<el-input :disabled="false" v-model="change.subtract" clearable placeholder="请输入内容" @blur="focus8()"></el-input>
				<el-tooltip placement="top">
					<div slot="content">达到一定额度优惠的金额<br/></div>
					<img src="../../../static/image/ming.png" style="vertical-align: middle;" alt="">
				</el-tooltip><br /><br />
				<span class="spanClass">打折优惠金额：</span>
				<el-input :disabled="false" v-model="change.percent" clearable placeholder="请输入折扣" @blur="focus9()" maxlength="2"></el-input>
				<el-tooltip placement="top">
					<div slot="content">达到一定额度可以打几折<br/></div>
					<img src="../../../static/image/ming.png" style="vertical-align: middle;" alt="">
				</el-tooltip><br /><br />

				<span class="spanClass">满优惠金额：</span>
				<el-input :disabled="false" v-model="change.full" clearable placeholder="请输入内容" @blur="focus10()"></el-input>
				<el-tooltip placement="top">
					<div slot="content">必需达到一定额度才可以打折或优惠<br/></div>
					<img src="../../../static/image/ming.png" style="vertical-align: middle;" alt="">
				</el-tooltip><br /><br />

				<span class="spanClass"><span class="aKey">*</span>优惠开始时间：</span>
				<el-date-picker v-model="change.start_time" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />

				<span class="spanClass"><span class="aKey">*</span>优惠结束时间：</span>
				<el-date-picker v-model="change.end_time" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />

				<span class="spanClass">金额优惠说明：</span>
				<el-input :disabled="false" class="textareaWidth" type="textarea" :rows="5" v-model="change.remark" clearable placeholder="请输入内容"></el-input><br /><br />
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="hideclick">取消</el-button>
				<el-button type="success" class="oyButton" @click="changeClick">修改</el-button>
			</div>
		</el-dialog>
		<div class="footer">
			<el-pagination background @current-change="handleCurrentChange"  @size-change="handleSizeChange" :current-page.sync="paging.page" :page-sizes="[1,2,3,10,11,12]" :page-size="paging.pageSize" layout="sizes, prev, pager, next, jumper,total" :total="paging.total"></el-pagination>
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	import {searchClicks} from '../api/api.js'
	export default {
		name: 'equipmentList',
		data() {
			return {
				universal:{
					add:false,
					change:false
				},
				paging:{
					page:1,
					pageSize:10,
					total:0
				},
				tableData:[],
				search:{
					plans_id:'',
					parking_id:''
				},
				add:{
					plans_name:'',
					subtract:'',
					full:'',
					percent:'',
					start_time:'',
					end_time:'',
					remark:'',
					parking_id:''
				},
				change:{
					plans_name:'',
					subtract:'',
					full:'',
					percent:'',
					start_time:'',
					end_time:'',
					remark:''
				},
				showchose:''
			}
		},
		mounted: function() {
			document.title=this.$route.meta.title;
			if(localStorage.getItem('dealer')==0||localStorage.getItem('dealer')==123){
				this.showchose=true
			}else{
				this.showchose=false
			}
			this.searchClick();
			// this.downList();
			// this.common.login()
		},
		methods: {
			// focus2(){
			// 	this.add.subtract=this.common.fouc(this.add.subtract,'元')
			// },
			// focus4(){
			// 	this.add.full=this.common.fouc(this.add.full,'元')
			// },
			// focus5(){
			// 	this.add.percent=this.common.fouc(this.add.percent,'折')
			// },
			focus8(){
				this.change.subtract=this.common.fouc(this.change.subtract,'元')
			},
			focus9(){
				this.change.percent=this.common.fouc(this.change.percent,'折')
			},
			focus10(){
				this.change.full=this.common.fouc(this.change.full,'元')
			},
			ADD(){
				this.universal.add = true
				this.add.subtract='';
				this.add.full='';
				this.add.percent='';
				this.add.start_time='';
				this.add.end_time='';
				this.add.remark=''
				this.add.plans_name=''
				this.add.parking_id=''
			},
			hideclick(){
				this.universal.change = false
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
				if(this.add.start_time==''||this.add.end_time==''||this.add.plans_name==''||this.add.parking_id==''){
					this.$message.error('带*号的不能为空！');
					return false;
				}
				let p=new Date(this.add.start_time)
				let e=new Date(this.add.end_time)
				console.log(e.getTime(e))
				console.log(p.getTime(p))
				if(e.getTime(e)<p.getTime(p)){
					this.$message.error('结束时间不能早于开始时间');
					return false;
				}
				let data = this.add;
				data.userId=localStorage.getItem('userId')
				data.dealer=localStorage.getItem('dealer')
				data.subtract=this.add.subtract
				data.full=this.add.full
				data.percent=(this.add.percent)*10
				console.log(data)
				if(this.add.subtract!=''&&this.add.percent!=''){
					this.add.percent=(this.add.percent)/10
					this.$message.error('减优惠金额和折扣金额只能选一个');
					// this.add.subtract='';
					// this.add.percent='';
					// this.add.full=''
					return false;
				}
				if(data.percent==''&&data.subtract==''&&data.full==''){
					data.percent=(data.percent)/10
					this.$message.error('减优惠金额和折扣金额和满优惠金额至少选一个');
					return false;
				}
				if(isNaN(data.percent)){
					this.$message.error('请输入数字');
					return false;
				}
				if(isNaN(data.subtract)){
					this.$message.error('请输入数字');
					return false;
				}
				if(isNaN(data.full)){
					this.$message.error('请输入数字');
					return false;
				}
				console.log(data)
				if(data.percent==0){
					data.percent=''
				}
				let that=this;
				searchClicks('/salePlans/insertPlan',data).then(res=>{
					if(res.data.resCode==0){
						that.$message({
							type: 'success',
							message: '添加成功'
						});
						that.searchClick()
					}else{
						that.$message({
							type: 'error',
							message: '添加失败'
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
					searchClicks('/salePlans/delPlan',{plans_id:row.plans_id}).then(res=>{
						if(res.data.resCode==0){
							that.searchClick();
							that.$message({
								type: 'success',
								message: '删除成功'
							});
						}else{
							that.$message({
								type: 'error',
								message: res.data.result
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
			changeShow(row){
				this.universal.change = true;
				this.change = Object.assign({},row);
				if(this.change.percent=='-'){
					this.change.percent=''
				}
				if(this.change.full=='-'){
					this.change.full=''
				}
				if(this.change.subtract=='-'){
					this.change.subtract=''
				}
				console.log(row)
			},
			changeClick(){
				console.log(this.change)
				let data={}
				// data.full=this.change.full
				// data.percent=this.change.percent
				// data.subtract=this.change.subtract
				if(this.change.subtract!=''&&this.change.percent!=''){
					this.$message.error('打折优惠金额和减金额只能选一个');
					return false;
				}
				if((/[\u4e00-\u9fa5]+/).test(this.change.subtract)){
					data.subtract=this.change.subtract.substr(0,this.change.subtract.length-1)
				}
				
				if((/[\u4e00-\u9fa5]+/).test(this.change.full)){
					data.full=this.change.full.substr(0,this.change.full.length-1)
				}
				if((/[\u4e00-\u9fa5]+/).test(this.change.percent)){
					data.percent=this.change.percent.substr(0,this.change.percent.length-1)
				}
				if(this.change.percent==''){
					data.percent=''
				}
				if(this.change.full==''){
					data.full=''
				}
				if(this.change.subtract==''){
					data.subtract=''
				}
				if(this.change.plans_name==''){
					this.$message.error('带*号的不能为空');
					return false;
				}
				if(data.start_time==''||data.end_time==''){
					this.$message.error('带*号的不能为空');
					return false;
				}
				if(isNaN(data.percent)){
					this.$message.error('请输入数字');
					return false;
				}
				if(isNaN(data.subtract)){
					this.$message.error('请输入数字');
					return false;
				}
				if(isNaN(data.full)){
					this.$message.error('请输入数字');
					return false;
				}
				if(data.percent==''&&data.subtract==''&&data.full==''){
					this.$message.error('减优惠金额和折扣金额和满优惠金额至少选一个');
					return false;
				}
				data.plans_name=this.change.plans_name
				data.start_time=this.change.start_time;
				data.end_time=this.change.end_time;
				data.remark=this.change.remark;
				data.plans_id=this.change.plans_id
				console.log(data)
				searchClicks('/salePlans/updatePlan',data).then(res=>{
					if(res.data.resCode==0){
						this.$message({
							type: 'success',
							message: '修改成功'
						});
						this.searchClick();
					}else{
						this.$message({
							type: 'error',
							message: '修改失败'
						});
					}
				})
				this.universal.change = false;
			},
			searchClick(){
				let data = {
					page:this.paging.page,
					pageSize:this.paging.pageSize,
					userId:localStorage.getItem('userId'),
					dealer:localStorage.getItem('dealer')
				};
				// if(localStorage.getItem('userId')=='SURIOT'){
				// 	data = {
				// 	page:this.paging.page,
				// 	pageSize:this.paging.pageSize
				//    };
				// }else{
				// 	data = {
				// 	page:this.paging.page,
				// 	pageSize:this.paging.pageSize,
				// 	userId:localStorage.getItem('userId') 
				//    };
				// }
				if(this.search.plans_id){
					data.plans_id = this.search.plans_id
				}
				if(this.search.parking_id){
					data.parking_id=this.search.parking_id
				}
				let that = this;
				that.tableData = [];
				axios({
					method:'post',
					url:this.$store.state.url+'/salePlans/selectAll',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						for(let i=0;i<message.data.result.length;i++){
							if(message.data.result[i].full==''){
								message.data.result[i].full='-'
							}else{
								message.data.result[i].full=message.data.result[i].full+'元'
							}
							if(message.data.result[i].percent==''){
								message.data.result[i].percent='-'
							}else{
								message.data.result[i].percent=(message.data.result[i].percent)/10+'折'
							}
							if(message.data.result[i].subtract==''){
								message.data.result[i].subtract='-'
							}else{
								message.data.result[i].subtract=message.data.result[i].subtract+'元'
							}
						}
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
	#faultList{padding: 20px;}
	/*.textareaWidth{width: 200px;}*/
</style>