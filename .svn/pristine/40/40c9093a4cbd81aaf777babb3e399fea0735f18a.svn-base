<template>
  <div id="cheweisuo">
    <div class="header">
      <div class="headerTitle">
        <span>车辆管理</span>
      </div>
    </div>
    <div class="select">
      <span>停车场名称：</span>
      <el-select v-model="search.parkingId"
                 filterable
                 @change="handleSearchClick()"
                 placeholder="请选择">
        <!-- <el-option label="未选择"></el-option> -->
        <el-option v-for="item in parkIist"
                   :key="item.id"
                   :label="item.parking_name"
                   :value="item.id"></el-option>
      </el-select>
      <span>车牌号：</span>
      <el-input v-model="search.carNumber"
                clearable
                placeholder="请输入内容"></el-input>
      <span>车主姓名：</span>
      <el-input v-model="search.carName"
                clearable
                placeholder="请输入内容"></el-input>      
    </div>
    <div class="select">
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-plus"
                 @click="addParkingLot = true,showDialog = true,clear()">添加</el-button>
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-search"
                 @click="handleSearchClick">查询</el-button>
      <!-- <el-upload class="upload-demo demoele"
                 action=""
                 :before-upload="uploadFile"
                 multiple
                 :limit="1">
        <el-button class="oyButton"
                   type="success"
                   icon="el-icon-download">导入</el-button>
      </el-upload> -->
    </div>
    <div class="Content">
      <el-table class="oyTable"
                :data="tableData"
                style="width: 100%">
        <el-table-column type="index"
                         :index="indexMethod"
                         label="序号"
                         width="100"></el-table-column>
        <el-table-column label="车牌号">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.carNumber }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.carNumber }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="车主姓名">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.carName }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.carName }}</div>
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
        <el-table-column label="车型">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ chooseVehicleType(scope.row.vehicleTypeId) }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ chooseVehicleType(scope.row.vehicleTypeId) }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="车类">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ chooseVehicleCategory(scope.row.vehicleCategoryId) }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ chooseVehicleCategory(scope.row.vehicleCategoryId) }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <!-- <el-table-column label="家庭地址">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.address }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.address }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>  -->
        <el-table-column label="车位数量">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.carCount }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.carCount }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>               
        <!-- <el-table-column label="车场通道">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.carPassageway }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.carPassageway }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column> -->
        <el-table-column label="车位组">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.carGroup }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.carGroup }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>              
        <el-table-column label="操作"
                         width="150">
          <template slot-scope="scope">
            <!-- <el-tooltip class="item" effect="dark" content="绑定车牌" placement="top">
              <i class="icon-See el-icon-search" @click="operation(scope.row)"></i>
            </el-tooltip> -->
            <el-tooltip class="item"
                        effect="dark"
                        content="修改"
                        placement="top">
              <i class="icon-change el-icon-edit"
                 @click="handleEditParkinglot(scope.row)"></i>
            </el-tooltip>
            <el-tooltip class="item"
                        effect="dark"
                        content="删除"
                        placement="top">
              <i class="icon-delete el-icon-delete"
                 @click="ClickDeleteParkinglot(scope.row.id)"></i>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :title="addParkingLot?'新增车辆':'修改车辆'"
               :visible.sync="showDialog">
      <el-form ref="parkinglot"
               :inline="true"
               :model="parkinglot"
               :rules="rules">
        <el-row type="flex"
                class="row-bg"
                justify="end"> 
          <el-col :span="12">
            <el-form-item label="车牌号:"
                          prop="carNumber">
              <el-input v-model="parkinglot.carNumber"
                        placeholder=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="停车场名称:"
                          prop="vehicleTypeId">
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
          </el-col>                                           
        </el-row>
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="车类:"
                          prop="vehicleCategoryId">
              <el-select v-model="parkinglot.vehicleCategoryId"
                         filterable
                         placeholder="请选择">
                <el-option v-for="item in vehicleCategoryList"
                           :key="item.id"
                           :label="item.name"
                           :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="车型:"
                          prop="vehicleTypeId">
              <el-select v-model="parkinglot.vehicleTypeId"
                         filterable
                         placeholder="请选择">
                <el-option v-for="item in vehicleTypeList"
                           :key="item.id"
                           :label="item.vehicleName"
                           :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>                   
        </el-row>
        <!-- <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="车场区域:"
                          prop="carRegion">
              <el-input v-model="parkinglot.carRegion"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="车场通道:"
                          prop="carPassageway">
              <el-input v-model="parkinglot.carPassageway"
                        placeholder=""></el-input>
            </el-form-item>
          </el-col>          
        </el-row> -->
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="车身颜色:"
                          prop="carColor">
              <el-input v-model="parkinglot.carColor"
                        placeholder=""></el-input>
            </el-form-item>
          </el-col>      
          <el-col :span="12">
            <el-form-item label="车主姓名:"
                          prop="carName">
              <el-input v-model="parkinglot.carName"></el-input>
            </el-form-item>
          </el-col>                    
        </el-row>
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="手机号:"
                          prop="phone">
              <el-input v-model="parkinglot.phone"></el-input>
            </el-form-item>
          </el-col>               
          <el-col :span="12">
            <el-form-item label="车位数量:"
                          prop="carCount">
              <el-input v-model="parkinglot.carCount"></el-input>
            </el-form-item>
          </el-col>          
        </el-row>
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="车位组:"
                          prop="carGroup">
              <el-input v-model="parkinglot.carGroup"></el-input>
            </el-form-item>
          </el-col>      
          <el-col :span="12">
            <el-form-item label="家庭地址:"
                          prop="address">
              <el-input v-model="parkinglot.address"></el-input>
            </el-form-item>
          </el-col>                    
        </el-row>
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="备注:"
                          prop="remarks">
              <el-input v-model="parkinglot.remarks"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
        <el-row style="text-align:right;">
          <el-button @click="showDialog = false">取 消</el-button>
          <el-button type="success"
                     @click="addParkingLot? ClickAddParkinglot('parkinglot') :ClickEditParkinglot('parkinglot')">确 定</el-button>
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
                     :total="paging.total"></el-pagination>
    </div>
  </div>
