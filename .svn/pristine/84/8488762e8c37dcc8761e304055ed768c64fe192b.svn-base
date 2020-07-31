<template>
	<div id="faultList">
		<div class="header">
			<div class="headerTitle">
				<span>故障统计</span>
			</div>
		</div>
		<div class="select">
			<span>设备ID：</span>
			<el-input v-model="search.devId" clearable placeholder="请输入内容"></el-input>
		</div>
		<div class="select">
			<el-button type="success" class="oyButton" icon="el-icon-plus" @click='universal.add = true'>添加</el-button>
			<el-button type="success" class="oyButton" icon="el-icon-search" @click='searchClick'>查询</el-button>
		</div>
		<div class="Content">
			<el-table class='oyTable' :data="tableData" style="width: 100%">
				<el-table-column type="index":index="indexMethod" label="序号" width="100"> </el-table-column>
				
				<el-table-column label="车牌号" width="">
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

				<el-table-column label="商户订单号" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.out_trade_no }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.out_trade_no }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				
				
				
				
				<el-table-column label="付款金额" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.price}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.price }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="支付状态" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.order_status}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.order_status }}</div>
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
				<el-table-column label="入场时间" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.startdate}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.startdate }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
		
				<el-table-column prop="" label="操作" width='150'>
					<template slot-scope="scope">
						<!-- <el-tooltip class="item" effect="dark" content="修改" placement="top">
    						<i class="icon-change el-icon-edit" @click="changeShow(scope.row)" ></i>
						</el-tooltip> -->
						
						<!-- <el-tooltip v-if="scope.row.roleId == 1" class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-unclick el-icon-delete"></i>
						</el-tooltip> -->
						
						<el-tooltip class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
						</el-tooltip>

						<el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-document" @click="seeClick(scope.row)" ></i>
						</el-tooltip>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<el-dialog title="新增" :visible.sync="universal.add">
			<div>
				<span class="spanClass">停车场ID</span>
				<el-input :disabled="false" v-model="add.devId" clearable placeholder="请输入内容"></el-input><br /><br />
				<span class="spanClass">停车场地址</span>
				<el-input :disabled="false" v-model="add.fauMode" clearable placeholder="请输入内容"></el-input><br /><br />
				
				<span class="spanClass">停车场类型</span>
				<el-input :disabled="false" v-model="add.fauCode" clearable placeholder="请输入内容"></el-input><br /><br />
				
				<span class="spanClass">高德标识</span>
				<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br />
						
				<span class="spanClass">客服电话</span>
				<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br />

				<span class="spanClass">支付方式</span>
				<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br />

				<span class="spanClass">收费说明</span>
				<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br />

				<span class="spanClass">停车场名称</span>
				<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br />

				<span class="spanClass">收款方ID</span>
				<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br />

				<span class="spanClass">单价</span>
				<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br />

				<span class="spanClass">超时时间</span>
				<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br />

				<span class="spanClass">免费时长</span>
				<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br />

				<span class="spanClass">最高时长</span>
				<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br />
				
				<span class="spanClass">最高收费</span>
				<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br />
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.add = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="addClick">添加</el-button>
			</div>
		</el-dialog>
		<el-dialog title="修改" :visible.sync="universal.change">
			<div>
				<span class="spanClass">设备型号：</span>
				<el-input :disabled="true" v-model="change.devId" clearable placeholder="请输入内容"></el-input><br /><br />
				
				<span class="spanClass">故障类型：</span>
				<el-input :disabled="true" v-model="change.fauMode" clearable placeholder="请输入内容"></el-input><br /><br />
