<template>
  <div class="card">
    <div class="card-head">
      <span style="text-align:left;padding-left:1.2rem;">订单编号:</span>
      <span style="text-align:left;">{{cardHead.cardId}}</span>
      <span style="text-align:right;padding-right:1rem;">{{cardHead.time}}</span>
    </div>
    <div class="card-content"
         @click="handleCardClick">
      <div v-if="cardState"
           :class="[
          'card-state',
          cardState.type || ''
        ]">{{cardState.label}}</div>
      <div v-for="(item,index) in cardForm"
           :key="index"
           class="card-table-list">
        <span style="text-align:left;">{{item.label}}：</span>
        <span style="text-align:left;padding-left:1rem;">{{item.content}}</span>
      </div>
    </div>
    <div v-if="showButton" class="card-foot">
      <button v-if="showName=='1'" @click="handleOpenBox">存钥匙</button>
      <button v-if="showName=='2'" @click="handleOpenBoxUp">取钥匙</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import layer from 'layer'
export default {
  name: 'Card',
  props: ['cardForm', 'showButton','showName', 'cardHead', 'cardState'],
  methods: {
    ...mapActions(['saoyisao', 'getKey','takeKey']),
    handleCardClick () {
      this.$emit('click', {
        cardForm: this.cardForm,
        cardState: this.cardState,
        cardHead: this.cardHead
      })
    },
    handleOpenBoxUp(){
      let that = this
      console.log(that.cardHead.cardId);
      // console.log(that.cardHead.cardId);
      that.$http.get(
        `http://114.55.168.103:8797/scan/getJSSDKTicket?url=${window.location.href.split('#')[0]}`).then(message => {
          // console.log(message);
          wx.config({
            debug: false,
            appId: message.data.appid,
            timestamp: message.data.timestamp,
            nonceStr: message.data.nonceStr,
            signature: message.data.signature, // 必填，签名，见附录1
            jsApiList: [message.data.jsApiList]
          })
          wx.ready(function () {
            wx.scanQRCode({
              needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
              scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
              success: function (res) {
                // alert(res.resultStr)
                let result = res.resultStr // 当needResult 为 1 时，扫码返回的结果
                let deviceId = result.substring(result.indexOf('state=') + 6, result.indexOf('#'))
                console.log(that.cardHead)
                // alert(deviceId)
                // alert(that.cardHead.cardId)
                that.takeKey({
                  number: that.cardHead.cardId,
                  deviceId: deviceId
                }).then(res => {
                  console.log(res)
                  // alert(res.data.resCode);
                  if (res.resCode == 0) {
                    layer.open({
                      content: '开柜成功，请取走钥匙',
                      skin: 'msg',
                      time: 2
                    })
                    window.location.reload()
                  } else {
                    layer.open({
                      content: '开柜失败，请重试',
                      skin: 'msg',
                      time: 3
                    })
                  }
                })
              }
            })
          })
        })
    },
    handleOpenBox () {
      let that = this
      console.log(window.location.href.split('#')[0])
      // Wxin({url:window.location.href.split('#')[0]}).then({})
      that.$http.get(
        `http://114.55.168.103:8797/scan/getJSSDKTicket?url=${window.location.href.split('#')[0]}`).then(message => {
          wx.config({
            debug: false,
            appId: message.data.appid,
            timestamp: message.data.timestamp,
            nonceStr: message.data.nonceStr,
            signature: message.data.signature, // 必填，签名，见附录1
            jsApiList: [message.data.jsApiList]
          })
          wx.ready(function () {
            wx.scanQRCode({
              needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
              scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
              success: function (res) {
                let result = res.resultStr // 当needResult 为 1 时，扫码返回的结果
                let deviceId = result.substring(result.indexOf('state=') + 6, result.indexOf('#'))
                console.log(that.cardHead)
                that.getKey({
                  number: that.cardHead.cardId,
                  deviceId: deviceId
                }).then(res => {
                  console.log(res)
                  if (res.resCode == '0') {
                    layer.open({
                      content: '存钥匙成功',
                      skin: 'msg',
                      time: 2
                    })
                    window.location.reload()
                  } else {
                    layer.open({
                      content: '已无空的钥匙柜',
                      skin: 'msg',
                      time: 3
                    })
                  }
                })
              }
            })
          })
        })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../static/css/mixins';
.danger {
  color: $red;
}
.warning {
  color: $click-color;
}
.finished {
  color: $gray;
}
.card {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background: white;
  margin-bottom: 1.75rem;
}
.card-head {
  color: $card-head-color;
  font-size: 1rem;
  width: 100%;
  display: table;
  line-height: 3.5rem;
  border-bottom: 1px solid rgb(230, 230, 230);
  span {
    display: table-cell;
  }
}
.card-table-list {
  line-height: 3rem;
  font-size: 1.1rem;
  width: 100%;
  padding-left: 1.2rem;
  span {
    display: table-cell;
  }
}
.card-state {
  font-size: 1.1rem;
  position: relative;
  float: right;
  top: 1rem;
  right: 1rem;
}
.card-content {
  border-bottom: 1px solid rgb(239, 239, 239);
  color: rgb(48, 48, 48);
}
.card-foot {
  line-height: 4rem;
  text-align: right;
  & button {
    width: 6.2rem;
    background: $click-color;
    border: 1px solid #dcdfe6;
    font-weight: 100;
    line-height: 2.5;
    font-size: 1rem;
    color: white;
    border-radius: 0.5rem;
    cursor: pointer;
    outline: none;
    margin-right: 1rem;
  }
}
</style>
