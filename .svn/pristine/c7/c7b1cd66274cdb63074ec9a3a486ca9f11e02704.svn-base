<template>
  <div id="PSTlist">
    <div class="header">
      <div class="headerTitle">
        <span>消火栓列表</span>
      </div>
    </div>
    <div class="select">
      <!-- <span>分组：</span> -->
      <!--<el-input v-model="store.controName" clearable placeholder="请输入内容"></el-input>-->
      <!-- <el-select v-model="search.conGroup" placeholder="请选择">
				<el-option label="未选择" value="0"></el-option>
		    	<el-option v-for="(item,index) in this.$store.state.conGroupList" :key="item.groupId" :label="item.gropuName" :value="item.groupId"></el-option>
			</el-select> -->
      <span v-if="chose=='123'">设备编号：</span>
      <el-input v-model="search.deviceId"
                v-if="chose=='123'"
                clearable
                placeholder="请输入内容"></el-input>
      <span>设备SN码：</span>
      <el-input v-model="search.devParaSn"
                clearable
                placeholder="请输入内容"></el-input>
      <span>自定义编号：</span>
      <el-input v-model="search.end"
                clearable
                placeholder="请输入内容"></el-input>
      <!-- <span>操作人员：</span>
      <el-input v-model="search.personnel"
                clearable
                placeholder="请输入内容"></el-input><br/><br/> -->

      <span>网络状态：</span>
      <el-select v-model="search.online"
                 placeholder="请选择">
        <el-option value=''>未选择</el-option>
        <el-option v-for="item in [
        {id:1,deviceType:'在线'},{id:2,deviceType:'离线'}]"
                   :key="item.id"
                   :value="item.deviceType"></el-option>
      </el-select>
      <!-- <el-select v-model="search.deviceType"
                 placeholder="请选择"
                 @change="aaa(search.deviceType)">
        <el-option value=''>未选择</el-option>
      </el-select><br/><br/> -->
      <!-- <span>地址查询：</span> -->
      <!-- <el-cascader :options="newcsx"
                   @change="handleChange"></el-cascader> -->
    </div>
    <div class="select">
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-plus"
                 @click='universal.add = true'
                 v-if="added==1">添加</el-button>
      <el-button type="success"
                 v-if="added==1"
                 class="oyButton"
                 icon="el-icon-plus"
                 @click='type'>类型</el-button>
      <el-upload class="upload-demo demoele"
                 action=""
                 :before-upload="uploadFile"
                 multiple
                 :limit="1"
                 v-if="typeValue">
        <el-button class="oyButton"
                   type="success"
                   icon="el-icon-download">导入</el-button>
        <!-- <el-button size="small" type="primary">导入</el-button> -->
      </el-upload>
      <el-button class="oyButton"
                 type="success"
                 icon="el-icon-search"
                 @click='searchClick'>查询</el-button>

      <el-button class="oyButton"
                 v-if="typeValue"
                 type="success"
                 icon="el-icon-printer"
                 @click='setCard(row)'>发卡</el-button>

    </div>
    <el-dialog title="新增类型"
               :visible.sync="universal.type1">
      <div class="tolsie">
        <span class="spanClassT loist">
          <span class="aKey">*</span>设备型号：</span>
        <el-input v-model="type2.deviceType"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />
        <span class="spanClassT loist">
          <span class="aKey">*</span>已有类型：</span>
        <el-select v-model="type1.deviceType"
                   placeholder="请选择"
                   @change="aaa(type1.deviceType)">
          <el-option v-for="item in tableChild"
                     :key="item.id"
                     :value="item.deviceType"></el-option>
        </el-select>
      </div>
      <div slot="footer"
           class="dialog-footer tolsie">
        <el-button type="success"
                   class="oyButton"
                   @click="universal.type1 = false">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="yes">添加</el-button>
      </div>
    </el-dialog>
    <el-dialog title="新增"
               :visible.sync="universal.add">
      <div>
        <!-- <span class="spanClass">设备名称：</span> -->
        <span class="spanClassT">
          <span class="aKey">*</span>设备名称：</span>
        <el-input v-model="add1.deviceName"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />

        <!-- <span class="spanClass">设备编号：</span> -->
        <span class="spanClassT">
          <span class="aKey">*</span>设备编号：</span>
        <el-input v-model="add1.deviceId"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />

        <!-- <span class="spanClass">流量卡卡号：</span> -->
        <!-- <span class="spanClassT"><span class="aKey">*</span>流量卡卡号：</span>
				<el-input v-model="add1.trafficCard" clearable placeholder="请输入内容"></el-input><br /><br /> -->

        <!-- <span class="spanClass">设备类型：</span> -->
        <!-- <span class="spanClassT"><span class="aKey">*</span>设备类型：</span>
				<el-input v-model="add1.deviceType" clearable placeholder="请输入内容"></el-input><br /><br />

				<!-- <span class="spanClass">设备型号：</span> -->

        <span class="spanClassT">
          <span class="aKey">*</span>设备类型：</span>
        <!-- <el-input v-model="type1.deviceType" clearable placeholder="请输入内容"></el-input><br /><br /> -->
        <el-select v-model="type1.deviceType"
                   placeholder="请选择"
                   @change="aaa(type1.deviceType)">
          <el-option v-for="item in tableChild"
                     :key="item.id"
                     :value="item.deviceType"></el-option>
        </el-select><br /><br />

        <span class="spanClassT">
          <span class="aKey">*</span>设备型号：</span>
        <el-input v-model="add1.deviceModel"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />
        <!-- <span class="spanClassT"><span class="aKey">*</span>设备状态：</span>
				<el-input v-model="add1.devStatus" clearable placeholder="请输入内容"></el-input><br /><br /> -->

        <!-- <el-input class="textareaWidth" type="textarea" :rows="5" v-model="add.roleDescribe" clearable placeholder="请输入内容"></el-input> -->
      </div>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="universal.add = false">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="addClick">添加</el-button>
      </div>
    </el-dialog>
    <el-dialog title="故障信息"
               :visible.sync="universal.send">
      <div class="malfunction">
        <div>
          <div class="grid-content">应急开关破坏：</div>
          <span v-if="unstuck==1">{{fault_destruction}}</span>
          <span v-if="unstuck==2"
                class="fileug">{{fault_destruction}}</span>
          <span v-if="vacancy==1">无</span>
          <br/>
          <div class="grid-content">设备受到撞击：</div>
          <span v-if="unstuck1==1">{{fault_hit}}</span>
          <span v-if="unstuck1==2"
                class="fileug">{{fault_hit}}</span>
          <span v-if="vacancy==1">无</span>
          <br/>
          <div class="grid-content">电机控制异常：</div>
          <span v-if="unstuck2==1">{{fault_abnormal}}</span>
          <span v-if="unstuck2==2"
                class="fileug">{{fault_abnormal}}</span>
          <span v-if="vacancy==1">无</span><br/>
          <div class="grid-content">非法开启：</div>
          <span v-if="unstuck3==1">{{fault_opening}}</span>
          <span v-if="unstuck3==2"
                class="fileug">{{fault_opening}}</span>
          <span v-if="vacancy==1">无</span><br/>
          <div class="grid-content">设备倾倒：</div>
          <span v-if="unstuck4==1">{{fauCode}}</span>
          <span v-if="unstuck4==2"
                class="fileug">{{fauCode}}</span>
          <span v-if="vacancy==1">无</span><br/>
        </div>
        <div>
          <div class="grid-content">设备漏水：</div>
          <span v-if="unstuck5==1">{{fault_leakage}}</span>
          <span v-if="unstuck5==2"
                class="fileug">{{fault_leakage}}</span>
          <span v-if="vacancy==1">无</span><br/>
          <div class="grid-content">温度异常：</div>
          <span v-if="unstuck6==1">{{fault_temperature}}</span>
          <span v-if="unstuck6==2"
                class="fileug">{{fault_temperature}}</span>
          <span v-if="vacancy==1">无</span><br/>
          <div class="grid-content">刷卡异常：</div>
          <span v-if="unstuck7==1">{{fault_pay}}</span>
          <span v-if="unstuck7==2"
                class="fileug">{{fault_pay}}</span>
          <span v-if="vacancy==1">无</span><br/>
          <div class="grid-content">压力异常：</div>
          <span v-if="unstuck8==1">{{fault_pressure}}</span>
          <span v-if="unstuck8==2"
                class="fileug">{{fault_pressure}}</span>
          <span v-if="vacancy==1">无</span><br/>
        </div>
      </div>
    </el-dialog>
    <el-dialog title="数据统计"
               :visible.sync="universal.statistic">
      <template>
        <el-tabs type="card"
                 v-model="activeName">
          <el-tab-pane label="水压统计"
                       name="fourth">
            <div>
              <!-- <div class="block">
								<span class="demonstration">开始时间:</span>
								<el-date-picker
								v-model="value1"
								type="datetime"
								value-format="yyyy-MM-ddTHH:mm:ss"
								placeholder="选择日期时间"
								>
								</el-date-picker>
								<span class="demonstration">结束时间:</span>
								<el-date-picker
								v-model="value2"
								type="datetime"
								value-format="yyyy-MM-ddTHH:mm:ss"
								placeholder="选择日期时间">
								</el-date-picker>
							</div>
							<el-button class="oyButton butt" type="success" icon="el-icon-search" @click='elding'>确定</el-button> -->
              <div id="main3"
                   style="width: 700px;height:600px;"></div>
            </div>

          </el-tab-pane>

          <el-tab-pane label="水流量统计"
                       name="fifth">
            <!-- <el-select class='roomS' @change="selectClick2" size='small' placeholder="请选择">
						    <el-option label="当年" value="year"></el-option>
						    <el-option label="当月" value="month"></el-option>
						</el-select> -->
            <!-- <div class="block">
							<span class="demonstration">开始时间:</span>
							<el-date-picker
							v-model="value3"
							type="datetime"
							value-format="yyyy-MM-dd HH:mm:ss"
							placeholder="选择日期时间"
							>
							</el-date-picker>
							<span class="demonstration">结束时间:</span>
							<el-date-picker
							v-model="value4"
							type="datetime"
							value-format="yyyy-MM-dd HH:mm:ss"
							placeholder="选择日期时间">
							</el-date-picker>
						</div>
						<el-button class="oyButton butt" type="success" icon="el-icon-search" @click='elding1'>确定</el-button> -->
            <div id="main4"
                 style="width: 700px;height:600px;"></div>

          </el-tab-pane>

          <el-tab-pane label="水温统计"
                       name="sixth">
            <!-- <el-select class='roomS' @change="selectClick2" size='small' placeholder="请选择">
						    <el-option label="当年" value="year"></el-option>
						    <el-option label="当月" value="month"></el-option>
						</el-select> -->
            <!-- <div class="block">
							<span class="demonstration">开始时间:</span>
							<el-date-picker
							v-model="value8"
							type="datetime"
							value-format="yyyy-MM-ddTHH:mm:ss"
							placeholder="选择日期时间">
							</el-date-picker>
							<span class="demonstration">结束时间:</span>
							<el-date-picker
							v-model="value9"
							type="datetime"
							value-format="yyyy-MM-ddTHH:mm:ss"
							placeholder="选择日期时间">
							</el-date-picker>
						</div>
						<el-button class="oyButton butt" type="success" icon="el-icon-search" @click='elding2'>确定</el-button> -->
            <div id="main5"
                 style="width: 700px;height:600px;"></div>

          </el-tab-pane>

          <el-tab-pane label="电压统计"
                       name="seventh">
            <!-- <el-select class='roomS' @change="selectClick2" size='small' placeholder="请选择">
						    <el-option label="当年" value="year"></el-option>
						    <el-option label="当月" value="month"></el-option>
						</el-select> -->
            <!-- <div class="block">
							<span class="demonstration">开始时间:</span>
							<el-date-picker
							v-model="value15"
							type="datetime"
							value-format="yyyy-MM-ddTHH:mm:ss"
							placeholder="选择日期时间">
							</el-date-picker>
							<span class="demonstration">结束时间:</span>
							<el-date-picker
							v-model="value16"
							type="datetime"
							value-format="yyyy-MM-ddTHH:mm:ss"
							placeholder="选择日期时间">
							</el-date-picker>
						</div>
						<el-button class="oyButton butt" type="success" icon="el-icon-search" @click='elding3'>确定</el-button> -->
            <div id="main8"
                 style="width: 700px;height:640px;"></div>

          </el-tab-pane>

        </el-tabs>
      </template>
    </el-dialog>
    <el-dialog title="绑定卡号"
               :visible.sync="universal.cardListshow">
      <div class="totalcard">
        <div class="leftcard">
          <span class="spanClassT"
                style="display:none;">
            <span class="aKey"
                  style="display:none;">*</span>设备编号：</span>
          <el-select v-model="cardListshow.card"
                     placeholder="请选择"
                     style="display:none;">
            <el-option v-for="item in multipleSelection"
                       :key="item.deviceId"
                       :value="item.devParaSn"></el-option>
          </el-select><br /><br />
          <span class="spanClassT">操作人员：</span>
          <el-input v-model="cardListshow.personnel"
                    clearable
                    placeholder="请输入内容"
                    :disabled="true"></el-input><br /><br />
          <!-- <span class="spanClassT">设备类型：</span>
							<el-input :disabled="true" v-model="cardListshow.deviceType" clearable placeholder="请输入内容"></el-input><br /><br /> -->
          <span class="spanClassT">
            <span class="aKey">*</span>人员分配：</span>
          <!-- <el-input v-model="add1.allot" clearable placeholder="请输入内容"></el-input><br /><br /> -->
          <el-select v-model="cardListshow.customer"
                     placeholder="请选择">
            <el-option v-for="item in len"
                       :key="item.dealer"
                       :label="item.userName"
                       :value="item.dealer"></el-option>
          </el-select><br /><br />
          <span class="spanClassT">
            <span class="aKey">*</span>设备卡号：</span>
          <el-input v-model="cardListshow.cardid"
                    clearable
                    placeholder="请输入内容"></el-input><br /><br />
        </div>
        <!-- <div class="rightcard">
							<template>
							<el-table
								:data="tableDatabox"
								style="width: 100%"
								max-height="170">
								<el-table-column
								prop="iccId"
								label="IC卡号"
								width="120">
								</el-table-column>
								<el-table-column
								prop="deviceType"
								label="设备类型"
								width="100">
								</el-table-column>
								<el-table-column
								fixed="right"
								label="操作"
								width="120">
								<template slot-scope="scope">
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
						</div> -->
      </div>
      <div slot="footer"
           class="dialog-footer impofooter">
        <el-button type="success"
                   class="oyButton"
                   @click="hiedclickno">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="changecardclick(cardListshow)">绑定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="修改"
               :visible.sync="universal.change">
      <div>
        <span class="spanClassT">
          <span class="aKey">*</span>设备类型：</span>
        <el-select v-model="change.deviceType"
                   placeholder="请选择">
          <el-option v-for="item in tableChild"
                     :key="item.id"
                     :value="item.deviceType"></el-option>
        </el-select><br /><br />
        <span class="spanClassT">
          <span class="aKey">*</span>设备型号：</span>
        <el-input v-model="change.deviceModel"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />

        <span class="spanClassT">
          <span class="aKey">*</span>设备名称：</span>
        <el-input v-model="change.deviceName"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />

        <!-- <span class="spanClassT"><span class="aKey">*</span>流量卡卡号：</span>
					<el-input v-model="change.trafficCard" clearable placeholder="请输入内容"></el-input><br /><br /> -->
      </div>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="hiedclick">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="changeclick(change)">修改</el-button>
      </div>
    </el-dialog>
    <el-dialog title="修改地址"
               :visible.sync="universal.alter">
      <div>
        <div style="margin-left:10%;margin-bottom:10px;">
          <span class="aKey">*</span>注：GPS地址与修正地址二选一</div>
        <label for="label"
               @click.stop="clickMe">
          <input type="checkbox"
                 class="box"
                 v-model="endcheckbox">
          <!-- <input type="checkbox" id="label" v-model="ckeckVal" >点我 -->
        </label>

        <span class="spanClass widths">设备GPS地址：</span>
        <el-input v-model="newdirectory"
                  clearable
                  placeholder="请输入内容"
                  :disabled="false"
                  class="newdirectory"></el-input><br /><br />
        <div style="margin-left:10%;margin-bottom:10px;">
          <span class="aKey">*</span>如GPS定位不准请对地址进行修正</div>
        <label for="label"
               @click.stop="clickMe1">
          <input type="checkbox"
                 class="box"
                 v-model="startcheckbox">
          <!-- <input type="checkbox" id="label" v-model="ckeckVal" >点我 -->
        </label>
        <!-- <span class="spanClass">现设备地址：</span> -->
        <span class="spanClassT spanClassTL widths">
          <span class="aKey">*</span>设备修正地址：</span>
        <el-input v-model="hnewmap"
                  clearable
                  placeholder="请输入内容"
                  :disabled="false"
                  class="newdirectory"></el-input><br /><br />
        <span class="spanClassT spanClassTL widths"
              style="width:225px;">
          <span class="aKey">*</span>备注：</span>
        <el-input v-model="mark"
                  clearable
                  placeholder="请输入内容"
                  :disabled="false"
                  class="newdirectory"></el-input><br /><br />
      </div>
      <div>
        <div id="allmap">
          <div id="map"
               style="height:100%;-webkit-transition: all 0.5s ease-in-out;transition: all 0.5s ease-in-out;"></div>
        </div>
      </div>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="universal.alter = false">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="changemap(alter)">修改</el-button>
      </div>
    </el-dialog>
    <el-dialog title="绑定"
               :visible.sync="universal.allot">
      <div>
        <span class="spanClass">设备编号：</span>
        <el-input v-model="allot1.deviceId"
                  clearable
                  placeholder="请输入内容"
                  :disabled="true"
                  class="cars"></el-input><br /><br />

        <span class="spanClass">设备名称：</span>
        <el-input v-model="allot1.deviceName"
                  clearable
                  placeholder="请输入内容"
                  :disabled="true"
                  class="cars"></el-input><br /><br />

        <!-- <span class="spanClass">流量卡卡号：</span>
				<el-input v-model="allot1.trafficCard" clearable placeholder="请输入内容" :disabled="true" class="cars"></el-input><br /><br /> -->

        <!-- <span class="spanClass">创建时间：</span>
				<el-input v-model="allot1.createTime" clearable placeholder="请输入内容" disabled="true"></el-input><br /><br /> -->

        <span class="spanClass">设备类型：</span>
        <el-input v-model="allot1.deviceType"
                  clearable
                  placeholder="请输入内容"
                  :disabled="true"
                  class="cars"></el-input><br /><br />

        <span class="spanClass">操作人员：</span>
        <el-input v-model="allot1.personnel"
                  clearable
                  placeholder="请输入内容"
                  :disabled="true"
                  class="cars"></el-input><br /><br />

        <!-- <span class="spanClass">流量卡号：</span>
				<el-input v-model="allot1.trafficCard" clearable placeholder="请输入内容" :disabled="true" class="cars"></el-input><br /><br /> -->

        <span class="spanClass">设备型号：</span>
        <el-input v-model="allot1.deviceModel"
                  clearable
                  placeholder="请输入内容"
                  :disabled="true"
                  class="cars"></el-input><br /><br />

        <!-- <span class="spanClass">管理员分配：</span> -->
        <span class="spanClassT spanClassTL">
          <span class="aKey">*</span>人员分配：</span>
        <!-- <el-input v-model="add1.allot" clearable placeholder="请输入内容"></el-input><br /><br /> -->
        <el-select v-model="customer"
                   placeholder="请选择">
          <el-option v-for="item in len"
                     :key="item.dealer"
                     :value="item.dealer"
                     :label="item.userName"></el-option>
        </el-select>

        <!-- <el-input class="textareaWidth" type="textarea" :rows="5" v-model="add.roleDescribe" clearable placeholder="请输入内容"></el-input> -->
      </div>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="universal.allot = false">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="allotchange(allot1)">绑定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="查看"
               :visible.sync="universal.look"
               @close='closeDialog'>
      <div class="letg">
        <div>
          <div class="grid-content">设备类型：</div>{{con.deviceTypes}}<br/>
          <div class="grid-content">设备SN码：</div>{{con.devParaSn}}<br/>
          <div class="grid-content">锁的状态：</div>{{con.devLockState}}<br/>
          <div class="grid-content">设备电量：</div>
          <span v-if="selectionl==1"
                style="color:green;">{{con.devVOL}}</span>
          <span v-if="selectionl==2"
                style="color:purple;">{{con.devVOL}}</span>
          <span v-if="selectionl==3"
                style="color:rgb(2, 86, 243)">{{con.devVOL}}</span>
          <span v-if="selectionl==4"
                style="color:red;">{{con.devVOL}}</span>
          <br/>
          <div class="grid-content">设备纬度：</div>{{con.devLatitude | choselist}}<br/>
          <div class="grid-content">设备水温：</div>{{con.waterTemperature | waterTemperatureSet}}<br/>
          <div class="grid-content">瞬间流量：</div>{{con.waterMeterTemp | waterMeterTempSet}}<br/>
          <div class="grid-content">硬件版本：</div>{{con.devHardVerison | lckile}}<br/>
          <div class="grid-content">开锁方式：</div>{{con.devUnlockWay}}<br/>
        </div>
        <div style="width:40%;">
          <div class="grid-content">设备编号：</div>{{con.deviceIds}}<br/>
          <div class="grid-content">流量卡号：</div>{{con.devIccid}}<br/>
          <div class="grid-content">是否布防：</div>{{con.devDefence}}<br/>
          <div class="grid-content">设备状态：</div>
          <span v-if="Stau==1"
                style="color:green;cursor: pointer;"
                @click="facility(con.deviceIds,con.devStatus)">{{con.devStatus}}</span>
          <span v-if="Stau==2"
                style="color:purple;">{{con.devStatus}}</span>
          <span v-if="Stau==3"
                style="color:rgb(2, 86, 243)">{{con.devStatus}}</span>
          <span v-if="Stau==4"
                style="color:red;cursor: pointer;"
                @click="facility(con.deviceIds)">{{con.devStatus}}</span>
          (点击显示详情)
          <br/>
          <div class="grid-content">设备经度：</div>{{con.devLongitude |choselist}}<br/>
          <div class="grid-content">设备水压：</div>{{con.waterPressure|waterPressureSet}}<br/>
          <div class="grid-content">累计流量：</div>{{con.waterMeterTotal|waterMeterTripSet}}<br/>
          <div class="grid-content">软件版本：</div>{{con.devSoftVerison}}<br/>
          <div class="grid-content">开锁时间：</div>{{con.devUnlockTime.slice(0,19)}}<br/>
        </div>
        <div style="width:25%;height:350px;">
          <img src="../../../static/image/fira.jpg"
               alt=""
               style="height:100%;">
        </div>
      </div>
      <!-- <div style="margin-left:0.02rem;font-size: 15px;margin-top:0.02rem;margin-bottom:0.02rem;">
        <span>设备地址：</span>
        <span>{{searchhnewmap}}</span>
      </div> -->
      <div style="width:100%;height:auto;display:flex;"
           class="letg">
        <div style="font-size: 15px;line-height: 40px;width:11%;text-align:right;">设备地址：</div>
        <div style="font-size: 15px;line-height: 40px;width:89%;white-space:normal;
					word-break:break-all;
					word-wrap:break-word; ">{{searchhnewmap?searchhnewmap:'暂无'}}</div>
      </div>
      <div style="width:100%;height:auto;display:flex;"
           class="letg">
        <div style="font-size: 15px;line-height: 40px;width:11%;text-align:right;">智能卡号：</div>
        <div style="font-size: 15px;line-height: 40px;width:89%;white-space:normal;
					word-break:break-all;
					word-wrap:break-word; ">{{this.arrays}}</div>
      </div>

      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton">可视化</el-button>
        <!-- <el-button type="success" class="oyButton" @click="contrloceie(con)">设备{{con.devStatus}}</el-button> -->
        <el-button type="success"
                   class="oyButton"
                   v-if="typeValue"
                   @click="changecontrol(onfile)">设备控制</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="statistics">数据统计</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="mapdetail(con)">地图详情</el-button>
        <!-- <router-link to='/pageHome/carMonitor'><el-button type="success" class="oyButton" @click="mapdetail">地图详情</el-button></router-link> -->
      </div>
    </el-dialog>
    <el-dialog title="设备控制"
               :visible.sync="universal.onfile"
               width="20%">
      <div class="flexdisply">
        <div class="divswitch">
          <span>设备状态：</span>
          <span>设备{{value5}}</span>
          <div class="innerone"
               @click="changestatu(onfile)">
            <el-tooltip :content="value5"
                        placement="top">
              <el-switch v-model="value5"
                         active-color="#13ce66"
                         inactive-color="#ff4949"
                         active-value="已激活"
                         inactive-value="未激活">
              </el-switch>
            </el-tooltip>
          </div>
        </div>
        <div class="divswitch"
             v-if="hidestatus">
          <span>栓锁状态：</span>
          <span>设备{{value6}}</span>
          <div class="innertwo"
               @click="changelock(onfile)">
            <el-tooltip :content="value6"
                        placement="top">
              <el-switch v-model="value6"
                         active-color="#13ce66"
                         inactive-color="#ff4949"
                         active-value="已开阀"
                         inactive-value="未开阀">
              </el-switch>
            </el-tooltip>
          </div>
        </div>
        <div class="divswitch"
             v-if="hidestatus">
          <span>布防状态：</span>
          <span>设备{{value7}}</span>
          <div class="innerthree"
               @click="changeting(onfile)">
            <el-tooltip :content="value7"
                        placement="top">
              <el-switch v-model="value7"
                         active-color="#13ce66"
                         inactive-color="#ff4949"
                         active-value="已布防"
                         inactive-value="未布防">
              </el-switch>
            </el-tooltip>
          </div>
        </div>

      </div>
      <div>
        <el-button class="lokway"
                   type="danger"
                   @click="recover(onfile)">恢复出厂设置</el-button>
        <el-button class="lokway"
                   type="primary"
                   @click="read(onfile)">读取定位信息</el-button>
        <el-button type="success"
                   @click="renewal(onfile)">更新位置</el-button>
      </div>
    </el-dialog>
    <div class="Content">
      <el-table class='oyTable'
                v-loading="listLoading"
                :data="tableData"
                @selection-change="handleSelectionChange"
                style="width: 100%">
        <el-table-column type="selection"
                         width="55"
                         class="selection"
                         prop='uuid'
                         :selectable='checkboxInit'
                         @selection-change="changeFun"></el-table-column>
        <!-- <el-table-column type="selection" width="35" :selectable='checkboxInit'></el-table-column> -->

        <el-table-column type="index"
                         :index="indexMethod"
                         label="序号"
                         width="100"> </el-table-column>
        <el-table-column label="设备名称">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{scope.row.deviceName}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{scope.row.deviceName}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="设备型号">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.deviceModel }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{scope.row.deviceModel}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="设备类型">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{scope.row.deviceType}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{scope.row.deviceType}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="设备SN码"
                         width="150">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.devParaSn}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.devParaSn}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="设备编号"
                         v-if="chose=='123'">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.deviceId}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.deviceId}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="操作人员">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{scope.row.personnel}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{scope.row.personnel}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="创建时间">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{scope.row.createTime}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{scope.row.createTime}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="网络状态">
          <template slot-scope="scope">
            <el-popover>
              <p class="TsMaxWidth">{{scope.row.online}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <!-- <div class="overflowHide">{{scope.row.empty}}</div  > -->
                <el-tag color="#f8c541"
                        v-if="scope.row.online=='离线'">离线</el-tag>
                <el-tag color="#5daf34"
                        v-else>在线</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column prop=""
                         label="操作"
                         width=""
                         v-if="tyoe=='5'||tyoe=='1'">
          <template slot-scope="scope">
            <!--<el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-search" @click="seeClick(scope.row)" ></i>
						</el-tooltip>-->

           <!--  <el-tooltip class="item"
                        effect="dark"
                        content="修改"
                        placement="top"
                        v-if="typeValue">
              <i class="icon-change el-icon-edit"
                 @click="changeshow(scope.row)"></i>
            </el-tooltip>
            <el-tooltip  class="item" effect="dark" content="分配" placement="top" v-if="typeValue">
    						<i class="icon-unclick el-icon-menu"></i>
						</el-tooltip>

            <el-tooltip v-if="typeValue"
                        class="item"
                        effect="dark"
                        content="分配"
                        placement="top">
              <i class="icon-menu el-icon-menu"
                 @click="allot(scope.row)"></i>
            </el-tooltip>
 -->
            <el-tooltip class="item"
                        v-if="typeValue"
                        effect="dark"
                        content="复原"
                        placement="top">
              <i class="icon-delete el-icon-refresh"
                 @click="deleteClick(scope.row)"></i>
            </el-tooltip>

          <!--   <el-tooltip class="item"
                        effect="dark"
                        content="查看"
                        placement="top">
              <i class="icon-See el-icon-search"
                 @click="changeGroupShows(scope.row)"></i>
            </el-tooltip>

            <el-tooltip class="item"
                        v-if="typeValue"
                        effect="dark"
                        content="修改地址"
                        placement="top">
              <i class="icon-See el-icon-view"
                 @click="changeShowmap(scope.row)"></i>
            </el-tooltip> -->
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="footer">
      <el-pagination background
                     @current-change="handleCurrentChange"
                     @size-change="handleSizeChange"
                     :current-page.sync="paging.page"
                     :page-sizes="[1,2,3,10,11,12]"
                     :page-size="paging.pageSize"
                     layout="sizes, prev, pager, next, jumper,total"
                     :total="paging.total"></el-pagination>
    </div>
  </div>
</template>
	
<script>
import Qs from 'qs'
// import $ from 'jquery'
import axios from 'axios'
import echarts from 'echarts'
import FileSaver from 'file-saver'
import { searchClicks } from '../api/api.js'
import XLSX from 'xlsx'
import iconCar from '../../../static/image/xxx.png'; //以import的方式导入图片文件
import { wgs84togcj02 } from '../../../common/common.js'
// import { regionData, CodeToText } from 'element-china-area-data'
export default {
  name: 'equipmentList',
  data () {
    return {
      chose: sessionStorage.getItem('dealer'),
      tyoe: sessionStorage.getItem('type'),
      // newcsx: regionData,
      changeone: '',
      searchhnewmap: '',
      xAxis65: [],
      series654: [],
      series11: [],
      xAxis12: [],
      series5: [],
      xAxis6: [],
      series158: [],
      xAxis18: [],
      series19: [],
      fault_destruction: '',
      fault_hit: '',
      fault_opening: '',
      fault_abnormal: '',
      fault_leakage: '',
      fault_temperature: '',
      fault_pay: '',
      fault_pressure: '',
      fauCode: '',
      count1: 0,
      count2: 0,
      multipleSelection: [],
      listLoading: false,
      tableDatabox: [],
      numvalue: '',
      numw: [],
      unstuck: '',
      unstuck1: '',
      unstuck2: '',
      unstuck3: '',
      unstuck4: '',
      unstuck5: '',
      unstuck6: '',
      unstuck7: '',
      unstuck8: '',
      mapchangelist: [],
      obj: [],
      num: 1,
      startcheckbox: true,
      endcheckbox: false,
      hnewmap: '',
      mark: '',
      selectionl: '',
      objs: {
        lngs: '',
        lats: ''
      },
      xAxis396: [],
      newdirectory: '',
      alter: {
        newdirectory: '',
        hnewmap: '',
      },
      type2: {
        deviceType: ""
      },
      type1: {
        deviceType: ""
      },
      xAxis129: [],
      ccccc: [],
      aaaaaaaa: [],
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value8: '',
      value9: '',
      value15: '',
      value16: '',
      added: "",
      aaaa: '',
      lastmes: '',
      add1: {
        // trafficCard:"",
        deviceType: "",
        deviceModel: "",
        deviceName: ""
      },
      bbbbb: [],
      xAxis181: [],
      trues: 0,
      allot1: {
        deviceId: '',
        deviceType: "",
        deviceModel: "",
        deviceName: "",
        createTime: '',
        personnel: '',
        status: '',
        trafficCard: ''
      },
      newnum: '',
      send: {
        deviceId: '',
        title: '',
        timeOut: '',
        qos: ''
      },
      cardListshow: {
        personnel: '',
        customer: "",
        cardid: ""
      },
      xAxis64: [],
      change: {
        deviceName: "",
        // trafficCard:"",
        deviceType: '',
        deviceModel: ''
      },
      ggg: [],
      yyy: [],
      xAxis3: [],
      series4: [],
      status: '',
      timeset: null,
      hidestatus: '',
      universal: {
        add: false,
        change: false,
        look: false,
        send: false,
        allot: false,
        statistic: false,
        type1: false,
        alter: false,
        cardListshow: false,
        onfile: false
      },
      bac: [],
      Stau: '',
      lon: {
        devDefence: '',
        devControl: '',
        devUnlockWay: '',
        devUnlockTime: '',
        devLockState: '',
        devStatus: ''
      },
      dealerId: '',
      customer1: '',
      customer: '',
      timeCrea: [],
      tableData: [],
      tableChild: [],
      len: [],
      newcon: {
        devLongitude: '',
        devLatitude: ''
      },
      ddddd: [],
      value5: '',
      value6: '',
      value7: '',
      allots: '',
      vacancy: '',
      con: {
        devVOL: '',
        waterMeter: '',
        devDefence: '',
        devUnlockWay: '',
        devLockState: '',
        waterMeterTotal: '',
        waterMeterTemp: '',
        devHardVerison: '',
        waterPressure: '',
        devSoftVerison: '',
        waterTemperature: '',
        devParaSn: '',
        devWarning: '',
        devIccid: '',
        devLongitude: '',
        devStatus: '',
        devLatitude: '',
        devUnlockTime: '',
        waterMeterTrip: '',
        deviceTypes: '',
        deviceId: '',
      },
      array: [],
      arrays: '',
      li: [],
      truey: [],
      trueys: [],
      add: false,
      topic: false,
      conGroup: false,
      change: false,
      send: false,
      see: false,
      changeGroups: false,
      changeGrouping: {
        changeGrouping: '',
        conId: ''
      },
      step: 0,
      seeStep: 1,
      roomid: "",
      replaceobj: '',
      paging: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      search: {
        deviceId: "",
        deviceType: "",
        personnel: '',
        devParaSn: '',
        online: '',
        end: ''
      },
      activeName: 'fourth',
      comput: 0,
      typeValue: false
      // controNameL:[{label:'C1',value:1},{label:'C2',value:2},{label:'C3',value:3},{label:'B1',value:4},{label:'B2',value:5},{label:'A1',value:6},{label:'A2',value:7},{label:'A3',value:8}]
    }
  },
  mounted: function () {
    let data = {
      page: 1,
      pageSize: 50,

    }
    data.userId = sessionStorage.getItem('userId');
    data.dealer = sessionStorage.getItem('dealer');

    axios({
      method: 'post',
      url: this.$store.state.http + '/user/list',
      data: Qs.stringify(data)
    }).then(message => {
      this.len = message.data.result;
    })
    let type = sessionStorage.getItem('type');

    let userId = sessionStorage.getItem('userId');
    if (type == '1' || type == '5') {
      this.typeValue = true
    } else {
      this.typeValue = false;
    }
    // this.$store.dispatch('group');
    document.title = this.$route.meta.title;

    this.searchClick();

    if (sessionStorage.getItem("dealer") == '123') {
      this.added = 1
    }

  },
  computed () {

  },
  destroyed () {
    clearInterval(this.timeset)
  },
  methods: {
    deleteRow (row) {
      // console.log(row.id)
      let that = this;
      this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios({
          method: 'post',
          url: this.$store.state.http + '/Iccid/delete',
          data: Qs.stringify({
            id: row.id
          })
        }).then(function (message) {
          // console.log(8989898989);
          that.cardlist(row)
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });

    },
    contrloceie (i) {
      this.$router.push({        path: '/pageHome/faultList', query: {
          mouse: i.deviceIds
        }      });
    },
    hiedclickno () {
      this.universal.cardListshow = false;
    },
    cardlist (row) {
      this.universal.cardListshow = true;
      this.cardListshow = Object.assign({}, row);
      let that = this;
      let data = {
        id: row.deviceId,
      }
      axios({
        method: 'post',
        url: this.$store.state.http + '/Iccid/findBydevId',
        data: Qs.stringify(data)
      }).then(function (message) {
        // console.log(message);
        that.tableDatabox = message.data.cards
      })
    },
    changecardclick (row) {
      this.count2 = 0;
      this.count1 = 0
      for (var j = 0; j < this.multipleSelection.length; j++) {
        if (this.multipleSelection[j].empty == '离线') {
          this.$message.error('离线的设备不能绑定卡号！');
          return false;
        }
      }
      console.log(this.cardListshow.customer)
      if (this.multipleSelection.length == 0) {
        this.$message.error('请选择绑定的设备！');
        return false;
      }
      if (isNaN(this.cardListshow.cardid)) {
        this.$message.error('请输入数字');
        return false;
      }
      if (parseInt(this.cardListshow.cardid) > 4294967296) {
        this.$message.error('数字输入过大，请重新输入');
        return false;
      }
      if (this.cardListshow.personnel == '' || this.cardListshow.customer == '' || this.cardListshow.cardid == '') {
        this.$message.error('带*的数据不能为空哦！');
        return false;
      }
      this.universal.cardListshow = false;
      this.listLoading = true;
      let Transaction = parseInt(this.cardListshow.cardid).toString(16)
      console.log(Transaction)
      let lckiel = ("0000000000000000" + Transaction).substr(-8)
      let that = this;
      let data = {
        cmd: 23,
        cmdValue: '11' + lckiel,
        remark:localStorage.getItem("userAlias"),
            type:'平台'
      }
      for (var i = 0; i < that.multipleSelection.length; i++) {
        data.devId = that.multipleSelection[i].deviceId


        axios({
          method: 'post',
          url: that.$store.state.http + "/send/sendCmd",
          data: Qs.stringify(data)
        })
          .then(function (message) {
            console.log(message);
            if (message.data.resCode == 0) {
              console.log(message)
              let timg = setTimeout(function () {
                if (i == that.multipleSelection.length) {
                  that.universal.cardListshow = false;
                  that.listLoading = false;
                }
                console.log(that.multipleSelection)
                for (var c = 0; c < that.multipleSelection.length; c++) {
                  var datask = {
                    devId: that.multipleSelection[c].deviceId
                  }
                  searchClicks('/Datapoints/getData', datask).then(message => {
                    console.log(message)
                    if (message.data.resCode == 0) {
                      console.log(message)
                      let messData = message.data.errMsg
                      console.log(messData)
                      for (let p = 0; p < messData.data.datastreams.length; p++) {
                        if (messData.data.datastreams[p].id == '2014') {
                          that.lastmes = messData.data.datastreams[p].datapoints[0].value
                        }
                      }
                      console.log(that.lastmes.substr(1, that.lastmes.length))
                      console.log((that.cardListshow.customer).split(":")[0])
                      if ((that.lastmes).substr(2, that.lastmes.length) == that.cardListshow.cardid) {
                        console.log(that.lastmes)

                        console.log(that.multipleSelection)
                        for (var e = 0; e < that.multipleSelection.length; e++) {

                          axios({
                            method: 'post',
                            dataType: 'jsonp',
                            url: that.$store.state.http + '/IccIds/queryBySave',
                            data: Qs.stringify({
                              customername: (that.cardListshow.customer).split(":")[0],
                              dealerid: (that.cardListshow.customer).split(":")[1],
                              userid: sessionStorage.getItem('userId'),
                              area: that.cardListshow.cardid,
                              dealer: sessionStorage.getItem('dealer'),
                              device_type: that.multipleSelection[e].deviceId
                            })
                          }).then(function (message) {
                            if (message.data.resCode == 0) {

                              that.$message({
                                message: message.data.result + '发卡成功',
                                type: 'success'
                              });
                            }
                            console.log(message)
                            console.log(33333333333)
                          })
                        }

                      } else {
                        that.$message({
                          message: '发卡失败',
                          type: 'error'
                        });
                      }


                      that.universal.cardListshow = false;
                      // that.$message({
                      // 	message: '发卡成功'+that.count1+'成功,'+that.count2+'失败',
                      // 	type: 'success'
                      // });

                      // that.multipleSelection=[]
                      that.searchClick()
                    } else {
                      that.count2++;
                      console.log(that.count2)
                      that.$message({
                        message: '发卡失败',
                        type: 'error'
                      });
                    }

                  })
                }


              }, 8000)
            }
          })
        console.log(that.multipleSelection.length)
        // if(i==that.multipleSelection.length){

        // }
      }
    },
    handleSelectionChange (val) {
      console.log(val)
      this.multipleSelection = val;
    },
    // uploadFile(pdf){
    // 	let that=this;
    // 	var formData=new FormData();
    //        formData.append('pdf',pdf);
    //     var pdf = formData;
    //     axios({
    // 		method:'post',
    // 		url:'https://api.weixin.qq.com/card/invoice/platform/setpdf?access_token=20_7mCtoKSzkeoWh3-SwEcFs6EAN0jZ9oGQ_TBitagaCHKkz2qd7bGv0ay4LCno5ahWm0hqrAQUdRh_Unvu0ZvOg43Wuq8yw7p5F7XU9lcOE6AyKs9hOIBmGqVu6q7UiC0tVO5E_XQMJQ-hL2k8IEWiAIABXP',
    // 		data:pdf
    // 	}).then(function(message) {
    // 		console.log(message)
    // 	})
    // },
    uploadFile (file) {
      let that = this;
      var formData = new FormData();
      formData.append('file', file);
      var file = formData;

      axios({
        method: 'post',
        url: this.$store.state.http + '/devices/batch',
        data: file
      }).then(function (message) {

        that.searchClick()
      })
    },

    changestatu (row) {
      let that = this;
      if (that.value5 == '已激活') {
        that.value5 = '已激活'
        this.$confirm('此操作将设备激活, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          that.listLoading = true;
          that.universal.look = false;
          that.universal.onfile = false;
          let dataBN = {
            devId: that.roomid,
            cmd: 17,
            cmdValue: '12',
            remark:localStorage.getItem("userAlias"),
            type:'平台'
          }
          // console.log(dataBN)
          axios({
            method: 'post',
            url: that.$store.state.http + "/send/sendCmd",
            data: Qs.stringify(dataBN)
          })
            .then(function (message) {
              if (message.data.resCode == 0) {
                let timer = setTimeout(function () {
                  let data = {
                    devId: that.roomid
                  }
                  // console.log(row)
                  searchClicks('/Datapoints/getBatData', data).then(message => {
                    // console.log(message.data.errMsg)
                    let messData = message.data.errMsg
                    messData=messData.data.devices[0].datastreams
                    for (let i = 0; i < messData.length; i++) {
                      // console.log(messData.data.datastreams[i].id);
                      switch (messData[i].id) {
                        case '2012': that.con.devControl = messData[i].value
                          break;
                        default: break;
                      }
                    }
                    // console.log(that.con.devControl)
                    if (that.con.devControl == 17) {
                      // that.value5='未激活';
                      // that.hidestatus=false;
                      clearTimeout(timer)
                      // that.$message({
                      // 	message: '激活失败',
                      // 	type: 'success'
                      // });
                      // that.listLoading = false;
                      // that.universal.onfile=true;
                      // that.universal.look=true;
                      let calculate = setTimeout(() => {
                        let dataWERLZ = {
                          devId: that.roomid
                        }
                        searchClicks('/Datapoints/getBatData', dataWERLZ).then(message => {
                          // console.log(message.data.errMsg)
                          let messData = message.data.errMsg
                          messData=messData.data.devices[0].datastreams
                          for (let i = 0; i < messData.length; i++) {
                            // console.log(messData.data.datastreams[i].id);
                            switch (messData[i].id) {
                              case '2012': that.con.devControl = messData[i].value
                                break;
                              default: break;
                            }
                          }
                          // console.log(that.con.devControl)
                          if (that.con.devControl == 17) {
                            // that.value5='未激活';
                            // that.hidestatus=false;
                            clearTimeout(calculate)
                            // that.$message({
                            // 	message: '激活失败',
                            // 	type: 'success'
                            // });
                            // that.listLoading = false;
                            // that.universal.onfile=true;
                            // that.universal.look=true;
                            let recalculation = setTimeout(() => {
                              let dataDSFWX = {
                                devId: that.roomid
                              }
                              searchClicks('/Datapoints/getBatData', dataDSFWX).then(message => {
                                // console.log(message.data.errMsg)
                                let messData = message.data.errMsg
                                messData=messData.data.devices[0].datastreams
                                for (let i = 0; i < messData.length; i++) {
                                  switch (messData[i].id) {
                                    case '2012': that.con.devControl = messData[i].value
                                      break;
                                    default: break;
                                  }
                                }
                                // console.log(that.con.devControl)
                                if (that.con.devControl == 17) {
                                  that.value5 = '未激活';
                                  that.hidestatus = false;
                                  clearTimeout(recalculation)
                                  that.$message({
                                    message: '激活超时',
                                    type: 'error'
                                  });
                                  that.listLoading = false;
                                  that.universal.onfile = true;
                                  that.universal.look = true;
                                } else {
                                  that.listLoading = false;
                                  that.universal.onfile = true;
                                  that.universal.look = true;
                                  clearTimeout(recalculation)
                                  that.value5 = '已激活';
                                  that.hidestatus = true;
                                  that.$message({
                                    message: '激活成功',
                                    type: 'success'
                                  });
                                }
                              })
                            })
                          } else {
                            that.listLoading = false;
                            that.universal.onfile = true;
                            that.universal.look = true;
                            clearTimeout(calculate)
                            that.value5 = '已激活';
                            that.hidestatus = true;
                            that.$message({
                              message: '激活成功',
                              type: 'success'
                            });
                          }
                        })
                      }, 5000)
                    } else {
                      that.listLoading = false;
                      that.universal.onfile = true;
                      that.universal.look = true;
                      clearTimeout(timer)
                      that.value5 = '已激活';
                      that.hidestatus = true;
                      that.$message({
                        message: '激活成功',
                        type: 'success'
                      });
                    }
                  })
                }, 5000)
              } else {
                that.listLoading = false;
                that.universal.onfile = true;
                that.universal.look = true;
                clearTimeout(timer)
                that.value5 = '已激活';
                that.hidestatus = true;
                that.$message({
                  message: '激活成功',
                  type: 'success'
                });

              }
            })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消激活'
          });
          that.value5 = '未激活'
        });
      } else if (that.value5 == '未激活') {
        let data = {
          devId: that.roomid
        }
        that.value5 = '未激活'
        this.$confirm('此操作将设备停用, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          that.listLoading = true;
          that.universal.look = false;
          that.universal.onfile = false;
          let datasp = {
            devId: that.roomid,
            cmd: 17,
            cmdValue: '11',
            remark:localStorage.getItem("userAlias"),
            type:'平台'
          }
          // console.log(datasp)
          axios({
            method: 'post',
            url: that.$store.state.http + "/send/sendCmd",
            data: Qs.stringify(datasp)
          })
            .then(function (message) {
              if (message.data.resCode == 0) {
                let timer = setTimeout(function () {
                  searchClicks('/Datapoints/getBatData', data).then(message => {
                    // console.log(message.data.errMsg)
                    let messData = message.data.errMsg
                    messData=messData.data.devices[0].datastreams
                    for (let i = 0; i < messData.length; i++) {
                      // console.log(messData.data.datastreams[i].id);
                      switch (messData[i].id) {
                        case '2012': that.con.devControl = messData[i].value
                          break;
                        default: break;
                      }
                    }
                    // console.log(that.con.devControl)
                    if (that.con.devControl == 17) {
                      // console.log(1)
                      clearTimeout(timer)
                      that.value5 = '未激活';
                      that.hidestatus = false;
                      that.listLoading = false;
                      that.universal.onfile = true;
                      that.universal.look = true;
                      that.$message({
                        message: '停用成功',
                        type: 'success'
                      });
                    } else {
                      clearTimeout(timer)
                      // console.log(2)
                      // that.value5='已激活';
                      // that.listLoading = false;
                      // that.universal.onfile=true;
                      // that.universal.look=true;
                      // that.hidestatus=true;
                      // that.$message({
                      // 	message: '停用失败',
                      // 	type: 'success'
                      // });
                      let calculate = setTimeout(() => {
                        searchClicks('/Datapoints/getBatData', data).then(message => {
                          let messData = message.data.errMsg
                          messData=messData.data.devices[0].datastreams
                          for (let i = 0; i < messData.length; i++) {
                            switch (messData[i].id) {
                              case '2012': that.con.devControl = messData[i].value
                                break;
                              default: break;
                            }
                          }
                          console.log(that.con.devControl)
                          if (that.con.devControl == 17) {
                            console.log(1)
                            clearTimeout(calculate)
                            that.value5 = '未激活';
                            that.hidestatus = false;
                            that.listLoading = false;
                            that.universal.onfile = true;
                            that.universal.look = true;
                            that.$message({
                              message: '停用成功',
                              type: 'success'
                            });
                          } else {
                            clearTimeout(calculate)
                            // console.log(2)
                            // that.value5='已激活';
                            // that.listLoading = false;
                            // that.universal.onfile=true;
                            // that.universal.look=true;
                            // that.hidestatus=true;
                            // that.$message({
                            // 	message: '停用失败',
                            // 	type: 'success'
                            // });
                            let recalculation = setTimeout(() => {
                              searchClicks('/Datapoints/getBatData', data).then(message => {
                                let messData = message.data.errMsg
                                messData=messData.data.devices[0].datastreams
                                for (let i = 0; i < messData.length; i++) {
                                  switch (messData[i].id) {
                                    case '2012': that.con.devControl = messData[i].value
                                      break;
                                    default: break;
                                  }
                                }
                                console.log(that.con.devControl)
                                if (that.con.devControl == 17) {
                                  console.log(1)
                                  clearTimeout(recalculation)
                                  that.value5 = '未激活';
                                  that.hidestatus = false;
                                  that.listLoading = false;
                                  that.universal.onfile = true;
                                  that.universal.look = true;
                                  that.$message({
                                    message: '停用成功',
                                    type: 'success'
                                  });
                                } else {
                                  clearTimeout(recalculation)
                                  console.log(2)
                                  that.value5 = '已激活';
                                  that.listLoading = false;
                                  that.universal.onfile = true;
                                  that.universal.look = true;
                                  that.hidestatus = true;
                                  that.$message({
                                    message: '停用超时',
                                    type: 'error'
                                  });

                                }
                              })
                            }, 5000)
                          }
                        })
                      }, 5000)
                    }
                  })
                }, 5000)
              } else {
                console.log(2)
                that.listLoading = false;
                that.universal.onfile = true;
                that.universal.look = true;
                that.value5 = '已激活';
                that.hidestatus = true;
                that.$message({
                  message: '停用失败',
                  type: 'success'
                });
              }
            })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消停用'
          });
          that.value5 = '已激活'
        });
      }
    },
    clickMe () {
      this.endcheckbox = true;
      this.num = 0;
      this.startcheckbox = false
    },
    facility (row, c) {
      this.fault_destruction = ''
      this.fault_hit = ''
      this.fault_opening = ''
      this.fault_abnormal = ''
      this.fault_leakage = ''
      this.fault_pay = ''
      this.fauCode = ''
      this.fault_pressure = ''
      this.fault_temperature = ''
      this.vacancy = ''
      console.log(row)
      console.log(c)
      this.universal.send = true;
      if (c == '正常') {

        this.fault_destruction = '正常'
        this.fault_hit = '正常'
        this.fault_opening = '正常'
        this.fault_abnormal = '正常'
        this.fault_leakage = '正常'
        this.fault_pay = '正常'
        this.fauCode = '正常'
        this.fault_pressure = '正常'
        this.fault_temperature = '正常'
        this.unstuck = 1
        this.unstuck1 = 1
        this.unstuck2 = 1
        this.unstuck3 = 1
        this.unstuck4 = 1
        this.unstuck5 = 1
        this.unstuck6 = 1
        this.unstuck7 = 1
        this.unstuck8 = 1
        return false;
      } else {
        let data = {
          page: 1,
          pageSize: 1
        };
        data.userId = sessionStorage.getItem('userId')
        data.devId = row
        // if(sessionStorage.getItem('dealer')==0){
        // 	console.log(890)
        // 	data.dealer=sessionStorage.getItem('orderDealers')
        // }else{
        // 	data.dealer=sessionStorage.getItem('dealer')
        // }
        data.dealer = '123'
        let that = this;
        // that.tableData = [];
        axios({
          method: 'post',
          url: that.$store.state.http + '/equipment/list',
          data: Qs.stringify(data)
        }).then(function (message) {

          message.data.results.reverse()
          console.log(message.data.results[0])
          if (message.data.results[0] == undefined) {
            that.vacancy = 1
            that.unstuck = 3
            return false;
          }
          if (message.data.results[0].fault_destruction == '0') {
            console.log(1)
            that.fault_destruction = '正常'
            that.unstuck = 1
            that.vacancy = ''
          } else {
            console.log(9)
            that.fault_destruction = '异常'
            that.unstuck = 2
            that.vacancy = ''
          }
          if (message.data.results[0].fault_hit == '0') {
            that.fault_hit = '正常'
            that.unstuck1 = 1
            that.vacancy = ''
          } else {
            that.fault_hit = '异常'
            that.unstuck1 = 2
            that.vacancy = ''
          }
          if (message.data.results[0].fault_opening == '0') {
            that.fault_opening = '正常'
            that.unstuck3 = 1
            that.vacancy = ''
          } else {
            that.fault_opening = '异常'
            that.unstuck3 = 2
            that.vacancy = ''
          }
          if (message.data.results[0].fault_abnormal == '0') {
            that.fault_abnormal = '正常'
            that.unstuck2 = 1
            that.vacancy = ''
          } else {
            that.fault_abnormal = '异常'
            that.unstuck2 = 2
            that.vacancy = ''
          }
          if (message.data.results[0].fault_leakage == '0') {
            that.fault_leakage = '正常'
            that.unstuck5 = 1
            that.vacancy = ''
          } else {
            that.fault_leakage = '异常'
            that.unstuck5 = 2
            that.vacancy = ''
          }
          if (message.data.results[0].fault_temperature == '0') {
            that.fault_temperature = '正常'
            that.unstuck6 = 1
            that.vacancy = ''
          } else {
            that.fault_temperature = '异常'
            that.unstuck6 = 2
            that.vacancy = ''
          }
          if (message.data.results[0].fault_pay == '0') {
            that.fault_pay = '正常'
            that.vacancy = ''
            that.unstuck7 = 1
          } else {
            that.fault_pay = '异常'
            that.vacancy = ''
            that.unstuck7 = 2
          }
          if (message.data.results[0].fault_pressure == '0') {
            that.fault_pressure = '正常'
            that.vacancy = ''
            that.unstuck8 = 1
          } else {
            that.fault_pressure = '异常'
            that.vacancy = ''
            that.unstuck8 = 2
          }
          if (message.data.results[0].fauCode == '0') {
            that.fauCode = '正常'
            that.vacancy = ''
            that.unstuck4 = 1
          } else {
            that.fauCode = '异常'
            that.vacancy = ''
            that.unstuck4 = 2
          }
        })
      }


    },
    clickMe1 () {
      this.startcheckbox = true;
      this.num = 1;
      this.endcheckbox = false
    },
    setCard (row) {
      this.cardListshow.cardid = ''
      this.cardListshow.personnel = sessionStorage.getItem('userAlias')
      console.log(row)
      this.universal.cardListshow = true
      // let data = {
      //   type: 5,
      //   userId: sessionStorage.getItem('userId'),
      //   dealer: sessionStorage.getItem('dealer')
      // }
      // if (data.dealer == 0) {
      //   data.dealer = sessionStorage.getItem('orderDealers')
      // }
      // let that = this;
      // axios({
      //   method: 'post',
      //   url: this.$store.state.http + '/user/listCustom',
      //   data: Qs.stringify(data)
      // }).then(function (message) {
      //   console.log(message.data.result)
      //   that.len = message.data.result;
      // })

    },
    changemap (row) {
      console.log(row)
      if (this.hnewmap == '' || this.mark == '') {
        this.$message.error('数据不能为空哦！');
        return false;
      }
      if (this.num == 1) {
        this.as = this.hnewmap
      } else if (this.num == 0) {
        this.as = this.newdirectory
      }
      let that = this;
      let data = {
        deviceId: that.newnum,
        number: that.num,
        address: that.as,
        mark: that.mark,
        amendLongitude: that.objs.lngs ? that.objs.lngs : that.newcon.devLongitude,
        amendLatitude: that.objs.lats ? that.objs.lats : that.newcon.devLatitude
      }

      console.log(data)
      axios({
        method: 'post',
        dataType: 'jsonp',
        url: this.$store.state.http + '/Amend/update',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message)
        if (message.data.resCode == 0) {
          that.searchClick();
          that.$message({
            message: '修改成功',
            type: 'success'
          });
        } else {
          that.searchClick();
          that.$message({
            message: '修改失败',
            type: 'error'
          });
        }
      })
      that.universal.alter = false;
    },
    hiedclick () {
      this.universal.change = false;
    },
    statistics () {
      this.universal.statistic = true;
      let that = this
      that.aaaaaaaa = [];
      that.ccccc = [];
      that.ddddd = [];
      that.bbbbb = [];
      that.elding3()
      that.llllll()
      that.elding()

      // 	that.value3=that.common.getNowFormatDatenew()


      // that.lpclias()
      // that.yule()
      // 	that.value4=that.common.getNowFormatDate()

      that.elding1()

      // 	that.value8=that.common.getNowFormatDatenew()


      // 	that.value9=that.common.getNowFormatDate()

      that.elding2()

      // 	that.value15=that.common.getNowFormatDatenew()


      // 	that.value16=that.common.getNowFormatDate()


    },
    handleChange (val) {
      let a = CodeToText[val[0]] + '' + CodeToText[val[1]] + CodeToText[val[2]]
      console.log(a)
    },
    mapdetail (val) {
      console.log(val)
      this.$router.push({        path: '/pageHome/Edistribution', query: {
          mouse: val.devParaSn
        }      });
    },
    changecontrol (val) {
      this.universal.onfile = true;

      let that = this;
      let data = {
        devId: that.roomid
      }
      console.log(data)
      axios({
        method: "post",
        url: this.$store.state.http + '/Datapoints/getBatData',
        data: Qs.stringify(data)
      }).then(function (message) {

        let messData = message.data.errMsg
        messData=messData.data.devices[0].datastreams
        for (let i = 0; i < messData.length; i++) {
          switch (messData[i].id) {
            case '2010': that.lon.devDefence = messData[i].value;
              break;

            case '2012': that.lon.devControl = messData[i].value;
              break;
            case '2009': that.lon.devUnlockWay = messData[i].value;
              that.lon.devUnlockTime = messData[i].at;
              break;
            case '2008': that.lon.devLockState = messData[i].value;
              break;
            case '1001': that.lon.devStatus = messData[i].value;
              break;
            default: break;
          }
        }
        if (that.lon.devControl == 17) {
          console.log(1)
          that.value5 = '未激活';
          that.hidestatus = false;
        } else {
          console.log(2)
          that.value5 = '已激活';
          that.hidestatus = true;
        }
        if (that.lon.devLockState == 17) {
          console.log(1)
          that.value6 = '已开阀';
        } else {
          console.log(2)
          that.value6 = '未开阀';
        }
        if (that.lon.devDefence == 17) {
          console.log(1)
          that.value7 = '未布防';
        } else {
          console.log(2)
          that.value7 = '已布防';
        }
      })







    },
    indexMethod (index) {
      return index + (this.paging.page - 1) * this.paging.pageSize + 1;
    },
    handleSizeChange (val) {
      this.paging.pageSize = val;
      console.log(this.paging.pageSize)
      this.searchClick();
    },
    handleClick (tab, event) {
      console.log(tab, event);
      console.log(77777777777777777)
    },


    handleCurrentChange (val) {
      this.searchClick();
    },
    aaa: function (val) {
      this.tableChild.map((s, index) => {
        if (s.deviceType === val) {
          this.selectid = this.tableChild[index].id;
          console.log(77777777777777777)
          console.log(this.selectid)
        }
      })
    },
    deleteClild (row) {
      if (this.type1.deviceType == '') {
        this.$message.error('数据不能为空哦！');
        return false;
      }
      let that = this;
      let data = {
        typeId: this.selectid
      }
      console.log(data)
      this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(row)
        axios({
          method: 'post',
          url: this.$store.state.http + '/type/removeType',
          data: Qs.stringify(data)
        }).then(function (message) {
          console.log(message)
          console.log(789)
          if (message.data.resCode == 1) {
            that.searchChild();
            that.type1.deviceType = ""
            that.$message({
              message: '删除成功',
              type: 'success'
            });
          } else {
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
    changeting (row) {
      let that = this;
      if (that.value7 == '已布防') {
        that.value7 = '已布防'
        this.$confirm('此操作将设备布防, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          that.listLoading = true;
          that.universal.onfile = false;
          that.universal.look = false;
          let dataiu = {
            devId: that.roomid,
            cmd: 19,
            cmdValue: '11',
            remark:localStorage.getItem("userAlias"),
            type:'平台'
          }
          console.log(dataiu)
          axios({
            method: 'post',
            url: that.$store.state.http + "/send/sendCmd",
            data: Qs.stringify(dataiu)
          })
            .then(function (message) {
              if (message.data.resCode == 0) {
                let timer = setTimeout(function () {
                  let data = {
                    devId: that.roomid
                  }
                  console.log(data)
                  searchClicks('/Datapoints/getData', data).then(message => {
                    console.log(message.data.errMsg)
                    let messData = message.data.errMsg
                    for (let i = 0; i < messData.data.datastreams.length; i++) {
                      console.log(messData.data.datastreams[i].id);
                      switch (messData.data.datastreams[i].id) {
                        case '2010': that.con.devDefence = messData.data.datastreams[i].datapoints[0].value
                          break;
                        default: break;
                      }
                      console.log(that.con.devDefence)
                      if (that.con.devDefence == '未布防') {
                        // console.log(1)
                        // that.value7='未布防';
                        clearTimeout(timer)
                        // that.listLoading = false;
                        // that.universal.onfile=true;
                        // that.universal.onfile=true;
                        // that.$message({
                        // 	message: '布防失败',
                        // 	type: 'error'
                        // })
                        let calculate = setTimeout(() => {
                          let dataFLWEO = {
                            devId: that.roomid
                          }
                          console.log(data)
                          searchClicks('/Datapoints/getData', dataFLWEO).then(message => {
                            console.log(message.data.errMsg)
                            let messData = message.data.errMsg
                            for (let i = 0; i < messData.data.datastreams.length; i++) {
                              console.log(messData.data.datastreams[i].id);
                              switch (messData.data.datastreams[i].id) {
                                case '2010': that.con.devDefence = messData.data.datastreams[i].datapoints[0].value
                                  break;
                                default: break;
                              }
                              console.log(that.con.devDefence)
                              if (that.con.devDefence == '未布防') {
                                // console.log(1)
                                // that.value7='未布防';
                                clearTimeout(calculate)
                                // that.listLoading = false;
                                // that.universal.onfile=true;
                                // that.universal.onfile=true;
                                // that.$message({
                                // 	message: '布防失败',
                                // 	type: 'error'
                                // })
                                let recalculation = setTimeout(() => {
                                  let dataLWFf = {
                                    devId: that.roomid
                                  }
                                  console.log(data)
                                  searchClicks('/Datapoints/getData', dataLWFf).then(message => {
                                    console.log(message.data.errMsg)
                                    let messData = message.data.errMsg
                                    for (let i = 0; i < messData.data.datastreams.length; i++) {
                                      console.log(messData.data.datastreams[i].id);
                                      switch (messData.data.datastreams[i].id) {
                                        case '2010': that.con.devDefence = messData.data.datastreams[i].datapoints[0].value
                                          break;
                                        default: break;
                                      }
                                      console.log(that.con.devDefence)
                                      if (that.con.devDefence == '未布防') {
                                        console.log(1)
                                        that.value7 = '未布防';
                                        clearTimeout(recalculation)
                                        that.listLoading = false;
                                        that.universal.onfile = true;
                                        that.universal.onfile = true;
                                        that.$message({
                                          message: '布防超时',
                                          type: 'error'
                                        })
                                      } else {
                                        console.log(2)
                                        that.listLoading = false;
                                        that.universal.onfile = true;
                                        that.universal.onfile = true;
                                        that.value7 = '已布防';
                                        clearTimeout(recalculation)
                                        that.$message({
                                          message: '布防成功',
                                          type: 'success'
                                        })
                                      }
                                    }

                                  })
                                }, 5000)
                              } else {
                                console.log(2)
                                that.listLoading = false;
                                that.universal.onfile = true;
                                that.universal.onfile = true;
                                that.value7 = '已布防';
                                clearTimeout(calculate)
                                that.$message({
                                  message: '布防成功',
                                  type: 'success'
                                })
                              }
                            }

                          })
                        }, 5000)
                      } else {
                        console.log(2)
                        that.listLoading = false;
                        that.universal.onfile = true;
                        that.universal.onfile = true;
                        that.value7 = '已布防';
                        clearTimeout(timer)
                        that.$message({
                          message: '布防成功',
                          type: 'success'
                        })
                      }
                    }

                  })
                }, 5000)
              } else {
                that.listLoading = false;
                that.universal.onfile = true;
                that.universal.onfile = true;
                that.value7 = '未布防';
                that.$message({
                  message: '布防失败',
                  type: 'error'
                })
              }
            })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消布防'
          });
          that.value7 = '未布防'
        });
      } else if (that.value7 == '未布防') {
        that.value7 = '未布防'
        console.log(787)
        this.$confirm('此操作将设备撤防, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          that.listLoading = true;
          that.universal.look = false;
          that.universal.onfile = false;
          let datays = {
            devId: that.roomid,
            cmd: 19,
            cmdValue: '12',
            remark:localStorage.getItem("userAlias"),
            type:'平台'
          }
          console.log(datays)
          axios({
            method: 'post',
            url: that.$store.state.http + "/send/sendCmd",
            data: Qs.stringify(datays)
          })
            .then(function (message) {
              if (message.data.resCode == 0) {
                let timer = setTimeout(function () {
                  let data = {
                    devId: that.roomid
                  }
                  console.log(data)
                  searchClicks('/Datapoints/getData', data).then(message => {
                    console.log(message.data.errMsg)
                    let messData = message.data.errMsg
                    for (let i = 0; i < messData.data.datastreams.length; i++) {
                      console.log(messData.data.datastreams[i].id);
                      switch (messData.data.datastreams[i].id) {
                        case '2010': that.con.devDefence = messData.data.datastreams[i].datapoints[0].value
                          break;
                        default: break;
                      }
                      console.log(that.con.devDefence)
                      if (that.con.devDefence == '未布防') {
                        // that.value7='已布防';
                        // that.listLoading = false;
                        // that.universal.look=true;
                        // that.universal.onfile=true;
                        clearTimeout(timer)
                        // that.$message({
                        // 	message: '撤防失败',
                        // 	type: 'error'
                        // })
                        let calculate = setTimeout(() => {
                          let dataDFWXO = {
                            devId: that.roomid
                          }
                          console.log(data)
                          searchClicks('/Datapoints/getData', dataDFWXO).then(message => {
                            console.log(message.data.errMsg)
                            let messData = message.data.errMsg
                            for (let i = 0; i < messData.data.datastreams.length; i++) {
                              console.log(messData.data.datastreams[i].id);
                              switch (messData.data.datastreams[i].id) {
                                case '2010': that.con.devDefence = messData.data.datastreams[i].datapoints[0].value
                                  break;
                                default: break;
                              }
                              console.log(that.con.devDefence)
                              if (that.con.devDefence == '未布防') {
                                // that.value7='已布防';
                                // that.listLoading = false;
                                // that.universal.look=true;
                                // that.universal.onfile=true;
                                clearTimeout(calculate)
                                // that.$message({
                                // 	message: '撤防失败',
                                // 	type: 'error'
                                // })
                                let recalculation = setTimeout(() => {
                                  let dataWEUQ = {
                                    devId: that.roomid
                                  }
                                  searchClicks('/Datapoints/getData', dataWEUQ).then(message => {
                                    console.log(message.data.errMsg)
                                    let messData = message.data.errMsg
                                    for (let i = 0; i < messData.data.datastreams.length; i++) {
                                      console.log(messData.data.datastreams[i].id);
                                      switch (messData.data.datastreams[i].id) {
                                        case '2010': that.con.devDefence = messData.data.datastreams[i].datapoints[0].value
                                          break;
                                        default: break;
                                      }
                                      console.log(that.con.devDefence)
                                      if (that.con.devDefence == '未布防') {
                                        that.value7 = '已布防';
                                        that.listLoading = false;
                                        that.universal.look = true;
                                        that.universal.onfile = true;
                                        clearTimeout(recalculation)
                                        that.$message({
                                          message: '撤防超时',
                                          type: 'error'
                                        })
                                      } else {
                                        that.value7 = '未布防';
                                        that.listLoading = false;
                                        that.universal.look = true;
                                        that.universal.onfile = true;
                                        clearTimeout(recalculation)
                                        that.$message({
                                          message: '撤防成功',
                                          type: 'success'
                                        })
                                      }
                                    }

                                  })
                                }, 5000)
                              } else {
                                that.value7 = '未布防';
                                that.listLoading = false;
                                that.universal.look = true;
                                that.universal.onfile = true;
                                clearTimeout(calculate)
                                that.$message({
                                  message: '撤防成功',
                                  type: 'success'
                                })
                              }
                            }

                          })
                        }, 5000)
                      } else {
                        that.value7 = '未布防';
                        that.listLoading = false;
                        that.universal.look = true;
                        that.universal.onfile = true;
                        clearTimeout(timer)
                        that.$message({
                          message: '撤防成功',
                          type: 'success'
                        })
                      }
                    }

                  })
                }, 5000)
              } else {
                that.value7 = '已布防';
                that.listLoading = false;
                that.universal.look = true;
                that.universal.onfile = true;
                that.$message({
                  message: '撤防失败',
                  type: 'error'
                })
              }
            })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消撤防'
          });
          that.value7 = '已布防'
        });
      }
    },
    searchChild () {
      // let tableChild=[];
      let data;
      let that = this
      axios({
        method: 'post',
        dataType: 'jsonp',
        url: this.$store.state.http + '/type/findTypes',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message)
        console.log(123243)
        that.tableChild = message.data.typeList;
        console.log(that.tableChild)
      })
    },
    type () {
      this.universal.type1 = true;
      this.searchChild();
    },
    yes () {
      if (this.type2.deviceType == '') {
        this.$message.error('数据不能为空哦！');
        return false;
      }
      let data = this.type2
      console.log(data)
      console.log(333333333)
      let that = this
      axios({
        method: 'post',
        dataType: 'jsonp',
        url: this.$store.state.http + '/type/addType',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message)
        console.log((message.data.errMsg).split(":")[1])
        localStorage.setItem('id', (message.data.errMsg).split(":")[1])
        if (message.data.resCode == 1) {
          that.searchChild();
          // that.$store.dispatch('group');
          that.type2.deviceType = ""
          that.$message({
            message: '添加成功',
            type: 'success'
          });
        } else if (message.data.resCode == 6) {
          that.$alert(message.data.result, '请勿重复添加', {
            confirmButtonText: '确定'
          })
        }
      })
    },
    addClick () {
      /*console.log(parameter)*/
      // if(this.add1.trafficCard == ''){
      // 	this.$message.error('带*的数据不能为空哦！');
      // 	return false;
      // }
      if (this.type1.deviceType == '') {
        this.$message.error('带*的数据不能为空哦！');
        return false;
      }
      if (this.add1.deviceModel == '') {
        this.$message.error('带*的数据不能为空哦！');
        return false;
      }

      if (this.add1.deviceName == '') {
        this.$message.error('带*的数据不能为空哦！');
        return false;
      }
      this.add1.deviceType = this.type1.deviceType
      let that = this;
      let data = this.add1;

      data.status = 0
      data.personnel = sessionStorage.getItem("userAlias");
      data.dealer = sessionStorage.getItem("dealer");
      if (data.dealer == 0) {
        data.dealer = sessionStorage.getItem('orderDealers')
      }
      console.log(data);
      console.log(111111111111)
      axios({
        method: 'post',
        dataType: 'jsonp',
        url: this.$store.state.http + '/devices/addDevices',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message)
        console.log((message.data.errMsg).split(":")[1])
        localStorage.setItem('id', (message.data.errMsg).split(":")[1])
        if (message.data.resCode == 0) {
          that.searchClick();
          // that.$store.dispatch('group');
          that.$message({
            message: '添加成功',
            type: 'success'
          });
        } else if (message.data.resCode == 6) {
          that.$alert(message.data.result, '请勿重复添加', {
            confirmButtonText: '确定'
          })
        }
      })
      that.universal.add = false;
    },
    allotchange (row) {
      console.log(row)
      if (this.customer == '') {
        this.$message.error('带*的数据不能为空哦！');
        return false;
      }
      let dataA = {
        deviceId: row.deviceId,
        deviceName: row.deviceName,
        trafficCard: row.trafficCard,
        deviceType: row.deviceType,
        personnel: row.personnel,
        deviceModel: row.deviceModel,
        orderDealer: this.customer,
      }
      console.log(dataA)
      let that = this;
      axios({
        method: 'post',
        url: that.$store.state.http + "/Datapoints/queryList",
        data: Qs.stringify(dataA)
      })
        .then(function (message) {
          if (message.data.resCode == 0) {
            console.log(message)
            that.$message({
              message: '分配成功',
              type: 'success'
            })
          } else {
            that.$message({
              message: message.data.result,
              type: 'error'
            })
          }
        })


      that.universal.allot = false;
    },
    deleteClick (row) {
      let that = this;
      // console.log(localStorage.getItem('id'))
      this.$confirm('此操作将永久复原该条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        that.listLoading = true;
        console.log(row)
        axios({
          method: 'post',
          url: this.$store.state.http + '/devices/removeDevices',
          data: Qs.stringify({
            devId: row.deviceId,
            status: 0
          })
        }).then(function (message) {
          console.log(message)
          if (message.data.resCode == 0) {
            that.listLoading = false;
            that.$message({
              message: '复原成功',
              type: 'success'
            });
            that.searchClick();
          } else {
            that.$alert(message.data.result, '系统确认框', {
              confirmButtonText: '确定'
            })
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消复原'
        });
      });

      this.universal.change = false;
    },
    // changeShow(row){
    // 	this.universal.add = true;
    // 	this.change = row;
    // 	console.log(row)
    // },
    changeshow (row) {
      this.universal.change = true;
      this.change = Object.assign({}, row);
      console.log(row)
      // this.searchClick()
    },
    changeShowmap (row) {
      this.universal.alter = true;
      // this.alter = Object.assign({},row);
      this.newnum = row.deviceId
      let that = this;
      console.log(row)
      axios({
        method: "post",
        url: this.$store.state.http + '/Datapoints/getBatData',
        data: Qs.stringify({
          devId: row.deviceId
        })
      }).then(function (message) {
        let messData = message.data.errMsg
        messData=messData.data.devices[0].datastreams
        for (let i = 0; i < messData.length; i++) {
          switch (messData[i].id) {
            case '2003': that.newcon.devLongitude = messData[i].value;
              break;
            case '2002': that.newcon.devLatitude = messData[i].value;
              break;
            default: break;
          }
        }

        that.mapchangelist = wgs84togcj02((that.newcon.devLongitude) / 100000, (that.newcon.devLatitude) / 100000)
        that.newcon.devLongitude = that.mapchangelist[0]
        that.newcon.devLatitude = that.mapchangelist[1]
        console.log(that.newcon.devLatitude)
        console.log(135)
        console.log(that.newcon.devLongitude)
        console.log(that.newcon.devLatitude)
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(that.newcon.devLongitude, that.newcon.devLatitude);
        map.centerAndZoom(new BMap.Point(that.newcon.devLongitude, that.newcon.devLatitude), 18);
        map.enableScrollWheelZoom(true);
        map.addEventListener("click", function (e) {
          // console.log(e.point.lng + "," + e.point.lat);
          that.objs.lngs = e.point.lng;
          that.objs.lats = e.point.lat
          map.clearOverlays();
          point = new BMap.Point(e.point.lng, e.point.lat);
          var geoc = new BMap.Geocoder();
          geoc.getLocation(point, function (rs) {
            var addComp = rs.addressComponents;
            that.hnewmap = (addComp.province + "" + addComp.city + "" + addComp.district + "" + addComp.street + "" + addComp.streetNumber);
            // console.log(addComp);
          });
          var marker = new BMap.Marker(point);
          marker.remove();
          map.addOverlay(marker);
          map.removeOverlay("指定点")

          // 删除标注点：
          var len = map.getOverlays().length

          for (var i = len; i > 0; i--) {

            // if (map.getOverlays()[i].GO == "Marker")

            map.removeOverlay(map.getOverlays()[i]);

          }


          function remove (name) {
            var overlays = map.getOverlays();
            for (var i = 0; i < overlays.length; i++) {
              if (overlays[i].getTitle() == name) {
                map.removeOverlay(overlays[i]);
              }

            }
          }


        });
        var geoc = new BMap.Geocoder();
        geoc.getLocation(point, function (rs) {
          var addComp = rs.addressComponents;
          that.newdirectory = addComp.province + "" + addComp.city + "" + addComp.district + "" + addComp.street + "" + addComp.streetNumber
        });
        // 添加带有定位的导航控件
        var navigationControl = new BMap.NavigationControl({
          // 靠左上角位置
          anchor: BMAP_ANCHOR_TOP_LEFT,
          // LARGE类型
          type: BMAP_NAVIGATION_CONTROL_LARGE,
          // 启用显示定位
          enableGeolocation: true
        });
        map.addControl(navigationControl);
        // 添加定位控件
        var geolocationControl = new BMap.GeolocationControl();
        geolocationControl.addEventListener("locationError", function (e) {
          // 定位失败事件
          alert(e.message);
        });
        map.addControl(geolocationControl);
        map.clearOverlays();
        var new_point = new BMap.Point(that.newcon.devLongitude, that.newcon.devLatitude);
        var marker = new BMap.Marker(new_point);  // 创建标注
        const deviceSize = new BMap.Size(16, 26);
        const deviceIcon = new BMap.Icon(iconCar, deviceSize, { //会以base64的方式传参iconCar
          imageSize: deviceSize
        });

        marker = new BMap.Marker(new_point, {
          icon: deviceIcon
        })
        map.addOverlay(marker);              // 将标注添加到地图中
        map.panTo(new_point);
        // var map = new BMap.Map("allmap");
        // var point = new BMap.Point(116.331398,39.897445);
        // map.centerAndZoom(point,12);
        // var geoc = new BMap.Geocoder();    

        // map.addEventListener("click", function(e){        
        // 	var pt = e.point;
        // 	geoc.getLocation(pt, function(rs){
        // 		var addComp = rs.addressComponents;
        // 		console.log(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
        // 	});        
        // });
      })
      axios({
        method: 'post',
        url: this.$store.state.http + '/Amend/findOne',
        data: Qs.stringify({
          id: row.deviceId
        })
      }).then(function (message) {
        if (message.data.resCode == 0) {
          console.log(message.data.amend.address)
          that.hnewmap = message.data.amend.address
          that.changeone = message.data.amend.number
          that.mark = message.data.amend.mark
          if (that.changeone == "1") {
            that.endcheckbox = false
            that.startcheckbox = true
          } else if (that.changeone == "0") {
            that.endcheckbox = true
            that.startcheckbox = false
          }
        } else {
          that.hnewmap = ''
        }
      })

    },
    allot (row) {
      this.universal.allot = true;
      this.allot1 = row;
      let that = this;
      if (this.allot1.trafficCard == '') {
        this.allot1.trafficCard = '无'
      }

    },
    changeclick (row) {
      // if(this.change.trafficCard == ''){
      // 	this.$message.error('带*的数据不能为空哦！');
      // 	return false;
      // }
      if (this.change.deviceType == '') {
        this.$message.error('带*的数据不能为空哦！');
        return false;
      }
      if (this.change.deviceModel == '') {
        this.$message.error('带*的数据不能为空哦！');
        return false;
      }
      if (this.change.deviceName == '') {
        this.$message.error('带*的数据不能为空哦！');
        return false;
      }
      let that = this;
      axios({
        method: 'post',
        url: this.$store.state.http + '/devices/modifyDevices',
        data: Qs.stringify({
          deviceName: row.deviceName,
          // trafficCard:row.trafficCard,
          deviceModel: row.deviceModel,
          deviceType: row.deviceType,
          deviceId: row.deviceId,
          devStatus: row.devStatus,
          personnel: sessionStorage.getItem("userAlias")
        })
      }).then((message) => {
        console.log(message.data)
        if (message.data.resCode == 0) {
          that.searchClick();
          that.$message({
            message: '修改成功',
            type: 'success'
          });
        } else {
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
    changelock (row) {
      let that = this;
      if (that.value6 == '已开阀') {
        that.value6 = '已开阀'
        this.$confirm('此操作将设备开阀, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          that.listLoading = true;
          that.universal.look = false;
          that.universal.onfile = false;
          let dataso = {
            devId: that.roomid,
            cmd: 18,
            cmdValue: '11',
            remark:localStorage.getItem("userAlias"),
            type:'平台'
          }
          console.log(dataso)
          axios({
            method: 'post',
            url: that.$store.state.http + "/send/sendCmd",
            data: Qs.stringify(dataso)
          })
            .then(function (message) {
              if (message.data.resCode == 0) {
                let timer = setTimeout(function () {
                  let data = {
                    devId: that.roomid
                  }
                  console.log(data)
                  searchClicks('/Datapoints/getData', data).then(message => {
                    console.log(message.data.errMsg)
                    let messData = message.data.errMsg
                    for (let i = 0; i < messData.data.datastreams.length; i++) {
                      console.log(messData.data.datastreams[i].id);
                      switch (messData.data.datastreams[i].id) {
                        case '2008': that.con.devLockState = messData.data.datastreams[i].datapoints[0].value
                          break;
                        default: break;
                      }
                    }
                    console.log(that.con.devLockState)
                    if (that.con.devLockState == 17) {
                      that.value6 = '已开阀';
                      that.listLoading = false;
                      that.universal.onfile = true;
                      that.universal.look = true;
                      clearTimeout(timer)
                      that.$message({
                        message: '开阀成功',
                        type: 'success'
                      });
                    } else {
                      clearTimeout(timer)
                      // that.listLoading = false;
                      // that.universal.onfile=true;
                      // that.universal.look=true;
                      // that.value6='未开阀';
                      // that.$message({
                      // 	message: '开阀失败',
                      // 	type: 'error'
                      // });
                      let calculate = setInterval(() => {
                        let dataFSDW = {
                          devId: that.roomid
                        }
                        console.log(data)
                        searchClicks('/Datapoints/getData', dataFSDW).then(message => {
                          console.log(message.data.errMsg)
                          let messData = message.data.errMsg
                          for (let i = 0; i < messData.data.datastreams.length; i++) {
                            console.log(messData.data.datastreams[i].id);
                            switch (messData.data.datastreams[i].id) {
                              case '2008': that.con.devLockState = messData.data.datastreams[i].datapoints[0].value
                                break;
                              default: break;
                            }
                          }
                          console.log(that.con.devLockState)
                          if (that.con.devLockState == 17) {
                            that.value6 = '已开阀';
                            that.listLoading = false;
                            that.universal.onfile = true;
                            that.universal.look = true;
                            clearTimeout(calculate)
                            that.$message({
                              message: '开阀成功',
                              type: 'success'
                            });
                          } else {
                            clearTimeout(calculate)
                            // that.listLoading = false;
                            // that.universal.onfile=true;
                            // that.universal.look=true;
                            // that.value6='未开阀';
                            // that.$message({
                            // 	message: '开阀失败',
                            // 	type: 'error'
                            // });
                            let recalculation = setInterval(() => {
                              let dataWERWL = {
                                devId: that.roomid
                              }
                              searchClicks('/Datapoints/getData', dataWERWL).then(message => {
                                console.log(message.data.errMsg)
                                let messData = message.data.errMsg
                                for (let i = 0; i < messData.data.datastreams.length; i++) {
                                  console.log(messData.data.datastreams[i].id);
                                  switch (messData.data.datastreams[i].id) {
                                    case '2008': that.con.devLockState = messData.data.datastreams[i].datapoints[0].value
                                      break;
                                    default: break;
                                  }
                                }
                                console.log(that.con.devLockState)
                                if (that.con.devLockState == 17) {
                                  that.value6 = '已开阀';
                                  that.listLoading = false;
                                  that.universal.onfile = true;
                                  that.universal.look = true;
                                  clearTimeout(recalculation)
                                  that.$message({
                                    message: '开阀成功',
                                    type: 'success'
                                  });
                                } else {
                                  clearTimeout(recalculation)
                                  that.listLoading = false;
                                  that.universal.onfile = true;
                                  that.universal.look = true;
                                  that.value6 = '未开阀';
                                  that.$message({
                                    message: '开阀超时',
                                    type: 'error'
                                  });
                                }
                              })
                            }, 5000)

                          }
                        })
                      }, 5000)

                    }
                  })
                }, 5000)
              } else {
                that.listLoading = false;
                that.universal.onfile = true;
                that.universal.look = true;
                that.value6 = '未开阀';
                that.$message({
                  message: '开阀失败',
                  type: 'error'
                });
              }
            })
        }).catch(() => {
          that.$message({
            type: 'info',
            message: '已取消开阀'
          });
          that.value6 = '未开阀'
        });
      } else if (that.value6 == '未开阀') {
        that.value6 = '未开阀'
        that.$confirm('此操作将设备关阀, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          that.listLoading = true;
          that.universal.look = false;
          that.universal.onfile = false;
          let dataOP = {
            devId: that.roomid,
            cmd: 18,
            cmdValue: '12',
            remark:localStorage.getItem("userAlias"),
            type:'平台'
          }
          console.log(dataOP)
          axios({
            method: 'post',
            url: that.$store.state.http + "/send/sendCmd",
            data: Qs.stringify(dataOP)
          })
            .then(function (message) {
              if (message.data.resCode == 0) {
                let timer = setTimeout(function () {
                  let data = {
                    devId: that.roomid
                  }
                  console.log(data)
                  searchClicks('/Datapoints/getData', data).then(message => {
                    console.log(message.data.errMsg)
                    let messData = message.data.errMsg
                    for (let i = 0; i < messData.data.datastreams.length; i++) {
                      console.log(messData.data.datastreams[i].id);
                      switch (messData.data.datastreams[i].id) {
                        case '2008': that.con.devControl = messData.data.datastreams[i].datapoints[0].value
                          break;
                        default: break;
                      }
                    }
                    console.log(that.con.devLockState)
                    if (that.con.devLockState != '开启') {
                      // console.log(12349)
                      // that.value6='已开阀';
                      clearTimeout(timer)
                      // that.listLoading = false;
                      // that.universal.onfile=true;
                      // that.universal.look=true;
                      // that.$message({
                      // 	message: '关阀失败',
                      // 	type: 'error'
                      // });
                      let calculate = setInterval(() => {
                        let data = {
                          devId: that.roomid
                        }
                        //console.log(data)
                        searchClicks('/Datapoints/getData', data).then(message => {
                          //console.log(message.data.errMsg)
                          let messData = message.data.errMsg
                          for (let i = 0; i < messData.data.datastreams.length; i++) {
                            //console.log(messData.data.datastreams[i].id);
                            switch (messData.data.datastreams[i].id) {
                              case '2008': that.con.devControl = messData.data.datastreams[i].datapoints[0].value
                                break;
                              default: break;
                            }
                          }
                          console.log(that.con.devLockState)
                          if (that.con.devLockState != '开启') {
                            // console.log(12349)
                            // that.value6='已开阀';
                            clearTimeout(calculate)
                            // that.listLoading = false;
                            // that.universal.onfile=true;
                            // that.universal.look=true;
                            // that.$message({
                            // 	message: '关阀失败',
                            // 	type: 'error'
                            // });
                            let recalculation = setInterval(() => {
                              let dataDFWZ = {
                                devId: that.roomid
                              }
                              searchClicks('/Datapoints/getData', dataDFWZ).then(message => {
                                //console.log(message.data.errMsg)
                                let messData = message.data.errMsg
                                for (let i = 0; i < messData.data.datastreams.length; i++) {
                                  //console.log(messData.data.datastreams[i].id);
                                  switch (messData.data.datastreams[i].id) {
                                    case '2008': that.con.devControl = messData.data.datastreams[i].datapoints[0].value
                                      break;
                                    default: break;
                                  }
                                }
                                console.log(that.con.devLockState)
                                if (that.con.devLockState != '开启') {
                                  //console.log(12349)
                                  that.value6 = '已开阀';
                                  clearTimeout(recalculation)
                                  that.listLoading = false;
                                  that.universal.onfile = true;
                                  that.universal.look = true;
                                  that.$message({
                                    message: '关阀超时',
                                    type: 'error'
                                  });
                                } else {
                                  that.value6 = '未开阀';
                                  clearTimeout(recalculation)
                                  that.listLoading = false;
                                  that.universal.onfile = true;
                                  that.universal.look = true;
                                  that.$message({
                                    message: '关阀成功',
                                    type: 'success'
                                  });
                                }
                              })
                            })
                          } else {
                            that.value6 = '未开阀';
                            clearTimeout(calculate)
                            that.listLoading = false;
                            that.universal.onfile = true;
                            that.universal.look = true;
                            that.$message({
                              message: '关阀成功',
                              type: 'success'
                            });
                          }
                        }, 5000)
                      })
                    } else {
                      that.value6 = '未开阀';
                      clearTimeout(timer)
                      that.listLoading = false;
                      that.universal.onfile = true;
                      that.universal.look = true;
                      that.$message({
                        message: '关阀成功',
                        type: 'success'
                      });
                    }
                  })
                }, 5000)
              } else {
                that.value6 = '已开阀';
                that.listLoading = false;
                that.universal.onfile = true;
                that.universal.look = true;
                that.$message({
                  message: '关阀失败',
                  type: 'error'
                });
              }
            })
        }).catch(() => {
          that.$message({
            type: 'info',
            message: '已取消关阀'
          });
          that.value6 = '已开阀'
        });
      }
    },
    renewal (row) {
      console.log(row)
      let that = this;
      this.$confirm('此操作将更新位置, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios({
          method: 'post',
          url: this.$store.state.http + "/send/sendCmd",
          data: Qs.stringify({
            devId: that.roomid,
            cmd: 21,
            cmdValue: '12',
            remark:localStorage.getItem("userAlias"),
            type:'平台'
          })
        })
          .then(function (message) {
            console.log(message)
            if (message.data.resCode == 0) {
              console.log(message)
              let t = setTimeout(function () {
                axios({
                  method: 'post',
                  url: that.$store.state.http + "/send/QueryCmdsStatus",
                  data: Qs.stringify({
                    cmdsId: message.data.cmd_uuid
                  })
                })
                  .then(function (res) {
                    if (JSON.parse((res.data.errMsg).slice(4, res.data.errMsg.length)).data.status == 4) {
                      that.$message({
                        message: '更新位置成功',
                        type: 'success'
                      })
                    } else if (JSON.parse((res.data.errMsg).slice(4, res.data.errMsg.length)).data.status == 0) {
                      that.$message({
                        message: '设备未在线',
                        type: 'error'
                      })
                    } else {
                      // if(message.data.resCode==0){
                      // 	that.$message({
                      // 		message: '更新位置成功',
                      // 		type: 'success'
                      // 	})
                      // }else{
                      that.$message({
                        message: '更新位置失败',
                        type: 'error'
                      })
                    }
                  })
              }, 10000)
            } else {
              that.$message({
                message: '更新位置失败',
                type: 'error'
              })
            }
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消更新位置'
        });
      });
    },
    order (row) {
      this.universal.send = true;
      this.send = row;
      // 	 axios({
      // 		method:"post",
      // 		url:'http://192.168.2.123:8080/SendCmds/QueryCmdsStatus',
      // 		data:Qs.stringify({
      // 			cmdsId:mess.data.cmd_uuid
      // 		})
      // 	}).then(function(message){
      // 		console.log(message)


      // })

      // axios({
      // 		method:"post",
      // 		url:'http://192.168.2.123:8080/SendCmds/conditionFind',
      // 		data:Qs.stringify({
      // 			devId:row.deviceId
      // 		})
      // 	}).then(function(message){
      // 		console.log(message)
      // })

    },
    recover (row) {
      let that = this;
      this.$confirm('此操作将恢复出厂设置, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios({
          method: 'post',
          url: this.$store.state.http + "/send/sendCmd",
          data: Qs.stringify({
            devId: that.roomid,
            cmd: 22,
            cmdValue: '11',
            remark:localStorage.getItem("userAlias"),
            type:'平台'
          })
        })
          .then(function (message) {
            console.log(message)
            if (message.data.resCode == 0) {
              console.log(message)
              let t = setTimeout(function () {
                axios({
                  method: 'post',
                  url: that.$store.state.http + "/send/QueryCmdsStatus",
                  data: Qs.stringify({
                    cmdsId: message.data.cmd_uuid
                  })
                })
                  .then(function (res) {
                    if (JSON.parse((res.data.errMsg).slice(4, res.data.errMsg.length)).data.status == 4) {
                      that.$message({
                        message: '恢复出厂设置成功',
                        type: 'success'
                      })
                    } else if (JSON.parse((res.data.errMsg).slice(4, res.data.errMsg.length)).data.status == 0) {
                      // if(message.data.resCode==0){
                      // 	that.$message({
                      // 		message: '恢复出厂设置成功',
                      // 		type: 'success'
                      // 	})
                      that.$message({
                        message: '设备未在线',
                        type: 'error'
                      })
                    } else {
                      that.$message({
                        message: '恢复出厂设置失败',
                        type: 'error'
                      })
                    }
                  })
              }, 10000)
            } else {
              that.$message({
                message: '恢复出厂设置失败',
                type: 'error'
              })
            }
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消恢复出厂设置'
        });
      });
    },
    read (row) {
      let that = this;
      this.$confirm('此操作将读取定位信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios({
          method: 'post',
          url: this.$store.state.http + "/send/sendCmd",
          data: Qs.stringify({
            devId: that.roomid,
            cmd: 21,
            cmdValue: '11',
            remark:localStorage.getItem("userAlias"),
            type:'平台'
          })
        })
          .then(function (message) {
            console.log(message)
            if (message.data.resCode == 0) {
              console.log(message)
              let t = setTimeout(function () {
                axios({
                  method: 'post',
                  url: that.$store.state.http + "/send/QueryCmdsStatus",
                  data: Qs.stringify({
                    cmdsId: message.data.cmd_uuid
                  })
                })
                  .then(function (res) {
                    if (JSON.parse((res.data.errMsg).slice(4, res.data.errMsg.length)).data.status == 4) {
                      that.$message({
                        message: '读取定位信息成功',
                        type: 'success'
                      })
                    } else if (JSON.parse((res.data.errMsg).slice(4, res.data.errMsg.length)).data.status == 0) {
                      that.$message({
                        message: '设备未在线',
                        type: 'error'
                      })
                      // if(message.data.resCode==0){
                      // 	that.$message({
                      // 		message: '读取定位信息成功',
                      // 		type: 'success'
                      // 	})
                    } else {
                      that.$message({
                        message: '读取定位信息失败',
                        type: 'error'
                      })
                    }
                  })
              }, 10000)
            } else {
              that.$message({
                message: '读取定位信息失败',
                type: 'error'
              })
            }
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消读取定位信息'
        });
      });
    },
    isType (obj) {
      var type = Object.prototype.toString.call(obj);
      if (type == '[object Array]') {
        return 'Array';
      } else if (type == '[object Object]') {
        return "Object"
      } else {
        return 'param is no object type';
      }
    },
    searchClick () {
      this.searchChild()
      let data = {
        pageNum: this.paging.page,
        pageSize: this.paging.pageSize,
        status: 1
      };
      if (this.search.online == '在线') {
        data.online = "true"
      } else if (this.search.online == '离线') {
        data.online = "false"
      }
      if (this.search.deviceId) {
        data.devId = this.search.deviceId;
      }
      if (this.search.devParaSn) {
        data.devParaSn = this.search.devParaSn;
      }
      if (this.search.personnel) {
        data.personnel = this.search.personnel;
      }
      if (this.search.deviceType) {
        data.deviceModel = this.search.deviceType;
      }
      if (this.search.end) {
        data.end = this.search.end;
      }




      data.userId = sessionStorage.getItem('userId'),
        data.dealer = sessionStorage.getItem("dealer")
      if (data.dealer == 0) {
        data.dealer = sessionStorage.getItem('orderDealers')
      }
      let that = this;
      console.log(data);
      that.tableData = [];
      that.timeCrea = [];
      that.truey = []
      //console.log(that.tableData)
      //console.log(123)
      console.log(data)
      axios({
        method: 'post',
        // url: this.$store.state.http + '/devices/conditionFind',
        url: this.$store.state.http + '/devices/conditionFind',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message)
        if (message.data.resCode == 0) {
          console.log(message.data.result)
          for (var i = 0; i < message.data.result.length; i++) {
            if (message.data.result[i].createTime.time != null) {
              //console.log(1)
              message.data.result[i].createTime = that.common.timeToDate(JSON.stringify(message.data.result[i].createTime.time).slice(0, 10))
            } else {
              //console.log(2)
              message.data.result[i].createTime = JSON.stringify(message.data.result[i].createTime).slice(1, 20)
            }
            if (message.data.result[i].online == "true") {
              message.data.result[i].online = '在线'
            } else {
              message.data.result[i].online = '离线'
            }
          }


          // for (var i = 0; i < that.tableData.length; i++) {
          //   that.trueys.push(that.tableData[i].deviceId)
          // }
          // //console.log(that.trueys)
          // axios({
          //   method: "post",
          //   url: that.$store.state.http + '/devices/accurate',
          //   data: Qs.stringify({
          //     devId: that.truey
          //   })
          // }).then(function (message) {
          //   console.log(message);
          //   for (var o = 0; o < message.data.data.devices.length; o++) {
          //     for (var f = 0; f < that.tableData.length; f++) {
          //       if (message.data.data.devices[o].id == that.tableData[f].deviceId) {
          //         // console.log(message.data.data.devices[i].id)
          //         // console.log(message.data.data.devices[i].online)

          //         that.tableData[f].empty = message.data.data.devices[o].online
          //         let abnormal;
          //         //console.log(that.tableData[f].empty)
          //         if (that.tableData[f].empty) {
          //           that.tableData[f].empty = '在线'
          //         } else {
          //           that.tableData[f].empty = '离线'
          //         }
          //         //console.log(that.tableData[f].empty)
          //       }
          //     }
          //   }
          // })

          that.tableData = message.data.result;
          //console.log(that.tableData)
          //console.log(message.data.result.length)
          that.paging.total = message.data.result2;
          //console.log(that.tableData)
        } else {
          that.tableData = [];
          that.paging.total = 0;
        }
      })
    },
    changeGroupShows (row) {
      this.changeGroupShow(row)
      this.universal.look = true;
      let that = this;
      that.timeset = setInterval(function () {
        that.changeGroupShow(row)
      }, 10000)
    },
    closeDialog () {
      console.log(154555555);
      clearInterval(this.timeset);
    },
    changeGroupShow (row) {
      this.array = []
      console.log(row)
      // this.changeGroups = true;
      // this.changeGrouping.conId = row.conId;
      // this.changeGrouping.changeGrouping = row.groupId;

      // console.log(this.con.deviceId)
      this.look = row;
      let that = this;

      // axios({
      // 	method:"post",
      // 	url:this.$store.state.http+'/fault/list',
      // 	data:Qs.stringify({
      // 		devId:row.deviceId,
      // 	})
      // }).then(function(message){
      // 	console.log(message)
      // })

      let datac = {
        page: this.paging.page,
        pageSize: 100000,
        dealer: sessionStorage.getItem("dealer"),
        device_type: row.deviceId,
        state: 0
      };
      if (datac.dealer == 0) {
        datac.dealer = sessionStorage.getItem('orderDealers')
      }
      datac.userId = sessionStorage.getItem('userId')
      axios({
        method: 'post',
        url: this.$store.state.http + '/IccIds/queryByIccId',
        data: Qs.stringify(datac)
      }).then(function (message) {
        if (message.status == 200) {
          console.log(message)
          if (message.data.resCode == 1) {
            that.arrays = '暂无绑定卡号'
          } else {

            for (let i = 0; i < message.data.result.length; i++) {
              that.array.push(message.data.result[i].area)
              that.arrays = that.array.join(",")
            }
            console.log(that.arrays)
          }

        } else {
          that.array = []
        }
      })
      axios({
        method: 'post',
        url: this.$store.state.http + '/devices/findsn',
        data: Qs.stringify({
          devId: row.deviceId
        })
      }).then(function (message) {
        // console.log(message)
        if (message.data.resCode == 0) {
          if (message.data.i.devParaSn == '') {
            that.con.devParaSn = '无'
          } else {
            that.con.devParaSn = message.data.i.devParaSn
            localStorage.setItem('devParaSn', (message.data.i.devParaSn));
          }
        } else {

        }
      })
      let data = {
        devId: row.deviceId
      }
      // that.con={
      // 	devVOL:'无数据',
      // 	waterMeter:'无数据',
      // 	waterPressure:'无数据',
      // 	waterTemperature:'无数据',
      // 	devDefence:'无数据',
      // 	devUnlockWay:'无数据',
      // 	devLockState:'无数据',
      // 	waterMeterTotal:'无数据',
      // 	waterMeterTemp:'无数据',
      // 	devHardVerison:'无数据',
      // 	devSoftVerison:'无数据',
      // 	devParaSn:'无数据',
      // 	devWarning:'无数据',
      // 	devIccid:'无数据',
      // 	devLongitude:'无数据',
      // 	devStatus:'无数据',
      // 	devLatitude:'无数据',
      // 	devUnlockTime:'无数据',
      // 	waterMeterTrip:'无数据',
      // 	deviceIds:'无数据',
      // 	deviceIds:'无数据'
      // },
      // console.log(data)
      searchClicks('/Datapoints/getBatData', { devId: row.deviceId }).then(res => {
        let messData = JSON.parse((res.data.errMsg).slice(6))
        messData=messData.data.devices[0].datastreams
        for (let i = 0; i < messData.length; i++) {
          // console.log(messData.data.datastreams[i].id);
          switch (messData[i].id) {
            case '2001': that.con.devVOL = messData[i].value
              if (that.con.devVOL > 3550 && that.con.devVOL < 4200) {
                that.selectionl = 1
                that.con.devVOL = '正常'
              } else if (that.con.devVOL > 3500 && that.con.devVOL <= 3550) {
                that.selectionl = 2
                that.con.devVOL = '低压'
              } else if (that.con.devVOL > 3000 && that.con.devVOL <= 3500) {
                that.selectionl = 3
                that.con.devVOL = '更换电池'
              } else {
                that.selectionl = 4
                that.con.devVOL = '电量异常'
              }
              localStorage.setItem('devVOL', (that.con.devVOL));
              break;
            case '2011': that.con.devWarning = messData[i].value
              localStorage.setItem('devWarning', (messData[i].value));
              break;
            case '2010': that.con.devDefence = messData[i].value
              localStorage.setItem('devDefence', (messData[i].value));
              break;
            case '2009': that.con.devUnlockWay = messData[i].value
              that.con.devUnlockTime = messData[i].at;
              localStorage.setItem('devUnlockWay', (messData[i].value));
              localStorage.setItem('devUnlockTime', (messData[i].at));
              break;
            case '2008': that.con.devLockState = messData[i].value
              localStorage.setItem('devLockState', (messData[i].value));
              break;
            case '2007': that.con.waterMeterTotal = messData[i].value
              localStorage.setItem('waterMeterTotal', (messData[i].value));
              break;
            case '1005': that.con.devHardVerison = messData[i].value
              localStorage.setItem('devHardVerison', (messData[i].value));
              break;
            case '2013': that.con.waterMeterTrip = messData[i].value
              localStorage.setItem('waterMeterTrip', (messData[i].value));
              break;
            case '2006': that.con.waterMeterTemp = messData[i].value
              localStorage.setItem('waterMeterTemp', (messData[i].value));
              break;
            case '1004': that.con.devSoftVerison = messData[i].value
              localStorage.setItem('devSoftVerison', (messData[i].value));
              break;
            case '2005': that.con.waterPressure = messData[i].value
              localStorage.setItem('waterPressure', (messData[i].value) / 1000);
              break;
            case '2004': that.con.waterTemperature = (messData[i].value) / 10
              localStorage.setItem('waterTemperature', (messData[i].value) / 10);
              break;
            case '1002': that.con.devIccid = messData[i].value
              localStorage.setItem('devIccid', (messData[i].value));
              break;
            case '2003': that.con.devLongitude = messData[i].value
              localStorage.setItem('devLongitude', (messData[i].value) / 100000);
              console.log(that.con.devLongitude)
              break;
            case '1001': that.con.devStatus = messData[i].value
              localStorage.setItem('devStatus', (messData[i].value));
              break;
            case '2002': that.con.devLatitude = messData[i].value
              localStorage.setItem('devLatitude', (messData[i].value) / 100000);
              console.log(that.con.devLatitude)
              break;
            default: break;
          }
        }

        that.mapchangelist = wgs84togcj02((that.con.devLongitude) / 100000, (that.con.devLatitude) / 100000)
        that.con.devLongitude = that.mapchangelist[0]
        that.con.devLatitude = that.mapchangelist[1]








        var map = new BMap.Map("allmap");
        var point = new BMap.Point(that.con.devLongitude, that.con.devLatitude);
        var geoc = new BMap.Geocoder();
        geoc.getLocation(point, function (rs) {
          var addComp = rs.addressComponents;
          that.searchhnewmap = (addComp.province + "" + addComp.city + "" + addComp.district + "" + addComp.street + "" + addComp.streetNumber);
          console.log(addComp);
        });


        //console.log(localStorage.getItem('lat'))
        that.roomid = row.deviceId
        //console.log(that.roomid)
        if (that.con.devStatus == 17) {
          that.Stau = 4
          that.con.devStatus = '异常'
        } else {
          that.Stau = 1
          that.con.devStatus = '正常'
        }
        // console.log(that.con.devLatitude)
        // console.log(that.con.devLongitude)
        if (that.con.devLongitude == 0 || that.con.devLongitude == '') {
          that.con.devLongitude = '定位失败'
          that.con.devLatitude = '定位失败'
        }
        if (that.con.devLatitude == 0 || that.con.devLatitude == '') {
          that.con.devLongitude = '定位失败'
          that.con.devLatitude = '定位失败'
        }
        if (that.con.devLockState == 17) {
          that.con.devLockState = '开启';

        } else {
          that.con.devLockState = '关闭'

        }
        if (that.con.devDefence == 17) {
          that.con.devDefence = '未布防'

        } else {
          that.con.devDefence = '已布防'

        }
        // console.log(that.con.devUnlockWay)
        if (that.con.devUnlockWay == 17) {
          that.con.devUnlockWay = 'IC卡'
        } else if (that.con.devUnlockWay == 18) {
          that.con.devUnlockWay = '手机'
        } else if (that.con.devUnlockWay == 20) {
          that.con.devUnlockWay = '应急开锁'
        } else {
          that.con.devUnlockWay = '未激活'
        }

        if (that.con.devLockState == 0x11) {
          that.con.devLockState = '倾斜报警'
        }
        if (that.con.devDefence == 0x21) {
          that.con.devDefence = '温度压力传感器异常'
        }
        if (that.con.devDefence == 0x24) {
          that.con.devDefence = '压力传感器初始化失败'
        }
        if (that.con.devIccid === '') {
          that.con.devIccid = '无数据'
        }
        if (that.con.devVOL === '') {
          that.con.devVOL = '无数据'
        }
        if (that.con.waterMeter === '') {
          that.con.waterMeter = '无数据'
        }
        if (that.con.waterPressure === '') {
          that.con.waterPressure = '无数据'
        }
        if (that.con.waterTemperature === '') {
          that.con.waterTemperature = '无数据'
        }

        if (that.con.devDefence === '') {
          that.con.devDefence = '无数据'
        }
        if (that.con.devHardVerison === '') {
          that.con.devHardVerison = '无数据'
        }
        if (that.con.devUnlockWay === '') {
          that.con.devUnlockWay = '无数据'
        }
        if (that.con.devLockState === '') {
          that.con.devLockState = '无数据'
        }
        if (that.con.waterMeterTotal === '') {
          that.con.waterMeterTotal = '无数据'
        }
        if (that.con.waterMeterTemp === '') {
          that.con.waterMeterTemp = '无数据'
        }

        if (that.con.devParaSn === '') {
          that.con.devParaSn = '无数据'
        }
        if (that.con.devWarning === '') {
          that.con.devWarning = '无数据'
        }
        if (that.con.devLongitude === '') {
          that.con.devLongitude = '无数据'
        }
        if (that.con.devStatus === '') {
          that.con.devStatus = '无数据'
        }
        if (that.con.waterMeterTemp === '') {
          that.con.waterMeterTemp = '无数据'
        }

        if (that.con.devLatitude === '') {
          that.con.devLatitude = '无数据'
        }
        if (that.con.devUnlockTime === '') {
          that.con.devUnlockTime = '无数据'
        }
        if (that.con.waterMeterTrip === '') {
          that.con.waterMeterTrip = '无数据'
        }
        if (that.con.deviceIds === '') {
          that.con.deviceIds = '无数据'
        }
        if (that.con.waterMeterTemp === '') {
          that.con.waterMeterTemp = '无数据'
        }
        // that.status=li[0].online
        // if(li[0].online){
        // 	that.status='开'
        // }else{
        // 	that.status='关'
        // }
      })

      that.con.deviceIds = row.deviceId
      that.con.deviceTypes = row.deviceType

    },
    drawLine (licae) {
      let myChart3 = echarts.init(document.getElementById('main3'));
      // 绘制图表
      myChart3.setOption({
        dataZoom: [
          {
            show: true,
            realtime: true,
            start: 0,
            end: 100
          },
          {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 100
          }
        ],
        legend: {
          data: ['最近7天'],
          align: 'left'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
          }
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: this.xAxis3.map(function (str) {
              return str.replace(' ', '\n')
            })
          }
        ],
        yAxis: [
          {
            name: '',
            type: 'value',

          }
        ],
        grid: {
          // left: '3%',
          // right: '4%',
          bottom: '10%',
          containLabel: true
        },
        series: [
          {
            name: '最近7天',
            type: 'line',
            markArea: {},
            data: this.series4
          }
          // {
          // 	name:'每年',
          // 	type:'line',
          // 	markArea: {},
          // 	data:[1,2,1,1]
          // },

        ]
      });
    },
    drawLines (bbb) {
      console.log(bbb)
      let myChart3 = echarts.init(document.getElementById('main8'));
      // 绘制图表
      var colors = ['#5793f3', '#d14a61', '#675bba'];
      myChart3.setOption({
        dataZoom: [
          {
            show: true,
            realtime: true,
            start: 0,
            end: 100
          },
          {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 100
          }
        ],
        legend: {
          data: ['最近7天'],
          align: 'left'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
          }
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: this.xAxis18.map(function (str) {
              return str.replace(' ', '\n')
            }),
            axisLabel: {
              rotate: -45
            }
          }
        ],
        yAxis: [
          {
            name: '',
            type: 'value',

          }
        ],
        grid: {
          // left: '3%',
          // right: '4%',
          bottom: '10%',
          containLabel: true
        },
        series: [
          {
            name: '最近7天',
            type: 'line',
            markArea: {},
            data: this.series19
          }
          // {
          // 	name:'当年',
          // 	type:'line',
          // 	markArea: {},
          // 	data:bbb
          // },
          // {
          // 	name:'每年',
          // 	type:'line',
          // 	markArea: {},
          // 	data:[1,2,1,1]
          // },

        ]
      });
    },
    // lpclias(){
    // 	let that=this;
    // 	let datalosesds={
    // 		devId:that.roomid,
    // 		start:"2019-03-01T00:00:00",
    // 		end:"2019-03-01T04:00:00",
    // 		datastreamIds:'2005',
    // 		limit:5000
    // 	}
    // 	console.log(datalosesds)
    // 		axios({
    // 		method:"post",
    // 		url:this.$store.state.http+'/Datapoints/getHistoryData',
    // 		data:Qs.stringify(datalosesds)
    // 	}).then(function(message){
    // 		let waters=message.data.errMsg
    // 		console.log(waters);
    // 		for(let i=0;i<waters.data.datastreams.length;i++){
    // 			if(waters.data.datastreams[i].id=="2005"){
    // 				let water=waters.data.datastreams[i].datapoints;
    // 				console.log(waters)
    // 				for(let j=0;j<water.length;j++){
    // 					that.bac.push(water[j].value/100);
    // 				}
    // 				console.log(that.bac)
    // 			}else{

    // 			}
    // 		}

    // 	})
    // },
    newelding () {
      let that = this;
      let datalosesds = {
        devId: that.roomid,
        start: "2019-04-018T00:00:00",
        end: "2019-04-018T04:00:00",
        datastreamIds: '2005',
        // limit:50
      }
      console.log(datalosesds)
      axios({
        method: "post",
        url: this.$store.state.http + '/Datapoints/getHistoryDatas',
        data: Qs.stringify(datalosesds)
      }).then(function (message) {
        console.log(111111111)
        console.log(message)

      })
    },
    llllll () {
      let that = this;
      let datalosesds = {
        devId: that.roomid,
      }
      console.log(datalosesds)
      axios({
        method: "post",
        url: that.$store.state.http + '/Datapoints/getHistoryDatas',
        data: Qs.stringify(datalosesds)
      }).then(function (message) {
        console.log(333333333333333)
        console.log(message)
        let waters = message.data.errMsg
        for (let i = 0; i < waters.data.datastreams.length; i++) {
          if (waters.data.datastreams[i].id == "2005") {
            let water = waters.data.datastreams[i].datapoints;
            console.log(waters)
            for (let j = 0; j < water.length; j++) {
              that.ggg.push(water[j].at.slice(0, 11));
              that.yyy.push(water[j].value / 100);
            }
          } else {

          }
          console.log(that.ggg)
          console.log(that.yyy)
        }


      })
    },
    elding () {
      let that = this;
      // let datalosesds={
      // 	devId:that.roomid,
      // 	start:"2019-01-01T00:00:00",
      // 	end:"2019-01-01T04:00:00",
      // 	datastreamIds:'2005',
      // 	limit:5000
      // }
      // console.log(datalosesds)
      // 	axios({
      // 	method:"post",
      // 	url:this.$store.state.http+'/Datapoints/getHistoryData',
      // 	data:Qs.stringify(datalosesds)
      // }).then(function(message){
      // 	let waters=message.data.errMsg
      // 	console.log(waters);
      // 	for(let i=0;i<waters.data.datastreams.length;i++){
      // 		if(waters.data.datastreams[i].id=="2005"){
      // 			let water=waters.data.datastreams[i].datapoints;
      // 			console.log(waters)
      // 			for(let j=0;j<water.length;j++){
      // 				that.xAxis65.push(water[j].at.slice(0,11));
      // 				that.series654.push(water[j].value/100);
      // 			}
      // 			that.drawLine()
      // 		}else{

      // 		}
      // 	}

      // })
      // let that=this;


      let datalos = {
        devId: that.roomid,
        start: that.common.yestoday(),
        end: that.common.yestodays(),
        datastreamIds: '2005',
        limit: 50
      }
      console.log(datalos)
      axios({
        method: "post",
        url: that.$store.state.http + '/Datapoints/getHistoryData',
        data: Qs.stringify(datalos)
      }).then(function (message) {
        let waters = message.data.errMsg
        console.log(waters);
        for (let i = 0; i < waters.data.datastreams.length; i++) {
          if (waters.data.datastreams[i].id == "2005") {
            let water = waters.data.datastreams[i].datapoints;
            console.log(waters)
            for (let j = 0; j < water.length; j++) {
              that.xAxis3.push(water[j].at.slice(0, 11));
              that.series158.push(water[j].value / 100);
            }
            // that.drawLine()
          } else {

          }
        }
        let datalosa = {
          devId: that.roomid,
          start: that.common.yestodaya(),
          end: that.common.yestodayb(),
          datastreamIds: '2005',
          limit: 50
        }
        console.log(datalosa)
        axios({
          method: "post",
          url: that.$store.state.http + '/Datapoints/getHistoryData',
          data: Qs.stringify(datalosa)
        }).then(function (message) {
          let waters = message.data.errMsg
          console.log(waters);
          for (let i = 0; i < waters.data.datastreams.length; i++) {
            if (waters.data.datastreams[i].id == "2005") {
              let water = waters.data.datastreams[i].datapoints;
              console.log(waters)
              for (let j = 0; j < water.length; j++) {
                that.xAxis3.push(water[j].at.slice(0, 11));
                that.series4.push(water[j].value / 100);
              }
            } else {

            }
          }
          let datalosab = {
            devId: that.roomid,
            start: that.common.yestodayd(),
            end: that.common.yestodayc(),
            datastreamIds: '2005',
            limit: 50
          }
          console.log(datalosab)
          axios({
            method: "post",
            url: that.$store.state.http + '/Datapoints/getHistoryData',
            data: Qs.stringify(datalosab)
          }).then(function (message) {
            let waters = message.data.errMsg
            console.log(waters);
            for (let i = 0; i < waters.data.datastreams.length; i++) {
              if (waters.data.datastreams[i].id == "2005") {
                let water = waters.data.datastreams[i].datapoints;
                console.log(waters)
                for (let j = 0; j < water.length; j++) {
                  that.xAxis3.push(water[j].at.slice(0, 11));
                  that.series4.push(water[j].value / 100);
                }
                console.log(that.xAxis3)
                console.log(that.series4)
              } else {

              }
            }
            let datalosabs = {
              devId: that.roomid,
              start: that.common.yestodayp(),
              end: that.common.yestodayf(),
              datastreamIds: '2005',
              limit: 50
            }
            console.log(datalosabs)
            axios({
              method: "post",
              url: that.$store.state.http + '/Datapoints/getHistoryData',
              data: Qs.stringify(datalosabs)
            }).then(function (message) {
              let waters = message.data.errMsg
              console.log(waters);
              for (let i = 0; i < waters.data.datastreams.length; i++) {
                if (waters.data.datastreams[i].id == "2005") {
                  let water = waters.data.datastreams[i].datapoints;
                  console.log(waters)
                  for (let j = 0; j < water.length; j++) {
                    that.xAxis3.push(water[j].at.slice(0, 11));
                    that.series4.push(water[j].value / 100);
                  }
                  console.log(that.xAxis3)
                  console.log(that.series4)
                } else {

                }
              }
              let datalosabs = {
                devId: that.roomid,
                start: that.common.yestodayp(),
                end: that.common.yestodayf(),
                datastreamIds: '2005',
                limit: 50
              }
              console.log(datalosabs)
              axios({
                method: "post",
                url: that.$store.state.http + '/Datapoints/getHistoryData',
                data: Qs.stringify(datalosabs)
              }).then(function (message) {
                let waters = message.data.errMsg
                console.log(waters);
                for (let i = 0; i < waters.data.datastreams.length; i++) {
                  if (waters.data.datastreams[i].id == "2005") {
                    let water = waters.data.datastreams[i].datapoints;
                    console.log(waters)
                    for (let j = 0; j < water.length; j++) {
                      that.xAxis3.push(water[j].at.slice(0, 11));
                      that.series4.push(water[j].value / 100);
                    }
                    console.log(that.xAxis3)
                    console.log(that.series4)
                  } else {

                  }
                }
                let datalosabsa = {
                  devId: that.roomid,
                  start: that.common.yestodayl(),
                  end: that.common.yestodayk(),
                  datastreamIds: '2005',
                  limit: 50
                }
                console.log(datalosabsa)
                axios({
                  method: "post",
                  url: that.$store.state.http + '/Datapoints/getHistoryData',
                  data: Qs.stringify(datalosabsa)
                }).then(function (message) {
                  let waters = message.data.errMsg
                  console.log(waters);
                  for (let i = 0; i < waters.data.datastreams.length; i++) {
                    if (waters.data.datastreams[i].id == "2005") {
                      let water = waters.data.datastreams[i].datapoints;
                      console.log(waters)
                      for (let j = 0; j < water.length; j++) {
                        that.xAxis3.push(water[j].at.slice(0, 11));
                        that.series4.push(water[j].value / 100);
                      }
                      console.log(that.xAxis3)
                      console.log(that.series4)
                    } else {

                    }
                  }
                  let datalosabsaad = {
                    devId: that.roomid,
                    start: that.common.yestodaym(),
                    end: that.common.yestodayn(),
                    datastreamIds: '2005',
                    limit: 50
                  }
                  console.log(datalosabsaad)
                  axios({
                    method: "post",
                    url: that.$store.state.http + '/Datapoints/getHistoryData',
                    data: Qs.stringify(datalosabsaad)
                  }).then(function (message) {
                    let waters = message.data.errMsg
                    console.log(waters);
                    for (let i = 0; i < waters.data.datastreams.length; i++) {
                      if (waters.data.datastreams[i].id == "2005") {
                        let water = waters.data.datastreams[i].datapoints;
                        console.log(waters)
                        for (let j = 0; j < water.length; j++) {
                          that.xAxis3.push(water[j].at.slice(0, 11));
                          that.series4.push(water[j].value / 100);
                        }
                        console.log(that.xAxis3)
                        console.log(that.series4)
                      } else {

                      }
                    }
                    let datalosabsaadfsdf = {
                      devId: that.roomid,
                      start: that.common.yestodayo(),
                      end: that.common.yestodayi(),
                      datastreamIds: '2005',
                      limit: 50
                    }
                    console.log(datalosabsaadfsdf)
                    axios({
                      method: "post",
                      url: that.$store.state.http + '/Datapoints/getHistoryData',
                      data: Qs.stringify(datalosabsaadfsdf)
                    }).then(function (message) {
                      let waters = message.data.errMsg
                      console.log(waters);
                      for (let i = 0; i < waters.data.datastreams.length; i++) {
                        if (waters.data.datastreams[i].id == "2005") {
                          let water = waters.data.datastreams[i].datapoints;
                          console.log(waters)
                          for (let j = 0; j < water.length; j++) {
                            that.xAxis3.push(water[j].at.slice(0, 11));
                            that.series4.push(water[j].value / 100);
                          }
                          console.log(that.xAxis3)
                          console.log(that.series4)
                          let datalosabsaadfsdfssss = {
                            devId: that.roomid,
                            start: '2019-07-20T00:00:00',
                            end: '2019-07-26T04:00:00',
                            datastreamIds: '2005',
                            limit: 100
                          }
                          console.log(datalosabsaadfsdfssss)
                          axios({
                            method: "post",
                            url: that.$store.state.http + '/Datapoints/getHistoryData',
                            data: Qs.stringify(datalosabsaadfsdfssss)
                          }).then(function (message) {
                            let waters = message.data.errMsg
                            console.log(waters);
                            for (let i = 0; i < waters.data.datastreams.length; i++) {
                              if (waters.data.datastreams[i].id == "2005") {
                                let water = waters.data.datastreams[i].datapoints;
                                console.log(waters)
                                for (let j = 0; j < water.length; j++) {
                                  that.xAxis396.push(water[j].at.slice(0, 11));
                                  that.aaaaaaaa.push(water[j].value / 100);
                                }
                              } else {

                              }
                            }
                            let datalosabsaadfsdfssssaaa = {
                              devId: that.roomid,
                              start: '2019-07-20T00:00:00',
                              end: '2019-07-26T04:00:00',
                              datastreamIds: '2005',
                              limit: 100
                            }
                            console.log(datalosabsaadfsdfssssaaa)
                            axios({
                              method: "post",
                              url: that.$store.state.http + '/Datapoints/getHistoryData',
                              data: Qs.stringify(datalosabsaadfsdfssssaaa)
                            }).then(function (message) {
                              let waters = message.data.errMsg
                              console.log(waters);
                              for (let i = 0; i < waters.data.datastreams.length; i++) {
                                if (waters.data.datastreams[i].id == "2005") {
                                  let water = waters.data.datastreams[i].datapoints;
                                  console.log(waters)
                                  for (let j = 0; j < water.length; j++) {
                                    that.xAxis396.push(water[j].at.slice(0, 11));
                                    that.aaaaaaaa.push(water[j].value / 100);
                                  }
                                } else {

                                }
                              }
                              let datalosabsaadfsdfssssaaas = {
                                devId: that.roomid,
                                start: '2019-07-20T00:00:00',
                                end: '2019-07-26T04:00:00',
                                datastreamIds: '2005',
                                limit: 100
                              }
                              console.log(datalosabsaadfsdfssssaaas)
                              axios({
                                method: "post",
                                url: that.$store.state.http + '/Datapoints/getHistoryData',
                                data: Qs.stringify(datalosabsaadfsdfssssaaas)
                              }).then(function (message) {
                                let waters = message.data.errMsg
                                console.log(waters);
                                for (let i = 0; i < waters.data.datastreams.length; i++) {
                                  if (waters.data.datastreams[i].id == "2005") {
                                    let water = waters.data.datastreams[i].datapoints;
                                    console.log(waters)
                                    for (let j = 0; j < water.length; j++) {
                                      that.xAxis396.push(water[j].at.slice(0, 11));
                                      that.aaaaaaaa.push(water[j].value / 100);
                                    }
                                    console.log(that.aaaaaaaa)
                                    that.drawLine(that.aaaaaaaa)
                                  } else {

                                  }
                                }
                                let datalosabsaadfsdfssssaaasas = {
                                  devId: that.roomid,
                                  start: '2019-07-20T00:00:00',
                                  end: '2019-07-26T04:00:00',
                                  datastreamIds: '2005',
                                  limit: 100
                                }
                                console.log(datalosabsaadfsdfssssaaasas)
                                axios({
                                  method: "post",
                                  url: that.$store.state.http + '/Datapoints/getHistoryData',
                                  data: Qs.stringify(datalosabsaadfsdfssssaaasas)
                                }).then(function (message) {
                                  let waters = message.data.errMsg
                                  console.log(waters);
                                  for (let i = 0; i < waters.data.datastreams.length; i++) {
                                    if (waters.data.datastreams[i].id == "2005") {
                                      let water = waters.data.datastreams[i].datapoints;
                                      console.log(waters)
                                      for (let j = 0; j < water.length; j++) {
                                        that.xAxis396.push(water[j].at.slice(0, 11));
                                        that.aaaaaaaa.push(water[j].value / 100);
                                      }
                                      console.log(that.aaaaaaaa)
                                      that.drawLine(that.aaaaaaaa)
                                    } else {

                                    }
                                  }

                                })

                              })

                            })

                          })

                        } else {

                        }
                      }

                    })

                  })

                })

              })

            })

          })

        })

      })

      // that.drawLine()








    },
    elding3 () {
      let that = this;
      let datalos = {
        devId: that.roomid,
        start: that.common.yestoday(),
        end: that.common.yestodays(),
        datastreamIds: '2001',
        limit: 50
      }
      console.log(datalos)
      axios({
        method: "post",
        url: that.$store.state.http + '/Datapoints/getHistoryData',
        data: Qs.stringify(datalos)
      }).then(function (message) {
        let waters = message.data.errMsg
        console.log(waters);
        for (let i = 0; i < waters.data.datastreams.length; i++) {
          if (waters.data.datastreams[i].id == "2001") {
            let water = waters.data.datastreams[i].datapoints;
            console.log(waters)
            for (let j = 0; j < water.length; j++) {
              that.xAxis18.push(water[j].at.slice(0, 11));
              that.series19.push(water[j].value / 100);
            }
            console.log(that.xAxis18)
            console.log(that.series19)
            // that.drawLine()
          } else {

          }
        }
        let datalosa = {
          devId: that.roomid,
          start: that.common.yestodaya(),
          end: that.common.yestodayb(),
          datastreamIds: '2001',
          limit: 50
        }
        console.log(datalosa)
        axios({
          method: "post",
          url: that.$store.state.http + '/Datapoints/getHistoryData',
          data: Qs.stringify(datalosa)
        }).then(function (message) {
          let waters = message.data.errMsg
          console.log(waters);
          for (let i = 0; i < waters.data.datastreams.length; i++) {
            if (waters.data.datastreams[i].id == "2001") {
              let water = waters.data.datastreams[i].datapoints;
              console.log(waters)
              for (let j = 0; j < water.length; j++) {
                that.xAxis18.push(water[j].at.slice(0, 11));
                that.series19.push(water[j].value / 100);
              }
            } else {

            }
          }
          let datalosab = {
            devId: that.roomid,
            start: that.common.yestodayd(),
            end: that.common.yestodayc(),
            datastreamIds: '2001',
            limit: 50
          }
          console.log(datalosab)
          axios({
            method: "post",
            url: that.$store.state.http + '/Datapoints/getHistoryData',
            data: Qs.stringify(datalosab)
          }).then(function (message) {
            let waters = message.data.errMsg
            console.log(waters);
            for (let i = 0; i < waters.data.datastreams.length; i++) {
              if (waters.data.datastreams[i].id == "2001") {
                let water = waters.data.datastreams[i].datapoints;
                console.log(waters)
                for (let j = 0; j < water.length; j++) {
                  that.xAxis18.push(water[j].at.slice(0, 11));
                  that.series19.push(water[j].value / 100);
                }

              } else {

              }
            }
            let datalosabs = {
              devId: that.roomid,
              start: that.common.yestodayp(),
              end: that.common.yestodayf(),
              datastreamIds: '2001',
              limit: 50
            }
            console.log(datalosabs)
            axios({
              method: "post",
              url: that.$store.state.http + '/Datapoints/getHistoryData',
              data: Qs.stringify(datalosabs)
            }).then(function (message) {
              let waters = message.data.errMsg
              console.log(waters);
              for (let i = 0; i < waters.data.datastreams.length; i++) {
                if (waters.data.datastreams[i].id == "2001") {
                  let water = waters.data.datastreams[i].datapoints;
                  console.log(waters)
                  for (let j = 0; j < water.length; j++) {
                    that.xAxis18.push(water[j].at.slice(0, 11));
                    that.series19.push(water[j].value / 100);
                  }

                } else {

                }
              }
              let datalosabsa = {
                devId: that.roomid,
                start: that.common.yestodayl(),
                end: that.common.yestodayk(),
                datastreamIds: '2001',
                limit: 50
              }
              console.log(datalosabsa)
              axios({
                method: "post",
                url: that.$store.state.http + '/Datapoints/getHistoryData',
                data: Qs.stringify(datalosabsa)
              }).then(function (message) {
                let waters = message.data.errMsg
                console.log(waters);
                for (let i = 0; i < waters.data.datastreams.length; i++) {
                  if (waters.data.datastreams[i].id == "2001") {
                    let water = waters.data.datastreams[i].datapoints;
                    console.log(waters)
                    for (let j = 0; j < water.length; j++) {
                      that.xAxis18.push(water[j].at.slice(0, 11));
                      that.series19.push(water[j].value / 100);
                    }

                  } else {

                  }
                }
                let datalosabsaad = {
                  devId: that.roomid,
                  start: that.common.yestodaym(),
                  end: that.common.yestodayn(),
                  datastreamIds: '2001',
                  limit: 50
                }
                console.log(datalosabsaad)
                axios({
                  method: "post",
                  url: that.$store.state.http + '/Datapoints/getHistoryData',
                  data: Qs.stringify(datalosabsaad)
                }).then(function (message) {
                  let waters = message.data.errMsg
                  console.log(waters);
                  for (let i = 0; i < waters.data.datastreams.length; i++) {
                    if (waters.data.datastreams[i].id == "2001") {
                      let water = waters.data.datastreams[i].datapoints;
                      console.log(waters)
                      for (let j = 0; j < water.length; j++) {
                        that.xAxis18.push(water[j].at.slice(0, 11));
                        that.series19.push(water[j].value / 100);
                      }

                    } else {

                    }
                  }
                  let datalosabsaadfsdf = {
                    devId: that.roomid,
                    start: that.common.yestodayo(),
                    end: that.common.yestodayi(),
                    datastreamIds: '2001',
                    limit: 50
                  }
                  console.log(datalosabsaadfsdf)
                  axios({
                    method: "post",
                    url: that.$store.state.http + '/Datapoints/getHistoryData',
                    data: Qs.stringify(datalosabsaadfsdf)
                  }).then(function (message) {
                    let waters = message.data.errMsg
                    console.log(waters);
                    for (let i = 0; i < waters.data.datastreams.length; i++) {
                      if (waters.data.datastreams[i].id == "2001") {
                        let water = waters.data.datastreams[i].datapoints;
                        console.log(waters)
                        for (let j = 0; j < water.length; j++) {
                          that.xAxis18.push(water[j].at.slice(0, 11));
                          that.series19.push(water[j].value / 100);
                        }

                        // that.drawLines()
                        let datalosabsaadfsdfssss = {
                          devId: that.roomid,
                          start: '2019-07-20T00:00:00',
                          end: '2019-07-26T04:00:00',
                          datastreamIds: '2001',
                          limit: 100
                        }
                        console.log(datalosabsaadfsdfssss)
                        axios({
                          method: "post",
                          url: that.$store.state.http + '/Datapoints/getHistoryData',
                          data: Qs.stringify(datalosabsaadfsdfssss)
                        }).then(function (message) {
                          let waters = message.data.errMsg
                          console.log(waters);
                          console.log(666666666666)
                          for (let i = 0; i < waters.data.datastreams.length; i++) {
                            if (waters.data.datastreams[i].id == "2001") {
                              let water = waters.data.datastreams[i].datapoints;
                              console.log(waters)
                              for (let j = 0; j < water.length; j++) {
                                that.xAxis181.push(water[j].at.slice(0, 11));
                                that.bbbbb.push(water[j].value / 100);
                              }
                            } else {

                            }
                          }
                          let datalosabsaadfsdfssssaaa = {
                            devId: that.roomid,
                            start: '2019-07-20T00:00:00',
                            end: '2019-07-26T04:00:00',
                            datastreamIds: '2001',
                            limit: 100
                          }
                          console.log(datalosabsaadfsdfssssaaa)
                          axios({
                            method: "post",
                            url: that.$store.state.http + '/Datapoints/getHistoryData',
                            data: Qs.stringify(datalosabsaadfsdfssssaaa)
                          }).then(function (message) {
                            let waters = message.data.errMsg
                            console.log(waters);
                            for (let i = 0; i < waters.data.datastreams.length; i++) {
                              if (waters.data.datastreams[i].id == "2001") {
                                let water = waters.data.datastreams[i].datapoints;
                                console.log(waters)
                                for (let j = 0; j < water.length; j++) {
                                  that.xAxis181.push(water[j].at.slice(0, 11));
                                  that.bbbbb.push(water[j].value / 100);
                                }
                              } else {

                              }
                            }
                            let datalosabsaadfsdfssssaaas = {
                              devId: that.roomid,
                              start: '2019-07-20T00:00:00',
                              end: '2019-07-26T04:00:00',
                              datastreamIds: '2001',
                              limit: 100
                            }
                            console.log(datalosabsaadfsdfssssaaas)
                            axios({
                              method: "post",
                              url: that.$store.state.http + '/Datapoints/getHistoryData',
                              data: Qs.stringify(datalosabsaadfsdfssssaaas)
                            }).then(function (message) {
                              let waters = message.data.errMsg
                              console.log(waters);
                              for (let i = 0; i < waters.data.datastreams.length; i++) {
                                if (waters.data.datastreams[i].id == "2001") {
                                  let water = waters.data.datastreams[i].datapoints;
                                  console.log(waters)
                                  for (let j = 0; j < water.length; j++) {
                                    that.xAxis181.push(water[j].at.slice(0, 11));
                                    that.bbbbb.push(water[j].value / 100);
                                  }
                                  console.log(that.bbbbb)
                                  // that.drawLine(that.aaaaaaaa)
                                } else {

                                }
                              }
                              let datalosabsaadfsdfssssaaasas = {
                                devId: that.roomid,
                                start: '2019-07-20T00:00:00',
                                end: '2019-07-26T04:00:00',
                                datastreamIds: '2001',
                                limit: 100
                              }
                              console.log(datalosabsaadfsdfssssaaasas)
                              axios({
                                method: "post",
                                url: that.$store.state.http + '/Datapoints/getHistoryData',
                                data: Qs.stringify(datalosabsaadfsdfssssaaasas)
                              }).then(function (message) {
                                let waters = message.data.errMsg
                                console.log(waters);
                                for (let i = 0; i < waters.data.datastreams.length; i++) {
                                  if (waters.data.datastreams[i].id == "2001") {
                                    let water = waters.data.datastreams[i].datapoints;
                                    console.log(waters)
                                    for (let j = 0; j < water.length; j++) {
                                      that.xAxis181.push(water[j].at.slice(0, 11));
                                      that.bbbbb.push(water[j].value / 100);
                                    }
                                    console.log(that.bbbbb)

                                  } else {

                                  }
                                  that.drawLines(that.bbbbb)

                                }


                              })

                            })

                          })

                        })
                      } else {

                      }

                    }


                  })

                })

              })

            })

          })

        })

      })


      // that.drawLine()





    },
    drawLiness (ddd) {
      let myChart3 = echarts.init(document.getElementById('main4'));
      // 绘制图表
      myChart3.setOption({
        dataZoom: [
          {
            show: true,
            realtime: true,
            start: 0,
            end: 100
          },
          {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 100
          }
        ],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
          }
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: this.xAxis6.map(function (str) {
              return str.replace(' ', '\n')
            })
          }
        ],
        yAxis: [
          {
            name: '',
            type: 'value',

          }
        ],
        legend: {
          data: ['最近7天'],
          align: 'left'
        },
        grid: {
          // left: '3%',
          // right: '4%',
          bottom: '10%',
          containLabel: true
        },
        series: [
          {
            name: '最近7天',
            type: 'line',
            markArea: {
            },
            data: this.series5
          }

        ]
      });
    },
    elding1 () {
      let that = this;
      let datalos = {
        devId: that.roomid,
        start: that.common.yestoday(),
        end: that.common.yestodays(),
        datastreamIds: '2006',
        limit: 50
      }
      console.log(datalos)
      axios({
        method: "post",
        url: that.$store.state.http + '/Datapoints/getHistoryData',
        data: Qs.stringify(datalos)
      }).then(function (message) {
        let waters = message.data.errMsg
        console.log(waters);
        for (let i = 0; i < waters.data.datastreams.length; i++) {
          if (waters.data.datastreams[i].id == "2006") {
            let water = waters.data.datastreams[i].datapoints;
            console.log(waters)
            for (let j = 0; j < water.length; j++) {
              that.xAxis6.push(water[j].at.slice(0, 11));
              that.series5.push(water[j].value / 100);
            }
            console.log(that.xAxis18)
            console.log(that.series19)
            // that.drawLine()
          } else {

          }
        }
        let datalosa = {
          devId: that.roomid,
          start: that.common.yestodaya(),
          end: that.common.yestodayb(),
          datastreamIds: '2006',
          limit: 50
        }
        console.log(datalosa)
        axios({
          method: "post",
          url: that.$store.state.http + '/Datapoints/getHistoryData',
          data: Qs.stringify(datalosa)
        }).then(function (message) {
          let waters = message.data.errMsg
          console.log(waters);
          for (let i = 0; i < waters.data.datastreams.length; i++) {
            if (waters.data.datastreams[i].id == "2006") {
              let water = waters.data.datastreams[i].datapoints;
              console.log(waters)
              for (let j = 0; j < water.length; j++) {
                that.xAxis6.push(water[j].at.slice(0, 11));
                that.series5.push(water[j].value / 100);
              }
            } else {

            }
          }
          let datalosab = {
            devId: that.roomid,
            start: that.common.yestodayd(),
            end: that.common.yestodayc(),
            datastreamIds: '2006',
            limit: 50
          }
          console.log(datalosab)
          axios({
            method: "post",
            url: that.$store.state.http + '/Datapoints/getHistoryData',
            data: Qs.stringify(datalosab)
          }).then(function (message) {
            let waters = message.data.errMsg
            console.log(waters);
            for (let i = 0; i < waters.data.datastreams.length; i++) {
              if (waters.data.datastreams[i].id == "2006") {
                let water = waters.data.datastreams[i].datapoints;
                console.log(waters)
                for (let j = 0; j < water.length; j++) {
                  that.xAxis6.push(water[j].at.slice(0, 11));
                  that.series5.push(water[j].value / 100);
                }

              } else {

              }
            }
            let datalosabs = {
              devId: that.roomid,
              start: that.common.yestodayp(),
              end: that.common.yestodayf(),
              datastreamIds: '2006',
              limit: 50
            }
            console.log(datalosabs)
            axios({
              method: "post",
              url: that.$store.state.http + '/Datapoints/getHistoryData',
              data: Qs.stringify(datalosabs)
            }).then(function (message) {
              let waters = message.data.errMsg
              console.log(waters);
              for (let i = 0; i < waters.data.datastreams.length; i++) {
                if (waters.data.datastreams[i].id == "2006") {
                  let water = waters.data.datastreams[i].datapoints;
                  console.log(waters)
                  for (let j = 0; j < water.length; j++) {
                    that.xAxis6.push(water[j].at.slice(0, 11));
                    that.series5.push(water[j].value / 100);
                  }

                } else {

                }
              }
              let datalosabsa = {
                devId: that.roomid,
                start: that.common.yestodayl(),
                end: that.common.yestodayk(),
                datastreamIds: '2006',
                limit: 50
              }
              console.log(datalosabsa)
              axios({
                method: "post",
                url: that.$store.state.http + '/Datapoints/getHistoryData',
                data: Qs.stringify(datalosabsa)
              }).then(function (message) {
                let waters = message.data.errMsg
                console.log(waters);
                for (let i = 0; i < waters.data.datastreams.length; i++) {
                  if (waters.data.datastreams[i].id == "2006") {
                    let water = waters.data.datastreams[i].datapoints;
                    console.log(waters)
                    for (let j = 0; j < water.length; j++) {
                      that.xAxis6.push(water[j].at.slice(0, 11));
                      that.series5.push(water[j].value / 100);
                    }

                  } else {

                  }
                }
                let datalosabsaad = {
                  devId: that.roomid,
                  start: that.common.yestodaym(),
                  end: that.common.yestodayn(),
                  datastreamIds: '2006',
                  limit: 50
                }
                console.log(datalosabsaad)
                axios({
                  method: "post",
                  url: that.$store.state.http + '/Datapoints/getHistoryData',
                  data: Qs.stringify(datalosabsaad)
                }).then(function (message) {
                  let waters = message.data.errMsg
                  console.log(waters);
                  for (let i = 0; i < waters.data.datastreams.length; i++) {
                    if (waters.data.datastreams[i].id == "2006") {
                      let water = waters.data.datastreams[i].datapoints;
                      console.log(waters)
                      for (let j = 0; j < water.length; j++) {
                        that.xAxis6.push(water[j].at.slice(0, 11));
                        that.series5.push(water[j].value / 100);
                      }

                    } else {

                    }
                  }
                  let datalosabsaadfsdf = {
                    devId: that.roomid,
                    start: that.common.yestodayo(),
                    end: that.common.yestodayi(),
                    datastreamIds: '2006',
                    limit: 50
                  }
                  console.log(datalosabsaadfsdf)
                  axios({
                    method: "post",
                    url: that.$store.state.http + '/Datapoints/getHistoryData',
                    data: Qs.stringify(datalosabsaadfsdf)
                  }).then(function (message) {
                    let waters = message.data.errMsg
                    console.log(waters);
                    for (let i = 0; i < waters.data.datastreams.length; i++) {
                      if (waters.data.datastreams[i].id == "2006") {
                        let water = waters.data.datastreams[i].datapoints;
                        console.log(waters)
                        for (let j = 0; j < water.length; j++) {
                          that.xAxis6.push(water[j].at.slice(0, 11));
                          that.series5.push(water[j].value / 100);
                        }


                      } else {

                      }
                    }
                    let datalosabsaadfsdfssss = {
                      devId: that.roomid,
                      start: '2019-07-20T00:00:00',
                      end: '2019-07-26T04:00:00',
                      datastreamIds: '2006',
                      limit: 100
                    }
                    console.log(datalosabsaadfsdfssss)
                    axios({
                      method: "post",
                      url: that.$store.state.http + '/Datapoints/getHistoryData',
                      data: Qs.stringify(datalosabsaadfsdfssss)
                    }).then(function (message) {
                      let waters = message.data.errMsg
                      console.log(waters);
                      for (let i = 0; i < waters.data.datastreams.length; i++) {
                        if (waters.data.datastreams[i].id == "2006") {
                          let water = waters.data.datastreams[i].datapoints;
                          console.log(waters)
                          for (let j = 0; j < water.length; j++) {
                            that.xAxis64.push(water[j].at.slice(0, 11));
                            that.ddddd.push(water[j].value / 100);
                          }
                        } else {

                        }
                      }
                      let datalosabsaadfsdfssssaaa = {
                        devId: that.roomid,
                        start: '2019-07-20T00:00:00',
                        end: '2019-07-26T04:00:00',
                        datastreamIds: '2006',
                        limit: 100
                      }
                      console.log(datalosabsaadfsdfssssaaa)
                      axios({
                        method: "post",
                        url: that.$store.state.http + '/Datapoints/getHistoryData',
                        data: Qs.stringify(datalosabsaadfsdfssssaaa)
                      }).then(function (message) {
                        let waters = message.data.errMsg
                        console.log(waters);
                        for (let i = 0; i < waters.data.datastreams.length; i++) {
                          if (waters.data.datastreams[i].id == "2006") {
                            let water = waters.data.datastreams[i].datapoints;
                            console.log(waters)
                            for (let j = 0; j < water.length; j++) {
                              that.xAxis64.push(water[j].at.slice(0, 11));
                              that.ddddd.push(water[j].value / 100);
                            }
                          } else {

                          }
                        }
                        let datalosabsaadfsdfssssaaas = {
                          devId: that.roomid,
                          start: '2019-07-20T00:00:00',
                          end: '2019-07-26T04:00:00',
                          datastreamIds: '2006',
                          limit: 100
                        }
                        console.log(datalosabsaadfsdfssssaaas)
                        axios({
                          method: "post",
                          url: that.$store.state.http + '/Datapoints/getHistoryData',
                          data: Qs.stringify(datalosabsaadfsdfssssaaas)
                        }).then(function (message) {
                          let waters = message.data.errMsg
                          console.log(waters);
                          for (let i = 0; i < waters.data.datastreams.length; i++) {
                            if (waters.data.datastreams[i].id == "2006") {
                              let water = waters.data.datastreams[i].datapoints;
                              console.log(waters)
                              for (let j = 0; j < water.length; j++) {
                                that.xAxis64.push(water[j].at.slice(0, 11));
                                that.ddddd.push(water[j].value / 100);
                              }
                              console.log(that.aaaaaaaa)
                              that.drawLine(that.aaaaaaaa)
                            } else {

                            }
                          }
                          let datalosabsaadfsdfssssaaasas = {
                            devId: that.roomid,
                            start: '2019-07-20T00:00:00',
                            end: '2019-07-26T04:00:00',
                            datastreamIds: '2006',
                            limit: 100
                          }
                          console.log(datalosabsaadfsdfssssaaasas)
                          axios({
                            method: "post",
                            url: that.$store.state.http + '/Datapoints/getHistoryData',
                            data: Qs.stringify(datalosabsaadfsdfssssaaasas)
                          }).then(function (message) {
                            let waters = message.data.errMsg
                            console.log(waters);
                            for (let i = 0; i < waters.data.datastreams.length; i++) {
                              if (waters.data.datastreams[i].id == "2006") {
                                let water = waters.data.datastreams[i].datapoints;
                                console.log(waters)
                                for (let j = 0; j < water.length; j++) {
                                  that.xAxis64.push(water[j].at.slice(0, 11));
                                  that.ddddd.push(water[j].value / 100);
                                }
                                console.log(that.ddddd)
                                that.drawLiness(that.ddddd)
                              } else {

                              }
                            }

                          })

                        })

                      })

                    })

                  })

                })

              })

            })

          })

        })

      })


      // that.drawLine()








    },
    drawLinesss (ccc) {
      let myChart3 = echarts.init(document.getElementById('main5'));
      // 绘制图表
      myChart3.setOption({
        // dataZoom: [
        // 	{
        // 		show: true,
        // 		realtime: true,
        // 		start: 0,
        // 		end: 100
        // 	},
        // 	{
        // 		type: 'inside',
        // 		realtime: true,
        // 		start: 0,
        // 		end: 100
        // 	}
        // ],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
          }
        },
        legend: {
          data: ['最近7天'],
          align: 'left'
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: this.xAxis12.map(function (str) {
              return str.replace(' ', '\n')
            })
          }
        ],
        yAxis: [
          {
            name: '',
            type: 'value',

          }
        ],
        grid: {
          // left: '3%',
          // right: '4%',
          bottom: '10%',
          containLabel: true
        },
        series: [
          {
            name: '最近7天',
            type: 'line',
            markArea: {},
            data: this.series11
          }

        ]
      });
    },
    elding2 () {

      let that = this;
      let datalos = {
        devId: that.roomid,
        start: that.common.yestoday(),
        end: that.common.yestodays(),
        datastreamIds: '2004',
        limit: 50
      }
      console.log(datalos)
      axios({
        method: "post",
        url: that.$store.state.http + '/Datapoints/getHistoryData',
        data: Qs.stringify(datalos)
      }).then(function (message) {
        let waters = message.data.errMsg
        console.log(waters);
        for (let i = 0; i < waters.data.datastreams.length; i++) {
          if (waters.data.datastreams[i].id == "2004") {
            let water = waters.data.datastreams[i].datapoints;
            console.log(waters)
            for (let j = 0; j < water.length; j++) {
              that.xAxis12.push(water[j].at.slice(0, 11));
              that.series11.push(water[j].value / 100);
            }
          } else {

          }
        }
        let datalosa = {
          devId: that.roomid,
          start: that.common.yestodaya(),
          end: that.common.yestodayb(),
          datastreamIds: '2004',
          limit: 50
        }
        console.log(datalosa)
        axios({
          method: "post",
          url: that.$store.state.http + '/Datapoints/getHistoryData',
          data: Qs.stringify(datalosa)
        }).then(function (message) {
          let waters = message.data.errMsg
          console.log(waters);
          for (let i = 0; i < waters.data.datastreams.length; i++) {
            if (waters.data.datastreams[i].id == "2004") {
              let water = waters.data.datastreams[i].datapoints;
              console.log(waters)
              for (let j = 0; j < water.length; j++) {
                that.xAxis12.push(water[j].at.slice(0, 11));
                that.series11.push(water[j].value / 100);
              }
            } else {

            }
          }
          let datalosab = {
            devId: that.roomid,
            start: that.common.yestodayd(),
            end: that.common.yestodayc(),
            datastreamIds: '2004',
            limit: 50
          }
          console.log(datalosab)
          axios({
            method: "post",
            url: that.$store.state.http + '/Datapoints/getHistoryData',
            data: Qs.stringify(datalosab)
          }).then(function (message) {
            let waters = message.data.errMsg
            console.log(waters);
            for (let i = 0; i < waters.data.datastreams.length; i++) {
              if (waters.data.datastreams[i].id == "2004") {
                let water = waters.data.datastreams[i].datapoints;
                console.log(waters)
                for (let j = 0; j < water.length; j++) {
                  that.xAxis12.push(water[j].at.slice(0, 11));
                  that.series11.push(water[j].value / 100);
                }

              } else {

              }
            }
            let datalosabs = {
              devId: that.roomid,
              start: that.common.yestodayp(),
              end: that.common.yestodayf(),
              datastreamIds: '2004',
              limit: 50
            }
            console.log(datalosabs)
            axios({
              method: "post",
              url: that.$store.state.http + '/Datapoints/getHistoryData',
              data: Qs.stringify(datalosabs)
            }).then(function (message) {
              let waters = message.data.errMsg
              console.log(waters);
              for (let i = 0; i < waters.data.datastreams.length; i++) {
                if (waters.data.datastreams[i].id == "2004") {
                  let water = waters.data.datastreams[i].datapoints;
                  console.log(waters)
                  for (let j = 0; j < water.length; j++) {
                    that.xAxis12.push(water[j].at.slice(0, 11));
                    that.series11.push(water[j].value / 100);
                  }

                } else {

                }
              }
              let datalosabsa = {
                devId: that.roomid,
                start: that.common.yestodayl(),
                end: that.common.yestodayk(),
                datastreamIds: '2004',
                limit: 50
              }
              console.log(datalosabsa)
              axios({
                method: "post",
                url: that.$store.state.http + '/Datapoints/getHistoryData',
                data: Qs.stringify(datalosabsa)
              }).then(function (message) {
                let waters = message.data.errMsg
                console.log(waters);
                for (let i = 0; i < waters.data.datastreams.length; i++) {
                  if (waters.data.datastreams[i].id == "2004") {
                    let water = waters.data.datastreams[i].datapoints;
                    console.log(waters)
                    for (let j = 0; j < water.length; j++) {
                      that.xAxis12.push(water[j].at.slice(0, 11));
                      that.series11.push(water[j].value / 100);
                    }

                  } else {

                  }
                }
                let datalosabsaad = {
                  devId: that.roomid,
                  start: that.common.yestodaym(),
                  end: that.common.yestodayn(),
                  datastreamIds: '2004',
                  limit: 50
                }
                console.log(datalosabsaad)
                axios({
                  method: "post",
                  url: that.$store.state.http + '/Datapoints/getHistoryData',
                  data: Qs.stringify(datalosabsaad)
                }).then(function (message) {
                  let waters = message.data.errMsg
                  console.log(waters);
                  for (let i = 0; i < waters.data.datastreams.length; i++) {
                    if (waters.data.datastreams[i].id == "2004") {
                      let water = waters.data.datastreams[i].datapoints;
                      console.log(waters)
                      for (let j = 0; j < water.length; j++) {
                        that.xAxis12.push(water[j].at.slice(0, 11));
                        that.series11.push(water[j].value / 100);
                      }

                    } else {

                    }
                  }
                  let datalosabsaadfsdf = {
                    devId: that.roomid,
                    start: that.common.yestodayo(),
                    end: that.common.yestodayi(),
                    datastreamIds: '2004',
                    limit: 50
                  }
                  console.log(datalosabsaadfsdf)
                  axios({
                    method: "post",
                    url: that.$store.state.http + '/Datapoints/getHistoryData',
                    data: Qs.stringify(datalosabsaadfsdf)
                  }).then(function (message) {
                    let waters = message.data.errMsg
                    console.log(waters);
                    for (let i = 0; i < waters.data.datastreams.length; i++) {
                      if (waters.data.datastreams[i].id == "2004") {
                        let water = waters.data.datastreams[i].datapoints;
                        console.log(waters)
                        for (let j = 0; j < water.length; j++) {
                          that.xAxis12.push(water[j].at.slice(0, 11));
                          that.series11.push(water[j].value / 100);
                        }

                        that.drawLinesss()
                      } else {

                      }
                    }
                    let datalosabsaadfsdfssss = {
                      devId: that.roomid,
                      start: '2019-07-20T00:00:00',
                      end: '2019-07-26T04:00:00',
                      datastreamIds: '2004',
                      limit: 100
                    }
                    console.log(datalosabsaadfsdfssss)
                    axios({
                      method: "post",
                      url: that.$store.state.http + '/Datapoints/getHistoryData',
                      data: Qs.stringify(datalosabsaadfsdfssss)
                    }).then(function (message) {
                      let waters = message.data.errMsg
                      console.log(waters);
                      for (let i = 0; i < waters.data.datastreams.length; i++) {
                        if (waters.data.datastreams[i].id == "2004") {
                          let water = waters.data.datastreams[i].datapoints;
                          console.log(waters)
                          for (let j = 0; j < water.length; j++) {
                            that.xAxis129.push(water[j].at.slice(0, 11));
                            that.ccccc.push(water[j].value / 100);
                          }
                        } else {

                        }
                      }
                      let datalosabsaadfsdfssssaaa = {
                        devId: that.roomid,
                        start: '2019-07-20T00:00:00',
                        end: '2019-07-26T04:00:00',
                        datastreamIds: '2004',
                        limit: 100
                      }
                      console.log(datalosabsaadfsdfssssaaa)
                      axios({
                        method: "post",
                        url: that.$store.state.http + '/Datapoints/getHistoryData',
                        data: Qs.stringify(datalosabsaadfsdfssssaaa)
                      }).then(function (message) {
                        let waters = message.data.errMsg
                        console.log(waters);
                        for (let i = 0; i < waters.data.datastreams.length; i++) {
                          if (waters.data.datastreams[i].id == "2004") {
                            let water = waters.data.datastreams[i].datapoints;
                            console.log(waters)
                            for (let j = 0; j < water.length; j++) {
                              that.xAxis129.push(water[j].at.slice(0, 11));
                              that.ccccc.push(water[j].value / 100);
                            }
                          } else {

                          }
                        }
                        let datalosabsaadfsdfssssaaas = {
                          devId: that.roomid,
                          start: '2019-07-20T00:00:00',
                          end: '2019-07-26T04:00:00',
                          datastreamIds: '2004',
                          limit: 100
                        }
                        console.log(datalosabsaadfsdfssssaaas)
                        axios({
                          method: "post",
                          url: that.$store.state.http + '/Datapoints/getHistoryData',
                          data: Qs.stringify(datalosabsaadfsdfssssaaas)
                        }).then(function (message) {
                          let waters = message.data.errMsg
                          console.log(waters);
                          for (let i = 0; i < waters.data.datastreams.length; i++) {
                            if (waters.data.datastreams[i].id == "2004") {
                              let water = waters.data.datastreams[i].datapoints;
                              console.log(waters)
                              for (let j = 0; j < water.length; j++) {
                                that.xAxis129.push(water[j].at.slice(0, 11));
                                that.ccccc.push(water[j].value / 100);
                              }
                              console.log(that.aaaaaaaa)
                              that.drawLine(that.aaaaaaaa)
                            } else {

                            }
                          }
                          let datalosabsaadfsdfssssaaasas = {
                            devId: that.roomid,
                            start: '2019-07-20T00:00:00',
                            end: '2019-07-26T04:00:00',
                            datastreamIds: '2004',
                            limit: 100
                          }
                          console.log(datalosabsaadfsdfssssaaasas)
                          axios({
                            method: "post",
                            url: that.$store.state.http + '/Datapoints/getHistoryData',
                            data: Qs.stringify(datalosabsaadfsdfssssaaasas)
                          }).then(function (message) {
                            let waters = message.data.errMsg
                            console.log(waters);
                            for (let i = 0; i < waters.data.datastreams.length; i++) {
                              if (waters.data.datastreams[i].id == "2004") {
                                let water = waters.data.datastreams[i].datapoints;
                                console.log(waters)
                                for (let j = 0; j < water.length; j++) {
                                  that.xAxis129.push(water[j].at.slice(0, 11));
                                  that.ccccc.push(water[j].value / 100);
                                }
                                console.log(that.ccccc)
                                that.drawLinesss(that.ccccc)
                              } else {

                              }
                            }

                          })

                        })

                      })

                    })

                  })

                })

              })

            })

          })

        })

      })

    },



  }
}

