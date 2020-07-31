<template>
  <div id="faultList">
    <div class="header">
      <div class="headerTitle">
        <span>退款记录</span>
      </div>
    </div>
    <div class="select">
      <!-- <span>退款类型：</span>
      <el-select v-model="search.refundType"
                 placeholder="请选择" clearable>
        <el-option>未选择</el-option>
        <el-option v-for="item in this.$store.state.paytypes2"
                   :key="item.value"
                   :label="item.type"
                   :value="item.value"></el-option>
      </el-select> -->
      <span>订单流水号：</span>
      <el-input v-model="search.orderId"
                clearable
                placeholder="请输入内容"></el-input>

      <!-- <el-tooltip placement="top">
        <div slot="content">输入订单流水号可查询当前退款状态</div>
        <img style="vertical-align: middle"
             src="../../../static/image/ming.png"
             alt="">
      </el-tooltip> -->
    </div>
    <div class="select">
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-search"
                 @click='searchClick'>查询</el-button>
      <div class="boxselect">
        <img src="../../../static/image/alipay.png"
             alt="">
        <span>支付宝支付</span>
        <img src="../../../static/image/wechat.png"
             alt="">
        <span>微信支付</span>
        <img src="../../../static/image/cash.png"
             alt="">
        <span>现金支付</span>
        <!-- <img src="../../../static/image/noninductive.png"
             alt="">
        <span>无感支付</span>
        <img src="../../../static/image/free.png"
             alt="">
        <span>免费</span> -->
      </div>
    </div>
    <div class="Content">
      <el-table class='oyTable'
                :data="tableData"
                style="width: 100%">
        <el-table-column type="index"
                         :index="indexMethod"
                         label="序号"
                         width="100"> </el-table-column>
        <el-table-column label="店铺名称"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.shopName }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.shopName }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="订单流水号"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.orderId }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.orderId }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="退款流水号"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.refundId}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.refundId }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="退款金额"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.refundFee}}元</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.refundFee }}元</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="退款理由"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.refundReason}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.refundReason }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="退款时间"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.date | validate }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.date | validate }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="退款类型"
                         width="">
          <template slot-scope="scope">
            <!-- <el-popover> -->
              <!-- <p  class="TsMaxWidth">{{ scope.row.refund_type}}</p> -->
              <div slot="reference"
                   class="name-wrapper">
                <!-- <div class="overflowHide">{{ scope.row.refund_type }}</div> -->
                <div>
                  <img v-if="scope.row.refundType==1"
                       src="../../../static/image/alipay.png"
                       alt="">
                  <img v-if="scope.row.refundType==2"
                       src="../../../static/image/wechat.png"
                       alt="">
                  <img v-if="scope.row.refundType==3"
                       src="../../../static/image/noninductive.png"
                       alt="">
                </div>
              </div>
            <!-- </el-popover> -->
          </template>
        </el-table-column>
        <el-table-column label="经手人"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.userId }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.userId }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column prop=""
                         label="操作"
                         width='150'>
          <template slot-scope="scope">
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
    <div class="footer">
      <el-pagination background
                     @current-change="handleCurrentChange"
                     @size-change="handleSizeChange"
                     :current-page.sync="paging.page"
                     :page-sizes="[10,15,20]"
                     :page-size="paging.pageSize"
                     layout="sizes, prev, pager, next, jumper,total"
                     :total="paging.total"></el-pagination>
    </div>
  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
import { mapActions, mapState,mapGetters } from 'vuex';
import {  } from '../../components/api/api.js';
export default {
  name: 'washRefund',
  data () {
    return {
      paging: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      tableData: [],
      search: {
        refundType: '',
        orderId: '',
      },
    }
  },
  mounted: function () {
    document.title = this.$route.meta.title;
    this.searchClick();
  },
  computed: {

  },
  methods: {
    indexMethod (index) {
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
          url: that.$store.state.wash_url + '/refundpayWashcar/delete',
          data: Qs.stringify({id:row.id})
        }).then(function (message) {
          if (message.data.code == 0) {
            that.$message({
              message: '删除成功',
              type: 'success'
            });
            that.searchClick();
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
    searchClick () {
      let that = this;      
      let data = {
        page: that.paging.page,
        pageSize: that.paging.pageSize,
        userId: localStorage.getItem('userId'),
        dealer: localStorage.getItem('dealer')
      };
      if (that.search.refundType != "") {
        data.refundType = that.search.refundType;
      } 
      if (that.search.orderId != "") {
        data.orderId = that.search.orderId;
      }
      // if (that.search.carNumber) {
      //   data.carNumber = that.search.carNumber
      // }
      console.log(data)
      that.tableData = [];
      axios({
        method: 'post',
        url: this.$store.state.wash_url + '/refundpayWashcar/selectAll',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message.data)
        if (message.data.resCode == 0) {
          that.paging.total = message.data.count;
          that.tableData = message.data.result;
        } else {
          that.tableData = [];
          that.paging.total = 0;
        }
      })
    }
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
</style>