<template>
  <div id="cheweisuo">
    <div class="header">
      <div class="headerTitle">
        <span>小区管理</span>
      </div>
    </div>
    <div class="select">
      <span>小区名称：</span>
      <el-input v-model="search.areaName"
                clearable
                placeholder="请输入内容"></el-input>
      <span>停车场名称：</span>
      <el-select v-model="search.pid"
                 filterable
                 placeholder="请选择">
        <el-option label="未选择"></el-option>
        <el-option v-for="item in parkIist"
                   :key="item.id"
                   :label="item.parking_name"
                   :value="item.id"></el-option>
      </el-select>
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
        <el-table-column label="小区名称">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.areaName }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.areaName }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <!-- <el-table-column label="停车场名称">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ repla(scope.row.pid) }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ repla(scope.row.pid) }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column> -->
        <!-- <el-table-column label="小区编号">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.areaNumber }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.areaNumber }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column> -->
        <el-table-column label="小区地址">
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
        </el-table-column> 
        <el-table-column label="所属公司">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.company }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.company }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>               
        <el-table-column label="联系人">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.contacts }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.contacts }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="联系电话">
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
            <el-tooltip class="item" effect="dark" content="绑定停车场" placement="top">
              <i class="el-icon-sort el-tooltip item" @click="bind(scope.row)"></i>
            </el-tooltip>   
            <el-tooltip class="item" effect="dark" content="解绑停车场" placement="top">
              <i class="icon-menu el-icon-menu" @click="nobind(scope.row)"></i>
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
    <el-dialog :title="addParkingLot?'新增小区':'修改小区'"
               :visible.sync="showDialog">
      <el-form ref="parkinglot"
               :inline="true"
               :model="parkinglot"
               :rules="rules">
        <el-row type="flex"
                class="row-bg"
                justify="end"> 
          <el-col :span="12">
            <el-form-item label="小区名称:"
                          prop="areaName">
              <el-input v-model="parkinglot.areaName"
                        placeholder=""></el-input>
            </el-form-item>
          </el-col>         
          <el-col :span="12">
            <el-form-item label="停车场名称:"
                          prop="pid">
              <el-select v-model="parkinglot.pid"
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
        </el-row>
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="小区编号:"
                          prop="areaNumber">
              <el-input v-model="parkinglot.areaNumber"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="小区地址:"
                          prop="address">
              <el-input v-model="parkinglot.address"
                        placeholder=""></el-input>
            </el-form-item>
          </el-col>          
        </el-row>
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="所属公司:"
                          prop="company">
              <el-input v-model="parkinglot.company"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联系人:"
                          prop="contacts">
              <el-input v-model="parkinglot.contacts"
                        placeholder=""></el-input>
            </el-form-item>
          </el-col>          
        </el-row>
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="联系电话:"
                          prop="phone">
              <el-input v-model="parkinglot.phone"></el-input>
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
    <el-dialog :title="'关联停车场'" :visible.sync="relevance">
      <div class="Content" style="padding-bottom:30px;">
        <div v-if="isbindPark == true" style="display: flex;justify-content: space-between;margin-bottom:30px;">
          <span style="line-height:30px;">
            绑定停车场数：
            <span>{{ bindtotal }}</span>
          </span>
          <el-button plain type="primary" @click="delbind()">取消绑定</el-button>
        </div>
        <div v-else style="text-align:right;margin-bottom:20px;">
          <el-button plain type="primary" @click="bindPark()">绑 定</el-button>
        </div>
        <el-table
          class="oyTable"
          :data="reslist"
          height="300"
          style="width: 100%;margin:10px 0;"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55" class="selection" prop="uuid"></el-table-column>
          <el-table-column type="index" :index="indexMethod" label="序号" width="50"></el-table-column>
          <el-table-column label="停车场名称">
            <template slot-scope="scope">
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ isbindPark == true ? scope.row.parkingName : scope.row.parking_name }}</div>
              </div>
            </template>
          </el-table-column>  
          <!-- <el-table-column label="是否为母停车场">
            <template slot-scope="scope">
              <div slot="reference" class="name-wrapper">
                
              </div>
            </template>
          </el-table-column>         -->
        </el-table>
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
        pid: '',
        areaName: "",
      },
      paging: {
        page: 1,
        pageSize: 10,
        total:0
      },
      parkinglot: {
        areaNumber: "",
        areaName: "",
        company: "",
        contacts: '',
        phone: "",
        address: "",
        pid: '',                       
        dealer: localStorage.getItem("dealer")
      },
      rules: {
        pid: [{ required: true, message: "不能为空", trigger: "blur" }],
        areaName: [{ required: true, message: "不能为空", trigger: "blur" }],
        areaNumber: [{ required: true, message: "不能为空", trigger: "blur" }],
        address: [{ required: true, message: "不能为空", trigger: "blur" }],
        company: [{ required: true, message: "不能为空", trigger: "blur" }],
        contacts: [{ required: true, message: "不能为空", trigger: "blur" }],
        phone: [{ required: true, validator: checkTel, trigger: "blur" }],
      },
      communityId: "",
      communityName: "",
      isbindPark: false,
      relevance:false,
      reslist:[],
      bindId:[],
      bindtotal:"",
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
        areaNumber: "",
        areaName: "",
        company: "",
        contacts: '',
        phone: "",
        address: "",
        pid: '', 
        dealer: localStorage.getItem("dealer")
      };
    },
    handleSearchClick () {
      let that = this;
      let params = {
        pageSize: this.paging.pageSize,
        page: this.paging.page,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer"),
      }
      if (this.search.areaName) {
        params.areaName = this.search.areaName
      }
      if (this.search.pid) {
        params.pid = this.search.pid
      }
      axios({
        method: 'post',
        url: that.$store.state.parking_url + '/parkingArea/selectByParkingArea',
        data: Qs.stringify(params)
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
            url: that.$store.state.parking_url + '/parkingArea/insertByParkingArea',
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
            url: that.$store.state.parking_url + '/parkingArea/updateByParkingArea',
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
            url: that.$store.state.parking_url + '/parkingArea/deleteByParkingArea',
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
    bind(val){
      this.relevance = true;
      this.isbindPark = false;
      this.communityId = val.id;
      this.communityName = val.areaName;
      this.reslist = this.parkIist;
    },
    nobind(val){
      this.relevance = true;
      this.isbindPark = true;
      this.communityId = val.id;
      this.loadbind(val.id,val.areaName);
    },
    loadbind(id,areaName) {
      let data = {};
      let that = this;
      data.aid = id;
      data.areaName = areaName;
      that.reslist = [];
      axios({
        method: 'post',
        url: that.$store.state.parking_url + '/parkingAreaLotinfo/selectByPrimaryKey',
        data: Qs.stringify(data)
      }).then(res => {
        console.log(res);
        if (res.data.code == 0) {
          that.reslist = res.data.result;
          that.bindtotal = res.data.result.length;
        } else { 
          that.reslist = [];
        }
      });
    },
    handleSelectionChange(val){
      console.log(val);
      this.bindId = val;
    },
    bindPark(){
      console.log(this.bindId);
      let that = this;
      if (this.bindId.length != 0) {
        this.$confirm("确认绑定, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            // let data = [];
            // for (let i of this.bindId) {
            //   data.push(i.id);
            // }
            // let param = data.join(",");
            // console.log(param);
            for (let i = 0; i < this.bindId.length; i++) {
              axios({
                method: 'post',
                url: that.$store.state.parking_url + '/parkingAreaLotinfo/insertSelective',
                data: Qs.stringify({
                  aid: that.communityId,
                  areaName: that.communityName,
                  parkingId: that.bindId[i].id,
                  parkingName: that.bindId[i].parking_name,
                })
              }).then(res => {
                console.log(res);
                if (res.data.code == 0) {
                  this.$message({
                    type: "success",
                    message: "绑定成功"
                  });
                  this.relevance = false;
                } else { 
                  this.$message({
                    type: "error",
                    message: "绑定失败"
                  });
                  this.relevance = false;
                }
              });              
            }
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消操作"
            });
          });
      } else {
        this.$message({
          type: "error",
          message: "请先选择要操作的数据！"
        });
      }
    },
    delbind(){
      console.log(this.bindId);
      let that = this;
      if (this.bindId.length != 0) {
        this.$confirm("确认解除绑定, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            // let data = [];
            // for (let i of this.bindId) {
            //   data.push(i.id);
            // }
            // let param = data.join(",");
            // console.log(param);
            for (let i = 0; i < this.bindId.length; i++) {
              axios({
                method: 'post',
                url: that.$store.state.parking_url + '/parkingAreaLotinfo /deleteByPrimaryKey',
                data: Qs.stringify({
                  aid: that.communityId,
                  parkingId: that.bindId[i].parkingId,
                })
              }).then(res => {
                console.log(res);
                if (res.data.code == 0) {
                  this.$message({
                    type: "success",
                    message: "解绑成功"
                  });
                  this.relevance = false;
                } else { 
                  this.$message({
                    type: "error",
                    message: "解绑失败"
                  });
                  this.relevance = false;
                }
              });              
            }
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消操作"
            });
          });
      } else {
        this.$message({
          type: "error",
          message: "请先选择要操作的数据！"
        });
      }
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