</template>
<script>
import Qs from "qs";
import { mapActions, mapGetters, mapState } from "vuex";
import { getParkingLotListApi } from '../../../src/components/api/api.js';
import * as check from "@/utils/check";
export default {
  data () {
    let checkTel = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('手机号不能为空'));
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
      vehicleCategoryList:[],
      vehicleTypeList:[],
      search: {
        carName: '',
        carNumber: "",
        parkingId: ""
      },
      paging: {
        page: 1,
        pageSize: 10,
        total:0
      },
      parkinglot: {
        parkingId: '',
        vehicleTypeId: '',
        vehicleCategoryId: "",
        carColor: "",
        carNumber: "",
        carRegion: "",
        carPassageway: '',
        carName: "",
        phone: "",
        carGroup: "",
        carCount: "",
        address: "",
        remarks: "",
        dealer: localStorage.getItem("dealer")
      },
      rules: {
        vehicleCategoryId: [{ required: true, message: "不能为空", trigger: "blur" }],
        vehicleTypeId: [{ required: true, message: "不能为空", trigger: "blur" }],
        carNumber: [{ required: true, message: "不能为空", trigger: "blur" }],
        carPassageway: [{ required: true, message: "不能为空", trigger: "blur" }],
        carName: [{ required: true, message: "不能为空", trigger: "blur" }],
        carCount: [{ required: true, message: "不能为空", trigger: "blur" }],
        phone: [{ required: true, validator: checkTel, trigger: "blur" }],
      },
    };
  },
  mounted () {
    this.getParkingLotListApiList();
  },
  computed: {
    ...mapGetters({
      parkingLotInfo: "getParkingLotInfo",
      parkingLotDevList: "getParkingLotDevList"
    }),
    ...mapState(['totals'])
  },
  methods: {
    ...mapActions([
      "initParkingDevList",
      "toDeleteParkdev",
      "toAddDevList",
      "toEditDevList"
    ]),
    getParkingLotListApiList () {
      let that = this;
      let params = {
        page: 1,
        pageSize: 500,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer")
      };
      getParkingLotListApi(params).then(message => {
        console.log(message);
        this.parkIist = message.data.result;
        that.search.parkingId = message.data.result[0].id;  
        that.handleSearchClick();    
      });
    },
    repla (val) {
      this.parkingLotInfo.forEach((a, b) => {
        if (a.id == val) {
          val = a.parking_name
        }
      })
      return val
    },
    chooseVehicleCategory (val) {
      this.vehicleCategoryList.forEach((a, b) => {
        if (a.id == val) {
          val = a.name
        }
      })
      return val
    },
    chooseVehicleType (val) {
      this.vehicleTypeList.forEach((a, b) => {
        if (a.id == val) {
          val = a.vehicleName
        }
      })
      return val
    },
    clear () {
      this.parkinglot = {
        parkingId: '',
        vehicleTypeId: '',
        vehicleCategoryId: "",
        carColor: "",
        carNumber: "",
        carRegion: "",
        carPassageway: '',
        carName: "",
        phone: "",
        carGroup: "",
        carCount: "",
        address: "",
        remarks: "",
        dealer: localStorage.getItem("dealer")
      };
      this.parkinglot.parkingId = this.search.parkingId;
    },
    handleSearchClick () {
      let that = this;
      let params = {
        pageSize: this.paging.pageSize,
        page: this.paging.page,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer"),
        parkingId: this.search.parkingId
      }
      if (this.search.carNumber) {
        params.carNumber = this.search.carNumber
      }
      if (this.search.carName){
        params.carName = this.search.carName
      }
      if (this.search.parkingId) {
        params.parkingId = this.search.parkingId
      }
      axios({
        method: 'post',
        url: that.$store.state.parking_url + '/parkingCarVehicle/selectParkingCarVehicle',
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
    handleCurrentChange (val) {
      console.log(val)
      this.paging.page = val
      this.handleSearchClick()
    },
    handleSizeChange (val) {
      this.paging.pageSize = val;
      this.handleSearchClick()
    },
    ClickAddParkinglot (parkinglot) {      
      let that = this;
      that.parkinglot.dealer = localStorage.getItem("dealer");
      console.log(that.parkinglot);
      this.$refs[parkinglot].validate(valid => {
        if (valid) {
          axios({
            method: 'post',
            url: that.$store.state.parking_url + '/parkingCarVehicle/insertParkingCarVehicle',
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
    ClickEditParkinglot (parkinglot) {
      let that = this;
      this.$refs[parkinglot].validate(valid => {
        if (valid) {
          console.log(this.parkinglot);
          axios({
            method: 'post',
            url: that.$store.state.parking_url + '/parkingCarVehicle/updateParkingCarVehicle',
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
    ClickDeleteParkinglot (id) {
      let that = this;
      this.$confirm("确认删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          axios({
            method: 'post',
            url: that.$store.state.parking_url + '/parkingCarVehicle/deleteParkingCarVehicle',
            data: Qs.stringify({id:id})
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
    handleEditParkinglot (val) {
      console.log(val);
      Object.assign(this.parkinglot, val);
      this.showDialog = true;
      this.addParkingLot = false;
    },
    indexMethod (index) {
      return index + (this.paging.page - 1) * this.paging.pageSize + 1;
    },
    getVehicleType(){
      let that = this;
      let params = {
        pageSize: this.paging.pageSize,
        page: this.paging.page,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer"),
        parkingId: this.search.parkingId
      }
      axios({
        method: 'post',
        url: that.$store.state.parking_url + '/parkingLotVehicle/selectParkingLotVehicle',
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
    getVehicleCategory(){
      let that = this;
      let params = {
        pageSize: this.paging.pageSize,
        page: this.paging.page,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer"),
        parkingId: this.search.parkingId
      }
      axios({
        method: 'post',
        url: that.$store.state.parking_url + '/parkingVehicleCategory/selectParkingVehicleCategory',
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
