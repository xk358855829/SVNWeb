<template>
  <div id="faultList">
    <div class="header">
      <div class="headerTitle">
        <span>车主管理</span>
      </div>
    </div>
    <div class="select">

      <el-tabs v-model="activeName"
               @tab-click="handleClick">
        <!-- <el-tab-pane label="全部" name="zero"></el-tab-pane> -->
        <el-tab-pane label="全部"
                     name="F"></el-tab-pane>
        <el-tab-pane label="年租车"
                     name="C"></el-tab-pane>
        <el-tab-pane label="月租车"
                     name="B"></el-tab-pane>
        <el-tab-pane label="限时车牌"
                     name="D"></el-tab-pane>
        <el-tab-pane label="储值车牌"
                     name="E"></el-tab-pane>
        <el-tab-pane label="永久免费"
                     name="A"></el-tab-pane>
        <!-- <el-tab-pane label="短信已开通" name="7"></el-tab-pane> -->
        <!-- <el-tab-pane label="短信未开通" name="8"></el-tab-pane> -->
      </el-tabs>
    </div>
    <div class="select">
      <span>&nbsp;&nbsp;&nbsp;车主姓名：</span>
      <el-input v-model="search.name"
                clearable
                placeholder="请输入内容"></el-input>
      <span>手机号码：</span>
      <el-input v-model="search.tel"
                clearable
                placeholder="请输入内容"></el-input>
      <!-- <span>车辆品牌：</span>
			<el-input v-model="search.car_brand" clearable placeholder="请输入内容"></el-input> -->
      <span>车牌号码：</span>
      <el-input v-model="search.car_number"
                clearable
                placeholder="请输入内容"></el-input><br/><br/>

      <span>停车场名称：</span>
      <el-select v-model="search.parking_id"
                 filterable
                 placeholder="请选择">
        <el-option>未选择</el-option>
        <el-option v-for="item in parkIist"
                   :key="item.parking_id"
                   :label="item.parking_name"
                   :value="item.parking_id"></el-option>
      </el-select><br/><br/>
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-plus"
                 @click='AddShow'
                 v-show="showchose">添加</el-button>
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-search"
                 @click='searchClick'>查询</el-button>
      <!-- <el-button type="success" class="oyButton" @click='pilfen'>批量送积分</el-button> -->
      <el-button type="success"
                 class="oyButton"
                 style=""
                 @click='writewhite(arrtab)'>导入道闸</el-button>
    </div>
    <div class="Content">
      <el-table class='oyTable'
                :data="reslist"
                style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection"
                         width="50"
                         class="selection"
                         prop='uuid'></el-table-column>
        <el-table-column type="index"
                         :index="indexMethod"
                         label="序号"
                         width="50"> </el-table-column>

        <el-table-column label="车主姓名"
                         width="100">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.name }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.name }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="车牌号码"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.car_number }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.car_number }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="手机号码"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.tel }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.tel }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="停车场名称"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ chosename(scope.row.parking_id)}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ chosename(scope.row.parking_id)}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <!-- <el-table-column label="短信开通" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.is_open_sms | note }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.is_open_sms | note}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column> -->

        <el-table-column label="是否过期"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.date.date}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.date.date}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="是否写入道闸"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.is_list}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.is_list| carlistwr}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column prop=""
                         label="操作"
                         width='180'>
          <template slot-scope="scope">
            <el-tooltip class="item"
                        effect="dark"
                        content="查看"
                        placement="top">
              <i class="icon-See el-icon-search"
                 @click="seeClick(scope.row)"></i>
            </el-tooltip>

            <el-tooltip class="item"
                        effect="dark"
                        content="修改"
                        placement="top">
              <i class="icon-change el-icon-edit"
                 @click="changeShow(scope.row)"></i>
            </el-tooltip>

            <el-tooltip class="item"
                        v-if="scope.row.date.date !=='未过期'"
                        effect="dark"
                        content="开通会员"
                        placement="top">
              <i class="jilu iconfont icon-huiyuan"
                 @click="member(scope.row)"></i>
              <!-- <span class="icon-See iconfont icon-huiyuan"></span> -->
            </el-tooltip>

            <el-tooltip v-else=""
                        class="item"
                        effect="dark"
                        content="开通会员"
                        placement="top">
              <i class="jilu jilus iconfont icon-huiyuan"></i>
            </el-tooltip>
            <el-tooltip class="item"
                        effect="dark"
                        content="充值记录"
                        placement="top">
              <i class="jilu iconfont icon-chongzhijilu"
                 @click="include(scope.row)"></i>
            </el-tooltip>
            <el-tooltip class="item"
                        effect="dark"
                        content="卡包"
                        placement="top">
              <i class="jilu iconfont icon-qiabao"
                 @click="bag(scope.row)"></i>
            </el-tooltip>
            <!-- <el-tooltip  class="item" effect="dark" content="送积分" placement="top">
    						<i class="icon-See el-icon-document" @click="sendfen(scope.row)"></i>
						</el-tooltip>
						<el-tooltip  class="item" effect="dark" content="扣积分" placement="top">
    						<i class="icon-See el-icon-document" @click="koufen(scope.row)"></i>
						</el-tooltip> -->
            <!-- <el-tooltip class="item" v-if="scope.row.is_open_sms=='1'" effect="dark" content="短信开通" placement="top">
    						<i class="icon-See iconfont icon-duanxin" @click="dredgeup(scope.row,0)"></i>
						</el-tooltip>
						<el-tooltip class="item" v-if="scope.row.is_open_sms=='0'" effect="dark" content="关闭短信" placement="top">
    						<i class="icon-See iconfont icon-duanxin" @click="dredgeup(scope.row,1)"></i>
						</el-tooltip> -->
            <el-tooltip class="item"
                        effect="dark"
                        content="删除"
                        placement="top">
              <i class="icon-delete el-icon-delete"
                 @click="deleteClick(scope.row)"></i>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="开通会员"
               :visible.sync="universal.add1">
      <div>
        <span class="spanClass spanClasschange"
              style="display:none">
          <span class="aKey">*</span>停车场名称：</span>
        <!-- <el-select v-model="add1.parking_id" placeholder="请选择">
					<el-option v-for="item in parkingname" :key="item.parking_id" :label="item.parking_name" :value="item.parking_name"></el-option>
				</el-select><br /><br /> -->
        <el-input :disabled="true"
                  v-model="add1.parking_id"
                  clearable
                  style="display:none"></el-input><br /><br />

        <span class="spanClass spanClasschange">
          <span class="aKey">*</span>手机号码：</span>
        <el-input :disabled="true"
                  v-model="add1.tel"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />

        <span class="spanClass spanClasschange">
          <span class="aKey">*</span>会员类型：</span>
        <el-select v-model="add1.name"
                   placeholder="请选择"
                   @change="changelp(add1.name)">
          <el-option>未选择</el-option>
          <el-option v-for="item in existing"
                     :key="item.id"
                     :label="item.name"
                     :value="item.id"></el-option>
        </el-select><br /><br />

        <span class="spanClass spanClasschange">
          <span class="aKey">*</span>支付类型：</span>
        <el-select v-model="add1.pay_type"
                   placeholder="请选择">
          <el-option v-for="item in this.$store.state.pagytype"
                     :key="item.value"
                     :label="item.type"
                     :value="item.value"></el-option>
        </el-select><br /><br />

        <span class="spanClass spanClasschange">
          <span class="aKey">*</span>充值金额：</span>
        <el-input :disabled="losmongye"
                  v-model="add1.money"
                  clearable
                  placeholder="请输入内容"
                  @blur="focus6()"></el-input><br /><br />

        <span class="spanClass spanClasschange"
              v-show="oftypes">
          <span class="aKey"
                v-show="oftypes">*</span>开始时间：</span>
        <el-date-picker :disabled="los"
                        v-model="add1.start_time"
                        type="datetime"
                        placeholder="选择日期时间"
                        value-format="yyyy-MM-dd HH:mm:ss"
                        v-show="oftypes"></el-date-picker><br v-show="oftypes" /><br v-show="oftypes" />

        <span class="spanClass spanClasschange"
              v-show="oftypes">
          <span class="aKey"
                v-show="oftypes">*</span>结束时间：</span>
        <el-date-picker :disabled="los"
                        v-model="add1.end_time"
                        type="datetime"
                        placeholder="选择日期时间"
                        value-format="yyyy-MM-dd HH:mm:ss"
                        v-show="oftypes"></el-date-picker><br v-show="oftypes" /><br v-show="oftypes" />

        <span class="spanClass spanClasschange">
          <span class="aKey">*</span>备注：</span>
        <el-input class="textareaWidth"
                  type="textarea"
                  :rows="5"
                  v-model="add1.remark"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />
      </div>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="hideclick">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="memberup">开通</el-button>
      </div>
    </el-dialog>
    <el-dialog title="新增车主信息"
               :visible.sync="universal.add">
      <div class="titlecar1">
        <span class="spanClass">
          <span class="aKey">*</span>车牌号码：</span>
        <el-input :disabled="false"
                  v-model="add.car_number"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />
        <div class="titlecar1inner">
          <div>
            <span class="spanClass">
              <span class="aKey">*</span>车主姓名：</span>
            <el-input :disabled="false"
                      v-model="add.name"
                      clearable
                      placeholder="请输入内容"></el-input><br /><br />
          </div>
          <div>
            <span class="spanClass">
              <span class="aKey">*</span>车主地址：</span>
            <el-input :disabled="false"
                      v-model="add.address"
                      clearable
                      placeholder="请输入内容"></el-input><br /><br />
          </div>

        </div>
      </div>
      <hr><br>
      <div class="titlecar1">
        <div class="titlecar1inner">
          <div>
            <div>
              <span class="spanClass">
                <span class="aKey">*</span>车辆颜色：</span>
              <el-input :disabled="false"
                        v-model="add.car_color"
                        clearable
                        placeholder="请输入内容"></el-input>
            </div>
            <div><br />
              <span class="spanClass">身份证号：</span>
              <el-input :disabled="false"
                        v-model="add.idcard"
                        clearable
                        placeholder="请输入内容"></el-input><br /><br />
            </div>
          </div>
          <div>
            <span class="spanClass">
              <span class="aKey">*</span>手机号码：</span>
            <el-input :disabled="false"
                      v-model="add.tel"
                      clearable
                      placeholder="请输入内容"></el-input><br /><br />
            <span class="spanClass">微信号码：</span>
            <el-input :disabled="false"
                      v-model="add.wxNumber"
                      clearable
                      placeholder="请输入内容"></el-input><br /><br />
          </div>
        </div>
      </div>
      <hr><br>
      <div class="titlecar1">
        <div class="titlecar1inner">
          <!-- <div>
						<span class="spanClass"><span class="aKey">*</span>车辆类型：</span>
						<el-select v-model="add.item" placeholder="请选择">
							<el-option v-for="item in existing" :key="item.id" :label="item.name" :value="item.id"></el-option>
						</el-select><br /><br />
					</div> -->
          <div>
            <span class="spanClass">
              <span class="aKey">*</span>车辆品牌：</span>
            <el-input :disabled="false"
                      v-model="add.car_brand"
                      clearable
                      placeholder="请输入内容"></el-input><br /><br />
          </div>
          <div>
            <span class="spanClass">
              <span class="aKey">*</span>停车场名称：</span>
            <el-select v-model="add.parking_id"
                       filterable
                       placeholder="请选择">
              <el-option v-for="item in parkIist"
                         :key="item.parking_id"
                         :label="item.parking_name"
                         :value="item.parking_id"></el-option>
            </el-select><br /><br />
          </div>
        </div>
        <!-- <div class="titlecar1inner">
					<div>
						<span class="spanClass"><span class="aKey">*</span>开始时间：</span>
						<el-date-picker v-model="add.start_time" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />
					</div>
					<div>
						<span class="spanClass"><span class="aKey">*</span>结束时间：</span>
						<el-date-picker v-model="add.end_time" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />
					</div>
				</div> -->
      </div>
      <el-checkbox v-model="checked">是否同步写入道闸</el-checkbox>
      <div>
        <span class="spanClass">备注：</span>
        <div class="little">{{this.$store.state.size}}</div>
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
    <el-dialog title="查看"
               :visible.sync="universal.look">
      <div class="letg">
        <el-row>
          <el-col :span="12">
            <div class="grid-content">车牌号码：</div>{{look.car_number}}</el-col>
          <el-col :span="12">
            <div class="grid-content">车辆颜色：</div>{{look.car_color|numnew}}</el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">短信开通：</div>{{look.is_open_sms | note}}</el-col>
          <!-- <el-col :span="12"><div class="grid-content">车辆类型：</div>{{look.typeName|namechange}}</el-col> -->
          <el-col :span="12">
            <div class="grid-content">车主地址：</div>{{look.address|numnew}}</el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">车主姓名：</div>
            <div>{{look.name}}</div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">微信号码：</div>{{look.wxNumber|numnew}}</el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">手机号码：</div>{{look.tel}}</el-col>
          <el-col :span="12">
            <div class="grid-content">开始时间：</div>
            <div>{{look.start_time | numnew}}</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">车辆品牌：</div>{{look.car_brand|numnew}}</el-col>
          <el-col :span="12">
            <div class="grid-content">结束时间：</div>
            <div>{{look.end_time | numnew}}</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">身份证号：</div>{{look.idcard|numnew}}</el-col>
          <el-col :span="12">
            <div class="grid-content">剩余积分：</div>{{look.jifen|numnew}}</el-col>
        </el-row>
      </div>
    </el-dialog>
    <el-dialog title="送积分"
               :visible.sync="universal.sendloid">
      <div class="alipays">
        <span class="spanClass">
          <span class="aKey">*</span>积分：</span>
        <el-input :disabled="false"
                  v-model="sendloid.mark"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />

        <span class="spanClass">
          <span class="aKey">*</span>积分描述：</span>
        <el-input class="textareaWidth"
                  type="textarea"
                  :rows="5"
                  v-model="sendloid.description"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />
        <span class="spanClass">备注：</span>
        <div class="little">{{this.$store.state.size}}</div>
      </div>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="hideclick">取消</el-button>
        <!-- <el-button type="success" class="oyButton" @click="searchyess(arrtab)">确认</el-button> -->
      </div>
    </el-dialog>
    <el-dialog title="修改"
               :visible.sync="universal.change">
      <div class="alipays">
        <div class="alipay">
          <span class="spanClass">
            <span class="aKey">*</span>车牌号码：</span>
          <el-input :disabled="false"
                    v-model="change.car_number"
                    clearable
                    placeholder="请输入内容"></el-input><br /><br />

          <!-- <span class="spanClass">车辆类型：</span>
					<el-select v-model="change.item" placeholder="请选择">
						<el-option v-for="item in existing" :key="item.id" :label="item.name" :value="item.id"></el-option>
					</el-select><br /><br /> -->

          <span class="spanClass">
            <span class="aKey">*</span>车主姓名：</span>
          <el-input :disabled="false"
                    v-model="change.name"
                    clearable
                    placeholder="请输入内容"></el-input><br /><br />

          <span class="spanClass">
            <span class="aKey">*</span>手机号码：</span>
          <el-input :disabled="false"
                    v-model="change.tel"
                    clearable
                    placeholder="请输入内容"></el-input><br /><br />

          <span class="spanClass">
            <span class="aKey">*</span>车辆品牌：</span>
          <el-input :disabled="false"
                    v-model="change.car_brand"
                    clearable
                    placeholder="请输入内容"></el-input><br /><br />

        </div>
        <div class="alipay">
          <span class="spanClass">
            <span class="aKey">*</span>车辆颜色：</span>
          <el-input :disabled="false"
                    v-model="change.car_color"
                    clearable
                    placeholder="请输入内容"></el-input><br /><br />

          <span class="spanClass">
            <span class="aKey">*</span>车主地址：</span>
          <el-input :disabled="false"
                    v-model="change.address"
                    clearable
                    placeholder="请输入内容"></el-input><br /><br />

          <span class="spanClass">身份证号：</span>
          <el-input :disabled="false"
                    v-model="change.idcard"
                    clearable
                    placeholder="请输入内容"></el-input><br /><br />

          <span class="spanClass">微信号码：</span>
          <el-input :disabled="false"
                    v-model="change.wxNumber"
                    clearable
                    placeholder="请输入内容"></el-input><br /><br />
          <!-- <span class="spanClass"><span class="aKey">*</span>开始时间：</span>
					<el-date-picker v-model="change.start_time" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />
					

					<span class="spanClass"><span class="aKey">*</span>结束时间：</span>
					<el-date-picker v-model="change.end_time" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br /> -->

        </div>
      </div>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="hideclick">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="changeClick">修改</el-button>
      </div>
    </el-dialog>
    <div class="footer"
         style="z-index:99">
      <el-pagination background
                     @current-change="handleCurrentChange"
                     @size-change="handleSizeChange"
                     :current-page.sync="paging.page"
                     :page-sizes="[1,2,3,10,11,12]"
                     :page-size="paging.pageSize"
                     layout="sizes, prev, pager, next, jumper,total"
                     :total="totalnum"></el-pagination>
    </div>
  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
