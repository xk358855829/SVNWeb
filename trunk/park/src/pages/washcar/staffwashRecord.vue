<template>
  <div id="faultList">
    <div class="header">
      <div class="headerTitle">
        <router-link to="/pageHome/washRecord" tag="span">洗车记录</router-link>
        <router-link class="router-link-active" to="/pageHome/staffwashRecord" tag="span">员工洗车记录</router-link>
      </div>
    </div>
    <div class="select">
      <!-- <span>店铺名称：</span>
      <el-select v-model="search.carShopId" filterable placeholder="请选择" clearable>
        <el-option>未选择</el-option>
        <el-option v-for="item in shopList" :key="item.id" :label="item.shopName" :value="item.id"></el-option>
      </el-select> -->
      <span>订单号：</span>
      <el-input v-model="search.orderId" clearable placeholder="请输入内容"></el-input>
      <span>姓名：</span>
      <el-input v-model="search.relName" clearable placeholder="请输入内容"></el-input>
      <span>手机号：</span>
      <el-input v-model="search.tel" clearable placeholder="请输入内容"></el-input>      
    </div>
    <div class="select">
      <span>车牌号：</span>
      <el-input v-model="search.carNumber" clearable placeholder="请输入内容"></el-input>
    </div>
    <div class="select">
      <el-button type="success" class="oyButton" icon="el-icon-search" @click="searchClick">查询</el-button>
    </div>
    <div class="Content">
      <el-table class="oyTable" :data="tableData" style="width: 100%">
        <el-table-column type="index" :index="indexMethod" label="序号" width="100"></el-table-column>

        <el-table-column label="订单号" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.orderId }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.orderId }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <!-- <el-table-column label="站点名称" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ chosesname(scope.row.carShopId) }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ chosesname(scope.row.carShopId) }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column> -->
        <el-table-column label="店铺名称" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.shopName}}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.shopName}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="姓名" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.relName}}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.relName}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="手机号" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.tel}}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.tel}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="员工类型" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ chosestafftype(scope.row.typePerson) }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ chosestafftype(scope.row.typePerson) }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="车牌号" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.carNumber}}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.carNumber}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="洗车模式" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.typeWashCar == 1 ? "精洗" : "普洗" }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.typeWashCar == 1 ? "精洗" : "普洗" }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <!-- <el-table-column label="openId" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.openid}}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.openid }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column> -->

        <!-- <el-table-column label="应付金额" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.price}}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.price }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column> -->

        <el-table-column label="实付金额" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.paidPrice}}元</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.paidPrice }}元</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <!-- <el-table-column label="优惠金额" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.onsale_price }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.onsale_price }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column> -->
        <el-table-column label="支付类型" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.payType == 1 ? "微信" : scope.row.payType == 2 ? "微信 + 券" : "会员卡" }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.payType == 1 ? "微信" : scope.row.payType == 2 ? "微信 + 券" : "会员卡" }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="券码" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.ticketNumber }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.ticketNumber }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="洗车状态" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.washcarStatus == 1 ? "待洗车" : scope.row.washcarStatus == 2 ? "洗车中" : scope.row.washcarStatus == 3 ? "紧急停止" : "洗车完成" }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.washcarStatus == 1 ? "待洗车" : scope.row.washcarStatus == 2 ? "洗车中" : scope.row.washcarStatus == 3 ? "紧急停止" : "洗车完成" }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="订单状态" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.orderStatus == 1 ? "待支付" : scope.row.orderStatus == 0 ? "已支付" : "已退款" }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.orderStatus == 1 ? "待支付" : scope.row.orderStatus == 0 ? "已支付" : "已退款" }}</div>
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
            <el-tooltip v-if="scope.row.orderStatus != 0 || scope.row.paidPrice == 0"
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
                 @click="endOrder(scope.row.id)"></i>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="删除" placement="top">
              <i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
            </el-tooltip>
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
            {{look.orderId}}
          </el-col>
         <el-col :span="12">
            <div class="grid-content">店铺名称：</div>
            {{look.shopName}}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">姓名：</div>
            {{chosestafftype(look.relName)}}
          </el-col>
          <el-col :span="12">
            <div class="grid-content">手机号：</div>
            {{look.tel}}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">员工类型：</div>
            {{chosestafftype(look.typePerson)}}
          </el-col>
          <el-col :span="12">
            <div class="grid-content">车牌号：</div>
            {{look.carNumber}}
          </el-col>         
        </el-row>
        <el-row>     
          <el-col :span="12">
            <div class="grid-content">洗车模式：</div>
            {{look.typeWashCar == 1 ? "精洗" : "普洗"}}
          </el-col>      
          <el-col :span="12">
            <div class="grid-content">支付类型：</div>
            {{ look.payType == 1 ? "微信" : look.payType == 2 ? "微信 + 券" : "会员卡"}}
          </el-col>          
        </el-row>
        <el-row>          
          <el-col :span="12">
            <div class="grid-content">券码：</div>
            <div>{{look.ticketNumber}}</div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">应付金额：</div>
            <div>{{look.price}}元</div>
          </el-col>          
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">优惠金额：</div>
            <div>{{look.onsalePrice}}元</div>            
          </el-col>
          <el-col :span="12">
            <div class="grid-content">实付金额：</div>
            <div>{{look.paidPrice}}元</div>            
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">洗车状态：</div>
            <div>{{look.washcarStatus == 1 ? "待洗车" : look.washcarStatus == 2 ? "洗车中" : look.washcarStatus == 3 ? "紧急停止" : "洗车完成"}}</div>            
          </el-col>
          <el-col :span="12">
            <div class="grid-content">订单状态：</div>
            <div>{{look.orderStatus == 1 ? "待支付" : look.orderStatus == 0 ? "已支付" : "已退款"}}</div>            
          </el-col>
        </el-row>
        <!-- <el-row>
          <el-col :span="24">
            <div class="grid-content" style="width:15%;">openId：</div>
            <div>{{look.openid}}</div>
          </el-col> 
        </el-row> -->
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
import { getstaffwashRecordList, delstaffwashRecord,getsiteList,getwashRecordList,getstoreList } from "../../components/api/api.js";
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
      gameNum:[],
      search: {
        carShopId:"",
        relName:"",
        orderId:"",
        tel:"",
        carNumber:""
      },
      parkIist: [],
      shopList:[],
      universal: {
        look: false,
        change: false,
      },
      look: {},
      stafftype:[
        {
          typePerson:0,
          label:"不是员工"
        },
        {
          typePerson:1,
          label:"销售员"
        },
        {
          typePerson:2,
          label:"售后员"
        },
        {
          typePerson:3,
          label:"其他员工"
        },
      ],
      change: {
        orderId: '',
        refundFee: '',
        refundReason: '',
        refundType: 2,
        userId: '',
        dealer: '',
        shopName: '',
        totalFee: '',
        type: 1,
      }
    };
  },
  mounted: function() {
    document.title = this.$route.meta.title;
    this.searchClick();
    this.getwashsiteList();
    this.getshopList();
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
    getshopList() {
      let that = this;
      let params = {
        page: 1,
        pageSize: 500,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer")
      };
      getstoreList(params).then(message => {
        console.log(message);
        if (message.data.count > 0) {
          for (var i = 0; i < message.data.count; i++) {
            let list = {
              id: message.data.result[i].id,
              shopName: message.data.result[i].shopName
            };
            that.shopList.push(list);
          }
          console.log(that.shopList);
        } else {
          that.shopList = [];
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
    chosestafftype(val){
      this.stafftype.forEach((a,index) => {
        if(a.typePerson == val){
          val = a.label;
        }
      })
      return val;
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
      this.universal.look = true;
      Object.assign(this.look, row);
    },
    endOrder(id) {
      console.log(id);
      let that = this;
      this.$confirm("是否结算订单?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          axios({
            method: "post",
            url:that.$store.state.wash_url + "/carShopWashRecords/exWashStatus",
            data:Qs.stringify({id:id})
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
    deleteClick(row) {
      console.log(row);
      let that = this;
      this.$confirm("此操作将永久删除该条数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          delstaffwashRecord({id:row.id}).then(function(message) {
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
    searchClick() {
      let that = this;
      let data = {
        page : this.paging.page,
        pageSize : this.paging.pageSize,
        userId : localStorage.getItem("userId"),
        dealer : localStorage.getItem("dealer")
      };
      // if (this.search.carShopId) {
      //   data.carShopId = this.search.carShopId;
      // }
      if (this.search.orderId) {
        data.orderId = this.search.orderId;
      }
      if (this.search.relName) {
        data.relName = this.search.relName;
      }    
      if (this.search.tel) {
        data.tel = this.search.tel;
      }
      if (this.search.carNumber){
        data.carNumber = this.search.carNumber;
      }
      that.tableData = [];   
      getstaffwashRecordList(data).then(function(message) {
        console.log(message.data);
        if (message.data.resCode == 0) {
          that.gameNum = message.data.result;
          that.paging.total = message.data.count;
          for (var j = that.paging.pageSize * (that.paging.page - 1);j < that.paging.pageSize * that.paging.page;j++) {
            // pagesize是当前页面要显示总条数，例如：每页显示20条；currentPage是当前页面数;
            // this.gameNum是总数据  
            if (that.gameNum[j]) {
              that.tableData.push(that.gameNum[j])
            }
          }
          console.log(that.gameNum);
          console.log(that.tableData);                    
        } else {
          that.tableData = [];
          that.paging.total = 0;
        }
      });                 
    },
    tmoenypay (row) {
      console.log(row)
      this.change.orderId = row.orderId;
      this.change.shopName = row.shopName;
      this.change.totalFee = row.paidPrice;      
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
    validate(val){
      let value = JSON.stringify(val.time).slice(0, 10);
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