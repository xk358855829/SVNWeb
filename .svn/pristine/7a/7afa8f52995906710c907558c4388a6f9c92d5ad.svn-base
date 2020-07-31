<template>
  <div id="faultList">
    <div class="header">
      <div class="headerTitle">
        <span>车位管理</span>
      </div>
    </div>
    <div class="select">
      <span>车位名称：</span>
      <el-input v-model="search.devId"
                clearable
                placeholder="请输入内容"></el-input>
      <span>在线状态：</span>
      <el-select v-model="search.fauMode"
                 placeholder="请选择">
        <el-option value="">未选择</el-option>
        <el-option v-for="item in options"
                   :key="item.id"
                   :label="item.type"
                   :value="item.id"></el-option>
      </el-select>
      <span>升降状态：</span>
      <el-select v-model="search.fauModes"
                 placeholder="请选择">
        <el-option value="">未选择</el-option>
        <el-option v-for="item in upstatus"
                   :key="item.id"
                   :label="item.type"
                   :value="item.id"></el-option>
      </el-select>
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

        <el-table-column label="车位名称"
                         width="">
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

        <el-table-column label="租用状态"
                         width="">
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

        <el-table-column label="升降状态"
                         width="">
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

        <el-table-column label="关联停车场"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.openid}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.openid }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="关联设备"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.id}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.id }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="在线状态"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.onoffline}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.onoffline }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="是否包月"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.monType}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.monType }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="电量"
                         width="">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.type}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.type }}</div>
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

            <!-- <el-tooltip  class="item" effect="dark" content="地图定位" placement="top">
    						<i class="icon-delete el-icon-location" @click="mapclick(scope.row)"></i>
						</el-tooltip> -->
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
        <span class="spanClass">设备ID：</span>
        <el-input :disabled="true"
                  v-model="change.id"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />

        <span class="spanClass">车位名称：</span>
        <el-input :disabled="true"
                  v-model="change.alias"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />

        <span class="spanClass">关联停车场：</span>
        <el-select v-model="search.fauModecar"
                   placeholder="请选择">
          <el-option v-for="item in relevance"
                     :key="item.id"
                     :label="item.type"
                     :value="item.id"></el-option>
        </el-select><br /><br />
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
export default {
  name: 'equipmentList',
  data () {
    return {
      obj: [],
      relevance: [{
        value: 0,
        type: '江河美停车场'
      }, {
        value: 1,
        type: '中海钱江湾'
      }, {
        value: 2,
        type: '越秀维多利中心'
      }, {
        value: 3,
        type: '泊寓文一社区'
      }],
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
        fauMode: ''
      },
      add: {
        fauMode: '',
        fauName: '',
        fauSolve: '',
        fauCode: '',
        devId: ''
      },
      change: {
        alias: '',
        id: ''
      },
      upstatus: [
        {
          id: 1,
          type: '上升'
        },
        {
          id: 2,
          type: '下降'
        }
      ],
      options: [
        {
          id: 1,
          type: '在线'
        },
        {
          id: 2,
          type: '离线'
        }
      ]
    }
  },
  mounted: function () {
    document.title = this.$route.meta.title;
    this.searchClick();
    // this.downList();
    // this.common.login()
  },
  methods: {
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
          url: this.$store.state.http + '/Parking/del',
          data: Qs.stringify({
            id: row.id
          })
        }).then(function (message) {
          console.log(message.data)
          if (message.data.resCode == 0) {
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
    changeClick (row) {
      console.log(row)
      let data = {
        id: row.id,
        openid: this.change.openid
      }
      let that = this;
      axios({
        method: 'post',
        url: this.$store.state.http + '/Parking/update',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message.data)
        if (message.data.resCode == 0) {
          that.searchClick()
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
    searchClick () {
      let data = {
        page: this.paging.page,
        pageSize: this.paging.pageSize,
        userId: localStorage.getItem('userId'),
        dealer: localStorage.getItem('dealer')
      };
      if (this.search.devId) {
        data.devId = this.search.devId
      }
      if (this.search.fauMode) {
        data.fauCode = this.options[this.search.fauMode].type
      }
      console.log(data)
      data.user = sessionStorage.getItem('user')
      let that = this;
      that.tableData = [];
      axios({
        method: 'post',
        url: this.$store.state.http + '/Parking/list',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message.data)
        if (message.data.resCode == 0) {
          // for(var i=0;i<message.data.results.length;i++){
          // 	message.data.result[i].date=that.common.timeToDate(JSON.stringify(message.data.results[i].date.time).slice(0,10))

          // }
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
            if (message.data.results[i].monType == 0) {
              message.data.results[i].monType = '是'
            } else if (message.data.results[i].monType == 1) {
              message.data.results[i].monType = '否'
            }
          }
          that.paging.total = message.data.count;
          that.tableData = message.data.results;

        } else {
          that.tableData = [];
        }
      })
    },
    // digitize(n) {  //接受一个number类参数，拆分成一个数组并返回
    // var str = n + "";    //加上空字符中，把接收的参数转换为字符串
    // var arr = [];         //声明结果空数组，稍后返回
    // str.split("").forEach(function (item) {   //调用split，以空字符串为分隔符切割字符串并返回数组，在数组上调用forEach方法
    //     arr.push(parseInt(item));    //对传入的每个字符用pasreInt转换为数字并压入arr数组
    // })
    // return arr;  //返回结果数组
    // },
    // abc(ccc){
    // 	var ccc=+ccc;
    // 	return ccc.toString(2)
    // },
    // abcd(a){
    // 	for(var j=a.length;j>=0;j--){
    // 		if(a[0]==1){
    // 			a[0]='设备倾倒'
    // 		}else if(a[0]==0){
    // 			a[0]=''
    // 		}
    // 		if(a[1]==1){
    // 			a[1]='应急开关破坏'
    // 		}else if(a[1]==0){
    // 			a[1]=''
    // 		}
    // 		if(a[2]==1){
    // 			a[2]='水压异常'
    // 		}else if(a[2]==0){
    // 			a[2]=''
    // 		}
    // 		if(a[3]==1){
    // 			a[3]='三轴模块异常'
    // 		}else if(a[3]==0){
    // 			a[3]=''
    // 		}
    // 		if(a[4]==1){
    // 			a[4]='温度压力传感器异常'
    // 		}else if(a[4]==0){
    // 			a[4]=''
    // 		}
    // 		if(a[5]==1){
    // 			a[5]='压力传感器初始化失败'
    // 		}else if(a[5]==0){
    // 			a[5]=''
    // 		}
    // 		if(a[6]==1){
    // 			a[6]='非法开锁'
    // 		}else if(a[6]==0){
    // 			a[6]=''
    // 		}
    // 		if(a[7]==1){
    // 			a[7]='电机异常'
    // 		}else if(a[7]==0){
    // 			a[7]=''
    // 		}
    // 		}
    // 	return a;
    // },
    // upto(value){
    // 	if(value==0){
    // 		return '设备正常'
    // 	}else{
    // 		return this.abcd(this.digitize(this.abc(value))).join().replace(/,/g, " ")
    // 	}
    // },
    // downList(){
    // 	let that = this;
    // 	axios({
    // 		method:'post',
    // 		url:this.$store.state.http +'/fault/selecByType'
    // 	}).then(function(message){
    // 		console.log(message.data)
    // 		if(message.data.resCode==0){
    // 			console.log(message.data.result)
    // 			that.options = message.data.result;
    // 		}
    // 	})
    // }
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