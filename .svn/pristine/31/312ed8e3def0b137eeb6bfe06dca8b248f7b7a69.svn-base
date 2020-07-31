<template>
  <div id="PSTlist">
    <div class="header">
      <div class="headerTitle">
        <span>个人微信分配</span>
      </div>
    </div>
    <div class="select">
      <!-- <span>分组：</span> -->
      <!--<el-input v-model="store.controName" clearable placeholder="请输入内容"></el-input>-->
      <!-- <el-select v-model="search.conGroup" placeholder="请选择">
				<el-option label="未选择" value="0"></el-option>
		    	<el-option v-for="(item,index) in this.$store.state.conGroupList" :key="item.groupId" :label="item.gropuName" :value="item.groupId"></el-option>
			</el-select> -->
      <!-- <span>设备ID：</span>
			<el-input v-model="search.Id" clearable placeholder="请输入内容"></el-input> -->
      <span>角色类型：</span>
      <el-input v-model="search.modelstyle"
                clearable
                placeholder="请输入内容"></el-input>
      <span>手机号码：</span>
      <el-input v-model="search.modelphoto"
                clearable
                placeholder="请输入内容"></el-input>
      <!-- <span>接入协议：</span>
			<el-input v-model="search.protocol" clearable placeholder="请输入内容"></el-input>
			<span>创建时间：</span>
			<el-input v-model="search.create_time" clearable placeholder="请输入内容"></el-input>
			<span>鉴权信息：</span>
			<el-input v-model="search.authInfo" clearable placeholder="请输入内容"></el-input><br> -->

      <!--<span>在线：</span>
			<el-select v-model="search.conGroup" placeholder="请选择">
				<el-option label="请选择" value="0"></el-option>
				<el-option label="在线" value="1"></el-option>
				<el-option label="离线" value="2"></el-option>
			</el-select>-->
    </div>
    <!-- <div class="select">

			<span>设备描述：</span>
			<el-input v-model="search.desc" clearable placeholder="请输入内容"></el-input>
			<span>设备经度：</span>
			<el-input v-model="search.lon" clearable placeholder="请输入内容"></el-input>
			<span>设备纬度：</span>
			<el-input v-model="search.lat" clearable placeholder="请输入内容"></el-input>
		</div> -->
    <div class="select">
      <!--<el-button class="oyButton" type="success" icon="el-icon-plus"  @click="add = true">新增</el-button>-->
      <!-- <el-button class="oyButton" type="success" icon="el-icon-plus"  @click="conGroup = true">分组</el-button> -->
      <el-button class="oyButton"
                 type="success"
                 icon="el-icon-search"
                 @click='searchClick'>查询</el-button>
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-plus"
                 @click='universal.add = true'>添加</el-button>
     <el-upload class="upload-demo demoele"
                 action=""
                 :before-upload="uploadFile"
                 multiple
                 :limit="1"
                 v-if="typeValue">
        <el-button class="oyButton"
                   type="success"
                   icon="el-icon-download"
                  >导入</el-button>
	<el-button class="oyButton"
	          icon="el-icon-download"
	          type="success"
	          @click="exportDown">模板</el-button>
      </el-upload>
    </div>
    <el-dialog title="新增"
               :visible.sync="universal.add">
      <div>
        <!-- <span class="spanClass">设备ID：</span>
				<el-input v-model="add1.Id" clearable placeholder="请输入内容"></el-input><br /><br /> -->

        <!-- <span class="spanClass">账户名：</span> -->

        <!-- <span class="spanClass">手机号码：</span> -->
        <span class="spanClassT">
          <span class="aKey">*</span>手机号码：</span>
        <el-input v-model="add1.weChatUsePhone"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />

        <!-- <span class="spanClass">用户密码：</span> -->
        <span class="spanClassT">
          <span class="aKey">*</span>用户密码：</span>
        <el-input v-model="add1.weChatUsePassword"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />

        <!-- <span class="spanClass">用户姓名：</span> -->
        <span class="spanClassT">
          <span class="aKey">*</span>账户名称：</span>
        <el-input v-model="add1.weChatUseName"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />
        <span class="spanClassT">
          <span class="aKey">*</span>用户姓名：</span>
        <el-input v-model="add1.weChatFullName"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />

        <!-- <span class="spanClass">角色类型：</span> -->
        <span class="spanClassT">
          <span class="aKey">*</span>角色类型：</span>
        <el-input v-model="add1.weChatType"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />

        <!-- <span class="spanClass">设备型号：</span>
				<el-input v-model="add1.deviceId" clearable placeholder="请输入内容"></el-input><br /><br /> -->
        <!-- <span class="spanClass">管理员分配：</span>
				<! <el-input v-model="add1.allot" clearable placeholder="请输入内容"></el-input><br /><br /> -->
        <!-- <el-select  v-model="level" placeholder="请选择">
					<el-option v-for="item in levelList" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select> -->

        <!-- <el-input class="textareaWidth" type="textarea" :rows="5" v-model="add.roleDescribe" clearable placeholder="请输入内容"></el-input> -->
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
    <el-dialog title="分配"
               :visible.sync="universal.allot">
      <div>
        <span class="spanClass">账户名：</span>
        <el-input v-model="allot1.weChatFullName"
                  clearable
                  placeholder="请输入内容"
                  :disabled="true"></el-input><br /><br />

        <span class="spanClass">手机号码：</span>
        <el-input v-model="allot1.weChatUsePhone"
                  clearable
                  placeholder="请输入内容"
                  :disabled="true"></el-input><br /><br />

        <span class="spanClass">用户密码：</span>
        <el-input v-model="allot1.weChatUsePassword"
                  clearable
                  placeholder="请输入内容"
                  :disabled="true"></el-input><br /><br />

        <!-- <span class="spanClass">创建时间：</span>
				<el-input v-model="allot1.createTime" clearable placeholder="请输入内容" disabled="true"></el-input><br /><br /> -->

        <span class="spanClass">用户姓名：</span>
        <el-input v-model="allot1.weChatUseName"
                  clearable
                  placeholder="请输入内容"
                  :disabled="true"></el-input><br /><br />

        <span class="spanClass">角色类型：</span>
        <el-input v-model="allot1.weChatType"
                  clearable
                  placeholder="请输入内容"
                  :disabled="true"></el-input><br /><br />

        <!-- <span class="spanClass">设备ID：</span> -->
        <span class="spanClassT spanClassTL">
          <span class="aKey">*</span>设备SN码：</span>
        <!-- <el-input v-model="add1.allot" clearable placeholder="请输入内容"></el-input><br /><br /> -->
        <el-input v-model="allot1.weChatUseNames"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />

        <!-- <el-input class="textareaWidth" type="textarea" :rows="5" v-model="add.roleDescribe" clearable placeholder="请输入内容"></el-input> -->
      </div>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="universal.allot = false">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="allotchange(allot1)">分配</el-button>
      </div>
    </el-dialog>
    <el-dialog title="修改"
               :visible.sync="universal.change">
      <div>
        <!-- <span class="spanClass">账户名：</span> -->
        <span class="spanClassT">
          <span class="aKey">*</span>账户名：</span>
        <el-input v-model="change.weChatUseName"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />

        <!-- <span class="spanClass">手机号码：</span> -->
        <span class="spanClassT">
          <span class="aKey">*</span>手机号码：</span>
        <el-input v-model="change.weChatUsePhone"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />

        <!-- <span class="spanClass">用户密码：</span> -->
        <span class="spanClassT">
          <span class="aKey">*</span>用户密码：</span>
        <el-input v-model="change.weChatUsePassword"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />

        <!-- <span class="spanClass">用户姓名：</span> -->
        <span class="spanClassT">
          <span class="aKey">*</span>用户姓名：</span>
        <el-input v-model="change.weChatFullName"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />

        <!-- <span class="spanClass">角色类型：</span> -->
        <span class="spanClassT">
          <span class="aKey">*</span>角色类型：</span>
        <el-input v-model="change.weChatType"
                  clearable
                  placeholder="请输入内容"></el-input><br /><br />
        <!-- <el-input class="textareaWidth" type="textarea" :rows="5" v-model="add.roleDescribe" clearable placeholder="请输入内容"></el-input> -->
      </div>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="hideclick">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="changeclick(change)">修改</el-button>
      </div>
    </el-dialog>
    <el-dialog title="查看"
               :visible.sync="universal.look">
      <div>
        <el-table class='oyTable'
                  :data="li"
                  style="width: 100%;height:400px;overflow:auto">
          <el-table-column type="index"
                           :index="indexMethod"
                           label="序号"> </el-table-column>
          <el-table-column label="自定义编号"
                           width="">
            <template slot-scope="scope">
              <el-popover trigger="hover"
                          placement="top">
                <p class="TsMaxWidth">{{ scope.row.inId}}</p>
                <div slot="reference"
                     class="name-wrapper">
                  <div class="overflowHide">{{ scope.row.inId}}</div>
                </div>
              </el-popover>
            </template>

          </el-table-column>
          <el-table-column label="设备SN码"
                           width="">
            <template slot-scope="scope">
              <el-popover trigger="hover"
                          placement="top">
                <p class="TsMaxWidth">{{ scope.row.sn}}</p>
                <div slot="reference"
                     class="name-wrapper">
                  <div class="overflowHide">{{ scope.row.sn}}</div>
                </div>
              </el-popover>
            </template>

          </el-table-column>

          <el-table-column prop=""
                           label="操作">
            <template slot-scope="scope">
              <!--<el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-search" @click="seeClick(scope.row)" ></i>
						</el-tooltip>-->

              <el-tooltip class="item"
                          effect="dark"
                          content="删除"
                          placement="top">
                <i class="icon-delete el-icon-delete"
                   @click="deleteChild(scope.row)"></i>
              </el-tooltip>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-dialog>

    <div class="Content">
      <el-table class='oyTable'
                :data="tableData"
                style="width: 100%">
        <!-- <el-table-column type="index" :index="indexMethod" label="序号" width="100"> </el-table-column> -->

        <el-table-column label="账号名称">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{scope.row.weChatUseName }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.weChatUseName }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="账号密码">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{scope.row.weChatUsePassword}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{scope.row.weChatUsePassword}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="手机号码">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.weChatUsePhone }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{scope.row.weChatUsePhone}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <!-- <el-table-column label="设备坐标" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{scope.row.interval}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{scope.row.interval}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column> -->

        <el-table-column label="用户姓名">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{scope.row.weChatFullName}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{scope.row.weChatFullName}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="角色类型">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{scope.row.weChatType}}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{scope.row.weChatType}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column prop=""
                         label="操作"
                         width=""
                         >
          <template slot-scope="scope">
            <!--<el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-search" @click="seeClick(scope.row)" ></i>
						</el-tooltip>-->

            <el-tooltip class="item"
                        effect="dark"
                        content="修改"
                        placement="top">
              <i class="icon-change el-icon-edit"
                 @click="changeshow(scope.row)"></i>
            </el-tooltip>

            <el-tooltip v-if="scope.row.status==1"
                        class="item"
                        effect="dark"
                        content="分配设备"
                        placement="top">
              <i class="icon-unclick el-icon-menu"></i>
            </el-tooltip>

            <el-tooltip v-else
                        class="item"
                        effect="dark"
                        content="分配设备"
                        placement="top">
              <i class="icon-menu el-icon-menu"
                 @click="allot(scope.row)"></i>
            </el-tooltip>

            <el-tooltip class="item"
                        effect="dark"
                        content="删除"
                        placement="top">
              <i class="icon-delete el-icon-delete"
                 @click="deleteClick(scope.row)"></i>
            </el-tooltip>

            <!-- <el-button icon="el-icon-search" circle></el-button> -->
            <el-tooltip class="item"
                        effect="dark"
                        content="查看"
                        placement="top">
              <i class="icon-See el-icon-search"
                 @click="changeGroupShow(scope.row)"></i>
            </el-tooltip>

          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- <el-dialog title="修改分组" :visible.sync="changeGroups">
			<div>
				<span class="spanClassT">组名：</span>
				<el-select v-model="changeGrouping.changeGrouping" placeholder="请选择">
					<el-option v-for="item in this.$store.state.conGroupList" :key="item.groupId" :label="item.gropuName" :value="item.groupId"></el-option></el-option>
				</el-select>
			</div>
			<div slot="footer" class="dialog-footer">
			    <el-button type="success" class="oyButton" @click="changeGroups = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="changeGroup">修改</el-button>
			</div>
		</el-dialog> -->
    <div class="footer">
      <el-pagination background
                     @current-change="handleCurrentChange"
                     @size-change="handleSizeChange"
                     :current-page.sync="paging.page"
                     :page-sizes="[1,2,3,10, 11, 12]"
                     :page-size="paging.pageSize"
                     layout="sizes, prev, pager, next, jumper,total"
                     :total="paging.total"></el-pagination>
    </div>
  </div>
