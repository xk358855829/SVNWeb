<template>
  <div id="login">
    <form class="login-card">
      <span class="login-tite">登 录</span>
      <div class="content">
        <div class="login-card-login-input">
          <div class="tiaozheng">
            <span class="login-user">
              <i class="icon-3"></i>
            </span>
            <input v-model="account"
                   type="text"
                   autocomplete="username"
                   @blur="change"
                   name="username">
          </div>
        </div>
        <div class="login-card-input">
          <span class="login-password">
            <i class="icon-4"></i>
          </span>
          <input v-model="password"
                 type="password"
                 id="input-password"
                 autocomplete="input-password"
                 name="password">
          <span class="xianshimima"
                @click="handleShowPasswordClick">
            <i class="icon-7"
               id="icon_show_password"></i>
          </span>
        </div>
        <div class="jizhumima">
          <input type="checkbox"
                 class="aggreement"
                 name="aggreement_password"
                 id="aggreement_password"
                 v-model="memPassword"
                 @blur="change">
          <label for="aggreement_password">记住密码</label>
        </div>
      </div>
    </form>
    <button @click="handleLoginClick">登录</button>
    <footer class="info"
            :class="{ hideInfo:showInfo }">{{info}}</footer>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { setCookie, clearCookie, getCookie } from '@/utils/utils'
export default {
  data () {
    return {
      showPassword: false,
      memPassword: false,
      account: '',
      password: '',
      info: '用户提示',
      showInfo: true
    }
  },
  mounted () {
    let temp = getCookie()
    if (temp) {
      this.password = temp.password
      this.account = temp.account
    }
  },
  methods: {
    ...mapActions(['login']),
    change () {
      window.scrollTo(0, 0)
    },
    handleLoginClick () {
      this.login({
        account: this.account,
        password: this.password
      }).then(res => {
        if (res.resCode === '1') {
          this.info = res.result
          this.showInfo = false
          window.setTimeout(() => {
            this.showInfo = true
          }, 5000)
        } else {
          this.showInfo = true
          this.info = '登录成功'
          if (this.memPassword) {
            setCookie(this.account, this.password, 30)
          } else {
            clearCookie()
          }
          localStorage.setItem('login', JSON.stringify(res))
          localStorage.setItem('bid', JSON.stringify(res.result.bid))
          this.$router.push('order')
        }
      })
    },
    handleShowPasswordClick () {
      let i = document.getElementById('icon_show_password')
      let pInput = document.getElementById('input-password')
      if (this.showPassword) {
        pInput.type = 'password'
        i.className = 'icon-7'
        this.showPassword = false
      } else {
        pInput.type = 'text'
        i.className = 'icon-8'
        this.showPassword = true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../static/css/mixins';
input[type='number'] {
  -moz-appearance: textfield;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='checkbox'] {
  visibility: hidden;
}
input[type='checkbox'] + label::before {
  content: '\a0';
  display: inline-block;
  vertical-align: 0.2em;
  width: 1em;
  height: 0.8em;
  margin-right: 0.2em;
  border: 1px solid;
  border-radius: 0.2em;
  text-indent: 0.15em;
  line-height: 0.65;
}
input[type='checkbox']:checked + label::before {
  content: '\2713';
}
#aggreement_password {
  width: 0;
}
#login {
  width: 100%;
  height: 100%;
  background: no-repeat url('../assets/images/background/login.png');
  background-origin: content-box;
  background-size: 100%;
  background-color: white;
  .info {
    position: relative;
    top: 1.9rem;
    color: $red;
    opacity: 1;
    transition: opacity 2s;
  }
  .hideInfo {
    opacity: 0;
  }
  button {
    width: 70%;
    height: 3.75rem;
    background: $click-color;
    color: rgb(254, 254, 254);
    border-radius: 0.5rem;
    cursor: pointer;
    outline: none;
    font-weight: 100;
    font-size: 1rem;
    border: 1px solid #dcdfe6;
    margin: 1rem;
    position: relative;
    top: 2.5rem;
  }
}
.login-card {
  height: 33.3rem;
  width: 25.25rem;
  margin: auto;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
  border-radius: 0.8rem;
  position: relative;
  color: $click-color;
  top: 10rem;
  .login-tite {
    font-size: 2.41rem;
    font-weight: 200;
    position: relative;
    top: 3.41rem;
  }
  .content {
    position: relative;
    top: 9.5rem;
    input {
      border: 0;
      outline: none;
      height: 2.1rem;
      border-bottom: 1px solid $gray;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
        -webkit-text-fill-color: #000 !important;
      }
    }
    .login-card-login-input {
      margin-bottom: 3.14rem;
      .login-user {
        font-size: 1.5rem;
        position: relative;
        top: 5px;
        margin: 7px;
      }
      .tiaozheng {
        position: relative;
        right: 1rem;
      }
      input {
        font-size: 1.3rem;
        width: 14.08rem;
        border-radius: 0px;
        color: #303030;
      }
    }
    .login-card-input {
      .login-password {
        font-size: 2.5rem;
        position: relative;
        top: 6px;
      }
      .xianshimima {
        font-size: 2rem;
        position: relative;
        top: 5px;
      }
      input {
        font-size: 1.3rem;
        width: 14.08rem;
        border-radius: 0px;
        color: #303030;
      }
    }
  }
  .jizhumima {
    width: 70%;
    margin: 0 auto;
    text-align: left;
    input {
      position: relative;
      top: 7px;
      color: #fff;
    }
  }
}
</style>
