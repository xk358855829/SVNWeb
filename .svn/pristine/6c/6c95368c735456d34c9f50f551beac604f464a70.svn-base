<template>
  <div id="cheweisuo">
    <div class="header">
      <div class="headerTitle">
        <span>车类管理</span>
      </div>
    </div>
    <div class="select">
      <span>停车场名称：</span>
      <el-select v-model="search.parkingId"
                 filterable
                 @change="handleSearchClick()"
                 placeholder="请选择">
        <el-option v-for="item in parkIist"
                   :key="item.id"
                   :label="item.parking_name"
                   :value="item.id"></el-option>
      </el-select>
      <span>车类名称：</span>
      <el-input v-model="search.name"
                clearable
                placeholder="请输入内容"></el-input>     
      <!-- <span>类型：</span>
      <el-select v-model="search.type"
                 placeholder="请选择">
        <el-option value=""
                   key
                   label="未选择"></el-option>
        <el-option key="0"
                   label="公家车"
                   :value="0"></el-option>
        <el-option key="1"
                   label="私家车"
                   :value="1"></el-option>
        <el-option key="2"
                   label="内部车"
                   :value="2"></el-option>
      </el-select> -->
    </div>
    <div class="select">
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-plus"
                 @click="addParkingLot = true,showDialog = true,clear()">添加</el-button>
      <el-button type="success"
                 class="oyButton"
                 icon="el-icon-search"
                 @click="handleSearchClick">查询</el-button>
      <!-- <el-upload class="upload-demo demoele"
                 action=""
                 :before-upload="uploadFile"
                 multiple
                 :limit="1">
        <el-button class="oyButton"
                   type="success"
                   icon="el-icon-download">导入</el-button>
      </el-upload> -->
    </div>
    <div class="Content">
      <el-table class="oyTable"
                :data="tableData"
                style="width: 100%">
        <el-table-column type="index"
                         :index="indexMethod"
                         label="序号"
                         width="100"></el-table-column>
        <el-table-column label="车类名称">
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
        <el-table-column label="停车场">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.parkingName }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.parkingName }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <!-- <el-table-column label="基础类型">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.types }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.types }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>         -->
        <el-table-column label="识别类型">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.distinguishType }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.distinguishType }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column> 
        <el-table-column label="进出间隔/分钟">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.intervals }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.intervals }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>               
        <el-table-column label="入场确认">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.admissionConfirmation==0?'否':'是' }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.admissionConfirmation==0?'否':'是' }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="满车位可进">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p class="TsMaxWidth">{{ scope.row.fullParking==0?'否':'是' }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <div class="overflowHide">{{ scope.row.fullParking==0?'否':'是' }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>              
        <el-table-column label="操作"
                         width="150">
          <template slot-scope="scope">
            <!-- <el-tooltip class="item" effect="dark" content="绑定车牌" placement="top">
              <i class="icon-See el-icon-search" @click="operation(scope.row)"></i>
            </el-tooltip> -->
            <el-tooltip class="item"
                        effect="dark"
                        content="修改"
                        placement="top">
              <i class="icon-change el-icon-edit"
                 @click="handleEditParkinglot(scope.row)"></i>
            </el-tooltip>
            <el-tooltip class="item"
                        effect="dark"
                        content="删除"
                        placement="top">
              <i class="icon-delete el-icon-delete"
                 @click="ClickDeleteParkinglot(scope.row.id)"></i>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :title="addParkingLot?'新增车类':'修改车类'"
               :visible.sync="showDialog">
      <el-form ref="parkinglot"
               :inline="true"
               :model="parkinglot"
               :rules="rules">
        <el-row type="flex"
                class="row-bg"
                justify="end"> 
          <el-col :span="12">
            <el-form-item label="车类名称:"
                          prop="name">
              <el-input v-model="parkinglot.name"
                        placeholder=""></el-input>
            </el-form-item>
          </el-col>         
          <el-col :span="12">
            <el-form-item label="停车场:"
                          prop="parkingId">
              <el-select v-model="parkinglot.parkingId"
                         filterable
                         disabled="true"
                         placeholder="请选择">
                <el-option label="未选择"></el-option>
                <el-option v-for="item in parkIist"
                           :key="item.id"
                           :label="item.parking_name"
                           :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>                      
        </el-row>
        <!-- <el-row type="flex"
                class="row-bg"
                justify="end">          
          <el-col :span="12">
            <el-form-item label="基础类型:"
                          prop="types">
              <el-select v-model="parkinglot.types"
                         filterable
                         placeholder="请选择">
                <el-option label="未选择"></el-option>
                <el-option v-for="item in [{type:1,value:'VIP车'},{type:2,value:'储值车'},{type:3,value:'月租车'},{type:4,value:'临时车'},{type:5,value:'季租车'},{type:6,value:'年租车'},{type:7,value:'自定义月租车'}]"
                           :key="item.type"
                           :label="item.value"
                           :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col> 
          <el-col :span="12">
            <el-form-item label="识别类型:"
                          prop="distinguishType">
              <el-select v-model="parkinglot.distinguishType"
                         filterable
                         placeholder="请选择">
                <el-option label="未选择"></el-option>
                <el-option v-for="item in [{type:1,value:'车牌'}]"
                           :key="item.type"
                           :label="item.value"
                           :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>         
        </el-row> -->
        <!-- <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="进出间隔:"
                          prop="intervals">
              <el-input v-model="parkinglot.intervals"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="续费月金额:"
                          prop="yearMoney">
              <el-input v-model="parkinglot.money"></el-input>
            </el-form-item>
          </el-col>                  
        </el-row> -->
        <!-- <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="线上续期最大月数:"
                          prop="myear">
              <el-input v-model="parkinglot.myear"></el-input>
            </el-form-item>
          </el-col>           
          <el-col :span="12">
            <el-form-item label="车位占用转:"
                          prop="carOverdue">
              <el-input v-model="parkinglot.carOverdue"></el-input>
            </el-form-item>
          </el-col>                    
        </el-row> -->
        <!-- <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="12">
            <el-form-item label="过期转:"
                          prop="overdue">
              <el-input v-model="parkinglot.overdue"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="非本区域月卡转:"
                          prop="regionYear">
              <el-input v-model="parkinglot.regionYear"></el-input>
            </el-form-item>
          </el-col>             
        </el-row> -->
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <el-col :span="6">
            <el-form-item label="入场确认:"
                          prop="admissionConfirmation">
              <el-checkbox v-model="parkinglot.admissionConfirmation"></el-checkbox>
            </el-form-item>
          </el-col>       
          <el-col :span="6">
            <el-form-item label="出场确认:"
                          prop="appearanceConfirmation">
              <el-checkbox v-model="parkinglot.appearanceConfirmation"></el-checkbox>
            </el-form-item>
          </el-col> 
          <!-- <el-col :span="6">
            <el-form-item label="重复入场:"
                          prop="repeated">
              <el-checkbox v-model="parkinglot.repeated"></el-checkbox>
            </el-form-item>
          </el-col> 
          <el-col :span="6">
            <el-form-item label="重复出场:"
                          prop="appearance">
              <el-checkbox v-model="parkinglot.appearance"></el-checkbox>
            </el-form-item>
          </el-col>          -->
          <el-col :span="6">
            <el-form-item label="满车位可进:"
                          prop="fullParking">
              <el-checkbox v-model="parkinglot.fullParking"></el-checkbox>
            </el-form-item>
          </el-col>      
          <el-col :span="6">
            <el-form-item label="进出修改车位:"
                          prop="parkingCarUpdate">
              <el-checkbox v-model="parkinglot.parkingCarUpdate"></el-checkbox>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex"
                class="row-bg"
                justify="end">
          <!-- <el-col :span="6">
            <el-form-item label="满车位可进:"
                          prop="fullParking">
              <el-checkbox v-model="parkinglot.fullParking"></el-checkbox>
            </el-form-item>
          </el-col>      
          <el-col :span="6">
            <el-form-item label="进出修改车位:"
                          prop="parkingCarUpdate">
              <el-checkbox v-model="parkinglot.parkingCarUpdate"></el-checkbox>
            </el-form-item>
          </el-col> -->
          <el-col :span="6">
            <el-form-item label="车牌模糊识别:"
                          prop="likeDistinguish">
              <el-checkbox v-model="parkinglot.likeDistinguish"></el-checkbox>
            </el-form-item>
          </el-col> 
          <el-col :span="6"></el-col>
          <el-col :span="6"></el-col>
          <el-col :span="6"></el-col>
          <!-- <el-col :span="6">
            <el-form-item label="是否派遣车辆:"
                          prop="dispatch">
              <el-checkbox v-model="parkinglot.dispatch"></el-checkbox>
            </el-form-item>
          </el-col>             -->
        </el-row>               
        <el-row style="text-align:right;">
          <el-button @click="showDialog = false">取 消</el-button>
          <el-button type="success"
                     @click="addParkingLot? ClickAddParkinglot('parkinglot') :ClickEditParkinglot('parkinglot')">确 定</el-button>
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
                     :total="paging.total"></el-pagination>
    </div>
  </div>
</template>
<script>
import Qs from "qs";
import { mapActions, mapGetters, mapState } from "vuex";
import { getParkingLotListApi } from '../../../src/components/api/api.js';
import * as check from "@/utils/check";
export default {
  data () {
    let checkTel = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('手机号不能为空'));
      } else {
        const regex = /^1[3456789]\d{9}$/;
        if (!regex.test(value)) {
          callback(new Error("请输入正确的手机号"));
        }
        callback();
      }
    };
    return {
      addParkingLot: false,
      showDialog: false,
      parkIist: [],
      tableData: [],
      search: {
        name: '',
        parkingId: ""
      },
      paging: {
        page: 1,
        pageSize: 10,
        total:0
      },
      parkinglot: {
        parkingId: '',
        parkingName: "",
        name: "",
        intervals: "",
        types: "",
        money: '',
        myear: "",
        distinguishType: "车牌",
        overdue: "",
        carOverdue: "",
        regionYear: "",
        repeated: false,
        appearance: false,
        admissionConfirmation: false,
        appearanceConfirmation: false,
        fullParking: true,
        parkingCarUpdate: true,
        likeDistinguish: true,
        onLine: false,
        dispatch: false,
        dealer: localStorage.getItem("dealer")
      },
      rules: {
        name: [{ required: true, message: "不能为空", trigger: "blur" }],
        // distinguishType: [{ required: true, message: "不能为空", trigger: "blur" }],
        // types: [{ required: true, message: "不能为空", trigger: "blur" }],
        // carName: [{ required: true, message: "不能为空", trigger: "blur" }],
        // carCount: [{ required: true, message: "不能为空", trigger: "blur" }],
        parkingId: [{ required: true, message: "不能为空", trigger: "blur" }],
        // phone: [{ required: true, validator: checkTel, trigger: "blur" }],
      }
    };
  },
  mounted () {
    this.getParkingLotListApiList();
  },
  computed: {
    ...mapGetters({
      parkingLotInfo: "getParkingLotInfo",
      parkingLotDevList: "getParkingLotDevList"
    }),
    ...mapState(['totals'])
  },
  methods: {
    ...mapActions([
      "initParkingDevList",
      "toDeleteParkdev",
      "toAddDevList",
      "toEditDevList"
    ]),
    getParkingLotListApiList () {
      let that = this;
      let params = {
        page: 1,
        pageSize: 500,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer")
      };
      getParkingLotListApi(params).then(message => {
        console.log(message);
        this.parkIist = message.data.result;
        that.search.parkingId = message.data.result[0].id;  
        that.handleSearchClick();
      });
    },
    repla (val) {
      this.parkingLotInfo.forEach((a, b) => {
        if (a.id == val) {
          val = a.parking_name
        }
      })
      return val
    },
    clear () {
      this.parkinglot = {
        parkingId: '',
        parkingName: "",
        name: "",
        intervals: "",
        types: "",
        money: '',
        myear: "",
        distinguishType: "车牌",
        overdue: "",
        carOverdue: "",
        regionYear: "",
        repeated: false,
        appearance: false,
        admissionConfirmation: false,
        appearanceConfirmation: false,
        fullParking: true,
        parkingCarUpdate: true,
        likeDistinguish: true,
        onLine: false,
        dispatch: false,
        dealer: localStorage.getItem("dealer")
      };
      this.parkinglot.parkingId = this.search.parkingId;
    },
    handleSearchClick (val) {
      let that = this;
      let params = {
        pageSize: this.paging.pageSize,
        page: this.paging.page,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer"),
        parkingId: this.search.parkingId
      }
      if (this.search.name){
        params.name = this.search.name
      }
      if (this.search.parkingId) {
        params.parkingId = this.search.parkingId
      }
      axios({
        method: 'post',
        url: that.$store.state.parking_url + '/parkingVehicleCategory/selectParkingVehicleCategory',
        data: Qs.stringify(params)
      }).then(res => {
        console.log(res);
        if (res.data.code == 0) {
          that.tableData = res.data.result;
          that.paging.total = res.data.count;
        } else {
          that.tableData = [];
          that.paging.total = 0;
        }                     
      });
    },
    handleCurrentChange (val) {
      console.log(val)
      this.paging.page = val
      this.handleSearchClick()
    },
    handleSizeChange (val) {
      this.paging.pageSize = val;
      this.handleSearchClick()
    },
    ClickAddParkinglot (parkinglot) {      
      let that = this;  
      if(that.parkinglot.repeated){
        that.parkinglot.repeated = 1;
      } else{
        that.parkinglot.repeated = 0;
      }
      if(that.parkinglot.appearance){
        that.parkinglot.appearance = 1;
      } else{
        that.parkinglot.appearance = 0;
      }
      if(that.parkinglot.admissionConfirmation){
        that.parkinglot.admissionConfirmation = 1;
      } else{
        that.parkinglot.admissionConfirmation = 0;
      }
      if(that.parkinglot.appearanceConfirmation){
        that.parkinglot.appearanceConfirmation = 1;
      } else{
        that.parkinglot.appearanceConfirmation = 0;
      }
      if(that.parkinglot.fullParking){
        that.parkinglot.fullParking = 1;
      } else{
        that.parkinglot.fullParking = 0;
      }
      if(that.parkinglot.parkingCarUpdate){
        that.parkinglot.parkingCarUpdate = 1;
      } else{
        that.parkinglot.parkingCarUpdate = 0;
      }
      if(that.parkinglot.likeDistinguish){
        that.parkinglot.likeDistinguish = 1;
      } else{
        that.parkinglot.likeDistinguish = 0;
      }
      if(that.parkinglot.onLine){
        that.parkinglot.onLine = 1;
      } else{
        that.parkinglot.onLine = 0;
      }
      if(that.parkinglot.dispatch){
        that.parkinglot.dispatch = 1;
      } else{
        that.parkinglot.dispatch = 0;
      }   
      that.parkinglot.parkingName = that.repla(that.parkinglot.parkingId)
      that.parkinglot.dealer = localStorage.getItem("dealer");
      console.log(that.parkinglot);
      this.$refs[parkinglot].validate(valid => {
        if (valid) {
          axios({
            method: 'post',
            url: that.$store.state.parking_url + '/parkingVehicleCategory/insertSelective',
            data: Qs.stringify(that.parkinglot)
          }).then(res => {
            console.log(res);
            if (res.data.code == 0) {
              this.showDialog = false;
              this.$message({
                message: "添加成功",
                type: "success"
              });
              this.handleSearchClick();
            } else {
              this.showDialog = false;
              this.$message({
                message: "添加失败",
                type: "error"
              });
              this.handleSearchClick();
            }                     
          });          
        }
      });
    },
    ClickEditParkinglot (parkinglot) {
      let that = this;
      if(that.parkinglot.repeated){
        that.parkinglot.repeated = 1;
      } else{
        that.parkinglot.repeated = 0;
      }
      if(that.parkinglot.appearance){
        that.parkinglot.appearance = 1;
      } else{
        that.parkinglot.appearance = 0;
      }
      if(that.parkinglot.admissionConfirmation){
        that.parkinglot.admissionConfirmation = 1;
      } else{
        that.parkinglot.admissionConfirmation = 0;
      }
      if(that.parkinglot.appearanceConfirmation){
        that.parkinglot.appearanceConfirmation = 1;
      } else{
        that.parkinglot.appearanceConfirmation = 0;
      }
      if(that.parkinglot.fullParking){
        that.parkinglot.fullParking = 1;
      } else{
        that.parkinglot.fullParking = 0;
      }
      if(that.parkinglot.parkingCarUpdate){
        that.parkinglot.parkingCarUpdate = 1;
      } else{
        that.parkinglot.parkingCarUpdate = 0;
      }
      if(that.parkinglot.likeDistinguish){
        that.parkinglot.likeDistinguish = 1;
      } else{
        that.parkinglot.likeDistinguish = 0;
      }
      if(that.parkinglot.onLine){
        that.parkinglot.onLine = 1;
      } else{
        that.parkinglot.onLine = 0;
      }
      if(that.parkinglot.dispatch){
        that.parkinglot.dispatch = 1;
      } else{
        that.parkinglot.dispatch = 0;
      }
      this.$refs[parkinglot].validate(valid => {
        if (valid) {
          console.log(this.parkinglot);
          axios({
            method: 'post',
            url: that.$store.state.parking_url + '/parkingVehicleCategory/updateByPrimaryKeySelective',
            data: Qs.stringify(this.parkinglot)
          }).then(res => {
            console.log(res);
            if (res.data.code == 0) {
              this.showDialog = false;
              this.$message({
                message: "修改成功",
                type: "success"
              });
              this.handleSearchClick();
            } else {
              this.showDialog = false;
              this.$message({
                message: res.data.result,
                type: "error"
              });
              this.handleSearchClick();
            }
          });
        }
      });
    },
    ClickDeleteParkinglot (id) {
      let that = this;
      this.$confirm("确认删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          axios({
            method: 'post',
            url: that.$store.state.parking_url + '/parkingVehicleCategory/deleteByPrimaryKey',
            data: Qs.stringify({id:id})
          }).then(res => {
            console.log(res);
            if (res.data.code == 0) {
              this.$message({
                type: "success",
                message: "删除成功"
              });
              that.handleSearchClick();
            } else {
              this.$message({
                type: "error",
                message: "删除失败"
              });
              that.handleSearchClick();
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
    handleEditParkinglot (val) {
      console.log(val);
      Object.assign(this.parkinglot, val);
      if(this.parkinglot.repeated == 1){
        this.parkinglot.repeated = true;
      } else{
        this.parkinglot.repeated = false;
      }
      if(this.parkinglot.appearance == 1){
        this.parkinglot.appearance = true;
      } else{
        this.parkinglot.appearance = false;
      }
      if(this.parkinglot.admissionConfirmation == 1){
        this.parkinglot.admissionConfirmation = true;
      } else{
        this.parkinglot.admissionConfirmation = false;
      }
      if(this.parkinglot.appearanceConfirmation == 1){
        this.parkinglot.appearanceConfirmation = true;
      } else{
        this.parkinglot.appearanceConfirmation = false;
      }
      if(this.parkinglot.fullParking == 1){
        this.parkinglot.fullParking = true;
      } else{
        this.parkinglot.fullParking = false;
      }
      if(this.parkinglot.parkingCarUpdate == 1){
        this.parkinglot.parkingCarUpdate = true;
      } else{
        this.parkinglot.parkingCarUpdate = false;
      }
      if(this.parkinglot.likeDistinguish == 1){
        this.parkinglot.likeDistinguish = true;
      } else{
        this.parkinglot.likeDistinguish = false;
      }
      if(this.parkinglot.onLine == 1){
        this.parkinglot.onLine = true;
      } else{
        this.parkinglot.onLine = false;
      }
      if(this.parkinglot.dispatch == 1){
        this.parkinglot.dispatch = true;
      } else{
        this.parkinglot.dispatch = false;
      }
      this.showDialog = true;
      this.addParkingLot = false;
    },
    indexMethod (index) {
      return index + (this.paging.page - 1) * this.paging.pageSize + 1;
    }
  }
};
</script>

<style lang="scss" scoped>
#cheweisuo {
  padding: 20px;
}
.el-input__inner,
.el-input {
  width: 200px !important;
}
.demoele {
  float: left;
}
</style>
