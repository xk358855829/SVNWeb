<template>
    <div style="background:#efefef;">
        <div class="title">
            <p v-for="(item,index) in arr" :class="{active:index==num}" @click="use(index)" :key="item.id">{{item.value}}</p>
        </div>
        <mt-loadmore :top-method="loadTop" ref="loadmore">
        <ul class="inner">
             <li v-for="(item,index) in tablesplo" style="position: relative;" @click="check(item)" :class="{zonp:item.use_status==-1}">
                   <div style="display:flex;">
                       <div style="width:30%;height:30%;position:relative;">
                           <p style="width:100%;height:100%;"><img src="../../static/image/hong.png" alt="" v-if="'2'==item.useWay&&item.use_status!=-1&&item.use_status!=0" style="width:100%;height:100%;"></p>
                           <p style="width:100%;height:100%;"><img src="../../static/image/green.png" alt="" v-if="'1'==item.useWay&&item.use_status!=-1&&item.use_status!=0" style="width:100%;height:100%;"></p>
                           <p style="width:100%;height:100%;"><img src="../../static/image/lan.png" alt="" v-if="'3'==item.useWay&&item.use_status!=-1&&item.use_status!=0" style="width:100%;height:100%"></p>
                            <p style="width:100%;height:100%;"><img src="../../static/image/zg (3).png" alt="" v-if="item.use_status==-1" style="width:100%;height:100%"></p>
                            <p style="width:100%;height:100%;"><img src="../../static/image/zg (3).png" alt="" v-if="item.use_status==0" style="width:100%;height:100%"></p>
                           <p style="position:absolute;top:40%;left:30%;" class="imgtext">
                                <span v-if="!item.freeTime">￥</span>
                                <span v-if="item.freeTime">m</span>
                                <span style="font-size:20px;">{{item.freeTime?item.freeTime:item.sub}}</span>
                           </p>
                       </div>
                       <div style="width:70%;height:30%;margin-top:0.1rem;" class="texts">
                           <div style="display:flex;">
                               <div :class="sstts[(item.useWay)]" v-if="item.use_status==1" style="width:0.58rem;height:0.2rem;text-align:center;line-height:0.2rem;border-radius:5px;margin:0.03rem;margin-top:-0.05rem;color:#fff;">{{item.useWay|change}}</div>
                               <div v-if="item.use_status==-1" style="width:0.58rem;height:0.2rem;text-align:center;line-height:0.2rem;border-radius:5px;margin:0.03rem;margin-top:-0.05rem;color:#fff;background:#999;">{{item.useWay|change}}</div>
                               <div v-if="item.use_status==0" style="width:0.58rem;height:0.2rem;text-align:center;line-height:0.2rem;border-radius:5px;margin:0.03rem;margin-top:-0.05rem;color:#fff;background:#999;">{{item.useWay|change}}</div>
                               <div>杭州速利科技电子券</div>
                           </div>
                           <div style="display:flex;justify-content: space-between;line-height:0.2rem;position: relative;">
                               <div>{{(item.start_time).slice(0,10)}}-{{(item.end_time).slice(0,10)}}</div>
                               <!-- <div :class="sstt[(item.useWay)]" style="margin-right:8px;width:0.58rem;height:0.2rem;border-radius:10px;text-align:center;line-height:0.2rem;" @click="shiyong(item)">立即使用</div> -->
                               <div class="square" v-if="item.use_status==1&&$route.query.num!=1"></div>
                               <div style="position: absolute;right:0.16rem;margin-top:-0.02rem;" v-if="item.remark&&item.use_status==1&&$route.query.num!=1">
                                   <img src="../../static/image/rong.png" alt="">
                               </div>
                               <div style="position: absolute;width:0.5rem;height:0.5rem;top:-0.28rem;right:0" v-if="item.use_status==-1">
                                   <img src="../../static/image/zg (1).png" alt="" style="width:100%;height:100%;">
                               </div>
                               <div style="position: absolute;width:0.5rem;height:0.5rem;top:-0.28rem;right:0" v-if="item.use_status==0">
                                   <img src="../../static/image/zg (2).png" alt="" style="width:100%;height:100%;">
                               </div>
                           </div>
                           <div style="margin-top:0.1rem;" v-if="item.useWay=='2'">抵扣停车费<span>{{item.sub}}</span>元</div>
                           <div style="margin-top:0.1rem;" v-if="item.useWay=='1'">免费时长<span>{{item.freeTime}}分钟</span></div>
                           <div style="margin-top:0.1rem;" v-if="item.useWay=='3'">满<span>{{item.full}}元</span>减<span>{{item.sub}}元</span></div>
                       </div>
                   </div>
                </li>
        </ul>
        <div class="iimga" v-if="imgl">
            <div style="width:1rem;margin:1rem auto;">
                <img src="../../static/image/atz.png" alt="" style="width:1.1rem;height:1.13rem;">
            </div>
        </div>
        </mt-loadmore>
    </div>
