<template>
  <div id="faultList">
    <div class="header">
      <div class="headerTitle">
        <router-link class="router-link-active" to="/pageHome/siteList" tag="span">站点列表</router-link>
        <router-link to="/pageHome/storeList" tag="span">店铺管理</router-link>
        <router-link to="/pageHome/storeStaff" tag="span">店员管理</router-link>
      </div>
    </div>
    <div class="select">
      <span>站点名称：</span>
      <el-select v-model="search.sname" filterable placeholder="请选择" clearable>
        <el-option>未选择</el-option>
        <el-option v-for="item in parkIist" :key="item.sid" :label="item.sname" :value="item.sname"></el-option>
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

        <el-table-column label="站点名称" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.sname }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.sname }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="站点地址" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.address }}</div>
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

        <el-table-column label="是否营业" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.open == 1 ? "是" : "否" }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.open == 1 ? "是" : "否" }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="营业时间" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.beginTime}} ~ {{ scope.row.endTime}}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.beginTime }} ~ {{ scope.row.endTime}}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="联系人" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.name}}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.name }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="联系人手机号" width>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p class="TsMaxWidth">{{ scope.row.phone }}</p>
              <div slot="reference" class="name-wrapper">
                <div class="overflowHide">{{ scope.row.phone }}</div>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop label="操作" width="160">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="修改查看详情" placement="top">
              <i class="icon-See el-icon-search" @click="operation(scope.row)"></i>
            </el-tooltip>
            <!-- <el-tooltip class="item" effect="dark" content="绑定摄像头" placement="top">
              <i class="jilu iconfont icon-yuanchengkongzhi" @click="bind(scope.row,1)"></i>
            </el-tooltip> -->
            <el-tooltip class="item" effect="dark" content="绑定洗车机" placement="top">
              <i class="jilu iconfont icon-jifen" @click="bind(scope.row,2)"></i>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="绑定储物柜" placement="top">
              <i class="icon-change el-icon-setting" @click="bind(scope.row,3)"></i>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="绑定停车场" placement="top">
              <i class="jilu iconfont icon-daozhaguanli" @click="bind(scope.row,4)"></i>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="是否绑定4s店铺" placement="top">
              <i class="jilu iconfont icon-jifenguize" @click="iscarshop(scope.row)"></i>
            </el-tooltip>
            <el-tooltip v-if="scope.row.isshop == 1" class="item" effect="dark" content="绑定4s店铺" placement="top">
              <i class="icon-See el-icon-news" @click="bind(scope.row,5)"></i>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="删除" placement="top">
              <i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="添加" :visible.sync="universal.add">
      <!-- <el-steps :active="active"
                finish-status="success">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>-->
      <!-- <div v-if="active==0"
           class="paythree">
        <el-row>
          <el-col :span="12">
            <img src="../../../static/image/three (1).png"
                 alt="">
            <el-checkbox v-model="chose"
                         @change="changebox"></el-checkbox>
          </el-col>
          <el-col :span="12">
            <img src="../../../static/image/carpay.png"
                 alt="">
            <el-checkbox v-model="choses"
                         @change="changebox1"></el-checkbox>
          </el-col>
        </el-row>
      </div>-->
      <!-- <div v-if="active==2&&chose==true">
        <el-row>
          <el-col :span="12">
            <span class="spanClass">
              <span class="aKey">*</span>停车场编号：</span>
            <el-input :disabled="false"
                      v-model="addB.parking_id"
                      clearable
                      placeholder="请输入停车场编号"></el-input>
            <el-tooltip placement="top">
              <div slot="content">支付宝返回停车场id，系统唯一<br/></div>
              <img src="../../../static/image/ming.png"
                   alt="">
            </el-tooltip><br /><br />

            <span class="spanClass">
              <span class="aKey">*</span>地图标识：</span>
            <el-input :disabled="false"
                      v-model="addB.parking_poiid"
                      clearable
                      placeholder="请输入地图标识"></el-input>
            <el-tooltip placement="top">
              <div slot="content"
                   style="cursor: pointer"
                   @click="listclick">请登陆https://ditu.amap.com直接搜索位置<br/>url链接后显示高德地图唯一标识</div>
              <img src="../../../static/image/ming.png"
                   alt="">
            </el-tooltip><br /><br />

            <span class="spanClass">备注：</span>
            <div class="little">{{this.$store.state.size}}</div>
          </el-col>
          <el-col :span="12">
            <span class="spanClass">
              <span class="aKey">*</span>客服电话：</span>
            <el-input :disabled="false"
                      v-model="addB.parking_mobile"
                      clearable
                      placeholder="请输入客服电话"></el-input><br /><br />
            <span class="spanClass">
              <span class="aKey">*</span>收款方编号：</span>
            <el-input :disabled="false"
                      v-model="addB.mchnt_id"
                      clearable
                      placeholder="请输入收款方ID"></el-input>
            <el-tooltip placement="top">
              <div slot="content">商户在支付宝注册的唯一标识<br/></div>
              <img src="../../../static/image/ming.png"
                   alt="">
            </el-tooltip><br /><br />
          </el-col>
        </el-row>
      </div>
      <div v-if="active==2&&choses==true">
        <el-row>
          <el-col :span="12">
            <span class="spanClass">
              <span class="aKey">*</span>客服电话：</span>
            <el-input :disabled="false"
                      v-model="addA.parking_mobile"
                      clearable
                      placeholder="请输入客服电话"></el-input><br /><br />

            <span class="spanClass">备注：</span>
            <div class="little">{{this.$store.state.size}}</div>
          </el-col>
          <el-col :span="12">
          </el-col>
        </el-row>
      </div>-->
      <!-- <div v-if="active==1"> -->
      <div>
        <el-row>
          <el-col :span="12">
            <span class="spanClass">
              <span class="aKey">*</span>站点名称：
            </span>
            <el-input :disabled="false" v-model="addB.sname" clearable placeholder="请输入站点名称"></el-input>
            <br />
            <br />
            <span class="spanClass">
              <span class="aKey">*</span>站点地址：
            </span>
            <el-input :disabled="false" v-model="addB.address" clearable placeholder="请输入站点地址"></el-input>
            <br />
            <br />
            <!-- <span class="spanClass">
                <span class="aKey">*</span>站点类型：</span>
              <el-select v-model="addB.parking_lot_type"
                         placeholder="请选择站点类型">
                <el-option value="">未选择</el-option>
                <el-option v-for="nice in gstylelast"
                           :key="nice.id"
                           :label="nice.type"
                           :value="nice.value"></el-option>
            </el-select><br /><br />-->

            <span class="spanClass">
              <span class="aKey">*</span>是否营业：
            </span>
            <el-select v-model="addB.open" placeholder="请选择是否营业">
              <el-option
                v-for="nice in 
								[{
									value:'是',
									label:'1'
								},{
									value:'否',
									label:'0'
								}]"
                :key="nice.label"
                :label="nice.value"
                :value="nice.label"
              ></el-option>
            </el-select>
            <br />
            <br />
            <span class="spanClass">
              <span class="aKey">*</span>联系人：
            </span>
            <el-input :disabled="false" v-model="addB.name" clearable placeholder="请输入联系人姓名"></el-input>
            <br />
            <br />
            <span class="spanClass">
              <span class="aKey">*</span>手机号：
            </span>
            <el-input :disabled="false" v-model="addB.phone" clearable placeholder="请输入手机号码"></el-input>
            <br />
            <br />
            <!-- <span class="spanClass">
              <span class="aKey">*</span>摄像头名称：
            </span>
            <el-select v-model="addB.camera" placeholder="请选择">
              <el-option
                v-for="nice in camera"
                :key="nice.deviceId"
                :label="nice.alias"
                :value="nice.deviceId"
              ></el-option>
            </el-select>
            <br />
            <br /> -->
            <span class="spanClass" style="width:110px !important;">
              <!-- <span class="aKey">*</span> -->
              站点图片：
            </span>
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
          </el-col>
          <el-col :span="12">
            <!-- <span class="spanClass" style="width:143px !important;">
              <span class="aKey">*</span>洗车机名称：
            </span>
            <el-select v-model="addB.carid" placeholder="请选择">
              <el-option
                v-for="nice in 
								carid"
                :key="nice.deviceid"
                :label="nice.alias"
                :value="nice.deviceid"
              ></el-option>
            </el-select>
            <br />
            <br />
            <span class="spanClass" style="width:143px !important;">
              <span class="aKey">*</span>
              储物柜名称：
            </span>
            <el-select v-model="addB.deviceid" placeholder="请选择">
              <el-option
                v-for="nice in deviceid"
                :key="nice.deviceId"
                :label="nice.codestyle"
                :value="nice.deviceId"
              ></el-option>
            </el-select>
            <br />
            <br />
            <span class="spanClass" style="width:143px !important;">
              <span class="aKey">*</span>
              停车场名称：
            </span>
            <el-select v-model="addB.parkingid" placeholder="请选择">
              <el-option v-for="nice in parkingid" :key="nice.id" :label="nice.parkingName" :value="nice.id"></el-option>
            </el-select>
            <br />
            <br /> -->
            <span class="spanClass" style="width:143px !important;">
              <span class="aKey">*</span>是否是4s店：
            </span>
            <el-select v-model="addB.isshop" placeholder="请选择是否是4s店">
              <el-option
                v-for="nice in 
								[{
									value:'是',
									label:'1'
								},{
									value:'否',
									label:'0'
								}]"
                :key="nice.label"
                :label="nice.value"
                :value="nice.label"
              ></el-option>
            </el-select>
            <br />
            <br />
            <span class="spanClass" style="width:143px !important;">
              <span class="aKey">*</span>营业开始时间：
            </span>
            <el-time-select
              placeholder="开始时间"
              v-model="addB.beginTime"
              :picker-options="{
                          start: '00:00',
                          step: '00:30',
                          end: '24:00'
                        }"
            ></el-time-select>
            <br />
            <br />
            <span class="spanClass" style="width:143px !important;">
              <span class="aKey">*</span>营业结束时间：
            </span>
            <el-time-select
              placeholder="结束时间"
              v-model="addB.endTime"
              :picker-options="{
                start: '00:00',
                step: '00:30',
                end: '24:00',
                minTime: addB.beginTime
              }"
            ></el-time-select>
            <br />
            <br />
            <span class="spanClass" style="width:143px !important;">
              <span class="aKey">*</span>站点经度：
            </span>
            <el-input :disabled="false" v-model="addB.longitude" clearable placeholder="请输入站点经度"></el-input>
            <br />
            <br />
            <span class="spanClass" style="width:143px !important;">
              <span class="aKey">*</span>站点纬度：
            </span>
            <el-input :disabled="false" v-model="addB.latitude" clearable placeholder="请输入站点纬度"></el-input>
            <br />
            <br />
            <span class="spanClass" style="width:143px !important;line-height:20px;">
              <span class="aKey">*</span>扫描图片和启动时间间隔：
            </span>
            <el-input :disabled="false" v-model="addB.typeDate" clearable placeholder="默认单位:分钟"></el-input>
          </el-col>
        </el-row>
      </div>
      <!-- </div> -->
      <div slot="footer" class="dialog-footer">
        <el-button type="success" class="oyButton" @click="universal.add = false">取消</el-button>
        <!-- <el-button
          style="margin-top: 12px;"
          type="success"
          class="oyButton"
          @click="prev"
          v-if="active==2"
        >上一步</el-button>
        <el-button
          style="margin-top: 12px;"
          type="success"
          class="oyButton"
          @click="next"
          v-if="active==1"
        >下一步</el-button>-->
        <el-button style="margin-top: 12px;" type="success" class="oyButton" @click="addClick">保存</el-button>
      </div>
    </el-dialog>
    <el-dialog :title="universal1.camera ? '绑定摄像头' : universal1.carid ? '绑定洗车机' : universal1.deviceid ? '绑定储物柜' : universal1.parkingid ? '绑定停车场': '绑定4s店铺'"
               :visible.sync="universal1.bind">
      <div class="totalcard">
        <div class="leftcard" v-if="universal1.camera">
          <span class="spanClass">
            <span class="aKey">*</span>摄像头名称：</span>
          <el-select v-model="deviceid1" placeholder="请选择摄像头" clearable>
                  <el-option
                    v-for="nice in camera"
                    :key="nice.deviceId"
                    :label="nice.alias"
                    :value="nice.deviceId"
                  ></el-option>
                </el-select>
        </div>
        <div class="leftcard" v-if="universal1.carid">
          <span class="spanClass">
            <span class="aKey">*</span>洗车机名称：</span>
          <el-select v-model="deviceid1" placeholder="请选择洗车机" clearable>
                  <el-option
                    v-for="nice in 
								carid"
                    :key="nice.deviceid"
                    :label="nice.alias"
                    :value="nice.deviceid"
                  ></el-option>
                </el-select>
        </div>
        <div class="leftcard" v-if="universal1.deviceid">
          <span class="spanClass">
            <span class="aKey">*</span>
            储物柜名称：</span>
          <el-select v-model="deviceid1" placeholder="请选择储物柜" clearable>
                  <el-option
                    v-for="nice in deviceid"
                    :key="nice.deviceId"
                    :label="nice.codestyle"
                    :value="nice.deviceId"
                  ></el-option>
                </el-select>
        </div>
        <div class="leftcard" v-if="universal1.parkingid">
          <span class="spanClass">
            <span class="aKey">*</span>
            停车场名称：</span>
          <el-select v-model="deviceid1" placeholder="请选择停车场" clearable>
                  <el-option
                    v-for="nice in parkingid"
                    :key="nice.id"
                    :label="nice.parkingName"
                    :value="nice.id"
                  ></el-option>
                </el-select>
        </div>
        <div class="leftcard" v-if="universal1.carshop">
          <span class="spanClass">
            <span class="aKey">*</span>
            4s店铺名称：</span>
          <el-select v-model="deviceid1" placeholder="请选择4s店铺" clearable>
                  <el-option
                    v-for="nice in carshop"
                    :key="nice.id"
                    :label="nice.shopName"
                    :value="nice.id"
                  ></el-option>
                </el-select>
        </div>
        <span class="spanClass">备注：</span>
        <div class="little">{{this.$store.state.size}}</div>
      </div>      
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="universal1.bind=false">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="barrierclick">确定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="是否是4s店铺"
               :visible.sync="universal1.iscarshop">
      <div class="totalcard">
        <div class="leftcard">
          <span class="spanClass" style="width:116px!important;">
            <span class="aKey">*</span>是否是4s店铺：</span>
            <el-select v-model="isShop" placeholder="请选择类型" clearable>
              <el-option
                  v-for="nice in 
                  [{
                    value:'是',
                    label:'1'
                  },{
                    value:'否',
                    label:'0'
                  }]"
                  :key="nice.label"
                  :label="nice.value"
                  :value="nice.label"
                ></el-option>
              </el-select>
        </div>
        <span class="spanClass" style="width:116px!important;">备注：</span>
        <div class="little">{{this.$store.state.size}}</div>
      </div>      
      <div slot="footer"
           class="dialog-footer">
        <el-button type="success"
                   class="oyButton"
                   @click="universal1.iscarshop=false">取消</el-button>
        <el-button type="success"
                   class="oyButton"
                   @click="ifbindcarshop">确定</el-button>
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
  addsite,
  delsite,
  exitsite,
  getwashinfo,
  getwashEquipment,
  getwashcarshopinfo
} from "../../components/api/api.js";
import { nowDate } from "../../../common/common.js";
export default {
  name: "siteList",
  data() {
    return {
      paging: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      tableData: [],
      search: {
        sname: ""
      },
      camera: [],
      carid: [],
      deviceid: [],
      parkingid: [],
      carshop:[],
      addB: {
        sname: "",
        address: "",
        open: "1",
        name: "",
        phone: "",
        camera: "",
        carid: "",
        deviceid: "",
        parkingid: "",
        parkingurl:"",
        beginTime: "",
        endTime: "",
        longitude: "",
        latitude: "",
        dealer: "",
        typeDate: "",
        isshop:"0"
      },
      universal1: {
        bind: false,
        camera: false,
        carid: false,
        deviceid: false,
        parkingid: false,
        carshop:false,
        iscarshop:false,
      },
      deviceid1:"",
      type:"",
      bindsid:"",
      bindname:"",
      isShop:"0",

      fileList3: [
        // {
        //   url: ''
        // }
      ],

      searchinner: {
        carnumber: "",
        username: "",
        nisblacklist: "",
        deviceid: ""
      },
      parkingcral: false,
      preferential: [],
      parkIist: [],
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

      addA: {
        parking_name: "",
        parking_mobile: "",
        parking_address: "",
        carportcount: "",
        price: "",
        time_out: "",
        free_time: "",
        high_price: "",
        parking_lot_type: "",
        high_time: ""
      },
      bianhao: "",

      look: {
        deviceld: "",
        number: "",
        protocol: "",
        systime: "",
        sim: ""
      },
      vallist: false,
      change1: {
        parking_name: "",
        parking_address: "",
        parking_lot_type: "",
        parking_mobile: "",
        // parking_fee_description:'',
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
        // parking_fee_description:'',
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
        // parking_fee_description:'',
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
        // parking_fee_description:'',
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
    this.gongyong();
    let data = {
      page: 1,
      pageSize: 10,
      userId: localStorage.getItem("userId"),
      dealer: localStorage.getItem("dealer")
    };
    this.getwashsiteList();
    this.getwashcarshopList();
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
    getwashcarshopList() {
      let that = this;
      let params = {
        page: 1,
        pageSize: 500,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer")
      };
      getwashcarshopinfo(params).then(message => {
        console.log(message);
        if (message.data.result.length > 0) {
          that.carshop = message.data.result;
        } else {
          that.carshop = [];
        }
      });
    },
    listclick() {
      window.open("https://ditu.amap.com");
    },
    changebox() {
      this.chose = true;
      this.choses = false;
    },
    changebox1() {
      this.chose = false;
      this.choses = true;
    },
    prev() {
      --this.active;
      if (this.active < 0) {
        this.active = 0;
      }
    },
    next() {
      if (this.active++ > 2) this.active = 0;
    },

    AddShow() {
      this.active = 1;
      this.universal.add = true;
      // this.addA.parking_name = ''
      // this.addA.parking_mobile = ''
      // this.addA.price = ''
      // this.addA.time_out = ''
      // this.addA.free_time = ''
      // this.addA.high_price = ''
      // this.addA.parking_lot_type = ''
      // this.addA.parking_address = ''
      // this.addA.high_time = ''
      // this.addA.carportcount = ''
      this.addB.sname = "";
      this.addB.address = "";
      this.addB.open = "1";
      this.addB.name = "";
      this.addB.phone = "";
      this.addB.camera = "";
      this.addB.carid = "";
      this.addB.deviceid = "";
      this.addB.parkingid = "";
      this.addB.parkingurl = "";
      this.addB.longitude = "";
      this.addB.latitude = "";
      this.addB.beginTime = "";
      this.addB.endTime = "";
      this.addB.typeDate = "";
      this.addB.isshop = "0";
      let that = this;
      this.getwashinfoList();
      // that.gongyong()
      var d = new Date();
      that.bianhao = d.valueOf();
    },
    gongyong() {
      let that = this;
      let dataS = {
        page: that.paging.page,
        pageSize: that.paging.pageSize,
        userId: localStorage.getItem("userId"),
        dealer: localStorage.getItem("dealer")
      };
      axios({
        method: "post",
        url: that.$store.state.url + "/salePlans/selectAll",
        data: Qs.stringify(dataS)
      }).then(function(message) {
        that.preferential = message.data.result;
      });
    },
    indent(row) {
      this.universal.indent = true;
      let data = {
        page: this.paging.page,
        pageSize: this.paging.pageSize
      };
      let that = this;
      axios({
        method: "post",
        url: this.$store.state.url + "/feeOrder/orders",
        data: Qs.stringify(data)
      }).then(function(message) {
        if (message.data.resCode == 0) {
        }
      });
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
    uploadFile(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message({
          message: "上传背景图片只能是 JPG 格式!",
          type: "error"
        });
        return false;
      }
      if (!isLt2M) {
        this.$message({
          message: "上传背景图片大小不能超过 2MB!",
          type: "error"
        });
        return false;
      } else {
        var formData = new FormData();
        formData.append("file", file);
        var file = formData;
        let that = this;
        axios({
          method: "post",
          url:
            this.$store.state.wash_test_url + "/parkingLotSite/slectByUpload",
          data: file
        }).then(res => {
          if (res.data.resCode == 0) {
            console.log(res);
            this.$message({
              message: "上传成功",
              type: "success"
            });
            let list= {url:""};
            list.url = res.data.image_url;
            that.fileList3.push(list);
            // that.fileList3[0].url = res.data.image_url;
            that.addB.parkingurl = res.data.image_url;
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
      // this.imageUrl = res.image_url;
    },
    addClick() {
      let that = this;
      console.log(that.addB);
      // if (that.chose) {
      if (
        that.addB.sname == "" ||
        that.addB.address == "" ||
        that.addB.open == "" ||
        that.addB.name == "" ||
        that.addB.phone == "" ||
        that.addB.longitude == "" ||
        that.addB.latitude == "" ||
        that.addB.beginTime == "" ||
        that.addB.endTime == "" ||
        that.addB.typeDate == "" ||
        that.addB.isshop == ""
      ) {
        that.$message.error("带*的数据不能为空哦！");
        return false;
      }
      if (that.addB.phone != "") {
        if (!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.addB.phone)) {
          that.$message.error("请输入正确的手机号码");
          return false;
        }
      }
      if (that.addB.typeDate != "") {
        const regex = /^([0-9]*[1-9][0-9]*(.[0-9]+)?|[0]+.[0-9]*[1-9][0-9]*)$/;
        if (!regex.test(that.addB.typeDate)) {
          that.$message.error("请输入大于0的数字值");
        }else{
          if (this.addB.typeDate > 30) {
            that.$message.error("时间间隔不得大于30分钟");
            return false;
          }
        }        
      }

      that.addB.dealer = localStorage.getItem("dealer");
      that.addB.date = this.common.nowDate();
      console.log(that.addB);
      addsite(that.addB).then(function(message) {
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
      // } else if (that.choses) {
      //   if (
      //     that.addB.isInterceptExceptionCarNumber === "" ||
      //     that.addB.ofBrake === "" ||
      //     that.addB.isAllowEnter == "" ||
      //     that.addB.high_time == "" ||
      //     that.addB.parking_name == "" ||
      //     that.addB.parking_address == "" ||
      //     that.addB.parking_lot_type == "" ||
      //     that.addA.parking_mobile == "" ||
      //     that.addB.carportcount == "" ||
      //     that.addB.price == "" ||
      //     that.addB.time_out == "" ||
      //     that.addB.free_time == "" ||
      //     that.addB.high_price == "" ||
      //     that.addB.hangUpOrdered == ""
      //   ) {
      //     that.$message.error("带*的数据不能为空哦！");
      //     return false;
      //   }
      //   if (that.addB.isInterceptExceptionCarNumber == "是") {
      //     that.addB.isInterceptExceptionCarNumber = 0;
      //   } else {
      //     that.addB.isInterceptExceptionCarNumber = 1;
      //   }
      //   if (that.addB.isAllowEnter == "是") {
      //     that.addB.isAllowEnter = 1;
      //   } else {
      //     that.addB.isAllowEnter = 2;
      //   }
      //   if (that.addB.ofBrake == "速利道闸") {
      //     that.addB.ofBrake = 1;
      //   } else {
      //     that.addB.ofBrake = 2;
      //   }
      //   let dataB = that.addA;
      //   if (that.addB.plans_id == "") {
      //     that.addB.plans_id = 0;
      //   }
      //   dataB.dealer = localStorage.getItem("dealer");
      //   dataB.parking_fee_description = that.addB.price;
      //   dataB.isBindSalePlants = that.addB.plans_id;
      //   dataB.hangUpOrdered = that.addB.hangUpOrdered;
      //   dataB.ofBrake = that.addB.ofBrake;
      //   dataB.isAllowEnter = that.addB.isAllowEnter;
      //   dataB.carportcount = that.addB.carportcount;
      //   dataB.free_time = that.addB.free_time;
      //   dataB.high_price = that.addB.high_price;
      //   dataB.high_time = that.addB.high_time;
      //   dataB.parking_address = that.addB.parking_address;
      //   dataB.parking_name = that.addB.parking_name;
      //   dataB.price = that.addB.price;
      //   dataB.time_out = that.addB.time_out;
      //   dataB.valTime = that.addB.valTime;
      //   dataB.parking_lot_type = that.addB.parking_lot_type;
      //   dataB.dealer = localStorage.getItem("dealer");
      //   if (isNaN(dataB.high_time)) {
      //     this.$message.error("最高时长为数字");
      //     return false;
      //   }
      //   if (isNaN(dataB.free_time)) {
      //     this.$message.error("免费时长为数字");
      //     return false;
      //   }
      //   if (isNaN(dataB.price)) {
      //     this.$message.error("停车单价为数字");
      //     return false;
      //   }
      //   if (isNaN(dataB.time_out)) {
      //     this.$message.error("超时时间为数字");
      //     return false;
      //   }
      //   if (isNaN(dataB.hangUpOrdered)) {
      //     this.$message.error("挂起订单为数字");
      //     return false;
      //   }
      //   if (isNaN(dataB.high_price)) {
      //     this.$message.error("最高价格为数字");
      //     return false;
      //   }
      //   if (isNaN(dataB.carportcount)) {
      //     this.$message.error("车位个数为数字");
      //     return false;
      //   }
      //   axios({
      //     method: "post",
      //     url: this.$store.state.url + "/Parking/createLotForThird",
      //     data: Qs.stringify(dataB)
      //   }).then(message => {
      //     if (message.data.resCode == 0) {
      //       that.searchClick();
      //       that.$message({
      //         message: message.data.result,
      //         type: "success"
      //       });
      //     } else {
      //       that.$message({
      //         message: message.data.result,
      //         type: "error"
      //       });
      //     }
      //   });
      // }
      // that.chose = true;
      // that.choses = false;
      // that.universal.add = false;
      // this.$store.dispatch("getSalePlans");
      // this.$store.dispatch("getParkingLotList");
      // this.parktitle();
    },
    deleteClick(row) {
      let that = this;
      this.$confirm("此操作将永久删除该条数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          axios(this.$store.state.wash_test_url + "/parkingSite/deleteByParkingSite?sid="+row.sid).then(function(message) {
            if (message.data.resCode == 0) {
              that.searchClick();
              that.$message({
                message: "删除成功",
                type: "success"
              });
            }
            // else if (message.data.resCode == 1) {
            //   that.$message({
            //     message: "接入支付宝,暂不可删除",
            //     type: "error"
            //   });
            // }
            else {
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
      if (this.search.sname) {
        data.sname = this.search.sname;
      }
      let that = this;
      that.tableData = [];
      getsiteList(data).then(message => {
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
      //查看详情
      console.log(row);
      localStorage.setItem("siteInfo", JSON.stringify(row));
      this.$router.push({
        path: "/pageHome/siteInfo",
        query: {
          sid: row.sid
        }
      });
    },
    iscarshop(row){
      this.universal1.iscarshop = true;
      if(row.isshop == ""){
        this.isShop = "0";
      }else{
        this.isShop = row.isshop;
      }      
      this.bindsid = row.sid;
    },
    ifbindcarshop(){
      let data = {
        sid:this.bindsid,
        isShop:this.isShop
      }
      let that = this;      
      axios({
        method: 'post',
        url: this.$store.state.wash_test_url + '/parkingSite/selectByIsshop',
        data: Qs.stringify(data)
      }).then(function (message) {
        console.log(message);
        if (message.data.resCode == 0) {
          that.$message({
            message: "修改成功",
            type: "success"
          });
          that.universal1.iscarshop = false;
          that.searchClick();
        }else{
          that.$message({
            message: message.data.result,
            type: "error"
          });
        }
      })
    },
    bind (row,type) {
      this.deviceid1 = "";
      this.bindsid = row.sid;
      this.type = type;
      this.universal1.bind = true;
      if(type == 1){
        this.universal1.camera = true;
        this.universal1.carid = false;
        this.universal1.deviceid = false;
        this.universal1.parkingid = false;
      }else if(type == 2){
        this.universal1.carid = true;
        this.universal1.camera = false;
        this.universal1.deviceid = false;
        this.universal1.parkingid = false;
      }else if(type == 3){
        this.universal1.deviceid = true;
        this.universal1.camera = false;
        this.universal1.carid = false;
        this.universal1.parkingid = false;
      }else if(type == 4){
        this.universal1.parkingid = true;
        this.universal1.camera = false;
        this.universal1.carid = false;
        this.universal1.deviceid = false;
      }else{
        this.universal1.carshop = true;
        this.universal1.camera = false;
        this.universal1.carid = false;
        this.universal1.deviceid = false;
        this.universal1.parkingid = false;
      }      
      this.getwashinfoList();
    },
    barrierclick(){
      if(this.deviceid1 == ""){
        that.$message.error("带*的数据不能为空哦！");
      }else{
        if(this.type == 5){
          for(var i = 0;i < this.carshop.length;i++){
            if(this.deviceid1 == this.carshop[i].id){
              this.bindname = this.carshop[i].shopName;
            }
          }
          let data = {
            sid:this.bindsid,
            cid:this.deviceid1,
            shopName:this.bindname,
          }
          let that = this;      
          axios({
            method: 'post',
            url: this.$store.state.wash_test_url + '/parkingSite/selectByCarParkingShopSave',
            data: Qs.stringify(data)
          }).then(function (message) {
            console.log(message);
            if (message.data.resCode == 0) {
              that.$message({
                message: "绑定成功",
                type: "success"
              });
              that.universal1.bind = false;
              that.searchClick();
            }else{
              that.$message({
                message: message.data.result,
                type: "error"
              });
            }
          })
        }else{
          if(this.type == 1){
            for(var i = 0;i < this.camera.length;i++){
              if(this.deviceid1 == this.camera[i].deviceId){
                this.bindname = this.camera[i].alias;
              }
            }
          }else if(this.type == 2){
            for(var i = 0;i < this.carid.length;i++){
              if(this.deviceid1 == this.carid[i].deviceid){
                this.bindname = this.carid[i].alias;
              }
            }
          }else if(this.type == 3){
            for(var i = 0;i < this.deviceid.length;i++){
              if(this.deviceid1 == this.deviceid[i].deviceId){
                this.bindname = this.deviceid[i].codestyle;
              }
            }
          }else if(this.type == 4){
            for(var i = 0;i < this.parkingid.length;i++){
              if(this.deviceid1 == this.parkingid[i].id){
                this.bindname = this.parkingid[i].parkingName;
              }
            }
          }
          let data = {
            sid:this.bindsid,
            deviceid:this.deviceid1,
            name:this.bindname,
            type:this.type
          }
          let that = this;      
          axios({
            method: 'post',
            url: this.$store.state.wash_test_url + '/parkingSite/selectByparkingEqUpdate',
            data: Qs.stringify(data)
          }).then(function (message) {
            console.log(message);
            if (message.data.resCode == 0) {
              that.$message({
                message: "绑定成功",
                type: "success"
              });
              that.universal1.bind = false;
              that.searchClick();
            }else{
              that.$message({
                message: message.data.result,
                type: "error"
              });
            }
          })
        }       
      }      
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
  width: 110px !important;
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