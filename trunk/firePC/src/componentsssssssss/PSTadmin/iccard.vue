<template>
	<div id="PSTlist">
		<div class="header">
			<div class="headerTitle">
				<span>IC卡</span>
			</div>
		</div>
		<div class="select">
			<!-- <span>分组：</span> -->
			<!--<el-input v-model="store.controName" clearable placeholder="请输入内容"></el-input>-->
			<!-- <el-select v-model="search.conGroup" placeholder="请选择">
				<el-option label="未选择" value="0"></el-option>
		    	<el-option v-for="(item,index) in this.$store.state.conGroupList" :key="item.groupId" :label="item.gropuName" :value="item.groupId"></el-option>
			</el-select> -->
			<!-- <span>设备ID：</span>
			<el-input v-model="search.Id" clearable placeholder="请输入内容"></el-input> -->
			<span>设备IC卡：</span>
			<el-input v-model="search.cardId" clearable placeholder="请输入内容"></el-input>
			<span>客户账号：</span>
			<el-input v-model="search.deviceType" clearable placeholder="请输入内容"></el-input>
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
			<el-button type="success" class="oyButton" icon="el-icon-plus" @click='universal.add = true'>添加</el-button>
			<!-- <el-button class="oyButton" type="success" @click='searchstatus'>查询状态</el-button> -->
			<!-- <el-button class="oyButton" type="success" @click='reg'>注册设备</el-button> -->
			<!--<el-button class="oyButton" type="success" icon="el-icon-download" @click=''>导出</el-button>-->
		</div>
		<el-dialog title="新增" :visible.sync="universal.add">
			<div>
				<!-- <span class="spanClass">设备ID：</span>
				<el-input v-model="add1.Id" clearable placeholder="请输入内容"></el-input><br /><br /> -->

				<!-- <span class="spanClass">账户名：</span> -->
				<span class="spanClassT"><span class="aKey">*</span>设备IC卡：</span>
				<el-input v-model="add1.cardId" clearable placeholder="请输入内容"></el-input><br /><br />

				<!-- <span class="spanClass">手机号码：</span> -->
				

				<!-- <span class="spanClass">用户密码：</span> -->
				
				
				<span class="spanClassT">设备类型：</span>
				<!-- <el-input v-model="add1.weChatUsePhone" clearable placeholder="请输入内容"></el-input><br /><br /> -->
				<el-select v-model="add1.deviceType" placeholder="请选择">
					<el-option v-for="item in levelList" :key="item.value" :value="item.label"></el-option>
				</el-select><br /><br /> 

				<span class="spanClassT"><span class="aKey">*</span>开始时间：</span>
				<!-- <el-input v-model="add1.createTime" clearable placeholder="请输入内容"></el-input><br /><br /> -->
				<el-date-picker
				v-model="add1.startTime"
				type="date"
				placeholder="选择日期">
				</el-date-picker><br /><br />

				<span class="spanClassT"><span class="aKey">*</span>结束时间：</span>
				<!-- <el-input v-model="add1.createTime" clearable placeholder="请输入内容"></el-input><br /><br /> -->
				<el-date-picker
				v-model="add1.endTime"
				type="date"
				placeholder="选择日期">
				</el-date-picker><br /><br />
				<!-- <span class="spanClass">用户姓名：</span> -->
				<!-- <span class="spanClassT"><span class="aKey">*</span>用户姓名：</span>
				<el-input v-model="add1.weChatFullName" clearable placeholder="请输入内容"></el-input><br /><br />

				<!-- <span class="spanClass">用户类型：</span> -->
				<!-- <span class="spanClassT"><span class="aKey">*</span>用户类型：</span>
				<el-input v-model="add1.weChatType" clearable placeholder="请输入内容"></el-input><br /><br /> -->

				<!-- <span class="spanClass">设备型号：</span>
				<el-input v-model="add1.deviceId" clearable placeholder="请输入内容"></el-input><br /><br /> -->
				<!-- <span class="spanClass">管理员分配：</span>
				<! <el-input v-model="add1.allot" clearable placeholder="请输入内容"></el-input><br /><br /> -->
				<!-- <el-select  v-model="level" placeholder="请选择">
					<el-option v-for="item in levelList" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select> --> 

				<!-- <el-input class="textareaWidth" type="textarea" :rows="5" v-model="add.roleDescribe" clearable placeholder="请输入内容"></el-input> -->
			 </div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.add = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="addClick">添加</el-button>
			</div>
		</el-dialog> 
		<!-- <el-dialog title="发送命令" :visible.sync="universal.send">
			<div>
				<span class="spanClass">设备ID：</span>
				<el-input v-model="send.deviceId" clearable placeholder="请输入内容"></el-input><br /><br />

				<span class="spanClass">设备名称：</span>
				<el-input v-model="send.title" clearable placeholder="请输入内容"></el-input><br /><br />

				<! <span class="spanClass">是否响应：</span>
				<el-input v-model="send.qos" clearable placeholder="请输入内容"></el-input><br /><br /> -->

