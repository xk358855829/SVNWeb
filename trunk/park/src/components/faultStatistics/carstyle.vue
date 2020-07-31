<template>
  <div id="faultList">
    <div class="header">
      <div class="headerTitle">
        <span>会员类型</span>
      </div>
    </div>
    <div class="select">
      <span>停车场名称：</span>
      <el-select v-model="search.parking_id"
                 filterable
                 placeholder="请选择">
        <el-option>未选择</el-option>
        <el-option v-for="item in parkIist"
                   :key="item.parking_id"
                   :label="item.parking_name"
                   :value="item.parking_id"></el-option>
      </el-select>
      <span>会员类型：</span>
      <el-select v-model="search.name"
                 placeholder="请选择"
                 @change="changetype">
        <el-option>未选择</el-option>
        <el-option v-for="item in existingList"
                   :key="item.id"
                   :label="item.name"
                   :value="item.id"></el-option>
      </el-select>
    </div>
    <div class="select">
      <el-button type="success"
                 class="oyButton  oychange"
                 icon="el-icon-plus"
                 @click='usage'
                 v-show="showchose">添加</el-button>
      <!-- <el-button type="success" class="oyButton" icon="el-icon-plus" @click='universal.add = true'>添加</el-button> -->
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-search"
                 @click='searchClick'>查询</el-button>
    </div>
    <!-- <TableList :loading="loading"
               :columns="columns"
               :options="optionstable"
               :dataSource="guideList"
               :operates="operates"
               :pagination="pagination"
               :dataTotal="totals"
               @handleChangePage="handleChangePage" /> -->
    <div class="Content">
      <el-table class='oyTable'
                :data="tableData"
                style="width: 100%">
        <el-table-column type="index"
                         :index="indexMethod"
                         label="序号"
                         width="50"> </el-table-column>
        <el-table-column label="停车场名称"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ chosename(scope.row.parking_id) }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ chosename(scope.row.parking_id) }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="会员类型"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.name | namechange}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.name | namechange}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="单价"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.money>0?scope.row.money+'元':'-'}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.money>0?scope.row.money+'元':'-' }}</div>
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
                <div class="overflowHide">{{ scope.row.remark }}</div>
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
    <el-dialog title="新增"
               :visible.sync="universal.add1">
      <div>
        <span class="spanClass spanClasschange">
          <span class="aKey">*</span>停车场名称：</span>
        <el-select v-model="innersearch.parking_id"
                   placeholder="请选择">
          <el-option v-for="item in parkIist"
                     :key="item.parking_id"
                     :label="item.parking_name"
                     :value="item.parking_id"></el-option>
        </el-select><br /><br />

        <span class="spanClass spanClasschange">
          <span class="aKey">*</span>会员类型：</span>
        <el-select v-model="innersearch.name"
                   placeholder="请选择"
                   @change="changetype">
          <el-option v-for="item in existingList"
                     :key="item.id"
                     :label="item.name"
                     :value="item.id"></el-option>
        </el-select><br /><br />
        <span class="spanClass spanClasschange"
              v-if="oftype">
          <span class="aKey"
                v-if="oftype">*</span>支付金额：</span>
        <el-input :disabled="false"
                  v-model="innersearch.money"
                  clearable
                  placeholder="请输入内容"
                  v-if="oftype"></el-input>
        <span v-if="oftype">元</span><br v-if="oftype" /><br v-if="oftype" />
        <span class="spanClass spanClasschange">
          <span class="aKey">*</span>车辆备注：</span>
        <el-input v-model="innersearch.remark"
                  clearable
                  placeholder="请输入内容"></el-input><br><br>
        <span class="spanClass">备注：</span>
        <div class="little">{{this.$store.state.size}}</div>
      </div>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="SHowhide">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="addcarnumberinner">添加</el-button>
      </div>
    </el-dialog>
    <el-dialog title="修改"
               :visible.sync="universal.change1">
      <div>
        <span class="spanClass spanClasschange">
          <span class="aKey">*</span>停车场名称：</span>
        <el-select v-model="change1.parking_id"
                   placeholder="请选择">
          <el-option v-for="item in parkIist"
                     :key="item.parking_id"
                     :label="item.parking_name"
                     :value="item.parking_id"></el-option>
        </el-select><br /><br />

        <span class="spanClass spanClasschange">
          <span class="aKey">*</span>会员类型：</span>
        <el-select v-model="change1.name"
                   placeholder="请选择"
                   @change="changetype">
          <el-option v-for="item in existingList"
                     :key="item.id"
                     :label="item.name"
                     :value="item.id"></el-option>
        </el-select><br /><br />
        <span class="spanClass spanClasschange"
              v-if="oftype">
          <span class="aKey"
                v-if="oftype">*</span>支付金额：</span>
        <el-input :disabled="false"
                  v-model="change1.money"
                  clearable
                  placeholder="请输入内容"
                  v-if="oftype"></el-input>
        <span v-if="oftype">元</span><br v-if="oftype" /><br v-if="oftype" />
        <span class="spanClass spanClasschange">
          <span class="aKey">*</span>车辆备注：</span>
        <el-input v-model="change1.remark"
                  clearable
                  placeholder="请输入内容"></el-input><br><br>
        <span class="spanClass">备注：</span>
        <div class="little">{{this.$store.state.size}}</div>
      </div>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="hideclick1">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="changeClick1">修改</el-button>
      </div>
    </el-dialog>
    <!-- <div class="footer">
			<el-pagination background @current-change="handleCurrentChange"  @size-change="handleSizeChange" :current-page.sync="paging.page" :page-sizes="[10, 11, 12]" :page-size="paging.pageSize" layout="sizes, prev, pager, next, jumper,total" :total="paging.total"></el-pagination>
		</div> -->
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
const columns = [
  {
    prop: 'parking_id',
    label: '停车场名称',
    align: 'center',
    width: ''
  },
  {
    prop: 'name',
    label: '会员类型',
    align: 'center',
    width: ''
  },
  {
    prop: 'money',
    label: '单价',
    align: 'center',
    width: ''
  },
  {
    prop: 'remark',
    label: '备注',
    align: 'center',
    width: ''
  },
]
import Qs from 'qs'
import axios from 'axios'
import { mapState, mapActions, mapGetters } from 'vuex'
import { getParkingLotListApi } from '../api/api.js';
import TableList from '../table/tablepop'
export default {
  name: 'equipmentList',
  data () {
    return {
      loading: String,
      // 表格数据
      obj: [],
      numw: [],
      numvalue: [],
      universal: {
        add1: false,
        change1: false,
      },
      paging: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      change1: {
        name: '',
        remark: '',
        parking_id: '',
        money: ''
      },
      tableData: [],
      oftype: true,
      search: {
        // parking_id:'',
        // car_number:'',
        // in_time:'',
        // out_time:'',
        // InroadGateId:'',
        // status:''
        parking_id: '',
        name: ''
      },
      innersearch: {
        name: '',
        remark: '',
        parking_id: '',
        money: ''
      },
      change: {
        fauId: '',
        fauMode: '',
        fauName: '',
        fauSolve: '',
        fauCode: '',
        devId: ''
      },
      showchose: ''

    }
  },
  computed: {
    TableList
  },
  mounted: function () {
    document.title = this.$route.meta.title;
    if (localStorage.getItem('dealer') != 0) {
      this.showchose = true
    } else {
      this.showchose = false
    }
    this.loading = true
    let data = {
      page: this.paging.page,
      pageSize: 10,
      userId: localStorage.getItem('userId'),
      dealer: localStorage.getItem('dealer')
    };
    this.parkname(data)
    this.searchClick();
    this.loading = false;
    // this.downList();
    // this.common.login()
    // this.getParkingLotListApiList();
  },
  computed: {
    ...mapState(['parkingname', 'existingList']),
    parkIist () {
      return this.$store.state.ONEreslist
    },
    ...mapGetters({
      parkingLotInfo: "getParkingLotInfo",
      parkingLotDevList: "getParkingLotDevList"
    }),
  },
  methods: {
    ...mapActions(['parkname']),
    changetype (val) {
      if (val == 'A' || val == 'E') {
        this.oftype = false
      } else {
        this.oftype = true
      }
    },
    // getParkingLotListApiList () {
    //   let params = {
    //     page: 1,
    //     pageSize: 0,
    //     userId: localStorage.getItem("userId"),
    //     dealer: localStorage.getItem("dealer")
    //   };
    //   getParkingLotListApi(params).then(message => {
    //     console.log(message);
    //     this.parkIist = message.data.result;
    //   });
    // },
    addcarnumberinner () {
      let that = this
      if (that.innersearch.remark == '' || that.innersearch.parking_id == '') {
        that.$message.error('带*的数据不能为空哦！');
        return false;
      }
      if (that.innersearch.name == '') {
        that.$message.error('带*的数据不能为空哦！');
        return false;
      } else {
        console.log(that.innersearch.name)
        console.log(that.innersearch.money)
        if (that.innersearch.name != 'E' && that.innersearch.money != '') {
          var ura = that.$store.state.url + "/carNumberType/setInfo?name=" + that.innersearch.name + "&parking_id=" + that.innersearch.parking_id + "&remark=" + that.innersearch.remark + "&dealer=" + localStorage.getItem('dealer') + `&money=${that.innersearch.money}`
        } else {
          that.$message.error('带*的数据不能为空哦！');
          // that.innersearch.money=''
          ura = that.$store.state.url + "/carNumberType/setInfo?name=" + that.innersearch.name + "&parking_id=" + that.innersearch.parking_id + "&remark=" + that.innersearch.remark + "&dealer=" + localStorage.getItem('dealer')
        }
      }

      axios({
        method: 'get',
        url: ura
      }).then(function (message) {
        if (message.data.resCode == 0) {
          that.$message({
            message: '添加成功',
            type: 'success'
          });
          that.searchClick()
          that.innersearch.name = ''
          that.innersearch.remark = ''
          that.innersearch.start_time = ''
          that.innersearch.end_time = ''
        } else {
          that.$message({
            message: message.data.result,
            type: 'error'
          });
        }
        that.universal.add1 = false
      })
      that.searchClick()
    },
    SHowhide () {
      this.universal.add1 = false;
    },
    hideclick () {
      this.universal.change = false
    },
    indexMethod (index) {
      return index + (this.paging.page - 1) * this.paging.pageSize + 1;
    },
    handleSizeChange (val) {
      this.paging.pageSize = val;
      /*console.log(this.paging.pageSize)*/
      this.searchClick();
    },
    handleCurrentChange (val) {
      this.searchClick();
    },
    usage () {
      this.universal.add1 = true
      let that = this
      that.innersearch.name = ''
      that.innersearch.remark = ''
      that.innersearch.start_time = ''
      that.innersearch.end_time = ''
      this.innersearch.parking_id = ''
    },
    deleteClick (row) {
      let that = this;
      this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios({
          method: 'post',
          url: that.$store.state.url + '/carNumberType/delInfo',
          data: Qs.stringify({
            id: row.id
          })
        }).then(function (message) {
          console.log(message.data)
          if (message.data.resCode == 0) {
            that.$message({
              message: '删除成功',
              type: 'success'
            });
            that.searchClick()
          } else {
            that.$message({
              message: message.data.result,
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
      this.universal.change1 = true;
      this.change1 = Object.assign({}, row);
      console.log(row)
    },
    changeClick1 () {
      let that = this
      if (that.change1.remark == "" || String(that.change1.money) == "") {
        that.$message.error('带*号的不能为空')
        return false;
      }
      let params = {
        name: that.change1.name,
        remark: that.change1.remark,
        money: that.change1.money,
        id: that.change1.id,
        parking_id: that.change1.parking_id
      }
      console.log({ ...params })
      axios({
        method: 'get',
        url: `${that.$store.state.url}/carNumberType/upInfo`,
        params
      }).then(function (message) {
        if (message.data.resCode == 0) {
          that.$message({
            message: '修改成功',
            type: 'success'
          });
          that.searchClick()
        } else {
          that.$message({
            message: '修改失败',
            type: 'error'
          });
        }
      })
      that.universal.change1 = false
    },
    chosename (val) {
      // console.log(this.parkingname);
      this.parkIist.forEach((a, index) => {
        if (a.parking_id == val) {
          // console.log(a.parking_name);
          val = a.parking_name
        }
      })
      // console.log(val);
      return val
    },
    hideclick1 () {
      this.universal.change1 = false
    },
    searchClick () {
      let data = {};
      if (this.search.parking_id) {
        data.parking_id = this.search.parking_id
      }
      if (this.search.name) {
        data.name = this.search.name
      }

      var accept = data.parking_id
      console.log(accept)
      if (accept) {
        data.page = this.paging.page,
          data.pageSize = this.paging.pageSize,
          data.userId = localStorage.getItem('userId'),
          data.dealer = localStorage.getItem('dealer'),
          data.parking_id = accept
      } else {
        data.page = this.paging.page,
          data.pageSize = this.paging.pageSize,
          data.userId = localStorage.getItem('userId')
        data.dealer = localStorage.getItem('dealer')
      }
      let that = this
      that.tableData = [];
      axios({
        method: 'post',
        url: that.$store.state.url + '/carNumberType/findInfo',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message)
        if (message.data.resCode == 0) {
          message.data.result.forEach((a, b) => {
            if (a.id == 1) {
              console.log(879)
              console.log((message.data.result).splice(b, 1))
            }
          })
          that.tableData = message.data.result
          that.paging.total = message.data.count;
        }
        console.log(that.existing)
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
#faultList {
  padding: 20px;
}
.alipay {
  width: 50%;
  float: left;
}
.alipays {
  display: inline-block;
}
.spanClass {
  width: 106px !important;
}
.el-input--small {
  width: 150px !important;
}
</style>