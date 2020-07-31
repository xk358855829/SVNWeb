<template>
  <div id="cardList">
    <ul>
      <div v-if="cardList.length == 0">
        <img src="../../static/image/kbym.png" />
        <p>你还没有车牌哦</p>
      </div>
      <!-- <li v-for="(card,index) in cardList"  @touchstart="_touchStart(index)" @touchmove="_touchMove(index)">
				<span class="card" @click="changeCard(index)">{{card.brandname}}</span>
				<span class="parameter" ref='det' v-if="card.priority==1">默认</span>
				<span class="delete" ref='det' v-if="card.priority!=1" @click="deleteCard(index)">删除</span>
			</li> -->
      <li v-for="(card,index) in cardList"
          @touchstart="_touchStart(index)"
          @touchmove="_touchMove(index)">
        <span class="card"
              @click="changeCard(index)">{{card.brandname}}</span>
        <span class="parameter"
              ref='det'
              v-if="card.priority==1">默认</span>
        <span class="delete"
              ref='det'
              v-if="card.priority!=1"
              @click="deleteCard(index)">删除</span>
      </li>
    </ul>
    <p class="notes">注：左滑可删除车牌</p>
    <router-link to='/card'>
      <div class="addCard">添加车牌</div>
    </router-link>
  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
export default {
  name: 'cardList',
  data () {
    return {
      cardList: [],
      startX: ''
    }
  },
  methods: {
    _touchStart (index, ev) {
      ev = ev || event;
      if (ev.touches.length == 1) {
        // 手指按下的时候记录按下的位置
        this.startX = ev.touches[0].clientX;
      }
    },
    _touchMove (index, ev) {
      ev = ev || event;
      if (ev.touches.length == 1) {
        if (this.startX - ev.touches[0].clientX >= 100) {
          if (this.$refs.det[index].getAttribute('class') != 'parameter') {
            this.$refs.det[index].setAttribute('class', 'active1 delete')
          }
        } else if (this.startX - ev.touches[0].clientX <= -100) {
          if (this.$refs.det[index].getAttribute('class') != 'parameter') {
            this.$refs.det[index].setAttribute('class', 'active2 delete')
          }
        }
      }
    },
    changeCard (index) {
      let len = this.cardList.length;
      let that = this;
      let brandid;
      for (var i = 0; i < len; i++) {
        if (this.cardList[i].priority == 1) {
          brandid = i;
        }
      }
      /*console.log(brandid)
      console.log(this.cardList[index].brandid)*/
      this.$http({
        method: 'post',
        url: this.httpUrl + 'app/brand/updatepriority',
        data: Qs.stringify({
          brandid: this.cardList[brandid].brandid,
          newbrandid: this.cardList[index].brandid
        })
      }).then(function (message) {
        /*console.log(message.data)*/
        if (message.data.resCode) {
          that.cardList[brandid].priority = '0';
          that.cardList[index].priority = '1';
        }
      })
    },
    deleteCard (index) {
      let that = this;
      console.log(index)
      this.$http({
        method: 'post',
        url: this.httpUrl + 'app/brand/delect',
        data: Qs.stringify({
          brandid: this.cardList[index].brandid
        })
      }).then(function (message) {
        that.cardList.splice(index, 1)
        that.$refs.det[index].setAttribute('class', 'active2 delete')
      })
    }
  },
  mounted: function () {
    let that = this;

    this.$http({
      method: 'post',
      url: this.httpUrl + 'app/brand/list',
      data: Qs.stringify({
        // openid: "o8Aq-5v-iRRACkOyuOSAk8Fs0sbg"
        openid: localStorage.getItem('openid')
      })
    }).then(function (message) {
      console.log(message.data)
      if (message.data.resCode === '200') {
        that.cardList = message.data.result
        console.log(that.cardList)
      }
    })
  }
}
</script>

<style scoped="scoped" lang="scss">
@import '@/style/mixin.scss';
.notes {
  text-align: center;
  padding: 0.2rem 0;
  color: #787878;
}
li {
  display: flex;
  justify-content: space-between;
  background-color: white;
  border: 1px solid $hui;
  position: relative;
  overflow: hidden;
}
li span:nth-of-type(1) {
  font-size: 0.32rem;
  width: 80%;
  padding: 0.3rem 0rem 0.3rem 0.4rem;
}
ul div {
  width: 100%;
  text-align: center;
  padding: 1rem 0;
}
ul div img {
  width: 30%;
}
.card {
  font-size: 0.24rem;
}
.parameter {
  background-color: #f68b1b;
  color: #ffffff;
  font-size: 0.24rem;
  display: block;
  width: 0.96rem;
  height: 0.34rem;
  text-align: center;
  line-height: 0.34rem;
  border-radius: 4px;
  margin: 0.3rem 0.5rem 0.3rem 0rem;
}
.addCard {
  font-size: 0.32rem;
  width: 80%;
  height: 0.88rem;
  background-color: #f68b1b;
  text-align: center;
  line-height: 0.88rem;
  color: #fff;
  margin: 0.4rem auto;
  border-radius: 5px;
}
.delete {
  font-size: 0.32rem;
  height: 100%;
  background-color: #ff3a32;
  position: absolute;
  top: 0rem;
  line-height: 0.92rem;
  width: 1.5rem;
  text-align: center;
  color: #ffffff;
  right: -1.5rem;
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -ms-perspective: 1000;
  perspective: 1000;
}
.active1 {
  right: 0rem;
  animation: myfirst1 0.25s;
  -moz-animation: myfirst1 0.25s; /* Firefox */
  -webkit-animation: myfirst1 0.25s; /* Safari 和 Chrome */
  -o-animation: myfirst1 0.25s; /* Opera */
}
.active2 {
  right: -1.5rem;
  animation: myfirst2 0.25s;
  -moz-animation: myfirst2 0.25s; /* Firefox */
  -webkit-animation: myfirst2 0.25s; /* Safari 和 Chrome */
  -o-animation: myfirst2 0.25s; /* Opera */
}
@keyframes myfirst1 {
  from {
    right: -1.5rem;
  }
  to {
    right: 0rem;
  }
}
@-moz-keyframes myfirst1 /* Firefox */ {
  from {
    right: -1.5rem;
  }
  to {
    right: 0rem;
  }
}
@-webkit-keyframes myfirst1 /* Safari 和 Chrome */ {
  from {
    right: -1.5rem;
  }
  to {
    right: 0rem;
  }
}
@-o-keyframes myfirst1 /* Opera */ {
  from {
    right: -1.5rem;
  }
  to {
    right: 0rem;
  }
}
@keyframes myfirst2 {
  from {
    right: 0rem;
  }
  to {
    right: -1.5rem;
  }
}
@-moz-keyframes myfirst2 /* Firefox */ {
  from {
    right: 0rem;
  }
  to {
    right: -1.5rem;
  }
}
@-webkit-keyframes myfirst2 /* Safari 和 Chrome */ {
  from {
    right: 0rem;
  }
  to {
    right: -1.5rem;
  }
}
@-o-keyframes myfirst2 /* Opera */ {
  from {
    right: 0rem;
  }
  to {
    right: -1.5rem;
  }
}
</style>