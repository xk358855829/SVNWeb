<template>
	<div id="faultList">
		<div class="header">
			<div class="headerTitle">
				<span>订单查询</span>
			</div>
		</div>
		<div class="select">
			<span>车牌号码：</span>
			<el-input v-model="search.car_number" clearable placeholder="请输入内容"></el-input>
			<span>停车场名称：</span>
			<el-input v-model="search.parking_lot_name" clearable placeholder="请输入内容"></el-input>
			<span>订单状态：</span>
			<el-select v-model="search.order_status" placeholder="请选择">
				<el-option>未选择</el-option>
				<el-option v-for="item in online1" :key="item.id" :label="item.type" :value="item.type"></el-option>
			</el-select>
		</div>
		<div class="select">
			<span>开始时间：</span>
			<el-date-picker v-model="search.start_pay_time" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker>
			<span>&nbsp;&nbsp;&nbsp;结束时间：</span>
			<el-date-picker v-model="search.end_pay_time" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker>
		</div>
		<div class="select">
			<el-button type="success" class="oyButton" icon="el-icon-download" @click='derive'>导出</el-button>
			<el-button type="success" class="oyButton" icon="el-icon-search" @click='searchClick'>查询</el-button>
			<div class="boxselect">
				<img src="../../../static/image/alipay.png" alt=""><span>支付宝支付</span>
				<img src="../../../static/image/wechat.png" alt=""><span>微信支付</span>
				<img src="../../../static/image/cash.png" alt=""><span>现金支付</span>
				<img src="../../../static/image/noninductive.png" alt=""><span>无感支付</span>
				<img src="../../../static/image/teq.png" alt=""><span>特权</span>
				<img src="../../../static/image/free.png" alt=""><span>免费</span>
			</div>
		</div>
		<div class="Content">
			<el-table class='oyTable' :data="tableData" style="width: 100%">
				<el-table-column type="index" :index="indexMethod" label="序号" width="100"> </el-table-column>
				
				<el-table-column label="车牌号码" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.carnumber }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.carnumber }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="停车场名称" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.parking_lot_name }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.parking_lot_name }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="付款金额" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.price}}元</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.price }}元</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="支付类型" width="">
					<template slot-scope="scope">
				        <el-popover>
				        	<!-- <p  class="TsMaxWidth">{{ scope.row.pay_type}}</p> -->
				        	<div slot="reference" class="name-wrapper">
				        		<!-- <div class="overflowHide">{{ scope.row.pay_type }}</div> -->
								<div>
									<img v-if="scope.row.pay_type==5" src="../../../static/image/cash.png" alt="">
									<img v-if="scope.row.pay_type==2" src="../../../static/image/alipay.png" alt="">
									<img v-if="scope.row.pay_type==3" src="../../../static/image/wechat.png" alt="">
									<img v-if="scope.row.pay_type==1" src="../../../static/image/noninductive.png" alt="">
									<img v-if="scope.row.pay_type==6" src="../../../static/image/teq.png" alt="">
									<img v-if="scope.row.pay_type==0" src="../../../static/image/free.png" alt="">
									<i v-if="scope.row.pay_type==58">-</i>
								</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="订单状态" width="">
					<template slot-scope="scope">
				        <el-popover>
				        	<div slot="reference" class="name-wrapper tagFont">
				        		<!-- <div class="overflowHide">{{ scope.row.order_status }}</div> -->
								<el-tag color="#5daf34"  v-if="scope.row.order_status=='完成'">已完成</el-tag>
								<el-tag color="#f8c541"  v-if="scope.row.order_status=='已退款'">{{ scope.row.order_status }}</el-tag>
								<el-tag color="#c9521e"  v-if="scope.row.order_status=='未支付'">{{ (scope.row.order_status) }}</el-tag>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="停车时长" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.longdate}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.longdate }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="支付时间" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.pay_time}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.pay_time }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
		
				<el-table-column prop="" label="操作" width='150'>
					<template slot-scope="scope">
						
						<el-tooltip class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
						</el-tooltip>

						
						<el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-search" @click="seeClick(scope.row)" ></i>
						</el-tooltip>

						<el-tooltip v-if="scope.row.order_status=='已退款'||scope.row.order_status=='未支付'||scope.row.pay_type==0" class="item" effect="dark" content="退款" placement="top">
    						<i class="jilu jilus iconfont icon-tuikuan"></i>
						</el-tooltip>
						<el-tooltip v-else class="item" effect="dark" content="退款" placement="top">
    						<i class="jilu iconfont icon-tuikuan" @click="tmoenypay(scope.row)"></i>
							<!-- <span class="icon-See iconfont icon-huiyuan"></span> -->
						</el-tooltip>
						
						
		
					</template>
				</el-table-column>
			</el-table>
		</div>
		<el-dialog title="查看" :visible.sync="universal.look">
			<div class="letg">
				<el-row>
					<el-col :span="12"><div class="grid-content">停车场名称：</div>{{look.parking_lot_name}}</el-col>
					<el-col :span="12"><div class="grid-content">支付类型：</div>{{look.pay_type}}</el-col>
				</el-row>
				<el-row> 
					<el-col :span="12"><div class="grid-content">车牌号码：</div>{{look.carnumber}}</el-col>
					<el-col :span="12"><div class="grid-content">商户订单：</div>{{look.out_trade_no}}</el-col>
				</el-row>
				<el-row> 
					<el-col :span="12"><div class="grid-content">订单状态：</div>{{look.order_status}}</el-col>
					<el-col :span="12"><div class="grid-content">收单时间：</div>{{look.date}}</el-col>
				</el-row>
				<el-row> 
					<el-col :span="12"><div class="grid-content">停车时长：</div>{{look.longdate}}</el-col>
					<el-col :span="12"><div class="grid-content">优惠金额：</div>{{look.onsale_price}}</el-col>
				</el-row>
				<el-row> 
					<el-col :span="12"><div class="grid-content">入场时间：</div>{{look.startdate}}</el-col>
					<el-col :span="12"><div class="grid-content">付款金额：</div>{{look.price}}</el-col>
				</el-row>
				<el-row> 
					<el-col :span="12"><div class="grid-content">支付时间：</div>{{look.pay_time}}</el-col>
					<el-col :span="12"><div class="grid-content">已付金额：</div>{{look.paid_price}}</el-col>
				</el-row>
			 </div>

		</el-dialog>
		<el-dialog title="退款" :visible.sync="universal.change">
			<el-row>
				<el-col :span="12">
					<span class="spanClass">退款流水号：</span>
					<el-input :disabled="true" v-model="change.trade_no" clearable placeholder="请输入内容"></el-input><br /><br />

					<span class="spanClass">商户订单号：</span>
					<el-input :disabled="true" v-model="change.out_trade_no" clearable placeholder="请输入内容"></el-input><br /><br />

					<span class="spanClass">支付类型：</span>
					<el-input :disabled="true" v-model="change.pay_type" clearable placeholder="请输入内容"></el-input><br /><br />

					<span class="spanClass">停车时长：</span>
					<el-input :disabled="true" v-model="change.longdate" clearable placeholder="请输入内容"></el-input><br /><br />

					<span class="spanClass">支付金额：</span>
					<el-input :disabled="true" v-model="change.price" clearable placeholder="请输入内容"></el-input><br /><br />
				</el-col>
				<el-col :span="12">
					<span class="spanClass">支付时间：</span>
					<el-input :disabled="true" v-model="change.pay_time" clearable placeholder="请输入内容"></el-input><br /><br />
					<span class="spanClass">退款金额：</span>
					<el-input :disabled="false" v-model="change.tmoney" clearable placeholder="请输入内容"></el-input>元<br /><br />

					<span class="spanClass">退款理由：</span>
					<el-input class="textareaWidth" type="textarea" :rows="5" v-model="change.refund_reason" clearable placeholder="请输入内容"></el-input><br /><br />
				</el-col>
			</el-row>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.change = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="paychange">确认</el-button>
			</div>
		</el-dialog>
		<el-dialog title="导出停车场订单" :visible.sync="universal.add">
			<div>
				<span class="spanClass">停车场ID：</span>
				<el-input :disabled="false" v-model="add.parking_id" clearable placeholder="请输入内容"></el-input><br /><br/>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="NO">取消</el-button>
				<el-button type="success" class="oyButton" @click="export2Excel">确认</el-button>
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
					add:false,
					change:false,
					look:false
				},
				paging:{
					page:1,
					pageSize:10,
					total:0
				},
				tableData:[],
				search:{
					parking_lot_name:'',
					car_number:'',
					order_status:'',
					start_pay_time:'',
					end_pay_time:''
				},
				look:{
					parking_lot_name:'',
					carnumber:'',
					order_status:'',
					longdate:'',
					startdate:'',
					pay_time:'',
					pay_type:'',
					out_trade_no:'',
					onsale_price:'',
					date:'',
					price:'',
					paid_price:''
				},
				add:{
					parking_id:''
				},
				listorder:[],
				change:{
					trade_no:'',
					out_trade_no:'',
					pay_type:'',
					longdate:'',
					price:'',
					tmoney:'',
					pay_time:'',
					refund_reason:''
				}
			}
		},
		computed:{
			...mapState(['online1'])
		},
		mounted: function() {
			document.title=this.$route.meta.title;
			this.searchClick();
		},
		methods: {
			posint(){

			},
			NO(){
				this.universal.add = false
			},
			derive(){
				this.universal.add = true
				this.add.parking_id=''
			},
			export2Excel() {
				let dataA={
					parking_id:'',
				}
				let that = this;
				console.log(dataA)
				axios({
					method:'get',
					url:that.$store.state.url +'/useExcel/exportOrders?parking_id='+that.add.parking_id
					// data:Qs.stringify(dataA)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode=="0"){
						for(var i=0;i<message.data.result.length;i++){
							if(message.data.result[i].order_status==0){
								message.data.result[i].order_status='完成'
							}else if(message.data.result[i].order_status==1){
								message.data.result[i].order_status='未支付'
							}else if(message.data.result[i].order_status==-1){
								message.data.result[i].order_status='已退款'
							}
							if(message.data.result[i].pay_type==1){
								message.data.result[i].pay_type='无感支付'
							}else if(message.data.result[i].pay_type==2){
								message.data.result[i].pay_type='支付宝支付'
							}else if(message.data.result[i].pay_type=="0"){
								message.data.result[i].pay_type='免费'
							}else if(message.data.result[i].pay_type==3){
								message.data.result[i].pay_type='微信支付'
							}else if(message.data.result[i].pay_type==6){
								message.data.result[i].pay_type='特权'
							}else{
								message.data.result[i].pay_type='现金支付'
							}
						 	message.data.result[i].date=that.common.timeToDate(JSON.stringify(message.data.result[i].date.time).slice(0,10))
						}
						that.listorder=message.data.result
						console.log(that.listorder)
						require.ensure([], () => {
				　　　　　　const { export_json_to_excel } = require('../../excel/Export2Excel');
				　　　　　　const tHeader = ['车牌号码','停车场名称','付款金额','支付类型','订单状态','停车时长','支付时间'];
				　　　　　　const filterVal = ['carnumber', 'parking_lot_name', 'price', 'pay_type', 'order_status', 'longdate','pay_time' ];
				　　　　　　const list = that.listorder;
				　　　　　　const data = that.formatJson(filterVal,list);
				　　　　　　export_json_to_excel(tHeader, data, '订单列表');
				　　　　})
					}
				})
				that.universal.add = false
				
		　  },
			formatJson(filterVal, jsonData) {
	　　　　	return jsonData.map(v => filterVal.map(j => v[j]))
		　　},
			// focus6(){
			// if(!(/[\u4e00-\u9fa5]+/).test(this.change.tmoney)&&this.change.tmoney!=''){ 
			// 		this.change.tmoney=this.change.tmoney+'元'
			// }
			// },
			seeClick(row){
				console.log(row)
				this.look.parking_lot_name=row.parking_lot_name
				this.look.carnumber=row.carnumber
				this.look.order_status=row.order_status
				this.look.longdate=row.longdate
				this.look.startdate=row.startdate
				this.look.pay_time=row.pay_time
				this.look.pay_type=row.pay_type
				if(this.look.pay_type==5){
					this.look.pay_type='现金支付'
				}else if(this.look.pay_type==1){
					this.look.pay_type='无感支付'
				}else if(this.look.pay_type==2){
					this.look.pay_type='支付宝支付'
				}else if(this.look.pay_type==3){
					this.look.pay_type='微信支付'
				}else if(this.look.pay_type==6){
					this.look.pay_type='特权'
				}else if(this.look.pay_type==58){
					this.look.pay_type='暂无'
				}else if(this.look.pay_type==0){
					this.look.pay_type='免费'
				}
				this.look.out_trade_no=row.out_trade_no
				this.look.date=row.date
				this.look.price=row.price+'元'
				this.look.paid_price=row.paid_price+'元'
				this.look.onsale_price=row.onsale_price+'元'
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
			deleteClick(row){
				console.log(row)
				let that = this;
				this.$confirm('此操作将删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					axios({
						method:'post',
						url:'http://39.104.113.112:2088/Order/delOrderByOutTradeNo',
						data:Qs.stringify({
							out_trade_no:row.out_trade_no
						})
					}).then(function(message){
						console.log(message.data)
						if(message.data.resCode==0){
							that.searchClick();
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
			tmoenypay(row){
				console.log(row)
				
				this.change = Object.assign({},row);
				this.change.pay_type=row.pay_type
				this.change.trade_no=row.out_trade_no
				this.change.out_trade_no=row.out_trade_no
				this.change.longdate=row.longdate
				this.change.pay_time=row.pay_time
				this.change.price=row.price+'元'
				
				this.universal.change=true;
				if(this.change.pay_type==5){
					this.change.pay_type='现金支付'
				}else if(this.change.pay_type==1){
					this.change.pay_type='无感支付'
				}else if(this.change.pay_type==2){
					this.change.pay_type='支付宝支付'
				}else if(this.change.pay_type==3){
					this.change.pay_type='微信支付'
				}else if(this.change.pay_type==0){
					this.change.pay_type='免费'
				}else if(this.change.pay_type==6){
					this.change.pay_type='特权'
				}
				
			},
			paychange(){
				console.log(this.change.refund_reason)
				console.log(this.change.tmoney)
				if(this.change.refund_reason==undefined||this.change.tmoney==undefined){
					this.$message.error('退款金额和理由不能为空');
					return false;
				}
				console.log(this.change.tmoney)
				if(isNaN(this.change.tmoney)){
					this.$message.error('退款金额为数字');
					return false;
				}
				console.log((this.change.price).slice(0,this.change.price.length-1))
				console.log(this.change.tmoney)
				if((this.change.price).slice(0,this.change.price.length-1)<this.change.tmoney){
					this.$message.error('退款金额不能大于总金额');
					return false;
				}
				
				if(this.change.pay_type=='现金支付'){
					this.change.pay_type=5
				}else if(this.change.pay_type=='无感支付'){
					this.change.pay_type=1
				}else if(this.change.pay_type=='支付宝支付'){
					this.change.pay_type=2
				}else if(this.change.pay_type=='微信支付'){
					this.change.pay_type=3
				}else if(this.change.pay_type=='白名单特权'){
					this.change.pay_type=6
				}
				
				
				
				
				this.change.price=this.change.price.slice(0,this.change.price.length-1)
				this.change.tmoney=this.change.tmoney
				let data={}
				if(this.change.trade_no==''){
					data.pay_type=this.change.pay_type,
					data.out_order_no=this.change.out_trade_no,
					data.refund_fee=this.change.tmoney,
					data.total_fee=this.change.price,
					data.refund_reason=this.change.refund_reason
				}else{
					data.pay_type=this.change.pay_type,
					data.order_no=this.change.trade_no,
					data.out_order_no=this.change.out_trade_no,
					data.refund_fee=this.change.tmoney,
					data.total_fee=this.change.price,
					data.refund_reason=this.change.refund_reason
				}
				let that = this;
					axios({
						method:'post',
						url:that.$store.state.url+'/refund/refundByPayType',
						data:Qs.stringify(data)
					}).then(function(message){
						console.log(message)
						if(message.data.resCode==0){
							that.searchClick();
							that.$message({
					        	message: '退款成功',
					        	type: 'success'
					        });
						}else{
							that.$message({
					        	message: '退款失败',
					        	type: 'error'
					        });
						}
						that.change.pay_time=''  
						that.change.tmoney='' 
					})
				that.universal.change=false;
			},
			searchClick(){
				console.log(this.search.order_status)
				let data = {
					page:this.paging.page,
					is_del: 0,
					pageSize:this.paging.pageSize,
					userId:localStorage.getItem('userId'),
					dealer:localStorage.getItem('dealer')
				};
				// if(localStorage.getItem('userId')=='SURIOT'){
				// 	data = {
				// 	page:this.paging.page,
				// 	pageSize:this.paging.pageSize,
				// 	is_del: 0,
				//    };
				// }else{
				// 	data = {
				// 	page:this.paging.page,
				// 	pageSize:this.paging.pageSize,
				// 	// userId:localStorage.getItem('userId'),
				// 	is_del: 0,
				//    };
				// }
				// let data = {
				// 	page:this.paging.page,
				// 	pageSize:this.paging.pageSize,
				// 	is_del: 0,
				// 	userId:localStorage.getItem('userId')                          
				// };
				if(this.search.parking_lot_name){
					data.parking_lot_name = this.search.parking_lot_name
				}
				if(this.search.car_number){
				 	data.car_number = this.search.car_number
				}
				// consoe.log(this.search.order_status)
				if(this.search.order_status=='未支付'){
					data.order_status = 1
				}else if(this.search.order_status=='完成'){
					data.order_status = 0
				}else if(this.search.order_status=='已退款'){
					data.order_status = -1
				}else if(this.search.order_status=='未选择'){
					data.order_status = ''
				}
				if(this.search.start_pay_time){
				 	data.start_pay_time = this.search.start_pay_time
				}
				if(this.search.end_pay_time){
					data.end_pay_time = this.search.end_pay_time
				}
				console.log(data)
				let that = this;
				that.tableData = [];
				searchClicks('/Order/orders',data).then(message=>{
					if(message.data.resCode==0){
						for(var i=0;i<message.data.result.length;i++){
							if(message.data.result[i].order_status==0){
								message.data.result[i].order_status='完成'
							}else if(message.data.result[i].order_status==1){
								message.data.result[i].order_status='未支付'
							}else if(message.data.result[i].order_status==-1){
								message.data.result[i].order_status='已退款'
							}
							if(message.data.result[i].longdate==''){
								message.data.result[i].longdate='-'
							}else{
								message.data.result[i].longdate=message.data.result[i].longdate+'分钟'
							}
							if(message.data.result[i].pay_time==''){
								message.data.result[i].pay_time='-'
							}
							if(message.data.result[i].order_status=='未支付'){
								message.data.result[i].pay_type=58
							}
							message.data.result[i].date=that.common.timeToDate(JSON.stringify(message.data.result[i].date.time).slice(0,10))
							 
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
	.spanClass{
		width: 106px!important;
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