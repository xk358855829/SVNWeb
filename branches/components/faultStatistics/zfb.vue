<template>
	<div id="faultList">
		<div class="header">
			<div class="headerTitle">
				<span>停车场列表</span>
			</div>
		</div>
		<div class="select">
			<span>停车场名称：</span>
			<el-input v-model="search.parking_name" clearable placeholder="请输入内容"></el-input>

			<span>停车场类型：</span>
			<el-select v-model="search.parking_lot_type" placeholder="请选择">
				<el-option value="">未选择</el-option>
				<el-option v-for="nice in gstylelast" :key="nice.id" :label="nice.type" :value="nice.type"></el-option>
			</el-select>
		</div>
		<div class="select">
			<el-button type="success" class="oyButton" icon="el-icon-plus" @click='AddShow' v-show="showchose">添加</el-button>
			<el-button type="success" class="oyButton" icon="el-icon-search" @click='searchClick'>查询</el-button>
		</div>
		<div class="Content">
			<el-table class='oyTable' :data="tableData" style="width: 100%">
				<el-table-column type="index" :index="indexMethod" label="序号" width="100"> </el-table-column>
				<el-table-column label="停车场编号" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.parking_id }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.parking_id }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
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

				<el-table-column label="停车场地址" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.parking_address }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.parking_address }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="停车场类型" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.parking_lot_type | paytype }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.parking_lot_type | paytype}}</div>
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

				<el-table-column label="超时时间" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.time_out}}分钟</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.time_out }}分钟</div>
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
				        	<p  class="TsMaxWidth">{{ scope.row.date | validate}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.date | validate}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				<el-table-column prop="" label="操作" width='160'>
					<template slot-scope="scope">
						<el-tooltip  class="item" effect="dark" content="查看详情" placement="top">
    						<i class="icon-delete el-icon-delete" @click="operation(scope.row)"></i>
						</el-tooltip>
						<el-tooltip  class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="修改" placement="top">
    						<i class="icon-change el-icon-edit" @click="changeShow(scope.row)" ></i>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-search" @click="detailslook(scope.row)" ></i>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="已绑道闸" placement="top">
    						<i class="icon-See el-icon-share" @click="seeClick(scope.row)" ></i>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="绑定道闸" placement="top">
    						<i class="jilu iconfont icon-daozhaguanli" @click="barriers(scope.row)" ></i>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="优惠方案" placement="top">
    						<i class="jilu iconfont icon-youhuifangan" @click="plan(scope.row)" ></i>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="绑定道闸白名单" placement="top">
    						<i class="jilu iconfont icon-youhuifangan" @click="barrwhite(scope.row)" ></i>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="查看道闸白名单" placement="top">
    						<i class="jilu iconfont icon-youhuifangan" @click="changewhite(scope.row)" ></i>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="绑定" placement="top">
    						<i class="icon-change el-icon-edit" @click="bangding(scope.row)" ></i>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="月账单" placement="top">
    						<i class="icon-change el-icon-edit" @click="zhangdan(scope.row)" ></i>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="是否使用积分系统" placement="top">
    						<i class="icon-unclick iconfont icon-huiyuan " @click="ifUsePoints(scope.row)"></i>
						</el-tooltip> 


						<el-tooltip class="item" v-if="scope.row.isBindSalePlants!=='未绑定优惠方案'" effect="dark" content="解绑优惠方案" placement="top">
    						<i class="jilu iconfont icon-jiebang" @click="unplan(scope.row)" ></i>
						</el-tooltip>

						<el-tooltip v-else="" class="item" effect="dark" content="解绑优惠方案" placement="top">
    						<i class="jilu jilus iconfont icon-jiebang"></i>
						</el-tooltip>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<el-dialog title="查看" :visible.sync="universal.look">
			<div>
				<el-row>
					<el-col :span="4">
						<img src="../../../static/image/jinru.png" alt="">
						<p style="margin-left:10px">入场道闸</p>
					</el-col>
					<el-col :span="20">
						<el-table class='oyTable' :data="idtable" style="width: 100%" max-height="320">
						<el-table-column type="index" :index="indexMethod" label="序号" width="100"> </el-table-column>
						<el-table-column label="道闸名称">
							<template slot-scope="scope">
								<el-popover trigger="hover" placement="top">
									<p  class="TsMaxWidth">{{scope.row.alias}}</p>
									<div slot="reference" class="name-wrapper">
										<div class="overflowHide">{{scope.row.alias}}</div>
									</div>
								</el-popover>
							</template>
						</el-table-column>

						<el-table-column label="道闸编号">
							<template slot-scope="scope">
								<el-popover trigger="hover" placement="top">
									<p  class="TsMaxWidth">{{ scope.row.deviceld }}</p>
									<div slot="reference" class="name-wrapper">
										<div class="overflowHide">{{scope.row.deviceld}}</div>
									</div>
								</el-popover>
						</template>
						</el-table-column>
						<el-table-column label="安装时间">
							<template slot-scope="scope">
								<el-popover trigger="hover" placement="top">
									<p  class="TsMaxWidth">{{ scope.row.date |validate}}</p>
									<div slot="reference" class="name-wrapper">
										<div class="overflowHide">{{scope.row.date|validate}}</div>
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
					</el-col>
				</el-row>
				
			 </div>
			 <div>
				 <el-row>
					<el-col :span="4">
						<img src="../../../static/image/likai.png" alt="">
						<p style="margin-left:10px">出场道闸</p>
					</el-col>
					<el-col :span="20">
						<el-table class='oyTable' :data="idtable1" style="width: 100%" max-height="320">
							<el-table-column type="index" :index="indexMethod" label="序号" width="100"> </el-table-column>
							<el-table-column label="道闸名称">
								<template slot-scope="scope">
									<el-popover trigger="hover" placement="top">
										<p  class="TsMaxWidth">{{scope.row.alias}}</p>
										<div slot="reference" class="name-wrapper">
											<div class="overflowHide">{{scope.row.alias}}</div>
										</div>
									</el-popover>
							</template>
							</el-table-column>

							<el-table-column label="道闸编号">
								<template slot-scope="scope">
									<el-popover trigger="hover" placement="top">
										<p  class="TsMaxWidth">{{ scope.row.deviceld }}</p>
										<div slot="reference" class="name-wrapper">
											<div class="overflowHide">{{scope.row.deviceld}}</div>
										</div>
									</el-popover>
							</template>
							</el-table-column>
							<el-table-column label="安装时间">
								<template slot-scope="scope">
									<el-popover trigger="hover" placement="top">
										<p  class="TsMaxWidth">{{ scope.row.date |validate}}</p>
										<div slot="reference" class="name-wrapper">
											<div class="overflowHide">{{scope.row.date|validate}}</div>
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
					</el-col>
				</el-row>
		</div>
		</el-dialog>
		<el-dialog title="添加" :visible.sync="universal.add">
			<el-steps :active="active" finish-status="success">
				<el-step title="步骤 1"></el-step>
				<el-step title="步骤 2"></el-step>
				<el-step title="步骤 3"></el-step>
			</el-steps>
			<div v-if="active==0" class="paythree">
				<el-row>
					<el-col :span="12">
						<img src="../../../static/image/three (1).png" alt=""><el-checkbox v-model="chose" @change="changebox"></el-checkbox>
					</el-col>
					<el-col :span="12">
						<img src="../../../static/image/carpay.png" alt=""><el-checkbox v-model="choses" @change="changebox1"></el-checkbox>
					</el-col>
				</el-row>
			</div>
			<div v-if="active==2&&chose==true">
				<el-row>
					<el-col :span="12">
						<span class="spanClass"><span class="aKey">*</span>停车场编号：</span>
							<el-input :disabled="false" v-model="addB.parking_id" clearable placeholder="请输入停车场编号"></el-input>
							<el-tooltip placement="top">
								<div slot="content">支付宝返回停车场id，系统唯一<br/></div>
								<img src="../../../static/image/ming.png" alt="">
							</el-tooltip><br /><br />
							
							<span class="spanClass"><span class="aKey">*</span>地图标识：</span>
							<el-input :disabled="false" v-model="addB.parking_poiid" clearable placeholder="请输入地图标识"></el-input>
							<el-tooltip placement="top">
								<div slot="content" style="cursor: pointer" @click="listclick">请登陆https://ditu.amap.com直接搜索位置<br/>url链接后显示高德地图唯一标识</div>
								<img src="../../../static/image/ming.png" alt="">
							</el-tooltip><br /><br />
							
							
							
							<span class="spanClass">备注：</span><div class="little">{{this.$store.state.size}}</div>
					</el-col>
					<el-col :span="12">
							
							<!-- <span class="spanClass"><span class="aKey">*</span>支付方式：</span>
							<el-select v-model="addB.pay_type" placeholder="请选择支付方式">
								<el-option v-for="item in moneypay" :key="item.id" :label="item.type" :value="item.type"></el-option>
							</el-select><br /><br /> -->
							<span class="spanClass"><span class="aKey">*</span>客服电话：</span>
							<el-input :disabled="false" v-model="addB.parking_mobile" clearable placeholder="请输入客服电话"></el-input><br /><br />
							<span class="spanClass"><span class="aKey">*</span>收款方编号：</span>
							<el-input :disabled="false" v-model="addB.mchnt_id" clearable placeholder="请输入收款方ID"></el-input>
							<el-tooltip placement="top">
								<div slot="content">商户在支付宝注册的唯一标识<br/></div>
								<img src="../../../static/image/ming.png" alt="">
							</el-tooltip><br /><br />
							<!-- <span class="spanClass"><span class="aKey">*</span>商户编号：</span>
							<el-input :disabled="false" v-model="addB.customer_id" clearable placeholder="请输入收费说明"></el-input><br /><br /> -->
							
							<!-- <span class="spanClass"><span class="aKey">*</span>停车单价：</span>
							<el-input :disabled="false" v-model="addB.price" clearable placeholder="如：5元/小时" class="simplew"></el-input>&nbsp;&nbsp;元/小时<br /><br /> -->

							
							<!-- <el-tooltip placement="top">
								<div slot="content">车主缴费后需在该时间之内驶离停车场<br/></div>
								<img src="../../../static/image/ming.png" alt="">
							</el-tooltip><br /><br />
							 -->
							
							
							<!-- <span class="spanClass"><span class="aKey">*</span>最高时长：</span>
							<el-input :disabled="false" v-model="addB.high_time" clearable placeholder="如：30分钟" class="simplew"></el-input>&nbsp;&nbsp;&nbsp;分钟<br /><br />								 -->
					</el-col>
				</el-row>
			</div>
			<div v-if="active==2&&choses==true">
				<el-row>
					<el-col :span="12">
							<!-- <span class="spanClass"><span class="aKey">*</span>停车场名称：</span>
							<el-input :disabled="false" v-model="addA.parking_name" clearable placeholder="请输入停车场名称"></el-input><br /><br /> -->
							<!-- <span class="spanClass"><span class="aKey">*</span>停车场地址：</span>
							<el-input :disabled="false" v-model="addA.parking_address" clearable placeholder="请输入停车场地址"></el-input><br /><br /> -->
							<!-- <span class="spanClass"><span class="aKey">*</span>停车场类型：</span>
							<el-select v-model="addA.parking_lot_type" placeholder="请选择停车场类型">
								<el-option value="">未选择</el-option>
								<el-option v-for="nice in gstylelast" :key="nice.id" :label="nice.type" :value="nice.type"></el-option>
							</el-select><br /><br /> -->
							<span class="spanClass"><span class="aKey">*</span>客服电话：</span>
							<el-input :disabled="false" v-model="addA.parking_mobile" clearable placeholder="请输入客服电话"></el-input><br /><br />
							
							
							<span class="spanClass">备注：</span><div class="little">{{this.$store.state.size}}</div>
					</el-col>
					<el-col :span="12">
							<!-- <span class="spanClass"><span class="aKey">*</span>选择客户：</span>
							<el-select v-model="addA.fauModeaa" placeholder="请选择客户">
								<el-option value="">未选择</el-option>
								<el-option v-for="item in choisecust" :key="item.customer_id" :label="item.customer_name" :value="item.customer_name"></el-option>
							</el-select><br /><br /> -->
							<!-- <span class="spanClass"><span class="aKey">*</span>收费说明：</span>
							<el-input :disabled="false" v-model="addA.parking_fee_description" clearable placeholder="如：小车5元每小时"></el-input><br /><br /> -->
							
							<!-- <span class="spanClass"><span class="aKey">*</span>超时时间：</span>
							<el-input :disabled="false" v-model="addA.time_out" clearable placeholder="如：30分钟" class="simplew"></el-input>&nbsp;&nbsp;分钟 -->
							<!-- <el-tooltip placement="top">
								<div slot="content">车主缴费后需在该时间之内驶离停车场<br/></div>
								<img src="../../../static/image/ming.png" alt="">
							</el-tooltip><br /><br /> -->
							<!-- <span class="spanClass"><span class="aKey">*</span>最高收费：</span>
							<el-input :disabled="false" v-model="addA.high_price" clearable placeholder="如：50元" class="simplew"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;元
							<el-tooltip placement="top">
								<div slot="content">单个车牌在停车场每日缴费最高额度<br/>如超出该额度则当日免费停车，第二天重置</div>
								<img src="../../../static/image/ming.png" alt="">
							</el-tooltip><br /><br />	 -->
							<!-- <span class="spanClass"><span class="aKey">*</span>车位总数：</span>
							<el-input :disabled="false" v-model="addA.carportcount" clearable placeholder="如：500个" class="simplew"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;个<br /><br /> -->
							
					</el-col>
				</el-row>
			</div>
			<div v-if="active==1">
				<div>
					<el-row>
						<el-col :span="12">
							<span class="spanClass"><span class="aKey">*</span>停车场名称：</span>
							<el-input :disabled="false" v-model="addB.parking_name" clearable placeholder="请输入停车场名称"></el-input><br /><br />
							<span class="spanClass"><span class="aKey">*</span>停车场地址：</span>
							<el-input :disabled="false" v-model="addB.parking_address" clearable placeholder="请输入停车场地址"></el-input><br /><br />
							<span class="spanClass"><span class="aKey">*</span>停车场类型：</span>
							<el-select v-model="addB.parking_lot_type" placeholder="请选择停车场类型">
								<el-option value="">未选择</el-option>
								<el-option v-for="nice in gstylelast" :key="nice.id" :label="nice.type" :value="nice.type"></el-option>
							</el-select><br /><br />
							
							
							<span class="spanClass">优惠方案：</span>
							<el-select v-model="addB.plans_id" placeholder="请选择停车优惠方案">
								<el-option value="">未选择</el-option>
								<el-option v-for="nice in preferential" :key="nice.id" :label="nice.plans_name" :value="nice.plans_id"></el-option>
							</el-select><br /><br />
							
							<!-- <span class="spanClass"><span class="aKey">*</span>计费单价：</span>
							<el-input :disabled="false" v-model="addB.parking_fee_description" clearable placeholder="如：小车5元每小时" @blur="focus100()"></el-input><br /><br />	 -->
							<span class="spanClass">平台编号：</span>
							<el-input :disabled="true" v-model="bianhao" clearable placeholder="请输入平台编号"></el-input><br /><br />
							<span class="spanClass"><span class="aKey">*</span>车位总数：</span>
							<el-input :disabled="false" v-model="addB.carportcount" clearable placeholder="如：500个" class="simplew"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;个<br /><br />
							
						</el-col>
						<el-col :span="12">
							<span class="spanClass"><span class="aKey">*</span>停车单价：</span>
							<el-input :disabled="false" v-model="addB.price" clearable placeholder="如：5元/小时" class="simplew"></el-input>&nbsp;&nbsp;元/小时<br /><br />
							<span class="spanClass"><span class="aKey">*</span>超时时间：</span>
							<el-input :disabled="false" v-model="addB.time_out" clearable placeholder="如：30分钟" class="simplew"></el-input>&nbsp;&nbsp;分钟
							<el-tooltip placement="top">
								<div slot="content">订单支付完成车辆在该段时间内驶离无需再次缴费<br/></div>
								<img src="../../../static/image/ming.png" alt="">
							</el-tooltip><br /><br />
							<span class="spanClass"><span class="aKey">*</span>免费时长：</span>
							<el-input :disabled="false" v-model="addB.free_time" clearable placeholder="如：30分钟" class="simplew"></el-input>&nbsp;&nbsp;分钟
							<el-tooltip placement="top">
								<div slot="content">车主进入停车场在该时间之内驶离无需缴费<br/></div>
								<img src="../../../static/image/ming.png" alt="">
							</el-tooltip><br /><br />
							
							<span class="spanClass"><span class="aKey">*</span>最高收费：</span>
							<el-input :disabled="false" v-model="addB.high_price" clearable placeholder="如：50元" class="simplew"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;元
							<el-tooltip placement="top">
								<div slot="content">超出该额度 当日剩余时间免费<br/></div>
								<img src="../../../static/image/ming.png" alt="">
							</el-tooltip><br /><br />
							<span class="spanClass"><span class="aKey">*</span>最高时长：</span>
							<el-input :disabled="false" v-model="addB.high_time" clearable placeholder="如：30分钟" class="simplew"></el-input>&nbsp;&nbsp;&nbsp;分钟
							<el-tooltip placement="top">
								<div slot="content">当次停车达到最高时长计为最高费用<br/></div>
								<img src="../../../static/image/ming.png" alt="">
							</el-tooltip><br /><br />
						</el-col>
					</el-row>
				</div>
				
				
				
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.add = false">取消</el-button>
				<el-button style="margin-top: 12px;" type="success" class="oyButton" @click="prev" v-if="active==1||active==2">上一步</el-button>
				<el-button style="margin-top: 12px;" type="success" class="oyButton" @click="next" v-if="active==0||active==1">下一步</el-button>
				<el-button style="margin-top: 12px;" type="success" class="oyButton" v-if="active==2" @click="addClick">保存</el-button>


				
				<!-- <el-button type="success" class="oyButton" @click="addClick">保存</el-button> -->
			</div>
		</el-dialog>
		<el-dialog title="绑定道闸设备" :visible.sync="universal.barrier">
			<div class="totalcard">
				<div class="leftcard">
					<span class="spanClass"><span class="aKey">*</span>道闸名称：</span>
					<el-input :disabled="false" v-model="barrier.alias" clearable placeholder="请输入道闸名称"></el-input><br /><br />
					<span class="spanClass"><span class="aKey">*</span>道闸方向：</span>
					<el-select v-model="barrier.InOut" placeholder="请选择道闸进出方向">
						<el-option value="">未选择</el-option>
						<el-option v-for="item in arrow" :key="item.value" :label="item.type" :value="item.value" ></el-option>
					</el-select><br /><br />
					<span class="spanClass"><span class="aKey">*</span>道闸编号：</span>
					<el-select v-model="barrier.deviceId" placeholder="请选择道闸编号" @change="changecarrld">
						<el-option value="">未选择</el-option>
						<el-option v-for="item in signo" :key="item.systime" :label="item.deviceld" :value="item.deviceld" ></el-option>
					</el-select><span v-show="parkingcral">该道闸已绑定停车场</span><br /><br />
				</div>	
				<span class="spanClass">备注：</span><div class="little">{{this.$store.state.size}}</div>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.barrier=false">取消</el-button>
				<el-button type="success" class="oyButton" @click="barrierclick">确定</el-button>
			</div>
		</el-dialog>
		<el-dialog title="查看优惠方案" :visible.sync="universal.substantial">
			<div class="subst">
				<ul>
					<li v-for="item in law">
						<el-row>
							<el-col :span="2">
								<div style="width:100%;height:120px"></div>
							</el-col>
							<el-col :span="10">
								<span class="">满优惠金额：</span><span class="">{{item.full | numnewchose}}</span><br>
								<span class="">减优惠金额：</span><span class="">{{item.subtract | numnewchose}}</span><br>
								<span class="">打折优惠金额：</span><span class="">{{item.subtract | numnew}}</span><br>
							</el-col>
							<el-col :span="10">
								<span class="">优惠开始时间：</span><span class="">{{item.start_time|numnew}}</span><br>
								<span class="">优惠结束时间：</span><span class="">{{item.end_time|numnew}}</span><br>
								<span class="">优惠说明：</span><span class="">{{item.percent|numnew}}</span><br>
							</el-col>
							<el-col :span="2">
							</el-col>
						</el-row>
					</li>
				</ul>
			</div>
		</el-dialog>
		<el-dialog title="查看道闸白名单" :visible.sync="universal.unity">
			<div class="total">
				<el-row>
					<template>
					<el-table
						:data="tablemark"
						style="width: 100%"
						max-height="400">
						<el-table-column
						prop="carnumber"
						label="车牌号码"
						>
						</el-table-column>
						<el-table-column
						prop="username"
						label="用户姓名"
						>
						</el-table-column>
						<el-table-column
						prop="nbenable"
						label="有效标记"
						>
						</el-table-column>
						<el-table-column
						prop="nisblacklist"
						label="黑名单"
						>
						</el-table-column>
						<el-table-column
						prop="nisusingtimeseg"
						label="时间段匹配"
						>
						</el-table-column>
						<el-table-column
						prop="startTime"
						label="生效时间"
						>
						</el-table-column>
						<el-table-column
						prop="endTime"
						label="结束时间"
						>
						</el-table-column>
						<el-table-column
						fixed="right"
						label="操作"
						>
						<template slot-scope="scope">
							<!-- <el-button
							@click.native.prevent="deleteRow(scope.row, tableDatabox)"
							type="text"
							size="small">
							移除
							</el-button> -->
							<el-tooltip class="item" effect="dark" content="修改" placement="top">
								<i class="icon-change el-icon-edit" @click="handleEdit(scope.row)"></i>
							</el-tooltip>
							<el-tooltip class="item" effect="dark" content="删除" placement="top">
								<i class="icon-delete el-icon-delete" @click="deleteRow(scope.row)"></i>
							</el-tooltip>
							 <!-- <el-button
							size="mini"
							@click="handleEdit(scope.$index, scope.row)">编辑</el-button>
							<el-button
							size="mini"
							type="danger"
							@click="deleteRow(scope.row)">删除</el-button> -->
						</template>
						</el-table-column>
					</el-table>
					</template>

				</el-row>
			</div>
		</el-dialog>
		<el-dialog title="添加道闸白名单" :visible.sync="universal.setwhitebarr" class="changediv">
			<div class="total">
				<el-row>
					<el-col :span="12">
						<span class="spanClassT"><span class="aKey">*</span>停车场编号：</span>
						<el-input :disabled="true" v-model="setwhitebarr.parkingId" clearable placeholder="请输入内容"></el-input><!--<span>请输入账号</span>--><br /><br />
						
						<span class="spanClassT"><span class="aKey">*</span>车牌号码：</span>
						<el-input :disabled="false" v-model="setwhitebarr.carnumber" clearable placeholder="请输入内容"></el-input><br /><br />

						<span class="spanClassT"><span class="aKey">*</span>用户姓名：</span>
						<el-input :disabled="false" v-model="setwhitebarr.username" clearable placeholder="请输入内容"></el-input><br /><br />
								
						<span class="spanClassT"><span class="aKey">*</span>用户编码：</span>
						<el-input :disabled="true" v-model="setwhitebarr.usercode" clearable placeholder="请输入内容"></el-input><br /><br />

						<span class="spanClassT"><span class="aKey">*</span>有效标记：</span>
						<el-select v-model="setwhitebarr.nbenable" placeholder="请选择">
						 	<el-option v-for="item in numtable" :key="item.value" :label="item.type" :value="item.value"></el-option>
						</el-select><br /><br />
						<!-- <div style="width:200px;float:right;">
							<el-radio v-model="radio" label="1">备选项</el-radio>
  							<el-radio v-model="radio" label="2">备选项</el-radio>
						</div> -->
						
					</el-col>
					<el-col :span="12">
						
						
						<span class="spanClassT"><span class="aKey">*</span>黑名单：</span>
						<el-select v-model="setwhitebarr.nisblacklist" placeholder="请选择">
						 	<el-option v-for="item in numtables" :key="item.value" :label="item.type" :value="item.value"></el-option>
						</el-select><br /><br />

						<span class="spanClassT"><span class="aKey">*</span>时间段匹配：</span>
						<el-select v-model="setwhitebarr.nisusingtimeseg" placeholder="请选择">
						 	<el-option v-for="item in numtabless" :key="item.value" :label="item.type" :value="item.value"></el-option>
						</el-select><br /><br />
								
						<span class="spanClassT"><span class="aKey">*</span>生效时间：</span>
						<el-date-picker v-model="setwhitebarr.startTime" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />

						<span class="spanClassT"><span class="aKey">*</span>创建时间：</span>
						<el-date-picker v-model="setwhitebarr.createTime" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />
								
						<span class="spanClassT"><span class="aKey">*</span>结束时间：</span>
						<el-date-picker v-model="setwhitebarr.endTime" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />
					</el-col>
				</el-row>
				<span class="spanClassT"><span class="aKey">*</span>备注：</span><div class="little">{{this.$store.state.size}}</div>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.setwhitebarr = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="setwhiteaddClick">添加</el-button>
			</div>
		</el-dialog>
		<el-dialog title="修改道闸白名单" :visible.sync="universal.changewhitebarr" class="changediv">
			<div class="total">
				<el-row>
					<el-col :span="12">
						<span class="spanClassT"><span class="aKey">*</span>停车场编号：</span>
						<el-input :disabled="true" v-model="changewhitebarr.parkingId" clearable placeholder="请输入内容"></el-input><br /><br />
						
						<span class="spanClassT"><span class="aKey">*</span>车牌号码：</span>
						<el-input :disabled="false" v-model="changewhitebarr.carnumber" clearable placeholder="请输入内容"></el-input><br /><br />

						<span class="spanClassT"><span class="aKey">*</span>用户姓名：</span>
						<el-input :disabled="false" v-model="changewhitebarr.username" clearable placeholder="请输入内容"></el-input><br /><br />
								
						<span class="spanClassT"><span class="aKey">*</span>用户编码：</span>
						<el-input :disabled="true" v-model="changewhitebarr.usercode" clearable placeholder="请输入内容"></el-input><br /><br />

						<span class="spanClassT"><span class="aKey">*</span>有效标记：</span>
						<el-select v-model="changewhitebarr.nbenable" placeholder="请选择">
						 	<el-option v-for="item in numtable" :key="item.value" :label="item.type" :value="item.value"></el-option>
						</el-select><br /><br />
					</el-col>
					<el-col :span="12">
						
						
						<span class="spanClassT"><span class="aKey">*</span>黑名单：</span>
						<el-select v-model="changewhitebarr.nisblacklist" placeholder="请选择">
						 	<el-option v-for="item in numtables" :key="item.value" :label="item.type" :value="item.value"></el-option>
						</el-select><br /><br />

						<span class="spanClassT"><span class="aKey">*</span>时间段匹配：</span>
						<el-select v-model="changewhitebarr.nisusingtimeseg" placeholder="请选择">
						 	<el-option v-for="item in numtabless" :key="item.value" :label="item.type" :value="item.value"></el-option>
						</el-select><br /><br />
								
						<span class="spanClassT"><span class="aKey">*</span>生效时间：</span>
						<el-date-picker v-model="changewhitebarr.startTime" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />
								
						<span class="spanClassT"><span class="aKey">*</span>结束时间：</span>
						<el-date-picker v-model="changewhitebarr.endTime" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />
					</el-col>
				</el-row>
				<span class="spanClassT"><span class="aKey">*</span>备注：</span><div class="little">{{this.$store.state.size}}</div>
			</div>
			 <div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.changewhitebarr = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="changewhiteaddClick">确认</el-button>
			</div>
		</el-dialog>
		<el-dialog title="修改" :visible.sync="universal.change" v-if="changetype==1">
			<el-row class="imgver">
				<el-col :span="12">
					<span class="spanClass"><span class="aKey">*</span>停车场编号：</span>
					<el-input :disabled="true" v-model="change.parking_id" clearable placeholder="请输入内容" class="longinput"></el-input><br /><br />
					
					<!-- <span class="spanClass"><span class="aKey">*</span>平台停车场编号：</span>
					<el-input :disabled="true" v-model="change.out_parking_id" clearable placeholder="请输入内容" class="longinput"></el-input><br /><br /> -->
					<span class="spanClass"><span class="aKey">*</span>停车场地址：</span>
					<el-input :disabled="false" v-model="change.parking_address" clearable placeholder="请输入内容"></el-input><br /><br />
					
					<span class="spanClass"><span class="aKey">*</span>停车场类型：</span>
					<el-select v-model="change.parking_lot_type" placeholder="请选择">
						<el-option v-for="itemtpye in gstylelast" :key="itemtpye.id" :label="itemtpye.type" :value="itemtpye.type"></el-option>
					</el-select><br /><br />
							
					<span class="spanClass"><span class="aKey">*</span>地图标识：</span>
					<el-input :disabled="false" v-model="change.parking_poiid" clearable placeholder="请输入内容"></el-input>
					<el-tooltip placement="top">
						<div slot="content" style="cursor: pointer" @click="listclick">请登陆https://ditu.amap.com直接搜索位置<br/>url链接后显示高德地图唯一标识</div>
						<img src="../../../static/image/ming.png" alt="">
					</el-tooltip><br /><br />

					<span class="spanClass"><span class="aKey">*</span>客服电话：</span>
					<el-input :disabled="false" v-model="change.parking_mobile" clearable placeholder="请输入内容"></el-input><br /><br />
					
					<!-- <span class="spanClass"><span class="aKey">*</span>支付方式：</span>
					<el-select v-model="change.pay_type" placeholder="请选择支付方式">
						<el-option value="">未选择</el-option>
						<el-option v-for="item in moneypay" :key="item.id" :label="item.type" :value="item.type"></el-option>
					</el-select><br /><br /> -->
					
					

					<!-- <span class="spanClass"><span class="aKey">*</span>计费单价：</span>
					<el-input :disabled="false" v-model="change.parking_fee_description" clearable placeholder="请输入内容"></el-input><br /><br /> -->
					<span class="spanClass"><span class="aKey">*</span>优惠方案：</span>
					<el-select v-model="change.isBindSalePlants" placeholder="请选择停车优惠方案" @change="changval2">
						<el-option value="">未选择</el-option>
						<el-option v-for="nice in preferential" :key="nice.id" :label="nice.plans_name" :value="nice.plans_id"></el-option>
					</el-select><br /><br />
					<span class="spanClass"><span class="aKey">*</span>车位总数：</span>
					<el-input :disabled="false" v-model="change.carportcount" clearable placeholder="请输入内容"></el-input>个<br /><br />
				</el-col>
				<el-col :span="12">
					<span class="spanClass"><span class="aKey">*</span>停车场名称：</span>
					<el-input :disabled="false" v-model="change.parking_name" clearable placeholder="请输入内容"></el-input><br /><br />
					
					<span class="spanClass"><span class="aKey">*</span>收款方编号：</span>
					<el-input :disabled="false" v-model="change.mchnt_id" clearable placeholder="请输入内容"></el-input>
					<el-tooltip placement="top">
						<div slot="content">商户在支付宝注册的唯一标识<br/></div>
						<img src="../../../static/image/ming.png" alt="">
					</el-tooltip><br /><br />

					<span class="spanClass"><span class="aKey">*</span>超时时间：</span>
					<el-input :disabled="false" v-model="change.time_out" clearable placeholder="请输入内容" @blur="focus()"></el-input>
					<el-tooltip placement="top">
						<div slot="content">订单支付完成车辆在该段时间内驶离无需再次缴费<br/>></div>
						<img src="../../../static/image/ming.png" alt="">
					</el-tooltip><br /><br />

					<span class="spanClass"><span class="aKey">*</span>停车单价：</span>
					<el-input :disabled="false" v-model="change.price" clearable placeholder="请输入内容" @blur="focus2()"></el-input><br /><br />
					
					<span class="spanClass"><span class="aKey">*</span>免费时长：</span>
					<el-input :disabled="false" v-model="change.free_time" clearable placeholder="请输入内容" @blur="focus4()"></el-input>
					<el-tooltip placement="top">
						<div slot="content">车主进入停车场在该时间之内驶离无需缴费<br/></div>
						<img src="../../../static/image/ming.png" alt="">
					</el-tooltip><br /><br />
					
					<span class="spanClass"><span class="aKey">*</span>最高时长：</span>
					<el-input :disabled="false" v-model="change.high_time" clearable placeholder="请输入内容" @blur="focus7()"></el-input>
					<el-tooltip placement="top">
						<div slot="content">当次停车达到最高时长计为最高费用<br/></div>
						<img src="../../../static/image/ming.png" alt="">
					</el-tooltip><br /><br />	
							
					<span class="spanClass"><span class="aKey">*</span>最高收费：</span>
					<el-input :disabled="false" v-model="change.high_price" clearable placeholder="请输入内容" @blur="focus6()"></el-input>
					<el-tooltip placement="top">
						<div slot="content">超出该额度 当日剩余时间免费<br/></div>
						<img src="../../../static/image/ming.png" alt="">
					</el-tooltip><br /><br />	
					
					
				</el-col>
			</el-row>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="hideclick">取消</el-button>
				<el-button type="success" class="oyButton" @click="changeClick">修改</el-button>
			</div>
		</el-dialog>
		<el-dialog title="修改" :visible.sync="universal.change1" v-if="changetype==0">
			<el-row>
				<el-col :span="12">
					<span class="spanClass"><span class="aKey">*</span>停车场名称：</span>
					<el-input :disabled="false" v-model="change1.parking_name" clearable placeholder="请输入内容"></el-input><br /><br />
					<span class="spanClass"><span class="aKey">*</span>停车场地址：</span>
					<el-input :disabled="false" v-model="change1.parking_address" clearable placeholder="请输入内容"></el-input><br /><br />
					
					<span class="spanClass"><span class="aKey">*</span>停车场类型：</span>
					<el-select v-model="change1.parking_lot_type" placeholder="请选择">
						<el-option v-for="itemtpye in gstylelast" :key="itemtpye.id" :label="itemtpye.type" :value="itemtpye.type"></el-option>
					</el-select><br /><br />

					<span class="spanClass"><span class="aKey">*</span>客服电话：</span>
					<el-input :disabled="false" v-model="change1.parking_mobile" clearable placeholder="请输入内容"></el-input><br /><br />
					
					<!-- <span class="spanClass"><span class="aKey">*</span>计费单价：</span>
					<el-input :disabled="false" v-model="change1.parking_fee_description" clearable placeholder="请输入内容"></el-input><br /><br /> -->
					<span class="spanClass"><span class="aKey">*</span>最高时长：</span>
					<el-input :disabled="false" v-model="change1.high_time" clearable placeholder="请输入内容" @blur="focus97()"></el-input>
					<el-tooltip placement="top">
						<div slot="content">当次停车达到最高时长计为最高费用<br/></div>
						<img src="../../../static/image/ming.png" alt="">
					</el-tooltip><br /><br />
					<span class="spanClass"><span class="aKey">*</span>优惠方案：</span>
					<el-select v-model="change1.isBindSalePlants" placeholder="请选择停车优惠方案" @change="changval1">
					<el-option value="">未选择</el-option>
					<el-option v-for="nice in preferential" :key="nice.id" :label="nice.plans_name" :value="nice.plans_id"></el-option>
				</el-select><br /><br />
					
				</el-col>
				<el-col :span="12">
					<span class="spanClass"><span class="aKey">*</span>停车单价：</span>
					<el-input :disabled="false" v-model="change1.price" clearable placeholder="请输入内容" @blur="focus3()"></el-input><br /><br />
					<span class="spanClass"><span class="aKey">*</span>免费时长：</span>
					<el-input :disabled="false" v-model="change1.free_time" clearable placeholder="请输入内容" @blur="focus5()"></el-input>
					<el-tooltip placement="top">
						<div slot="content">车主进入停车场在该时间之内驶离无需缴费<br/></div>
						<img src="../../../static/image/ming.png" alt="" class="syle">
					</el-tooltip><br /><br />
					<span class="spanClass"><span class="aKey">*</span>最高收费：</span>
					<el-input :disabled="false" v-model="change1.high_price" clearable placeholder="请输入内容" @blur="focus8()"></el-input>
					<el-tooltip placement="top">
						<div slot="content">超出该额度 当日剩余时间免费<br/></div>
						<img src="../../../static/image/ming.png" alt="" class="syle">
					</el-tooltip><br /><br />

					<span class="spanClass"><span class="aKey">*</span>超时时间：</span>
					<el-input :disabled="false" v-model="change1.time_out" clearable placeholder="请输入内容" @blur="focus1()"></el-input>
					<el-tooltip placement="top">
						<div slot="content">订单支付完成车辆在该段时间内驶离无需再次缴费<br/></div>
						<img src="../../../static/image/ming.png" alt="" class="syle">
					</el-tooltip><br /><br />

					<span class="spanClass"><span class="aKey">*</span>车位总数：</span>
					<el-input :disabled="false" v-model="change1.carportcount" clearable placeholder="请输入内容"></el-input><br /><br />
					
				</el-col>
			</el-row>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="hideclick">取消</el-button>
				<el-button type="success" class="oyButton" @click="change1Click">修改</el-button>
			</div>
		</el-dialog>
		<el-dialog title="查看详情" :visible.sync="universal.details">
			<div class="letg">
				<el-row>
					<el-col :span="12"><div class="grid-content">停车场名称：</div>{{details.parking_name}}</el-col>
					<el-col :span="12"><div class="grid-content">最高时长：</div>{{details.high_time}}</el-col>
					<el-col :span="12"><div class="grid-content">停车场类型：</div>{{details.parking_lot_type}}</el-col>
					
					
					
					<el-col :span="12"><div class="grid-content">更新日期：</div>{{details.date}}</el-col>
					
					<el-col :span="12"><div class="grid-content">超时时间：</div>{{details.time_out}}</el-col>
					<el-col :span="12"><div class="grid-content">免费时长：</div>{{details.free_time}}</el-col>
				</el-row>
				<el-row> 
					<el-col :span="12"><div class="grid-content">地图标识：</div>{{details.parking_poiid}}</el-col>
					<!-- <el-col :span="12"><div class="grid-content">计费单价：</div>{{details.parking_fee_description}}</el-col> -->
					<el-col :span="12"><div class="grid-content">停车单价：</div>{{details.price}}</el-col>
					<el-col :span="12"><div class="grid-content">客服电话：</div>{{details.parking_mobile}}</el-col>
					
					<el-col :span="12"><div class="grid-content">车位总数：</div>{{details.carportcount}}</el-col>
					<!-- <el-col :span="12"><div class="grid-content">优惠方案：</div>{{details.isBindSalePlants}}</el-col> -->
					
					<el-col :span="24"><div class="grid-content" style="width:15%">停车场地址：</div>{{details.parking_address}}</el-col>
				</el-row>
				
			 </div>
		</el-dialog>
		<el-dialog title="查看详情" :visible.sync="universal.seedetails">
			<div class="letg">
				<el-row>
					
					<el-col :span="12"><div class="grid-content">停车场名称：</div>{{seedetails.parking_name}}</el-col>
					<el-col :span="12"><div class="grid-content">超时时间：</div>{{seedetails.time_out}}</el-col>
					<el-col :span="12"><div class="grid-content">停车场类型：</div>{{seedetails.parking_lot_type}}</el-col>
					<el-col :span="12"><div class="grid-content">停车单价：</div>{{seedetails.price}}</el-col>
					<!-- <el-col :span="12"><div class="grid-content">优惠方案：</div>{{seedetails.isBindSalePlants}}</el-col> -->
					<el-col :span="12"><div class="grid-content">最高时长：</div>{{seedetails.high_time}}</el-col>
					<el-col :span="12"><div class="grid-content">免费时长：</div>{{seedetails.free_time}}</el-col>
				</el-row>
				<el-row> 
					<!-- <el-col :span="12"><div class="grid-content">计费单价：</div>{{seedetails.parking_fee_description}}</el-col> -->
					<el-col :span="12"><div class="grid-content">客服电话：</div>{{seedetails.parking_mobile}}</el-col>
					<el-col :span="12"><div class="grid-content">车位总数：</div>{{seedetails.carportcount}}</el-col>
					
					
					<el-col :span="24"><div class="grid-content" style="width:15%">停车场地址：</div>{{seedetails.parking_address}}</el-col>
				</el-row>
				
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
	import {mapState} from 'vuex'
	import {searchClicks} from '../api/api.js'
	export default {
		name: 'equipmentList',
		data() {
			return {
				parkingcral:false,
				preferential:[],
				chose:true,
				choses:false,
				active: 1,
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
				// choisecust:[],
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
				obj:[],
				law:[],
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
					change1:false,
					substantial:false,
					details:false,
					seedetails:false,
					setwhitebarr:false,
					changewhitebarr:false,
					unity:false,
				},
				 radio: '1',
				setwhitebarr:{
					parkingId:'',
					carnumber:'',
					username:'',
					usercode:'',
					nbenable:'',
					nisusingtimeseg:'',
					startTime:'',
					endTime:'',
					nisblacklist:'',
					createTime:''
				},
				changewhitebarr:{
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
				tablemark:[],
				numtables:[{
					value:0,
					type:'不是'
				},
				{
					value:1,
					type:'是'
				}],
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
					// fauModeaa:'',
					carportcount:'',
					price:'',
					time_out:'',
					free_time:'',
					high_price:'',
					parking_lot_type:'',
					high_time:''
				},
				bianhao:'',
				addB:{
					customer_id:'',
					// out_parking_id:'',
					parking_address:'',
					parking_poiid:'',
					parking_mobile:'',
					// parking_fee_description:'',
					carportcount:'',
					parking_name:'',
					mchnt_id:'',
					price:'',
					time_out:'',
					free_time:'',
					high_price:'',
					parking_lot_type:'',
					pay_type:'',
					high_time:'',
					plans_id:'',
					parking_id:''
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
					// parking_fee_description:'',
					free_time:'',
					high_time:'',
					time_out:'',
					price:'',
					carportcount:'',
					isBindSalePlants:''
				},
				seedetails:{
					parking_name:'',
					parking_address:'',
					parking_lot_type:'',
					parking_mobile:'',
					// parking_fee_description:'',
					free_time:'',
					high_time:'',
					time_out:'',
					price:'',
					carportcount:'',
					isBindSalePlants:''
				},
				details:{
					parking_address:'',
					fauCode:'',
					parking_mobile:'',
					price:'',
					date:'',
					parking_name:'',
					free_time:'',
					parking_poiid:'',
					// parking_fee_description:'',
					high_time:'',
					time_out:'',
					parking_lot_type:'',
					carportcount:'',
					isBindSalePlants:''
				},
				replaces:'',
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
					// parking_fee_description:'',
					high_time:'',
					time_out:'',
					parking_lot_type:'',
					carportcount:'',
					isBindSalePlants:''
				},
				showchose:''
			}
		},
		mounted: function() {
			document.title=this.$route.meta.title;
			if(localStorage.getItem('dealer')==0||localStorage.getItem('dealer')==123){
				this.showchose=true
			}else{
				this.showchose=false
			}
			this.searchClick();
			this.gongyong()
			// this.downList();
			// this.common.login()
		},
		computed:{
			...mapState(['gstylelast'])
		},
		methods: {
			ifUsePoints(row){
				let that = this
				this.$confirm('是否使用积分系统?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(()=>{
					axios({
						method:'post',
						url:that.$store.state.url+'/MarkRecords/isUseMark',
						data:Qs.stringify({
							id:row.id,
							isUseMark: 1
						})
					}).then((msg) => {
						let data = msg.data
						if(data.resCode === '0'){
							that.$message({message:data.result,type:'success'})
						}
						if(data.resCode === '1'){
							that.$message({message:data.result,type:'error'})
						}
					}).catch(err => {
							that.$message({message:err,type:'error'})
					})
				})
			},
			changewhiteaddClick(a){
				if(this.changewhitebarr.nbenable=='不启用'){
					this.changewhitebarr.nbenable=0
				}else{
					this.changewhitebarr.nbenable=1
				}
				if(this.changewhitebarr.nisusingtimeseg=='不启用'){
					this.changewhitebarr.nisusingtimeseg=0
				}else{
					this.changewhitebarr.nisusingtimeseg=1
				}
				if(this.changewhitebarr.nisblacklist=='不是'){
					this.changewhitebarr.nisblacklist=0
				}else{
					this.changewhitebarr.nisblacklist=1
				}
				let dataS={
					parkingId:this.changewhitebarr.parkingId,
					carnumber:this.changewhitebarr.carnumber,
					username:this.changewhitebarr.username,
					usercode:this.changewhitebarr.usercode,
					nbenable:this.changewhitebarr.nbenable,
					nisusingtimeseg:this.changewhitebarr.nisusingtimeseg,
					startTime:this.changewhitebarr.startTime,
					endTime:this.changewhitebarr.endTime,
					createTime:this.changewhitebarr.createTime,
					nisblacklist:this.changewhitebarr.nisblacklist,
				}
				let that=this;
				axios({
					method:'post',
					url:'http://192.168.2.110:3010/wirite/single/update',
					data:Qs.stringify(dataS)
				}).then(function(message){
					if(message.data.code==200){
						that.$message({
				        	message: '修改成功',
				        	type: 'success'
						});
						that.universal.changewhitebarr=false;
					}else{
						that.$message({
				        	message: '修改失败',
				        	type: 'error'
				        });
					}
				})
			},
			handleEdit(row){
				this.changewhitebarr.parkingId=row.parkingId,
				this.changewhitebarr.carnumber=row.carnumber,
				this.changewhitebarr.username=row.username,
				this.changewhitebarr.usercode=row.usercode,
				this.changewhitebarr.nbenable=row.nbenable,
				this.changewhitebarr.nisusingtimeseg=row.nisusingtimeseg,
				this.changewhitebarr.startTime=row.startTime,
				this.changewhitebarr.endTime=row.endTime,
				this.changewhitebarr.createTime=row.createTime,
				this.changewhitebarr.nisblacklist=row.nisblacklist,
				this.universal.changewhitebarr=true;
			},
			detailslook(row){
				if(row.parking_poiid==""){
					this.universal.seedetails= true;
					this.seedetails= Object.assign({},row);
				}else{
					this.universal.details = true;
					this.details= Object.assign({},row);
				}
				
				this.gstylelast.forEach((item, index) => {
					if(item.value==row.parking_lot_type){
						this.details.parking_lot_type=item.type
					}
				});  
				this.gstylelast.forEach((item, index) => {
					if(item.value==row.parking_lot_type){
						this.seedetails.parking_lot_type=item.type
					}
				});    
				this.preferential.forEach((item, index) => {
					if(item.isBindSalePlants==row.isBindSalePlants){
						this.details.isBindSalePlants=item.plans_id
					}
				});  
				this.preferential.forEach((item, index) => {
					if(item.plans_id==row.isBindSalePlants){
						this.seedetails.isBindSalePlants=item.plans_id
					}
				});  
	
				this.details.time_out=row.time_out+'分钟'
				this.details.price=row.price+'元/小时'
				this.details.free_time=row.free_time+'分钟'
				this.details.high_time=row.high_time+'分钟'
				this.details.high_price=row.high_price+'元'
				this.details.date=this.common.timeToDate(JSON.stringify(row.date.time).slice(0,10))
				this.seedetails.time_out=row.time_out+'分钟'
				this.seedetails.price=row.price+'元/小时'
				this.seedetails.free_time=row.free_time+'分钟'
				this.seedetails.high_time=row.high_time+'分钟'
				this.seedetails.high_price=row.high_price+'元'
			},
			listclick(){
				window.open('https://ditu.amap.com')
			},
			changecarrld(val){
				searchClicks('/Device/queryBindLot',{
					deviceId:val
				}).then(res=>{
					if(res.data.resCode==0){
						this.parkingcral=true;
					}else if(res.data.resCode==1){ 
						this.parkingcral=false;   
						// this.$message({
						// 	message: '该设备未绑定停车场',
						// 	type: 'error'
						// });
					}
				})
			},	
			changebox(){
				this.chose=true;
				this.choses=false
			},
			changebox1(){
				this.chose=false;
				this.choses=true
			},
			prev(){
				--this.active;
				if(this.active<0){
					this.active=0
				}
			},
			next() {
				if (this.active++ > 2) this.active = 0;
			},
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
			deleteRow(a){
				console.log(this.replaces)
				let dataS={
					parkingId:this.replaces,
					id:a.id,
					ncarid:a.ncarid,
					nuserid:a.nuserid
				}
				let that = this;
				this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					axios({
						method:'post',
						url:'http://192.168.2.110:3010/wirite/single/del',
						data:Qs.stringify(dataS)
					}).then(function(message){
						console.log(message)
						that.preferential=message.data.result;
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			barrierclick(){
				
				if(this.barrier.deviceId==''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				if(this.barrier.alias==''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				if(this.barrier.InOut===''){
					this.$message.error('带*的数据不能为空哦！');
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
				console.log(this.active)
				this.active=0
				this.universal.add=true
				this.addA.parking_name=''
				this.addA.parking_mobile=''
				// this.addA.fauModeaa=''
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
				// this.addB.parking_fee_description=''
				this.addB.carportcount=''
				this.addB.parking_name=''
				this.addB.mchnt_id=''
				this.addB.price=''
				this.addB.time_out=''
				this.addB.free_time=''
				this.addB.high_price=''
				this.addB.parking_lot_type=''
				this.addB.pay_type=''
				this.addB.high_time=''
				this.addB.plans_id=''
				let that=this;
				that.gongyong()
				var d=new Date() 
				that.bianhao=d.valueOf()
			},
			bangding(row){
				this.$router.push('/pageHome/big')
				let dataS={
					userId:localStorage.getItem('userId'),
					parking:row.id
				}
				let that=this;
				axios({
					method:'post',
					url:that.$store.state.url+'/Protect/security',
					data:Qs.stringify(dataS)
				}).then(function(message){
					that.preferential=message.data.result;
				})
			},
			zhangdan(row){
				this.$router.push({path:'/pageHome/Monthlybill', query:{parking_id:row.parking_id,parking_name:row.parking_name}})
			},
			gongyong(){
				let that=this;
				let dataS = {
					page:that.paging.page,
					pageSize:that.paging.pageSize,
					userId:localStorage.getItem('userId'),
					dealer:localStorage.getItem('dealer')
				};
				// if(localStorage.getItem('userId')=='SURIOT'){
				// 	dataS = {
				// 	page:that.paging.page,
				// 	pageSize:that.paging.pageSize
				//    };
				// }else{
				// 	dataS = {
				// 	page:that.paging.page,
				// 	pageSize:that.paging.pageSize,
				// 	userId:localStorage.getItem('userId') 
				//    };
				// }
				axios({
					method:'post',
					url:that.$store.state.url+'/salePlans/selectAll',
					data:Qs.stringify(dataS)
				}).then(function(message){
					that.preferential=message.data.result;
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
					url:this.$store.state.url+'/Order/orders',
					data:Qs.stringify(data)
				}).then(function(message){
					if(message.data.resCode==0){
						
					}
					
				})
			},	
			unplan(row){
				let that = this;
				this.$confirm('此操作将解绑优惠方案, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					axios({
						method:'post',
						url:this.$store.state.url+'/salePlans/unbound',
						data:Qs.stringify({
							id:row.id
						})
					}).then(function(res){
						if(res.resCode==1){
							that.$message({
								message:res.result,
								type: 'error'
							});
						}else{
							that.$message({
								message: '解绑成功',
								type: 'success'
							});
							that.searchClick()
						}
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			barrwhite(row){
				this.setwhitebarr.parkingId=row.id
				let text='';
				let list=[0,1,2,3,4,5,6,7,8,9]
				for(var i=0;i<6;i++){
					text+=list[Math.floor(Math.random()*10)]
				}
				this.setwhitebarr.usercode=text
				this.universal.setwhitebarr=true;
			},	
			changewhite(row){
				this.universal.unity=true;
				let that=this;
				axios({
					method:'get',
					url:'http://192.168.2.110:3010/wirite/single/list?id='+row.id,
				}).then(function(message){
					if(message.data.code=="0"){
						that.replaces=row.id
						for(var i=0;i<message.data.result.length;i++){
							if(message.data.result[i].nbenable==0){
								message.data.result[i].nbenable='不启用'
							}else{
								message.data.result[i].nbenable='启用'
							}
							if(message.data.result[i].nisusingtimeseg==0){
								message.data.result[i].nisusingtimeseg='不启用'
							}else{
								message.data.result[i].nisusingtimeseg='启用'
							}
							if(message.data.result[i].nisblacklist==0){
								message.data.result[i].nisblacklist='不是'
							}else{
								message.data.result[i].nisblacklist='是'
							}
						}
						that.tablemark=message.data.result;
					}else{
						that.$message({
							message: '查询失败',
							type: 'error'
						});
					}
				})
			},
			barriers(row){
				this.barrier.deviceId=''
				this.barrier.InOut=''
				this.barrier.alias=''
				this.barrierid=row.id
				this.universal.barrier=true;
				let data={
					page:1,
					pageSize:1000000000,	
					userId:localStorage.getItem('userId'),
					dealer:localStorage.getItem('dealer'),
				}
				let that=this;
				axios({
					method:'post',
					url:this.$store.state.url+'/Device/brakeList',
					data:Qs.stringify(data)
				}).then(function(message){
					if(message.data.resCode==0){
						that.signo=message.data.result
					}
					
				})
			},
			unbundle1(row){
				let that = this;
				this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
				searchClicks('/Device/unbound',{deviceId:row.deviceld}).then(res=>{
					if(res.data.resCode==0){
						this.$message({
							message: '解绑成功',
							type: 'success'
						});
						this.searchClick();
					}else{
						this.$message({
							message: '解绑失败',
							type: 'error'
						});
					}
				})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消解绑'
					});
				});
			},
			unbundle2(row){
				let that = this;
				this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					searchClicks('/Device/unbound',{deviceId:row.deviceld}).then(res=>{
						if(res.data.resCode==0){
							this.$message({
					        	message: '解绑成功',
					        	type: 'success'
							});
							this.searchClick();
						}else{
							this.$message({
					        	message: '解绑失败',
					        	type: 'error'
					        });
						}
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
				let that=this;
				searchClicks('/Device/queryBindDeviceld',{id:row.id}).then(res=>{
					if(res.data.resCode==0){
						that.idtable=res.data.inBrake
						that.idtable1=res.data.outBrake
						console.log(that.look)
					}
				})
			},
			hideclick(){
				this.universal.change = false
				this.universal.change1=false;
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
			setwhiteaddClick(){
				if(this.setwhitebarr.parkingId== ''){
					this.$message.error('带*数据不能为空哦！1');
					return false;
				}
				if(this.setwhitebarr.carnumber== ''){
					this.$message.error('带*数据不能为空哦！2');
					return false;
				}
				if(this.setwhitebarr.username== ''){
					this.$message.error('带*数据不能为空哦！3');
					return false;
				}
				if(this.setwhitebarr.createTime==''){
					this.$message.error('带*数据不能为空哦！3');
					return false;
				}
				// if(this.add.nbenable== ''){
				// 	this.$message.error('带*数据不能为空哦！4');
				// 	return false;
				// }
				// if(this.setwhitebarr.nisusingtimeseg== ''){
				// 	this.$message.error('带*数据不能为空哦！5');
				// 	return false;
				// }
				if(this.setwhitebarr.startTime== ''){
					this.$message.error('带*数据不能为空哦！6');
					return false;
				}
				if(this.setwhitebarr.endTime== ''){
					this.$message.error('带*数据不能为空哦！7');
					return false;
				}
				// if(this.add.nisblacklist== ''){
				// 	this.$message.error('带*数据不能为空哦！8');
				// 	return false;
				// }
				// PF15517711473803W4
				let data={
					parkingId:this.setwhitebarr.parkingId,
					carnumber:this.setwhitebarr.carnumber,
					username:this.setwhitebarr.username,
					usercode:(this.setwhitebarr.usercode).toString(),
					nbenable:this.setwhitebarr.nbenable,
					nisusingtimeseg:this.setwhitebarr.nisusingtimeseg,
					startTime:this.setwhitebarr.startTime,
					endTime:this.setwhitebarr.endTime,
					createTime:this.setwhitebarr.createTime,
					nisblacklist:this.setwhitebarr.nisblacklist,
				}
				let that = this;
				axios({
					method:'post',
					url:'http://192.168.2.110:3010/wirite/single/add',
					data:Qs.stringify(data)
				}).then(function(message){
					if(message.code==200){
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
				that.universal.setwhitebarr = false;
			},
			addClick(){
				let that = this;
				if(that.chose){
					
					if(that.addB.parking_id==''||that.addB.high_time==''||that.bianhao==''||that.addB.parking_address==''||that.addB.parking_poiid==''||that.addB.parking_mobile==''||that.addB.carportcount==''||that.addB.free_time==''||that.addB.mchnt_id==''||that.addB.price==''||that.addB.time_out==''||that.addB.high_price==''||that.addB.parking_lot_type==''){
						that.$message.error('带*的数据不能为空哦！');
						return false;
					}

					if(that.addB.parking_mobile.length<6&&that.addB.parking_mobile>12){
						that.$message.error('客服电话长度不能小于6位大于12位');
						return false;
					}
					if(that.addB.mchnt_id.length!=16||that.addB.mchnt_id.slice(0,4)!=2088){
						that.$message.error('收款方编号为2088开头的16位纯数字');
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
					// if(that.addB.pay_type=='在线缴费'){
					// 	that.addB.pay_type=1
					// }else if(that.addB.pay_type=='代扣缴费'){
					// 	that.addB.pay_type=2
					// }else if(that.addB.pay_type=='当面付'){
					// 	that.addB.pay_type=3
					// }
					that.addB.pay_type=1
					let dataA =that.addB;
					dataA.dealer=localStorage.getItem('dealer')
					if(that.addB.plans_id==''){
						that.addB.plans_id=0
					}
					dataA.out_parking_id=that.bianhao
					dataA.parking_fee_description=that.addB.price
					dataA.isBindSalePlants=that.addB.plans_id
					dataA.dealer=localStorage.getItem('dealer')
					// dataA.parking_lot_type=that.addB.fauModes
					dataA.pay_type=that.addB.pay_type
					if(isNaN(dataA.high_time)){
					this.$message.error('最高时长为数字');
					return false;
					}
					if(isNaN(dataA.free_time)){
						this.$message.error('免费时长为数字');
						return false;
					}
					if(isNaN(dataA.price)){
						this.$message.error('价格为数字');
						return false;
					}
					if(isNaN(dataA.time_out)){
					this.$message.error('超时时间为数字');
					return false;
					}
					if(isNaN(dataA.high_price)){
						this.$message.error('最高收费为数字');
						return false;
					}
					if(isNaN(dataA.carportcount)){
						this.$message.error('车位个数为数字');
						return false;
					}
					axios({
						method:'post',
						url:this.$store.state.url+'/Parking/createParkingInfo',
						data:Qs.stringify(dataA)
					}).then(function(message){
						if(message.data.resCode==0){
							that.searchClick();
							that.$message({
								message:  message.data.result,
								type: 'success'
							});
						}else{
							that.$message({
								message: message.data.result,
								type: 'error'
							});
						}
					})
				}else if(that.choses){
					if(that.addB.high_time==''||that.addB.parking_name==''||that.addB.parking_address==''||that.addB.parking_lot_type==''||that.addA.parking_mobile==''||that.addB.carportcount==''||that.addB.price==''||that.addB.time_out==''||that.addB.free_time==''||that.addB.high_price==''){
						that.$message.error('带*的数据不能为空哦！');
						return false;
					}
					// if((that.addB.parking_fee_description).toString().replace(/[^0-9]/ig,"")!=(that.addB.price).toString().replace(/[^0-9]/ig,"")){
					// 	that.$message.error('计费单价与停车单价应一致');
					// 	return false;
					// }
					if(that.addB.parking_lot_type=='居民小区'){
						that.addA.parking_lot_type=1
					}else if(that.addB.parking_lot_type=='商圈停车场'){
						that.addA.parking_lot_type=2
					}else if(that.addB.parking_lot_type=='路测停车'){
						that.addA.parking_lot_type=3
					}else if(that.addB.parking_lot_type=='公园景点'){
						that.addA.parking_lot_type=4
					}else if(that.addB.parking_lot_type=='商务楼宇'){
						that.addA.parking_lot_type=5
					}else if(that.addB.parking_lot_type=='其他'){
						that.addA.parking_lot_type=6
					}else if(that.addB.parking_lot_type=='交通枢纽'){
						that.addA.parking_lot_type=7
					}else if(that.addB.parking_lot_type=='市政设施'){
						that.addA.parking_lot_type=8
					}
					let dataB =that.addA;
					if(that.addB.plans_id==''){
						that.addB.plans_id=0
					}
					dataB.dealer=localStorage.getItem('dealer')
					dataB.parking_fee_description=that.addB.price
					dataB.isBindSalePlants=that.addB.plans_id
					dataB.carportcount=that.addB.carportcount
					dataB.free_time=that.addB.free_time
					dataB.high_price=that.addB.high_price
					dataB.high_time=that.addB.high_time
					dataB.parking_address=that.addB.parking_address
					dataB.parking_name=that.addB.parking_name
					dataB.price=that.addB.price
					dataB.time_out=that.addB.time_out
					dataB.dealer=localStorage.getItem('dealer')
					if(isNaN(dataB.high_time)){
					this.$message.error('最高时长为数字');
					return false;
					}
					if(isNaN(dataB.free_time)){
						this.$message.error('免费时长为数字');
						return false;
					}
					if(isNaN(dataB.price)){
						this.$message.error('停车单价为数字');
						return false;
					}
					if(isNaN(dataB.time_out)){
					this.$message.error('超时时间为数字');
					return false;
					}
					if(isNaN(dataB.high_price)){
						this.$message.error('最高价格为数字');
						return false;
					}
					if(isNaN(dataB.carportcount)){
						this.$message.error('车位个数为数字');
						return false;
					}
					axios({
						method:'post',
						url:this.$store.state.url+'/Parking/createLotForThird',
						data:Qs.stringify(dataB)
					}).then(function(message){
						if(message.data.resCode==0){
							that.searchClick();
							that.$message({
								message:  message.data.result,
								type: 'success'
							});
						}else{
							that.$message({
								message:  message.data.result,
								type: 'error'
							});
						}
					})
				}
				that.chose=true;
				that.choses=false;
				that.universal.add = false;
			},
			plan(row){
				if(row.isBindSalePlants=='未绑定优惠方案'){
					this.$message.error('停车场未绑定优惠方案！');
						return false;
				}else{
					this.universal.substantial=true;
					let that=this;
					searchClicks('/salePlans/selectAll',{plans_id:row.isBindSalePlants,userId:localStorage.getItem('userId'),
						dealer:localStorage.getItem('dealer'),
					page:1,pageSize:10}).then(res=>{
						that.law=res.data.result
					})
				}
			},
			deleteClick(row){
				let that = this;
				this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					axios({
						method:'post',
						url:this.$store.state.url+'/Parking/delParkingLot',
						data:Qs.stringify({
							id:row.id
						})
					}).then(function(message){
						if(message.data.resCode==0){
							that.searchClick();
							that.$message({
					        	message: '删除成功',
					        	type: 'success'
					        });
						}else if(message.data.resCode==1){
							that.$message({
					        	message: '接入支付宝,暂不可删除',
					        	type: 'error'
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
			changval1(val){
				this.change1.isBindSalePlants=val
			},
			changval2(val){
				this.change.isBindSalePlants=val
			},
			changeShow(row){				
				if(row.parking_poiid==''){
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
					this.universal.change= true;
					this.changetype=1
					this.change= Object.assign({},row);
				}
				
				this.gstylelast.forEach((item, index) => {
					if(item.value==row.parking_lot_type){
						this.change.parking_lot_type=item.type
					}
				});  
				this.gstylelast.forEach((item, index) => {
					if(item.value==row.parking_lot_type){
						this.change1.parking_lot_type=item.type
					}
				});    
				this.preferential.forEach((item, index) => {
					if(item.isBindSalePlants==row.isBindSalePlants){
						this.change.isBindSalePlants=item.plans_id
					}
				});  
				this.preferential.forEach((item, index) => {
					if(item.plans_id==row.isBindSalePlants){
						this.change1.isBindSalePlants=item.plans_id
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
				if(this.change.mchnt_id==''||this.change.isBindSalePlants==''||this.change.parking_poiid==''||this.change.parking_id==''||this.change.high_time==''||this.change.parking_name==''||this.change.parking_address==''||this.change.parking_lot_type==''||this.change.parking_mobile==''||this.change.carportcount==''||this.change.price==''||this.change.time_out==''||this.change.free_time==''||this.change.high_price==''){
					this.$message.error('带*的数据不能为空哦！');
					return false;
				}
				// console.log((this.change.parking_fee_description).toString().replace(/[^0-9]/ig,""))
				// if((this.change.parking_fee_description).toString().replace(/[^0-9]/ig,"")!=(this.change.price).toString().replace(/[^0-9]/ig,"")){
				// 		this.$message.error('收费说明单价与收费单价应一致');
				// 		return false;
				// 	}
				// let data = this.change;
				if(this.change.high_time==''||this.change.high_price==''){
					this.$message({
						message: '最高收费和最高价格不能为空',
						type: 'error'
					});
				}
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
				let data={}
				console.log(this.change)
				if(this.change.isBindSalePlants=='未绑定优惠方案'){
					this.change.isBindSalePlants=0
				}
				data.isBindSalePlants=this.change.isBindSalePlants
				data.parking_id=this.change.parking_id
				// data.out_parking_id=this.change.out_parking_id
				data.mchnt_id=this.change.mchnt_id
				data.parking_address=this.change.parking_address
				data.fauCode=this.change.fauCode
				data.parking_mobile=this.change.parking_mobile
				data.price=this.change.price
				data.parking_name=this.change.parking_name
				data.free_time=this.change.free_time
				data.parking_poiid=this.change.parking_poiid
				data.parking_fee_description=this.change.price
				data.high_time=this.change.high_time
				data.time_out=this.change.time_out
				
				data.carportcount=this.change.carportcount
				console.log((this.change.time_out).slice(0,2))
				data.time_out=(this.change.time_out).slice(0, this.change.time_out.length-2);
				data.price=(this.change.price).slice(0, this.change.price.length-4);
				data.free_time=(this.change.free_time).slice(0, this.change.free_time.length-2);
				data.high_time=(this.change.high_time).slice(0, this.change.high_time.length-2);
				data.high_price=(this.change.high_price).slice(0, this.change.high_price.length-1);
				delete data.date;
				let that = this;
				// if(that.change.pay_type=='在线缴费'){
				// 	that.change.pay_type=1
				// }else if(that.change.pay_type=='代扣缴费'){
				// 	that.change.pay_type=2
				// }else if(that.change.pay_type=='当面付'){
				// 	that.change.pay_type=3
				// }
				that.change.pay_type=1
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
				data.parking_lot_type=that.change.parking_lot_type
				data.pay_type=that.change.pay_type
				data.id=that.change.id
				axios({
					method:'post',
					// url:'http://39.104.113.112:2088/parkinglot/upda',
					url:this.$store.state.url+'/Parking/updateParkingInfo',
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
				        	message:message.data.result.alipay_eco_mycar_parking_parkinglotinfo_update_response.msg,
				        	type: 'error'
						});
					}
				})
				that.universal.change = false;
			},
			change1Click(){
				if(this.change1.parking_name==''||this.change1.parking_address==''||this.change1.parking_lot_type==''||this.change1.parking_mobile==''||this.change1.high_time==''||this.change1.price==''||this.change1.free_time==''||this.change1.high_price==''||this.change1.time_out==''||this.change1.carportcount==''||this.change1.isBindSalePlants==''){
					this.$message({
						message: '带*号的不能为空',
						type: 'error'
					});
					return false;
				}
				// if((this.change1.parking_fee_description).toString().replace(/[^0-9]/ig,"")!=(this.change1.price).toString().replace(/[^0-9]/ig,"")){
				// 		this.$message.error('收费说明单价与收费单价应一致');
				// 		return false;
				// 	}
				if(this.change1.high_time==''||this.change1.high_price==''){
					this.$message({
						message: '最高收费和最高价格不能为空',
						type: 'error'
					});
				}
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
				let data = this.change1;
				data.isBindSalePlants=this.change1.isBindSalePlants
				data.time_out=(this.change1.time_out).slice(0, this.change1.time_out.length-2);
				data.price=(this.change1.price).slice(0, this.change1.price.length-4);
				data.free_time=(this.change1.free_time).slice(0, this.change1.free_time.length-2);
				data.high_time=(this.change1.high_time).slice(0, this.change1.high_time.length-2);
				data.high_price=(this.change1.high_price).slice(0, this.change1.high_price.length-1);
				delete data.date;
				if(data.isBindSalePlants=='未绑定优惠方案'){
					data.isBindSalePlants=0
				}
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
				axios({
					method:'post',
					url:this.$store.state.url+'/Parking/updateParkingInfoForThird',
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
				};
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
				let that = this;
				that.tableData = [];
				searchClicks('/Parking/selectLotInfo',data).then(message=>{
					if(message.data.resCode==0){
						for(var i=0;i<message.data.result.length;i++){
							// if(message.data.result[i].pay_type==1){
							// 	message.data.result[i].pay_type='在线缴费'
							// }else if(message.data.result[i].pay_type==2){
							// 	message.data.result[i].pay_type='代扣缴费'
							// }else if(message.data.result[i].pay_type==3){
							// 	message.data.result[i].pay_type='当面付'
							// }
							if(message.data.result[i].isBindSalePlants==0){
								message.data.result[i].isBindSalePlants='未绑定优惠方案'
							}
						}
						that.paging.total = message.data.count;
						that.tableData = message.data.result;
						
					}else{
						that.tableData = [];
					}
				})
			},
			operation(row){
				//查看详情
				this.$router.push({path:'/pageHome/zfbInfo', query:{parking_id:row.parking_id,parking_name:row.parking_name,data:row}})
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
	.imgver img{
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
	.longinput{
		width: 215px!important;
	}
	.titlecome{
		margin-bottom: 5px;
		font-size: 18px;
	}
	.paythree img{
		margin: 30px auto;
		margin-left: 35%;
	}
	.el-tooltip{vertical-align: middle;}
	.subst{font-size: 15px;}
	.subst{line-height: 60px;}
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
	.letg div{font-size: 15px;line-height: 40px;}
	.grid-content{width: 30%;float: left;text-align: right;margin-right: 10px;}
</style>