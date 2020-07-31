<template>
  <div id="faultList">
    <div class="header">
      <div class="headerTitle">
        <span>配置卡券权限</span>
      </div>
    </div>
    <div class="select">
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-plus"
                 @click='ADD'
                 v-show="showchose" style="width: 100px!important;">配置卡券权限</el-button>
    </div>
    <div class="Content">
      <el-table class='oyTable'
                :data="tableData"
                style="width: 100%"
                @selection-change="handleSelectionChange">

        <el-table-column type="index"
                         :index="indexMethod"
                         label="序号"
                         width="100"> </el-table-column>

        <el-table-column label="公众号权限"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.appId }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.appId }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="账号权限"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.dealer }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.dealer }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <!-- <el-table-column label="新老用户"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.userType == 1 ? "新用户" : "老用户"}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.userType == 1 ? "新用户" : "老用户" }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column> -->

        <el-table-column label="时间(天/日期)"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.endTime }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{scope.row.endTime }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="配置生效时间"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.useTime }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{scope.row.useTime }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="配置失效时间"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.pastTime }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{scope.row.pastTime }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column prop=""
                         label="操作"
                         width='150'>
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="配置卡券" placement="top">
              <i class="icon-See el-icon-search" @click="operation(scope.row)"></i>
            </el-tooltip>
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

    <el-dialog title="配置卡券权限"
               :visible.sync="universal.add1">
      <div>
        <el-row>
          <el-col :span="12">
            <span class="spanClass">
              <span class="aKey">*</span>appId：</span>
            <el-input v-model="add1.appId"></el-input><br /><br />
            <span class="spanClass">
              <span class="aKey">*</span>固定天：</span>
            <el-select v-model="userfulTime"
                       placeholder="请选择">
              <el-option v-for="item in [
              {id:'1',name:'日期'},{id:'2',name:'天数'}]"
                         :key="item.id"
                         :label="item.name"
                         :value="item.id">
              </el-option>
            </el-select><br /><br />
            <span class="spanClass">
              <span class="aKey">*</span>生效时间：</span>
            <el-date-picker v-model="add1.useTime"
                            type="datetime"
                            placeholder="选择日期时间"
                            value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />                                                   
          </el-col>
          <el-col :span="12">    
            <span class="spanClass">
              <!-- <span class="aKey">*</span> -->
              新老用户：</span>
            <el-select v-model="add1.userType"
                       placeholder="请选择">
              <el-option v-for="item in [
              {id:'1',name:'新用户'},{id:'2',name:'老用户'}]"
                         :key="item.id"
                         :label="item.name"
                         :value="item.id">
              </el-option>
            </el-select><br /><br /> 
            <span class="spanClass"
                  v-if="userfulTime==1">
              <span class="aKey"
                    v-if="userfulTime==1">*</span>截止时间：</span>
            <el-date-picker v-model="add1.endTime"
                            v-if="userfulTime==1"
                            type="datetime"
                            placeholder="选择日期时间"
                            value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br v-if="userfulTime==1" /><br v-if="userfulTime==1" />

            <span class="spanClass"
                  v-if="userfulTime==2">
              <span class="aKey">*</span>截止天数：</span>
            <el-input v-model="add1.endTime"
                      v-if="userfulTime==2"></el-input><br v-if="userfulTime==2" /><br v-if="userfulTime==2" />                                          
            <span class="spanClass">
              <span class="aKey">*</span>失效时间：</span>
            <el-date-picker v-model="add1.pastTime"
                            type="datetime"
                            placeholder="选择日期时间"
                            value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />    
                                       
          </el-col>
        </el-row>
        <span class="spanClass">备注：</span>
        <div class="little">{{this.$store.state.size}}</div>
      </div>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="universal.add1 = false">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="addClick">确认</el-button>
      </div>
    </el-dialog>
    <el-dialog title="修改配置权限"
               :visible.sync="universal.change">
      <div>
        <el-row>
          <el-col :span="12">
            <span class="spanClass">
              <span class="aKey">*</span>appId：</span>
            <el-input v-model="change.appId" disabled=""></el-input><br /><br />
            <span class="spanClass">
              <span class="aKey">*</span>固定天：</span>
            <el-select v-model="change.usefulTime"
                       placeholder="请选择">
              <el-option v-for="item in [
              {id:'1',name:'日期'},{id:'2',name:'天数'}]"
                         :key="item.id"
                         :label="item.name"
                         :value="item.id">
              </el-option>
            </el-select><br /><br />
            <span class="spanClass">
              <span class="aKey">*</span>生效时间：</span>
            <el-date-picker v-model="change.useTime"
                            type="datetime"
                            placeholder="选择日期时间"
                            value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />                                                   
          </el-col>
          <el-col :span="12">    
            <span class="spanClass">
              <!-- <span class="aKey">*</span> -->
              新老用户：</span>
            <el-select v-model="change.userType"
                       placeholder="请选择">
              <el-option v-for="item in [
              {id:'1',name:'新用户'},{id:'2',name:'老用户'}]"
                         :key="item.id"
                         :label="item.name"
                         :value="item.id">
              </el-option>
            </el-select><br /><br /> 
            <span class="spanClass"
                  v-if="change.usefulTime==1">
              <span class="aKey"
                    v-if="change.usefulTime==1">*</span>截止时间：</span>
            <el-date-picker v-model="change.endTime"
                            v-if="change.usefulTime==1"
                            type="datetime"
                            placeholder="选择日期时间"
                            value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br v-if="change.usefulTime==1" /><br v-if="change.usefulTime==1" />

            <span class="spanClass"
                  v-if="change.usefulTime==2">
              <span class="aKey">*</span>截止天数：</span>
            <el-input v-model="change.endTime"
                      v-if="change.usefulTime==2"></el-input><br v-if="change.usefulTime==2" /><br v-if="change.usefulTime==2" />                                          
            <span class="spanClass">
              <span class="aKey">*</span>失效时间：</span>
            <el-date-picker v-model="change.pastTime"
                            type="datetime"
                            placeholder="选择日期时间"
                            value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />    
                                       
          </el-col>
        </el-row>
        <span class="spanClass">备注：</span>
        <div class="little">{{this.$store.state.size}}</div>
      </div>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="universal.change = false">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="changeclick">确认</el-button>
      </div>
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
import { timeToDate } from '../../../common/common.js'
import { configs, addfigs, changfigt, delfigtwo} from '../api/api.js'
export default {
  name: 'configurauthority',
  data () {
    return {
      paging: {
        page: 1,
        pageSize: 10,
        total: ''
      },
      tableData: [],
      add1: {
        endTime: '',
        useTime: '',
        pastTime: '',
        userType: '1',
        appId: ''
      },
      userfulTime: '2',
      universal: {
        change: false,
        add1: false,
      },      
      change: {},
      showchose: '',
    }
  },
  computed: {
    
  },
  mounted: function () {
    document.title = this.$route.meta.title;
    if (localStorage.getItem('dealer') == 0 || localStorage.getItem('dealer') == 123) {
      this.showchose = true
    } else {
      this.showchose = false
    }
    this.searchClick();
  },
  methods: {
    operation(row) {
      //查看详情
      sessionStorage.setItem("configurInfo", JSON.stringify(row));
      this.$router.push({
        path: "/pageHome/configurauthority",
        query: {
          id: row.id
        }
      });
    },
    async changeclick () {
      console.log(this.change)
      let data = {
        endTime: this.change.endTime,
        dealer: localStorage.getItem("dealer"),
        appId: this.change.appId,
        useTime: this.change.useTime,
        pastTime: this.change.pastTime,
        id: this.change.id
      }
      let res = await changfigt(data)
      if (res.data.resCode == 0 && res.data.resCode == 0) {
        this.$message({
          message: '修改成功',
          type: 'success'
        });
        this.universal.change = false;
        this.searchClick()
      } else {
        this.$message({
          message: '修改失败',
          type: 'error'
        });

      }      
    },
    changeShow (row) {
      console.log(row)
      this.universal.change = true
      this.change = Object.assign({}, row)
    },
    ADD () {
      this.universal.add1 = true;
      let that = this;
      that.add1.endTime = '';
      that.add1.useTime = '';
      that.add1.pastTime = '';
      that.add1.userType = '1';
      that.add1.appId = '';
    },
    changetian (val) {
      this.change.endTime = ''
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
    async addClick () {
      let p = new Date(this.add1.useTime)
      let e = new Date(this.add1.pastTime)
      if (e.getTime(e) < p.getTime(p)) {
        this.$message.error('失效时间不能早于生效时间');
        return false;
      }
      if (this.add1.useTime == '' || this.add1.pastTime == '' || this.add1.endTime == '' || this.userfulTime == '') {
        this.$message.error('带*的数据不能为空哦！');
        return false;
      }
      let data = {
        usefulTime: this.userfulTime,
        endTime: this.add1.endTime,
        useTime: this.add1.useTime,
        pastTime: this.add1.pastTime,
        appId: this.add1.appId,
        dealer: localStorage.getItem('dealer')
      }
      console.log(data)
      let res = await addfigs(data)
      if (res.data.resCode == "1") {
        this.$message.error('已有配置，可进行更改')
        return false;
      }else{
        this.$message({
          message: '配置成功',
          type: 'success'
        });
        this.universal.change = false;
        this.searchClick();
      }      
    },
    deleteClick (row) {
      console.log(row)
      let that = this;
      this.$confirm('此操作将删除该条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        // let reg = await delfigtwo({ id: row.id })
        let message = await delfigt({ id: row.id })
        if (message.data.resCode == 0) {          
          that.$message({
            message: '删除成功',
            type: 'success'
          });
          that.searchClick();
        } else {
          that.$message({
            message: '删除失败',
            type: 'error'
          });
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    async searchClick () {
      let data = {
        page: this.paging.page,
        pageSize: this.paging.pageSize,
        userId: localStorage.getItem('userId'),
        dealer: localStorage.getItem('dealer')
      };
      let res = await configs(data)
      if (res.data.resCode == "0") {
        this.tableData = res.data.result;
        this.paging.total = res.data.count;
      }else{
        this.tableData = [];
        this.paging.total = 0;
      }     
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