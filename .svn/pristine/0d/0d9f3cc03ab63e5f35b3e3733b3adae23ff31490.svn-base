<template>
  <div id="faultList">
    <div class="header">
      <div class="headerTitle">
        <router-link to="/pageHome/siteList" tag="span">站点列表</router-link>
        <router-link to="/pageHome/storeList" tag="span">店铺管理</router-link>
        <router-link class="router-link-active" to="/pageHome/storeStaff" tag="span">{{shopName}}店员管理</router-link>
        <el-button
          v-if="id!=''"
          type="success"
          class="oyButton back"
          style="float:right;"
          @click="$router.go(-1)"
        >返回</el-button>
      </div>      
    </div>
    <div class="select">
      <span v-if="id==''">店铺名称：</span>
      <el-select v-if="id==''" v-model="search.carShopId" filterable placeholder="请选择" clearable>
        <el-option>未选择</el-option>
        <el-option v-for="item in shopList" :key="item.id" :label="item.shopName" :value="item.id"></el-option>
      </el-select>
      <span>姓名：</span>
      <el-input v-model="search.name" clearable placeholder="请输入内容"></el-input>
      <!-- <br />
      <br /> -->
      <span>手机号：</span>
      <el-input v-model="search.tel" clearable placeholder="请输入内容"></el-input>
      <span>员工类型：</span>
      <el-select v-model="search.typePerson" filterable placeholder="请选择" clearable>
        <el-option>未选择</el-option>
        <el-option v-for="item in stafftype" :key="item.typePerson" :label="item.label" :value="item.typePerson"></el-option>
      </el-select>
    </div>
    <div class="select">
      <el-button
        type="success"
        class="oyButton"
        icon="el-icon-plus"
        @click="AddShow"
      >添加</el-button>
      <el-button type="success" class="oyButton" icon="el-icon-search" @click="searchClick">查询</el-button>
    </div>
    <div class="Content">
      <el-table class="oyTable" :data="tableData" style="width: 100%">
        <el-table-column type="index" :index="indexMethod" label="序号" width="100"></el-table-column>

        <el-table-column label="店铺名称" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ choseshopname(scope.row.carShopId) }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ choseshopname(scope.row.carShopId) }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="姓名" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.name }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.name }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="手机号" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.tel }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.tel }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <!-- <el-table-column label="站点类型"
                         width="">
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
        </el-table-column>-->

        <el-table-column label="员工类型" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ chosestafftype(scope.row.typePerson)}}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ chosestafftype(scope.row.typePerson) }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <!-- <el-table-column label="总精洗次数" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.delicacyAllTimes }}次</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.delicacyAllTimes }}次</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="剩余精洗次数" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.delicacyOnlyTimes }}次</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.delicacyOnlyTimes }}次</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="总普洗次数" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.commonAllTimes }}次</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.commonAllTimes }}次</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="剩余普洗次数" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.commonOnlyTimes }}次</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.commonOnlyTimes }}次</div>
              </div>
            </el-popover>
          </template>
        </el-table-column> -->
        <el-table-column prop label="操作" width="160">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="绑定洗车模式信息" placement="top">
              <i class="icon-See el-icon-search" @click="operation(scope.row)"></i>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="修改" placement="top">
    						<i class="icon-change el-icon-edit" @click="changeShow(scope.row)" ></i>
            </el-tooltip>           
            <el-tooltip class="item" effect="dark" content="删除" placement="top">
              <i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :title="universal.exit ? '修改' : '添加'" :visible.sync="universal.add">
      <div>
        <el-row>
          <el-col :span="12">            
            <span class="spanClass">
              <span class="aKey">*</span>姓名：
            </span>
            <el-input :disabled="false" v-model="addB.name" clearable placeholder="请输入联系人姓名"></el-input>
            <br />
            <br />
            <span class="spanClass">
              <span class="aKey">*</span>手机号：
            </span>
            <el-input :disabled="false" v-model="addB.tel" clearable placeholder="请输入手机号码"></el-input>
            <br />
            <br />
            <!-- <span class="spanClass">
              <span class="aKey">*</span>openId：
            </span>
            <el-input v-if="universal.exit" :disabled="true" v-model="addB.openid" clearable placeholder="请输入openId"></el-input>
            <el-input v-else="" :disabled="false" v-model="addB.openid" clearable placeholder="请输入openId"></el-input>
            <br />
            <br /> -->
          </el-col>
          <el-col :span="12">     
            <span class="spanClass" v-if="id==''">
              <span class="aKey">*</span>店铺名称：
            </span>
            <el-select v-if="id==''" v-model="addB.carShopId"
                         placeholder="请选择店铺名称">
                <el-option value="">未选择</el-option>
                <el-option v-for="nice in shopList"
                           :key="nice.id"
                           :label="nice.shopName"
                           :value="nice.id"></el-option>
            </el-select>
            <br v-if="id==''" />
            <br v-if="id==''" />
            <span class="spanClass">
                <span class="aKey">*</span>员工类型：</span>
              <el-select v-model="addB.typePerson"
                         placeholder="请选择员工类型">
                <el-option value="">未选择</el-option>
                <el-option v-for="nice in stafftype"
                           :key="nice.typePerson"
                           :label="nice.label"
                           :value="nice.typePerson"></el-option>
            </el-select><br /><br />       
            <!-- <span class="spanClass">
              <span class="aKey">*</span>总精洗次数：
            </span>
            <el-input :disabled="false" v-model="addB.delicacyAllTimes" clearable placeholder="请输入数量"></el-input>
            <br />
            <br />
            <span class="spanClass">
              <span class="aKey">*</span>剩余精洗次数：
            </span>
            <el-input :disabled="false" v-model="addB.delicacyOnlyTimes" clearable placeholder="请输入数量"></el-input>
            <br />
            <br />
            <span class="spanClass">
              <span class="aKey">*</span>总普洗次数：
            </span>
            <el-input :disabled="false" v-model="addB.commonAllTimes" clearable placeholder="请输入数量"></el-input>
            <br />
            <br />
            <span class="spanClass">
              <span class="aKey">*</span>剩余普洗次数：
            </span>
            <el-input :disabled="false" v-model="addB.commonOnlyTimes" clearable placeholder="请输入数量"></el-input>
            <br />
            <br /> -->
          </el-col>
        </el-row>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="success" class="oyButton" @click="universal.add = false">取消</el-button>
        <el-button v-if="universal.exit" style="margin-top: 12px;" type="success" class="oyButton" @click="exitClick">保存</el-button>
        <el-button v-else="" style="margin-top: 12px;" type="success" class="oyButton" @click="addClick">保存</el-button>
      </div>
    </el-dialog>
    <el-dialog title="查看" :visible.sync="universal.look">
      <div class="letg">
        <el-row>
          <el-col :span="12">
            <div class="grid-content">姓名：</div>
            {{look.name}}
          </el-col>
          <el-col :span="12">
            <div class="grid-content">员工类型：</div>
            {{chosestafftype(look.typePerson)}}
          </el-col>          
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">手机号：</div>
            {{look.tel}}
          </el-col>
          <el-col :span="12">            
            <div class="grid-content">店铺名称：</div>
            {{choseshopname(look.carShopId)}}
          </el-col>          
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">总精洗次数：</div>
            {{look.delicacyAllTimes}}次
          </el-col>
          <el-col :span="12">
            <div class="grid-content">剩余精洗次数：</div>
            <div>{{look.delicacyOnlyTimes}}次</div>
          </el-col>         
        </el-row>
        <el-row>          
          <el-col :span="12">
            <div class="grid-content">总普洗次数：</div>
            {{ look.commonAllTimes }}次
          </el-col>
          <el-col :span="12">
            <div class="grid-content">剩余普洗次数：</div>
            <div>{{look.commonOnlyTimes}}次</div>
          </el-col>
        </el-row>
        <el-row>          
          <el-col :span="24">
            <div class="grid-content" style="width:15%;">openId：</div>      
            <div>{{look.openid}}</div>     
          </el-col>           
        </el-row>       
      </div>
    </el-dialog>
    <div class="footer">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :current-page.sync="paging.page"
        :page-sizes="[10,15,20]"
        :page-size="paging.pageSize"
        layout="sizes, prev, pager, next, jumper,total"
        :total="paging.total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import Qs from "qs";