<!-- 				
				<span class="spanClass">故障名称：</span>
				<el-input :disabled="false" v-model="change.fauName" clearable placeholder="请输入内容"></el-input><br /><br /> -->
						
				<span class="spanClass">解决方法：</span>
				<el-input :disabled="false" class="textareaWidth" type="textarea" :rows="5" v-model="change.fauSolve" clearable placeholder="请输入内容"></el-input>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="hideclick">取消</el-button>
				<el-button type="success" class="oyButton" @click="changeClick">修改</el-button>
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
	export default {
		name: 'equipmentList',
		data() {
			return {
				obj:[],
				numw:[],
				numvalue:[],
				universal:{
					add:false,
					change:false
				},
				paging:{
					page:1,
					pageSize:10,
					total:0
				},
				tableData:[],
				search:{
					devId:'',
					fauMode:''
				},
				add:{
					fauMode:'',
					fauName:'',
					fauSolve:'',
					fauCode:'',
					devId:''
				},
				change:{
					fauId:'',
					fauMode:'',
					fauName:'',
					fauSolve:'',
					fauCode:'',
					devId:''
				}
			}
		},
		mounted: function() {
			document.title=this.$route.meta.title;
			this.searchClick();
			// this.downList();
			// this.common.login()
		},
		methods: {
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
			addClick(){
				console.log(this.add)
				let data = this.add;
				let that = this;
				console.log(data)
				axios({
					method:'post',
					url:this.$store.state.http +'/fault/add',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						that.searchClick();
					}else{
						that.$message({
				        	message: '添加失败',
				        	type: 'error'
				        });
					}
				})
				that.universal.add = false;
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
			changeShow(row){
				this.universal.change = true;
				this.change = Object.assign({},row);
				console.log(row)
			},
			changeClick(){
				let data = this.change;
				delete data.date;
				/*console.log(data)*/
				let that = this;
				axios({
					method:'post',
					url:this.$store.state.http +'/fault/update',
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
				let data = {
					page:this.paging.page,
					pageSize:this.paging.pageSize,
					is_del: 0                           
					//  先写死
				};
				if(this.search.devId){
					data.undefined = this.search.devId
				}
				if(this.search.fauMode){
					data.fauCode = this.options[this.search.fauMode].type
				}
				/*if(this.search.positionereEnd){
					data.positionereEnd = this.search.positionereEnd
				}*/
				console.log(data)
				let that = this;
				that.tableData = [];
				axios({
					method:'post',
					url:'http://39.104.113.112:2088/Order/orders',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						for(var i=0;i<message.data.result.length;i++){
							if(message.data.result[i].order_status==-1){
								message.data.result[i].order_status='已完成'
							}else{
								message.data.result[i].order_status='未完成'
							}
						}
						that.paging.total = message.data.count;
						that.tableData = message.data.result;
						
					}else{
						that.tableData = [];
					}
				})
			},
			// digitize(n) {  //接受一个number类参数，拆分成一个数组并返回
            // var str = n + "";    //加上空字符中，把接收的参数转换为字符串
            // var arr = [];         //声明结果空数组，稍后返回
            // str.split("").forEach(function (item) {   //调用split，以空字符串为分隔符切割字符串并返回数组，在数组上调用forEach方法
            //     arr.push(parseInt(item));    //对传入的每个字符用pasreInt转换为数字并压入arr数组
            // })
            // return arr;  //返回结果数组
			// },
			// abc(ccc){
			// 	var ccc=+ccc;
			// 	return ccc.toString(2)
			// },
			// abcd(a){
			// 	for(var j=a.length;j>=0;j--){
			// 		if(a[0]==1){
			// 			a[0]='设备倾倒'
			// 		}else if(a[0]==0){
			// 			a[0]=''
			// 		}
			// 		if(a[1]==1){
			// 			a[1]='应急开关破坏'
			// 		}else if(a[1]==0){
			// 			a[1]=''
			// 		}
			// 		if(a[2]==1){
			// 			a[2]='水压异常'
			// 		}else if(a[2]==0){
			// 			a[2]=''
			// 		}
			// 		if(a[3]==1){
			// 			a[3]='三轴模块异常'
			// 		}else if(a[3]==0){
			// 			a[3]=''
			// 		}
			// 		if(a[4]==1){
			// 			a[4]='温度压力传感器异常'
			// 		}else if(a[4]==0){
			// 			a[4]=''
			// 		}
			// 		if(a[5]==1){
			// 			a[5]='压力传感器初始化失败'
			// 		}else if(a[5]==0){
			// 			a[5]=''
			// 		}
			// 		if(a[6]==1){
			// 			a[6]='非法开锁'
			// 		}else if(a[6]==0){
			// 			a[6]=''
			// 		}
			// 		if(a[7]==1){
			// 			a[7]='电机异常'
			// 		}else if(a[7]==0){
			// 			a[7]=''
			// 		}
			// 		}
			// 	return a;
			// },
			// upto(value){
			// 	if(value==0){
			// 		return '设备正常'
			// 	}else{
			// 		return this.abcd(this.digitize(this.abc(value))).join().replace(/,/g, " ")
			// 	}
			// },
			// downList(){
			// 	let that = this;
			// 	axios({
			// 		method:'post',
			// 		url:this.$store.state.http +'/fault/selecByType'
			// 	}).then(function(message){
			// 		console.log(message.data)
			// 		if(message.data.resCode==0){
			// 			console.log(message.data.result)
			// 			that.options = message.data.result;
			// 		}
			// 	})
			// }
		}
	}
</script>

<style scoped="scoped">
	.el-input,.el-select{
		width: 200px;
	}
	#faultList{padding: 20px;}
	/*.textareaWidth{width: 200px;}*/
</style>