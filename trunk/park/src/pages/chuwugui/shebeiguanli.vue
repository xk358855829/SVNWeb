<template>
  <div id="equipmentList">
    <div class="header">
      <div class="headerTitle">
        <span>设备管理</span>
      </div>
    </div>
    <div class="select">
      <span>停车场名称：</span>
      <el-select v-model="search.id"
                 filterable
                 placeholder="请选择">
        <el-option label="未选择"></el-option>
        <el-option v-for="item in parkIist"
                   :key="item.id"
                   :label="item.parking_name"
                   :value="item.parking_id"></el-option>
      </el-select>
      <span>设备编号：</span>
      <el-input v-model="search.deviceId"
                clearable
                placeholder="请输入内容"></el-input>
    </div>
    <div class="select">
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-plus"
                 @click="addBox = true,editBox = false,clear()">添加</el-button>
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-search"
                 @click="handleSearchClick">查询</el-button>
      <el-button type="success"
                 class="oyButton"
                 icon=""
                 @click="downapk">下载文件</el-button>
    </div>
    <div class="Content">
      <el-table class="oyTable"
                :data="equipmentList.list"
                style="width: 100%">
        <el-table-column type="index"
                         :index="indexMethod"
                         label="序号"
                         width="100"></el-table-column>
        <el-table-column label="停车场名称">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ (scope.row.parking_name)}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ (scope.row.parking_name)}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="钥匙柜名称">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.codestyle }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.codestyle }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="钥匙柜地址">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.boxId }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.boxId }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="钥匙柜编号">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.deviceId }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.deviceId }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="钥匙柜状态">
          <template slot-scope="scope">
            <!-- <el-popover trigger="hover" placement="top"> -->
            <!-- <p class="TsMaxWidth">{{ scope.row.boxType }}</p>
                <div slot="reference" class="name-wrapper">
                  <div class="overflowHide">{{ scope.row.boxType }}</div>
              </div>-->
            <div slot="reference"
                 class="name-wrapper">
              <el-tag :color="scope.row.state == '1' ? '#f8c541':'#5daf34'">{{scope.row.state == '1'? '已使用':'未使用'}}</el-tag>
            </div>
            <!-- </el-popover> -->
          </template>
        </el-table-column>
        <el-table-column label="操作"
                         width="150">
          <template slot-scope="scope">
            <el-tooltip class="item"
                        effect="dark"
                        content="设置"
                        placement="top">
              <i class="icon-change el-icon-setting"
                 @click="handleset(scope.row.eid)"></i>
            </el-tooltip>
            <el-tooltip class="item"
                        effect="dark"
                        content="实时柜门"
                        placement="top">
              <i class="icon-See el-icon-search"
                 @click="handleRealTime(scope.row.deviceId)"></i>
            </el-tooltip>
            <el-tooltip class="item"
                        effect="dark"
                        content="修改"
                        placement="top">
              <i class="icon-change el-icon-edit"
                 @click="handleEditequipment(scope.row.eid)"></i>
            </el-tooltip>

            <el-tooltip class="item"
                        effect="dark"
                        content="删除"
                        placement="top">
              <i class="icon-delete el-icon-delete"
                 @click="ClickDeleteequipment(scope.row.eid,scope.row.deviceId)"></i>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :title="`柜门信息 设备编号：${deviceId}`"
               :visible.sync="realBox">
      <div class="shebeiguanli-box">
        <!-- <div class="shebeiguanli-box-row"> -->
        <el-tooltip v-for="(item,index) in cellList"
                    placement="top"
                    title="标题"
                    width="200"
                    trigger="hover"
                    :key="index">
          <div slot="content">
            柜号：{{item.cabinet}}
            <br> 名称：{{item.type_name}}
            <br> 柜子地址：{{item.email}}
            <br> 开柜码：{{item.number}}
            <br> 状态：{{item.openstate | box_state}}
          </div>
          <div :class="['shebeiguanli-box-cell',item.openstate === '0'? 'green': 'yellow']"></div>
        </el-tooltip>
      </div>
      <el-row style="text-align:right;margin-top:20px;">
        <el-button type="success"
                   @click="realBox = false">确 定</el-button>
      </el-row>
    </el-dialog>
    <el-dialog title="上传图片"
               :visible.sync="imgBox">
      <div>
        <span>上传储物柜图片</span>
        <br> <br>
        <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                   list-type="picture-card"
                   :limit="5"
                   :on-exceed="hangds"
                   :before-upload="beforeAvatarUpload"
                   :http-request="requast"
                   :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
      </div>
      <div style="text-align:center;">
        <span>上传储物柜apk文件</span>
        <br> <br>
        <el-upload class="upload-demo"
                   drag
                   :on-preview="lck"
                   :on-exceed="hangd"
                   :limit="1"
                   :http-request="requasts"
                   multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或
            <em>点击上传</em>
          </div>
        </el-upload>
      </div>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="imgBox = false">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="tijiao()">提交</el-button>
      </div>
    </el-dialog>
    <el-dialog :title="editBox?'查看修改钥匙柜':'添加钥匙柜'"
               :visible.sync="addBox">
      <el-form ref="equipment"
               :inline="true"
               :model="equipment"
               :rules="rules">
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="停车场"
                          prop="id">
              <el-select v-model="equipment.id"
                         placeholder="请选择"
                         :disabled="editBox">
                <el-option value=""
                           key
                           label="未选择"></el-option>
                <el-option v-for="item in parkIist"
                           :key="item.id"
                           :label="item.parking_name"
                           :value="item.parking_id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="颜色"
                          prop="color">
              <el-input v-model="equipment.color"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="钥匙柜地址"
                          prop="location">
              <el-input v-model="equipment.location"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="格数"
                          prop="cabinet">
              <el-input v-model="equipment.cabinet"
                        :disabled="editBox"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="设备编号"
                          prop="deviceId">
              <el-input v-model="equipment.deviceId"
                        :disabled="editBox"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <!-- <el-form-item label="柜号" prop="cabinet">
              <el-input v-model="equipment.cabinet"></el-input>
            </el-form-item> -->
            <el-form-item label="钥匙柜名称"
                          prop="codestyle">
              <el-input v-model="equipment.codestyle"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <!-- <el-form-item label="钥匙柜名称" prop="typeName">
              <el-input v-model="equipment.codestyle"></el-input>
            </el-form-item> -->
          </el-col>
          <el-col :span="12">
            <!-- <el-form-item label="柜子地址" prop="email">
              <el-input v-model="equipment.email"></el-input>
            </el-form-item> -->
          </el-col>
        </el-row>
        <!-- <el-form-item label="柜子编码" prop="code">
          <el-input v-model="equipment.code"></el-input>
        </el-form-item> -->
        <el-row style="text-align:right;">
          <el-button @click="addBox = false">取 消</el-button>
          <el-button type="success"
                     @click="editBox? ClickEditEquipment('equipment') :ClickAddEquipment('equipment')">确 定</el-button>
        </el-row>
      </el-form>
    </el-dialog>
    <div class="footer">
      <pageSize @code="pageInfo"
                :messages="equipmentList.count"></pageSize>
    </div>
  </div>
