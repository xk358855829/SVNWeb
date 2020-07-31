<template>
  <div>
    <div class="head-top">
      <div>
        <span>手机号</span>
        <input type="text"
               placeholder="请输入11位手机号码"
               v-model="phone">
      </div>
      <div>
        <span>验证码</span>
        <input type="text"
               placeholder="请输入短信验证码"
               style="width:43%;"
               v-model="mess">
        <p class="sentMess"
           @click="loleval"
           v-if="t==''">{{plText}}</p>
        <p v-else>{{disText}}</p>
      </div>
    </div>
    <div class="foot"
         style="margin-top:0.3rem;"
         @click="binding">
      绑定
    </div>
    <!-- <alert v-show="show==false" :zmeg='meg' @closeTip='show=true'></alert> -->
    <!-- <button ref="tar" type="button" name="button" @click="testClick">{{ content }}</button> -->
  </div>
</template>
<script>
import alert from '../components/index/alert'
import { MessageBox } from 'mint-ui';
import { regphone } from './api/filter.js'
import { send, textchange, beforyan } from './api/api.js'
export default {
  name: 'changephone',
  data () {
    return {
      phone: '',
      mess: '',
      show: true,
      meg: '',
      // content:'初始'
      plText: '获取验证码',
      disText: '',
      t: '',
      valsDat: ''
    }
  },
  components: {
    alert
  },
  computed: {

  },
  watch: {

  },
  methods: {
    binding () {
      if (this.phone == '' || this.mess == '') {
        // console.log(998)
        // this.meg='手机号码和验证码不能为空'
        // this.show=false
        MessageBox('提示', '手机号码和验证码不能为空')
      } else if (this.phone) {
        // console.log(this.mess)
        // console.log(this.valsDat)
        if (!regphone(this.phone)) {
          // this.show=false
          // this.meg='手机号不正确'
          MessageBox('提示', '手机号不正确')
        } else if (this.valsDat != this.mess) {
          // this.show=false
          // this.meg='验证码不正确'
          MessageBox('提示', '验证码不正确')
        } else {
          textchangeup({            phone: this.phone,
            openid: localStorage.getItem('openid')
            // openid:'oOKex1Ow5nB_qymzrzj4L7Gm7snU'

          }).then(res => {
            // console.log(res)
            //  this.show=false
            // this.meg='绑定成功'
            MessageBox('提示', '绑定成功')
            this.$router.push({ path: '/my', query: { emt: this.phone } })

          })
        }
      }

    },
    loleval () {
      if (this.phone == '' || !regphone(this.phone)) {
        // this.meg='手机号码不正确'
        // this.show=false
        MessageBox('提示', '手机号码不正确')
      } else {
        let that = this;
        if (that.t == '') {
          clearInterval(that.t)
          let a = 60;
          that.disText = '剩余' + a + 's';
          that.t = setInterval(function () {
            a--;
            that.disText = '剩余' + a + 's'
            if (a <= 0) {
              that.plText = '重新获取'
              clearInterval(that.t)
              that.t = '';
            }
          }, 1000)
        }
        send({ phoneNumber: that.phone }).then(res => {
          console.log(res)
          if (res.data.resCode == "0") {
            that.valsDat = res.data.result
          }
          if (res.data.result == "手机号已存在!!") {
            that.$router.push('/home')
          }
        })
      }

    },
    // testClick(){
    //     this.content='改变'
    //     this.$nextTick(()=>{
    //         console.log(this.$refs.tar.innerText)
    //     })

    // }
  },
  mounted () {

  }
}
</script>
<style lang="scss" scoped>
@import '@/style/mixin.scss';
.head-top {
  @include wh(91%, 1.16rem);
  border-radius: 5px;
  background: #fff;
  margin: 0 auto;
  margin-top: 0.32rem;
}
.head-top div {
  @include wh(100%, 0.6rem);
  line-height: 0.57rem;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
.head-top div:nth-child(1) {
  border-bottom: 1px solid#efefef;
}
.head-top div span {
  text-indent: 0.2rem;
  color: #303030;
}
.head-top div input {
  width: 77%;
  outline: none;
  border: none;
  color: #999;
  height: 92%;
}
p {
  @include wh(0.78rem, 0.32rem);
  background: #0ccf5f;
  color: #fff;
  line-height: 0.32rem;
  text-align: center;
  margin: 0.1rem;
  border-radius: 5px;
}
.foot {
  @include wh(82%, 0.5rem);
  @include sc(15px, #fff);
  margin: 0 auto;
  background: #f68b1c;
  line-height: 0.5rem;
  border-radius: 5px;
  text-align: center;
}
.sentMess {
  cursor: pointer;
}
</style>


