<template>
  <div style="background:#efefef;
  height:100%;
	overflow-y: scroll;"
       class="rating_page">
    <header style="font-size:18px;width:94%;margin:0 auto;margin-top:0.2rem;">
      <p>我的车牌</p>
    </header>
    <section style="">
      <ul style="">
        <li v-for="item in List"
            class="listli"
            @click.prevent="switchover(item)">
          <div class="firs">
            <div style="color:#999">车牌号</div>
            <div @click.stop="delet(item.brandid)"
                 style="width:0.4rem;height:0.2rem;">
              <img src="../../static/image/alsi.png"
                   alt=""
                   style="width:0.15rem;height:0.15rem;float:right;">
            </div>
          </div>
          <div style="width:93%;margin:0 auto;margin-top:0.1rem;margin-bottom:0.1rem;">
            <p style="font-size:16px">{{item.brandname}}</p>
          </div>
          <div style="width:93%;margin:0 auto;margin-bottom:0.1rem;">
            <p style="color:#999">车牌类型</p>
          </div>
          <div class="firs bottomfir">
            <div style="font-size:16px"
                 v-if="item.brandname.length==7">普通车牌</div>
            <div style="font-size:16px"
                 v-if="item.brandname.length==8">新能源车牌</div>
            <!-- <div style="margin-top:0.05rem;margin-bottom:0.1rem;">
              <p style="font-size:16px">{{item.brandname}}</p>
            </div> -->
            <div class="pari"
                 v-if="item.priority==1">默认</div>
          </div>
        </li>
      </ul>
      <div class="paytoot"
           @click="addnuma"
           v-if="laddcar">新增车牌号</div>
      <div class="paytoot"
           v-if="!laddcar">新增车牌号</div>

    </section>
  </div>
</template>
<script>
import axios from 'axios'
import Qs from 'qs'
import { MessageBox } from 'mint-ui';
import { shanchu, chazli, serarchc, delc, bandcard } from './api/api.js'
export default {
  data () {
    return {
      List: [],
      laddcar: true,
      id: '',
      conrler: ''
    }
  },
  watch: {

  },
  mounted () {
    let data = {
      openid: this.openid
    }
    console.log(data)
    serarchc(data).then(res => {
      console.log(res)
      if (res.data.resCode == 200) {
        if (res.data.result.length == 0) {
          this.$router.push({ path: '/card', query: { arr: 7 } })
        } else {

          this.List = res.data.result
        }
      }
    })
  },
  methods: {
    async switchover (val) {
      console.log(this.List)
      this.List.find((a, b) => {
        if (a.priority == "1") {
          this.id = a.brandid
        }
      })
      console.log(val)
      let data = {
        brandid: this.id,
        newbrandid: val.brandid
      }
      let res = await bandcard(data)
      if (res.data.resCode == 200) {
        // MessageBox('提示', res.data.result)
        window.location.reload()
      } else {
        // MessageBox('提示', res.data.result)
      }
    },
    delet (val) {
      this.List.forEach(a => {
        if (a.brandid != val) {
          console.log(a.brandid)
          this.conrler = a.brandid
        }
      })
      MessageBox.confirm('', {
        message: '确认要删除车牌号么？',
        title: '提示',
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(action => {
        if (action == 'confirm') {     //确认的回调
          console.log(val)
          let data = {
            brandid: val,
            id: this.conrler ? this.conrler : 1
          }
          delc(data).then(res => {
            console.log(res)
            if (res.data.resCode == 200) {
              // MessageBox('提示', '删除成功');
              window.location.reload()
            } else {
              MessageBox.confirm('默认车牌不能删除', '提示');
              // res.data.msg
            }
          })
        }
      })
    },
    addnuma () {
      // console.log(this.List.length)
      // if (this.List.length > 1) {
      //   this.laddcar = false
      //   MessageBox('提示', '车牌号码最多添加2个');
      // } else {
      //   this.$router.push({ path: '/card', query: { arr: 7 } })
      // }
      this.$router.push({ path: '/card', query: { arr: 7, peoplecar: 6 } })
    },


  }
}
</script>
<style scoped>
.rating_page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #efefef;
  z-index: 204;
}
.listli {
  height: 1.2rem;
  width: 94%;
  margin: 0 auto;
  border: 1px solid #b4a9a9;
  border-radius: 5px;
  margin-top: 0.3rem;
}
.listli .firs {
  display: flex;
  justify-content: space-between;
  width: 92%;
  margin: 0 auto;
  margin-top: 0.1rem;
}
.listli .bottomfir {
  margin-top: 0rem;
}
.pari {
  width: 0.7rem;
  height: 0.3rem;
  background: #f68b1c;
  line-height: 0.3rem;
  border-radius: 20px;
  text-align: center;
  margin-top: -0.05rem;
  color: #fff;
}
.paytoot {
  width: 94%;
  margin: 0 auto;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  font-size: 16px;
  border-radius: 5px;
  background: #f68b1b;
  color: #fff;
  cursor: pointer;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
}
</style>


