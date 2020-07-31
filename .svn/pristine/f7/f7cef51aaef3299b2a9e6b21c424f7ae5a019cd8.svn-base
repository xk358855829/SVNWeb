<template>
  <div id="equipmentList">
    <div class="header">
      <div class="headerTitle">
        <span>摄像头管理</span>
      </div>
    </div>
    <div class="select">
      <!-- <span>站点名称：</span>
      <el-select v-model="search.sid" filterable placeholder="请选择">
        <el-option label="未选择"></el-option>
        <el-option v-for="item in parkIist" :key="item.sid" :label="item.sname" :value="item.sid"></el-option>
      </el-select> -->
      <span>设备名称：</span>
      <el-select v-model="search.alias" filterable placeholder="请选择" clearable>
        <el-option>未选择</el-option>
        <el-option v-for="item in equipmentlist" :key="item.id" :label="item.alias" :value="item.alias"></el-option>
      </el-select>
      <!-- <el-input v-model="search.alias" clearable placeholder="请输入内容"></el-input> -->
    </div>
    <div class="select">
      <el-button
        type="success"
        class="oyButton"
        icon="el-icon-plus"
        @click="addBox = true,editBox = false,clear()"
      >添加</el-button>
      <el-button type="success" class="oyButton" icon="el-icon-search" @click="handleSearchClick">查询</el-button>
      <!-- <el-button type="success" class="oyButton" icon @click="downapk">下载文件</el-button> -->
    </div>
    <div class="Content">
      <el-table class="oyTable" :data="tableData" style="width: 100%">
        <el-table-column type="index" :index="indexMethod" label="序号" width="100"></el-table-column>
        <el-table-column label="设备序号">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.deviceId }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.deviceId }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="设备名称">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.alias }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.alias }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <!-- <el-table-column label="洗车机站点名称">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.sid == 0 ? "未绑定" : chosesname(scope.row.sid) }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.sid == 0 ? "未绑定" : chosesname(scope.row.sid) }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column> -->
        <el-table-column label="创建时间">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.date | validate }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.date | validate }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <!-- <el-tooltip class="item" effect="dark" content="设置" placement="top">
              <i class="icon-change el-icon-setting" @click="handleset(scope.row.eid)"></i>
            </el-tooltip>-->
            <el-tooltip class="item" effect="dark" content="修改" placement="top">
              <i class="icon-change el-icon-edit" @click="handleEditequipment(scope.row)"></i>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="删除" placement="top">
              <i class="icon-delete el-icon-delete" @click="ClickDeleteequipment(scope.row.id)"></i>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- <el-dialog :title="`柜门信息 设备编号：${deviceId}`" :visible.sync="realBox">
      <div class="shebeiguanli-box">
        <el-tooltip
          v-for="(item,index) in cellList"
          placement="top"
          title="标题"
          width="200"
          trigger="hover"
          :key="index"
        >
          <div slot="content">
            柜号：{{item.cabinet}}
            <br />
            名称：{{item.type_name}}
            <br />
            柜子地址：{{item.email}}
            <br />
            开柜码：{{item.number}}
            <br />
            状态：{{item.openstate | box_state}}
          </div>
          <div :class="['shebeiguanli-box-cell',item.openstate === '0'? 'green': 'yellow']"></div>
        </el-tooltip>
      </div>
      <el-row style="text-align:right;margin-top:20px;">
        <el-button type="success" @click="realBox = false">确 定</el-button>
      </el-row>
    </el-dialog>-->
    <!-- <el-dialog title="上传图片" :visible.sync="imgBox">
      <div>
        <span>上传储物柜图片</span>
        <br />
        <br />
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :limit="5"
          :on-exceed="hangds"
          :before-upload="beforeAvatarUpload"
          :http-request="requast"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
      </div>
      <div style="text-align:center;">
        <span>上传储物柜apk文件</span>
        <br />
        <br />
        <el-upload
          class="upload-demo"
          drag
          :on-preview="lck"
          :on-exceed="hangd"
          :limit="1"
          :http-request="requasts"
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
        </el-upload>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="success" class="oyButton" @click="imgBox = false">取消</el-button>
        <el-button type="success" class="oyButton" @click="tijiao()">提交</el-button>
      </div>
    </el-dialog>-->
    <el-dialog :title="editBox?'查看修改摄像头':'添加摄像头'" :visible.sync="addBox">
      <el-form ref="equipment" :inline="true" :model="equipment" :rules="rules">
        <el-row type="flex" class="row-bg" justify="end">
          <!-- <el-col :span="12">
            <el-form-item label="站点名称" prop="sid">
              <el-select v-model="equipment.sid" placeholder="请选择" :disabled="editBox">
                <el-option value key label="未选择"></el-option>
                <el-option
                  v-for="item in parkIist"
                  :key="item.sid"
                  :label="item.sname"
                  :value="item.sid"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col> -->
          <el-col :span="12">
            <el-form-item label="设备名称" prop="alias">
              <el-input v-model="equipment.alias"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="设备序号" prop="deviceId">
              <el-input v-model="equipment.deviceId"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- <el-row type="flex" class="row-bg" justify="end">
          <el-col :span="12">
            <el-form-item label="设备id" prop="alias">
              <el-input v-model="equipment.deviceId"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row> -->
        <el-row style="text-align:right;">
          <el-button @click="addBox = false">取 消</el-button>
          <el-button
            type="success"
            @click="editBox? ClickEditEquipment('equipment') :ClickAddEquipment('equipment')"
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
        :page-sizes="[10,15,20]"
        :page-size="paging.pageSize"
        layout="sizes, prev, pager, next, jumper,total"
        :total="paging.total"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import SyElTable from "@/components/table/SyElTable";