import records from '../afterSales/records'
import { mapMutations, mapActions, mapState, mapGetters } from 'vuex'
import { searchClicks, searchji, addji, writer, valueop, getParkingLotListApi } from '../api/api.js'
export default {
  name: 'equipmentList',
  components: { records },
  data () {
    return {
      replacecar: '',
      activeName: 'F',
      change1: {

      },
      innersearch: {
        name: '',
        remark: '',
        start_time: '',
        end_time: ''
      },
      sendloid: {
        mark: '',
        description: ''
      },
      checked: true,
      oftypes: false,
      existing: [],
      obj: [],
      numw: [],
      numvalue: [],
      universal: {
        add: false,
        change: false,
        add1: false,
        change1: false,
        look: false,
        sendloid: false
      },
      paging: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      // tableData:this.reslist,
      search: {
        car_number: '',
        name: '',
        parking_id: '',
        tel: ''
        // car_brand:'',
      },
      losmongye: true,
      add1: {
        name: '',
        pay_type: '',
        money: '',
        id: '',
        parking_id: '',
        start_time: '',
        end_time: '',
        remark: '',
        id: '',
        tel: '',
        islist: ''
      },
      look: {
        name: '',
        idcard: '',
        tel: '',
        wxNumber: '',
        address: '',
        car_number: '',
        start_time: '',
        end_time: '',
        car_color: '',
        car_brand: '',
        item: '',
        jifen: ''
      },
      add: {
        name: '',
        idcard: '',
        tel: '',
        wxNumber: '',
        address: '',
        car_number: '',
        car_color: '',
        car_brand: '',
        item: '',
        parking_id: ''
      },
      showchose: '',
      change: {
        name: '',
        idcard: '',
        tel: '',
        wxNumber: '',
        address: '',
        car_number: '',
        car_color: '',
        car_brand: '',
        item: ''
      },
      los: true,
      options: [],
      assignment: '',
      arrtab: []
    }
  },
  mounted: function () {
    document.title = this.$route.meta.title;
    if (localStorage.getItem('dealer') != 0) {
      this.showchose = true
    } else {
      this.showchose = false
    }
    let data = {
      page: this.paging.page,
      pageSize: 0,
      userId: localStorage.getItem('userId'),
      dealer: localStorage.getItem('dealer')
    };
    this.parkname(data)
    // searchClicks('/Parking/selectLotInfo',data).then(message=>{
    // 	console.log(message)
    // 	if(message.data.resCode==0){
    // 		this.parkparkwhite=message.data.result
    // 	}else{

    // 	}
    // })
    this.searchClick();
    // let start = new Date().getTime();
    // let end = new Date(val.substring(0,19).replace(/-/g,'/')).getTime();
    // console.log(end)
    // console.log(start)
    // if(start>end){
    // 	val='已过期'
    // }else{
    // 	val='未过期'
    // }
    console.log(this.$store.state.reslist)
    // this.downList();
    // this.common.login()
    // this.getParkingLotListApiList();

  },
  computed: {
    ...mapState(['reslist', 'totalnum', 'parkingname']),
    parkIist () {
      return this.$store.state.ONEreslist
    },
    ...mapGetters({
      parkingLotInfo: "getParkingLotInfo",
      parkingLotDevList: "getParkingLotDevList"
    }),
  },
  // this.$set(this,arr,[...newarr])
  methods: {
    ...mapMutations(['chezhu']),
    ...mapActions(['whitedan', 'parkname']),

    pilfen (val) {
      if (val == '') {
        this.$message({
          message: '请勾选送积分的人员',
          type: 'error'
        });
      } else {
        this.universal.sendloid = true
        this.sendloid.mark = ''
        this.sendloid.description = ''
      }

    },
    // getParkingLotListApiList () {
    //   let params = {
    //     page: 1,
    //     pageSize: 500,
    //     userId: localStorage.getItem("userId"),
    //     dealer: localStorage.getItem("dealer")
    //   };
    //   getParkingLotListApi(params).then(message => {
    //     console.log(message);
    //     this.parkIist = message.data.result;
    //   });
    // },
    handleSelectionChange (val) {
      this.arrtab = val
    },
    writewhite (val) {
      if (val.length == 0) {
        this.$message({
          message: '请勾选批量导入的人员',
          type: 'error'
        });
        return
      } else {
        var t = ''
        val.forEach((x, y) => {
          t += x.id + ','
        })
        t = t.substr(0, t.length - 1)
        console.log(t)
        writer({ id: t }).then(res => {
          if (res.status == 200) {
            this.$message({
              message: `导入成功${res.data.FAIL}失败，${res.data.SUC}成功`,
              type: 'success'
            });
          } else {
            this.$message({
              message: '导入失败，请重试',
              type: 'error'
            });
          }
          this.searchClick()
        })
      }
    },
    //  searchyess(val){
    // 	 var html=''
    // 	 val.find((x,y)=>{
    // 		 html+=x.tel+','
    // 	 })
    // 	 html=html.substring(0,html.length-1)
    // 	 console.log(html)
    // 	 let data={
    // 		tel:html,
    // 		parkingId,mark,description
    // 	 }
    // 	 addji(data).then(res=>{
    // 		 console.log(res)
    // 	 })
    //  },
    changelp (val) {
      console.log(val)
      this.existing.forEach((a, b) => {
        if (a.id == val) {
          console.log(a)
          val = a.name
          console.log(val)
          this.add1.money = a.money + '元'
        }
        return val
      })
      if (val == '永久免费') {
        let a = this.getNowFormatDate()
        let b = '2099-05-24 11:07:57'
        console.log(a)
        this.add1.start_time = a
        this.add1.end_time = b
        this.los = true
        this.losmongye = true
        this.oftypes = false
      } else if (val == '月卡') {
        let a = this.getNowFormatDate()
        let b = this.getNowFormatDateap()
        console.log(a)
        this.add1.start_time = a
        this.add1.end_time = b
        this.los = true
        this.losmongye = true
        this.oftypes = false
      } else if (val == '季卡') {
        let a = this.getNowFormatDate()
        let b = this.getNowFormatDateapsss()
        console.log(a)
        this.add1.start_time = a
        this.add1.end_time = b
        this.los = true
        this.losmongye = true
        this.oftypes = false
      } else if (val == '储值') {
        let a = this.getNowFormatDate()
        let b = '2099-05-24 11:07:57'
        console.log(a)
        this.add1.start_time = a
        this.add1.end_time = b
        this.los = true
        this.losmongye = false
        this.oftypes = false
      } else if (val == '年卡') {
        let a = this.getNowFormatDate()
        let b = this.getNowFormatDatemout()
        this.add1.start_time = a
        this.add1.end_time = b
        this.los = true
        this.losmongye = true
        this.oftypes = false
      } else if (val == '限时') {
        this.los = false
        this.losmongye = true
        this.oftypes = true
      }

    },
    // changebox(val){
    // 	if(val){
    // 		val=0
    // 	}else{
    // 		val=1
    // 	}
    // 	this.assignment=val
    // },
    getNowFormatDate () {

      var date = new Date();
      var seperator1 = "-";
      var seperator2 = ":";
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      var strHours = date.getHours();
      var strMinutes = date.getMinutes();
      var strSeconds = date.getSeconds();

      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      if (strHours >= 0 && strHours <= 9) {
        strHours = "0" + strHours;
      }
      if (strMinutes >= 0 && strMinutes <= 9) {
        strMinutes = "0" + strMinutes;
      }
      if (strSeconds >= 0 && strSeconds <= 9) {
        strSeconds = "0" + strSeconds;
      }

      var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + strHours + seperator2 + strMinutes
        + seperator2 + strSeconds;
      return currentdate;

    },
    getNowFormatDatemout () {

      var date = new Date();
      var seperator1 = "-";
      var seperator2 = ":";

      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      var strHours = date.getHours();
      var strMinutes = date.getMinutes();
      var strSeconds = date.getSeconds();

      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      if (strHours >= 0 && strHours <= 9) {
        strHours = "0" + strHours;
      }
      if (strMinutes >= 0 && strMinutes <= 9) {
        strMinutes = "0" + strMinutes;
      }
      if (strSeconds >= 0 && strSeconds <= 9) {
        strSeconds = "0" + strSeconds;
      }

      var currentdate = date.getFullYear() + 1 + seperator1 + month + seperator1 + strDate
        + " " + strHours + seperator2 + strMinutes
        + seperator2 + strSeconds;
      return currentdate;

    },
    getNowFormatDateap () {

      var date = new Date();
      var seperator1 = "-";
      var seperator2 = ":";
      var month = date.getMonth() + 2;
      var strDate = date.getDate();
      var strHours = date.getHours();
      var strMinutes = date.getMinutes();
      var strSeconds = date.getSeconds();

      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      if (strHours >= 0 && strHours <= 9) {
        strHours = "0" + strHours;
      }
      if (strMinutes >= 0 && strMinutes <= 9) {
        strMinutes = "0" + strMinutes;
      }
      if (strSeconds >= 0 && strSeconds <= 9) {
        strSeconds = "0" + strSeconds;
      }

      var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + strHours + seperator2 + strMinutes
        + seperator2 + strSeconds;
      return currentdate;

    },
    getNowFormatDateapsss () {
      var date = new Date();
      date.setMonth(date.getMonth() + 3);
      var seperator1 = "-";
      var seperator2 = ":";
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      var strHours = date.getHours();
      var strMinutes = date.getMinutes();
      var strSeconds = date.getSeconds();

      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      if (strHours >= 0 && strHours <= 9) {
        strHours = "0" + strHours;
      }
      if (strMinutes >= 0 && strMinutes <= 9) {
        strMinutes = "0" + strMinutes;
      }
      if (strSeconds >= 0 && strSeconds <= 9) {
        strSeconds = "0" + strSeconds;
      }

      var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + strHours + seperator2 + strMinutes
        + seperator2 + strSeconds;
      return currentdate;

    },

    include (val) {
      this.$router.push({ path: '/pageHome/records', query: { mouses: val } })
      this.chezhu(val)
    },
    focus6 () {
      if (!(/[\u4e00-\u9fa5]+/).test(this.add1.money) && this.add1.money != '') {
        this.add1.money = this.add1.money + '元'
      }
    },
    chosename (val) {
      this.parkingname.forEach((a, index) => {
        if (a.parking_id == val)
          val = a.parking_name
      })
      return val
    },
    // 开通会员
    member (row) {
      this.universal.add1 = true;
      console.log(row)
      // parking_id
      // this.searchcarnumber();
      let data = {
        parking_id: row.parking_id,
        page: 1,
        pageSize: 10,
        userId: localStorage.getItem('userId'),
        dealer: localStorage.getItem('dealer')
      };
      let that = this
      axios({
        method: 'post',
        url: that.$store.state.url + '/carNumberType/findInfo',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message)
        if (message.data.resCode == 0) {
          message.data.result.forEach((a, b) => {
            if (a.name == 'A') {
              a.name = '永久免费'
            } else if (a.name == 'B') {
              a.name = '月卡'
            } else if (a.name == 'C') {
              a.name = '年卡'
            } else if (a.name == 'D') {
              a.name = '限时'
            } else if (a.name == 'E') {
              a.name = '储值'
            } else if (a.name == 'F') {
              a.name = '临时'
            } else {
              a.name = '季卡'
            }

          })
          that.existing = message.data.result
        }
        console.log(that.existing)
        that.existing.forEach((a, b) => {
          if (a.name == '临时') {
            console.log(a)
            that.existing.splice(b, 1)
          }
        })
        console.log(that.existing)
      })

      // this.add1.of_type=row.of_type
      console.log(row)
      this.add1.id = row.id;
      // this.parkbangdingid=row.parking_id   先写一下
      // this.add1.user_id=row.user_id
      // this.existing.forEach((a, index) => {
      // 	if(a.name=='临时车'){
      // 		this.existing.splice([a.name].index,1)
      // 	}
      // })
      this.add1.tel = row.tel
      this.add1.parking_id = row.parking_id
      this.add1.pay_type = ''
      this.add1.money = ''
      this.add1.parking_id = row.parking_id
      this.add1.start_time = ''
      this.add1.end_time = ''
      this.add1.remark = ''
      this.add1.name = ''
      this.replacecar = row.car_number
      this.add1.islist = row.is_list
    },
    bag (val) {
      this.$router.push({ path: '/pageHome/notes', query: { mouses: val } })
      this.chezhu(val)
    },
    searchmes (val) {
      this.$router.push({ path: '/pageHome/mes', query: { mouses: val } })
    },
    isLicensePlate (str) {
      return /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1})$/.test(str);
    },
    memberup () {
      console.log(this.add1.name)
      if (this.add1.tel == '' || this.add1.money == '' || this.add1.name == '' || this.add1.pay_type == '' || this.add1.remark == '' || this.add1.name == undefined || this.add1.start_time == '' || this.add1.end_time == '') {
        this.$message.error('带*号的不能为空哦！');
        return false;
      }
      if (this.add1.money < 0) {
        this.$message.error('充值金额不能小于0元');
        return false;
      }
      if (!valueop(this.add1.tel)) {
        this.$message.error('请输入正确的手机号码');
        return false;
      }
      let start = new Date(this.add1.start_time).getTime()
      let end = new Date(this.add1.end_time).getTime()
      if (start > end) {
        this.$message.error('开始时间不能早于结束时间');
        return false;
      }
      // let data=this.add1
      console.log(this.add1.parking_id)
      let data = {}
      data.money = this.add1.money;
      data.id = this.add1.id;
      data.money = this.add1.money;
      data.start_time = this.add1.start_time;
      data.end_time = this.add1.end_time;
      data.remark = this.add1.remark;
      data.pay_type = this.add1.pay_type
      data.of_type = this.add1.name
      data.parking_id = this.add1.parking_id
      data.car_number = this.replacecar
      data.tel = this.add1.tel

      data.is_list = this.add1.islist
      // tel 
      // is_list
      data.money = this.add1.money.slice(0, this.add1.money.length - 1)
      if (isNaN(data.money) | data.money.trim == '') {
        this.$message.error('请输入数字');
        return false;
      } else {

      }

      // if((/[\u4e00-\u9fa5]+/).test(this.add1.of_type)){ 
      // 	this.existing.forEach((a, index) => {
      // 		if(a.name=='临时车'){
      // 			this.existing.splice([a.name].index,1)
      // 		}
      // 		if(this.add1.of_type==a.name){
      // 			console.log(99)
      // 			data.of_type=a.id
      // 		}
      // 	});
      // }else{
      // 	data.of_type=this.add1.of_type
      // }
      // console.log(this.add1.parking_id)

      // console.log(data.parking_id)
      // console.log(this.existing)
      // this.existing.forEach((a,b)=>{
      // 	console.log(a.id)
      // 	if(a.id==this.add1.name){
      // 		console.log(a.name)
      // 		data.of_type=a.id
      // 	}
      // })
      data.userId = localStorage.getItem('userId')
      data.dealer = localStorage.getItem('dealer')
      console.log(data)
      let that = this;
      searchClicks('/carInfo/bindCarNumType', data).then(function (message) {
        console.log(message)
        if (message.data.resCode == 0) {
          that.searchClick();
          that.$message({
            message: '开通会员成功',
            type: 'success'
          });

        } else if (message.data.resCode == 1) {
          that.$message({
            message: message.data.result,
            type: 'error'
          });
        } else {
          that.$message({
            message: message.data.result,
            type: 'error'
          });
        }
      })
      that.universal.add1 = false;
    },
    handleClick (tab) {
      this.paging.page = 1
      let data = {
        page: this.paging.page,
        pageSize: this.paging.pageSize,
        userId: localStorage.getItem('userId'),
        dealer: localStorage.getItem('dealer')
      };
      if (tab.name == 7) {
        data.is_open_sms = 0
      } else if (tab.name == 8) {
        data.is_open_sms = 1
      } else {

        if (tab.name == 'F') {

        } else {
          data.typeName = tab.name
        }
      }
      this.activeName = data.typeName
      let that = this;
      that.whitedan(data)
      // searchClicks('/carInfo/findAll',data).then(function(message){
      // 	if(message.data.resCode==0){
      // 		that.paging.total = message.data.count;
      // 		that.tableData = message.data.result;
      // 	}else{
      // 		that.tableData = [];
      // 	}
      // })  
    },
    // 查看详情
    seeClick (row) {
      console.log(row)
      this.universal.look = true;
      this.look.name = row.name
      this.look.idcard = row.idcard
      this.look.tel = row.tel
      this.look.wxNumber = row.wxNumber
      this.look.address = row.address
      this.look.car_number = row.car_number
      this.look.start_time = row.start_time
      this.look.end_time = row.end_time
      this.look.car_color = row.car_color
      this.look.car_brand = row.car_brand
      this.look.of_type = row.of_type
      this.look.is_open_sms = row.is_open_sms
      searchji({ tel: row.tel }).then(res => {
        console.log(res)
        if (res.data.resCode == 0) {
          this.look.jifen = res.data.result
        } else {
          // this.$message({
          //     	message: '暂无积分',
          //     	type: 'error'
          // });
          this.look.jifen = '-'
        }
      })


    },
    // 清空车牌信息
    AddShow () {
      this.universal.add = true
      this.add.name = ''
      this.add.idcard = ''
      this.add.tel = ''
      this.add.wxNumber = ''
      this.add.address = ''
      this.add.car_number = ''
      this.add.start_time = ''
      this.add.end_time = ''
      this.add.car_color = ''
      this.add.car_brand = ''
      this.add.item = ''
      // let data = {
      //   parking_id:row.parking_id,
      //   page:1,
      //   pageSize:1000,
      //   userId:localStorage.getItem('userId'),
      //   dealer:localStorage.getItem('dealer')
      // };
      // typenumber(data)
    },
    // 显示车牌类型
    usage () {
      this.universal.add1 = true
      let that = this
      that.add1.of_type = ''
      that.add1.pay_type = ''
      that.add1.money = ''
    },
    // 添加车牌类型
    addcarnumberinner () {
      let that = this
      if (that.innersearch.name == '' || that.innersearch.remark == '' || that.innersearch.start_time == '' || that.innersearch.end_time == '') {
        that.$message.error('带*的数据不能为空哦！');
        return false;
      }
      axios({
        method: 'get',
        url: that.$store.state.url + "/carNumberType/setInfo?name=" + that.innersearch.name + "&remark=" + that.innersearch.remark + "&start_time=" + that.innersearch.start_time + "&end_time=" + that.innersearch.end_time,
        // data:Qs.stringify(data)
      }).then(function (message) {
        if (message.data.resCode == 0) {
          that.$message({
            message: '车牌类型添加成功',
            type: 'success'
          });
          that.searchcarnumber()
          that.innersearch.name = ''
          that.innersearch.remark = ''
          that.innersearch.start_time = ''
          that.innersearch.end_time = ''
        }
      })
    },
    // dredgenp(row){
    // 	console.log(row)
    // 	let that = this;
    // 	this.$confirm('此操作将关闭短信提醒, 是否继续?', '提示', {
    // 		confirmButtonText: '确定',
    // 		cancelButtonText: '取消',
    // 		type: 'warning'
    // 	}).then(() => {
    // 		searchClicks('/carInfo/updateById',{
    // 			is_open_sms:1,
    // 			id:row.id
    // 		}).then(message=>{
    // 			if(message.data.resCode==0){
    // 				that.$message({
    // 		        	message: '关闭短信成功',
    // 		        	type: 'success'
    // 				});
    // 			}else{
    // 				that.$message({
    // 		        	message: '关闭短信失败',
    // 		        	type: 'error'
    // 		        });
    // 			}
    // 			that.searchClick()
    // 		})
    // 	}).catch(() => {
    // 		this.$message({
    // 			type: 'info',
    // 			message: '已取消关闭'
    // 		});
    // 	});
    // },
    // dredgeup(row,i){
    // 	var mesz=''
    // 	if(i==1){
    // 		mesz='此操作将关闭短信提醒,是否继续?'
    // 	}else{
    // 		mesz='此操作将开通短信提醒,是否继续?'
    // 	}
    // 	console.log(row)
    // 	let that = this;
    // 	this.$confirm(mesz, '提示', {
    // 		confirmButtonText: '确定',
    // 		cancelButtonText: '取消',
    // 		type: 'warning'
    // 	}).then(() => {
    // 		searchClicks('/carInfo/updateById',{
    // 			is_open_sms:i,
    // 			id:row.id
    // 		}).then(message=>{
    // 			if(message.data.resCode==0){
    // 				that.$message({
    // 		        	message: message.data.result,
    // 		        	type: 'success'
    // 				});
    // 			}else{
    // 				that.$message({
    // 		        	message: message.data.result,
    // 		        	type: 'error'
    // 		        });
    // 			}
    // 			that.searchClick()
    // 		})
    // 	})
    // },
    handleDelete (index, row) {
      let that = this;
      this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios({
          method: 'post',
          url: that.$store.state.url + '/carNumberType/delInfo',
          data: Qs.stringify({
            id: row.id
          })
        }).then(function (message) {
          console.log(message.data)
          if (message.data.resCode == 0) {
            that.$message({
              message: '删除成功',
              type: 'success'
            });
            that.searchcarnumber()
          } else {
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
    hideclick () {
      this.universal.change = false
      this.universal.add1 = false;
      this.universal.sendloid = false
    },
    indexMethod (index) {
      return index + (this.paging.page - 1) * this.paging.pageSize + 1;
    },
    handleSizeChange (val) {
      this.paging.pageSize = val;
      console.log(this.paging.pageSize)
      this.searchClick();
    },
    handleCurrentChange (val) {
      console.log(val)
      this.searchClick();
    },
    addClick () {

      console.log(this.parkingname)
      let that = this;
      if (!that.isLicensePlate(that.add.car_number)) {
        that.$message.error('请核对车牌号码!');
        return false;
      }
      that.add1.checked = that.add1.checked ? 0 : 1
      if (that.add.parking_id == '' || that.add.name == '' || that.add.tel == '' || that.add.address == '' || that.add.car_number == '' || that.add.car_color == '' || that.add.car_brand == '') {
        console.log(99999)
        that.$message.error('带*的数据不能为空哦！');
        return false;
      }
      let regPhone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
      if (!regPhone.test(that.add.tel)) {
        that.$message.error('手机号码格式有误');
        return false;
      }
      let urls;
      // if(that.add.idcard==''&&that.add.wxNumber!=''){
      // 	urls=that.$store.state.url+"/carInfo/add?name="+that.add.name+"&tel="+that.add.tel+"&wxNumber="+that.add.wxNumber+"&address="+that.add.address+"&car_number="+that.add.car_number+"&start_time="+that.add.start_time+"&end_time="+that.add.end_time+"&car_color="+that.add.car_color+"&car_brand="+that.add.car_brand+"&of_type="+that.add.item+"&is_open_sms="+that.add.is_open_sms+"&dealer="+localStorage.getItem('dealer')+"&parking_id="+that.add.parking_id
      // }
      // if(that.add.idcard==''||that.add.wxNumber==''){
      // 	urls=that.$store.state.url+"/carInfo/add?name="+that.add.name+"&tel="+that.add.tel+"&wxNumber="+that.add.wxNumber+"&address="+that.add.address+"&car_number="+that.add.car_number+"&start_time="+that.add.start_time+"&end_time="+that.add.end_time+"&car_color="+that.add.car_color+"&car_brand="+that.add.car_brand+"&of_type="+that.add.item+"&is_open_sms="+that.add.is_open_sms+"&dealer="+localStorage.getItem('dealer')+"&parking_id="+that.add.parking_id
      // }
      console.log(that.add.parking_id)
      axios({
        method: 'get',
        url: that.$store.state.url + "/carInfo/add?name=" + that.add.name + "&idcard=" + that.add.idcard + "&tel=" + that.add.tel + "&wxNumber=" + that.add.wxNumber + "&address=" + that.add.address + "&car_number=" + that.add.car_number + "&car_color=" + that.add.car_color + "&car_brand=" + that.add.car_brand + "&dealer=" + localStorage.getItem('dealer') + "&parking_id=" + that.add.parking_id + `&is_list=${that.add1.checked}`
      }).then(function (message) {
        console.log(message.data)
        if (message.data.resCode == 0) {
          that.searchClick()
          that.$message({
            message: '添加成功',
            type: 'success'
          });
        } else {
          that.$message({
            message: '添加失败',
            type: 'error'
          });
        }
        that.universal.add = false;
        that.searchClick()
      })
    },
    deleteClick (row) {
      console.log(row)
      let that = this;
      this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios({
          method: 'post',
          url: that.$store.state.url + '/carInfo/delById',
          data: Qs.stringify({
            id: row.id
          })
        }).then(function (message) {
          console.log(message.data)
          if (message.data.resCode == 0) {
            that.searchClick();
            that.$message({
              message: '删除成功',
              type: 'success'
            });
          } else {
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
    changeShow (row) {
      this.universal.change = true;
      // this.change = Object.assign({},row);
      this.change.name = row.name
      this.change.idcard = row.idcard
      this.change.tel = row.tel
      this.change.wxNumber = row.wxNumber
      this.change.address = row.address
      this.change.car_number = row.car_number
      this.change.start_time = row.start_time
      this.change.end_time = row.end_time
      this.change.car_color = row.car_color
      this.change.car_brand = row.car_brand
      this.change.id = row.id
      console.log(row)
    },
    changeClick () {
      if (!this.isLicensePlate(this.change.car_number)) {
        this.$message.error('请核对车牌号码!');
        return false;
      }
      let regPhone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
      if (!regPhone.test(this.change.tel)) {
        this.$message.error('手机号码格式有误');
        return false;
      }
      if (this.change.name == '' || this.change.tel == '' || this.change.address == '' || this.change.car_number == '' || this.change.car_color == '' || this.change.car_brand == '') {
        console.log(99999)
        this.$message.error('带*的数据不能为空哦！');
        return false;
      }
      let data = {
        name: this.change.name,
        idcard: this.change.idcard,
        tel: this.change.tel,
        wxNumber: this.change.wxNumber,
        address: this.change.address,
        car_number: this.change.car_number,
        car_color: this.change.car_color,
        car_brand: this.change.car_brand,
        id: this.change.id,
        // delete data.date;

      }
      console.log(data)
      let that = this;
      axios({
        method: 'post',
        url: that.$store.state.url + '/carInfo/updateById',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message.data)
        if (message.data.resCode == 0) {
          that.$message({
            message: '修改成功',
            type: 'success'
          });
          that.searchClick();
        } else {
          that.$message({
            message: '修改失败',
            type: 'error'
          });
        }
      })
      that.universal.change = false;
    },
    searchClick () {
      let data = {}
      let that = this;
      if (that.search.parking_id) {
        data.parking_id = that.search.parking_id
      }
      if (that.activeName) {
        if (that.activeName == 'F') {

        } else {
          data.typeName = that.activeName
        }
      }
      if (localStorage.getItem('dealer') == 0) {
        data.page = that.paging.page,
          data.pageSize = that.paging.pageSize,
          data.userId = localStorage.getItem('userId'),
          data.dealer = localStorage.getItem('dealer')

      } else {
        data.page = that.paging.page,
          data.pageSize = that.paging.pageSize,
          data.userId = localStorage.getItem('userId'),
          data.dealer = localStorage.getItem('dealer')
      }
      if (that.search.car_number) {
        data.car_number = that.search.car_number
      }
      if (that.search.tel) {
        data.tel = that.search.tel
      }
      if (that.search.name) {
        data.name = that.search.name
      }
      console.log(89)



      that.tableData = [];
      console.log(data)
      that.whitedan(data)
    },

  }
}
</script>

<style scoped="scoped">
.el-input,
.el-select {
  width: 200px;
}
#faultList {
  padding: 20px;
}
.alipay {
  width: 50%;
  float: left;
}
.alipays {
  display: inline-block;
}
.spanClass {
  width: 116px !important;
}
.titlecar1inner {
  display: flex;
  justify-content: space-between;
}
.oychange {
  width: 90px !important;
}
.letg div {
  font-size: 15px;
  line-height: 40px;
}
.grid-content {
  width: 30%;
  float: left;
  text-align: right;
  margin-right: 10px;
}
.spanClasschange {
  width: 272px !important;
}
.el-tooltip {
  vertical-align: middle;
}
.el-checkbox {
  margin-left: 12%;
}
.boxspan {
  margin-left: 10px;
}
.jilu {
  width: 22px;
  height: 22px;
  display: inline-block;
  background: #59cb18;
  border-radius: 3px;
  color: #fff;
}
.jilus {
  background: #777;
}
/* .el-tabs__active-bar{background-color: #a2cc6d!important;}
  	.el-tabs__item:hover{color: #a2cc6d!important;} */
</style>