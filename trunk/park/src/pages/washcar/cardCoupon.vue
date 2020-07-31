<template>
  <div id="faultList">
    <div class="header">
      <div class="headerTitle">
        <span>卡券列表</span>
      </div>
    </div>
    <div class="select">
      <!-- <span>发放站点：</span>
      <el-select v-model="search.sid" filterable placeholder="请选择" clearable>
        <el-option>未选择</el-option>
        <el-option v-for="item in parkIist" :key="item.sid" :label="item.sname" :value="item.sid"></el-option>
      </el-select> -->
      <span>卡券类型：</span>
      <el-select v-model="search.ticketType" placeholder="请选择" clearable>
        <el-option>未选择</el-option>
        <el-option v-for="item in tickettype" :key="item.id" :label="item.type" :value="item.value"></el-option>
      </el-select>
      <span>使用方式：</span>
      <el-select v-model="search.useWay" placeholder="请选择" clearable>
        <el-option>未选择</el-option>
        <el-option v-for="item in usage1" :key="item.id" :label="item.type" :value="item.value"></el-option>
      </el-select>
      <!-- <br />
      <br /> -->
      <span>使用状态：</span>
      <el-select v-model="search.use_status" placeholder="请选择" clearable>
        <el-option>未选择</el-option>
        <el-option
          v-for="item in use_statuslist1"
          :key="item.value"
          :label="item.type"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="select">
      <span>手机号：</span>
      <el-input v-model="search.tel" clearable placeholder="请输入内容"></el-input>
    </div>
    <div class="select">
      <!-- <el-button type="success" class="oyButton" icon="el-icon-download" @click="export2Excel">导出</el-button> -->
      <el-button
        type="success"
        class="oyButton"
        icon="el-icon-plus"
        @click="ADD"
        v-show="showchose"
      >生成</el-button>
      <el-button type="success" class="oyButton" icon="el-icon-search" @click="searchClick">查询</el-button>
      <!-- <el-button type="success" class="oyButton" icon="el-icon-download" @click='export2Excel'>导出</el-button> -->
      <el-button
        type="success"
        class="oyButton"
        icon="el-icon-delete"
        style="width:90px!important"
        @click="allefficacy(tableDataSLIST)"
      >批量删除</el-button>
      <el-button
        type="success"
        class="oyButton"
        icon="el-icon-delete"
        style="width:95px!important"
        @click="deleteefficacy"
      >删除失效券</el-button>
      <!-- <img src="../../../static/image/refresh.png" alt="" @click="refresh"> -->
    </div>
    <div class="Content">
      <el-table
        class="oyTable"
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" class="selection" prop="uuid"></el-table-column>
        <el-table-column type="index" :index="indexMethod" label="序号" width="100"></el-table-column>

        <el-table-column label="发放站点" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">全部</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">全部</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="车牌号码" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.use_obj| numnew}}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.use_obj|numnew}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="手机号码" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{scope.row.tel }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.tel }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="卡券类型" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{scope.row.ticketType |archtype}}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.ticketType| archtype}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="使用方式" width>
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag
                color="#5daf34"
                v-if="scope.row.useWay==1"
              >{{ scope.row.useWay | userwaytyape}}</el-tag>
              <el-tag
                color="#f8c541"
                v-if="scope.row.useWay==2"
              >{{ scope.row.useWay | userwaytyape}}</el-tag>
              <el-tag
                color="#c9521e"
                v-if="scope.row.useWay==3"
              >{{ (scope.row.useWay) | userwaytyape}}</el-tag>
              <el-tag
                color="#c9521e"
                v-if="scope.row.useWay==4"
              >{{ (scope.row.useWay) | userwaytyape}}</el-tag>
            </div>
          </template>
        </el-table-column>
        <!-- <el-table-column label="免费时长" width>
          <template slot-scope="scope">
            <el-popover>
              <p class="TsMaxWidth">{{ scope.row.freeTime}}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.freeTime}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column> -->
        <el-table-column label="折扣金额" width>
          <template slot-scope="scope">
            <el-popover>
              <p class="TsMaxWidth">{{ (scope.row.percent/10)+'折'|numnew}}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ (scope.row.percent)/10+'折'|numnew}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <!-- <el-table-column label="需满金额" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.full}}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.full}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column> -->

        <el-table-column label="减去金额" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.sub}}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.sub}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="使用状态" width>
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag
                color="rgb(20, 54, 167)"
                v-if="scope.row.use_status==2"
              >{{ scope.row.use_status | shiyongtype}}</el-tag>
              <el-tag
                color="#5daf34"
                v-if="scope.row.use_status==1"
              >{{ scope.row.use_status | shiyongtype}}</el-tag>
              <el-tag
                color="#f8c541"
                v-if="scope.row.use_status==-1"
              >{{ scope.row.use_status | shiyongtype}}</el-tag>
              <el-tag
                color="#c9521e"
                v-if="scope.row.use_status==0"
              >{{ (scope.row.use_status) | shiyongtype}}</el-tag>
            </div>
          </template>
        </el-table-column>

        <el-table-column label="生效时间" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.start_time}}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.start_time }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="失效时间" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.end_time}}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.end_time }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column prop label="操作" width="150">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="查看" placement="top">
              <i class="icon-See el-icon-search" @click="seeClick(scope.row)"></i>
            </el-tooltip>
            <el-tooltip
              class="item"
              effect="dark"
              v-if="scope.row.issus_obj !=''||scope.row.tel !=''"
              content="发放"
              placement="top"
            >
              <i class="jilu jilus iconfont icon-fafangyouhuiquan"></i>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" v-else content="发放" placement="top">
              <i class="jilu iconfont icon-fafangyouhuiquan" @click="grant(scope.row)"></i>
            </el-tooltip>
            <!-- <el-tooltip
              class="item"
              v-if="scope.row.use_status==1 || scope.row.use_status==0"
              effect="dark"
              content="删除卡券"
              placement="top"
            >
              <i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
            </el-tooltip>-->

            <!-- <el-tooltip class="item" v-else effect="dark" content="删除失效券" placement="top">
              <i class="icon-delete deletecolor el-icon-delete" @click="deleteClick(scope.row)"></i>
            </el-tooltip>-->
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="发放优惠券" :visible.sync="universal.release">
      <div>
        <span class="spanClass spanchange">
          <span class="aKey">*</span>手机号码：
        </span>
        <el-input :disabled="false" v-model="release.tel" clearable placeholder="请输入手机号码"></el-input>
        <br />
        <br />

        <span class="spanClass spanchange">车牌号码：</span>
        <el-input :disabled="false" v-model="release.use_obj" clearable placeholder="请输入车牌号码"></el-input>
        <br />
        <br />
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="success" class="oyButton" @click="universal.release = false">取消</el-button>
        <el-button type="success" class="oyButton" @click="grantyes">确认</el-button>
      </div>
    </el-dialog>
    <el-dialog title="查看" :visible.sync="universal.look">
      <div class="letg">
        <el-row>
          <el-col :span="12">
            <div class="grid-content">卡券编码：</div>
            {{look.ticketNumber}}
          </el-col>
          <!-- <el-col :span="12"><div class="grid-content">发放个数：</div>{{look.num | numnew}}</el-col> -->
          <el-col :span="12">
            <div class="grid-content">使用方式：</div>
            {{look.useWay | userwaytyape}}
          </el-col>
          <!-- <el-col :span="12">
            <div class="grid-content">免费时长：</div>
            {{look.freeTime}}
          </el-col>-->
          <el-col :span="12">
            <div class="grid-content">发放类型：</div>
            {{look.issus_type | issus_typefilter}}
          </el-col>
          <!-- <el-col :span="12">
            <div class="grid-content">需满金额：</div>
            {{look.full}}
          </el-col>-->
          <el-col :span="12">
            <div class="grid-content">发放方式：</div>
            {{look.isTeam | fangtype}}
          </el-col>
          <el-col :span="12">
            <div class="grid-content">减去金额：</div>
            {{look.sub}}
          </el-col>
          <el-col :span="12">
            <div class="grid-content">卡券类型：</div>
            {{look.ticketType | cardtype}}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">使用状态：</div>
            {{look.use_status | shiyongtype}}
          </el-col>
          <el-col :span="12">
            <div class="grid-content">手机号码：</div>
            {{look.tel }}
          </el-col>
          <el-col :span="12">
            <div class="grid-content">开始时间：</div>
            {{look.start_time}}
          </el-col>
          <el-col :span="12">
            <div class="grid-content">结束时间：</div>
            {{look.end_time}}
          </el-col>
          <el-col :span="12">
            <div class="grid-content">发放站点：</div>
            <span v-if="look.sid">{{look.sid}}</span>
            <span v-else="">全部</span>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">发放说明：</div>
            {{look.remark | sizes}}
          </el-col>
        </el-row>
      </div>
    </el-dialog>
    <el-dialog title="生成优惠券" :visible.sync="universal.add1">
      <div>
        <el-row>
          <el-col :span="12">
            <span class="spanClass">
              <span class="aKey">*</span>卡券类型：
            </span>
            <el-select v-model="add1.ticketType" placeholder="请选择">
              <el-option value>未选择</el-option>
              <el-option
                v-for="nice in tickettype"
                :key="nice.value"
                :label="nice.type"
                :value="nice.value"
              ></el-option>
            </el-select>
            <br />
            <br />
            <span class="spanClass">
              <span class="aKey">*</span>发放方式：
            </span>
            <el-select v-model="add1.isTeam" placeholder="请选择发放方式">
              <el-option value>未选择</el-option>
              <el-option
                v-for="item in disbursement"
                :key="item.value"
                :label="item.type"
                :value="item.value"
              ></el-option>
            </el-select>
            <br />
            <br />
            <span class="spanClass">
              <span class="aKey">*</span>使用方式：
            </span>
            <el-select v-model="add1.useWay" placeholder="请选择">
              <el-option value>未选择</el-option>
              <el-option
                v-for="nice in usage1"
                :key="nice.value"
                :label="nice.type"
                :value="nice.value"
              ></el-option>
            </el-select>
            <br />
            <br />

            <span class="spanClass">
              <span class="aKey">*</span>发放类型：
            </span>
            <el-select v-model="add1.issus_type" placeholder="请选择发放类型">
              <el-option value>未选择</el-option>
              <el-option 
                v-for="item in Distributing1"
                :key="item.value"
                :label="item.type"
                :value="item.value"
                v-if="item.value !=3 "
              ></el-option>
            </el-select>
            <br />
            <br />

            <span class="spanClass">
              <span class="aKey">*</span>卡券开始时间：
            </span>
            <el-date-picker
              v-model="add1.start_time"
              type="datetime"
              placeholder="选择日期时间"
              value-format="yyyy-MM-dd HH:mm:ss"
            ></el-date-picker>
            <br />
            <br />

            <span class="spanClass">
              <span class="aKey">*</span>卡券结束时间：
            </span>
            <el-date-picker
              v-model="add1.end_time"
              type="datetime"
              placeholder="选择日期时间"
              value-format="yyyy-MM-dd HH:mm:ss"
            ></el-date-picker>
            <br />
            <br />

            <span class="spanClass">备注：</span>
            <div class="little">{{this.$store.state.size}}</div>
          </el-col>
          <el-col :span="12">
            <div v-if="add1.isTeam==0">
              <span class="spanClass">
                <span class="aKey">*</span>发放个数：
              </span>
              <el-input :disabled="false" v-model="add1.num" clearable placeholder="请输入发放个数"></el-input>
              <br />
              <br />
            </div>

            <!-- <div v-if="this.add1.useWay==1">
              <span class="spanClass">
                <span class="aKey">*</span>免费时长：
              </span>
              <el-input
                :disabled="false"
                v-model="add1.freeTime"
                clearable
                placeholder="请输入 如：30分钟"
              ></el-input>
              <br />
              <br />
            </div> -->
            <div v-if="this.add1.useWay==4">
              <span class="spanClass">
                <span class="aKey">*</span>折扣：
              </span>
              <el-input
                :disabled="false"
                v-model="add1.percent"
                clearable
                maxlength="2"
                placeholder="请输入 如：30折"
              ></el-input>
              <el-tooltip placement="top">
                <div slot="content">
                  例：30折扣即3折; 85折即为8.5折
                  <br />
                </div>
                <img src="../../../static/image/ming.png" alt style="vertical-align: middle" />
              </el-tooltip>
              <br />
              <br />
            </div>
            <!-- <div v-if="this.add1.useWay==3">
              <span class="spanClass">
                <span class="aKey">*</span>需满金额：
              </span>
              <el-input :disabled="false" v-model="add1.full" clearable placeholder="请输入免费时长"></el-input>
              <br />
              <br />
            </div> -->
            <div v-if="this.add1.useWay==2">
              <span class="spanClass">
                <span class="aKey">*</span>减去金额：
              </span>
              <el-input :disabled="false" v-model="add1.sub" clearable placeholder="请输入优惠金额"></el-input>
              <br />
              <br />
            </div>

            <span class="spanClass">
              <span class="aKey" v-if="this.add1.issus_type==4">*</span>发放站点：
            </span>
            <el-select v-model="value5" filterable multiple placeholder="请选择">
              <el-option
                v-for="item in tableDataadd"
                :key="item.sid"
                :label="item.sname"
                :value="item.sid"
              ></el-option>
            </el-select>
            <el-tooltip placement="top">
              <div slot="content">
                不选默认券可用全部站点
                <br />
              </div>
              <img src="../../../static/image/ming.png" alt style="vertical-align: middle" />
            </el-tooltip>
            <br />
            <br />
            <span class="spanClass">
              <!-- <span class="aKey">*</span> -->
              发放说明：
            </span>
            <el-input
              :disabled="false"
              class="textareaWidth"
              type="textarea"
              :rows="5"
              v-model="add1.remark"
              clearable
              placeholder="请输入内容"
            ></el-input>
            <br />
            <br />
          </el-col>
        </el-row>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="success" class="oyButton" @click="universal.add1 = false">取消</el-button>
        <el-button type="success" class="oyButton" @click="addClick">生成</el-button>
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
  </div>
