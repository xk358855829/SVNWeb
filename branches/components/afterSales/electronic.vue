<template>
	<div id="faultList">
		<div class="header">
			<div class="headerTitle">
				<span>电子卡券</span>
			</div>
		</div>
		<div class="select">
			<!-- <span>卡券类型：</span>
			<el-input v-model="search.car_number" clearable placeholder="请输入内容"></el-input> -->
			<!-- <span>卡券编码：</span>
			<el-input v-model="search.ticketNumber" clearable placeholder="请输入内容"></el-input> -->
			<span>卡券类型：</span>
			<el-select v-model="search.ticketType" placeholder="请选择">
				<el-option>未选择</el-option>
				<el-option v-for="item in tickettype" :key="item.id" :label="item.type" :value="item.type"></el-option>
			</el-select>
			<span>使用方式：</span>
			<el-select v-model="search.useWay" placeholder="请选择">
				<el-option>未选择</el-option>
				<el-option v-for="item in usage" :key="item.id" :label="item.type" :value="item.type"></el-option>
			</el-select>
			<span>使用状态：</span>
			<el-select v-model="search.use_status" placeholder="请选择">
				<el-option>未选择</el-option>
				<el-option v-for="item in use_statuslist" :key="item.id" :label="item.type" :value="item.type"></el-option>
			</el-select>
		</div>
		<div class="select">
			<el-button type="success" class="oyButton" icon="el-icon-download" @click='export2Excel'>导出</el-button>
			<el-button type="success" class="oyButton" icon="el-icon-plus" @click='ADD' v-show="showchose">生成</el-button>
			<el-button type="success" class="oyButton" icon="el-icon-search" @click='searchClick'>查询</el-button>
			<!-- <el-button type="success" class="oyButton" icon="el-icon-download" @click='export2Excel'>导出</el-button> -->
			<el-button type="success" class="oyButton" @click='allefficacy'>删除失效券</el-button>
			<img src="../../../static/image/refresh.png" alt="" @click="refresh">
		</div>
		<div class="Content">
			<el-table class='oyTable' :data="tableData" style="width: 100%">
				<!-- <el-table-column type="selection" width="55" class="selection" prop='uuid' :selectable='checkboxInit' @selection-change="changeFun"></el-table-column> -->
				<el-table-column type="index" :index="indexMethod" label="序号" width="100"> </el-table-column>

				<el-table-column label="发放停车场" width="">
					<template slot-scope="scope">
				        <el-popover>
				        	<p  class="TsMaxWidth">{{ chose(scope.row.parking_id)}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ chose(scope.row.parking_id)}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				<el-table-column label="使用方式" width="">
					<template slot-scope="scope">
				        <el-popover>
				        	<!-- <p  class="TsMaxWidth">{{ scope.row.useWay | userwaytyape}}</p> -->
				        	<div slot="reference" class="name-wrapper">
				        		<!-- <div class="overflowHide">{{ scope.row.useWay | userwaytyape}}</div> -->
								<el-tag color="#5daf34"  v-if="scope.row.useWay==1">{{ scope.row.useWay | userwaytyape}}</el-tag>
								<el-tag color="#f8c541"  v-if="scope.row.useWay==2">{{ scope.row.useWay | userwaytyape}}</el-tag>
								<el-tag color="#c9521e"  v-if="scope.row.useWay==3">{{ (scope.row.useWay) | userwaytyape}}</el-tag>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="可用车牌" width="">
					<template slot-scope="scope">
				        <el-popover>
				        	<p  class="TsMaxWidth">{{ scope.row.issus_obj}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.issus_obj}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="免费时长" width="">
					<template slot-scope="scope">
				        <el-popover>
				        	<p  class="TsMaxWidth">{{ scope.row.freeTime}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.freeTime}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="需满金额" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.full}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.full}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="减去金额" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.sub}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.sub}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="使用状态" width="">
					<template slot-scope="scope">
				        <el-popover>
				        	<!-- <p  class="TsMaxWidth">{{ scope.row.use_status | statusele}}</p> -->
				        	<div slot="reference" class="name-wrapper">
				        		<!-- <div class="overflowHide">{{ scope.row.use_status | statusele}}</div> -->
								<el-tag color="#5daf34"  v-if="scope.row.use_status==1">{{ scope.row.use_status | statusele}}</el-tag>
								<el-tag color="#f8c541"  v-if="scope.row.use_status==-1">{{ scope.row.use_status | statusele}}</el-tag>
								<el-tag color="#c9521e"  v-if="scope.row.use_status==0">{{ (scope.row.use_status) | statusele}}</el-tag>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="生效时间" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.start_time}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.start_time }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="失效时间" width="">
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
						
						<el-tooltip class="item" v-if="scope.row.use_status==1 || scope.row.use_status==0" effect="dark" content="删除卡券" placement="top">
    						<i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
						</el-tooltip>

						<el-tooltip class="item" v-else effect="dark" content="删除失效券" placement="top">
    						<!-- <i class="icon-delete deletecolor el-icon-delete" @click="deleteClick(scope.row)"></i> -->
						</el-tooltip>

						<el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-search" @click="seeClick(scope.row)" ></i>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" v-if="scope.row.use_status==0" content="发放" placement="top">
    						<i class="jilu jilus iconfont icon-fafangyouhuiquan" ></i>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" v-if="scope.row.use_status==1&&scope.row.ticketType==1" content="发放" placement="top">
    						<i class="jilu iconfont icon-fafangyouhuiquan" @click="grant(scope.row)"></i>
						</el-tooltip>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<el-dialog title="发放优惠券" :visible.sync="universal.release">
			<div>
				<span class="spanClass spanchange"><span class="aKey">*</span>车牌号码：</span>
				<el-input :disabled="false" v-model="release.freeTime" clearable placeholder="请输入车牌号码"></el-input><br /><br />
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.release = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="grantyes">确认</el-button>
			</div>
		</el-dialog>
		<el-dialog title="查看" :visible.sync="universal.look">
			<div class="letg">
				<el-row>
					<el-col :span="12"><div class="grid-content">卡券编码：</div>{{look.ticketNumber}}</el-col>
					<!-- <el-col :span="12"><div class="grid-content">发放个数：</div>{{look.num | numnew}}</el-col> -->
					<el-col :span="12"><div class="grid-content">使用方式：</div>{{look.useWay | userwaytyape}}</el-col>
					<el-col :span="12"><div class="grid-content">免费时长：</div>{{look.freeTime}}</el-col>
					<el-col :span="12"><div class="grid-content">发放类型：</div>{{look.issus_type | issus_typefilter}}</el-col>
					<el-col :span="12"><div class="grid-content">需满金额：</div>{{look.full}}</el-col>
					<el-col :span="12"><div class="grid-content">发放方式：</div>{{look.isTeam | fangtype}}</el-col>
					<el-col :span="12"><div class="grid-content">减去金额：</div>{{look.sub}}</el-col>
					<el-col :span="12"><div class="grid-content">卡券类型：</div>{{look.ticketType | cardtype}}</el-col>
				</el-row>
				<el-row> 
					<!-- <el-col :span="12"><div class="grid-content">发放对象：</div>{{look.issus_obj | team}}</el-col> -->
					<el-col :span="12"><div class="grid-content">开始时间：</div>{{look.start_time}}</el-col>
					<el-col :span="12"><div class="grid-content">结束时间：</div>{{look.end_time}}</el-col>
					<el-col :span="12"><div class="grid-content">发放对象：</div>{{look.issus_obj}}</el-col>
					
					<el-col :span="12"><div class="grid-content">发放说明：</div>{{look.remark | sizes}}</el-col>
				</el-row>
				
			 </div>
		</el-dialog>
		<el-dialog title="生成优惠券" :visible.sync="universal.add1">
			<div>
				<el-row>
					<el-col :span="12">
					<span class="spanClass"><span class="aKey">*</span>卡券类型：</span>
					<el-select v-model="add1.ticketType" placeholder="请选择">
						<el-option value="">未选择</el-option>
						<el-option v-for="nice in tickettype" :key="nice.id" :label="nice.type" :value="nice.type"></el-option>
					</el-select><br /><br />
					<span class="spanClass"><span class="aKey">*</span>发放方式：</span>
					<el-select v-model="add1.isTeam" placeholder="请选择发放方式">
						<el-option value="">未选择</el-option>
						<el-option v-for="item in disbursement" :key="item.id" :label="item.type" :value="item.type"></el-option>
					</el-select><br /><br />
					<span class="spanClass"><span class="aKey">*</span>使用方式：</span>
					<el-select v-model="add1.useWay" placeholder="请选择">
						<el-option value="">未选择</el-option>
						<el-option v-for="nice in usage" :key="nice.id" :label="nice.type" :value="nice.type"></el-option>
					</el-select><br /><br />

					<span class="spanClass"><span class="aKey">*</span>发放类型：</span>
					<el-select v-model="add1.issus_type" placeholder="请选择发放类型">
						<el-option value="">未选择</el-option>
						<el-option v-for="item in Distributing" :key="item.id" :label="item.type" :value="item.type"></el-option>
					</el-select><br /><br />
					<span class="spanClass"><span class="aKey">*</span>发放对象：</span>
					<el-input :disabled="false" v-model="add1.issus_obj" clearable placeholder="请输入发放对象"></el-input>
					<el-tooltip placement="top">
						<div slot="content">发放的人是谁：如速利科技公司</div>
						<img src="../../../static/image/ming.png" alt="" class="syle" style="vertical-align: middle">
					</el-tooltip><br /><br />
					
					<span class="spanClass"><span class="aKey">*</span>卡券开始时间：</span>
					<el-date-picker v-model="add1.start_time" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />
					<!-- <el-date-picker v-model="add1.start_time" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker><br /><br /> -->

					<span class="spanClass"><span class="aKey">*</span>卡券结束时间：</span>
					<!-- <el-date-picker v-model="add1.end_time" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker><br /><br /> -->
					<el-date-picker v-model="add1.end_time" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />
					
					
				
					<span class="spanClass">备注：</span><div class="little">{{this.$store.state.size}}</div>
					</el-col>
					<el-col :span="12">
						<span class="spanClass" v-if="this.add1.isTeam=='团体'"><span class="aKey" v-if="this.add1.isTeam=='团体'">*</span>发放个数：</span>
						<el-input :disabled="false" v-model="add1.num" clearable placeholder="请输入发放对象" v-if="this.add1.isTeam=='团体'"></el-input><br /><br />
						
						<!-- <span class="spanClass">使用对象：</span>
						<el-input :disabled="false" v-model="add1.use_obj" clearable placeholder="请输入使用对象"></el-input><br /><br /> -->
						<span class="spanClass" v-if="this.add1.useWay=='免费时长'"><span class="aKey" v-if="this.add1.useWay=='免费时长'">*</span>免费时长：</span>
						<el-input :disabled="false" v-model="add1.freeTime" v-if="this.add1.useWay=='免费时长'" clearable placeholder="请输入 如：30分钟"></el-input>
						<span class="spanClass" v-if="this.add1.useWay=='满减券'"><span class="aKey" v-if="this.add1.useWay=='满减券'">*</span>需满金额：</span>
						<el-input :disabled="false" v-model="add1.full" clearable placeholder="请输入免费时长" v-if="this.add1.useWay=='满减券'"></el-input><br /><br />
						<span class="spanClass" v-if="this.add1.useWay=='满减券'|| this.add1.useWay=='现金抵用券'"><span class="aKey"  v-if="this.add1.useWay=='满减券'|| this.add1.useWay=='现金抵用券'">*</span>减去金额：</span>
						<el-input :disabled="false" v-model="add1.sub" clearable placeholder="请输入优惠金额" v-if="this.add1.useWay=='满减券'|| this.add1.useWay=='现金抵用券'"></el-input><br /><br />
						<span class="spanClass"><span class="aKey">*</span>发放停车场：</span>
						<el-select v-model="value5" multiple placeholder="请选择">
							<el-option
							v-for="item in tableDataadd"
							:key="item.parking_id"
							:label="item.parking_name"
							:value="item.parking_id">
							</el-option>
						</el-select><br /><br />
						<span class="spanClass"><span class="aKey">*</span>发放说明：</span>
						<el-input :disabled="false" class="textareaWidth" type="textarea" :rows="5" v-model="add1.remark" clearable placeholder="请输入内容"></el-input><br /><br />
					</el-col>
				</el-row>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.add1 = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="addClick">生成</el-button>
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
	import {mapState} from 'vuex'
	import {searchClicks} from '../api/api.js'
	export default {
		name: 'equipmentList',
		data() {
			return {
				pays:0,
				obj:[],
				numw:[],
				numvalue:[],
				universal:{
					change:false,
					look:false,
					add1:false,
					release:false
				},
				release:{
					car_number:''
				},
				tableDataadd:[],
				paging:{
					page:1,
					pageSize:10,
					total:''
				},
				tableData:[],
				search:{
					ticketType:'',
					use_status:'',
					useWay:''
				},
				fuzhi:'',
				look:{
					num:'',
					ticketType:'',
					ticketNumber:'',
					useWay:'',
					freeTime:'',
					full:'',
					sub:'',
					start_time:'',
					end_time:'',
					// use_obj:'',
					issus_type:'',
					isTeam:'',
					issus_obj:'',
					remark:''
				},
				value5:[],
				add1:{
					num:'',
					ticketType:'',
					useWay:'',
					freeTime:'',
					full:'',
					sub:'',
					start_time:'',
					end_time:'',
					// use_obj:'',
					issus_type:'',
					isTeam:'',
					issus_obj:'',
					remark:''
				},
				listorder:[],
				valtable:[],
				change:{
					trade_no:'',
					out_trade_no:'',
					pay_type:'',
					longdate:'',
					price:'',
					tmoney:'',
					pay_time:'',
					refund_reason:''
				},
				idreplace:'',
				showchose:''
			}
		},
		computed:{
			...mapState(['use_statuslist','usage','tickettype','Distributing','disbursement'])
		},
		mounted: function() {
			document.title=this.$route.meta.title;
			if(localStorage.getItem('dealer')==0||localStorage.getItem('dealer')==123){
				this.showchose=true
			}else{
				this.showchose=false
			}
			this.searchClick();
			let that=this;
			let data = {
				page:that.paging.page,
				pageSize:that.paging.pageSize,
				userId:localStorage.getItem('userId'),
				dealer:localStorage.getItem('dealer')
			};
			searchClicks('/Parking/selectLotInfo',data).then(message=>{
				if(message.data.resCode==0){
					that.tableDataadd = message.data.result;
				}else{
					that.tableData = [];
				}
			})
		},
		methods: {
			grant(val){
				console.log(val)
				this.universal.release=true;
				this.release.freeTime=''
				this.idreplace=val.id
			},
			grantyes(row){
				if(this.release.freeTime==''){
					this.$message.error('发放的车牌号不能为空');
					return false;
				}
				if(this.release.freeTime.length>6||this.release.freeTime.length<9){
					this.$message.error('请核对车牌号！');
					return false;
				}
				searchClicks('/TicketInfo/issueTicket',{
					issus_obj:this.release.freeTime,
					id:this.idreplace
				}).then(res=>{
					if(res.data.resCode==0){
						this.$message({
							message: '票券发放成功',
							type: 'success'
						});
					}else{
						this.$message({
							message: '票券发放失败',
							type: 'error'
						});
					}
				})
				this.universal.release=false;
			},
			chose(val){
				var run=val.split(',')
				
				for(let t=0;t<run.length;t++){
					console.log(run[t])
					for(let h=0;h<this.tableDataadd.length;h++){
						if(run[t]==this.tableDataadd[h].parking_id){
							var nlua;
							nlua+=this.tableDataadd[h].parking_name+","
							nlua=nlua.replace(/,$/,"")
							nlua=nlua.replace(/undefined/,"")
						}
					}
				}
				return nlua
				// for(var t=0;t<)
			},
			// chose(val){
			// 	searchClicks('/TicketInfo/focusAppLotNum',{id:val}).then(res=>{
			// 		if(res.data.resCode==0){
			// 			this.fuzhi=res.data.result
			// 		}
			// 	})
			// 	val=(this.fuzhi).join(',')
			// 	return val
				
			// },
			ADD(){
				this.universal.add1=true;
				let that=this;
				that.add1.num=''
				that.add1.ticketType=''
				that.add1.useWay=''
				that.add1.start_time=''
				that.add1.end_time=''
				// that.add1.use_obj=''
				that.add1.issus_type=''
				that.add1.isTeam=''
				that.add1.issus_obj=''
				that.add1.remark=''
				that.add1.freeTime=''
				that.add1.sub=''
				let data = {
					page:that.paging.page,
					pageSize:that.paging.pageSize,
					userId:localStorage.getItem('userId'),
					dealer:localStorage.getItem('dealer')
				};
				searchClicks('/Parking/selectLotInfo',data).then(message=>{
					if(message.data.resCode==0){
						that.tableDataadd = message.data.result;
					}else{
						that.tableData = [];
					}
				})
			},
			refresh(){
				let that=this;
				searchClicks('/TicketInfo/flushOverDue').then(res=>{
					console.log(res)
					if(res.data.resCode=="0"){
						that.$message({
							message: '失效票券刷新成功',
							type: 'success'
						});
					}else{
						that.$message({
							message: '失效票券刷新失败',
							type: 'error'
						});
					}
				})
			},
			allefficacy(){
				let that = this;
				this.$confirm('此操作将删除所有失效券, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					searchClicks('/TicketInfo/delOverDue',{}).then(message=>{
						if(message.data.resCode==0){
							that.searchClick();
							that.$message({
					        	message: '删除成功',
					        	type: 'success'
					        });
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
			export2Excel() {
				let data = {
					page:this.paging.page,
					pageSize:this.paging.total,
					user_id:localStorage.getItem('userId'),
					dealer:localStorage.getItem('dealer')
				};
				let that = this;
				searchClicks('/TicketInfo/selectTicketInfo',data).then(res=>{
					if(res.data.resCode==0){
						for(let i=0;i<res.data.result.length;i++){
							if(res.data.result[i].useWay==1){
								res.data.result[i].useWay='免费时长'
							}else if(res.data.result[i].useWay==2){
								res.data.result[i].useWay='现金抵用券'
							}else{
								res.data.result[i].useWay='满减券'
							}
							if(res.data.result[i].use_status==0){
								res.data.result[i].use_status='已使用'
							}else if(res.data.result[i].use_status==1){
								res.data.result[i].use_status='未使用'
							}else{
								res.data.result[i].use_status='已失效'
							}
							if(res.data.result[i].freeTime==''){
								res.data.result[i].freeTime='-'
							}else{
								res.data.result[i].freeTime=res.data.result[i].freeTime+'分钟'
							}
							if(res.data.result[i].sub===''){
								res.data.result[i].sub='-'
							}else{
								res.data.result[i].sub=res.data.result[i].sub+'元'
							}
							if(res.data.result[i].full===''){
								res.data.result[i].full='-'
							}else{
								res.data.result[i].full=res.data.result[i].full+'元'
							}
						}
						that.listorder=res.data.result
						console.log(that.listorder)
						require.ensure([], () => {
				　　　　　　const { export_json_to_excel } = require('../../excel/Export2Excel');
				　　　　　　const tHeader = ['使用方式','免费时长','需满金额','减去金额','使用状态','开始时间','结束时间'];
				　　　　　　const filterVal = ['useWay', 'freeTime', 'full', 'sub', 'use_status', 'start_time','end_time' ];
				　　　　　　const list = that.listorder;
				　　　　　　const data = that.formatJson(filterVal,list);
				　　　　　　export_json_to_excel(tHeader, data, '电子卡券');
				　　　　})
					}
				})
			
						
					

				
		　  },
			formatJson(filterVal, jsonData) {
	　　　　	return jsonData.map(v => filterVal.map(j => v[j]))
		　　},
			focus6(){
				if(!(/[\u4e00-\u9fa5]+/).test(this.change.tmoney)&&this.change.tmoney!=''){ 
						this.change.tmoney=this.change.tmoney+'元'
				}
			},
			seeClick(row){
				console.log(row)
				this.look.isTeam=row.isTeam
				this.look.issus_obj=row.issus_obj
				this.look.issus_type=row.issus_type
				this.look.num=row.num
				this.look.remark=row.remark
				this.look.ticketType=row.ticketType
				this.look.useWay=row.useWay
				this.look.full=row.full
				this.look.freeTime=row.freeTime
				this.look.start_time=row.start_time
				this.look.end_time=row.end_time
				this.look.sub=row.sub
				this.look.ticketNumber=row.ticketNumber
				this.universal.look=true
				
			},
			hideclick(){
				this.universal.change = false
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
			addClick(){
				var datas ="1,2";
				var list= datas.split(",");
				console.log(list)
				console.log(JSON.stringify(this.value5))
				let lengths=this.value5.length;
				let valuePark=''
				for(let i=0;i<lengths;i++){
					valuePark+=this.value5[i]+","
				}
				valuePark=valuePark.replace(/,$/,"")
				console.log(valuePark);
				let p=new Date(this.add1.start_time)
				let e=new Date(this.add1.end_time)
				console.log(e.getTime(e))
				console.log(p.getTime(p))
				if(e.getTime(e)<p.getTime(p)){
					this.$message.error('结束时间不能早于开始时间');
					return false;
				}
				// let data=this.add1
				if(this.value5==''||this.add1.ticketType==''||this.add1.useWay==''||this.add1.start_time==''||this.add1.end_time==''||this.add1.issus_obj==''||this.add1.issus_type==''||this.add1.isTeam==''||this.add1.remark==''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				console.log(data)
				// if(this.add1.freeTime!=''){
				// 	if(this.add1.full!=''||this.add1.sub!=''){
				// 		this.$message.error('免费时长和满减优惠不能同时存在');
				// 		return false;
				// 	}
				// } 
				
				// if(this.add1.isTeam==1){
				// 	this.add1.num=''
				// }
				
				// let data = this.add1;
				
				// data.use_obj=this.add1.use_obj
				
				// if(this.add1.freeTime==''&&this.add1.full!==''&&this.add1.sub!==''){
				// 	data.num=this.add1.num
				// 	data.ticketType=this.add1.ticketType
				// 	data.useWay=this.add1.useWay
				// 	// data.freeTime=this.add1.freeTime
				// 	data.full=this.add1.full
				// 	data.sub=this.add1.sub
				// 	data.start_time=this.add1.start_time
				// 	data.end_time=this.add1.end_time
				// 	// data.use_obj=this.add1.use_obj
				// 	data.issus_type=this.add1.issus_type
				// 	data.isTeam=this.add1.isTeam
				// 	data.issus_obj=this.add1.issus_obj
				// 	data.remark=this.add1.remark
				// 	data.userId=localStorage.getItem('userId')
				// 	data.dealer=localStorage.getItem('dealer')
				// }
				
				// data.num=this.add1.num
				// data.ticketType=this.add1.ticketType
				// data.useWay=this.add1.useWay
				// 	data.freeTime=this.add1.freeTime
				// data.start_time=this.add1.start_time
				// data.end_time=this.add1.end_time
				// data.issus_type=this.add1.issus_type
				// data.isTeam=this.add1.isTeam
				// data.issus_obj=this.add1.issus_obj
				// data.remark=this.add1.remark
				// data.userId=localStorage.getItem('userId')
				// data.dealer=localStorage.getItem('dealer')
				
				// if(this.add1.full==''&&this.add1.sub==''&&this.add1.freeTime!==''){
					
				// }
				// if(this.add1.full==''&&this.add1.freeTime!=''&&this.add1.sub==''){
				// 	data.num=this.add1.num
				// 	data.ticketType=this.add1.ticketType
				// 	data.useWay=this.add1.useWay
				// 	data.start_time=this.add1.start_time
				// 	data.end_time=this.add1.end_time
				// 	data.freeTime=this.add1.freeTime	
				// 	data.issus_type=this.add1.issus_type
				// 	data.isTeam=this.add1.isTeam
				// 	data.issus_obj=this.add1.issus_obj
				// 	data.remark=this.add1.remark
				// 	data.userId=localStorage.getItem('userId')
				// 	data.dealer=localStorage.getItem('dealer')
				// }
				let data={}
				if(this.add1.isTeam=='团体'){
					if(this.add1.full==''&&this.add1.freeTime!=''&&this.add1.sub==''){
						data.parking_id=valuePark
						data.num=this.add1.num
						data.ticketType=this.add1.ticketType
						data.useWay=this.add1.useWay
						data.start_time=this.add1.start_time
						data.end_time=this.add1.end_time
						data.freeTime=this.add1.freeTime	
						data.issus_type=this.add1.issus_type
						data.isTeam=this.add1.isTeam
						data.issus_obj=this.add1.issus_obj
						data.remark=this.add1.remark
						// data.userId=localStorage.getItem('userId')
						data.dealer=localStorage.getItem('dealer')
					}
					if(this.add1.full==''&&this.add1.freeTime==''&&this.add1.sub!=''){
						data.parking_id=valuePark
						data.num=this.add1.num
						data.ticketType=this.add1.ticketType
						data.useWay=this.add1.useWay
						data.start_time=this.add1.start_time
						data.end_time=this.add1.end_time
						data.sub=this.add1.sub
						data.issus_type=this.add1.issus_type
						data.isTeam=this.add1.isTeam
						data.issus_obj=this.add1.issus_obj
						data.remark=this.add1.remark
						// data.userId=localStorage.getItem('userId')
						data.dealer=localStorage.getItem('dealer')
					}
					if(this.add1.full!=''&&this.add1.freeTime==''&&this.add1.sub!=''){
						data.parking_id=valuePark
						data.num=this.add1.num
						data.ticketType=this.add1.ticketType
						data.useWay=this.add1.useWay
						data.start_time=this.add1.start_time
						data.end_time=this.add1.end_time
						data.sub=this.add1.sub
						data.full=this.add1.full
						data.issus_type=this.add1.issus_type
						data.isTeam=this.add1.isTeam
						data.issus_obj=this.add1.issus_obj
						data.remark=this.add1.remark
						// data.userId=localStorage.getItem('userId')
						data.dealer=localStorage.getItem('dealer')
					}
				}else{
					if(this.add1.full==''&&this.add1.freeTime!=''&&this.add1.sub==''){
						// data.num=this.add1.num
						data.parking_id=valuePark
						data.ticketType=this.add1.ticketType
						data.useWay=this.add1.useWay
						data.start_time=this.add1.start_time
						data.end_time=this.add1.end_time
						data.freeTime=this.add1.freeTime	
						data.issus_type=this.add1.issus_type
						data.isTeam=this.add1.isTeam
						data.issus_obj=this.add1.issus_obj
						data.remark=this.add1.remark
						// data.userId=localStorage.getItem('userId')
						data.dealer=localStorage.getItem('dealer')
					}
					if(this.add1.full==''&&this.add1.freeTime==''&&this.add1.sub!=''){
						// data.num=this.add1.num
						data.parking_id=valuePark
						data.ticketType=this.add1.ticketType
						data.useWay=this.add1.useWay
						data.start_time=this.add1.start_time
						data.end_time=this.add1.end_time
						data.sub=this.add1.sub
						data.issus_type=this.add1.issus_type
						data.isTeam=this.add1.isTeam
						data.issus_obj=this.add1.issus_obj
						data.remark=this.add1.remark
						// data.userId=localStorage.getItem('userId')
						data.dealer=localStorage.getItem('dealer')
					}
					if(this.add1.full!=''&&this.add1.freeTime==''&&this.add1.sub!=''){
						// data.num=this.add1.num
						data.parking_id=valuePark
						data.ticketType=this.add1.ticketType
						data.useWay=this.add1.useWay
						data.start_time=this.add1.start_time
						data.end_time=this.add1.end_time
						data.sub=this.add1.sub
						data.full=this.add1.full
						data.issus_type=this.add1.issus_type
						data.isTeam=this.add1.isTeam
						data.issus_obj=this.add1.issus_obj
						data.remark=this.add1.remark
						// data.userId=localStorage.getItem('userId')
						data.dealer=localStorage.getItem('dealer')
					}
				}
				if(data.useWay=='免费时长'){
					data.useWay=1
				}else if(data.useWay=='现金抵用券'){
					data.useWay=2
				}else{
					data.useWay=3
				}
				if(data.issus_type=='免费'){
					data.issus_type=1
				}else if(data.issus_type=='收费'){
					data.issus_type=2
				}else{
					data.issus_type=3
				}
				if(data.ticketType=='电子券'){
					data.ticketType=1
				}else{
					data.ticketType=2
				}
				if(data.isTeam=='团体'){
					data.isTeam=0
					console.log(this.numchose)
				}else{
					data.isTeam=1
				}
				let that = this;
				console.log(data)
				// axios({
				// 	method:'post',
				// 	url:that.$store.state.url+'/TicketInfo/bornTicket',
				// 	data:Qs.stringify(data)
				// }).then(res=>{
				// 	console.log(res)
				// })
				searchClicks('/TicketInfo/bornTicket',data).then(message=>{
					console.log(message)
					if(message.data.resCode==0){
						that.searchClick();
						that.$message({
				        	message: '生成成功',
				        	type: 'success'
				        });
					}else{
						that.$message({
				        	message: '生成失败',
				        	type: 'error'
				        });
					}
				})
				that.universal.add1 = false;
			},
			deleteClick(row){
				console.log(row)
				let that = this;
				this.$confirm('此操作将删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					searchClicks('/TicketInfo/delById',{
						id:row.id
					}).then(message=>{
						if(message.data.resCode==0){
							that.searchClick();
							that.$message({
					        	message: '删除成功',
					        	type: 'success'
					        });
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
			searchClick(){
				console.log(this.search.order_status)
				let data = {
					page:this.paging.page,
					pageSize:this.paging.pageSize,
					user_id:localStorage.getItem('userId'),
					dealer:localStorage.getItem('dealer')
				};
				// if(localStorage.getItem('userId')=='SURIOT'){
				// 	data = {
				// 	page:this.paging.page,
				// 	pageSize:this.paging.pageSize,
				// 	user_id:localStorage.getItem('userId')
				//    };
				// }else{
				// 	data = {
				// 	page:this.paging.page,
				// 	pageSize:this.paging.pageSize,
				// 	user_id:localStorage.getItem('userId')
				//    };
				// }
				if(this.search.ticketType=='纸券'){
				 	data.ticketType = 0
				}else if(this.search.ticketType=='电子券'){
					data.ticketType = 1
				}
				if(this.search.useWay=='现金抵用券'){
					data.useWay = 2
				}else if(this.search.useWay=='满减券'){
					data.useWay = 3
				}else if(this.search.useWay=='免费时长'){
					data.useWay = 1
				}else if(this.search.useWay=='未选择'){
					data.useWay = ''
				}
				if(this.search.use_status=='未使用'){
					data.use_status = 1
				}else if(this.search.use_status=='已使用'){
					data.use_status = 0
				}else if(this.search.use_status=='已失效'){
					data.use_status = -1
				}else if(this.search.use_status=='未选择'){
					data.use_status = ''
				}
				console.log(data)
				let that = this;
				that.tableData = [];
				searchClicks('/TicketInfo/selectTicketInfo',data).then(res=>{
					if(res.data.resCode==0){
						for(let i=0;i<res.data.result.length;i++){
							if(res.data.result[i].freeTime==''){
								res.data.result[i].freeTime='-'
							}else{
								res.data.result[i].freeTime=res.data.result[i].freeTime+'分钟'
							}
							if(res.data.result[i].sub===''){
								res.data.result[i].sub='-'
							}else{
								res.data.result[i].sub=res.data.result[i].sub+'元'
							}
							if(res.data.result[i].full===''){
								res.data.result[i].full='-'
							}else{
								res.data.result[i].full=res.data.result[i].full+'元'
							}
						}
						that.paging.total = res.data.count;
						that.tableData = res.data.result;
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
	.spanClass{
		width: 123px!important;
	}
	.alipay:nth-child(1){
		width: 49%;
		float: left;
	}
	.alipay:nth-child(2){
		width: 51%;
		float: right;
	}
	.alipays{
		width: 100%;
		display:inline-block;
	}
	.letg div{font-size: 15px;line-height: 40px;}
	.grid-content{width: 30%;float: left;text-align: right;margin-right: 10px;}
	.el-input--small .el-input__inner{
		width: 120px!important;
	}
	.el-tag{
		color:#fff;
		width: 50px;
		height: 26px;
		line-height: 26px!important;
		padding:0 0!important;
	}
	.el-tag span{
		margin:0 auto;
		
	}
	.select .boxselect{
		float: right;
	}
	.select .boxselect img{
		vertical-align: middle;
		margin-right:5px;
	}
	.select img{
		float: right;
		margin-right: 10px;
		cursor: pointer;
	}
	.deletecolor{
		background: red;
	}
	.spanchange{width: 250px!important;}
	.jilu{
		width: 22px;
		height: 22px;
		display: inline-block;
		background: #59CB18;
		border-radius: 3px;
		color: #fff;
	}
	.jilus{
		background: #777;
	
	}
	
</style>