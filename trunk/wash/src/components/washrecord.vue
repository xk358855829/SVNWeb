<template>
  <div style="width:100%;background:#efefef;overflow: scroll;" class="rating_page" v-if="showInfo">
    <div class="title">
      <div
        v-for="(tit,index) in title"
        :key="index"
        :class="{active:parameter==index}"
        @click="active(index)"
      >{{tit}}</div>
    </div>
    <div class="clear"></div>
    <div class="complete" v-if="parameter==0">
      <ul>
        <li v-for="complete in reptools" :key="complete.orderid"> 
          <div @click="completeClick(complete)">
            <h5>
              <span>订单号：{{complete.number}}</span>
              <span
                v-if="complete.washcarStatus==0 && complete.status==1"
                style="float:right;margin-right:0.4rem;color:#49c58f;"
              >{{status(complete.washcarStatus)}}</span>
              <span
                v-else-if="complete.washcarStatus==0 && complete.status==-1"
                style="float:right;margin-right:0.4rem;color:#f68b1b;"
              >{{orderStatus(complete.status)}}</span>
              <span
                v-else
                style="float:right;margin-right:0.4rem;color:#e94255;"
              >{{status(complete.washcarStatus)}}</span>
            </h5>
            <div class="la">
              <div>
                <div>
                  <i class="s" style="margin-right:0.2rem;"></i>
                  站点名称: {{chosesname(complete.sid)}}
                </div>
                <div>
                  <i class="s"></i>
                  下单时间: {{complete.cdate!=""?fmtDate(complete.cdate.time):"-"}}
                </div>
                <div>
                  <i class="e" style="margin-right:0.2rem;"></i>
                  车牌号码: {{complete.carNumber}}
                </div>
                <div>
                  <i class="e"
                    style="margin-right:0.2rem;"></i>洗车模式: {{complete.carModel==4?"标准快洗":complete.carModel}}                
                </div>
              </div>
              <div style="text-align:right;">
                <img v-if="complete.washcarStatus!=0&&complete.status==1" @click.stop="updaterecord(complete.number)" src="../../static/image/d (3).png" style="margin: 10.5px 14.5px;width:26px;height:26px;" />
                <img class="right" src="../../static/image/shangjiant.png" />
                <!-- <img @click="deleterecord(complete.number)" v-else="" src="../../static/image/d (1).png" style="margin:14.5px;" /> -->
                <div style="margin: 0.55rem 0.25rem 0 0;">实付金额：{{complete.carAmount}}元</div>
              </div>
            </div>
          </div>
          <!-- <div v-else="">
            <h5>
              <span>订单号：{{complete.number}}</span>
              <span
                v-if="complete.washcarStatus==0"
                style="float:right;margin-right:0.4rem;color:#49c58f;"
              >{{status(complete.washcarStatus)}}</span>
              <span
                v-else
                style="float:right;margin-right:0.4rem;color:#e94255;"
              >{{status(complete.washcarStatus)}}</span>
            </h5>
            <div class="la">
              <div>
                <div>
                  <i class="s" style="margin-right:0.2rem;"></i>
                  站点名称: {{chosesname(complete.sid)}}
                </div>
                <div>
                  <i class="s"></i>
                  洗车时间: {{complete.startTime !="" ? fmtDate(complete.startTime.time) : "-"}}
                </div>
                <div>
                  <i class="e" style="margin-right:0.2rem;"></i>
                  车牌号码: {{complete.carNumber}}
                </div>
                <div>
                  <i class="e"
                    style="margin-right:0.2rem;"></i>洗车模式: {{complete.carModel}}                
                </div>
              </div>
              <div style="text-align:right;">
                <img class="right" src="../../static/image/shangjiant.png" />
                <div style="margin: 0.55rem 0.25rem 0 0;">实付金额：{{complete.carAmount}}元</div>
              </div>
            </div>
          </div> -->
        </li>
      </ul>
    </div>
    <div class="complete" v-if="parameter==1">
      <ul>
        <li
          @click="completeClick(complete)"
          v-for="complete in uncompleteList"
          :key="complete.orderid"
        >
          <h5>
            <span>订单号：{{complete.number}}</span>
            <span
              v-if="complete.washcarStatus==0"
              style="float:right;margin-right:0.4rem;color:#49c58f;"
            >{{status(complete.washcarStatus)}}</span>
            <span
              v-else
              style="float:right;margin-right:0.4rem;color:#e94255;"
            >{{status(complete.washcarStatus)}}</span>
          </h5>
          <div class="la">
            <div>
              <div>
                <i class="s" style="margin-right:0.2rem;"></i>
                站点名称: {{chosesname(complete.sid)}}
              </div>
              <div>
                <i class="s"></i>
                下单时间: {{complete.cdate!=""?fmtDate(complete.cdate.time):"-"}}
              </div>

              <div>
                <i class="e" style="margin-right:0.2rem;"></i>
                车牌号码: {{complete.carNumber}}
              </div>
              <div>
                <i class="e"
                  style="margin-right:0.2rem;"></i>洗车模式: {{complete.carModel==4?"标准快洗":complete.carModel}}
              </div>
            </div>
            <div style="text-align:right;">
              <img @click.stop="updaterecord(complete.number)" src="../../static/image/d (3).png" style="margin: 10.5px 14.5px;width:26px;height:26px;" />
              <img class="right" src="../../static/image/shangjiant.png" />
              <div style="margin: 0.55rem 0.25rem 0 0;">实付金额：{{complete.carAmount}}元</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="parameter==2" class="unComplete">
      <ul>
        <li
          v-for="uncomplete in completeList"
          :key="uncomplete.orderid"
          @click="completeClick(uncomplete)"
        >
          <h5>
            <span>订单号：{{uncomplete.number}}</span>
            <span
              v-if="uncomplete.washcarStatus==0 && uncomplete.status==1"
              style="float:right;margin-right:0.4rem;color:#49c58f;"
            >{{status(uncomplete.washcarStatus)}}</span>
            <span
                v-else-if="uncomplete.washcarStatus==0 && uncomplete.status==-1"
                style="float:right;margin-right:0.4rem;color:#f68b1b;"
              >{{orderStatus(uncomplete.status)}}</span>
            <span
              v-else
              style="float:right;margin-right:0.4rem;color:#e94255;"
            >{{status(uncomplete.washcarStatus)}}</span>
          </h5>
          <div class="la">
            <div>
              <div>
                <i class="s"></i>
                下单时间: {{ uncomplete.cdate!=""?fmtDate(uncomplete.cdate.time):"-"}}
              </div>
              <div>
                <i class="s" style="margin-right:0.2rem;"></i>
                站点名称: {{chosesname(uncomplete.sid)}}
              </div>
              <div>
                <i class="e" style="margin-right:0.2rem;"></i>
                车牌号码: {{uncomplete.carNumber}}
              </div>
              <div>
                <i class="e"
                  style="margin-right:0.2rem;"></i>洗车模式: {{uncomplete.carModel==4?"标准快洗":uncomplete.carModel}}
              </div>
            </div>
            <div style="text-align:right;">
              <img class="right" src="../../static/image/shangjiant.png" />
              <!-- <img @click="deleterecord(uncomplete.number)" src="../../static/image/d (1).png" style="margin:14.5px;" />               -->
              <div style="margin: 0.55rem 0.25rem 0 0;">实付金额：{{uncomplete.carAmount}}元</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="kbBox==0" class="kbBox">
      <p style="padding-top: 100px;">
        <img class="kb" src="../../static/image/kbym.png" />
      </p>
      <p>暂无记录</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Qs from "qs";
