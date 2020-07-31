<template>
	<div id="PSTlist">
		<div class="header">
			<div class="headerTitle">
				<span>活动公告</span>
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
			isRouterAlive:true
		}
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
	.spanClassTL{width: 200px;}
</style>