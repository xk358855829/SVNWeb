<template>
  <div id="faultList">
    <div class="header">
      <div class="headerTitle">
        <span>配置卡券</span>
        <el-button
          type="success"
          class="oyButton back"
          style="float:right;"
          @click="$router.go(-1)"
        >返回</el-button>
      </div>
    </div>
    <div class="select">
      <!-- <span>发放停车场：</span>
      <el-select v-model="search.parking_id"
                 filterable
                 placeholder="请选择">
        <el-option>未选择</el-option>
        <el-option v-for="item in parkIist"
                   :key="item.parking_id"
                   :label="item.parking_name"
                   :value="item.parking_id"></el-option>
      </el-select> -->
    </div>
    <div class="select">
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-plus"
                 @click='ADD'
                 v-show="showchose">配置卡券</el-button>
    </div>
    <div class="Content">
      <el-table class='oyTable'
                :data="tableData"
                style="width: 100%"
                @selection-change="handleSelectionChange">

        <el-table-column type="index"
                         :index="indexMethod"
                         label="序号"
                         width="100"> </el-table-column>

        <el-table-column label="停车场名称"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ chose(scope.row.parkingId)}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ chose(scope.row.parkingId)}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="优惠类型"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.useWay|verification}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.useWay|verification}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="优惠金额"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.useWay == 1 ? scope.row.useWayType+'分钟' : scope.row.useWay == 2 ? scope.row.useWayType+'元' : scope.row.useWay == 3 ? scope.row.useWayType+'元' : scope.row.useWayType+'折'}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.useWay == 1 ? scope.row.useWayType+'分钟' : scope.row.useWay == 2 ? scope.row.useWayType+'元' : scope.row.useWay == 3 ? scope.row.useWayType+'元' : scope.row.useWayType+'折'}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="有效(天/日期)"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.day ? scope.row.day : scope.row.endTime }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{scope.row.day ? scope.row.day : scope.row.endTime }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="发券个数"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.num }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{scope.row.num }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="配置生效时间"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.useTime }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{scope.row.useTime }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="配置失效时间"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.pastTime }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{scope.row.pastTime }}</div>
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
                        content="删除卡券"
                        placement="top">
              <i class="icon-delete el-icon-delete"
                 @click="deleteClick(scope.row)"></i>
            </el-tooltip>            

          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog title="配置卡券"
               :visible.sync="universal.add1">
      <div>
        <el-row>
          <el-col :span="12">
            <span class="spanClass">
              <span class="aKey">*</span>发券个数：</span>
            <el-input v-model="add1.num"
                      placeholder="选择发券个数"></el-input><br /><br />
            <div v-if="add1.workType == 'T1'">
              <span class="spanClass">发放停车场：</span>
              <el-select v-model="add1.parkingId"
                        filterable
                        multiple
                        placeholder="请选择">
                <el-option v-for="item in tableDataadd"
                          :key="item.parking_id"
                          :label="item.parking_name"
                          :value="item.parking_id">
                </el-option>
              </el-select>
              <el-tooltip placement="top">
                <div slot="content">不选默认券可用全部停车场<br/></div>
                <img src="../../../static/image/ming.png"
                    alt=""
                    style="vertical-align: middle">
              </el-tooltip>
              <br /><br />              
            </div>
            <div v-if="add1.workType == 'W1' || add1.workType == 'W2' || add1.workType == 'W3' || add1.workType == 'W4'">
              <span class="spanClass">发放洗车站点：</span>
              <el-select v-model="add1.parkingId"
                        filterable
                        multiple
                        placeholder="请选择">
                <el-option v-for="item in tableDataadd1"
                          :key="item.sid"
                          :label="item.sname"
                          :value="item.sid">
                </el-option>
              </el-select>
              <el-tooltip placement="top">
                <div slot="content">不选默认券可用全部洗车站点<br/></div>
                <img src="../../../static/image/ming.png"
                    alt=""
                    style="vertical-align: middle">
              </el-tooltip>
              <br /><br />              
            </div>
                            
            <div v-if="add1.useWay==1">
              <span class="spanClass"><span class="aKey">*</span>免费时长：</span>
              <el-input v-model="add1.useWayType"
                        placeholder="请选择免费时长"></el-input>
            </div>
            <div v-if="add1.useWay==2">
              <span class="spanClass"><span class="aKey">*</span>现金抵用：</span>
              <el-input v-model="add1.useWayType"
                        placeholder="请选择现金抵用"></el-input>
            </div>
            <div v-if="add1.useWay==3">
              <span class="spanClass"><span class="aKey">*</span>满减：</span>
              <el-input v-model="add1.useWayType"
                        placeholder="请选择满减"></el-input>
            </div>
            <div v-if="add1.useWay==4">
              <span class="spanClass"><span class="aKey">*</span>折扣：</span>
              <el-input v-model="add1.useWayType"
                        placeholder="请选择折扣"></el-input>
              <el-tooltip placement="top">
                <div slot="content">例：85即8.5折,50即5折<br/></div>
                <img src="../../../static/image/ming.png"
                     alt=""
                     style="vertical-align: middle">
              </el-tooltip><br /><br />
            </div>            
          </el-col>
          <el-col :span="12">                                  
            <span class="spanClass"><span class="aKey">*</span>发放类型：</span>
            <el-select v-model="add1.workType"
                       placeholder="请选择">
              <el-option v-for="item in [
              {type:'T1',name:'停车'},{type:'W1',name:'洗车'},{type:'W2',name:'洗车分享人'},{type:'W3',name:'洗车被分享人'},{type:'W4',name:'洗车会员券'}]"
                         :key="item.type"
                         :label="item.name"
                         :value="item.type">
              </el-option>
            </el-select><br /><br />                
            <div v-if="add1.workType == 'T1'">
              <span class="spanClass"><span class="aKey">*</span>用户类型：</span>
              <el-select v-model="add1.useWay"
                        placeholder="请选择">
                <el-option v-for="item in [
                {id:1,name:'免费时长'},{id:2,name:'现金抵用'},{id:3,name:'满减'},{id:4,name:'折扣'}]"
                          :key="item.id"
                          :label="item.name"
                          :value="item.id">
                </el-option>
              </el-select>
              <br /><br />
            </div> 
            <div v-if="add1.workType == 'W1' || add1.workType == 'W2' || add1.workType == 'W3' || add1.workType == 'W4'">
              <span class="spanClass"><span class="aKey">*</span>用户类型：</span>
              <el-select v-model="add1.useWay"
                        placeholder="请选择">
                <el-option v-for="item in [
                {id:2,name:'现金抵用'},{id:4,name:'折扣'}]"
                          :key="item.id"
                          :label="item.name"
                          :value="item.id">
                </el-option>
              </el-select>
              <br /><br />
            </div> 
            <div v-if="add1.useWay">
              <span class="spanClass"><span class="aKey">*</span>有效天数：</span>
              <el-input v-model="add1.day"
                        placeholder="请输入有效天数"></el-input>
              <el-tooltip placement="top">
                <div slot="content">例：3即3天,5即5天<br/></div>
                <img src="../../../static/image/ming.png"
                      alt=""
                      style="vertical-align: middle">
              </el-tooltip><br /><br />
            </div>                
          </el-col>
        </el-row>
        <span class="spanClass">备注：</span>
        <div class="little">{{this.$store.state.size}}</div>
      </div>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="universal.add1 = false">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="addClick">确认</el-button>
      </div>
    </el-dialog>
    <el-dialog title="修改配置卡券"
               :visible.sync="universal.change">
      <div>
        <el-row>
          <el-col :span="12">
            <span class="spanClass">
              <span class="aKey">*</span>发券个数：</span>
            <el-input v-model="change.num"
                      placeholder="选择发券个数"></el-input><br /><br />
            <div v-if="change.workType == 'T1'">
              <span class="spanClass">发放停车场：</span>
              <el-select v-model="change.parkingId"
                        filterable
                        multiple
                        placeholder="请选择">
                <el-option v-for="item in tableDataadd"
                          :key="item.parking_id"
                          :label="item.parking_name"
                          :value="item.parking_id">
                </el-option>
              </el-select>
              <el-tooltip placement="top">
                <div slot="content">不选默认券可用全部停车场<br/></div>
                <img src="../../../static/image/ming.png"
                    alt=""
                    style="vertical-align: middle">
              </el-tooltip>
              <br /><br />              
            </div>
            <div v-if="change.workType == 'W1' || change.workType == 'W2' || change.workType == 'W3' || add1.workType == 'W4'">
              <span class="spanClass">发放洗车站点：</span>
              <el-select v-model="change.parkingId"
                        filterable
                        multiple
                        placeholder="请选择">
                <el-option v-for="item in tableDataadd1"
                          :key="item.sid"
                          :label="item.sname"
                          :value="item.sid">
                </el-option>
              </el-select>
              <el-tooltip placement="top">
                <div slot="content">不选默认券可用全部洗车站点<br/></div>
                <img src="../../../static/image/ming.png"
                    alt=""
                    style="vertical-align: middle">
              </el-tooltip>
              <br /><br />              
            </div>
                            
            <div v-if="change.useWay==1">
              <span class="spanClass"><span class="aKey">*</span>免费时长：</span>
              <el-input v-model="change.useWayType"
                        placeholder="请选择免费时长"></el-input>
            </div>
            <div v-if="change.useWay==2">
              <span class="spanClass"><span class="aKey">*</span>现金抵用：</span>
              <el-input v-model="change.useWayType"
                        placeholder="请选择现金抵用"></el-input>
            </div>
            <div v-if="change.useWay==3">
              <span class="spanClass"><span class="aKey">*</span>满减：</span>
              <el-input v-model="change.useWayType"
                        placeholder="请选择满减"></el-input>
            </div>
            <div v-if="change.useWay==4">
              <span class="spanClass"><span class="aKey">*</span>折扣：</span>
              <el-input v-model="change.useWayType"
                        placeholder="请选择折扣"></el-input>
              <el-tooltip placement="top">
                <div slot="content">例：85即8.5折,50即5折<br/></div>
                <img src="../../../static/image/ming.png"
                     alt=""
                     style="vertical-align: middle">
              </el-tooltip><br /><br />
            </div>            
          </el-col>
          <el-col :span="12">                                  
            <span class="spanClass"><span class="aKey">*</span>发放类型：</span>
            <el-select v-model="change.workType"
                       placeholder="请选择">
              <el-option v-for="item in [
              {type:'T1',name:'停车'},{type:'W1',name:'洗车'},{type:'W2',name:'洗车分享人'},{type:'W3',name:'洗车被分享人'},{type:'W4',name:'洗车会员券'}]"
                         :key="item.type"
                         :label="item.name"
                         :value="item.type">
              </el-option>
            </el-select><br /><br />                
            <div v-if="change.workType == 'T1'">
              <span class="spanClass"><span class="aKey">*</span>用户类型：</span>
              <el-select v-model="change.useWay"
                        placeholder="请选择">
                <el-option v-for="item in [
                {id:'1',name:'免费时长'},{id:'2',name:'现金抵用'},{id:'3',name:'满减'},{id:'4',name:'折扣'}]"
                          :key="item.id"
                          :label="item.name"
                          :value="item.id">
                </el-option>
              </el-select>
              <br /><br />
            </div> 
            <div v-if="change.workType == 'W1' || change.workType == 'W2' || change.workType == 'W3' || add1.workType == 'W4'">
              <span class="spanClass"><span class="aKey">*</span>用户类型：</span>
              <el-select v-model="change.useWay"
                        placeholder="请选择">
                <el-option v-for="item in [
                {id:'2',name:'现金抵用'},{id:'4',name:'折扣'}]"
                          :key="item.id"
                          :label="item.name"
                          :value="item.id">
                </el-option>
              </el-select>
              <br /><br />
            </div> 
            <div v-if="change.useWay">
              <span class="spanClass"><span class="aKey">*</span>有效天数：</span>
              <el-input v-model="change.day"
                        placeholder="请输入有效天数"></el-input>
              <el-tooltip placement="top">
                <div slot="content">例：3即3天,5即5天<br/></div>
                <img src="../../../static/image/ming.png"
                      alt=""
                      style="vertical-align: middle">
              </el-tooltip><br /><br />
            </div>               
          </el-col>
        </el-row>
        <span class="spanClass">备注：</span>
        <div class="little">{{this.$store.state.size}}</div>
      </div>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="universal.change = false">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="changeclick">确认</el-button>
      </div>
    </el-dialog>
    <div class="footer">
      <el-pagination background
                     @current-change="handleCurrentChange"
                     @size-change="handleSizeChange"
                     :current-page.sync="paging.page"
                     :page-sizes="[10,15,20]"
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
import { timeToDate } from '../../../common/common.js'
import {  configs, valueop, isLicensePlate, getParkingLotListApi, searchClicks, addfigs, addfigt, searchfigt, delfigt,
  changfigt, changfigttwo, delfigtwo, isRealNum,getsiteList} from '../api/api.js'
