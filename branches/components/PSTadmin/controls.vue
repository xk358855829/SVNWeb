<template>
	<div id="PSTlist">
		<div class="header">
			<div class="headerTitle">
				<span>设备控制</span>
			</div>
		</div>
		<div class="select">
			<!-- <span>分组：</span> -->
			<!--<el-input v-model="store.controName" clearable placeholder="请输入内容"></el-input>-->
			<!-- <el-select v-model="search.conGroup" placeholder="请选择">
				<el-option label="未选择" value="0"></el-option>
		    	<el-option v-for="(item,index) in this.$store.state.conGroupList" :key="item.groupId" :label="item.gropuName" :value="item.groupId"></el-option>
			</el-select> -->
			<span>设备编号：</span>
			<el-input v-model="search.deviceId" clearable placeholder="请输入内容"></el-input>
			<!-- <span>设备类型：</span> -->
			<!-- <el-input v-model="search.deviceType" clearable placeholder="请输入内容"></el-input> -->
			<!-- <el-select v-model="search.deviceType" placeholder="请选择" @change="aaa(search.deviceType)">
					<el-option v-for="item in tableChild" :key="item.id" :value="item.deviceType"></el-option>
			</el-select> -->
			<!-- <el-select v-model="type1.deviceType" placeholder="请选择" @change="aaa(type1.deviceType)">
					<el-option v-for="item in tableChild" :key="item.id" :value="item.deviceType"></el-option>
			</el-select> -->
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
			<!-- <el-button type="success" class="oyButton" icon="el-icon-plus" @click='universal.add = true' v-if="added==1">添加</el-button>
			<el-button type="success" class="oyButton" icon="el-icon-plus" @click='type'>类型</el-button> -->
			<!-- <input id="upload" type="file" @change="importfxx(this)"  accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
			<!-- <el-button class="oyButton" type="success" @click='searchstatus'>查询状态</el-button> -->
			<!-- <el-button class="oyButton" type="success" @click='reg'>注册设备</el-button> -->
			

			<!-- <form action="">
				<input class="file form_ipt" name='file' type='file' @change="update">
			</form> -->
			<!-- <el-upload
				class="upload-demo demoele"
				action=""
				:before-upload="uploadFile"
				multiple
				:limit="1">
				<el-button class="oyButton" type="success" icon="el-icon-download" >导入</el-button> 
				<!-- <el-button size="small" type="primary">导入</el-button> -->
			<!-- </el-upload> --> 


		</div>
		<el-dialog title="新增" :visible.sync="universal.type1">
			<div>
				<!-- <span class="spanClass">设备类型：</span> -->
				<span class="spanClassT"><span class="aKey">*</span>设备类型：</span>
				<el-input v-model="type2.deviceType" clearable placeholder="请输入内容"></el-input><br /><br />
				<el-button type="success" class="oyButton oyButtonlick" @click='yes'>确认</el-button>
				<!-- <el-input class="textareaWidth" type="textarea" :rows="5" v-model="add.roleDescribe" clearable placeholder="请输入内容"></el-input> -->
				<!-- <span class="spanClass">已有类型：</span> -->
				<span class="spanClassT"><span class="aKey">*</span>已有类型：</span>
				<!-- <el-input v-model="type1.deviceType" clearable placeholder="请输入内容"></el-input><br /><br /> -->
				<el-select v-model="type1.deviceType" placeholder="请选择" @change="aaa(type1.deviceType)">
					<el-option v-for="item in tableChild" :key="item.id" :value="item.deviceType"></el-option>
				</el-select>
				<el-button type="success" class="oyButton oyButtondev" @click='deleteClild'>删除</el-button>
			 </div>
		</el-dialog> 
		<el-dialog title="新增" :visible.sync="universal.add">
			<div>
				<!-- <span class="spanClass">设备名称：</span> -->
				<span class="spanClassT"><span class="aKey">*</span>设备名称：</span>
				<el-input v-model="add1.deviceName" clearable placeholder="请输入内容"></el-input><br /><br />

				<!-- <span class="spanClass">设备编号：</span> -->
				<span class="spanClassT"><span class="aKey">*</span>设备编号：</span>
				<el-input v-model="add1.deviceId" clearable placeholder="请输入内容"></el-input><br /><br />

				<!-- <span class="spanClass">流量卡卡号：</span> -->
				<span class="spanClassT"><span class="aKey">*</span>流量卡卡号：</span>
				<el-input v-model="add1.trafficCard" clearable placeholder="请输入内容"></el-input><br /><br />
						
				<!-- <span class="spanClass">设备类型：</span> -->
				<!-- <span class="spanClassT"><span class="aKey">*</span>设备类型：</span>
				<el-input v-model="add1.deviceType" clearable placeholder="请输入内容"></el-input><br /><br /> -->

				<!-- <span class="spanClass">设备型号：</span> -->
				<span class="spanClassT"><span class="aKey">*</span>设备型号：</span>
				<el-input v-model="add1.deviceModel" clearable placeholder="请输入内容"></el-input><br /><br />

				<!-- <span class="spanClassT"><span class="aKey">*</span>设备类型：</span> -->
				<!-- <el-input v-model="type1.deviceType" clearable placeholder="请输入内容"></el-input><br /><br /> -->
				<!-- <el-select v-model="type1.deviceType" placeholder="请选择" @change="aaa(type1.deviceType)">
					<el-option v-for="item in tableChild" :key="item.id" :value="item.deviceType"></el-option>
				</el-select> -->

				<!-- <span class="spanClassT"><span class="aKey">*</span>设备状态：</span>
				<el-input v-model="add1.devStatus" clearable placeholder="请输入内容"></el-input><br /><br /> -->

				<!-- <el-input class="textareaWidth" type="textarea" :rows="5" v-model="add.roleDescribe" clearable placeholder="请输入内容"></el-input> -->
			 </div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.add = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="addClick">添加</el-button>
			</div>
		</el-dialog> 
		<el-dialog title="修改" :visible.sync="universal.change">
			<el-row>
				<el-col :span="12">
					<span class="spanClassT"><span class="aKey">*</span>设备名称：</span>
					<el-input v-model="change.deviceName" clearable placeholder="请输入内容"></el-input><br /><br />
							
					<span class="spanClassT"><span class="aKey">*</span>流量卡卡号：</span>
					<el-input v-model="change.trafficCard" clearable placeholder="请输入内容"></el-input><br /><br />
				</el-col>
				<el-col :span="12">
					<span class="spanClassT"><span class="aKey">*</span>设备类型：</span>
					<el-input v-model="change.deviceType" clearable placeholder="请输入内容"></el-input><br /><br />
							
					<span class="spanClassT"><span class="aKey">*</span>设备型号：</span>
					<el-input v-model="change.deviceModel" clearable placeholder="请输入内容"></el-input><br /><br />
				</el-col>
			</el-row>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="hiedclick">取消</el-button>
				<el-button type="success" class="oyButton" @click="changeclick(change)">修改</el-button>
			</div>
			</el-dialog>
				<el-dialog title="修改地址" :visible.sync="universal.alter">
			<div>
				<label for="label" @click.stop="clickMe">
					<input type="checkbox" class="box" v-model="endcheckbox">
                <!-- <input type="checkbox" id="label" v-model="ckeckVal" >点我 -->
        		</label>
				
				<span class="spanClass widths">设备IP地址：</span>
				<el-input v-model="newdirectory" clearable placeholder="请输入内容" :disabled="false" class="newdirectory"></el-input><br /><br />
				
				<label for="label" @click.stop="clickMe1">
					<input type="checkbox" class="box" v-model="startcheckbox">
                <!-- <input type="checkbox" id="label" v-model="ckeckVal" >点我 -->
        		</label>
				<!-- <span class="spanClass">现设备地址：</span> -->
				<span class="spanClassT spanClassTL widths"><span class="aKey">*</span>设备修正地址：</span>
				<el-input v-model="hnewmap" clearable placeholder="请输入内容" :disabled="false" class="newdirectory"></el-input><br /><br />
				
			 </div>
			 <div>
			 <div id="allmap">
				 <div id="map" style="height:100%;-webkit-transition: all 0.5s ease-in-out;transition: all 0.5s ease-in-out;"></div>
			 </div>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.alter = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="changemap(alter)">修改</el-button>
			</div>
		</el-dialog>
		<el-dialog title="分配" :visible.sync="universal.allot">
			<div>
				<span class="spanClass">设备编号：</span>
				<el-input v-model="allot1.deviceId" clearable placeholder="请输入内容" :disabled="true"></el-input><br /><br />

				<span class="spanClass">设备名称：</span>
				<el-input v-model="allot1.deviceName" clearable placeholder="请输入内容" :disabled="true"></el-input><br /><br />

				<span class="spanClass">流量卡卡号：</span>
				<el-input v-model="allot1.trafficCard" clearable placeholder="请输入内容" :disabled="true"></el-input><br /><br />

				<!-- <span class="spanClass">创建时间：</span>
				<el-input v-model="allot1.createTime" clearable placeholder="请输入内容" disabled="true"></el-input><br /><br /> -->
						
				<span class="spanClass">设备类型：</span>
				<el-input v-model="allot1.deviceType" clearable placeholder="请输入内容" :disabled="true"></el-input><br /><br />

				<span class="spanClass">操作人员：</span>
				<el-input v-model="allot1.personnel" clearable placeholder="请输入内容" :disabled="true"></el-input><br /><br />

				<span class="spanClass">操作人员：</span>
				<el-input v-model="allot1.status" clearable placeholder="请输入内容" :disabled="true"></el-input><br /><br />

				<span class="spanClass">设备型号：</span>
				<el-input v-model="allot1.deviceModel" clearable placeholder="请输入内容" :disabled="true"></el-input><br /><br />

				<!-- <span class="spanClass">管理员分配：</span> -->
				<span class="spanClassT spanClassTL"><span class="aKey">*</span>管理员分配：</span>
				<!-- <el-input v-model="add1.allot" clearable placeholder="请输入内容"></el-input><br /><br /> -->
				<el-select v-model="customer" placeholder="请选择">
					<el-option v-for="item in len" :key="item.dealerId" :value="item.customerName+':'+item.dealerId"></el-option>
				</el-select>
						

				<!-- <el-input class="textareaWidth" type="textarea" :rows="5" v-model="add.roleDescribe" clearable placeholder="请输入内容"></el-input> -->
			 </div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.allot = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="allotchange(allot)">分配</el-button>
			</div>
		</el-dialog>
		<el-dialog title="设备控制" :visible.sync="universal.look" width="20%">
			<div class="flexdisply">
				<div class="divswitch">
					<span>设备状态：</span><span>设备{{value5}}</span>
					<div class="innerone" @click="changestatu(look)">
						<el-tooltip :content="value5" placement="top">
						<el-switch
							v-model="value5"
							active-color="#13ce66"
							inactive-color="#ff4949"
							active-value="已激活"
							inactive-value="未激活"
							>
						</el-switch>
						</el-tooltip>
					</div>
				</div>
				<div class="divswitch" v-if="hidestatus">
					<span>栓锁状态：</span><span>设备{{value6}}</span>
					<div class="innertwo" @click="changelock(look)">
						<el-tooltip :content="value6" placement="top">
						<el-switch
							v-model="value6"
							active-color="#13ce66"
							inactive-color="#ff4949"
							active-value="已开阀"
							inactive-value="未开阀">
						</el-switch>
						</el-tooltip>
					</div>
				</div>
				<div class="divswitch" v-if="hidestatus">
					<span>布防状态：</span><span>设备{{value7}}</span>
					<div class="innerthree" @click="changeting(look)">
						<el-tooltip :content="value7" placement="top">
						<el-switch
							v-model="value7"
							active-color="#13ce66"
							inactive-color="#ff4949"
							active-value="已布防"
							inactive-value="未布防">
						</el-switch>
						</el-tooltip>
				</div>
				</div>
				
			 </div>
			<div>
				<el-button class="lokway" type="danger" @click="recover(look)">恢复出厂设置</el-button>
				<el-button class="lokway" type="primary" @click="read(look)">读取定位信息</el-button>
				<el-button type="success" @click="renewal(look)">更新位置</el-button>
			</div>
			 	<!-- <div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="statistics">数据统计</el-button>
				<router-link to='/pageHome/carMonitor'><el-button type="success" class="oyButton" @click="map">地图详情</el-button></router-link>
				</div> -->
		</el-dialog>

		<div class="Content">
			<el-table class='oyTable' :data="tableData" style="width: 100%">
				<el-table-column type="index" :index="indexMethod" label="序号" width="100"> </el-table-column>
				
				<el-table-column label="设备名称">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{scope.row.deviceName}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.deviceName}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="设备类型">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.deviceType }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.deviceType}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="设备型号">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{scope.row.deviceModel}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.deviceModel}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="设备编号">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row. deviceId }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row. deviceId }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column prop="" label="设备控制" width="">
					<template slot-scope="scope">
						<el-tooltip class="item" effect="dark" content="设备控制" placement="top">
    						<i class="icon-See el-icon-setting" @click="changecontrol(scope.row)" ></i>
						</el-tooltip>

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
	// import $ from 'jquery'
	import axios from 'axios'
	import echarts from 'echarts'
	import FileSaver from 'file-saver'
	import XLSX from 'xlsx'
	// import iconCar from '../../../static/image/xxx.png'; //以import的方式导入图片文件
	export default {
		name: 'equipmentList',
		data() {
			return {
				hidestatus:'',
				value5:'',
				value6:'',
				value7:'',
				acti:'',
				num:1,
				startcheckbox:true,
				endcheckbox:false,
				hnewmap:'',
				objs:{
					lngs:'',
					lats:''
				},
				newdirectory:'',
				alter:{
					newdirectory:'',
					hnewmap:''
				},
				type2:{
					deviceType:""
				},
				type1:{
					deviceType:""
				},
				 value1: '',
				value2: '',
				 value3: '',
				value4: '',
				value8: '',
				value9: '',
				value15: '',
        		value16: '',
				added:"",
				add1:{
					trafficCard:"",
					deviceType:"",
					deviceModel:"",
					deviceName:""
				},
				trues:0,
				allot1:{
					deviceId:'',
					trafficCard:"",
					deviceType:"",
					deviceModel:"",
					deviceName:"",
					createTime:'',
					personnel:'',
					status:''
				},
				newnum:'',
				send:{
					deviceId:'',
					title:'',
					timeOut:'',
					qos:''
				},
				change:{
					deviceName:"",
					trafficCard:"",
					deviceType:'',
					deviceModel:''
				},
				status:'',
				universal:{
					add:false,
					change:false,
					look:false,
					send:false,
					allot:false,
					statistic:false,
					type1:false,
					alter:false
				},
				dealerId:'',
				customer1:'',
				customer:'',
				timeCrea:[],
				tableData:[],
				tableChild:[],
				len:[],
				newcon:{
					devLongitude:'',
					devLatitude:''
				},
				con:{
					devControl:'',
					waterMeter:'',
					waterPressure:'',
					waterTemperature:'',
					devDefence:'',
					devUnlockWay:'',
					devLockState:'',
					waterMeterTotal:'',
					waterMeterTemp:'',
					devHardVerison:'',
					waterPressure:'',
					devSoftVerison:'',
					waterTemperature:'',
					devParaSn:'',
					devWarning:'',
					devIccid:'',
					devLongitude:'',
					devStatus:'',
					devLatitude:'',
					devUnlockTime:''
				},
				li:[],
				truey:[],
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
				roomid:"",
				paging:{
					page:1,
					pageSize:10,
					total:0
				},
				search:{
					deviceId:"",
					title:"",
					start:"",
					end:"",
					checkInStartTime:'',
					checkInEndTime:''
				},
				activeName: 'fourth'
				// controNameL:[{label:'C1',value:1},{label:'C2',value:2},{label:'C3',value:3},{label:'B1',value:4},{label:'B2',value:5},{label:'A1',value:6},{label:'A2',value:7},{label:'A3',value:8}]
			}
		},
		mounted: function() {
			// this.$store.dispatch('group');
			document.title=this.$route.meta.title;
			
			this.searchClick();
			if(sessionStorage.getItem("dealer")=='123'){
				this.added=1
			}
			
			
		},
		methods: {
			renewal(row){
				let that=this;
				this.$confirm('此操作将更新位置, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					axios({
						method:'post',
						url:this.$store.state.http+"/send/sendCmd",
						data:Qs.stringify({
							devId:row.deviceId,
							cmd:21,
							cmdValue:'12'
							})
						})
						.then(function(message){
							console.log(message)
							if(message.data.resCode==0){
								console.log(message)
								let t = setTimeout(function(){
								axios({
									method:'post',
									url:that.$store.state.http+"/send/sendCmd",
									data:Qs.stringify({
										cmdsId:message.data.cmd_uuid
										})
									})
									.then(function(message){
									if(message.data.resCode==0){
										that.$message({
											message: '更新位置成功',
											type: 'success'
										})
									}else{
										that.$message({
											message: '更新位置失败',
											type: 'error'
										})
									}
								})
								},3000)
							}else{
								that.$message({
									message: '更新位置失败',
									type: 'error'
								})
							}
					})
				}).catch(() => {
				this.$message({
					type: 'info',
						message: '已取消更新位置'
					});
				});
			},
			recover(row){
				let that=this;
				this.$confirm('此操作将恢复出厂设置, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					axios({
						method:'post',
						url:this.$store.state.http+"/send/sendCmd",
						data:Qs.stringify({
							devId:row.deviceId,
							cmd:22,
							cmdValue:'11'
							})
						})
						.then(function(message){
							console.log(message)
							if(message.data.resCode==0){
								console.log(message)
								let t = setTimeout(function(){
								axios({
									method:'post',
									url:that.$store.state.http+"/send/sendCmd",
									data:Qs.stringify({
										cmdsId:message.data.cmd_uuid
										})
									})
									.then(function(message){
									if(message.data.resCode==0){
										that.$message({
											message: '恢复出厂设置成功',
											type: 'success'
										})
									}else{
										that.$message({
											message: '恢复出厂设置失败',
											type: 'error'
										})
									}
								})
								},3000)
							}else{
								that.$message({
									message: '恢复出厂设置失败',
									type: 'error'
								})
							}
					})
				}).catch(() => {
				this.$message({
					type: 'info',
						message: '已取消恢复出厂设置'
					});
				});
			},
			read(row){
				let that=this;
				this.$confirm('此操作将读取定位信息, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					axios({
						method:'post',
						url:this.$store.state.http+"/send/sendCmd",
						data:Qs.stringify({
							devId:row.deviceId,
							cmd:21,
							cmdValue:'11'
							})
						})
						.then(function(message){
							console.log(message)
							if(message.data.resCode==0){
								console.log(message)
								let t = setTimeout(function(){
								axios({
									method:'post',
									url:that.$store.state.http+"/send/sendCmd",
									data:Qs.stringify({
										cmdsId:message.data.cmd_uuid
										})
									})
									.then(function(message){
									if(message.data.resCode==0){
										that.$message({
											message: '读取定位信息成功',
											type: 'success'
										})
									}else{
										that.$message({
											message: '读取定位信息失败',
											type: 'error'
										})
									}
								})
								},3000)
							}else{
								that.$message({
									message: '读取定位信息失败',
									type: 'error'
								})
							}
					})
				}).catch(() => {
				this.$message({
					type: 'info',
						message: '已取消读取定位信息'
					});
				});
			},
			changestatu(row){
				console.log(row)
				console.log(111111111)
				let that=this;
				if(that.value5=='已激活'){
					that.value5='已激活'
					this.$confirm('此操作将设备激活, 是否继续?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						// 1111111111111111111111111
						
						let data={
							devId:row.deviceId,
							cmd:17,
							cmdValue:'12'
						}
						console.log(data)
						axios({
						method:'post',
						url:that.$store.state.http+"/send/sendCmd",
						data:Qs.stringify(data)
						})
						.then(function(message){
						if(message.data.resCode==0){
							console.log(message)
							console.log(678)
							let t = setTimeout(function(){
									let dataA={
										cmdsId:message.data.cmd_uuid
									}
										axios({
										method:'post',
										url:that.$store.state.http+"/send/QueryCmdsResp",
										data:Qs.stringify(dataA)
										})
										.then(res => {
											console.log(res)
											if(res.data.resCode==0){
												that.$message({
													message: '激活成功',
													type: 'success'
												});
												that.value5='已激活'
												that.hidestatus=true;
											clearTimeout(t);
											}else{
												clearTimeout(t);
												that.$message({
													message: '激活失败',
													type: 'error'
												})
												that.value5='未激活'
											}
										}).catch(err => {
											that.$message({
												message: '激活失败',
												type: 'error'
											})
											that.value5='未激活'
										})
									},3000)
								
							}else{
								that.$message({
									message: '激活失败',
									type: 'error'
								})
								that.value5='未激活'
							}
						})
					}).catch(() => {
							this.$message({
								type: 'info',
								message: '已取消激活'
							});
							that.value5='未激活'
						});
				}else if(that.value5=='未激活'){
					that.value5='未激活'
					this.$confirm('此操作将设备停用, 是否继续?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						let data={
							devId:row.deviceId,
							cmd:17,
							cmdValue:'11'
						}
						console.log(data)
						axios({
						method:'post',
						url:that.$store.state.http+"/send/sendCmd",
						data:Qs.stringify(data)
						})
						.then(function(message){
						if(message.data.resCode==0){
							console.log(message)
							console.log(678)
								let t = setTimeout(function(){
									let dataA={
										cmdsId:message.data.cmd_uuid
									}
										axios({
										method:'post',
										url:that.$store.state.http+"/send/QueryCmdsResp",
										data:Qs.stringify(dataA)
										})
										.then(res => {
											console.log(res)
											if(res.data.resCode==0){
												that.$message({
													message: '停用成功',
													type: 'success'
												});
												that.value5='未激活'
												that.hidestatus=false;
												clearTimeout(t);
											}else{
												clearTimeout(t);
												that.$message({
													message: '停用失败',
													type: 'error'
												})
												that.value5='已激活'
											}
										}).catch(err => {
											that.$message({
												message: '停用失败',
												type: 'error'
											})
											that.value5='已激活'
										})
									},3000)
								
							}else{
								that.$message({
									message: '停用失败',
									type: 'error'
								})
								that.value5='已激活'
							}
						}).catch(() => {
							that.$message({
									message: '停用失败',
									type: 'error'
								})
								that.value5='已激活'
						});
					}).catch(() => {
							this.$message({
								type: 'info',
								message: '已取消停用'
							});
							that.value5='已激活'
						});
				}
			},
			
			changelock(row){
				console.log(row)
				console.log(111111111)
				let that=this;
				if(that.value6=='已开阀'){
					that.value6='已开阀'
					this.$confirm('此操作将设备开阀, 是否继续?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						let data={
							devId:row.deviceId,
							cmd:18,
							cmdValue:'11'
						}
						console.log(data)
						axios({
						method:'post',
						url:that.$store.state.http+"/send/sendCmd",
						data:Qs.stringify(data)
						})
						.then(function(message){
						if(message.data.resCode==0){
							console.log(message)
							console.log(678)
								let t = setTimeout(function(){
									let dataA={
										cmdsId:message.data.cmd_uuid
									}
										axios({
										method:'post',
										url:that.$store.state.http+"/send/QueryCmdsResp",
										data:Qs.stringify(dataA)
										})
										.then(res => {
											console.log(res)
											if(res.data.resCode==0){
												that.$message({
													message: '开阀成功',
													type: 'success'
												});
												that.value6='已开阀'
											clearTimeout(t);
											}else{
												clearTimeout(t);
												that.$message({
													message: '开阀失败',
													type: 'error'
												})
												that.value6='未开阀'
											}
										}).catch(err => {
											that.$message({
												message: '开阀失败',
												type: 'error'
											})
											that.value6='未开阀'
										})
									},5000)
								
							}else{
								that.$message({
									message: '开阀失败',
									type: 'error'
								})
								that.value6='未开阀'
							}
						})
					}).catch(() => {
							this.$message({
								type: 'info',
								message: '已取消开阀'
							});
							that.value6='未开阀'
						});
				}else if(that.value6=='未开阀'){
					that.value6='未开阀'
					console.log(787)
					this.$confirm('此操作将设备关阀, 是否继续?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						let data={
							devId:row.deviceId,
							cmd:18,
							cmdValue:'12'
						}
						console.log(data)
						axios({
						method:'post',
						url:that.$store.state.http+"/send/sendCmd",
						data:Qs.stringify(data)
						})
						.then(function(message){
						if(message.data.resCode==0){
							console.log(message)
							console.log(678)
								let t = setTimeout(function(){
									let dataA={
										cmdsId:message.data.cmd_uuid
									}
										axios({
										method:'post',
										url:that.$store.state.http+"/send/QueryCmdsResp",
										data:Qs.stringify(dataA)
										})
										.then(res => {
											console.log(res)
											if(res.data.resCode==0){
												that.$message({
													message: '关阀成功',
													type: 'success'
												});
												that.value6='未开阀'
											clearTimeout(t);
											}else{
												clearTimeout(t);
												that.$message({
													message: '关阀失败',
													type: 'error'
												})
												that.value6='已开阀'
											}
										}).catch(err => {
											that.$message({
												message: '关阀失败',
												type: 'error'
											})
											that.value6='已开阀'
										})
									},5000)
								
							}else{
								that.$message({
									message: '关阀失败',
									type: 'error'
								})
								that.value6='已开阀'
							}
						}).catch(() => {
							that.$message({
									message: '关阀失败',
									type: 'error'
								})
								that.value6='已开阀'
						});
					}).catch(() => {
							this.$message({
								type: 'info',
								message: '已取消关阀'
							});
							that.value6='已开阀'
						});
				}
			},
			changeting(row){
				console.log(row)
				console.log(111111111)
				let that=this;
				if(that.value7=='已布防'){
					that.value7='已布防'
					this.$confirm('此操作将设备布防, 是否继续?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						let data={
							devId:row.deviceId,
							cmd:19,
							cmdValue:'11'
						}
						console.log(data)
						axios({
						method:'post',
						url:that.$store.state.http+"/send/sendCmd",
						data:Qs.stringify(data)
						})
						.then(function(message){
						if(message.data.resCode==0){
							console.log(message)
							console.log(678)
								let t = setTimeout(function(){
									let dataA={
										cmdsId:message.data.cmd_uuid
									}
										axios({
										method:'post',
										url:that.$store.state.http+"/send/QueryCmdsResp",
										data:Qs.stringify(dataA)
										})
										.then(res => {
											console.log(res)
											if(res.data.resCode==0){
												that.$message({
													message: '布防成功',
													type: 'success'
												});
												that.value7='已布防'
											clearTimeout(t);
											}else{
												clearTimeout(t);
												that.$message({
													message: '布防失败',
													type: 'error'
												})
												that.value7='未布防'
											}
										}).catch(err => {
											that.$message({
												message: '布防失败',
												type: 'error'
											})
											that.value7='未布防'
										})
									},3000)
								
							}else{
								that.$message({
									message: '布防失败',
									type: 'error'
								})
								that.value7='未布防'
							}
						})
					}).catch(() => {
							this.$message({
								type: 'info',
								message: '已取消布防'
							});
							that.value7='未布防'
						});
				}else if(that.value7=='未布防'){
					that.value7='未布防'
					console.log(787)
					this.$confirm('此操作将设备撤防, 是否继续?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						let data={
							devId:row.deviceId,
							cmd:19,
							cmdValue:'12'
						}
						console.log(data)
						axios({
						method:'post',
						url:that.$store.state.http+"/send/sendCmd",
						data:Qs.stringify(data)
						})
						.then(function(message){
						if(message.data.resCode==0){
							console.log(message)
							console.log(678)
								let t = setTimeout(function(){
									let dataA={
										cmdsId:message.data.cmd_uuid
									}
										axios({
										method:'post',
										url:that.$store.state.http+"/send/QueryCmdsResp",
										data:Qs.stringify(dataA)
										})
										.then(res => {
											console.log(res)
											if(res.data.resCode==0){
												that.$message({
													message: '撤防成功',
													type: 'success'
												});
												that.value7='未布防'
											clearTimeout(t);
											}else{
												clearTimeout(t);
												that.$message({
													message: '关阀失败',
													type: 'error'
												})
												that.value7='已布防'
											}
										}).catch(err => {
											that.$message({
												message: '布防失败',
												type: 'error'
											})
											that.value7='已布防'
										})
									},3000)
								
							}else{
								that.$message({
									message: '布防失败',
									type: 'error'
								})
								that.value7='已布防'
							}
						})
					}).catch(() => {
							this.$message({
								type: 'info',
								message: '已取消撤防'
							});
							that.value7='已布防'
						});
				}
			},
			uploadFile(file){
            	let that=this;
            	var formData=new FormData();
                   formData.append('file',file);
                var file = formData;
                // axios("s("http://192.168.2.123:8090/staff/upload",fi",file).then(function(message)=>{
                // 	/ 	console.log(res(res);
                //      if(if(res.data.code ==  == 200){
                //          this.$message({
                //              message:"上传成功",
                //              type:'success'
                //          })
                //      }
                //     })
				   console.log(file);
                axios({
					method:'post',
					url:this.$store.state.http+'/devices/batch',
					data:file
				}).then(function(message) {
					console.log(message);
				})
            },
			// update(e){
			// 	let file=e.target.files[0];
			// 	let param=new FormData();
			// 	param.append('file',file);
			// 	axios({
			// 		method:'post',
			// 		dataType: 'jsonp',
			// 		url:this.$store.state.http+'/devices/test',
			// 		data:param
			// 		}).then(function(message){
			// 		console.log(message)
			// 		})
			// },

			clickMe(){
				this.endcheckbox=true;
				this.num=0;
				this.startcheckbox=false
			},
			clickMe1(){
				this.startcheckbox=true;
				this.num=1;
				this.endcheckbox=false
			},
			changemap(row){
				console.log(row)
				if(this.hnewmap == ''){
					this.$message.error('数据不能为空哦！');
					return false;
				}
				if(this.num==1){
					this.as=this.hnewmap
				}else if(this.num==0){
					this.as=this.newdirectory
				}
				let that=this;
				let data={
					deviceId:that.newnum,
					number:that.num,
					address:that.as,
				}
				console.log(data)
				axios({
					method:'post',
					dataType: 'jsonp',
					url:this.$store.state.http+'/Amend/update',
					data:Qs.stringify(data)
					}).then(function(message){
					console.log(message)
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
				that.universal.alter = false;
			},
			hiedclick(){
				this.universal.change = false;
				// this.searchClick();
			},
			statistics(){
				this.universal.statistic = true;
				let that=this
				if(that.value1==''){
					that.value1=that.getNowFormatDatenew()
				}else{
					that.value1=(JSON.stringify(that.value1)).slice(1,20)
				}
				if(that.value2==''){
					that.value2=that.getNowFormatDate()
				}else{
					that.value2=(JSON.stringify(that.value2)).slice(1,20)
				}
				that.elding()
				if(that.value3==''){
					that.value3=that.getNowFormatDatenew()
				}else{
					that.value3=(JSON.stringify(that.value3)).slice(1,20).replace(' ','T')
				}
				if(that.value4==''){
					that.value4=that.getNowFormatDate()
				}else{
					that.value4=(JSON.stringify(that.value4)).slice(1,20).replace(' ','T')
				}
				that.elding1()
				if(that.value8==''){
					that.value8=that.getNowFormatDatenew()
				}else{
					that.value8=(JSON.stringify(that.value8)).slice(1,20).replace(' ','T')
				}
				if(that.value9==''){
					that.value9=that.getNowFormatDate()
				}else{
					that.value9=(JSON.stringify(that.value9)).slice(1,20).replace(' ','T')
				}
				that.elding2()
				if(that.value15==''){
					that.value15=that.getNowFormatDatenew()
				}else{
					that.value15=(JSON.stringify(that.value15)).slice(1,20)
				}
				if(that.value16==''){
					that.value16=that.getNowFormatDate()
				}else{
					that.value16=(JSON.stringify(that.value16)).slice(1,20)
				}
				that.elding3()
			},
			map(){
				this.$router.push({path: '/carMonitor'});
			},
			indexMethod(index) {
        		return index + (this.paging.page-1)*this.paging.pageSize+1;
    		},
			handleSizeChange(val){
				this.paging.pageSize = val;
				console.log(this.paging.pageSize)
				this.searchClick();
			},
			handleClick(tab, event) {
				console.log(tab, event);
				console.log(77777777777777777)
			},
			// next() {
			// 	/*this.addClick();*/
			// 	let that = this;
			// 	if(this.step==0){
			// 		axios({
			// 			method:'post',
			// 			url:that.$store.state.http +'/concode/conByCarBrand',
			// 			data:Qs.stringify({
			// 				conLocaid:that.addTo.list.conLocaid,
			// 				carBrand:that.addTo.list.carBrand
			// 			})
			// 		}).then(function(message){
			// 			console.log(message.data)
			// 			if(message.data.resCode==0){
			// 				console.log(message.data.result)
			// 				if (that.step++ > 3) {
			// 		        	that.step = 0;
			// 		        	// that.addClick();
			// 		        	that.add = false;
			// 		        }
			// 			}else{
			// 				that.$message.error('此定位器ID不存在');
			// 				that.addTo.list.conLocaid = '';
			// 				return false;
			// 			}
			// 		})
			// 	}else{
			// 		if (that.step++ > 3) {
			// 		    that.step = 0;
			// 		    // that.addClick();
			// 		    that.add = false;
			// 		}
			// 	}
		        
			// },
			// nextSee(){
			// 	if (this.seeStep++ > 1) {
		    //     	this.seeStep = 1;
		    //     }
			// },
			handleCurrentChange(val){
				this.searchClick();
			},
			aaa:function(val){
            this.tableChild.map((s,index)=>{
              if(s.deviceType===val){
				this.selectid  = this.tableChild[index].id;
				console.log(77777777777777777)
				console.log(this.selectid)
              }
            })
          },
			deleteClild(row){
				if(this.type1.deviceType == ''){
					this.$message.error('数据不能为空哦！');
					return false;
				}
				let that = this;
				let data={
					typeId:this.selectid
				}
				console.log(data)
				this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					console.log(row)
					axios({
						method:'post',
						url:this.$store.state.http+'/type/removeType',
						data:Qs.stringify(data)
					}).then(function(message){
						console.log(message)
						console.log(789)
						if(message.data.resCode==1){
							that.searchChild();
							that.type1.deviceType=""
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
			searchChild(){
				// let tableChild=[];
				let data;
				let that=this
				axios({
					method:'post',
					dataType: 'jsonp',
					url:this.$store.state.http+'/type/findTypes',
					data:Qs.stringify(data)
					}).then(function(message){
					console.log(message)
					console.log(123243)
					that.tableChild= message.data.typeList;
					console.log(that.tableChild)
				})
			},
			type(){
				this.universal.type1 = true;
				this.searchChild();
			},
			yes(){
				if(this.type2.deviceType == ''){
					this.$message.error('数据不能为空哦！');
					return false;
				}
				let data = this.type2
				console.log(data)
				console.log(333333333)
				let that=this
				axios({
					method:'post',
					dataType: 'jsonp',
					url:this.$store.state.http+'/type/addType',
					data:Qs.stringify(data)
					}).then(function(message){
					console.log(message)
					console.log((message.data.errMsg).split(":")[1])
					localStorage.setItem('id',(message.data.errMsg).split(":")[1])
					if(message.data.resCode==1){
						that.searchChild();
						// that.$store.dispatch('group');
						that.type2.deviceType=""
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
			},
			addClick(){
				/*console.log(parameter)*/
				if(this.add1.trafficCard == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				if(this.type1.deviceType== ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				if(this.add1.deviceModel == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				
				if(this.add1.deviceName == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				this.add1.deviceType=this.type1.deviceType
				let that = this;
				let data = this.add1;

				data.status=0
				data.personnel=sessionStorage.getItem("userAlias");
				data.dealer=sessionStorage.getItem("dealer");
				console.log(data);
				console.log(111111111111)
				axios({
					method:'post',
					dataType: 'jsonp',
					url:this.$store.state.http+'/devices/addDevices',
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
			},
			allotchange(row){
				if(this.customer == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				let that=this
				let per=that.customer.split(":")[0]
				let par=that.customer.split(":")[1]
				console.log(per)
				let data={
					deviceId:that.allot1.deviceId,
					deviceName:that.allot1.deviceName,
					orderDealer:par,
					trafficCard:that.allot1.trafficCard,
					deviceType:that.allot1.deviceType,
					deviceModel:that.allot1.deviceModel,
					personnel:per,
					status:that.allot1.status
				}
				data.dealer=sessionStorage.getItem("dealer");
				console.log(data)
				axios({
					method:'post',
					url:this.$store.state.http+'/devices/addOrderDevice',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message);
					that.searchClick();
				})
				that.universal.allot = false;
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
						url:this.$store.state.http+'/devices/removeDevice',
						data:Qs.stringify({
							devId:row.deviceId
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
			
				this.universal.change = false;
			},
			// changeShow(row){
			// 	this.universal.add = true;
			// 	this.change = row;
			// 	console.log(row)
			// },
			changeshow(row){
				this.universal.change = true;
				this.change = Object.assign({},row);
				console.log(row)
				// this.searchClick()
			},
			changeShowmap(row){
				this.universal.alter = true;
				// this.alter = Object.assign({},row);
				this.newnum=row.deviceId
				let that=this;
				console.log(row)
				 axios({
					method:"post",
					url:this.$store.state.http+'/Datapoints/getData',
					data:Qs.stringify({
						devId:row.deviceId
					})
				}).then(function(message){
					console.log(message);
					console.log(JSON.parse((message.data.errMsg).slice(6)))
					let messData=JSON.parse((message.data.errMsg).slice(6))
                    for(let i=0;i<messData.data.datastreams.length;i++){
						console.log(messData.data.datastreams[i].id);
                         switch (messData.data.datastreams[i].id){
							 case '2003':that.newcon.devLongitude=messData.data.datastreams[i].datapoints[0].value;
							 break;
							 case '2002':that.newcon.devLatitude=messData.data.datastreams[i].datapoints[0].value;
							 break;
							 default:break;
						 }
					}
					console.log(135)
					console.log(that.newcon.devLongitude)
					console.log(that.newcon.devLatitude)
					var map = new BMap.Map("allmap");
					var point = new BMap.Point(that.newcon.devLongitude,that.newcon.devLatitude);
					map.centerAndZoom(new BMap.Point(that.newcon.devLongitude,that.newcon.devLatitude), 18);
					map.enableScrollWheelZoom(true);
					map.addEventListener("click",function(e){
						// console.log(e.point.lng + "," + e.point.lat);
						that.objs.lngs=e.point.lng;
						that.objs.lats=e.point.lat
						//  var point = new BMap.Point(e.point.lng, e.point.lat); //将标注点转化成地图上的点
						//  var marker = new BMap.Marker(point); //将点转化成标注点
						//   map.addOverlay(marker);

						//   map.clearOverlays(); 
						map.clearOverlays();
						point = new BMap.Point(e.point.lng,e.point.lat);
						var geoc = new BMap.Geocoder(); 
						geoc.getLocation(point,function(rs){ 
							var addComp = rs.addressComponents; 
							that.hnewmap=(addComp.province + "" + addComp.city + "" + addComp.district + "" + addComp.street + "" + addComp.streetNumber); 
							// console.log(addComp);
						});
						var marker = new BMap.Marker(point);
						marker.remove();
						map.addOverlay(marker);
						map.removeOverlay("指定点")

						// 删除标注点：
						var len =map.getOverlays().length

						for (var i = len ;i>0; i--)

						{

						// if (map.getOverlays()[i].GO == "Marker")

						map.removeOverlay(map.getOverlays()[i]);

						}


						function remove(name){
								var overlays = map.getOverlays();
									for(var i=0;i<overlays.length;i++){
										if(overlays[i].getTitle()==name){
											map.removeOverlay(overlays[i]);    
										}
									
								}
							}
						

					});
					var geoc = new BMap.Geocoder(); 
					geoc.getLocation(point, function(rs){
						var addComp = rs.addressComponents;
						that.newdirectory=addComp.province + "" + addComp.city + "" + addComp.district + "" + addComp.street + "" + addComp.streetNumber
					}); 
					// 添加带有定位的导航控件
					var navigationControl = new BMap.NavigationControl({
						// 靠左上角位置
						anchor: BMAP_ANCHOR_TOP_LEFT,
						// LARGE类型
						type: BMAP_NAVIGATION_CONTROL_LARGE,
						// 启用显示定位
						enableGeolocation: true
					});
					map.addControl(navigationControl);
					// 添加定位控件
					var geolocationControl = new BMap.GeolocationControl();
					geolocationControl.addEventListener("locationError",function(e){
						// 定位失败事件
						alert(e.message);
					});
					map.addControl(geolocationControl);
					map.clearOverlays(); 
					var new_point = new BMap.Point(that.newcon.devLongitude,that.newcon.devLatitude);
					var marker = new BMap.Marker(new_point);  // 创建标注
					const deviceSize = new BMap.Size(16,26);
					const deviceIcon = new BMap.Icon(iconCar, deviceSize, { //会以base64的方式传参iconCar
						imageSize: deviceSize
					});

					marker = new BMap.Marker(new_point, {
						icon: deviceIcon
					})
					map.addOverlay(marker);              // 将标注添加到地图中
					map.panTo(new_point); 
					// var map = new BMap.Map("allmap");
					// var point = new BMap.Point(116.331398,39.897445);
					// map.centerAndZoom(point,12);
					// var geoc = new BMap.Geocoder();    

					// map.addEventListener("click", function(e){        
					// 	var pt = e.point;
					// 	geoc.getLocation(pt, function(rs){
					// 		var addComp = rs.addressComponents;
					// 		console.log(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
					// 	});        
					// });
				})
				axios({
					method:'post',
					url:this.$store.state.http+'/Amend/findOne',
					data:Qs.stringify({
						id: row.deviceId
					})
				}).then(function(message){
					if(message.data.resCode==0){
						console.log(message.data.amend.address)
						that.hnewmap=message.data.amend.address
					}else{
						that.hnewmap=''
					}
				})
			},
			allot(row){
				this.universal.allot = true;
				this.allot1 = row;
				let that=this;
				console.log(row)
				axios({
					method:'post',
					url:this.$store.state.http+'/user/listCustom',
					data:Qs.stringify({
						type: 5,
						userId: localStorage.getItem('userId'),
						dealer:sessionStorage.getItem('dealer')
					})
				}).then(function(message){
					console.log(message.data.result)
					that.len=message.data.result;
					console.log(that.len)
					console.log(222)
				})
			},
			changeclick(row){
				if(this.change.trafficCard == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				if(this.change.deviceType == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				if(this.change.deviceModel == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				if(this.change.deviceName == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				let that = this;
				axios({
					method:'post',
					url:this.$store.state.http+'/devices/modifyDevices',
					data:Qs.stringify({
						deviceName:row.deviceName,
						trafficCard:row.trafficCard,
						deviceModel:row.deviceModel,
						deviceType:row.deviceType,
						deviceId:row.deviceId,
						devStatus:row.devStatus,
						personnel:sessionStorage.getItem("userAlias")
					})
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
				// 	 axios({
				// 		method:"post",
				// 		url:'http://192.168.2.123:8080/SendCmds/QueryCmdsStatus',
				// 		data:Qs.stringify({
				// 			cmdsId:mess.data.cmd_uuid
				// 		})
				// 	}).then(function(message){
				// 		console.log(message)
				
					
				// })

				// axios({
				// 		method:"post",
				// 		url:'http://192.168.2.123:8080/SendCmds/conditionFind',
				// 		data:Qs.stringify({
				// 			devId:row.deviceId
				// 		})
				// 	}).then(function(message){
				// 		console.log(message)
				// })
				
			},
			searchClick(){
				this.searchChild()
				let data = {
					pageNum:this.paging.page,
					pageSize:this.paging.pageSize
				};
				 data.devId=this.search.deviceId;
				 data.deviceType=this.type1.deviceType;
				// data.deviceId=this.search.deviceId;
				data.dealer=sessionStorage.getItem("dealer")
				let that = this;
				console.log(data);
				that.tableData = [];
				that.timeCrea=[];
				that.truey=[]
				console.log(that.tableData)
				axios({
					method:'post',
					url:this.$store.state.http+'/devices/conditionFind',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message)
					if(message.data.resCode==0){
						console.log(message.data.result)
						for(var i=0;i<message.data.result.length;i++){
							// message.data.result[i].createTime=(message.data.result[i].createTime).slice(0,19)
							if(message.data.result[i].createTime.time!=null){
								// console.log(message.data.result[i].createTime.time)
								console.log(1)
								message.data.result[i].createTime=timeToDate(JSON.stringify(message.data.result[i].createTime.time).slice(0,10))
							}else{
								console.log(2)
								message.data.result[i].createTime=JSON.stringify(message.data.result[i].createTime).slice(1,20)
							}
						}
						that.tableData= message.data.result;
						console.log(message.data.result.length)
						that.paging.total = message.data.result2;
						console.log(that.tableData)
						for(var i=0;i<that.tableData.length;i++){
							that.truey.push(that.tableData[i].status)
							if(that.tableData[i].devStatus=="0x11"){
								// that.trues=1;
								// console.log(that.trues);
								that.tableData[i].devStatus='正常'
							}else{
								that.tableData[i].devStatus='异常'
							}
						}
						console.log(that.truey)
						
					}else{
						that.tableData = [];
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
			changecontrol(row){
				this.look = row;
				this.universal.look = true;
				let that=this;
				console.log(777778888888)
				console.log(row)
				let data={
					devId:row.deviceId
				}
				that.con={
					devControl:'无',
					waterMeter:'无',
					waterPressure:'无',
					waterTemperature:'无',
					devDefence:'无',
					devUnlockWay:'无',
					devLockState:'无',
					waterMeterTotal:'无',
					waterMeterTemp:'无',
					devHardVerison:'无',
					waterPressure:'无',
					devSoftVerison:'无',
					waterTemperature:'无',
					devParaSn:'无',
					devWarning:'无',
					devIccid:'无',
					devLongitude:'无',
					devStatus:'无',
					devLatitude:'无',
					devUnlockTime:'无'
				},
				console.log(data)
				 axios({
					method:"post",
					url:this.$store.state.http+'/Datapoints/getData',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message);
					console.log(898989)
					console.log(JSON.parse((message.data.errMsg).slice(6)))
					let messData=JSON.parse((message.data.errMsg).slice(6))
                    for(let i=0;i<messData.data.datastreams.length;i++){
						console.log(messData.data.datastreams[i].id);
                         switch (messData.data.datastreams[i].id){
							 case '2010':that.con.devDefence=messData.data.datastreams[i].datapoints[0].value;
							 break;

							 case '2012':that.con.devControl=messData.data.datastreams[i].datapoints[0].value
							 break;
							 case '2009':that.con.devUnlockWay=messData.data.datastreams[i].datapoints[0].value;
							 			that.con.devUnlockTime=messData.data.datastreams[i].datapoints[0].at;
							 break;
							 case '2008':that.con.devLockState=messData.data.datastreams[i].datapoints[0].value
							 break;
							 case '1001':that.con.devStatus=messData.data.datastreams[i].datapoints[0].value
							 break;
							 default:break;
						 }
					}
					if(that.con.devControl==17){
						console.log(1)
						that.value5='未激活';
						that.hidestatus=false;
					}else{
						console.log(2)
						that.value5='已激活';
						that.hidestatus=true;
					}
					if(that.con.devLockState==17){
						console.log(1)
						that.value6='已开阀';
					}else{
						console.log(2)
						that.value6='未开阀';
					}
					if(that.con.devDefence==17){
						console.log(1)
						that.value7='未布防';
					}else{
						console.log(2)
						that.value7='已布防';
					}
				})
			},
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
.grid-content{width: 30%;float: left;text-align: right;margin-right: 10px;}
/* .grid-content[data-v-14ce31a1] */
.letg div{font-size: 15px;line-height: 40px;}
.block{width: 74%;float: left;}
.butt{margin-top:5px;}
.oyButtonlick{position: absolute;top:44%;left: 63%;}
.oyButtondev{position: absolute;top:69%;left: 63%;}
.spanClassTL{width: 200px;}
#allmap{width: 100%;height: 300px;}
/* .letg div[data-v-14ce31a1]{font-size: 17px;} */
.newdirectory{width: 330px;}
.box{float: left;margin-left: 10%;margin-top:15px;}
.widths{width: 140px;}
.demoele{float: left;}
.divswitch{margin-top:15px;}
.divswitch span:nth-child(1){display: inline-block;width: 15%;}
.divswitch span:nth-child(2){display: inline-block;width: 20%;}
.innerone,.innertwo,.innerthree{width: 40px;display: inline-block;}
.lokway{margin-top:20px;}

</style>