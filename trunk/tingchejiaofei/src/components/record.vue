<template>
    <div style="width:100%;background:#fff;height:100%;">
       <!-- <div class="main-body" ref="wrapper" :style="{ height: (wrapperHeight) + 'px' }"> -->
       <!-- <mt-loadmore :top-method="loadTop"

　　　　:bottom-all-loaded="allLoaded"

　　　　ref="loadmore"> -->
            <!-- :autoFill="isAutoFill" -->
            <ul class="recordli">
                <li v-for="item in arr">
                    <div class="ohtal">
                        <div style="height:0.38rem;border-bottom:1px solid #ebebeb;line-height:0.38rem;">
                            <img src="" alt="">
                            <span style="color:#999;font-size:13px;">{{item.pay_time}}</span>
                        </div>
                        <div class="ofalse" style="display: flex;justify-content: space-between">
                            <div style="height:0.38rem;color:#303030;font-size:15px;line-height:0.38rem;">
                                <span>车牌号：</span>
                                <span style="color:#666">{{item.carnumber}}</span>
                            </div>
                            <!-- <div style="height:0.38rem;color:#fe4444;font-size:15px;line-height:0.38rem;" v-if="col==1">
                                {{item.order_status}}
                            </div> -->
                            <div style="height:0.38rem;font-size:15px;line-height:0.38rem;" :class="[item.order_status=='已完成'?'color8':'color9']">
                               {{item.order_status}}
                            </div>
                        </div>
                        <div style="border-bottom:1px solid #ebebeb;">
                            <div style="height:0.38rem;color:#303030;font-size:15px;line-height:0.38rem;">
                                <span>停车场：</span>
                                <span style="color:#666">{{item.parking_lot_name}}</span>
                            </div>
                        </div>
                        <div style="height:0.42rem;color:#f68b1c;font-size:16px;line-height:0.42rem;text-align:right;">
                            <span>总计：</span>
                            <span>{{item.price}}元</span>
                        </div>
                    </div>
                </li>
            </ul>
            <div v-if="imgal">
                <p style="width:2.5rem;height:2rem;margin:0 auto;">
                    <img src="../../static/image/carr.png" style="width:100%;height:100%;" alt="">
                </p>
                
            </div>
            <!-- <div v-if="texts==1" style="text-align: center;background: #fff;font-size: 14px;" @click="gengduo">
                点击加载更多
            </div>
            <div v-if="texts==2" style="text-align: center;background: #fff;font-size: 14px;">
                没有更多数据了。。。
            </div> -->
         <!-- </mt-loadmore> -->
     <!-- </div> -->
    </div>
