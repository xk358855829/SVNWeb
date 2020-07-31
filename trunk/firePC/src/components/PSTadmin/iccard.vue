<template>
  <div id="PSTlist">
    <div class="header">
      <div class="headerTitle">
        <span>发卡</span>
      </div>
    </div>
    <div class="select">

      <span>设备SN码：</span>
      <el-input v-model="search.device_type"
                clearable
                placeholder="请输入内容"></el-input>
      <span>设备卡号：</span>
      <el-input v-model="search.area"
                clearable
                placeholder="请输入内容"></el-input>
     <!--  <span>账户名称：</span>
      <el-select v-model="search.customername"
                 placeholder="请选择">
        <el-option value=''>未选择</el-option>
        <el-option v-for="item in reception"
                   :key="item.dealer"
                   :value="item.dealer"
                   :label="item.userName"></el-option>
      </el-select> -->
    </div>

    <div class="select">
      <!--<el-button class="oyButton" type="success" icon="el-icon-plus"  @click="add = true">新增</el-button>-->
      <!-- <el-button class="oyButton" type="success" icon="el-icon-plus"  @click="conGroup = true">分组</el-button> -->
      <el-button class="oyButton"
                 type="success"
                 icon="el-icon-search"
                 @click='searchClick'>查询</el-button>
      <!-- <el-button type="success" class="oyButton" icon="el-icon-plus" @click='universal.add = true'>添加</el-button> -->
      <!-- <el-button class="oyButton" type="success" @click='searchstatus'>查询状态</el-button> -->
      <!-- <el-button class="oyButton" type="success" @click='reg'>注册设备</el-button> -->
      <!--<el-button class="oyButton" type="success" icon="el-icon-download" @click=''>导出</el-button>-->
    </div>
    <el-dialog title="新增"
               :visible.sync="universal.add">
      <div>
        <!-- <span class="spanClass">设备ID：</span>
				<el-input v-model="add1.Id" clearable placeholder="请输入内容"></el-input><br /><br /> -->

        <!-- <span class="spanClass">账户名：</span> -->
        <span class="spanClassT">
          <span class="aKey">*</span>设备卡号：</span>
        <el-input v-model="add1.cardId"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />

        <!-- <span class="spanClass">手机号码：</span> -->

        <!-- <span class="spanClass">用户密码：</span> -->

        <span class="spanClassT">设备编号：</span>
        <!-- <el-input v-model="add1.weChatUsePhone" clearable placeholder="请输入内容"></el-input><br /><br /> -->
        <el-select v-model="add1.deviceType"
                   placeholder="请选择">
          <el-option v-for="item in levelList"
                     :key="item.value"
                     :value="item.label"></el-option>
        </el-select><br /><br />

        <span class="spanClassT">
          <span class="aKey">*</span>开始时间：</span>
        <!-- <el-input v-model="add1.createTime" clearable placeholder="请输入内容"></el-input><br /><br /> -->
        <el-date-picker v-model="add1.startTime"
                        type="date"
                        placeholder="选择日期">
        </el-date-picker><br /><br />

        <span class="spanClassT">
          <span class="aKey">*</span>结束时间：</span>
        <!-- <el-input v-model="add1.createTime" clearable placeholder="请输入内容"></el-input><br /><br /> -->
        <el-date-picker v-model="add1.endTime"
                        type="date"
                        placeholder="选择日期">
        </el-date-picker><br /><br />
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

    <div class="Content">
      <el-table class='oyTable'
                v-loading="listLoading"
                :data="tableData"
                style="width: 100%">
        <el-table-column type="index"
                         :index="indexMethod"
                         label="序号"
                         width="100"> </el-table-column>
        <el-table-column label="自定义编号">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{scope.row.inId}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.inId }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="设备卡号">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{scope.row.area }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.area }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="设备SN码">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.sn }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{scope.row.sn}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="发卡时间">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ timeToDate(scope.row.data) }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{timeToDate(scope.row.data)}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="客户名称"
                         width="100">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ (scope.row.customername) }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ (scope.row.customername) }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <!-- <el-table-column label="操作人员">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{(scope.row.dealer)}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{(scope.row.dealer)}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column> -->

        <el-table-column prop=""
                         label="操作"
                         width=""
                         v-if="typeValue">
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
                     :page-sizes="[10, 11, 12]"
                     :page-size="paging.pageSize"
                     layout="sizes, prev, pager, next, jumper,total"
                     :total="paging.total"></el-pagination>
    </div>
  </div>
