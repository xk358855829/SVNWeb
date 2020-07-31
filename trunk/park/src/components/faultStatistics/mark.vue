<template>
  <div id="InstallManList">
    <div class="header">
      <div class="headerTitle">
        <span>积分管理</span>
      </div>
    </div>
    <div class="select">
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-plus"
                 @click='universal.add = true'>添加</el-button>
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

        <el-table-column label="满(N)元	"
                         width="150">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.money01==0?'-':scope.row.money01 }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.money01==0?'-':scope.row.money01 }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="积(N)分"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.mark01==0?'-':scope.row.mark01 }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.mark01==0?'-':scope.row.mark01 }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="N个积分"
                         width="150">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.mark02==0?'-':scope.row.mark02 }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.mark02==0?'-':scope.row.mark02 }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="抵用N元"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.money02==0?'-':scope.row.money02 }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.money02==0?'-':scope.row.money02 }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="开始时间"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.startTime }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.startTime }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="结束时间"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.endTime }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.endTime }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column prop=""
                         label="操作"
                         width='150'>
          <template slot-scope="scope">
            <!-- <el-tooltip class="item"
                        effect="dark"
                        content="修改"
                        placement="top">
              <i class="icon-change el-icon-edit"
                 @click="changeShow(scope.row)"></i>
            </el-tooltip> -->

            <el-tooltip class="item"
                        effect="dark"
                        content="删除"
                        placement="top">
              <i class="icon-delete el-icon-delete"
                 @click="deleteClick(scope.row.id)"></i>
            </el-tooltip>
            <el-tooltip class="item"
                        effect="dark"
                        content="绑定车场"
                        placement="top">
              <i class="jilu iconfont icon-bangding"
                 @click="parkbind(scope.row.id)"></i>
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
              <span class="aKey">*</span>积分类型：</span>
            <el-select v-model="add.type"
                       @change="changemark"
                       placeholder="请选择">
              <el-option v-for="item in [
              {roleName:'可积分',roleId:'1'},
              {roleName:'可抵用',roleId:'2'},
              {roleName:'积分和抵用',roleId:'12'}
              ]"
                         :key="item.roleId"
                         :label="item.roleName"
                         :value="item.roleId"></el-option>
            </el-select><br /><br />
            <div v-if="add.type=='1'||add.type=='12'">
              <span class="spanClassT">
                <span class="aKey">*</span>满(N)元：</span>
              <el-input :disabled="false"
                        v-model="add.money01"
                        clearable
                        placeholder="请输入内容"></el-input><br /><br />
              <span class="spanClassT">
                <span class="aKey">*</span>积(N)分：</span>
              <el-input :disabled="false"
                        v-model="add.mark01"
                        clearable
                        placeholder="请输入内容"></el-input><br /><br />
            </div>

          </el-col>
          <el-col :span="12">
            <div v-if="add.type=='2'||add.type=='12'">
              <span class="spanClassT">
                <span class="aKey">*</span>N个积分：</span>
              <el-input :disabled="false"
                        v-model="add.mark02"
                        clearable
                        placeholder="请输入内容"></el-input><br /><br />
              <span class="spanClassT">
                <span class="aKey">*</span>抵用N元：</span>
              <el-input :disabled="false"
                        v-model="add.money02"
                        clearable
                        placeholder="请输入内容"></el-input><br /><br />
            </div>

            <span class="spanClassT">
              <span class="aKey">*</span>开始时间：</span>
            <el-date-picker v-model="add.visStartDate"
                            type="datetime"
                            placeholder="选择日期时间"
                            value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />

            <span class="spanClassT">
              <span class="aKey">*</span>结束时间：</span>
            <el-date-picker v-model="add.visEndDate"
                            type="datetime"
                            placeholder="选择日期时间"
                            value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />
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
                   @click="adds">提交</el-button>
      </div>
    </el-dialog>
    <el-dialog title="积分应用停车场"
               :visible.sync="internet">
      <el-checkbox-group v-model="checkedCities1"
                         @change="changemenu"
                         :min="1">
        <el-checkbox v-for="city in cities"
                     :label="city.parking_id"
                     :value="city.parking_name"
                     :key="city.parking_id">{{city.parking_name}}</el-checkbox>
      </el-checkbox-group>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="internet = false">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="software">确认</el-button>
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
                     :total="total"></el-pagination>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Qs from 'qs';
