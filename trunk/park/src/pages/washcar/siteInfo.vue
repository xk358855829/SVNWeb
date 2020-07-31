<template>
  <div class="zfbInfo">
    <el-form :inline="true" :model="formData" :rules="rules" ref="formData">
      <div style="height:40px">
        <el-button
          type="success"
          class="oyButton back"
          style="float:right;"
          @click="$router.go(-1)"
        >返回</el-button>
      </div>
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <img
              src="../../../static/xinxi.png"
              alt
              style="width:20px;height:20px;vertical-align: middle;margin-top:-4px;"
            />&nbsp;&nbsp;站点信息
          </template>
          <el-row :span="24">
            <el-col :span="8">
              <el-form-item label="站点名称：" prop="sname">
                <el-input v-model="formData.sname"></el-input>
              </el-form-item>
              <el-form-item label="联系人手机号：" prop="phone">
                <el-input v-model="formData.phone"></el-input>
              </el-form-item>
              <!-- <el-form-item label="摄像头名称：" prop="camera">
                <el-select v-model="formData.camera" placeholder="请选择摄像头">
                  <el-option
                    v-for="nice in camera"
                    :key="nice.deviceId"
                    :label="nice.alias"
                    :value="nice.deviceId"
                  ></el-option>
                </el-select>
              </el-form-item> -->
              <!-- <el-form-item label="扫描图片和启动时间间隔：" prop="typeDate" class="typetime">
                <el-input v-model="formData.typeDate"></el-input>
              </el-form-item> -->
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview1"
                :on-success="handleAvatarSuccess1"
                :on-remove="handleRemove1"
                :before-remove="beforeRemove1"
                :before-upload="beforeAvatarUpload1"
                multiple
                :limit="1"
                :on-exceed="handleExceed1"
                :file-list="fileList">
                <el-button size="small" type="success">点击上传详情背景</el-button>
              </el-upload>
            </el-col>
            <el-col :span="8">
              <el-form-item label="站点地址：" prop="address">
                <el-input v-model="formData.address"></el-input>
              </el-form-item>
              <el-form-item label="是否营业：" prop="open">
                <el-select v-model="formData.open" placeholder="请选择是否营业">
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
              </el-form-item>
              <!-- <el-form-item label="储物柜名称：" prop="deviceid">
                <el-select v-model="formData.deviceid" placeholder="请选择储物柜">
                  <el-option
                    v-for="nice in deviceid"
                    :key="nice.deviceId"
                    :label="nice.codestyle"
                    :value="nice.deviceId"
                  ></el-option>
                </el-select>
              </el-form-item> -->
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview2"
                :on-success="handleAvatarSuccess2"
                :on-remove="handleRemove2"
                :before-remove="beforeRemove2"
                :before-upload="beforeAvatarUpload2"
                multiple
                :limit="10"
                :on-exceed="handleExceed2"
                :file-list="fileList1">
                <el-button size="small" type="success">点击上传园区引导图</el-button>
              </el-upload>
            </el-col>
            <el-col :span="8">
              <el-form-item label="联系人：" prop="name">
                <el-input v-model="formData.name"></el-input>
              </el-form-item>
              <el-form-item label="扫描图片和启动时间间隔(分钟)：" prop="typeDate" class="typetime">
                <el-input v-model="formData.typeDate"></el-input>
              </el-form-item>
              <!-- <el-form-item label="洗车机名称：" prop="carid">
                <el-select v-model="formData.carid" placeholder="请选择洗车机">
                  <el-option
                    v-for="nice in 
								carid"
                    :key="nice.deviceid"
                    :label="nice.alias"
                    :value="nice.deviceid"
                  ></el-option>
                </el-select>
              </el-form-item> -->
              <!-- <el-form-item label="停车场名称：" prop="parkingid">
                <el-select v-model="formData.parkingid" placeholder="请选择停车场">
                  <el-option
                    v-for="nice in parkingid"
                    :key="nice.id"
                    :label="nice.parkingName"
                    :value="nice.id"
                  ></el-option>
                </el-select>
              </el-form-item> -->
            </el-col>
          </el-row>
          <div style="height:100px;border-bottom:1px solid #ebeef5">
            <el-button
              type="warning"
              @click="ClickParkingInfo('formData')"
              style="margin-bottom:50px;float:right"
            >保存修改</el-button>
          </div>
        </el-collapse-item>
        <div>
          <div class="rules">站点营业时间：</div>
          <div>
            <span class="aKey">*</span>
            <span class="rules">站点营业开始时间：</span>

            <el-time-select
              placeholder="开始时间"
              v-model="formData.beginTime"
              :picker-options="{
                            start: '00:00',
                            step: '00:30',
                            end: '24:00'
                          }"
            ></el-time-select>
            <br />
            <br />
            <br />
            <span class="aKey">*</span>
            <span class="rules">站点营业结束时间：</span>
            <el-time-select
              placeholder="结束时间："
              v-model="formData.endTime"
              :picker-options="{
                  start: '00:00',
                  step: '00:30',
                  end: '24:00',
                  minTime: beginTime
                }"
            ></el-time-select>
            <br />
            <div style="height:100px;border-bottom:1px solid #ebeef5">
              <el-button
                type="warning"
                @click="setquerenset"
                style="margin-bottom:50px;float:right;"
              >保存修改</el-button>
            </div>
          </div>
        </div>
        <div style="margin-top:0.3rem;">
          <el-row>
            <el-col :span="8">
              <div>
                <span style="font-size:15px;">站点图片：</span>
              </div>
              <br />
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
              <div>
                <span style="font-size:15px;">站点经度：</span>
                <el-input v-model="formData.longitude"></el-input>
              </div>
              <br />
              <br />
              <div>
                <span style="font-size:15px;">站点纬度：</span>
                <el-input v-model="formData.latitude"></el-input>
              </div>
            </el-col>
          </el-row>
          <div style="height:100px;border-bottom:1px solid #ebeef5">
            <el-button
              type="warning"
              @click="cuncar('formData')"
              style="margin-bottom:50px;float:right"
            >保存修改</el-button>
          </div>
        </div>
        <el-collapse-item title="设备信息" name="2">     
          <el-form-item label="洗车机名称：" prop="caridinfo">
            <el-select v-model="bind.carid" placeholder="请选择洗车机">
              <el-option
                v-for="nice in bindcaridinfo"
                :key="nice.deviceid"
                :label="nice.name"
                :value="nice.deviceid"
              ></el-option>
            </el-select>
          </el-form-item>
          <div style="height:100px;">
            <el-button v-if="bindcaridinfo.length > 0"
              type="warning"
              @click="jiebang(2)"
              style="margin-bottom:50px;float:right"
            >解绑</el-button>
            <el-button v-else=""
              type="info"
              style="margin-bottom:50px;float:right"
            >解绑</el-button>
          </div>     
          <!-- <el-form-item label="摄像头名称：" prop="camerainfo">
            <el-select v-model="bind.camera" placeholder="请选择摄像头">
              <el-option
                v-for="nice in bindcamerainfo"
                :key="nice.deviceid"
                :label="nice.name"
                :value="nice.deviceid"
              ></el-option>
            </el-select>
          </el-form-item>
          <div style="height:100px;">
            <el-button v-if="bindcamerainfo.length > 0"
              type="warning"
              @click="jiebang1(1)"
              style="margin-bottom:50px;float:right"
            >解绑</el-button>
            <el-button v-else=""
              type="info"
              style="margin-bottom:50px;float:right"
            >解绑</el-button>
          </div>    -->
          <el-form-item label="储物柜名称：" prop="deviceidinfo">
            <el-select v-model="bind.deviceid" placeholder="请选择储物柜">
              <el-option
                v-for="nice in binddevicedidinfo"
                :key="nice.deviceid"
                :label="nice.name"
                :value="nice.deviceid"
              ></el-option>
            </el-select>
          </el-form-item>
          <div style="height:100px;">
            <el-button v-if="binddevicedidinfo.length > 0"
              type="warning"
              @click="jiebang2(3)"
              style="margin-bottom:50px;float:right"
            >解绑</el-button>
            <el-button v-else=""
              type="info"
              style="margin-bottom:50px;float:right"
            >解绑</el-button>
          </div>
          <el-form-item label="停车场名称：" prop="parkingidinfo">
            <el-select v-model="bind.parkingid" placeholder="请选择停车场">
              <el-option
                v-for="nice in bindparkingidinfo"
                :key="nice.deviceid"
                :label="nice.name"
                :value="nice.deviceid"
              ></el-option>
            </el-select>
          </el-form-item>
          <div style="height:100px;">
            <el-button v-if="bindparkingidinfo.length > 0"
              type="warning"
              @click="jiebang3(4)"
              style="margin-bottom:50px;float:right"
            >解绑</el-button>
            <el-button v-else=""
              type="info"
              style="margin-bottom:50px;float:right"
            >解绑</el-button>
          </div>
          <el-form-item label="4s店名称：" prop="carshopinfo">
            <el-select v-model="bind.carshop" placeholder="请选择4s店铺">
              <el-option
                v-for="nice in bindcarshopinfo"
                :key="nice.cid"
                :label="nice.shopName"
                :value="nice.cid"
              ></el-option>
            </el-select>
          </el-form-item>
          <div style="height:100px;border-bottom:1px solid #ebeef5">
            <el-button v-if="bindcarshopinfo.length > 0"
              type="warning"
              @click="jiebang4(5)"
              style="margin-bottom:50px;float:right"
            >解绑</el-button>
            <el-button v-else=""
              type="info"
              style="margin-bottom:50px;float:right"
            >解绑</el-button>
          </div>
        </el-collapse-item>
      </el-collapse>
      
    </el-form>
  </div>
