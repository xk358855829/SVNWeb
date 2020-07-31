<template>
    <div style="background:#efefef;">
        <header style="font-size:18px;width:94%;margin:0 auto;padding-top:0.4rem;margin-bottom:0.2rem;"><p>我的车牌</p></header>
        <section style="height:100%;">
            <ul  style="height:100%;width:100%">
                <li v-for="item in List" class="listli">
                    <div class="firs">
                        <div style="color:#999">车牌号</div>
                        <div @click="delet(item)">
                            <img src="../../static/image/alsi.png" alt="">
                        </div>
                    </div>
                    <div style="width:93%;margin:0 auto;margin-top:0.05rem;margin-bottom:0.1rem;"><p style="font-size:16px">{{item}}</p></div>
                    <div style="width:93%;margin:0 auto;margin-bottom:0.1rem;"><p style="color:#999">车牌类型</p></div>
                    <div class="firs bottomfir">
                        <div style="font-size:16px" v-if="item.length==7">普通车牌</div>
                         <div style="font-size:16px" v-if="item.length==8">新能源车牌</div>
                        <div class="pari" @click="paymoney(item)">停车缴费</div>
                    </div>
                </li>
            </ul>
        </section>
        <div class="paytoot" @click="addnuma" v-if="laddcar">新增车牌号</div>
        <div class="paytoot" v-if="!laddcar">新增车牌号</div>
        <div class="paytoot" @click="rightrecord">停车记录</div>
    </div>
</template>
<script>
import axios from 'axios'
import Qs from 'qs'
import { MessageBox } from 'mint-ui';
import {shanchu,chazli} from './api/api.js'
export default {
    data(){
        return{
            List:[],
            laddcar:true
        }
    },
    watch:{
        
    },
    mounted(){

        if(localStorage.getItem('list')){
            this.List=(JSON.parse(localStorage.getItem('list'))).split(",")
        }else{
            this.$router.push({path:'/card',query:{arr:7}})
        }
        console.log(this.List)
    },
    methods:{
        delet(val){
            MessageBox.confirm('', { 
             message: '确认要删除车牌号么？', 
             title: '提示', 
             confirmButtonText: '确定', 
             cancelButtonText: '取消' 
             }).then(action => { 
             if (action == 'confirm') {     //确认的回调
                  console.log(val)
                let data={
                    openId:this.openid,
                    carNumber:val,
                    parkingId:'PI1540957659034816320' 
                }
                shanchu(data).then(res=>{
                    if(res.data.resCode==0){
                        let lisa=res.data.list.replace(/,/g,' ').replace(/^\s*/g,"").replace(/\s+/g,",")
                        // lisa=lisa.substr(0,lisa.length-1)
                        console.log(lisa)
                        var reg=/,$/gi;//此处是正则
                        lisa=lisa.replace(reg,"");
                        if(lisa==""){
                            lisa=[]
                            localStorage.setItem('list',JSON.stringify(lisa))
                        }else{
                            localStorage.setItem('list',JSON.stringify(lisa))
                        }
                         MessageBox('提示','删除成功');
                        
                        console.log(66666666666)
                         window.location.reload()
                     }else{
                         MessageBox.confirm(res.data.result, '提示');
                     }
                })
             }
             })
        },
        addnuma(){
            console.log(this.List.length)
            if(this.List.length>1){
               this.laddcar=false
               MessageBox('提示','车牌号码最多添加2个');
            }else{
                this.$router.push({path:'/card',query:{arr:7}})
            }
            
        },
        rightrecord(){
            this.$router.push({path:'/record'})
        },
        paymoney(val){
            let data={
                car_number:val
            }
            chazli(data).then(message=>{
                 if(message.data.resCode==1||message.data.resCode==2){
                     console.log(message)
                    localStorage.setItem('carnumber', message.data.carnumber)
                    localStorage.setItem('longdate', message.data.longdate)
                    localStorage.setItem('onsale_price', message.data.onsale_price)
                    localStorage.setItem('paid_price', message.data.paid_price)
                    localStorage.setItem('paking_lot_name', message.data.paking_lot_name)
                    localStorage.setItem('price', message.data.price)
                    localStorage.setItem('startdate', message.data.startdate)
                    localStorage.setItem('time_out', message.data.time_out)
                    localStorage.setItem('img', message.data.img)
                    localStorage.setItem('HPrice', message.data.HPrice)
                    
                    this.$router.push({path:'/pay',query:{vals:message.data}})
                }else if(message.data.resCode==0||message.data.resCode==-1||message.data.resCode==-2){
                     MessageBox('提示', message.data.result);
                }
            })
        }
    }
}
</script>
<style scoped>
    
    .listli{width: 94%;margin:0 auto;border: 1px solid #b4a9a9;height: 1.2rem;border-radius: 5px;margin-top:0.3rem;}
    .listli .firs{display: flex;justify-content: space-between;width: 92%;margin:0 auto;margin-top:0.1rem;}
    .listli .bottomfir{margin-top:0rem;}
    .pari{width: 0.7rem;height: 0.3rem;background: #f68b1c;line-height: 0.3rem;border-radius: 20px;text-align: center;margin-top:-0.05rem;color:#fff;}
    .paytoot{
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
    margin-top:0.2rem;
}
</style>


