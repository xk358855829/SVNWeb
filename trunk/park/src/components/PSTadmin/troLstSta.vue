<template>
	<div id="PSTlist">
		<div class="header">
			<div class="headerTitle">
				<span>故障列表统计</span>
			</div>
		</div>
		<div class="select">
			<span>故障编码：</span>
			<el-input v-model="search.cardId" clearable placeholder="请输入内容"></el-input>
			<span>故障名称：</span>
			<el-input v-model="search.deviceType" clearable placeholder="请输入内容"></el-input>
		</div>
		<div class="select">
			<el-button class="oyButton" type="success" icon="el-icon-search" @click='searchClick'>查询</el-button>
			<el-button type="success" class="oyButton" icon="el-icon-plus" @click='universal.add = true'>添加</el-button>
		</div>
		<el-dialog title="新增" :visible.sync="universal.add">
			<div>
				<span class="spanClassT"><span class="aKey">*</span>设备IC卡：</span>
				<el-input v-model="add1.cardId" clearable placeholder="请输入内容"></el-input><br /><br />
				<span class="spanClassT">设备类型：</span>
				<el-select v-model="add1.deviceType" placeholder="请选择">
					<el-option v-for="item in levelList" :key="item.value" :value="item.label"></el-option>
				</el-select><br /><br /> 

				<span class="spanClassT"><span class="aKey">*</span>开始时间：</span>
				<el-date-picker
				v-model="add1.startTime"
				type="date"
				placeholder="选择日期">
				</el-date-picker><br /><br />

				<span class="spanClassT"><span class="aKey">*</span>结束时间：</span>
				<el-date-picker
				v-model="add1.endTime"
				type="date"
				placeholder="选择日期">
				</el-date-picker><br /><br />
				<!-- <span class="spanClass">用户姓名：</span> -->
				<!-- <span class="spanClassT"><span class="aKey">*</span>用户姓名：</span>
				<el-input v-model="add1.weChatFullName" clearable placeholder="请输入内容"></el-input><br /><br />

				<!-- <span class="spanClass">用户类型：</span> -->
				<!-- <span class="spanClassT"><span class="aKey">*</span>用户类型：</span>
				<el-input v-model="add1.weChatType" clearable placeholder="请输入内容"></el-input><br /><br /> -->

				<!-- <span class="spanClass">设备型号：</span>
				<el-input v-model="add1.deviceId" clearable placeholder="请输入内容"></el-input><br /><br /> -->
				<!-- <span class="spanClass">管理员分配：</span>
				<! <el-input v-model="add1.allot" clearable placeholder="请输入内容"></el-input><br /><br /> -->
				<!-- <el-select  v-model="level" placeholder="请选择">
					<el-option v-for="item in levelList" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select> --> 

				<!-- <el-input class="textareaWidth" type="textarea" :rows="5" v-model="add.roleDescribe" clearable placeholder="请输入内容"></el-input> -->
			 </div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.add = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="addClick">添加</el-button>
			</div>
		</el-dialog> 
		<!-- <el-dialog title="发送命令" :visible.sync="universal.send">
			<div>
				<span class="spanClass">设备ID：</span>
				<el-input v-model="send.deviceId" clearable placeholder="请输入内容"></el-input><br /><br />

				<span class="spanClass">设备名称：</span>
				<el-input v-model="send.title" clearable placeholder="请输入内容"></el-input><br /><br />

				<! <span class="spanClass">是否响应：</span>
				<el-input v-model="send.qos" clearable placeholder="请输入内容"></el-input><br /><br /> -->

