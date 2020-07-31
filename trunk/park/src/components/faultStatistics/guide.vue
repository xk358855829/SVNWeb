<template>
  <div id="cheweisuo">
    <div class="header">
      <div class="headerTitle">
        <span>车牌引导</span>
      </div>
    </div>
    <div class="select">
      <span>设备名称：</span>
      <el-input v-model="search.name"
                clearable
                placeholder="请输入内容"></el-input>
      <span>设备编号：</span>
      <el-input v-model="search.devid"
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
      <!-- <el-upload
				class="upload-demo demoele"
				action=""
				:before-upload="uploadFile"
				multiple
				
				:limit="1">
				<el-button class="oyButton" type="success" icon="el-icon-download" >导入</el-button> 
			</el-upload> -->
    </div>
    <div class="Content">
      <el-table class="oyTable"
                :data="guideList"
                style="width: 100%">
        <el-table-column type="index"
                         :index="indexMethod"
                         label="序号"
                         width="100"></el-table-column>
        <el-table-column label="车牌引导设备编号">
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
        <el-table-column label="设备名称">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.name }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.name }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <!-- <el-table-column label="编号">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.number }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.number }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column> -->
        <el-table-column label="设备地址">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.position }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.position }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="设备颜色">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.color }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.color }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="安装时间">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ trunTime(scope.row.date.time)}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{trunTime(scope.row.date.time)}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作"
                         width="150">
          <template slot-scope="scope">
            <el-tooltip class="item"
                        effect="dark"
                        content="修改"
                        placement="top">
              <i class="icon-change el-icon-edit"
                 @click="handleEditParkinglot(scope.row)"></i>
            </el-tooltip>
            <el-tooltip class="item"
                        effect="dark"
                        content="绑定"
                        placement="top">
              <i class="icon-See el-icon-sort"
                 @click="bindparkList(scope.row)"></i>
            </el-tooltip>
            <el-tooltip class="item"
                        effect="dark"
                        content="删除"
                        placement="top">
              <i class="icon-delete el-icon-delete"
                 @click="ClickDeleteParkinglot(scope.row)"></i>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
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
import { mapActions, mapGetters, mapState } from "vuex";
import { guidePost, toAddguide, bindPark, bindparkInPost, unbinkParkingId, toDeleParLink, toeditPark } from "../api/api"
import * as check from "@/utils/check";
export default {
  data () {
    return {
      addParkingLot: false,
      showDialog: false,
      addPark: false,
      innerVisible: false,
      row: '',
      guideList: [],
      did: '',
      parking: {
        parkid: "",
        parkname: ""
      },
      devid: '',
      search: {
        devid: '',
        name: ""
      },
      paging: {
        page: 1,
        pageSize: 10
      },
      bindParkDate: [],
      guideData: {
        name: "",
        position: "",
        devid: "",
        color: ""
      },
      totals: '',
      rules: check.guideData
    };
  },
  mounted () {
    this.handleSearchClick();
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
      "guide",
      "toDeleteParkdev",
      "toAddDevList",
      "toEditDevList"
    ]),
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
        pageSize: this.paging.pageSize,
        page: this.paging.page,
        dealer: localStorage.getItem('dealer'),
        userId: localStorage.getItem("userId")
      }
      if (this.search.name) {
        params.name = this.search.name
      }
      if (this.search.devid) {
        params.devid = this.search.devid
      }
      guidePost(params).then(mes => {
        console.log(mes)
        if (mes.data.resCode != 1) {
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
    handleCurrentChange (val) {
      console.log(val)
      this.paging.page = val
      this.handleSearchClick()
    },
    handleSizeChange (val) {
      this.paging.pageSize = val;
      this.handleSearchClick()
    },
    ClickAddParkinglot (guideData) {
      // console.log("add", this.guideData);
      this.$refs[guideData].validate(valid => {
        if (valid) {
          this.guideData.dealer = localStorage.getItem("dealer");
          console.log(this.guideData);
          toAddguide(this.guideData).then(res => {
            console.log(res);
            if (res) {
              this.showDialog = false;
              this.$message({
                message: "添加成功",
                type: "success"
              });
              this.handleSearchClick();
            }
          });
        }
      });
    },
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
          toDeleParLink(data).then(res => {
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
.el-form-item__label {
  width: 116px !important;
}
.demoele {
  float: left;
}
.el-table td,
.el-table th {
  text-align: center;
}
</style>
