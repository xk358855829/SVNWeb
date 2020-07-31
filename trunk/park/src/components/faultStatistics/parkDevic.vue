<template>
  <div id="cheweisuo">
    <div class="header">
      <div class="headerTitle">
        <span>车位锁列表</span>
      </div>
    </div>
    <div class="select">
      <span>车位锁编号：</span>
      <el-input v-model="search.devparasn"
                clearable
                placeholder="请输入内容"></el-input>
      <span>车位锁编号：</span>
      <el-input v-model="search.deviceid"
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
      <TableList :loading="loading"
                 :columns="columns"
                 :options="optionstable"
                 :dataSource="guideList"
                 :operates="operates"
                 :pagination="pagination"
                 :dataTotal="totals"
                 @handleChangePage="handleChangePage" />
    </div>
    <el-dialog :title="addParkingLot?'新增引导设备':'查看/修改引导设备'"
               :visible.sync="showDialog">
      <el-form ref="guideData"
               :inline="true"
               :model="guideData"
               :rules="rules">
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="设备名称:"
                          prop="name">
              <el-input v-model="guideData.name"
                        placeholder="请输入设备名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="设备地址:"
                          prop="position">
              <el-input v-model="guideData.position"
                        placeholder="请输入设备地址"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="设备编号:"
                          prop="devid">
              <el-input v-if="addParkingLot"
                        v-model="guideData.devid"
                        placeholder="请输入设备编号"></el-input>
              <el-input v-else
                        v-model="guideData.devid"
                        placeholder="请输入设备编号"
                        disabled="disabled"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="设备颜色:"
                          prop="color">
              <el-input v-model="guideData.color"
                        placeholder="请输入设备颜色"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="text-align:right;">
          <el-button @click="showDialog = false">取 消</el-button>
          <el-button type="success"
                     @click="addParkingLot? ClickAddParkinglot('guideData') :ClickEditParkinglot('guideData')">确 定</el-button>
        </el-row>
      </el-form>
    </el-dialog>

    <!-- 绑定停车场 -->
    <el-dialog :title="已绑停车场"
               :visible.sync="addPark">
      <el-table :data="bindParkDate">
        <el-table-column property="parkname"
                         label="停车场名称"></el-table-column>
        <el-table-column property="parkid"
                         label="停车场编号"></el-table-column>
        <el-table-column label="操作"
                         width="150">
          <template slot-scope="scope">
            <el-tooltip class="item"
                        effect="dark"
                        content="解绑"
                        placement="top">
              <i class="icon-delete el-icon-sort"
                 @click="unbink(scope.row)"></i>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog width="30%"
                 title="绑定停车场"
                 :visible.sync="innerVisible"
                 append-to-body>
        <el-select v-model="parking.parkid"
                   placeholder="请选择"
                   @change="parkchange">
          <el-option key
                     label="未选择"></el-option>
          <el-option v-for="item in parkingLotInfo"
                     :key="item.parking_id"
                     :label="item.parking_name"
                     :value="item.parking_id">{{item.parking_name}}</el-option>
        </el-select>
        <div slot="footer"
             class="dialog-footer">
          <el-button @click="innerVisible = false">取 消</el-button>
          <el-button type="primary"
                     @click="bindparkIn">绑 定</el-button>
        </div>
      </el-dialog>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="addPark = false">取 消</el-button>
        <el-button type="primary"
                   @click="innerVisible = true">绑定停车场</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
