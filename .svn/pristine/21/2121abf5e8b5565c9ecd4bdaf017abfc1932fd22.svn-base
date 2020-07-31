<template>
  <div id="offReport">
    <div class="header">
      <div class="headerTitle">
        <span>短信记录</span>
      </div>
    </div>
    <div class="select">
      <span>设备ID：</span>
      <el-input v-model="search.devId"
                clearable
                placeholder="请输入内容"></el-input>
      <!-- <span>命令类型：</span>
      <el-select v-model="search.cmd"
                 placeholder="请选择">
        <el-option value=''>未选择</el-option>
        <el-option v-for="item in listType"
                   :key="item.key"
                   :value="item.text">{{item.text}}</el-option>
      </el-select> -->
    </div>
    <div class="select">
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-search"
                 @click='searchClick'>查询</el-button>
    </div>
    
    <div class="Content">
      <el-table class="oyTable" :data="tableData" style="width: 100%">
        <el-table-column type="index"
                         :index="indexMethod"
                         label="序号"> </el-table-column>

        <!--<el-table-column label="ID" width="120">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.positionerId }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.positionerId }}</div>
				        	</div>
				        </el-popover>
			    	</template>
				</el-table-column>-->

        <!--<el-table-column label="分组" width="150">
					<template slot-scope="scope">
						<el-popover trigger="hover" placement="top">
					    	<p  class="TsMaxWidth">{{ scope.row.gropuName }}</p>
					    	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.gropuName }}</div>
				        	</div>
				        </el-popover>
					</template>
				</el-table-column>-->

        <el-table-column label="设备ID">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.fdDevId }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.fdDevId }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="手机号">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.fdPhone }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.fdPhone }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="短信内容">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.fdContext }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.fdContext }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

         <el-table-column label="发送对象">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.fdReceiveName }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.fdReceiveName }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>


        <el-table-column label="操作时间">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ timestamp(scope.row.fdSendTime.time) }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ timestamp(scope.row.fdSendTime.time) }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <!-- <el-table-column label="剩余流量" width="200">
					<template slot-scope="scope">
						<div class="overflowHide">{{50-randomNum()}}MB</div>
				        <!--<el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{50 - randomNum()}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{50-randomNum()}}</div>
				        	</div>
				        </el-popover>-->
        <!-- </template>
				</el-table-column>	 -->

        <!-- <el-table-column label="状态" width="200">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.lastOnlineDate }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.lastOnlineDate }}</div>
				        	</div>
				        </el-popover>
					</template>
				</el-table-column>	 -->

        <!-- <el-table-column label="位置" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p v-if="address==1">{{ scope.row. longtitude }},{{ scope.row.latitude }}</p>
							<p v-else="">{{ scope.row.address }}</p>
						  	<div slot="reference" class="name-wrapper">
					    		<div class="overflowHide" v-if="address==1" style="color: #5DAF34;cursor: pointer;" @click="address = 0">{{ scope.row. longtitude }},{{ scope.row.latitude }}</div>
				        		<div class="overflowHide" v-else="" style="color: #5DAF34;cursor: pointer;" @click="address = 1" >{{ scope.row.address }}</div>
				        	</div>
				        </el-popover>
					</template>
				</el-table-column> -->
       <!--  <el-table-column prop=""
                         label="操作"
                         width="">
          <template slot-scope="scope">
            <el-tooltip class="item"
                        effect="dark"
                        content="查看"
                        placement="top">
              <i class="icon-See el-icon-search"
                 @click="changeGroupShow(scope.row)"></i>
            </el-tooltip>

          </template>
        </el-table-column> -->
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
    <div id="allmap"></div>
  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
