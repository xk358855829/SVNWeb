<template>
  <div id="xichemoshi">
    <div class="header">
      <div class="headerTitle">
        <span>会员类型</span>
      </div>
    </div>
    <div class="select">
      <span>会员类型：</span>
      <el-select v-model="search.name"
                 placeholder="请选择"
                 @change="changetype" clearable>
        <el-option>未选择</el-option>
        <el-option v-for="item in existWashingList"
                   :key="item.name"
                   :label="item.label"
                   :value="item.name"></el-option>
      </el-select>
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
      <!-- <el-button type="success"
                 class="oyButton"
                 icon=""
                 @click="uploadimg=true">上传图片</el-button> -->
    </div>
    <div class="Content">
      <el-table class="oyTable"
                :data="tableData"
                style="width: 100%">
        <el-table-column type="index"
                         :index="indexMethod"
                         label="序号"
                         width="100"></el-table-column>
        <el-table-column label="会员类型名称">
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
        <el-table-column label="会员类型">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.name == 'A' ? '月卡': scope.row.name == 'B' ? '季卡' :  scope.row.name == 'C' ? '年卡' : scope.row.name == 'D' ? '次卡' : scope.row.name == 'E' ? '券卡' : '临时' }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.name == 'A' ? '月卡': scope.row.name == 'B' ? '季卡' :  scope.row.name == 'C' ? '年卡' : scope.row.name == 'D' ? '次卡' : scope.row.name == 'E' ? '券卡' : '临时' }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="洗车模式">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.model == '01' ? '水蜡快洗': scope.row.model == '02' ? '打蜡精洗' : scope.row.model == '04' ? '标准快洗' : '-' }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.model == '01' ? '水蜡快洗': scope.row.model == '02' ? '打蜡精洗' : scope.row.model == '04' ? '标准快洗' : '-' }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <!-- <el-table-column label="绑定商家编号">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.bussinessId === '' ? '无': scope.row.bussinessId }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.bussinessId === '' ? '无': scope.row.bussinessId }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="销售量">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.count === '' ? '无': scope.row.count }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.count === '' ? '无': scope.row.count }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column> -->
        <el-table-column label="单价">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.money === '' ? '-': scope.row.money+'元' }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.money === '' ? '-': scope.row.money+'元'}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="专属价格">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.insidePrice === '' ? '-': scope.row.insidePrice+'元' }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.insidePrice === '' ? '-': scope.row.insidePrice+'元'}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="总次数限制">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.times === 0 ? '不限制': scope.row.times+'次' }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.times === 0 ? '不限制': scope.row.times+'次'}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="日次数限制">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.dailyLimit === 0 ? '不限制': scope.row.dailyLimit+'次' }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.dailyLimit === 0 ? '不限制': scope.row.dailyLimit+'次'}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作"
                         width="150">
          <template slot-scope="scope">
            <el-tooltip class="item"
                        effect="dark"
                        content="修改"
                        placement="top">
              <i class="icon-change el-icon-edit"
                 @click="handleEditwashmod(scope.row.id)"></i>
            </el-tooltip>
            <el-tooltip class="item"
                        effect="dark"
                        content="上传广告背景图"
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
    <el-dialog title="上传广告背景图"
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
        <el-button type="success"
                   class="oyButton"
                   @click="uploadimg = false">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="imageChange">确认</el-button>
      </div>
    </el-dialog>
    <el-dialog :title="editWashmod?'查看修改会员类型':'添加'"
               :visible.sync="addWashmod">
      <el-form ref="washmod"
               :inline="true"
               :model="washmod"
               :rules="rules">
        <!-- <el-row>
          <el-col :span="12">                -->
            <el-form-item label="会员名称"
                          prop="alias">
              <el-input v-model="washmod.alias"></el-input>
            </el-form-item> 
            <el-form-item label="类型"
                          prop="name">
              <el-select v-model="washmod.name"
                    placeholder="请选择"
                    @change="changetype">
                <el-option>未选择</el-option>
                <el-option v-for="item in existWashingList"
                          :key="item.name"
                          :label="item.label"
                          :value="item.name"></el-option>
              </el-select>
            </el-form-item>    
            <el-form-item label="洗车模式"
                          prop="name">
              <el-select v-model="washmod.model"
                    placeholder="请选择"
                    @change="changetype">
                <el-option>未选择</el-option>
                <el-option v-for="item in menu"
                          :key="item.cid"
                          :label="item.cname"
                          :value="item.cid"></el-option>
              </el-select>
            </el-form-item>   
            <el-form-item label="金额"
                          prop="money">
              <el-input v-model="washmod.money"></el-input>
            </el-form-item>     
            <el-form-item label="专属价格"
                          prop="insidePrice">
              <el-input v-model="washmod.insidePrice"></el-input>
            </el-form-item>
            <!-- <el-form-item label="总次数限制"
                          prop="limit">
              <el-select v-model="washmod.limit"
                    placeholder="请选择"
                    @change="changelimit">
                <el-option v-for="item in [{type:'1',label:'不限制'},{type:'2',label:'限制'}]"
                          :key="item.type"
                          :label="item.label"
                          :value="item.type"></el-option>
              </el-select>
            </el-form-item>            -->
            <el-form-item label="总次数上限"
                          prop="times">
              <el-input v-model="washmod.times"></el-input>
            </el-form-item> 
            <el-form-item label="日次数上限" prop="dailyLimit">
              <el-input v-model="washmod.dailyLimit"></el-input>
            </el-form-item> 
            <!-- <el-form-item label="广告背景图"
                          prop="logoImgUrl">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-success="handleAvatarSuccess"
                :before-upload="uploadFile"
                :limit="1"
                :on-exceed="handleExceed"
                :file-list="fileList3"
                :on-remove="handleRemove"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>          -->
          <!-- </el-col>
          <el-col :span="12"> -->                        
            <el-form-item label="广告词" prop="logoWord">
              <el-input v-model="washmod.logoWord"></el-input>
            </el-form-item>
            <el-form-item label="备注"
                          prop="remark">
              <el-input v-model="washmod.remark"></el-input>
            </el-form-item>
          <!-- </el-col>
        </el-row> -->
        <el-row style="text-align:right;">
          <el-button @click="addWashmod = false">取 消</el-button>
          <el-button type="success"
                     @click="editWashmod? ClickEditwashmod('washmod') :ClickAddwashmod('washmod')">确 定</el-button>
        </el-row>
      </el-form>
    </el-dialog>
    <el-dialog title='商家绑定洗车模式'
               :visible.sync="modules">
      <el-form ref="moduleshop"
               :inline="true"
               :model="moduleshop"
               :rules="rules">
        <el-form-item label="活动区域">
          <el-select v-model="moduleshop.region"
                     placeholder="商家">
            <el-option v-for="item in this.bussinessList"
                       :label="item.name"
                       :key="item.bid"
                       :value="item.bid"></el-option>
          </el-select>
        </el-form-item>
        <el-row style="text-align:right;">
          <el-button @click="modules = false">取 消</el-button>
          <el-button type="success"
                     @click="suremodel">确 定</el-button>
        </el-row>
      </el-form>
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
import { upaddimg, bingDing,getassociatorType,addassociatorType,delassociatorType,exitassociatorType } from '../../components/api/api.js'
export default {
  name: "associatorType",
  data () {
    return {
      search: {
        name: ""
      },
      paging: {
        page: 1,
        pageSize: 10,
        total:0
      },
      tableData:[],
      addWashmod: false,
      editWashmod: false,
      washmod: {
        id: "",
        alias:"",
        name: "",
        money: "",
        insidePrice: "",
        times: "",
        // limit: "1",
        remark: "",
        logoWord:"",
        logoImgUrl:"",
        model:"",
        dailyLimit: "",
      },
      fileList3: [],
      uploadimgId:'',
      menu:[],


      modules: false,
      uploadimg: false,
      moduleshop: {
        region: ''
      },
      repid: '',
      files: Object,
      rules: {
        alias: [{ required: true, message: "不能为空", trigger: "blur" }],
        name: [{ required: true, message: "不能为空", trigger: "blur" }],
        money: [
          // { validator: check.checkNum, trigger: "blur" },
          { required: true, message: "不能为空", trigger: "blur" }
        ],
        times: [
          { validator: check.checkaddNum1, trigger: "blur" },
          // { required: true, message: "不能为空", trigger: "blur" }
        ],
        // limit: [
        //   { required: true, message: "不能为空", trigger: "change" }
        // ],
        dailyLimit: [
          { validator: check.checkaddNum1, trigger: "blur" },
          // { required: true, message: "不能为空", trigger: "blur" }
        ],
        model: [
          { required: true, message: "不能为空", trigger: "change" }
        ]
      }
    };
  },
  computed: {
    ...mapState(['existWashingList']),
  },
  mounted () {
    this.handleSearchClick();
    this.getWashType();
    // this.initBussinessList()
  },
  methods: {
    binding (val) {
      this.modules = true
      this.repid = val
    },
    async suremodel () {
      if (!this.moduleshop.region) {
        this.$message({
          message: "商家不能为空",
          type: "error"
        });
        return
      }
      let data = {
        bid: this.moduleshop.region,
        cid: this.repid
      }
      let res = await bingDing(data)
      if (res.data.resCode == 0) {
        this.$message({ message: res.data.result, type: 'success' })
      } else {
        this.$message({ message: res.data.result, type: 'error' })
      }
      this.modules = false
    },
    clear () {
      this.washmod = {
        id: "",
        name: "",
        alias: "",
        money: "",
        insidePrice: "",
        times: "",
        dailyLimit: "",
        logoWord:"",
        // limit: "1",
        remark: "",
        model:"",
        dailyLimit: ""
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
      if (this.search.name) {
        params.name = this.search.name
      }
      let that = this;
      that.tableData = [];
      getassociatorType(params).then(res => {
        console.log(res);
        if (res.data.resCode == 0) {
          for(var i = 0;i < res.data.count;i++){
            if(res.data.result[i].name != "F"){
              that.tableData.push(res.data.result[i]);
            }
          }
          if (that.search.name) {
            that.paging.total = res.data.count;
          }else{
            that.paging.total = res.data.count-1;
          }
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
    uploadImg(id){
      this.uploadimgId = id;
      this.uploadimg = true;
      let info = this.tableData.find(list => list.id == id);
      console.log(info);
      if(info.times != 0){
        this.washmod.limit = "2";
      }else{
        this.washmod.limit = "1";
      }
      Object.assign(this.washmod, {
        name: info.name,
        alias: info.alias,
        money: info.money,
        insidePrice: info.insidePrice,
        model: info.model,
        dealer: info.dealer,
        times: info.times,
        dailyLimit: info.dailyLimit,
        logoWord: info.logoWord,
        logoImgUrl: info.logoImgUrl,
        remark: info.remark,
        id: id
      });
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
      } else {
        var formData = new FormData();
        formData.append("file", file);
        formData.append("id", this.uploadimgId);
        var file = formData;
        let that = this;
        axios({
          method: "post",
          url:
            this.$store.state.wash_url + "/carNumberTypeWashCar/upLoadImg",
          data: file
        }).then(res => {
          if (res.data.code == 0) {
            console.log(res);
            this.$message({
              message: "上传成功",
              type: "success"
            });
            let list= {url:""};
            list.url = res.data.result;
            that.fileList3.push(list);
            that.washmod.logoImgUrl = res.data.result;
          } else {
            this.$message({
              message: "上传失败",
              type: "error"
            });
          }
        });
      }
    },
    handleExceed(files, fileList) {
      this.$message.error(
        `当前限制上传1张图片，本次选择了${
          files.length
        }张图片，共${files.length + fileList.length}张图片，请删除图片重新上传`
      );
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handleAvatarSuccess(res, file) {
      console.log(res);
      console.log(file);
    },
    imageChange(){      
      exitassociatorType({
        name: this.washmod.name,
        alias: this.washmod.alias,
        money: this.washmod.money,
        times: this.washmod.times,
        insidePrice: this.washmod.insidePrice,
        dailyLimit: this.washmod.dailyLimit,
        logoWord: this.washmod.logoWord,
        logoImgUrl:this.washmod.logoImgUrl,
        model:this.washmod.model,
        remark: this.washmod.remark,
        dealer: localStorage.getItem("dealer"),
        id: this.washmod.id
      }).then(res => {
        console.log(res);
        if (res.data.code == 0 ) {
          this.uploadimg = false;
          this.$message({
            message: "保存成功",
            type: "success"
          });
          this.handleSearchClick();
          this.clear();
        }else{
          this.$message({
            message: "保存失败",
            type: "success"
          });
        }
      });
    },
    add(){
      this.addWashmod = true;
      this.editWashmod=false;
      this.clear();
    },
    changelimit(){
      console.log(this.washmod);
      if(this.washmod.limit == 2){
        this.washmod.times = 1;
      }else{
        this.washmod.times = 0;
      }
    },
    async ClickAddwashmod (washmod) {
      this.$refs[washmod].validate(valid => {
        if (valid) {
          if(this.washmod.times==""){
            this.washmod.times = 0;
          }
          if(this.washmod.dailyLimit==""){
            this.washmod.dailyLimit = 0;
          }
          addassociatorType({
            name: this.washmod.name,
            alias: this.washmod.alias,
            money: this.washmod.money,
            times: this.washmod.times,
            insidePrice: this.washmod.insidePrice,
            dailyLimit: this.washmod.dailyLimit,
            model: this.washmod.model==1?'02':'01',
            logoWord: this.washmod.logoWord,
            logoImgUrl: this.washmod.logoImgUrl,
            remark: this.washmod.remark,
            dealer: localStorage.getItem("dealer")
          }).then(res => {
            console.log(res);
            if (res.data.code == 0) {              
              this.$message({
                message: "添加成功",
                type: "success"
              });
              this.addWashmod = false;
              this.handleSearchClick();
              this.clear();
            }else{
              this.$message({
                message: res.data.result,
                type: "success"
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
      if(info.times != 0){
        this.washmod.limit = "2";
      }else{
        this.washmod.limit = "1";
      }
      Object.assign(this.washmod, {
        name: info.name,
        alias: info.alias,
        money: info.money,
        times: info.times,
        insidePrice: info.insidePrice,
        dailyLimit: info.dailyLimit,
        model: info.model=='01'?2:1,
        logoWord: info.logoWord,
        logoImgUrl: info.logoImgUrl,
        remark: info.remark,
        id: id
      });
    },
    ClickEditwashmod (washmod) {
      console.log(washmod);
      this.$refs[washmod].validate(valid => {
        if (valid) {
          if(this.washmod.times==""){
            this.washmod.times = 0;
          }
          if(this.washmod.dailyLimit==""){
            this.washmod.dailyLimit = 0;
          }
          exitassociatorType({
            name: this.washmod.name,
            alias: this.washmod.alias,
            money: this.washmod.money,
            times: this.washmod.times,
            insidePrice: this.washmod.insidePrice,
            dailyLimit: this.washmod.dailyLimit,
            model: this.washmod.model==1?'02':'01',
            logoWord: this.washmod.logoWord,
            logoImgUrl:this.washmod.logoImgUrl,
            remark: this.washmod.remark,
            dealer: localStorage.getItem("dealer"),
            id: this.washmod.id
          }).then(res => {
            console.log(res);
            if (res.data.code == 0 ) {
              this.addWashmod = false;
              this.$message({
                message: "修改成功",
                type: "success"
              });
              this.handleSearchClick();
              this.clear();
            }else{
              this.$message({
                message: "修改失败",
                type: "success"
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
          delassociatorType({ id: id }).then(res => {
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
    getWashType(){
      let that = this;
      let data = {
        page: 1,
        pageSize: 10
      }
      axios({
        method: "post",
        url: this.$store.state.wash_test_url+'/carwash/querylistByCarwash',
        data: Qs.stringify(data)
      }).then(res => {
        console.log(res);
        if (res.status == 200) {
          that.menu = res.data.result;
          console.log(that.menu);          
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
#xichemoshi {
  padding: 20px;
}
</style>
