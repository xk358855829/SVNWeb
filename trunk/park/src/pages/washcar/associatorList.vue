<template>
  <div id="faultList">
    <div class="header">
      <div class="headerTitle">
        <span>会员列表</span>
      </div>
    </div>
    <div class="select">
      <span>姓名：</span>
      <el-input v-model="search.name" clearable placeholder="请输入内容"></el-input>
      <span>手机号：</span>
      <el-input v-model="search.tel" clearable placeholder="请输入内容"></el-input>
      <!-- <span>车牌号：</span>
      <el-input v-model="search.car_number" clearable placeholder="请输入内容"></el-input> -->
    </div>
    <div class="select">
      <el-button
        type="success"
        class="oyButton oychange"
        icon="el-icon-plus"
        @click="usage"
        v-show="showchose"
      >添加</el-button>
      <el-button type="success" class="oyButton" icon="el-icon-search" @click="searchClick">查询</el-button>
      <el-button class="oyButton" type="success" icon="el-icon-download" @click="importExcel">导入</el-button>
      <el-button
        style="width: 85px !important;"
        type="success"
        class="oyButton oychange"
        icon="el-icon-plus"
        @click="addMore"
        v-show="showchose"
      >批量添加</el-button>
      <el-button
        style="width: 110px !important;"
        type="success"
        class="oyButton oychange"
        icon="el-icon-download"
        @click="download(vipCardList)"
        v-show="showchose"
      >批量下载二维码</el-button>
    </div>
    <div class="Content">
      <el-table class="oyTable" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" class="selection" prop="uuid"></el-table-column>
        <el-table-column type="index" :index="indexMethod" label="序号" width="50"></el-table-column>
        <el-table-column label="姓名" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.name }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.name }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="电话" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.tel }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.tel }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <!-- <el-table-column label="车牌号" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.car_number }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.car_number }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column> -->
        <el-table-column label="会员类型" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ changetype(scope.row.ofType) }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ changetype(scope.row.ofType) }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="会员名称" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.alias }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.alias }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="有效期开始时间" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.startTime }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.startTime }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="有效期结束时间" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.endTime }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.endTime }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="总次数/次" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.allTimes == 0 ? "不限制" : scope.row.allTimes }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.allTimes == 0 ? "不限制" : scope.row.allTimes }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="剩余次数/次" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.allTimes == 0 ? "不限制" : scope.row.onlyTime }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.allTimes == 0 ? "不限制" : scope.row.onlyTime }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="最近充值" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.money }}元</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.money }}元</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <!-- <el-table-column label="身份证号" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.idcard}}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.idcard }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="微信号" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.wxNumber }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.wxNumber }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="住址" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.address }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="车身颜色" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.car_color }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.car_color }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="车辆品牌" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.car_brand }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.car_brand }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>         -->
        <!-- <el-table-column label="短信服务" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.isOpenSms == 0 ? "开通" : "不开通" }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.isOpenSms == 0 ? "开通" : "不开通" }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column> -->
        <el-table-column label="备注" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.remark }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.remark }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column prop label="操作" width="150">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="修改" placement="top">
              <i class="icon-change el-icon-edit" @click="changeShow(scope.row)"></i>
            </el-tooltip>

            <el-tooltip class="item" effect="dark" content="删除" placement="top">
              <i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="新增" :visible.sync="universal.add1">
      <div>
        <el-row>
          <el-col :span="12">
            <span class="spanClassT">
              <span class="aKey">*</span>姓名：
            </span>
            <el-input :disabled="false" v-model="add.name" clearable placeholder="请输入内容"></el-input>
            <br />
            <br />

            <span class="spanClassT">
              <span class="aKey">*</span>电话：
            </span>
            <el-input :disabled="false" v-model="add.tel" clearable placeholder="请输入内容"></el-input>
            <br />
            <br />

            <!-- <span class="spanClassT">
              身份证号：
            </span>
            <el-input :disabled="false" v-model="add.idcard" clearable placeholder="请输入内容"></el-input>
            <br />
            <br />

            <span class="spanClassT">
              微信号：
            </span>
            <el-input :disabled="false" v-model="add.wxNumber" clearable placeholder="请输入内容"></el-input>
            <br />
            <br />
            <span class="spanClassT">
              住址：
            </span>
            <el-input :disabled="false" v-model="add.address" clearable placeholder="请输入内容"></el-input>
            <br />
            <br />    -->
            <!-- <span class="spanClassT">
              <span class="aKey">*</span>车牌号：
            </span>
            <el-input :disabled="false" v-model="add.car_number" clearable placeholder="请输入内容"></el-input>
            <br />
            <br /> -->
            <span class="spanClassT">
              <!-- <span class="aKey">*</span> -->
              短信服务：
            </span>
            <el-select v-model="add.isOpenSms" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.is_open_sms"
                :label="item.label"
                :value="item.is_open_sms"
              ></el-option>
            </el-select>
            <br />
            <br />
            <!-- <span class="spanClassT">
              <span class="aKey">*</span>会员类型：
            </span>
            <el-select v-model="add.ofType"
                 placeholder="请选择"
                 @change="changetype1(add.ofType)">
              <el-option>未选择</el-option>
              <el-option v-if="item.name != 'F'" v-for="item in existWashingList"
                        :key="item.name"
                        :label="item.alias"
                        :value="item.name"></el-option>
            </el-select>
            <br />
            <br /> -->
            <!-- <span class="spanClassT">
              车身颜色：
            </span>
            <el-input :disabled="false" v-model="add.car_color" clearable placeholder="请输入内容"></el-input>
            <br />
            <br />          -->
            <span class="spanClassT">
              <span class="aKey">*</span>会员类型：
            </span>
            <el-select v-model="add.ofType"
                 placeholder="请选择"
                 @change="changetype1(add.ofType)">
              <el-option>未选择</el-option>
              <el-option v-if="item.name != 'F'" v-for="item in existWashingList"
                        :key="item.name"
                        :label="item.alias"
                        :value="item.name"></el-option>
            </el-select>
            <br />
            <br />
          </el-col>
          <el-col :span="12">            
            <!-- <span class="spanClassT">
              车辆品牌：
            </span>
            <el-input :disabled="false" v-model="add.car_brand" clearable placeholder="请输入内容"></el-input>
            <br />
            <br /> --> 
            <!-- <span class="spanClassT">
              <span class="aKey">*</span>会员类型：
            </span>
            <el-select v-model="add.ofType"
                 placeholder="请选择"
                 @change="changetype1(add.ofType)">
              <el-option>未选择</el-option>
              <el-option v-if="item.name != 'F'" v-for="item in existWashingList"
                        :key="item.name"
                        :label="item.alias"
                        :value="item.name"></el-option>
            </el-select>
            <br />
            <br />            -->
            <!-- <span class="spanClassT">
              <span class="aKey">*</span>最近充值：
            </span>
            <el-input :disabled="false" v-model="add.money" clearable placeholder="请输入内容"></el-input> 元
            <br />
            <br /> -->
            <span class="spanClassT"><span class="aKey">*</span>支付类型：</span>
            <el-input :disabled="true"
              v-model="add.payType"
              clearable
              placeholder="请输入内容"></el-input>
            <br /><br />           
            <span v-if="!istimes" class="spanClassT"><span class="aKey">*</span>会员开始时间：</span>
            <el-date-picker v-if="!istimes" v-model="add.startTime" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期时间" @change="chosestart" :clearable="false"></el-date-picker>
            <br />
            <br />
            <span class="spanClassT" v-if="!istimes"><span class="aKey">*</span>会员结束时间：</span>
            <el-date-picker v-if="!istimes" disabled v-model="add.endTime" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期时间"></el-date-picker>
            <br />
            <br />
          </el-col>
        </el-row>
        <span class="spanClass">备注：</span>
        <div class="little">{{this.$store.state.size}}</div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="success" class="oyButton" @click="SHowhide">取消</el-button>
        <el-button type="success" class="oyButton" @click="addcarnumberinner">添加</el-button>
      </div>
    </el-dialog>
    <el-dialog title="修改" :visible.sync="universal.change1">
      <div>
        <el-row>
          <el-col :span="12">
            <span class="spanClassT">
              <span class="aKey">*</span>姓名：
            </span>
            <el-input :disabled="false" v-model="change1.name" clearable placeholder="请输入内容"></el-input>
            <br />
            <br />

            <span class="spanClassT">
              <span class="aKey">*</span>电话：
            </span>
            <el-input :disabled="false" v-model="change1.tel" clearable placeholder="请输入内容"></el-input>
            <br />
            <br />

            <!-- <span class="spanClassT">
              身份证号：
            </span>
            <el-input :disabled="false" v-model="change1.idcard" clearable placeholder="请输入内容"></el-input>
            <br />
            <br />

            <span class="spanClassT">
              微信号：
            </span>
            <el-input :disabled="false" v-model="change1.wxNumber" clearable placeholder="请输入内容"></el-input>
            <br />
            <br />
            <span class="spanClassT">
              住址：
            </span>
            <el-input :disabled="false" v-model="change1.address" clearable placeholder="请输入内容"></el-input>
            <br />
            <br /> -->

            
          </el-col>
          <el-col :span="12">
            <!-- <span class="spanClassT">
              <span class="aKey">*</span>车牌号：
            </span>
            <el-input v-model="change1.car_number" clearable placeholder="请输入内容"></el-input>
            <br />
            <br /> -->
            <!-- <span class="spanClassT">
              车身颜色：
            </span>
            <el-input :disabled="false" v-model="change1.car_color" clearable placeholder="请输入内容"></el-input>
            <br />
            <br />
            <span class="spanClassT">
              车辆品牌：
            </span>
            <el-input :disabled="false" v-model="change1.car_brand" clearable placeholder="请输入内容"></el-input>
            <br />
            <br /> -->
            <!-- <span class="spanClassT">
              <span class="aKey">*</span>最近充值：
            </span>
            <el-input :disabled="false" v-model="change1.money" clearable placeholder="请输入内容"></el-input>
            <br />
            <br /> -->
            <span class="spanClassT">
              <span class="aKey">*</span>
              短信服务：
            </span>
            <el-select v-model="change1.isOpenSms" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.is_open_sms"
                :label="item.label"
                :value="item.is_open_sms"
              ></el-option>
            </el-select>
            <br />
            <br />
            <!-- <span class="spanClassT"><span class="aKey">*</span>会员开始时间：</span>
            <el-date-picker v-model="change1.startTime" type="datetime" placeholder="选择日期时间"></el-date-picker>
            <br />
            <br />
            <span class="spanClassT"><span class="aKey">*</span>会员结束时间：</span>
            <el-date-picker v-model="change1.endTime" type="datetime" placeholder="选择日期时间"></el-date-picker>
            <br />
            <br /> -->
          </el-col>
        </el-row>
        <span class="spanClass">备注：</span>
        <div class="little">{{this.$store.state.size}}</div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="success" class="oyButton" @click="hideclick1">取消</el-button>
        <el-button type="success" class="oyButton" @click="changeClick1">修改</el-button>
      </div>
    </el-dialog>
    <el-dialog title="批量新增" :visible.sync="universal.addall">
      <div>
        <el-row>
          <el-col :span="12">
            <span class="spanClassT">
              <span class="aKey">*</span>会员类型：
            </span>
            <el-select v-model="addall.ofType"
                 placeholder="请选择"
                 @change="changetype1(addall.ofType)">
              <el-option>未选择</el-option>
              <el-option v-if="item.name != 'F'" v-for="item in existWashingList"
                        :key="item.name"
                        :label="item.alias"
                        :value="item.name"></el-option>
            </el-select>
            <br />
            <br />
          </el-col>
          <el-col :span="12">                       
            <span class="spanClassT">
              <span class="aKey">*</span>数量：
            </span>
            <el-input :disabled="false" v-model="addall.num" clearable placeholder="请输入内容"></el-input> 个
            <br />
            <br />
          </el-col>
        </el-row>
        <span class="spanClass">备注：</span>
        <div class="little">{{this.$store.state.size}}</div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="success" class="oyButton" @click="universal.addall=false">取消</el-button>
        <el-button type="success" class="oyButton" @click="addallcarnumberinner">添加</el-button>
      </div>
    </el-dialog>
    <el-dialog title="导入" :visible.sync="universal.import">
      <div>
        <el-row>
          <el-col :span="12">
            <span class="spanClassT" style="width:130px;">
              <span class="aKey">*</span>会员类型：
            </span>
            <el-select v-model="importVip"
                 placeholder="请选择"
                 @change="changetype1()">
              <el-option>未选择</el-option>
              <el-option v-if="item.name == 'A'||item.name == 'B'||item.name == 'C'||item.name == 'D'||item.name == 'E'||(item.name == 'F'&&item.model=='04')" v-for="item in existWashingList"
                        :key="item.id"
                        :label="item.alias"
                        :value="item.id"></el-option>
            </el-select>
          </el-col>
          <el-col :span="12">
            <span class="spanClassT" style="width:130px;">
              <span class="aKey">*</span>可使用开始时间：
            </span>
            <el-time-select
              placeholder="开始时间"
              v-model="canUseBeginTime"
              :picker-options="{
                            start: '00:00',
                            step: '00:30',
                            end: '24:00'
                          }"
            ></el-time-select>
          </el-col>          
        </el-row>
        <br>
        <el-row>
          <el-col :span="12">
            <span class="spanClassT" style="width:130px;">
              <span class="aKey">*</span>可使用结束时间：
            </span>
            <el-time-select
              placeholder="结束时间"
              v-model="canUseEndTime"
              :picker-options="{
                  start: '00:00',
                  step: '00:30',
                  end: '24:00',
                  minTime: canUseBeginTime
                }"
            ></el-time-select>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
        <span class="spanClass">备注：</span>
        <div class="little">{{this.$store.state.size}}</div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="success" class="oyButton" @click="universal.imp=false">取消</el-button>
        <el-upload
        class="upload-demo demoele"
        ref="upload"
        action="#"
        :limit="1"
        :show-file-list="false"
        :multiple="false"
        accept=".xls, .xlsx"
        :before-upload="beforeUpload"
        :on-exceed="handleExceed"
        :http-request="uploadFile"
      >
        <el-button class="oyButton" type="success" icon="el-icon-download">导入</el-button>
      </el-upload>
      </div>
    </el-dialog>
    <div class="footer">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :current-page.sync="paging.page"
        :page-sizes="[10,15,20]"
        :page-size="paging.pageSize"
        layout="sizes, prev, pager, next, jumper,total"
        :total="paging.total"
      ></el-pagination>
    </div>
    <div id="qrcode" style="display:none"></div>
  </div>
