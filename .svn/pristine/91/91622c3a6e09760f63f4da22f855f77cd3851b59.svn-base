<template>
	<div id="faultList">
		<div class="header">
			<div class="headerTitle">
				<span>车主管理</span>
			</div>
		</div>
		<div class="select">
			
			<el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="全部" name="zero"></el-tab-pane>
				<el-tab-pane label="临时车" name="6"></el-tab-pane>
				<el-tab-pane label="年租车" name="3"></el-tab-pane>
				<el-tab-pane label="月租车" name="2"></el-tab-pane>
				<el-tab-pane label="限时车牌" name="4"></el-tab-pane>
				<el-tab-pane label="储值车牌" name="5"></el-tab-pane>
				<el-tab-pane label="特权车牌" name="1"></el-tab-pane>
				<el-tab-pane label="短信已开通" name="7"></el-tab-pane>
				<el-tab-pane label="短信未开通" name="8"></el-tab-pane>
			</el-tabs>
		</div>
		<div class="select">
			<!-- <span>手机号码：</span>
			<el-input v-model="search.tel" clearable placeholder="请输入内容"></el-input>
			<span>车辆品牌：</span>
			<el-input v-model="search.car_brand" clearable placeholder="请输入内容"></el-input> -->
			<span>车牌号码：</span>
			<el-input v-model="search.car_number" clearable placeholder="请输入内容"></el-input>
			<span>车主姓名：</span>
			<el-input v-model="search.name" clearable placeholder="请输入内容"></el-input>
			<span>停车场名称：</span>
			<el-select v-model="search.parking_id" placeholder="请选择">
				<el-option>未选择</el-option>
				<el-option v-for="item in parkingname" :key="item.parking_id" :label="item.parking_name" :value="item.parking_name"></el-option>
			</el-select>
			<el-button type="success" class="oyButton" icon="el-icon-plus" @click='AddShow' v-show="showchose">添加</el-button>
			<el-button type="success" class="oyButton" icon="el-icon-search" @click='searchClick'>查询</el-button>
		</div>
		<div class="Content">
			<el-table class='oyTable' :data="reslist" style="width: 100%">
				<el-table-column type="index":index="indexMethod" label="序号" width="100"> </el-table-column>

				<el-table-column label="停车场名称" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ chosename(scope.row.parking_id)}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ chosename(scope.row.parking_id)}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				<el-table-column label="车牌号码" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.car_number }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.car_number }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="车辆类型" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.of_type }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.of_type }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
 
				<el-table-column label="车主姓名" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.name }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.name }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				<el-table-column label="手机号码" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.tel }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.tel }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="短信开通" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.is_open_sms | note }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.is_open_sms | note}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				<el-table-column label="开始时间" width="">
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
				</el-table-column>
		
				<el-table-column prop="" label="操作" width='150'>
					<template slot-scope="scope">
						<el-tooltip class="item" effect="dark" content="修改" placement="top">
    						<i class="icon-change el-icon-edit" @click="changeShow(scope.row)" ></i>
						</el-tooltip>
						
						<el-tooltip  class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-search" @click="seeClick(scope.row)" ></i>
						</el-tooltip>

						<el-tooltip v-if="scope.row.of_type=='临时车'" class="item" effect="dark" content="开通会员" placement="top">
    						<i class="jilu iconfont icon-huiyuan" @click="member(scope.row)"></i>
							<!-- <span class="icon-See iconfont icon-huiyuan"></span> -->
						</el-tooltip>
						
						<el-tooltip v-else="" class="item" effect="dark" content="开通会员" placement="top">
    						<i class="jilu jilus iconfont icon-huiyuan"></i>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="充值记录" placement="top">
    						<i class="jilu iconfont icon-chongzhijilu" @click="include(scope.row)"></i>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="卡包" placement="top">
    						<i class="jilu iconfont icon-qiabao" @click="bag(scope.row)"></i>
						</el-tooltip>
						<el-tooltip  class="item" effect="dark" content="短信记录" placement="top">
    						<i class="icon-See el-icon-document" @click="searchmes(scope.row)"></i>
						</el-tooltip>
						<!-- <el-tooltip class="item" v-if="scope.row.is_open_sms=='1'" effect="dark" content="短信开通" placement="top">
    						<i class="icon-See iconfont icon-huiyuan" @click="dredge(scope.row)"></i>
						</el-tooltip>-->
						
					</template>
				</el-table-column>
			</el-table>
		</div>
		<el-dialog title="开通会员" :visible.sync="universal.add1">
			<div>
				<span class="spanClass spanClasschange"><span class="aKey">*</span>停车场名称：</span>
				<el-select v-model="add1.parking_id" placeholder="请选择">
					<el-option v-for="item in parkingname" :key="item.parking_id" :label="item.parking_name" :value="item.parking_name"></el-option>
				</el-select><br /><br />
				<span class="spanClass spanClasschange"><span class="aKey">*</span>会员类型：</span>
				<el-select v-model="add1.of_type" placeholder="请选择">
					<el-option v-for="item in existing" :key="item.id" :label="item.name" :value="item.id"></el-option>
				</el-select><br /><br />

				<span class="spanClass spanClasschange"><span class="aKey">*</span>支付类型：</span>
				<el-select v-model="add1.pay_type" placeholder="请选择">
					<el-option v-for="item in this.$store.state.pagytype" :key="item.value" :label="item.type" :value="item.value"></el-option>
				</el-select><br /><br />
				
				<span class="spanClass spanClasschange"><span class="aKey">*</span>充值金额：</span>
				<el-input :disabled="false" v-model="add1.money" clearable placeholder="请输入内容" @blur="focus6()"></el-input><br /><br />
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="hideclick">取消</el-button>
				<el-button type="success" class="oyButton" @click="memberup">开通</el-button>
			</div>
		</el-dialog>
		<el-dialog title="新增白名单" :visible.sync="universal.add">
			<div class="titlecar1">
				<span class="spanClass"><span class="aKey">*</span>车牌号码：</span>
				<el-input :disabled="false" v-model="add.car_number" clearable placeholder="请输入内容"></el-input><br /><br />
				<div class="titlecar1inner">
					<div>
						<span class="spanClass"><span class="aKey">*</span>车辆颜色：</span>
						<el-input :disabled="false" v-model="add.car_color" clearable placeholder="请输入内容"></el-input>
					</div>
					<div>
						<span class="spanClass"><span class="aKey">*</span>车辆品牌：</span>
						<el-input :disabled="false" v-model="add.car_brand" clearable placeholder="请输入内容"></el-input><br /><br />
					</div>
				</div>
			</div>
			<hr><br>
			<div class="titlecar1">
				<span class="spanClass"><span class="aKey">*</span>车主姓名：</span>
				<el-input :disabled="false" v-model="add.name" clearable placeholder="请输入内容"></el-input><br /><br />
				<div class="titlecar1inner">
					<div>
						<span class="spanClass"><span class="aKey">*</span>手机号码：</span>
						<el-input :disabled="false" v-model="add.tel" clearable placeholder="请输入内容"></el-input><br /><br />
					</div>
					<div>
						<span class="spanClass">身份证号：</span>
						<el-input :disabled="false" v-model="add.idcard" clearable placeholder="请输入内容"></el-input><br /><br />
					</div>
				</div>
				<div class="titlecar1inner">
					<div>
						<span class="spanClass"><span class="aKey">*</span>车主地址：</span>
						<el-input :disabled="false" v-model="add.address" clearable placeholder="请输入内容"></el-input><br /><br />
					</div>
					<div>
						<span class="spanClass">微信号码：</span>
						<el-input :disabled="false" v-model="add.wxNumber" clearable placeholder="请输入内容"></el-input><br /><br />
					</div>
				</div>
			</div>
			<hr><br>
			<div class="titlecar1">
				<div class="titlecar1inner">
					<div>
						<span class="spanClass"><span class="aKey">*</span>车辆类型：</span>
						<el-select v-model="add.item" placeholder="请选择">
							<el-option v-for="item in existing" :key="item.id" :label="item.name" :value="item.id"></el-option>
						</el-select><br /><br />
					</div>
					<div>
						<span class="spanClass"><span class="aKey">*</span>停车场名称：</span>
						<el-select v-model="add.parking_id" placeholder="请选择">
							<el-option v-for="item in parkingname" :key="item.parking_id" :label="item.type" :value="item.parking_name"></el-option>
						</el-select><br /><br />
					</div>
				</div>
				<div class="titlecar1inner">
					<div>
						<span class="spanClass"><span class="aKey">*</span>开始时间：</span>
						<el-date-picker v-model="add.start_time" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />
					</div>
					<div>
						<span class="spanClass"><span class="aKey">*</span>结束时间：</span>
						<el-date-picker v-model="add.end_time" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />
					</div>
				</div>
			</div>
			<span class="spanClass">备注：</span><div class="little">{{this.$store.state.size}}</div>
			<el-checkbox v-model="add.is_open_sms"></el-checkbox><span class="boxspan">是否开通短信提醒功能</span>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.add = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="addClick">添加</el-button>
			</div>
		</el-dialog>
		<el-dialog title="查看" :visible.sync="universal.look">
			<div class="letg">
				<el-row>
					<el-col :span="12"><div class="grid-content">车牌号码：</div>{{look.car_number}}</el-col>
					<el-col :span="12"><div class="grid-content">车辆颜色：</div>{{look.car_color}}</el-col>
				</el-row>
				<el-row>
					<el-col :span="12"><div class="grid-content">车辆类型：</div>{{look.of_type}}</el-col>
					<el-col :span="12"><div class="grid-content">车主地址：</div>{{look.address}}</el-col>
				</el-row>
				<el-row>
					<el-col :span="12"><div class="grid-content">车主姓名：</div><div>{{look.name}}</div></el-col>
					<el-col :span="12"><div class="grid-content">微信号码：</div>{{look.wxNumber|numnew}}</el-col>
				</el-row>
				<el-row>
					<el-col :span="12"><div class="grid-content">手机号码：</div>{{look.tel}}</el-col>
					<el-col :span="12"><div class="grid-content">开始时间：</div><div>{{look.start_time}}</div></el-col>
				</el-row>
				<el-row>
					<el-col :span="12"><div class="grid-content">车辆品牌：</div>{{look.car_brand}}</el-col>
					<el-col :span="12"><div class="grid-content">结束时间：</div><div>{{look.end_time}}</div></el-col>
				</el-row>
				<el-row>
					<el-col :span="12"><div class="grid-content">身份证号：</div>{{look.idcard|numnew}}</el-col>
					<el-col :span="12"><div class="grid-content">短信开通：</div>{{look.is_open_sms | note}}</el-col>
				</el-row>
			</div>
		</el-dialog>
		<el-dialog title="修改" :visible.sync="universal.change">
			<div class="alipays">
				<div class="alipay">
					<span class="spanClass"><span class="aKey">*</span>车牌号码：</span>
					<el-input :disabled="false" v-model="change.car_number" clearable placeholder="请输入内容"></el-input><br /><br />

					<!-- <span class="spanClass">车辆类型：</span>
					<el-select v-model="change.item" placeholder="请选择">
						<el-option v-for="item in existing" :key="item.id" :label="item.name" :value="item.id"></el-option>
					</el-select><br /><br /> -->
					
					<span class="spanClass"><span class="aKey">*</span>车主姓名：</span>
					<el-input :disabled="false" v-model="change.name" clearable placeholder="请输入内容"></el-input><br /><br />

					<span class="spanClass"><span class="aKey">*</span>手机号码：</span>
					<el-input :disabled="false" v-model="change.tel" clearable placeholder="请输入内容"></el-input><br /><br />

					<span class="spanClass"><span class="aKey">*</span>车辆品牌：</span>
					<el-input :disabled="false" v-model="change.car_brand" clearable placeholder="请输入内容"></el-input><br /><br />

					<span class="spanClass">微信号码：</span>
					<el-input :disabled="false" v-model="change.wxNumber" clearable placeholder="请输入内容"></el-input><br /><br />
				</div>
				<div class="alipay">
					<span class="spanClass"><span class="aKey">*</span>车辆颜色：</span>
					<el-input :disabled="false" v-model="change.car_color" clearable placeholder="请输入内容"></el-input><br /><br />

					<span class="spanClass"><span class="aKey">*</span>车主地址：</span>
					<el-input :disabled="false" v-model="change.address" clearable placeholder="请输入内容"></el-input><br /><br />

					<span class="spanClass">身份证号：</span>
					<el-input :disabled="false" v-model="change.idcard" clearable placeholder="请输入内容"></el-input><br /><br />
							
					<span class="spanClass"><span class="aKey">*</span>开始时间：</span>
					<el-date-picker v-model="change.start_time" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />

					<span class="spanClass"><span class="aKey">*</span>结束时间：</span>
					<el-date-picker v-model="change.end_time" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />
				</div>
				<el-checkbox v-model="change.is_open_sms"></el-checkbox><span class="boxspan">是否开通短信提醒功能</span>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="hideclick">取消</el-button>
				<el-button type="success" class="oyButton" @click="changeClick">修改</el-button>
			</div>
		</el-dialog>
		<div class="footer">
			<el-pagination background @current-change="handleCurrentChange"  @size-change="handleSizeChange" :current-page.sync="paging.page" :page-sizes="[1,2,3,10,11,12]" :page-size="paging.pageSize" layout="sizes, prev, pager, next, jumper,total" :total="totalnum"></el-pagination>
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	import records from '../afterSales/records'
	import {mapMutations,mapActions,mapState} from 'vuex'
	import {searchClicks} from '../api/api.js'
	export default {
		name: 'equipmentList',
		components: { records },
		data() {
			return {
				activeName: 'zero',
				change1:{

				},
				innersearch:{
					name:'',
					remark:'',
					start_time:'',
					end_time:''
				},
				existing:[],
				obj:[],
				numw:[],
				numvalue:[],
				universal:{
					add:false,
					change:false,
					add1:false,
					change1:false,
					look:false
				},
				paging:{
					page:1,
					pageSize:10,
					total:0
				},
				// tableData:this.reslist,
				search:{
					car_number:'',
					name:'',
					parking_id:''
					// car_brand:'',
					// tel:''
				},
				add1:{
					of_type:'',
					pay_type:'',
					money:'',
					user_id:'',
					id:'',
					parking_id:''
				},
				look:{
					name:'',
					idcard:'',
					tel:'',
					wxNumber:'',
					address:'',
					car_number:'',
					start_time:'',
					end_time:'',
					car_color:'',
					car_brand:'',
					item:'',
				},
				add:{
					name:'',
					idcard:'',
					tel:'',
					wxNumber:'',
					address:'',
					car_number:'',
					start_time:'',
					end_time:'',
					car_color:'',
					car_brand:'',
					item:'',
					is_open_sms:'',
					parking_id:''
				},
				showchose:'',
				change:{
					name:'',
					idcard:'',
					tel:'',
					wxNumber:'',
					address:'',
					car_number:'',
					start_time:'',
					end_time:'',
					car_color:'',
					car_brand:'',
					item:'',
					is_open_sms:''
				},
				options:[],
				assignment:''
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
				pageSize:1000000,
				userId:localStorage.getItem('userId'),
				dealer:localStorage.getItem('dealer')
			};
			this.parkname(data)
			// searchClicks('/Parking/selectLotInfo',data).then(message=>{
			// 	console.log(message)
			// 	if(message.data.resCode==0){
			// 		this.parkparkwhite=message.data.result
			// 	}else{
				
			// 	}
			// })
			this.searchClick();
			this.searchcarnumber();
			console.log(this.$store.state.reslist)
			// this.downList();
			// this.common.login()
			
		},
		computed:{
			...mapState(['reslist','totalnum','parkingname'])
		},
		methods: {
			 ...mapMutations(['chezhu']),
			 ...mapActions(['whitedan','parkname']),
			 changebox1(val){
				 console.log(val)
			 },
			// changebox(val){
			// 	if(val){
			// 		val=0
			// 	}else{
			// 		val=1
			// 	}
			// 	this.assignment=val
			// },
			include(val){
				this.$router.push({ path: '/pageHome/records',query:{mouses:val}})
				this.chezhu(val)
			},
			focus6(){
				if(!(/[\u4e00-\u9fa5]+/).test(this.add1.money)&&this.add1.money!=''){ 
						this.add1.money=this.add1.money+'元'
				}
			},
			chosename(val){
				this.parkingname.forEach((a,index)=>{
					if(a.parking_id==val)
					val=a.parking_name
				})
				return val
			},
			// 开通会员
			member(row){
				this.universal.add1=true;
				// this.add1.of_type=row.of_type
				console.log(row)
				this.add1.id=row.id;
				// this.parkbangdingid=row.parking_id   先写一下
				this.add1.user_id=row.user_id
				this.existing.forEach((a, index) => {
					if(a.name=='临时车'){
						this.existing.splice([a.name].index,1)
					}
				})
			},
			bag(val){
				this.$router.push({ path: '/pageHome/notes',query:{mouses:val}})
				this.chezhu(val)
			},
			searchmes(val){
				this.$router.push({ path: '/pageHome/mes',query:{mouses:val}})
			},
			memberup(){
				if(this.add1.money==''||this.add1.of_type==''||this.add1.pay_type==''){
					this.$message.error('带*号的不能为空哦！');
					return false;
				}
				
				let data=this.add1
				data.money=this.add1.money.slice(0,this.add1.money.length-1)
				if(isNaN(data.money)|data.money.trim==''){
					this.$message.error('请输入数字');
					return false;
				}else{
					
				}
				console.log(this.existing)
				if((/[\u4e00-\u9fa5]+/).test(this.add1.of_type)){ 
					this.existing.forEach((a, index) => {
						if(a.name=='临时车'){
							this.existing.splice([a.name].index,1)
						}
						if(this.add1.of_type==a.name){
							console.log(99)
							data.of_type=a.id
						}
					});
				}else{
					data.of_type=this.add1.of_type
				}
				this.parkingname.forEach((a,b)=>{
					if(a.parking_name=this.add1.parking_id){
						data.parking_id=a.parking_id
					}
				})
				data.userId=localStorage.getItem('userId')
				data.dealer=localStorage.getItem('dealer')
				console.log(data)
				let that=this;
				searchClicks('/carInfo/bindCarNumType',data).then(function(message){
					console.log(message)
					if(message.data.resCode==0){
						that.searchClick();
						that.$message({
				        	message: '开通会员成功',
				        	type: 'success'
						});
						
					}else{
						that.$message({
				        	message: '开通会员失败',
				        	type: 'success'
						});
					}
				})  
				that.universal.add1=false;
			},
			handleClick(tab) {
				let data = {
					page:this.paging.page,
					pageSize:this.paging.pageSize,
					userId:localStorage.getItem('userId'),
					dealer:localStorage.getItem('dealer')
				};
				// if(localStorage.getItem('userId')=='SURIOT'){
				// 	data = {
				// 	page:this.paging.page,
				// 	pageSize:this.paging.pageSize,
				//    };
				// }else{
				// 	data = {
				// 	page:this.paging.page,
				// 	pageSize:this.paging.pageSize,
				// 	userId:localStorage.getItem('userId'),
				//    };
				// }
				if(tab.name=='zero'){
					
				}else if(tab.name==7){
					data.is_open_sms=0
				}else if(tab.name==8){
					data.is_open_sms=1
				}else{
					data.of_type=tab.name
				}
				let that=this;
				that.whitedan(data)
				// searchClicks('/carInfo/findAll',data).then(function(message){
				// 	if(message.data.resCode==0){
				// 		that.paging.total = message.data.count;
				// 		that.tableData = message.data.result;
				// 	}else{
				// 		that.tableData = [];
				// 	}
				// })  
			},
			// 查看详情
			seeClick(row){
				console.log(row)
				this.universal.look=true;
				this.look.name=row.name
				this.look.idcard=row.idcard
				this.look.tel=row.tel
				this.look.wxNumber=row.wxNumber
				this.look.address=row.address
				this.look.car_number=row.car_number
				this.look.start_time=row.start_time
				this.look.end_time=row.end_time
				this.look.car_color=row.car_color
				this.look.car_brand=row.car_brand
				this.look.of_type=row.of_type
				this.look.is_open_sms=row.is_open_sms
			},
			// 清空车牌信息
			AddShow(){
				this.universal.add = true
				this.add.name=''
				this.add.idcard=''
				this.add.tel=''
				this.add.wxNumber=''
				this.add.address=''
				this.add.car_number=''
				this.add.start_time=''
				this.add.end_time=''
				this.add.car_color=''
				this.add.car_brand=''
				this.add.item=''
			},
			// 显示车牌类型
			usage(){
				this.universal.add1 = true
				let that=this
				that.add1.of_type=''
				that.add1.pay_type=''
				that.add1.money=''
			},
			// 添加车牌类型
			addcarnumberinner(){
				let that=this
				if(that.innersearch.name==''||that.innersearch.remark==''||that.innersearch.start_time==''||that.innersearch.end_time==''){
					that.$message.error('带*的数据不能为空哦！');
					return false;
				}
				axios({
					method:'get',
					url:that.$store.state.url+"/carNumberType/setInfo?name="+that.innersearch.name+"&remark="+that.innersearch.remark+"&start_time="+that.innersearch.start_time+"&end_time="+that.innersearch.end_time,
					// data:Qs.stringify(data)
				}).then(function(message){
					if(message.data.resCode==0){
						that.$message({
				        	message: '车牌类型添加成功',
				        	type: 'success'
						});
						that.searchcarnumber()
						that.innersearch.name=''
						that.innersearch.remark=''
						that.innersearch.start_time=''
						that.innersearch.end_time=''
					}
				})
			},
			// 编辑显示车牌类型
			handleEdit(index, row) {
				this.universal.change1=true
				this.change1 = Object.assign({},row);
				console.log(index, row);
			},
			// 修改车牌类型
			changeClick1(){
				let that=this
				axios({
					method:'get',
					url:that.$store.state.url+"/carNumberType/upInfo?name="+that.change1.name+"&remark="+that.change1.remark+"&start_time="+that.change1.start_time+"&end_time="+that.change1.end_time+"&id="+that.change1.id,
				}).then(function(message){
					if(message.data.resCode==0){
						that.$message({
							message: '修改成功',
							type: 'success'
						});
						that.searchcarnumber()
					}
				})
				that.universal.change1=false
			},
			// 查询车牌类型
			searchcarnumber(){
				let data = {
					page:1,
					pageSize:1000,
					userId:localStorage.getItem('userId'),
					dealer:localStorage.getItem('dealer')
				};
				let that=this
				axios({
					method:'post',
					url:that.$store.state.url+'/carNumberType/findInfo',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message)
					if(message.data.resCode==0){
						that.existing=message.data.result
					}
					console.log(that.existing)
				})
			},
			// 删除车牌类型
			// dredge(row){
			// 	console.log(row)
			// 	let that = this;
			// 	this.$confirm('此操作将开通短信提醒, 是否继续?', '提示', {
			// 		confirmButtonText: '确定',
			// 		cancelButtonText: '取消',
			// 		type: 'warning'
			// 	}).then(() => {
			// 		searchClicks('/carInfo/updateById',{
			// 			is_open_sms:row.is_open_sms,
			// 			id:row.id
			// 		}).then(message=>{
			// 			if(message.data.resCode==0){
			// 				that.$message({
			// 		        	message: '开通成功',
			// 		        	type: 'success'
			// 				});
			// 				that.searchcarnumber()
			// 			}else{
			// 				that.$message({
			// 		        	message: '开通失败',
			// 		        	type: 'error'
			// 		        });
			// 			}
			// 		})
			// 	}).catch(() => {
			// 		this.$message({
			// 			type: 'info',
			// 			message: '已取消开通'
			// 		});
			// 	});
			// },
			handleDelete(index, row) {
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
							that.searchcarnumber()
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
			hideclick(){
				this.universal.change = false
				this.universal.add1=false;
			},
			indexMethod(index) {
        		return index + (this.paging.page-1)*this.paging.pageSize+1;
    		},
			handleSizeChange(val){
				this.paging.pageSize = val;
				/*console.log(this.paging.pageSize)*/
				this.searchClick();
				// 11111111111111
			},
			handleCurrentChange(val){
				this.searchClick();
			},
			addClick(){
				console.log(this.parkingname)
				let that=this;
				this.parkingname.forEach(function(a,b){
					if(a.parking_name==that.add.parking_id){
						that.add.parking_id=a.parking_id
					}
				})
				console.log(that.add.parking_id)
				if(that.add.car_number.length>9||that.add.car_number.length<6){
					that.$message.error('请核对车牌号码!');
					return false;
				}
				if(that.add.parking_id==''||that.add.name==''||that.add.tel==''||that.add.address==''||that.add.car_number==''||that.add.start_time==''||that.add.end_time==''||that.add.car_color==''||that.add.car_brand==''||that.add.item==''){
					console.log(99999)
					that.$message.error('带*的数据不能为空哦！');
					return false;
				}
				let regPhone=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
				if(!regPhone.test(that.add.tel)){
					that.$message.error('手机号码格式有误');
					return false;
				}
				console.log(that.add.is_open_sms)
				if(that.add.is_open_sms){
					that.add.is_open_sms=0
				}else{
					that.add.is_open_sms=1
				}
				let start = new Date(that.add.start_time.substring(0,19).replace(/-/g,'/')).getTime();
				let end = new Date(that.add.end_time.substring(0,19).replace(/-/g,'/')).getTime();
				console.log(start,end) 
				if(start>end){
					that.$message.error('开始日期不能早于结束日期');
					return false;
				}
				let urls;
				// if(that.add.idcard==''&&that.add.wxNumber!=''){
				// 	urls=that.$store.state.url+"/carInfo/add?name="+that.add.name+"&tel="+that.add.tel+"&wxNumber="+that.add.wxNumber+"&address="+that.add.address+"&car_number="+that.add.car_number+"&start_time="+that.add.start_time+"&end_time="+that.add.end_time+"&car_color="+that.add.car_color+"&car_brand="+that.add.car_brand+"&of_type="+that.add.item+"&is_open_sms="+that.add.is_open_sms+"&dealer="+localStorage.getItem('dealer')+"&parking_id="+that.add.parking_id
				// }
				// if(that.add.idcard==''||that.add.wxNumber==''){
				// 	urls=that.$store.state.url+"/carInfo/add?name="+that.add.name+"&tel="+that.add.tel+"&wxNumber="+that.add.wxNumber+"&address="+that.add.address+"&car_number="+that.add.car_number+"&start_time="+that.add.start_time+"&end_time="+that.add.end_time+"&car_color="+that.add.car_color+"&car_brand="+that.add.car_brand+"&of_type="+that.add.item+"&is_open_sms="+that.add.is_open_sms+"&dealer="+localStorage.getItem('dealer')+"&parking_id="+that.add.parking_id
				// }
				axios({
					method:'get',
					url:that.$store.state.url+"/carInfo/add?name="+that.add.name+"&idcard="+that.add.idcard+"&tel="+that.add.tel+"&wxNumber="+that.add.wxNumber+"&address="+that.add.address+"&car_number="+that.add.car_number+"&start_time="+that.add.start_time+"&end_time="+that.add.end_time+"&car_color="+that.add.car_color+"&car_brand="+that.add.car_brand+"&of_type="+that.add.item+"&is_open_sms="+that.add.is_open_sms+"&dealer="+localStorage.getItem('dealer')+"&parking_id="+that.add.parking_id
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						that.searchClick()
						that.$message({
							message: '添加成功',
							type: 'success'
						});
					}else{
						that.$message({
							message: '添加失败',
							type: 'error'
						});
					}
					that.universal.add = false;
				})
			},
			deleteClick(row){
				console.log(row)
				let that = this;
				this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					axios({
						method:'post',
						url:that.$store.state.url+'/carInfo/delById',
						data:Qs.stringify({
							id:row.id
						})
					}).then(function(message){
						console.log(message.data)
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
			changeShow(row){
				this.universal.change = true;
				// this.change = Object.assign({},row);
				this.change.name=row.name
				this.change.idcard=row.idcard
				this.change.tel=row.tel
				this.change.wxNumber=row.wxNumber
				this.change.address=row.address
				this.change.car_number=row.car_number
				this.change.start_time=row.start_time
				this.change.end_time=row.end_time
				this.change.car_color=row.car_color
				this.change.car_brand=row.car_brand
				this.change.id=row.id
				this.change.is_open_sms=row.is_open_sms
				if(this.change.is_open_sms=="0"){
					this.change.is_open_sms=true;
				}else{
					this.change.is_open_sms=false;
				}
				console.log(row)
			},
			changeClick(){
				if(this.change.car_number.length>9||this.change.car_number.length<6){
					this.$message.error('请核对车牌号码');
					return false;
				}
				if(this.change.name==''||this.change.tel==''||this.change.address==''||this.change.car_number==''||this.change.start_time==''||this.change.end_time==''||this.change.car_color==''||this.change.car_brand==''){
					console.log(99999)
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				var date = new Date(this.change.start_time.slice(0,this.change.start_time.length-1));
				var time1 = date.getTime();
				var date = new Date(this.change.end_time.slice(0,this.change.end_time.length-1));
				var time2 = date.getTime();                                                            
				if(time1>time2){
					this.$message.error('开始时间不能早于结束时间');
					return false;
				}
				if(this.change.is_open_sms==false){
					this.change.is_open_sms=1
				}else{
					this.change.is_open_sms=0
				}
				let data={
					name:this.change.name,
					idcard:this.change.idcard,
					tel:this.change.tel,
					wxNumber:this.change.wxNumber,
					address:this.change.address,
					car_number:this.change.car_number,
					start_time:this.change.start_time,
					end_time:this.change.end_time,
					car_color:this.change.car_color,
					car_brand:this.change.car_brand,
					id:this.change.id,
					is_open_sms:this.change.is_open_sms
				// delete data.date;
				
				}
				console.log(data)
				let that = this;
				axios({
					method:'post',
					url:that.$store.state.url+'/carInfo/updateById',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						that.$message({
				        	message: '修改成功',
				        	type: 'success'
				        });
						that.searchClick();
					}else{
						that.$message({
				        	message: '修改失败',
				        	type: 'error'
				        });
					}
				})
				that.universal.change = false;
			},
			searchClick(){
				let data={}
				// let data = {
				// 	page:this.paging.page,
				// 	pageSize:this.paging.pageSize,
				// 	userId:localStorage.getItem('userId'),
				// 	dealer:localStorage.getItem('dealer')
				// };
				let that = this;
				if(that.search.parking_id){
					that.parkingname.forEach(function(a,b){
						if(a.parking_name==that.search.parking_id){
							data.parking_id=a.parking_id
						}
					})
				}
				if(localStorage.getItem('dealer')==0){
					data.page=that.paging.page,
					data.pageSize=that.paging.pageSize,
					data.userId=localStorage.getItem('userId'),
					data.dealer=localStorage.getItem('dealer')

				}else{
					data.page=that.paging.page,
					data.pageSize=that.paging.pageSize,
					data.userId=localStorage.getItem('userId'),
					data.dealer=localStorage.getItem('dealer')
				}
				if(that.search.car_number){
				 	data.car_number = that.search.car_number
				}
				if(that.search.name){
				 	data.name = that.search.name
				}
				console.log(89)
				
				
				
				that.tableData = [];
				console.log(data)
				that.whitedan(data)
				// searchClicks('/carInfo/findAll',data).then(function(message){
				// 	if(message.data.resCode==0){
				// 		that.paging.total = message.data.count;
				// 		that.tableData = message.data.result;
				// 	}else{
				// 		that.tableData = [];
				// 	}
				// })        
			},
			
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
		width: 116px!important;
	}
	.titlecar1inner{
		display: flex;
		justify-content: space-between
	}
	.oychange{
		width: 90px!important;
	}
	.letg div{font-size: 15px;line-height: 40px;}
	.grid-content{width: 30%;float: left;text-align: right;margin-right: 10px;}
	.spanClasschange{width: 272px!important;}
	.el-tooltip{vertical-align: middle;}
	.el-checkbox{
		margin-left: 12%;
	}
	.boxspan{
		margin-left: 10px;
	}
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