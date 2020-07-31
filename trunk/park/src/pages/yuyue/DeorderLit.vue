<template>
  <div id="deorderlit">
    <div class="header">
      <div class="headerTitle">
        <span>预约订单</span>
      </div>
    </div>
    <div class="select">
      <span>订单号：</span>
      <el-input v-model="search.resId"
                clearable
                placeholder="请输入内容"></el-input>
      <span>手机号：</span>
      <el-input v-model="search.phone"
                clearable
                placeholder="请输入内容"></el-input>
      <!-- <span>车牌号：</span>
      <el-input v-model="search.carNumber"
                clearable
                placeholder="请输入内容"></el-input> -->
    </div>
    <div class="select">
      <!-- <el-button type="success"
                 class="oyButton"
                 icon="el-icon-plus"
                 @click="addDeorderLot = true,showDialog = true,clear()">添加</el-button> -->
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-search"
                 @click="handleSearchClick">查询</el-button>
    </div>
    <div class="Content">
      <el-table class="oyTable"
                :data="deOrderList"
                style="width: 100%">
        <el-table-column type="index"
                         :index="indexMethod"
                         label="序号"
                         width="100"></el-table-column>
        <el-table-column label="订单号">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.resId }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.resId }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="车位锁id">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.devid }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.devid }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="车位锁名称">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.devidName }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.devidName }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="手机号">
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
        <el-table-column label="车牌">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.carNumber}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.carNumber }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="停车场">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.parkingId}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.parkingId}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="停车场名称">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.parkingName}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.parkingName}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="开始时间">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.startTime}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.startTime}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="结束时间">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.endTime}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.endTime}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="金额">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.money}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.money}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="状态"
                         width="100px">
          <template slot-scope="scope">
            <!-- <el-popover> -->
            <div slot="reference"
                 class="name-wrapper tagFont">
              <el-tag color="#5daf34"
                      v-if="scope.row.status==0">预约已完成</el-tag>
              <el-tag color="#f8c541"
                      v-if="scope.row.status==1">已预约</el-tag>
              <el-tag color="#c9521e"
                      v-if="scope.row.status==2">已取消</el-tag>
            </div>
            <!-- </el-popover> -->

          </template>
        </el-table-column>
        <el-table-column label="操作"
                         width="150">
          <template slot-scope="scope">
            <!-- <el-tooltip class="item"
                        effect="dark"
                        content="修改"
                        placement="top">
              <i class="icon-change el-icon-edit"
                 @click="handleEditDeorderlot(scope.row.resId)"></i>
            </el-tooltip> -->
            <!-- <el-tooltip class="item"
                        effect="dark"
                        content="删除"
                        placement="top">
              <i class="icon-delete el-icon-delete"
                 @click="ClickDeleteParkinglot(scope.row.resId)"></i>
            </el-tooltip> -->
            <el-tooltip class="item"
                        v-if="scope.row.status==1"
                        effect="dark"
                        content="结束订单"
                        placement="top">
              <i class="icon-change el-icon-service"
                 @click="cancelDeorderlot(scope.row)"></i>
            </el-tooltip>
            <el-tooltip class="item"
                        v-else=""
                        effect="dark"
                        content="订单已结束"
                        placement="top">
              <i class="icon-unclick el-icon-service"></i>
            </el-tooltip>
            <el-tooltip v-if="scope.row.order_status=='已退款'||scope.row.order_status=='未支付'||scope.row.pay_type==0"
                        class="item"
                        effect="dark"
                        content="退款"
                        placement="top">
              <i class="jilu jilus iconfont icon-tuikuan"></i>
            </el-tooltip>
            <el-tooltip v-else
                        class="item"
                        effect="dark"
                        content="退款"
                        placement="top">
              <i class="jilu iconfont icon-tuikuan"
                 @click="tmoenypay(scope.row)"></i>
              <!-- <span class="icon-See iconfont icon-huiyuan"></span> -->
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="退款"
               :visible.sync="universal.change">
      <el-row>
        <el-col :span="12">
          <span class="spanClass">退款订单号：</span>
          <el-input :disabled="true"
                    v-model="change.resId"
                    clearable
                    placeholder="请输入内容"></el-input><br /><br />

          <span class="spanClass">停车场名称：</span>
          <el-input :disabled="true"
                    v-model="change.parkingName"
                    clearable
                    placeholder="请输入内容"></el-input><br /><br />

          <span class="spanClass">支付金额：</span>
          <el-input :disabled="true"
                    v-model="change.money"
                    clearable
                    placeholder="请输入内容"></el-input><br /><br />
        </el-col>
        <el-col :span="12">
          <span class="spanClass">车牌号码：</span>
          <el-input :disabled="true"
                    v-model="change.carNumber"
                    clearable
                    placeholder="请输入内容"></el-input><br /><br />
          <span class="spanClass">退款金额：</span>
          <el-input :disabled="false"
                    v-model="change.moneys"
                    clearable
                    placeholder="请输入内容"></el-input>元<br /><br />

          <span class="spanClass">退款理由：</span>
          <el-input class="textareaWidth"
                    type="textarea"
                    :rows="5"
                    v-model="change.refund_reason"
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
    <el-dialog :title="addDeorderLot?'新增订单':'修改订单'"
               :visible.sync="showDialog">
      <el-form ref="deorderlot"
               :inline="true"
               :model="deorderlot"
               :rules="rules">
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="订单号:"
                          prop="resId">
              <el-input v-model="deorderlot.resId"
                        disabled="disabled"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="车位锁id:"
                          prop="devid">
              <el-input v-model="deorderlot.devid"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="车位锁名称:"
                          prop="devidName">
              <el-input v-model="deorderlot.devidName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="手机号:"
                          prop="phone">
              <el-input v-model="deorderlot.phone"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="车牌:"
                          prop="devidName">
              <el-input v-model="deorderlot.devidName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="停车场:"
                          prop="phone">
              <el-input v-model="deorderlot.phone"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="车位锁名称:"
                          prop="devidName">
              <el-input v-model="deorderlot.devidName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="手机号:"
                          prop="phone">
              <el-input v-model="deorderlot.phone"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="text-align:right;">
          <el-button @click="showDialog = false">取 消</el-button>
          <el-button type="success"
                     @click="ClickEditDeorderlot('deorderlot')">确 定</el-button>
        </el-row>
      </el-form>
    </el-dialog>

    <div class="footer">
      <el-pagination background
                     @current-change="handleCurrentChange"
                     @size-change="handleSizeChange"
                     :current-page.sync="paging.page"
                     :page-sizes="[1,2,3,10,11,12]"
                     :page-size="paging.pageSize"
                     layout="sizes, prev, pager, next, jumper,total"
                     :total="totals"></el-pagination>
    </div>
  </div>
