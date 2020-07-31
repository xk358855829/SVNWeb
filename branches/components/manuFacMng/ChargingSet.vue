<template>
	<div id="faultList">
		<div class="header">
			<div class="headerTitle">
				<span>收费列表</span>
			</div>
		</div>
		<div class="select">
			<span>停车场名称：</span>
			<el-input v-model="search.parking_name" clearable placeholder="请输入内容"></el-input>

			<span>停车场类型：</span>
			<el-select v-model="search.parking_lot_type" placeholder="请选择">
				<el-option value="">未选择</el-option>
				<el-option v-for="nice in gstyle" :key="nice.id" :label="nice.type" :value="nice.type"></el-option>
			</el-select>
		</div>
		<div class="select">
			<el-button type="success" class="oyButton" icon="el-icon-search" @click='searchClick'>查询</el-button>
		</div>
		<div class="Content">
			<el-table class='oyTable' :data="tableData" style="width: 100%">
				<el-table-column type="index" :index="indexMethod" label="序号" width="100"> </el-table-column>
				<!-- <el-table-column label="停车场ID" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.parking_id }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.parking_id }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column> -->
				
				<el-table-column label="停车场名称" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.parking_name }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.parking_name }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="停车场类型" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.parking_lot_type | paytype}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.parking_lot_type | paytype }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<!-- <el-table-column label="计费单价" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.parking_fee_description}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.parking_fee_description }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column> -->

				<el-table-column label="免费时长" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.free_time}}分钟</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.free_time }}分钟</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="单价" width="" >
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.price}}元/小时</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.price }}元/小时</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="最高收费" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.high_price}}元</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.high_price }}元</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="更新时间" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.date.time}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.date.time }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
		
				<!-- <el-table-column prop="" label="操作" width='150'>
					<template slot-scope="scope"> -->
						<!-- <el-tooltip  class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
						</el-tooltip> -->
						<!-- <el-tooltip class="item" effect="dark" content="修改" placement="top">
    						<i class="icon-change el-icon-edit" @click="changeShow(scope.row)" ></i>
						</el-tooltip> -->
						<!-- <el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-search" @click="seeClick(scope.row)" ></i>
						</el-tooltip> -->
						<!-- <el-tooltip class="item" effect="dark" content="道闸" placement="top">
    						<i class="icon-See el-icon-share" @click="barriers(scope.row)" ></i>
						</el-tooltip> -->
					<!-- </template>
				</el-table-column> -->
			</el-table>
		</div>
		<el-dialog title="查看" :visible.sync="universal.look">
			<div>
				<div class="title">离场道闸</div>
				<el-table class='oyTable' :data="idtable" style="width: 100%">
				
				<!-- <el-table-column type="selection" width="55" class="selection" prop='uuid' :selectable='checkboxInit' @selection-change="changeFun"></el-table-column> -->
				<el-table-column type="index" :index="indexMethod" label="序号" width="100"> </el-table-column>
				<el-table-column label="道闸名称">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{scope.row.number}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.number}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="道闸ID">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.deviceld }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.deviceld}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="软件版本号">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.protocol }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.protocol}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="sim卡号">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.sim }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.sim}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="安装时间">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.date.time }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.date.time}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column prop="" label="操作" width="">
					<template slot-scope="scope">


						<el-tooltip class="item" effect="dark" content="解绑" placement="top">
    						<i class="icon-delete el-icon-delete" @click="unbundle1(scope.row)"></i>
						</el-tooltip>

					</template>
				</el-table-column>
			</el-table>
			 </div>
			 <div>
				 <div class="title">入场道闸</div>
				<el-table class='oyTable' :data="idtable1" style="width: 100%">
				<!-- <el-table-column type="selection" width="55" class="selection" prop='uuid' :selectable='checkboxInit' @selection-change="changeFun"></el-table-column> -->
				
				<el-table-column type="index" :index="indexMethod" label="序号" width="100"> </el-table-column>
				<el-table-column label="道闸名称">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{scope.row.number}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.number}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="道闸ID">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.deviceld }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.deviceld}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="软件版本号">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.protocol }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.protocol}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="sim卡号">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.sim }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.sim}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column label="安装时间">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.date.time }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.date.time}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column prop="" label="操作" width="">
					<template slot-scope="scope">


						<el-tooltip class="item" effect="dark" content="解绑" placement="top">
    						<i class="icon-delete el-icon-delete" @click="unbundle2(scope.row)"></i>
						</el-tooltip>

					</template>
				</el-table-column>
			</el-table>
			 </div>
		</el-dialog>
		<el-dialog title="修改" :visible.sync="universal.change" v-if="changetype==1">
			<div class="alipays">
				<!-- <span class="spanClass">停车场编号：</span>
				<el-input :disabled="false" v-model="change.parking_id" clearable placeholder="请输入内容"></el-input><br /><br /> -->
				
				<span class="spanClass">停车场地址：</span>
				<el-input :disabled="true" v-model="change.parking_address" clearable placeholder="请输入内容"></el-input><br /><br />
				
				<span class="spanClass">停车场类型：</span>
				<el-input :disabled="true" v-model="change.parking_lot_type" clearable placeholder="请输入内容"></el-input><br /><br />
				<!-- <el-select v-model="change.parking_lot_type" placeholder="请选择">
					<el-option v-for="itemtpye in gstyle" :key="itemtpye.id" :label="itemtpye.type" :value="itemtpye.type"></el-option>
				</el-select><br /><br /> -->
						
				<span class="spanClass">地图标识：</span>
				<el-input :disabled="true" v-model="change.parking_poiid" clearable placeholder="请输入内容"></el-input>
				<el-tooltip placement="top">
					<div slot="content">请登陆https://ditu.amap.com直接搜索位置<br/>url链接后显示高德地图唯一标识</div>
					<img src="../../../static/image/ming.png" alt="">
				</el-tooltip><br /><br />

				<span class="spanClass">客服电话：</span>
				<el-input :disabled="true" v-model="change.parking_mobile" clearable placeholder="请输入内容"></el-input><br /><br />
				
				<span class="spanClass">支付方式：</span>
				<el-input :disabled="true" v-model="change.pay_type" clearable placeholder="请输入内容"></el-input><br /><br />
				<!-- <el-select v-model="change.pay_type" placeholder="请选择支付方式">
					<el-option value="">未选择</el-option>
					<el-option v-for="item in moneypays" :key="item.id" :label="item.type" :value="item.type"></el-option>
				</el-select><br /><br /> -->
				
				<span class="spanClass">收费说明：</span>
				<el-input :disabled="true" v-model="change.parking_fee_description" clearable placeholder="请输入内容"></el-input><br /><br />
				<span class="spanClass">车位总数：</span>
				<el-input :disabled="true" v-model="change.carportcount" clearable placeholder="请输入内容"></el-input><br /><br />
				
			</div>
			<div class="alipays">
				<span class="spanClass">停车场名称：</span>
				<el-input :disabled="true" v-model="change.parking_name" clearable placeholder="请输入内容"></el-input><br /><br />
				
				<span class="spanClass">收款方ID：</span>
				<el-input :disabled="true" v-model="change.mchnt_id" clearable placeholder="请输入内容"></el-input>
				<el-tooltip placement="top">
					<div slot="content">商户在支付宝注册的唯一标识<br/></div>
					<img src="../../../static/image/ming.png" alt="">
				</el-tooltip><br /><br />

				<span class="spanClass">超时时间：</span>
				<el-input :disabled="false" v-model="change.time_out" clearable placeholder="请输入内容" @blur="focus()"></el-input>
				<el-tooltip placement="top">
					<div slot="content">车主缴费后需在该时间之内驶离停车场<br/></div>
					<img src="../../../static/image/ming.png" alt="">
				</el-tooltip><br /><br />

				<span class="spanClass">停车单价：</span>
				<el-input :disabled="false" v-model="change.price" clearable placeholder="请输入内容" @blur="focus2()"></el-input><br /><br />
				
				<span class="spanClass">免费时长：</span>
				<el-input :disabled="false" v-model="change.free_time" clearable placeholder="请输入内容" @blur="focus4()"></el-input>
				<el-tooltip placement="top">
					<div slot="content">车主进入停车场在该时间之内驶离无需缴费<br/></div>
					<img src="../../../static/image/ming.png" alt="">
				</el-tooltip><br /><br />
				
				<span class="spanClass">最高时长：</span>
				<el-input :disabled="false" v-model="change.high_time" clearable placeholder="请输入内容" @blur="focus7()"></el-input><br /><br />
						
				<span class="spanClass">最高收费：</span>
				<el-input :disabled="false" v-model="change.high_price" clearable placeholder="请输入内容" @blur="focus6()"></el-input>
				<el-tooltip placement="top">
					<div slot="content">单个车牌在停车场每日缴费最高额度<br/>如超出该额度则当日免费停车，第二天重置</div>
					<img src="../../../static/image/ming.png" alt="">
				</el-tooltip><br /><br />	
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="hideclick">取消</el-button>
				<el-button type="success" class="oyButton" @click="changeClick">修改</el-button>
			</div>
		</el-dialog>
		<el-dialog title="修改" :visible.sync="universal.change1" v-if="changetype==0">
			<el-row>
				<el-col :span="12">
					<span class="spanClass">停车场名称：</span>
					<el-input :disabled="true" v-model="change1.parking_name" clearable placeholder="请输入内容"></el-input><br /><br />
					<span class="spanClass">停车场地址：</span>
					<el-input :disabled="true" v-model="change1.parking_address" clearable placeholder="请输入内容"></el-input><br /><br />
					
					<span class="spanClass">停车场类型：</span>
					<el-input :disabled="true" v-model="change1.parking_lot_type" clearable placeholder="请输入内容"></el-input><br /><br />
					<!-- <el-select v-model="change1.parking_lot_type" placeholder="请选择">
						<el-option v-for="itemtpye in copymin" :key="itemtpye.id" :label="itemtpye.type" :value="itemtpye.type"></el-option>
					</el-select><br /><br /> -->

					<span class="spanClass">客服电话：</span>
					<el-input :disabled="true" v-model="change1.parking_mobile" clearable placeholder="请输入内容"></el-input><br /><br />
					
					<span class="spanClass">收费说明：</span>
					<el-input :disabled="true" v-model="change1.parking_fee_description" clearable placeholder="请输入内容"></el-input><br /><br />
					<span class="spanClass">最高时长：</span>
					<el-input :disabled="false" v-model="change1.high_time" clearable placeholder="请输入内容" @blur="focus97()"></el-input><br /><br />
					
				</el-col>
				<el-col :span="12">
					<span class="spanClass">停车单价：</span>
					<el-input :disabled="false" v-model="change1.price" clearable placeholder="请输入内容" @blur="focus3()"></el-input><br /><br />
					<span class="spanClass">免费时长：</span>
					<el-input :disabled="false" v-model="change1.free_time" clearable placeholder="请输入内容" @blur="focus5()"></el-input>
					<el-tooltip placement="top">
						<div slot="content">车主进入停车场在该时间之内驶离无需缴费<br/></div>
						<img src="../../../static/image/ming.png" alt="" class="syle">
					</el-tooltip><br /><br />
					<span class="spanClass">最高收费：</span>
					<el-input :disabled="false" v-model="change1.high_price" clearable placeholder="请输入内容" @blur="focus8()"></el-input>
					<el-tooltip placement="top">
						<div slot="content">单个车牌在停车场每日缴费最高额度<br/>如超出该额度则当日免费停车，第二天重置</div>
						<img src="../../../static/image/ming.png" alt="" class="syle">
					</el-tooltip><br /><br />

					<span class="spanClass">超时时间：</span>
					<el-input :disabled="false" v-model="change1.time_out" clearable placeholder="请输入内容" @blur="focus1()"></el-input>
					<el-tooltip placement="top">
						<div slot="content">车主缴费后需在该时间之内驶离停车场<br/></div>
						<img src="../../../static/image/ming.png" alt="" class="syle">
					</el-tooltip><br /><br />

					<span class="spanClass">车位总数：</span>
					<el-input :disabled="false" v-model="change1.carportcount" clearable placeholder="请输入内容"></el-input><br /><br />
				</el-col>
			</el-row>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="hideclick">取消</el-button>
				<el-button type="success" class="oyButton" @click="change1Click">修改</el-button>
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
				barrierid:'',
				changetype:'',
				arrow:[{
					value:0,
					type:'入场道闸'
					},{
					value:1,
					type:'离场道闸'
				}],
			
				signo:[],
				choisecust:[],
				gstylelast:[{
					value:0,
					type:'居民小区'
				},{
					value:1,
					type:'商圈停车场'
				},{
					value:2,
					type:'路测停车'
				},{
					value:3,
					type:'公园景点'
				},{
					value:4,
					type:'商务楼宇'
				},{
					value:5,
					type:'其他'
				},{
					value:6,
					type:'交通枢纽'
				},{
					value:7,
					type:'市政设施'
				}],
				copymin:[{
					value:1,
					type:'居民小区'
				},{
					value:2,
					type:'商圈停车场'
				},{
					value:3,
					type:'路测停车'
				},{
					value:4,
					type:'公园景点'
				},{
					value:5,
					type:'商务楼宇'
				},{
					value:6,
					type:'其他'
				},{
					value:7,
					type:'交通枢纽'
				},{
					value:8,
					type:'市政设施'
				}],
				gstyle:[{
					value:1,
					type:'居民小区'
				},{
					value:2,
					type:'商圈停车场'
				},{
					value:3,
					type:'路测停车'
				},{
					value:4,
					type:'公园景点'
				},{
					value:5,
					type:'商务楼宇'
				},{
					value:6,
					type:'其他'
				},{
					value:7,
					type:'交通枢纽'
				},{
					value:8,
					type:'市政设施'
				}],
				moneypay:[{
					value:0,
					type:'在线缴费'
				},{
					value:1,
					type:'代扣缴费'
				},{
					value:2,
					type:'当面付'
				}],
				moneypays:[{
					value:0,
					type:'在线缴费'
				},{
					value:1,
					type:'代扣缴费'
				},{
					value:2,
					type:'当面付'
				}],
				obj:[],
				activeName: 'first',
				numw:[],
				idtable:[],
				idtable1:[],
				numvalue:[],
				universal:{
					add:false,
					change:false,
					look:false,
					barrier:false,
					indent:false,
					change1:false
				},
				barrier:{
					deviceId:'',
					InOut:'',
					alias:''
				},
				paging:{
					page:1,
					pageSize:10,
					total:0
				},
				tableData:[],
				search:{
					parking_name:'',
					parking_lot_type:''
				},
				addA:{
					parking_name:'',
					parking_mobile:'',
					parking_address:'',
					fauModeaa:'',
					carportcount:'',
					price:'',
					time_out:'',
					free_time:'',
					high_price:'',
					parking_lot_type:'',
					high_time:''
				},
				addB:{
					customer_id:'',
					out_parking_id:'',
					parking_address:'',
					parking_poiid:'',
					parking_mobile:'',
					parking_fee_description:'',
					carportcount:'',
					parking_name:'',
					mchnt_id:'',
					price:'',
					time_out:'',
					free_time:'',
					high_price:'',
					parking_lot_type:'',
					fauModesflis:'',
					high_time:''
				},
				look:{
					deviceld:'',
					number:'',
					protocol:'',
					systime:'',
					sim:''
				},
				change1:{
					parking_name:'',
					parking_address:'',
					parking_lot_type:'',
					parking_mobile:'',
					parking_fee_description:'',
					free_time:'',
					high_time:'',
					time_out:'',
					price:'',
					carportcount:''
				},
				change:{
					parking_id:'',
					parking_address:'',
					fauCode:'',
					parking_mobile:'',
					price:'',
					date:'',
					parking_name:'',
					free_time:'',
					parking_poiid:'',
					parking_fee_description:'',
					high_time:'',
					time_out:'',
					parking_lot_type:'',
					carportcount:''
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
			focus(){
				if(!(/[\u4e00-\u9fa5]+/).test(this.change.time_out)&&this.change.time_out!=''){ 
						this.change.time_out=this.change.time_out+'分钟'
				}
			},
			focus1(){
				if(!(/[\u4e00-\u9fa5]+/).test(this.change1.time_out)&&this.change1.time_out!=''){ 
						this.change1.time_out=this.change1.time_out+'分钟'
				}
			},
			focus2(){
				if(!(/[\u4e00-\u9fa5]+/).test(this.change.price)&&this.change.price!=''){ 
						this.change.price=this.change.price+'元/小时'
				}
			},
			focus3(){
				if(!(/[\u4e00-\u9fa5]+/).test(this.change1.price)&&this.change1.price!=''){ 
						this.change1.price=this.change1.price+'元/小时'
				}
			},
			focus4(){
				if(!(/[\u4e00-\u9fa5]+/).test(this.change.time_out)&&this.change.time_out!=''){ 
						this.change.time_out=this.change.time_out+'分钟'
				}
			},
			focus5(){
				if(!(/[\u4e00-\u9fa5]+/).test(this.change1.free_time)&&this.change1.free_time!=''){ 
						this.change1.free_time=this.change1.free_time+'分钟'
				}
			},
			focus6(){
				if(!(/[\u4e00-\u9fa5]+/).test(this.change.high_price)&&this.change.high_price!=''){ 
						this.change.high_price=this.change.high_price+'元'
				}
			},
			focus7(){
				if(!(/[\u4e00-\u9fa5]+/).test(this.change.high_time)&&this.change.high_time!=''){ 
						this.change.high_time=this.change.high_time+'分钟'
				}
			},
			focus8(){
				if(!(/[\u4e00-\u9fa5]+/).test(this.change1.high_price)&&this.change1.high_price!=''){ 
						this.change1.high_price=this.change1.high_price+'元'
				}
			},
			focus97(){
				if(!(/[\u4e00-\u9fa5]+/).test(this.change1.high_time)&&this.change1.high_time!=''){ 
						this.change1.high_time=this.change1.high_time+'分钟'
				}
			},
			// focus(){
			// 	this.$store.dispatch("focustime",this.change.time_out)
			// 	console.log(this.$store.state.blurtime)
			// 	this.change.time_out=this.$store.state.blurtime
			// },
			// focus1(){
			// 	this.$store.dispatch("focustime",this.change1.time_out)
			// 	this.change1.time_out=this.$store.state.blurtime
			// },
			// focus2(){
			// 	this.$store.dispatch("focustime",this.change.price)
			// 	this.change.price=this.$store.state.bluryuanhour
			// },
			// focus3(){
			// 	this.$store.dispatch("focustime",this.change1.price)
			// 	this.change1.price=this.$store.state.bluryuanhour
			// },
			// focus4(){
			// 	this.$store.dispatch("focustime",this.change.free_time)
			// 	this.change.free_time=this.$store.state.blurtime
			// },
			barrierclick(){
				if(this.barrier.deviceId==''){
					this.$message.error('带*的数据不能为空哦！3');
					return false;
				}
				if(this.barrier.alias==''){
					this.$message.error('带*的数据不能为空哦！2');
					return false;
				}
				if(this.barrier.InOut===''){
					this.$message.error('带*的数据不能为空哦！1');
					return false;
				}
				let data={
					id:this.barrierid,
					deviceId:this.barrier.deviceId,
					InOut:this.barrier.InOut,
					alias:this.barrier.alias,
				}
				let that=this;
				axios({
					method:'get',
					url:that.$store.state.url+'/Device/bindDeviceld?id='+that.barrierid+'&deviceId='+that.barrier.deviceId+'&InOut='+that.barrier.InOut+'&alias='+that.barrier.alias,
					// data:Qs.stringify(data)
				}).then(function(message){
					if(message.data.resCode==0){
						that.$message({
							message: '绑定道闸成功',
							type: 'success'
						});
					}else if(message.data.resCode==1){
						that.$message({
							message: '设备已绑定,请选择其他设备',
							type: 'error'
						});
					}
				})
				that.universal.barrier=false;
			},
			AddShow(){
				 
				this.universal.add=true
				this.addA.parking_name=''
				this.addA.parking_mobile=''
				this.addA.fauModeaa=''
				this.addA.price=''
				this.addA.time_out=''
				this.addA.free_time=''
				this.addA.high_price=''
				this.addA.parking_lot_type=''
				this.addA.parking_address=''
				this.addA.high_time=''
				this.addA.carportcount=''
				this.addB.customer_id=''
				this.addB.out_parking_id=''
				this.addB.parking_address=''
				this.addB.parking_poiid=''
				this.addB.parking_mobile=''
				this.addB.parking_fee_description=''
				this.addB.carportcount=''
				this.addB.parking_name=''
				this.addB.mchnt_id=''
				this.addB.price=''
				this.addB.time_out=''
				this.addB.free_time=''
				this.addB.high_price=''
				this.addB.parking_lot_type=''
				this.addB.fauModesflis=''
				this.addB.high_time=''
				let that=this;
				axios({
					method:'post',
					url:'http://39.104.113.112:2088/Parking/findCustomer',
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						that.choisecust=message.data.result
					}else{

					}
				})
			},
			indent(row){
				this.universal.indent=true;
				let data={
					page:this.paging.page,
					pageSize:this.paging.pageSize,	
				}
				let that=this;
				axios({
					method:'post',
					url:'http://39.104.113.112:2088/Order/orders',
					data:Qs.stringify(data)
				}).then(function(message){
					if(message.data.resCode==0){
						
					}
					
				})
			},		
			barriers(row){
				console.log(row)
				this.barrier.deviceId=''
				this.barrier.InOut=''
				this.barrier.alias=''
				this.barrierid=row.id
				this.universal.barrier=true;
				let data={
					page:this.paging.page,
					pageSize:this.paging.pageSize,	
				}
				let that=this;
				axios({
					method:'post',
					url:'http://39.104.113.112:2088/Device/brakeList',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message)
					if(message.data.resCode==0){
						that.signo=message.data.result
					}
					
				})
			},
			unbundle1(row){
				console.log(row)
				let that = this;
				this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					axios({
						method:'post',
						url:'http://39.104.113.112:2088/Device/unbound',
						data:Qs.stringify({
							deviceId:row.deviceld
						})
					}).then(function(message){
						console.log(message.data)
						if(message.data.resCode==0){
							that.$message({
					        	message: '解绑成功',
					        	type: 'success'
					        });
							that.searchClick();
						}else{
							that.$message({
					        	message: '解绑失败',
					        	type: 'error'
					        });
						}
						that.universal.look=false;
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消解绑'
					});
				});
			},
			unbundle2(row){
				console.log(row)
				let that = this;
				this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					axios({
						method:'post',
						url:'http://39.104.113.112:2088/Device/unbound',
						data:Qs.stringify({
							deviceId:row.deviceld
						})
					}).then(function(message){
						console.log(message.data)
						if(message.data.resCode==0){
							that.searchClick();
							that.$message({
					        	message: '解绑成功',
					        	type: 'success'
					        });
						}else{
							that.$message({
					        	message: '解绑失败',
					        	type: 'error'
					        });
						}
						that.universal.look=false;
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消解绑'
					});
				});
			},
			seeClick(row){
				this.universal.look=true;
				console.log(row)
				let that=this;
				axios({
					method:'post',
					url:'http://39.104.113.112:2088/Device/queryBindDeviceld',
					data:Qs.stringify({
						id:row.id
					})
				}).then(function(message){
					console.log(message)
					if(message.data.resCode==0){
						
						that.idtable=message.data.inBrake
						that.idtable1=message.data.outBrake
						console.log(that.look)
					}
					
				})
			},
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
				let that = this;
				if(that.activeName=='first'){
					if(that.addB.high_time==''||that.addB.customer_id==''||that.addB.fauModesflis==''||that.addB.out_parking_id==''||that.addB.parking_address==''||that.addB.parking_poiid==''||that.addB.parking_mobile==''||that.addB.parking_fee_description==''||that.addB.carportcount==''||that.addB.free_time==''||that.addB.mchnt_id==''||that.addB.price==''||that.addB.time_out==''||that.addB.high_price==''||that.addB.parking_lot_type==''){
							that.$message.error('带*的数据不能为空哦！');
							return false;
						}
					if(that.addB.parking_lot_type=='居民小区'){
						that.addB.parking_lot_type=1
					}else if(that.addB.parking_lot_type=='商圈停车场'){
						that.addB.parking_lot_type=2
					}else if(that.addB.parking_lot_type=='路测停车'){
						that.addB.parking_lot_type=3
					}else if(that.addB.parking_lot_type=='公园景点'){
						that.addB.parking_lot_type=4
					}else if(that.addB.parking_lot_type=='商务楼宇'){
						that.addB.parking_lot_type=5
					}else if(that.addB.parking_lot_type=='其他'){
						that.addB.parking_lot_type=6
					}else if(that.addB.parking_lot_type=='交通枢纽'){
						that.addB.parking_lot_type=7
					}else if(that.addB.parking_lot_type=='市政设施'){
						that.addB.parking_lot_type=8
					}
					if(that.addB.fauModesflis=='在线缴费'){
						that.addB.fauModesflis=0
					}else if(that.addB.fauModesflis=='代扣缴费'){
						that.addB.fauModesflis=1
					}else if(that.addB.fauModesflis=='当面付'){
						that.addB.fauModesflis=2
					}
					let dataA =that.addB;
					// dataA.parking_lot_type=that.addB.fauModes
					dataA.pay_type=that.addB.fauModesflis
					console.log(dataA)
					axios({
						method:'post',
						url:'http://39.104.113.112:2088/Parking/createParkingInfo',
						data:Qs.stringify(dataA)
					}).then(function(message){
						console.log(message.data)
						if(message.data.resCode==0){
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
				}else if(that.activeName=='second'){
					if(that.addA.high_time==''||that.addA.parking_name==''||that.addA.parking_address==''||that.addA.parking_lot_type==''||that.addA.parking_mobile==''||that.addA.parking_fee_description==''||that.addA.fauModeaa==''||that.addA.carportcount==''||that.addA.price==''||that.addA.time_out==''||that.addA.free_time==''||that.addA.high_price==''){
						that.$message.error('带*的数据不能为空哦！');
						return false;
					}
					if(that.addA.parking_lot_type=='居民小区'){
						that.addA.parking_lot_type=1
					}else if(that.addA.parking_lot_type=='商圈停车场'){
						that.addA.parking_lot_type=2
					}else if(that.addA.parking_lot_type=='路测停车'){
						that.addA.parking_lot_type=3
					}else if(that.addA.parking_lot_type=='公园景点'){
						that.addA.parking_lot_type=4
					}else if(that.addA.parking_lot_type=='商务楼宇'){
						that.addA.parking_lot_type=5
					}else if(that.addA.parking_lot_type=='其他'){
						that.addA.parking_lot_type=6
					}else if(that.addA.parking_lot_type=='交通枢纽'){
						that.addA.parking_lot_type=7
					}else if(that.addA.parking_lot_type=='市政设施'){
						that.addA.parking_lot_type=8
					}
					let dataB =that.addA;
					// dataB.parking_lot_type=that.addA.parking_lot_type
					console.log(dataB)
					axios({
						method:'post',
						url:'http://39.104.113.112:2088/Parking/createLotForThird',
						data:Qs.stringify(dataB)
					}).then(function(message){
						console.log(message.data)
						if(message.data.resCode==0){
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
				}
				
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
						url:'http://39.104.113.112:2088/Parking/delParkingLot',
						data:Qs.stringify({
							id:row.id
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
				if(row.parking_poiid==''){
					console.log(row)
					this.universal.change1 = true;
					this.changetype=0
					// this.change1.parking_name=row.parking_name
					// this.change1.parking_address=row.parking_address
					// this.change1.fauModess=row.fauModess
					// this.change1.parking_mobile=row.parking_mobile
					// this.change1.parking_fee_description=row.parking_fee_description
					// this.change1.free_time=row.free_time
					// this.change1.high_time=row.high_time
					// this.change1.time_out=row.time_out
					// this.change1.price=row.price
					this.change1= Object.assign({},row);
				}else{
					console.log(row)
					this.universal.change= true;
					this.changetype=1
					this.change= Object.assign({},row);
				}
				this.gstyle.forEach((item, index) => {
					console.log(item)
					if(item.type==row.parking_lot_type){
						this.change.parking_lot_type=item.type
					}
				});  
				this.copymin.forEach((item, index) => {
					console.log(item)
					if(item.type==row.parking_lot_type){
						this.change1.parking_lot_type=item.type
					}
				});    
				this.change.time_out=row.time_out+'分钟'
				this.change.price=row.price+'元/小时'
				this.change.free_time=row.free_time+'分钟'
				this.change.high_time=row.high_time+'分钟'
				this.change.high_price=row.high_price+'元'
				this.change1.time_out=row.time_out+'分钟'
				this.change1.price=row.price+'元/小时'
				this.change1.free_time=row.free_time+'分钟'
				this.change1.high_time=row.high_time+'分钟'
				this.change1.high_price=row.high_price+'元'
				
			},
			changeClick(){
				let data = this.change;
				if(this.change.free_time.slice(this.change.free_time.length-2,this.change.free_time.length)!='分钟'){
					this.$message({
						message: '输入格式不对,请重新输入！',
						type: 'error'
					});
					return false;
				}
				if(this.change.time_out.slice(this.change.time_out.length-2,this.change.time_out.length)!='分钟'){
					this.$message({
						message: '输入格式不对,请重新输入！',
						type: 'error'
					});
					return false;
				}
				if(this.change.price.slice(this.change.price.length-4,this.change.price.length)!='元/小时'){
					this.$message({
						message: '输入格式不对,请重新输入！',
						type: 'error'
					});
					return false;
				}
				if(this.change.high_time.slice(this.change.high_time.length-2,this.change.high_time.length)!='分钟'){
					this.$message({
						message: '输入格式不对,请重新输入！',
						type: 'error'
					});
					return false;
				}
				if(this.change.high_price.slice(this.change.high_price.length-1,this.change.high_price.length)!='元'){
					this.$message({
						message: '输入格式不对,请重新输入！',
						type: 'error'
					});
					return false;
				}
				console.log((this.change.time_out).slice(0,2))
				data.time_out=(this.change.time_out).slice(0, this.change.time_out.length-2);
				data.price=(this.change.price).slice(0, this.change.price.length-4);
				data.free_time=(this.change.free_time).slice(0, this.change.free_time.length-2);
				data.high_time=(this.change.high_time).slice(0, this.change.high_time.length-2);
				data.high_price=(this.change.high_price).slice(0, this.change.high_price.length-1);
				delete data.date;
				/*console.log(data)*/
				let that = this;
				if(that.change.parking_lot_type=='居民小区'){
					that.change.parking_lot_type=1
				}else if(that.change.parking_lot_type=='商圈停车场'){
					that.change.parking_lot_type=2
				}else if(that.change.parking_lot_type=='路测停车'){
					that.change.parking_lot_type=3
				}else if(that.change.parking_lot_type=='公园景点'){
					that.change.parking_lot_type=4
				}else if(that.change.parking_lot_type=='商务楼宇'){
					that.change.parking_lot_type=5
				}else if(that.change.parking_lot_type=='其他'){
					that.change.parking_lot_type=6
				}else if(that.change.parking_lot_type=='交通枢纽'){
					that.change.parking_lot_type=7
				}else if(that.change.parking_lot_type=='市政设施'){
					that.change.parking_lot_type=8
				}
				axios({
					method:'post',
					url:'http://39.104.113.112:2088/parkinglot/upda',
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
				        	message: '修改停车场失败！！！',
				        	type: 'error'
						});
					}
				})
				that.universal.change = false;
			},
			change1Click(){
				let data = this.change1;
				if(this.change1.free_time.slice(this.change1.free_time.length-2,this.change1.free_time.length)!='分钟'){
					this.$message({
						message: '输入格式不对,请重新输入！',
						type: 'error'
					});
					return false;
				}
				if(this.change1.time_out.slice(this.change1.time_out.length-2,this.change1.time_out.length)!='分钟'){
					this.$message({
						message: '输入格式不对,请重新输入！',
						type: 'error'
					});
					return false;
				}
				if(this.change1.price.slice(this.change1.price.length-4,this.change1.price.length)!='元/小时'){
					this.$message({
						message: '输入格式不对,请重新输入！',
						type: 'error'
					});
					return false;
				}
				if(this.change1.high_time.slice(this.change1.high_time.length-2,this.change1.high_time.length)!='分钟'){
					this.$message({
						message: '输入格式不对,请重新输入！',
						type: 'error'
					});
					return false;
				}
				if(this.change1.high_price.slice(this.change1.high_price.length-1,this.change1.high_price.length)!='元'){
					this.$message({
						message: '输入格式不对,请重新输入！',
						type: 'error'
					});
					return false;
				}
				data.time_out=(this.change1.time_out).slice(0, this.change1.time_out.length-2);
				data.price=(this.change1.price).slice(0, this.change1.price.length-4);
				data.free_time=(this.change1.free_time).slice(0, this.change1.free_time.length-2);
				data.high_time=(this.change1.high_time).slice(0, this.change1.high_time.length-2);
				data.high_price=(this.change1.high_price).slice(0, this.change1.high_price.length-1);
				delete data.date;
				let that = this;
				if(that.change1.parking_lot_type=='居民小区'){
					that.change1.parking_lot_type=1
				}else if(that.change1.parking_lot_type=='商圈停车场'){
					that.change1.parking_lot_type=2
				}else if(that.change1.parking_lot_type=='路测停车'){
					that.change1.parking_lot_type=3
				}else if(that.change1.parking_lot_type=='公园景点'){
					that.change1.parking_lot_type=4
				}else if(that.change1.parking_lot_type=='商务楼宇'){
					that.change1.parking_lot_type=5
				}else if(that.change1.parking_lot_type=='其他'){
					that.change1.parking_lot_type=6
				}else if(that.change1.parking_lot_type=='交通枢纽'){
					that.change1.parking_lot_type=7
				}else if(that.change1.parking_lot_type=='市政设施'){
					that.change1.parking_lot_type=8
				}
				data.id=this.change1.id
				console.log(data)
				axios({
					method:'post',
					url:'http://39.104.113.112:2088/Parking/updateParkingInfoForThird',
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
				that.universal.change1 = false;
			},
			searchClick(){
				let data = {
				 	page:this.paging.page,
				 	pageSize:this.paging.pageSize,
					userId:localStorage.getItem('userId'),
					dealer:localStorage.getItem('dealer')
				}
				// if(localStorage.getItem('userId')=='SURIOT'){
				// 	data = {
				// 	page:this.paging.page,
				// 	pageSize:this.paging.pageSize
				//    };
				// }else{
				// 	data = {
				// 	page:this.paging.page,
				// 	pageSize:this.paging.pageSize,
				// 	userId:localStorage.getItem('userId')
				//    };
				// }
				if(this.search.parking_lot_type=='居民小区'){
					data.parking_lot_type =1
				}else if(this.search.parking_lot_type=='商圈停车场'){
					data.parking_lot_type =2
				}else if(this.search.parking_lot_type=='路测停车'){
					data.parking_lot_type =3
				}else if(this.search.parking_lot_type=='公园景点'){
					data.parking_lot_type =4
				}else if(this.search.parking_lot_type=='商务楼宇'){
					data.parking_lot_type =5
				}else if(this.search.parking_lot_type=='其他'){
					data.parking_lot_type =6
				}else if(this.search.parking_lot_type=='交通枢纽'){
					data.parking_lot_type =7
				}else if(this.search.parking_lot_type=='市政设施'){
					data.parking_lot_type =8
				}
				if(this.search.parking_name){
					data.parking_name = this.search.parking_name
				}
				/*if(this.search.positionereEnd){
					data.positionereEnd = this.search.positionereEnd
				}*/
				console.log(data)
				let that = this;
				that.tableData = [];
				axios({
					method:'post',
					url:'http://39.104.113.112:2088/Parking/selectLotInfo',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						for(var i=0;i<message.data.result.length;i++){
							message.data.result[i].date.time=that.common.timeToDate(JSON.stringify(message.data.result[i].date.time).slice(0,10))
							
						}
						for(var i=0;i<message.data.result.length;i++){
							if(message.data.result[i].pay_type==1){
								message.data.result[i].pay_type='在线缴费'
							}else if(message.data.result[i].pay_type==2){
								message.data.result[i].pay_type='代扣缴费'
							}else if(message.data.result[i].pay_type==3){
								message.data.result[i].pay_type='当面付'
							}
						}
						that.paging.total = message.data.count;
						that.tableData = message.data.result.reverse();
						
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
	.alipay{
		width: 50%;
		float: left;
	}
	.spanClass{
		width: 106px!important;
	}
	.alipays{
		display:inline-block;
	}
	.simplew{
		width: 150px!important;
	}
	.alipay img{
		vertical-align: middle;
		margin-left: 5px;
	}
	.alipays img{
		vertical-align: middle;
		margin-left: 5px;
	}
	.numtotal{
		opacity: 0;
	}
	.title{
		width: 100px;
		margin:0 auto;
	}
	.syle{
		vertical-align: middle;
	}
</style>