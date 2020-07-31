<template>
    <div style="width:100%;background:#fff;" class="tone">
            <ul class="kabaoul">
                <li v-for="(item,index) in tablesplo" style="position: relative;">
                   <div style="display:flex;" :class="{avtive:-1==item.use_status||0==item.use_status}">
                       <div style="width:30%;height:30%;position:relative;margin-top:0.3rem;">
                           <p style="width:100%;height:100%;"><img src="../../static/image/hong.png" alt="" v-if="'2'==item.useWay" style="width:100%;height:100%;"></p>
                           <p style="width:100%;height:100%;"><img src="../../static/image/green.png" alt="" v-if="'1'==item.useWay" style="width:100%;height:100%;"></p>
                           <p style="width:100%;height:100%;"><img src="../../static/image/lan.png" alt="" v-if="'3'==item.useWay" style="width:100%;height:100%"></p>
                           <p style="position:absolute;top:40%;left:35%;">
                                <span v-if="!item.freeTime">￥</span>
                                <span v-if="item.freeTime">m</span>
                                <span style="font-size:20px;">{{item.freeTime?item.freeTime:item.sub}}</span>
                           </p>
                       </div>
                       <div style="width:70%;height:30%;margin-top:0.4rem;">
                           <div style="display:flex;">
                               <div :class="sstts[(item.useWay)]" style="width:1.56rem;height:0.4rem;text-align:center;line-height:0.46rem;border-radius:5px;margin:0.06rem;margin-top:-0.1rem;color:#fff;">{{item.useWay|change}}</div>
                               <div>杭州速利科技电子券</div>
                           </div>
                           <div style="display:flex;justify-content: space-between;line-height:0.3rem">
                               <div>{{(item.start_time).slice(0,10)}}-{{(item.end_time).slice(0,10)}}</div>
                               <div :class="sstt[(item.useWay)]" style="margin-right:16px;width:1.56rem;height:0.4rem;border-radius:10px;text-align:center;line-height:0.4rem;" @click="shiyong(item)">立即使用</div>
                               <!-- <div :class="sstt[(item.useWay)]" style="margin-right:8px;width:0.58rem;height:0.2rem;border-radius:10px;text-align:center;line-height:0.2rem;" @click="lingqu(item)" v-if="$route.path=='/quan'&&$route.path!='/fuzhi'">立即领取</div> -->
                           </div>
                           <div style="line-height:0.3rem" v-if="item.useWay=='2'">抵扣停车费<span>{{item.sub}}</span>元</div>
                           <div v-if="item.useWay=='1'">免费时长<span>{{item.freeTime}}分钟</span></div>
                           <div v-if="item.useWay=='3'">满<span>{{item.full}}元</span>减<span>{{item.sub}}元</span></div>
                       </div>
                   </div>
                   <div v-if="item.use_status==-1||item.use_status==0" class="shixiao">
                       已失效
                   </div>
                </li>
            </ul>
           <!-- <foot :tabDate="tables"></foot> -->
    </div>
</template>
<script>
import axios from 'axios';
import Qs from 'qs'
import {Loadmore} from 'mint-ui';
// import {shuaxin} from './api/api.js'
// import foot from '../view/foot'
import { MessageBox } from 'mint-ui';
export default {
    props:['tablesplo','onetable'],
    name:'record',
    data(){
        return{
           row:1,
           sstt:[
            "ss1",
            "ss2",
            "ss3",
            "ss4",
          ],
          sstts:[
            "ss1s",
            "ss2s",
            "ss3s",
            "ss4s",
          ],
        }
    },
    // components:{
    //     foot
    // },
    methods:{
        shiyong(val){
         
                sessionStorage.setItem('ticknumbar1',val.freeTime)
                sessionStorage.setItem('ticknumbar2',val.sub)
                sessionStorage.setItem('ticknumbar3',val.ticketNumber)
                this.$router.push('/pay')
                console.log(val)
            
        },
        lingqu(val){
            
        }
    },
    mounted(){
        console.log(this.tablesplo)
        this.$http({
            method:'post',
            url:'http://39.104.113.112:2088/TicketInfo/flushOverDue'
        }).then(res=>{

        })
    },

}
</script>
<style scoped>
    .kabaoul{width: 100%;height: 100%;overflow-y: auto;}
    .kabaoul li{width: 91%;margin:0 auto;height: 2.23rem;margin-top:0.32rem;box-shadow:0px 2px 12px 0px #f2f2f2;}
    .ohtal{width: 90%;margin:0 auto;height:100%;}
    .color8{
        color:#fe4444;
    }
    .color9{
        color: #999;
      
        
    }
    
    .ss4{
    color: #5294d1;
    border:2px solid #5294d1;
  }
  .ss2{
    color: #47ccb7;
    border:2px solid #47ccb7;
  }
  .ss3{
    color: #fd8587;
    border:2px solid #fd8587;
  }
   .ss2s{ 
        background: #47ccb7;
   }
   .ss3s{
       background: #fd8587;
   }
   .ss4s{
        background: #5294d1;
   }
   .avtive{
       background: #fd8587;
   }
   .shixiao{
       width: 100%;
       height: 100%;
       background: rgba(255,255,255,0.5);
       position: absolute;
       top:0;
       left: 0;
       font-size: 20px;
       text-align: center;
       padding-top:0.6rem;
   }
</style>