<!-- 
				<span class="spanClass">是否响应：</span>
				<el-select v-model="send.qos" placeholder="请选择">
    				<el-option :value="0"></el-option>
					<el-option :value="1"></el-option>
				</el-select><br /><br />

				<span class="spanClass">有效时间：</span>
				<el-input v-model="send.timeOut" clearable placeholder="请输入内容"></el-input><br /><br />
			</div>
			 <div slot="footer" class="dialog-footer">
					<el-button type="success" class="oyButton" @click="universal.send = false">取消</el-button>
					<el-button type="success" class="oyButton" @click="changeorder(send)">发送命令</el-button>
				</div>
		</el-dialog>  -->
		<el-dialog title="绑定" :visible.sync="universal.allot">
			<div>
				<span class="spanClass">设备IC卡：</span>
				<el-input v-model="allot1.iccId" clearable placeholder="请输入内容" :disabled="true"></el-input><br /><br />

				<span class="spanClass">设备类型：</span>
				<el-input v-model="allot1.deviceType" clearable placeholder="请输入内容" :disabled="true"></el-input><br /><br />

				<span class="spanClass">开始时间：</span>
				<el-input v-model="allot1.startTime" clearable placeholder="请输入内容" :disabled="true"></el-input><br /><br />

				<span class="spanClass">结束时间：</span>
				<el-input v-model="allot1.endTime" clearable placeholder="请输入内容" disabled="true"></el-input><br /><br />
						
				<!-- <span class="spanClass">设备ID：</span> -->
				<span class="spanClassT spanClassTL"><span class="aKey">*</span>设备ID：</span>
				<!-- <el-input v-model="add1.allot" clearable placeholder="请输入内容"></el-input><br /><br /> -->
				<!-- <el-input v-model="allot1.weChatUseNames" clearable placeholder="请输入内容"></el-input><br /><br /> -->
				<el-button type="text" @click="open">选择</el-button>
						

				<!-- <el-input class="textareaWidth" type="textarea" :rows="5" v-model="add.roleDescribe" clearable placeholder="请输入内容"></el-input> -->
			 </div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.allot = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="allotchange(allot1)">绑定</el-button>
			</div>
		</el-dialog>
		<el-dialog title="查看" :visible.sync="universal.change">
			<div>
				<el-table class='oyTable' :data="idtable" style="width: 100%">
				<!-- <el-table-column type="selection" width="55" class="selection" prop='uuid' :selectable='checkboxInit' @selection-change="changeFun"></el-table-column> -->
				<el-table-column type="index" :index="indexMethod" label="序号" width="100"> </el-table-column>
				<el-table-column label="设备卡ID">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{scope.row.iccId}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.iccId}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="绑定设备">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.deviceId }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.deviceId}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				

				<el-table-column prop="" label="操作" width="">
					<template slot-scope="scope">
						<!--<el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-search" @click="seeClick(scope.row)" ></i>
						</el-tooltip>-->
						
						
						
						<!-- <el-tooltip class="item" effect="dark" content="修改" placement="top">
    						<i class="icon-change el-icon-edit" @click="changeshow(scope.row)"></i>
						</el-tooltip> -->
						
						<!-- <el-tooltip class="item" effect="dark" content="修改分组" placement="top">
    						<i class="icon-menu el-icon-menu" @click="changeGroupShow(scope.row)"></i>
						</el-tooltip> -->
						<!-- <el-button icon="el-icon-search" circle></el-button> -->
						<!-- <el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-export" @click="changeGroupShow(scope.row)" ></i>
						</el-tooltip> -->
						<!-- <el-tooltip v-if="scope.row.status==1" class="item" effect="dark" content="分配" placement="top">
    						<i class="icon-unclick el-icon-menu"></i>
						</el-tooltip> -->

						<!-- <el-tooltip v-else class="item" effect="dark" content="分配" placement="top">
    						<i class="icon-menu el-icon-menu" @click="allot(scope.row)" ></i>
						</el-tooltip> -->

						<el-tooltip class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-delete el-icon-delete" @click="deleteid(scope.row)"></i>
						</el-tooltip>

						<!-- <el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-search" @click="changeGroupShow(scope.row)" ></i>
						</el-tooltip>

						<el-tooltip class="item" effect="dark" content="修改地址" placement="top">
    						<i class="icon-See el-icon-view" @click="changeShowmap(scope.row)" ></i>
						</el-tooltip>

						<el-tooltip class="item" effect="dark" content="IC卡绑定" placement="top">
    						<i class="icon-See el-icon-mobile-phone" @click="cardlist(scope.row)" ></i>
						</el-tooltip> -->

					</template>
				</el-table-column>
			</el-table>
			 </div>
			<!-- <div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="hideclick">取消</el-button>
				<el-button type="success" class="oyButton" @click="changeclick(change)">修改</el-button>
			</div> -->
		</el-dialog>
	

		<div class="Content">
			<el-table class='oyTable' :data="tableData" style="width: 100%">
				<el-table-column type="index" :index="indexMethod" label="序号" width="100"> </el-table-column>
				
				 <el-table-column label="设备型号">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.deviceType }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.deviceType }}</div>
				        	</div>
				        </el-popover>
			      </template>
				 </el-table-column>
				
				<el-table-column label="故障编码" width="120">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.code }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.code }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				<el-table-column label="故障名称">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{scope.row.fault }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.fault }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
		
				<el-table-column prop="" label="操作" width="">
					<template slot-scope="scope">
						<!--<el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-search" @click="seeClick(scope.row)" ></i>
						</el-tooltip>-->
						
						<el-tooltip class="item" effect="dark" content="修改" placement="top">
    						<i class="icon-change el-icon-edit" @click="changeshow(scope.row)"></i>
						</el-tooltip>
						<!-- <el-tooltip v-if="scope.row.status==1" class="item" effect="dark" content="权限" placement="top">
    						<i class="icon-unclick el-icon-menu"></i>
						</el-tooltip> -->
						
						<!-- <el-tooltip class="item" effect="dark" content="绑定" placement="top">
    						<i class="icon-menu el-icon-menu" @click="allot(scope.row)" ></i>
						</el-tooltip> -->
						
						<el-tooltip class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
						</el-tooltip>

						<!-- <el-button icon="el-icon-search" circle></el-button> -->
						<!-- <el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-search" @click="changeshow(scope.row)" ></i>
						</el-tooltip> -->

						
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
			<el-pagination background @current-change="handleCurrentChange"  @size-change="handleSizeChange" :current-page.sync="paging.page":page-sizes="[1,2,3,10, 11, 12]" :page-size="paging.pageSize" layout="sizes, prev, pager, next, jumper,total" :total="paging.total"></el-pagination>
		</div>
		<router-view v-if="isRouterAlive"></router-view>
	</div>
