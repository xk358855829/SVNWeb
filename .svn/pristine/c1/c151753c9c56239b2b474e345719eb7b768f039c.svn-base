<template>
  <div id="faultList">
    <div class="header">
      <div class="headerTitle">
        <span>出入纪录</span>
      </div>
    </div>
    <div class="select">
      <span>车牌号码：</span>
      <el-input v-model="search.car_number"
                clearable
                placeholder="请输入内容"></el-input>
      <span>停车场名称：</span>
      <!-- <el-input v-model="search.parking_name" clearable placeholder="请输入内容"></el-input> -->
      <el-select v-model="search.parking_name"
                 filterable
                 placeholder="请选择">
        <el-option>未选择</el-option>
        <el-option v-for="item in parkIist"
                   :key="item.parking_id"
                   :label="item.type"
                   :value="item.parking_name"></el-option>
      </el-select>
      <span>进场状态：</span>
      <el-select v-model="search.status"
                 placeholder="请选择">
        <el-option>未选择</el-option>
        <el-option v-for="item in online"
                   :key="item.id"
                   :label="item.type"
                   :value="item.type"></el-option>
      </el-select>

    </div>
    <div class="select">
      <!-- <el-button type="success" class="oyButton" icon="el-icon-download" @click='derive'>导出</el-button> -->
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-search"
                 @click='searchClick'>查询</el-button>
      <!-- <el-button type="success" class="oyButton" icon="el-icon-download" @click='export2Excel'>导出</el-button> -->
    </div>
    <div class="Content"
         style="min-height: calc(100vh - 40px);padding-top:0!important;">
      <div v-if="available==1"
           class="availablerecord">
        <img src="../../../static/image/timg.jpg"
             alt="">
      </div>
      <ul>
        <li v-for="(item,index) in tableData">
          <!-- <div></div> -->
          <el-tooltip class="item"
                      effect="dark"
                      placement="right-start">
            <div slot="content">
              入场时间：{{item.in_time|numnew}}<br/><br/> 入场道闸：{{item.inroadGateId|numnew}}
              <br/><br/> 出场时间：{{item.out_time|numnew}}
              <br/><br/> 出场道闸：{{item.outroadGateId|numnew}}
              <br/><br/> 车牌颜色：{{item.plateColor|numnew}}
              <br/><br/> 停车时长：{{item.longTime|numnew}}
              <br/><br/>
            </div>
            <div class="imgbox">
              <div class="enterdiv">
                <img @mouseenter="imgenter(item,index)"
                     style="height:100%"
                     @mouseleave="imgleave(index)"
                     :src="item.in_img?item.in_img:required('../../../static/image/qlos.jpg')"
                     alt=""
                     class="imgblock"
                     @click.stop="deleteClick(item)">
                <!-- <div v-if="index == ishow"
                     class="imgzhezhao">
                  <img src="../../../static/image/lajitong.png"
                       alt=""
                       class="dustbin">
                </div> -->
                <div v-if="index == ishows"
                     class="outimg">
                  <img :src="in_imgreps"
                       v-if="konrecord==1"
                       alt=""
                       class="dustbinltes">
                  <img src="../../../static/image/timga.jpg"
                       alt=""
                       v-if="konrecord==2"
                       class="dustbinltes">
                </div>
              </div>
              <!-- <p class="imgposts">
								<img @click="youji(item,index)" v-if="item.status=='0'" :class="{active:index==numz&&numzc==1}" src="../../../static/zuojian.png" alt="" style="height:100%;border-radius:50%">
							</p>
							<p class="imgpost">
								<img @click="dianji(item,index)" v-if="item.status=='0'" :class="{active:index==numz&&numzc==2}" src="../../../static/image/arrow.png" alt="" style="height:100%;border-radius:50%">
							</p> -->
            </div>
          </el-tooltip>
          <div class="enterbox">
            <p class="parking">
              停车场名称：{{item.parking_name}}
            </p>
            <p class="parking">
              车牌号码：{{item.car_number}}
            </p>
            <!-- <p class="parking">
							入场道闸：{{item.inroadGateId |numnew}}<br />
							出场道闸：{{item.outroadGateId |numnew}}
						</p> -->
          </div>
          <!-- <div class="numpbox">
						<div>
							<p>车牌号码</p>
							<p>{{item.car_number}}</p>
						</div>
						<div class="nump">
							<p>车牌颜色</p>
							<p>{{item.plateColor | numnew}}</p>
						</div>
						<div>
							<p>停车时长</p>
							<p>{{item.onlineTime}}</p>
						</div>
					</div> -->
          <!-- <div class="model"></div> -->
        </li>
      </ul>
    </div>
    <el-dialog title="导出停车场出场纪录"
               :visible.sync="universal.add">
      <div>
        <span class="spanClass">停车场ID：</span>
        <el-input :disabled="false"
                  v-model="add.parking_id"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br/>
      </div>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="NO">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="export2Excel">确认</el-button>
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
    <div class="footer">
      <el-pagination background
                     @current-change="handleCurrentChange"
                     @size-change="handleSizeChange"
                     :current-page.sync="paging.page"
                     :page-sizes="[1,2,3,8,11,12]"
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
import { searchClicks, getParkingLotListApi } from '../api/api.js'
export default {
  name: 'equipmentList',
  data () {
    return {
      ishow: null,
      ishows: null,
      available: '',
      outroadGateId: '',
      out_time: '',
      imgshow: '',
      obj: [],
      numw: [],
      parkIist: [],
      numvalue: [],
      universal: {
        add: false,
        change: false
      },
      numz: '',
      numzc: '',
      paging: {
        page: 1,
        pageSize: 8,
        total: 0
      },
      out: '',
      dus: require('../../../static/image/timga.jpg'),
      tableData: [],
      search: {
        parking_name: '',
        car_number: '',
        status: '',
        in_time: '',
        out_time: ''
      },
      konrecord: 1,
      add: {
        parking_id: ''
      },
      online: [
        {
          value: 1,
          type: '已出场'
        },
        {
          value: -1,
          type: '未出场'
        }
      ],
      listorder: [],
      change: {
        fauId: '',
        fauMode: '',
        fauName: '',
        fauSolve: '',
        fauCode: '',
        devId: ''
      },
      in_imgreps: ''
    }
  },
  mounted: function () {

    this.searchClick();
    console.log(this.tableData.length)

    // this.downList();
    // this.common.login()
    let data = {
      page: 1,
      pageSize: 10,
      userId: localStorage.getItem('userId'),
      dealer: localStorage.getItem('dealer')
    }
    this.Alipay(data)
    this.gatepeople(data)
    this.getParkingLotListApiList();
  },
  computed: {
    ...mapState(['apliyparkName']),
    ...mapState({
      gatelistarr: state => state.gate.gatelistarr
    }),
    ...mapGetters({
      parkingLotInfo: "getParkingLotInfo",
      parkingLotDevList: "getParkingLotDevList"
    }),
  },
  methods: {
    ...mapActions(['Alipay', 'gatepeople']),
    imgenter (item, val) {
      // console.log(val)
      // console.log(item)
      // let b = document.getElementsByClassName('imgblock')
      // b[val].style.opacity = "0"
      this.ishow = val
    },
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
    imgleave (val) {
      let b = document.getElementsByClassName('imgblock')
      b[val].style.opacity = "1"
      this.ishow = null
    },
    youji (item, index) {
      this.searchClick()
      // console.log(index)
      this.numz = index
      this.numzc = 1
      let b = document.getElementsByClassName('imgblock')
      b[index].style.opacity = "1"
      // this.konrecord=1
      // let data={
      // 	page:this.paging.page,
      // 	pageSize:this.paging.pageSize,
      // 	in_img:'suriot',
      // 	userId:localStorage.getItem('userId'),
      // 	dealer:localStorage.getItem('dealer')
      // }
      // let that=this;
      // searchClicks('/ISVEnterOut/selectAll',data).then(res=>{
      // 	console.log(res)
      // 	let as=res.data.result.find((x,y)=>{
      // 		if(x.id==item.id){
      // 			return x
      // 		}
      // 	})
      // 	console.log(as)
      // 	if(as.in_img==''){
      // 		that.konrecord=2
      // 	}else{
      // 		that.in_imgreps=as.in_img
      // 		that.konrecord=1
      // 	}
      // })
    },
    dianji (item, index) {
      console.log(item.id)
      console.log(index)
      this.numz = index
      this.numzc = 2
      let b = document.getElementsByClassName('imgblock')
      b[index].style.opacity = "0"
      // this.ishows = index
      let data = {
        page: this.paging.page,
        pageSize: this.paging.pageSize,
        out_img: 'suriot',
        id: item.id,
        userId: localStorage.getItem('userId'),
        dealer: localStorage.getItem('dealer')
      }
      searchClicks('/ISVEnterOut/selectAll', data).then(res => {
        console.log(res)
        if (res.data.resCode == 0) {
          if (res.data.result.length == 0) {
            this.konrecord = 2
            this.tableData[index].in_img = this.dus
          } else {
            this.tableData[index].in_img = res.data.result[0].in_img
          }
        }
        // if(as.in_img==''){
        // 	that.konrecord=2
        // }else{
        // 	that.in_imgreps=as.in_img
        // 	that.outroadGateId=as.outroadGateId
        // 	that.out_time=as.out_time
        // 	that.konrecord=1
        // }
      })
      this.searchClick()
    },
    NO () {
      this.universal.add = false
    },
    derive () {
      this.universal.add = true
      this.add.parking_id = ''
    },
    export2Excel () {
      let dataA = {
        parking_id: '',
      }
      let that = this;
      console.log(dataA)
      axios({
        method: 'get',
        url: that.$store.state.url + '/useExcel/exportEnterOutInfo?parking_id=' + that.add.parking_id
        // data:Qs.stringify(dataA)
      }).then(function (message) {
        console.log(message.data)
        if (message.data.resCode == "0") {
          for (var i = 0; i < message.data.result.length; i++) {
            if (message.data.result[i].status == 0) {
              message.data.result[i].status = '已出场'
            } else {
              message.data.result[i].status = '未出场'
            }
          }
          that.listorder = message.data.result
          console.log(that.listorder)
          require.ensure([], () => {
            const { export_json_to_excel } = require('../../excel/Export2Excel');
            const tHeader = ['车牌号码', '停车场ID', '进场道闸设备', '进场状态', '出场时间', '入场时间'];
            const filterVal = ['car_number', 'parking_id', 'inroadGateId', 'status', 'out_time', 'in_time'];
            const list = that.listorder;
            const data = that.formatJson(filterVal, list);
            export_json_to_excel(tHeader, data, '出场记录列表');
          })
        }
      })
      that.universal.add = false

    },

    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    },
    hideclick () {
      this.universal.change = false
    },
    indexMethod (index) {
      return index + (this.paging.page - 1) * this.paging.pageSize + 1;
    },
    handleSizeChange (val) {
      this.paging.page = 1;
      this.paging.pageSize = val;
      this.searchClick();
    },
    handleCurrentChange (val) {
      this.searchClick();
    },
    addClick () {
      console.log(this.add)
      let data = this.add;
      let that = this;
      console.log(data)
      axios({
        method: 'post',
        url: this.$store.state.http + '/fault/add',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message.data)
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
    deleteClick (val) {
      console.log(val)
      let that = this;
      this.$confirm('此操作将永久删除进出场记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let data = { id: val.id }
        searchClicks('/ISVEnterOut/delEnterOutRecords', data).then(res => {
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
    changeShow (row) {
      this.universal.change = true;
      this.change = Object.assign({}, row);
      console.log(row)
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
        console.log(message.data)
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
    secondToDate (result) {
      console.log(result)

      var h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);
      var m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60));
      var s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60));
      return result = h + "小时" + m + "分钟" + s + '秒';
    },
    searchClick () {
      this.available = ''
      let data = {
        page: this.paging.page,
        pageSize: this.paging.pageSize,
        in_img: 'suriot',
        userId: localStorage.getItem('userId'),
        dealer: localStorage.getItem('dealer')
      };
      if (this.search.car_number) {
        data.car_number = this.search.car_number
      }

      if (this.search.in_time) {
        data.in_time = this.search.in_time
      }
      if (this.search.parking_name) {
        data.parking_name = this.search.parking_name
      }
      if (this.search.out_time) {
        data.out_time = this.search.out_time
      }
      if (this.search.status == '未出场') {
        data.status = 1
      } else if (this.search.status == '已出场') {
        data.status = 0
      }
      console.log(data)
      let that = this;
      that.tableData = [];
      searchClicks('/ISVEnterOut/selectAll', data).then(res => {
        // searchClicks('/selectImg/findAll',data).then(res=>{
        console.log(res)

        if (res.data.resCode == "0") {
          for (let i = 0; i < res.data.result.length; i++) {
            if (res.data.result[i].longTime == '') {
              var d1 = new Date();
              var d2 = new Date(Date.parse(res.data.result[i].in_time.replace(/-/g, '/')));
              console.log(d1)
              console.log(d2)
              res.data.result[i].longTime = that.secondToDate((d1 - d2) / 60000)
            } else {
              res.data.result[i].longTime = res.data.result[i].longTime
            }
          }
          that.paging.total = res.data.count;
          that.tableData = res.data.result;
          if (that.tableData.length == 0) {
            that.available = 1
            that.$message({
              message: '查询成功,暂无数据',
              type: 'success'
            });
          }

        } else {
          that.tableData = []
          that.available = 1
          that.$message({
            message: '查询失败',
            type: 'error'
          });
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
.spanClass {
  width: 106px !important;
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

.Content ul {
  width: 100%;
}
.Content li {
  width: 20.8%;
  float: left;
  margin: 1% 2%;
  font-size: 15px;
  text-align: center;
  background: #f2f5f9;
}

.Content .imgbox {
  width: 90%;
  margin: 5px auto;
  position: relative;
}
.imgpost,
.imgposts {
  width: 22px;
  height: 22px;
  border-radius: 11px;
  position: absolute;
  top: 40%;
  right: 0;
  cursor: pointer;
  z-index: 455;
}
.imgposts {
  left: 0;
  z-index: 555;
}
.Content .imgbox img {
  width: 100%;
  /* height: 100%; */
}
.Content .enterbox {
  padding: 4% 0;
}
.Content p {
  font-size: 14px;
  color: #606266;
  text-align: left;
}
.numpbox {
  display: flex;
  justify-content: space-around;
}
.numpbox .nump {
  width: 33.3%;
  border-left: 1px solid #c9aeae;
  border-right: 1px solid #c9aeae;
}
.parking {
  text-align: center !important;
  margin-bottom: 4%;
}
.enterbox .enterboxchild {
  height: 30px !important;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.enterbox .square {
  width: 10px !important;
  height: 10px !important;
  background: green;
}
.squarered {
  width: 10px !important;
  height: 10px !important;
  background: red;
}
.model {
  height: 2%;
  width: 100%;
  background: #eaecf1;
  margin-top: 10%;
}
.availablerecord {
  text-align: center;
  font-size: 14px;
  color: #909399;
  margin-top: 20px;
}
.availablerecord img {
  width: 100%;
  height: 100%;
}
.dustbin {
  width: 10% !important;
  /* height: 10%; */
  position: absolute;
  top: 10%;
  left: 10%;
  /* border: 1px solid red; */
}
.dustbinltes {
  width: 100%;
  height: 100%;
}
.enterdiv {
  position: relative;
  height: 180px;
  width: 100%;
}
.imgzhezhao {
  width: 100%;
  height: 180px;
  /* background: rgba(136, 130, 130, 0.5); */
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}
.outimg {
  width: 100%;
  height: 100%;
  z-index: 88;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}
.nump p {
  text-align: center;
}
.active {
  background: black;
}
.actives {
  background: red;
}
</style>