<!-- 
				<span class="spanClass">是否响应：</span>
				<el-select v-model="send.qos" placeholder="请选择">
    				<el-option :value="0"></el-option>
					<el-option :value="1"></el-option>
				</el-select><br /><br />

				<span class="spanClass">有效时间：</span>
				<el-input v-model="send.timeOut" clearable placeholder="请输入内容"></el-input><br /><br />
			</div>
			 <div slot="footer" class="dialog-footer">
					<el-button type="success" class="oyButton" @click="universal.send = false">取消</el-button>
					<el-button type="success" class="oyButton" @click="changeorder(send)">发送命令</el-button>
				</div>
		</el-dialog>  -->
		<el-dialog title="绑定" :visible.sync="universal.allot">
			<div>
				<span class="spanClass">设备IC卡：</span>
				<el-input v-model="allot1.iccId" clearable placeholder="请输入内容" :disabled="true"></el-input><br /><br />

				<span class="spanClass">设备类型：</span>
				<el-input v-model="allot1.deviceType" clearable placeholder="请输入内容" :disabled="true"></el-input><br /><br />

				<span class="spanClass">开始时间：</span>
				<el-input v-model="allot1.startTime" clearable placeholder="请输入内容" :disabled="true"></el-input><br /><br />

				<span class="spanClass">结束时间：</span>
				<el-input v-model="allot1.endTime" clearable placeholder="请输入内容" disabled="true"></el-input><br /><br />
						
				<!-- <span class="spanClass">设备ID：</span> -->
				<span class="spanClassT spanClassTL"><span class="aKey">*</span>设备ID：</span>
				<!-- <el-input v-model="add1.allot" clearable placeholder="请输入内容"></el-input><br /><br /> -->
				<!-- <el-input v-model="allot1.weChatUseNames" clearable placeholder="请输入内容"></el-input><br /><br /> -->
				<el-button type="text" @click="open">选择</el-button>
						

				<!-- <el-input class="textareaWidth" type="textarea" :rows="5" v-model="add.roleDescribe" clearable placeholder="请输入内容"></el-input> -->
			 </div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.allot = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="allotchange(allot1)">绑定</el-button>
			</div>
		</el-dialog>
		<el-dialog title="查看" :visible.sync="universal.change">
			<div>
				<el-table class='oyTable' :data="idtable" style="width: 100%">
				<!-- <el-table-column type="selection" width="55" class="selection" prop='uuid' :selectable='checkboxInit' @selection-change="changeFun"></el-table-column> -->
				<el-table-column type="index" :index="indexMethod" label="序号" width="100"> </el-table-column>
				<el-table-column label="设备卡ID">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{scope.row.iccId}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.iccId}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="绑定设备">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.deviceId }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.deviceId}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				

				<el-table-column prop="" label="操作" width="">
					<template slot-scope="scope">
						<!--<el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-search" @click="seeClick(scope.row)" ></i>
						</el-tooltip>-->
						
						
						
						<!-- <el-tooltip class="item" effect="dark" content="修改" placement="top">
    						<i class="icon-change el-icon-edit" @click="changeshow(scope.row)"></i>
						</el-tooltip> -->
						
						<!-- <el-tooltip class="item" effect="dark" content="修改分组" placement="top">
    						<i class="icon-menu el-icon-menu" @click="changeGroupShow(scope.row)"></i>
						</el-tooltip> -->
						<!-- <el-button icon="el-icon-search" circle></el-button> -->
						<!-- <el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-export" @click="changeGroupShow(scope.row)" ></i>
						</el-tooltip> -->
						<!-- <el-tooltip v-if="scope.row.status==1" class="item" effect="dark" content="分配" placement="top">
    						<i class="icon-unclick el-icon-menu"></i>
						</el-tooltip> -->

						<!-- <el-tooltip v-else class="item" effect="dark" content="分配" placement="top">
    						<i class="icon-menu el-icon-menu" @click="allot(scope.row)" ></i>
						</el-tooltip> -->

						<el-tooltip class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-delete el-icon-delete" @click="deleteid(scope.row)"></i>
						</el-tooltip>

						<!-- <el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-search" @click="changeGroupShow(scope.row)" ></i>
						</el-tooltip>

						<el-tooltip class="item" effect="dark" content="修改地址" placement="top">
    						<i class="icon-See el-icon-view" @click="changeShowmap(scope.row)" ></i>
						</el-tooltip>

						<el-tooltip class="item" effect="dark" content="IC卡绑定" placement="top">
    						<i class="icon-See el-icon-mobile-phone" @click="cardlist(scope.row)" ></i>
						</el-tooltip> -->

					</template>
				</el-table-column>
			</el-table>
			 </div>
			<!-- <div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="hideclick">取消</el-button>
				<el-button type="success" class="oyButton" @click="changeclick(change)">修改</el-button>
			</div> -->
		</el-dialog>
		<el-dialog title="选择" :visible.sync="universal.look">
			<div>
				
				<!-- <el-button type="primary" size="medium" @click="speedupData"><i class="el-icon-time"> 全速</i></el-button> -->
				<el-table class='oyTable' :data="ICData" style="width: 100%;margin-left: 10px;"  ref="multipleTable" @selection-change="handleSelectionChange">
					
					<el-table-column type="selection" width="35" ></el-table-column>
					
 

					<!-- <el-table-column type="selection" width="55" class="selection" prop='uuid' :selectable='checkboxInit' @selection-change="changeFun"></el-table-column> -->
					<el-table-column label="设备ID" width="" v-model="multipleSelection"  prop="deviceId">
						<template slot-scope="scope">
							<el-popover trigger="hover" placement="top">
								<p class="TsMaxWidth">{{ scope.row.deviceId}}</p>
								<div slot="reference" class="name-wrapper">
									<div class="overflowHide">{{ scope.row.deviceId}}</div>
								</div>
							</el-popover>
						</template>
					</el-table-column>

					<el-table-column label="设备型号" width="">
						<template slot-scope="scope">
							<el-popover trigger="hover" placement="top">
								<p class="TsMaxWidth">{{ scope.row.deviceModel}}</p>
								<div slot="reference" class="name-wrapper">
									<div class="overflowHide">{{ scope.row.deviceModel}}</div>
								</div>
							</el-popover>
						</template>
					</el-table-column>

					<el-table-column label="设备类型" width="">
						<template slot-scope="scope">
							<el-popover trigger="hover" placement="top">
								<p class="TsMaxWidth">{{ scope.row.deviceType}}</p>
								<div slot="reference" class="name-wrapper">
									<div class="overflowHide">{{ scope.row.deviceType}}</div>
								</div>
							</el-popover>
						</template>
					</el-table-column>
					<!-- <el-table-column prop="" label="操作">
					<template slot-scope="scope"> -->
						<!--<el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-search" @click="seeClick(scope.row)" ></i>
						</el-tooltip>-->
						
						<!-- <el-tooltip class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-delete el-icon-delete" @click="deleteChild(scope.row)"></i>
						</el-tooltip>
						</template>
					</el-table-column> -->
				</el-table>
			 </div>
			 <div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="IChideclick">取消</el-button>
				<el-button type="success" class="oyButton" @click="ICclick()">确认</el-button>
			</div>
		</el-dialog>

		<div class="Content">
			<el-table class='oyTable' :data="tableData" style="width: 100%">
				<!-- <el-table-column type="index" :index="indexMethod" label="序号" width="100"> </el-table-column> -->
				
				<!-- <el-table-column label="设备ID">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.trafficCard }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.trafficCard }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column> -->
				
				<!--<el-table-column label="车牌号" width="120">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.carBrand }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.carBrand }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>-->
				
				<el-table-column label="设备IC卡">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{scope.row.cardId }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.cardId }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				<el-table-column label="客户账号">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.account }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.account}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				<!-- <el-table-column label="所属分组" width="100">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.gropuName }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.gropuName }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column> -->
				
				<el-table-column label="开始时间">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{(scope.row.startTime)}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{(scope.row.startTime)}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				<el-table-column label="结束时间">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{(scope.row.endTime)}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{(scope.row.endTime)}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<!-- <el-table-column label="设备坐标" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{scope.row.interval}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.interval}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column> -->
				
				
				
				<!-- <el-table-column label="用户姓名">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{scope.row.weChatFullName}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.weChatFullName}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="用户类型">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{scope.row.weChatType}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.weChatType}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column> -->
		
				<el-table-column prop="" label="操作" width="">
					<template slot-scope="scope">
						<!--<el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-search" @click="seeClick(scope.row)" ></i>
						</el-tooltip>-->
						
						<!-- <el-tooltip class="item" effect="dark" content="修改" placement="top">
    						<i class="icon-change el-icon-edit" @click="changeshow(scope.row)"></i>
						</el-tooltip> -->
						<!-- <el-tooltip v-if="scope.row.status==1" class="item" effect="dark" content="权限" placement="top">
    						<i class="icon-unclick el-icon-menu"></i>
						</el-tooltip> -->
						
						<!-- <el-tooltip class="item" effect="dark" content="绑定" placement="top">
    						<i class="icon-menu el-icon-menu" @click="allot(scope.row)" ></i>
						</el-tooltip> -->
						
						<el-tooltip class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
						</el-tooltip>

						<!-- <el-button icon="el-icon-search" circle></el-button> -->
						<!-- <el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-search" @click="changeshow(scope.row)" ></i>
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
			<el-pagination background @current-change="handleCurrentChange"  @size-change="handleSizeChange" :current-page.sync="paging.page":page-sizes="[1,2,3,10, 11, 12]" :page-size="paging.pageSize" layout="sizes, prev, pager, next, jumper,total" :total="paging.total"></el-pagination>
		</div>
		<router-view v-if="isRouterAlive"></router-view>
	</div>
