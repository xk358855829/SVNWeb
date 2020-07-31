<template>
  <div id="faultList">
    <div class="header">
      <div class="headerTitle">
        <span>{{name}}员工洗车模式管理</span>
        <el-button
          v-if="id!=''"
          type="success"
          class="oyButton back"
          style="float:right;"
          @click="$router.go(-1)"
        >返回</el-button>
      </div>      
    </div>
    <!-- <div class="select">
      <span v-if="id==''">店铺名称：</span>
      <el-select v-if="id==''" v-model="search.carShopId" filterable placeholder="请选择" clearable>
        <el-option>未选择</el-option>
        <el-option v-for="item in shopList" :key="item.id" :label="item.shopName" :value="item.id"></el-option>
      </el-select>
      <span>姓名：</span>
      <el-input v-model="search.name" clearable placeholder="请输入内容"></el-input>
      <span>手机号：</span>
      <el-input v-model="search.tel" clearable placeholder="请输入内容"></el-input>
      <span>员工类型：</span>
      <el-select v-model="search.typePerson" filterable placeholder="请选择" clearable>
        <el-option>未选择</el-option>
        <el-option v-for="item in stafftype" :key="item.typePerson" :label="item.label" :value="item.typePerson"></el-option>
      </el-select>
    </div> -->
    <div class="select">
      <el-button
        type="success"
        class="oyButton"
        icon="el-icon-plus"
        @click="AddShow"
      >添加</el-button>
      <!-- <el-button type="success" class="oyButton" icon="el-icon-search" @click="searchClick">查询</el-button> -->
    </div>
    <div class="Content">
      <el-table class="oyTable" :data="tableData" style="width: 100%">
        <el-table-column type="index" :index="indexMethod" label="序号" width="100"></el-table-column>
        <el-table-column label="姓名" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ name }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ name }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="洗车模式" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ chosewashtype(scope.row.model) }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ chosewashtype(scope.row.model) }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="总次数" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.allTimes }}次</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.allTimes }}次</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="剩余次数" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.onlyTimes }}次</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.onlyTimes }}次</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>       
        <el-table-column prop label="操作" width="160">
          <template slot-scope="scope">
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
            <span class="spanClassT">
              <span class="aKey">*</span>洗车模式：
            </span>
            <el-select v-model="addB.model"
                    placeholder="请选择"
                    @change="changetype">
                <el-option v-for="item in menu"
                          :key="item.cid"
                          :label="item.cname"
                          :value="item.cid"></el-option>
            </el-select>
          </el-col>
          <el-col :span="12">                        
            <span class="spanClass">
              <span class="aKey">*</span>总次数：
            </span>
            <el-input :disabled="false" v-model="addB.allTimes" clearable placeholder="请输入数量"></el-input>
            <br />
            <br />
            <!-- <span class="spanClass">
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
  getstorestaffwashList,
  addstaffwash,
  delstaffwash,
  exitstaffwash,  
} from "../../components/api/api.js";
import { addcarwhite } from "../../components/api/reset.js";
import { bus } from "../../components/bus.js";
import { obtainnewtime, nowDate } from "../../../common/common.js";
export default {
  name: "storeList",
  data() {
    return {
      id:"",
      name:"",
      paging: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      tableData: [],
      addB: {
        allTimes:"",
        model:"",       
      },
      shopList:[],
      menu:[],
      menulist: {
        cid:'04',
        cname:"标准快洗",
        money:"0",
        sid:19,
        sold:0
      },
      menulist1: {
        cid:'05',
        cname:"4S专用",
        money:"0",
        sid:19,
        sold:0
      },
      universal: {
        add: false,
        exit:false,
      },
    };
  },
  mounted: function() {
    if(this.$route.query.id){
      this.id = this.$route.query.id;
    }
    if(this.$route.query.name){
      this.name = this.$route.query.name
    }
    this.getWashType();
    this.searchClick();
    // this.getshopList();
  },
  computed: {

  },
  methods: {
    // getshopList() {
    //   let that = this;
    //   let params = {
    //     page: 1,
    //     pageSize: 500,
    //     userId: localStorage.getItem("userId"),
    //     dealer: localStorage.getItem("dealer")
    //   };
    //   this.shopList = [];
    //   getstoreList(params).then(message => {
    //     console.log(message);
    //     if (message.data.count > 0) {
    //       for (var i = 0; i < message.data.count; i++) {
    //         let list = {
    //           id: message.data.result[i].id,
    //           shopName: message.data.result[i].shopName
    //         };
    //         that.shopList.push(list);
    //       }
    //       console.log(that.shopList);
    //     } else {
    //       that.shopList = [];
    //     }
    //   });
    // },
    getWashType(){
      let that = this;
      let data = {
        page: 1,
        pageSize: 100
      }
      axios({
        method: "post",
        url: this.$store.state.wash_test_url+'/carwash/querylistByCarwash',
        data: Qs.stringify(data)
      }).then(res => {
        console.log(res);
        if (res.status == 200) {
          that.menu = res.data.result;
          for(let i = 0;i < res.data.result.length;i++){
            if(that.menu[i].cname=="水蜡快洗"){
              that.menu[i].cid=1;
            }else if(that.menu[i].cname=="打蜡晶洗"){
              that.menu[i].cid=2;
            }
            that.menu[i].cid = '0' + res.data.result[i].cid;
          }
          that.menu.push(that.menulist);
          that.menu.push(that.menulist1);
          console.log(that.menu);          
        }
      })
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
      if (
        that.addB.model == "" ||
        that.addB.allTimes == ""
      ) {
        that.$message.error("带*的数据不能为空哦！");
        return false;
      }
      if(!/^([0-9]*[1-9][0-9]*(.[0-9]+)?|[0]+.[0-9]*[1-9][0-9]*)$/.test(that.addB.allTimes)){
        that.$message.error("总次数要为大于0的数字值哦！");
      }
      that.addB.allTimes = Number(that.addB.allTimes);
      that.addB.cseId = Number(that.id);
      // that.addB.dealer = localStorage.getItem("dealer");
      console.log(that.addB);
      addstaffwash(that.addB).then(function(message) {
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
      if (
        that.addB.model == "" ||
        that.addB.allTimes == ""       
      ) {
        that.$message.error("带*的数据不能为空哦！");
        return false;
      }
      console.log(that.addB);
      if(!/^([0-9]*[1-9][0-9]*(.[0-9]+)?|[0]+.[0-9]*[1-9][0-9]*)$/.test(that.addB.allTimes)){
        that.$message.error("总次数要为大于0的数字值哦！");
      }
      let data = {
        id:that.addB.id,
        model:that.addB.model,
        allTimes:that.addB.allTimes,
        cseId:that.id,
        // dealer:localStorage.getItem('dealer')
      }
      exitstaffwash(data).then(function(message) {
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
          delstaffwash({id:row.id}).then(function(message) {
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
        // page: this.paging.page,
        // pageSize: this.paging.pageSize,
        // userId: localStorage.getItem("userId"),
        // dealer: localStorage.getItem("dealer"),
        cseId: this.id
      };
      let that = this;
      that.tableData = [];
      getstorestaffwashList(data).then(message => {
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
      // if(this.id!=""){
      //   this.addB.cesId=this.id;
      // }else{
      //   this.addB.cesId="";
      // }     
      this.addB.model="";
      this.addB.allTimes="";
    },
    chosewashtype(val){
      this.menu.forEach((a,index) => {
        if(a.cid == val){
          val = a.cname;
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