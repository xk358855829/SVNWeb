<template>
  <div id="adminList">
    <div class="header">
      <div class="headerTitle">
        <span>管理员列表</span>
      </div>
    </div>
    <div class="select">
      <span>用户名：</span>
      <el-input v-model="search.userAlias"
                clearable
                placeholder="请输入内容"></el-input>

      <span>账号：</span>
      <el-input v-model="search.userName"
                clearable
                placeholder="请输入内容"></el-input>
    </div>
    <div class="select">
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

        <el-table-column label="账号	"
                         width="150">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.userName }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.userName }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="用户名"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.userAlias }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.userAlias }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="绑定手机"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.phoneNum }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.phoneNum }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="绑定邮箱"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.emal }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.emal }}</div>
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
                        content="权限"
                        placement="top">
              <i class="icon-menu el-icon-menu"
                 @click="jurisdictionShow(scope.row)"></i>
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
    <el-dialog title="修改"
               :visible.sync="universal.change">
      <div>
        <span class="spanClass">账号：</span>
        <el-input :disabled="true"
                  v-model="change.userName"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />

        <span class="spanClass">用户类型：</span>
        <el-input :disabled="true"
                  v-model="change.roleName"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />

        <span class="spanClass">
          <span class="aKey">*</span>用户名 ：</span>
        <el-input :disabled="false"
                  v-model="change.userAlias"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />

        <span class="spanClass">
          <span class="aKey">*</span>绑定手机：</span>
        <el-input :disabled="false"
                  v-model="change.phoneNum"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />

        <span class="spanClass">
          <span class="aKey">*</span>绑定邮箱：</span>
        <el-input :disabled="false"
                  v-model="change.emal"
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

    <el-dialog title="权限"
               :visible.sync="universal.jurisdiction">
      <div>
        <el-checkbox-group class="checkboxMarginLeft"
                           v-model="checkbox.checkedCities"
                           @change="handleCheckedCitiesChange">
          <div v-for="activeA in this.$store.state.activeName">
            <el-checkbox class="checkboxMarginTop"
                         @change="allClick(activeA.classA.menuId)"
                         :label="activeA.classA.menuId"
                         :key="activeA.classA.menuId">{{activeA.classA.menuName}}</el-checkbox><br />
            <el-checkbox class="checkboxMarginLeft"
                         v-for="activeB in activeA.classB"
                         :label="activeB.menuId"
                         :key="activeB.menuId">{{activeB.menuName}}</el-checkbox><br /><br />
          </div>
        </el-checkbox-group>
      </div>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="universal.jurisdiction = false">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="updataClick">保存</el-button>
      </div>
    </el-dialog>

    <div class="footer">
      <el-pagination background
                     @current-change="handleCurrentChange"
                     @size-change="handleSizeChange"
                     :current-page.sync="paging.page"
                     :page-sizes="[10, 11, 12]"
                     :page-size="paging.pageSize"
                     layout="sizes, prev, pager, next, jumper,total"
                     :total="paging.total"></el-pagination>
    </div>
  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
