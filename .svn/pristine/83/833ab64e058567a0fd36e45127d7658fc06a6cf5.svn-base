<template>
  <div class="zfbInfo">
    <el-form :inline="true"
             :model="formData"
             :rules="rules"
             ref="formData">
      <el-row style="display:none;">
        <el-form-item label="停车场编号">
          <el-input v-model="parkLotInfo.parking_id"
                    :disabled="true">
          </el-input>
        </el-form-item>

      </el-row>
      <div style="height:40px">
        <el-button type="success"
                   class="oyButton back"
                   style="float:right;"
                   @click="$router.go(-1)">返回</el-button>
      </div>
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <img src="../../static/xinxi.png"
                 alt=""
                 style="width:20px;height:20px;vertical-align: middle;margin-top:-4px;">&nbsp;&nbsp;停车场信息
          </template>
          <el-row :span="24">
            <el-col :span="8">
              <el-form-item label="停车场名称："
                            prop="parking_name">
                <el-input v-model="formData.parking_name"></el-input>
              </el-form-item>
              <el-form-item label="停车场类型："
                            prop="parking_lot_type">
                <el-select v-model="formData.parking_lot_type"
                           placeholder="请选择">
                  <el-option value=""
                             key=""
                             label="未选择"></el-option>
                  <el-option v-for="type in gstylelast"
                             :key="type.value"
                             :label="type.type"
                             :value="type.value"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="地图标识："
                            prop="parking_poiid"
                            style="display:none;"
                            v-if="formData.parking_poiid">
                <el-input v-model="formData.parking_poiid"></el-input>&nbsp;&nbsp;
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="停车场地址："
                            prop="parking_address">
                <el-input v-model="formData.parking_address"></el-input>
              </el-form-item>

              <el-form-item label="车位总数："
                            prop="carportcount">
                <el-input v-model="formData.carportcount"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="  客服电话："
                            prop="parking_mobile">
                <el-input v-model="formData.parking_mobile"></el-input>
              </el-form-item>
              <el-form-item label="收款方编号："
                            prop="mchnt_id"
                            v-if="formData.parking_poiid">
                <el-input v-model="formData.mchnt_id"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <img src="../../static/feiyong (1).png"
                 alt=""
                 style="width:20px;height:20px;vertical-align: middle;margin-top:-4px;">&nbsp;&nbsp;费用信息
          </template>
          <el-row :span="24">
            <el-col :span="8">
              <el-form-item label="计费单位："
                            prop="priceUnit">
                <el-select v-model="formData.priceUnit"
                           placeholder="请选择">
                  <el-option v-for="type in 
                  [{
                    value:'小时',
                    label:1
                  },{
                    value:'半小时',
                    label:2
                  }]"
                             :key="type.label"
                             :label="type.value"
                             :value="type.value"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8" v-if="formData.priceUnit == '半小时'">
              <el-form-item label="停车单价："
                            prop="price">
                <el-input v-model="formData.price"></el-input>&nbsp;&nbsp;元/半小时
              </el-form-item>
            </el-col>
            <el-col :span="8" v-else="">
              <el-form-item label="停车单价："
                            prop="price">
                <el-input v-model="formData.price"></el-input>&nbsp;&nbsp;元/小时
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="最高收费："
                            prop="high_price">
                <el-input v-model="formData.high_price"></el-input>&nbsp;&nbsp;元
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="免费时长："
                            prop="free_time">
                <el-input v-model="formData.free_time"></el-input>&nbsp;&nbsp;分钟
              </el-form-item>
            </el-col>
          </el-row>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template slot="title">
            <img src="../../static/zhuangtai.png"
                 alt=""
                 style="width:20px;height:20px;vertical-align: middle;margin-top:-4px;">&nbsp;&nbsp;状态信息
          </template>
          <el-row :span="24">
            <el-col :span="8">
              <el-form-item label="超时时间："
                            prop="time_out">
                <el-input v-model="formData.time_out"></el-input>&nbsp;&nbsp;分钟
              </el-form-item>
              <el-form-item label="最高时长："
                            prop="high_time">
                <el-input v-model="formData.high_time"></el-input>&nbsp;&nbsp;分钟
              </el-form-item>
              <el-form-item label="订单挂起："
                            prop="hangUpOrdered">
                <el-input v-model="formData.hangUpOrdered"
                          maxlength="2"></el-input>&nbsp;&nbsp;小时
                <el-tooltip placement="top">
                  <div slot="content">挂起订单：预约停车后n小时没进场订单挂起，车位恢复空闲可预约状态<br/></div>
                  <img src="../../static/image/ming.png"
                       alt=""
                       style="vertical-align: middle;">
                </el-tooltip><br /><br />
              </el-form-item>

            </el-col>
            <el-col :span="8">
              <el-form-item label="道闸所属："
                            prop="ofBrake">
                <el-select v-model="formData.ofBrake"
                           placeholder="请选择"
                           @change="changelist">
                  <el-option v-for="item in facestoreId"
                             :key="item.faceId"
                             :label="item.facename"
                             :value="item.faceId">

                  </el-option>
                </el-select>
              </el-form-item><br/>
              <el-form-item label="允许车辆进场："
                            prop="isAllowEnter">
                <el-select v-model="formData.isAllowEnter"
                           placeholder="请选择">
                  <el-option v-for="item in isinorout"
                             :key="item.inoutId"
                             :label="item.inoutname"
                             :value="item.inoutId"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="上报记录："
                            prop="valTime">
                <el-input v-model="formData.valTime"
                          placeholder="请输入上报记录"></el-input>&nbsp;秒
                <el-tooltip placement="top">
                  <div slot="content">入、出场时n秒内重复上报不记录不设置时系统默认60s<br/></div>
                  <img src="../../static/image/ming.png"
                       alt=""
                       style="vertical-align: middle;">
                </el-tooltip><br /><br />
              </el-form-item>

            </el-col>
            <el-col :span="8">
              <el-form-item label="拦截异常车牌"
                            prop="isInterceptExceptionCarNumber">
                <el-select v-model="formData.isInterceptExceptionCarNumber"
                           placeholder="请选择">
                  <el-option v-for="type in [{
                                            value:0,
                                            isInterceptExceptionCarNumber:'是'
                                        },{
                                            value:1,
                                            isInterceptExceptionCarNumber:'否'
                                        }]"
                             :key="type.value"
                             :label="type.isInterceptExceptionCarNumber"
                             :value="type.value"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="第三方ID："
                            prop="keyTopParkId"
                            v-if="valist">
                <el-input v-model="formData.keyTopParkId"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <!-- <el-form-item>
                            <el-switch
                                v-model="formData.isUseMark"
                                active-text="使用积分系统"
                                inactive-text="关闭积分系统"
                            >                       
                            </el-switch>
                    </el-form-item> -->
          <br/>
          <div style="height:100px;border-bottom:1px solid #ebeef5">
            <el-button type="warning"
                       @click="ClickParkingInfo('formData')"
                       style="margin-bottom:50px;float:right">保存修改</el-button>
          </div>
        </el-collapse-item>
        <div style="margin-top:0.3rem;">
          <template slot="title">
            <img src="../../static/youhui.png"
                 alt=""
                 style="width:20px;height:20px;vertical-align: middle;margin-top:-4px;">&nbsp;&nbsp;优惠方案
          </template>
          <el-form-item label="添加优惠方案：">
            <el-select v-model="formData.salePlansId"
                       placeholder="请选择"
                       @change="changeval">
              <el-option value="0"
                         key="0"
                         label="未绑定优惠方案"></el-option>
              <el-option v-for="type in mySalePlans"
                         :key="type.plans_id"
                         :label="type.plans_name"
                         :value="type.plans_id"></el-option>
            </el-select>
          </el-form-item>
          <el-button v-if='formData.isBindSalePlants'
                     @click="unplan">解绑优惠方案</el-button>
          <el-row v-if='formData.isBindSalePlants'
                  type="flex"
                  class="row-bg">
            <el-col :span="6">
              <span>满优惠金额：</span>{{formData.salePlan.full || '0'}}元</el-col>
            <el-col :span="6">
              <span>减优惠金额：</span>{{formData.salePlan.subtract || '0'}}元</el-col>
            <el-col :span="6">
              <span>打折优惠金额：</span>{{(formData.salePlan.percent)/10 || '0'}}折</el-col>
          </el-row>
          <el-row v-if='formData.isBindSalePlants'
                  type="flex"
                  class="row-bg">
            <el-col :span="6">
              <span>优惠开始时间：</span>{{formData.salePlan.start_time || '无'}}</el-col>
            <el-col :span="6">
              <span>优惠结束时间：</span>{{formData.salePlan.end_time || '无'}}</el-col>
            <el-col :span="6">
              <span>优惠说明：</span>{{formData.salePlan.remark || '无'}}</el-col>
          </el-row>
          <div style="height:100px;border-bottom:1px solid #ebeef5">
            <el-button type="warning"
                       @click="queren('formData')"
                       style="margin-bottom:50px;float:right">确认绑定</el-button>
          </div>
        </div>
        <div>
          <div class="rules">停车场规则：</div>
          <div>
            <span class="rules">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="aKey">*</span>停车场开放规则：</span>
            <el-select v-model="value"
                       placeholder="请选择">
              <el-option v-for="item in [{
                value:'1',
                label:'否',
              },{
                value:'2',
                label:'是',
              }]"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
            <el-tooltip placement="top">
              <div slot="content">是否超过当天24点</div>
              <img src="../../static/image/ming.png"
                   alt=""
                   style="vertical-align: middle">
            </el-tooltip>
            <br/><br/><br/>
            <span class="aKey">*</span>
            <span class="rules">停车场开放开始时间：</span>

            <el-time-select placeholder="停车场开放开始时间"
                            v-model="valuestartime"
                            :picker-options="{
                          start: '00:00',
                          step: '00:30',
                          end: '24:00'
                        }">
            </el-time-select>
            <br/><br/><br/>
            <span class="aKey">*</span>
            <span class="rules">停车场开放结束时间：</span>
            <el-time-select placeholder="停车场开放结束时间："
                            v-model="valueendtime"
                            :picker-options="{
                start: '00:00',
                step: '00:30',
                end: '24:00',
                minTime: startTime
              }">
            </el-time-select>

            <br/>
            <div style="height:100px;border-bottom:1px solid #ebeef5">
              <el-button type="warning"
                         @click="addquerenset"
                         style="margin-bottom:50px;float:right;">添加规则</el-button>
              <el-button type="warning"
                         @click="setquerenset"
                         style="margin-bottom:50px;float:right;margin-right:50px;">修改设置</el-button>
            </div>
          </div>
        </div>
        <div style="margin-top:0.3rem;">
          <el-row>
            <el-col :span="8">
              <div>
                <span style="font-size:15px;">停车场图片：</span>
              </div><br/>
              <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                         list-type="picture-card"
                         :on-success="handleAvatarSuccess"
                         :before-upload="uploadFile"
                         :limit="1"
                         :on-exceed="handleExceed"
                         :file-list="fileList3"
                         :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
              <!-- <el-dialog :visible.sync="dialogVisible" size="tiny">
                            <img width="100%" :src="dialogImageUrl" alt="">
                            </el-dialog> -->
            </el-col>
            <el-col :span="12">
              <div>
                <span style="font-size:15px;">停车场经度：</span>
                <el-input v-model="longitude"></el-input>
              </div><br/><br/>
              <div>
                <span style="font-size:15px;">停车场纬度：</span>
                <el-input v-model="latitude"></el-input>
              </div>

            </el-col>
          </el-row>
          <div style="height:100px;border-bottom:1px solid #ebeef5">
            <el-button type="warning"
                       @click="cuncar('formData')"
                       style="margin-bottom:50px;float:right">保存</el-button>
          </div>
        </div>
        <el-collapse-item title="道闸信息"
                          name="5">
          <!-- <el-row style="line-height:64px">
                        <el-button type="primary" @click="bindBrake">绑定道闸</el-button>
                    </el-row> -->
          <div class="zfbInfo">
            <el-row>
              <el-col :span="4">
                <img src="../../static/image/jinru.png"
                     alt="">
                <p style="margin-left:10px">入场道闸</p>
              </el-col>
              <el-col :span="20">
                <el-table :data='formData.inBrake' :cell-style="cellStyle" :header-cell-style="rowClass">
                  <el-table-column label="序号"
                                   type="index"></el-table-column>
                  <el-table-column label="道闸名称"
                                   prop="alias"></el-table-column>
                  <el-table-column label="道闸编号"
                                   prop="deviceld"></el-table-column>
                  <el-table-column label="安装时间">
                    <template slot-scope="scope">
                      {{scope.row.date | validate}}
                    </template>
                  </el-table-column>
                  <el-table-column label="操作">
                    <template slot-scope="scope">
                      <el-button type="danger"
                                 @click="jiebang(scope.row.deviceld)">解绑</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4">
                <img src="../../static/image/likai.png"
                     alt="">
                <p style="margin-left:10px">出场道闸</p>
              </el-col>
              <el-col :span="20">
                <el-table :data='formData.outBrake'  :cell-style="cellStyle" :header-cell-style="rowClass">
                  <el-table-column label="序号"
                                   type="index"></el-table-column>
                  <el-table-column label="道闸名称"
                                   prop="alias">
                  </el-table-column>
                  <el-table-column label="道闸编号"
                                   prop="deviceld">

                  </el-table-column>
                  <el-table-column label="安装时间">
                    <template slot-scope="scope">
                      {{scope.row.date | validate}}
                    </template>
                  </el-table-column>
                  <el-table-column label="操作">
                    <template slot-scope="scope">
                      <el-button type="danger"
                                 @click="jiebang(scope.row.deviceld)">解绑</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-col>
            </el-row>
          </div>
          <!-- <div class="zfbInfo"> -->
          <!-- <el-row> -->
          <!-- 道闸白名单 -->
          <!-- </el-row> -->
          <!-- <el-row> -->
          <!-- <el-table :data='formData.whiteBrake'> -->
          <!-- <el-table-column prop="number" label="车牌号码"></el-table-column> -->
          <!-- <el-table-column prop="userName" label="用户姓名"></el-table-column> -->
          <!-- <el-table-column prop="mark" label="有效标记"></el-table-column> -->
          <!-- <el-table-column prop="blackList" label="黑名单"></el-table-column> -->
          <!-- <el-table-column prop="match" label="时间段匹配"></el-table-column> -->
          <!-- <el-table-column prop="startTime" label="生效时间"></el-table-column> -->
          <!-- <el-table-column prop="endTime" label="结束时间"></el-table-column> -->
          <!-- <el-table-column label="操作"></el-table-column> -->
          <!-- </el-table>  -->
          <!-- </el-row> -->
          <!-- </div> -->
        </el-collapse-item>
        <!-- <el-collapse-item v-if="!!formData.parking_poiid" title="其他信息" name="6">
                    <el-form-item label="客服电话：" prop="parking_mobile">
                        <el-input v-model="formData.parking_mobile"></el-input>&nbsp;&nbsp;
                    </el-form-item>
                    <el-form-item label="收款方编号：" prop="mchnt_id">
                        <el-input v-model="formData.mchnt_id"></el-input>&nbsp;&nbsp;
                    </el-form-item>
                    <el-form-item label="地图标识：" prop="parking_poiid">
                        <el-input v-model="formData.parking_poiid"></el-input>&nbsp;&nbsp;
                    </el-form-item>
                </el-collapse-item> -->
        <!-- <el-collapse-item title="月账单" name="7">
                    <Monthlybill></Monthlybill>
                </el-collapse-item> -->
      </el-collapse>
    </el-form>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { salePlans, bindDevice, unbindDevice, updateParkingInfo, whiteBarkeList, ifUseMark, getParkingLotListApi, unpyouh } from './api/api.js'
