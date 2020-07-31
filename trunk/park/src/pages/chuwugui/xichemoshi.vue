<template>
  <div id="xichemoshi">
    <div class="header">
      <div class="headerTitle">
        <span>洗车模式</span>
      </div>
    </div>
    <div class="select">
      <span>名称：</span>
      <el-input v-model="search.name"
                style="width:200px;"
                clearable
                placeholder="请输入内容"></el-input>
    </div>
    <div class="select">
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-search"
                 @click="handleSearchClick">查询</el-button>
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-search"
                 @click="addWashmod = true,editWashmod=false">添加</el-button>
      <el-button type="success"
                 class="oyButton"
                 icon=""
                 @click="uploadimg=true">上传图片</el-button>
    </div>
    <div class="Content">
      <el-table class="oyTable"
                :data="washModList"
                style="width: 100%">
        <el-table-column type="index"
                         :index="indexMethod"
                         label="序号"
                         width="100"></el-table-column>
        <el-table-column label="名称">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.washMod === '' ? '无': scope.row.washMod }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.washMod === '' ? '无': scope.row.washMod }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="价格">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.money === '' ? '无': scope.row.money+'元' }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.money === '' ? '无': scope.row.money+'元'}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="专属价格">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.discountPrice === '' ? '无': scope.row.discountPrice+'元' }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.discountPrice === '' ? '无': scope.row.discountPrice+'元'}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="绑定商家编号">
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
        <!-- <el-table-column label="销售量">
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
                        content="删除"
                        placement="top">
              <i class="icon-delete el-icon-delete"
                 @click="ClickDeletewashmod(scope.row.id)"></i>
            </el-tooltip>
            <el-tooltip class="item"
                        effect="dark"
                        content="绑定"
                        placement="top">
              <i class="icon-See el-icon-news"
                 @click="binding(scope.row.id)"></i>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="上传图片"
               :visible.sync="uploadimg">
      <div style="width:50%;margin:0 auto;">
        <el-upload name="file"
                   class="upload-demo"
                   :on-exceed="handleExceed"
                   :on-success="handleAvatarSuccess"
                   :before-upload="beforeAvatarUpload"
                   action="https://jsonplaceholder.typicode.com/posts/"
                   drag
                   :limit="1"
                   multiple="false">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip"
               slot="tip">只能上传jpg/png文件，且不超过500kb</div>
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
    <el-dialog :title="editWashmod?'查看修改洗车模式':'添加洗车模式'"
               :visible.sync="addWashmod">
      <el-form ref="washmod"
               :inline="true"
               :model="washmod"
               :rules="rules">
        <el-form-item label="名称"
                      prop="name">
          <el-input v-model="washmod.name"></el-input>
        </el-form-item>
        <el-form-item label="金额"
                      prop="money">
          <el-input v-model="washmod.money"></el-input>
        </el-form-item>
        <el-form-item label="专属价格"
                          prop="discountPrice">
              <el-input v-model="washmod.discountPrice"></el-input>
            </el-form-item>
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
                     :page-sizes="[1,2,3,10,11,12]"
                     :page-size="paging.pageSize"
                     layout="sizes, prev, pager, next, jumper,total"
                     :total="inltotal"></el-pagination>
    </div>
  </div>
</template>
<script>
import * as check from "@/utils/check";
import { mapActions, mapGetters, mapState } from "vuex";
import { upaddimg, bingDing } from '../../components/api/api.js'
export default {
  data () {
    return {
      modules: false,
      addWashmod: false,
      editWashmod: false,
      uploadimg: false,
      search: {
        name: ""
      },
      paging: {
        page: 1,
        pageSize: 10
      },
      moduleshop: {
        region: ''
      },
      repid: '',
      washmod: {
        name: "",
        money: "",
        discountPrice: "",
      },
      files: Object,
      rules: {
        name: [{ required: true, message: "不能为空", trigger: "blur" }],
        money: [
          { validator: check.checkNum, trigger: "blur" },
          { required: true, message: "不能为空", trigger: "blur" }
        ],
        discountPrice: [
          { validator: check.checkNum, trigger: "blur" },
          { required: true, message: "不能为空", trigger: "blur" }
        ]
      }
    };
  },
  created () {

    this.handleSearchClick()
  },
  computed: {
    ...mapState(['inltotal']),
    ...mapGetters({
      washModList: "getWashmodList",
      bussinessList: "getBussinessList",
    })
  },
  mounted () {
    this.initBussinessList()
    console.log(this.bussinessList)
  },
  methods: {
    ...mapActions([
      "initWashmodList",
      "toAddWashmod",
      "toEditWashmod",
      "toDeleteWashmod",
      "initBussinessList"
    ]),
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
        name: "",
        money: ""
      }
    },
    handleAvatarSuccess (res, file) {//图片上传成功
      console.log(res);
      console.log(file);
      this.files = file
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    handleExceed (files, fileList) {//图片上传超过数量限制
      this.$message.error('上传图片不能超过1张!');
    },
    beforeAvatarUpload (file) {
      console.log(file)
      this.multfileImg = file
    },
    imageChange () {
      var formData = new FormData();
      formData.append('file', this.multfileImg)
      var file = formData;
      console.log(file)
      let res = upaddimg(file)
      console.log(res)
      this.uploadimg = false;
    },
    indexMethod (index) {
      return index + (this.paging.page - 1) * this.paging.pageSize + 1;
    },
    handleSearchClick () {
      let params = {
        Page: this.paging.page,
        PageSize: this.paging.pageSize
      };
      if (this.search.name) {
        params.cname = this.search.name
      }
      this.initWashmodList(params);
    },
    handleSizeChange (val) {
      this.paging.pageSize = val;
      this.handleSearchClick()
    },
    handleCurrentChange (val) {
      this.paging.page = val;
      this.handleSearchClick()
    },

    async ClickAddwashmod (washmod) {
      this.$refs[washmod].validate(valid => {
        if (valid) {
          this.toAddWashmod({
            name: this.washmod.name,
            money: this.washmod.money,
            discountPrice: this.washmod.discountPrice,
          }).then(res => {
            console.log(res);
            if (res) {
              this.clear()
              this.addWashmod = false;
              this.$message({
                message: "添加成功",
                type: "success"
              });
              this.handleSearchClick();
            }
          });
        }
      });
    },
    handleEditwashmod (id) {
      console.log(id)
      this.addWashmod = true;
      this.editWashmod = true;
      console.log(this.washModList)
      let info = this.washModList.find(list => list.id == id);
      console.log(info)
      Object.assign(this.washmod, {
        name: info.washMod,
        money: info.money,
        discountPrice: info.discountPrice,
        id: id
      });
    },
    ClickEditwashmod (washmod) {
      this.$refs[washmod].validate(valid => {
        if (valid) {
          this.toEditWashmod({
            name: this.washmod.name,
            money: this.washmod.money,
            discountPrice: this.washmod.discountPrice,
            cid: this.washmod.id
          }).then(res => {
            console.log(res);
            if (res) {
              this.addWashmod = false;
              this.$message({
                message: "修改成功",
                type: "success"
              });
              this.handleSearchClick();
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
          this.toDeleteWashmod({ id: id }).then(res => {
            console.log(res);
            if (res) {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.handleSearchClick();
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#xichemoshi {
  padding: 20px;
}
</style>
