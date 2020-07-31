<template>
	<div id="PSTlist">
		<div class="header">
			<div class="headerTitle">
				<span>topic</span>
			</div>
		</div>
		<div class="select">
			<!-- <span>分组：</span> -->
			<!--<el-input v-model="store.controName" clearable placeholder="请输入内容"></el-input>-->
			<!-- <el-select v-model="search.conGroup" placeholder="请选择">
				<el-option label="未选择" value="0"></el-option>
		    	<el-option v-for="(item,index) in this.$store.state.conGroupList" :key="item.groupId" :label="item.gropuName" :value="item.groupId"></el-option>
			</el-select> -->
			<span>设备ID：&nbsp;&nbsp;&nbsp;</span>
			<el-input v-model="search.devId" clearable placeholder="请输入内容"></el-input>
		</div>
		<div class="select">
			<el-button class="oyButton" type="success" @click='searchClick'>更新</el-button>
			<el-button type="success" class="oyButton" @click='universal.topic = true'>创建主题</el-button>
			<el-button class="oyButton" type="success" @click='searchClick1'>查询列表</el-button>
		</div>
		<el-dialog title="创建主题" :visible.sync="universal.topic">
			<div>
				<span class="spanClass">设备主题：</span>
				<el-input v-model="topic.Topicname" clearable placeholder="请输入内容"></el-input><br /><br />

			 </div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.add = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="addtopic">创建主题</el-button>
			</div>
		</el-dialog> 
		<el-dialog title="发送命令" :visible.sync="universal.send">
			<div>
				<span class="spanClass">设备主题：</span>
				<el-input v-model="send.Topicname" clearable placeholder="请输入内容"></el-input><br /><br />

				<span class="spanClass">主题内容：</span>
				<el-input v-model="send.contents" clearable placeholder="请输入内容"></el-input><br /><br />
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.send = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="changeorder(send)">发送命令</el-button>
			</div>
		</el-dialog> 
		<el-dialog title="查看" :visible.sync="universal.look">
			<div>
				<el-row>
					<el-col :span="12">
						<div class="spanClassT">设备ID：</div>
						<el-input v-model="con.id" clearable placeholder="请输入内容"></el-input><br /><br />

						<div class="spanClassT">接入协议：</div>
						<el-input v-model="con.protocol" clearable placeholder="请输入内容"></el-input><br /><br />

						<div class="spanClassT">创建时间：</div>
						<el-input v-model="con.create_time" clearable placeholder="请输入内容" class="coied"></el-input><br /><br />

						<div class="spanClassT">鉴权信息：</div>
						<el-input v-model="con.auth_info" clearable placeholder="请输入内容"></el-input><br /><br />

						<div class="spanClassT">设备名称：</div>
						<el-input v-model="con.title" clearable placeholder="请输入内容"></el-input><br /><br />

						<div class="spanClassT">设备描述：</div>
						<el-input v-model="con.desc" clearable placeholder="请输入内容"></el-input><br /><br />
					
						<div class="spanClassT">设备标签：</div>
						<el-input v-model="con.tags" clearable placeholder="请输入内容"></el-input><br /><br />
					</el-col>
					<el-col :span="12">
						<div class="spanClassT">设备经度：</div>
						<el-input v-model="con.lon" clearable placeholder="请输入内容"></el-input><br /><br />

						<div class="spanClassT">设备纬度：</div>
						<el-input v-model="con.lat" clearable placeholder="请输入内容"></el-input><br /><br />

						<div class="spanClassT">数据流名称：</div>
						<el-input v-model="con.dataid" clearable placeholder="请输入内容"></el-input><br /><br />

						<div class="spanClassT">单位：</div>
						<el-input v-model="con.unit" clearable placeholder="请输入内容"></el-input><br /><br />

						<div class="spanClassT">单位符号：</div>
						<el-input v-model="con.unit_symbol" clearable placeholder="请输入内容"></el-input><br /><br />

						<div class="spanClassT">设备在线状态：</div>
						<el-input v-model="status" clearable placeholder="请输入内容"></el-input><br /><br />
					</el-col>
				</el-row>
			 </div>
		</el-dialog>

		<div class="Content">
			<el-table class='oyTable' :data="tableData" style="width: 100%">
				<el-table-column type="index" :index="indexMethod" label="序号" width="100"> </el-table-column>

				<el-table-column label="主题">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{scope.row }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column prop="" label="操作" width="150">
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
					desc:"",
					tags:"",
					lon:'',
					lat:'',
					authInfo:"",
					deviceId:""
				},
				send:{
					devId:'',
					Topicname:''
				},
				topic:{
					Topicname:'',
					contents:''
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
					topic:false
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
				search:{
					devId:''
				},
				addTo:{
					group:{
						userId:sessionStorage.getItem('userId'),
						gropuName:'',
						groupPhone:'',
						name:'',
						groupNotes:''
					}
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
			addtopic(){
				/*console.log(parameter)*/
				if(this.topic.Topicname == ''){
					this.$message.error('数据不能为空哦！');
					return false;
				}
				let that = this;
				axios({
					method:'post',
					dataType: 'jsonp',
					url:'http://192.168.2.123:8080/MqttTopic/CreateMqttTopic',
					data:Qs.stringify({
						Topicname:that.topic.Topicname,
						key:'masterkey'
						})
					}).then(function(message){
					console.log(message)
					console.log(33333333333)
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
				that.universal.topic = false;
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
						url:'http://192.168.2.123:8080/MqttTopic/RemoveUser',
						data:Qs.stringify({
							Topicname:row
						})
					}).then(function(message){
						console.log(message)
						if(message.data.errno==0){
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
				this.universal.send = true;
				this.send = row;
				console.log(row)
			},
			changeorder(row){
				let that=this
				axios({
					method:"post",
					url:'http://192.168.2.123:8080/MqttTopic/SendMqtts',
					data:Qs.stringify({
						Topicname:row.Topicname,
						devId:row.devId
					})
				}).then(function(mess){
					console.log(mess)
				})
			},
			searchClick(){
				let data = {
					page:this.paging.page,
					pageSize:this.paging.pageSize
				};
				// data.deviceId=row.deviceId;
				// data.Topicname=this.search.Topicname
				let that = this;
				console.log(data);
				that.tableData = [];
				axios({
					method:'post',
					url:'http://192.168.2.123:8080/MqttTopic/GetUserTopics ',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message)
					if(message.data.result.errno==0){
						console.log(message.data.result.data)
						that.tableData = message.data.result.data;
						that.paging.total = message.data.count;
						console.log(that.tableData)
					}else{
						that.tableData = [];
						that.paging.total = 0;
					}
				})
			},
			searchClick1(){
				let that=this
				 axios({
					method:"post",
					url:'http://192.168.2.123:8080/MqttTopic/GetTopics',
					data:Qs.stringify({
						devId:that.search.devId
					})
				}).then(function(message){
					console.log(message)
				
				})
			},
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
					url:'http://192.168.2.123:8080/MqttTopic/FindDevicesList',
					data:Qs.stringify({
						Topicname:row
					})
				}).then(function(message){
					console.log(message)
				
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
</style>