import { addrule, searchrule, deletes, parkbrule } from '../api/api.js'
import { mapActions, mapState } from 'vuex';
export default {
  name: 'mark',
  data () {
    return {
      internet: false,
      data: [
        {          key: 1,
          label: `备选项 1`,
        }
      ],
      checkedCities1: [],
      cities: [],
      universal: {
        add: false
      },
      add: {
        visStartDate: '',
        visEndDate: '',
        startTime: '',
        endTime: '',
        type: '',
        money01: '',
        mark01: '',
        money02: '',
        mark02: '',
      },
      paging: {
        page: 1,
        pageSize: 10,
      },
      tableData: [],
      value3: [1],
      total: '',
      clickid: ''
    }
  },
  mounted () {
    this.searchClick()
    this.searchpark()
    this.cities = []
  },
  watch: {
    apliyparkName: function (news, old) {
      this.cities = news
    }
  },
  computed: {
    ...mapState(['apliyparkName'])
  },
  methods: {
    ...mapActions(['Alipay']),
    // 查询停车场
    searchpark () {
      let datas = {
        page: 1,
        pageSize: 0,
        userId: localStorage.getItem('userId'),
        dealer: localStorage.getItem('dealer')
      }
      this.Alipay(datas)
    },
    async software () {
      if (this.checkedCities1.length == 0) {
        this.$message({
          message: '请选择积分应用的停车场',
          type: 'error'
        })
      }
      var html = ''
      this.checkedCities1.forEach(a => {
        html += a + ','
      })
      let data = {
        parkingId: html.substring(0, html.length - 1),
        markConfigId: this.clickid,
        dealer: localStorage.getItem("dealer")
      }
      let res = await parkbrule(data)
      if (res.data.code == 0) {
        this.$message({ message: '绑定成功', type: 'success' })
      } else {
        this.$message({ message: '绑定失败', type: 'error' })
      }
      this.internet = false
      this.searchClick()
    },
    changemenu (value) {
      console.log(value)
    },
    parkbind (val) {
      this.internet = true
      this.clickid = val
    },
    searchClick () {
      searchrule({
        // type: 12,
        page: 1,
        pageSize: 10,
        userId: localStorage.getItem('userId'),
        // dealer: localStorage.getItem('dealer')
        dealer: localStorage.getItem("dealer")
      }).then(res => {
        if (res.data.resCode == 1) {
          this.tableData = res.data.result
          this.total = res.data.count
        }
      })
    },
    handleChange (value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
    },
    async deleteClick (val) {
      this.$confirm('此操作将恢复订单数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        let res = await deletes({ id: val })
        if (res.data.code == 0) {
          this.$message({
            message: res.data.result,
            type: 'success'
          });
        } else {
          this.$message({
            message: res.data.result,
            type: 'error'
          });
        }
        this.searchClick()
      })
    },
    changemark (val) {
      if (val == 1) {
        this.add.money02 = ''
        this.add.mark02 = ''
      } else if (val == 2) {
        this.add.money01 = ''
        this.add.mark01 = ''
      }
    },
    isRealNum (val) {
      if (val === "" || val == null) {
        return false;
      } if (!isNaN(val)) {
        return true;
      } else {
        return false;
      }
    },
    async adds () {
      if (this.add.type == '' || this.add.visStartDate == '' || this.add.visEndDate == '') {
        this.$message.error('带*号数据不能空');
        return
      }
      if (this.add.type == 1) {
        if (this.add.money01 == '' || this.add.mark01 == '') {
          this.$message.error('带*号数据不能空');
          return
        }
        if (!this.isRealNum(this.add.money01) || !this.isRealNum(this.add.mark01)) {
          this.$message.error('金钱和积分只能为数字');
          return
        }
      } else if (this.add.type == 2) {
        if (this.add.money02 == '' || this.add.mark02 == '') {
          this.$message.error('带*号数据不能空');
          return
        }
        if (!this.isRealNum(this.add.money02) || !this.isRealNum(this.add.mark02)) {
          this.$message.error('金钱和积分只能为数字');
          return
        }

      } else {
        if (this.add.money01 == '' || this.add.mark01 == '' || this.add.money02 == '' || this.add.mark02 == '') {
          this.$message.error('带*号数据不能空');
          return
        }
        if (!this.isRealNum(this.add.money01) || !this.isRealNum(this.add.mark01) || !this.isRealNum(this.add.money02) || !this.isRealNum(this.add.mark02)) {
          this.$message.error('金钱和积分只能为数字');
          return
        }
      }
      let res = await addrule({
        startTime: this.add.visStartDate,
        endTime: this.add.visEndDate,
        type: this.add.type,
        money01: this.add.money01 ? this.add.money01 : 0,
        mark01: this.add.mark01 ? this.add.mark01 : 0,
        money02: this.add.money02 ? this.add.money02 : 0,
        mark02: this.add.mark02 ? this.add.mark02 : 0,
        dealer: localStorage.getItem("dealer")
      })
      if (res.data.code == 0) {
        this.$message({
          type: 'success',
          message: res.data.result
        });
      } else {
        this.$message({
          type: 'error',
          message: res.data.result
        });
      }
      this.universal.add = false
    }
  }
}
</script>
<style scoped>
#InstallManList {
  padding: 20px;
}
.el-checkbox {
  width: 195px;
}
.el-checkbox:nth-child(1) {
  margin-left: 30px;
}
</style>
