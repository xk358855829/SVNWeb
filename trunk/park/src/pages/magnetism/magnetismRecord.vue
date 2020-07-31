<template>
  <div id="equipmentList">
    <div class="header">
      <div class="headerTitle">
        <router-link to="/pageHome/magnetismList" tag="span">地磁管理</router-link>
        <router-link class="router-link-active" to="/pageHome/magnetismRecord" tag="span">设备记录</router-link>
      </div>
    </div>
    <div class="select">
      <!-- <span>停车场名称：</span>
      <el-select v-model="search.sid" filterable placeholder="请选择">
        <el-option label="未选择"></el-option>
        <el-option v-for="item in parkIist" :key="item.sid" :label="item.sname" :value="item.sid"></el-option>
      </el-select> -->
      <span>MAC地址：</span>
      <!-- <el-select v-model="search.deviceid" filterable placeholder="请选择" clearable>
        <el-option>未选择</el-option>
        <el-option v-for="item in equipmentlist" :key="item.id" :label="item.deviceid" :value="item.deviceid"></el-option>
      </el-select> -->
      <el-input v-model="search.mac" clearable placeholder="请输入内容"></el-input>
    </div>
    <div class="select">
      <!-- <el-button
        type="success"
        class="oyButton"
        icon="el-icon-plus"
        @click="addBox = true,editBox = false,clear()"
      >添加</el-button> -->
      <el-button type="success" class="oyButton" icon="el-icon-search" @click="handleSearchClick">查询</el-button>
      <!-- <el-button type="success" class="oyButton" icon @click="downapk">下载文件</el-button> -->
    </div>
    <div class="Content">
      <el-table class="oyTable" :data="tableData" style="width: 100%">
        <el-table-column type="index" :index="indexMethod" label="序号" width="100"></el-table-column>
        <!-- <el-table-column label="停车场名称">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.sname }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.sname }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column> -->
        <el-table-column label="MAC地址">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.mac }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.mac }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="地磁安装的泊位编号">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.berthcode }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.berthcode }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>                
        <el-table-column label="地磁信号(dBm)">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.rsrp }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.rsrp }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="电池电压(mV)">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.voltage }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.voltage }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="地磁状态">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag
                color="#5daf34"
                v-if="scope.row.status==0"
              >空闲</el-tag>
              <el-tag
                color="#c9521e"
                v-if="scope.row.status==1"
              >占用</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="上报时间">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.uploadtime | validate }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.uploadtime | validate }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="消息类型">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" v-if="scope.row.datatype==1">
              <p class="TsMaxWidth">业务数据</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">业务数据</div>
              </div>
            </el-popover>
            <el-popover trigger="hover" placement="top" v-if="scope.row.datatype==2">
              <p class="TsMaxWidth">心跳信息</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">心跳信息</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <!-- <el-table-column label="地磁操作">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag
                color="#5daf34"
                v-if="scope.row.succ==2"
              >正常</el-tag>
              <el-tag
                color="#f8c541"
                v-else-if="scope.row.succ==0"
              >异常</el-tag>
            </div>
          </template>
        </el-table-column> -->
        
        <!-- <el-table-column label="操作" width="150">
          <template slot-scope="scope"> -->
            <!-- <el-tooltip class="item" effect="dark" content="设置" placement="top">
              <i class="icon-change el-icon-setting" @click="handleset(scope.row.eid)"></i>
            </el-tooltip>-->
            <!-- <el-tooltip class="item" effect="dark" content="修改" placement="top">
              <i class="icon-change el-icon-edit" @click="handleEditequipment(scope.row)"></i>
            </el-tooltip> -->
            <!-- <el-tooltip v-if="scope.row.bindcarid==0" class="item" effect="dark" content="绑定摄像头" placement="top">
              <i class="jilu iconfont icon-yuanchengkongzhi" @click="bind(scope.row)"></i>
            </el-tooltip>
            <el-tooltip v-else="" class="item" effect="dark" content="解绑摄像头" placement="top">
              <i class="jilu iconfont icon-bangding" @click="nobind(scope.row)"></i>
            </el-tooltip> -->
            <!-- <el-tooltip class="item" effect="dark" content="删除" placement="top">
              <i class="icon-delete el-icon-delete" @click="ClickDeleteequipment(scope.row.id)"></i>
            </el-tooltip> -->
          <!-- </template>
        </el-table-column> -->
      </el-table>
    </div>
    <el-dialog :title="editBox?'查看修改洗车机':'添加洗车机'" :visible.sync="addBox">
      <el-form ref="equipment" :inline="true" :model="equipment" :rules="rules">
        <el-row type="flex" class="row-bg" justify="end">
          <el-col :span="12">
            <el-form-item label="设备序号" prop="deviceid">
              <el-input :disabled="editBox" v-model="equipment.deviceid"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="设备名称" prop="alias">
              <el-input v-model="equipment.alias"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="end" v-if="editBox">
          <el-col :span="12">
            <!-- <el-form-item label="设备名称" prop="alias">
              <el-input v-model="equipment.alias"></el-input>
            </el-form-item> -->
            <el-form-item label="摄像头名称" prop="alias">
              <el-select v-model="binddeviceid1" placeholder="请选择摄像头" disabled="true">
              <el-option
                v-for="nice in bindcamera"
                :key="nice.carid"
                :label="nice.name"
                :value="nice.carid"
              ></el-option>
            </el-select>
            </el-form-item>            
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
        <el-row style="text-align:right;">
          <el-button @click="addBox = false">取 消</el-button>
          <el-button
            type="success"
            @click="editBox? ClickEditEquipment('equipment') :ClickAddEquipment('equipment')"
          >确 定</el-button>
        </el-row>
      </el-form>
    </el-dialog>
    <el-dialog title="绑定摄像头" :visible.sync="universal1.bind">
      <div class="totalcard">
        <div class="leftcard">
          <span class="spanClass">
            <span class="aKey">*</span>摄像头名称：</span>
          <el-select v-model="binddeviceid" placeholder="请选择摄像头" clearable>
            <el-option
              v-for="nice in camera"
              :key="nice.deviceId"
              :label="nice.alias"
              :value="nice.deviceId"
            ></el-option>
          </el-select>
        </div>
        <span class="spanClass">备注：</span>
        <div class="little">{{this.$store.state.size}}</div>
      </div>      
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="universal1.bind=false">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="barrierclick">确定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="解绑摄像头" :visible.sync="universal1.nobind">
      <div class="totalcard">
        <div class="leftcard">
          <span class="spanClass">
            <span class="aKey">*</span>摄像头名称：</span>
          <el-select v-model="binddeviceid1" placeholder="请选择摄像头">
            <el-option
              v-for="nice in bindcamera"
              :key="nice.carid"
              :label="nice.name"
              :value="nice.carid"
            ></el-option>
          </el-select>
        </div>
        <span class="spanClass">备注：</span>
        <div class="little">{{this.$store.state.size}}</div>
      </div>      
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="universal1.nobind=false">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="nobindclick">解绑</el-button>
      </div>
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
import Qs from "qs";
import SyElTable from "@/components/table/SyElTable";
import * as check from "@/utils/check";
import pageSize from "@/components/pageSize";
import {
  imgupload,
  apkupload,
  cunupload,
  getsiteList,
  getwashEquipment,
  addwashEquipment,
  delwashEquipment,
  exitwashEquipment,
  getwashinfo
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
        mac: ""
      },
      paging: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      tableData: [],
      parkIist: [],
      equipment: {
        sid: "",
        deviceid: "",
        alias: "",
        dealer: ""
      },
      equipmentlist:[],
      addBox: false,
      imgBox: false,
      editBox: false,
      realBox: false,
      universal1:{
        bind:false,
        nobind:false,
      },
      arrtable: [],
      camera:[],
      bindcamera:[],
      bindid:"",
      bindcarid:"",
      binddeviceid:"",
      binddeviceid1:"",
      bindname:"",

      deviceId: 0,
      rules: check.equipmentRules
    };
  },
  mounted() {
    // this.getwashsiteList();
    this.handleSearchClick();
  },
  computed: {
  },

  methods: {
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
      if (this.search.mac) {
        data.mac = this.search.mac;
      }
      data.page = this.paging.page;
      data.pageSize = this.paging.pageSize;
      data.userId = localStorage.getItem("userId");
      data.dealer = localStorage.getItem("dealer");
      axios({
        method: 'post',
        url: that.$store.state.magnetism_url + '/update/status/selectGeomagnetism',
        data: Qs.stringify(data)
      }).then(res => {
        console.log(res);
        if (res.data.result.length > 0) {
          that.tableData = res.data.result;
          that.paging.total = res.data.count;
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
        sid: "",
        deviceid: "",
        alias: ""
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
      let that = this;
      this.$refs[equipment].validate(valid => {
        if (valid) {
          this.equipment.dealer = localStorage.getItem("dealer");
          this.equipment.date = this.common.nowDate();
          console.log(this.equipment);
          addwashEquipment(this.equipment).then(res => {
            console.log(res);
            if (res) {
              that.addBox = false;
              that.$message({
                message: "添加成功",
                type: "success"
              });
              that.handleSearchClick();
            } else {
              that.$message({
                message: "添加失败",
                type: "warning"
              });
            }
          });
        }
      });
    },
    ClickEditEquipment(equipment) {
      let that = this;
      this.$refs[equipment].validate(valid => {
        if (valid) {
          let data = {};
          data.dealer = localStorage.getItem("dealer");
          if(this.equipment.sid == "无"){
            data.sid = 0;
          }else{
            data.sid = this.equipment.sid;
          }          
          data.id = this.equipment.id;
          data.alias = this.equipment.alias;
          data.deviceid = this.equipment.deviceid;         
          exitwashEquipment(data).then(res => {
            console.log(res);
            if (res) {
              that.addBox = false;
              that.$message({
                message: "修改成功",
                type: "success"
              });
              that.handleSearchClick();
            }else{
              that.$message({
                message: "修改失败",
                type: "success"
              });
            }
          });
        }
      });
    },
    ClickDeleteequipment(id) {
      let that = this;
      this.$confirm("确认删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          console.log('1');
          axios.delete(this.$store.state.wash_test_url + '/parkingCarId/deleteByPrimaryKey?id='+id).then(res => {
            console.log(res);
            if (res.data.resCode == 0) {
              that.$message({
                type: "success",
                message: "删除成功!"
              });
              that.handleSearchClick();
            }else{
              that.$message({
                type: "error",
                message: res.data.result
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
      if(this.equipment.sid == 0){
        this.equipment.sid = "无"
      }
      this.editBox = true;
      this.addBox = true;
      this.bindcarid = row.deviceid;
      this.getbindinfoList();
    },
    bind (row) {      
      this.universal1.bind = true;      
      this.bindid = row.id;
      this.bindcarid = row.deviceid;
      this.getwashinfoList();
    },
    nobind(row){
      this.universal1.nobind = true;      
      this.bindid = row.id;
      this.bindcarid = row.deviceid;
      this.getbindinfoList();
    },
    barrierclick(){
      if(this.binddeviceid == ""){
        that.$message.error("带*的数据不能为空哦！");
      }else{
        for(var i = 0;i < this.camera.length;i++){
          if(this.binddeviceid == this.camera[i].deviceId){
            this.bindname = this.camera[i].alias;
          }
        }
        let data = {
          // id:this.bindid,
          carid:this.binddeviceid,
          deviceid:this.bindcarid,
          name:this.bindname
        }
        let that = this;      
        axios({
          method: 'post',
          url: this.$store.state.wash_test_url + '/parkingCarId/selectByinsertSelective',
          data: Qs.stringify(data)
        }).then(function (message) {
          console.log(message);
          if (message.data.resCode == 0) {
            that.$message({
              message: "绑定成功",
              type: "success"
            });
            that.universal1.bind = false;
            that.handleSearchClick();
          }else{
            that.$message({
              message: message.data.result,
              type: "error"
            });
          }
        })
      }
    },
    nobindclick(){
      let params = {
        deviceid:this.bindcarid,
        carid:this.binddeviceid1
      };
      let that = this;
      axios({
          method: 'post',
          url: this.$store.state.wash_test_url + '/parkingCarId/delectByinsertSelective',
          data: Qs.stringify(params)
      }).then(message => {
        console.log(message);
        if (message.data.resCode == 0) {
          that.$message({
            message: "解绑成功",
            type: "success"
          });
          that.universal1.nobind = false;
          that.handleSearchClick();
        } else {
          that.$message({
            message: message.data.result,
            type: "error"
          });          
        }         
      });
    },
    getwashinfoList() {
      let params = {
        page: 1,
        pageSize: 500,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer")
      };
      let that = this;
      axios({
          method: 'post',
          url: this.$store.state.wash_test_url + '/parkingCarId/selectByBrakeWashCar',
          data: Qs.stringify(params)
      }).then(message => {
        console.log(message);
        if (message.data.resCode == 0) {
          that.camera = message.data.result;
        } else {
          that.camera = [];
        }        
      });      
    },
    getbindinfoList(){
      let params = {
        deviceid:this.bindcarid
      };
      let that = this;
      that.bindcamera = [];
      axios({
          method: 'post',
          url: this.$store.state.wash_test_url + '/parkingCarId/selectByParkingCarEquipment',
          data: Qs.stringify(params)
      }).then(message => {
        console.log(message);
        if (message.data.resCode == 0) {
          // if(message.data.result.length > 0){
            that.bindcamera = message.data.result;
            that.binddeviceid1 = that.bindcamera[0].carid;
            console.log(that.bindcamera);
          // }
        } else {
          that.$message({
            message: message.data.result,
            type: "error"
          });
          that.bindcamera = [];
          that.binddeviceid1 = "";
        }         
      });
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
  }
};
</script>
<style lang="scss" scoped>
.headerTitle>span{
  border-bottom: 5px solid transparent;
  margin-right: 20px;
}
.headerTitle>span.router-link-active{
  border-bottom: 5px solid #a2cc6d;
}
.headerTitle>span:hover{
  color: #a2cc6d;
  cursor: pointer;
}
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