import { searchClicks } from '../api/api.js'
export default {
  name: 'openList',
  data () {
    return {
      address: 1,
      tableData: [],
      tope: sessionStorage.getItem('type'),
      listType:[
      {"key":'16',"text":'查询设备信息'},
      {"key":'17',"text":'控制设备停用/启用'},
      {"key":'18',"text":'控制设备阀门开启/关闭'},
      {"key":'19',"text":'控制设备布防/撤防'},
      {"key":'21',"text":'控制设备刷新/读取定位信息'},
      {"key":'22',"text":'控制设备恢复出厂'},
      {"key":'23',"text":'控制设备ID卡归属管理'},
      {"key":'24',"text":'控制设备刷新信息'}
      ],
      paging: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      universal: {
        look: false
      },
      loading:false,
      search: {
        devId: ''
      },
      iValue: '',
      COUNT: '',
      RESULT_LIST: '',
      RESULT_INFO: '',
      MSISDN2: '',
      ICCID2: '',
      IMSI: '',
      USE_DATE: '',
      SMS_NUM: '',
      CMIOT_USED: '',
      CMMTM_USED: '',
      OTHER_USED: '',
      CALL_MINUTE: '',
      MO_CALL_MINUTE: '',
      MT_CALL_MINUT: '',
      // F请求

      ICCID: '',
      IMSI: '',
      MSISDN: '',
      APN: '',
      GPRS_STATUS: '',
      IP: '',
      RAT: '',
      TIMESTAMP: '',
      USER_CARD_STATUS: '',
      ACTIVE_DATE: '',
      CREATE_DATE: '',
      BILLING_STATUS: '',
      APN1: '',
      SMS_NUMBER: '',
      USER_STATUS: '',
      CARD_TYPE: '',
      OS_STATUS_DESC: '',
      OFFER_NAME: '',
      ICCID1: '',
      IMSI1: '',
      PROD_FEE_LIST: '',
      PROD_FEE_INFO: '',
      PROD_NAME: '',
      PROD_ID: '',
      PROD_EFF_TIME: '',
      PROD_EXP_TIME: '',
      PROD_DESC: '',
      LEFT: ''
    }
  },
  mounted: function () {
    document.title = this.$route.meta.title;
    this.map = new BMap.Map("allmap");
    this.geoc = new BMap.Geocoder();
    this.searchClick();
    // this.address = 0;
    // let data = {
    // 	userId:sessionStorage.getItem('userId'),
    // 	Page:this.paging.page,
    // 	PageSize:this.paging.pageSize,
    // };
    // this.$store.dispatch('sc',data)
    // this.tableData=message.data.results;
    console.log(this.randomNum())
  },
  methods: {
    randomNum () {
      return parseInt(Math.random() * 50)
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
    timestamp (date) {
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
    cmdType(data){
      // console.log(data)
      switch (data) {
        case '16': return "查询设备信息";
        break;
        case '17': return "控制设备停用/启用";
        break;
        case '18': return "控制设备阀门开启/关闭";
        break;
        case '19': return "控制设备布防/撤防";
        break;
        case '21': return "控制设备刷新/读取定位信息";
        break;
        case '22': return "控制设备恢复出厂";
        break;
        case '23': return "控制设备ID卡归属管理";
        break;
        case '24': return "控制设备刷新信息";
        break;
        default: break;
      }
    },
    searchClick () {
      this.address = 0;
      let data = {
        pageNum: this.paging.page,
        pageSize: this.paging.pageSize,
        status: 0
      };
      // data.userId = sessionStorage.getItem('userId');
        data.dealer = sessionStorage.getItem("dealer")
      if (data.dealer == 0) {
        data.dealer = sessionStorage.getItem('orderDealers')
      }
      if (this.search.devId) {
        data.devId = this.search.devId;
      }
      let that = this;
      console.log(data);
      that.tableData = [];
      that.timeCrea = [];
      that.truey = []
      //console.log(that.tableData)
      //console.log(123)
      console.log(data)
      axios({
        method: 'post',
        url: this.$store.state.http + '/msg/find',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message)
        if (message.data.resCode == 0) {
          // console.log(message.data.result)
          that.tableData = message.data.result;
          that.paging.total = message.data.result2;
          console.log(that.tableData)
        } else {
          that.tableData = [];
          that.paging.total = 0;
        }
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
#offReport {
  padding: 20px;
}
.color {
  height: 47px;
  background-color: #e3eaf3;
  line-height: 47px;
  text-align: center;
  font-weight: 900;
  color: #666666;
  font-size: 14px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}
.demoele {
  float: left;
}
.letgs div {
  font-size: 15px;
  line-height: 40px;
}
.grid-content {
  float: left;
  margin-right: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 33%;
}
</style>