</template>

<script>
import Qs from "qs";
import axios from "axios";
import { mapState, mapActions, mapGetters } from "vuex";
import {
  getCardCoupon,
  getsiteList,
  searchClicks,
  valueop,
  isLicensePlate,
  getParkingLotListApi,
} from "../../components/api/api.js";
export default {
  name: "equipmentList",
  data() {
    return {
      pays: 0,
      obj: [],
      numw: [],
      numvalue: [],
      universal: {
        change: false,
        look: false,
        add1: false,
        release: false
      },
      release: {
        tel: "",
        use_obj: ""
      },
      tableDataadd: [],
      paging: {
        page: 1,
        pageSize: 10,
        total: ""
      },
      parkIist: [],
      tableData: [],
      search: {
        ticketType: "",
        use_status: "",
        useWay: "",
        ticketNumber: "",
        sid: "",
        tel:"",
      },
      fuzhi: "",
      look: {
        num: "",
        ticketType: "",
        ticketNumber: "",
        useWay: "",
        freeTime: "",
        full: "",
        sub: "",
        start_time: "",
        end_time: "",
        use_obj: "",
        issus_type: "",
        isTeam: "",
        issus_obj: "",
        remark: ""
      },
      value5: [],
      add1: {
        num: "",
        ticketType: "",
        useWay: "",
        percent: "",
        freeTime: "",
        full: "",
        sub: "",
        start_time: "",
        end_time: "",
        use_obj: "",
        issus_type: "",
        isTeam: "",
        remark: ""
      },
      listorder: [],
      valtable: [],
      change: {
        trade_no: "",
        out_trade_no: "",
        pay_type: "",
        longdate: "",
        price: "",
        tmoney: "",
        pay_time: "",
        refund_reason: ""
      },
      idreplace: "",
      showchose: "",
      tableDataSLIST: []
    };
  },
  computed: {
    ...mapState([
      "use_statuslist1",
      "usage1",
      "tickettype",
      "Distributing1",
      "disbursement"
    ])
  },
  mounted: function() {
    this.getwashsiteList();
    document.title = this.$route.meta.title;
    if (
      localStorage.getItem("userType") == 2 ||
      localStorage.getItem("dealer") == 123
    ) {
      this.showchose = true;
    } else {
      this.showchose = false;
    }
    this.searchClick();
    // this.refresh();
    // let that = this;
    // let data = {
    //   page: that.paging.page,
    //   pageSize: 500,
    //   userId: localStorage.getItem('userId'),
    //   dealer: localStorage.getItem('dealer')
    // };

    // getsiteList(data).then(message => {
    //   console.log(message);
    //   if (message.data.result.length > 0) {
    //     for (var i = 0; i < message.data.result.length; i++) {
    //       let list = {
    //         sid: message.data.result[i].sid,
    //         sname: message.data.result[i].sname
    //       };
    //       that.tableDataadd.push(list);
    //     }
    //     console.log(this.tableDataadd);
    //   } else {
    //     that.tableDataadd = [];
    //   }
    // })
  },
  methods: {
    ...mapActions(["parkname"]),
    handleSelectionChange(val) {
      this.tableDataSLIST = val;
    },
    getwashsiteList() {
      let params = {
        page: 1,
        pageSize: 500,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer")
      };
      let that = this;
      getsiteList(params).then(message => {
        console.log(message);
        if (message.data.result.length > 0) {
          for (var i = 0; i < message.data.result.length; i++) {
            let list = {
              sid: message.data.result[i].sid,
              sname: message.data.result[i].sname
            };
            that.parkIist.push(list);
          }
          console.log(that.parkIist);
        } else {
          that.parkIist = [];
        }
      });
    },
    grant(val) {
      console.log(val);
      this.universal.release = true;
      this.release.tel = "";
      this.release.use_obj = "";
      this.idreplace = val.id;
    },
    isLicensePlate(str) {
      return /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/.test(
        str
      );
    },
    grantyes(row) {
      if (this.release.tel == "") {
        this.$message.error("手机号码不能为空");
        return false;
      }
      if (this.release.use_obj == "" && this.release.tel == "") {
        this.$message.error("手机号码和车牌号码至少选择一个");
        return false;
      }
      if (this.release.use_obj) {
        if (!this.isLicensePlate(this.release.use_obj)) {
          this.$message.error("请输入正确的车牌号码");
          return false;
        }
      }
      if (this.release.tel) {
        if (!valueop(this.release.tel)) {
          this.$message.error("请输入正确的手机号码");
          return false;
        }
      }

      getCardCoupon("/ticketInfoWashCar/issueTicket", {
        tel: this.release.tel,
        use_obj: this.release.use_obj,
        id: this.idreplace
      }).then(res => {
        if (res.data.resCode == 0) {
          this.$message({
            message: "票券发放成功",
            type: "success"
          });
          this.searchClick();
          this.universal.release = false;
        } else {
          this.$message({
            message: "票券发放失败",
            type: "error"
          });
        }
      });
    },
    chose(val) {
      var run = val.split(",");
      for (let t = 0; t < run.length; t++) {
        for (let h = 0; h < this.tableDataadd.length; h++) {
          if (run[t] == this.tableDataadd[h].sid) {
            var nlua;
            nlua += this.tableDataadd[h].sname + ",";
            nlua = nlua.replace(/undefined/, "");
          }
        }
      }
      console.log(nlua);
      if (nlua == undefined) {
        nlua = "全部";
      } else {
        nlua = nlua.slice(0, nlua.length - 1);
      }
      return nlua;
    },
    ADD() {
      this.universal.add1 = true;
      let that = this;
      that.add1.num = "";
      that.add1.ticketType = "";
      that.add1.useWay = "";
      that.add1.start_time = "";
      that.add1.end_time = "";
      // that.add1.use_obj=''
      that.add1.issus_type = "";
      that.add1.isTeam = "";
      that.add1.remark = "";
      that.add1.freeTime = "";
      that.add1.sub = "";
      this.add1.percent = "";
      this.add1.full = "";
      let data = {
        page: 1,
        pageSize: 200,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer")
      };
      this.tableDataadd = [];
      getsiteList(data).then(message => {
        console.log(message);
        if (message.data.result.length > 0) {
          for (var i = 0; i < message.data.result.length; i++) {
            let list = {
              sid: message.data.result[i].sid,
              sname: message.data.result[i].sname
            };
            that.tableDataadd.push(list);
          }
          console.log(that.tableDataadd);
        } else {
          that.tableDataadd = [];
        }
      });
    },
    // refresh() {
    //   let that = this;
    //   getCardCoupon("/ticketInfoWashCar/flushOverDue").then(res => {
    //     console.log(res);
    //     if (res.data.resCode == "0") {
    //       that.$message({
    //         message: "失效票券刷新成功",
    //         type: "success"
    //       });
    //     } else {
    //       that.$message({
    //         message: "失效票券刷新失败",
    //         type: "error"
    //       });
    //     }
    //   });
    // },
    allefficacy(row) {
      console.log(row);
      if (row.length > 0) {
        var html = "";
        row.forEach((a, b) => {
          html += a.id + ",";
        });
        let id = html.substring(0, html.length - 1);
        console.log(id);
        let that = this;
        this.$confirm("此操作将删除选中数据, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            getCardCoupon("/ticketInfoWashCar/delById", { id }).then(message => {
              console.log(message);
              if (message.data.resCode == 0) {
                that.searchClick();
                that.$message({
                  message: "删除成功",
                  type: "success"
                });
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
              type: "error",
              message: "已取消删除"
            });
          });
      } else {
        this.$message({
          type: "error",
          message: "请勾选电子卡券"
        });
      }
    },
    deleteefficacy() {
      let that = this;
      this.$confirm("此操作将删除失效券, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          getCardCoupon("/ticketInfoWashCar/delOverDue").then(message => {
            console.log(message);
            if (message.data.resCode == 0) {
              that.$message({
                message: message.data.result,
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
    export2Excel() {
      let data = {
        page: this.paging.page,
        pageSize: this.paging.total == 0 ? 1 : this.paging.total,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer")
      };
      let that = this;
      // getCardCoupon('/TicketInfo/selectTicketInfo', data).then(res => {
      //   if (res.data.resCode == 0) {
      //     for (let i = 0; i < res.data.result.length; i++) {
      //       if (res.data.result[i].useWay == 1) {
      //         res.data.result[i].useWay = '免费时长'
      //       } else if (res.data.result[i].useWay == 2) {
      //         res.data.result[i].useWay = '现金抵用券'
      //       } else if (res.data.result[i].useWay == 3) {
      //         res.data.result[i].useWay = '满减券'
      //       } else if (res.data.result[i].useWay == 4) {
      //         res.data.result[i].useWay = '折扣券'
      //       }
      //       if (res.data.result[i].use_status == 0) {
      //         res.data.result[i].use_status = '已使用'
      //       } else if (res.data.result[i].use_status == 1) {
      //         res.data.result[i].use_status = '未使用'
      //       } else {
      //         res.data.result[i].use_status = '已失效'
      //       }
      //       if (res.data.result[i].freeTime == '') {
      //         res.data.result[i].freeTime = '-'
      //       } else {
      //         res.data.result[i].freeTime = res.data.result[i].freeTime + '分钟'
      //       }
      //       if (res.data.result[i].sub === '') {
      //         res.data.result[i].sub = '-'
      //       } else {
      //         res.data.result[i].sub = res.data.result[i].sub + '元'
      //       }
      //       if (res.data.result[i].full === '') {
      //         res.data.result[i].full = '-'
      //       } else {
      //         res.data.result[i].full = res.data.result[i].full + '元'
      //       }
      //     }
      //     that.listorder = res.data.result
      //     console.log(that.listorder)
      //     require.ensure([], () => {
      //       const { export_json_to_excel } = require('../../excel/Export2Excel');
      //       const tHeader = ['使用方式', '免费时长', '需满金额', '减去金额', '使用状态', '开始时间', '结束时间'];
      //       const filterVal = ['useWay', 'freeTime', 'full', 'sub', 'use_status', 'start_time', 'end_time'];
      //       const list = that.listorder;
      //       const data = that.formatJson(filterVal, list);
      //       export_json_to_excel(tHeader, data, '电子卡券');
      //     })
      //   }
      // })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    },
    focus6() {
      if (
        !/[\u4e00-\u9fa5]+/.test(this.change.tmoney) &&
        this.change.tmoney != ""
      ) {
        this.change.tmoney = this.change.tmoney + "元";
      }
    },
    seeClick(row) {
      console.log(row);
      this.look.isTeam = row.isTeam;
      this.look.issus_type = row.issus_type;
      this.look.num = row.num;
      this.look.remark = row.remark;
      this.look.ticketType = row.ticketType;
      this.look.useWay = row.useWay;
      this.look.full = row.full;
      this.look.freeTime = row.freeTime;
      this.look.start_time = row.start_time;
      this.look.end_time = row.end_time;
      this.look.sub = row.sub;
      this.look.sid = row.sid;
      this.look.ticketNumber = row.ticketNumber;
      this.look.tel = row.tel;
      this.look.use_status = row.use_status;
      this.universal.look = true;
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
    addClick() {
      console.log(this.add1.useWay);
      var datas = "1,2";
      var list = datas.split(",");
      console.log(list);
      let lengths = this.value5.length;
      let valuePark = "";
      for (let i = 0; i < lengths; i++) {
        valuePark += this.value5[i] + ",";
      }
      valuePark = valuePark.replace(/,$/, "");
      console.log(valuePark);
      let p = new Date(this.add1.start_time);
      let e = new Date(this.add1.end_time);
      if (e.getTime(e) < p.getTime(p)) {
        this.$message.error("结束时间不能早于开始时间");
        return false;
      }
      if (
        this.add1.ticketType == "" ||
        this.add1.useWay == "" ||
        this.add1.start_time == "" ||
        this.add1.end_time == "" ||
        this.add1.issus_type == "" ||
        this.add1.isTeam == ""
      ) {
        this.$message.error("带*的数据不能为空哦！");
        return false;
      }
      let data = {};
      if (this.add1.isTeam == 0) {
        if (this.add1.sub != "") {
          data.sid = valuePark;
          data.num = this.add1.num;
          data.ticketType = this.add1.ticketType;
          data.useWay = this.add1.useWay;
          data.start_time = this.add1.start_time;
          data.end_time = this.add1.end_time;
          data.sub = this.add1.sub;
          data.issus_type = this.add1.issus_type;
          data.isTeam = this.add1.isTeam;
          data.issus_obj = this.add1.issus_obj;
          data.remark = this.add1.remark;
          // data.userId=localStorage.getItem('userId')
          data.dealer = localStorage.getItem("dealer");
        }
        if (this.add1.percent !== '') {
          data.sid = valuePark
          data.num = this.add1.num
          data.ticketType = this.add1.ticketType
          data.useWay = this.add1.useWay
          data.start_time = this.add1.start_time
          data.end_time = this.add1.end_time
          data.percent = this.add1.percent
          data.issus_type = this.add1.issus_type
          data.isTeam = this.add1.isTeam
          data.issus_obj = this.add1.issus_obj
          data.remark = this.add1.remark
          // data.userId=localStorage.getItem('userId')
          data.dealer = localStorage.getItem('dealer')
        }
      } else {
        if (this.add1.sub != "") {
          // data.num=this.add1.num
          data.sid = valuePark;
          data.ticketType = this.add1.ticketType;
          data.useWay = this.add1.useWay;
          data.start_time = this.add1.start_time;
          data.end_time = this.add1.end_time;
          data.sub = this.add1.sub;
          data.issus_type = this.add1.issus_type;
          data.isTeam = this.add1.isTeam;
          data.issus_obj = this.add1.issus_obj;
          data.remark = this.add1.remark;
          // data.userId=localStorage.getItem('userId')
          data.dealer = localStorage.getItem("dealer");
        }
        if (this.add1.percent !== '') {
          data.sid = valuePark
          data.ticketType = this.add1.ticketType
          data.useWay = this.add1.useWay
          data.start_time = this.add1.start_time
          data.end_time = this.add1.end_time
          data.percent = this.add1.percent
          data.issus_type = this.add1.issus_type
          data.isTeam = this.add1.isTeam
          data.issus_obj = this.add1.issus_obj
          data.remark = this.add1.remark
          // data.userId=localStorage.getItem('userId')
          data.dealer = localStorage.getItem('dealer')
        }
      }
      let that = this;
      console.log(data);
      getCardCoupon("/ticketInfoWashCar/bornTicket", data).then(message => {
        console.log(message);
        if (message.data.resCode == 0) {
          that.$message({
            message: "生成成功",
            type: "success"
          });
          that.universal.add1 = false;
          that.searchClick();
        } else {
          that.$message({
            message: "生成失败",
            type: "error"
          });
        }
      });
    },
    isLicensePlate(str) {
      return /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/.test(
        str
      );
    },
    deleteClick(row) {
      console.log(row);
      let that = this;
      this.$confirm("此操作将删除该条数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          getCardCoupon("/ticketInfoWashCar/delById", {
            id: row.id
          }).then(message => {
            if (message.data.resCode == 0) {
              that.searchClick();
              that.$message({
                message: "删除成功",
                type: "success"
              });
            } else {
              that.$message({
                message: "删除失败",
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
    searchClick() {
      let data = {
        page: this.paging.page,
        pageSize: this.paging.pageSize,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer")
      };
      if (this.search.useWay) {
        data.useWay = this.search.useWay;
      }
      if (this.search.use_status) {
        data.use_status = this.search.use_status;
      }
      if (this.search.sid) {
        data.sid = this.search.sid;
      }
      if (this.search.ticketNumber) {
        data.ticketNumber = this.search.ticketNumber;
      }
      if (this.search.ticketType) {
        data.ticketType = this.search.ticketType;
      }
      if (this.search.tel) {
        data.tel = this.search.tel;
      }

      console.log(data);
      let that = this;
      that.tableData = [];
      getCardCoupon("/ticketInfoWashCar/selectAll", data).then(res => {
        console.log(res);
        if (res.data.resCode == 0) {
          for (let i = 0; i < res.data.result.length; i++) {
            // if (res.data.result[i].freeTime == "") {
            //   res.data.result[i].freeTime = "-";
            // } else {
            //   res.data.result[i].freeTime =
            //     res.data.result[i].freeTime + "分钟";
            // }
            if (res.data.result[i].sub === "") {
              res.data.result[i].sub = "-";
            } else {
              res.data.result[i].sub = res.data.result[i].sub + "元";
            }
            // if (res.data.result[i].full === "") {
            //   res.data.result[i].full = "-";
            // } else {
            //   res.data.result[i].full = res.data.result[i].full + "元";
            // }
          }
          that.paging.total = res.data.count;
          that.tableData = res.data.result;
        } else {
          that.tableData = [];
        }
      });
    },
  }
};
</script>

<style scoped="scoped">
.el-input,
.el-select {
  width: 200px;
}
#faultList {
  padding: 20px;
}
/*.textareaWidth{width: 200px;}*/
.spanClass {
  width: 123px !important;
}
.alipay:nth-child(1) {
  width: 49%;
  float: left;
}
.alipay:nth-child(2) {
  width: 51%;
  float: right;
}
.alipays {
  width: 100%;
  display: inline-block;
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
.el-input--small .el-input__inner {
  width: 120px !important;
}
.el-tag {
  color: #fff;
  width: 70px;
  height: 26px;
  line-height: 26px !important;
  padding: 0 0 !important;
}
.el-tag span {
  margin: 0 auto;
}
.select .boxselect {
  float: right;
}
.select .boxselect img {
  vertical-align: middle;
  margin-right: 5px;
}
.select img {
  float: right;
  margin-right: 10px;
  cursor: pointer;
}
.deletecolor {
  background: red;
}
.spanchange {
  width: 250px !important;
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
.el-tag {
  border: none;
}
</style>