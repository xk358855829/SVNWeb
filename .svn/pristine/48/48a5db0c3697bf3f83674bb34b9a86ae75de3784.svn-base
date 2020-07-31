<template>
  <div id="faultList">
    <div class="header">
      <div class="headerTitle">
        <span>{{choose(this.$route.query.id)}}车位绑定列表</span>
        <el-button type="success"
                   class="oyButton back"
                   style="float:right;"
                   @click="$router.go(-1)">返回</el-button>
      </div>
    </div>
    <div class="select">
      <span>车牌号：</span>
      <el-input v-model="search.carNumber"
                clearable
                placeholder="请输入内容"></el-input>
      <span>车主：</span>          
      <el-input v-model="search.ownerName"
                clearable
                placeholder="请输入内容"></el-input>          
      <!-- <span>停车场名称：</span>
      <el-select v-model="search.parkingId"
                 filterable
                 placeholder="请选择">
        <el-option label="未选择"></el-option>
        <el-option v-for="item in parkIist"
                   :key="item.parking_id"
                   :label="item.parking_name"
                   :value="item.parking_id"></el-option>
      </el-select> -->
    </div>
    <div class="select">
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-plus"
                 @click='ADD'>添加</el-button>
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-search"
                 @click="searchClick">查询</el-button>           
    </div>
    <div class="Content">
      <el-table class='oyTable'
                :data="tableData"
                style="width: 100%">
        <el-table-column type="index"
                         :index="indexMethod"
                         label="序号"
                         width="100"> </el-table-column>
        <el-table-column label="停车场名称"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ chose(scope.row.parkingId)}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ chose(scope.row.parkingId)}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="车位编号"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ choose(scope.row.carportId) }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ choose(scope.row.carportId) }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="车牌号"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.carNumber }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{scope.row.carNumber }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="车主"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.ownerName }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{scope.row.ownerName }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="手机号"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.ownerTel }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{scope.row.ownerTel }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="备注"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.remark }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{scope.row.remark }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column prop=""
                         label="操作"
                         width='150'>
          <template slot-scope="scope">
            <el-tooltip class="item"
                        effect="dark"
                        content="修改"
                        placement="top">
              <i class="icon-change el-icon-edit"
                 @click="changeShow(scope.row)"></i>
            </el-tooltip>
            <el-tooltip class="item"
                        effect="dark"
                        content="删除"
                        placement="top">
              <i class="icon-delete el-icon-delete"
                 @click="deleteClick(scope.row)"></i>
            </el-tooltip>            

          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog :title="universal.add1?'添加':'修改'"
               :visible.sync="showDialog">
      <el-form ref="add1"
               :inline="true"
               :model="add1"
               :rules="rules">
        <el-row type="flex"
                class="row-bg"
                justify="end">    
          <el-col :span="12">
            <el-form-item label="车位编号:"
                          prop="carportId">
              <el-select v-model="add1.carportId"
                         filterable
                         placeholder="请选择" :disabled="true">
                <el-option label="未选择"></el-option>
                <el-option v-for="item in parkingList"
                           :key="item.id"
                           :label="item.carportName"
                           :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>            
          <el-col :span="12">
            <el-form-item label="车牌号:"
                          prop="carNumber">
              <el-input v-model="add1.carNumber"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="车主:"
                          prop="ownerName">
              <el-input v-model="add1.ownerName"
                        placeholder=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="手机号:"
                          prop="ownerTel">
              <el-input v-model="add1.ownerTel"
                        placeholder=""></el-input>
            </el-form-item>
          </el-col>          
        </el-row>
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="备注:"
                          prop="remark">
              <el-input v-model="add1.remark"
                        placeholder=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
        <el-row style="text-align:right;">
          <el-button type="success"
                   class="oyButton"
                   @click="universal.add1 = false">取消</el-button>
          <el-button type="success"
                   class="oyButton"
                   @click="universal.add1?addClick('add1'):changeclick('add1')">确认</el-button>
        </el-row>
      </el-form>
    </el-dialog>
    <div class="footer">
      <el-pagination background
                     @current-change="handleCurrentChange"
                     @size-change="handleSizeChange"
                     :current-page.sync="paging.page"
                     :page-sizes="[10,15,20]"
                     :page-size="paging.pageSize"
                     layout="sizes, prev, pager, next, jumper,total"
                     :total="paging.total"></el-pagination>
    </div>
  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
