<template>
  <div id="bussinessList">
    <div class="header">
      <div class="headerTitle">
        <span>商家管理</span>
      </div>
    </div>
    <div class="select">
      <span>商家名称：</span>
      <el-input v-model="search.name"
                clearable
                placeholder="请输入内容"></el-input>
    </div>
    <div class="select">
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-plus"
                 @click="addBussiness = true">添加</el-button>
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-search"
                 @click="handleSearchClick">查询</el-button>

    </div>
    <div class="Content">
      <el-table class="oyTable"
                :data="bussinessList"
                style="width: 100%">
        <el-table-column type="index"
                         :index="indexMethod"
                         label="序号"
                         width="100"></el-table-column>
        <el-table-column label="商家地址">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.address }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.address }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="商家电话">
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
        <el-table-column label="商家姓名">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.name }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.name }}</div>
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
                 @click="editBussiness = true,infoId = scope.row.bid"></i>
            </el-tooltip>
            <el-tooltip class="item"
                        effect="dark"
                        content="绑定设备"
                        placement="top">
              <i class="icon-See el-icon-zoom-in"
                 @click="handleBindDevice(scope.row.bid)"></i>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="添加商家"
               :visible.sync="addBussiness">
      <el-form :inline="true"
               :model="formData"
               ref="formData"
               :rules="rules">
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="商家名称"
                          prop="bussinessName">
              <el-input v-model="formData.bussinessName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="商家地址"
                          prop="address">
              <el-input v-model="formData.address"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="联系人姓名"
                          prop="userName">
              <el-input v-model="formData.userName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="手机号"
                          prop="phone">
              <el-input v-model="formData.phone"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="密码"
                          prop="password">
              <el-input v-model="formData.password"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="账户"
                          prop="account">
              <el-input v-model="formData.account"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="text-align:right;">
          <el-button @click="addBussiness = false">取 消</el-button>
          <el-button type="success"
                     @click="ClickAddBussiness('formData')">确 定</el-button>
        </el-row>
      </el-form>
    </el-dialog>
    <el-dialog title="查看/修改商家信息"
               :visible.sync="editBussiness">
      <el-form :inline="true"
               :model="bussinessInfo | isundefined "
               ref="bussinessInfo"
               :rules="rules">
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="商家名称"
                          prop="name">
              <el-input v-model="bussinessInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联系人姓名"
                          prop="person">
              <el-input v-model="bussinessInfo.person"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="手机号"
                          prop="phone">
              <el-input v-model="bussinessInfo.phone"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="密码"
                          prop="password">
              <el-input v-model="bussinessInfo.password"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="账号"
                          prop="account">
              <el-input v-model="bussinessInfo.account"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="地址"
                          prop="address">
              <el-input v-model="bussinessInfo.address"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="text-align:right;">
          <el-button @click="editBussiness = false">取 消</el-button>
          <el-button type="success"
                     @click="ClickEditBussiness('bussinessInfo')">确 定</el-button>
        </el-row>
      </el-form>
    </el-dialog>
    <el-dialog title="商家绑定设备"
               :visible.sync="bindEquipment">
      <div class="blind">已绑定设备</div>
      <div class="blindDiv">
        <el-table class="oyTable"
                  :data="deviceList"
                  style="width: 100%">
          <el-table-column type="index"
                           :index="indexMethod"
                           label="序号"
                           width="100"></el-table-column>
          <el-table-column label="钥匙柜名称">
            <template slot-scope="scope">
              <el-popover trigger="hover"
                          placement="top">
                <p class="TsMaxWidth">{{ scope.row.codestyle }}</p>
                <div slot="reference"
                     class="name-wrapper">
                  <div class="overflowHide">{{ scope.row.codestyle }}</div>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="钥匙柜格式">
            <template slot-scope="scope">
              <el-popover trigger="hover"
                          placement="top">
                <p class="TsMaxWidth">{{ scope.row.cabinet }}</p>
                <div slot="reference"
                     class="name-wrapper">
                  <div class="overflowHide">{{ scope.row.cabinet }}</div>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="钥匙柜编号">
            <template slot-scope="scope">
              <el-popover trigger="hover"
                          placement="top">
                <p class="TsMaxWidth">{{ scope.row.deviceId }}</p>
                <div slot="reference"
                     class="name-wrapper">
                  <div class="overflowHide">{{ scope.row.deviceId }}</div>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="操作"
                           width="150">
            <template slot-scope="scope">
              <el-tooltip class="item"
                          effect="dark"
                          content="解绑"
                          placement="top">
                <i class="icon-See el-icon-remove-outline"
                   @click="handunbind(scope.row)"></i>
              </el-tooltip>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-select v-model="deviceid"
                 placeholder="请选择">
        <el-option value
                   key
                   label="未选择"></el-option>
        <el-option v-for="item in equipmentList.list"
                   :key="item.deviceId"
                   :label="item.codestyle"
                   :value="item.deviceId"></el-option>
      </el-select>
      <el-row style="text-align:right;">
        <el-button @click="bindEquipment = false">取 消</el-button>
        <el-button type="success"
                   @click="ClickbindEquipment()">确 定</el-button>
      </el-row>
    </el-dialog>
    <div class="footer">
      <el-pagination background
                     @current-change="handleCurrentChange"
                     @size-change="handleSizeChange"
                     :current-page.sync="paging.page"
                     :page-sizes="[1,2,3,10,11,12]"
                     :page-size="paging.pageSize"
                     layout="sizes, prev, pager, next, jumper,total"
                     :total="totalla"></el-pagination>
    </div>
  </div>
