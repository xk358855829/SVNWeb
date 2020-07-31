<template>
  <div id="faultList">
    <div class="header">
      <div class="headerTitle">
        <router-link to="/pageHome/siteList" tag="span">站点列表</router-link>
        <router-link class="router-link-active" to="/pageHome/storeList" tag="span">店铺管理</router-link>
        <router-link to="/pageHome/storeStaff" tag="span">店员管理</router-link>
      </div>
    </div>
    <div class="select">
      <span>店铺名称：</span>
      <el-select v-model="search.id" filterable placeholder="请选择" clearable>
        <el-option>未选择</el-option>
        <el-option v-for="item in shopList" :key="item.id" :label="item.shopName" :value="item.id"></el-option>
      </el-select>
      <!-- <span>站点类型：</span>
      <el-select v-model="search.parking_lot_type"
                 placeholder="请选择">
        <el-option value="">未选择</el-option>
        <el-option v-for="nice in gstylelast"
                   :key="nice.id"
                   :label="nice.type"
                   :value="nice.value"></el-option>
      </el-select>-->
    </div>
    <div class="select">
      <el-button
        type="success"
        class="oyButton"
        icon="el-icon-plus"
        @click="AddShow"
        v-show="showchose"
      >添加</el-button>
      <el-button type="success" class="oyButton" icon="el-icon-search" @click="searchClick">查询</el-button>
    </div>
    <div class="Content">
      <el-table class="oyTable" :data="tableData" style="width: 100%">
        <el-table-column type="index" :index="indexMethod" label="序号" width="100"></el-table-column>

        <el-table-column label="店铺名称" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.shopName }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.shopName }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="站点名称" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ chosesname(scope.row.parkingSiteId) }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ chosesname(scope.row.parkingSiteId) }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="店铺地址" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.shopAddress }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.shopAddress }}</div>
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

        <el-table-column label="联系人" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.contactName}}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.contactName }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="联系人手机号" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.contactTel }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.contactTel }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="销售员" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.typeSalesman }}人</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.typeSalesman }}人</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="售后员" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.typeAftersale }}人</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.typeAftersale }}人</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="其他员工" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.typeOtheremp }}人</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.typeOtheremp }}人</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="优惠券有效天数" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.day }}天</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.day }}天</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop label="操作" width="160">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="查看员工信息" placement="top">
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
              <span class="aKey">*</span>店铺名称：
            </span>
            <el-input :disabled="false" v-model="addB.shopName" clearable placeholder="请输入店铺名称"></el-input>
            <br />
            <br />
            <span class="spanClass">
              <span class="aKey">*</span>店铺地址：
            </span>
            <el-input :disabled="false" v-model="addB.shopAddress" clearable placeholder="请输入店铺地址"></el-input>
            <br />
            <br />
            <span class="spanClass">
                <span class="aKey">*</span>站点名称：</span>
              <el-select v-model="addB.parkingSiteId"
                         placeholder="请选择站点名称">
                <el-option value="">未选择</el-option>
                <el-option v-for="nice in parkIist"
                           :key="nice.sid"
                           :label="nice.sname"
                           :value="nice.sid"></el-option>
            </el-select><br /><br />

            <span class="spanClass">
              <span class="aKey">*</span>联系人：
            </span>
            <el-input :disabled="false" v-model="addB.contactName" clearable placeholder="请输入联系人姓名"></el-input>
            <br />
            <br />
            <span class="spanClass">
              <span class="aKey">*</span>手机号：
            </span>
            <el-input :disabled="false" v-model="addB.contactTel" clearable placeholder="请输入手机号码"></el-input>
            <br />
            <br />
            
          </el-col>
          <el-col :span="12">
            <span class="spanClass">
              <span class="aKey">*</span>销售员人数：
            </span>
            <el-input :disabled="false" v-model="addB.typeSalesman" clearable placeholder="请输入数量"></el-input>
            <br />
            <br />
            <span class="spanClass">
              <span class="aKey">*</span>售后员人数：
            </span>
            <el-input :disabled="false" v-model="addB.typeAftersale" clearable placeholder="请输入数量"></el-input>
            <br />
            <br />
            <span class="spanClass">
              <span class="aKey">*</span>其他员工人数：
            </span>
            <el-input :disabled="false" v-model="addB.typeOtheremp" clearable placeholder="请输入数量"></el-input>
            <br />
            <br />
            <span class="spanClass">
              <span class="aKey">*</span>优惠券有效天数：
            </span>
            <el-input :disabled="false" v-model="addB.day" clearable placeholder="请输入天数"></el-input>
            <br />
            <br />
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
            <div class="grid-content">店铺名称：</div>
            {{look.shopName}}
          </el-col>
          <el-col :span="12">
            <div class="grid-content">站点名称：</div>
            {{chosesname(look.parkingSiteId)}}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">店铺地址：</div>
            {{look.shopAddress}}
          </el-col>
          <el-col :span="12">
            <div class="grid-content">联系人姓名：</div>
            {{look.contactName}}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">联系人手机号：</div>
            {{look.contactTel}}
          </el-col>
          <el-col :span="12">
            <div class="grid-content">销售员人数：</div>
            <div>{{look.typeSalesman}}人</div>
          </el-col>          
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">售后员人数：</div>
            <div>{{look.typeAftersale}}人</div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">其他员工人数：</div>
            {{ look.typeOtheremp }}人
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content" style="line-height:20px;">优惠券有效天数：</div>
            <div>{{look.day}}天</div>
          </el-col>
          <el-col :span="12">
            
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
  getstoreList,
  addstore,
  delstore,
  exitstore,
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
      paging: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      tableData: [],
      search: {
        shopName: "",
        id:"",
      },
      camera: [],
      carid: [],
      deviceid: [],
      parkingid: [],
      addB: {
        parkingSiteId : "",
        shopName : "",
        shopAddress : "",
        contactName : "",
        contactTel : "",
        typeSalesman : "",
        typeAftersale : "",
        typeOtheremp : "",
        day : "",
        dealer : "",
      },
      parkIist: [],
      shopList:[],

      searchinner: {
        carnumber: "",
        username: "",
        nisblacklist: "",
        deviceid: ""
      },
      parkingcral: false,
      preferential: [],
      
      chose: true,
      choses: false,
      active: 1,
      barrierid: "",
      changetype: "",

      signo: [],
      obj: [],
      law: [],
      activeName: "first",
      numw: [],
      idtable: [],
      idtable1: [],
      numvalue: [],
      universal: {
        add: false,
        exit:false,
        change: false,
        look: false,
        barrier: false,
        indent: false,
        change1: false,
        substantial: false,
        details: false,
        seedetails: false,
        setwhitebarr: false,
        changewhitebarr: false,
        unity: false,
        rule: false
      },
      rule: {
        visStartDate: "",
        visEndDate: "",
        startTime: "",
        endTime: "",
        type: "",
        money01: "",
        mark01: "",
        money02: "",
        mark02: ""
      },
      radio: "1",
      changePark: "",
      setwhitebarr: {
        parkingId: "",
        carnumber: "",
        username: "",
        usercode: "",
        nisusingtimeseg: "",
        startTime: "",
        endTime: "",
        nisblacklist: ""
      },
      changewhitebarr: {
        parkingId: "",
        carnumber: "",
        username: "",
        usercode: "",
        nisusingtimeseg: "",
        startTime: "",
        endTime: "",
        nisblacklist: "",
        parking_name: ""
      },
      tablemark: [],
      totals: "",
      barrier: {
        deviceId: "",
        InOut: "",
        alias: ""
      },
      bianhao: "",

      look: {},
      vallist: false,
      change1: {
        parking_name: "",
        parking_address: "",
        parking_lot_type: "",
        parking_mobile: "",
        free_time: "",
        high_time: "",
        time_out: "",
        price: "",
        carportcount: "",
        isBindSalePlants: ""
      },
      seedetails: {
        parking_name: "",
        parking_address: "",
        parking_lot_type: "",
        parking_mobile: "",
        free_time: "",
        high_time: "",
        time_out: "",
        price: "",
        carportcount: "",
        isBindSalePlants: ""
      },
      details: {
        parking_address: "",
        fauCode: "",
        parking_mobile: "",
        price: "",
        date: "",
        parking_name: "",
        free_time: "",
        parking_poiid: "",
        high_time: "",
        time_out: "",
        parking_lot_type: "",
        carportcount: "",
        isBindSalePlants: ""
      },
      replaces: "",
      change: {
        parking_id: "",
        parking_address: "",
        fauCode: "",
        parking_mobile: "",
        price: "",
        date: "",
        parking_name: "",
        free_time: "",
        parking_poiid: "",
        high_time: "",
        time_out: "",
        parking_lot_type: "",
        carportcount: "",
        isBindSalePlants: ""
      },
      meg: {},
      showchose: ""
    };
  },
  mounted: function() {
    document.title = this.$route.meta.title;
    if (localStorage.getItem("dealer") != 0) {
      this.showchose = true;
    } else {
      this.showchose = false;
    }
    this.searchClick();
    this.getwashsiteList();
  },
  computed: {

  },
  methods: {
    getwashinfoList() {
      let params = {
        page: 1,
        pageSize: 500,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer")
      };
      let that = this;
      getwashinfo(params).then(message => {
        console.log(message);
        if (message.data.result.length > 0) {
          that.camera = message.data.result;
        } else {
          that.camera = [];
        }
        if (message.data.result1.length > 0) {
          that.deviceid = message.data.result1;
        } else {
          that.deviceid = [];
        }
        if (message.data.result2.length > 0) {
          that.parkingid = message.data.result2;
        } else {
          that.parkingid = [];
        }
      });
      getwashEquipment(params).then(function(message) {
        console.log(message.data);
        if (message.data.resCode == 0) {
          that.carid = [];
          if (message.data.count > 0) {
            for (var i = 0; i < message.data.count; i++) {
              let list = { id: message.data.result[i].id,deviceid: message.data.result[i].deviceid,alias:message.data.result[i].alias };
              that.carid.push(list);
            }
            console.log(that.carid);
          }
        } else {
          that.carid = [];
        }
      });
    },
    getwashsiteList() {
      let params = {
        page: 1,
        pageSize: 500,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer")
      };
      getsiteList(params).then(message => {
        console.log(message);
        if (message.data.result.length > 0) {
          for (var i = 0; i < message.data.result.length; i++) {
            let list = {
              sid: message.data.result[i].sid,
              sname: message.data.result[i].sname
            };
            this.parkIist.push(list);
          }
          console.log(this.parkIist);
        } else {
          this.parkIist = [];
        }
      });
    },

    AddShow() {
      this.universal.add = true;  
      this.clear();    
      this.getwashinfoList();
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
        that.addB.parkingSiteId == "" ||
        that.addB.shopName == "" ||
        that.addB.shopAddress == "" ||
        that.addB.contactName == "" ||
        that.addB.contactTel == "" ||
        that.addB.typeSalesman == "" ||
        that.addB.typeAftersale == "" ||
        that.addB.typeOtheremp == "" ||
        that.addB.day == ""
      ) {
        that.$message.error("带*的数据不能为空哦！");
        return false;
      }
      if (that.addB.contactTel != "") {
        if (!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.addB.contactTel)) {
          that.$message.error("请输入正确的手机号码");
          return false;
        }
      }
      that.addB.dealer = localStorage.getItem("dealer");
      that.addB.typeSalesman = parseInt(that.addB.typeSalesman);
      that.addB.typeAftersale = parseInt(that.addB.typeAftersale);
      that.addB.typeOtheremp = parseInt(that.addB.typeOtheremp);
      that.addB.day = parseInt(that.addB.day);
      // that.addB.date = this.common.nowDate();
      console.log(that.addB);
      addstore(that.addB).then(function(message) {
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
        that.addB.parkingSiteId == "" ||
        that.addB.shopName == "" ||
        that.addB.shopAddress == "" ||
        that.addB.contactName == "" ||
        that.addB.contactTel == "" ||
        that.addB.typeSalesman == "" ||
        that.addB.typeAftersale == "" ||
        that.addB.typeOtheremp == "" ||
        that.addB.day == ""        
      ) {
        if(that.addB.typeSalesman == 0 ||
        that.addB.typeAftersale == 0 ||
        that.addB.typeOtheremp == 0 ||
        that.addB.day == 0){
          that.$message.error("人数和天数不能为0哦！");
          return false;
        }else{
          that.$message.error("带*的数据不能为空哦！");
          return false;
        }        
      }
      if (that.addB.contactTel != "") {
        if (!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.addB.contactTel)) {
          that.$message.error("请输入正确的手机号码");
          return false;
        }
      }
      that.addB.dealer = localStorage.getItem("dealer");
      that.addB.typeSalesman = parseInt(that.addB.typeSalesman);
      that.addB.typeAftersale = parseInt(that.addB.typeAftersale);
      that.addB.typeOtheremp = parseInt(that.addB.typeOtheremp);
      that.addB.day = parseInt(that.addB.day);
      delete that.addB.date;
      // that.addB.date = this.common.nowDate();
      console.log(that.addB);
      exitstore(that.addB).then(function(message) {
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
          delstore({id:row.id}).then(function(message) {
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
      if (this.search.id) {
        data.id = this.search.id;
      }
      let that = this;
      that.tableData = [];
      that.shopList = [];
      getstoreList(data).then(message => {
        if (message.data.count > 0) {
          that.paging.total = message.data.count;
          that.tableData = message.data.result;
          for (var i = 0; i < message.data.count; i++) {
            let list = {
              id: message.data.result[i].id,
              shopName: message.data.result[i].shopName
            };
            that.shopList.push(list);
          }
          console.log(that.shopList);
        } else {
          that.tableData = [];
          that.paging.total = 0;
          that.shopList = [];
        }
      });
    },
    seeClick(row){
      this.universal.look = true;
      Object.assign(this.look, row);
    },
    operation(row) {
      //查看用户详情
      console.log(row);
      this.$router.push({
        path: "/pageHome/storeStaff",
        query: {
          id: row.id,
          shopName: row.shopName
        }
      });
    },
    clear(){
      this.addB.parkingSiteId = "";
      this.addB.shopName = "";
      this.addB.shopAddress = "";
      this.addB.contactName = "";
      this.addB.contactTel = "";
      this.addB.typeSalesman = "";
      this.addB.typeAftersale = "";
      this.addB.typeOtheremp = "";
      this.addB.day = "";
      this.addB.dealer = "";
    },
    chosesname (val) {
      this.parkIist.forEach((a, index) => {
        if (a.sid == val) {
          val = a.sname
        }
      })
      return val
    },
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
  width: 130px !important;
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
  margin-right: 3px;
}
.el-upload--picture-card{
  margin-left: 110px;
}
</style>