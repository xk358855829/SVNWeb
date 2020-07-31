<template>
  <div id="roleList">
    <div class="header">
      <div class="headerTitle">
        <span>{{this.gloal.roleLst.title}}</span>
      </div>
    </div>
    <div class="select">
      <span>&nbsp;&nbsp;&nbsp;{{this.gloal.roleLst.user}}：</span>
      <el-input v-model="search.userAlias"
                clearable
                placeholder="请输入内容"></el-input>

      <span>{{this.gloal.roleLst.account}}：</span>
      <el-input v-model="search.userName"
                clearable
                placeholder="请输入内容"></el-input>
      <span>{{this.gloal.roleLst.usertype}}：</span>
      <el-select v-model="search.roleName"
                 placeholder="请选择">
        <el-option>未选择</el-option>
        <el-option v-for="item in options"
                   :key="item.roleId"
                   :label="item.roleName"
                   :value="item.roleName"></el-option>
      </el-select><br /><br />
      <span>{{this.gloal.roleLst.upuser}}：</span>
      <el-input v-model="search.superior"
                clearable
                placeholder="请输入内容"></el-input>
    </div>
    <div class="select">
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-plus"
                 @click='ShowHide'
                 v-show="showchose">{{this.gloal.table.gadd}}</el-button>
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-search"
                 @click='searchClick'>{{this.gloal.table.gsearch}}</el-button>
    </div>
    <div class="Content">
      <el-table class='oyTable'
                :data="tableData"
                style="width: 100%">
        <el-table-column type="index"
                         :index="indexMethod"
                         label="序号"
                         width="50"> </el-table-column>

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

        <el-table-column label="用户类型"
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

        <el-table-column label="上级用户"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.superior?scope.row.superior:'-' }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.superior?scope.row.superior:'-' }}</div>
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

            <el-tooltip v-if="Number(scope.row.type)==0"
                        class="item"
                        effect="dark"
                        content="权限"
                        placement="top">
              <i class="icon-unclick el-icon-menu"></i>
            </el-tooltip>

            <el-tooltip v-else=""
                        class="item"
                        effect="dark"
                        content="权限"
                        placement="top">
              <i class="icon-menu el-icon-menu"
                 @click="jurisdictionShow(scope.row)"></i>
            </el-tooltip>

            <el-tooltip class="item"
                        v-if="Number(scope.row.type)!=9"
                        effect="dark"
                        content="已绑道闸"
                        placement="top">
              <i class="icon-unclick el-icon-service"></i>
            </el-tooltip>
            <el-tooltip v-else=""
                        class="item"
                        effect="dark"
                        content="绑定道闸"
                        placement="top">
              <i class="icon-change el-icon-service"
                 @click="yibang(scope.row)"></i>
            </el-tooltip>

            <el-tooltip v-if="Number(scope.row.type)!=9"
                        class="item"
                        effect="dark"
                        content="绑定"
                        placement="top">
              <i class="icon-unclick el-icon-news"></i>
            </el-tooltip>

            <el-tooltip v-else=""
                        class="item"
                        effect="dark"
                        content="绑定"
                        placement="top">
              <i class="icon-menu el-icon-news"
                 @click="bangding(scope.row)"></i>
            </el-tooltip>
            <el-tooltip v-if="Number(scope.row.type)==0"
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
            <!-- <el-tooltip class="item" effect="dark" content="绑定" placement="top">
    						<i class="jilu iconfont icon-chongzhijilu" @click="bangding(scope.row)" ></i>
						</el-tooltip> -->
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="绑定停车场"
               :visible.sync="universal.look">
      <span>已绑定停车场：</span>
      <el-input v-model="separkname"></el-input>
      <!-- <el-select v-model="item.id" placeholder="请选择" @change="aaa(item.id)">
				<el-option>未选择</el-option>
				<el-option v-for="item in online" :key="item.id" :label="item.parkingName" :value="item.id"></el-option>
			</el-select> -->
      <el-button @click="jiebang()">解绑停车场</el-button>
      <div class="innercar">
        <template>
          <el-table ref="multipleTable"
                    :data="tableData3"
                    height="400"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
            <el-table-column type="selection"
                             width="55">
            </el-table-column>
            <el-table-column label="停车场名称"
                             width="120">
              <template slot-scope="scope">{{ scope.row.parking_name }}</template>
            </el-table-column>
            <el-table-column prop="parking_lot_type"
                             label="停车场类型"
                             width="150">
            </el-table-column>
            <el-table-column prop="parking_address"
                             label="停车场地址"
                             show-overflow-tooltip>
            </el-table-column>
            <!-- <el-table-column label="操作"> -->
            <!-- <template slot-scope="scope">
						<el-button
						size="mini"
						type="danger"
						@click="handleDelete(scope.$index, scope.row)">删除</el-button>
					</template> -->
            <!-- </el-table-column> -->
          </el-table>
          <div style="margin-top: 20px">
            <el-button @click="togg()">取消</el-button>
            <el-button @click="toggleSelection()"
                       style="float:right">绑定停车场</el-button>
          </div>
        </template>
      </div>
    </el-dialog>
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

          </el-col>
          <el-col :span="12">
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

            <span class="spanClassT">绑定邮箱：</span>
            <el-input :disabled="false"
                      v-model="add.email"
                      clearable
                      placeholder="请输入内容"></el-input>
          </el-col>

        </el-row>
        <span class="spanClassT">
          <span class="aKey">*</span>备注：</span>
        <div class="little">{{this.$store.state.size}}</div>
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
    <el-dialog title="出场道闸设置"
               :visible.sync="universal.none">
      <div>
        <span class="spanClassT">
          <span class="aKey">*</span>道闸设置：</span>
        <el-select v-model="none.type"
                   placeholder="请选择">
          <el-option v-for="item in gate"
                     :key="item.deviceld"
                     :label="item.alias"
                     :value="item.deviceld"></el-option>
        </el-select><br /><br />

      </div>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="hideclick">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="setiner">设置</el-button>
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
import { searchClicks } from '../api/api.js'
export default {
  name: 'equipmentList',
  data () {
    return {
      checkbox: {
        checkedCities: []
      },
      checked: true,
      parkarr: [],
      universal: {
        add: false,
        change: false,
        jurisdiction: false,
        next: false,
        look: false,
        none: false
      },
      none: {
        type: ''
      },
      gate: [],
      showchose: '',
      paging: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      tableData: [],
      search: {
        userAlias: '',
        userName: '',
        superior: '',
        roleName: ''
      },
      item: {
        id: ''
      },
      add: {
        userName: '',
        userAlias: '',
        password: '',
        repeatPSD: '',
        phoneNum: '',
        email: '',
        type: 2
      },
      separkname: '',
      online: [],
      onlinearr: '',
      addDealers: {
        customerName: '',
        customerPhone: '',
        phone: '',
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
      rowuserId: '',
      options: [],
      dataUniversal: this.$store.state.activeName,
      updataUserId: '',
      classA: [],
      classB: [],
      attClassB: [],
      multipleSelection: [],
      tableData3: [],
      replace: '',
      usez: ''
    }
  },
  mounted: function () {
    document.title = this.$route.meta.title;
    if (localStorage.getItem('dealer') != 0) {
      this.showchose = true
    } else {
      this.showchose = false
    }
    this.searchClick();
    this.downList();
  },
  methods: {
    togg () {
      this.universal.look = false;
    },
    // bangding(){

    // 	let that=this;
    // 	axios({
    // 		method:'get',
    // 		url:`${that.$store.state.url}/protect/security?userId=${localStorage.getItem('userId')}&parking=${row.id}`,
    // 		// data:Qs.stringify(dataS)
    // 	}).then(function(message){
    // 		console.log(message)
    // 		if(message.data.code=="1"){
    // 			that.$message({
    // 				message: message.data.result,
    // 				type: 'error'
    // 			});
    // 		}else if(message.data.code=="0"){
    // 			that.$message({
    // 				message: '绑定成功',
    // 				type: 'success'
    // 			});
    // 			that.$router.push('/pageHome/big')
    // 			that.preferential=message.data.result;
    // 		}
    // 	})
    // },
    setiner () {
      let data = {
        uid: this.uid,
        bid: this.none.type
      }
      axios({
        method: 'post',
        url: 'http://39.104.99.181:8762/web/reserve/selectByBid',
        data: Qs.stringify(data)
      }).then(res => {
        if (res.data.resCode == 0) {
          this.$message({
            message: '设置成功',
            type: 'success'
          });
        } else {
          this.$message({
            message: '设置失败',
            type: 'error'
          });
        }
      })
      this.universal.none = false;
    },
    yibang (val) {

      console.log(val)
      axios({
        method: 'get',
        url: this.$store.state.url + '/protect/asevSecurity?userId=' + val.userId
      }).then(resf => {
        if (resf.data.code == 0) {
          let data = {
            id: resf.data.result.parkid
          }
          axios({
            method: 'post',
            url: 'http://39.104.113.112:2088/Device/queryBindDeviceld',
            data: Qs.stringify(data)
          }).then(res => {
            console.log(res)

            if (res.data.resCode == 0) {
              if (res.data.outBrake.length > 0) {
                this.gate = res.data.outBrake
                this.universal.none = true;
              } else {
                this.$message({
                  message: '停车场未绑定道闸',
                  type: 'error'
                });
              }

            }

            //
          })
        } else {
          this.$message({
            message: '未绑定停车场',
            type: 'error'
          });
        }

      })
    },
    bangding (row) {
      console.log(row)
      this.usez = row.userId
      this.universal.look = true

      let data = {
        page: 1,
        pageSize: 0,
        userId: localStorage.getItem('userId'),
        dealer: localStorage.getItem('dealer'),
      };
      console.log(data)
      let that = this;
      that.tableData3 = [];
      axios({
        method: 'post',
        url: this.$store.state.url + '/Parking/selectLotInfo',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message.data)
        if (message.data.resCode == 0) {
          for (var i = 0; i < message.data.result.length; i++) {
            message.data.result[i].date.time = that.common.timeToDate(JSON.stringify(message.data.result[i].date.time).slice(0, 10))
          }
          for (var i = 0; i < message.data.result.length; i++) {
            if (message.data.result[i].parking_lot_type == 1) {
              message.data.result[i].parking_lot_type = '居民小区'
            } else if (message.data.result[i].parking_lot_type == 2) {
              message.data.result[i].parking_lot_type = '商圈停车场'
            } else if (message.data.result[i].parking_lot_type == 3) {
              message.data.result[i].parking_lot_type = '路侧停车'
            } else if (message.data.result[i].parking_lot_type == 4) {
              message.data.result[i].parking_lot_type = '公园景点'
            } else if (message.data.result[i].parking_lot_type == 5) {
              message.data.result[i].parking_lot_type = '商务楼宇'
            } else if (message.data.result[i].parking_lot_type == 6) {
              message.data.result[i].parking_lot_type = '其他'
            } else if (message.data.result[i].parking_lot_type == 7) {
              message.data.result[i].parking_lot_type = '交通枢纽'
            } else if (message.data.result[i].parking_lot_type == 8) {
              message.data.result[i].parking_lot_type = '市政设施'
            }
          }
          that.paging.total = message.data.count;
          that.tableData3 = message.data.result.reverse();
          axios({
            method: 'get',
            url: that.$store.state.url + '/protect/asevSecurity?userId=' + row.userId
          }).then(res => {
            console.log(res.data.result.parkid)
            that.separkname = that.chagngestal(res.data.result.parkid)
            // that.tableData3.forEach((a,b)=>{
            // 	if(a.id=res.data.result.parkid){
            // 		that.separkname=a.parking_name
            // 		console.log(that.separkname)
            // 	}
            // })
            console.log(that.separknameid)
          })
        } else {
          that.tableData3 = [];
        }
      })

    },
    chagngestal (val) {
      this.tableData3.forEach((a, b) => {
        if (a.id == val) {
          return val = a.parking_name
        }
        return val
      })
      return val
    },
    ShowHide () {
      this.universal.add = true
      this.add.userName = ''
      this.add.userAlias = ''
      this.add.password = ''
      this.add.repeatPSD = ''
      this.add.phoneNum = ''
      this.add.email = ''
      this.add.type = ''
    },
    aaa (val) {
      console.log(val)
      this.online.map((s, index) => {
        if (s.id === val) {
          this.onlinearr = val
        }
      })
    },
    jiebang () {
      console.log(this.usez)
      console.log(this.separkname)
      this.tableData3.forEach((a, b) => {
        if (a.parking_name == this.separkname) {
          this.separkname = a.id
        }
      })
      console.log(this.separkname)
      console.log(123)
      let that = this;
      axios({
        method: 'get',
        url: this.$store.state.url + '/protect/asevUntie?userId=' + that.usez + '&parking=' + that.separkname,
      }).then(function (message) {
        console.log(message)
        if (message.data.code == "1") {
          that.$message({
            message: '解绑成功',
            type: 'success'
          });
        } else {
          that.$message({
            message: '解绑失败',
            type: 'error'
          });
        }
        that.universal.look = false
      })
    },
    toggleSelection (rows) {
      if (this.multipleSelection.length > 1 || this.multipleSelection.length == 0) {
        this.$message.error('岗亭人员允许绑定一个停车场');
        return false
      }
      this.parkarr = []
      let that = this;
      axios({
        method: 'get',
        url: `${that.$store.state.url}/protect/security?userId=${that.usez}&parking=${that.multipleSelection[0].id}`,
      }).then(function (message) {
        console.log(message)
        if (message.data.code == 0) {
          that.$message({
            message: '绑定成功',
            type: 'success'
          });
        } else {
          that.$message({
            message: message.data.result,
            type: 'error'
          });
        }
      })
      that.universal.look = false;
    },
    handleSelectionChange (val) {
      console.log(val)
      this.multipleSelection = val;
    },
    hideclick () {
      this.universal.change = false
      this.universal.none = false;
    },
    indexMethod (index) {
      console.log(index)
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
      console.log(this.tableData)
    },
    addClick () {
      this.newnum = JSON.stringify(new Date().getTime()).slice(5, 13);
      console.log(this.oldnum)
      if (this.add.password == '' || this.add.repeatPSD == "" || this.add.userName == "" || this.add.userAlias == "" || this.add.phoneNum == "") {
        this.$message.error('带*号的不能为空');
        return false;
      }
      if (this.add.password != this.add.repeatPSD) {
        this.$message.error('两次密码不一致');
        return false;
      }
      let regPhone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;

      if (!regPhone.test(this.add.phoneNum)) {
        this.$message.error('手机号码格式有误');
        return false;
      }
      if (this.add.userName.length < 6) {
        this.$message.error('账号长度不能小于6位');
        return false;
      }
      if (this.add.password.length < 6) {
        this.$message.error('密码长度不能小于6位');
        return false;
      }
      this.add.dealer = localStorage.getItem('dealer');
      console.log(this.add)
      let dataA = this.add;
      dataA.dealerId = this.newnum;
      dataA.superior = sessionStorage.getItem('userAlias')
      this.oldnum = JSON.stringify(new Date().getTime()).slice(5, 13);
      dataA.userId = this.oldnum;

      console.log(dataA)
      searchClicks('/s_user/add', dataA).then(res => {
        if (res.data.resCode == 0) {
          this.searchClick();
          this.$message({
            type: 'success',
            message: '添加成功'
          });
        } else {
          this.$message({
            type: 'error',
            message: res.data.result
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
      // this.rowuserId=row.userId
    },
    changeClick (row) {
      if (this.change.userAlias == '' || this.change.phoneNum == "" || this.change.emal == "") {
        this.$message.error('带*号的不能为空');
        return false;
      }
      console.log(row)
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
            message: '修改成功',
            type: 'success'
          })
          this.searchClick();
        } else {
          this.$message({
            message: '修改失败',
            type: 'error'
          });
        }
      })
      this.universal.change = false;
    },
    jurisdictionShow (row) {
      console.log(row)
      let that = this;
      this.updataUserId = row.userId;
      axios({
        method: 'post',
        url: this.$store.state.url + '/s_user/selecByUserId',
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
        console.log(that.checkbox.checkedCities)
      })

      this.universal.jurisdiction = true;
    },
    searchClick () {
      // let data = {
      // 	page:this.paging.page,
      // 	pageSize:this.paging.pageSize,
      // 	userId: localStorage.getItem('userId'),
      // 	dealerCode:localStorage.getItem('dealerId'),
      // 	dealer:sessionStorage.getItem('dealer')
      // };
      let data = {
        page: this.paging.page,
        pageSize: this.paging.pageSize,
        userId: localStorage.getItem('userId'),
        dealer: localStorage.getItem('dealer'),
      };
      // if(localStorage.getItem('userId')=='SURIOT'){
      // 	data = {
      // 	page:this.paging.page,
      // 	pageSize:this.paging.pageSize,
      // 	 	dealerCode:localStorage.getItem('dealerId'),
      // 	 dealer:sessionStorage.getItem('dealer')

      //    };
      // }else{
      // 	data = {
      // 	page:this.paging.page,
      // 	pageSize:this.paging.pageSize,

      // 		dealerCode:localStorage.getItem('dealerId'),
      // 	dealer:sessionStorage.getItem('dealer')
      //    };
      // }
      if (this.search.userAlias) {
        data.userAlias = this.search.userAlias
      }
      if (this.search.userName) {
        data.userName = this.search.userName
      }
      if (this.search.roleName) {
        data.roleName = this.search.roleName
      }
      if (this.search.superior) {
        data.superior = this.search.superior
      }
      data.userId = localStorage.getItem('userId'),
        console.log(data)
      let that = this;
      that.tableData = [];
      axios({
        method: 'post',
        url: that.$store.state.url + '/s_user/list',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message)
        if (message.data.resCode == 0) {
          that.paging.total = message.data.count;
          that.tableData = message.data.result;
        } else {
          that.paging.total = 0;
          that.tableData = [];
        }
      })
    },
    downList () {
      let that = this;
      let data = {
        Page: 1,
        PageSize: 20
      }
      axios({
        method: 'post',
        url: that.$store.state.url + '/role/findAll',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message.data)
        if (message.data.resCode == 0) {

          that.options = message.data.result;
          that.options.shift();
          that.options.forEach((a, b) => {
            if (a.roleId == localStorage.getItem('userType')) {
              that.options.splice(b, 1)
            }
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
#roleList {
  padding: 20px;
}
.jilu {
  width: 22px;
  height: 22px;
  display: inline-block;
  background: #59cb18;
  border-radius: 3px;
  color: #fff;
}
</style>