<template>
  <div id="cheweisuo">
    <div class="header">
      <div class="headerTitle">
        <span>收费规则</span>
      </div>
    </div>
    <div class="select">
      <span>停车场名称：</span>
      <el-select
        v-model="search.parkingId"
        @change="handleSearchClick()"
        filterable
        placeholder="请选择"
      >
        <!-- <el-option label="未选择"></el-option> -->
        <el-option
          v-for="item in parkIist"
          :key="item.id"
          :label="item.parking_name"
          :value="item.id"
        ></el-option>
      </el-select>
      <span>规则名称：</span>
      <el-input v-model="search.ruleName" clearable placeholder="请输入内容"></el-input>
    </div>
    <div class="select">
      <el-button
        type="success"
        class="oyButton"
        icon="el-icon-plus"
        @click="addParkingLot = true,showDialog = true,clear()"
      >添加</el-button>
      <el-button type="success" class="oyButton" icon="el-icon-search" @click="handleSearchClick">查询</el-button>
    </div>
    <div class="Content">
      <el-table class="oyTable" :data="tableData" style="width: 100%">
        <el-table-column type="index" :index="indexMethod" label="序号"></el-table-column>
        <el-table-column label="规则名称" prop="ruleName"></el-table-column>
        <el-table-column label="计费方式" prop="chargingType"></el-table-column>
        <el-table-column label="停车场名称" prop="parkingName"></el-table-column>
        <!-- <el-table-column label="车型">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ chooseVehicleType(scope.row.vehicleNameId) }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ chooseVehicleType(scope.row.vehicleNameId) }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column> -->
        <el-table-column label="车类">
          <template slot-scope="scope">
            <span>{{ chooseVehicleCategory(scope.row.carCategoryId) }}</span>
          </template>
        </el-table-column>
        <!-- <el-table-column label="是否脱机">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.offline==0?'否':'是' }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.offline==0?'否':'是' }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column> -->
        <el-table-column label="规则描述" width="150">
          <template slot-scope="scope">
            <p>收费限额:{{ scope.row.highPrice }}元</p>
            <p>计费设置:按{{ scope.row.priceunit }}计费</p>
            <p>免费时长:{{ scope.row.freeTime }}分钟</p>
            <p>停车时间:{{ scope.row.freeTime }}分钟内，收费0.00元，之后每{{ scope.row.priceunit=='小时'?'60':'30' }}分钟收费{{ scope.row.price }}元</p>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="修改" placement="top">
              <i class="icon-change el-icon-edit" @click="handleEditParkinglot(scope.row)"></i>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="删除" placement="top">
              <i class="icon-delete el-icon-delete" @click="ClickDeleteParkinglot(scope.row.id)"></i>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :title="addParkingLot?'新增收费规则':'修改收费规则'" :visible.sync="showDialog">
      <el-form ref="parkinglot" :inline="true" :model="parkinglot" :rules="rules">
        <el-row type="flex" class="row-bg" justify="end">
          <el-col :span="12">
            <el-form-item label="规则名称:" prop="ruleName">
              <el-input v-model="parkinglot.ruleName" placeholder></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="停车场名称:" prop="parkingId">
              <el-select
                v-model="parkinglot.parkingId"
                filterable
                placeholder="请选择"
                disabled="true"
              >
                <el-option label="未选择"></el-option>
                <el-option
                  v-for="item in parkIist"
                  :key="item.id"
                  :label="item.parking_name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- <el-col :span="12">
            <el-form-item label="车型:"
                          prop="vehicleNameId">
              <el-select v-model="parkinglot.vehicleNameId"
                         filterable
                         placeholder="请选择">
                <el-option v-for="item in vehicleTypeList"
                           :key="item.id"
                           :label="item.vehicleName"
                           :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>-->
        </el-row>
        <el-row type="flex" class="row-bg" justify="end">
          <el-col :span="12">
            <el-form-item label="计费方式:" prop="chargingType">
              <el-select v-model="parkinglot.chargingType" filterable placeholder="请选择">
                <el-option
                  v-for="item in [{type:1,label:'24小时'},{type:2,label:'12小时'},{type:3,label:'白天/夜间'},{type:4,label:'自然天'}]"
                  :key="item.type"
                  :label="item.label"
                  :value="item.label"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="车类:" prop="carCategoryId">
              <el-select v-model="parkinglot.carCategoryId" filterable placeholder="请选择">
                <el-option
                  v-for="item in vehicleCategoryList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- <el-row type="flex"
                class="row-bg"
        justify="end">-->
        <!-- <el-col :span="12">
            <el-form-item label="应用区域:"
                          prop="region">
              <el-input v-model="parkinglot.region"></el-input>
            </el-form-item>
        </el-col>-->
        <!-- <el-col :span="12">
            <el-form-item label="是否脱机:"
                          prop="offline">
              <el-select v-model="parkinglot.offline"
                         filterable
                         placeholder="请选择">
                <el-option v-for="item in [{type:0,label:'否'},{type:1,label:'是'}]"
                           :key="item.type"
                           :label="item.label"
                           :value="item.type"></el-option>
              </el-select>
            </el-form-item>
        </el-col>-->
        <!-- <el-col :span="12">
            <el-form-item label="停车场名称:"
                          prop="parkingId">
              <el-select v-model="parkinglot.parkingId"
                         filterable
                         placeholder="请选择" disabled="true">
                <el-option label="未选择"></el-option>
                <el-option v-for="item in parkIist"
                           :key="item.id"
                           :label="item.parking_name"
                           :value="item.id"></el-option>
              </el-select>
            </el-form-item>
        </el-col>-->
        <!-- </el-row> -->
        <el-row type="flex" class="row-bg" justify="end">
          <el-col :span="12">
            <el-form-item label="计费设置:" prop="priceunit">
              <el-select v-model="parkinglot.priceunit" filterable placeholder="请选择">
                <el-option
                  v-for="item in [{type:0,label:'小时'},{type:1,label:'半小时'}]"
                  :key="item.type"
                  :label="item.label"
                  :value="item.label"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="单价:" prop="price">
              <el-input v-model="parkinglot.price"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="end">
          <el-col :span="12">
            <el-form-item label="收费限额:" prop="highPrice">
              <el-input v-model="parkinglot.highPrice"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="免费时长:" prop="freeTime">
              <el-input v-model="parkinglot.freeTime"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="end">
          <el-col :span="12">
            <el-form-item label="最高时长:" prop="highTime">
              <el-input v-model="parkinglot.highTime"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="超时时长:" prop="timeOut">
              <el-input v-model="parkinglot.timeOut"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="end">
          <el-col :span="12">
            <el-form-item label="收费说明:" prop="parkingFeeDescription">
              <el-input v-model="parkinglot.parkingFeeDescription"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
        <el-row style="text-align:right;">
          <el-button @click="showDialog = false">取 消</el-button>
          <el-button
            type="success"
            @click="addParkingLot? ClickAddParkinglot('parkinglot') :ClickEditParkinglot('parkinglot')"
          >确 定</el-button>
        </el-row>
      </el-form>
    </el-dialog>
    <div class="footer">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :current-page.sync="paging.page"
        :page-sizes="[1,2,3,10,11,12]"
        :page-size="paging.pageSize"
        layout="sizes, prev, pager, next, jumper,total"
        :total="paging.total"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import Qs from "qs";
