<template>
  <div id="offReport">
    <div class="header">
      <div class="headerTitle">
        <span>设备列表</span>
      </div>
    </div>
    <div class="select">
      <span>归属客户：</span>
      <el-select v-model="search.tercept"
                 placeholder="请选择">
        <el-option>未选择</el-option>
        <el-option v-for="item in affiliation"
                   :key="item.id"
                   :label="item.type"
                   :value="item.type"></el-option>
      </el-select>
      <span>设备编号：</span>
      <el-input v-model="search.id"
                clearable
                placeholder="请输入内容"></el-input>
      <span>在线离线：</span>
      <el-select v-model="search.onoffline"
                 placeholder="请选择">
        <el-option>未选择</el-option>
        <el-option v-for="item in online"
                   :key="item.id"
                   :label="item.type"
                   :value="item.type"></el-option>
      </el-select>
    </div>
    <div class="select">
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-plus"
                 @click='searchClick'>查询</el-button>
      <el-upload class="upload-demo demoele"
                 action=""
                 :before-upload="uploadFile"
                 :on-success="handleAvatarSuccess"
                 multiple
                 :limit="1"
                 :on-exceed="handleExceed">
        <el-button class="oyButton"
                   type="success"
                   icon="el-icon-download">导入</el-button>
        <!-- <el-button size="small" type="primary">导入</el-button> -->
      </el-upload>
    </div>
    <el-dialog title="查看"
               :visible.sync="universal.look">
      <div>
        <el-table class='oyTable'
                  :data="idtable1"
                  style="width: 100%">
          <!-- <el-table-column type="selection" width="55" class="selection" prop='uuid' :selectable='checkboxInit' @selection-change="changeFun"></el-table-column> -->
          <el-table-column type="index"
                           :index="indexMethod"
                           label="序号"
                           width="50"> </el-table-column>
          <el-table-column label="用户名">
            <template slot-scope="scope">
              <el-popover trigger="hover"
                          placement="top">
                <p class="TsMaxWidth">{{scope.row.number}}</p>
                <div slot="reference"
                     class="name-wrapper">
                  <div class="overflowHide">{{scope.row.number}}</div>
                </div>
              </el-popover>
            </template>
          </el-table-column>

          <el-table-column label="手机号">
            <template slot-scope="scope">
              <el-popover trigger="hover"
                          placement="top">
                <p class="TsMaxWidth">{{ scope.row.deviceld }}</p>
                <div slot="reference"
                     class="name-wrapper">
                  <div class="overflowHide">{{scope.row.deviceld}}</div>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="故障名称">
            <template slot-scope="scope">
              <el-popover trigger="hover"
                          placement="top">
                <p class="TsMaxWidth">{{ scope.row.protocol }}</p>
                <div slot="reference"
                     class="name-wrapper">
                  <div class="overflowHide">{{scope.row.protocol}}</div>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="维修时间">
            <template slot-scope="scope">
              <el-popover trigger="hover"
                          placement="top">
                <p class="TsMaxWidth">{{ scope.row.sim }}</p>
                <div slot="reference"
                     class="name-wrapper">
                  <div class="overflowHide">{{scope.row.sim}}</div>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="来源">
            <template slot-scope="scope">
              <el-popover trigger="hover"
                          placement="top">
                <p class="TsMaxWidth">{{ scope.row.date.time }}</p>
                <div slot="reference"
                     class="name-wrapper">
                  <div class="overflowHide">{{scope.row.date.time}}</div>
                </div>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-dialog>
    <div class="Content">
      <el-table class="oyTable"
                :data="tableData"
                style="width: 100%">
        <el-table-column type="index"
                         :index="indexMethod"
                         label="序号"
                         width="50"> </el-table-column>

        <el-table-column label="归属客户"
                         width="120">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.placeBe }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.placeBe }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="设备类型">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.modes }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.modes }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="设备型号">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.alias }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.alias }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="设备编号">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.id }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.id }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="安装地址">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">杭州市江干区越秀维多利中心B幢7层</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">杭州市江干区越秀维多利中心B幢7层</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="设备状态">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.date }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.date }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="在线离线">
          <template slot-scope="scope">
            <!-- <div class="overflowHide">{{scope.row.onoffline}}MB</div> -->
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{scope.row.onoffline}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{scope.row.onoffline}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="电量">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.type }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.type }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="安装时间">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.hdate.time }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.hdate.time }}</div>
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
                        content="历史记录"
                        placement="top">
              <i class="icon-change el-icon-time"
                 @click="changeShow(scope.row)"></i>
            </el-tooltip>

            <el-tooltip class="item"
                        effect="dark"
                        content="地图定位"
                        placement="top">
              <i class="icon-delete el-icon-location"
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
    <div id="allmap"></div>
  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
