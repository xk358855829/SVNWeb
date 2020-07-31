<template>
  <div style="width:100%;background:#efefef;overflow: scroll;" class="rating_page">
    <ul class="recordli" style="padding-top:0.2rem;">
      <li v-for="item in uncompleteList" style="height:2.2rem;" :key="item.id">
        <h5 style="justify-content: space-between;">
          <span
            style="font-size:0.26rem;    color: #333333;"
          >时间：{{item.start_time}}~{{item.end_time}}</span>
          <!-- <img
            src="../../static/image/alsi.png"
            alt
            style="width:0.3rem;height:0.3rem;margin-right:0.4rem"
            v-if="item.payStatus==0"
            @click="delcount(item)"
          /> -->
        </h5>
        <div class="la" style="font-size:0.26rem;    color: #787878;">
          <div>
            <div style="margin-top:0.2rem;margin-left:0.5rem;">
              <i class="s" style="margin-right:0.2rem;"></i>
              车主姓名: {{item.name}}
              <span style="float:right;margin-right:0.4rem">充值类型：{{item.type}}</span>
            </div>
            <div style="margin-top:0.2rem;margin-left:0.5rem;">
              <i class="s" style="margin-right:0.2rem;"></i>
              车牌号码: {{item.car_number}}
              <span
                style="float:right;margin-right:0.4rem"
              >充值金额：{{item.money}}&nbsp;元</span>
            </div>
            <!-- <div style="margin-top:0.1rem;margin-left:0.25rem;">
              <i class="e"
                 style="margin-right:0.1rem;"></i>站点名称: {{item.sname}}
              <span style="float:right;margin-right:0.2rem"></span>
            </div>-->
          </div>
        </div>
      </li>
    </ul>
    <div v-if="imgal" style="padding-top:2rem;z-index:22;">
      <p style="text-align:center;">
        <img class="kb" src="../../static/image/kbym.png" />
      </p>
      <p style="padding-top: 20px;text-align:center;font-size:0.2rem;">暂无记录，<router-link style="font-size:0.3rem;color:#f68b1b;" to="/people/vip">前往开通</router-link></p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Qs from "qs";
import { Loadmore, MessageBox } from "mint-ui";
import { getid } from "./api/api.js";
export default {
  name: "record",
  data() {
    return {
      col: "",
      texts: 1,
      griddata: [], //每次加载出来的新数据
      Data: [], //每次加载累加后的总数据
      //若为真，则 bottomMethod 不会被再次触发
      num: 1, //num为0时表示刷新或第一次加载，每加载一次增加1，刷新时默认为0
      table: "",
      wrapperHeight: 0,
      arr: [],
      imgal: false,
      gval: [],
      uncompleteList: [],
      parameter: true,
      allLoaded: false,
      page: 0,
      queryLoading: false,
      moreLoading: false,
      onelist: [],
      twolist: [],
    };
  },
  methods: {
    // delcount(val) {
    //   MessageBox.confirm("", {
    //     message: "确认要删除充值记录么？",
    //     title: "提示",
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消"
    //   }).then(async action => {
    //     if (action == "confirm") {
    //       console.log(val);
    //       let data = {
    //         id: val.id
    //       };
    //       let res = await deloutrec(data);
    //       console.log(res);
    //       if (res.data.resCode == 0) {
    //         MessageBox("提示", "删除成功");
    //         window.location.reload();
    //       } else {
    //         MessageBox("提示", "删除失败");
    //       }
    //     }
    //   });
    // },
    loadMore1() {
      this.arr = [];
      this.$http({
        method: "post",
        url: this.washurl + "/openVIPRecordsWashCar/selectAll",
        data: Qs.stringify({
          page: 1,
          pageSize: 100,
          userId: "93f07a1decc14ce69ca82e0d6c5d3761",
          dealer: 1561430951496,
          tel: localStorage.getItem("phone") ? localStorage.getItem("phone") : localStorage.getItem("tel")
        })
      }).then(message => {
        console.log(message);
        this.more_loading = true;
        var a = [];
        if (message.data.resCode == 0) {
          if (message.data.count != 0) {
            this.uncompleteList = message.data.result;
          } else {
            this.imgal = true;
          }
        }
      });
    }
  },
  mounted() {
    let url = window.location.href;
    console.log(url);
    if(url.indexOf("?") != -1){
      url = url.split("?");
      console.log(url);
      if(url.length > 2){
        url = url[2];
        console.log(url);
        localStorage.setItem("openid",getid(url).id);
        localStorage.setItem("phone",getid(url).phone);
        localStorage.setItem("tel",getid(url).phone);
        // console.log(localStorage.getItem("openid")+","+localStorage.getItem("phone"));
      }      
    }
    this.loadMore1();
  }
};
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
.main-body {
  overflow: scroll;
}
.recordli li {
  background-color: white;
  width: 97%;
  margin: 0 auto;
  margin-bottom: 0.2rem;
  border-radius: 5px;
}
.ohtal {
  width: 98%;
  margin: 0rem auto;
  height: 100%;
  background: #fff;
  margin-bottom: 0.6rem;
}
.color8 {
  color: #fe4444;
}
.color9 {
  color: #999;
}
h5 {
  display: flex;
  line-height: 0.24rem;
  padding-top: 0.2rem;
  padding-left: 0.2rem;
}
h5 span {
  display: block;
  padding: 2px 5px;
  line-height: 1;
  margin-left: 10px;
  margin-right: 10px;
}
.la div i {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.s {
  background-color: #49c58f;
}
.la div i {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.e {
  background-color: #e94255;
}
.kb {
  width: 30%;
  margin: auto;
}
</style>


