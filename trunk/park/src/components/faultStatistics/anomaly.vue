<template>
  <div id="faultList">
    <div class="header">
      <div class="headerTitle">
        <span>异常放行</span>
      </div>
    </div>
    <div class="select">
      <span>车牌号码：</span>
      <el-input v-model="search.carNumber"
                clearable
                placeholder="请输入内容"></el-input>
      <span>停车场名称：</span>
      <el-select v-model="search.parkIist"
                 filterable
                 placeholder="请选择">
        <el-option>未选择</el-option>
        <el-option v-for="item in parkIist"
                   :key="item.parking_id"
                   :label="item.type"
                   :value="item.parking_name"></el-option>
      </el-select>
      <!-- <el-input v-model="search.parkingName" clearable placeholder="请输入内容"></el-input> -->
      <span>出场道闸：</span>
      <el-input v-model="search.outDeviceId"
                clearable
                placeholder="请输入内容"></el-input>
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
                         width="50"> </el-table-column>

        <el-table-column label="车牌号码"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.carNumber | numnew}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.carNumber |numnew}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="停车场名称"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.parkingName | numnew}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.parkingName | numnew}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="道闸名称"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.deviceName | numnew}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.deviceName | numnew}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="道闸编号"
                         width="">
          <template slot-scope="scope">

            <div slot="reference"
                 class="name-wrapper">
              <div class="overflowHide">{{ scope.row.outDeviceId | numnew}}</div>
            </div>

          </template>
        </el-table-column>

        <el-table-column label="出场时间"
                         width="">
          <template slot-scope="scope">

            <div slot="reference"
                 class="name-wrapper">
              <div class="overflowHide">{{ scope.row.outTime }}</div>
            </div>

          </template>
        </el-table-column>

        <el-table-column label="出场图片"
                         width="">
          <template slot-scope="scope">

            <!-- <p  class="TsMaxWidth">{{ scope.row.imgUrl}}</p> -->
            <div slot="reference"
                 class="name-wrapper">
              <!-- <div class="overflowHide">{{ scope.row.imgUrl }}</div> -->
              <div class="overflowHide imgout">
                <img :src='scope.row.imgUrl'
                     alt="">
              </div>
            </div>

          </template>
        </el-table-column>

        <el-table-column prop=""
                         label="操作"
                         width='150'>
          <template slot-scope="scope">

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
import Qs from 'qs'
import axios from 'axios'
import { mapState, mapActions, mapGetters } from 'vuex'
import { getParkingLotListApi } from '../api/api.js';
export default {
  name: 'equipmentList',
  data () {
    return {
      obj: [],
      numw: [],
      numvalue: [],
      parkIist: [],
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
        carNumber: '',
        parkingName: '',
        outDeviceId: ''
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

    }
  },
  computed: {
    ...mapState(['apliyparkName']),
    ...mapGetters({
      parkingLotInfo: "getParkingLotInfo",
      parkingLotDevList: "getParkingLotDevList"
    }),
  },
  mounted: function () {
    document.title = this.$route.meta.title;
    this.searchClick();
    let data = {
      page: 1,
      pageSize: 10,
      userId: localStorage.getItem('userId'),
      dealer: localStorage.getItem('dealer')
    }
    this.Alipay(data)
    // this.downList();
    // this.common.login()
    this.getParkingLotListApiList();
  },
  methods: {
    ...mapActions(['Alipay']),
    hideclick () {
      this.universal.change = false
    },
    getParkingLotListApiList () {
      let params = {
        page: 1,
        pageSize: 0,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer")
      };
      getParkingLotListApi(params).then(message => {
        console.log(message);
        this.parkIist = message.data.result;
      });
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
          url: that.$store.state.url + '/ExceptionCarNumberInfo/del',
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


    searchClick () {

      let data = {
        page: this.paging.page,
        pageSize: this.paging.pageSize,
        userId: localStorage.getItem('userId'),
        dealer: localStorage.getItem('dealer')
      };
      if (this.search.carNumber) {
        data.carNumber = this.search.carNumber
      }
      if (this.search.parkingName) {
        data.parkingName = this.search.parkingName
      }
      if (this.search.outDeviceId) {
        data.outDeviceId = this.search.outDeviceId
      }
      console.log(data)
      let that = this;
      that.tableData = [];
      axios({
        method: 'post',
        url: this.$store.state.url + '/ExceptionCarNumberInfo/selectAll',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message.data)
        if (message.data.resCode == 0) {

          that.paging.total = message.data.count;
          that.tableData = message.data.result;

        } else {
          that.tableData = [];
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
.select .boxselect {
  float: right;
}
.select .boxselect img {
  vertical-align: middle;
  margin-right: 5px;
}
.imgout {
  width: 80px;
  height: 80px;
  margin-left: 30%;
}
.imgout img {
  width: 100%;
  height: 100%;
}
</style>