import { mapState, mapActions, mapGetters } from 'vuex'
import { getParkingLotListApi, searchClicks} from '../../components/api/api'
export default {
  name: 'parkingListBind',
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
      showDialog:false,
      universal: {
        change: false,
        add1: false,
      },
      parkIist: [],
      tableDataadd: [],
      paging: {
        page: 1,
        pageSize: 10,
        total: ''
      },
      tableData: [],
      search: {
        carNumber: '',
        ownerName: '',
      },
      add1: {
        carportId: '',
        carNumber: '',
        ownerName: '',
        ownerTel: '',
        remark: '',
      },
      parkingList: [],
      rules:{
        carportId: [{ required: true, message: "不能为空", trigger: "blur" }],
        carNumber: [{ required: true, message: "不能为空", trigger: "blur" }],
        ownerName: [{ required: true, message: "不能为空", trigger: "blur" }],
        ownerTel: [{ required: true, validator: checkTel, trigger: "blur" }],
      }
    }
  },
  computed: {
    ...mapState(['use_statuslist', 'usage', 'tickettype', 'Distributing', 'disbursement', 'parkingname']),
    ...mapGetters({
      parkingLotInfo: "getParkingLotInfo",
      parkingLotDevList: "getParkingLotDevList"
    }),
  },
  mounted: function () {
    this.searchClick();
    let that = this;
    let data = {
      page: 1,
      pageSize: 100,
      userId: localStorage.getItem('userId'),
      dealer: localStorage.getItem('dealer')
    };
    this.getParkingLotListApiList();
    searchClicks('/moreThanACar/selectCarPort', data).then(message => {
      if (message.data.resCode == 0) {
        that.parkingList = message.data.result;
      } else {
        that.parkingList = [];
      }
    })
  },
  methods: {
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

    changeclick (add1) {
      let that = this;
      this.$refs[add1].validate(valid => {
        if (valid) {
          console.log(this.add1);
          delete this.add1.date;
          axios({
            method: 'post',
            url: that.$store.state.url + '/moreThanACarParkBind/updateOwnerInfo',
            data: Qs.stringify(this.add1)
          }).then(res => {
            console.log(res);
            if (res.data.code == 0) {
              this.showDialog = false;
              this.$message({
                message: "修改成功",
                type: "success"
              });
              this.searchClick();
            } else {
              this.showDialog = false;
              this.$message({
                message: res.data.result,
                type: "error"
              });
              this.searchClick();
            }
          });
        }
      });
    },
    changeShow (row) {
      this.universal.change = true
      this.universal.add1 = false;
      this.showDialog = true;
      this.add1 = Object.assign({}, row)
    },
    chose (val) {
      var run = val.split(',')
      for (let t = 0; t < run.length; t++) {
        for (let h = 0; h < this.parkIist.length; h++) {
          if (run[t] == this.parkIist[h].parking_id) {
            var nlua;
            nlua += this.parkIist[h].parking_name + ","
            nlua = nlua.replace(/undefined/, "")
          }
        }
      }
      console.log(nlua)
      if (nlua == undefined) {
        nlua = '全部'
      } else {
        nlua = nlua.slice(0, nlua.length - 1)
      }
      return nlua
    },

    choose (val) {
      for (let h = 0; h < this.parkingList.length; h++) {
        if (val == this.parkingList[h].id) {
          val = this.parkingList[h].carportName
        }
      }
      return val;
    },

    ADD () {
      this.universal.add1 = true;
      this.universal.change = false;
      this.showDialog = true;
      this.add1.carportId = Number(this.$route.query.id);
      this.add1.carNumber = "";
      this.add1.ownerName = "";
      this.add1.ownerTel = "";
      this.add1.remark = "";
    },
    indexMethod (index) {
      return index + (this.paging.page - 1) * this.paging.pageSize + 1;
    },
    handleSizeChange (val) {
      this.paging.pageSize = val;
      this.searchClick();
    },
    handleCurrentChange (val) {
      this.paging.page = val;
      this.searchClick();
    },
    addClick (add1) {
      let that = this;
      this.$refs[add1].validate(valid => {
        if (valid) {
          axios({
            method: 'post',
            url: that.$store.state.url + '/moreThanACarParkBind/bindCarNumber',
            data: Qs.stringify(that.add1)
          }).then(res => {
            console.log(res);
            if (res.data.code == 0) {
              this.showDialog = false;
              this.$message({
                message: "添加成功",
                type: "success"
              });
              this.searchClick();
            } else {
              this.showDialog = false;
              this.$message({
                message: "添加失败",
                type: "error"
              });
              this.searchClick();
            }                     
          });          
        }
      });     
    },
    deleteClick (row) {
      console.log(row)
      let that = this;
      this.$confirm('此操作将删除该条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        axios({
            method: 'post',
            url: that.$store.state.url + '/moreThanACarParkBind/deleteBindInfo',
            data: Qs.stringify({id:row.id})
          }).then(res => {
            console.log(res);
            if (res.data.code == 0) {
              this.$message({
                type: "success",
                message: "删除成功"
              });
              that.searchClick();
            } else {
              this.$message({
                type: "error",
                message: "删除失败"
              });
              that.searchClick();
            }                     
          });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    async searchClick () {
      let that = this;
      let params = {
        pageSize: this.paging.pageSize,
        page: this.paging.page,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer"),
        carportId: this.$route.query.id
      }
      if(this.search.carNumber){
        params.carNumber = this.search.carNumber;
      }
      if(this.search.ownerName){
        params.ownerName = this.search.ownerName;
      }
      axios({
        method: 'post',
        url: that.$store.state.url + '/moreThanACarParkBind/selectBindInfo',
        data: Qs.stringify(params)
      }).then(res => {
        console.log(res);
        if (res.data.resCode == 0) {
          that.tableData = res.data.result;
          that.paging.total = res.data.count;
        } else {
          that.tableData = [];
          that.paging.total = 0;
        }                     
      });
    }
  }
}
</script>

