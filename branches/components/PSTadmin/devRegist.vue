<template>
	<div id="PSTlist">
		<div class="header">
			<div class="headerTitle">
				<span>客户设备分配</span>
			</div>
		</div>
		<div class="select">
			<!-- <span>分组：</span> -->
			<!--<el-input v-model="store.controName" clearable placeholder="请输入内容"></el-input>-->
			<!-- <el-select v-model="search.conGroup" placeholder="请选择">
				<el-option label="未选择" value="0"></el-option>
		    	<el-option v-for="(item,index) in this.$store.state.conGroupList" :key="item.groupId" :label="item.gropuName" :value="item.groupId"></el-option>
			</el-select> -->
			<!-- <span>设备ID：</span>
			<el-input v-model="search.Id" clearable placeholder="请输入内容"></el-input> -->
			<span>设备编号：</span>
			<el-input v-model="search.modelstyle" clearable placeholder="请输入内容"></el-input>
			<!-- <span>手机号码：</span>
			<el-input v-model="search.modelphoto" clearable placeholder="请输入内容"></el-input> -->
			<!-- <span>接入协议：</span>
			<el-input v-model="search.protocol" clearable placeholder="请输入内容"></el-input>
			<span>创建时间：</span>
			<el-input v-model="search.create_time" clearable placeholder="请输入内容"></el-input>
			<span>鉴权信息：</span>
			<el-input v-model="search.authInfo" clearable placeholder="请输入内容"></el-input><br> -->
			
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
				<!-- <span class="spanClass">设备ID：</span>
				<el-input v-model="add1.Id" clearable placeholder="请输入内容"></el-input><br /><br /> -->

				<!-- <span class="spanClass">账户名：</span> -->
				<span class="spanClassT"><span class="aKey">*</span>设备识别码：</span>
				<el-input v-model="add1.weChatUseName" clearable placeholder="请输入内容"></el-input><br /><br />

				<!-- <span class="spanClass">手机号码：</span> -->
				<span class="spanClassT"><span class="aKey">*</span>经销商：</span>
				<el-input v-model="add1.weChatUsePhone" clearable placeholder="请输入内容"></el-input><br /><br />

			 </div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.add = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="addClick">添加</el-button>
			</div>
		</el-dialog> 
		<el-dialog title="分配" :visible.sync="universal.allot">
			<div>
				<span class="spanClass">账户名：</span>
				<el-input v-model="allot1.weChatFullName" clearable placeholder="请输入内容" :disabled="true"></el-input><br /><br />

				<span class="spanClass">手机号码：</span>
				<el-input v-model="allot1.weChatUsePhone" clearable placeholder="请输入内容" :disabled="true"></el-input><br /><br />

				<span class="spanClass">用户密码：</span>
				<el-input v-model="allot1.weChatUsePassword" clearable placeholder="请输入内容" :disabled="true"></el-input><br /><br />

				<!-- <span class="spanClass">创建时间：</span>
				<el-input v-model="allot1.createTime" clearable placeholder="请输入内容" disabled="true"></el-input><br /><br /> -->
						
				<span class="spanClass">用户姓名：</span>
				<el-input v-model="allot1.weChatUseName" clearable placeholder="请输入内容" :disabled="true"></el-input><br /><br />

				<span class="spanClass">用户类型：</span>
				<el-input v-model="allot1.weChatType" clearable placeholder="请输入内容" :disabled="true"></el-input><br /><br />

				<!-- <span class="spanClass">设备ID：</span> -->
				<span class="spanClassT spanClassTL"><span class="aKey">*</span>设备ID：</span>
				<!-- <el-input v-model="add1.allot" clearable placeholder="请输入内容"></el-input><br /><br /> -->
				<el-input v-model="allot1.weChatUseNames" clearable placeholder="请输入内容"></el-input><br /><br />
						

				<!-- <el-input class="textareaWidth" type="textarea" :rows="5" v-model="add.roleDescribe" clearable placeholder="请输入内容"></el-input> -->
			 </div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.allot = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="allotchange(allot1)">分配</el-button>
			</div>
		</el-dialog>
		<el-dialog title="修改" :visible.sync="universal.change">
			<div>
				<!-- <span class="spanClass">账户名：</span> -->
				<span class="spanClassT"><span class="aKey">*</span>账户名：</span>
				<el-input v-model="change.weChatUseName" clearable placeholder="请输入内容"></el-input><br /><br />

				<!-- <span class="spanClass">手机号码：</span> -->
				<span class="spanClassT"><span class="aKey">*</span>手机号码：</span>
				<el-input v-model="change.weChatUsePhone" clearable placeholder="请输入内容"></el-input><br /><br />
						
				<!-- <span class="spanClass">用户密码：</span> -->
				<span class="spanClassT"><span class="aKey">*</span>用户密码：</span>
				<el-input v-model="change.weChatUsePassword" clearable placeholder="请输入内容"></el-input><br /><br />

				<!-- <span class="spanClass">用户姓名：</span> -->
				<span class="spanClassT"><span class="aKey">*</span>用户姓名：</span>
				<el-input v-model="change.weChatFullName" clearable placeholder="请输入内容"></el-input><br /><br />
			
				<!-- <span class="spanClass">用户类型：</span> -->
				<span class="spanClassT"><span class="aKey">*</span>用户类型：</span>
				<el-input v-model="change.weChatType" clearable placeholder="请输入内容"></el-input><br /><br />
				<!-- <el-input class="textareaWidth" type="textarea" :rows="5" v-model="add.roleDescribe" clearable placeholder="请输入内容"></el-input> -->
			 </div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="hideclick">取消</el-button>
				<el-button type="success" class="oyButton" @click="changeclick(change)">修改</el-button>
			</div>
		</el-dialog>
		<el-dialog title="查看" :visible.sync="universal.look">
			<div>
				<el-table class='oyTable' :data="li" style="width: 100%">
					<el-table-column type="index" :index="indexMethod" label="序号"> </el-table-column>
					<el-table-column label="设备ID" width="">
						<template slot-scope="scope">
							<el-popover trigger="hover" placement="top">
								<p class="TsMaxWidth">{{ scope.row.deviceId}}</p>
								<div slot="reference" class="name-wrapper">
									<div class="overflowHide">{{ scope.row.deviceId}}</div>
								</div>
							</el-popover>
						</template>
					</el-table-column>
					<el-table-column prop="" label="操作">
					<template slot-scope="scope">
						<!--<el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-search" @click="seeClick(scope.row)" ></i>
						</el-tooltip>-->
						
						<el-tooltip class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-delete el-icon-delete" @click="deleteChild(scope.row)"></i>
						</el-tooltip>
						</template>
					</el-table-column>
				</el-table>
			 </div>
		</el-dialog>

		<div class="Content">
			<el-table class='oyTable' :data="tableData" style="width: 100%">
				<el-table-column type="index" :index="indexMethod" label="序号" width="100"> </el-table-column> -->
				
				<el-table-column label="客户编码">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.dealerCode }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.dealerCode }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				<el-table-column label="客户名称" width="120">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.dealerName }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.dealerName }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				<el-table-column label="绑定手机">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">-</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">-</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				<el-table-column label="绑定邮箱">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">-</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">-</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				<el-table-column label="设备编号" width="100">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.deviceMac }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.deviceMac }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				<el-table-column label="识别码匹配日期">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{scope.row.time}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.time}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>



				<el-table-column label="操作人员">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{scope.row.userName}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.userName}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
		
				<el-table-column prop="" label="操作" width="">
					<template slot-scope="scope">
						<el-tooltip class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
						</el-tooltip>


						
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div class="footer">
			<el-pagination background @current-change="handleCurrentChange"  @size-change="handleSizeChange" :current-page.sync="paging.page":page-sizes="[1,2,3,10, 11, 12]" :page-size="paging.pageSize" layout="sizes, prev, pager, next, jumper,total" :total="paging.total"></el-pagination>
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	// import $ from 'jquery'
	import axios from 'axios'
	export default {
		name: 'equipmentList',
		data() {
			return {
				levelList: [],
				level: '0',
				add1:{
					weChatType:'',
					weChatFullName:'',
					weChatUsePassword:'',
					weChatUsePhone:'',
					weChatUseName:''
				},
				li:[],
				added:"",
				send:{
					deviceId:'',
					title:'',
					timeOut:'',
					qos:''
				},
				change:{
					title:"",
					desc:"",
					tags:"",
					lon:'',
					lat:'',
					authInfo:"",
					deviceId:""
					
				},
				status:'',
				universal:{
					add:false,
					change:false,
					look:false,
					send:false,
					allot:false
				},
				tableData:[],
				con:{
					id:'',
					protocol:'',
					create_time:'',
					auth_info:'',
					title:'',
                    desc:'',
					tags:'',
					lon:'',
					lat:'',
					dataid:'',
					unit:'',
					unit_symbol:''
				},
				li:[],
				add: false,
				topic:false,
				conGroup:false,
				change:false,
				send:false,
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
				allot1:{
					deviceId:'',
					trafficCard:"",
					deviceType:"",
					deviceModel:"",
					deviceName:"",
					createTime:'',
					personnel:'',
					status:'',
					// weChatUseNames:''
				},
				search:{
					weChatUseName:"",
					Id:"",
					start:"",
					end:"",
					modelstyle:'',
					modelphoto:''
				}
			}
		},
		mounted: function() {
			this.searchClick();
			// this.$store.dispatch('group');
			document.title=this.$route.meta.title;
			if(sessionStorage.getItem("dealer")=='123'){
				this.added=1
			}
		},
		methods: {
			hideclick(){
				this.universal.change = false;
			},
			indexMethod(index) {
        		return index + (this.paging.page-1)*this.paging.pageSize+1;
    		},
			handleSizeChange(val){
				this.paging.pageSize = val;
				console.log(this.paging.pageSize)
				// this.searchClick();
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
				// if(this.add1.deviceId== ''){
				// 	this.$message.error('数据不能为空哦！');
				// 	return false;
				// }
				if(this.add1.weChatType == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				if(this.add1.weChatFullName == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				if(this.add1.weChatUsePassword == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				if(this.add1.weChatUsePhone == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				if(this.add1.weChatUseName == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				// if(this.add1.Id == ''){
				// 	this.$message.error('数据不能为空哦！');
				// 	return false;
				// }
				let data = this.add1;
				let that=this;
				data.dealer=sessionStorage.getItem("dealer");
				console.log(data);
				axios({
					method:'post',
					dataType: 'jsonp',
					url:this.$store.state.http+'/wechatUser/add',
					data:Qs.stringify(data)
					}).then(function(message){
					console.log(message)
					console.log((message.data.errMsg).split(":")[1])
					localStorage.setItem('id',(message.data.errMsg).split(":")[1])
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
			deleteChild(row){
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
						url:this.$store.state.http+'/wechatUser/removeWechatDev',
						data:Qs.stringify({
							id:row.id,
							// deviceId:row.deviceId,
							// weChatUsePhone:sessionStorage.getItem("weChatUsePhone")
						})
					}).then(function(message){
						console.log(message)
						if(message.data.resCode==0){
							console.log(1111111111111111111)
							that.changeGroupShow(row)
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
						url:this.$store.state.http+'/dev2dealer/delete',
						data:Qs.stringify({
							id:row.id
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
			changeshow(row){
				this.universal.change = true;
				this.change = Object.assign({},row);
				console.log(row)
			},
			changeclick(row){
				if(this.change.weChatUseName == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				if(this.change.weChatUsePhone == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				if(this.change.weChatUsePassword == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				if(this.change.weChatFullName == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				if(this.change.weChatType == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				let that = this;
				let data = this.change;
				data.wechatUser=row.wechatUser;
				console.log(data);
				axios({
					method:'post',
					url:this.$store.state.http+'/wechatUser/update',
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
			// changeorder(send){
			// 	let data={
			// 		devId:this.send.deviceId,
			// 		qos:this.send.qos,
			// 		timeOut:this.send.timeOut,
			// 		key:'masterkey'
			// 	}
			// 	console.log(data)
			// 	axios({
			// 		method:"post",
			// 		url:'http://192.168.2.123:8080/SendCmds/SendBytesCmds',
			// 		data:Qs.stringify(data)
			// 	}).then(function(mess){
			// 		console.log(mess)
			// 		  axios({
			// 		 	method:"post",
			// 		 	url:'http://192.168.2.123:8080/SendCmds/QueryCmdsStatus',
			// 		 	data:Qs.stringify({
			// 		 		cmdsId:mess.data.cmd_uuid
			// 		 	})
			// 		 }).then(function(message){
			// 		 	console.log(JSON.parse((message.data.errMsg).slice(4)))
			// 		 })
			// 	})
			// 	this.universal.send = true;
			// },
			order(row){
				this.universal.send = true;
				this.send = row;

				
			},
		
			allotchange(row){
				if(this.allot1.weChatUseNames == undefined){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				let that=this;
				console.log(that.allot1.weChatUseNames);
				let data={
					deviceId:that.allot1.weChatUseNames,
					weChatUsePhone:row.weChatUsePhone
				}
				console.log(data)
				axios({
					method:'post',
					url:this.$store.state.http+'/wechatUser/addWechatDev',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message);
					that.universal.allot=false;
					that.allot1.weChatUseNames=""
					if(message.data.resCode==0){
						that.searchClick();
						that.$message({
				        	message: '分配成功',
				        	type: 'success'
				        });
					}else if(message.data.resCode==1){
						that.$message({
				        	message: '请勿重复添加或添加有效设备',
				        	type: 'error'
				        });
					}
				})
				
			},
			allot(row){
				this.universal.allot = true;
				this.allot1 = row;
				let that=this;
				console.log(row)
				let data={
					weChatUsePhone:row.weChatUsePhone
				}
				console.log(data);
				// axios({
				// 	method:'post',
				// 	url:'http://192.168.2.123:8796/wechatUser/findDevbyUser',
				// 	data:Qs.stringify(data)
				// }).then(function(message){
				// 	console.log(1111111111111111)
				// 	console.log(message.data.result)
				// 	that.len=message.data.result;
				// })
			},
			changeGroupShow(row){
				this.look = row;
				this.universal.look = true;
				let that=this;
				let data ={
					weChatUsePhone:row.weChatUsePhone
				}
				 console.log(data)
				 sessionStorage.setItem("weChatUsePhone",row.weChatUsePhone)
				 axios({
					method:"post",
					url:this.$store.state.http+'/wechatUser/findDevbyUser',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message)
					that.li=message.data.s
				})
			},
			// changeClick(){},
			searchClick(){
				// let data = {
				// 	page:this.paging.page,
				// 	pageSize:this.paging.pageSize,
				// 	userId: localStorage.getItem('userId'),
				// 	userType:localStorage.getItem('userType'),
				// 	dealerCode:localStorage.getItem('dealerId'),
				// };
				let data = {};
				if(localStorage.getItem('userId')=='SURIOT'){
					data = {
					page:this.paging.page,
					pageSize:this.paging.pageSize,
					userType:localStorage.getItem('userType'),
					dealerCode:localStorage.getItem('dealerId'),
				   };
				}else{
					data = {
					page:this.paging.page,
					pageSize:this.paging.pageSize,
					userId:localStorage.getItem('userId'),
					userType:localStorage.getItem('userType'),
					dealerCode:localStorage.getItem('dealerId'),
				   };
				}
				data.weChatType=this.search.modelstyle
				data.weChatUsePhone=this.search.modelphoto
				let that = this;
				that.tableData = [];
			    console.log(data);
				axios({
					method:'post',
					url:this.$store.state.http+'/dev2dealer/list',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message)
					if(message.data.resCode==0){
						for(var i=0;i<message.data.results.length;i++){
							message.data.results[i].time=that.common.timeToDate(JSON.stringify(message.data.results[i].time).slice(0,10))
						}
						that.tableData = message.data.results;
						that.paging.total = message.data.count;
					}else{
						that.tableData = [];
						that.paging.total = 0;
					}
				})
			},
			changeGroup(){
				let data=this.add1
				let that = this;
				axios({
					method:'post',
					url:this.$store.state.http+'/devices/ModifyDevices',
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
						that.$alert(message.data.result, '系统确认框', {
							confirmButtonText: '确定'
						})
					}
					that.changeGroups = false;
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.el-input,.el-select {
		width: 180px;
	}

	.firImg{width: 50%;height: 100%;position: absolute;right: 0;top:89px;}
	.el-date-editor.el-input{width: 180px;}
	#PSTlist{padding: 20px;}
	.spanClassTL{width: 200px;}
</style>