export default {
  name: 'equipmentList',
  data () {
    return {
      address: 1,
      tableData: this.$store.state.tableData,
      paging: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      universal: {
        look: false
      },
      search: {
        tercept: '',
        onoffline: '',
        id: ''
      },
      online: [
        {
          value: 1,
          type: '在线'
        },
        {
          value: 2,
          type: '离线'
        }
      ],
      affiliation: [
        {
          value: 1,
          type: '美旅'
        },
        {
          value: 2,
          type: '博实'
        },
        {
          value: 3,
          type: '任马停'
        }
      ]
    }
  },
  mounted: function () {
    document.title = this.$route.meta.title;
    this.map = new BMap.Map("allmap");
    this.geoc = new BMap.Geocoder();
    this.searchClick();
    // this.address = 0;
    // let data = {
    // 	Page:this.paging.page,
    // 	PageSize:this.paging.pageSize,
    // };
    // this.$store.dispatch('sc',data)
    // this.tableData=message.data.results;
    console.log(this.randomNum())
  },
  methods: {
    uploadFile (excelFile) {
      let that = this;
      var formData = new FormData();
      formData.append('excelFile', excelFile);
      var excelFile = formData;
      console.log(excelFile);
      axios({
        method: 'post',
        url: this.$store.state.http + '/viccid/importExcels',
        data: excelFile
      }).then(function (message) {
        console.log(message);
      })
    },
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
    addClick () { },
    deleteClick (row) { },
    changeShow (row) {
      let data = {
        page: this.paging.page,
        pageSize: this.paging.pageSize
      }
      this.universal.look = true;
      axios({
        method: 'post',
        url: this.$store.state.http + '/repMsg/repMsgHistory',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message.data)
        if (message.data.resCode == 0) {

        }
      })
    },
    changeClick () { },
    // searchClick(){
    // 	if(this.search.positionerId){
    // 		data.cardnumber = this.search.positionerId
    // 	}
    // 	let data={
    // 		Page:this.paging.page,
    // 		PageSize:this.paging.pageSize,
    // 	}
    // 	this.$store.dispatch('sc',data)
    // }
    searchClick () {
      let data = {
        page: this.paging.page,
        pageSize: this.paging.pageSize,
        userId: localStorage.getItem('userId'),
        dealer: localStorage.getItem('dealer')
      };
      // if(localStorage.getItem('userId')=='SURIOT'){
      // 	data = {
      // 	page:this.paging.page,
      // 	pageSize:this.paging.pageSize
      //    };
      // }else{
      // 	data = {
      // 	page:this.paging.page,
      // 	pageSize:this.paging.pageSize,
      // 	userId:localStorage.getItem('userId')
      //    };
      // }
      this.address = 0;
      // let data = {
      // 	userId: localStorage.getItem('userId'),
      // 	dealerCode:localStorage.getItem('dealerId'),
      // 	page:this.paging.page,
      // 	pageSize:this.paging.pageSize,
      // };
      if (this.search.tercept) {
        if (this.search.tercept == '美旅') {
          data.tercept = '01'
        } else if (this.search.tercept == '博实') {
          data.tercept = '02'
        } else if (this.search.tercept == '任马停') {
          data.tercept = '03'
        }
        // data.tercept = this.search.tercept
      }
      if (this.search.onoffline) {
        if (this.search.onoffline == '离线') {
          this.search.onoffline = 0
        } else if (this.search.onoffline == '在线') {
          this.search.onoffline = 1
        }
      }
      if (this.search.id) {
        data.id = this.search.id
      }
      console.log(data)
      let that = this;
      that.tableData = [];
      axios({
        method: 'post',
        url: this.$store.state.http + '/parking/list',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message.data)
        if (message.data.resCode == 0) {

          for (let i = 0; i < message.data.results.length; i++) {
            message.data.results[i].hdate.time = that.common.timeToDate(JSON.stringify(message.data.results[i].hdate.time).slice(0, 10))
          }
          for (let i = 0; i < message.data.results.length; i++) {
            if (message.data.results[i].onoffline == 1) {
              message.data.results[i].onoffline = '在线'
            } else if (message.data.results[i].onoffline == 0) {
              message.data.results[i].onoffline = '离线'
            }
            if (message.data.results[i].date == 1) {
              message.data.results[i].date = '下降'
            } else if (message.data.results[i].date == 0) {
              message.data.results[i].date = '上升'
            }
          }
          that.paging.total = message.data.count;
          that.tableData = message.data.results;
          console.log(that.tableData)
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
</style>