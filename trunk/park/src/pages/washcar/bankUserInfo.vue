<template>
  <div id="faultList">
    <div class="header">
      <div class="headerTitle">
        <span>{{bankDesc}}用户信息</span>
        <el-button
          type="success"
          class="oyButton back"
          style="float:right;"
          @click="$router.go(-1)"
        >返回</el-button>
      </div>
    </div>
    <div class="select">
      <span>手机号：</span>
      <el-input v-model="search.tel" clearable placeholder="请输入内容"></el-input>
    </div>
    <div class="select">
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-search"
                 @click="add">添加</el-button>
      <el-button type="success" class="oyButton" icon="el-icon-search" @click="searchClick">查询</el-button>
      <el-upload
        class="upload-demo demoele"
        ref="upload"
        action="#"
        :limit="1"
        :show-file-list="false"
        :multiple="false"
        accept=".xls, .xlsx"
        :before-upload="beforeUpload"
        :on-exceed="handleExceed"
        :http-request="uploadFile"
      >
        <el-button class="oyButton" type="success" icon="el-icon-download">导入</el-button>
      </el-upload>     
    </div>
    <div class="Content">
      <el-table class="oyTable" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
        <!-- <el-table-column type="selection" width="55" class="selection" prop="uuid"></el-table-column> -->
        <el-table-column type="index" :index="indexMethod" label="序号" width="50"></el-table-column>        

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
        <el-table-column prop label="操作" width="150">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="修改" placement="top">
              <i class="icon-change el-icon-edit" @click="handleEditwashmod(scope.row)"></i>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="删除" placement="top">
              <i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :title="editWashmod?'查看修改银行信息':'添加'"
               :visible.sync="addWashmod">
      <el-form ref="addinfo"
               :inline="true"
               :model="addinfo"
               :rules="rules">
        <el-form-item label="手机号"
                      prop="tel">
          <el-input v-model="addinfo.tel"></el-input>
        </el-form-item>                                                               
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="addWashmod = false">取 消</el-button>
        <el-button type="success"
                    @click="editWashmod? ClickEditwashmod('addinfo') :ClickAddwashmod('addinfo')">确 定</el-button>
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
    <div id="qrcode" style="display:none"></div>
  </div>
</template>

<script>
import Qs from "qs";
import axios from "axios";
import QRCode from 'qrcodejs2';
import { mapState } from 'vuex'
import { getbankuserinfo,addbankuser,delbankuser,exitbankuser} from "../../components/api/api.js";

function debounce(func, wait=1000){
 let timeout;
 return function(event){
  clearTimeout(timeout)
  timeout = setTimeout(()=>{
   func.call(this, event)
  },wait)
 }
}

