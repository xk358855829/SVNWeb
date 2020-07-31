<template>
	<div id="faultList">
		<div class="header">
			<div class="headerTitle">
				<span>车辆类型</span>
			</div>
		</div>
		<div class="select">
			<!-- <span>车牌号码：</span>
			<el-input v-model="search.car_number" clearable placeholder="请输入内容"></el-input> -->
			<span>停车场编号：</span>
			<el-input v-model="search.parking_id" clearable placeholder="请输入内容"></el-input>
		</div>
		<div class="select">
			<el-button type="success" class="oyButton  oychange" icon="el-icon-plus" @click='usage' v-show="showchose">添加</el-button>
			<!-- <el-button type="success" class="oyButton" icon="el-icon-plus" @click='universal.add = true'>添加</el-button> -->
			<el-button type="success" class="oyButton" icon="el-icon-search" @click='searchClick'>查询</el-button>
		</div>
		<div class="Content">
			<el-table class='oyTable' :data="tableData" style="width: 100%">
				<el-table-column type="index":index="indexMethod" label="序号" width="100"> </el-table-column>
				<el-table-column label="停车场编号" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ chosename(scope.row.parking_id) }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ chosename(scope.row.parking_id) }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				<el-table-column label="车辆类型" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.name }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.name }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="车辆备注" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.remark }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.remark }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<!-- <el-table-column label="开始时间" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.start_time}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.start_time }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="结束时间" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.end_time}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.end_time }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column> -->
		
				<el-table-column prop="" label="操作" width='150'>
					<template slot-scope="scope">
						<el-tooltip class="item" effect="dark" content="修改" placement="top">
    						<i class="icon-change el-icon-edit" @click="changeShow(scope.row)" ></i>
						</el-tooltip>
						
						<!-- <el-tooltip v-if="scope.row.roleId == 1" class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-unclick el-icon-delete"></i>
						</el-tooltip> -->
						
						<!-- <el-tooltip class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
						</el-tooltip> -->

					</template>
				</el-table-column>
			</el-table>
		</div>
		<el-dialog title="新增" :visible.sync="universal.add1">
			<div>
				<span class="aKey">*</span><span class="spanClass">停车场编号：</span>
				<el-input v-model="innersearch.parking_id" clearable placeholder="请输入内容"></el-input><br><br>
				<span class="aKey">*</span><span class="spanClass">车辆类型：</span>
				<el-input v-model="innersearch.name" clearable placeholder="请输入内容"></el-input><br><br>
				<span class="aKey">*</span><span class="spanClass">车辆备注：</span>
				<el-input v-model="innersearch.remark" clearable placeholder="请输入内容"></el-input><br><br>
				<span class="aKey">*</span><span class="spanClass">开始时间：</span>
				<el-date-picker v-model="innersearch.start_time" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br><br>
				<span class="aKey">*</span><span class="spanClass">结束时间：</span>
				<el-date-picker v-model="innersearch.end_time" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br><br>
				<span class="spanClass">备注：</span><div class="little">{{this.$store.state.size}}</div>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="SHowhide">取消</el-button>
				<el-button type="success" class="oyButton" @click="addcarnumberinner">添加</el-button>
			</div>
		</el-dialog>
		<el-dialog title="修改" :visible.sync="universal.change1">
			<div>
				<span class="spanClass">车辆类型：</span>
				<el-input :disabled="false" v-model="change1.name" clearable placeholder="请输入内容"></el-input><br /><br />
				
				<span class="spanClass">车辆备注：</span>
				<el-input class="textareaWidth" type="textarea" :rows="5" v-model="change1.remark" clearable placeholder="请输入内容"></el-input><br /><br />
						
				<span class="spanClass">开始时间：</span>
				<el-date-picker v-model="change1.start_time" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />

				<span class="spanClass">结束时间：</span>
				<el-date-picker v-model="change1.end_time" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="hideclick1">取消</el-button>
				<el-button type="success" class="oyButton" @click="changeClick1">修改</el-button>
			</div>
		</el-dialog>
		<!-- <div class="footer">
			<el-pagination background @current-change="handleCurrentChange"  @size-change="handleSizeChange" :current-page.sync="paging.page" :page-sizes="[10, 11, 12]" :page-size="paging.pageSize" layout="sizes, prev, pager, next, jumper,total" :total="paging.total"></el-pagination>
		</div> -->
		<div class="footer">
			<el-pagination background @current-change="handleCurrentChange"  @size-change="handleSizeChange" :current-page.sync="paging.page" :page-sizes="[1,2,3,10,11,12]" :page-size="paging.pageSize" layout="sizes, prev, pager, next, jumper,total" :total="paging.total"></el-pagination>
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	import {mapState,mapActions} from 'vuex'
	export default {
		name: 'equipmentList',
		data() {
			return {
				obj:[],
				numw:[],
				numvalue:[],
				universal:{
					add1:false,
					change:false,
					change1:false,
				},
				paging:{
					page:1,
					pageSize:10,
					total:0
				},
				change1:{
					name:'',
					remark:'',
					start_time:'',
					end_time:''
				},
				tableData:[],
				search:{
					// parking_id:'',
					// car_number:'',
					// in_time:'',
					// out_time:'',
					// InroadGateId:'',
					// status:''
					parking_id:''
				},
				innersearch:{
					name:'',
					remark:'',
					start_time:'',
					end_time:'',
					parking_id:''
				},
				change:{
					fauId:'',
					fauMode:'',
					fauName:'',
					fauSolve:'',
					fauCode:'',
					devId:''
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
			let data = {
				page:this.paging.page,
				pageSize:100000,
				userId:localStorage.getItem('userId'),
				dealer:localStorage.getItem('dealer')
			};
			this.parkname(data)
			this.searchClick();
			// this.downList();
			// this.common.login()
		},
		computed:{
			...mapState(['parkingname'])
		},
		methods: {
			...mapActions(['parkname']),
			addcarnumberinner(){
				let that=this
				if(that.innersearch.name==''||that.innersearch.remark==''||that.innersearch.start_time==''||that.innersearch.end_time==''||that.innersearch.parking_id==''){
					that.$message.error('带*的数据不能为空哦！');
					return false;
				}
				var date = new Date(that.innersearch.start_time.slice(0,that.innersearch.start_time.length-1));
				var time1 = date.getTime();
				var date = new Date(that.innersearch.end_time.slice(0,that.innersearch.end_time.length-1));
				var time2 = date.getTime();
				if(time1>time2){
					that.$message.error('开始时间不能早于结束时间');
					return false;
				}
				// let data={
				// 	name:this.innersearch.name,
				// 	remark:this.innersearch.remark,
				// 	start_time:this.innersearch.start_time,
				// 	end_time:this.innersearch.end_time
				// }
				axios({
					method:'get',
					url:that.$store.state.url+"/carNumberType/setInfo?name="+that.innersearch.name+"&parking_id="+that.innersearch.parking_id+"&remark="+that.innersearch.remark+"&start_time="+that.innersearch.start_time+"&end_time="+that.innersearch.end_time+"&dealer="+localStorage.getItem('dealer'),
					// data:Qs.stringify(data)
				}).then(function(message){
					if(message.data.resCode==0){
						that.$message({
				        	message: '添加成功',
				        	type: 'success'
						});
						that.searchClick()
						that.innersearch.name=''
						that.innersearch.remark=''
						that.innersearch.start_time=''
						that.innersearch.end_time=''
					}else{
						that.$message({
				        	message: '添加失败',
				        	type: 'error'
						});
					}
					that.universal.add1 = false
				})
			},
			SHowhide(){
				this.universal.add1=false;
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
			usage(){
				this.universal.add1 = true
				let that=this
				that.innersearch.name=''
				that.innersearch.remark=''
				that.innersearch.start_time=''
				that.innersearch.end_time=''
			},
			deleteClick(row){
				let that = this;
				this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					axios({
						method:'post',
						url:that.$store.state.url+'/carNumberType/delInfo',
						data:Qs.stringify({
							id:row.id
						})
					}).then(function(message){
						console.log(message.data)
						if(message.data.resCode==0){
							that.$message({
					        	message: '删除成功',
					        	type: 'success'
							});
							that.searchClick()
						}else{
							that.$message({
					        	message: '删除失败',
					        	type: 'error'
					        });
						}
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			changeShow(row){
				this.universal.change1 = true;
				this.change1 = Object.assign({},row);
				console.log(row)
			},
			changeClick1(){
				let that=this
				var date = new Date(that.change1.start_time.slice(0,that.change1.start_time.length-1));
				var time1 = date.getTime();
				var date = new Date(that.change1.end_time.slice(0,that.change1.end_time.length-1));
				var time2 = date.getTime();
				if(time1>time2){
					that.$message.error('开始时间不能早于结束时间');
					return false;
				}
				axios({
					method:'get',
					url:that.$store.state.url+"/carNumberType/upInfo?name="+that.change1.name+"&remark="+that.change1.remark+"&start_time="+that.change1.start_time+"&end_time="+that.change1.end_time+"&id="+that.change1.id,
				}).then(function(message){
					if(message.data.resCode==0){
						that.$message({
							message: '修改成功',
							type: 'success'
						});
						that.searchClick()
					}else{
						that.$message({
							message: '修改失败',
							type: 'error'
						});
					}
				})
				that.universal.change1=false
			},
			chosename(val){
				this.parkingname.forEach((a,index)=>{
					if(a.parking_id==val)
					val=a.parking_name
				})
				return val
			},
			hideclick1(){
				this.universal.change1=false
			},
			searchClick(){
				let data = {
					page:1,
					pageSize:100,
					userId:localStorage.getItem('userId'),
					dealer:localStorage.getItem('dealer'),
				};
				if(this.search.parking_id){
					data.parking_id=this.search.parking_id
				}
				let that=this
				that.tableData = [];
				axios({
					method:'post',
					url:that.$store.state.url+'/carNumberType/findInfo',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message)
					if(message.data.resCode==0){
						that.tableData=message.data.result
						that.paging.total = message.data.count;
					}
					console.log(that.existing)
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
	.alipay{
		width: 50%;
		float: left;
	}
	.alipays{
		display:inline-block;
	}
	.spanClass{
		width: 106px!important;
	}
	.el-input--small{
		width:150px!important;
	}
</style>