<template>
  <div id="addRole">
    <div class="header">
      <div class="headerTitle">
        <span>添加角色</span>
      </div>
    </div>
    <div class="select">
      <span>用户类型：</span>
      <el-input v-model="search.roleName"
                clearable
                placeholder="请输入内容"></el-input>
    </div>
    <div class="select">
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-plus"
                 @click='ShowHide'
                 v-show="showchose">添加</el-button>
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-search"
                 @click='searchClick'>查询</el-button>
    </div>
    <div class="Content">
      <el-table class='oyTable'
                :data="tableData"
                style="width: 100%">
        <el-table-column type="index"
                         :index="indexMethod"
                         label="序号"
                         width="100"> </el-table-column>

        <el-table-column label="用户类型"
                         width="150">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.roleName }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.roleName }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="角色描述"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.roleDescribe }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.roleDescribe }}</div>
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

            <el-tooltip v-if="scope.row.userTypeId == 1"
                        class="item"
                        effect="dark"
                        content="删除"
                        placement="top">
              <i class="icon-unclick el-icon-delete"></i>
            </el-tooltip>

            <el-tooltip v-else=""
                        class="item"
                        effect="dark"
                        content="删除"
                        placement="top">
              <i class="icon-delete el-icon-delete"
                 @click="deleteClick(scope.row)"></i>
            </el-tooltip>

            <!-- <el-tooltip class="item" effect="dark" content="计费规则" placement="top">
    						<i class="icon-change billingicon el-icon-tickets" @click="billing(scope.row)" ></i>
						</el-tooltip> -->
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="新增"
               :visible.sync="universal.add">
      <div>
        <span class="spanClass">
          <span class="aKey">*</span>用户类型：</span>
        <el-input v-model="add.roleName"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />

        <span class="spanClass">
          <span class="aKey">*</span>用户类型描述：</span>
        <el-input class="textareaWidth"
                  type="textarea"
                  :rows="5"
                  v-model="add.roleDescribe"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />
        <span class="spanClass">备注：</span>
        <div class="little">{{this.$store.state.size}}</div>
      </div>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="universal.add = false">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="addClick">添加</el-button>
      </div>
    </el-dialog>
    <el-dialog title="修改"
               :visible.sync="universal.change">
      <div>
        <span class="spanClass">
          <span class="aKey">*</span>用户类型：</span>
        <el-input v-model="change.roleName"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />

        <span class="spanClass">
          <span class="aKey">*</span>用户类型描述：</span>
        <el-input class="textareaWidth"
                  type="textarea"
                  :rows="5"
                  v-model="change.roleDescribe"
                  clearable
                  placeholder="请输入内容"></el-input>
      </div>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="hideclick">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="changeClick">修改</el-button>
      </div>
    </el-dialog>

    <div class="footer">
      <pageSize v-on:code="getList"
                :messages="totals"></pageSize>
    </div>
  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
import { searchClicks } from '../api/api.js'
import { bus } from '../bus.js'
import pageSize from '../pageSize'
export default {
  name: 'equipmentList',
  data () {
    return {
      info: {
        currentPage: 1,
        pageSize: 10,
      },
      universal: {
        add: false,
        change: false
      },
      totals: 0,
      tableData: [],
      search: {
        roleName: ''
      },
      add: {
        roleName: '',
        roleDescribe: ''
      },
      change: {
        roleName: '',
        roleDescribe: ''
      },
      showchose: '',
      age: 12
    }
  },
  mounted: function () {
    this.age = 13
    document.title = this.$route.meta.title;
    if (localStorage.getItem('dealer') != 0) {
      this.showchose = true
    } else {
      this.showchose = false
    }
    this.searchClick();
  },
  created () {
    var _this = this;
    bus.$on("pageOption", function (info) {
      _this.info.currentPage = info.currentPage;
      _this.info.pageSize = info.pageSize;
    });
  },
  methods: {
    getList (info) {
      this.info.currentPage = info.currentPage;
      this.info.pageSize = info.pageSize;
      this.searchClick();
    },
    indexMethod (index) {
      return index + (this.info.currentPage - 1) * this.info.pageSize + 1;
    },
    // 清空输入内容
    ShowHide () {
      this.universal.add = true
      this.add.roleName = ''
      this.add.roleDescribe = ''
    },
    addClick () {
      if (this.add.roleName == '' || this.add.roleDescribe == '') {
        this.$message.error('带*号的不能为空！');
        return false;
      }
      console.log(this.add)
      let data = this.add;
      searchClicks('/role/add', data).then(res => {
        if (res.data.resCode == 0) {
          this.searchClick();
          this.$message({
            type: 'success',
            message: '添加成功'
          });
        } else {
          this.$message({
            type: 'error',
            message: '添加失败'
          });
        }
      })
      this.universal.add = false;
    },
    deleteClick (row) {
      console.log(row)
      let that = this;
      this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let data = row.roleId
        console.log(data)
        searchClicks('/role/delete', { roleId: row.roleId }).then(res => {
          if (res.data.resCode == 0) {
            that.$message({
              type: 'success',
              message: '删除成功'
            });
            that.searchClick();
          } else {
            that.$message({
              type: 'error',
              message: '删除失败'
            });
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    changeShow (row) {
      this.universal.change = true;
      this.change = Object.assign({}, row);
      console.log(row)
    },
    hideclick () {
      this.universal.change = false;
    },
    changeClick () {
      if (this.change.roleName == '' || this.change.roleDescribe == '') {
        this.$message.error('带*号的不能为空！');
        return false;
      }
      console.log(this.change)
      let data = this.change;
      searchClicks('/role/update', data).then(res => {
        if (res.data.resCode == 0) {
          this.$message({
            type: 'success',
            message: '修改成功'
          });
          this.searchClick();
        } else {
          this.$message({
            type: 'error',
            message: '修改失败'
          });
        }
      })
      this.universal.change = false;
    },
    searchClick () {
      let data = {
        Page: this.info.currentPage,
        PageSize: this.info.pageSize,
        userId: localStorage.getItem('userId'),
        dealer: localStorage.getItem('dealer'),
      };
      // if(localStorage.getItem('userId')=='SURIOT'){
      // 	data = {
      // 	Page:this.info.currentPage,
      // 	PageSize:this.info.pageSize
      //    };
      // }else{
      // 	data = {
      // 	Page:this.info.currentPage,
      // 	PageSize:this.info.pageSize,
      // 	userId:localStorage.getItem('userId'),
      //    };
      // }
      if (this.search.roleName) {
        data.roleName = this.search.roleName
      }
      console.log(data)
      let that = this;
      that.tableData = [];
      axios({
        method: 'post',
        url: that.$store.state.url + '/role/findAll',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message.data)
        if (message.data.resCode == 0) {
          that.totals = message.data.count;
          that.tableData = message.data.result;
        } else {
          that.tableData = [];
        }
      })
    }
  },
  components: {
    pageSize
  }
}
</script>

<style scoped="scoped">
.el-input,
.el-select {
  width: 200px;
}
#addRole {
  padding: 20px;
}
/*.textareaWidth{width: 200px;}*/
.billingicon {
  background: #409eff !important;
}
.inputrule {
  width: 100px;
}
</style>