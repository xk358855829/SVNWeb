<template>
  <div id="orderList">
    <div class="header">
      <div class="headerTitle">
        <span>订单管理</span>
      </div>
    </div>
    <div class="select">
      <span>订单号：</span>
      <el-input v-model="search.number"
                clearable
                placeholder="请输入内容"></el-input>

      <span>手机号：</span>
      <el-input v-model="search.phone"
                clearable
                placeholder="请输入内容"></el-input>
    </div>
    <div class="select">
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-search"
                 @click="handleSearchClick">查询</el-button>
    </div>
    <div class="Content">
      <el-table class="oyTable"
                :data="orderList"
                style="width: 100%">
        <el-table-column type="index"
                         :index="indexMethod"
                         label="序号"
                         width="100"></el-table-column>
        <el-table-column label="订单号">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.orderId === '' ? '无': scope.row.orderId }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.orderId === '' ? '无': scope.row.orderId }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="用户姓名">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.userName }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.userName }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="手机号码">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.phone }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.phone }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="车牌号">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.carId }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.carId }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="停车地址">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.carAddress }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.carAddress }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作"
                         width="150">
          <template slot-scope="scope">
            <el-tooltip class="item"
                        effect="dark"
                        content="查看详情"
                        placement="top">
              <i class="icon-See el-icon-search"
                 @click="handleLookOrderInfo(scope.row)"></i>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="详细信息"
               :visible.sync="showOrderDetail"
               class="changediv">
      <el-row>
        <el-col :span="12">
          <div class="grid-content">用户名:</div>
          {{ orderInfo.userName }}
        </el-col>
        <el-col :span="12">
          <div class="grid-content">清洗模式:</div>
          {{ orderInfo.washMod }}
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content">车牌号:</div>
          {{ orderInfo.carId }}
        </el-col>
        <el-col :span="12">
          <div class="grid-content">钥匙柜编号:</div>
          {{ orderInfo.devId }}
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content">钥匙地址:</div>
          {{ orderInfo.keyAddress }}
        </el-col>
        <el-col :span="12">
          <div class="grid-content">订单金额:</div>
          {{ orderInfo.money }}
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content">订单编号:</div>
          {{ orderInfo.orderId }}
        </el-col>
        <el-col :span="12">
          <div class="grid-content">柜门密码:</div>
          {{ orderInfo.password }}
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content">联系电话:</div>
          {{ orderInfo.phone }}
        </el-col>
        <el-col :span="12">
          <div class="grid-content">停车地址:</div>
          {{ orderInfo.carAddress }}
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content">状态:</div>
          {{ orderInfo.state }}
        </el-col>
        <el-col :span="12">
          <div class="grid-content">柜门编号:</div>
          {{ orderInfo.typeId }}
        </el-col>
      </el-row>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   @click="showOrderDetail = false">关闭</el-button>
      </div>
    </el-dialog>
    <div class="footer">
      <el-pagination background
                     @current-change="handleCurrentChange"
                     @size-change="handleSizeChange"
                     :current-page.sync="paging.page"
                     :page-sizes="[1,2,3,10,11,12]"
                     :page-size="paging.pageSize"
                     layout="sizes, prev, pager, next, jumper,total"
                     :total="taobao"></el-pagination>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      taobao: state => state.taobao
    }),
    ...mapGetters({
      orderList: "getOrderList",
      orderInfo: "getOrderInfo"
    })
  },
  data () {
    return {
      paging: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      showOrderDetail: false,
      search: {
        number: "",
        phone: ""
      }
    };
  },
  mounted () {
    console.log(this.$store.state.taobao)
  },
  created () {
    this.initOrderList();
    this.handleSearchClick()
  },
  methods: {
    ...mapActions(["initOrderList", "initOrderInfo", "searchOrderList"]),
    indexMethod (index) {
      return index + (this.paging.page - 1) * this.paging.pageSize + 1;
    },
    handleLookOrderInfo (row) {
      this.showOrderDetail = true;
      this.initOrderInfo({
        number: row.orderId
      });
    },
    handleSizeChange (val) {
      this.paging.pageSize = val;
      this.handleSearchClick()
    },
    handleCurrentChange (val) {
      this.paging.page = val;
      this.handleSearchClick()
    },
    handleSearchClick () {
      let params = {
        dealer: localStorage.getItem("dealer"),
        userId: localStorage.getItem("userId"),
        Page: this.paging.page,
        PageSize: this.paging.pageSize
      }
      if (this.search.number) {
        params.number = this.search.number
      }
      if (this.search.phone) {
        params.phone = this.search.phone
      }
      this.searchOrderList(params);
    }
  }
};
</script>
<style lang="scss" scoped>
#orderList {
  padding: 20px;
}
.el-col-12 {
  line-height: 24px;
}
.grid-content {
  width: 30%;
  float: left;
  text-align: right;
  margin-right: 10px;
}
.el-input__inner,
.el-input {
  width: 200px !important;
}
</style>

