<template>
  <div class="dialog" @click="hidePanel">
    <div class="dialog-container" id="child">
      <div class="dialog-title">{{title}}</div>
      <div class="content">
        <div class="loginInput topp">
          <input type="text" v-model="name" @blur="bottocenter" placeholder="请输入手机号码" />
        </div>
        <!-- <div class="loginInput bott">
          <input v-model="pass" style="width:58%;" @blur="bottocenter" placeholder="请输入验证码" />
          <div class="ma" @click="sendab" v-if="this.t==''">{{val}}</div>
          <div class="ma" v-else style="background:#999;">{{textsend}}</div>
        </div> -->
        <div class="btn" @click="confirmAndRebootBtn">{{confirmAndRebootText}}</div>
      </div>
      <!-- <div class="btns"> -->
        <!-- <div class="default-btn" @click="closeBtn">{{cancelText}}</div> -->
        <!-- <div class="confirm-btn" @click="confirmAndRebootBtn">{{confirmAndRebootText}}</div> -->
        <!-- <div class="confirm-btn" @click="confirmBtn">{{confirmText}}</div> -->
      <!-- </div> -->
      <!-- <div class="close-btn" @click="closeBtn"><i class="el-icon-close"></i></div> -->
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Qs from "qs";
import { MessageBox, Indicator,Toast } from "mint-ui";
import { fasong, stateus } from "./api/api.js";
export default {
	data() {
		return {
			val: "发送验证码",
      t: "",
      name: "",
      textsend: "",
      yanz: "",
      pass:"",
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
      default: "请绑定您的手机号"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    confirmAndRebootText: {
      type: String,
      default: "领取优惠券"
    },
    confirmText: {
      type: String,
      default: "稍后自行重启"
    },
  },
  methods: {
    closeBtn() {
      this.$emit("cancel");
      return false;
    },
    bottocenter() {
      window.scrollTo(0, 0);
    },
    hidePanel(event) {
      let dom = document.getElementById("child");
      if (dom) {
        if (!dom.contains(event.target)) {
        //这句是说如果我们点击到了id为child以外的区域
          this.$emit("cancel");
        }
      }
    },
    async confirmAndRebootBtn() {
      let that = this;
      if (this.name == "") {
        MessageBox("提示", "手机号码不能为空");
        return;
      }
      if (!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.name)) {
        MessageBox("提示", "请输入正确的手机号码");
        return;
      }
      if(this.name == sessionStorage.getItem("shareTel")){
        Toast('抱歉，无法领取自己分享的券');
      }else{
        let data = {
          sharerTel: sessionStorage.getItem("shareTel"),
          getterTel: this.name,
          dealer: 1561430951496
        };
        axios({
          method: "post",
          url: `${that.washurl}/shareRecords/focusShareByTel`,
          data: Qs.stringify(data)
        }).then(res => {  
          console.log(res);              
          if (res.data.code == 0) {
            that.$emit("cancel");
            Toast('领取成功');
            that.$router.push('/sharesuccess');
          }else{
            that.$emit("cancel");
            if(res.data.result == "已经是老用户~"){
              Toast('该手机号已注册过，无法领取');
            }else{
              Toast('领取失败');
            }
          }             
        });
      }                  
    },
    async sendab() {
      if (this.name == "") {
        MessageBox("提示", "请输入手机号码");
      } else {
        if (!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.name)) {
          MessageBox("提示", "请输入正确的手机号码");
        } else {
          let that = this;
          that.textsend = "剩余" + 60 + "s";
          var time = 59;
          that.t = setInterval(function() {
            if (time <= 0) {
              clearInterval(that.t);
              that.t = "";
              that.val = "重新发送";
            } else {
              that.textsend = "剩余" + time-- + "s";
            }
          }, 1000);
          let data = {
            phoneNumber: that.name
          };
          let res = await fasong(data);
          if (res.data.resCode == "0") {
            console.log(res);
            that.yanz = res.data.result;
          }
        }
      }
    },
    confirmBtn() {
      this.$emit("confirm");
    },
    
  },
  mounted() {
    
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
  z-index: 100;
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
      font-size: 0.3rem;
      color: #696969;
      padding: 0.3rem 0;
      text-align: center;
    }
    .content {
      min-height: 36px;
      padding: 0 0.5rem 0.3rem;
      border-bottom: 1px solid #dddddd;
      position: relative;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
      .loginInput {
        height: 40px;
        line-height: 40px;
        border-radius: 5px;
        border: 1px solid #bfbfbf;
        margin: 0 auto;
        display: flex;
      }
      .loginInput input {
        outline: none;
        border: none;
        text-indent: 5px;
        font-size: 13px;
        font-family: "PingFang-SC-Regular";
        color: #a4a4a4;
        background-color: transparent;
        width: 80%;
      }      
      .topp {
        margin-bottom: 0.3rem;
      }
      .bott {
        position: relative;
      }
      .bott .ma {
        background: #f68b1c;
        color: #fff;
        width: 77px;
        height: 42px;
        line-height: 42px;
        font-size: 13px;
        font-family: "PingFang-SC-Regular";
        text-align: center;
        position: absolute;
        right: -1px;
        top: -1px;
      }
      .ma {
        cursor: pointer;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
      }
      .btn{
        text-align: center;
        height: 42px;
        line-height: 42px;
        background: #f68b1c;
        margin-top: 0.3rem;
        color: #fff;
        border-radius: 5px;
      }
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
        border-radius: 3px;
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