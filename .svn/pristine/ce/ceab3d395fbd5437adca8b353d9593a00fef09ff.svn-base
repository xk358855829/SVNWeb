<template>
	<div id="serviceList">
		<div class="header">
			<div class="headerTitle">
				<span>道闸白名单</span>
			</div>
		</div>
		<div class="select">
			<span>设备编号：</span>
			<el-input v-model="search.roadGateId" clearable placeholder="请输入内容"></el-input>
			
			<span>车牌号码：</span>
			<el-input v-model="search.carNumber" clearable placeholder="请输入内容"></el-input>
		</div>
		<div class="select">
			<el-button type="success" class="oyButton" icon="el-icon-plus" @click='AddShow' v-show="showchose">添加</el-button>
			<el-button type="success" class="oyButton" icon="el-icon-search" @click='searchClick'>查询</el-button>
		</div>
		<div class="Content">
			<el-table class='oyTable' :data="tableData" style="width: 100%" >
				<el-table-column type="index" :index="indexMethod" label="序号" width="100"> </el-table-column>
				
				<el-table-column label="设备编号">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.deviceid }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.deviceid }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				<el-table-column label="车牌号码" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.brand }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.brand }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="过期时间" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.outtime }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.outtime }}</div>
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
					</template>
				</el-table-column>
			</el-table>
		</div>
		<el-dialog title="添加" :visible.sync="universal.add" class="changediv">
			<div class="total">
				<el-row>
					<!-- <div class="changedivchild">
						<span class="spanClassT"><span class="aKey">*</span>车牌号码：</span>
						<el-input :disabled="false" v-model="add.carNumber" clearable placeholder="请输入内容"></el-input><br /><br />

						<span class="spanClassT"><span class="aKey">*</span>设备编号：</span>
						<el-input :disabled="false" v-model="add.roadGateId" clearable placeholder="请输入内容"></el-input><br /><br />
						
						<span class="spanClassT"><span class="aKey">*</span>过期时间：</span>
						<el-date-picker v-model="add.outTime" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />
						<span class="spanClassT">备注：</span><div class="little">{{this.$store.state.size}}</div>
					</div> -->
					<el-col :span="12">
						<span class="spanClassT"><span class="aKey">*</span>停车场编号：</span>
						<el-input :disabled="false" v-model="add.parkingId" clearable placeholder="请输入内容"></el-input><!--<span>请输入账号</span>--><br /><br />
						
						<span class="spanClassT"><span class="aKey">*</span>车牌号码：</span>
						<el-input :disabled="false" v-model="add.carnumber" clearable placeholder="请输入内容"></el-input><br /><br />

						<span class="spanClassT"><span class="aKey">*</span>用户姓名：</span>
						<el-input :disabled="false" v-model="add.username" clearable placeholder="请输入内容"></el-input><br /><br />
								
						<span class="spanClassT"><span class="aKey">*</span>用户编码：</span>
						<el-input :disabled="true" v-model="add.usercode" clearable placeholder="请输入内容"></el-input><br /><br />

						<span class="spanClassT"><span class="aKey">*</span>有效标记：</span>
						<el-select v-model="add.nbenable" placeholder="请选择">
						 	<el-option v-for="item in numtable" :key="item.value" :label="item.type" :value="item.value"></el-option>
						</el-select><br /><br />
					</el-col>
					<el-col :span="12">
						
						
						<span class="spanClassT"><span class="aKey">*</span>黑名单：</span>
						<el-select v-model="add.nisblacklist" placeholder="请选择">
						 	<el-option v-for="item in numtables" :key="item.value" :label="item.type" :value="item.value"></el-option>
						</el-select><br /><br />

						<span class="spanClassT"><span class="aKey">*</span>时间段匹配：</span>
						<el-select v-model="add.nisusingtimeseg" placeholder="请选择">
						 	<el-option v-for="item in numtabless" :key="item.value" :label="item.type" :value="item.value"></el-option>
						</el-select><br /><br />
								
						<span class="spanClassT"><span class="aKey">*</span>生效时间：</span>
						<el-date-picker v-model="add.startTime" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />
								
						<span class="spanClassT"><span class="aKey">*</span>结束时间：</span>
						<el-date-picker v-model="add.endTime" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />
					</el-col>
				</el-row>
				<span class="spanClassT"><span class="aKey">*</span>备注：</span><div class="little">{{this.$store.state.size}}</div>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.add = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="addClick">添加</el-button>
			</div>
		</el-dialog>
		<el-dialog title="修改" :visible.sync="universal.change" class="changediv">
			<span class="spanClassT"><span class="aKey">*</span>车牌号码：</span>
			<el-input :disabled="false" v-model="change.carNumber" clearable placeholder="请输入内容"></el-input><br /><br />

			<span class="spanClassT"><span class="aKey">*</span>设备编号：</span>
			<el-input :disabled="false" v-model="change.roadGateId" clearable placeholder="请输入内容"></el-input><br /><br />
			
			<span class="spanClassT"><span class="aKey">*</span>过期时间：</span>
			<el-date-picker v-model="change.outTime" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />

			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="hideclick">取消</el-button>
				<el-button type="success" class="oyButton" @click="changeClick">修改</el-button>
			</div>
		</el-dialog>

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
				carps:[],
				chepai:true,
				ADDCAR:'',
				checkbox:{
					checkedCities:[]
				},
				checked:true,
				universal:{
					add:false,
					change:false,
					jurisdiction:false,
					next:false,
					look:false
				},
				paging:{
					page:1,
					pageSize:10,
					total:0
				},
				empty:[[]],
				emptyTwo:'',
				tableData:[],
				search:{
					roadGateId:'',
					carNumber:''
				},
				numtable:[{
					value:0,
					type:'不启用'
				},
				{
					value:1,
					type:'启用'
				}],
				numtabless:[{
					value:0,
					type:'不启用'
				},
				{
					value:1,
					type:'启用'
				}],
				numtables:[{
					value:0,
					type:'不是'
				},
				{
					value:1,
					type:'是'
				}],
				add:{
					parkingId:'',
					carnumber:'',
					username:'',
					usercode:'',
					nbenable:'',
					nisusingtimeseg:'',
					startTime:'',
					endTime:'',
					nisblacklist:''
				},
				addDealers:{
					customerName:'',
					customerPhone:'',
					semail:'',
					area:'',
					address:''
				},
				change:{
					outTime:'',
					roadGateId:'',
					carNumber:'',
				},
			
				carp:[],
				cari:'',
				options:[],
				dataUniversal:this.$store.state.activeName,
				updataUserId:'',
				imgs:[],
				showchose:''
			}
		},
		mounted: function() {
			document.title=this.$route.meta.title;
			if(localStorage.getItem('dealer')==0){
				this.showchose=false
			}else{
				this.showchose=true
			}
			this.searchClick();
			console.log(this.dataUniversal)
		},
		methods: {
			AddShow(){
				this.universal.add = true
				let text='';
				let list=[0,1,2,3,4,5,6,7,8,9]
				for(var i=0;i<6;i++){
					text+=list[Math.floor(Math.random()*10)]
				}
				console.log()
				this.add.usercode=text
			},
			hideclick(){
				this.universal.change = false;
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
			acTiveArrStringFun(obj){
                var arr = [];
                if (obj != null && obj.length != 0) {
                    for (var i = 0; i < obj.length; i++) {
                        arr.push(obj[i]);
                    }
                }
                return arr.toString();
			},
			addClick(){
				
				
				if(this.add.parkingId== ''){
					this.$message.error('带*数据不能为空哦！1');
					return false;
				}
				if(this.add.carnumber== ''){
					this.$message.error('带*数据不能为空哦！2');
					return false;
				}
				if(this.add.username== ''){
					this.$message.error('带*数据不能为空哦！3');
					return false;
				}
				// if(this.add.nbenable== ''){
				// 	this.$message.error('带*数据不能为空哦！4');
				// 	return false;
				// }
				if(this.add.nisusingtimeseg== ''){
					this.$message.error('带*数据不能为空哦！5');
					return false;
				}
				if(this.add.startTime== ''){
					this.$message.error('带*数据不能为空哦！6');
					return false;
				}
				if(this.add.endTime== ''){
					this.$message.error('带*数据不能为空哦！7');
					return false;
				}
				// if(this.add.nisblacklist== ''){
				// 	this.$message.error('带*数据不能为空哦！8');
				// 	return false;
				// }
				// PF15517711473803W4
				console.log(this.add)
				let data={
					parkingId:this.add.parkingId,
					carnumber:this.add.carnumber,
					username:this.add.username,
					usercode:this.add.usercode,
					nbenable:this.add.nbenable,
					nisusingtimeseg:this.add.nisusingtimeseg,
					startTime:this.add.startTime,
					endTime:this.add.endTime,
					nisblacklist:this.add.nisblacklist,
				}
				let that = this;
				console.log(data)
				axios({
					method:'post',
					url:'http://192.168.2.110:3010//wirite/single/add',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.code==0){
						that.searchClick();
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
						// url:'http://39.104.99.181:2080/darkVisit/del',
						url:that.$store.state.abc+'/brake/single/del',
						data:Qs.stringify({
							roadGateId:row.roadGateId,
							carNumber:row.carNumber
						})
					}).then(function(message){
						console.log(message.data)
						if(message.data.code==0){
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
				console.log(row)
				this.universal.change = true;
				this.change.carNumber = row.brand
				this.change.roadGateId =row.deviceid
				this.change.outTime =row.outtime
			},
			changeClick(){
				let data = {
					outTime:this.change.outTime,
					roadGateId:this.change.roadGateId,
					carNumber:this.change.carNumber
				}
				console.log(data)
				let that = this;
				axios({
					method:'post',
					url:that.$store.state.abc+'/brake/single/update',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.code==0){
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
				that.universal.change = false;
			},
			searchClick(){
				// let data = {
				// 	page:this.paging.page,
				// 	pageSize:this.paging.pageSize,
				// 	userId:localStorage.getItem('userId')
				// };
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
				if(this.search.roadGateId){
					data.roadGateId = this.search.roadGateId
				}
				if(this.search.carNumber){
					data.carNumber = this.search.carNumber
				}
				console.log(data)
				let that = this;
				that.tableData = [];
				axios({
					method:'post',
					url:that.$store.state.abc +'/brake/single/find',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.code==0){
						that.paging.total = message.data.count;						
						that.tableData = message.data.result.reverse();
						// for(let i=0;i<message.data.result.length;i++){
						// 	for(let j=0;j<message.data.result[i].listNumber.length;j++){
						// 		console.log(message.data.result[i].listNumber[j].brandName);
						// 		that.empty[i].push(message.data.result[i].listNumber[j].brandName);
						// 		that.emptyTwo=that.empty.join("");
						//      }
					    // }
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
	#serviceList{padding: 20px;}
	
	/*.textareaWidth{width: 200px;}*/
	.cell span{
		display: inline-block;
		text-align: center;
	}
	.name-wrapper img{
		height: 80px;
	}
	.name-wrapper li{float: left;}

	.changedivchild{
		width: 50%;
		float: left;
	}
	.spanClass{
		width: 130px!important;
	}
	.chepai{
		display: inline-block;
		height: 35px;
		padding-top:10px;
		padding-left: 85px;
	}
	.upload{
		width: 40%;
		display: inline-block;
		margin-top:5px;
		position: relative;
	}
	.upload input{
		position: absolute;
		top:0;
		left: 0;
		bottom: 0;
		right: 0;
		opacity: 0;
	}
	.imgul{
		width: 100%;
	}
	.imgul li{
		width:40px;
		height:60px;
		float: left;
		position: relative;
		margin-right: 10px;
		margin-top:5px;
	}
	.imgul li img{
		width: 100%;
		height: 100%;
	}
	.imgul li p{
		position: absolute;
		top:0;
		right: 0;
	}
	.imgul,.chapai {
		margin-left: 60px;
		width: 100%;
	}

.chapai li{
	width:90px;
	height: 32px;
	float: left;
	color: #fff;
	background: #a2cc6d;
	border-radius: 5px;
	overflow: hidden;
	margin-right: 10px;
	margin-top:5px;
}
.chapai .plate{
	height: 30px;
	width: 80px;
	position: relative;
}
.chapai .plate div{
	margin-top:9px;
	text-align: center;
}
.chapai li  p{
	width: 14px;
	height: 14px;
	position: absolute;
	top:-14px;
	right: -14px;
	border-radius: 7px;
	border: 1px solid #999;
	background: #999;
}
.addchap{
	float: right;
	margin-top:13px;
}
.namechapai{
	width:170px!important;
}
.imgadd{
	vertical-align: middle;
	margin-left: 3px;
}
.alipay{
		width: 50%;
		float: left;
}
.alipays{
	display:inline-block;
}

</style>