</template>
<script>
// import { mapActions, mapGetters, mapState } from "vuex";
import { deorderList, cancelDeorder, refunds } from "../../components/api/api";
import * as check from "@/utils/check";
export default {
  name: 'DeorderLit',
  data () {
    return {
      universal: {
        change: false
      },
      change: {
        resId: '',
        parkingName: '',
        money: '',
        carNumber: '',
        moneys: '',
        refund_reason: ''
      },
      addDeorderLot: false,
      showDialog: false,
      search: {
        resId: "",
        phone: "",
        // carNumber: ""
      },
      paging: {
        page: 1,
        pageSize: 10
      },
      totals: '',
      deOrderList: [],
      deorderlot: {
        resId: "",
        devid: "",
        devidName: "",
        phone: ""
      },
    };
  },
  mounted () {
    this.handleSearchClick();
  },
  methods: {
    async paychange () {
      if (!this.change.refund_reason || !this.change.moneys) {
        this.$message.error('退款金额和理由不能为空');
        return false;
      }
      console.log(this.change.refund_reason)
      console.log(this.change.moneys)
      if (isNaN(this.change.moneys)) {
        this.$message.error('退款金额为数字');
        return false;
      }
      if (this.change.moneys > this.change.money) {
        this.$message.error('退款金额不能大于支付金额');
        return false;
      }
      let res = await refunds({
        resId: this.change.resId,
        money: this.change.money,
        moneys: this.change.moneys,
        refund_reason: this.change.refund_reason
      })
      console.log(res)
      if (res.data.resCode == "0") {
        this.$message.success('退款成功');
      } else {
        this.$message.error('退款失败');
      }
      this.universal.change = false

    },
    tmoenypay (val) {
      console.log(val)
      this.universal.change = true
      this.change.resId = val.resId
      this.change.parkingName = val.parkingName
      this.change.money = val.money
      this.change.carNumber = val.carNumber
      this.change.moneys = ''
      this.change.refund_reason = ''
    },
    handleSearchClick () {
      let data = {
        pageSize: this.paging.pageSize,
        page: this.paging.page,
        dealer: localStorage.getItem("dealer"),
        userId: localStorage.getItem("userId")
      }
      if (this.search.resId) {
        data.resId = this.search.resId
      }
      if (this.search.phone) {
        data.phone = this.search.phone
      }
      // if (this.search.carNumber){
      //   data.carNumber = this.search.carNumber
      // }
      let that = this;
      deorderList(data).then(res => {
        console.log(res);
        // if (res.data.resCode == 0) {
        // if (res.data.result instanceof Array) {
        //   that.deOrderList = res.data.result;
        // } else {

        //   that.deOrderList = Object.values(res.data.result);
        // }
        that.deOrderList = res.data.result;
        // that.deOrderList=res.data.result;
        that.totals = res.data.count;
        // } else {
        //   that.deOrderList = [];
        //   that.totals = 0;
        // }
      });
    },
    handleCurrentChange (val) {
      console.log(val)
      this.paging.page = val
      this.handleSearchClick()
    },
    handleSizeChange (val) {
      this.paging.pageSize = val;
      this.handleSearchClick()
    },
    // clera(){
    //   this.deorderlot = {
    //     resId: "",
    //     devid: "",
    //     devidName: "",
    //     phone: ""
    //   }
    // },
    // 取消订单
    cancelDeorderlot (val) {
      this.$confirm("确认结束订单, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        let data = {
          resId: val.resId,
          carNumber: val.carNumber,
          money: val.money
        }
        console.log(data);
        cancelDeorder(data).then(res => {
          console.log(res);
          if (res.data.resCode == 0) {
            this.$message({
              type: "success",
              message: "结束订单成功!"
            });
            this.handleSearchClick();
          }
        });
      }).catch(() => {
        this.$message({
          type: "info",
          message: "已取消结束订单"
        });
      });
    },
    // handleEditDeorderlot(id){ 
    //   let that = this;
    //   getDeorderInfo(id).then(res => {
    //     console.log(res);
    //     // Object.assign(that.deorderlot, res);
    //   });
    //   this.showDialog = true;
    //   this.addDeorderLot = false;
    // },
    // ClickEditDeorderlot(deorderlot){
    //   this.$refs[deorderlot].validate(valid => {
    //     if (valid) {
    //       console.log(this.deorderlot);
    // editDeorder(this.deorderlot).then(res => {
    //   console.log(res);
    //   if (res.data.resCode == "200") {
    //     this.showDialog = false;
    //     this.$message({
    //       message: "修改成功",
    //       type: "success"
    //     });
    //     this.handleSearchClick();
    //   } else {
    //     this.showDialog = false;
    //     this.$message({
    //       message: res.data.msg,
    //       type: "error"
    //     });
    //     this.handleSearchClick();
    //   }
    // });
    // }
    // });
    // },
    // ClickDeleteParkinglot(id) {
    //   this.$confirm("确认删除, 是否继续?", "提示", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //     type: "warning"
    //   }).then(() => {
    //       let data={
    //         resId:id
    //       }
    //       console.log(data)
    //       toDeledeorder(data).then(res => {
    //         console.log(res);
    //         if (res) {
    //           this.$message({
    //             type: "success",
    //             message: "删除成功!"
    //           });
    //           this.handleSearchClick();
    //         }
    //       });
    //     }).catch(() => {
    //       this.$message({
    //         type: "info",
    //         message: "已取消删除"
    //       });
    //     });
    // },
    indexMethod (index) {
      return index + (this.paging.page - 1) * this.paging.pageSize + 1;
    }
  }
};
</script>

<style lang="scss" scoped>
#deorderlit {
  padding: 20px;
}
.el-input__inner,
.el-input {
  width: 200px !important;
}
.el-form-item__label {
  width: 116px !important;
}
.demoele {
  float: left;
}
.el-tag {
  color: #fff;
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
.spanClass {
  width: 106px !important;
}
</style>