<template>
  <div id="PSTlist">
    <div class="header">
      <div class="headerTitle">
        <span>道闸列表</span>
      </div>
    </div>
    <div class="select">

      <span>道闸编号：</span>
      <el-input v-model="search.deviceld"
                clearable
                placeholder="请输入道闸编号"></el-input>
      <span>道闸名称：</span>
      <el-input v-model="search.alias"
                clearable
                placeholder="请输入道闸名称"></el-input>
      <span>绑定道闸：</span>
      <el-select v-model="search.isBind"
                 placeholder="请选择">
        <el-option>未选择</el-option>
        <el-option v-for="item in online"
                   :key="item.id"
                   :label="item.type"
                   :value="item.type"></el-option>
      </el-select>
    </div>
    <div class="select">
      <!--<el-button class="oyButton" type="success" icon="el-icon-plus"  @click="add = true">新增</el-button>-->
      <!-- <el-button class="oyButton" type="success" icon="el-icon-plus"  @click="conGroup = true">分组</el-button> -->
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-plus"
                 @click='addShow'
                 v-show="showchose">添加</el-button>
      <el-button class="oyButton"
                 type="success"
                 icon="el-icon-search"
                 @click='searchClick'>查询</el-button>

      <!-- <el-button class="oyButton" type="success" @click='searchstatus'>查询状态</el-button> -->
      <!-- <el-button class="oyButton" type="success" @click='reg'>注册设备</el-button> -->
      <!--<el-button class="oyButton" type="success" icon="el-icon-download" @click=''>导出</el-button>-->
    </div>
    <el-dialog title="新增道闸设备"
               :visible.sync="universal.add">
      <div>
        <span class="spanClassT">
          <span class="aKey">*</span>道闸编号：</span>
        <el-input v-model="add1.deviceld"
                  clearable
                  placeholder="请输入道闸编号"
                  @blur="focus()"
                  @focus="innert"></el-input>
        <span v-show="tishi">设备编号已存在</span>
        <br /><br />

        <span class="spanClassT">SIM卡号：</span>
        <el-input v-model="add1.protocol"
                  clearable
                  placeholder="请输入SIM卡号"></el-input><br /><br />
        <span class="spanClassT">协议版本号：</span>
        <el-input v-model="add1.sim"
                  clearable
                  placeholder="请输入协议版本号"></el-input><br /><br />
        <span class="spanClassT">备注：</span>
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
    <!-- <el-dialog title="发送命令" :visible.sync="universal.send">
			<div>
				<span class="spanClass">设备ID：</span>
				<el-input v-model="send.deviceId" clearable placeholder="请输入内容"></el-input><br /><br />

				<span class="spanClass">设备名称：</span>
				<el-input v-model="send.title" clearable placeholder="请输入内容"></el-input><br /><br />

				<! <span class="spanClass">是否响应：</span>
				<el-input v-model="send.qos" clearable placeholder="请输入内容"></el-input><br /><br /> -->

    <!-- 
				<span class="spanClass">是否响应：</span>
				<el-select v-model="send.qos" placeholder="请选择">
    				<el-option :value="0"></el-option>
					<el-option :value="1"></el-option>
				</el-select><br /><br />

				<span class="spanClass">有效时间：</span>
				<el-input v-model="send.timeOut" clearable placeholder="请输入内容"></el-input><br /><br />
			</div>
			 <div slot="footer" class="dialog-footer">
					<el-button type="success" class="oyButton" @click="universal.send = false">取消</el-button>
					<el-button type="success" class="oyButton" @click="changeorder(send)">发送命令</el-button>
				</div>
		</el-dialog>  -->
    <el-dialog title="查看"
               :visible.sync="universal.change">
      <div>
        <el-table class='oyTable'
                  :data="idtable"
                  style="width: 100%">
          <!-- <el-table-column type="selection" width="55" class="selection" prop='uuid' :selectable='checkboxInit' @selection-change="changeFun"></el-table-column> -->
          <el-table-column type="index"
                           :index="indexMethod"
                           label="序号"
                           width="100"> </el-table-column>
          <el-table-column label="设备卡ID">
            <template slot-scope="scope">
              <el-popover trigger="hover"
                          placement="top">
                <p class="TsMaxWidth">{{scope.row.iccId}}</p>
                <div slot="reference"
                     class="name-wrapper">
                  <div class="overflowHide">{{scope.row.iccId}}</div>
                </div>
              </el-popover>
            </template>
          </el-table-column>

          <el-table-column label="绑定设备">
            <template slot-scope="scope">
              <el-popover trigger="hover"
                          placement="top">
                <p class="TsMaxWidth">{{ scope.row.deviceId }}</p>
                <div slot="reference"
                     class="name-wrapper">
                  <div class="overflowHide">{{scope.row.deviceId}}</div>
                </div>
              </el-popover>
            </template>
          </el-table-column>

          <el-table-column prop=""
                           label="操作"
                           width="">
            <template slot-scope="scope">

              <el-tooltip class="item"
                          effect="dark"
                          content="删除"
                          placement="top">
                <i class="icon-delete el-icon-delete"
                   @click="deleteid(scope.row)"></i>
              </el-tooltip>

            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- <div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="hideclick">取消</el-button>
				<el-button type="success" class="oyButton" @click="changeclick(change)">修改</el-button>
			</div> -->
    </el-dialog>
    <el-dialog title="查看"
               :visible.sync="universal.look">
      <div class="letg">
        <el-row>
          <el-col :span="12">
            <div class="grid-content">停车场名称：</div>{{look.parking_name}}</el-col>
          <el-col :span="12">
            <div class="grid-content">免费时长：</div>{{look.free_time}}</el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">停车场类型：</div>{{look.parking_lot_type}}</el-col>
          <el-col :span="12">
            <div class="grid-content">收费标准：</div>{{look.price}}</el-col>
        </el-row>
        <div class="grid-content longsize">停车场地址：</div>
        <div>{{look.parking_address}}</div>
      </div>
    </el-dialog>

    <div class="Content">
      <el-table class='oyTable'
                :data="tab.a"
                style="width: 100%">
        <el-table-column type="index"
                         :index="indexMethod"
                         label="序号"
                         width="100"> </el-table-column>

        <el-table-column label="道闸名称">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{chose(scope.row.alias) }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ chose(scope.row.alias)}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="道闸编号">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{scope.row.deviceld }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.deviceld }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="版本号">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.protocol | numnew}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{scope.row.protocol | numnew}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="是否绑定停车场">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{choses(scope.row.alias)}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{choses(scope.row.alias)}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="安装时间">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{(scope.row.date.time)}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{(scope.row.date.time)}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <!-- <el-table-column label="最近通讯时间" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{scope.row.systime}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.systime}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column> -->

        <el-table-column prop=""
                         label="操作"
                         width="">
          <template slot-scope="scope">

            <el-tooltip class="item"
                        effect="dark"
                        content="远程控制"
                        placement="top">
              <i class="jilu iconfont icon-yuanchengkongzhi"
                 @click="popup(scope.row)"></i>
            </el-tooltip>

            <el-tooltip class="item"
                        effect="dark"
                        content="查看"
                        placement="top">
              <i class="icon-See el-icon-search"
                 @click="seeClick(scope.row)"></i>
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
    <el-dialog title="远程控制"
               :visible.sync="universal.allotenter">
      <div>
        <!-- <span class="spanClass">设备编号：</span> -->
        <el-input :disabled="true"
                  v-model="allotenter.id"
                  clearable
                  placeholder="请输入内容"
                  style="display:none;"></el-input>
        <br /><br />
        <span class="spanClass">动作指令：</span>
        <el-select v-model="allotenter.str"
                   placeholder="请选择设备状态">
          <el-option>未选择</el-option>
          <el-option v-for="item in enter"
                     :key="item.id"
                     :label="item.type"
                     :value="item.type"></el-option>
        </el-select><br /><br />
        <!-- <span class="spanClass">车牌：</span>
				<el-input :disabled="true" v-model="allotenter.brand" clearable placeholder="0"></el-input><br /><br />
				<span class="spanClass">进出状态：</span>
				<el-select v-model="allotenter.inout" placeholder="请选择进出状态">  
					<el-option>未选择</el-option>
					<el-option v-for="item in moneypay" :key="item.id" :label="item.type" :value="item.type"></el-option>
				</el-select><br /><br />
				<span class="spanClass">金钱：</span>
				<el-input :disabled="true" v-model="allotenter.price" clearable placeholder="0"></el-input><br /><br /> -->
      </div>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="NO">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="changeGroup">发送</el-button>
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
                     :total="countc"></el-pagination>
    </div>
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
import Qs from 'qs'
// import $ from 'jquery'
import axios from 'axios'
import { searchClicks } from '../api/api.js'
import { mapActions, mapState, mapGetters } from 'vuex'
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
      moneypay: [{
        value: 1,
        type: '进场'
      }, {
        value: 0,
        type: '离场'
      }],
      enter: [{
        value: 1,
        type: '远程抓拍'
      }, {
        value: 0,
        type: '远程开闸'
      }],
      look: {
        parking_id: '',
        parking_name: '',
        parking_address: '',
        price: '',
        free_time: '',
        parking_lot_type: ''
      },
      isRouterAlive: true,
      formInline: {
        id: null,
        scene: '',
        project_name: '',
        submit_date: [new Date(), new Date()],

      },
      idtable: [],
      opencard: [],
      tableData5: [],
      online: [
        {
          value: 2,
          type: '已绑定'
        },
        {
          value: 3,
          type: '未绑定'
        }
      ],
      multipleSelection: [],
      value1: "",
      levelList: [{
        value: '0',
        label: '管理卡'
      }, {
        value: '1',
        label: '用户卡'
      }],
      level: '0',
      deviceType: '0',
      add1: {
        deviceld: '',
        protocol: '',
        sim: ''
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
        allotenter: false
      },
      ICData: [],
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
      allotenter: {
        id: '',
        str: '',
        brand: '',
        price: '',
        inout: ''
      },
      search: {
        deviceld: "",
        alias: "",
        isBind: ''
      },
      showchose: '',
      listtable: [],
      tishi: false
    }
  },

  created () {

    this.add1.deviceType = this.levelList[0].label;

  },
  computed: {
    ...mapState({
      countc: state => state.gate.gatelistcount
    }),
    tab () {
      return this.$store.getters.todoList
    }

  },
  mounted: function () {

    this.searchClick();
    // this.$store.dispatch('group');
    document.title = this.$route.meta.title;
    if (localStorage.getItem('dealer') != 0) {
      this.showchose = true
    } else {
      this.showchose = false
    }
    if (sessionStorage.getItem("dealer") == '123') {
      this.added = 1
    }
  },
  methods: {
    ...mapActions(['gatepeople']),
    focus () {
      for (var i = 0; i < this.listtable.length; i++) {
        if (this.listtable[i].deviceld == this.add1.deviceld) {
          this.tishi = true;
        }
      }
    },
    innert () {
      if (this.add1.deviceld == '') {
        this.tishi = false;
      }
      this.focus()
    },
    NO () {
      this.universal.allotenter = false;
    },
    chose (row) {
      if (row == '') {
        return '-'
      } else {
        return row
      }
    },
    choses (row) {
      if (row == '') {
        return '未绑定'
      } else {
        return '已绑定'
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val;
    },
    addShow () {
      this.tishi = false
      this.universal.add = true;
      this.add1.deviceld = '';
      this.add1.protocol = '';
      this.add1.sim = '';
      let data = {
        page: this.paging.page,
        pageSize: 1000000,
        userId: localStorage.getItem('userId'),
        dealer: localStorage.getItem('dealer')
      }
      searchClicks('/Device/brakeList', data).then(res => {
        if (res.data.resCode == 0) {
          this.listtable = res.data.result
        }
      })
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
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    hideclick () {
      this.universal.change = false;
    },
    indexMethod (index) {
      return index + (this.paging.page - 1) * this.paging.pageSize + 1;
    },
    handleSizeChange (val) {
      this.paging.pageSize = val;
      this.searchClick();
    },
    next () {
      /*this.addClick();*/
      let that = this;
      if (this.step == 0) {
        axios({
          method: 'post',
          url: that.$store.state.http + '/concode/conByCarBrand',
          data: Qs.stringify({
            conLocaid: that.addTo.list.conLocaid,
            carBrand: that.addTo.list.carBrand
          })
        }).then(function (message) {
          console.log(message.data)
          if (message.data.resCode == 0) {
            console.log(message.data.result)
            if (that.step++ > 3) {
              that.step = 0;
              // that.addClick();
              that.add = false;
            }
          } else {
            that.$message.error('此定位器ID不存在');
            that.addTo.list.conLocaid = '';
            return false;
          }
        })
      } else {
        if (that.step++ > 3) {
          that.step = 0;
          // that.addClick();
          that.add = false;
        }
      }

    },
    nextSee () {
      if (this.seeStep++ > 1) {
        this.seeStep = 1;
      }
    },
    handleCurrentChange (val) {
      this.paging.page = val;
      this.searchClick();
    },
    addClick () {
      if (this.add1.deviceld == '') {
        this.$message.error('数据不能为空哦！');
        return false;
      }

      // if(this.add1.protocol == ''){
      // 	this.$message.error('带*的数据不能为空哦！');
      // 	return false;
      // }
      // if(this.add1.sim == ''){
      // 	this.$message.error('带*的数据不能为空哦！');
      // 	return false;
      // }

      let data = this.add1;
      data.dealer = localStorage.getItem('dealer')
      // let that=this;
      console.log(data);
      searchClicks('/Device/insert', data).then(res => {
        if (res.data.resCode == 0) {
          this.searchClick();
          this.$message({
            message: '添加成功',
            type: 'success'
          });
        } else {
          this.$message({
            message: res.data.result,
            type: 'error'
          });
        }
      })
      // axios({
      // 	method:'post',
      // 	dataType: 'jsonp',
      // 	url:that.$store.state.url+'/Device/insert',
      // 	data:Qs.stringify(data)
      // 	}).then(function(message){
      // 	console.log(message)
      // 	if(message.data.resCode==0){
      // 		that.searchClick();
      // 		that.$message({
      //         	message: '添加成功',
      //         	type: 'success'
      // 		});
      // 	}else if(message.data.resCode==6){
      // 		that.$alert(message.data.result, '请勿重复添加', {
      // 			confirmButtonText: '确定'
      // 		})
      // 	}
      // })
      this.universal.add = false;
    },
    deleteClick (row) {
      let that = this;
      // console.log(localStorage.getItem('id'))
      this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(row)
        let data = {
          deviceId: row.deviceld
        }
        console.log(data)
        axios({
          method: 'post',
          url: 'http://39.104.113.112:2088/Device/delDeviceld',
          data: Qs.stringify(data)
        }).then(function (message) {
          console.log(message)
          if (message.data.resCode == 0) {
            that.searchClick();
            that.$message({
              message: '删除成功',
              type: 'success'
            });
          } else if (message.data.resCode == -1) {
            that.$message({
              message: '该设备已绑定停车场，解绑后可删除',
              type: 'info'
            });
          } else {
            that.$alert(message.data.result, '系统确认框', {
              confirmButtonText: '确定'
            })
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });


    },
    changeshow (row) {
      this.universal.change = true;
      this.change = Object.assign({}, row);
    },
    changeclick (row) {
      if (this.change.weChatUseName == '') {
        this.$message.error('带*的数据不能为空哦！');
        return false;
      }
      if (this.change.weChatUsePhone == '') {
        this.$message.error('带*的数据不能为空哦！');
        return false;
      }
      if (this.change.weChatUsePassword == '') {
        this.$message.error('带*的数据不能为空哦！');
        return false;
      }
      if (this.change.weChatFullName == '') {
        this.$message.error('带*的数据不能为空哦！');
        return false;
      }
      if (this.change.weChatType == '') {
        this.$message.error('带*的数据不能为空哦！');
        return false;
      }
      let that = this;
      let data = this.change;
      data.wechatUser = row.wechatUser;
      console.log(data);
      axios({
        method: 'post',
        url: this.$store.state.http + '/wechatUser/update',
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
          that.searchClick();
          that.$message({
            message: '修改失败',
            type: 'error'
          });
        }
      })
      this.universal.change = false;
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
    seeClick (row) {
      this.look.parking_lot_type = '无'
      this.look.parking_name = '无';
      this.look.parking_address = '无';
      this.look.price = '无';
      this.look.free_time = '无';
      this.universal.look = true;
      console.log(row)
      let that = this;
      axios({
        method: 'post',
        url: 'http://39.104.113.112:2088/Device/queryBindLot',
        data: Qs.stringify({
          deviceId: row.deviceld
        })
      }).then(function (message) {
        console.log(message)
        if (message.data.resCode == 0) {
          console.log(message)
          that.look = message.data.result
          that.look.price = message.data.result.price + '元/小时';
          that.look.free_time = message.data.result.free_time + '分钟';
          switch (message.data.result.parking_lot_type) {
            case 1: that.look.parking_lot_type = '居民小区'; break;
            case 2: that.look.parking_lot_type = '商圈停车场'; break;
            case 3: that.look.parking_lot_type = '路侧停车'; break;
            case 4: that.look.parking_lot_type = '公园景点'; break;
            case 5: that.look.parking_lot_type = '商务楼宇'; break;
            case 6: that.look.parking_lot_type = '其他'; break;
            case 7: that.look.parking_lot_type = '交通枢纽'; break;
            case 8: that.look.parking_lot_type = '市政设施'; break;
            default: that.look.parking_lot_type = '其它'; break;
          }
        } else if (message.data.resCode == 1) {
          that.look.price = '无'

        }

      })


    },
    popup (row) {
      console.log(row)
      this.universal.allotenter = true;
      this.allotenter.id = row.deviceld
    },
    searchClick () {
      let data = {
        page: this.paging.page,
        pageSize: this.paging.pageSize,
        userId: localStorage.getItem('userId'),
        dealer: localStorage.getItem('dealer')
      };

      if (this.search.deviceld) {
        data.deviceld = this.search.deviceld
      }
      if (this.search.alias) {
        data.alias = this.search.alias
      }
      if (this.search.isBind) {
        if (this.search.isBind == '已绑定') {
          data.isBind = 2
        } else {
          data.isBind = 3
        }
      }
      this.gatepeople(data)
      // let that = this;
      // that.tableData = [];
      // console.log(data);
      // searchClicks('/Device/brakeList',data).then(res=>{
      // 	if(res.data.resCode==0){
      // 		for(let i=0;i<res.data.result.length;i++){
      // 			res.data.result[i].date.time=that.common.timeToDate(JSON.stringify(res.data.result[i].date.time).slice(0,10))
      // 			res.data.result[i].systime=that.common.timeToDate((res.data.result[i].systime).slice(0,10))
      // 		}
      // 		that.tableData = res.data.result.reverse();
      // 		that.paging.total = res.data.count;
      // 		console.log(that.tableData)
      // 	}else{
      // 		that.tableData = [];
      // 		that.paging.total = 0;
      // 	}
      // })
    },
    reload () {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      })
    },
    changeGroup (row) {
      let that = this;
      console.log(that.allotenter)
      let data = {
        deviceid: that.allotenter.id,
        // brand:0,
        // price:0,
      }
      // if(that.allotenter.inout=='离场'){
      // 	data.inout=0
      // }else if(that.allotenter.inout=='进场'){
      // 	data.inout=1
      // }
      if (that.allotenter.str == '远程开闸') {
        data.str = 0
      } else if (that.allotenter.str == '远程抓拍') {
        data.str = 1
      }
      console.log(data)
      axios({
        method: 'post',
        url: 'http://39.104.99.181:3011/wirite/single/openid',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message)
        if (message.data.code == 200) {
          that.searchClick();
          that.$message({
            message: '发送成功',
            type: 'success'
          });
        } else {
          that.$message({
            message: message.data.result,
            type: 'error'
          });
        }
        that.universal.allotenter = false;
      })
    }
  }
}
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
.alipay {
  width: 50%;
  float: left;
}
.alipays {
  display: inline-block;
}
.innersize {
  margin-left: 10px;
}
.letg {
  height: 150px;
}
.letg div {
  font-size: 15px;
  line-height: 40px;
}
.grid-content {
  width: 30%;
  float: left;
  text-align: right;
  margin-right: 10px;
}
.longsize {
  width: 15% !important;
  text-align: right;
}
.iconcolor {
  background: #409eff;
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