</template>

<script>
	import Qs from 'qs'
	// import $ from 'jquery'
	import axios from 'axios'
	export default {
		provide(){
			return{
				reload:this.reload
			}
		},
		inject:['reload'],
		name: 'equipmentList',
		data() {
			return {
			isRouterAlive:true,
			formInline: {
				id: null,
				scene: '',
				project_name: '',
				submit_date: [new Date(),new Date()] ,
 
			},
			idtable:[],
			opencard:[],
			tableData5:[],
			multipleSelection:[],
				value1:"",
				levelList: [{
					value: '0',
					label: '管理卡'
				}, {
					value: '1',
					label: '用户卡'
				}],
				level: '0',
				deviceType: '0',
				add1:{
					deviceType:'',
					cardId:'',
					endTime:'',
					startTime:''
				},
				type1:{
					deviceType:""
				},
				li:[],
				added:"",
				send:{
					deviceId:'',
					title:'',
					timeOut:'',
					qos:''
				},
				cardList:[],
				change:{
					card:'',
					title:"",
					desc:"",
					tags:"",
					lon:'',
					lat:'',
					authInfo:"",
					deviceId:""
					
				},
				status:'',
				universal:{
					add:false,
					change:false,
					look:false,
					send:false,
					allot:false
				},
				ICData:[],
				tableData:[],
				con:{
					id:'',
					protocol:'',
					create_time:'',
					auth_info:'',
					title:'',
                    desc:'',
					tags:'',
					lon:'',
					lat:'',
					dataid:'',
					unit:'',
					unit_symbol:''
				},
				li:[],
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
				paging:{
					page:1,
					pageSize:10,
					total:0
				},
				allot1:{
					deviceId:'',
					trafficCard:"",
					deviceType:"",
					deviceModel:"",
					deviceName:"",
					startTime:'',
					endTime:'',
					personnel:'',
					status:'',
					iccId:''
					// weChatUseNames:''
				},
				search:{
					iccId:"",
					Id:"",
					start:"",
					end:"",
					modelstyle:'',
					deviceType:''
				},
				addTo:{
					group:{
						userId:sessionStorage.getItem('userId'),
						gropuName:'',
						groupPhone:'',
						name:'',
						groupNotes:''
					},
					list:{
						userId:sessionStorage.getItem('userId'),//登录人信息
						carBrand:'',//车牌号
						conLocation:'',//定位器名字
						conLocaid:'',//定位器ID
						conType:'',//设备型号
						conGroup:'',//设备分组id
						conEquipmType:'1', //设备类型
						conOutTime:'',//出厂日期
						conYear:'',//年限
						conSpeed:'',//超速值
						conExpire:'',//到期时间
						
						sim:'',//sim 卡
						iccid:'',//iccid 卡
						
						installDate:'',//安装日期
						carType:'',//车的类型
						carContact:'',//联系人
						carPhone:'',//联系人手机号
						carEngine:'',//发动机
						installName:'',//安装人员表
						installPhone:'',//安装人手机号
						carVin:'',//车架号(VIN)
						carDriveNumber:'',//驾驶证号
						carRiskStart:'',//保险开始日期
						carRiskEnd:'',//保险结束日期
						
						contrNumber:'',//合同编号
						contrDateL:'',//还款日
						contrAddress:'',//家庭住址
						contrType:'',//类型
						contrName:'',//还款人名字
						contrNames:'',//姓名1
						contrPhones:'',//手机号1
						contrNamey:'',//姓名2
						contrPhoney:'',//手机号2
						companAddress:'',//公司地址
						contrStarDate:'',//开始时间
						contrEndDate:'',//结束时间
						
						masterName:'',//姓名
						masterSex:'',//性别
						masterPhone:'',//手机号
						masterAddres:'',//地址
						masterCard:'',//身份证件
						masterDriveType:'',//驾驶证类型
						masterEmark:''//备注
					}
				},
				seeInfo:{
						 carBrand:'',//车牌 
						 installDate:'',// 安装日期
						 carType:'',// 车的类型
						 carContact:'',// 联系人
						 carPhone:'',// 联系人手机号
						 carEngine:'',// 发动机
						 installName:'',// 安装人员表
						 installPhone:'',// 安装人手机号
						 carVin:'',// 车架号(VIN)
						 carDriveNumber:'',// 驾驶证号
						 carRiskStart:'',// 保险开始日期
						 carRiskEnd:'',// 保险结束日期
						contrNumber:'',// 合同编号
						 contrAddress:'',// 家庭住址
						 contrType:'',// 类型
						 contrName:'',// 还款人名字
						 contrNames:'',// 姓名1
						 contrPhones:'',// 手机号1
						 contrNamey:'',// 姓名2
						 contrPhoney:'',// 手机号2
						 companAddress:'',// 公司地址
						 contrStarDate:'',// 开始时间
						 contrEndDate:'',// 结束时间
						 contrDate:''// 还款日   
				},
				controNameL:[{label:'C1',value:1},{label:'C2',value:2},{label:'C3',value:3},{label:'B1',value:4},{label:'B2',value:5},{label:'A1',value:6},{label:'A2',value:7},{label:'A3',value:8}]
			}
		},
		created(){
				this.add1.deviceType = this.levelList[0].label;
			},
		mounted: function() {
			this.searchClick();
			// this.$store.dispatch('group');
			document.title=this.$route.meta.title;
			if(sessionStorage.getItem("dealer")=='123'){
				this.added=1
			}
		},
		methods: {
			 handleSelectionChange(val) {
    		this.multipleSelection = val;
			},
			ICclick(){
				// this.$refs.multipleTable.clearSelection();            //操作完成清除勾选框
				var arr=this.multipleSelection;
				let multis = [];
				for (var i=0;i<arr.length;i++){
				multis.push(arr[i].deviceId);
					this.opencard=multis
					this.cardList=multis
				}
				this.universal.look = false;
			},
			IChideclick(){
				this.universal.look = false;
			},
			deleteid(row){
				console.log(row.id)
				let that=this;
				this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					console.log(row)
					axios({
						method:'post',
						url:this.$store.state.http+'/Iccid/delete',
						data:Qs.stringify({
							id:row.id,
						})
					}).then(function(message){
						console.log(message)
						if(message.data.resCode==0){
							console.log(1111111111111111111)
							that.changeshow(row)
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
			open(){
				this.universal.look = true;
				let data = {
					pageNum:this.paging.page,
					pageSize:this.paging.pageSize
				};
				 data.devId=this.search.deviceId;
				 data.deviceModel=this.type1.deviceType;
				// data.deviceId=this.search.deviceId;
				data.userId=sessionStorage.getItem('userId'),
				data.dealer=sessionStorage.getItem("dealer")
				if(data.dealer==0){
					data.dealer=sessionStorage.getItem('orderDealers')
				}
				let that = this;
				console.log(data);
				that.ICData = [];
				that.timeCrea=[];
				that.truey=[]
				axios({
					method:'post',
					url:this.$store.state.http+'/devices/conditionFind',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message)
					if(message.data.resCode==0){
						console.log(message.data.result)
						for(var i=0;i<message.data.result.length;i++){
							if(message.data.result[i].startTime.time!=null){
								// console.log(message.data.result[i].createTime.time)
								console.log(1)
								message.data.result[i].startTime=timeToDate(JSON.stringify(message.data.result[i].startTime.time).slice(0,10))
							}else{
								console.log(2)
								message.data.result[i].startTime=JSON.stringify(message.data.result[i].startTime).slice(1,20)
							}
						}
						that.ICData= message.data.result;
						console.log(message.data.result.length)
						that.paging.total = message.data.result2;
						console.log(that.ICData)
						for(var i=0;i<that.ICData.length;i++){
							that.truey.push(that.ICData[i].status)
							if(that.ICData[i].devStatus=="0x11"){
								// that.trues=1;
								// console.log(that.trues);
								that.ICData[i].devStatus='正常'
							}else{
								that.ICData[i].devStatus='异常'
							}
						}
						console.log(that.truey)
						
					}else{
						that.ICData = [];
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
			hideclick(){
				this.universal.change = false;
			},
			indexMethod(index) {
        		return index + (this.paging.page-1)*this.paging.pageSize+1;
    		},
			handleSizeChange(val){
				this.paging.pageSize = val;
				console.log(this.paging.pageSize)
				// this.searchClick();
			},
			next() {
				/*this.addClick();*/
				let that = this;
				if(this.step==0){
					axios({
						method:'post',
						url:that.$store.state.http +'/concode/conByCarBrand',
						data:Qs.stringify({
							conLocaid:that.addTo.list.conLocaid,
							carBrand:that.addTo.list.carBrand
						})
					}).then(function(message){
						console.log(message.data)
						if(message.data.resCode==0){
							console.log(message.data.result)
							if (that.step++ > 3) {
					        	that.step = 0;
					        	// that.addClick();
					        	that.add = false;
					        }
						}else{
							that.$message.error('此定位器ID不存在');
							that.addTo.list.conLocaid = '';
							return false;
						}
					})
				}else{
					if (that.step++ > 3) {
					    that.step = 0;
					    // that.addClick();
					    that.add = false;
					}
				}
		        
			},
			nextSee(){
				if (this.seeStep++ > 1) {
		        	this.seeStep = 1;
		        }
			},
			handleCurrentChange(val){
				// this.searchClick();
			},
			addClick(){
				if(this.add1.cardId == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				if(this.add1.startTime == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				if(this.add1.endTime == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				console.log(this.add1.startTime.valueOf())
				if(this.add1.startTime.valueOf()>this.add1.endTime.valueOf()){
					this.$message.error('开始时间不能早于结束时间');
					return false;
				}
				
				let data = this.add1;
				let that=this;
				data.dealer=sessionStorage.getItem("dealer");
				if(data.dealer==0){
					data.dealer=sessionStorage.getItem('orderDealers')
				}
				console.log(data);
				axios({
					method:'post',
					dataType: 'jsonp',
					url:this.$store.state.http+'/pecard/save',
					data:Qs.stringify(data)
					}).then(function(message){
					console.log(message)
					// console.log((message.data.errMsg).split(":")[1])
					// localStorage.setItem('id',(message.data.errMsg).split(":")[1])
					if(message.data.resCode==0){
						that.searchClick();
						that.$message({
				        	message: '添加成功',
				        	type: 'success'
						});
					}else if(message.data.resCode==6){
						that.$alert(message.data.result, '请勿重复添加', {
							confirmButtonText: '确定'
						})
					}else{
						that.$message({
				        	message: '添加失败',
				        	type: 'error'
						});
					}
				})
				that.universal.add = false;
				that.add.cardId='';
				that.add.startTime=''
				that.add.endTime=''
			},
			deleteChild(row){
				let that = this;
				this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					console.log(row)
					axios({
						method:'post',
						data:Qs.stringify({
							id:row.id
						})
					}).then(function(message){
						console.log(message)
						if(message.data.resCode==0){
							console.log(1111111111111111111)
							that.changeGroupShow(row)
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
			deleteClick(row){
				let that = this;
				// console.log(localStorage.getItem('id'))
				this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					console.log(row)
					let data={
						id:row.id
					}
					console.log(data)
					axios({
						method:'post',
						url:this.$store.state.http+'/pecard/delete',
						data:Qs.stringify(data)
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
			
				
			},
			changeshow(row){
				this.universal.change = true;
				this.change = Object.assign({},row);
				console.log(row)
				let that=this;
				axios({
						method:'post',
						url:this.$store.state.http+'/Iccid/findIccid',
						data:Qs.stringify({
							id:row.iccId
						})
					}).then(function(message){
						console.log(message)
						that.idtable=message.data.cards
					})



			},
			changeclick(row){
				if(this.change.weChatUseName == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				if(this.change.weChatUsePhone == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				if(this.change.weChatUsePassword == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				if(this.change.weChatFullName == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				if(this.change.weChatType == ''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				let that = this;
				let data = this.change;
				data.wechatUser=row.wechatUser;
				console.log(data);
				axios({
					method:'post',
					url:this.$store.state.http+'/wechatUser/update',
					data:Qs.stringify(data)
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
				
			},
		
			allotchange(row){
				let that=this;
				let data={
					id:that.allot1.iccId,
					ids:(that.opencard).toString()
				}
				console.log(data)
				axios({
					method:'post',
					url:this.$store.state.http+'/Iccid/save',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message);
					that.universal.allot=false;
					that.allot1.weChatUseNames=""
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
				
			},
			allot(row){
				this.universal.allot = true;
				this.allot1 = row;
				let that=this;
				console.log(row)
				let data={
					weChatUsePhone:row.weChatUsePhone
				}
				console.log(data);
				// axios({
				// 	method:'post',
				// 	url:'http://192.168.2.123:8796/wechatUser/findDevbyUser',
				// 	data:Qs.stringify(data)
				// }).then(function(message){
				// 	console.log(1111111111111111)
				// 	console.log(message.data.result)
				// 	that.len=message.data.result;
				// })
			},
			changeGroupShow(row){
				// this.look = row;
				// this.universal.look = true;
				// let that=this;
				// let data ={
				// 	weChatUsePhone:row.weChatUsePhone
				// }
				//  console.log(data)
				//  sessionStorage.setItem("weChatUsePhone",row.weChatUsePhone)
				//  axios({
				// 	method:"post",
				// 	url:this.$store.state.http+'/wechatUser/findDevbyUser',
				// 	data:Qs.stringify(data)
				// }).then(function(message){
				// 	console.log(message)
				// 	that.li=message.data.s
				// })
			},
			// changeClick(){},
			searchClick(){
				let data = {
					pageNum:this.paging.page,
					pageSize:this.paging.pageSize,
					dealer:sessionStorage.getItem("dealer")
				};
				if(data.dealer==0){
					data.dealer=sessionStorage.getItem('orderDealers')
				}
				data.account=this.search.deviceType
				data.userId=sessionStorage.getItem('userId')
				data.cardId=this.search.cardId
				let that = this;
				that.tableData = [];
			    console.log(data);
				axios({
					method:'post',
					url:this.$store.state.http+'/pecard/finds',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message)
					if(message.data.resCode==0){
						// console.log(message.data.result[0].createTime.slice(0,10))
						for(let i=0;i<message.data.result.length;i++){
							message.data.result[i].startTime=message.data.result[i].startTime.slice(0,10)
						}
						for(let i=0;i<message.data.result.length;i++){
							message.data.result[i].endTime=message.data.result[i].endTime.slice(0,10)
						}
						that.tableData = message.data.result;
						that.paging.total = message.data.result2;
					}else{
						that.tableData = [];
						that.paging.total = 0;
					}
				})
			},
			reload(){
				this.isRouterAlive=false;
				this.$nextTick(function(){
					this.isRouterAlive=true;
				})
			},
			changeGroup(){
				let data=this.add1
				let that = this;
				axios({
					method:'post',
					url:this.$store.state.http+'/devices/ModifyDevices',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						that.searchClick();
						that.$message({
				        	message: '修改成功',
				        	type: 'success'
				        });
					}else{
						that.$alert(message.data.result, '系统确认框', {
							confirmButtonText: '确定'
						})
					}
					that.changeGroups = false;
				})
			}
		}
	}
	// $(function(){
	// 	$(document).delegate(".oyButtonExcel",'click',function(){
	// 					$("#upload").click();
	// 				});

	// 				$(document).delegate("#upload","change",function(){
	// 						console.log(111);
	// 						var formData=new FormData();
	// 						var files=$("#upload")[0].files;
	// 						formData.append("upload",files[0]);
	// 						var aa= JSON.stringify(formData);
	// 						console.log(formData);
	// 						axios({
	// 									method:'post',
	// 									url:this.$store.state.http+'/conCode/import',
	// 									data:formData,
	// 									userName:sessionStorage.getItem('userAlias')
	// 								}).then(function(message){
	// 									console.log(message);
	// 									l
										
	// 								})
							
	// 				})
	// })
</script>

<style scoped="scoped">
	.el-input,.el-select {
		width: 180px;
	}

	.firImg{width: 50%;height: 100%;position: absolute;right: 0;top:89px;}
	.el-date-editor.el-input{width: 180px;}
	#PSTlist{padding: 20px;}
	.spanClassTL{width: 200px;}
</style>