</template>
<script>
import axios from 'axios';
import Qs from 'qs'
import {Loadmore} from 'mint-ui';
import {mapState,mapActions, mapGetters} from 'vuex'
import {ticket} from './api/api.js'
export default {
    name:'record',
    data(){
        return{
        arr:[{value:'未使用',id:1},{value:'已使用',id:2},{value:'已过期',id:3}],
        num:'',
        tablesplo:[],
        rong:'',
        remark:false,
        sstts:[
            "ss1s",
            "ss2s",
            "ss3s",
            "ss4s",
        ],
        sstt:[
        "ss1",
        "ss2",
        "ss3",
        "ss4",
        ],
        row:1,
        imgl:false,
        // 分页
        page:1,
        pageSize:10
        }
    },
    computed:{
        ...mapState(['quanlist','mp'])
    },
    methods:{
        ...mapActions(['tickets']),
        loadTop(){
            let data={
                page:this.page,
                pageSize:1000,
                // tel:17549206920
                tel:localStorage.getItem('tel')
                }
                // let data={tel:localStorage.getItem('tel')}
                // tel:localStorage.getItem('tel')
            this.tickets(data)
             setTimeout(() => {
              this.$refs.loadmore.onTopLoaded();
            }, 1500);
        },
        use(index){
            var arr1=[]
            var arr2=[]
            var arr3=[]
        
            console.log(this.quanlist)            
            this.quanlist.forEach((a,b)=>{
                if(a.use_status==-1){
                    arr1.push(a)
                    
                }else if(a.use_status==0){
                    arr2.push(a)
                }else{
                    a.remark=''
                    arr3.push(a)
                }
             })
            if(index==0){
                this.tablesplo=arr3
                if(this.tablesplo.length==0){
                    this.imgl=true;
                }else{
                    this.imgl=false;
                }
            }else if(index==1){
                this.tablesplo=arr2
                console.log(this.tablesplo.length)
                if(this.tablesplo.length==0){
                    this.imgl=true;
                }else{
                    this.imgl=false;
                }
            }else{
                this.tablesplo=arr1
                 console.log(this.tablesplo.length)
                if(this.tablesplo.length==0){
                    this.imgl=true;
                }else{
                    this.imgl=false;
                }
            }
            this.num=index
        },
        check(item){
            if(this.$route.query.num==1){
                return false
            }else{
                 console.log(item)
                this.tablesplo.forEach((a,b)=>{
                    if(a.id==item.id){
                        console.log(b)
                        this.tablesplo[b].remark=!this.tablesplo[b].remark
                    }
                })
                sessionStorage.setItem('ticknumbar1',item.freeTime)
                sessionStorage.setItem('ticknumbar2',item.sub)
                sessionStorage.setItem('ticknumbar3',item.ticketNumber)
                let that=this;
                setTimeout(function(){
                    that.$router.push('/pay')
                },300)
            }
        }
    },
    mounted(){
        let data={
            page:this.page,
            pageSize:1000,
            // tel:15267084796
            tel:localStorage.getItem('tel')
        }

            // let data={tel:localStorage.getItem('tel')}
            // 
        this.tickets(data)
        
        let a=localStorage.getItem('tabz')
        this.tablesplo=JSON.parse(a)
        this.quanlist.forEach((a,b)=>{
            a.remark=''
            sessionStorage.removeItem('ticknumbar1')
            sessionStorage.removeItem('ticknumbar2')
            sessionStorage.removeItem('ticknumbar3')
        })
        if(this.tablesplo.length==0){
            this.imgl=true;
        }else{
            this.imgl=false;
        }
       
    },

}
</script>
<style lang="scss" scoped>
    @import '../style/mixin.scss';
    $he:rgb(109,109,109);
    .imgtext{
        color:#fff;
    }
    .zonp{
        color: #999;
    }
    .title{
        @include wh(100%,0.4rem);
        display: flex;
        justify-content: space-around;
        background: #fff;
        line-height: 0.4rem;
        p{
            @include sc(15px,rgb(102,102,102));
        }
    }
    .active{
        color: rgb(246,139,28)!important;
        border-bottom: 2px solid rgb(246,139,28)!important
    }
    .inner{
        width: 91%;
        margin:0 auto;
        li{
            // @include wh(100%,0.9rem);
            background: #fff;
            margin:0.16rem auto;
            // display: flex;
        }
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
   .square{
       @include wh(0.2rem,0.2rem);
       border: 1px solid #666;
       margin-right: 0.2rem;
       border-radius: 50%;
   }
</style>


