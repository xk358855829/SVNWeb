<template>
  <div id="cheweisuo">
    <div class="header">
      <div class="headerTitle">
        <span>车型管理</span>
      </div>
    </div>
    <div class="select">
      <span>停车场名称：</span>
      <el-select v-model="search.parkingId"
                 filterable
                 @change="handleSearchClick()"
                 placeholder="请选择">
        <el-option label="未选择"></el-option>
        <el-option v-for="item in parkIist"
                   :key="item.id"
                   :label="item.parking_name"
                   :value="item.id"></el-option>
      </el-select>
      <span>车型名称：</span>
      <el-input v-model="search.vehicleName"
                clearable
                placeholder="请输入内容"></el-input>      
      <!-- <span>类型：</span>
      <el-select v-model="search.type"
                 placeholder="请选择">
        <el-option value=""
                   key
                   label="未选择"></el-option>
        <el-option key="0"
                   label="公家车"
                   :value="0"></el-option>
        <el-option key="1"
                   label="私家车"
                   :value="1"></el-option>
        <el-option key="2"
                   label="内部车"
                   :value="2"></el-option>
      </el-select> -->
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
        <el-table-column label="车型名称">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.vehicleName }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.vehicleName }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="否为默认车型">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.whether==0?'否':'是' }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.whether==0?'否':'是' }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="是否为自然天数">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.naturals==0?'否':'是' }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.naturals==0?'否':'是' }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>        
        <el-table-column label="每天最大金额">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.money }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.money }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column> 
        <el-table-column label="白天收费描述">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.dayCharging }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.dayCharging }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>               
        <el-table-column label="夜晚收费描述">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.nightCharging }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.nightCharging }}</div>
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
    <el-dialog :title="addParkingLot?'新增车型':'修改车型'"
               :visible.sync="showDialog">
      <el-form ref="parkinglot"
               :inline="true"
               :model="parkinglot"
               :rules="rules">
        <el-row type="flex"
                class="row-bg"
                justify="end"> 
          <el-col :span="12">
            <el-form-item label="车型名称:"
                          prop="vehicleName">
              <el-input v-model="parkinglot.vehicleName"
                        placeholder=""></el-input>
            </el-form-item>
          </el-col>         
          <el-col :span="12">
            <el-form-item label="停车场:"
                          prop="parkingId">
              <el-select v-model="parkinglot.parkingId"
                         filterable
                         disabled="true"
                         placeholder="请选择">
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
            <el-form-item label="是否为默认车型:"
                          prop="whether">
              <el-select v-model="parkinglot.whether"
                         filterable
                         placeholder="请选择">
                <el-option v-for="item in [{type:1,label:'是'},{type:0,label:'否'}]"
                           :key="item.type"
                           :label="item.label"
                           :value="item.type"></el-option>
              </el-select>
            </el-form-item>
          </el-col> 
          <el-col :span="12">
            <el-form-item label="是否为自然天数:"
                          prop="natural">
              <el-select v-model="parkinglot.naturals"
                         filterable
                         placeholder="请选择">
                <el-option v-for="item in [{type:1,label:'是'},{type:0,label:'否'}]"
                           :key="item.type"
                           :label="item.label"
                           :value="item.type"></el-option>
              </el-select>
            </el-form-item>            
          </el-col>         
        </el-row>
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="每天最大金额:"
                          prop="money">
              <el-input v-model="parkinglot.money"
                        placeholder=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="白天收费描述:"
                          prop="dayCharging">
              <el-input v-model="parkinglot.dayCharging"
                        placeholder=""></el-input>
            </el-form-item>
          </el-col>          
        </el-row>
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="夜晚收费描述:"
                          prop="nightCharging">
              <el-input v-model="parkinglot.nightCharging"
                        placeholder=""></el-input>
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
      search: {
        vehicleName: '',
        parkingId: ""
      },
      paging: {
        page: 1,
        pageSize: 10,
        total:0
      },
      parkinglot: {
        parkingId: '',
        parkingName: "",
        vehicleName: "",
        whether: 0,
        money: "",
        naturals: 1,
        dayCharging: "",
        nightCharging: "",
        dealer: localStorage.getItem("dealer")
      },
      rules: {
        vehicleName: [{ required: true, message: "不能为空", trigger: "blur" }],
        whether: [{ required: true, message: "不能为空", trigger: "blur" }],
        naturals: [{ required: true, message: "不能为空", trigger: "blur" }],
        money: [{ required: true, message: "不能为空", trigger: "blur" }],
        // carCount: [{ required: true, message: "不能为空", trigger: "blur" }],
        parkingId: [{ required: true, message: "不能为空", trigger: "blur" }],
        // phone: [{ required: true, validator: checkTel, trigger: "blur" }],
      }
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
    clear () {
      this.parkinglot = {
        parkingId: '',
        parkingName: "",
        vehicleName: "",
        whether: 0,
        money: "",
        naturals: 1,
        dayCharging: "",
        nightCharging: "",
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
      if (this.search.vehicleName){
        params.vehicleName = this.search.vehicleName
      }
      if (this.search.parkingId) {
        params.parkingId = this.search.parkingId
      }
      axios({
        method: 'post',
        url: that.$store.state.parking_url + '/parkingLotVehicle/selectParkingLotVehicle',
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
      that.parkinglot.parkingName = that.repla(that.parkinglot.parkingId);
      that.parkinglot.dealer = localStorage.getItem("dealer");
      console.log(that.parkinglot);
      this.$refs[parkinglot].validate(valid => {
        if (valid) {
          axios({
            method: 'post',
            url: that.$store.state.parking_url + '/parkingLotVehicle/insertSelective',
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
      // if(this.parkinglot.pid){
      //   delete this.parkinglot.pid
      // }
      this.$refs[parkinglot].validate(valid => {
        if (valid) {
          console.log(this.parkinglot);
          axios({
            method: 'post',
            url: that.$store.state.parking_url + '/parkingLotVehicle/updateByPrimaryKeySelective',
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
            url: that.$store.state.parking_url + '/parkingLotVehicle/deleteByPrimaryKey',
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
