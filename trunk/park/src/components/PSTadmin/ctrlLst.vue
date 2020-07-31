<template>
	<div id="PSTlist">
		<div class="header">
			<div class="headerTitle">
				<span>控制器列表</span>
			</div>
		</div>
		<div class="select">
			<span>&nbsp;&nbsp;&nbsp;&nbsp;ICCID：</span>
			<el-input v-model="search.deviceId" clearable placeholder="请输入内容"></el-input>
			<span>控制器编号：</span>
			<el-input v-model="search.controid" clearable placeholder="请输入内容"></el-input>
			
			<span>销售标识：</span>
			<el-select v-model="type1.deviceType" placeholder="请选择" @change="aaa(type1.deviceType)">
				    <el-option  value=''>未选择</el-option>
					<el-option v-for="item in tableChild" :key="item.id" :value="item.deviceType"></el-option>
			</el-select>
		</div>
		<div class="select">
			<span>开始时间：</span>
			<el-date-picker class='oyInp' v-model="search.starDate" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker>
			
			<span>&nbsp;&nbsp;&nbsp;结束时间：</span>
			<el-date-picker class='oyInp' v-model="search.endDate" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker>
		</div>
		<div class="select">
			<!--<el-button class="oyButton" type="success" icon="el-icon-plus"  @click="add = true">新增</el-button>-->
			<!-- <el-button class="oyButton" type="success" icon="el-icon-plus"  @click="conGroup = true">分组</el-button> -->
			<el-button class="oyButton" type="success" icon="el-icon-search" @click='searchClick'>查询</el-button>
			<el-button type="success" class="oyButton" icon="el-icon-plus" @click='ShowHide'>添加</el-button>
			<el-upload
				class="upload-demo demoele"
				action=""
				:before-upload="uploadFile"
				multiple
				:limit="1">
				<el-button class="oyButton" type="success" icon="el-icon-download" >导入</el-button> 
				<!-- <el-button size="small" type="primary">导入</el-button> -->
			</el-upload>


		</div>
		<el-dialog title="新增" :visible.sync="universal.add">
			<div>
				<!-- <span class="spanClass">设备名称：</span> -->
				<span class="spanClassT"><span class="aKey">*</span>mac地址：</span>
				<el-input v-model="add.devicemac" clearable placeholder="请输入内容"></el-input><br /><br />

				<!-- <span class="spanClass">设备编号：</span> -->
				<span class="spanClassT"><span class="aKey">*</span>控制器编码：</span>
				<el-input v-model="add.concode" clearable placeholder="请输入内容"></el-input><br /><br />
			 </div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.add=false">取消</el-button>
				<el-button type="success" class="oyButton" @click="addClick">添加</el-button>
			</div>
		</el-dialog> 
		<el-dialog title="分配" :visible.sync="universal.allot">
			<div>
				<span class="spanClass">设备编号：</span>
				<el-input v-model="allot1.deviceId" clearable placeholder="请输入内容" :disabled="true" class="cars"></el-input><br /><br />

				<span class="spanClass">设备名称：</span>
				<el-input v-model="allot1.deviceName" clearable placeholder="请输入内容" :disabled="true" class="cars"></el-input><br /><br />

				<span class="spanClass">流量卡卡号：</span>
				<el-input v-model="allot1.trafficCard" clearable placeholder="请输入内容" :disabled="true" class="cars"></el-input><br /><br />

				<!-- <span class="spanClass">创建时间：</span>
				<el-input v-model="allot1.createTime" clearable placeholder="请输入内容" disabled="true"></el-input><br /><br /> -->
						
				<span class="spanClass">设备类型：</span>
				<el-input v-model="allot1.deviceType" clearable placeholder="请输入内容" :disabled="true" class="cars"></el-input><br /><br />

				<span class="spanClass">操作人员：</span>
				<el-input v-model="allot1.personnel" clearable placeholder="请输入内容" :disabled="true" class="cars"></el-input><br /><br />

				<span class="spanClass">流量卡号：</span>
				<el-input v-model="allot1.trafficCard" clearable placeholder="请输入内容" :disabled="true" class="cars"></el-input><br /><br />

				<span class="spanClass">设备型号：</span>
				<el-input v-model="allot1.deviceModel" clearable placeholder="请输入内容" :disabled="true" class="cars"></el-input><br /><br />

				<span class="spanClassT spanClassTL"><span class="aKey">*</span>管理员分配：</span>
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
		<el-dialog title="查看" :visible.sync="universal.look">
			<div class="letg">
				<el-row>
					<el-col :span="12"><div class="grid-content">设备SN码：</div>{{con.devParaSn}}</el-col>
					<el-col :span="12"><div class="grid-content">流量卡号：</div>{{con.devIccid}}</el-col>
				</el-row>
				<el-row>
					<el-col :span="12"><div class="grid-content">锁的状态：</div>{{con.devLockState}}</el-col>
					<el-col :span="12"><div class="grid-content">是否布防：</div>{{con.devDefence}}</el-col>
				</el-row>
				<el-row>
					<el-col :span="12"><div class="grid-content">设备电量：</div><div>{{con.devVOL}}mv</div></el-col>
					<el-col :span="12"><div class="grid-content">设备状态：</div>{{con.devStatus}}</el-col>
				</el-row>
				<el-row>
					<!-- <el-col :span="12"><div class="grid-content">设备纬度：</div>{{(con.devLatitude)/100000}}°</el-col>
					<el-col :span="12"><div class="grid-content">设备经度：</div><div>{{(con.devLongitude)/100000}}°</div></el-col> -->
					<el-col :span="12"><div class="grid-content">设备纬度：</div>{{120.23905}}°</el-col>
					<el-col :span="12"><div class="grid-content">设备经度：</div><div>{{30.27310}}°</div></el-col>
				</el-row>
				<el-row>
					<el-col :span="12"><div class="grid-content">设备水温：</div>{{con.waterTemperature}}℃</el-col>
					<el-col :span="12"><div class="grid-content">设备水压：</div>{{(con.waterPressure)/1000}}MPa</el-col>
				</el-row>
				<el-row>
					<el-col :span="12"><div class="grid-content">瞬间流量：</div>{{con.waterMeterTemp}}m3/h</el-col>
                    <!-- <el-col :span="12"><div class="grid-content">设备报警：</div> -->
					<!-- <el-tooltip class="item" effect="light" content="Top Left 提示文字" placement="top-start">
					<div class="sobj">{{obj}}</div>
					</el-tooltip> -->
					<!-- <el-popover trigger="hover" placement="top">
						<p  class="TsMaxWidth">{{obj}}</p>
						<div slot="reference" class="name-wrapper">
							<div class="overflowHide sobj">{{obj}}</div>
						</div>
					</el-popover> -->
					<el-col :span="12"><div class="grid-content">结算流量：</div>{{con.waterMeterTrip}}m3</el-col>
				<!-- </el-col> -->
				</el-row>
				<el-row>
					<el-col :span="12"><div class="grid-content">硬件版本：</div>{{con.devHardVerison}}</el-col>
					<el-col :span="12"><div class="grid-content">软件版本：</div>{{con.devSoftVerison}}</el-col>
				</el-row>
				<el-row>
					<el-col :span="12"><div class="grid-content">开锁方式：</div>{{con.devUnlockWay}}</el-col>
					<el-col :span="12"><div class="grid-content">开锁时间：</div>{{con.devUnlockTime}}</el-col>
				</el-row>
				<!-- <el-row>
					
					<!-- <el-col :span="12"><div class="grid-content">开锁时间：</div>{{con.devUnlockTime}}</el-col> -->
				<!-- </el-row> -->
			 </div>
			 	<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="statistics">数据统计</el-button>
				<router-link to='/pageHome/carMonitor'><el-button type="success" class="oyButton" @click="map">地图详情</el-button></router-link>
				</div>
		</el-dialog>

		<div class="Content">
			<el-table class='oyTable' v-loading="listLoading" :data="tableData" style="width: 100%">
				<!-- <el-table-column type="selection" width="55" class="selection" prop='uuid' :selectable='checkboxInit' @selection-change="changeFun"></el-table-column> -->
				<el-table-column type="index" :index="indexMethod" label="序号" width="100"> </el-table-column>
				<el-table-column label="ICCID">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{scope.row.sim}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.sim}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="控制器编号">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{scope.row.controid}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.controid}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="控制器编码匹配日期">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{scope.row.date}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.date}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="操作人员">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">速利</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">速利</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="销售标识">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">已使用</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">已使用</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				<el-table-column label="授权状态">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">已授权</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">已授权</div>
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
						
						<!-- <el-tooltip class="item" effect="dark" content="修改分组" placement="top">
    						<i class="icon-menu el-icon-menu" @click="changeGroupShow(scope.row)"></i>
						</el-tooltip> -->
						<!-- <el-button icon="el-icon-search" circle></el-button> -->
						<!-- <el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-export" @click="changeGroupShow(scope.row)" ></i>
						</el-tooltip> -->
						<!-- <el-tooltip v-if="scope.row.status==1" class="item" effect="dark" content="分配" placement="top">
    						<i class="icon-unclick el-icon-menu"></i>
						</el-tooltip>

						<el-tooltip v-else class="item" effect="dark" content="分配" placement="top">
    						<i class="icon-menu el-icon-menu" @click="allot(scope.row)" ></i>
						</el-tooltip> -->

						<el-tooltip class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
						</el-tooltip>

						<!-- <el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-search" @click="changeGroupShow(scope.row)" ></i>
						</el-tooltip> -->

						<!-- <el-tooltip class="item" effect="dark" content="修改地址" placement="top">
    						<i class="icon-See el-icon-view" @click="changeShowmap(scope.row)" ></i>
						</el-tooltip> -->

						<!-- <el-tooltip class="item" effect="dark" content="IC卡" placement="top">
    						<i class="icon-See el-icon-mobile-phone" @click="cardlist(scope.row)" ></i>
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
				listLoading: false,
				tableDatabox:[],
				numvalue:'',
				numw:[],
				obj:[],
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
				add:{
					concode:"",
					devicemac:""
				},
				trues:0,
				allot1:{
					deviceId:'',
					deviceType:"",
					deviceModel:"",
					deviceName:"",
					createTime:'',
					personnel:'',
					status:'',
					trafficCard:''
				},
				newnum:'',
				send:{
					deviceId:'',
					title:'',
					timeOut:'',
					qos:''
				},
				cardListshow:{
					deviceId:'',
					cardid:'',
					deviceType:"",
					deviceModel:""
				},
				change:{
					deviceName:"",
					// trafficCard:"",
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
					alter:false,
					cardListshow:false
				},
				dealerId:'',
				customer1:'',
				customer:'',
				timeCrea:[],
				tableData:[],
				tableChild:[{
					value:1,
					deviceType:'未使用'
				},
				{
					value:2,
					deviceType:'已使用'
				},{
					value:3,
					deviceType:'维修更换'
				}
				],
				len:[],
				newcon:{
					devLongitude:'',
					devLatitude:''
				},
				con:{
					devVOL:'',
					waterMeter:'',
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
					devUnlockTime:'',
					waterMeterTrip:''
				},
				li:[],
				truey:[],
				trueys:[],
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
				replaceobj:'',
				paging:{
					page:1,
					pageSize:10,
					total:0
				},
				search:{
					controid:"",
					title:"",
					start:"",
					end:"",
					checkInStartTime:'',
					checkInEndTime:'',
					deviceModel:'',
					devStatus:''
				},
				activeName: 'fourth',
				// controNameL:[{label:'C1',value:1},{label:'C2',value:2},{label:'C3',value:3},{label:'B1',value:4},{label:'B2',value:5},{label:'A1',value:6},{label:'A2',value:7},{label:'A3',value:8}]
			}
		},
	// 	created() {      this.initWebSocket();
    // },
		mounted: function() {
			
			// this.$store.dispatch('group');
			document.title=this.$route.meta.title;
			
			this.searchClick();
			
			if(sessionStorage.getItem("dealer")=='123'){
				this.added=1
			}
		},
		methods: {
　　　		 deleteRow(row){
				console.log(row.id)
				let that=this;
				this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					axios({
						method:'post',
						url:this.$store.state.http+'/Iccid/delete',
						data:Qs.stringify({
							id:row.id
						})
					}).then(function(message) {
						console.log(8989898989);
						that.cardlist(row)
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
				
			},
			hiedclickno(){
				this.universal.cardListshow=false;
			},
			cardlist(row){
				this.universal.cardListshow=true;
				this.cardListshow = Object.assign({},row);
				let that=this;
				let data={
					id:row.deviceId,
				}
				axios({
					method:'post',
					url:this.$store.state.http+'/Iccid/findBydevId',
					data:Qs.stringify(data)
				}).then(function(message) {
					console.log(message);
					that.tableDatabox=message.data.cards
				})
			},
			changecardclick(row){
				if(this.cardListshow.cardid == null){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				let that=this;
				let data={
					id:that.cardListshow.cardid,
					ids:row.deviceId,
					deviceType:row.deviceType
				}
				data.dealer=sessionStorage.getItem("dealer");
				console.log(data)
				axios({
					method:'post',
					url:this.$store.state.http+'/Iccid/save',
					data:Qs.stringify(data)
				}).then(function(message) {
					console.log(message);
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
				this.universal.cardListshow=false;
				this.cardListshow.cardid=''
			},
			changeFun(val) {
				this.multipleSelection = val;
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
					that.searchClick()
				})
            },

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
					that.value1=that.common.getNowFormatDatenew()
				}else{
					that.value1=(JSON.stringify(that.value1)).slice(1,20).replace(' ','T')
				}
				if(that.value2==''){
					that.value2=that.common.getNowFormatDate()
				}else{
					that.value2=(JSON.stringify(that.value2)).slice(1,20).replace(' ','T')
				}
				that.elding()
				if(that.value3==''){
					that.value3=that.common.getNowFormatDatenew()
				}else{
					console.log(123)
					that.value3=(JSON.stringify(that.value3)).slice(1,20).replace(' ','T')
				}
				if(that.value4==''){
					
					that.value4=that.common.getNowFormatDate()
				}else{
					that.value4=(JSON.stringify(that.value4)).slice(1,20).replace(' ','T')
				}
				that.elding1()
				if(that.value8==''){
					that.value8=that.common.getNowFormatDatenew()
				}else{
					that.value8=(JSON.stringify(that.value8)).slice(1,20).replace(' ','T')
				}
				if(that.value9==''){
					that.value9=that.common.getNowFormatDate()
				}else{
					that.value9=(JSON.stringify(that.value9)).slice(1,20).replace(' ','T')
				}
				that.elding2()
				if(that.value15==''){
					that.value15=that.common.getNowFormatDatenew()
				}else{
					that.value15=(JSON.stringify(that.value15)).slice(1,20)
				}
				if(that.value16==''){
					that.value16=that.common.getNowFormatDate()
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
			type(){
				this.universal.type1 = true;
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
			ShowHide(){
				this.universal.add=true
				this.add.devicemac='';
				this.add.concode=''
			},
			addClick(){
				if(this.add.devicemac== ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				if(this.add.concode == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				let that = this;
				let data = this.add;
				data.userName=localStorage.getItem('userName')
				console.log(data);
				console.log(111111111111)
				axios({
					method:'post',
					dataType: 'jsonp',
					url:'http://39.104.99.181:8080/parts/add',
					data:Qs.stringify(data)
					}).then(function(message){
					if(message.data.resCode==0){
						that.searchClick();
						that.$message({
				        	message: '添加成功',
				        	type: 'success'
				        });
					}else if(message.data.resCode==1){
						that.$message({
				        	message: '添加失败',
				        	type: 'success'
				        });
					}
				})
				that.universal.add=false;
			},
			allotchange(row){
				console.log(row)
				if(this.customer == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				let that=this
				let per=that.customer.split(":")[0]
				let par=that.customer.split(":")[1]
				let dataA={
					devId:that.allot1.deviceId,
					cmd:23,
					cmdValue:'11'+par
				}
				console.log(dataA)
				that.listLoading = true;
				axios({
						method:'post',
						url:that.$store.state.http+"/send/sendCmd",
						data:Qs.stringify(dataA)
						})
						.then(function(message){
						if(message.data.resCode==0){
							console.log(message)
							console.log(678)
								let t = setTimeout(function(){
									let dataB={
										cmdsId:message.data.cmd_uuid
									}
										axios({
										method:'post',
										url:that.$store.state.http+"/send/QueryCmdsResp",
										data:Qs.stringify(dataB)
										})
										.then(res => {
											console.log(res)
											if(res.data.resCode==0){
												console.log(per)
												let data={
													deviceId:that.allot1.deviceId,
													deviceName:that.allot1.deviceName,
													orderDealer:par,
													// trafficCard:that.allot1.trafficCard,
													deviceType:that.allot1.deviceType,
													deviceModel:that.allot1.deviceModel,
													personnel:per,
													status:that.allot1.status,
													trafficCard:that.allot1.trafficCard
												}
												data.dealer=sessionStorage.getItem("dealer");
												console.log(data)
												axios({
													method:'post',
													url:that.$store.state.http+'/devices/addOrderDevice',
													data:Qs.stringify(data)
												}).then(function(message){
													console.log(message);
													that.listLoading = false;
														that.$message({
														message: '分配成功',
														type: 'success'
													});
													that.searchClick();
												})
											clearTimeout(t);
											}else{
												that.listLoading = false;
												clearTimeout(t);
												that.$message({
													message: '分配失败',
													type: 'error'
												})
											}
										})
									},4000)
								
							}else{
								that.listLoading = false;
								that.$message({
									message: '分配失败',
									type: 'error'
								})
							}
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
					that.listLoading = true;
					console.log(row)
					axios({
						method:'post',
						url:this.$store.state.http+'/conCode/del',
						data:Qs.stringify({
							id:row.id
						})
					}).then(function(message){
						console.log(message)
						if(message.data.resCode==0){
							that.listLoading = false;
							that.$message({
					        	message: '删除成功',
					        	type: 'success'
							});
							that.searchClick();
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
					url:this.$store.state.http+'/conCode/detail',
					data:Qs.stringify({
						id:row.id
					})
				}).then(function(message){
					console.log(message);
				})

					

			},
			allot(row){
				this.universal.allot = true;
				this.allot1 = row;
				let that=this;
				if(this.allot1.trafficCard==''){
					this.allot1.trafficCard='无'
				}
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
				// if(this.change.trafficCard == ''){
				// 	this.$message.error('带*的数据不能为空哦！');
				// 	return false;
				// }
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
						// trafficCard:row.trafficCard,
						deviceModel:row.deviceModel,
						deviceType:row.deviceType,
						deviceId:row.deviceId,
						devStatus:row.devStatus,
						personnel:sessionStorage.getItem("userAlias")
					})
				}).then((message)=>{
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
			isType(obj){
				var type = Object.prototype.toString.call(obj);
				if(type == '[object Array]'){
						return 'Array';
					}else if(type == '[object Object]'){
						return "Object"
					}else{
						return 'param is no object type';
					}
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
				 data.devId=this.search.deviceId;
				 data.deviceModel=this.type1.deviceType;
				//  data.devStatus=this.search.devStatus;
				 data.deviceType=this.search.deviceModel;
				// data.deviceId=this.search.deviceId;

				let that = this;
				console.log(data);
				that.tableData = [];
				that.timeCrea=[];
				that.truey=[]
				console.log(that.tableData)
				console.log(123)
				console.log(data)
				axios({
					method:'post',
					url:this.$store.state.http+'/parts/list',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message)
					if(message.data.resCode==0){
						console.log(message.data.results)
						for(var i=0;i<message.data.results.length;i++){
								message.data.results[i].date=that.common.timeToDate(JSON.stringify(message.data.results[i].date.time).slice(0,10))
						}
						that.tableData= message.data.results;
						console.log(that.tableData)
						console.log(message.data.results.length)
						that.paging.total = message.data.result2;
						
						for(var i=0;i<that.tableData.length;i++){
							that.trueys.push(that.tableData[i].deviceId)
						}
						console.log(that.trueys)
						axios({
							method:"post",
							url:that.$store.state.http+'/devices/accurate',
							data:Qs.stringify({
								devId:that.truey
							})
						}).then(function(message){
							console.log(message);
							for(var o=0;o<message.data.data.devices.length;o++){
								for(var f=0;f<that.tableData.length;f++){
									console.log(message.data.data.devices[o].id);
									console.log(that.tableData[f].deviceId);
									if(message.data.data.devices[o].id==that.tableData[f].deviceId){
										// console.log(message.data.data.devices[i].id)
										// console.log(message.data.data.devices[i].online)
										
										that.tableData[f].empty=message.data.data.devices[o].online
										if(that.tableData[f].empty){
											that.tableData[f].empty='在线'
										}else{
											that.tableData[f].empty='离线'
										}
										console.log(that.tableData[f].empty)
									}
								}
							}

								for(var p=0;p<that.tableData.length;p++){
								that.truey.push(that.tableData[p].status)
								// if(that.tableData[p].devStatus==false){
									that.trues=1;
									console.log(that.trues);
								// 	that.tableData[p].devStatus='离线'
								// }else{
								// 	that.tableData[p].devStatus='在线'
								// }
							}
							// console.log(that.truey)
						})
						
						console.log(that.tableData)
						
					}else{
						that.tableData = [];
						that.paging.total = 0;
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
.sobj{width: 50%;height: 40px;display: inline-block;overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;}
.el-row{height: 40px;}
.el-col-12{height: 40px;}
.impofooter{text-align: left;}
.leftcard{float: left;width: 50%;}
.rightcard{float: right;width: 50%;height: 95%;}
.totalcard{height: 165px;}
.cars{width: 200px!important;}
</style>