</template>
<script>
import SyElTable from "@/components/table/SyElTable";
import * as check from "@/utils/check";
import pageSize from "@/components/pageSize";
import { imgupload, apkupload, cunupload, getParkingLotListApi } from '../../components/api/api.js'
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  components: {
    SyElTable,
    pageSize
  },
  mounted () {
    console.log(this.cellList);
    // this.getParkingLotListApiList();
    // this.handleSearchClick ();
  },
  created () {
    this.initEquipmentList();
  },
  computed: {
    ...mapState(['gstylelast', 'mySalePlans', 'parkLotInfo']),
    parkIist () {
      return this.$store.state.ONEreslist
    },
    ...mapGetters({
      equipmentList: "getEquipmentList",
      parkingLotInfo: "getParkingLotInfo",
      parkingLotDevList: "getParkingLotDevList",
      cellList: "getCellList"
    })
  },
  data () {
    return {
      addBox: false,
      imgBox: false,
      editBox: false,
      realBox: false,
      // parkingId: '',
      search: {
        codestyle: "",
        deviceId: "",
        id: ''
      },
      paging: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      arrtable: [],
      equipment: {
        eid: 0,
        id: "",
        location: "",
        lattice: "",
        deviceId: "",
        cabinet: "",
        color: "",
        codestyle: "",
        typeName: "",
        email: "",
        code: "",
        state: 0
      },
      deviceId: 0,
      rules: check.equipmentRules
    };
  },
  methods: {
    ...mapActions([
      "initEquipmentList",
      "toAddEquipment",
      "toEditEquipment",
      "getRealBox",
      "toDeletEquipment"
    ]),
    lck (flie) {
      console.log(file)
    },
    // getParkingLotListApiList () {
    //   let params = {
    //     page: 1,
    //     pageSize: 0,
    //     userId: localStorage.getItem("userId"),
    //     dealer: localStorage.getItem("dealer")
    //   };
    //   getParkingLotListApi(params).then(message => {
    //     this.parkIist = message.data.result;
    //   });
    // },
    tijiao () {
      console.log(this.deviceId)
      var t = ''
      this.arrtable.forEach((a, b) => {
        t += a + ','
      })
      t = t.substring(0, t.length - 1)
      console.log(t)
      let data = {
        file: t,
        eid: this.deviceId
      }
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
      })
    },
    handleSearchClick () {
      this.initEquipmentList(this.search)
    },
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    clear () {
      this.equipment = {
        id: "",
        location: "",
        lattice: "",
        deviceId: "",
        cabinet: "",
        color: "",
        typeName: "",
        codestyle: "",
        email: "",
        code: "",
        state: 0,
        eid: 0
      };
    },
    indexMethod (index) {
      return index + (this.paging.page - 1) * this.paging.pageSize + 1;
    },
    pageInfo (info) {
      this.initEquipmentList({
        page: info.currentPage,
        pagesize: info.pageSize
      });
    },
    ClickAddEquipment (equipment) {
      this.$refs[equipment].validate(valid => {
        if (valid) {
          this.toAddEquipment(this.equipment).then(res => {
            console.log(res);
            if (res) {
              this.addBox = false;
              this.$message({
                message: "添加成功",
                type: "success"
              });
              this.initEquipmentList();
            }
          });
        }
      });
    },
    ClickEditEquipment (equipment) {
      this.$refs[equipment].validate(valid => {
        if (valid) {
          console.log(this.equipment);
          this.toEditEquipment(this.equipment).then(res => {
            console.log(res);
            if (res) {
              this.addBox = false;
              this.$message({
                message: "修改成功",
                type: "success"
              });
              this.initEquipmentList();
            }
          });
        }
      });
    },
    ClickDeleteequipment (eid, deviceid) {
      this.$confirm("确认删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.toDeletEquipment({ eid: eid, deviceid: deviceid }).then(res => {
            console.log(res);
            if (res) {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.initEquipmentList();
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
    handleEditequipment (id) {
      let info = this.$store.getters.getEquipment(id);
      console.log(info);
      Object.assign(this.equipment, info);
      this.editBox = true;
      this.addBox = true;
    },
    hangd (files, fileList) {
      if (fileList.length == 1) {
        this.$message({
          type: "error",
          message: "最多添加一个apk文件"
        });
      }
    },
    hangds (files, fileList) {
      if (fileList.length == 5) {
        this.$message({
          type: "error",
          message: "最多上传5张图片"
        });
      }
    },
    async requasts (a) {
      var formdata = new FormData()
      formdata.append('file', a.file)
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      let res = await apkupload(formdata, config)
      if (res.data.resCode == 0) {
        console.log(res)
      }
    },
    beforeAvatarUpload (file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isLt2M;
    },
    async requast (a) {
      var formdata = new FormData()
      formdata.append('file', a.file)
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      let res = await imgupload(formdata, config)
      if (res.data.resCode == 0) {
        console.log(res)
        console.log(res.data.imageUrl)
        this.$message.success('上传图片成功');
        this.arrtable.push(res.data.imageUrl)

      }
    },
    handleset (id) {
      this.deviceId = id;
      this.imgBox = true
    },
    handleRealTime (id) {
      this.deviceId = id;
      let res = this.getRealBox({ id: id });
      if (res) {
        console.log(this.$store.state, this.cellList);
        this.realBox = true;
      }
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
  width: 200px !important;
}
</style>