import { Loadmore, MessageBox, Indicator, CellSwipe } from "mint-ui";
import { serarchc, washrecord, getsiteList,getid } from "./api/api.js";
export default {
  name: "washrecord",
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
      // parameter: true,
      allLoaded: false,
      page: 0,
      queryLoading: false,
      moreLoading: false,
      onelist: [],
      twolist: [],
      acarnumber: [],
      parkIist: [],
      showInfo:false,

      completeList: [],
      uncompleteList: [],
      parameter: 1,
      title: ["全部", "进行中", "已完成"],
      kbBox: 1,
      reptool: [],
      pic: "-",
      reptools: [],
      sortType: null, 
      order:false,
    };
  },
  computed: {},
  methods: {
    completeClick(val) {
      console.log(val);
      val.deviceid = val.deviceId;
      sessionStorage.setItem("washdetailed",JSON.stringify(val));
      sessionStorage.setItem("carInfoWashcarId",val.id);
      // sessionStorage.removeItem("washrecordstatus");
      // this.$router.push({
      //   path: "/detailed",
      //   query: {
      //     status: val.washcarStatus
      //   }
      // });
      if(val.washcarStatus==1){
        this.$router.push({
          path: "/carinplace",
          query: {
            status: val.washcarStatus,
            sid: val.sid
          }
        });
      }else{
        this.$router.push({
          path: "/detailed",
          query: {
            status: val.washcarStatus
          }
        });
      }
    },
    active(index) {
      this.parameter = index;
      console.log(index);
      if (index == 0) {
        if (this.reptools.length == 0) {
          this.kbBox = 0;
        } else {
          this.kbBox = 1;
        }
      } else if (index == 1) {
        if (this.uncompleteList.length == 0) {
          this.kbBox = 0;
        } else {
          this.kbBox = 1;
        }
      } else {
        if (this.completeList.length == 0) {
          this.kbBox = 0;
        } else {
          this.kbBox = 1;
        }
      }
    },
    status(val) {
      if (val == 1) {
        return "待洗车";
      } else if (val == 0) {
        return "已完成";
      } else if (val == 2) {
        return "洗车中";
      } else if (val == 3){
        return "紧急停止";
      }
    },
    orderStatus(val){
      if(val == 1){
        return "已支付";
      }else if(val == 0){
        return "待支付";
      }else if(val == -1){
        return "已退款";
      }
    },
    fmtDate(obj) {
      let date = new Date(obj);
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let minute = date.getMinutes();
      let second = date.getSeconds();
      minute = minute < 10 ? "0" + minute : minute;
      second = second < 10 ? "0" + second : second;
      return (
        y + "-" + m + "-" + d + " " + h + ":" + minute +':'+second
      );
    },
    async loadMore2() {      
      let that = this;
      // this.parameter = a;
      this.completeList = [];
      this.uncompleteList = [];
      this.reptools = [];
      let data = {
        openid: localStorage.getItem("openid")
      };
      washrecord(data).then(message => {
        Indicator.close();
        that.showInfo = true;
        console.log(message);
        that.more_loading = true;
        if (message.data.resCode == 0) {
          if (message.data.count == 0) {
            that.kbBox = 0;
          } else { 
            that.reptool = (message.data.result).sort(function (a,b) {
              return b.cdate.time - a.cdate.time;
            });            
            that.reptool.forEach((a, b) => {
              if(a.status != 0){
                if ((a.washcarStatus == 0 && a.status == 1) || (a.washcarStatus == 0 && a.status == -1)) {
                  that.completeList.push(a);
                } else {
                  that.uncompleteList.push(a);
                }
              }
            });
            that.reptools = that.uncompleteList.concat(that.completeList);
            if (that.uncompleteList.length == 0) {
              that.kbBox = 0;
            } else {
              that.kbBox = 1;
            }
          }
          console.log(that.uncompleteList);
        } else {          
          that.kbBox = 0;
        }
      });
    },
    getwashsiteList() {
      let params = {
        page: 1,
        pageSize: 500,
        userId: "SURIOT",
        dealer: 123
      };
      getsiteList(params).then(message => {
        console.log(message);
        if (message.data.result.length > 0) {
          for (var i = 0; i < message.data.result.length; i++) {
            let list = {
              sid: message.data.result[i].sid,
              sname: message.data.result[i].sname
            };
            this.parkIist.push(list);
          }
          console.log(this.parkIist);
        } else {
          this.parkIist = [];
        }
      });
    },
    chosesname(val) {
      this.parkIist.forEach((a, index) => {
        if (a.sid == val) {
          val = a.sname;
        }
      });
      return val;
    },
    updaterecord(number){
      console.log(number);
      this.$router.push({path:'/card',query:{number:number}})      
    }
    // deleterecord(number){
    //   console.log(number);
    //   let that = this;
    //   let data = {number:number};
    //   MessageBox.confirm('是否删除订单').then(action => {
    //     axios.post(that.washhttpUrl + "/parkingCarRecerd/deleteByNumber",Qs.stringify(data)).then(message => {
    //       console.log(message);
    //       if(message.data.resCode == 0){
    //         that.loadMore2(that.parameter);
    //         MessageBox("提示","删除成功");
    //       }else{
    //         MessageBox("提示","删除失败");
    //       }
    //     })
    //   });
    // }
  },

  mounted() {
    // let url = window.location.href;
    // console.log(url);
    // if(url.indexOf("?") != -1){
    //   url = url.split("?");
    //   console.log(url);
    //   if(url.length > 2){
    //     url = url[2];
    //     console.log(url);
    //     localStorage.setItem("openid",getid(url).id);
    //     localStorage.setItem("phone",getid(url).phone);
    //     localStorage.setItem("tel",getid(url).phone);
    //   }      
    // }
    // this.loadMore2();
    // this.getwashsiteList();
  },
  created() {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
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
      }      
    }
    this.loadMore2();
    this.getwashsiteList();
  },
};
</script>
<style scoped>
.main-body {
  overflow: scroll;
}
.rating_page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #efefef;
  z-index: 204;
}
.recordli li {
  /* width: 91%;
  margin: 0 auto;
  height: 1.63rem;
  box-shadow: 0px 2px 12px 0px #f2f2f2; */
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

.title {
  z-index: 999;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  margin-bottom: 10px;
  background-color: #ffffff;
  justify-content: space-around;
  border-bottom: 1px solid #d8d8d8;
}
.title div {
  text-align: center;
  font-size: 0.32rem;
  height: 36px;
  line-height: 36px;
  border-bottom: 2px solid #ffffff;
  color: #333333;
}
.title .active {
  border-bottom: 2px solid #f68b1b;
  color: #f68b1b;
}
.clear {
  height: 50px;
}
li {
  background-color: white;
  width: 97%;
  margin: 0 auto;
  /* border-bottom: 1px solid #D8D8D8;
		border-top: 1px solid #D8D8D8; */
  margin-bottom: 0.2rem;
  border-radius: 5px;
}
.la {
  display: flex;
  justify-content: space-between;
}
.la .right {
  transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  -o-transform: rotate(90deg);
}
.la > div {
  padding: 5px 0;
}
.la div img {
  margin: 6px 0;
}
.la div div {
  color: #787878;
  font-size: 0.24rem;
  display: flex;
  height: 26px;
  line-height: 26px;
}
.la div i {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 10px 10px 10px 20px;
}
.s {
  background-color: #49c58f;
}
.e {
  background-color: #e94255;
}
h5 {
  color: #333333;
  font-size: 0.28rem;
  display: flex;
  line-height: 24px;
  padding-top: 10px;
  padding-left: 10px;
  justify-content: space-between;
}
h5 span {
  display: block;
  padding: 2px 5px;
  line-height: 1;
  margin-left: 10px;
  margin-right: 10px;
}
h5 span:nth-of-type(2) {
  color: #f68b1b;
  font-size: 0.24rem;
}
.kbBox {
  width: 100%;
  text-align: center;
  color: #787878;
  height: 10rem;
  z-index: 5;
}
.kb {
  width: 30%;
  margin: auto;
}
.kbBox p {
  padding: 10px 0;
}
</style>