</template>
<script>
import * as check from "@/utils/check";
import { addBussiness, itembind } from "@/components/api/api";
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  data () {
    return {
      addBussiness: false,
      editBussiness: false,
      bindEquipment: false,
      deviceList: [],
      deviceid: '',
      formData: {
        bussinessName: "",
        userName: "",
        phone: "",
        washMod: "",
        account: "",
        password: "",
        address: ""
      },
      rules: {
        bussinessName: [
          { required: true, message: "请输入商户名称", trigger: "blur" }
        ],
        userName: [{ required: true, message: "联系人姓名", trigger: "blur" }],
        phone: [
          { validator: check.checkNum, trigger: "blur" },
          { required: true, message: "不能为空", trigger: "blur" }
        ],
        boxId: [{ required: true, message: "不能为空", trigger: "blur" }],
        jmoney: [{ required: true, message: "不能为空", trigger: "blur" }],
        pmoney: [{ required: true, message: "不能为空", trigger: "blur" }],
        washMod: [{ required: true, message: "不能为空", trigger: "blur" }],
        account: [{ required: true, message: "不能为空", trigger: "blur" }],
        password: [{ required: true, message: "不能为空", trigger: "blur" }],
        address: [{ required: true, message: "不能为空", trigger: "blur" }]
      },
      paging: {
        page: 1,
        pageSize: 10
      },
      search: {
        name: ""
      },
      infoId: null,
      dealer: localStorage.getItem("dealer")
    };
  },
  computed: {
    ...mapGetters({
      bussinessList: "getBussinessList",
      equipmentList: "getEquipmentList"
    }),
    ...mapState(['totalla']),
    bussinessInfo () {
      console.log(this.$store.getters.getBussinessInfo(this.infoId));
      return this.$store.getters.getBussinessInfo(this.infoId);
    }
  },
  mounted () {
    // this.initBussinessList();
    this.initEquipmentList();
    this.handleSearchClick()
  },
  methods: {
    ...mapActions([
      "initBussinessList",
      "searchBussinessList",
      "updateBussiness",
      "initEquipmentList",
      "toBussinessBindDevice",
      "initBindDeviceList"
    ]),
    async handunbind (val) {
      console.log(val)
      let data = {
        bid: val.eid,
        deviceid: val.deviceId
      }
      let res = await itembind(data)
      if (res.status == 200) {
        this.$message({
          message: "解绑成功",
          type: "success"
        });
      } else {
        this.$message({
          message: "解绑失败",
          type: "error"
        });
      }
    },
    handleSizeChange (val) {
      this.paging.pageSize = val;
      this.handleSearchClick()
    },
    handleCurrentChange (val) {
      this.paging.page = val;
      this.handleSearchClick()
    },
    ClickAddBussiness (formData) {
      this.$refs[formData].validate(valid => {
        if (valid) {
          let params = {
            name: this.formData.bussinessName,
            person: this.formData.userName,
            phone: this.formData.phone,
            typeId: this.formData.boxId,
            account: this.formData.account,
            password: this.formData.password,
            address: this.formData.address,
            dealer: localStorage.getItem("dealer")
          };
          addBussiness(params).then(res => {
            this.addBussiness = false;
            this.$message({
              message: "添加成功",
              type: "success"
            });
            this.initBussinessList();
          });
        } else {
          this.addBussiness = false;
          this.$message({
            message: "添加失败",
            type: "error"
          });
          return false;
        }
      });
    },
    handleSearchClick () {
      let params = {
        dealer: localStorage.getItem("dealer"),
        page: this.paging.page,
        pageSize: this.paging.pageSize,
        userId: localStorage.getItem('userId')
      }
      if (this.search.name) {
        params.name = this.search.name
      }
      this.searchBussinessList(params);
    },
    indexMethod (index) {
      return index + (this.paging.page - 1) * this.paging.pageSize + 1;
    },
    async ClickEditBussiness (bussinessInfo) {
      console.log(this.bussinessInfo);
      this.$refs[bussinessInfo].validate(valid => {
        if (valid) {
          let data = {
            name: this.bussinessInfo.name,
            person: this.bussinessInfo.person,
            phone: this.bussinessInfo.phone,
            deviceId: this.bussinessInfo.deviceId,
            account: this.bussinessInfo.account,
            password: this.bussinessInfo.password,
            // pmoney:`普洗,${this.bussinessInfo.pmoney},精洗,${this.bussinessInfo.jmoney}`,
            typeId: this.bussinessInfo.typeId,
            address: this.bussinessInfo.address,
            bid: this.bussinessInfo.bid
          };
          console.log(data);
          this.updateBussiness(data).then(res => {
            console.log(res);
            this.addBussiness = false;
            this.$message({
              message: "修改成功",
              type: "success"
            });
            this.editBussiness = false;
            this.initBussinessList();
          });
        } else {
          this.addBussiness = false;
          this.$message({
            message: "修改失败",
            type: "error"
          });
          return false;
          this.editBussiness = false;
        }
      });
    },
    async ClickbindEquipment () {
      this.toBussinessBindDevice({
        bid: this.infoId,
        deviceid: this.deviceid
      }).then(res => {
        if (res) {
          this.$message({
            message: "绑定成功",
            type: "success"
          });
          this.bindEquipment = false;
        } else {
          this.$message({
            message: "绑定失败",
            type: "error"
          });
          this.bindEquipment = false;
        }
      });
    },
    async handleBindDevice (bid) {
      this.bindEquipment = true;
      this.infoId = bid;
      this.initBindDeviceList({ bid: bid }).then(res => {
        console.log(res)
        this.deviceList = res.data.result
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#bussinessList {
  padding: 20px;
}
.el-input__inner,
.el-input {
  width: 200px !important;
}
.blind {
  margin-bottom: 10px;
}
.blindDiv {
  margin-bottom: 10px;
}
</style>

