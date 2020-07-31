<template>
  <div id="faultList">
    <div class="header">
      <div class="headerTitle">
        <span>故障统计</span>
      </div>
    </div>
    <div class="select">
      <!-- <span>设备SN码：</span>
      <el-input v-model="search.devId"
                clearable
                placeholder="请输入内容"></el-input> -->
      <span>自定义编号：</span>
      <el-input v-model="search.end"
                clearable
                placeholder="请输入内容"></el-input>
      <span>设备SN码：</span>
      <el-input v-model="search.devParaSn"
                clearable
                placeholder="请输入内容"></el-input>
      <!-- <span>设备编号：</span> -->
      <!-- <el-input v-model="search.devParaSn" clearable placeholder="请输入内容"></el-input> -->
      <!-- <span>故障类型：</span> -->
      <!-- <el-input v-model="search.fauMode" clearable placeholder="请输入内容"></el-input> -->
      <!--<el-input :disabled="false" v-model="add.type" clearable placeholder="请输入内容"></el-input><br /><br />-->
      <!-- <el-select v-model="search.fauMode" placeholder="请选择">
				<el-option v-for="item in options" :key="item.id" :label="item.type" :value="item.id"></el-option>
			</el-select><br /><br /> -->
    </div>
    <div class="select">
      <!-- <el-button type="success" class="oyButton" icon="el-icon-plus" @click='universal.add = true'>添加</el-button> -->
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

        <el-table-column label="自定义编号"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.ends }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.ends }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="设备SN码"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.devParaSn }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.devParaSn }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="地址"
                         width="">
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

        <el-table-column label="故障类型"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.fauMode }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.fauMode }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="最早时间"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ timestamp(scope.row.date.time)}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ timestamp(scope.row.date.time) }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="最新时间"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ timestamp(scope.row.datatime.time)}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ timestamp(scope.row.datatime.time) }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column prop=""
                         label="操作"
                         width='150'
                         v-if="typeValue">
          <template slot-scope="scope">
            <el-tooltip class="item"
                        effect="dark"
                        content="地图"
                        placement="top">
              <i class="icon-change el-icon-location-outline"
                 @click="mapreplace(scope.row)"></i>
            </el-tooltip>

            <el-tooltip v-if="scope.row.roleId == 1"
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
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="新增"
               :visible.sync="universal.add">
      <div>
        <span class="spanClass">设备ID：</span>
        <el-input :disabled="false"
                  v-model="add.devId"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />
        <span class="spanClass">设备型号：</span>
        <!--<el-input :disabled="false" v-model="add.type" clearable placeholder="请输入内容"></el-input><br /><br />-->
        <!-- <el-select v-model="add.fauMode" placeholder="请选择">
    				<el-option v-for="item in options" :key="item.id" :label="item.type" :value="item.id"></el-option>
				</el-select><br /><br /> -->
        <el-input :disabled="false"
                  v-model="add.fauMode"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />

        <!-- <span class="spanClass">故障编码：</span>
				<el-input :disabled="false" v-model="add.fauCode" clearable placeholder="请输入内容"></el-input><br /><br /> -->

        <!-- <span class="spanClass">故障名称：</span>
				<el-input :disabled="false" v-model="add.fauName" clearable placeholder="请输入内容"></el-input><br /><br /> -->

        <span class="spanClass">解决方法：</span>
        <el-input :disabled="false"
                  class="textareaWidth"
                  type="textarea"
                  :rows="5"
                  v-model="add.fauSolve"
                  clearable
                  placeholder="请输入内容"></el-input>
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
        <span class="spanClass">设备型号：</span>
        <el-input :disabled="true"
                  v-model="change.devId"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />

        <span class="spanClass">故障类型：</span>
        <el-input :disabled="true"
                  v-model="change.fauMode"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />
        <!-- 				
				<span class="spanClass">故障名称：</span>
				<el-input :disabled="false" v-model="change.fauName" clearable placeholder="请输入内容"></el-input><br /><br /> -->

        <span class="spanClass">解决方法：</span>
        <el-input :disabled="false"
                  class="textareaWidth"
                  type="textarea"
                  :rows="5"
                  v-model="change.fauSolve"
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
    <!-- <div class="footer">
			<el-pagination background @current-change="handleCurrentChange"  @size-change="handleSizeChange" :current-page.sync="paging.page" :page-sizes="[10, 11, 12]" :page-size="paging.pageSize" layout="sizes, prev, pager, next, jumper,total" :total="paging.total"></el-pagination>
		</div> -->
    <div class="footer">
      <el-pagination background
                     @current-change="handleCurrentChange"
                     @size-change="handleSizeChange"
                     :current-page.sync="paging.page"
                     :page-sizes="[10,11,12]"
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
      chose: sessionStorage.getItem('dealer'),
      deOrderList: [],
      forIVale: '',
      obj: [],
      numw: [],
      numvalue: [],
      universal: {
        add: false,
        change: false
      },
      paging: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      tableData: [],
      search: {
        devId: '',
        end: '',
        devParaSn: '',
        end: ''
      },
      add: {
        fauMode: '',
        fauName: '',
        fauSolve: '',
        fauCode: '',
        devId: ''
      },
      change: {
        fauId: '',
        fauMode: '',
        fauName: '',
        fauSolve: '',
        fauCode: '',
        devId: ''
      },
      typeValue: false,
      options: [
        {
          id: 0,
          type: '未选择'
        },
        {
          id: 1,
          type: '设备倾倒'
        },
        {
          id: 2,
          type: '应急开关破坏'
        },
        {
          id: 3,
          type: '设备受到撞击'
        },
        {
          id: 4,
          type: '非法开启'
        },
        {
          id: 5,
          type: '电机控制异常'
        },
        {
          id: 6,
          type: '设备漏水'
        },
        {
          id: 7,
          type: '温度异常'
        },
        {
          id: 8,
          type: '刷卡异常'
        },
        {
          id: 9,
          type: '压力异常'
        },
      ]
    }
  },
  mounted: function () {
    let type = sessionStorage.getItem('type');
    // console.log(type)
    let userId = sessionStorage.getItem('userId');
    if (type == '1' || type == '5') {
      this.typeValue = true
    } else {
      this.typeValue = false;
    }
    document.title = this.$route.meta.title;
    // console.log(this.$route.query.mouse)
    if (this.$route.query.mouse) {
      this.search.devId = this.$route.query.mouse
    }
    this.searchClick();
    // this.downList();
    // this.common.login()
  },
  methods: {
    mapreplace (i) {
      // console.log(i)
      this.$router.push({        path: '/pageHome/Edistribution', query: {
          mouse: i.inIds
        }      });
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
    addClick () {
      // console.log(this.add)
      let data = this.add;
      let that = this;
      // console.log(data)
      axios({
        method: 'post',
        url: this.$store.state.http + '/fault/add',
        data: Qs.stringify(data)
      }).then(function (message) {
        // console.log(message.data)
        if (message.data.resCode == 0) {
          that.searchClick();
        } else {
          that.$message({
            message: '添加失败',
            type: 'error'
          });
        }
      })
      that.universal.add = false;
    },
    deleteClick (row) {
      // console.log(row)
      let that = this;
      this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios({
          method: 'post',
          url: this.$store.state.http + '/equipment/delById',
          data: Qs.stringify({
            fauId: row.fauId
          })
        }).then(function (message) {
          // console.log(message.data)
          if (message.data.resCode == 0) {
            that.searchClick();
            that.$message({
              message: '删除成功',
              type: 'success'
            });
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
      // console.log(row)
    },
    changeClick () {
      let data = this.change;
      delete data.date;
      /*console.log(data)*/
      let that = this;
      axios({
        method: 'post',
        url: this.$store.state.http + '/fault/update',
        data: Qs.stringify(data)
      }).then(function (message) {
        // console.log(message.data)
        if (message.data.resCode == 0) {
          that.$message({
            message: '修改成功',
            type: 'success'
          });
          that.searchClick();
        } else {
          that.$message({
            message: '修改失败',
            type: 'error'
          });
        }
      })
      that.universal.change = false;
    },
    timestamp (date) {
      // console.log(date)
      let time = parseInt(date);
      var date = new Date(time);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = (date.getDate() > 9 ? date.getDate() : '0' + date.getDate()) + ' ';
      var h = (date.getHours() > 9 ? date.getHours() : '0' + date.getHours()) + ':';
      var m = (date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()) + ':';
      var s = (date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds());
      return Y + M + D + h + m + s;
    },
    searchClick () {

      let that = this;
      let data = {
        page: that.paging.page,
        pageSize: that.paging.pageSize,
      };
      if(that.search.devParaSn){
        data.devParaSn=that.search.devParaSn
      }
      if (that.search.end) {

        axios({
          method: 'post',
          url: that.$store.state.http + "/devices/conditionFind",
          data: Qs.stringify({
            pageNum: 1,
            pageSize: 1000,
            status: 0,
            userId: sessionStorage.getItem('userId'),
            dealer: sessionStorage.getItem('dealer'),
            end: that.search.end
          })
        }).then(res => {
          if(res.data.resCode==0&&res.data.result.length!=0){
          data.devId = res.data.result[0].deviceId;

          data.userId = sessionStorage.getItem('userId')
          data.dealer = sessionStorage.getItem('dealer')
          that.tableData = [];
          axios({
            method: 'post',
            url: that.$store.state.http + '/equipment/list',
            data: Qs.stringify(data)
          }).then(function (message) {
            // console.log(message.data)
            if (message.data.resCode == 0) {

              that.deOrderList = Object.values(message.data.results);

              // console.log(that.deOrderList)
              for (var i = 0; i < that.deOrderList.length; i++) {
                that.deOrderList[i].datatime = that.common.timeToDate(JSON.stringify(that.deOrderList[i].datatime.time).slice(0, 10))
                that.deOrderList[i].date = that.common.timeToDate(JSON.stringify(that.deOrderList[i].date.time).slice(0, 10))
                // for (var j = 0; j < res.data.result.length; j++) {
                //   if (that.deOrderList[i].devId == res.data.result[j].deviceId) {
                //     that.deOrderList[i].devParaSn = res.data.result[j].devParaSn
                //   }

                // }
                // console.log(that.deOrderList[i].devId)
                // console.log(i);
                let forIVale = i;
                let data = {
                  pageNum: 1,
                  pageSize: 10,
                  status: 0,
                  devId: that.deOrderList[i].devId,
                  userId: sessionStorage.getItem('userId'),
                  dealer: sessionStorage.getItem('dealer'),
                  end: that.search.end
                }
                axios({
                  method: 'post',
                  url: that.$store.state.http + '/devices/conditionFind',
                  data: Qs.stringify(data)
                }).then(function (message) {
                  // console.log(that.forIVale)
                  // console.log(forIVale)
                  // console.log(that.deOrderList[forIVale]);
                  Vue.set(that.deOrderList[forIVale], 'inId', message.data.result[0].end);
                  Vue.set(that.deOrderList[forIVale], 'inIds', message.data.result[0].devParaSn);
                })
                let prame = {
                  id: that.deOrderList[i].devId
                }
                axios({
                  method: 'post',
                  url: that.$store.state.http + '/Amend/findOne',
                  data: Qs.stringify(prame)
                }).then(function (message) {
                  // console.log(message)
                  // console.log(that.deOrderList[forIVale]);
                  Vue.set(that.deOrderList[forIVale], 'address', message.data.amend.address);
                })
                if (that.deOrderList[i].fault_destruction == '1') {
                  that.deOrderList[i].fault_destruction = '应急开关破坏'
                } else {
                  that.deOrderList[i].fault_destruction = ''
                }
                if (that.deOrderList[i].fault_hit == '1') {
                  that.deOrderList[i].fault_hit = '设备受到撞击'
                } else {
                  that.deOrderList[i].fault_hit = ''
                }
                if (that.deOrderList[i].fault_opening == '1') {
                  that.deOrderList[i].fault_opening = '非法开启'
                } else {
                  that.deOrderList[i].fault_opening = ''
                }
                if (that.deOrderList[i].fault_abnormal == '1') {
                  that.deOrderList[i].fault_abnormal = '电机控制异常'
                } else {
                  that.deOrderList[i].fault_abnormal = ''
                }
                if (that.deOrderList[i].fault_leakage == '1') {
                  that.deOrderList[i].fault_leakage = '设备漏水'
                } else {
                  that.deOrderList[i].fault_leakage = ''
                }
                if (that.deOrderList[i].fault_temperature == '1') {
                  that.deOrderList[i].fault_temperature = '温度异常'
                } else {
                  that.deOrderList[i].fault_temperature = ''
                }
                if (that.deOrderList[i].fault_pay == '1') {
                  that.deOrderList[i].fault_pay = '刷卡异常'
                } else {
                  that.deOrderList[i].fault_pay = ''
                }
                if (that.deOrderList[i].fault_pressure == '1') {
                  that.deOrderList[i].fault_pressure = '压力异常'
                } else {
                  that.deOrderList[i].fault_pressure = ''
                }
                if (that.deOrderList[i].fauCode == '1') {
                  that.deOrderList[i].fauCode = '设备倾倒'
                } else {
                  that.deOrderList[i].fauCode = ''
                }
                that.deOrderList[i].fauMode = that.deOrderList[i].fault_destruction + ' ' + that.deOrderList[i].fault_hit + ' ' + that.deOrderList[i].fault_opening + ' ' + that.deOrderList[i].fault_abnormal + ' ' + that.deOrderList[i].fault_leakage + ' ' + that.deOrderList[i].fault_temperature + ' ' + that.deOrderList[i].fault_pay + ' ' + that.deOrderList[i].fault_pressure + ' ' + that.deOrderList[i].fauCode


              }
              that.paging.total = message.data.count;
              that.tableData = that.deOrderList;
              // console.log(that.tableData);

            } else {
              that.tableData = [];
            }
          })
        }else{
          that.tableData = [];
        }
        })
      } else {


        data.userId = sessionStorage.getItem('userId')
        data.dealer = sessionStorage.getItem('dealer')
        that.tableData = [];
        axios({
          method: 'post',
          url: that.$store.state.http + '/equipment/lists',
          data: Qs.stringify(data)
        }).then(function (message) {
          console.log(message)
          that.paging.total = message.data.count;
          if (message.data.resCode == 0) {
            that.tableData = message.data.results;
            console.log(that.tableData);
            // console.log(that.deOrderList)
            for (var i = 0; i < that.tableData.length; i++) {
              if (that.tableData[i].fault_destruction == '1') {
                that.tableData[i].fault_destruction = '应急开关破坏'
              } else {
                that.tableData[i].fault_destruction = ''
              }
              if (that.tableData[i].fault_hit == '1') {
                that.tableData[i].fault_hit = '设备受到撞击'
              } else {
                that.tableData[i].fault_hit = ''
              }
              if (that.tableData[i].fault_opening == '1') {
                that.tableData[i].fault_opening = '非法开启'
              } else {
                that.tableData[i].fault_opening = ''
              }
              if (that.tableData[i].fault_abnormal == '1') {
                that.tableData[i].fault_abnormal = '电机控制异常'
              } else {
                that.tableData[i].fault_abnormal = ''
              }
              if (that.tableData[i].fault_leakage == '1') {
                that.tableData[i].fault_leakage = '设备漏水'
              } else {
                that.tableData[i].fault_leakage = ''
              }
              if (that.tableData[i].fault_temperature == '1') {
                that.tableData[i].fault_temperature = '温度异常'
              } else {
                that.tableData[i].fault_temperature = ''
              }
              if (that.tableData[i].fault_pay == '1') {
                that.tableData[i].fault_pay = '刷卡异常'
              } else {
                that.tableData[i].fault_pay = ''
              }
              if (that.tableData[i].fault_pressure == '1') {
                that.tableData[i].fault_pressure = '压力异常'
              } else {
                that.tableData[i].fault_pressure = ''
              }
              if (that.tableData[i].fauCode == '1') {
                that.tableData[i].fauCode = '设备倾倒'
              } else {
                that.tableData[i].fauCode = ''
              }
              that.tableData[i].fauMode = that.tableData[i].fault_destruction + ' ' + that.tableData[i].fault_hit + ' ' + that.tableData[i].fault_opening + ' ' + that.tableData[i].fault_abnormal + ' ' + that.tableData[i].fault_leakage + ' ' + that.tableData[i].fault_temperature + ' ' + that.tableData[i].fault_pay + ' ' + that.tableData[i].fault_pressure + ' ' + that.tableData[i].fauCode


            }
            // console.log(that.tableData);

          } else {
            that.tableData = [];
          }
        })
      }
      // })

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
</style>