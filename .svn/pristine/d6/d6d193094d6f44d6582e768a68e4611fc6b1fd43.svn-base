<template>
  <div id="faultList">
    <div class="header">
      <div class="headerTitle">
        <span>会员开通记录</span>
      </div>
    </div>
    <div class="select">      
      <span>订单号：</span>
      <el-input v-model="search.orderId" clearable placeholder="请输入内容"></el-input>
      <span>姓名：</span>
      <el-input v-model="search.name" clearable placeholder="请输入内容"></el-input>
      <span>手机号：</span>
      <el-input v-model="search.tel" clearable placeholder="请输入内容"></el-input>
      <!-- <span>车牌号：</span>
      <el-input v-model="search.car_number" clearable placeholder="请输入内容"></el-input> -->
      <!-- <span>支付方式：</span>
      <el-select v-model="search.pay_type" placeholder="请选择">
        <el-option>未选择</el-option>
        <el-option
          v-for="item in [
          {label:'2',value:'支付宝支付'},
          {label:'3',value:'微信支付'},
        ]"
          :key="item.label"
          :label="item.value"
          :value="item.label"
        ></el-option>
      </el-select>-->
    </div>
    <!-- <div class="select">
      <span>开始时间：</span>
      <el-date-picker
        v-model="search.start_time"
        type="date"
        placeholder="选择日期"
        value-format="yyyy-MM-dd"
      ></el-date-picker>
      <span>结束时间：</span>
      <el-date-picker
        v-model="search.end_time"
        type="date"
        placeholder="选择日期"
        value-format="yyyy-MM-dd"
      ></el-date-picker>
    </div>-->
    <div class="select">
      <!-- <el-button
        type="success"
        class="oyButton oychange"
        icon="el-icon-plus"
        @click="usage"
        v-show="showchose"
      >添加</el-button> -->
      <el-button type="success" class="oyButton" icon="el-icon-search" @click="searchClick">查询</el-button>
      <!-- <div class="boxselect">
        <img src="../../../static/image/alipay.png"
             alt="">
        <span>支付宝支付</span>
        <img src="../../../static/image/wechat.png"
             alt="">
        <span>微信支付</span>
        <img src="../../../static/image/free.png"
             alt="">
        <span>免费</span>
      </div>-->
    </div>
    <div class="Content">
      <el-table class="oyTable" :data="tableData" style="width: 100%">
        <el-table-column type="index" :index="indexMethod" label="序号" width="50"></el-table-column>
        <el-table-column label="订单编号">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.orderId }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.orderId }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

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

        <el-table-column label="电话">
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
        <el-table-column label="金额" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.money }}元</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.money }}元</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="会员类型" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.type }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.type }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="有效期开始时间">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.start_time }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.start_time }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="有效期结束时间">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.end_time }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.end_time }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="支付方式" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.pay_type }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.pay_type }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
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
            <!-- <el-tooltip class="item" effect="dark" content="修改" placement="top">
              <i class="icon-change el-icon-edit" @click="changeShow(scope.row)"></i>
            </el-tooltip> -->

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

            <span class="spanClassT">
              <span class="aKey">*</span>车牌号：
            </span>
            <el-input :disabled="false" v-model="add.car_number" clearable placeholder="请输入内容"></el-input>
            <br />
            <br />

            <span class="spanClassT">
              <span class="aKey">*</span>订单号：
            </span>
            <el-input :disabled="false" v-model="add.orderId" clearable placeholder="请输入内容"></el-input>
            <br />
            <br />

            <span class="spanClassT">
              <span class="aKey">*</span>会员类型：
            </span>
            <el-select v-model="add.type" placeholder="请选择" @change="changetype(add.type)">
              <el-option>未选择</el-option>
              <el-option
                v-for="item in existWashingList"
                :key="item.name"
                :label="item.label"
                :value="item.label"
              ></el-option>
            </el-select>
            <br />
            <br />
          </el-col>
          <el-col :span="12">
            <span class="spanClassT">
              <span class="aKey">*</span>金额：
            </span>
            <el-input :disabled="true" v-model="add.money" clearable placeholder="请输入内容"></el-input>
            <br />
            <br />
            <span class="spanClassT">
              <span class="aKey">*</span>支付方式：
            </span>
            <el-select v-model="add.pay_type" placeholder="请选择" @change="changepaytype">
              <el-option>未选择</el-option>
              <el-option
                v-for="item in paytypes1"
                :key="item.value"
                :label="item.type"
                :value="item.type"
              ></el-option>
            </el-select>
            <br />
            <br />
            <span class="spanClassT">
              <span class="aKey">*</span>会员开始时间：
            </span>
            <el-date-picker
              v-model="add.start_time"
              type="datetime"
              value-format="yyyy-MM-dd HH:mm:ss"
              placeholder="选择日期时间"
              @change="handleConfirms"
            ></el-date-picker>
            <br />
            <br />
            <span class="spanClassT">
              <span class="aKey">*</span>会员结束时间：
            </span>
            <el-date-picker
              v-model="add.end_time"
              disabled
              type="datetime"
              value-format="yyyy-MM-dd HH:mm:ss"
              placeholder="选择日期时间"
            ></el-date-picker>
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

            <span class="spanClassT">
              <span class="aKey">*</span>车牌号：
            </span>
            <el-input :disabled="false" v-model="change1.car_number" clearable placeholder="请输入内容"></el-input>
            <br />
            <br />

            <span class="spanClassT">
              <span class="aKey">*</span>订单号：
            </span>
            <el-input :disabled="false" v-model="change1.orderId" clearable placeholder="请输入内容"></el-input>
            <br />
            <br />

            <span class="spanClassT">
              <span class="aKey">*</span>会员类型：
            </span>
            <el-select v-model="change1.type" placeholder="请选择" @change="changetype(change1.type)">
              <el-option>未选择</el-option>
              <el-option
                v-for="item in existWashingList"
                :key="item.name"
                :label="item.label"
                :value="item.label"
              ></el-option>
            </el-select>
            <br />
            <br />
          </el-col>
          <el-col :span="12">
            <span class="spanClassT">
              <span class="aKey">*</span>金额：
            </span>
            <el-input :disabled="false" v-model="change1.money" clearable placeholder="请输入内容"></el-input>
            <br />
            <br />
            <span class="spanClassT">
              <span class="aKey">*</span>支付方式：
            </span>
            <el-select v-model="change1.pay_type" placeholder="请选择" @change="changepaytype">
              <el-option>未选择</el-option>
              <el-option
                v-for="item in paytypes1"
                :key="item.value"
                :label="item.type"
                :value="item.type"
              ></el-option>
            </el-select>
            <br />
            <br />
            <span class="spanClassT">
              <span class="aKey">*</span>会员开始时间：
            </span>
            <el-date-picker
              v-model="change1.start_time"
              type="datetime"
              value-format="yyyy-MM-dd HH:mm:ss"
              placeholder="选择日期时间"
              @change="handleConfirms"
            ></el-date-picker>
            <br />
            <br />
            <span class="spanClassT">
              <span class="aKey">*</span>会员结束时间：
            </span>
            <el-date-picker
              v-model="change1.end_time"
              disabled
              type="datetime"
              value-format="yyyy-MM-dd HH:mm:ss"
              placeholder="选择日期时间"
            ></el-date-picker>
            <br />
            <br />
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
import { mapState } from "vuex";
import {
  getassociatorRecord,
  addassociatorRecord,
  delassociatorRecord,
  exitassociatorRecord,
  getassociatorTypeMoney
} from "../../components/api/api.js";
export default {
  name: "associatorRecord",
  data() {
    return {
      search: {
        name: "",
        orderId: "",
        pay_type: "",
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
        tel: "",
        car_number: "",
        start_time: "",
        end_time: "",
        money: "",
        orderId: "",
        pay_type: "",
        type: "",
        dealer: ""
      },
      options: [
        {
          isOpenSms: "0",
          label: "开通"
        },
        {
          isOpenSms: "1",
          label: "不开通"
        }
      ],

      loading: String,
      // 表格数据
      obj: [],
      numw: [],
      numvalue: [],
      universal: {
        add1: false,
        change1: false
      },
      change1: {
        name: "",
        tel: "",
        car_number: "",
        start_time: "",
        end_time: "",
        money: "",
        orderId: "",
        pay_type: "",
        type: "",
        dealer: ""
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
      showchose: ""
    };
  },
  computed: {
    ...mapState(["existWashingList", "paytypes1"])
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
  },
  methods: {
    changetype(val) {
      console.log(val);
      let that = this;
      let data = {
        name: "",
        dealer: "1561430951496"
      };
      this.existWashingList.find((x, y) => {
        if (x.label == val) {
          data.name = x.name;
          if (this.add.start_time == "") {
          } else {
            let nows = new Date(that.add.start_time);
            if (that.add.type == "月卡") {
              that.add.end_time = that.replatime(that.DateAdd("m", 30, nows));
            } else if (that.add.type == "季卡") {
              that.add.end_time = that.replatime(that.DateAdd("m", 90, nows));
            } else if (that.add.type == "年卡") {
              that.add.end_time = that.replatime(that.DateAdd("m", 365, nows));
            }
          }
          if (this.change1.start_time == "") {
          } else {
            let nows = new Date(that.change1.start_time);
            if (that.change1.type == "月卡") {
              that.change1.end_time = that.replatime(that.DateAdd("m", 30, nows));
            } else if (that.change1.type == "季卡") {
              that.change1.end_time = that.replatime(that.DateAdd("m", 90, nows));
            } else if (that.add.type == "年卡") {
              that.change1.end_time = that.replatime(that.DateAdd("m", 365, nows));
            }
          }
        }
      });
      console.log(data);
      getassociatorTypeMoney(data).then(function(message) {
        console.log(message);
        if (message.data.code == 0) {
          that.add.money = message.data.result.money;
          that.change1.money = message.data.result.money;
        }
      });
    },
    parseTime(date) {
      var seperator1 = "/";
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

      var currentdate =
        date.getFullYear() +
        seperator1 +
        month +
        seperator1 +
        strDate +
        " " +
        strHours +
        seperator2 +
        strMinutes +
        seperator2 +
        "00";
      return currentdate;
    },
    handleConfirms(val) {
      console.log(val);
      let that = this;
      if (val != null) {
        let nows = new Date(val);
        this.existWashingList.find((x, y) => {
          if (x.label == that.add.type) {
            if (that.add.type == "月卡") {
              that.add.end_time = that.replatime(that.DateAdd("m", 30, nows));
            } else if (that.add.type == "季卡") {
              that.add.end_time = that.replatime(that.DateAdd("m", 90, nows));
            } else if (that.add.type == "年卡") {
              that.add.end_time = that.replatime(that.DateAdd("m", 365, nows));
            }
          }
          if (x.label == that.change1.type) {
            if (that.change1.type == "月卡") {
              that.change1.end_time = that.replatime(that.DateAdd("m", 30, nows));
            } else if (that.change1.type == "季卡") {
              that.change1.end_time = that.replatime(that.DateAdd("m", 90, nows));
            } else if (that.change1.type == "年卡") {
              that.change1.end_time = that.replatime(that.DateAdd("m", 365, nows));
            }
          }
        });
      } else {
        this.add.end_time = "";
        this.change1.end_time = "";
      }
      console.log(this.add.end_time);
    },
    addcarnumberinner() {
      let that = this;
      if (
        that.add.name == "" ||
        that.add.tel == "" ||
        that.add.car_number == "" ||
        that.add.money == "" ||
        that.add.orderId == "" ||
        that.add.type == "" ||
        that.add.pay_type == "" ||
        that.add.start_time == "" ||
        that.add.end_time == ""
      ) {
        that.$message.error("带*的数据不能为空哦！");
        return false;
      }
      that.add.dealer = localStorage.getItem("dealer");
      console.log(that.add);
      addassociatorRecord(that.add).then(function(message) {
        if (message.data.code == 0) {
          that.$message({
            message: "添加成功",
            type: "success"
          });
          this.universal.add1 = false;
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
      that.add.tel = "";
      that.add.car_number = "";
      that.add.start_time = "";
      that.add.end_time = "";
      that.add.pay_type = "";
      that.add.type = "";
      that.add.money = "";
      that.add.orderId = "";
    },
    deleteClick(row) {
      let that = this;
      this.$confirm("此操作将永久删除该条数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          delassociatorRecord({ id: row.id }).then(function(message) {
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
    },
    changeClick1() {
      let that = this;
      if (
        that.change1.name == "" ||
        that.change1.tel == "" ||
        that.change1.car_number == "" ||
        that.change1.money == "" ||
        that.change1.orderId == "" ||
        that.change1.type == "" ||
        that.change1.pay_type == "" ||
        that.change1.start_time == "" ||
        that.change1.end_time == ""
      ) {
        that.$message.error("带*的数据不能为空哦！");
        return false;
      }
      delete this.change1.date;
      console.log(this.change1);
      exitassociatorRecord(that.change1).then(function(message) {
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
      if (this.search.orderId) {
        data.orderId = this.search.orderId;
      }
      if (this.search.pay_type) {
        data.pay_type = this.search.pay_type;
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
      getassociatorRecord(data).then(res => {
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
    replatime(val) {
      var time = new Date(val);
      var year = time.getFullYear();
      var month = time.getMonth() + 1;
      var date = time.getDate();
      var hours = time.getHours();
      var minutes = time.getMinutes();
      var seconds = time.getSeconds();
      return (
        year +
        "-" +
        this.add0(month) +
        "-" +
        this.add0(date) +
        " " +
        this.add0(hours) +
        ":" +
        this.add0(minutes) +
        ":" +
        this.add0(seconds)
      );
    },
    add0(val) {
      return val < 10 ? "0" + val : val;
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
    }
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
.select .boxselect {
  float: right;
}
.select .boxselect img {
  vertical-align: middle;
  margin-right: 5px;
}
</style>