</template>
<script>
import axios from 'axios';
import Qs from 'qs'
import {Loadmore,MessageBox} from 'mint-ui';
export default {
    name:'record',
    data(){
        return{
            col:'',
            texts:1,
            griddata:[], //每次加载出来的新数据
　　　　　　Data:[],　　//每次加载累加后的总数据
　　　　　　allLoaded: true, 　　//若为真，则 bottomMethod 不会被再次触发
　　　　　　num:1,　　//num为0时表示刷新或第一次加载，每加载一次增加1，刷新时默认为0
            table:'',
            wrapperHeight:0,
            arr:[],
            imgal:false,
            gval:[]
        }
    },
    methods:{
        loadTop:function() { //组件提供的下拉触发方法 
            this.num=1;
　　　　　　 this.update(0,'top');
       }, 
    gengduo:function() { 
        console.log(this.col)
            this.num+=1;
            let offset = this.num*10　　//offset为分页偏移量，这里是每次加载增加十条数据
　　　　　　  this.update(offset,'bottom');
console.log(this.col)
       }, 
        // update(a,type){　　//每次触发上拉加载或下拉刷新时触发的数据接口
        update(){
            console.log(this.table)
            let param={
                // carnumber:'津A12345',
                // parkingId:'PI1540957659034816320',
                // page: this.num,
                // is_del: 0,
                // pageSize: 10,
                // userId: 'SURIOT',
                // dealer: 123,
                // number:10,　　//每页多少条数据
                carNumber:this.table
            }
            let that=this;
            that.$http({
                method:'post',
                url:`${this.httpUrl}/Order/findByCarNumber`,
                data:Qs.stringify(param)
            }).then(res=>{
                 Object.keys(res.data.value).map(keys=>{
                    let c=JSON.parse(JSON.stringify(res.data.value[keys]))
                    for(var i in c){
                        that.arr.push(c[i])
                        
                    }
                    that.arr.forEach((a,b) => {
                        if(a.order_status=="1"){
                            a.order_status='未支付'
                            that.col=2
                        }else if(a.order_status=="-1"){
                            a.order_status='已退款'
                            that.col=1
                        }else if(a.order_status=="0"){
                            a.order_status='已完成'
                            that.col=1
                        }
                    });
                    
                })
               if(that.arr.length==0){
                   that.imgal=true
               }else{
                   that.imgal=false
               }
                // console.log(that.arr)
                // if(res.data.resCode==0){
                //     // that.tab=res.data.result
                   
                //     if(a==0){
                //         that.Data =res.data.result

                //     }else{
                //         that.griddata=res.data.result
                //         let len=that.griddata.length
                //          for(let i=0;i<len;i++){
                //             that.Data.push(that.griddata[i])　　//将新数据push到Data中
                //    　　 }
                //         if(that.num*10>that.Data.length){
                //            that.texts=2
                //         }
                //     }
                //     let arsc;
                   
                    
                // }
                // console.log(type)
                //通过传过来的type值不同分辨上拉加载或下拉刷新
    // 　　　　　　　　if(type=='top'){　　
    //                     setTimeout(function(){
    //                         that.$refs.loadmore.onTopLoaded();
    //                     },2000)  
    // 　　　　　　　　
    // 　　　　　　　　}else if(type=='bottom'){
    //                     setTimeout(function(){
    //                         that.$refs.loadmore.onBottomLoaded();
    //                     },2000)
    // 　　　　　　　　}
            
    　　　})
    　　},
    //    loadPageList:function (){ 
    //      // 查询数据 
    //          let offset = this.num*10
    //         let data={
    //             car_number:'津A12345',
    //             parkingId:'PI1540957659034816320',
    //             page: this.num,
    //             is_del: 0,
    //             pageSize:offset,
    //             userId: 'SURIOT',
    //             dealer: 123
    //         }
    //         let that=this;
    //         that.$http({
    //             method:'post',
    //             url:'http://39.104.113.112:2088/Order/orders',
    //             data:Qs.stringify(data)
    //         }).then(res=>{
    //             if(res.data.resCode==0){
    //                 // that.tab=res.data.result
    //                 res.data.result.forEach((a,b) => {
    //                     if(a.order_status==1){
    //                         a.order_status='未支付'
    //                         that.col=1
    //                     }else if(a.order_status==-1){
    //                         a.order_status='已退款'
    //                         that.col=1
    //                     }else{
    //                         a.order_status='已完成'
    //                         that.col=2
    //                     }
    //                 });
    //                 that.Data =res.data.result
    //             }
    //         })
    //     
    //    }
    },
    watch:{
        
    },
    mounted(){
        // document.title=this.$route.meta.title;
    //      this.wrapperHeight =
    //   document.documentElement.clientHeight -
    //   this.$refs.wrapper.getBoundingClientRect().top;
    //     this.loadTop()
        console.log(localStorage.getItem('list'))
        if(localStorage.getItem('list')){
             this.gval=(JSON.parse(localStorage.getItem('list'))).split(",")
        }
         this.gval.forEach((a,b)=>{
             this.table+=a+','
         })
         this.table=this.table.substring(0,this.table.length-1)
         console.log(this.table)
         this.update()
        // str.replace(/\[|]/g,'')
        // var str = this.$route.query.val;
      
    },

}
</script>
<style scoped>
    .main-body {
      overflow: scroll;
    }

    .recordli li{width: 91%;margin:0 auto;height: 1.63rem;margin-top:0.16rem;box-shadow:0px 2px 12px 0px #f2f2f2;}
    .ohtal{width: 90%;margin:0 auto;height:100%;}
    .color8{
        color:#fe4444;
    }
    .color9{
        color: #999;
    }
  
</style>