</template>

<script>
	import Qs from 'qs'
	// import $ from 'jquery'
	import axios from 'axios'
	export default {
		provide(){
			return{
				reload:this.reload
			}
		},
		inject:['reload'],
		name: 'equipmentList',
		data() {
			return {
			isRouterAlive:true,
			formInline: {
				id: null,
				scene: '',
				project_name: '',
				submit_date: [new Date(),new Date()] ,
 
			},
			idtable:[],
			opencard:[],
			tableData5:[],
			multipleSelection:[],
				value1:"",
				levelList: [{
					value: '0',
					label: '管理卡'
				}, {
					value: '1',
					label: '用户卡'
				}],
				level: '0',
				deviceType: '0',
				add1:{
					deviceType:'',
					cardId:'',
					endTime:'',
					startTime:''
				},
				type1:{
					deviceType:""
				},
				li:[],
				added:"",
				send:{
					deviceId:'',
					title:'',
					timeOut:'',
					qos:''
				},
				cardList:[],
				change:{
					card:'',
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
				ICData:[],
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
					startTime:'',
					endTime:'',
					personnel:'',
					status:'',
					iccId:''
					// weChatUseNames:''
				},
				search:{
					iccId:"",
					Id:"",
					start:"",
					end:"",
					modelstyle:'',
					deviceType:''
				},
			
			}
		},
		created(){
				this.add1.deviceType = this.levelList[0].label;
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
			 handleSelectionChange(val) {
    		this.multipleSelection = val;
			},
			ICclick(){
				// this.$refs.multipleTable.clearSelection();            //操作完成清除勾选框
				var arr=this.multipleSelection;
				let multis = [];
				for (var i=0;i<arr.length;i++){
				multis.push(arr[i].deviceId);
					this.opencard=multis
					this.cardList=multis
				}
				this.universal.look = false;
			},
			IChideclick(){
				this.universal.look = false;
			},
			deleteid(row){
				console.log(row.id)
				let that=this;
				this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					console.log(row)
					axios({
						method:'post',
						url:this.$store.state.http+'/Iccid/delete',
						data:Qs.stringify({
							id:row.id,
						})
					}).then(function(message){
						console.log(message)
						if(message.data.resCode==0){
							console.log(1111111111111111111)
							that.changeshow(row)
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
			open(){
				this.universal.look = true;
				let data = {
					pageNum:this.paging.page,
					pageSize:this.paging.pageSize
				};
				 data.devId=this.search.deviceId;
				 data.deviceModel=this.type1.deviceType;
				// data.deviceId=this.search.deviceId;
				data.userId=localStorage.getItem('userId'),
				data.dealer=sessionStorage.getItem("dealer")
				let that = this;
				console.log(data);
				that.ICData = [];
				that.timeCrea=[];
				that.truey=[]
				axios({
					method:'post',
					url:this.$store.state.http+'/devices/conditionFind',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message)
					if(message.data.resCode==0){
						console.log(message.data.result)
						for(var i=0;i<message.data.result.length;i++){
							if(message.data.result[i].startTime.time!=null){
								// console.log(message.data.result[i].createTime.time)
								console.log(1)
								message.data.result[i].startTime=timeToDate(JSON.stringify(message.data.result[i].startTime.time).slice(0,10))
							}else{
								console.log(2)
								message.data.result[i].startTime=JSON.stringify(message.data.result[i].startTime).slice(1,20)
							}
						}
						that.ICData= message.data.result;
						console.log(message.data.result.length)
						that.paging.total = message.data.result2;
						console.log(that.ICData)
						for(var i=0;i<that.ICData.length;i++){
							that.truey.push(that.ICData[i].status)
							if(that.ICData[i].devStatus=="0x11"){
								// that.trues=1;
								// console.log(that.trues);
								that.ICData[i].devStatus='正常'
							}else{
								that.ICData[i].devStatus='异常'
							}
						}
						console.log(that.truey)
						
					}else{
						that.ICData = [];
						that.paging.total = 0;
					}
				})
				 function timeToDate(data) {
						var d = new Date(data*1000);//时间戳记得乘以1000再进行处理
						var year = d.getFullYear();
						var month = d.getMonth()+1;
						var date = d.getDate();
						var hour = d.getHours();
						var minute = d.getMinutes();
						var second = d.getSeconds();
						return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
					}
			},
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
				if(this.add1.cardId == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				if(this.add1.startTime == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				if(this.add1.endTime == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				console.log(this.add1.startTime.valueOf())
				if(this.add1.startTime.valueOf()>this.add1.endTime.valueOf()){
					this.$message.error('开始时间不能早于结束时间');
					return false;
				}
				
				let data = this.add1;
				let that=this;
				data.dealer=sessionStorage.getItem("dealer");
				console.log(data);
				axios({
					method:'post',
					dataType: 'jsonp',
					url:this.$store.state.http+'/pecard/save',
					data:Qs.stringify(data)
					}).then(function(message){
					console.log(message)
					// console.log((message.data.errMsg).split(":")[1])
					// localStorage.setItem('id',(message.data.errMsg).split(":")[1])
					if(message.data.resCode==0){
						that.searchClick();
						
						// that.$store.dispatch('group');
						that.$message({
				        	message: '添加成功',
				        	type: 'success'
						});
						// that.reload();
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
						// url:this.$store.state.http+'/Iccid/deleteIccid',
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
					let data={
						id:row.id
					}
					console.log(data)
					axios({
						method:'post',
						url:this.$store.state.http+'/pecard/delete',
						data:Qs.stringify(data)
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
				let that=this;
				axios({
						method:'post',
						url:this.$store.state.http+'/Iccid/findIccid',
						data:Qs.stringify({
							id:row.iccId
						})
					}).then(function(message){
						console.log(message)
						that.idtable=message.data.cards
					})



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
			order(row){
				this.universal.send = true;
				this.send = row;
				
			},
			allotchange(row){
				let that=this;
				let data={
					id:that.allot1.iccId,
					ids:(that.opencard).toString()
				}
				console.log(data)
				axios({
					method:'post',
					url:this.$store.state.http+'/Iccid/save',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message);
					that.universal.allot=false;
					that.allot1.weChatUseNames=""
					if(message.data.resCode==0){
						that.searchClick();
						that.$message({
				        	message: '绑定成功',
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
			},
			changeGroupShow(row){
			},
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
				let that = this;
				that.tableData = [];
			    console.log(data);
				axios({
					method:'post',
					url:this.$store.state.http+'/faultCode/list',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message)
					if(message.data.resCode==0){
		
						that.tableData = message.data.results;
						that.paging.total = message.data.count;
					}else{
						that.tableData = [];
						that.paging.total = 0;
					}
				})
			},
			reload(){
				this.isRouterAlive=false;
				this.$nextTick(function(){
					this.isRouterAlive=true;
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
	// $(function(){
	// 	$(document).delegate(".oyButtonExcel",'click',function(){
	// 					$("#upload").click();
	// 				});

	// 				$(document).delegate("#upload","change",function(){
	// 						console.log(111);
	// 						var formData=new FormData();
	// 						var files=$("#upload")[0].files;
	// 						formData.append("upload",files[0]);
	// 						var aa= JSON.stringify(formData);
	// 						console.log(formData);
	// 						axios({
	// 									method:'post',
	// 									url:this.$store.state.http+'/conCode/import',
	// 									data:formData,
	// 									userName:sessionStorage.getItem('userAlias')
	// 								}).then(function(message){
	// 									console.log(message);
	// 									l
										
	// 								})
							
	// 				})
	// })
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