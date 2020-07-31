<template>
  <div>
    <div>
      <header>
        <p @click="celltol">
          <span>停车场名称</span>
          <img src="../../static/image/la.png"
               alt="">
        </p>
      </header>
      <section>
        <p>我的积分</p>
        <p>{{integral}}</p>
        <div class="mark">
          <div> <img src="../../static/image/guize (2).png"
                 alt=""> 积分明细</div>
          <div> <img src="../../static/image/guize (1).png"
                 alt=""> 积分规则</div>
        </div>
      </section>
      <footer>
        <div class="list">积分兑换专区</div>
        <ul>
          <li>
            <div>
              <img src="../../static/image/mopay.png"
                   alt="">
            </div>
            <p class="bot">300积分</p>
          </li>
          <li>
            <div>
              <img src="../../static/image/mopay.png"
                   alt="">
            </div>
            <p class="bot">300积分</p>
          </li>
          <li>
            <div>
              <img src="../../static/image/mopay.png"
                   alt="">
            </div>
            <p class="bot">300积分</p>
          </li>
          <li>
            <div>
              <img src="../../static/image/mopay.png"
                   alt="">
            </div>
            <p class="bot">300积分</p>
          </li>
        </ul>
      </footer>
    </div>
    <div style="z-index:2004;position: fixed;
    left: 0;
    top: 0;"
         class="peolip"
         v-if="!popupVisible"
         @click="titlcell">
      <div style="position:fixed;bottom:0;width:100%;background:#fff;">
        <mt-picker :slots="slots"
                   @change="onValuesChange"></mt-picker>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Qs from 'qs'
import { MessageBox, Picker } from 'mint-ui';
export default {
  name: 'shengcheng',
  data () {
    return {
      totalList: [],
      integral: '',
      popupVisible: true,
      slots: [
        {
          flex: 1,
          values: [],
          className: 'slot',
          textAlign: 'center'
        }
      ]
    }
  },
  watch: {

  },
  methods: {
    onValuesChange (val) {
      console.log(val)
    },
    celltol () {
      this.popupVisible = !this.popupVisible
    },
    titlcell () {
      this.popupVisible = true
    },
  },
  mounted () {
    axios({
      method: 'post',
      url: this.httpUrl + '/Parking/selectLotInfo',
      data: Qs.stringify({
        page: 1,
        pageSize: 0,
        userId: 'SURIOT',
        dealer: 123
      })
    }).then(res => {
      this.totalList = res.data.result
      this.totalList.forEach(a => {
        this.slots[0].values.push(a.parking_name)
      })
    })
    axios({
      method: 'post',
      url: this.httpUrl + '/MarkRecords/findMark',
      // url: 'http://192.168.2.141:8086/ZFBrake/MarkRecords/findMark',
      data: Qs.stringify({
        tel: localStorage.getItem('phone'),
        dealer: '1561430951496'
      })
    }).then(res => {
      if (res.data.resCode == 0) {
        this.integral = res.data.result[0].allMark
      }
    })
  }
}
</script>
<style scoped lang="scss">
@import '../style/mixin.scss';
header {
  @include wh(100%, 0.5rem);
  background: linear-gradient(
    0deg,
    rgba(255, 142, 23, 1) 0%,
    rgba(253, 168, 62, 1) 100%
  );
  color: #fff;
  font-size: 0.15rem;
  font-family: 'PingFang SC';
  font-weight: 400;
  text-align: center;
  line-height: 0.5rem;
  img {
    vertical-align: middle;
  }
  margin-bottom: 0.16rem;
}
section {
  background-image: url('../../static/image/six.png');
  @include wh(100%, 1.65rem);
  text-align: center;
  margin-bottom: 0.165rem;
  p:nth-child(1) {
    padding-top: 0.18rem;
    margin-bottom: 0.09rem;
    font-size: 0.13rem;
    font-family: 'PingFang SC';
    font-weight: 400;
    color: rgba(48, 48, 48, 1);
  }
  p:nth-child(2) {
    font-size: 0.51rem;
    font-family: 'PingFang SC';
    font-weight: bold;
    color: rgba(255, 170, 81, 1);
    margin-bottom: 0.22rem;
  }
  .mark {
    @include wh(100%, 0.445rem);
    display: flex;
    line-height: 0.445rem;
    background: rgba(255, 255, 255, 1);
    opacity: 0.56;
    img {
      vertical-align: middle;
    }
    div {
      @include wh(49.9%, 0.445rem);
      font-size: 0.15rem;
      font-family: 'PingFang SC';
      font-weight: 400;
      color: rgba(48, 48, 48, 1);
    }
    div:nth-child(1) {
      border-right: 0.01rem solid rgb(229, 229, 229);
    }
  }
}
footer {
  background: rgba(255, 255, 255, 1);
  .list {
    @include wh(100%, 0.555rem);
    // border-bottom: 0.01rem solid rgb(229, 229, 229);
    font-size: 0.17rem;
    font-family: 'PingFang SC';
    font-weight: 400;
    color: rgba(48, 48, 48, 1);
    margin-left: 0.16rem;
    line-height: 0.555rem;
  }
  ul {
    text-align: center;
    li {
      float: left;
      @include wh(1.855rem, 1.545rem);
      border: 0.01rem solid rgb(229, 229, 229);
      div {
        @include wh(1.555rem, 0.96rem);
        margin: 0.155rem;
        img {
          @include wh(100%, 100%);
        }
      }
      .bot {
        font-size: 0.15rem;
        font-family: 'PingFang SC';
        font-weight: 400;
        color: rgba(244, 34, 74, 1);
      }
    }
  }
}
.peolip {
  width: 100%;
  height: 100%;
  background: rgba(48, 48, 48, 0.5);
}
</style>


