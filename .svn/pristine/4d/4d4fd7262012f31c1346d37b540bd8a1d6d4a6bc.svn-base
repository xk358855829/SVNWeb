<template>
	<div id="offReport">
		<div class="header">
			<div class="headerTitle">
				<span>流量卡列表</span>
			</div>
		</div>
		<div class="select">
			<span>ICCID：</span>
			<el-input v-model="search.positionerId" clearable placeholder="请输入内容"></el-input>
		</div>
		<div class="select">
			<el-button type="success" class="oyButton" icon="el-icon-search" @click='searchClick'>查询</el-button>
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
		<el-dialog title="查看" :visible.sync="universal.look">
			<div class="letg">
				<el-row>
					<el-col :span="12"><div class="grid-content">物联网ICCID:</div><div>{{this.ICCID}}</div></el-col>
					<el-col :span="12"><div class="grid-content">物联网IMSI：</div><div>{{this.IMSI}}</div></el-col>
				</el-row>
				<el-row>
					<el-col :span="12"><div class="grid-content">物联网MSISDN:</div><div>{{this.MSISDN}}</div></el-col>
					<el-col :span="12"><div class="grid-content">剩余流量：</div><div>{{this.LEFT}}KB</div></el-col>
				</el-row>
				<el-row>
					<el-col :span="12"><div class="grid-content">GPRS在线状态:</div><div>{{this.GPRS_STATUS}}</div></el-col>
					<el-col :span="12"><div class="grid-content">用户IP地址:</div><div>{{this.IP}}</div></el-col>
				</el-row>
				<el-row>
					<el-col :span="12"><div class="grid-content">RAT:</div><div>{{this.RAT}}</div></el-col>
					<el-col :span="12"><div class="grid-content">状态变更时间:</div><div>{{this.TIMESTAMP}}</div></el-col>
				</el-row>
				<el-row>
					<el-col :span="12"><div class="grid-content">用户卡状态:</div><div>{{this.USER_CARD_STATUS}}</div></el-col>
					<el-col :span="12"><div class="grid-content">TIMESTAMP:</div><div>{{this.TIMESTAMP}}</div></el-col>
				</el-row>
				<el-row>
					<el-col :span="12"><div class="grid-content">激活日期:</div><div>{{this.ACTIVE_DATE}}</div></el-col>
					<el-col :span="12"><div class="grid-content">开户日期:</div><div>{{this.CREATE_DATE}}</div></el-col>
				</el-row>
				<el-row>
					<el-col :span="12"><div class="grid-content">计费状态:</div><div>{{this.BILLING_STATUS}}</div></el-col>
					<el-col :span="12"><div class="grid-content">APN1:</div><div>{{this.APN1}}</div></el-col>
				</el-row>
				<el-row>
					<el-col :span="12"><div class="grid-content">短信接入号:</div><div>{{this.SMS_NUMBER}}</div></el-col>
					<el-col :span="12"><div class="grid-content">用户状态:</div><div>{{this.USER_STATUS}}</div></el-col>
				</el-row>
				<el-row>
					<el-col :span="12"><div class="grid-content">卡类型:</div><div>{{this.CARD_TYPE}}</div></el-col>
					<el-col :span="12"><div class="grid-content">状态描述:</div><div>{{this.OS_STATUS_DESC}}</div></el-col>
				</el-row>
				<el-row>
					<el-col :span="12"><div class="grid-content">基础套餐:</div><div>{{this.OFFER_NAME}}</div></el-col>
					<el-col :span="12"><div class="grid-content">ICC_ID:</div><div>{{this.ICCID}}</div></el-col>
				</el-row>
				<el-row>
					<el-col :span="12"><div class="grid-content">IMSI:</div><div>{{this.IMSI}}</div></el-col>
					<el-col :span="12"><div class="grid-content">套餐名称:</div><div>{{this.PROD_NAME}}</div></el-col>
				</el-row>
				<el-row>
					<el-col :span="12"><div class="grid-content">套餐编号:</div><div>{{this.PROD_ID}}</div></el-col>
					<el-col :span="12"><div class="grid-content">生效时间:</div><div>{{this.PROD_EFF_TIME}}</div></el-col>
				</el-row>
				<el-row>
					<el-col :span="12"><div class="grid-content">失效时间:</div><div>{{this.PROD_EXP_TIME}}</div></el-col>
					<!-- <el-col :span="12"><div class="grid-content">套餐描述:{{this.PROD_DESC}}</div></el-col> -->
				</el-row>
			 </div>
		</el-dialog>
		<div class="Content">
			<el-table class="oyTable" :data="tableData" style="width: 100%">
				<el-table-column type="index":index="indexMethod" label="序号"> </el-table-column>
						
				<!--<el-table-column label="ID" width="120">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.positionerId }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.positionerId }}</div>
				        	</div>
				        </el-popover>
			    	</template>
				</el-table-column>-->
						
				<!--<el-table-column label="分组" width="150">
					<template slot-scope="scope">
						<el-popover trigger="hover" placement="top">
					    	<p  class="TsMaxWidth">{{ scope.row.gropuName }}</p>
					    	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.gropuName }}</div>
				        	</div>
				        </el-popover>
					</template>
				</el-table-column>-->
						
				<el-table-column label="ICCID" >
					<template slot-scope="scope">
						<el-popover trigger="hover" placement="top">
						    <p  class="TsMaxWidth">{{ scope.row.cardnumber }}</p>
						    <div slot="reference" class="name-wrapper">
						    	<div class="overflowHide">{{ scope.row.cardnumber }}</div>
						    </div>
						</el-popover>
					</template>
				</el-table-column>
						
				<el-table-column label="最后上线时间">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.lastOnlineDate }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.lastOnlineDate }}</div>
				        	</div>
				        </el-popover>
					</template>
				</el-table-column>
						
				<el-table-column label="全部流量" >
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.flow }}MB</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.flow }}MB</div>
				        	</div>
				        </el-popover>
					</template>
				</el-table-column>	
				<el-table-column label="运营商" >
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.housDate }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.housDate }}</div>
				        	</div>
				        </el-popover>
					</template>
				</el-table-column>	
					
				<!-- <el-table-column label="剩余流量" width="200">
					<template slot-scope="scope">
						<div class="overflowHide">{{50-randomNum()}}MB</div>
				        <!--<el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{50 - randomNum()}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{50-randomNum()}}</div>
				        	</div>
				        </el-popover>-->
					<!-- </template>
				</el-table-column>	 -->
					
				<!-- <el-table-column label="状态" width="200">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.lastOnlineDate }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.lastOnlineDate }}</div>
				        	</div>
				        </el-popover>
					</template>
				</el-table-column>	 -->
				
				<!-- <el-table-column label="位置" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p v-if="address==1">{{ scope.row. longtitude }},{{ scope.row.latitude }}</p>
							<p v-else="">{{ scope.row.address }}</p>
						  	<div slot="reference" class="name-wrapper">
					    		<div class="overflowHide" v-if="address==1" style="color: #5DAF34;cursor: pointer;" @click="address = 0">{{ scope.row. longtitude }},{{ scope.row.latitude }}</div>
				        		<div class="overflowHide" v-else="" style="color: #5DAF34;cursor: pointer;" @click="address = 1" >{{ scope.row.address }}</div>
				        	</div>
				        </el-popover>
					</template>
				</el-table-column> -->
				<el-table-column prop="" label="操作" width="">
					<template slot-scope="scope">
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
				address:1,
				tableData:this.$store.state.tableData,
				paging:{
					page:1,
					pageSize:10,
					total:0
				},
				universal:{
					look:false
				},
				search:{
					
				},
				COUNT:'',
				RESULT_LIST:'',
				RESULT_INFO:'',
				MSISDN2:'',
				ICCID2:'',
				IMSI:'',
				USE_DATE:'',
				SMS_NUM:'',
				CMIOT_USED:'',
				CMMTM_USED:'',
				OTHER_USED:'',
				CALL_MINUTE:'',
				MO_CALL_MINUTE:'',
				MT_CALL_MINUT:'',
				// F请求

				ICCID:'',
				IMSI:'',
				MSISDN:'',
				APN:'',
				GPRS_STATUS:'',
				IP:'',
				RAT:'',
				TIMESTAMP:'',
				USER_CARD_STATUS:'',
				ACTIVE_DATE:'',
				CREATE_DATE:'',
				BILLING_STATUS:'',
				APN1:'',
				SMS_NUMBER:'',
				USER_STATUS:'',
				CARD_TYPE:'',
				OS_STATUS_DESC:'',
				OFFER_NAME:'',
				ICCID1:'',
				IMSI1:'',
				PROD_FEE_LIST:'',
				PROD_FEE_INFO:'',
				PROD_NAME:'',
				PROD_ID:'',
				PROD_EFF_TIME:'',
				PROD_EXP_TIME:'',
				PROD_DESC:'',
				LEFT:''
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
					if(message.data.resCode==0){
						that.searchClick()
						that.$message({
							message: '导入成功',
							type: 'success'
						});
						
					}else{
						that.$message({
							message: '导入失败',
							type: 'error'
						});
					}
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
			changeGroupShow(row){
				console.log(row)
				this.look = row;
				this.universal.look = true;
				let that=this;
				let dataA={
					id:'ABILITY_10000663',
					cardnumber:row.cardnumber
				}
				console.log(dataA)
				axios({
					method:'post',
					url:this.$store.state.http +'/viccid/sendFlow',
					data:Qs.stringify(dataA)
				}).then(function(message){
					if(message.data.resCode==-1){
						that.ICCID=message.data.result.RESP_PARAM.BUSI_INFO.ICCID
						that.IMSI=message.data.result.RESP_PARAM.BUSI_INFO.IMSI
						that.MSISDN=message.data.result.RESP_PARAM.BUSI_INFO.MSISDN
					}
				})
				let dataB={
					id:'ABILITY_10000660',
					cardnumber:row.cardnumber
				}
				console.log(dataB)
				axios({
					method:'post',
					url:this.$store.state.http +'/viccid/sendFlow',
					data:Qs.stringify(dataB)
				}).then(function(message){
					if(message.data.resCode==-1){
						that.APN=message.data.result.RESP_PARAM.BUSI_INFO.RESULT_INFO_LIST[0].RESULT_INFO[0].APN
						that.GPRS_STATUS=message.data.result.RESP_PARAM.BUSI_INFO.RESULT_INFO_LIST[0].RESULT_INFO[0].GPRS_STATUS=="01"?"在线":"离线";
						that.IP=message.data.result.RESP_PARAM.BUSI_INFO.RESULT_INFO_LIST[0].RESULT_INFO[0].IP
						that.RAT=message.data.result.RESP_PARAM.BUSI_INFO.RESULT_INFO_LIST[0].RESULT_INFO[0].RAT
						that.TIMESTAMP=message.data.result.RESP_PARAM.BUSI_INFO.RESULT_INFO_LIST[0].RESULT_INFO[0].TIMESTAMP
					}
				})
				let dataC={
					id:'ABILITY_10000665',
					cardnumber:row.cardnumber
				}
				console.log(dataC)
				axios({
					method:'post',
					url:this.$store.state.http +'/viccid/sendFlow',
					data:Qs.stringify(dataC)
				}).then(function(message){
					if(message.data.resCode==-1){
						that.USER_CARD_STATUS=message.data.result.RESP_PARAM.BUSI_INFO.USER_CARD_STATUS
					}
				})
				let dataD={
					id:'ABILITY_10001617',
					cardnumber:row.cardnumber
				}
				console.log(dataD)
				axios({
					method:'post',
					url:this.$store.state.http +'/viccid/sendFlow',
					data:Qs.stringify(dataD)
				}).then(function(message){
					if(message.data.resCode==-1){
						that.ACTIVE_DATE=message.data.result.RESP_PARAM.BUSI_INFO.ACTIVE_DATE
						that.CREATE_DATE=message.data.result.RESP_PARAM.BUSI_INFO.CREATE_DATE
						that.BILLING_STATUS=message.data.result.RESP_PARAM.BUSI_INFO.BILLING_STATUS
						that.APN1=message.data.result.RESP_PARAM.BUSI_INFO.APN
						that.SMS_NUMBER=message.data.result.RESP_PARAM.BUSI_INFO.SMS_NUMBER
						that.USER_STATUS=message.data.result.RESP_PARAM.BUSI_INFO.USER_STATUS
						that.CARD_TYPE=message.data.result.RESP_PARAM.BUSI_INFO.CARD_TYPE
						that.OS_STATUS_DESC=message.data.result.RESP_PARAM.BUSI_INFO.OS_STATUS_DESC
						that.OFFER_NAME=message.data.result.RESP_PARAM.BUSI_INFO.OFFER_NAME
						that.ICCID1=message.data.result.RESP_PARAM.BUSI_INFO.ICCID
						that.IMSI1=message.data.result.RESP_PARAM.BUSI_INFO.IMSI
						that.PROD_NAME=message.data.result.RESP_PARAM.BUSI_INFO.PROD_FEE_LIST.PROD_FEE_INFO[0].PROD_NAME
						that.PROD_ID=message.data.result.RESP_PARAM.BUSI_INFO.PROD_FEE_LIST.PROD_FEE_INFO[0].PROD_ID
						that.PROD_EFF_TIME=message.data.result.RESP_PARAM.BUSI_INFO.PROD_FEE_LIST.PROD_FEE_INFO[0].PROD_EFF_TIME
						that.PROD_EXP_TIME=message.data.result.RESP_PARAM.BUSI_INFO.PROD_FEE_LIST.PROD_FEE_INFO[0].PROD_EXP_TIME
						that.PROD_DESC=message.data.result.RESP_PARAM.BUSI_INFO.PROD_FEE_LIST.PROD_FEE_INFO[0].PROD_DESC
					}
				})
				let dataF={
					id:'ABILITY_10000661',
					cardnumber:row.cardnumber
				}
				console.log(dataF)
				axios({
					method:'post',
					url:this.$store.state.http +'/viccid/sendFlow',
					data:Qs.stringify(dataF)
				}).then(function(message){
					//console.log(message)
					if(message.data.resCode==-1){
						//console.log(message.data.result.RESP_PARAM.BUSI_INFO.GPRS_INFO_LIST.GPRS_INFO[0].LEFT);
						that.LEFT=message.data.result.RESP_PARAM.BUSI_INFO.GPRS_INFO_LIST.GPRS_INFO[0].LEFT
						// COUNT:'',
						// RESULT_LIST:'',
						// RESULT_INFO:'',
						// MSISDN2:'',
						// ICCID2:'',
						// IMSI:'',
						// USE_DATE:'',
						// SMS_NUM:'',
						// CMIOT_USED:'',
						// CMMTM_USED:'',
						// OTHER_USED:'',
						// CALL_MINUTE:'',
						// MO_CALL_MINUTE:'',
						// MT_CALL_MINUT:'',
					}
				})
			},
			searchClick(){
				this.address = 0;
				let data = {
					userId:sessionStorage.getItem('userId'),
					Page:this.paging.page,
					PageSize:this.paging.pageSize,
				};
				if(this.search.positionerId){
					data.cardNumber = this.search.positionerId
				}
				console.log(sessionStorage.getItem("dealer"));
				data.userId=sessionStorage.getItem('userId');
				data.dealer=sessionStorage.getItem("dealer")
				if(data.dealer=="0"){
					data.dealer=sessionStorage.getItem('orderDealers')
				}
				console.log(data)
				let that = this;
				that.tableData = [];
				axios({
					method:'post',
					url:this.$store.state.http +'/viccid/lists',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						// that.paging.total = message.data.results;
						for (let i = 0; i < message.data.results.length; i++) {
								message.data.results[i].lastOnlineDate=that.common.timeToDate(JSON.stringify(message.data.results[i].date.time).slice(0,10))
						}
						
						that.tableData= message.data.results;
						that.paging.total= message.data.results.length;
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
	.letg div{font-size: 15px;line-height: 40px;}
	.grid-content{float: left;margin-right: 10px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width: 33%;}
</style>