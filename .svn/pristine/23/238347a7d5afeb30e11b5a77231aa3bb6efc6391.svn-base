<template>
	<div id="offReport">
		<div class="header">
			<div class="headerTitle">
				<span>流量卡管理</span>
			</div>
		</div>
		<div class="select">
			<span>ICCID：</span>
			<el-input v-model="search.cardnumber" clearable placeholder="请输入内容"></el-input>
			<span>设备编号：</span>
			<el-input v-model="search.concode" clearable placeholder="请输入内容"></el-input>
			<span>流量卡状态：</span>
			<el-select v-model="search.stateType" placeholder="请选择">
				<el-option>未选择</el-option>
				<el-option v-for="item in cardaffiliation" :key="item.id" :label="item.type" :value="item.type"></el-option>
			</el-select>
		</div>
		<div class="select">
			<span>服务商：</span>
			<el-select v-model="search.operid" placeholder="请选择">
				<el-option>未选择</el-option>
				<el-option v-for="item in cardonline" :key="item.id" :label="item.type" :value="item.type"></el-option>
			</el-select>
		</div>
		<div class="select">
			<el-button type="success" class="oyButton" icon="el-icon-plus" @click='searchClick'>查询</el-button>
			<el-upload
				class="upload-demo demoele"
				action=""
				:before-upload="uploadFile"
				:on-success="handleAvatarSuccess"
				multiple
				:limit="1"
				:on-exceed="handleExceed">
				<el-button class="oyButton" type="success" icon="el-icon-download" >导入</el-button> 
				<!-- <el-button size="small" type="primary">导入</el-button> -->
			</el-upload>
		</div>
		<div class="Content">
			<el-table class="oyTable" :data="tableData" style="width: 100%">
				<el-table-column type="index":index="indexMethod" label="序号" width="100"> </el-table-column>
						
				<el-table-column label="归属客户">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.usename }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.usename }}</div>
				        	</div>
				        </el-popover>
			    	</template>
				</el-table-column>
						
				<el-table-column label="ICCID">
					<template slot-scope="scope">
						<el-popover trigger="hover" placement="top">
					    	<p  class="TsMaxWidth">{{ scope.row.cardnumber }}</p>
					    	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.cardnumber }}</div>
				        	</div>
				        </el-popover>
					</template>
				</el-table-column>
						
				<el-table-column label="是否开通">
					<template slot-scope="scope">
						<el-popover trigger="hover" placement="top">
						    <p  class="TsMaxWidth">已开通</p>
						    <div slot="reference" class="name-wrapper">
						    	<div class="overflowHide">已开通</div>
						    </div>
						</el-popover>
					</template>
				</el-table-column>
						
				<el-table-column label="日期">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.housDate }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.housDate }}</div>
				        	</div>
				        </el-popover>
					</template>
				</el-table-column>
						
				<el-table-column label="流量卡状态">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{scope.row.statetype}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.statetype}}</div>
				        	</div>
				        </el-popover>
					</template>
				</el-table-column>	
					
				<el-table-column label="剩余流量">
					<template slot-scope="scope">
						<!-- <div class="overflowHide">{{50-randomNum()}}MB</div> -->
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{(scope.row.lefts)/10000}}MB</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{(scope.row.lefts)/10000}}MB</div>
				        	</div>
				        </el-popover>
					</template>
				</el-table-column>	
					
				<el-table-column label="全部流量">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.flow }}MB</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.flow }}MB</div>
				        	</div>
				        </el-popover>
					</template>
				</el-table-column>	
				
					<el-table-column label="服务商">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.operid }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.operid }}</div>
				        	</div>
				        </el-popover>
					</template>
				</el-table-column>	
				<el-table-column prop="" label="操作" width='150'>
					<template slot-scope="scope">
						<el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-search" @click="seeClick(scope.row)" ></i>
						</el-tooltip>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<el-dialog title="查看" :visible.sync="universal.look">
			<div>
				<span class="spanClass">ICCID：</span>
				<el-input :disabled="false" v-model="look.iccid" clearable placeholder="请输入内容"></el-input><br /><br />

				<span class="spanClass">IMSI：</span>
				<el-input :disabled="false" v-model="look.imsi" clearable placeholder="请输入内容"></el-input><br /><br />
				
				<span class="spanClass">物联网卡号：</span>
				<el-input :disabled="false" v-model="look.msisdn" clearable placeholder="请输入内容"></el-input><br /><br />
			</div>
		</el-dialog>
		<div class="footer">
			<el-pagination background @current-change="handleCurrentChange"  @size-change="handleSizeChange" :current-page.sync="paging.page":page-sizes="[10, 11, 12]" :page-size="paging.pageSize" layout="sizes, prev, pager, next, jumper,total" :total="paging.total"></el-pagination>
		</div>
		<div id="allmap"></div>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	export default {
		name: 'equipmentList',
		data() {
			return {
				universal:{
					look:false
				},
				look:{
					iccid:'',
					imsi:'',
					msisdn:''
				},
				address:1,
				tableData:this.$store.state.tableData,
				paging:{
					page:1,
					pageSize:10,
					total:0
				},
				search:{
					stateType:'',
					operid:'',
					concode:'',
					cardnumber:''
				},
				cardonline:[
					{
						value:1,
						type:'杭州移动'
					},
					{
						value:2,
						type:'温州移动'
					}
				],
				cardaffiliation:[
					{
						value:1,
						type:'在线'
					},
					{
						value:2,
						type:'离线'
					},
					{
						value:3,
						type:'未激活'
					}
				]
			}
		},
		mounted: function() {
			document.title=this.$route.meta.title;
			this.map = new BMap.Map("allmap");
			this.geoc = new BMap.Geocoder();
			this.searchClick();
				// this.address = 0;
			// let data = {
			// 	userId:sessionStorage.getItem('userId'),
			// 	Page:this.paging.page,
			// 	PageSize:this.paging.pageSize,
			// };
			// this.$store.dispatch('sc',data)
			// this.tableData=message.data.results;
			console.log(this.randomNum())
		},
		methods: {
			seeClick(row){
				console.log(row)
				this.universal.look=true;
				let that=this;
				axios({
					method:'post',
					url:this.$store.state.http+'/viccid/cardInfo',
					data:Qs.stringify({
						cardnumber:row.cardnumber
					})
				}).then(function(message) {
					console.log(message);
					if(message.data.resCode==0){
						that.look.iccid=message.data.message.iccid
						that.look.imsi=message.data.message.imsi
						that.look.msisdn=message.data.message.msisdn
					}
				})
			},
			uploadFile(excelFile){
            	let that=this;
            	var formData=new FormData();
                formData.append('excelFile',excelFile);
                var excelFile = formData;
				console.log(excelFile);
                axios({
					method:'post',
					url:this.$store.state.http+'/viccid/importExcels',
					data:excelFile
				}).then(function(message) {
					console.log(message);
				})
            },
			randomNum(){
				return parseInt(Math.random()*50)
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
			addClick(){},
			deleteClick(row){},
			changeShow(row){},
			changeClick(){},
			// searchClick(){
			// 	if(this.search.positionerId){
			// 		data.cardnumber = this.search.positionerId
			// 	}
			// 	let data={
			// 		Page:this.paging.page,
			// 		PageSize:this.paging.pageSize,
			// 	}
			// 	this.$store.dispatch('sc',data)
			// }
			searchClick(){
				this.address = 0;
				let data = {
					page:this.paging.page,
					pageSize:this.paging.pageSize,
					userId: localStorage.getItem('userId'),
					userType:localStorage.getItem('userType'),
					// 先写死
				};
				if(this.search.stateType){
					if(this.search.stateType=='离线'){
						data.stateType='00'
					}else if(this.search.stateType=='在线'){
						data.stateType='01'
					}else if(this.search.stateType=='未激活')
						data.stateType='02'
				}
				if(this.search.operid){
					data.operid=this.search.operid
				}
				if(this.search.concode){
					data.concode=this.search.concode
				}
				if(this.search.cardnumber){
					data.cardnumber=this.search.cardnumber
				}
				console.log(data)
				let that = this;
				that.tableData = [];
				axios({
					method:'post',
					url:this.$store.state.http+'/viccid/iccidlist',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						// that.paging.total = message.data.results;
						for (let i = 0; i < message.data.results.length; i++) {
							message.data.results[i].date.time=that.common.timeToDate(JSON.stringify(message.data.results[i].date.time).slice(0,10))
							if(message.data.results[i].statetype=='00'){
								message.data.results[i].statetype='离线'
							}else if(message.data.results[i].statetype=='01'){
								message.data.results[i].statetype='在线'
							}else{
								message.data.results[i].statetype='未激活'
							}
						}
						that.tableData= message.data.results;
						that.paging.total=message.datacount
						console.log(that.tableData)
					}else{
						that.tableData = [];
					}
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.el-input,.el-select {
		width: 180px;
	}
	#offReport{padding: 20px;}
	.color{height: 47px;background-color: #e3eaf3;line-height: 47px;text-align: center;font-weight: 900;color: #666666;font-size: 14px;border-bottom-left-radius:10px;border-top-left-radius:10px;}
	.demoele{float: left;}
</style>