import { mapActions, mapGetters, mapState } from "vuex";
import { getParkingLotListApi } from "../../../src/components/api/api.js";
import * as check from "@/utils/check";
export default {
  data() {
    let checkTel = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("手机号不能为空"));
      } else {
        const regex = /^1[3456789]\d{9}$/;
        if (!regex.test(value)) {
          callback(new Error("请输入正确的手机号"));
        }
        callback();
      }
    };
    return {
      addParkingLot: false,
      showDialog: false,
      parkIist: [],
      tableData: [],
      vehicleCategoryList: [],
      vehicleTypeList: [],
      search: {
        ruleName: "",
        parkingId: ""
      },
      paging: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      parkinglot: {
        parkingId: "",
        parkingName: "",
        ruleName: "",
        vehicleNameId: "",
        carCategoryId: "",
        parkingFeeDescription: "",
        price: "",
        offline: 0,
        priceunit: "小时",
        freeTime: "",
        highPrice: "",
        highTime: "",
        timeOut: "",
        chargingType: "24小时",
        region: "",
        dealer: localStorage.getItem("dealer")
      },
      rules: {
        ruleName: [{ required: true, message: "不能为空", trigger: "blur" }],
        parkingId: [{ required: true, message: "不能为空", trigger: "blur" }],
        vehicleNameId: [
          { required: true, message: "不能为空", trigger: "blur" }
        ],
        carCategoryId: [
          { required: true, message: "不能为空", trigger: "blur" }
        ],
        price: [{ required: true, message: "不能为空", trigger: "blur" }],
        region: [{ required: true, message: "不能为空", trigger: "blur" }],
        offline: [{ required: true, message: "不能为空", trigger: "blur" }],
        priceunit: [{ required: true, message: "不能为空", trigger: "blur" }],
        chargingType: [{ required: true, message: "不能为空", trigger: "blur" }]
        // phone: [{ required: true, validator: checkTel, trigger: "blur" }],
      }
    };
  },
  mounted() {
    this.getParkingLotListApiList();
  },
  computed: {
    ...mapGetters({
      parkingLotInfo: "getParkingLotInfo",
      parkingLotDevList: "getParkingLotDevList"
    }),
    ...mapState(["totals"])
  },
  methods: {
    ...mapActions([
      "initParkingDevList",
      "toDeleteParkdev",
      "toAddDevList",
      "toEditDevList"
    ]),
    getParkingLotListApiList() {
      let that = this;
      let params = {
        page: 1,
        pageSize: 500,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer")
      };
      getParkingLotListApi(params).then(message => {
        console.log(message);
        that.parkIist = message.data.result;
        that.search.parkingId = message.data.result[0].id;
        that.handleSearchClick();
      });
    },
    repla(val) {
      this.parkingLotInfo.forEach((a, b) => {
        if (a.id == val) {
          val = a.parking_name;
        }
      });
      return val;
    },
    chooseVehicleCategory(val) {
      this.vehicleCategoryList.forEach((a, b) => {
        if (a.id == val) {
          val = a.name;
        }
      });
      return val;
    },
    chooseVehicleType(val) {
      this.vehicleTypeList.forEach((a, b) => {
        if (a.id == val) {
          val = a.vehicleName;
        }
      });
      return val;
    },
    clear() {
      this.parkinglot = {
        parkingId: "",
        parkingName: "",
        ruleName: "",
        vehicleNameId: "",
        carCategoryId: "",
        parkingFeeDescription: "",
        price: "",
        offline: 0,
        priceunit: "小时",
        freeTime: "",
        highPrice: "",
        highTime: "",
        timeOut: "",
        chargingType: "24小时",
        region: "",
        dealer: localStorage.getItem("dealer")
      };
      this.parkinglot.parkingId = this.search.parkingId;
    },
    handleSearchClick() {
      let that = this;
      let params = {
        pageSize: this.paging.pageSize,
        page: this.paging.page,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer"),
        parkingId: this.search.parkingId
      };
      if (this.search.ruleName) {
        params.ruleName = this.search.ruleName;
      }
      if (this.search.parkingId) {
        params.parkingId = this.search.parkingId;
      }
      axios({
        method: "post",
        url:
          that.$store.state.parking_url +
          "/parkingLotChargeRule/selectByParkingLotChargeRule",
        data: Qs.stringify(params)
      }).then(res => {
        console.log(res);
        if (res.data.code == 0) {
          that.tableData = res.data.result;
          that.paging.total = res.data.count;
        } else {
          that.tableData = [];
          that.paging.total = 0;
        }
      });
      this.getVehicleType();
      this.getVehicleCategory();
    },
    handleCurrentChange(val) {
      console.log(val);
      this.paging.page = val;
      this.handleSearchClick();
    },
    handleSizeChange(val) {
      this.paging.pageSize = val;
      this.handleSearchClick();
    },
    ClickAddParkinglot(parkinglot) {
      let that = this;
      that.parkinglot.parkingName = that.repla(that.parkinglot.parkingId);
      that.parkinglot.price = Number(that.parkinglot.price).toFixed(2);
      that.parkinglot.highPrice = Number(that.parkinglot.highPrice).toFixed(2);
      that.parkinglot.dealer = localStorage.getItem("dealer");
      console.log(that.parkinglot);
      this.$refs[parkinglot].validate(valid => {
        if (valid) {
          axios({
            method: "post",
            url:
              that.$store.state.parking_url +
              "/parkingLotChargeRule/insertByParkingLotChargeRule",
            data: Qs.stringify(that.parkinglot)
          }).then(res => {
            console.log(res);
            if (res.data.code == 0) {
              this.showDialog = false;
              this.$message({
                message: "添加成功",
                type: "success"
              });
              this.handleSearchClick();
            } else {
              this.showDialog = false;
              this.$message({
                message: "添加失败",
                type: "error"
              });
              this.handleSearchClick();
            }
          });
        }
      });
    },
    ClickEditParkinglot(parkinglot) {
      let that = this;
      delete this.parkinglot.data;
      this.$refs[parkinglot].validate(valid => {
        if (valid) {
          console.log(this.parkinglot);
          axios({
            method: "post",
            url:
              that.$store.state.parking_url +
              "/parkingLotChargeRule/updateByParkingLotChargeRule",
            data: Qs.stringify(this.parkinglot)
          }).then(res => {
            console.log(res);
            if (res.data.code == 0) {
              this.showDialog = false;
              this.$message({
                message: "修改成功",
                type: "success"
              });
              this.handleSearchClick();
            } else {
              this.showDialog = false;
              this.$message({
                message: res.data.result,
                type: "error"
              });
              this.handleSearchClick();
            }
          });
        }
      });
    },
    ClickDeleteParkinglot(id) {
      let that = this;
      this.$confirm("确认删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          axios({
            method: "post",
            url:
              that.$store.state.parking_url +
              "/parkingLotChargeRule/deleteByPrimaryKey",
            data: Qs.stringify({ id: id })
          }).then(res => {
            console.log(res);
            if (res.data.code == 0) {
              this.$message({
                type: "success",
                message: "删除成功"
              });
              that.handleSearchClick();
            } else {
              this.$message({
                type: "error",
                message: "删除失败"
              });
              that.handleSearchClick();
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
    handleEditParkinglot(val) {
      console.log(val);
      Object.assign(this.parkinglot, val);
      this.showDialog = true;
      this.addParkingLot = false;
    },
    indexMethod(index) {
      return index + (this.paging.page - 1) * this.paging.pageSize + 1;
    },
    getVehicleType() {
      let that = this;
      let params = {
        pageSize: this.paging.pageSize,
        page: this.paging.page,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer"),
        parkingId: this.search.parkingId
      };
      axios({
        method: "post",
        url:
          that.$store.state.parking_url +
          "/parkingLotVehicle/selectParkingLotVehicle",
        data: Qs.stringify(params)
      }).then(res => {
        console.log(res);
        if (res.data.code == 0) {
          that.vehicleTypeList = res.data.result;
        } else {
          that.vehicleTypeList = [];
        }
      });
    },
    getVehicleCategory() {
      let that = this;
      let params = {
        pageSize: this.paging.pageSize,
        page: this.paging.page,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer"),
        parkingId: this.search.parkingId
      };
      axios({
        method: "post",
        url:
          that.$store.state.parking_url +
          "/parkingVehicleCategory/selectParkingVehicleCategory",
        data: Qs.stringify(params)
      }).then(res => {
        console.log(res);
        if (res.data.code == 0) {
          that.vehicleCategoryList = res.data.result;
        } else {
          that.vehicleCategoryList = [];
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#cheweisuo {
  padding: 20px;
}
.el-input__inner,
.el-input {
  width: 200px !important;
}
.demoele {
  float: left;
}
</style>
