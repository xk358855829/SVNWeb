<template>
  <div id="xichemoshi">
    <div class="header">
      <div class="headerTitle">
        <span>银行信息</span>
      </div>
    </div>
    <div class="select">
      <span>银行名称：</span>
      <el-input v-model="search.bankDesc" clearable placeholder="请输入内容"></el-input>
      <span>客服电话：</span>
      <el-input v-model="search.phone" clearable placeholder="请输入内容"></el-input>       
    </div>
    <div class="select">      
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-search"
                 @click="add">添加</el-button>
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-search"
                 @click="handleSearchClick">查询</el-button>           
    </div>
    <div class="Content">
      <el-table class="oyTable"
                :data="tableData"
                style="width: 100%">
        <el-table-column type="index"
                         :index="indexMethod"
                         label="序号"
                         width="100"></el-table-column>
        <el-table-column label="银行名称">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.bankDesc }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.bankDesc }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column> 
        <el-table-column label="客服电话">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.phone }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.phone }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>  
        <!-- <el-table-column label="背景图片">
          <template slot-scope="scope">
            <img :src="scope.row.img" alt="">
          </template>
        </el-table-column>                       -->
        <el-table-column label="备注">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.remark }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.remark }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作"
                         width="150">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="查看用户详情" placement="top">
              <i class="icon-See el-icon-search" @click="operation(scope.row)"></i>
            </el-tooltip>
            <el-tooltip class="item"
                        effect="dark"
                        content="修改"
                        placement="top">
              <i class="icon-change el-icon-edit"
                 @click="handleEditwashmod(scope.row.id)"></i>
            </el-tooltip>
            <el-tooltip class="item"
                        effect="dark"
                        content="上传背景图"
                        placement="top">
              <i class="icon-See el-icon-news"
                 @click="uploadImg(scope.row.id)"></i>
            </el-tooltip>            
            <el-tooltip class="item"
                        effect="dark"
                        content="删除"
                        placement="top">
              <i class="icon-delete el-icon-delete"
                 @click="ClickDeletewashmod(scope.row.id)"></i>
            </el-tooltip>            
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :title="editWashmod?'查看修改银行信息':'添加'"
               :visible.sync="addWashmod">
      <el-form ref="washmod"
               :inline="true"
               :model="washmod"
               :rules="rules">              
          <el-form-item label="银行名称"
                        prop="bankDesc">
            <el-input v-model="washmod.bankDesc"></el-input>
          </el-form-item>  
          <el-form-item label="客服电话"
                        prop="bankDesc">
            <el-input v-model="washmod.phone"></el-input>
          </el-form-item>                                                   
          <el-form-item label="备注"
                        prop="remark">
            <el-input v-model="washmod.remark"></el-input>
          </el-form-item>            
        <!-- <el-row style="text-align:right;padding: 40px 0 20px;">
          <el-button @click="addWashmod = false">取 消</el-button>
          <el-button type="success"
                     @click="editWashmod? ClickEditwashmod('washmod') :ClickAddwashmod('washmod')">确 定</el-button>          
        </el-row> -->
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="addWashmod = false">取 消</el-button>
        <el-button type="success"
                    @click="editWashmod? ClickEditwashmod('washmod') :ClickAddwashmod('washmod')">确 定</el-button>  
      </div>
    </el-dialog>
    <el-dialog title="上传背景图"
               :visible.sync="uploadimg">
      <div style="width:50%;margin:0 auto;">
        <el-upload name="file"
                   class="upload-demo"
                   :on-exceed="handleExceed"
                   :on-success="handleAvatarSuccess"
                   :before-upload="uploadFile"
                   action="https://jsonplaceholder.typicode.com/posts/"
                   drag
                   :limit="1"
                   :file-list="fileList3"
                   :on-remove="handleRemove"
                   multiple="false">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip"
               slot="tip">只能上传jpg/png文件，且不超过2M，最好为纯色背景图</div>
        </el-upload>
      </div>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="uploadimg = false">取消</el-button>
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
import Qs from "qs";
import axios from "axios";
import * as check from "@/utils/check";
import { mapState } from 'vuex'
import { getbankinfo,addbank,exitbank,delbank } from '../../components/api/api.js'
export default {
  name: "bankInfo",
  data () {
    var checkTel = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('不能为空'));
      }
      setTimeout(() => {
        if (value.length < 6 || value.length > 12) {
          callback(new Error('客服电话长度不能小于6位大于12位'));
        } else {
          callback();         
        }
      }, 1000);
    };
    return {
      search: {
        bankDesc: "",
        phone: ""
      },
      paging: {
        page: 1,
        pageSize: 10,
        total:0
      },
      tableData:[],
      addWashmod: false,
      editWashmod: false,
      uploadimg: false,
      uploadimgId:'',
      washmod: {
        bankDesc: "",
        phone: "",
        remark: "",        
      },
      fileList3: [],
      rules: {
        bankDesc: [{ required: true, message: "不能为空", trigger: "blur" }],
        phone: [{ required: true,validator: checkTel, trigger: "blur" }],        
      }
    };
  },
  computed: {
    
  },
  mounted () {
    this.handleSearchClick();
  },
  methods: {        
    clear () {
      this.washmod = {
        bankDesc: "",
        phone: "",
        remark: "",        
      }
    },    
    indexMethod (index) {
      return index + (this.paging.page - 1) * this.paging.pageSize + 1;
    },
    handleSearchClick () {
      let params = {
        Page: this.paging.page,
        PageSize: this.paging.pageSize,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer")
      };
      if (this.search.bankDesc) {
        params.bankDesc = this.search.bankDesc
      }
      if (this.search.phone) {
        params.phone = this.search.phone
      }
      let that = this;
      that.tableData = [];
      getbankinfo(params).then(res => {
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
    handleSizeChange (val) {
      this.paging.pageSize = val;
      this.handleSearchClick()
    },
    handleCurrentChange (val) {
      this.paging.page = val;
      this.handleSearchClick()
    },
    operation(row) {
      //查看用户详情
      console.log(row);
      this.$router.push({
        path: "/pageHome/bankUserInfo",
        query: {
          id: row.id,
          bankDesc: row.bankDesc
        }
      });
    },
    uploadImg(id){
      this.uploadimgId = id;
      this.uploadimg = true;      
    },
    uploadFile(file) {
      // const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      // if (!isJPG) {
      //   this.$message({
      //     message: "上传背景图片只能是 JPG 格式!",
      //     type: "error"
      //   });
      //   return false;
      // }
      if (!isLt2M) {
        this.$message({
          message: "上传背景图片大小不能超过 2MB!",
          type: "error"
        });
        return false;
      }
      var formData = new FormData();
      formData.append("imgFile", file);
      formData.append("id", this.uploadimgId);      
      var file = formData;
      let that = this;
      axios({
        method: "post",
        url:
          this.$store.state.wash_url + "/bankInfo/upLoadImg",
        data: file
      }).then(res => {
        if (res.data.code == 0) {
          console.log(res);
          this.$message({
            message: "上传成功",
            type: "success"
          });
          this.uploadimg = false;     
          this.handleSearchClick();
        } else {
          this.$message({
            message: "上传失败",
            type: "error"
          });
          this.uploadimg = false;
          this.handleSearchClick();
        }
      });
    },
    handleExceed(file, fileList) {
      this.$message.error(
        `当前限制上传1张图片，本次选择了${
          file.length
        }张图片，共${file.length + fileList.length}张图片，请删除图片重新上传`
      );
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handleAvatarSuccess(res, file) {
      console.log(res);
      console.log(file);
    },
    add(){
      this.addWashmod = true;
      this.editWashmod=false;
      this.clear();
    },    
    async ClickAddwashmod (washmod) {
      this.$refs[washmod].validate(valid => {
        if (valid) {
          this.washmod.dealer = localStorage.getItem('dealer');          
          let that = this;
          axios({
            method: "post",
            url: this.$store.state.wash_url + "/bankInfo/insert",
            data: Qs.stringify(this.washmod)
          }).then(res => {
            if (res.data.code == 0) {
              console.log(res);
              this.$message({
                message: "添加成功",
                type: "success"
              });
              this.addWashmod = false;
              this.handleSearchClick();
            } else {
              this.$message({
                message: "添加失败",
                type: "error"
              });
            }
          });
        }
      });
    },
    handleEditwashmod (id) {
      console.log(id)
      this.addWashmod = true;
      this.editWashmod = true;
      console.log(this.tableData)
      let info = this.tableData.find(list => list.id == id);
      console.log(info);
      Object.assign(this.washmod, {
        bankDesc: info.bankDesc,
        phone: info.phone,
        remark: info.remark,
        id: id
      });
    },
    ClickEditwashmod (washmod) {
      console.log(washmod);
      this.$refs[washmod].validate(valid => {
        if (valid) {
          if(this.washmod.remark==""){
            delete this.washmod.remark;
          }
          axios({
            method: "post",
            url: this.$store.state.wash_url + "/bankInfo/update",
            data: Qs.stringify(this.washmod)
          }).then(res => {
            if (res.data.code == 0) {
              console.log(res);
              this.$message({
                message: "修改成功",
                type: "success"
              });
              this.addWashmod = false;
              this.handleSearchClick();
            } else {
              this.$message({
                message: "修改失败",
                type: "error"
              });
            }
          });
        }
      });
    },
    ClickDeletewashmod (id) {
      this.$confirm("确认删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          delbank({ id: id }).then(res => {
            console.log(res);
            if (res.data.code == 0) {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.handleSearchClick();
            }else{
              this.$message({
                type: "error",
                message: "删除失败!"
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
  }
};
</script>

<style lang="scss" scoped>
.el-input,
.el-select {
  width: 200px;
}
#xichemoshi {
  padding: 20px;
}
.upload-demo{
  text-align: center;
}
// .el-form--inline .el-form-item{
//   display: block;
//   text-align: center;
// }
</style>