const columns = [{
  prop: 'devparasn',
  label: '车位锁编号',
  align: 'center',
}, {
  prop: 'deviceid',
  label: '车位锁编号',
  align: 'center',
}, {
  prop: 'nvalue',
  label: '信号强度',
  align: 'center',
  width: '',
  render: (h, val) => {
    var val = parseInt(val);
    if (val <= 15) {
      val = '差'
    } else if (val > 15 && val <= 25) {
      val = '良好'
    } else if (val > 25 && val <= 31) {
      val = '优'
    } else {
      val = '差'
    }
    return val
  }
}, {
  prop: 'rocker',
  label: '摇臂状态',
  align: 'center',
  width: '',
  render: (h, val) => {
    if (val == "0") {
      val = '上升'
    } else if (val == "3") {
      val = '下降'
    } else {
      val = '异常'
    }
    return val
  }
}, {
  prop: 'rocker',
  label: '是否有车',
  align: 'center',
  width: '',
  render: (h, val) => {
    if (val == "2") {
      val = '有车辆'
    } else if (val == "3") {
      val = '无车辆'
    } else {
      val = '超声波故障'
    }
    return val
  }
}, {
  prop: 'voltage',
  label: '车位锁电量',
  align: 'center',
  width: '',
},
{
  prop: 'deviccid',
  label: '流量卡卡号',
  align: 'center',
  width: '',
},
{
  prop: 'datatime',
  label: '安装时间',
  align: 'center',
  width: '',
}];
const operates = [{
  cont: '删除',
  type: 'danger',
  // size: 'small',
  icon: 'icon-delete el-icon-delete',
  plain: false,
  // disabled: false,
  method: (row, index) => {
    this.a.methods.handleDel(row, index)
  }
}];
import TableList from '../table/tablepop'
import { mapActions, mapGetters, mapState } from "vuex";
import { guidePost, toAddguide, bindPark, bindparkInPost, unbinkParkingId, toDeleParLink, toeditPark, parkDevPost, rocker, toDeleDevic, messagebox } from "../api/api"
import * as check from "@/utils/check";
export default {
  data () {
    return {
      columns,
      operates,
      selection: undefined,
      optionstable: {
        label: '全部',
        index: true,
        selection: false,
        labelIndex: '序号'
      },
      pagination: {
        currentPage: 1,
        pageSize: 10,
      },
      guideList: [],
      totals: '',
      // 修改
      addParkingLot: false,
      showDialog: false,
      addPark: false,
      innerVisible: false,
      row: '',
      did: '',
      parking: {
        parkid: "",
        parkname: ""
      },
      devid: '',
      search: {
        deviceid: '',
        deviceid: ""
      },
      // paging: {
      //   page: 1,
      //   pageSize: 10
      // },
      bindParkDate: [],
      guideData: {
        name: "",
        position: "",
        devid: "",
        color: ""
      },

      rules: check.guideData
    };
  },
  mounted () {
    this.handleSearchClick();
    this.loading = false
  },
  computed: {
    ...mapGetters({
      parkingLotInfo: "getParkingLotInfo",
      parkingLotDevList: "getParkingLotDevList"
    }),
    // ...mapState(['totals'])
  },
  created () {
    this.loading = true;
  },
  components: {
    TableList,
  },
  methods: {

    ...mapActions([
      "guide",
      "toDeleteParkdev",
      "toAddDevList",
      "toEditDevList"
    ]),
    // 分页查询
    handleChangePage (val) {
      console.log(val)
      this.pagination.currentPage = val;
      this.handleSearchClick()
    },
    // 删除设备
    handleDel (row, index) {
      let data = {
        did: row.did
      }
      messagebox("确认删除, 是否继续?", toDeleDevic, data, "删除成功", "删除失败")
      this.handleSearchClick();
    },
    repla (val) {
      this.parkingLotInfo.forEach((a, b) => {
        if (a.id == val) {
          val = a.parking_name
        }
      })
      return val
    },
    parkchange (val) {
      let obj = {};
      obj = this.parkingLotInfo.find((item) => {
        return item.parking_id === val;
      });
      this.parking.parkname = obj.parking_name;
    },
    clear () {
      this.guideData = {
        name: "",
        position: "",
        devid: "",
        color: ""
      }
    },
    trunTime (time) {
      // console.log(time)
      return this.common.obtainnewtime(time);
    },
    unbink (row) {
      console.log(row)
      this.$confirm("确认解绑, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        let params = {
          devid: row.devid,
          parkid: row.parkid
        }
        unbinkParkingId(params).then(res => {
          console.log(res);
          this.addPark = false;
          if (res.data.resCode == "0") {
            this.$message({
              type: "success",
              message: "解绑成功!"
            });
            this.handleSearchClick();
          }
        });
      }).catch(() => {
        this.$message({
          type: "info",
          message: "已取消删除"
        });
      });
    },
    handleSearchClick () {
      let params = {
        pageSize: this.pagination.pageSize,
        page: this.pagination.currentPage,
        dealer: localStorage.getItem('dealer'),
        userId: localStorage.getItem("userId")
      }
      if (this.search.deviceid) {
        params.deviceid = this.search.deviceid
      }
      if (this.search.devparasn) {
        params.devparasn = this.search.devparasn
      }
      parkDevPost(params).then(mes => {
        console.log(mes)
        if (mes.data.resCode !== "1") {
          this.totals = mes.data.count;
          this.guideList = mes.data.result;
        } else {
          this.totals = 0;
          this.guideList = [];
        }
      })
    },
    bindparkIn () {
      let params = {
        devid: this.devid,
        parkid: this.parking.parkid,
        parkname: this.parking.parkname
      }
      console.log(params);
      bindparkInPost(params).then(mes => {
        console.log(mes);
        if (mes) {
          this.innerVisible = false;
          this.addPark = false;
          this.$message({
            message: "添加成功",
            type: "success"
          });
          this.handleSearchClick();
        }
      })
    },
    bindparkList (row) {
      this.addPark = true;
      this.devid = row.devid;
      console.log(row.did);
      let params = {
        devid: row.devid
      }
      bindPark(params).then(mes => {
        console.log(mes)
        this.bindParkDate = mes.data.result;
      })
    },
    // handleCurrentChange (val) {
    //   console.log(val)
    //   this.paging.page = val
    //   this.handleSearchClick()
    // },
    // handleSizeChange (val) {
    //   this.paging.pageSize = val;
    //   this.handleSearchClick()
    // },
    // ClickAddParkinglot (guideData) {
    //   // console.log("add", this.guideData);
    //   this.$refs[guideData].validate(valid => {
    //     if (valid) {
    //       this.guideData.dealer = localStorage.getItem("dealer");
    //       console.log(this.guideData);
    //       toAddguide(this.guideData).then(res => {
    //         console.log(res);
    //         if (res) {
    //           this.showDialog = false;
    //           this.$message({
    //             message: "添加成功",
    //             type: "success"
    //           });
    //           this.handleSearchClick();
    //         }
    //       });
    //     }
    //   });
    // },
    ClickEditParkinglot (guideData) {
      this.$refs[guideData].validate(valid => {
        if (valid) {
          delete this.guideData.id;
          delete this.guideData.date;
          delete this.guideData.dealer;
          delete this.guideData.manufactor;
          console.log(this.guideData);
          toeditPark(this.guideData).then(res => {
            console.log(res);
            if (res) {
              this.showDialog = false;
              this.$message({
                message: "修改成功",
                type: "success"
              });
              this.handleSearchClick();
            }
          });
        }
      });
    },
    ClickDeleteParkinglot (id) {
      this.$confirm("确认删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let data = {
            did: id.did
          }
          console.log(data)
          toDeleDevic(data).then(res => {
            console.log(res);
            if (res) {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.handleSearchClick();
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
    handleEditParkinglot (row) {
      console.log(row);
      Object.assign(this.guideData, row);
      this.showDialog = true;
      this.addParkingLot = false;
    },
    // indexMethod (index) {
    //   return index + (this.pagination.currentPage - 1) * this.pagination.pageSize + 1;
    // }
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
.el-form-item__label {
  width: 116px !important;
}
.demoele {
  float: left;
}
</style>