</template>

<script>
import Qs from 'qs'
import { searchClicks } from '../api/api.js'
// import $ from 'jquery'
import axios from 'axios'
export default {
  provide () {
    return {
      reload: this.reload
    }
  },
  inject: ['reload'],
  name: 'equipmentList',
  data () {
    return {
      isRouterAlive: true,
      formInline: {
        id: null,
        scene: '',
        project_name: '',
        submit_date: [new Date(), new Date()],

      },
      listLoading: false,
      idtable: [],
      opencard: [],
      tableData5: [],
      multipleSelection: [],
      value1: "",
      levelList: [{
        value: '0',
        label: '管理卡'
      }, {
        value: '1',
        label: '用户卡'
      }],
      lastmes: '',
      level: '0',
      deviceType: '0',
      valres: '',
      add1: {
        deviceType: '',
        cardId: '',
        endTime: '',
        startTime: ''
      },
      type1: {
        deviceType: ""
      },
      li: [],
      added: "",
      send: {
        deviceId: '',
        title: '',
        timeOut: '',
        qos: ''
      },
      cardList: [],
      change: {
        card: '',
        title: "",
        desc: "",
        tags: "",
        lon: '',
        lat: '',
        authInfo: "",
        deviceId: ""

      },
      status: '',
      universal: {
        add: false,
        change: false,
        look: false,
        send: false,
        allot: false
      },
      ICData: [],
      tableData: [],
      reception: [],
      con: {
        id: '',
        protocol: '',
        create_time: '',
        auth_info: '',
        title: '',
        desc: '',
        tags: '',
        lon: '',
        lat: '',
        dataid: '',
        unit: '',
        unit_symbol: ''
      },
      li: [],
      add: false,
      topic: false,
      conGroup: false,
      change: false,
      send: false,
      see: false,
      changeGroups: false,
      changeGrouping: {
        changeGrouping: '',
        conId: ''
      },
      step: 0,
      seeStep: 1,
      paging: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      allot1: {
        deviceId: '',
        trafficCard: "",
        deviceType: "",
        deviceModel: "",
        deviceName: "",
        startTime: '',
        endTime: '',
        personnel: '',
        status: '',
        iccId: ''
        // weChatUseNames:''
      },
      search: {
        device_type: '',
        area: '',
        customername: ''
      },
      addTo: {
        group: {
          userId: sessionStorage.getItem('userId'),
          gropuName: '',
          groupPhone: '',
          name: '',
          groupNotes: ''
        }
      },
      typeValue: false,

      controNameL: [{ label: 'C1', value: 1 }, { label: 'C2', value: 2 }, { label: 'C3', value: 3 }, { label: 'B1', value: 4 }, { label: 'B2', value: 5 }, { label: 'A1', value: 6 }, { label: 'A2', value: 7 }, { label: 'A3', value: 8 }]
    }
  },
  created () {
    this.add1.deviceType = this.levelList[0].label;
  },
  mounted: function () {
    let type = sessionStorage.getItem('type');
    let userId = sessionStorage.getItem('userId');
    if (type == '1' || type == '5') {
      this.typeValue = true
    } else {
      this.typeValue = false;
    }
    this.typeCustem();
    this.searchClick();
    // this.$store.dispatch('group');
    document.title = this.$route.meta.title;
    if (sessionStorage.getItem("dealer") == '123') {
      this.added = 1
    }
  },
  methods: {

    handleSelectionChange (val) {
      this.multipleSelection = val;
    },
    timeToDate: function (data) {
      var d = new Date(data);//时间戳记得乘以1000再进行处理
      var year = d.getFullYear();
      var month = d.getMonth() + 1;
      var date = d.getDate();
      var hour = d.getHours();
      var minute = d.getMinutes();
      var second = d.getSeconds();
      return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
    },
    ICclick () {
      // this.$refs.multipleTable.clearSelection();            //操作完成清除勾选框
      var arr = this.multipleSelection;
      let multis = [];
      for (var i = 0; i < arr.length; i++) {
        multis.push(arr[i].deviceId);
        this.opencard = multis
        this.cardList = multis
      }
      this.universal.look = false;
    },
    IChideclick () {
      this.universal.look = false;
    },
    deleteid (row) {
      console.log(row.id)
      let that = this;
      this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(row)
        axios({
          method: 'post',
          url: this.$store.state.http + '/Iccid/delete',
          data: Qs.stringify({
            id: row.id,
          })
        }).then(function (message) {
          console.log(message)
          if (message.data.resCode == 0) {
            console.log(1111111111111111111)
            that.changeshow(row)
            that.$message({
              message: '删除成功',
              type: 'success'
            });

          } else {
            that.$alert(message.data.result, '系统确认框', {
              confirmButtonText: '确定'
            })
          }
        })
      }).catch(() => {
        that.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    open () {
      this.universal.look = true;
      let data = {
        pageNum: this.paging.page,
        pageSize: this.paging.pageSize
      };
      data.devId = this.search.deviceId;
      data.deviceModel = this.type1.deviceType;
      // data.deviceId=this.search.deviceId;
      data.userId = sessionStorage.getItem('userId'),
        data.dealer = sessionStorage.getItem("dealer")
      if (data.dealer == 0) {
        data.dealer = sessionStorage.getItem('orderDealers')
      }
      let that = this;
      console.log(data);
      that.ICData = [];
      that.timeCrea = [];
      that.truey = []
      axios({
        method: 'post',
        url: this.$store.state.http + '/devices/conditionFind',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message)
        if (message.data.resCode == 0) {
          console.log(message.data.result)
          for (var i = 0; i < message.data.result.length; i++) {
            if (message.data.result[i].startTime.time != null) {
              // console.log(message.data.result[i].createTime.time)
              console.log(1)
              message.data.result[i].startTime = timeToDate(JSON.stringify(message.data.result[i].startTime.time).slice(0, 10))
            } else {
              console.log(2)
              message.data.result[i].startTime = JSON.stringify(message.data.result[i].startTime).slice(1, 20)
            }
          }
          that.ICData = message.data.result;
          console.log(message.data.result.length)
          that.paging.total = message.data.result2;
          console.log(that.ICData)
          for (var i = 0; i < that.ICData.length; i++) {
            that.truey.push(that.ICData[i].status)
            if (that.ICData[i].devStatus == "0x11") {
              // that.trues=1;
              // console.log(that.trues);
              that.ICData[i].devStatus = '正常'
            } else {
              that.ICData[i].devStatus = '异常'
            }
          }
          console.log(that.truey)

        } else {
          that.ICData = [];
          that.paging.total = 0;
        }
      })
      function timeToDate (data) {
        var d = new Date(data * 1000);//时间戳记得乘以1000再进行处理
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var date = d.getDate();
        var hour = d.getHours();
        var minute = d.getMinutes();
        var second = d.getSeconds();
        return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
      }
    },
    hideclick () {
      this.universal.change = false;
    },
    indexMethod (index) {
      return index + (this.paging.page - 1) * this.paging.pageSize + 1;
    },
    handleSizeChange (val) {
      console.log(12)
      this.paging.pageSize = val;
      console.log(this.paging.pageSize)
      this.searchClick();
    },

    PrefixInteger (num, length) {
      return (num / Math.pow(10, length)).toFixed(length).substr(2);
    },
    handleCurrentChange (val) {
      console.log(val)
      this.searchClick();
    },
    deleteClick (row) {
      let that = this;
      this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(89)

        console.log(row)
        let Transaction = parseInt(row.area).toString(16)
        console.log(Transaction)
        let lckiel = ("0000000000000000" + Transaction).substr(-8)
        let data = {
          cmd: 23,
          cmdValue: '12' + lckiel,
          devId: row.device_type,
          remark:localStorage.getItem("userAlias"),
          type:'平台'
        }
        this.listLoading = true;
        axios({
          method: 'post',
          url: that.$store.state.http + "/send/sendCmd",
          data: Qs.stringify(data)
        })
          .then(function (message) {
            console.log(message);
            if (message.data.resCode == 0) {
              console.log(message)
              let timg = setTimeout(function () {
                let datask = {
                  devId: row.device_type
                }
                searchClicks('/Datapoints/getBatData', datask).then(message => {
                  if (message.data.resCode == 0) {
                    let messData = message.data.errMsg
                    messData=messData.data.devices[0].datastreams
                    for (let p = 0; p < messData.length; p++) {
                      if (messData[p].id == '2014') {
                        that.lastmes = messData[p].value
                      }
                    }
                    var lemt = that.PrefixInteger((that.lastmes).substr(2, that.lastmes.length), 10)
                    console.log(that.lastmes)

                    if (lemt == row.area) {
                      console.log(33)
                      axios({
                        method: 'post',
                        dataType: 'jsonp',
                        url: that.$store.state.http + '/IccIds/queryDelete',
                        data: Qs.stringify({
                          icc_id: row.iccId
                        })
                      }).then(function (message) {
                        if (message.data.code == 200) {
                          that.listLoading = false;
                          that.$message({
                            message: '删除成功',
                            type: 'success'
                          });
                        } else {
                          that.listLoading = false;
                          that.$message({
                            message: '删除失败',
                            type: 'error'
                          });
                        }

                      })


                    } else {
                      that.listLoading = false;
                      that.$message({
                        message: '删除失败',
                        type: 'error'
                      });
                    }
                    that.searchClick()
                  } else {
                    that.listLoading = false;
                    that.$message({
                      message: '删除失败',
                      type: 'error'
                    });
                  }

                })
              }, 5000)
            } else {
              that.listLoading = false;
              that.$message({
                message: '删除失败',
                type: 'error'
              });
            }
          })
      }).catch(() => {

        that.$message({
          type: 'info',
          message: '已取消删除'
        });
      });


    },

    // changeorder(send){
    // 	let data={
    // 		devId:this.send.deviceId,
    // 		qos:this.send.qos,
    // 		timeOut:this.send.timeOut,
    // 		key:'masterkey'
    // 	}
    // 	console.log(data)
    // 	axios({
    // 		method:"post",
    // 		url:'http://192.168.2.123:8080/SendCmds/SendBytesCmds',
    // 		data:Qs.stringify(data)
    // 	}).then(function(mess){
    // 		console.log(mess)
    // 		  axios({
    // 		 	method:"post",
    // 		 	url:'http://192.168.2.123:8080/SendCmds/QueryCmdsStatus',
    // 		 	data:Qs.stringify({
    // 		 		cmdsId:mess.data.cmd_uuid
    // 		 	})
    // 		 }).then(function(message){
    // 		 	console.log(JSON.parse((message.data.errMsg).slice(4)))
    // 		 })
    // 	})
    // 	this.universal.send = true;
    // },
    order (row) {
      this.universal.send = true;
      this.send = row;

    },

    // allotchange(row){
    // 	let that=this;
    // 	let data={
    // 		id:that.allot1.iccId,
    // 		ids:(that.opencard).toString()
    // 	}
    // 	console.log(data)
    // 	axios({
    // 		method:'post',
    // 		url:this.$store.state.http+'/Iccid/save',
    // 		data:Qs.stringify(data)
    // 	}).then(function(message){
    // 		console.log(message);
    // 		that.universal.allot=false;
    // 		that.allot1.weChatUseNames=""
    // 		if(message.data.resCode==0){
    // 			that.searchClick();
    // 			that.$message({
    // 	        	message: '绑定成功',
    // 	        	type: 'success'
    // 	        });
    // 		}else if(message.data.resCode==1){
    // 			that.$message({
    // 	        	message: '请勿重复添加或添加有效设备',
    // 	        	type: 'error'
    // 	        });
    // 		}
    // 	})

    // },
    allot (row) {
      this.universal.allot = true;
      this.allot1 = row;
      let that = this;
      console.log(row)
      let data = {
        weChatUsePhone: row.weChatUsePhone
      }
      console.log(data);
      // axios({
      // 	method:'post',
      // 	url:'http://192.168.2.123:8796/wechatUser/findDevbyUser',
      // 	data:Qs.stringify(data)
      // }).then(function(message){
      // 	console.log(1111111111111111)
      // 	console.log(message.data.result)
      // 	that.len=message.data.result;
      // })
    },
    changeGroupShow (row) {
      // this.look = row;
      // this.universal.look = true;
      // let that=this;
      // let data ={
      // 	weChatUsePhone:row.weChatUsePhone
      // }
      //  console.log(data)
      //  sessionStorage.setItem("weChatUsePhone",row.weChatUsePhone)
      //  axios({
      // 	method:"post",
      // 	url:this.$store.state.http+'/wechatUser/findDevbyUser',
      // 	data:Qs.stringify(data)
      // }).then(function(message){
      // 	console.log(message)
      // 	that.li=message.data.s
      // })
    },
    // changeClick(){},\
    typeCustem () {
      let that = this;
      let arrayc = {
        page: 1,
        pageSize: 1000,
        userId: sessionStorage.getItem('userId'),
        dealer: sessionStorage.getItem("dealer")
      }
      axios({
        method: 'post',
        url: this.$store.state.http + '/user/list',
        data: Qs.stringify(arrayc)
      }).then(function (message) {
        console.log(message)
        message.data.result.forEach((a, b) => {
          if (a.userAlias == sessionStorage.getItem('userAlias')) {
            message.data.result.splice(b, 1)
          }
        })
        that.reception = message.data.result;
      })
    },
    searchClick () {
      let that = this;
      let data = {
        page: that.paging.page,
        pageSize: that.paging.pageSize,
        dealer: sessionStorage.getItem("dealer"),
        state: 0
      };
      if (data.dealer == 0) {
        data.dealer = sessionStorage.getItem('orderDealers')
      }
      if (that.search.device_type) {
        axios({
          method: 'post',
          url: that.$store.state.http + "/devices/conditionFind",
          data: Qs.stringify({
            pageNum: 1,
            pageSize: 100,
            status: 0,
            userId: sessionStorage.getItem('userId'),
            dealer: sessionStorage.getItem('dealer'),
            devParaSn: that.search.device_type
          })
        }).then(res => {
          that.valres = res.data.result[0].deviceId;
          data.device_type = that.valres;
          if (that.search.customername) {
            data.dealerid = that.search.customername
          }
          if (that.search.area) {
            data.area = that.search.area
          }
          data.userid = sessionStorage.getItem('userId')
          // if (that.search.device_type) {
          //   data.device_type = that.valres;
          // }
          that.tableData = [];
          console.log(data);
          axios({
            method: 'post',
            url: this.$store.state.http + '/IccIds/queryByIccId',
            data: Qs.stringify(data)
          }).then(function (message) {
            console.log(message)
            // if(message.data.resCode==0){
            // console.log(message.data.result.length)
            if (message.data.result != "暂无信息") {

              that.tableData = message.data.result;
              // console.log(message.data.result.length)
              for (let i = 0; i < message.data.result.length; i++) {
                let data = {
                  pageNum: 1,
                  pageSize: 10,
                  status: 0,
                  devId: message.data.result[i].device_type,
                  userId: sessionStorage.getItem('userId'),
                  dealer: sessionStorage.getItem('dealer')
                }
                axios({
                  method: 'post',
                  url: that.$store.state.http + '/devices/conditionFind',
                  data: Qs.stringify(data)
                }).then(function (message) {
                  Vue.set(that.tableData[i], 'sn', message.data.result[0].devParaSn)
                  Vue.set(that.tableData[i], 'inId', message.data.result[0].end)
                })
              }
              console.log(that.tableData);
              that.paging.total = message.data.count;
            } else {
              console.log(111)
              that.tableData = [];
              that.paging.total = 0;
            }

            // }else{
            // 	that.tableData = [];
            // 	that.paging.total = 0;
            // }
          })
        })
      } else {
        if (that.search.customername) {
          data.dealerid = that.search.customername
        }
        if (that.search.area) {
          data.area = that.search.area
        }
        data.userid = sessionStorage.getItem('userId')
        // if (that.search.device_type) {
        //   data.device_type = that.valres;
        // }
        that.tableData = [];
        console.log(data);
        axios({
          method: 'post',
          url: this.$store.state.http + '/IccIds/queryByIccId',
          data: Qs.stringify(data)
        }).then(function (message) {
          console.log(message)
          // if(message.data.resCode==0){
          // console.log(message.data.result.length)
          if (message.data.result != "暂无信息") {

            that.tableData = message.data.result;
            // console.log(message.data.result.length)
            for (let i = 0; i < message.data.result.length; i++) {
              let data = {
                pageNum: 1,
                pageSize: 10,
                status: 0,
                devId: message.data.result[i].device_type,
                userId: sessionStorage.getItem('userId'),
                dealer: sessionStorage.getItem('dealer')
              }
              axios({
                method: 'post',
                url: that.$store.state.http + '/devices/conditionFind',
                data: Qs.stringify(data)
              }).then(function (message) {
                Vue.set(that.tableData[i], 'sn', message.data.result[0].devParaSn)
                Vue.set(that.tableData[i], 'inId', message.data.result[0].end)
              })
            }
            console.log(that.tableData);
            that.paging.total = message.data.count;
          } else {
            console.log(111)
            that.tableData = [];
            that.paging.total = 0;
          }

          // }else{
          // 	that.tableData = [];
          // 	that.paging.total = 0;
          // }
        })
      }
    },
    reload () {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      })
    },
    changeGroup () {
      let data = this.add1
      let that = this;
      axios({
        method: 'post',
        url: this.$store.state.http + '/devices/ModifyDevices',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message.data)
        if (message.data.resCode == 0) {
          that.searchClick();
          that.$message({
            message: '修改成功',
            type: 'success'
          });
        } else {
          that.$alert(message.data.result, '系统确认框', {
            confirmButtonText: '确定'
          })
        }
        that.changeGroups = false;
      })
    }
  }
}
	// $(function(){
	// 	$(document).delegate(".oyButtonExcel",'click',function(){
	// 					$("#upload").click();
	// 				});

	// 				$(document).delegate("#upload","change",function(){
	// 						console.log(111);
	// 						var formData=new FormData();
	// 						var files=$("#upload")[0].files;
	// 						formData.append("upload",files[0]);
	// 						var aa= JSON.stringify(formData);
	// 						console.log(formData);
	// 						axios({
	// 									method:'post',
	// 									url:this.$store.state.http+'/conCode/import',
	// 									data:formData,
	// 									userName:sessionStorage.getItem('userAlias')
	// 								}).then(function(message){
	// 									console.log(message);
	// 									l

	// 								})

	// 				})
	// })
</script>

<style scoped="scoped">
.el-input,
.el-select {
  width: 180px;
}

.firImg {
  width: 50%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 89px;
}
.el-date-editor.el-input {
  width: 180px;
}
#PSTlist {
  padding: 20px;
}
.spanClassTL {
  width: 200px;
}
</style>