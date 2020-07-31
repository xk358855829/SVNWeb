<template>
	<div id="customerList">
		<div class="header">
			<div class="headerTitle">
				<span>水司列表</span>
			</div>
		</div>
		<div class="select">
			<span>客户编码：</span>
			<el-input v-model="search.dealerId" clearable placeholder="请输入内容"></el-input>
			
			<span>客户名称：</span>
			<el-input v-model="search.customerName" clearable placeholder="请输入内容"></el-input>
		</div>
		<div class="select">
			<!--<el-button type="success" class="oyButton" icon="el-icon-plus" @click='universal.add = true'>添加</el-button>-->
			<el-button type="success" class="oyButton" icon="el-icon-search" @click='searchClick'>查询</el-button>
		</div>
		<div class="Content">
			<el-table class='oyTable' :data="tableData" style="width: 100%">
				<el-table-column type="index":index="indexMethod" label="序号" width="100"> </el-table-column>
				
				<el-table-column label="客户编码	" width="150">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.dealerId }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.dealerId }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				<el-table-column label="客户名称	" width="150">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.customerName }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.customerName }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				<el-table-column label="官方电话" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.customerPhone }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.customerPhone }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				<el-table-column label="公共邮箱" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.emails }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.emails }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				<el-table-column label="区域" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.area }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.area }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				<el-table-column label="详细地址" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.address }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.address }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column prop="" label="操作" width='150'>
					<template slot-scope="scope">
						<el-tooltip class="item" effect="dark" content="修改" placement="top">
    						<i class="icon-change el-icon-edit" @click="changeShow(scope.row)" ></i>
						</el-tooltip>
						
						<el-tooltip v-if="scope.row.type==1" class="item" effect="dark" content="权限" placement="top">
    						<i class="icon-unclick el-icon-menu"></i>
						</el-tooltip>
						
						<el-tooltip v-else="" class="item" effect="dark" content="权限" placement="top">
    						<i class="icon-menu el-icon-menu" @click="jurisdictionShow(scope.row)" ></i>
						</el-tooltip>
						
						<el-tooltip v-if="scope.row.type==1" class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-unclick el-icon-delete"></i>
						</el-tooltip>
						
						<el-tooltip v-else="" class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
						</el-tooltip>

						<!-- <el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-search" @click="changeGroupShow(scope.row)" ></i>
						</el-tooltip> -->
						<el-tooltip class="item" effect="dark" content="绑定" placement="top">
    						<i class="icon-menu iconall el-icon-news" @click="abcd(scope.row)" ></i>
						</el-tooltip>
						<el-tooltip  class="item" effect="dark" content="计费规则" placement="top">
    						<i class="icon-change aly el-icon-tickets" @click="rulesClick(scope.row)"></i>
						</el-tooltip>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<!--<el-dialog title="添加" :visible.sync="universal.add">
			<div>
				<el-row>
					<el-col :span="12">
						<span class="spanClassT"><span class="aKey">*</span>账号：</span>
						<el-input :disabled="false" v-model="add.userName" clearable placeholder="请输入内容"></el-input><br /><br />
								
						<span class="spanClassT"><span class="aKey">*</span>账号类型：</span>
						<el-select v-model="add.type" placeholder="请选择">
						 	<el-option v-for="item in options" :key="item.roleId" :label="item.roleName" :value="item.roleId"></el-option>
						</el-select><br /><br />
						
						<span class="spanClassT"><span class="aKey">*</span>用户名：</span>
						<el-input :disabled="false" v-model="add.userAlias" clearable placeholder="请输入内容"></el-input><br /><br />
								
						<span class="spanClassT"><span class="aKey">*</span>绑定手机：</span>
						<el-input :disabled="false" v-model="add.phoneNum" clearable placeholder="请输入内容"></el-input><br /><br />
						
						<span class="spanClassT">绑定邮箱：</span>
						<el-input :disabled="false" v-model="add.email" clearable placeholder="请输入内容"></el-input><br /><br />
								
						<span class="spanClassT"><span class="aKey">*</span>密码：</span>
						<el-input :disabled="false" type = 'password' v-model="add.password" clearable placeholder="请输入内容"></el-input><br /><br />
								
						<span class="spanClassT"><span class="aKey">*</span>确认密码：</span>
						<el-input :disabled="false" type = 'password' v-model="add.repeatPSD" clearable placeholder="请输入内容"></el-input>
					</el-col>
					<el-col :span="12" v-if="add.type==5">
						<span class="spanClassT"><span class="aKey">*</span>经销商名称：</span>
						<el-input :disabled="false" v-model="addDealers.customerName" clearable placeholder="请输入内容"></el-input><br /><br />
								
						<span class="spanClassT"><span class="aKey">*</span>官方电话：</span>
						<el-input :disabled="false" v-model="addDealers.customerPhone" clearable placeholder="请输入内容"></el-input><br /><br />
						
						<span class="spanClassT"><span class="aKey">*</span>公共邮箱：</span>
						<el-input :disabled="false" v-model="addDealers.semail" clearable placeholder="请输入内容"></el-input><br /><br />
								
						<span class="spanClassT"><span class="aKey">*</span>所属地区：</span>
						<el-input :disabled="false" v-model="addDealers.area" clearable placeholder="请输入内容"></el-input><br /><br />
								
						<span class="spanClassT"><span class="aKey">*</span>详细地址：</span>
						<el-input :disabled="false" v-model="addDealers.address" clearable placeholder="请输入内容"></el-input>
					</el-col>
				</el-row>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.add = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="addClick">提交</el-button>
			</div>
		</el-dialog>-->
		<!-- <el-dialog title="绑定卡号" :visible.sync="universal.cardListshow">
					<div>
							<span class="spanClassT">客户编码：</span>
							<el-input :disabled="true" v-model="cardListshow.dealerId" clearable placeholder="请输入内容"></el-input><br /><br />

							<span class="spanClassT">客户名称：</span>
							<el-input :disabled="true" v-model="cardListshow.customerName" clearable placeholder="请输入内容"></el-input><br /><br />

							<span class="spanClassT">官方电话：</span>
							<el-input :disabled="true" v-model="cardListshow.customerPhone" clearable placeholder="请输入内容"></el-input><br /><br />

							<span class="spanClassT">公共邮箱：</span>
							<el-input :disabled="true" v-model="cardListshow.email" clearable placeholder="请输入内容"></el-input><br /><br />

							<span class="spanClassT">区域：</span>
							<el-input :disabled="true" v-model="cardListshow.area" clearable placeholder="请输入内容"></el-input><br /><br />
							<span class="spanClassT">详细地址：</span>
							<el-input :disabled="true" v-model="cardListshow.address" clearable placeholder="请输入内容"></el-input><br /><br />

							<span class="spanClassT"><span class="aKey">*</span>设备卡号：</span>
							<el-input v-model="cardListshow.cardid" clearable placeholder="请输入内容"></el-input><br /><br />
					</div>
					<div slot="footer" class="dialog-footer impofooter">
						<el-button type="success" class="oyButton" @click="hiedclickno">取消</el-button>
						<el-button type="success" class="oyButton" @click="changecardclick(cardListshow)">绑定</el-button>
					</div>
		</el-dialog> -->
		<el-dialog title="查看" :visible.sync="universal.look">
					<div class="totalcard">
						<div class="leftcard">
							<!-- <div class="grid-content">客户编码：</div><div class="grid-contents">{{eft.devParaSn}}</div>
							<div class="grid-content">客户名称：</div><div class="grid-contents">{{eft.userAlias}}</div>
							<div class="grid-content">官方电话：</div><div class="grid-contents">{{eft.phoneNum}}</div>
							<div class="grid-content">公共邮箱：</div><div class="grid-contents">{{eft.email}}</div>
							<div class="grid-content">区域：</div><div class="grid-contents">{{eft.area}}</div>
							<div class="grid-content">详细地址：</div><div class="grid-contents">{{eft.address}}</div> -->
							
							<span class="spanClassT">客户编码：</span>
							<el-input :disabled="true" v-model="look.dealerId" clearable placeholder="请输入内容"></el-input><br /><br />

							<span class="spanClassT">客户名称：</span>
							<el-input :disabled="true" v-model="look.customerName" clearable placeholder="请输入内容"></el-input><br /><br />

							<span class="spanClassT">官方电话：</span>
							<el-input :disabled="true" v-model="look.customerPhone" clearable placeholder="请输入内容"></el-input><br /><br />

							<span class="spanClassT">公共邮箱：</span>
							<el-input :disabled="true" v-model="look.email" clearable placeholder="请输入内容"></el-input><br /><br />

							<span class="spanClassT">区域：</span>
							<el-input :disabled="true" v-model="look.area" clearable placeholder="请输入内容"></el-input><br /><br />
							<span class="spanClassT">详细地址：</span>
							<el-input :disabled="true" v-model="look.address" clearable placeholder="请输入内容"></el-input><br /><br />
							<span class="spanClassT wespan"><span class="aKey">*</span>IC卡号：</span>
							<el-input v-model="look.cardid" clearable placeholder="请输入内容" class="inputbox"></el-input><br /><br />
						</div>	
						<div class="rightcard">
							<template>
							<el-table
								:data="tableDatabox"
								style="width: 100%"
								max-height="320">
								<el-table-column
								prop="cardId"
								label="IC卡号"
								width="120">
								</el-table-column>
								<el-table-column
								prop="account"
								label="客户名称"
								width="100">
								</el-table-column>
								<el-table-column
								fixed="right"
								label="操作"
								width="120">
								<template slot-scope="scope">6  16 26  33 35  4  8
									<el-button
									@click.native.prevent="deleteRow(scope.row, tableDatabox)"
									type="text"
									size="small">
									移除
									</el-button>
								</template>
								</el-table-column>
							</el-table>
							</template>
						</div>
					</div>
					<div slot="footer" class="dialog-footer impofooter">
						<el-button type="success" class="oyButton" @click="hiedclickno">取消</el-button>
						<el-button type="success" class="oyButton" @click="changecardclick(look)">绑定</el-button>
					</div>
		</el-dialog>
		<!-- <el-dialog title="计费规则" :visible.sync="universal.rules" v-if="signrule==1">
			<div>
				<span class="spanClass">一：</span>
				<el-input v-model="rules.one" clearable class="inputrule"></el-input>--<el-input v-model="rules.two" clearable class="inputrule"></el-input>&nbsp;吨&nbsp;&nbsp;&nbsp;<el-input v-model="rules.three" clearable class="inputrule"></el-input>元<br /><br />
				<span class="spanClass">二：</span>
				<el-input v-model="rules.four" clearable class="inputrule"></el-input>--<el-input v-model="rules.five" clearable class="inputrule"></el-input>&nbsp;吨&nbsp;&nbsp;&nbsp;<el-input v-model="rules.six" clearable class="inputrule"></el-input>元<br /><br />
				<span class="spanClass">三：</span>
				<el-input v-model="rules.seven" clearable class="inputrule"></el-input>--<el-input v-model="rules.eight" clearable class="inputrule"></el-input>&nbsp;吨&nbsp;&nbsp;&nbsp;<el-input v-model="rules.nine" clearable class="inputrule"></el-input>元<br /><br />
			</div>
			<!-- <div>
					<span class="spanClassT">客户编码：</span>
							<el-input v-model="rules.dealerId" clearable placeholder="请输入内容"></el-input><br /><br />
			</div> -->
			<!-- <div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="hideclickrules">取消</el-button>
				<el-button type="success" class="oyButton" @click="changeClickrules(rules)">确认</el-button>
			</div>
		</el-dialog> --> 
		<el-dialog title="计费规则" :visible.sync="universal.rules" v-if="signrule==0">
			<div>
				<span class="spanClass">一：</span>
				<el-input v-model="tableData1.a" clearable class="inputrule"></el-input>--<el-input v-model="tableData1.b" clearable class="inputrule"></el-input>&nbsp;吨&nbsp;&nbsp;&nbsp;<el-input v-model="tableData1.c" clearable class="inputrule"></el-input>元<br /><br />
				<span class="spanClass">二：</span>
				<el-input v-model="tableData1.d" clearable class="inputrule"></el-input>--<el-input v-model="tableData1.e" clearable class="inputrule"></el-input>&nbsp;吨&nbsp;&nbsp;&nbsp;<el-input v-model="tableData1.f" clearable class="inputrule"></el-input>元<br /><br />
				<span class="spanClass">三：</span>
				<el-input v-model="tableData1.g" clearable class="inputrule"></el-input>--<el-input v-model="tableData1.h" clearable class="inputrule"></el-input>&nbsp;吨&nbsp;&nbsp;&nbsp;<el-input v-model="tableData1.i" clearable class="inputrule"></el-input>元<br /><br />
			</div>
			<!-- <div>
					<span class="spanClassT">客户编码：</span>
							<el-input v-model="rules.dealerId" clearable placeholder="请输入内容"></el-input><br /><br />
			</div> -->
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="hideclickrules">取消</el-button>
				<el-button type="success" class="oyButton" @click="ruleschange(rules)">修改</el-button>
			</div>
		</el-dialog>
		<el-dialog title="修改" :visible.sync="universal.change">
			<el-row>
				<el-col :span="12">
					<span class="spanClassT">经销商编码：</span>
					<el-input :disabled="true" v-model="change.dealerId" clearable placeholder="请输入内容"></el-input><br /><br />
					
					<span class="spanClassT"><span class="aKey">*</span>经销商名称：</span>
					<el-input :disabled="false" v-model="change.customerName" clearable placeholder="请输入内容"></el-input><br /><br />
					
					<span class="spanClassT"><span class="aKey">*</span>官方电话：</span>
					<el-input :disabled="false" v-model="change.customerPhone" clearable placeholder="请输入内容"></el-input><br /><br />
					
					
				</el-col>
				<el-col :span="12">
					<span class="spanClassT"><span class="aKey">*</span>公共邮箱：</span>
					<el-input :disabled="false" v-model="change.emails" clearable placeholder="请输入内容"></el-input><br /><br />
					
					<span class="spanClassT"><span class="aKey">*</span>所属地区：</span>
					<el-input :disabled="false" v-model="change.area" clearable placeholder="请输入内容"></el-input><br /><br />
					
					<span class="spanClassT"><span class="aKey">*</span>详细地址：</span>
					<el-input :disabled="false" v-model="change.address" clearable placeholder="请输入内容"></el-input>
				</el-col>
				
			</el-row>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="hideclick">取消</el-button>
				<el-button type="success" class="oyButton" @click="changeClick(change)">修改</el-button>
			</div>
		</el-dialog>
		
		<el-dialog title="权限" :visible.sync="universal.jurisdiction">
			<div>
				<el-checkbox-group class="checkboxMarginLeft" v-model="checkbox.checkedCities" @change="handleCheckedCitiesChange">
					<div v-for="activeA in this.$store.state.activeName">
						<el-checkbox  class="checkboxMarginTop"  @change="allClick(activeA.classA.menuId)" :label="activeA.classA.menuId" :key="activeA.classA.menuId">{{activeA.classA.menuName}}</el-checkbox><br />
						<el-checkbox class="checkboxMarginLeft" v-for="activeB in activeA.classB" :label="activeB.menuId" :key="activeB.menuId">{{activeB.menuName}}</el-checkbox><br /><br />
					</div>
				</el-checkbox-group>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.jurisdiction = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="updataClick">保存</el-button>
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
				tableDatabox:[],
				checkbox:{
					checkedCities:[]
				},
				cardListshow:{
					dealerId:'',
					customerName:'',
					customerPhone:"",
					email:"",
					cardid:'',
					area:'',
					address:''
				},
				rules:{
					one:'',
					two:'',
					three:'',
					four:'',
					five:'',
					six:'',
					seven:'',
					eight:'',
					nine:'',
					dealerId:''
				},
				look:{
					dealerId:'',
					customerName:'',
					customerPhone:"",
					email:"",
					cardid:'',
					area:'',
					address:''
				},
				signrule:'',
				checked:true,
				universal:{
					add:false,
					change:false,
					jurisdiction:false,
					next:false,
					cardListshow:false,
					look:false,
					rules:false
				},
				paging:{
					page:1,
					pageSize:10,
					total:0
				},
				tableData1:{
					a:'',
					b:'',
					c:'',
					d:'',
					e:'',
					f:'',
					g:'',
					h:'',
					i:'',
					id1:'',
					id2:'',
					id3:''
				},
				search:{
					dealerId:'',
					customerName:''
				},
				/*add:{
					userName:'',
					userAlias:'',
					userName:'',
					password:'',
					repeatPSD:'',
					phoneNum:'',
					email:'',
					type:2
				},
				addDealers:{
					customerName:'',
					customerPhone:'',
					semail:'',
					area:'',
					address:''
				},*/
				change:{
					userId:'',
					roleName:'',
					userName:'',
					userAlias:'',
					phoneNum:'',
					email:'',
					dealerId:'',
					customerName:'',
					customerPhone:'',
					emails:'',
					area:'',
					address:''
				},
				tableData:[],
				eft:[],
				options:[],
				dataUniversal:this.$store.state.activeName,
				updataUserId:''
			}
		},
		mounted: function() {
			document.title=this.$route.meta.title;
			this.searchClick();
			this.downList();
			console.log(this.dataUniversal)
		},
		methods: {
			ruleschange(row){
				console.log(this.tableData1)
				console.log(this.tableData1.a)
				console.log(this.tableData1.b)
				if(this.tableData1.a>this.tableData1.b||this.tableData1.d>this.tableData1.e||this.tableData1.g>this.tableData1.h){
					this.$message({
						message: '后面吨数不能小于前面',
						type: 'error'
					});
				}else{
					let data={
					billings:"[{level:'一',start:"+this.tableData1.a+",end:"+this.tableData1.b+",rate:"+this.tableData1.c+",dealer:"+row.dealerId+",id:"+this.tableData1.id1+"},{level:'二',start:"+this.tableData1.d+",end:"+this.tableData1.e+",rate:"+this.tableData1.f+",dealer:"+row.dealerId+",id:"+this.tableData1.id2+"},{level:'三',start:"+this.tableData1.g+",end:"+this.tableData1.h+",rate:"+this.tableData1.i+",dealer:"+row.dealerId+",id:"+this.tableData1.id3+"}]"
					}
					console.log(data)
					let that=this;
					axios({
						method:'post',
						url:this.$store.state.http+'/billing/update',
						data:Qs.stringify(data)
					}).then(function(message) {
						console.log(message)
						if(message.data.resCode==0){
							that.$message({
								message: '修改成功',
								type: 'success'
							});
							that.universal.rules=false;
						}else{
							that.searchClick();
							that.$message({
								message: '修改失败',
								type: 'error'
							});
						}
					})
				}
				
			},
			changeClickrules(row){
				console.log(row)
				if(this.rules.four==undefined){
					this.rules.four=0
				}
				if(this.rules.five==undefined){
					this.rules.five=0
				}
				if(this.rules.six==undefined){
					this.rules.six=0
				}
				if(this.rules.seven==undefined){
					this.rules.seven=0
				}
				if(this.rules.eight==undefined){
					this.rules.eight=0
				}
				if(this.rules.nine==undefined){
					this.rules.nine=0
				}
				let data={
					billings:"[{level:'一',start:"+this.rules.one+",end:"+this.rules.two+",rate:"+this.rules.three+",dealer:"+row.dealerId+"},{level:'二',start:"+this.rules.four+",end:"+this.rules.five+",rate:"+this.rules.six+",dealer:"+row.dealerId+"},{level:'三',start:"+this.rules.seven+",end:"+this.rules.eight+",rate:"+this.rules.nine+",dealer:"+row.dealerId+"}]"
					
				}
				console.log(data)
				let that=this;
				axios({
					method:'post',
					url:this.$store.state.http+'/billing/add',
					data:Qs.stringify(data)
				}).then(function(message) {
					that.$message({
						message: '确认成功',
						type: 'success'
				    });
				})
				that.universal.rules=false;
			},
			rulesClick(row){
				this.universal.rules=true;
				this.rules = Object.assign({},row);
				let that=this;
				let data={
					dealer:row.dealerId
				}
				console.log(data)
				console.log(12234)
				axios({
					method:'post',
					url:this.$store.state.http+'/billing/find',
					data:Qs.stringify(data)
				}).then(function(message) {
					if(message.data.resCode==0){
						if(message.data.result==''){
							that.signrule=1
							console.log(message);
							// that.tableData1=message.data.result
						}else{
							that.signrule=0
							console.log(message);
								that.tableData1.a=message.data.result[0].start
								that.tableData1.b=message.data.result[0].end
								that.tableData1.c=message.data.result[0].rate
								that.tableData1.id1=message.data.result[0].id
								that.tableData1.d=message.data.result[1].start
								that.tableData1.e=message.data.result[1].end
								that.tableData1.f=message.data.result[1].rate
								that.tableData1.id2=message.data.result[1].id
								that.tableData1.g=message.data.result[2].start
								that.tableData1.h=message.data.result[2].end
								that.tableData1.i=message.data.result[2].rate
								that.tableData1.id3=message.data.result[2].id
							
						}
						
					}else if(message.data.resCode==1){
						that.$message({
					        	message: '请勿重复添加',
					        	type: 'error'
					    });
					}
					
				})
			},
			deleteRow(row){
				let that = this;
				this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					axios({
						method:'post',
						url:this.$store.state.http +'/pecard/delete',
						data:Qs.stringify({
							id:row.id
						})
					}).then(function(message){
						console.log(message.data)
						if(message.data.resCode==0){
							console.log(row)
							let datas={
									account:row.account
								}
								console.log(datas)
								axios({
									method:'post',
									url:that.$store.state.http+'/pecard/find',
									data:Qs.stringify(datas)
								}).then(function(message) {
									console.log(message);
									that.tableDatabox=message.data.p
								})
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
			hideclickrules(){
				this.universal.rules=false;
			},
			hiedclickno(){
				this.universal.look=false;
			},
			abcd(row){
				this.universal.look=true;
				this.look = Object.assign({},row);
				let that=this;
				axios({
					method:'post',
					url:this.$store.state.http +'/customer/selCustById',
					data:Qs.stringify({
						userId:row.userId
					})
				}).then(function(message){
					if(message.data.resCode==0){
						console.log(message)
						that.eft=message.data.result
					}
				})
				let data={
					account:row.customerName,
				}
				console.log(data)
				axios({
					method:'post',
					url:this.$store.state.http+'/pecard/find',
					data:Qs.stringify(data)
				}).then(function(message) {
					console.log(message);
					that.tableDatabox=message.data.p
				})
				
			},
			changecardclick(row){
				if(this.look.cardid == null){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				let that=this;
				let data={
					cardId:row.cardid,
					account:row.customerName,
				}
				data.dealer=sessionStorage.getItem("dealer");
				// 动过
				if(data.dealer==0){
					data.dealer=sessionStorage.getItem('orderDealers')
				}
				console.log(data)
				axios({
					method:'post',
					url:this.$store.state.http+'/pecard/bind',
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
				that.universal.look=false;
				that.look.cardid=''
			},
			// changeGroupShow(row){
				
			// },
			cardlist(row){
				this.universal.cardListshow=true;
				this.cardListshow = Object.assign({},row);
			},
			hideclick(){
				this.universal.change = false
			},
			indexMethod(index) {
        		return index + (this.paging.page-1)*this.paging.pageSize+1;
    		},
			updataClick(){
				console.log(this.checkbox.checkedCities.join(','))
				let that = this;
				axios({
					method:'post',
					url:this.$store.state.http +'/user/update',
					data:Qs.stringify({
						permissions:this.checkbox.checkedCities.join(','),
						userId:this.updataUserId
					})
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						that.$message({
				        	message: '保存成功',
				        	type: 'success'
				        });
					}else{
						that.$message({
				        	message: '保存失败',
				        	type: 'error'
				        });
					}
				})
				this.universal.jurisdiction = false;
			},
		    handleCheckedCitiesChange(value) {
		    	/*console.log(value)*/
		    	/*console.log(this.$store.state.sideList)*/
		    	let that = this;
		    	let arr = value;
		    	let list = this.$store.state.sideList;
		    	let obj = this.$store.state.activeName;
		    	for (var i = 0; i < arr.length; i++) {/*选中二级菜单时同时选择对应的一级菜单*/
		    		for (var j = 0; j < list.length; j++) {
		    			if(arr[i]==list[j].menuId){
		    				if(list[j].menuAssociated!="0"){
		    					that.checkbox.checkedCities.push(list[j].menuAssociated)
		    				}
		    			}
		    		}
		    	}
		    	for(let i=0;i<obj.length;i++){/*取消所有二级菜单时同时取消对应的一级菜单*/
		    		let cs = obj[i].classA.menuId;
		    		for (let j=0;j<arr.length;j++) {
		    			for (let k = 0; k < obj[i].classB.length; k++) {
		    				if(obj[i].classB[k].menuId==arr[j]){
		    					cs = '';
		    				}
		    			}
		    		}
		    		let index = that.checkbox.checkedCities.indexOf(cs);
		    		if (index > -1) {
					    that.checkbox.checkedCities.splice(index, 1);
					}
		    	}
		    	that.checkbox.checkedCities = Array.from(new Set(that.checkbox.checkedCities));
		    	console.log(that.checkbox.checkedCities)
		    },
			handleSizeChange(val){
				this.paging.pageSize = val;
				this.searchClick();
			},
			handleCurrentChange(val){
				this.searchClick();
			},
			addClick(){},
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
						url:this.$store.state.http +'/user/delete',
						data:Qs.stringify({
							userId:row.userId
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
				let that = this;
				that.change = Object.assign({},row);
				that.universal.change = true;
				// console.log(row)
				// axios({
				// 	method:'post',
				// 	url:this.$store.state.http +'/customer/selCustById',
				// 	data:Qs.stringify({
				// 		userId:row.userId
				// 	})
				// }).then(function(message){
				// 	console.log(message.data)
				// 	if(message.data.resCode==0){
				// 		that.change = Object.assign({},row);
				// 		console.log(that.change)
				// 		console.log(1234)
				// 		that.universal.change = true;
				// 	}else{
				// 		that.$message({
				//         	message: '添加失败',
				//         	type: 'error'
				//         });
				// 	}
				// })
				
			},
			changeClick(){
				if(this.change.customerName==''||this.change.customerPhone==''||this.change.emails==''||this.change.area==''||this.change.address==''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				let dataA = {
					userId:this.change.userId,
					userAlias:this.change.userAlias,
					phoneNum:this.change.phoneNum,
					email:this.change.email
				}
				
				let dataB = {
					dealerId:this.change.dealerId,
					customerName:this.change.customerName,
					customerPhone:this.change.customerPhone,
					emails:this.change.emails,
					area:this.change.area,
					address:this.change.address
				}
				console.log(dataB)
				let that = this;
				// axios({
				// 	method:'post',
				// 	url:this.$store.state.http +'/user/update',
				// 	data:Qs.stringify(dataA)
				// }).then(function(message){
				// 	console.log(message.data)
				// 	if(message.data.resCode==0){
				// 		axios({
				// 			method:'post',
				// 			url:this.$store.state.http +'/customer/reset',
				// 			data:Qs.stringify(dataB)
				// 		}).then(function(message){
				// 			console.log(message.data)
				// 			if(message.data.resCode==0){
				// 				that.searchClick();
				// 				that.$message({
				// 		        	message: '修改成功',
				// 		        	type: 'success'
				// 		        });
				// 			}else{
				// 				that.$message({
				// 		        	message: '修改失败',
				// 		        	type: 'error'
				// 		        });
				// 			}
				// 		})
				// 	}else{
				// 		that.$message({
				//         	message: '修改失败',
				//         	type: 'error'
				//         });
				// 	}
				// })
					axios({
							method:'post',
							url:this.$store.state.http +'/customer/reset',
							data:Qs.stringify(dataB)
						}).then(function(message){
							console.log(message.data)
							if(message.data.resCode==0){
								that.searchClick();
								that.$message({
						        	message: '修改成功',
						        	type: 'success'
						        });
							}else{
								that.$message({
						        	message: '修改失败',
						        	type: 'error'
						        });
							}
						})
				that.universal.change = false;
			},
			jurisdictionShow(row){
				let that = this;
				this.updataUserId = row.userId;
				axios({
					method:'post',
					url:this.$store.state.http +'/user/selecByUserId',
					data:Qs.stringify({
						userId:row.userId
					})
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						if(message.data.result=='暂时无权限分配'){
							that.checkbox.checkedCities = [];
						}else{
                            that.checkbox.checkedCities = message.data.result.split(',');
						}
					}else{
						that.checkbox.checkedCities = [];
					}
				})
				console.log(row)
				this.universal.jurisdiction = true;
			},
			allClick(id){
		    	console.log(this.$store.state.activeName)
		    	console.log(id);
		    	let that = this;
		    	let cs = that.checkbox.checkedCities.indexOf(id);
		    	console.log(cs)
		    	let pa;
		    	for (let i = 0; i < that.$store.state.activeName.length; i++) {
		    		if(that.$store.state.activeName[i].classA.menuId == id){
		    			pa = that.$store.state.activeName[i];
		    		}
		    	}
		    	console.log(pa);
		    	if (cs > -1) {
		    		for (let i = 0; i < pa.classB.length; i++) {
			    		that.checkbox.checkedCities.push(pa.classB[i].menuId);
			    		console.log(pa.classB[i].menuId)
			    	}
		    	}else{
		    		for (let i = 0; i < pa.classB.length; i++) {
			    		let index = that.checkbox.checkedCities.indexOf(pa.classB[i].menuId);
			    		if (index > -1) {
						    that.checkbox.checkedCities.splice(index, 1);
						}
			    	}
		    	}
		    	/*console.log(that.checkbox.checkedCities)*/
		    },
			searchClick(){
				let data = {
					page:this.paging.page,
					pageSize:this.paging.pageSize,
					type:5
				};
				if(this.search.dealerId){
					data.dealerId = this.search.dealerId 
				}
				if(this.search.customerName){
					data.customerName = this.search.customerName
				}
				data.userId=sessionStorage.getItem('userId');
				data.dealer=sessionStorage.getItem('dealer');
				// 动过
				if(data.dealer==0){
					data.dealer=sessionStorage.getItem('orderDealers')
				}
				console.log(data)
				let that = this;
				that.tableData = [];
				axios({
					method:'post',
					url:this.$store.state.http +'/user/listCustom',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						that.paging.total = message.data.count;
						that.tableData = message.data.result;
					}else{
						that.tableData = [];
					}
				})
			},
			downList(){
				let that = this;
				axios({
					method:'post',
					url:this.$store.state.http +'/role/findAll'
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						/*console.log(message.data.result)*/
						that.options = message.data.result;
						that.options.shift();
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
	#customerList{padding: 20px;}
	
	/*.textareaWidth{width: 200px;}*/
	.iconall{background: #409EFF!important}
	.leftcard{float: left;width: 50%;}
.rightcard{float: right;width: 50%;height: 95%;}
.totalcard{height: 350px;}
.impofooter{text-align: left;}
.grid-content,.grid-contents{
	font-size: 15px;
    line-height: 40px;
	float: left;
	width: 30%;
	height: 40px;
	text-align: right;
}
.grid-contents{
	width: 70%;
	float: right;
	text-align: left;
}

.aly{background: #F56C6C!important;}
.inputrule{width: 100px;}
/* .none{display: none;} */
</style>