</template>
<script>
import { mapState } from "vuex";
import {
  getwashinfo,
  exitsite,
  exitsiteOpen,
  getwashEquipment,
  getsiteListinfo,
  getbindcarshopinfo
} from "../../components/api/api.js";
import axios from "axios";
import Qs from "qs";
import { checkNum,checktypeNum } from '../../utils/check';
export default {
  name: "siteInfo",
  data() {
    var checkMchnt_id = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("不能为空"));
      }
      setTimeout(() => {
        if (value.slice(0, 4) != 2088 || value.length != 16) {
          callback(new Error("收款方编号为2088开头的16位纯数字"));
        } else {
          callback();
        }
      }, 1000);
    };
    var checkMobile = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("不能为空"));
      }
      setTimeout(() => {
        const regex = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
        if (!regex.test(value)) {
          callback(new Error("请输入正确的手机号"));
        } else {
          callback();
        }
      }, 1000);
    };
    return {
      formData: {
        sid: "",
        sname: "",
        address: "",
        name: "",
        phone: "",
        open: "",
        camera: "",
        carid: "",
        deviceid: "",
        parkingid: "",
        dealer: "",
        beginTime: "",
        endTime: "",
        longitude: "",
        latitude: "",
        typeDate: ""
      },
      params:"",
      camera: [],
      carid: [],
      deviceid: [],
      parkingid: [],
      bind:{
        camera:"",
        carid:"",
        deviceid:"",
        parkingid:"",
        carshop:"",
      },
      fileList: [],
      fileTwo: {},
      fileList1: [],
      file: {},
      fileList3: [
        // {
        //   url: ""
        // }
      ],
      bindcamerainfo:[],
      bindcaridinfo:[],
      binddevicedidinfo:[],
      bindparkingidinfo:[],     
      bindcarshopinfo:[], 
      dialogImageUrl: "",
      imageUrl: "",
      longitude: "",
      latitude: "",
      dialogVisible: false,
      activeNames: ["1", "2", "3", "4", "5", "6", "7"],
      rules: {
        sname: [{ required: true, message: "请输入站点名称", trigger: "blur" }],
        address: [
          { required: true, message: "请输入站点地址", trigger: "blur" }
        ],
        name: [
          { required: true, message: "请输入联系人姓名", trigger: "blur" }
        ],
        phone: [
          { validator: checkMobile, trigger: "blur" },
          { required: true, message: "不能为空", trigger: "blur" }
        ],
        open: [{ required: true, message: "不能为空", trigger: "change" }],
        // camera: [{ required: true, message: "不能为空", trigger: "change" }],
        // carid: [{ required: true, message: "不能为空", trigger: "change" }],
        typeDate: [
          { validator: checktypeNum, trigger: "blur" },
          { required: true, message: "不能为空", trigger: "blur" }
        ],
      }
    };
  },
  mounted() {
    let that = this;
    getsiteListinfo({ sid: this.$route.query.sid }).then(message => {
      console.log(message);
      if (message.data.resCode == 0) {       
        that.formData = message.data.result;
        that.formData.parkingid = Number(that.formData.parkingid);
        if(message.data.result.parkingurl != ""){
          that.fileList3 = [];
          let list= {url:""};
          list.url = message.data.result.parkingurl;
          that.fileList3.push(list);
          that.imageUrl = message.data.result.parkingurl;
        }
        
      }
    });
    // this.formData = JSON.parse(localStorage.getItem("siteInfo"));
    console.log(this.formData);
    this.getwashinfoList();
    let data = {sid:this.$route.query.sid}
    axios({
      method: 'post',
      url: this.$store.state.wash_test_url + '/parkingSite/selectByDeviceId',
      data: Qs.stringify(data)
    }).then(function (message) {
      console.log(message);
      if (message.data.resCode == 0) {
        if(message.data.result.length > 0){            
          for(var i = 0;i < message.data.result.length;i++){  
            let list = {id:message.data.result[i].id,sid:message.data.result[i].sid,deviceid:message.data.result[i].deviceid,type:message.data.result[i].type,name:message.data.result[i].name}            
            if(message.data.result[i].type == 1){
              // for(var j = 0;j < that.camera.length;j++){
              //   if(list.deviceid == that.camera[j].deviceId){
              //     list.alias = that.camera[j].alias
              //   }
              // }
              that.bindcamerainfo.push(list);
              that.bind.camera = that.bindcamerainfo[0].deviceid;
              console.log(that.bindcamerainfo);
            }else if(message.data.result[i].type == 2){
              // for(var j = 0;j < that.carid.length;j++){
              //   if(list.deviceid == that.carid[j].deviceid){
              //     list.alias = that.carid[j].alias;
              //   }
              // }
              that.bindcaridinfo.push(list);
              that.bind.carid = that.bindcaridinfo[0].deviceid;
              console.log(that.bindcaridinfo);
            }else if(message.data.result[i].type == 3){
              // for(var j = 0;j < that.deviceid.length;j++){
              //   if(list.deviceid == that.deviceid[j].deviceId){
              //     list.alias = that.deviceid[j].codestyle
              //   }
              // }
              that.binddevicedidinfo.push(list);
              that.bind.deviceid = that.binddevicedidinfo[0].deviceid;
              console.log(that.binddevicedidinfo);
            }else{
              // for(var j = 0;j < that.parkingid.length;j++){
              //   if(list.deviceid == that.parkingid[j].id){
              //     list.alias = that.parkingid[j].parkingName
              //   }
              // }
              that.bindparkingidinfo.push(list);
              that.bind.parkingid = that.bindparkingidinfo[0].deviceid;
              console.log(that.bindparkingidinfo);
            }
          }
        }
      }else{
        
      }
    });
    getbindcarshopinfo(data).then(message => {
      console.log(message);
      if (message.data.resCode == 0) {  
        if(message.data.result.length > 0){
          that.bindcarshopinfo = message.data.result;
          that.bind.carshop = that.bindcarshopinfo[0].cid;
        }else{
          that.bindcarshopinfo = [];
        }                      
      }
    });  
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
              let list = { id: message.data.result[i].id ,deviceid: message.data.result[i].deviceid,alias:message.data.result[i].alias};
              that.carid.push(list);
            }
            console.log(that.carid);
          }
        } else {
          that.carid = [];
        }
      });
    },
    ClickParkingInfo(formData) {
      let that = this;
      this.$refs[formData].validate(valid => {
        if (valid) {
          if(this.params!=""){
            if(this.params.file!=""&&this.params.fileTwo!=""){

            }else if(this.params.file!=""&&this.params.fileTwo==undefined){
              this.params.append("fileTwo", "");
            }else if(this.params.fileTwo!=""&&this.params.file==undefined){
              this.params.append("file", "");
            }
          }else{
            this.params = new FormData();
            this.params.append("file", "");
            this.params.append("fileTwo", "");
          }
          console.log(this.params.get("fileTwo"));
          this.params.set("sid", this.formData.sid);
          this.params.set("sname", this.formData.sname);
          this.params.set("address", this.formData.address);
          this.params.set("open", this.formData.open);
          this.params.set("name", this.formData.name);
          this.params.set("phone", this.formData.phone);
          this.params.set("dealer", this.formData.dealer);
          this.params.set("typeDate", this.formData.typeDate);

          // let params = {
          //   sid: this.formData.sid,
          //   sname: this.formData.sname,
          //   address: this.formData.address,
          //   open: this.formData.open,
          //   name: this.formData.name,
          //   phone: this.formData.phone,
          //   // camera: this.formData.camera,
          //   // carid: this.formData.carid,
          //   // deviceid: this.formData.deviceid,
          //   dealer: this.formData.dealer,
          //   // parkingid: this.formData.parkingid,
          //   typeDate: this.formData.typeDate
          // };
          axios({
            method: "post",
            url:
              this.$store.state.wash_test_url + "/parkingLotSite/slectByUpload",
            data: this.params
          }).then(res => {
            console.log(res);
            if (res.data.resCode == 0) {              
              this.$message({
                message: "修改成功",
                type: "success"
              });
              // setTimeout(() => {
              //   window.location.reload()
              // }, 1000);
            } else {
              this.$message({
                message: res.data.result,
                type: "error"
              });
            }
          });
          // exitsite(params).then(res => {
          //   if (res.data.resCode === "0") {
          //     that.$message({
          //       message: "修改成功",
          //       type: "success"
          //     });
          //     setTimeout(() => {
          //       window.location.reload()
          //     }, 1000);
          //   } else {
          //     that.$message({
          //       message: res.data.result,
          //       type: "error"
          //     });
          //   }
          // });
        } else {
          return false;
        }
      });
    },

    setquerenset() {
      if (this.formData.beginTime == "" || this.formData.endTime == "") {
        this.$message.error("带*号的不能为空！");
        return false;
      }
      let data = {
        begintime: this.formData.beginTime,
        endtime: this.formData.endTime,
        ruletype: 1,
        sid: this.formData.sid
      };
      console.log(data);
      exitsiteOpen(data).then(res => {
        console.log(res);
        if (res.data.resCode == 0) {
          this.$message({
            message: "修改成功",
            type: "success"
          });
          setTimeout(() => {
            window.location.reload()
          }, 1000)
        } else {
          this.$message({
            message: res.data.result,
            type: "error"
          });
        }
        // setTimeout(() => {
        //   window.location.reload()
        // }, 1000)
      });
    },
    cuncar() {
      if (this.formData.longitude == "" || this.formData.latitude == "") {
        this.$message.error("站点经纬度不能为空");
        return false;
      }
      if (this.formData.imageUrl == "") {
        this.$message.error("站点图片不能为空");
        return false;
      }
      let data = {
        sid: this.formData.sid,
        longitude: this.formData.longitude,
        latitude: this.formData.latitude,
        parkingurl: this.imageUrl
      };
      console.log(data);
      axios({
        method: "post",
        url:
          this.$store.state.wash_test_url +
          "/parkingLotSite/selectByParkingLotSiteAdd",
        data: Qs.stringify(data)
      }).then(res => {
        console.log(res);
        if (res.data.resCode == 0) {
          this.$message({
            type: "success",
            message: "保存成功"
          });
          setTimeout(() => {
            window.location.reload()
          }, 1000)          
        } else {
          this.$message({
            type: "error",
            message: res.data.result
          });
        }
        // setTimeout(() => {
        //   window.location.reload()
        // }, 1000)
      });
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
      }
      else {
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
            that.fileList3 = [];
            let list= {url:""};
            list.url = res.data.image_url;
            that.fileList3.push(list);
            that.imageUrl = res.data.image_url;
          } else {
            this.$message({
              message: res.data.result,
              type: "error"
            });
          }
        });
      }
    },
    handleExceed(files, fileList) {
      this.$message.error(`当前限制上传1张图片，本次选择了${files.length}张图片，共${files.length + fileList.length}张图片，请删除图片重新上传`);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handleAvatarSuccess(res, file) {
      console.log(res);
      console.log(file);
      // this.imageUrl = res.image_url;
    },

    beforeAvatarUpload1(file) {
      const isJPG = file.type === 'image/jpeg';
      // const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是图片格式!');
        return false;
      }
      this.params = new FormData();
      this.params.append("file", file);
      // if (!isLt2M) {
      //   this.$message.error('上传头像图片大小不能超过 2MB!');
      // }
      // return isJPG && isLt2M;
      // return isJPG;

    },
    handleRemove1(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview1(file) {
      console.log(file);
    },
    handleExceed1(files, fileList) {
      this.$message.warning(`当前限制上传1张图片，本次选择了${files.length}张图片，共${files.length + fileList.length}张图片，请删除图片重新上传`);
    },
    beforeRemove1(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    handleAvatarSuccess1(res, file) {
      console.log(res);
      console.log(file);
      this.fileTwo = file;
    },
    handleRemove2(file, fileList1) {
      console.log(file, fileList1);
    },
    beforeAvatarUpload2(file) {
      const isJPG = file.type === 'image/jpeg';
      // const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是图片格式!');
        return false;
      }
      this.fileList1.push(file);
      console.log(this.fileList1);
      if(this.params!=""){
        this.params.append("fileTwo", this.fileList1);
      }else{
        this.params = new FormData();
        this.params.append("fileTwo", this.fileList1);
      }      
      // if (!isLt2M) {
      //   this.$message.error('上传头像图片大小不能超过 2MB!');
      // }
      // return isJPG && isLt2M;
      // return isJPG;
    },
    handlePreview2(file) {
      console.log(file);
    },
    handleExceed2(files, fileList1) {
      this.$message.warning(`当前限制上传1张图片，本次选择了${files.length}张图片，共${files.length + fileList.length}张图片，请删除图片重新上传`);
    },
    beforeRemove2(file, fileList1) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    handleAvatarSuccess2(res, file) {
      console.log(res);
      console.log(file);
      this.file = file;
    },

    jiebang (type) {
      let that = this;
      this.$confirm('此操作将解绑洗车机设备, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let data = {};
        data.sid = this.$route.query.sid;
        data.type = type;
        data.deviceid = that.bind.carid;
        for(var i = 0;i < that.bindcaridinfo.length;i++){
          if(data.deviceid == that.bindcaridinfo[i].deviceid){
            data.id = that.bindcaridinfo[i].id;
          }
        }
        console.log(data);
        axios(this.$store.state.wash_test_url + '/parkingSite/selectDeleteparkingEqUpdate?deviveid='+data.deviceid+'&type='+data.type+'&sid='+data.sid+'&id='+data.id).then(function (message) {
          console.log(message);
          if (message.data.resCode == 0) {
            that.$message({
              message: "解绑成功",
              type: "success"
            });
            setTimeout(() => {
              window.location.reload()
            }, 1000)
          }else{
            that.$message({
              message: message.data.result,
              type: "error"
            });
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消解绑'
        });
      });
    },
    jiebang1 (type) {
      let that = this;
      this.$confirm('此操作将解绑摄像头设备, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let data = {};
        data.sid = this.$route.query.sid;
        data.type = type;
        data.deviceid = that.bind.camera;
        for(var i = 0;i < that.bindcamerainfo.length;i++){
          if(data.deviceid == that.bindcamerainfo[i].deviceid){
            data.id = that.bindcamerainfo[i].id;
          }
        }
        console.log(data);
        axios(this.$store.state.wash_test_url + '/parkingSite/selectDeleteparkingEqUpdate?deviveid='+data.deviceid+'&type='+data.type+'&sid='+data.sid+'&id='+data.id).then(function (message) {
          console.log(message);
          if (message.data.resCode == 0) {
            that.$message({
              message: "解绑成功",
              type: "success"
            });
            setTimeout(() => {
              window.location.reload()
            }, 1000)
          }else{
            that.$message({
              message: message.data.result,
              type: "error"
            });
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消解绑'
        });
      });
    },
    jiebang2 (type) {
      let that = this;
      this.$confirm('此操作将解绑储物柜设备, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let data = {};
        data.sid = this.$route.query.sid;
        data.type = type;
        data.deviceid = that.bind.deviceid;
        for(var i = 0;i < that.binddevicedidinfo.length;i++){
          if(data.deviceid == that.binddevicedidinfo[i].deviceid){
            data.id = that.binddevicedidinfo[i].id;
          }
        }
        console.log(data);
        axios(this.$store.state.wash_test_url + '/parkingSite/selectDeleteparkingEqUpdate?deviveid='+data.deviceid+'&type='+data.type+'&sid='+data.sid+'&id='+data.id).then(function (message) {
          console.log(message);
          if (message.data.resCode == 0) {
            that.$message({
              message: "解绑成功",
              type: "success"
            });
            setTimeout(() => {
              window.location.reload()
            }, 1000)
          }else{
            that.$message({
              message: message.data.result,
              type: "error"
            });
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消解绑'
        });
      });
    },
    jiebang3 (type) {
      let that = this;
      this.$confirm('此操作将解绑停车场, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let data = {};
        data.sid = this.$route.query.sid;
        data.type = type;        
        data.deviceid = that.bind.parkingid;
        for(var i = 0;i < that.bindparkingidinfo.length;i++){
          if(data.deviceid == that.bindparkingidinfo[i].deviceid){
            data.id = that.bindparkingidinfo[i].id;
          }
        }
        console.log(data);
        axios(this.$store.state.wash_test_url + '/parkingSite/selectDeleteparkingEqUpdate?deviveid='+data.deviceid+'&type='+data.type+'&sid='+data.sid+'&id='+data.id).then(function (message) {
          console.log(message);
          if (message.data.resCode == 0) {
            that.$message({
              message: "解绑成功",
              type: "success"
            });
            setTimeout(() => {
              window.location.reload()
            }, 1000)
          }else{
            that.$message({
              message: message.data.result,
              type: "error"
            });
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消解绑'
        });
      });
    },
    jiebang4 (type) {
      let that = this;
      this.$confirm('此操作将解绑4s店铺, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let data = {};
        data.sid = this.$route.query.sid;       
        data.cid = that.bind.carshop;
        for(var i = 0;i < that.bindcarshopinfo.length;i++){
          if(data.cid == that.bindcarshopinfo[i].cid){
            data.id = that.bindcarshopinfo[i].id;
          }
        }
        console.log(data);
        axios(this.$store.state.wash_test_url + '/parkingSite/selectDeleteCarParkingShop?cid='+data.cid+'&sid='+data.sid+'&id='+data.id).then(function (message) {
          console.log(message);
          if (message.data.resCode == 0) {
            that.$message({
              message: "解绑成功",
              type: "success"
            });
            setTimeout(() => {
              window.location.reload()
            }, 1000)
          }else{
            that.$message({
              message: message.data.result,
              type: "error"
            });
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消解绑'
        });
      });
    },
  }
};
</script>
<style>
.typetime .el-form-item__label{
  line-height: 20px;
}
</style>
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
