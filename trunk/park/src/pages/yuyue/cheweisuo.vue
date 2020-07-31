<template>
  <div id="cheweisuo">
    <div class="header">
      <div class="headerTitle">
        <span>{{this.gloal.ParkingList.carnumlock}}</span>
      </div>
    </div>
    <div class="select">
      <span>车位名称：</span>
      <el-input v-model="search.name"
                clearable
                placeholder="请输入内容"></el-input>
      <span>停车场名称：</span>
      <el-select v-model="search.parkingId"
                 filterable
                 placeholder="请选择">
        <el-option label="未选择"></el-option>
        <el-option v-for="item in parkIist"
                   :key="item.id"
                   :label="item.parking_name"
                   :value="item.id"></el-option>
      </el-select>
      <span>类型：</span>
      <el-select v-model="search.type"
                 placeholder="请选择">
        <el-option value=""
                   key
                   label="未选择"></el-option>
        <el-option key="1"
                   label="私家车"
                   :value="1"></el-option>
        <el-option key="2"
                   label="内部车"
                   :value="2"></el-option>
      </el-select>
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
      <el-upload class="upload-demo demoele"
                 action=""
                 :before-upload="uploadFile"
                 multiple
                 :limit="1">
        <el-button class="oyButton"
                   type="success"
                   icon="el-icon-download">导入</el-button>
      </el-upload>
    </div>
    <div class="Content">
      <el-table class="oyTable"
                :data="parkingLotDevList.list"
                style="width: 100%">
        <el-table-column type="index"
                         :index="indexMethod"
                         label="序号"
                         width="100"></el-table-column>
        <el-table-column label="车位锁编号">
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
        <el-table-column label="车位名称">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.devname }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.devname }}</div>
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
        <el-table-column label="停车场名称">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ repla(scope.row.parkid) }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ repla(scope.row.parkid) }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="备注说明楼层数">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.remark }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.remark }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="分配地址">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.mark?scope.row.mark:'-'}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.mark?scope.row.mark:'-' }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="是否立体">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.stantype==0?'躺下':'立体'}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.stantype==0?'躺下':'立体'}}</div>
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
                 @click="handleEditParkinglot(scope.row.id)"></i>
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
    <el-dialog :title="addParkingLot?'新增车位':'查看/修改车位'"
               :visible.sync="showDialog">
      <el-form ref="parkinglot"
               :inline="true"
               :model="parkinglot"
               :rules="rules">
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="类型:"
                          prop="type">
              <el-select v-model="parkinglot.type"
                         placeholder="请选择">
                <el-option value=""
                           key
                           label="未选择"></el-option>
                <el-option key="1"
                           label="私家车"
                           value="1"></el-option>
                <el-option key="2"
                           label="内部车"
                           value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="车位名称:"
                          prop="devname">
              <el-input v-model="parkinglot.devname"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="是否立体:"
                          prop="stantype">
              <el-select v-model="parkinglot.stantype"
                         placeholder="请选择">
                <el-option key="1"
                           label="立体"
                           value="1"></el-option>
                <el-option key="0"
                           label="躺下"
                           value="0"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="车位锁编号:"
                          prop="devid">
              <el-input v-model="parkinglot.devid"></el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="停车场名称:"
                          prop="parkid">
              <el-select v-model="parkinglot.parkid"
                         filterable
                         placeholder="请选择">
                <el-option label="未选择"></el-option>
                <el-option v-for="item in parkIist"
                           :key="item.id"
                           :label="item.parking_name"
                           :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="备注:"
                          prop="remark">
              <el-input v-model="parkinglot.remark"
                        placeholder="例如地下一层B区"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="分配地址:"
                          prop="mark">
              <el-input v-model="parkinglot.mark"
                        placeholder="例如地下一层B区C位"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">

          </el-col>
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
                     :total="totals"></el-pagination>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
import { getParkingLotListApi } from '../../../src/components/api/api.js';
import * as check from "@/utils/check";
export default {
  data () {
    return {
      addParkingLot: false,
      showDialog: false,
      parkIist: [],
      search: {
        parkingId: '',
        name: "",
        type: "",
        timeslot: "",
        stantype: ""
      },
      paging: {
        page: 1,
        pageSize: 10
      },
      parkinglot: {
        type: '',
        devname: "",
        stantype: "0",
        devid: "",
        parkid: "",
        remark: "",
        mark: ''
      },
      rules: check.parkinglotRules
    };
  },
  mounted () {
    this.handleSearchClick();
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
      let params = {
        page: 1,
        pageSize: 500,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer")
      };
      getParkingLotListApi(params).then(message => {
        console.log(message);
        this.parkIist = message.data.result;
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
        type: '',
        devname: "",
        stantype: "0",
        devid: "",
        parkid: "",
        remark: "",
        mark: ''
      };
    },
    // 下载文件
    downapk () {
      // const rowId = this.currentRowObject.id;
      // const rowName = this.currentRowObject.name;
      // let params = {
      //     ids: this.checkedFileId,
      //     id: rowId
      // };
      // this.$store
      //     .dispatch("DownloadFile", params)
      // axios({
      //   method:'post',
      //   url:'uploadHandle/downloadFile'
      // })

    },
    uploadFile (file) {
      let that = this;
      var formData = new FormData();
      formData.append('file', file);
      var file = formData;

      axios({
        method: 'post',
        url: 'http://192.168.2.195:8762/web/parkingdevList/parkingDevListByExcel',
        data: file
      }).then(function (message) {
        console.log(message)
        that.handleSearchClick()
      })
    },
    handleSearchClick () {
      let params = {
        pageSize: this.paging.pageSize,
        page: this.paging.page
      }
      if (this.search.name) {
        params.devname = this.search.name
      }
      if (this.search.type) {
        params.type = this.search.type
      }
      if (this.search.parkingId) {
        params.parkid = this.search.parkingId
      }
      this.initParkingDevList(params)
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
      console.log("add", this.parkinglot);
      this.$refs[parkinglot].validate(valid => {
        if (valid) {
          this.toAddDevList(this.parkinglot).then(res => {
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
    ClickEditParkinglot (parkinglot) {
      this.$refs[parkinglot].validate(valid => {
        if (valid) {
          console.log(this.parkinglot);
          this.toEditDevList(this.parkinglot).then(res => {
            console.log(res);
            if (res.data.resCode == "200") {
              this.showDialog = false;
              this.$message({
                message: "修改成功",
                type: "success"
              });
              this.handleSearchClick();
            } else {
              this.showDialog = false;
              this.$message({
                message: res.data.msg,
                type: "error"
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
          this.toDeleteParkdev({ id: id }).then(res => {
            console.log(res);
            if (res.data.resCode == "500") {
              this.$message({
                type: "error",
                message: res.data.msg
              });
            } else {
              this.$message({
                type: "success",
                message: res.data.msg
              });
              window.location.reload()
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
    handleEditParkinglot (id) {
      let info = this.$store.getters.getParkingLotDevListByid(id);
      console.log(info);
      Object.assign(this.parkinglot, info);
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
</style>
