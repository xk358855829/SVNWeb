<template>
	<div id="PSTlist">
		<div class="header">
			<div class="headerTitle">
				<span>apikey</span>
			</div>
		</div>
		<div class="select">
			<span>设备ID：&nbsp;&nbsp;&nbsp;</span>
			<el-input v-model="search.devId" clearable placeholder="请输入内容"></el-input>
			<span>设备名称：</span>
			<el-input v-model="search.title" clearable placeholder="请输入内容"></el-input>
			
			<!--<span>在线：</span>
			<el-select v-model="search.conGroup" placeholder="请选择">
				<el-option label="请选择" value="0"></el-option>
				<el-option label="在线" value="1"></el-option>
				<el-option label="离线" value="2"></el-option>
			</el-select>-->
		</div>
		<!-- <div class="select">
			
			<span>设备描述：</span>
			<el-input v-model="search.desc" clearable placeholder="请输入内容"></el-input>
			<span>设备经度：</span>
			<el-input v-model="search.lon" clearable placeholder="请输入内容"></el-input>
			<span>设备纬度：</span>
			<el-input v-model="search.lat" clearable placeholder="请输入内容"></el-input>
		</div> -->
		<div class="select">
			<!--<el-button class="oyButton" type="success" icon="el-icon-plus"  @click="add = true">新增</el-button>-->
			<!-- <el-button class="oyButton" type="success" icon="el-icon-plus"  @click="conGroup = true">分组</el-button> -->
			<el-button class="oyButton" type="success" icon="el-icon-search" @click='searchClick'>查询</el-button>
			<el-button type="success" class="oyButton" icon="el-icon-plus" @click='universal.add = true'>添加</el-button>
			<!-- <el-button class="oyButton" type="success" @click='searchstatus'>查询状态</el-button> -->
			<!-- <el-button class="oyButton" type="success" @click='reg'>注册设备</el-button> -->
			<!--<el-button class="oyButton" type="success" icon="el-icon-download" @click=''>导出</el-button>-->
		</div>
		<el-dialog title="新增" :visible.sync="universal.add">
			<div>
				<span class="spanClass">设备ID：</span>
				<el-input v-model="add1.devId" clearable placeholder="请输入内容"></el-input><br /><br />

				<span class="spanClass">设备名称：</span>
				<el-input v-model="add1.title" clearable placeholder="请输入内容"></el-input><br /><br />
						
				<span class="spanClass">数据流ID：</span>
				<el-input v-model="add1.dsId" clearable placeholder="请输入内容"></el-input><br /><br />

				<!-- <el-input class="textareaWidth" type="textarea" :rows="5" v-model="add.roleDescribe" clearable placeholder="请输入内容"></el-input> -->
			 </div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.add = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="addClick">添加</el-button>
			</div>
		</el-dialog> 
		<el-dialog title="修改" :visible.sync="universal.change">
			<div>
				<span class="spanClass">设备ID：</span>
				<el-input v-model="change.devId" clearable placeholder="请输入内容"></el-input><br /><br />

				<span class="spanClass">设备名称：</span>
				<el-input v-model="change.title" clearable placeholder="请输入内容"></el-input><br /><br />
						
				<span class="spanClass">数据流ID：</span>
				<el-input v-model="change.dsId" clearable placeholder="请输入内容"></el-input><br /><br />
			 </div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.change = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="changeclick(change)">修改</el-button>
			</div>
		</el-dialog>
		<el-dialog title="查看" :visible.sync="universal.look">
			<div>
				<div class="spanClassT">设备ID：</div>
				<el-input v-model="con.dev_id" clearable placeholder="请输入内容"></el-input><br /><br />

				<div class="spanClassT">apikey内容：</div>
				<el-input v-model="con.key" clearable placeholder="请输入内容"></el-input><br /><br />

				<div class="spanClassT">apikeykey：</div>
				<el-input v-model="con.create_time" clearable placeholder="请输入内容" class="coied"></el-input><br /><br />

				<div class="spanClassT">apikey名称：</div>
				<el-input v-model="con.title" clearable placeholder="请输入内容"></el-input><br /><br />
			 </div>
		</el-dialog>

		<div class="Content">
			<el-table class='oyTable' :data="tableData" style="width: 100%">
				<el-table-column type="index" :index="indexMethod" label="序号" width="100"> </el-table-column>
				
				<el-table-column label="设备ID">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.devId }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.devId }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				<!-- <el-table-column label="数据流ID">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.dsId }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.dsId }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column> -->
				
				<el-table-column label="api名称">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{scope.row.title }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.title }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<!-- <el-table-column label="apiID">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{scope.row.apiId }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.apiId }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column> -->
				
				<el-table-column prop="" label="操作" width=''>
					<template slot-scope="scope">
						<!--<el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-search" @click="seeClick(scope.row)" ></i>
						</el-tooltip>-->
						
						<el-tooltip class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
						</el-tooltip>
						
						<el-tooltip class="item" effect="dark" content="修改" placement="top">
    						<i class="icon-setup el-icon-setting" @click="changeshow(scope.row)"></i>
						</el-tooltip>
						
						<!-- <el-tooltip class="item" effect="dark" content="修改分组" placement="top">
    						<i class="icon-menu el-icon-menu" @click="changeGroupShow(scope.row)"></i>
						</el-tooltip> -->
						<!-- <el-button icon="el-icon-search" circle></el-button> -->
						<!-- <el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-export" @click="changeGroupShow(scope.row)" ></i>
						</el-tooltip> -->

						<el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-search" @click="changeGroupShow(scope.row)" ></i>
						</el-tooltip>
					</template>
				</el-table-column>
			</el-table>
		</div>

		<!-- <el-dialog title="修改分组" :visible.sync="changeGroups">
			<div>
				<span class="spanClassT">组名：</span>
				<el-select v-model="changeGrouping.changeGrouping" placeholder="请选择">
					<el-option v-for="item in this.$store.state.conGroupList" :key="item.groupId" :label="item.gropuName" :value="item.groupId"></el-option></el-option>
				</el-select>
			</div>
			<div slot="footer" class="dialog-footer">
			    <el-button type="success" class="oyButton" @click="changeGroups = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="changeGroup">修改</el-button>
			</div>
		</el-dialog> -->
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
				add1:{
					title:"",
					dsId:"",
					devId:"",
					apiId:''
				},
				change:{
					title:"",
					dsId:"",
					devId:""
				},
				// look:{
				// 	title:"",
				// 	desc:"",
				// 	tags:"",
				// 	lon:'',
				// 	lat:'',
				// 	authInfo:"",
				// 	deviceId:""
				// },
				status:'',
				universal:{
					add:false,
					change:false,
					look:false
				},
				tableData:[],
				con:{
					dev_id:'',
					key:'',
					create_time:'',
					title:''
				},
				li:[],
				add: false,
				conGroup:false,
				change:false,
				see:false,
				changeGroups:false,
				changeGrouping:{
					changeGrouping:'',
					conId:''
				},
				step: 0,
				seeStep:1,
				paging:{
					page:1,
					pageSize:10,
					total:0
				},
				search:{
					devId:"",
					title:"",
					start:"",
					end:""
				},
				addTo:{
					group:{
						userId:sessionStorage.getItem('userId'),
						gropuName:'',
						groupPhone:'',
						name:'',
						groupNotes:''
					},
					list:{
						userId:sessionStorage.getItem('userId'),//登录人信息
						carBrand:'',//车牌号
						conLocation:'',//定位器名字
						conLocaid:'',//定位器ID
						conType:'',//设备型号
						conGroup:'',//设备分组id
						conEquipmType:'1', //设备类型
						conOutTime:'',//出厂日期
						conYear:'',//年限
						conSpeed:'',//超速值
						conExpire:'',//到期时间
						
						sim:'',//sim 卡
						iccid:'',//iccid 卡
						
						installDate:'',//安装日期
						carType:'',//车的类型
						carContact:'',//联系人
						carPhone:'',//联系人手机号
						carEngine:'',//发动机
						installName:'',//安装人员表
						installPhone:'',//安装人手机号
						carVin:'',//车架号(VIN)
						carDriveNumber:'',//驾驶证号
						carRiskStart:'',//保险开始日期
						carRiskEnd:'',//保险结束日期
						
						contrNumber:'',//合同编号
						contrDateL:'',//还款日
						contrAddress:'',//家庭住址
						contrType:'',//类型
						contrName:'',//还款人名字
						contrNames:'',//姓名1
						contrPhones:'',//手机号1
						contrNamey:'',//姓名2
						contrPhoney:'',//手机号2
						companAddress:'',//公司地址
						contrStarDate:'',//开始时间
						contrEndDate:'',//结束时间
						
						masterName:'',//姓名
						masterSex:'',//性别
						masterPhone:'',//手机号
						masterAddres:'',//地址
						masterCard:'',//身份证件
						masterDriveType:'',//驾驶证类型
						masterEmark:''//备注
					}
				},
				seeInfo:{
						 carBrand:'',//车牌 
						 installDate:'',// 安装日期
						 carType:'',// 车的类型
						 carContact:'',// 联系人
						 carPhone:'',// 联系人手机号
						 carEngine:'',// 发动机
						 installName:'',// 安装人员表
						 installPhone:'',// 安装人手机号
						 carVin:'',// 车架号(VIN)
						 carDriveNumber:'',// 驾驶证号
						 carRiskStart:'',// 保险开始日期
						 carRiskEnd:'',// 保险结束日期
						
						
						 contrNumber:'',// 合同编号
						 contrAddress:'',// 家庭住址
						 contrType:'',// 类型
						 contrName:'',// 还款人名字
						 contrNames:'',// 姓名1
						 contrPhones:'',// 手机号1
						 contrNamey:'',// 姓名2
						 contrPhoney:'',// 手机号2
						 companAddress:'',// 公司地址
						 contrStarDate:'',// 开始时间
						 contrEndDate:'',// 结束时间
						 contrDate:''// 还款日   
				},
				controNameL:[{label:'C1',value:1},{label:'C2',value:2},{label:'C3',value:3},{label:'B1',value:4},{label:'B2',value:5},{label:'A1',value:6},{label:'A2',value:7},{label:'A3',value:8}]
			}
		},
		mounted: function() {
			this.searchClick();
			this.$store.dispatch('group');
			document.title=this.$route.meta.title;
		},
		methods: {
			indexMethod(index) {
        		return index + (this.paging.page-1)*this.paging.pageSize+1;
    		},
			handleSizeChange(val){
				this.paging.pageSize = val;
				console.log(this.paging.pageSize)
				this.searchClick();
			},
			next() {
				/*this.addClick();*/
				let that = this;
				if(this.step==0){
					axios({
						method:'post',
						url:that.$store.state.http +'/concode/conByCarBrand',
						data:Qs.stringify({
							conLocaid:that.addTo.list.conLocaid,
							carBrand:that.addTo.list.carBrand
						})
					}).then(function(message){
						console.log(message.data)
						if(message.data.resCode==0){
							console.log(message.data.result)
							if (that.step++ > 3) {
					        	that.step = 0;
					        	// that.addClick();
					        	that.add = false;
					        }
						}else{
							that.$message.error('此定位器ID不存在');
							that.addTo.list.conLocaid = '';
							return false;
						}
					})
				}else{
					if (that.step++ > 3) {
					    that.step = 0;
					    // that.addClick();
					    that.add = false;
					}
				}
		        
			},
			nextSee(){
				if (this.seeStep++ > 1) {
		        	this.seeStep = 1;
		        }
			},
			handleCurrentChange(val){
				// this.searchClick();
			},
			addClick(){
				/*console.log(parameter)*/
				if(this.add1.title == ''){
					this.$message.error('数据不能为空哦！');
					return false;
				}
				if(this.add1.dsId == ''){
					this.$message.error('数据不能为空哦！');
					return false;
				}
				if(this.add1.devId == ''){
					this.$message.error('数据不能为空哦！');
					return false;
				}
				let that = this;
				let data = this.add1;
				console.log(data);
				axios({
					method:'post',
					dataType: 'jsonp',
					url:'http://192.168.2.123:8080/ApiKey/AddKey',
					data:Qs.stringify(data)
					}).then(function(message){
					console.log(message)
					if(message.data.resCode==0){
						that.searchClick();
						// that.$store.dispatch('group');
						that.$message({
				        	message: '添加成功',
				        	type: 'success'
				        });
					}else if(message.data.resCode==6){
						that.$alert(message.data.result, '请勿重复添加', {
							confirmButtonText: '确定'
						})
					}
				})
				that.universal.add = false;
			},
			deleteClick(row){
				let that = this;
				// console.log(localStorage.getItem('id'))
				this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					console.log(row)
					axios({
						method:'post',
						url:'http://192.168.2.123:8080/ApiKey/RemoveKey',
						data:Qs.stringify({
							apiId:row.apiId
						})
					}).then(function(message){
						console.log(message)
						if(message.data.resCode==0){
							that.searchClick();
							that.$message({
					        	message: '删除成功',
					        	type: 'success'
					        });
						}else{
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
			// changeShow(row){
			// 	this.universal.add = true;
			// 	this.change = row;
			// 	console.log(row)
			// },
			changeshow(row){
				this.universal.change = true;
				this.change = row;
				console.log(row)
			},
			changeclick(row){
				let that = this;
				let data = this.change;
				data.devId=row.devId;
				console.log(data);
				axios({
					method:'post',
					url:'http://192.168.2.123:8080/ApiKey/ModifyKey',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						that.searchClick();
						that.$message({
				        	message: '修改成功',
				        	type: 'success'
				        });
					}else{
						that.searchClick();
						that.$message({
				        	message: '修改失败',
				        	type: 'error'
				        });
					}
				})
				this.universal.change = false;
			},
			searchClick(){
				let data = {
					page:this.paging.page,
					pageSize:this.paging.pageSize
				};
				// data.deviceId=row.deviceId;
				data.title=this.search.title;
				data.id=this.search.devId;
				let that = this;
				console.log(data);
				that.tableData = [];
				console.log(that.tableData)
				axios({
					method:'post',
					url:'http://192.168.2.123:8080/ApiKey/conditionFind ',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message)
					if(message.data.resCode==0){
						console.log(message.data.result)
						that.tableData = message.data.result;
						that.paging.total = message.data.count;
					}else{
						that.tableData = [];
						that.paging.total = 0;
					}
				})
			},
			// reg(){
			// 	let data={
			// 		register_code:'123'
			// 	};
			// 	axios({
			// 		method:"post",
			// 		url:'http://192.168.2.123:8080/devices/RegisterDevice',
			// 		data:Qs.stringify(data)
			// 	}).then(function(message){
			// 		console.log(message)
			// 	})
			// },
		
			// seeClick(row){
			// 	let that = this;
			// 	this.see = true;
			// 	axios({
			// 		method:'post',
			// 		url:this.$store.state.http +'/concode/selByConcocel',
			// 		data:Qs.stringify({
			// 			conId:row.conId
			// 		})
			// 	}).then(function(message){
			// 		console.log(message.data)
			// 		if(message.data.resCode==0){
			// 			that.seeInfo = message.data.result;
			// 		}else{
			// 			that.seeInfo = {
			// 				carBrand:'',//车牌 
			// 				installDate:'',// 安装日期
			// 				carType:'',// 车的类型
			// 				carContact:'',// 联系人
			// 				carPhone:'',// 联系人手机号
			// 				carEngine:'',// 发动机
			// 				installName:'',// 安装人员表
			// 				installPhone:'',// 安装人手机号
			// 				carVin:'',// 车架号(VIN)
			// 				carDriveNumber:'',// 驾驶证号
			// 				carRiskStart:'',// 保险开始日期
			// 				carRiskEnd:'',// 保险结束日期
							
							
			// 				contrNumber:'',// 合同编号
			// 				contrAddress:'',// 家庭住址
			// 				contrType:'',// 类型
			// 				contrName:'',// 还款人名字
			// 				contrNames:'',// 姓名1
			// 				contrPhones:'',// 手机号1
			// 				contrNamey:'',// 姓名2
			// 				contrPhoney:'',// 手机号2
			// 				companAddress:'',// 公司地址
			// 				contrStarDate:'',// 开始时间
			// 				contrEndDate:'',// 结束时间
			// 				contrDate:''// 还款日   
			// 			};
			// 		}
			// 	})
			// 	console.log(row)
			// },
			changeGroupShow(row){
				// this.changeGroups = true;
				// this.changeGrouping.conId = row.conId;
				// this.changeGrouping.changeGrouping = row.groupId;
				this.look = row;
				this.universal.look = true;
				let that=this;
				 console.log(row)
				 axios({
					method:"post",
					url:'http://192.168.2.123:8080/ApiKey/FindKeyList',
					data:Qs.stringify({
						devId:row.devId,
						apiId:row.apiId
					})
				}).then(function(message){
					let messData=JSON.parse((message.data.errMsg).slice(4))
					that.con.dev_id=messData.data.id;
					that.con.key=messData.data.keys[0].permissions[0].resources[0].dev_id;
				 	that.con.create_time=messData.data.keys[0].create_time;
				 	that.con.title=messData.data.keys[0].title;
				})
				//  axios({
				// 	method:"post",
				// 	url:'http://192.168.2.123:8080/devices/GetDevice',
				// 	data:Qs.stringify({
				// 		devId:row.deviceId
				// 	})
				// }).then(function(message){
				// 	let messData=JSON.parse((message.data.errMsg).slice(2));
				// 	that.con.id=messData.data.id;
				// 	that.con.protocol=messData.data.protocol;
				// 	that.con.create_time=messData.data.create_time;
				// 	that.con.auth_info=messData.data.auth_info;
				// 	that.con.title=messData.data.title;
				// 	that.con.desc=messData.data.desc;
				// 	that.con.tags=messData.data.tags[0];
				// 	that.con.lon=messData.data.location.lon;
				// 	that.con.lat=messData.data.location.lat;
				// 	that.con.dataid=messData.data.datastreams[0].id;
				// 	that.con.unit=messData.data.datastreams[0].unit;
				// 	that.con.unit_symbol=messData.data.datastreams[0].unit_symbol;
				// 	console.log(message)
				// 	console.log(that.con);
				// })
			},
			// changeClick(){},
			// searchClick(){
			// 	let data = {
			// 		page:this.paging.page,
			// 		pageSize:this.paging.pageSize
			// 	};
			// 	let that = this;
			// 	that.tableData = [];
			// 	console.log(localStorage.getItem('id'))
			// 	axios({
			// 		method:'post',
			// 		url:'http://192.168.2.123:8080/devices/GetDevice',
			// 		data:Qs.stringify({
			// 			id:localStorage.getItem('id')
			// 		})
			// 	}).then(function(message){
			// 		console.log(message)
			// 		if(message.data.resCode==0){
			// 			that.tableData = message.data.errMsg;
			// 			that.paging.total = message.data.count;
			// 		}else{
			// 			that.tableData = [];
			// 			that.paging.total = 0;
			// 		}
			// 	})
			// },
			// changeGroup(){
			// 	let data=this.add1
			// 	let that = this;
			// 	axios({
			// 		method:'post',
			// 		url:'http://192.168.2.123:8080/devices/ModifyDevices',
			// 		data:Qs.stringify(data)
			// 	}).then(function(message){
			// 		console.log(message.data)
			// 		if(message.data.resCode==0){
			// 			that.searchClick();
			// 			that.$message({
			// 	        	message: '修改成功',
			// 	        	type: 'success'
			// 	        });
			// 		}else{
			// 			that.$alert(message.data.result, '系统确认框', {
			// 				confirmButtonText: '确定'
			// 			})
			// 		}
			// 		that.changeGroups = false;
			// 	})
			// }
		}
	}
</script>

<style scoped="scoped">
	.el-input,.el-select {
		width: 180px;
	}
	.el-input[data-v-7a42b1ba], .el-select[data-v-7a42b1ba]{width: 190px;}
	.firImg{width: 50%;height: 100%;position: absolute;right: 0;top:89px;}
	.el-date-editor.el-input{width: 180px;}
	#PSTlist{padding: 20px;}
</style>