export default {
  name: 'electronic',
  data () {
    return {
      unit: '',
      userfulTime: '',
      pays: 0,
      obj: [],
      numw: [],
      numvalue: [],
      universal: {
        change: false,
        look: false,
        add1: false,
        release: false
      },
      parkIist: [],
      release: {
        car_number: '',
        issus_obj: ''
      },
      tableDataadd: [],
      tableDataadd1: [],
      paging: {
        page: 1,
        pageSize: 10,
        total: ''
      },
      tableData: [],
      search: {
        ticketType: '',
        use_status: '',
        useWay: '',
        ticketNumber: '',
        parking_id: ''
      },
      fuzhi: '',
      look: {
        num: '',
        ticketType: '',
        ticketNumber: '',
        useWay: '',
        freeTime: '',
        full: '',
        sub: '',
        start_time: '',
        end_time: '',
        // use_obj:'',
        issus_type: '',
        isTeam: '',
        issus_obj: '',
        remark: ''
      },
      value5: [],
      add1: {
        endTime: '',
        useTime: '',
        pastTime: '',
        parkingId: '',
        useWay: '',
        num: '',
        workType: '',
        useWayType: "",
        day:3,
      },
      listorder: [],
      valtable: [],
      change: {
        num: '',
        parkingId: '',
        useWayType: '',
        useWay: ''
      },
      idreplace: '',
      showchose: '',
      tableDataSLIST: []
    }
  },
  computed: {
    ...mapState(['use_statuslist', 'usage', 'tickettype', 'Distributing', 'disbursement', 'parkingname']),
    ...mapGetters({
      parkingLotInfo: "getParkingLotInfo",
      parkingLotDevList: "getParkingLotDevList"
    }),
  },
  mounted: function () {
    document.title = this.$route.meta.title;
    if (localStorage.getItem('dealer') == 0 || localStorage.getItem('dealer') == 123) {
      this.showchose = true
    } else {
      this.showchose = false
    }
    this.searchClick();
    let that = this;
    let data = {
      page: 1,
      pageSize: 50,
      userId: localStorage.getItem('userId'),
      dealer: localStorage.getItem('dealer')
    };
    that.parkname(data)
    searchClicks('/Parking/selectLotInfo', data).then(message => {
      if (message.data.resCode == 0) {
        that.tableDataadd = message.data.result;
      } else {
        that.tableData = [];
      }
    })
    console.log(this.parkingname)
    this.getParkingLotListApiList();
  },
  methods: {
    ...mapActions(['parkname']),
    handleSelectionChange (val) {
      this.tableDataSLIST = val
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

    async changeclick () {
      console.log(this.change)
      // let data = {
      //   endTime: this.change.endTime,
      //   parkingId: this.change.parkingId,
      //   dealer: localStorage.getItem("dealer"),
      //   appId: 'wxd70f81c80f806b23',
      //   useTime: this.change.useTime,
      //   pastTime: this.change.pastTime,
      //   id: this.change.id
      // }
      // let res = await changfigt(data)
      let parm = {
        parkingId: this.change.parkingId,
        useWayType: this.change.useWayType,
        useWay: this.change.useWay,
        num: this.change.num,
        day: this.change.day,
        id: this.change.nise
      }
      let regs = await changfigttwo(parm)
      console.log(regs)
      if (regs.data.resCode == 0) {
        this.$message({
          message: '修改成功',
          type: 'success'
        });
        this.universal.change = false;
        this.searchClick();
      } else {
        this.$message({
          message: '修改失败',
          type: 'error'
        });
      }
    },
    changeShow (row) {
      console.log(row)
      this.universal.change = true
      this.change = Object.assign({}, row)
    },
    chose (val) {
      var run = val.split(',')
      for (let t = 0; t < run.length; t++) {
        for (let h = 0; h < this.tableDataadd.length; h++) {
          if (run[t] == this.tableDataadd[h].parking_id) {
            var nlua;
            nlua += this.tableDataadd[h].parking_name + ","
            nlua = nlua.replace(/undefined/, "")
          }
        }
      }
      console.log(nlua)
      if (nlua == undefined) {
        nlua = '全部'
      } else {
        nlua = nlua.slice(0, nlua.length - 1)
      }
      return nlua
    },

    ADD () {
      this.universal.add1 = true;
      let that = this;
      that.add1.parkingId = '';
      that.add1.useWay = '';
      that.add1.num = '';
      that.add1.workType = '';
      that.add1.useWayType = '';
      that.add1.day = 3;
      let data = {
        page: 1,
        pageSize: 200,
        userId: localStorage.getItem('userId'),
        dealer: localStorage.getItem('dealer')
      };
      this.tableDataadd1 = [];
      getsiteList(data).then(message => {
        console.log(message);
        if (message.data.result.length > 0) {
          for (var i = 0; i < message.data.result.length; i++) {
            let list = {
              sid: message.data.result[i].sid,
              sname: message.data.result[i].sname
            };
            that.tableDataadd1.push(list);
          }
          console.log(that.tableDataadd1);
        } else {
          that.tableDataadd1 = [];
        }
      });
    },
    changetian (val) {
      this.change.endTime = ''
    },
    indexMethod (index) {
      return index + (this.paging.page - 1) * this.paging.pageSize + 1;
    },
    handleSizeChange (val) {
      this.paging.pageSize = val;
      this.searchClick();
    },
    handleCurrentChange (val) {
      this.paging.page = val;
      this.searchClick();
    },
    async addClick () {
      if (!isRealNum(this.add1.num)) {
        this.$message.error('配置卡券个数只能为数字')
        return
      }
      let lengths = this.add1.parkingId.length;
      let valuePark = ''
      for (let i = 0; i < lengths; i++) {
        valuePark += this.add1.parkingId[i] + ","
      }
      valuePark = valuePark.replace(/,$/, "")
      console.log(valuePark);
      // let p = new Date(this.add1.useTime)
      // let e = new Date(this.add1.pastTime)
      // if (e.getTime(e) < p.getTime(p)) {
      //   this.$message.error('失效时间不能早于生效时间');
      //   return false;
      // }

      if (!isRealNum(this.add1.day)) {
        this.$message.error('配置卡券有效天数只能为数字')
        return
      }

      if (this.add1.num == '' || this.add1.workType == '' || this.useWay == '' || this.useWayType == '') {
        this.$message.error('带*的数据不能为空哦！');
        return false;
      }

      // let data = {
      //   userfulTime: this.userfulTime,
      //   endTime: this.add1.endTime,
      //   useTime: this.add1.useTime,
      //   pastTime: this.add1.pastTime,
      //   // parkingId: valuePark,
      //   dealer: localStorage.getItem('dealer')
      // }
      // console.log(data)

      // let res = await addfigs(data)
      // if (res.data.resCode == "1") {
      //   this.$message.error('已有配置，可进行更改')
      //   return
      // }
      let parm = {
        parkingId: valuePark,
        num: this.add1.num,
        useWay: this.add1.useWay,
        useWayType: this.add1.useWayType,
        isvId: this.$route.query.id,
        workType: this.add1.workType,
        day: this.add1.day,
      }
      let reg = await addfigt(parm)
      if (reg.data.resCode == 0) {
        this.$message({
          message: '配置成功',
          type: 'success'
        });
        this.universal.add1 = false;
        this.searchClick();
      } else {
        this.$message({
          message: '配置失败',
          type: 'error'
        });
      }      
    },
    deleteClick (row) {
      console.log(row)
      let that = this;
      this.$confirm('此操作将删除该条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        let reg = await delfigtwo({ id: row.nise })
        // let message = await delfigt({ id: row.id })

        if (reg.data.resCode == 0) {          
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
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    async searchClick () {
      // console.log(this.search.order_status)
      // let data = {
      //   page: this.paging.page,
      //   pageSize: this.paging.pageSize,
      //   userId: localStorage.getItem('userId'),
      //   dealer: localStorage.getItem('dealer')
      // };
      // var mltt = ''
      // let res = await configs(data)
      // if (res.data.resCode == "0") {
      //   res.data.result.forEach(a => {
      //     mltt += a.id + ','
      //   })
      // }
      // mltt = mltt.slice(0, mltt.length - 1)
      // console.log(mltt)
      let reg = await searchfigt({ id: this.$route.query.id })
      this.paging.total = reg.data.count;
      var arr = []
      arr = Object.values(reg.data.result)
      this.tableData = arr.reduce((a, b) => {
        return a.concat(b)
      }, [])
      let dealerarr = [];
      dealerarr.push(JSON.parse(sessionStorage.getItem('configurInfo')));
      console.log(dealerarr);
      this.tableData.forEach(a => {
        a.nise = a.id
        dealerarr.forEach(b => {
          if (a.isvId == b.id) {
            a = Object.assign(a, b)
          }
        })
        // a.date.time = this.common.timeToDate(JSON.stringify(a.date.time).slice(0, 10))
      })
      // this.tableData = reg.data.result;
      // if (this.search.parking_id) {
      //   data.parking_id = this.search.parking_id
      // }
      // if (this.search.ticketNumber) {
      //   data.ticketNumber = this.search.ticketNumber
      // }
      // if (this.search.ticketType == '纸券') {
      //   data.ticketType = 0
      // } else if (this.search.ticketType == '电子券') {
      //   data.ticketType = 1
      // }
      // if (this.search.useWay == '现金抵用券') {
      //   data.useWay = 2
      // } else if (this.search.useWay == '满减券') {
      //   data.useWay = 3
      // } else if (this.search.useWay == '免费时长') {
      //   data.useWay = 1
      // } else if (this.search.useWay == '未选择') {
      //   data.useWay = ''
      // }
      // if (this.search.use_status == '未使用') {
      //   data.use_status = 1
      // } else if (this.search.use_status == '已使用') {
      //   data.use_status = 0
      // } else if (this.search.use_status == '已失效') {
      //   data.use_status = -1
      // } else if (this.search.use_status == '未选择') {
      //   data.use_status = ''
      // }
      // console.log(data)
      // let that = this;
      // that.tableData = [];
      // searchClicks('/TicketISV/findISV1', data).then(res => {
      //   console.log(res)
      // if (res.data.resCode == 0) {
      //   for (let i = 0; i < res.data.result.length; i++) {
      //     if (res.data.result[i].freeTime == '') {
      //       res.data.result[i].freeTime = '-'
      //     } else {
      //       res.data.result[i].freeTime = res.data.result[i].freeTime + '分钟'
      //     }
      //     if (res.data.result[i].sub === '') {
      //       res.data.result[i].sub = '-'
      //     } else {
      //       res.data.result[i].sub = res.data.result[i].sub + '元'
      //     }
      //     if (res.data.result[i].full === '') {
      //       res.data.result[i].full = '-'
      //     } else {
      //       res.data.result[i].full = res.data.result[i].full + '元'
      //     }
      //   }
      //   that.paging.total = res.data.count;
      //   that.tableData = res.data.result;
      // } else {
      //   that.tableData = [];
      // }
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
.spanClass {
  width: 110px !important;
}
.alipay:nth-child(1) {
  width: 49%;
  float: left;
}
.alipay:nth-child(2) {
  width: 51%;
  float: right;
}
.alipays {
  width: 100%;
  display: inline-block;
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
.el-input--small .el-input__inner {
  width: 120px !important;
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
.select .boxselect {
  float: right;
}
.select .boxselect img {
  vertical-align: middle;
  margin-right: 5px;
}
.select img {
  float: right;
  margin-right: 10px;
  cursor: pointer;
}
.deletecolor {
  background: red;
}
.spanchange {
  width: 250px !important;
}
.jilu {
  width: 22px;
  height: 22px;
  display: inline-block;
  background: #59cb18;
  border-radius: 3px;
  color: #fff;
}
.jilus {
  background: #777;
}
.el-tag {
  border: none;
}
</style>