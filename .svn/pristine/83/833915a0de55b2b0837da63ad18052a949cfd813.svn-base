<template>
  <div class="dialog">
    <div class="dialog-container">
      <!-- <div class="dialog-title">{{title}}</div> -->
      <div class="content">
        <div
          style="width:2rem;height:2rem;border-radius:50%;border:2px solid #f68b1b;color:#f68b1b;text-align:center;line-height:2rem;margin:0.5rem auto;font-size:1rem;"
        >{{count}}</div>
        <div style="text-align:center;color:#f68b1b;font-size:14px;">洗车机启动中</div>
      </div>
      <div class="btns">
        <div class="default-btn" @click="closeBtn">{{cancelText}}</div>
        <!-- <div class="confirm-btn" @click="confirmAndRebootBtn">{{confirmAndRebootText}}</div> -->
        <!-- <div class="confirm-btn" @click="confirmBtn">{{confirmText}}</div> -->
      </div>
      <!-- <div class="close-btn" @click="closeBtn"><i class="el-icon-close"></i></div> -->
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Qs from "qs";
import { MessageBox, Indicator,Toast } from "mint-ui";
import { getsiteList } from "./api/api.js";
export default {
	data() {
		return {
			count: 5,
      timer: null,
      carNumber:"",
      sname:"",
      carId:"",
      camera:"",
      member:"",
      detailed:{},
      parkIist:[],
      ifclick:true,
      time:1,
      interval:"",
		}
	},
  props: {
    // 类型包括 defalut 默认， danger 危险， confirm 确认，
    type: {
      type: String,
      default: "default"
    },
    // content: {
    //     type: String,
    //     default: ''
    // },
    title: {
      type: String,
      default: ""
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    confirmAndRebootText: {
      type: String,
      default: "确定"
    },
    confirmText: {
      type: String,
      default: "稍后自行重启"
    },
    // count: {
    //   type: Number,
    //   default: 3
    // },
    onlodaing: {
      type: Function,
      default: null,
    },
  },
  methods: {
    closeBtn() {
      clearInterval(this.timer);
      this.timer = null;
      this.$emit("cancel");
      return false;
    },

    confirmAndRebootBtn() {
      this.$emit("confirmAndReboot");
    },

    confirmBtn() {
      this.$emit("confirm");
    },

    goGrdoupRecor() {
      const TIME_COUNT = 5;
      if (!this.timer) {
        this.count = TIME_COUNT;
        // this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
            console.log(this.count);
          } else {
            // this.show = false;
            clearInterval(this.timer);
            this.timer = null;
            this.$emit("cancel");
            Indicator.open({
              text: '正在启动中，请稍后...',
              spinnerType: 'fading-circle'
            });
            let that = this;
            that.runcarone();   
            // that.interval = setInterval(()=>{
            //   that.runcarone();
            // }, 4000); 
            // if(sessionStorage.getItem('iscarshop') == 1){
            //   axios({
            //     method: "post",
            //     url: `${this.wash_test_url}/parkingCarRecerd/sleletByUseByCarNumber`,
            //     data: Qs.stringify({
            //       // carNumber:this.carNumber,
            //       phone:localStorage.getItem("phone")?localStorage.getItem("phone"):localStorage.getItem("tel"),
            //       sname:this.sname,
            //       // camera:this.camera,
            //       member:this.member,
            //       carId:this.carId,
            //       carModel:this.detailed.carModel,
            //       sid:this.detailed.sid,
            //       number:that.detailed.number
            //     })
            //   }).then(res => {
            //     console.log(res);
            //     that.$emit("cancel");
            //     // that.show = false;
            //     if(res.data.resCode == 0){
            //       // that.interval = setInterval(()=>{
            //       //   that.runcar();
            //       // }, 1000);                                  
            //     }else{
            //       Indicator.close();
            //       MessageBox("提示", res.data.result);
            //     }        
            //   }).catch((response) => {
            //     that.$emit("cancel");
            //     Indicator.close();
            //     Toast("服务器错误，请稍后再试");
            //   });
            // } else {
            //   axios({
            //     method: "post",
            //     url: `${this.wash_test_url}/parkingCarRecerd/sleletByParkingStart`,
            //     data: Qs.stringify({
            //       // carNumber:this.carNumber,
            //       phone:localStorage.getItem("phone")?localStorage.getItem("phone"):localStorage.getItem("tel"),
            //       sname:this.sname,
            //       // camera:this.camera,
            //       member:this.member,
            //       carId:this.carId,
            //       carModel:this.detailed.carModel,
            //       number:that.detailed.number
            //     })
            //   }).then(res => {
            //     console.log(res);
            //     that.$emit("cancel");
            //     // that.show = false;
            //     if(res.data.resCode == 0){
            //       // that.interval = setInterval(()=>{
            //       //   that.runcar();
            //       // }, 1000);                                 
            //     }else{
            //       Indicator.close();                  
            //       MessageBox("提示", res.data.result);                  
            //     }        
            //   }).catch((response) => {
            //     that.$emit("cancel");
            //     Indicator.close();
            //     Toast("服务器错误，请稍后再试");
            //   });
            // }             						
          }
        }, 1000);
      }
    },
    runcarone(){
      let that = this;
      this.time++;
      this.addTime();
      console.log(this.time);
      // 是会员
      if(that.member == 1){
        // 是4s店
        if(sessionStorage.getItem('iscarshop') == 1){
          axios({
            method: "post",
            url: `${this.wash_test_url}/parkingCarRecerd/sleletByUseByCarNumber`,
            data: Qs.stringify({
              // carNumber:this.carNumber,
              phone:localStorage.getItem("phone")?localStorage.getItem("phone"):localStorage.getItem("tel"),
              sname:this.sname,
              // camera:this.camera,
              member:this.member,
              carId:this.carId,
              carModel:this.detailed.carModel,
              sid:this.detailed.sid,
              number:that.detailed.number,
              id:sessionStorage.getItem("carInfoWashcarId")
            })
          }).then(res => {
            console.log(res);
            that.$emit("cancel");
            if(res.data.resCode == 0){
              // clearInterval(that.interval);
              Indicator.close();
              that.time = 1;
              that.ifclick = false;
              that.$emit('ifclick',that.ifclick);
              // sessionStorage.setItem("washrecordstatus",2);
              // that.runcar();
              that.detailed.washcarStatus = 2;
              sessionStorage.setItem("washdetailed",JSON.stringify(that.detailed));   
              MessageBox.alert("启动完成").then(action => {
                // that.onlodaing();
                // window.location.reload();                
                that.$router.push({
                  path: "/detailed",
                });
              });                                 
            }else{
              // clearInterval(that.interval);
              Indicator.close();
              Toast(res.data.result);
            }        
          });
        }else{
          axios({
            method: "post",
            url: `${this.wash_test_url}/parkingCarRecerd/sleletByParkingStart`,
            data: Qs.stringify({
              // carNumber:this.carNumber,
              phone:localStorage.getItem("phone")?localStorage.getItem("phone"):localStorage.getItem("tel"),
              sname:this.sname,
              // camera:this.camera,
              member:this.member,
              carId:this.carId,
              carModel:this.detailed.carModel,
              number:that.detailed.number,
              id:sessionStorage.getItem("carInfoWashcarId")
            })
          }).then(res => {
            console.log(res);
            that.$emit("cancel");
            if(res.data.resCode == 0){   
              // clearInterval(that.interval);
              Indicator.close();
              that.time = 1;
              that.ifclick = false;
              that.$emit('ifclick',that.ifclick);
              // sessionStorage.setItem("washrecordstatus",2);
              // that.runcar();
              that.detailed.washcarStatus = 2;
              sessionStorage.setItem("washdetailed",JSON.stringify(that.detailed));   
              MessageBox.alert("启动完成").then(action => {
                // that.onlodaing();
                // window.location.reload();                
                that.$router.push({
                  path: "/detailed",
                });
              });                          
            }else{
              // clearInterval(that.interval);
              Indicator.close();
              Toast(res.data.result);
            }        
          });
        }       
      }else{
        // 是4s店
        if(sessionStorage.getItem('iscarshop') == 1){
          axios({
            method: "post",
            url: `${this.wash_test_url}/parkingCarRecerd/sleletByUseByCarNumber`,
            data: Qs.stringify({
              // carNumber:this.carNumber,
              phone:localStorage.getItem("phone")?localStorage.getItem("phone"):localStorage.getItem("tel"),
              sname:this.sname,
              // camera:this.camera,
              member:this.member,
              carId:this.carId,
              carModel:this.detailed.carModel,
              sid:this.detailed.sid,
              number:that.detailed.number,
            })
          }).then(res => {
            console.log(res);
            that.$emit("cancel");
            if(res.data.resCode == 0){
              // clearInterval(that.interval);
              Indicator.close();
              that.time = 1;
              that.ifclick = false;
              that.$emit('ifclick',that.ifclick);
              // sessionStorage.setItem("washrecordstatus",2);
              // that.runcar();
              that.detailed.washcarStatus = 2;
              sessionStorage.setItem("washdetailed",JSON.stringify(that.detailed));   
              MessageBox.alert("启动完成").then(action => {
                // that.onlodaing();
                // window.location.reload();                
                that.$router.push({
                  path: "/detailed",
                });
              });                                 
            }else{
              // clearInterval(that.interval);
              Indicator.close();
              Toast(res.data.result);
            }        
          });
        }else{
          axios({
            method: "post",
            url: `${this.wash_test_url}/parkingCarRecerd/sleletByParkingStart`,
            data: Qs.stringify({
              // carNumber:this.carNumber,
              phone:localStorage.getItem("phone")?localStorage.getItem("phone"):localStorage.getItem("tel"),
              sname:this.sname,
              // camera:this.camera,
              member:this.member,
              carId:this.carId,
              carModel:this.detailed.carModel,
              number:that.detailed.number,
              id:0
            })
          }).then(res => {
            console.log(res);
            that.$emit("cancel");
            if(res.data.resCode == 0){   
              // clearInterval(that.interval);
              Indicator.close();
              that.time = 1;
              that.ifclick = false;
              that.$emit('ifclick',that.ifclick);
              // that.runcar();
              // sessionStorage.setItem("washrecordstatus",2);
              that.detailed.washcarStatus = 2;
              sessionStorage.setItem("washdetailed",JSON.stringify(that.detailed));   
              MessageBox.alert("启动完成").then(action => {
                // that.onlodaing();
                // window.location.reload();                
                that.$router.push({
                  path: "/detailed",
                });
              });                          
            }else{
              // clearInterval(that.interval);
              Indicator.close();
              Toast(res.data.result);
            }        
          });
        }
      }
    },


    // 车牌校验时的第二步启动
    runcar(){
      let that = this;
      // this.time++;
      // this.addTime();
      // console.log(this.time);
      if(that.member == 1){
        axios({
          method: "post",
          url: `${this.wash_test_url}/parkingCarRecerd/sleletByDeviceId`,
          data: Qs.stringify({
            phone:localStorage.getItem("phone")?localStorage.getItem("phone"):localStorage.getItem("tel"),
            // carNumber:that.carNumber,
            deviceId:that.carId,
            orderId:that.detailed.number,
            member:that.member,
            sname:that.sname,
            id:sessionStorage.getItem("carInfoWashcarId")
          })
        }).then(res => {
          console.log(res);
          // if(res.data.resCode == 0){   
          //   clearInterval(that.interval);
          //   Indicator.close();
          //   that.time = 1;
          //   that.ifclick = false;
          //   that.$emit('ifclick',that.ifclick);
          //   // sessionStorage.setItem("washrecordstatus",2);
          //   that.detailed.washcarStatus = 2;
          //   sessionStorage.setItem("washdetailed",JSON.stringify(that.detailed));   
          //   MessageBox.alert("启动完成").then(action => {
          //     // that.onlodaing();
          //     // window.location.reload();                
          //     that.$router.push({
          //       path: "/detailed",
          //     });
          //   });                          
          // }else{
          //   console.log(res.data.result);
          // }        
        });
      }else{
        axios({
          method: "post",
          url: `${this.wash_test_url}/parkingCarRecerd/sleletByDeviceId`,
          data: Qs.stringify({
            // carNumber:that.carNumber,
            phone:localStorage.getItem("phone")?localStorage.getItem("phone"):localStorage.getItem("tel"),
            deviceId:that.carId,
            orderId:that.detailed.number,
            member:that.member,
            sname:that.sname,
          })
        }).then(res => {
          console.log(res);
          // if(res.data.resCode == 0){   
          //   clearInterval(that.interval);
          //   Indicator.close();
          //   that.time = 1;
          //   that.ifclick = false;
          //   that.$emit('ifclick',that.ifclick);
          //   // sessionStorage.setItem("washrecordstatus",2);
          //   that.detailed.washcarStatus = 2;
          //   sessionStorage.setItem("washdetailed",JSON.stringify(that.detailed));   
          //   MessageBox.alert("启动完成").then(action => {
          //     // that.onlodaing();
          //     // window.location.reload();                
          //     that.$router.push({
          //       path: "/detailed",
          //     });
          //   });                          
          // }else{
          //   console.log(res.data.result);
          // }        
        });
      }      
    },
    addTime(){
      if(this.time == 10){
        // clearInterval(this.interval);
        Indicator.close();
        Toast("启动超时，请稍后再试！");
        this.time = 1;
      }else{
        console.log(this.time);
      }
    },
    getwashsiteList() {
      let that = this;
      let params = {
        page: 1,
        pageSize: 500,
        userId: "SURIOT",
        dealer: 123
      };
      getsiteList(params).then(message => {
        console.log(message);
        if (message.data.result.length > 0) {
          for (var i = 0; i < message.data.result.length; i++) {
            let list = {
              sid: message.data.result[i].sid,
              sname: message.data.result[i].sname,
              // carid: message.data.result[i].carid,
              // camera: message.data.result[i].camera,
            };
            that.parkIist.push(list);
          }
          console.log(that.parkIist);
          for(var i = 0;i < that.parkIist.length;i++){
            if(that.detailed.sid == that.parkIist[i].sid){
              that.sname = that.parkIist[i].sname;
              // that.carId = that.parkIist[i].carid;
              // that.camera = that.parkIist[i].camera;
            }
          }
        } else {
          that.parkIist = [];
        }
      });
    },
  },
  mounted() {
    this.detailed = JSON.parse(sessionStorage.getItem('washdetailed'));
    console.log(this.detailed);
    this.getwashsiteList();
    this.carNumber = this.detailed.carNumber;
    this.member = this.detailed.member;
    this.carId = this.detailed.deviceid;
  },
  beforeDestroy () {
    clearInterval(this.interval);
  },
};
</script>
<style lang="scss" scoped>
.dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9999;
  .dialog-container {
    width: 85%;
    background: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.2s;
    border-radius: 3px;
    position: relative;
    font-size: 16px;
    .dialog-title {
      width: 100%;
      height: 60px;
      font-size: 18px;
      color: #696969;
      font-weight: 600;
      padding: 16px 50px 0 20px;
      box-sizing: border-box;
    }
    .content {
      min-height: 36px;
      padding: 10px 20px 15px;
      border-bottom: 1px solid #dddddd;
      position: relative;
    }
    .inp {
      margin: 10px 0 0 20px;
      width: 200px;
      height: 40px;
      padding-left: 4px;
      border-radius: 4px;
      border: none;
      background: #efefef;
      outline: none;
      &:focus {
        border: 1px solid #509ee3;
      }
    }
    .btns {
      height: 40px;
      line-height: 40px;
      display: flex;
      text-align: center;
      & > div {
        display: block;
        line-height: 35px;
        background: #fff;
        -webkit-box-flex: 1;
        flex: 1;
        margin: 0;
        border: 0;
      }
      .default-btn {
        width: 50%;
        border-right: 1px solid #ddd;
        border-radius: 3px;
      }
      .danger-btn {
        background: #ef8c8c;
        &:hover {
          background: rgb(224, 135, 135);
        }
        &:active {
          background: #ef8c8c;
        }
      }
      .confirm-btn {
        color: #26a2ff;
        width: 50%;
      }
    }
    .close-btn {
      position: absolute;
      top: 16px;
      right: 16px;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 18px;
      cursor: pointer;
      &:hover {
        font-weight: 600;
      }
    }
  }
}
</style>