import { jurisdictionShows, searchClicks } from '../api/api.js'
export default {
  name: 'equipmentList',
  data () {
    return {
      checkbox: {
        checkedCities: []
      },
      checked: true,
      universal: {
        add: false,
        change: false,
        jurisdiction: false,
        next: false
      },
      paging: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      tableData: [],
      search: {
        userName: '',
        userAlias: ''
      },
      change: {
        userId: '',
        userName: '',
        roleName: '',
        userAlias: '',
        phoneNum: '',
        emal: ''
      },
      options: [],
      dataUniversal: this.$store.state.activeName,
      updataUserId: ''
    }
  },
  mounted: function () {
    document.title = this.$route.meta.title;
    this.searchClick();
    this.downList();
    console.log(this.$route.query.id)
    console.log(this.dataUniversal)
  },
  methods: {
    hideclick () {
      this.universal.change = false
    },
    indexMethod (index) {
      return index + (this.paging.page - 1) * this.paging.pageSize + 1;
    },
    updataClick () {
      console.log(this.checkbox.checkedCities.join(','))
      let that = this;
      axios({
        method: 'post',
        url: this.$store.state.url + '/s_user/update',
        data: Qs.stringify({
          permissions: this.checkbox.checkedCities.join(','),
          userId: this.updataUserId
        })
      }).then(function (message) {
        console.log(message.data)
        if (message.data.resCode == 0) {
          that.$message({
            message: '保存成功',
            type: 'success'
          });
        } else {
          that.$message({
            message: '保存失败',
            type: 'error'
          });
        }
      })
      this.universal.jurisdiction = false;
    },
    handleCheckedCitiesChange (value) {
      console.log(value)
      /*console.log(this.$store.state.sideList)*/
      let that = this;
      let arr = value;
      console.log(arr);
      let list = this.$store.state.sideList;
      let obj = this.$store.state.activeName;
      for (var i = 0; i < arr.length; i++) {/*选中二级菜单时同时选择对应的一级菜单*/
        for (var j = 0; j < list.length; j++) {
          if (arr[i] == list[j].menuId) {
            if (list[j].menuAssociated != "0") {
              that.checkbox.checkedCities.push(list[j].menuAssociated)
            }
          }
        }
      }
      for (let i = 0; i < obj.length; i++) {/*取消所有二级菜单时同时取消对应的一级菜单*/
        let cs = obj[i].classA.menuId;
        for (let j = 0; j < arr.length; j++) {
          for (let k = 0; k < obj[i].classB.length; k++) {
            if (obj[i].classB[k].menuId == arr[j]) {
              cs = '';
            }
          }
        }
        let index = that.checkbox.checkedCities.indexOf(cs);
        if (index > -1) {
          that.checkbox.checkedCities.splice(index, 1);
        }
      }
      that.checkbox.checkedCities = Array.from(new Set(that.checkbox.checkedCities));
      console.log(that.checkbox.checkedCities)
    },
    handleSizeChange (val) {
      this.paging.pageSize = val;
      this.searchClick();
    },
    handleCurrentChange (val) {
      this.searchClick();
    },
    addClick () { },
    deleteClick (row) {
      console.log(row)
      let that = this;
      this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        searchClicks('/s_user/delete', { userId: row.userId }).then(res => {
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
    changeClick () {
      if (this.change.userAlias == '' || this.change.phoneNum == '' || this.change.emal == '') {
        this.$message.error('带*号的不能为空！');
        return false;
      }
      let data = {
        userId: this.change.userId,
        userAlias: this.change.userAlias,
        phoneNum: this.change.phoneNum,
        email: this.change.emal,
      }
      let regEmail = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
      let regPhone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
      if (!regEmail.test(this.change.emal)) {
        this.$message.error('邮箱格式不正确');
        return false;
      }
      if (!regPhone.test(this.change.phoneNum)) {
        this.$message.error('手机号码格式有误');
        return false;
      }
      console.log(data)
      searchClicks('/s_user/update', data).then(res => {
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
    jurisdictionShow (row) {
      let that = this;
      this.updataUserId = row.userId;
      jurisdictionShows('/s_user/selecByUserId', { userId: row.userId }).then((res) => {
        if (res.data.resCode == 0) {
          if (res.data.result == '暂时无权限分配') {
            that.checkbox.checkedCities = [];
          } else {
            that.checkbox.checkedCities = res.data.result.split(',');
          }
        } else {
          that.checkbox.checkedCities = [];
        }
      })
      that.universal.jurisdiction = true;
    },
    allClick (id) {
      console.log(this.$store.state.activeName)
      console.log(id);
      let that = this;
      let cs = that.checkbox.checkedCities.indexOf(id);
      console.log(cs)
      let pa;
      for (let i = 0; i < that.$store.state.activeName.length; i++) {
        if (that.$store.state.activeName[i].classA.menuId == id) {
          pa = that.$store.state.activeName[i];
        }
      }
      console.log(pa);
      if (cs > -1) {
        for (let i = 0; i < pa.classB.length; i++) {
          that.checkbox.checkedCities.push(pa.classB[i].menuId);
          console.log(pa.classB[i].menuId)
        }
      } else {
        for (let i = 0; i < pa.classB.length; i++) {
          let index = that.checkbox.checkedCities.indexOf(pa.classB[i].menuId);
          if (index > -1) {
            that.checkbox.checkedCities.splice(index, 1);
          }
        }
      }
      /*console.log(that.checkbox.checkedCities)*/
    },
    searchClick () {
      let data = {
        page: this.paging.page,
        pageSize: this.paging.pageSize,
        userId: localStorage.getItem('userId'),
        dealer: localStorage.getItem('dealer'),
        type: 1,
      };
      // if(localStorage.getItem('userId')=='SURIOT'){
      // 	data = {
      // 	page:this.paging.page,
      // 	pageSize:this.paging.pageSize,
      // 	type: 1,
      //    };
      // }else{
      // 	data = {
      // 	page:this.paging.page,
      // 	pageSize:this.paging.pageSize,
      // 	userId:localStorage.getItem('userId'),
      // 	type: 1,
      //    };
      // }
      if (this.search.userName) {
        data.userName = this.search.userName
      }
      if (this.search.userAlias) {
        data.userAlias = this.search.userAlias
      }
      // data.dealer=sessionStorage.getItem('dealer');
      console.log(data)
      let that = this;
      that.tableData = [];
      searchClicks('/s_user/list', data).then(res => {
        if (res.data.resCode == 0) {
          that.paging.total = res.data.count;
          that.tableData = res.data.result;
        } else {
          that.tableData = [];
        }
      })
    },
    downList () {
      let that = this;
      let data = {
        Page: that.paging.page,
        PageSize: that.paging.pageSize,
        userId: localStorage.getItem('userId'),
        dealer: localStorage.getItem('dealer'),
      }
      console.log(data)
      axios({
        method: 'post',
        url: that.$store.state.url + '/role/findAll',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message.data)
        if (message.data.resCode == 0) {
          /*console.log(message.data.result)*/
          that.options = message.data.result;
          that.options.forEach((a, b) => {

          })
        }
      })
    }
  }
}
</script>

<style scoped="scoped">
.el-input,
.el-select {
  width: 200px;
}
#adminList {
  padding: 20px;
}

/*.textareaWidth{width: 200px;}*/
</style>