</script>

<style scoped="scoped">
.el-input,
.el-select {
  width: 180px;
}

.firImg {
  width: 50%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 89px;
}
.el-date-editor.el-input {
  width: 180px;
}
#PSTlist {
  padding: 20px;
}
.grid-content {
  width: 30%;
  float: left;
  text-align: right;
  margin-right: 10px;
}
/* .grid-content[data-v-14ce31a1] */
.malfunction span {
  color: green;
}
.malfunction .fileug {
  color: red;
}
.malfunction {
  display: flex;
  justify-content: space-between;
}
.malfunction div {
  font-size: 15px;
  line-height: 40px;
  overflow: hidden;
  width: 50%;
}
.letg {
  display: flex;
  justify-content: space-between;
}
.letg div {
  font-size: 15px;
  line-height: 40px;
  overflow: hidden;
  width: 33%;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.block {
  width: 74%;
  float: left;
}
.butt {
  margin-top: 5px;
}
.oyButtonlick {
  position: absolute;
  top: 44%;
  left: 63%;
}
.oyButtondev {
  position: absolute;
  top: 69%;
  left: 63%;
}
.spanClassTL {
  width: 200px;
}
#allmap {
  width: 100%;
  height: 300px;
}
/* .letg div[data-v-14ce31a1]{font-size: 17px;} */
.newdirectory {
  width: 330px;
}
.box {
  float: left;
  margin-left: 10%;
  margin-top: 15px;
}
.widths {
  width: 140px;
}
.demoele {
  float: left;
}
.sobj {
  width: 50%;
  height: 40px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.el-row {
  height: 40px;
}
.el-col-12 {
  height: 40px;
}
.leftcard {
  margin: 0 auto;
  width: 50%;
}
.rightcard {
  float: right;
  width: 50%;
  height: 95%;
}
.totalcard {
  height: 200px;
}
.cars {
  width: 200px !important;
}
.el-tag {
  color: #fff;
  width: 50px;
  height: 26px;
  line-height: 26px !important;
  padding: 0 0 !important;
  border: 0 !important;
}
.divswitch {
  margin-top: 15px;
}
.divswitch span:nth-child(1) {
  display: inline-block;
  width: 15%;
}
.divswitch span:nth-child(2) {
  display: inline-block;
  width: 20%;
}
.innerone,
.innertwo,
.innerthree {
  width: 40px;
  display: inline-block;
}
.lokway {
  margin-top: 20px;
}
.loist {
  width: 40%;
}
</style>