import * as check from "@/utils/check";
import pageSize from "@/components/pageSize";
import {
  imgupload,
  apkupload,
  cunupload,
  getsiteList,
  getcameraEquipment,
  addcameraEquipment,
  delcameraEquipment,
  exitcameraEquipment
} from "../../components/api/api.js";
import { mapActions, mapGetters, mapState } from "vuex";
import { nowDate } from "../../../common/common.js";
export default {
  components: {
    SyElTable,
    pageSize
  },
  data() {
    return {
      search: {
        alias: ""
      },
      paging: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      tableData: [],
      parkIist: [],
      equipment: {
        sid: 0,
        deviceId: "",
        alias: "",
        dealer: ""
      },
      equipmentlist:[],

      addBox: false,
      imgBox: false,
      editBox: false,
      realBox: false,

      arrtable: [],

      deviceId: 0,
      rules: check.cameraequipmentRules
    };
  },
  mounted() {
    this.getwashsiteList();
    this.handleSearchClick();
  },
  computed: {
    // ...mapState(["gstylelast", "mySalePlans", "parkLotInfo"]),
    // ...mapGetters({
    //   equipmentList: "getEquipmentList",
    //   parkingLotInfo: "getParkingLotInfo",
    //   parkingLotDevList: "getParkingLotDevList",
    //   cellList: "getCellList"
    // })
  },

  methods: {
    // ...mapActions([
    //   "initEquipmentList",
    //   "toAddEquipment",
    //   "toEditEquipment",
    //   "getRealBox",
    //   // "toDeletEquipment"
    // ]),
    lck(flie) {
      console.log(file);
    },
    tijiao() {
      console.log(this.deviceId);
      var t = "";
      this.arrtable.forEach((a, b) => {
        t += a + ",";
      });
      t = t.substring(0, t.length - 1);
      console.log(t);
      let data = {
        file: t,
        eid: this.deviceId
      };
      cunupload(data).then(res => {
        if (res.data.resCode == 0) {
          this.$message({
            message: "保存成功",
            type: "success"
          });
          this.imgBox = false;
        } else {
          this.$message({
            message: "保存失败",
            type: "success"
          });
        }
      });
    },
    getwashsiteList() {
      let params = {
        page: 1,
        pageSize: 500,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer")
      };
      getsiteList(params).then(message => {
        console.log(message);
        if (message.data.result.length > 0) {
          for (var i = 0; i < message.data.result.length; i++) {
            let list = {
              sid: message.data.result[i].sid,
              sname: message.data.result[i].sname
            };
            this.parkIist.push(list);
          }
          console.log(this.parkIist);
        } else {
          this.parkIist = [];
        }
      });
    },
    handleSearchClick() {
      let that = this;
      let data = {};
      if (this.search.alias) {
        data.alias = this.search.alias;
      }
      data.page = this.paging.page;
      data.pageSize = this.paging.pageSize;
      data.userId = localStorage.getItem("userId");
      data.dealer = localStorage.getItem("dealer");
      getcameraEquipment(data).then(function(message) {
        console.log(message.data);
        if (message.data.resCode == 0) {
          that.tableData = message.data.result;
          that.paging.total = message.data.count;
          for(var i = 0;i < message.data.count;i++){
            let list = {id:message.data.result[i].id,alias:message.data.result[i].alias};
            that.equipmentlist.push(list);
          }
        } else {
          that.tableData = [];
          that.paging.total = 0;
        }
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    clear() {
      this.equipment = {
        sid: 0,
        deviceId: "",
        alias: "",
        dealer: ""
      };
    },
    indexMethod(index) {
      return index + (this.paging.page - 1) * this.paging.pageSize + 1;
    },
    handleSizeChange(val) {
      this.paging.pageSize = val;
      this.handleSearchClick();
    },
    handleCurrentChange(val) {
      this.paging.page = val;
      this.handleSearchClick();
    },
    ClickAddEquipment(equipment) {
      this.$refs[equipment].validate(valid => {
        if (valid) {
          this.equipment.dealer = localStorage.getItem("dealer");
          this.equipment.date = this.common.nowDate();
          console.log(this.equipment);
          addcameraEquipment(this.equipment).then(res => {
            console.log(res);
            if (res) {
              this.addBox = false;
              this.$message({
                message: "添加成功",
                type: "success"
              });
              this.handleSearchClick();
            } else {
              this.$message({
                message: "添加失败",
                type: "warning"
              });
            }
          });
        }
      });
    },
    ClickEditEquipment(equipment) {
      this.$refs[equipment].validate(valid => {
        if (valid) {
          let data = {};
          data.dealer = localStorage.getItem("dealer");
          data.sid = this.equipment.sid;
          data.id = this.equipment.id;
          data.alias = this.equipment.alias;
          data.deviceId = this.equipment.deviceId;
          exitcameraEquipment(data).then(res => {
            console.log(res);
            if (res.data.resCode == 0) {
              this.addBox = false;
              this.$message({
                message: "修改成功",
                type: "success"
              });
              this.handleSearchClick();
            }else{
              this.$message({
                message: res.data.errMsg,
                type: "error"
              });
            }
          });
        }
      });
    },
    ClickDeleteequipment(id) {
      this.$confirm("确认删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          console.log('1');
          delcameraEquipment({id:id}).then(res => {
            console.log(res);
            if (res) {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.handleSearchClick();
            }else{
              this.$message({
                type: "error",
                message: "删除失败!"
              });
            }
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleEditequipment(row) {
      this.equipment = row;
      this.editBox = true;
      this.addBox = true;
    },
    hangd(files, fileList) {
      if (fileList.length == 1) {
        this.$message({
          type: "error",
          message: "最多添加一个apk文件"
        });
      }
    },
    hangds(files, fileList) {
      if (fileList.length == 5) {
        this.$message({
          type: "error",
          message: "最多上传5张图片"
        });
      }
    },
    async requasts(a) {
      var formdata = new FormData();
      formdata.append("file", a.file);
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      let res = await apkupload(formdata, config);
      if (res.data.resCode == 0) {
        console.log(res);
      }
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
    async requast(a) {
      var formdata = new FormData();
      formdata.append("file", a.file);
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      let res = await imgupload(formdata, config);
      if (res.data.resCode == 0) {
        console.log(res);
        console.log(res.data.imageUrl);
        this.$message.success("上传图片成功");
        this.arrtable.push(res.data.imageUrl);
      }
    },
    handleset(id) {
      this.deviceId = id;
      this.imgBox = true;
    },
    handleRealTime(id) {
      this.deviceId = id;
      let res = this.getRealBox({ id: id });
      if (res) {
        console.log(this.$store.state, this.cellList);
        this.realBox = true;
      }
    },
    chosesname(val) {
      this.parkIist.forEach((a, index) => {
        if (a.sid == val) {
          val = a.sname;
        }
      });
      return val;
    }
  }
};
</script>
<style lang="scss" scoped>
#equipmentList {
  padding: 20px;
}
.shebeiguanli-box {
  width: 340px;
  margin: 0 auto;
  .shebeiguanli-box-cell {
    width: 50px;
    height: 50px;
    margin: 10px;
    border-radius: 10px;
    display: inline-table;
  }
}
.red {
  background: #f56c6c;
}
.yellow {
  background: #e6a23c;
}
.green {
  background: #67c23a;
}
.gray {
  background: #909399;
}
.el-tag {
  color: white;
}
.el-input__inner,
.el-input {
  width: 180px !important;
}
</style>