<style scoped="scoped">
.el-input,
.el-select {
  width: 200px;
}
#faultList {
  padding: 20px;
}
/*.textareaWidth{width: 200px;}*/
.spanClass {
  width: 110px !important;
}
.alipay:nth-child(1) {
  width: 49%;
  float: left;
}
.alipay:nth-child(2) {
  width: 51%;
  float: right;
}
.alipays {
  width: 100%;
  display: inline-block;
}
.letg div {
  font-size: 15px;
  line-height: 40px;
}
.grid-content {
  width: 30%;
  float: left;
  text-align: right;
  margin-right: 10px;
}
.el-input--small .el-input__inner {
  width: 120px !important;
}
.el-tag {
  color: #fff;
  width: 64px;
  height: 26px;
  line-height: 26px !important;
  padding: 0 0 !important;
}
.el-tag span {
  margin: 0 auto;
}
.select .boxselect {
  float: right;
}
.select .boxselect img {
  vertical-align: middle;
  margin-right: 5px;
}
.select img {
  float: right;
  margin-right: 10px;
  cursor: pointer;
}
.deletecolor {
  background: red;
}
.spanchange {
  width: 250px !important;
}
.jilu {
  width: 22px;
  height: 22px;
  display: inline-block;
  background: #59cb18;
  border-radius: 3px;
  color: #fff;
}
.jilus {
  background: #777;
}
.el-tag {
  border: none;
}
</style>