import Monthlybill from './afterSales/Monthlybill'
import axios from 'axios'
import Qs from 'qs'
export default {
  name: "停车场详情",
  components: {
    Monthlybill
  },
  data () {
    var checkNum = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('不能为空'));
      }
      setTimeout(() => {
        console.log(typeof value, !Number.isInteger(value))
        if (!Number.isInteger(Number(value))) {
          callback(new Error('请输入数字值'));
        } else {
          callback()
        }
      }, 1000);
    }
    var checkMchnt_id = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('不能为空'));
      }
      setTimeout(() => {
        if (value.slice(0, 4) != 2088 || value.length != 16) {
          callback(new Error('收款方编号为2088开头的16位纯数字'));
        } else {
          callback()
        }
      }, 1000);
    }
    var checkMobile = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('不能为空'));
      }
      setTimeout(() => {
        if (value.length < 6 || value.length > 12) {
          callback(new Error('客服电话长度不能小于6位大于12位'));
        } else {
          callback()
        }
      }, 1000);
    }
    return {
      valuestartime: '',
      valueendtime: '',
      value: '',
      parkLotInfo: {},
      val: '',
      valist: '',
      facestoreId: [
        { faceId: 1, facename: '速利道闸' },
        { faceId: 2, facename: '科拓道闸' }
      ],
      isinorout: [
        { inoutId: "2", inoutname: '是' },
        { inoutId: "1", inoutname: '否' }
      ],
      formData: {

        parking_lot_type: "",
        parking_name: '',
        parking_address: '',
        isBindSalePlants: false,
        salePlan: {},
        price: 0,
        high_price: 0,
        free_time: '',
        time_out: '',
        high_time: '',
        hangUpOrdered: '',
        keyTopParkId: '',
        valTime: '',
        ofBrake: '',
        isAllowEnter: '',
        isInterceptExceptionCarNumber: '',
        parking_mobile: '',
        mchnt_id: '',
        parking_poiid: '',
        carportcount: '',
        inBrake: [],
        outBrake: [],
        whiteBrake: [],
        isUseMark: false,
        salePlansId: 0,
        id: String,
        priceUnit: ""
      },
      whiteBarkeList: [],
      fileList3: [
        // {
        //   url: ''
        // }
      ],
      dialogImageUrl: '',
      imageUrl: '',
      longitude: '',
      latitude: '',
      dialogVisible: false,
      activeNames: ['1', '2', '3', '4', '5', '6', '7'],
      rules: {
        parking_name: [
          { required: true, message: '请输入停车场名称', trigger: 'blur' }
        ],
        parking_lot_type: [
          { required: true, message: '请选择停车场类型', trigger: 'blur' }
        ],
        parking_address: [
          { required: true, message: '请输入停车场地址', trigger: 'blur' }
        ],
        carportcount: [
          { validator: checkNum, trigger: 'blur' },
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        price: [
          { validator: checkNum, trigger: 'blur' },
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        high_price: [
          { validator: checkNum, trigger: 'blur' },
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        free_time: [
          { validator: checkNum, trigger: 'blur' },
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        time_out: [
          { validator: checkNum, trigger: 'blur' },
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        high_time: [
          { validator: checkNum, trigger: 'blur' },
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        hangUpOrdered: [
          { validator: checkNum, trigger: 'blur' },
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        keyTopParkId: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        ofBrake: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        isAllowEnter: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        isInterceptExceptionCarNumber: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],

        priceUnit: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],


        parking_mobile: [
          { validator: checkMobile, trigger: 'blur' },
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        mchnt_id: [
          { validator: checkMchnt_id, trigger: 'blur' },
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        parking_poiid: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  computed: mapState({
    ...mapState(['gstylelast', 'mySalePlans', 'parkLotInfo'])
  }),
  mounted () {
    // if (this.valuestartime == '' || this.valueendtime == '' || this.value == '') {
    //   this.$message.error('带*号的不能为空！')
    //   return false;
    // }

    this.$store.dispatch('getSalePlans')
    this.$store.dispatch('getParkingLotList')
    let parkingLotId = sessionStorage.getItem('zfbInfo_parkingId')
    if (!parkingLotId) {
      parkingLotId = this.$route.query.id
    }
    let data = this.$store.getters.getParkingLotInfoById(parkingLotId)
    if (!data) {
      console.log(data)
      getParkingLotListApi({
        page: this.$route.query.page,
        pageSize: 10,
        userId: localStorage.getItem('userId'),
        dealer: localStorage.getItem('dealer')
      }).then(message => {
        if (message.status === 200) {
          data = message.data.result.find(list => list.id == parkingLotId)
          this.parkLotInfo = data
          this.formData.parking_lot_type = this.$store.getters.parkingLotType(data.parking_lot_type) ? this.$store.getters.parkingLotType(data.parking_lot_type).value : ""
          this.formData.parking_name = data.parking_name
          this.formData.parking_address = data.parking_address
          this.formData.price = data.price
          this.formData.high_price = data.high_price
          this.formData.free_time = data.free_time
          this.formData.time_out = data.time_out
          this.formData.high_time = data.high_time
          this.formData.hangUpOrdered = data.hangUpOrdered
          this.formData.keyTopParkId = data.keyTopParkId
          this.formData.valTime = data.valTime
          this.formData.priceUnit = data.priceUnit
          // this.formData.ofBrake = data.ofBrake



          // this.formData.isInterceptExceptionCarNumber = data.isInterceptExceptionCarNumber
          this.formData.parking_mobile = data.parking_mobile
          this.formData.mchnt_id = data.mchnt_id
          this.formData.parking_poiid = data.parking_poiid
          this.formData.carportcount = data.carportcount
          this.formData.isUseMark = !!data.isUseMark
          this.formData.id = data.id
          if (data.ofBrake == 1) {
            this.formData.ofBrake = '速利道闸'
          } else {
            this.valist = true
            this.formData.ofBrake = '科拓道闸'
          }
          if (this.formData.isInterceptExceptionCarNumber == 0) {
            this.formData.isInterceptExceptionCarNumber = '否'
          } else {
            this.formData.isInterceptExceptionCarNumber = '是'
          }
          // if (data.isAllowEnter == 2) {
          //   this.formData.isAllowEnter = '是'
          // } else {
          //   this.formData.isAllowEnter = '否'
          // }
          this.formData.salePlan = this.$store.getters.getSalePlansById(data.isBindSalePlants)
          if (!this.formData.salePlan) {
            this.formData.isBindSalePlants = false
            this.formData.salePlansId = "0"
          } else {
            this.formData.salePlansId = Number(data.isBindSalePlants)
            this.formData.isBindSalePlants = true
          }

          console.log(this.formData)

          bindDevice({ id: data.id }).then(message => {
            this.formData.inBrake = message.data.inBrake
            this.formData.outBrake = message.data.outBrake
          })
          whiteBarkeList({ id: data.id }).then(message => {
            if (message.data.code === '0')
              this.whiteBarkeList = message.data.result
          })
        }
      })
    } else {
      this.parkLotInfo = data
      this.formData.parking_lot_type = this.$store.getters.parkingLotType(data.parking_lot_type) ? this.$store.getters.parkingLotType(data.parking_lot_type).value : ""
    }
    // console.log(data)
    if (data) {
      // console.log(data)
      this.formData.parking_name = data.parking_name
      this.formData.parking_address = data.parking_address
      this.formData.price = data.price
      this.formData.high_price = data.high_price
      this.formData.free_time = data.free_time
      this.formData.time_out = data.time_out
      this.formData.high_time = data.high_time
      this.formData.hangUpOrdered = data.hangUpOrdered
      this.formData.keyTopParkId = data.keyTopParkId
      this.formData.valTime = data.valTime
      this.formData.priceUnit = data.priceUnit
      if (data.ofBrake == 1) {
        this.formData.ofBrake = '速利道闸'
      } else {
        this.valist = true
        this.formData.ofBrake = '科拓道闸'
      }
      // this.formData.ofBrake=data.ofBrake
      // this.formData.ofBrake==1?'是':'否'
      if (this.formData.isInterceptExceptionCarNumber == 0) {
        this.formData.isInterceptExceptionCarNumber = '否'
      } else {
        this.formData.isInterceptExceptionCarNumber = '是'
      }
      this.formData.isAllowEnter = data.isAllowEnter
      // if (data.isAllowEnter == "2") {
      //   this.formData.isAllowEnter = '是'
      // } else {
      //   this.formData.isAllowEnter = '否'
      // }
      this.formData.parking_mobile = data.parking_mobile
      this.formData.mchnt_id = data.mchnt_id
      this.formData.parking_poiid = data.parking_poiid
      this.formData.carportcount = data.carportcount
      this.formData.isUseMark = !!data.isUseMark
      this.formData.id = data.id
      this.formData.salePlan = this.$store.getters.getSalePlansById(data.isBindSalePlants)
      if (!this.formData.salePlan) {
        this.formData.isBindSalePlants = false
        this.formData.salePlansId = "0"
      } else {
        this.formData.salePlansId = Number(data.isBindSalePlants)
        this.formData.isBindSalePlants = true
      }
      console.log(this.formData)
      bindDevice({ id: data.id }).then(message => {
        this.formData.inBrake = message.data.inBrake
        this.formData.outBrake = message.data.outBrake
      })
      whiteBarkeList({ id: data.id }).then(message => {
        if (message.data.code === '0')
          this.whiteBarkeList = message.data.result
      })
    }
    console.log(this.formData.id);
    let that = this;
    axios({
      method: 'post',
      url: 'http://39.104.99.181:8762/web/parkingLotDirection/parkingId',
      data: Qs.stringify({
        parkingId: this.$route.query.id
      })
    }).then(res => {
      console.log(res)
      if (res.data.resCode == 0) {
        this.latitude = res.data.result.latitude
        this.longitude = res.data.result.longitude
        // this.imgurlas=res.data.result.parkingurl
        // this.imgurla = true;
        that.fileList3 = [];
        let list= {url:""};
        list.url = res.data.result.parkingurl;
        that.fileList3.push(list);
        that.imageUrl = res.data.result.parkingurl
        // this.fileList3[0].url = res.data.result.parkingurl
        //  this.fileList3=[]
      } else {
        this.fileList3 = []
      }


    })
    let datas = {
      parkingLotId: this.formData.id
    }
    console.log(data)
    axios({
      method: 'post',
      url: 'http://39.104.99.181:8762/web/opentimerule/list',
      // url: 'http://192.168.2.143:8762/web/opentimerule/list',
      data: Qs.stringify(datas)
    }).then(res => {
      console.log(res)
      if (res.data.resCode == 1) {
        // this.$message({
        //   message: '暂无开放时间',
        //   type: 'success'
        // });
      } else {
        this.valuestartime = res.data.result[0].beginTime
        this.valueendtime = res.data.result[0].endTime
        this.value = res.data.result[0].ruleType == 1 ? '否' : '是'
      }
    })
  },
  methods: {
    ClickParkingInfo (formData) {
      console.log(formData)

      this.$refs[formData].validate(valid => {
        if (valid) {
          // alert('submit!');
          let data = this.parkLotInfo
          let formData = this.formData
          console.log(formData.isAllowEnter)
          let params = {
            carportcount: formData.carportcount,
            dealer: localStorage.getItem('dealer'),
            free_time: formData.free_time,
            high_price: formData.high_price,
            high_time: formData.high_time,
            hangUpOrdered: formData.hangUpOrdered,
            keyTopParkId: formData.keyTopParkId,
            valTime: formData.valTime,
            isAllowEnter: formData.isAllowEnter,
            id: data.id,
            inroadGateId: data.inroadGateId,

            // isBindSalePlants: formData.salePlansId,
            isInterceptExceptionCarNumber: formData.isInterceptExceptionCarNumber = '否' ? 1 : 0,
            ofBrake: formData.ofBrake == "速利道闸" ? 1 : 2,
            isUseMark: formData.isUseMark ? 1 : 0,
            mchnt_id: formData.mchnt_id,
            out_parking_id: data.out_parking_id,
            outroadGateId: data.outroadGateId,
            page: 0,
            pageSize: 0,
            parking_address: formData.parking_address,
            parking_fee_description: data.parking_fee_description,
            parking_id: data.parking_id,
            parking_lot_type: formData.parking_lot_type, //参数修改
            parking_mobile: formData.parking_mobile,
            parking_name: formData.parking_name,
            parking_poiid: formData.parking_poiid,
            pay_type: data.pay_type,
            price: formData.price,
            start: data.start,
            time_out: formData.time_out,
            priceUnit: formData.priceUnit
          }
          console.log(params)
          Promise.all([updateParkingInfo(params), ifUseMark({ id: data.id, isUseMark: Number(this.formData.isUseMark) })]).then(values => {
            if (values[0].data.resCode === '0') {
              this.$message({
                message: '修改成功',
                type: 'success'
              });
              this.$store.dispatch('getSalePlans')
              this.$store.dispatch('getParkingLotList')
              // setTimeout(() => {
              //   window.location.reload()
              // }, 1000)
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    },
    addquerenset () {
      if (this.valuestartime == '' || this.valueendtime == '' || this.value == '') {
        this.$message.error('带*号的不能为空！')
        return false;
      }
      if (this.value == '否') {
        this.value = 1
      } else {
        this.value = 2
      }
      console.log(this.value)
      let data = {
        beginTime: this.valuestartime,
        endTime: this.valueendtime,
        ruleType: this.value,
        parkingLotId: this.formData.id
      }
      console.log(data)
      axios({
        method: 'post',

        url: 'http://39.104.99.181:8762/web/opentimerule/save',
        // url: 'http://192.168.2.143:8762/web/opentimerule/save',
        data: Qs.stringify(data)
      }).then(res => {
        if (res.data.resCode == 200) {
          this.$message({
            message: '添加成功',
            type: 'success'
          });
        }
      })
    },
    setquerenset () {
      if (this.valuestartime == '' || this.valueendtime == '' || this.value == '') {
        this.$message.error('带*号的不能为空！')
        return false;
      }
      let data = {
        beginTime: this.valuestartime,
        endTime: this.valueendtime,
        ruleType: this.value = '否' ? 1 : 2,
        parkingLotId: this.formData.id
      }
      console.log(data)
      axios({
        method: 'post',
        // url: 'http://192.168.2.143:8762/web/opentimerule/update',
        url: 'http://http://39.104.99.181:8762/web/opentimerule/update',
        data: Qs.stringify(data)
      }).then(res => {
        if (res.data.resCode == 200) {
          this.$message({
            message: '设置成功',
            type: 'success'
          });
        }
      })
    },
    changelist (val) {
      if (val == 2) this.valist = true
      else this.valist = false
    },




    queren () {
      if (this.val) {
        let data = {
          id: this.formData.id,
          isBindSalePlants: this.val
        }
        console.log(data)
        axios({
          method: 'post',
          url: this.$store.state.url + '/salePlans/bindsalePlants',
          data: Qs.stringify(data)
        }).then(message => {
          console.log(message.data)
          if (message.data.resCode == 0) {
            this.$message({
              message: '修改成功',
              type: 'success'
            });
          } else {
            this.$message({
              message: '修改失败',
              type: 'error'
            });
          }
          this.$store.dispatch('getSalePlans')
          this.$store.dispatch('getParkingLotList')
          setTimeout(() => {
            window.location.reload()
          }, 1000)
        })
      } else {
        this.$message({
          message: '未绑定优惠方案',
          type: 'error'
        });
      }
    },

    jiebang (deviceld) {
      this.$confirm('此操作将解绑道闸设备, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        unbindDevice({ deviceId: deviceld }).then(res => {
          if (res.data.resCode === '0')
            this.$message({
              message: '解绑成功',
              type: 'success'
            });
          window.location.reload()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消解绑'
        });
      });
    },
    cuncar () {
      console.log(this.imageUrl);
      if (this.longitude == '' || this.latitude == '') {
        this.$message.error('停车场经纬度不能为空');
        return false
      }
      if (this.imageUrl == '') {
        this.$message.error('停车场图片不能为空');
        return false
      }
      let data = {
        longitude: this.longitude,
        parkingId: this.formData.id,
        latitude: this.latitude,
        parkingUrl: this.imageUrl
      }
      console.log(data)
      axios({
        method: 'post',
        url: 'http://39.104.99.181:8762/web/parkingLotDirection/add',
        data: Qs.stringify(data)
      }).then(res => {
        console.log(res)
        if (res.data.resCode == "200") {
          this.$message({
            type: 'success',
            message: '保存成功'
          });
          setTimeout(() => {
            window.location.reload()
          }, 1000)
        } else {
          this.$message({
            type: 'error',
            message: '保存失败'
          });
        }
      })
    },
    unplan () {
      this.$confirm('此操作将解绑优惠方案, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(this.formData.id)
        unpyouh({ id: this.formData.id }).then(res => {
          console.log(res)
          if (res.data.resCode == "0") {
            this.$message({
              type: 'success',
              message: '解绑成功'
            });
          } else {
            this.$message({
              type: 'error',
              message: '解绑失败'
            });
          }
          this.$store.dispatch('getSalePlans')
          this.$store.dispatch('getParkingLotList')
          setTimeout(() => {
            window.location.reload()
          }, 1000)

        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消解绑'
        });
      });
    },
    changeval (val) {
      console.log(val)
      this.val = val
    },
    handleExceed(files, fileList) {
      this.$message.error(`当前限制上传1张图片，本次选择了${files.length}张图片，共${files.length + fileList.length}张图片，请删除图片重新上传`);
    },
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
      console.log(this.dialogImageUrl)
    },
    uploadFile (file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message({
          message: '上传背景图片只能是 JPG 格式!',
          type: 'error'
        });
        return false
      }
      if (!isLt2M) {


        this.$message({
          message: '上传背景图片大小不能超过 2MB!',
          type: 'error'
        });
        return false
      } else {
        var formData = new FormData();
        formData.append('file', file);
        var file = formData;
        let that = this;
        axios({
          method: 'post',
          url: 'http://39.104.99.181:8762/web/parkingLotDirection/upload',
          data: file
        }).then(res => {
          if (res.data.resCode == "200") {
            console.log(res)
            this.$message({
              message: '上传成功',
              type: 'success'
            });
            that.fileList3 = [];
            let list= {url:""};
            list.url = res.data.result.image_url;
            that.fileList3.push(list);
            // this.fileList3[0].url = res.data.result.image_url
            that.imageUrl = res.data.result.image_url
            console.log(that.fileList3)
          } else {
            this.$message({
              message: '上传失败',
              type: 'error'
            });
          }

        })
      }

    },
    handleAvatarSuccess (res, file) {
      console.log(res)
      console.log(file)
      // this.imageUrl = URL.createObjectURL(file.raw);
      console.log(this.imageUrl)
    }
    // methods: {

    // }
  }
}
</script>
<style scoped="scoped">
.zfbInfo {
  padding: 20px;
}
.operationBar {
  margin: 20px;
}
.el-input__inner,
.el-input {
  width: 200px !important;
}
.row-bg {
  font-size: 14px;
  line-height: 0.3rem;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  border: 1px dashed #666;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.rules {
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 0;
}
</style>
