<template>
  <div>
    <ul>
      <li v-for="(item,index) in carList"
          @click.stop="point(item)">
        <div class="other"
             v-if="item.state=='1'||item.state==''">常用车牌</div>
        <div class="change">
          <img src="../../static/image/d (1).png"
               alt=""
               @click="delc(item)">
          <!-- <img src="../../static/image/d (2).png" alt="">
                    <span @click="bianji(item)">编辑</span> -->
        </div>
        <div class="num">{{item.country}}</div>
      </li>
    </ul>
    <div class="foot"
         style="margin-top:0.3rem;"
         @click="addnuma">
      添加车牌
    </div>
  </div>
</template>
<script>
import { serach, del, chufa } from './api/api.js'
import { MessageBox } from 'mint-ui';

export default {
  name: 'carnumber',
  data () {
    return {
      carList: [],
      zlaw: ''
    }
  },
  mounted () {

    console.log(this.$route.query.lis)
    if (this.$route.query.lis == 0) {
      this.zlaw = 1
    }
    let that = this;
    serach({
      openid: localStorage.getItem('openid')
      // openid:'oOKex1Ow5nB_qymzrzj4L7Gm7snU'
    }).then(res => {
      that.carList = res.data.result
    })
  },
  methods: {
    point (val) {
      let brandid;
      this.carList.forEach((a, b) => {
        if (a.state == '' || a.state == 1) {
          brandid = a.id;
        }
      })
      let data = {
        id: brandid,
        bid: val.id
        // openid:localStorage.getItem('openid'),
        // openid:'oOKex1Ow5nB_qymzrzj4L7Gm7snU',
        // country:val. country
      }
      chufa(data).then(res => {
        window.location.reload()
      })
    },
    addnuma () {
      this.$router.push('/add')
    },
    delc (item) {
      console.log(item)
      MessageBox.confirm('', {
        title: '提示',
        message: '是否删除车牌号码',
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(action => {
        if (action == 'confirm') { //确认的回调
          del({            country: item.country,
            openid: localStorage.getItem('openid')
            // openid:'oOKex1Ow5nB_qymzrzj4L7Gm7snU'
          }).then(res => {
            if (res.data.resCode == "0") {
              window.location.reload();
            } else {
              MessageBox('提示', '删除失败')
            }
          })
        }
      }).catch(err => {
        if (err == 'cancel') { //取消的回调
          // console.log(22)
          // window.location.reload();
        }
      });

    },
    bianji (item) {
      console.log(item)
      this.$router.push({ path: '/add', query: { lice: item } })
      // del({id:item.id}).then(res=>{
      //     console.log(res)
      // })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../style/mixin.scss';
ul li {
  @include wh(91%, 1.16rem);
  border: 1px solid #f68b1c;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 0.16rem;
  position: relative;
}
.other {
  position: absolute;
  top: 0;
  left: 0;
  @include wh(0.65rem, 0.23rem);
  background: #f68b1c;
  @include sc(12px, #fff);
  border-bottom-right-radius: 5px;
  text-align: center;
  line-height: 0.23rem;
}
.change {
  @include sc(13px, #f68b1c);
  text-align: right;
  margin: 0.08rem;
}
.num {
  @include wh(100%, 100%);
  line-height: 0.6rem;
  text-align: center;
  @include sc(29px, #f68b1c);
  letter-spacing: 0.04rem;
}
.foot {
  @include wh(91%, 0.5rem);
  @include sc(16px, #fff);
  margin: 0 auto;
  background: #f68b1c;
  line-height: 0.5rem;
  border-radius: 5px;
  text-align: center;
}
.change img {
  vertical-align: middle;
}
</style>