import axios from "axios";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
import {
  getsiteList,
  getstorestaffList,
  addstaff,
  delstaff,
  exitstaff,
  getstoreList,
  getwashinfo,
  getwashEquipment
} from "../../components/api/api.js";
import { addcarwhite } from "../../components/api/reset.js";
import { bus } from "../../components/bus.js";
import { obtainnewtime, nowDate } from "../../../common/common.js";
export default {
  name: "storeList",
  data() {
    return {
      id:"",
      shopName:"",
      paging: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      tableData: [],
      search: {
        carShopId:"",
        name: "",
        tel:"",
        typePerson:""
      },
      // camera: [],
      // carid: [],
      // deviceid: [],
      // parkingid: [],
      addB: {
        carShopId:"",
        typePerson:"",
        name:"",
        tel:"",
        // openid:"",
        // delicacyAllTimes:"",
        // delicacyOnlyTimes:"",
        // commonAllTimes:"",
        // commonOnlyTimes:"",        
      },
      shopList:[],
      stafftype:[
        {
          typePerson:1,
          label:"销售员"
        },
        {
          typePerson:2,
          label:"售后员"
        },
        {
          typePerson:3,
          label:"其他员工"
        },
      ],
      universal: {
        add: false,
        exit:false,
        look: false,
      },
      look: {},
    };
  },
  mounted: function() {
    if(this.$route.query.id){
      this.id = this.$route.query.id;
      this.addB.carShopId = this.id;
    }
    if(this.$route.query.shopName){
      this.shopName = this.$route.query.shopName
    }
    this.searchClick();
    this.getshopList();
  },
  computed: {

  },
  methods: {
    getshopList() {
      let that = this;
      let params = {
        page: 1,
        pageSize: 500,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer")
      };
      this.shopList = [];
      getstoreList(params).then(message => {
        console.log(message);
        if (message.data.count > 0) {
          for (var i = 0; i < message.data.count; i++) {
            let list = {
              id: message.data.result[i].id,
              shopName: message.data.result[i].shopName
            };
            that.shopList.push(list);
          }
          console.log(that.shopList);
        } else {
          that.shopList = [];
        }
      });
    },

    AddShow() {
      this.universal.add = true;
      this.clear();
    },
    changeShow(row){
      console.log(row);
      this.universal.add = true;
      this.universal.exit = true;
      Object.assign(this.addB, row);
    },
    indexMethod(index) {
      return index + (this.paging.page - 1) * this.paging.pageSize + 1;
    },
    handleSizeChange(val) {
      this.paging.pageSize = val;
      this.searchClick();
    },
    handleCurrentChange(val) {
      this.paging.page = val;
      this.searchClick();
    },
    addClick() {
      let that = this;
      console.log(that.addB);
      if (
        that.addB.carShopId == "" ||
        that.addB.typePerson == "" ||
        that.addB.name == "" ||
        that.addB.tel == ""
      ) {
        that.$message.error("带*的数据不能为空哦！");
        return false;
      }
      if (that.addB.tel != "") {
        if (!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.addB.tel)) {
          that.$message.error("请输入正确的手机号码");
          return false;
        }
      }
      that.addB.dealer = localStorage.getItem("dealer");
      // that.addB.delicacyAllTimes = parseInt(that.addB.delicacyAllTimes);
      // that.addB.delicacyOnlyTimes = parseInt(that.addB.delicacyOnlyTimes);
      // that.addB.commonAllTimes = parseInt(that.addB.commonAllTimes);
      // that.addB.commonOnlyTimes = parseInt(that.addB.commonOnlyTimes);
      // that.addB.date = this.common.nowDate();
      console.log(that.addB);
      addstaff(that.addB).then(function(message) {
        console.log(message);
        if (message.data.resCode == 0) {          
          that.$message({
            message: "添加成功",
            type: "success"
          });
          that.universal.add = false;
          that.searchClick();
        } else {
          that.$message({
            message: message.data.result,
            type: "error"
          });
        }
      });      
    },
    exitClick() {
      let that = this;
      console.log(that.addB);
      if (
        that.addB.carShopId == "" ||
        that.addB.typePerson == "" ||
        that.addB.name == "" ||
        that.addB.tel == ""       
      ) {
        that.$message.error("带*的数据不能为空哦！");
        return false;
      }
      if (that.addB.tel != "") {
        if (!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.addB.tel)) {
          that.$message.error("请输入正确的手机号码");
          return false;
        }
      }
      that.addB.dealer = localStorage.getItem("dealer");
      // that.addB.delicacyAllTimes = parseInt(that.addB.delicacyAllTimes);
      // that.addB.delicacyOnlyTimes = parseInt(that.addB.delicacyOnlyTimes);
      // that.addB.commonAllTimes = parseInt(that.addB.commonAllTimes);
      // that.addB.commonOnlyTimes = parseInt(that.addB.commonOnlyTimes);
      delete that.addB.date;
      // that.addB.date = this.common.nowDate();
      console.log(that.addB);
      let data = {
        id:that.addB.id,
        carShopId:that.addB.carShopId,
        typePerson:that.addB.typePerson,
        name:that.addB.name,
        tel:that.addB.tel,
        dealer:localStorage.getItem('dealer')
      }
      exitstaff(data).then(function(message) {
        console.log(message);
        if (message.data.resCode == 0) {          
          that.$message({
            message: "修改成功",
            type: "success"
          });
          that.universal.add = false;
          that.universal.exit = false;
          that.searchClick();
        } else {
          that.$message({
            message: message.data.result,
            type: "error"
          });
        }
      });      
    },
    deleteClick(row) {
      let that = this;
      this.$confirm("此操作将永久删除该条数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          delstaff({id:row.id}).then(function(message) {
            console.log(message);
            if (message.data.resCode == 0) {          
              that.searchClick();
              that.$message({
                message: "删除成功",
                type: "success"
              });
            } else {
              that.$message({
                message: "删除失败",
                type: "error"
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    searchClick() {
      let data = {
        page: this.paging.page,
        pageSize: this.paging.pageSize,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer")
      };
      if (this.search.carShopId) {
        data.carShopId = this.search.carShopId;
      }
      if (this.search.name) {
        data.name = this.search.name;
      }
      if (this.search.tel) {
        data.tel = this.search.tel;
      }
      if (this.search.typePerson) {
        data.typePerson = this.search.typePerson;
      }
      if(this.id!=""){
        data.carShopId = this.id;
      }
      let that = this;
      that.tableData = [];
      getstorestaffList(data).then(message => {
        if (message.data.count > 0) {
          that.paging.total = message.data.count;
          that.tableData = message.data.result;
        } else {
          that.tableData = [];
          that.paging.total = 0;
        }
      });
    },
    operation(row) {
      //查看员工绑定洗车模式详情
      console.log(row);
      this.$router.push({
        path: "/pageHome/storeStaffWash",
        query: {
          id: row.id,
          name: row.name
        }
      });
    },
    seeClick(row){
      this.universal.look = true;
      Object.assign(this.look, row);
    },
    clear(){
      if(this.id!=""){
        this.addB.carShopId=this.id;
      }else{
        this.addB.carShopId="";
      }     
      this.addB.typePerson="";
      this.addB.name="";
      this.addB.tel="";
      // this.addB.openid="";
      // this.addB.delicacyAllTimes="";
      // this.addB.delicacyOnlyTimes="";
      // this.addB.commonAllTimes="";
      // this.addB.commonOnlyTimes="";
    },
    choseshopname (val) {
      this.shopList.forEach((a, index) => {
        if (a.id == val) {
          val = a.shopName
        }
      })
      return val
    },
    chosestafftype(val){
      this.stafftype.forEach((a,index) => {
        if(a.typePerson == val){
          val = a.label;
        }
      })
      return val;
    }
  }
};
</script>

<style scoped="scoped">
.headerTitle>span{
  border-bottom: 5px solid transparent;
  margin-right: 20px;
}
.headerTitle>span.router-link-active{
  border-bottom: 5px solid #a2cc6d;
}
.headerTitle>span:hover{
  color: #a2cc6d;
  cursor: pointer;
}
.el-input,
.el-select {
  width: 200px;
}
#faultList {
  padding: 20px;
}
/*.textareaWidth{width: 200px;}*/
.alipay {
  width: 50%;
  float: left;
}
.spanClass {
  width: 115px !important;
}
.alipays {
  display: inline-block;
}
.simplew {
  width: 150px !important;
}
.alipay img {
  vertical-align: middle;
  margin-left: 5px;
}
.alipays img {
  vertical-align: middle;
  margin-left: 5px;
}
.imgver img {
  vertical-align: middle;
  margin-left: 5px;
}
.numtotal {
  opacity: 0;
}
.title {
  width: 100px;
  margin: 0 auto;
}
.syle {
  vertical-align: middle;
}
.longinput {
  width: 215px !important;
}
.titlecome {
  margin-bottom: 5px;
  font-size: 18px;
}
.paythree img {
  margin: 30px auto;
  margin-left: 35%;
}
.el-tooltip {
  vertical-align: middle;
}
.subst {
  font-size: 15px;
}
.subst {
  line-height: 60px;
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
.el-upload--picture-card{
  margin-left: 110px;
}
</style>