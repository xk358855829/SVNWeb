<template>
  <div id="faultList">
    <div class="header">
      <div class="headerTitle">
        <router-link class="router-link-active" to="/pageHome/washRecord" tag="span">洗车记录</router-link>
        <router-link to="/pageHome/staffwashRecord" tag="span">员工洗车记录</router-link>
      </div>
    </div>
    <div class="select">
      <span>站点名称：</span>
      <el-select v-model="search.sid" filterable placeholder="请选择" clearable>
        <el-option>未选择</el-option>
        <el-option v-for="item in parkIist" :key="item.sid" :label="item.sname" :value="item.sid"></el-option>
      </el-select>
      <span>姓名：</span>
      <el-input v-model="search.name" clearable placeholder="请输入内容"></el-input>
      <span>手机号：</span>
      <el-input v-model="search.phone" clearable placeholder="请输入内容"></el-input>
    </div>
    <div class="select">
      <span>车牌号：</span>
      <el-input v-model="search.carNumber" clearable placeholder="请输入内容"></el-input>
      <span>时间段：</span>
      <el-date-picker
        v-model="value2"
        value-format="yyyy-MM-dd"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions">
      </el-date-picker>
    </div>
    <div class="select">
      <el-button type="success" class="oyButton" icon="el-icon-search" @click="searchClick">查询</el-button>
      <el-button type="success" class="oyButton" icon="el-icon-download" @click='export2Excel'>导出</el-button>
    </div>
    <div class="Content">
      <el-table class="oyTable" :data="tableData" style="width: 100%">
        <el-table-column type="index" :index="indexMethod" label="序号" width="100"></el-table-column>

        <el-table-column label="订单号" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.number }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.number }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="站点名称" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ chosesname(scope.row.sid) }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ chosesname(scope.row.sid) }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="姓名" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.name}}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.name}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="手机号" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.phone}}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.phone}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="支付时间" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.cdate | validate}}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.cdate | validate}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="车牌号" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.carNumber}}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.carNumber }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="洗车模式" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.carModel}}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.carModel }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="实付金额/元" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.carAmount}}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.carAmount }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="完成时间" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.endTime }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.endTime }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="是否用券" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.coupon == 1 ? "是" : "否" }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.coupon == 1 ? "是" : "否" }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="是否会员" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.member == 1 ? "是" : "否" }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.member == 1 ? "是" : "否" }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="洗车状态" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth" v-if="scope.row.status == 0">-</p>
              <p class="TsMaxWidth" v-else="">{{ scope.row.washcarStatus == 1 ? "待洗车" : scope.row.washcarStatus == 2 ? "洗车中" : scope.row.washcarStatus == 3 ? "紧急停止" : "洗车完成" }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide" v-if="scope.row.status == 0">-</div>
                <div class="overflowHide" v-else="">{{ scope.row.washcarStatus == 1 ? "待洗车" : scope.row.washcarStatus == 2 ? "洗车中" : scope.row.washcarStatus == 3 ? "紧急停止" : "洗车完成" }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="订单状态" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.status == 1 ? "已支付" : scope.row.status == 0 ? "待支付" : "已退款" }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.status == 1 ? "已支付" : scope.row.status == 0 ? "待支付" : "已退款" }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column prop label="操作" width="150">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-document" @click="seeClick(scope.row)" ></i>
            </el-tooltip>
            <!-- <el-tooltip class="item" effect="dark" content="修改" placement="top">
    						<i class="icon-change el-icon-edit" @click="changeShow(scope.row)" ></i>
            </el-tooltip>-->
            <el-tooltip v-if="scope.row.status != 1 || scope.row.carAmount == 0 || scope.row.refund == -1"
                        class="item"
                        effect="dark"
                        content="退款"
                        placement="top">
              <i class="jilu jilus iconfont icon-tuikuan"></i>
            </el-tooltip>
            <el-tooltip v-else=""
                        class="item"
                        effect="dark"
                        content="退款"
                        placement="top">
              <i class="jilu iconfont icon-tuikuan"
                 @click="tmoenypay(scope.row)"></i>
            </el-tooltip>
            <el-tooltip v-if="scope.row.washcarStatus == 0"
                        class="item"
                        effect="dark"
                        content="结算订单"
                        placement="top">
              <i class="icon-unclick el-icon-service el-tooltip item"></i>
            </el-tooltip>
            <el-tooltip v-else=""
                        class="item"
                        effect="dark"
                        content="结算订单"
                        placement="top">
              <i class="icon-change el-icon-service el-tooltip item"
                 @click="endOrder(scope.row.number)"></i>
            </el-tooltip>
            <!-- <el-tooltip class="item" effect="dark" content="删除" placement="top">
              <i class="icon-delete el-icon-delete" @click="deleteClick(scope.row.number)"></i>
            </el-tooltip> -->
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- <el-dialog title="新增" :visible.sync="universal.add">
      <div class="alipays">
        <div class="alipay">
          <span class="spanClass">停车场编号：</span>
          <el-input :disabled="false" v-model="add.devId" clearable placeholder="请输入内容"></el-input>
          <br />
          <br />
          <span class="spanClass">停车场地址：</span>
          <el-input :disabled="false" v-model="add.fauMode" clearable placeholder="请输入内容"></el-input>
          <br />
          <br />

          <span class="spanClass">停车场类型：</span>
          <el-input :disabled="false" v-model="add.fauCode" clearable placeholder="请输入内容"></el-input>
          <br />
          <br />

          <span class="spanClass">停车场名称：</span>
          <el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input>
          <br />
          <br />

          <span class="spanClass">收款方编号：</span>
          <el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input>
          <br />
          <br />

          <span class="spanClass">高德标识：</span>
          <el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input>
          <br />
          <br />

          <span class="spanClass">客服电话：</span>
          <el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input>
          <br />
          <br />
        </div>
        <div class="alipay">
          <span class="spanClass">支付方式：</span>
          <el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input>
          <br />
          <br />

          <span class="spanClass">收费说明：</span>
          <el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input>
          <br />
          <br />
          <span class="spanClass">停车单价：</span>
          <el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input>
          <br />
          <br />

          <span class="spanClass">超时时间：</span>
          <el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input>
          <br />
          <br />

          <span class="spanClass">免费时长：</span>
          <el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input>
          <br />
          <br />

          <span class="spanClass">最高时长：</span>
          <el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input>
          <br />
          <br />

          <span class="spanClass">最高收费：</span>
          <el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input>
          <br />
          <br />
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="success" class="oyButton" @click="universal.add = false">取消</el-button>
        <el-button type="success" class="oyButton" @click="addClick">添加</el-button>
      </div>
    </el-dialog> -->
    <el-dialog title="查看" :visible.sync="universal.look">
      <div class="letg">
        <el-row>
          <el-col :span="12">
            <div class="grid-content">订单号码：</div>
            {{look.number}}
          </el-col>
          <el-col :span="12">
            <div class="grid-content">站点名称：</div>
            {{chosesname(look.sid)}}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">姓名：</div>
            {{look.name}}
          </el-col>
          <el-col :span="12">
            <div class="grid-content">支付时间：</div>
            {{look.cdate }}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">手机号：</div>
            {{look.phone}}
          </el-col>
          <el-col :span="12">
            <div class="grid-content">洗车模式：</div>
            {{look.carModel}}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">车牌号：</div>
            <div>{{look.carNumber}}</div>
          </el-col>          
          <el-col :span="12">
            <div class="grid-content">开始时间：</div>
            {{ look.startTime == '' ? '-' : look.startTime }}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">支付金额：</div>
            <div>{{look.carMoney}}元</div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">完成时间：</div>
            {{ look.endTime }}
          </el-col>
          
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">是否用券：</div>
            <div>{{look.coupon == 1 ? "是" : "否"}}</div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">是否会员：</div>
            {{look.member == 1 ? "是" : "否"}}
          </el-col>                    
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">洗车状态：</div>
            <div v-if="look.status == 0">-</div>
            <div v-else="">{{look.washcarStatus == 1 ? "待洗车" : look.washcarStatus == 2 ? "洗车中" : look.washcarStatus == 3 ? "紧急停止" : "洗车完成"}}</div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">订单状态：</div>
            <div>{{look.status == 1 ? "已支付" : look.status == 0 ? "待支付" : "已退款"}}</div>            
          </el-col>          
        </el-row>
        <el-row>
            <div class="grid-content longsieze">车牌识别图：</div>
            <img :src="look.imageUrl" alt="" style="width:200px;" preview >
        </el-row>
      </div>
    </el-dialog>
    <el-dialog title="退款"
               :visible.sync="universal.change">
      <el-row>
        <el-col :span="12">
          <span class="spanClass">订单号：</span>
          <el-input :disabled="true"
                    v-model="change.orderId"
                    clearable
                    placeholder="请输入内容"></el-input><br /><br />

          <span class="spanClass">支付类型：</span>
          <el-input :disabled="true"
                    v-model="change.refundType"
                    clearable
                    placeholder="请输入内容"></el-input><br /><br />

          <span class="spanClass">店铺名称：</span>
          <el-input :disabled="true"
                    v-model="change.shopName"
                    clearable
                    placeholder="请输入内容"></el-input><br /><br />

          <span class="spanClass">实付金额：</span>
          <el-input :disabled="true"
                    v-model="change.totalFee"
                    clearable
                    placeholder="请输入内容"></el-input> 元<br /><br />
        </el-col>
        <el-col :span="12">
          <span class="spanClass"><span class="aKey">*</span>退款金额：</span>
          <el-input :disabled="false"
                    v-model="change.refundFee"
                    clearable
                    placeholder="请输入内容"></el-input> 元<br /><br />

          <span class="spanClass"><span class="aKey">*</span>退款理由：</span>
          <el-input class="textareaWidth"
                    type="textarea"
                    :rows="5"
                    v-model="change.refundReason"
                    clearable
                    placeholder="请输入内容"></el-input><br /><br />
        </el-col>
      </el-row>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="universal.change = false">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="paychange">确认</el-button>
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
import { mapActions, mapState, mapGetters } from "vuex";
import { getwashRecord, washRecordinfo,getsiteList,getwashRecordList } from "../../components/api/api.js";
export default {
  name: "washRecord",
  data() {
    return {
      paging: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      tableData: [],
      search: {
        sid: "",
        name:"",
        carNumber:"",
        phone: ""
      },
      parkIist: [],
      universal: {
        look: false,
        change:false,
      },
      look: {},
      change: {
        orderId: '',
        refundFee: '',
        refundReason: '',
        refundType: 2,
        userId: '',
        dealer: '',
        shopName: '',
        totalFee: '',
        type: 2,
      },
      listorder: [],
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      value2: ''
    };
  },
  mounted: function() {
    document.title = this.$route.meta.title;
    this.searchClick();
    let data = {
      page: 1,
      pageSize: 10,
      userId: localStorage.getItem("userId"),
      dealer: localStorage.getItem("dealer")
    };
    this.getwashsiteList();
  },
  computed: {

  },
  methods: {
    getwashsiteList () {
      let params = {
        page: 1,
        pageSize: 500,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer")
      };
      getsiteList(params).then(message => {
        console.log(message);
        if(message.data.result.length > 0){
          for(var i = 0;i < message.data.result.length;i++){
            let list = {
              sid:message.data.result[i].sid,
              sname:message.data.result[i].sname
            };
            this.parkIist.push(list);
          }
          console.log(this.parkIist);
        }else{
          this.parkIist = [];
        }
      });
    },
    chosesname (val) {
      this.parkIist.forEach((a, index) => {
        if (a.sid == val) {
          val = a.sname
        }
      })
      return val
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
    seeClick(row){
      let that = this;
      this.universal.look = true;
      washRecordinfo({crid:row.crid}).then(message => {
        console.log(message);
        if(message.data.resCode == 0){
          that.look = message.data.result;
          that.look.cdate = that.validate(that.look.cdate);
          that.look.startTime = (that.look.startTime).substring(0,(that.look.startTime).length-2);
        }
      });
    },
    deleteClick(number) {
      console.log(number);
      let that = this;
      this.$confirm("此操作将永久删除该条数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          axios({
            method: "post",
            url:that.$store.state.wash_test_url + "/parkingCarRecerd/deleteByNumber",
            data:Qs.stringify({number:number})
          }).then(function(message) {
            console.log(message.data);
            if (message.data.resCode == 0) {
              that.$message({
                message: "删除成功",
                type: "success"
              });
              that.searchClick();
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
    endOrder(number) {
      console.log(number);
      let that = this;
      this.$confirm("是否结算订单?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          axios({
            method: "post",
            url:that.$store.state.wash_test_url + "/parkingCarRecerd/selectByOrderUpdate",
            data:Qs.stringify({number:number})
          }).then(function(message) {
            console.log(message.data);
            if (message.data.resCode == 0) {
              that.$message({
                message: "结算成功",
                type: "success"
              });
              that.searchClick();
            } else {
              that.$message({
                message: "结算失败",
                type: "error"
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消结算订单"
          });
        });
    },
    searchClick() {
      console.log(this.value2);
      let that = this;
      let data = {};
      let search = {};
      data.page = this.paging.page;
      data.pageSize = this.paging.pageSize;
      data.userId = localStorage.getItem("userId");
      data.dealer = localStorage.getItem("dealer");
      search.page = this.paging.page;
      search.pageSize = this.paging.pageSize;
      search.userId = localStorage.getItem("userId");
      search.dealer = localStorage.getItem("dealer");
      if (this.search.sid) {
        data.sid = this.search.sid;
      }
      if (this.search.name) {
        data.name = this.search.name;
      }
      if (this.search.phone) {
        data.phone = this.search.phone;
      }
      if (this.search.carNumber) {
        data.carNumber = this.search.carNumber;
      } 
      if (this.value2){
        data.startsTime = this.value2[0];
        data.endTime = this.value2[1];
      }
      // if(this.search.name || this.search.carNumber){
      //   // search.sid = this.search.sid;
      //   // search.name = this.search.name;
      //   // search.carNumber = this.search.carNumber;
      //   getwashRecord(search).then(function(message) {
      //     console.log(message.data);
      //     if (message.data.resCode == 0) {
      //       that.tableData = message.data.result;
      //       that.paging.total = message.data.result.length;
      //     } else {
      //       that.tableData = [];
      //       that.paging.total = 0;
      //     }
      //   });
      // }else{
        getwashRecord(data).then(function(message) {
          console.log(message.data);
          if (message.data.resCode == 0) {
            that.tableData = message.data.result;
            that.paging.total = message.data.count;
          } else {
            that.tableData = [];
            that.paging.total = 0;
          }
        });
      // }                 
    },
    tmoenypay (row) {
      console.log(row)
      this.change.orderId = row.number;
      this.change.shopName = this.chosesname(row.sid);
      this.change.totalFee = row.carAmount;      
      this.change.refundFee = "";
      this.change.refundReason = "";
      this.change.userId = sessionStorage.getItem("userAlias");
      this.change.dealer = localStorage.getItem("dealer");
      if(this.change.refundType = 2){
        this.change.refundType = "微信支付"
      }
      this.universal.change = true;
    },
    paychange () {
      if (this.change.refundFee == "" || this.change.refundReason == "" || this.change.refundFee == 0) {
        this.$message.error('退款金额和理由不能为空');
        return false;
      }
      if (isNaN(this.change.refundFee)) {
        this.$message.error('退款金额为数字');
        return false;
      }
      if (this.change.refundFee > this.change.totalFee) {
        this.$message.error('退款金额不能大于总金额');
        return false;
      }
      if (this.change.refundType == '微信支付') {
        this.change.refundType = 2;
      } else if (this.change.refundType == '支付宝支付') {
        this.change.refundType = 1;
      } else if (this.change.refundType == '现金支付'){
        this.change.refundType = 3;
      }
      console.log(this.change);
      let that = this;
      axios({
        method: 'post',
        url: that.$store.state.wash_url + '/refundpayWashcar/exRefund',
        data: Qs.stringify(that.change)
      }).then(function (message) {
        console.log(message)
        if (message.data.resCode == 0) {          
          that.$message({
            message: '退款成功',
            type: 'success'
          });
          that.searchClick();
        } else if (message.data.resCode == 1) {
          that.$message({
            message: message.data.result,
            type: 'error'
          });
        } else {
          that.$message({
            message: '退款失败',
            type: 'error'
          });
        }
        that.universal.change = false;
      })      
    },
    export2Excel () {
      let that = this;
      let dataA = {
        page: 1,
        pageSize: this.paging.total,
        userId: localStorage.getItem('userId'),
        dealer: localStorage.getItem('dealer')
      };
      if (this.search.sid) {
        dataA.sid = this.search.sid;
      }
      if (this.search.name) {
        dataA.name = this.search.name;
      }
      if (this.search.phone) {
        dataA.phone = this.search.phone;
      }
      if (this.search.carNumber) {
        dataA.carNumber = this.search.carNumber;
      } 
      if (this.value2){
        dataA.startsTime = this.value2[0];
        dataA.endTime = this.value2[1];
      }
      getwashRecord(dataA).then(function (message) {
        console.log(message.data)
        let length = message.data.result.length;
        if (message.data.resCode == 0) {
          for(var j=length-1;j>=0;j--){
            if(message.data.result[j].status==0){
              message.data.result.splice(j,1);
              // j--;
            }
          }
          let length1 = message.data.result.length;
          for (var i = 0; i < length1; i++) {
            message.data.result[i].sid = that.chosesname(message.data.result[i].sid);
            message.data.result[i].cdate = that.common.timeToDate(JSON.stringify(message.data.result[i].cdate.time).slice(0, 10));
            if(message.data.result[i].coupon==0){
              message.data.result[i].coupon = '否'
            }else{
              message.data.result[i].coupon = '是'
            }
            if(message.data.result[i].member==0){
              message.data.result[i].member = '否'
            }else{
              message.data.result[i].member = '是'
              message.data.result[i].carAmount = message.data.result[i].carMoney;
            }            
            if(message.data.result[i].status==1){
              message.data.result[i].status = '已支付'
            }else{
              message.data.result[i].status = '已退款'
            }
            if(message.data.result[i].status!=0){
              if(message.data.result[i].washcarStatus==1){
                message.data.result[i].washcarStatus = '待洗车'
              }else if(message.data.result[i].washcarStatus==2){
                message.data.result[i].washcarStatus = '洗车中'
              }else if(message.data.result[i].washcarStatus==3){
                message.data.result[i].washcarStatus = '紧急停止'
              }else{
                message.data.result[i].washcarStatus = '洗车完成'
              }
            }
          }
          that.listorder = message.data.result
          console.log(that.listorder)
          require.ensure([], () => {
            const { export_json_to_excel } = require('../../excel/Export2Excel');
            const tHeader = ['订单号', '站点名称', '姓名', '手机号', '车牌号', '支付时间','洗车模式','实付金额/元','是否用券','是否会员','洗车状态','订单状态'];
            const filterVal = ['number', 'sid', 'name', 'phone', 'carNumber', 'cdate', 'carModel', 'carAmount', 'coupon', 'member', 'washcarStatus', 'status'];
            const list = that.listorder;
            const data = that.formatJson(filterVal, list);
            export_json_to_excel(tHeader, data, '洗车记录');
          })
        }
      })
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    },
    validate(val){
      let value = JSON.stringify(val.time).slice(0,10);
      var d = new Date(value * 1000);
      var year = d.getFullYear();
      var month = d.getMonth() + 1;
      var date = d.getDate();
      var hour = d.getHours();
      var minute = d.getMinutes();
      var second = d.getSeconds();
      return (
        year +
        "-" +
        this.add(month) +
        "-" +
        this.add(date) +
        " " +
        this.add(hour) +
        ":" +
        this.add(minute) +
        ":" +
        this.add(second)
      );
    },
    add(m) {
      return m < 10 ? "0" + m : m;
    }
  }
};
</script>

<style scoped="scoped">
.headerTitle>span{
  border-bottom: 5px solid transparent;
  margin-right: 20px;
}
.headerTitle>span.router-link-active{
  border-bottom: 5px solid #a2cc6d;
}
.headerTitle>span:hover{
  color: #a2cc6d;
  cursor: pointer;
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
.longsieze {
  width: 15%;
}
.select .boxselect {
  float: right;
}
.select .boxselect img {
  vertical-align: middle;
  margin-right: 5px;
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
</style>