</template>

<script>
import Qs from 'qs'
// import $ from 'jquery'
import axios from 'axios'
export default {
  name: 'equipmentList',
  data () {
    return {
      levelList: [],
      level: '0',
      add1: {
        weChatType: '',
        weChatFullName: '',
        weChatUsePassword: '',
        weChatUsePhone: '',
        weChatUseName: ''
      },
      li: [],
      added: "",
      send: {
        deviceId: '',
        title: '',
        timeOut: '',
        qos: ''
      },
      change: {
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
      tableData: [],
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
        createTime: '',
        personnel: '',
        status: '',
        // weChatUseNames:''
      },
      search: {
        weChatUseName: "",
        Id: "",
        start: "",
        end: "",
        modelstyle: '',
        modelphoto: ''
      },
      typeValue: false
    }
  },
  mounted: function () {
    let type = sessionStorage.getItem('type');
    console.log(type)
    let userId = sessionStorage.getItem('userId');
    if (type == '1' || type == '5') {
      this.typeValue = true
    } else {
      this.typeValue = false;
    }
    this.searchClick();
    // this.$store.dispatch('group');
    document.title = this.$route.meta.title;
    if (sessionStorage.getItem("dealer") == '123') {
      this.added = 1
    }
  },
  methods: {
    hideclick () {
      this.universal.change = false;
    },
    indexMethod (index) {
      return index + (this.paging.page - 1) * this.paging.pageSize + 1;
    },
    handleSizeChange (val) {
      this.paging.pageSize = val;
      console.log(this.paging.pageSize)
      // this.searchClick();
    },
    exportDown(){
      window.open("http://39.104.102.213:8796/att/downloadMobiletemp")
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
      this.searchClick();
    },
    addClick () {
      if (this.add1.weChatType == '') {
        this.$message.error('带*的数据不能为空哦！');
        return false;
      }
      if (this.add1.weChatFullName == '') {
        this.$message.error('带*的数据不能为空哦！');
        return false;
      }
      if (this.add1.weChatUsePassword == '') {
        this.$message.error('带*的数据不能为空哦！');
        return false;
      }
      if (this.add1.weChatUsePhone == '') {
        this.$message.error('带*的数据不能为空哦！');
        return false;
      }
      if (this.add1.weChatUseName == '') {
        this.$message.error('带*的数据不能为空哦！');
        return false;
      }
      let regPhone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
      if (!regPhone.test(this.add1.weChatUsePhone)) {
        this.$message.error('手机号码格式有误');
        return false;
      }
      let data = this.add1;
      let that = this;
      data.dealer = sessionStorage.getItem("dealer");
      if (data.dealer == 0) {
        data.dealer = sessionStorage.getItem('orderDealers')
      }
      console.log(data);
      axios({
        method: 'post',
        dataType: 'jsonp',
        url: this.$store.state.http + '/wechatUser/add',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message)
        console.log((message.data.errMsg).split(":")[1])
        localStorage.setItem('id', (message.data.errMsg).split(":")[1])
        if (message.data.resCode == 0) {
          that.searchClick();
          // that.$store.dispatch('group');
          that.$message({
            message: '添加成功',
            type: 'success'
          });
        } else if (message.data.resCode == 1) {
          that.$message({
            message: message.data.errMsg,
            type: 'error'
          })
        }
      })
      that.universal.add = false;
      that.add1.weChatType = ''
      that.add1.weChatFullName = ''
      that.add1.weChatUsePassword = ''
      that.add1.weChatUsePhone = ''
      that.add1.weChatUseName = ''
    },
    deleteChild (row) {
      console.log(row)
      let that = this;
      // console.log(localStorage.getItem('id'))
      this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(row)
        axios({
          method: 'post',
          url: this.$store.state.http + '/wechatUser/removeWechatDev',
          data: Qs.stringify({
            id: row.id,
            // deviceId:row.deviceId,
            // weChatUsePhone:sessionStorage.getItem("weChatUsePhone")
          })
        }).then(function (message) {
          console.log(message)
          if (message.data.resCode == 0) {
            console.log(1111111111111111111)
            that.changeGroupShow(row)
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
    deleteClick (row) {
      let that = this;
      // console.log(localStorage.getItem('id'))
      this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(row)
        axios({
          method: 'post',
          url: this.$store.state.http + '/wechatUser/remove',
          data: Qs.stringify({
            id: row.id
          })
        }).then(function (message) {
          console.log(message)
          if (message.data.resCode == 0) {
            that.searchClick();
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
    changeshow (row) {
      this.universal.change = true;
      this.change = Object.assign({}, row);
      console.log(row)
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
      let regPhone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
      if (!regPhone.test(this.change.weChatUsePhone)) {
        this.$message.error('手机号码格式有误');
        return false;
      }
      // if (this.change.weChatUseName.length < 5 || this.change.weChatUseName.length > 12) {
      //   this.$message.error('用户账号的长度为5-12位');
      //   return false;
      // }
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
    order (row) {
      this.universal.send = true;
      this.send = row;
      // 	 axios({
      // 		method:"post",
      // 		url:'http://192.168.2.123:8080/SendCmds/QueryCmdsStatus',
      // 		data:Qs.stringify({
      // 			cmdsId:mess.data.cmd_uuid
      // 		})
      // 	}).then(function(message){
      // 		console.log(message)


      // })

      // axios({
      // 		method:"post",
      // 		url:'http://192.168.2.123:8080/SendCmds/conditionFind',
      // 		data:Qs.stringify({
      // 			devId:row.deviceId
      // 		})
      // 	}).then(function(message){
      // 		console.log(message)
      // })

    },
    // searchClick(){
    // 	let data = {
    // 		pageNum:this.paging.page,
    // 		pageSize:this.paging.pageSize
    // 	};
    // 	// data.deviceId=row.deviceId;
    // 	data.deviceType=this.search.deviceType;
    // 	data.dealer=this.search.dealer
    // 	// data.deviceId=this.search.deviceId;
    // 	data.dealer=sessionStorage.getItem("dealer")
    // 	let that = this;
    // 	console.log(data);
    // 	that.tableData = [];
    // 	that.timeCrea=[];
    // 	console.log(that.tableData)
    // 	axios({
    // 		method:'post',
    // 		url:'http://192.168.2.123:8796/devices/assignFind ',
    // 		data:Qs.stringify(data)
    // 	}).then(function(message){
    // 		console.log(message)
    // 		if(message.data.resCode==0){
    // 			console.log(message.data.total)
    // 			for(var i=0;i<message.data.total.length;i++){
    // 				message.data.total[i].createTime.time=timestampToTime(message.data.total[i].createTime.time)
    // 			}

    // 			that.tableData= message.data.total;
    // 			that.paging.total = message.data.count;
    // 			// console.log(that.timeCrea)
    // 		}else{
    // 			that.tableData = [];
    // 			that.paging.total = 0;
    // 		}
    // 	})
    // 	function timestampToTime(timestamp) {
    // 		var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    // 		var Y = date.getFullYear() + '-';
    // 		var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    // 		var D = date.getDate() + ' ';
    // 		var h = date.getHours() + ':';
    // 		var m = date.getMinutes() + ':';
    // 		var s = date.getSeconds();
    // 		return Y+M+D+h+m+s;
    // 	}
    // },
    // reg(){
    // 	let data={
    // 		register_code:'123'
    // 	};
    // 	axios({
    // 		method:"post",
    // 		url:'http://192.168.2.123:8080/devices/RegisterDevice',
    // 		data:Qs.stringify(data)
    // 	}).then(function(message){
    // 		console.log(message)
    // 	})
    // },

    // seeClick(row){
    // 	let that = this;
    // 	this.see = true;
    // 	axios({
    // 		method:'post',
    // 		url:this.$store.state.http +'/concode/selByConcocel',
    // 		data:Qs.stringify({
    // 			conId:row.conId
    // 		})
    // 	}).then(function(message){
    // 		console.log(message.data)
    // 		if(message.data.resCode==0){
    // 			that.seeInfo = message.data.result;
    // 		}else{
    // 			that.seeInfo = {
    // 				carBrand:'',//车牌
    // 				installDate:'',// 安装日期
    // 				carType:'',// 车的类型
    // 				carContact:'',// 联系人
    // 				carPhone:'',// 联系人手机号
    // 				carEngine:'',// 发动机
    // 				installName:'',// 安装人员表
    // 				installPhone:'',// 安装人手机号
    // 				carVin:'',// 车架号(VIN)
    // 				carDriveNumber:'',// 驾驶证号
    // 				carRiskStart:'',// 保险开始日期
    // 				carRiskEnd:'',// 保险结束日期


    // 				contrNumber:'',// 合同编号
    // 				contrAddress:'',// 家庭住址
    // 				contrType:'',// 类型
    // 				contrName:'',// 还款人名字
    // 				contrNames:'',// 姓名1
    // 				contrPhones:'',// 手机号1
    // 				contrNamey:'',// 姓名2
    // 				contrPhoney:'',// 手机号2
    // 				companAddress:'',// 公司地址
    // 				contrStarDate:'',// 开始时间
    // 				contrEndDate:'',// 结束时间
    // 				contrDate:''// 还款日
    // 			};
    // 		}
    // 	})
    // 	console.log(row)
    // },
    uploadFile (file) {
      let that = this;
      var formData = new FormData();
      formData.append('file', file);
      var file = formData;

      axios({
        method: 'post',
        url: this.$store.state.http + '/wechatUser/import',
        data: file
      }).then(function (message) {
        if(message.data.resCode=='0'){
          that.$message({
            message:'总共分配：'+message.data.total+'条，'+'成功：'+message.data.success+'条，'+'失败：'+message.data.failure+'条',
            type: 'success'
          });
        }else{
          that.$message({
            message: '批量分配失败',
            type: 'error'
          });
        }
        that.searchClick()
      })
    },
    allotchange (row) {
      if (this.allot1.weChatUseNames == undefined) {
        this.$message.error('带*的数据不能为空哦！');
        return false;
      }
      // console.log(row)
      axios({
        method: 'post',
        url: this.$store.state.http + "/devices/conditionFind",
        data: Qs.stringify({
          pageNum: 1,
          pageSize: 100,
          status: 0,
          userId: sessionStorage.getItem('userId'),
          dealer: sessionStorage.getItem('dealer'),
          devParaSn: this.allot1.weChatUseNames
        })
      }).then(res => {
        if (res.data.resCode == 0) {
          let that = this;

          axios({
            method: 'post',
            url: that.$store.state.http + '/wechatUser/addWechatDev',
            data: Qs.stringify({
              deviceId: res.data.result[0].deviceId,
              weChatUsePhone: row.weChatUsePhone
            })
          }).then(function (message) {
            console.log(message);
            that.universal.allot = false;
            that.allot1.weChatUseNames = ""
            if (message.data.resCode == 0) {
              that.searchClick();
              that.$message({
                message: '分配成功',
                type: 'success'
              });
            } else if (message.data.resCode == 1) {
              that.$message({
                message: '请勿重复添加或添加有效设备',
                type: 'error'
              });
            }
          })

        }
      })



    },
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
      this.look = row;
      this.universal.look = true;
      let that = this;
      let data = {
        weChatUsePhone: row.weChatUsePhone
      }
      console.log(data)
      sessionStorage.setItem("weChatUsePhone", row.weChatUsePhone)
      axios({
        method: "post",
        url: this.$store.state.http + '/wechatUser/findDevbyUser',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message)
        // message.data.s.forEach(a => {
        //   axios({
        //     method: 'post',
        //     url: that.$store.state.http + '/devices/conditionFind',
        //     data: Qs.stringify({
        //       pageNum: 1,
        //       pageSize: 10,
        //       status: 0,
        //       devId: a.deviceId,
        //       userId: sessionStorage.getItem('userId'),
        //       dealer: sessionStorage.getItem('dealer')
        //     })
        //   }).then(function (message) {
        //     a.em = message.data.result[0].devParaSn
        //   })
        // })
        that.li = message.data.s
        for (let i = 0; i < message.data.s.length; i++) {
          let iValue = i;
          let data = {
            pageNum: 1,
            pageSize: 10,
            status: 0,
            devId: message.data.s[i].deviceId,
            userId: sessionStorage.getItem('userId'),
            dealer: sessionStorage.getItem('dealer')
          }
          axios({
            method: 'post',
            url: that.$store.state.http + '/devices/conditionFind',
            data: Qs.stringify(data)
          }).then(function (message) {
            Vue.set(that.li[i], 'sn', message.data.result[0].devParaSn)
            Vue.set(that.li[i], 'inId', message.data.result[0].end)
          })
        }
        console.log(that.li);
      })
    },
    // changeClick(){},
    searchClick () {
      let data = {
        pageNum: this.paging.page,
        pageSize: this.paging.pageSize,
        dealer: sessionStorage.getItem("dealer")
      };
      if (data.dealer == 0) {
        data.dealer = sessionStorage.getItem('orderDealers')
      }
      data.weChatType = this.search.modelstyle
      data.userId = sessionStorage.getItem('userId')
      data.weChatUsePhone = this.search.modelphoto
      let that = this;
      that.tableData = [];
      console.log(data);
      axios({
        method: 'post',
        url: this.$store.state.http + '/wechatUser/find',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message)
        if (message.data.resCode == 0) {
          that.tableData = message.data.content;
          that.paging.total = message.data.total;
        } else {
          that.tableData = [];
          that.paging.total = 0;
        }
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
.demoele{
  float:left
}
</style>
