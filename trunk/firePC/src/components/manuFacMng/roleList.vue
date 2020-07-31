<template>
  <div id="roleList">
    <div class="header">
      <div class="headerTitle">
        <span>账号管理</span>
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
      <span>角色类型：</span>
      <el-select v-model="search.roleName"
                 placeholder="请选择"
                >
        <el-option value=''>未选择</el-option>
        <el-option v-for="item in tableChild"
                   :key="item.id"
                   :value="item.roleName"></el-option>
      </el-select>
    </div>
    <div class="select">
      <el-button type="success"
                 class="oyButton"
                 v-if="typeValue"
                 icon="el-icon-plus"
                 @click="ADDtext">添加</el-button>
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

        <el-table-column label="角色类型"
                         width="">
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

        <el-table-column label="上级水司"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.userAtotal }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.userAtotal }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column v-if="typeValue"
                         prop=""
                         label="操作"
                         width='150'>
          <template slot-scope="scope">
            <el-tooltip class="item"
                        v-if="typeValue&&proces!==scope.row.userAlias"
                        effect="dark"
                        content="修改"
                        placement="top">
              <i class="icon-change el-icon-edit"
                 @click="changeShow(scope.row)"></i>
            </el-tooltip>

            <!-- <el-tooltip v-if="scope.row.type==1" class="item" effect="dark" content="权限" placement="top">
    						<i class="icon-unclick el-icon-menu"></i>
						</el-tooltip> -->

            <el-tooltip v-if="typeValue&&proces!==scope.row.userAlias"
                        class="item"
                        effect="dark"
                        content="权限"
                        placement="top">
              <i class="icon-menu el-icon-menu"
                 @click="jurisdictionShow(scope.row)"></i>
            </el-tooltip>

            <!-- <el-tooltip v-if="typeValue" class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-unclick el-icon-delete"></i>
						</el-tooltip> -->

            <el-tooltip v-if="typeValue&&proces!==scope.row.userAlias"
                        class="item"
                        effect="dark"
                        content="删除"
                        placement="top">
              <i class="icon-delete el-icon-delete"
                 @click="deleteClick(scope.row)"></i>
            </el-tooltip>
            <!-- 	<el-tooltip v-if="scope.row.type==1||scope.row.userAlias==proces" class="item" effect="dark" content="重置" placement="top">
    						<i class="icon-unclick el-icon-menu"></i>
						</el-tooltip>
						 -->
            <el-tooltip v-if="typeValue&&proces!==scope.row.userAlias"
                        class="item"
                        effect="dark"
                        content="重置"
                        placement="top">
              <i class="icon-menu el-icon-success"
                 @click="property(scope.row)"></i>
            </el-tooltip>

          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="添加"
               :visible.sync="universal.add">
      <div>
        <el-row>
          <el-col :span="12">
            <span class="spanClassT">
              <span class="aKey">*</span>账号：</span>
            <el-input :disabled="false"
                      v-model="add.userName"
                      clearable
                      placeholder="请输入内容"></el-input>
            <!--<span>请输入账号</span>--><br /><br />

            <span class="spanClassT">
              <span class="aKey">*</span>账号类型：</span>
            <el-select v-model="add.type"
                       placeholder="请选择">
              <el-option v-for="item in options"
                         :key="item.roleId"
                         :label="item.roleName"
                         :value="item.roleId"></el-option>
            </el-select><br /><br />

            <span class="spanClassT">
              <span class="aKey">*</span>用户名：</span>
            <el-input :disabled="false"
                      v-model="add.userAlias"
                      clearable
                      placeholder="请输入内容"></el-input><br /><br />

            <span class="spanClassT">
              <span class="aKey">*</span>密码：</span>
            <el-input :disabled="false"
                      type='password'
                      v-model="add.password"
                      clearable
                      placeholder="请输入内容"></el-input><br /><br />

            <span class="spanClassT">
              <span class="aKey">*</span>确认密码：</span>
            <el-input :disabled="false"
                      type='password'
                      v-model="add.repeatPSD"
                      clearable
                      placeholder="请输入内容"></el-input><br /><br />

            <span class="spanClassT">
              <span class="aKey">*</span>绑定手机：</span>
            <el-input :disabled="false"
                      v-model="add.phoneNum"
                      clearable
                      placeholder="请输入内容"></el-input><br /><br />

            <span class="spanClassT">
              <span class="aKey"></span>绑定邮箱：</span>
            <el-input :disabled="false"
                      v-model="add.email"
                      clearable
                      placeholder="请输入内容"></el-input>

          </el-col>
          <el-col :span="12"
                  v-if="add.type==5">
            <span class="spanClassT">
              <span class="aKey">*</span>水司名称：</span>
            <el-input :disabled="false"
                      v-model="addDealers.customerName"
                      clearable
                      placeholder="请输入内容"></el-input><br /><br />

            <span class="spanClassT">
              <span class="aKey">*</span>官方电话：</span>
            <el-input :disabled="false"
                      v-model="addDealers.customerPhone"
                      clearable
                      placeholder="请输入内容"></el-input><br /><br />

            <span class="spanClassT">
              <span class="aKey">*</span>所属地区：</span>
            <el-input :disabled="false"
                      v-model="addDealers.area"
                      clearable
                      placeholder="请输入内容"></el-input><br /><br />

            <span class="spanClassT">
              <span class="aKey">*</span>详细地址：</span>
            <el-input :disabled="false"
                      v-model="addDealers.address"
                      clearable
                      placeholder="请输入内容"></el-input><br /><br />
            <span class="spanClassT">
              <span class="aKey"> </span>公共邮箱：</span>
            <el-input :disabled="false"
                      v-model="addDealers.semail"
                      clearable
                      placeholder="请输入内容"></el-input>
          </el-col>
        </el-row>
      </div>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="universal.add = false">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="addClick">提交</el-button>
      </div>
    </el-dialog>
    <el-dialog title="修改"
               :visible.sync="universal.change">
      <div>
        <span class="spanClass">账号：</span>
        <el-input :disabled="true"
                  v-model="change.userName"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />

        <span class="spanClass">角色类型：</span>
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
                     :page-sizes="[1,2,3,10, 11, 12]"
                     :page-size="paging.pageSize"
                     layout="sizes, prev, pager, next, jumper,total"
                     :total="paging.total"></el-pagination>
    </div>
  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
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
        userAlias: '',
        roleName: ''
      },
      add: {
        userName: '',
        userAlias: '',
        userName: '',
        password: '',
        repeatPSD: '',
        phoneNum: '',
        email: '',
        type: 2
      },
      addDealers: {
        customerName: '',
        customerPhone: '',
        semail: '',
        area: '',
        address: ''
      },
      oldnum: '',
      newnum: '',
      change: {
        userId: '',
        userName: '',
        roleName: '',
        userAlias: '',
        phoneNum: '',
        emal: ''
      },
      tableChild: [],
      options: [],
      dataUniversal: this.$store.state.activeName,
      updataUserId: '',
      classA: [],
      classB: [],
      attClassB: [],
      proces: '',
      typeValue: false
    }
  },
  mounted: function () {
    let type = sessionStorage.getItem('type');
    console.log(type)
    let userId = sessionStorage.getItem('userId');
    if (type == '1' || type == '2' || type == '5') {
      this.typeValue = true
    } else {
      this.typeValue = false;
    }
    document.title = this.$route.meta.title;
    this.proces = sessionStorage.getItem('userAlias')
    this.searchClick();
    this.downList();
    let that = this;
    axios({
      method: 'post',
      url: this.$store.state.http + '/role/findAll',
      data: Qs.stringify({
        page: 1,
        pageSize: 1000000
      })
    }).then(function (message) {
      console.log(message.data)
      if (message.data.resCode == 0) {
        that.tableChild = message.data.result
      }
    })
  },
  methods: {
    ADDtext () {
      this.universal.add = true;
      this.add.userName = ''
      this.add.type = ''
      this.add.userAlias = ''
      this.add.password = ''
      this.add.repeatPSD = ''
      this.add.phoneNum = ''
      this.add.email = ''
    },
    hideclick () {
      this.universal.change = false
    },
    indexMethod (index) {
      return index + (this.paging.page - 1) * this.paging.pageSize + 1;
    },
    updataClick () {
      let that = this;
      this.checkbox.checkedCities.sort(function (a, b) {
        return a - b;
      })
      console.log(this.checkbox.checkedCities.join(','))

      axios({
        method: 'post',
        url: this.$store.state.http + '/user/update',
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
      /*console.log(value)*/
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
    handleSizeChange (val) {
      this.paging.pageSize = val;
      this.searchClick();
    },
    handleCurrentChange (val) {
      this.searchClick();
    },
    property (row) {
      console.log(row)
      let that = this;
      let data = {
        userId: row.userId
      }
      that.$confirm('此操作将永久重置密码, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios({
          method: 'post',
          url: that.$store.state.http + '/user/selectReset',
          data: Qs.stringify(data)
        }).then(function (message) {
          if (message.data.resCode == 0) {
            that.$message({
              message: message.data.result,
              type: 'success'
            });
          }
        })
      }).catch(() => {
        that.$message({
          type: 'info',
          message: '已取消重置'
        });
      });
    },
    addClick () {
      // this.newnum= JSON.stringify(new Date().getTime()).slice(5,13);
      console.log(this.oldnum)
      if (this.add.password != this.add.repeatPSD) {
        this.$message.error('两次密码不一致');
        return false;
      }
      // if (this.add.userName.length > 12 || this.add.userName < 2) {
      //   this.$message.error('账号长度为6-12位');
      //   return false;
      // }
      // let regEmail = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
      let regPhone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
      // if(!regEmail.test(this.add.email)){
      // 	this.$message.error('邮箱格式不正确');
      // 	return false;
      // }
      if (!regPhone.test(this.add.phoneNum)) {
        this.$message.error('手机号码格式有误');
        return false;
      }

      this.add.dealer = sessionStorage.getItem('dealer');
      // 动过
      if (this.add.dealer == 0) {
        this.add.dealer = sessionStorage.getItem('orderDealers')
      }





      console.log(sessionStorage.getItem('dealer'));
      let dataA = this.add;
      // dataA.dealerId = this.newnum;
      if (this.add.userName == '' || this.add.userAlias == '' || this.add.userName == '' || this.add.password == '' || this.add.repeatPSD == '' || this.add.phoneNum == '') {
        this.$message.error('带*的数据不能为空哦！');
        return false;
      }
      if (this.add.type == 5) {
        if (this.addDealers.customerName == '' || this.addDealers.customerPhone == '' ||  this.addDealers.area == '' || this.addDealers.address == '') {
          this.$message.error('带*的数据不能为空哦！');
          return false;
        }
      }
      this.oldnum = JSON.stringify(new Date().getTime()).slice(5, 13);
      dataA.userId = this.oldnum;
      dataA.email = this.add.email

      console.log(dataA)
      let that = this;
      axios({
        method: 'post',
        url: this.$store.state.http + '/user/add',
        data: Qs.stringify(dataA)
      }).then(function (message) {
        console.log(message.data)
        if (message.data.resCode == 0) {
          that.searchClick();
          if (that.add.type == 5) {
            let dataB = that.addDealers;
            dataB.emails = that.addDealers.semail
            dataB.dealerId = message.data.result;
            console.log(dataB);

            axios({
              method: 'post',
              url: that.$store.state.http + '/customer/add',
              data: Qs.stringify(dataB)
            }).then(function (message) {
              console.log(message.data)
              if (message.data.resCode == 0) {
                that.searchClick();
                that.$message({
                  message: '添加成功',
                  type: 'success'
                });
              } else {
                that.$message({
                  message: message.data.result,
                  type: 'error'
                });
              }
            })

          }
        } else {
          that.$message({
            message: message.data.result,
            type: 'error'
          });
        }
      })
      that.universal.add = false;
    },
    deleteClick (row) {
      console.log(row)
      let that = this;
      this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios({
          method: 'post',
          url: this.$store.state.http + '/user/delete',
          data: Qs.stringify({
            userId: row.userId
          })
        }).then(function (message) {
          console.log(message.data)
          if (message.data.resCode == 0) {
            that.searchClick();
          } else {
            that.$message({
              message: '删除失败',
              type: 'error'
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
      let regEmail = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
      let regPhone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
      // if(!regEmail.test(this.change.emal)){
      // 	this.$message.error('邮箱格式不正确');
      // 	return false;
      // }
      if (!regPhone.test(this.change.phoneNum)) {
        this.$message.error('手机号码格式有误');
        return false;
      }
      if (this.change.userAlias == '') {
        this.$message.error('用户名不能为空');
        return false;
      }
      let data = {
        userId: this.change.userId,
        userAlias: this.change.userAlias,
        phoneNum: this.change.phoneNum,
        email: this.change.emal,
      }
      console.log(data)
      let that = this;
      axios({
        method: 'post',
        url: this.$store.state.http + '/user/update',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message.data)
        if (message.data.resCode == 0) {
          that.searchClick();
        } else {
          that.searchClick();
          that.$message({
            message: '添加失败',
            type: 'error'
          });
        }
      })
      that.universal.change = false;
    },
    jurisdictionShow (row) {
      let that = this;
      this.updataUserId = row.userId;
      axios({
        method: 'post',
        url: this.$store.state.http + '/user/selecByUserId',
        data: Qs.stringify({
          userId: row.userId
        })
      }).then(function (message) {
        console.log(message.data)
        if (message.data.resCode == 0) {
          if (message.data.result == '暂时无权限分配') {
            that.checkbox.checkedCities = [];
          } else {
            that.checkbox.checkedCities = message.data.result.split(',');
          }
        } else {
          that.checkbox.checkedCities = [];
        }
      })
      console.log(row)
      console.log(that.checkbox.checkedCities)
      this.universal.jurisdiction = true;
    },
    searchClick () {
      let data = {
        page: this.paging.page,
        pageSize: this.paging.pageSize,
      };
      if (this.search.roleName) {
        data.roleName = this.search.roleName
      }
      if (this.search.userName) {
        data.userName = this.search.userName
      }
      if (this.search.userAlias) {
        data.userAlias = this.search.userAlias
      }
      data.userId = sessionStorage.getItem('userId');
      data.dealer = sessionStorage.getItem('dealer');
      // 动过
      if (data.dealer == 0) {
        data.dealer = sessionStorage.getItem('orderDealers')
      }
      console.log(data)
      let that = this;
      that.tableData = [];
      axios({
        method: 'post',
        url: this.$store.state.http + '/user/list',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message)
        if (message.data.resCode == 0) {
          for (var i = 0; i < message.data.result.length; i++) {
            if (message.data.result[i].emal == '') {
              message.data.result[i].emal = '-'
            } else {
              message.data.result[i].emal = message.data.result[i].emal
            }

          }
          that.paging.total = message.data.count;
          that.tableData = message.data.result;
        } else {
          that.tableData = [];
        }
      })
    },
    downList () {
      let that = this;
      axios({
        method: 'post',
        url: this.$store.state.http + '/role/findAll'
      }).then(function (message) {
        console.log(message.data)
        if (message.data.resCode == 0) {
          /*console.log(message.data.result)*/
          that.options = message.data.result;
          that.options.shift();
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
#roleList {
  padding: 20px;
}

/*.textareaWidth{width: 200px;}*/
</style>