export default {
  name: "associatorList",
  data() {
    var checkTel = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'));
      }
      setTimeout(() => {
        if (!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(value)) {
          callback(new Error('请输入正确的手机号'));
        } else {
          callback();         
        }
      }, 1000);
    };
    return {
      id:'',
      bankDesc:'',
      search: {
        tel: "",
      },
      paging: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      tableData: [],
      addinfo: {
        tel: "",
      },
      addWashmod: false,
      editWashmod: false,
      rules: {
        tel: [{ required: true,validator: checkTel, trigger: "blur" }],        
      }
    };
  },
  computed: {
    // ...mapState(['existWashingList','existWashingList1']),
  },
  mounted: function() {
    this.id = this.$route.query.id;
    this.bankDesc = this.$route.query.bankDesc;
    this.searchClick();
  },
  methods: {    
    clear(){
      this.add.tel = "";
    },
    add(){
      this.addWashmod = true;
      this.editWashmod = false;
      this.clear();
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
    ClickAddwashmod(addinfo) { 
      let that = this;    
      this.$refs[addinfo].validate(valid => {
        if (valid) {
          that.addinfo.dealer = localStorage.getItem('dealer');
          that.addinfo.bid = this.id;
          addbankuser(that.addinfo).then(function(message) {
            if (message.data.code == 0) {
              that.$message({
                message: "添加成功",
                type: "success"
              });
              that.addWashmod = false;
              that.searchClick();
            } else {
              that.$message({
                message: "添加失败",
                type: "error"
              });
              that.addWashmod = false;
              that.searchClick();
            }
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
          delbankuser({id: row.id}).then(function(message) {
            console.log(message.data);
            if (message.data.code == 0) {
              that.$message({
                message: "删除成功",
                type: "success"
              });
              that.searchClick();
            } else {
              that.$message({
                message: message.data.result,
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
    handleEditwashmod (val) {
      console.log(val)
      this.addWashmod = true;
      this.editWashmod = true;
      Object.assign(this.addinfo, {
        id:val.id,
        bid:val.bid,
        tel:val.tel
      });
    },
    ClickEditwashmod(addinfo) {
      let that = this;    
      this.$refs[addinfo].validate(valid => {
        if (valid) {
          that.addinfo.dealer = localStorage.getItem('dealer');
          exitbankuser(that.addinfo).then(function(message) {
            if (message.data.code == 0) {
              that.$message({
                message: "修改成功",
                type: "success"
              });
              that.addWashmod = false;
              that.searchClick();
            } else {
              that.$message({
                message: "修改失败",
                type: "error"
              });
              that.addWashmod = false;
              that.searchClick();
            }
          });
        }
      });      
    },
    searchClick() {
      let data = {};
      if (this.search.tel) {
        data.tel = this.search.tel;
      }
      data.page = this.paging.page;
      data.pageSize = this.paging.pageSize;
      data.userId = localStorage.getItem("userId");
      data.dealer = localStorage.getItem("dealer");
      data.bid = this.$route.query.id;
      let that = this;
      that.tableData = [];
      getbankuserinfo(data).then(res => {
        console.log(res);
        if (res.data.resCode == 0) {
          that.tableData = res.data.result;
          that.paging.total = res.data.count;
        } else {
          that.tableData = [];
          that.paging.total = 0;
        }
      });
    },
    beforeUpload(file){
      console.log(file)
      var reg = /^.*\.(?:xls|xlsx)$/i;//文件名可以带空格
      console.log(reg.test(file.name));
      if (!reg.test(file.name)) {
        this.$message({
          message: "请上传excel格式的文件!",
          type: "error"
        });
        return false;
      }
    },
    uploadFile(file){
      console.log(file);
      // if(this.importVip==""){
      //   that.$message.error("带*的数据不能为空哦！");
      //   return false;
      // }      
      const fileObj = file.file;
      // FormData 对象
      const form = new FormData();
      // 文件对象
      form.append('file', fileObj);
      form.append('dealer', localStorage.getItem("dealer"));
      form.append('bid', this.id);
      axios({
        method: "post",
        url:"http://114.55.168.103:2088/bankEmp/importExcel",
        // url:"http://192.168.2.141:8086/ZFBrake/bankEmp/importExcel",
        data: form
      }).then(res => {
        console.log(res);
        if (res.data.code == 0) {          
          this.$message({
            message: "上传成功",
            type: "success"
          });
          this.beforeClose();
          this.searchClick();
        } else {
          this.$message({
            message: "上传失败",
            type: "error"
          });
          this.beforeClose();
          this.searchClick();
        }
      });
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，请删除后继续上传`)
    },
    beforeClose() {
      this.$emit("update:visible", false); // 直接修改父组件的属性
      this.$refs.upload.clearFiles();
    },
  }
};
</script>

<style scoped="scoped">
.el-date-editor.el-input,
.el-input,
.el-select {
  width: 100%；;
}
.el-input,
.el-select {
  width: 200px;
}
#faultList {
  padding: 20px;
}
.alipay {
  width: 50%;
  float: left;
}
.alipays {
  display: inline-block;
}
.spanClass {
  width: 106px !important;
}
.el-input--small {
  width: 150px !important;
}
.demoele {
  display: inline-block;
}
.el-icon-search {
  cursor: pointer;
  padding: 4px;
  background-color: #a2cc6d;
  color: #ffffff;
  border-radius: 3px;
}
.el-upload-list--text{
  display: inline-block !important;
  vertical-align: middle !important;
  margin-left: 8px !important;
}
</style>