</template>

<script>
import Qs from "qs";
import axios from "axios";
import QRCode from 'qrcodejs2';
import { mapState } from 'vuex'
import { getassociatorList,addassociator,delassociator,exitassociator,isRealNum} from "../../components/api/api.js";

function debounce(func, wait=1000){
 let timeout;
 return function(event){
  clearTimeout(timeout)
  timeout = setTimeout(()=>{
   func.call(this, event)
  },wait)
 }
}

export default {
  name: "associatorList",
  data() {
    return {
      search: {
        name: "",
        tel: "",
        car_number: ""
      },
      paging: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      tableData: [],
      add: {
        name: "",
        // idcard: "",
        tel: "",
        // wxNumber: "",
        // address: "",
        // car_number: "",
        startTime: "",
        endTime: "",
        // car_color: "",
        // car_brand: "",
        money: "",
        isOpenSms: "1",
        dealer:"",
        ofType:"",
        carNumberTypeWashCarId:"",
        model:"",
        allTimes:"",
        onlyTime:"",
        payType:"线下付款"
      },
      addall: {
        ofType: "",
        carNumberTypeWashCarId: "",
        num: "",
      },
      options: [
        {
          is_open_sms: "0",
          label: "开通"
        },
        {
          is_open_sms: "1",
          label: "不开通"
        }
      ],
      existWashingList:[],

      loading: String,
      // 表格数据
      obj: [],
      numw: [],
      numvalue: [],
      universal: {
        add1: false,
        change1: false,
        addall: false,
        import: false,
      },
      change1: {
        name: "",
        // idcard: "",
        tel: "",
        // wxNumber: "",
        // address: "",
        // car_number: "",
        startTime: "",
        endTime: "",
        // car_color: "",
        // car_brand: "",
        money: "",
        model:"",
        isOpenSms: ""
      },

      oftype: true,
      change: {
        fauId: "",
        fauMode: "",
        fauName: "",
        fauSolve: "",
        fauCode: "",
        devId: ""
      },
      showchose: "",
      req: [],
      vipCardList: [],
      istimes:false,
      importVip:'',
      canUseBeginTime:"00:00",
      canUseEndTime:"24:00"
    };
  },
  computed: {
    // ...mapState(['existWashingList','existWashingList1']),
  },
  mounted: function() {
    document.title = this.$route.meta.title;
    if (localStorage.getItem("dealer") != 0) {
      this.showchose = true;
    } else {
      this.showchose = false;
    }
    this.loading = true;
    let data = {
      page: this.paging.page,
      pageSize: 10,
      userId: localStorage.getItem("userId"),
      dealer: localStorage.getItem("dealer")
    };
    this.searchClick();
    this.loading = false;
    this.getVipType();
  },
  methods: {
    changetype1(val) {
      console.log(val);
      console.log(this.req);
      if(val==undefined){
        this.add.money = "";
        this.add.allTimes = "";
        this.add.onlyTime = "";
        this.add.model = "";
        this.add.startTime = "";
        this.add.endTime= "";
        this.add.carNumberTypeWashCarId = "";
      }else{
        this.add.startTime = this.replatime(new Date());
        if(this.add.startTime){
          this.req.find((x, y) => {
            if (x.name == val) {
              if (x.name == "A") {
                this.add.money = x.money;
                this.add.model = x.model;
                this.add.allTimes = x.times;
                this.add.onlyTime = x.times;
                this.add.endTime= this.replatime((this.DateAdd("m", 30, new Date(this.add.startTime))));
                this.istimes = false;
              } else if (x.name == "B") {
                this.add.money = x.money;
                this.add.model = x.model;
                this.add.allTimes = x.times;
                this.add.onlyTime = x.times;
                this.add.endTime= this.replatime((this.DateAdd("m", 90, new Date(this.add.startTime))));
                this.istimes = false;
              } else if (x.name == "C") {
                this.add.money = x.money;
                this.add.model = x.model;
                this.add.allTimes = x.times;
                this.add.onlyTime = x.times;
                this.add.endTime= this.replatime((this.DateAdd("m", 365, new Date(this.add.startTime))));
                this.istimes = false;
              } else if (x.name == "D" || x.name == "E") {
                this.add.money = x.money;
                this.add.model = x.model;
                this.add.allTimes = x.times;
                this.add.onlyTime = x.times;
                this.istimes = true;
                this.add.startTime = "";
                this.add.endTime= "";
              }
            }
          });
        }else{
          let nows = new Date();
          this.req.find((x, y) => {
            if (x.name == val) {
              if (x.name == "A") {
                this.add.money = x.money;
                this.add.model = x.model;
                this.add.allTimes = x.times;
                this.add.onlyTime = x.times;
                this.add.endTime= this.replatime(this.DateAdd("m", 30, nows));
                this.istimes = false;
              } else if (x.name == "B") {
                this.add.money = x.money;
                this.add.model = x.model;
                this.add.allTimes = x.times;
                this.add.onlyTime = x.times;
                this.add.endTime= this.replatime(this.DateAdd("m", 90, nows));
                this.istimes = false;
              } else if (x.name == "C") {
                this.add.money = x.money;
                this.add.model = x.model;
                this.add.allTimes = x.times;
                this.add.onlyTime = x.times;
                this.add.endTime= this.replatime(this.DateAdd("m", 365, nows));
                this.istimes = false;
              } else if (x.name == "D" || x.name == "E") {
                this.add.money = x.money;
                this.add.model = x.model;
                this.add.allTimes = x.times;
                this.add.onlyTime = x.times;
                this.istimes = true;
                this.add.startTime = "";
                this.add.endTime= "";
              }
            }
          });
        } 
      }           
    },
    chosestart () {
      this.req.find((x, y) => {
        if (x.name == this.add.ofType) {
          let typename = x.name;
          if (typename == "A") {
            this.add.endTime= this.replatime(this.DateAdd("m", 30, new Date(this.add.startTime)));
            return false;
          } else if (typename == "B") {
            this.add.endTime= this.replatime(this.DateAdd("m", 90, new Date(this.add.startTime)));
            return false;
          } else if (typename == "C") {
            this.add.endTime= this.replatime(this.DateAdd("m", 365, new Date(this.add.startTime)));
            return false;
          } 
        }
      });
    },
    addcarnumberinner() {      
      this.add.dealer = localStorage.getItem("dealer");
      console.log(this.add);
      let that = this;
      if(that.add.ofType=='D'||that.add.ofType=='E'){
        if (that.add.name == "" || that.add.tel == "" || that.add.ofType == "" || that.add.money == "") {
          that.$message.error("带*的数据不能为空哦！");
          return false;
        }
      }else{
        if (that.add.name == "" || that.add.tel == "" || that.add.ofType == "" || that.add.money == "" || that.add.startTime == "" || that.add.endTime== "") {
          that.$message.error("带*的数据不能为空哦！");
          return false;
        }
      }
      
      if (that.add.tel != "") {
        if (!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.add.tel)) {
          that.$message.error("请输入正确的手机号码");
          return false;
        }
      }
      if (that.add.ofType != ""){
        that.req.find((x, y) => {
          if (x.name == that.add.ofType) {
            if (x.name == "A") {
              that.add.ofType = x.typename;
              that.add.carNumberTypeWashCarId = x.type;
            } else if (x.name == "B") {
              that.add.ofType = x.typename;
              that.add.carNumberTypeWashCarId = x.type;
            } else if (x.name == "C") {
              that.add.ofType = x.typename;
              that.add.carNumberTypeWashCarId = x.type;
            } else if (x.name == "D") {
              that.add.ofType = x.typename;
              that.add.carNumberTypeWashCarId = x.type;
            } else if (x.name == "E") {
              that.add.ofType = x.typename;
              that.add.carNumberTypeWashCarId = x.type;
            }
          }
        });
      }
      // if(that.add.idcard == ""){
      //   delete that.add.idcard;
      // }
      // if(that.add.wxNumber == ""){
      //   delete that.add.wxNumber;
      // }
      // if(that.add.address == ""){
      //   delete that.add.address;
      // }
      if(that.add.startTime == ""){
        delete that.add.startTime;
      }
      if(that.add.endTime== ""){
        delete that.add.endTime;
      }
      // if(that.add.car_color == ""){
      //   delete that.add.car_color;
      // }
      // if(that.add.car_brand == ""){
      //   delete that.add.car_brand;
      // }
      if(that.add.money == ""){
        delete that.add.money;
      }else{
        this.add.money = 0;
        if (!isRealNum(this.add.money)) {
          this.$message.error('充值金额只能为数字')
          return
        }
      }
      addassociator(that.add).then(function(message) {
        if (message.data.code == 0) {
          that.$message({
            message: "添加成功",
            type: "success"
          });
          that.universal.add1 = false;
          that.searchClick();
        } else {
          that.$message({
            message: "添加失败",
            type: "error"
          });
        }
      });
    },
    SHowhide() {
      this.universal.add1 = false;
    },
    hideclick() {
      this.universal.change = false;
    },
    indexMethod(index) {
      return index + (this.paging.page - 1) * this.paging.pageSize + 1;
    },
    handleSizeChange(val) {
      this.paging.pageSize = val;
      this.searchClick();
    },
    handleCurrentChange(val) {
      this.paging.page = val;
      this.searchClick();
    },
    usage() {
      this.universal.add1 = true;
      let that = this;
      that.add.name = "";
      // that.add.idcard= "";
      that.add.tel= "";
      // that.add.wxNumber= "";
      // that.add.address="";
      // that.add.car_number="";
      that.add.ofType = "";
      that.add.startTime= "";
      that.add.endTime="";
      // that.add.car_color="";
      // that.add.car_brand= "";
      that.add.money="";
      that.add.model="";
      that.add.carNumberTypeWashCarId = "";
      that.add.isOpenSms="1";
    },
    deleteClick(row) {
      let that = this;
      this.$confirm("此操作将永久删除该条数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          delassociator({id: row.id}).then(function(message) {
            console.log(message.data);
            if (message.data.code == 0) {
              that.$message({
                message: "删除成功",
                type: "success"
              });
              that.searchClick();
            } else {
              that.$message({
                message: message.data.result,
                type: "error"
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    changeShow(row) {
      this.universal.change1 = true;
      this.change1 = Object.assign({}, row);
      console.log(this.change1);
    },
    changeClick1() {
      let that = this;
      console.log(this.change1);
      if (that.change1.name == "" || that.change1.tel == "") {
        that.$message.error("带*的数据不能为空哦！");
        return false;
      }
      // if(that.change1.money == "" || that.change1.money == 0){
      //   that.$message.error("请输入充值金额！");
      //   return false;
      // }
      let data = {
        id: that.change1.id,
        dealer: that.change1.dealer,
        name: that.change1.name,
        // idcard: that.change1.idcard,
        tel: that.change1.tel,
        // wxNumber: that.change1.wxNumber,
        // address: that.change1.address,
        // car_number: that.change1.car_number,
        startTime: that.change1.startTime,
        endTime: that.change1.endTime,
        // car_color: that.change1.car_color,
        // car_brand: that.change1.car_brand,
        money: that.change1.money,
        model: that.change1.model,
        isOpenSms: that.change1.isOpenSms,
        ofType: that.change1.ofType
      }
      exitassociator(data).then(function(message) {
        console.log(message.data);
        if (message.data.code == 0) {
          that.$message({
            message: "修改成功",
            type: "success"
          });
          that.universal.change1 = false;
          that.searchClick();
        } else {
          that.$message({
            message: "修改失败",
            type: "error"
          });
        }
      });      
    },
    addMore() {
      this.universal.addall = true;
      let that = this;
      that.addall.num="";
      that.addall.ofType = "";
      that.addall.carNumberTypeWashCarId = "";
    },
    // addallcarnumberinner() {      
    //   this.addall.dealer = localStorage.getItem("dealer");
    //   let that = this;
    //   if (that.addall.num == "" || that.addall.ofType == "") {
    //     that.$message.error("带*的数据不能为空哦！");
    //     return false;
    //   }
    //   if (that.addall.ofType != ""){
    //     that.req.find((x, y) => {
    //       if (x.name == that.addall.ofType) {
    //         if (x.name == "A") {
    //           that.addall.ofType = x.typename;
    //           that.addall.carNumberTypeWashCarId = x.type;
    //         } else if (x.name == "B") {
    //           that.addall.ofType = x.typename;
    //           that.addall.carNumberTypeWashCarId = x.type;
    //         } else if (x.name == "C") {
    //           that.addall.ofType = x.typename;
    //           that.addall.carNumberTypeWashCarId = x.type;
    //         }
    //       }
    //     });
    //   }      
    //   if (!isRealNum(this.addall.num)) {
    //     this.$message.error('添加数量只能为数字')
    //     return false;
    //   }
    //   console.log(that.addall);
    //   axios({
    //     method: 'post',
    //     url: that.$store.state.wash_url + '/carInfoWashCar/insertBatch',
    //     data: Qs.stringify({
    //       carNumberTypeWashCarId:that.addall.carNumberTypeWashCarId,
    //       num:that.addall.num,
    //       dealer:localStorage.getItem("dealer")
    //     })
    //   }).then(function(message) {
    //     if (message.data.code == 0) {
    //       that.$message({
    //         message: "添加成功",
    //         type: "success"
    //       });
    //       that.universal.addall = false;
    //       that.searchClick();
    //     } else {
    //       that.$message({
    //         message: "添加失败",
    //         type: "error"
    //       });
    //     }
    //   });
    // },
    addallcarnumberinner:debounce(function(e){      
      this.addall.dealer = localStorage.getItem("dealer");
      let that = this;
      if (that.addall.num == "" || that.addall.ofType == "") {
        that.$message.error("带*的数据不能为空哦！");
        return false;
      }
      if (that.addall.ofType != ""){
        that.req.find((x, y) => {
          if (x.name == that.addall.ofType) {
            if (x.name == "A") {
              that.addall.ofType = x.typename;
              that.addall.carNumberTypeWashCarId = x.type;
            } else if (x.name == "B") {
              that.addall.ofType = x.typename;
              that.addall.carNumberTypeWashCarId = x.type;
            } else if (x.name == "C") {
              that.addall.ofType = x.typename;
              that.addall.carNumberTypeWashCarId = x.type;
            } else if (x.name == "D") {
              that.addall.ofType = x.typename;
              that.addall.carNumberTypeWashCarId = x.type;
            } else if (x.name == "E") {
              that.addall.ofType = x.typename;
              that.addall.carNumberTypeWashCarId = x.type;
            }
          }
        });
      }      
      if (!isRealNum(this.addall.num)) {
        this.$message.error('添加数量只能为数字')
        return false;
      }
      console.log(that.addall);
      axios({
        method: 'post',
        url: that.$store.state.wash_url + '/carInfoWashCar/insertBatch',
        data: Qs.stringify({
          carNumberTypeWashCarId:that.addall.carNumberTypeWashCarId,
          num:that.addall.num,
          dealer:localStorage.getItem("dealer")
        })
      }).then(function(message) {
        if (message.data.code == 0) {
          that.$message({
            message: "添加成功",
            type: "success"
          });
          that.universal.addall = false;
          that.searchClick();
        } else {
          that.$message({
            message: "添加失败",
            type: "error"
          });
        }
      });
    }),
    handleSelectionChange(val) {
      console.log(val);
      let length = val.length;
      this.vipCardList = [];
      for(let i = 0;i < length;i++){
        this.vipCardList.push('https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd70f81c80f806b23&redirect_uri=http://cloud.parkingmore.cn/mp/total/codexiche.html&response_type=code&scope=snsapi_userinfo&state='+val[i].orderId+'&vip=0#wechat_redirect')
      }
      console.log(this.vipCardList);
    },
    download(row) {
      console.log(row);
      if (row.length > 0) {
        // var html = "";
        // row.forEach((a, b) => {
        //   html += a.id + ",";
        // });
        // let id = html.substring(0, html.length - 1);
        // console.log(id);
        let that = this;
        this.$confirm("此操作将选中数据生成二维码并下载, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            for (let i = 0; i < that.vipCardList.length; i++) {
              document.getElementById('qrcode').innerHTML="";
              (function (code) {
                  new QRCode('qrcode', {
                    width: 200,
                    height: 200, // 高度
                    text: code, // 二维码内容
                    correctLevel: QRCode.CorrectLevel.M
                  })
                  that.downloadQrCode(that.vipCardList[i]);                  
              })(that.vipCardList[i])
            }
          })
          .catch(() => {
            this.$message({
              type: "error",
              message: "已取消"
            });
          });
      } else {
        this.$message({
          type: "error",
          message: "请勾选会员信息"
        });
      }
    },
    chosename(val) {
      this.parkIist.forEach((a, index) => {
        if (a.parking_id == val) {
          val = a.parking_name;
        }
      });
      return val;
    },
    hideclick1() {
      this.universal.change1 = false;
    },
    searchClick() {
      let data = {};
      if (this.search.name) {
        data.name = this.search.name;
      }
      if (this.search.tel) {
        data.tel = this.search.tel;
      }
      if (this.search.car_number) {
        data.car_number = this.search.car_number;
      }
      data.page = this.paging.page;
      data.pageSize = this.paging.pageSize;
      data.userId = localStorage.getItem("userId");
      data.dealer = localStorage.getItem("dealer");
      let that = this;
      that.tableData = [];
      getassociatorList(data).then(res => {
        console.log(res);
        if (res.data.resCode == 0) {
          that.tableData = res.data.result;
          that.paging.total = res.data.count;
        } else {
          that.tableData = [];
          that.paging.total = 0;
        }
      });
    },
    importExcel(){
      this.importVip = "";
      this.universal.import = true;
    },
    getVipType() {
      let data = {
        page: 1,
        pageSize: 10,
        userId: localStorage.getItem('userId'),
        dealer: localStorage.getItem('dealer')
      };
      let that = this;
      axios({
        method: "post",
        url: this.$store.state.wash_url+'/carNumberTypeWashCar/selectAll',
        data: Qs.stringify(data)
      }).then(res => {
        console.log(res);
        if (res.data.count > 0) {
          that.existWashingList = res.data.result;
          for (var i = 0; i < res.data.count; i++) {
            let list = {};
            list.name = res.data.result[i].name;
            list.type = res.data.result[i].id;
            list.typename = res.data.result[i].name;
            list.model = res.data.result[i].model;
            list.money = res.data.result[i].money;
            list.times = res.data.result[i].times;
            that.req.push(list);           
          }
        }
        console.log(that.req);
        // that.req.find((a, y) => {
        //   if (a.name == "A") {
        //     a.name = "月卡";
        //   } else if (a.name == "B") {
        //     a.name = "季卡";
        //   } else if (a.name == "C") {
        //     a.name = "年卡";
        //   } else if (a.name == "D") {
        //     a.name = "次卡";
        //   } else if (a.name == "F") {
        //     a.name = "临时";
        //   }
        // });
        // that.existWashingList.find((a, y) => {
        //   if (a.name == "A") {
        //     a.label = "月卡";
        //   } else if (a.name == "B") {
        //     a.label = "季卡";
        //   } else if (a.name == "C") {
        //     a.label = "年卡";
        //   } else if (a.name == "D") {
        //     a.label = "次卡";
        //   } else if (a.name == "F") {
        //     a.label = "临时";
        //   }
        // });
      });
    },
    changetype(val){
      if(val=="A"){
        val = "月卡"
      }else if(val=="B"){
        val = "季卡"
      }else if(val=="C"){
        val = "年卡"
      }else if(val=="D"){
        val = "次卡"
      }else if(val=="E"){
        val = "券卡"
      }else {
        val = "-"
      }
      return val;
    },
    beforeUpload(file){
      console.log(file)
      var reg = /^.*\.(?:xls|xlsx)$/i;//文件名可以带空格
      console.log(reg.test(file.name));
      if (!reg.test(file.name)) {
        this.$message({
          message: "请上传excel格式的文件!",
          type: "error"
        });
        return false;
      }
    },
    uploadFile(file){
      console.log(file);
      if(this.importVip=="" || this.canUseBeginTime=="" || this.canUseEndTime==""){
        that.$message.error("带*的数据不能为空哦！");
        return false;
      }      
      const fileObj = file.file;
      // FormData 对象
      const form = new FormData();
      // 文件对象
      form.append('file', fileObj);
      form.append('dealer', localStorage.getItem("dealer"));
      form.append('carNumberTypeWashCarId', this.importVip);
      form.append('canUseBeginTime', this.canUseBeginTime);
      form.append('canUseEndTime', this.canUseEndTime);
      axios({
        method: "post",
        url:"http://114.55.168.103:2088/carInfoWashCar/importExcel",
        // url:"http://192.168.2.195:2088/ZFBrake/carInfoWashCar/importExcel",
        data: form
      }).then(res => {
        console.log(res);
        if (res.data.code == 0) {          
          this.$message({
            message: "上传成功",
            type: "success"
          });
          this.universal.import = false;
          this.beforeClose();
          this.searchClick();
        } else {
          this.$message({
            message: "上传失败",
            type: "error"
          });
          this.universal.import = false;
          this.beforeClose();
          this.searchClick();
        }
      });
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，请删除后继续上传`)
    },
    beforeClose() {
      this.$emit("update:visible", false); // 直接修改父组件的属性
      this.$refs.upload.clearFiles();
    },

    downloadQrCode (val) {
      let name = val.substring(val.indexOf('state=') + 6, val.indexOf('&vip=0'));
      console.log(name);
      let myselfCanvas = document.getElementById('qrcode').getElementsByTagName('canvas')
      let img = document.getElementById('qrcode').getElementsByTagName('img')
      let ah = document.createElement('a')
      let imgURL = myselfCanvas[0].toDataURL('image/jpg')
      let u = navigator.userAgent
      if (u.indexOf('Trident') !== -1 && u.indexOf('Windows') !== -1) {
        // IE内核 并且  windows系统 情况下 才执行;
        let bstr = atob(imgURL.split(',')[1])
        let n = bstr.length
        let u8arr = new Uint8Array(n)
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n)
        }
        let blob = new Blob([u8arr])
        window.navigator.msSaveOrOpenBlob(blob, name + '.' + 'png')
      } else if (u.indexOf('Firefox') > -1) {
        //火狐兼容下载
        let blob = this.base64ToBlob(imgURL)
        let evt = document.createEvent('HTMLEvents')
        evt.initEvent('click', true, true)
        ah.download = name + '.' + 'png'
        ah.href = URL.createObjectURL(blob)
        ah.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }))
      } else {
        img.src = myselfCanvas[0].toDataURL('image/jpg')
        ah.href = img.src
        ah.download = name
        ah.click()
      }
    },
    // base64转blob
    base64ToBlob (code) {
      let parts = code.split(';base64,')
      let contentType = parts[0].split(':')[1]
      let raw = window.atob(parts[1])
      let rawLength = raw.length
      let uInt8Array = new Uint8Array(rawLength)
      for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i)
      }
      return new Blob([uInt8Array], { type: contentType })
    },

    DateAdd(interval, number, date) {
      var atime;
      switch (interval) {
        case "y ": {
          atime = date.setFullYear(date.getFullYear() + number);
          return atime;
          break;
        }
        case "q ": {
          atime = date.setMonth(date.getMonth() + number * 3);

          return atime;
          break;
        }
        case "m ": {
          atime = date.setMonth(date.getMonth() + number);

          return atime;
          break;
        }
        case "w ": {
          atime = date.setDate(date.getDate() + number * 7);

          return atime;
          break;
        }
        case "d ": {
          atime = date.setDate(date.getDate() + number);

          return atime;
          break;
        }
        case "h ": {
          atime = date.setHours(date.getHours() + number);
          return atime;
          break;
        }
        case "m ": {
          atime = date.setMinutes(date.getMinutes() + number);
          return atime;
          break;
        }
        case "s ": {
          atime = date.setSeconds(date.getSeconds() + number);
          return atime;
          break;
        }
        default: {
          atime = date.setDate(date.getDate() + number);
          return atime;
          break;
        }
      }
    },
    add0(val) {
      return val < 10 ? "0" + val : val;
    },
    replatime(val) {
      var time = new Date(val);
      var year = time.getFullYear();
      var month = time.getMonth() + 1;
      var date = time.getDate();
      var hours = time.getHours();
      var minutes = time.getMinutes();
      var seconds = time.getSeconds();
      return year + "-" + this.add0(month) + "-" + this.add0(date) + " " + this.add0(hours) + ":" + this.add0(minutes) + ":" + this.add0(seconds);
    },
  }
};
</script>

<style scoped="scoped">
.el-date-editor.el-input,
.el-input,
.el-select {
  width: 100%；;
}
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
  width: 106px !important;
}
.el-input--small {
  width: 150px !important;
}
.demoele {
  display: inline-block;
}
.el-icon-search {
  cursor: pointer;
  padding: 4px;
  background-color: #a2cc6d;
  color: #ffffff;
  border-radius: 3px;
}
.el-upload-list--text{
  display: inline-block !important;
  vertical-align: middle !important;
  margin-left: 8px !important;
}
</style>