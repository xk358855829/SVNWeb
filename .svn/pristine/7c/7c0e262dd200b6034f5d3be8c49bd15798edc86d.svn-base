<template>
  <div class="key">
    <AvatarNavRow :avatar="require('@/assets/images/key/cun.png')"
                  :name="'存件人'"
                  @numberChange="handleSaveNumberChange" />
    <hr>
    <AvatarNavRow :avatar="require('@/assets/images/key/qu.png')"
                  :name="'取件人'"
                  @numberChange="handleGetNumberChange" />
    <div class="key-info">
      <div class="key-time">
        <span class="key-time-left">取件时间</span>
        <span class="key-time-right">{{this.pickDate}}</span>
        <calendar :show.sync="showCalander"
                  @change="onChange" />
        <i class="icon-1"
           @click="handleClickDatePicker"></i>
      </div>
      <div class="key-message">
        <p>通知短信</p>
        <textarea v-model="message" />
      </div>
      <button @click="handleSaveKey">暂存</button>
    </div>
  </div>
</template>
<script>
import AvatarNavRow from '@/components/AvatarNavRow'
import { mapActions } from 'vuex'
export default {
  components: {
    AvatarNavRow
  },
  data () {
    return {
      date: '',
      showCalander: false,
      pickDate: '',
      message: '',
      sPhone: '',
      gPhone: ''
    }
  },
  methods: {
    ...mapActions(['saoyisao']),
    onChange (date) {
      this.pickDate = date.format('YYYY-MM-DD')
    },
    handleClickDatePicker () {
      this.showCalander = true
    },
    handleSaveKey () {
      this.saoyisao()
    },
    handleSaveNumberChange (number) {
      this.sPhone = number
    },
    handleGetNumberChange (number) {
      this.gPhone = number
    }
  }
}
</script>
<style lang="scss">
@import '../static/css/mixins';
.key {
  height: 100%;
  hr {
    border-top: 1px solid $line-color;
    margin: 0;
  }
  .key-info {
    background: white;
    margin: 1rem 0;
    height: calc(100% - 27.75rem);
    .key-time {
      width: 100%;
      font-size: 1.2rem;
      color: $font-color;
      display: table;
      border-bottom: 1px solid $line-color;
      & > * {
        display: table-cell;
        line-height: 3;
      }
      .key-time-left {
        text-align: left;
        text-indent: 1.5rem;
      }
      .key-time-right {
        text-align: right;
        color: rgb(104, 104, 104);
      }
    }
  }
  .key-message {
    background: white;
    height: 100%;
    p {
      text-align: left;
      text-indent: 1.5rem;
      line-height: 3;
      font-size: 1.2rem;
      color: $font-color;
    }
    textarea {
      background: rgb(242, 242, 242);
      border: none;
      width: 90%;
      height: 70%;
    }
  }
  button {
    width: 90%;
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
  }
}
</style>
