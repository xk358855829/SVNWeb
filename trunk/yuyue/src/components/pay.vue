<template>
    <div style="width:100%;height:100%;background:#fff;">
        <div style="width:96%;margin:0 auto;line-height:0.8rem;text-align:center;padding-top:0.44rem;">
            <p style="font-size:20px">{{e}}</p>
            <p style="font-size:25px;color:#f68b1c;">{{y>=0?y:0}}元</p>
            <p  style="font-size:13px;color:#999;">速利提供计时服务</p>
        </div>
        <div style="background:#e6e6e6;height:0.26rem;width:100%;"></div>
        <ul class="payul">
            <!-- <li>
                <div style="sanli">订单编号</div>
                <div style="margin-right:4%;"></div>
            </li> -->
             <li>
                <div style="sanli">车牌号码</div>
                <div style="margin-right:4%;">{{a}}</div>
            </li>
             <li>
                <div style="sanli">入场时间</div>
                <div style="margin-right:4%;">{{g}}</div>
            </li>
            <li>    
                <div style="sanli">停车时长</div>
                <div style="margin-right:4%;">{{b}}</div>
            </li>
            <li style="background:#e6e6e6;height:0.26rem;width:100%;margin-left:0">

            </li>
             <li class="meiyong">
                <div style="sanli">应付金额</div>
                <div style="margin-right:4%;">￥{{f}}</div>
            </li>
             <li class="meiyong" @click="tica">
                <div style="sanli">优惠券</div>
                <div style="margin-right:4%;">
                    <span v-if="loack==1">暂无优惠券</span>
                    <span v-if="loack==2">免费时长{{disp}}分钟</span>
                    <span v-if="loack==3">红包优惠{{disp}}元</span>
                    <img src="../../static/image/arr.png" style="vertical-align: middle;margin-top:-2px;margin-right:-2px;width:0.14rem;height:0.24rem;"></img>
                </div>
            </li>
             <li class="meiyong">
                <div style="sanli">积分</div>
                <div style="margin-right:4%;">
                    {{numji}}
                </div>
            </li>
            <li class="meiyong" style="height:1rem;line-height:1rem;display:flex;justify-content: space-evenly;">
                <div>
                <p style="width: 25px;height: 25px;float: right"><img src="../../static/image/jjj.png" alt="" style="width: 100%;height: 100%;vertical-align: middle" @click="jian" ></p>
                </div>
                <input type="text" v-model="shenum" class="num" readonly="readonly" style="text-align: center;border: none;outline: none;background: #fff;">
                <div>
                <p style="width: 25px;height: 25px;"><img src="../../static/image/kkk.png" alt="" style="width: 100%;height: 100%;vertical-align: middle;margin-right:4%;" @click="addf"></p>
                </div>
            </li>
            <li class="meiyong">
                <div style="sanli">优惠金额</div>
                <div style="margin-right:4%;">￥{{c}}</div>
            </li>
             <li>
                <div style="sanli">已付金额</div>
                <div style="margin-right:4%;">￥{{d}}</div>
            </li>    
        </ul>
        <!-- <div class="footsa">
            <div>优惠券</div>
            <div>立即使用</div>
        </div> -->
        <div style="width: 92%;margin:0 auto;font-size: 14px;
            color: #b9b9b9;margin-top:0.2rem;margin-bottom:0.07rem;">
            <img src="../../static/image/tis.png" alt="" style="vertical-align: middle">
            <span style="color:#999;font-size:11px;">请于付款后<span>{{h}}</span>分钟离场，超时将加收停车费</span>
        </div>
        <div class="paytoot" @click="rightnow">立即付款</div>
        <!-- <router-view></router-view> -->
    </div>
   
</template>
<script>
import axios from 'axios';
import Qs from 'qs'
import { MessageBox } from 'mint-ui';
export default {
    data(){
        return{
            shenum:0,
            a:'',
            b:'',
            c:'',
            d:'',
            e:'',
            f:'',
            g:'',
            h:'',
            y:'',
            appId:'',
            loack:'',
            timeStamp:'',
            nonceStr:'',
            package:'',
            signType:'',
            paySign:'',
            ticketNumber:'',
            disp:'',
            isTicket:'',
            numji:'',
            moneys:''
        }
    },
    mounted(){
        this.a=localStorage.getItem('carnumbar')
        this.b=localStorage.getItem('longdate')
        this.c=localStorage.getItem('onsale_price')
        this.d=localStorage.getItem('paid_price')
        this.e=localStorage.getItem('paking_lot_name')
        this.f=localStorage.getItem('price')
        this.g=localStorage.getItem('startdate')
        this.h=localStorage.getItem('time_out')
        this.y=(Number(this.f)+Number(this.c))
        console.log(sessionStorage.getItem('ticknumbar1'))
        console.log(sessionStorage.getItem('ticknumbar2'))
        console.log(sessionStorage.getItem('ticknumbar3'))
        if(sessionStorage.getItem('ticknumbar1')){
            this.loack=2
            this.disp=sessionStorage.getItem('ticknumbar1')
        }else{
            this.loack=3
             this.disp=sessionStorage.getItem('ticknumbar2')
             if(sessionStorage.getItem('ticknumbar2')){

             }else{
                 this.loack=1
             }
             this.y=(Number(this.y)-Number(this.disp)).toFixed(2)
        }
         let that=this;
        that.$http({
            method:'post',
            url:'http://39.104.113.112:2088/MarkRecords/findMark',
            // url:'http://114.55.168.103:2088/MarkRecords/findMark',
            data:Qs.stringify({
                tel:localStorage.getItem('phone')
            })
        }).then(res=>{
            if(res.data.resCode==0){
                that.numji=res.data.result
            }else{
                that.numji=0
            }
        }).catch(err=>{
             that.numji=0
        })
    },
    methods:{
        addf(){
        
            
            if(this.numji==''){
                console.log(98)
            }else{

                if(this.shenum>this.numji-100){
                    MessageBox('提示','积分不足')
                    return false
                    
                }else{
                    this.shenum=this.shenum+=100
                    if(this.y<1){
                        this.shenum=this.shenum-100
                        MessageBox('提示','已抵扣实付金额')
                        return false
                    }else{
                        this.y=this.y-1
                    
                    }
                } 
                
                 
            }
           
        },
        jian(){
            console.log(this.shenum)
            if(this.shenum<=0){

            }else{
                this.shenum=this.shenum-=100
                
                    this.y=this.y+1
                
            }
        },
        duihuan(){
            this.$router.push('/shengcheng')
        },
        tica(){
            this.$router.push('/fuzhi')
        },
        rightnow(){
            // /Park/pay
            var data={};
            var openid=localStorage.getItem("openid");
        //    var openid= 'oOKex1Ow5nB_qymzrzj4L7Gm7snU'
            if(sessionStorage.getItem('ticknumbar3')&&this.shenum>0){
                data={
                    useType:3,
                    openId:openid,
                    car_number:this.a,
                    ip:returnCitySN.cip,
                    mark:this.shenum,
                    ticketNumber:sessionStorage.getItem('ticknumbar3')
                }
            }
            if(!sessionStorage.getItem('ticknumbar3')&&this.shenum==0){
                data={
                    useType:0,
                    openId: openid,
                    car_number:this.a,
                    ip:returnCitySN.cip
                }
            }else{
                if(!sessionStorage.getItem('ticknumbar3')){
                    if(this.shenum>0){
                         data={
                            useType:2,
                            openId: openid,
                            car_number:this.a,
                            ip:returnCitySN.cip,
                            mark:this.shenum
                        }
                    }
                }else{
                    if(this.shenum==0){
                        data={
                            useType:1,
                            openId: openid,
                            car_number:this.a,
                            ip:returnCitySN.cip,
                            ticketNumber:sessionStorage.getItem('ticknumbar3')
                        }
                    }
                }
            }
            console.log(data);
            let that=this;
            that.$http({
                method:'post',
                url:'http://39.104.113.112:2088/Park/pay',
                // url:'http://114.55.168.103:2088/Park/pay',
                data:Qs.stringify(data)
            }).then(message=>{
                console.log(message)
                if(message.data.resCode==0){
                        that.moneys=message.data.money
                        that.appId=message.data.appId;
                        that.timeStamp=message.data.timeStamp;
                        that.nonceStr=message.data.nonceStr;
                        that.package=message.data.package;
                        that.signType=message.data.signType;
                        that.paySign=message.data.paySign;

                if (typeof WeixinJSBridge == "undefined"){
                        if( document.addEventListener ){
                            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
                        }else if (document.attachEvent){
                            document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
                            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
                        }
                     }else{
                        that.onBridgeReady();
                       
                     }
                   
                }else if(message.data.resCode==1){
                    that.$http({
                        method:'post',
                        url:'http://39.104.113.112:2088/Park/recvStatus',
                        // url:'http://114.55.168.103:2088/Park/recvStatus',
                        data:Qs.stringify({
                            pay_status: 'get_brand_wcpay_request:ok',
                            pay_time:that.getFormatDate(),
                            car_number:localStorage.getItem("carnumbar"),
                            ticketNumber:sessionStorage.getItem('ticknumbar3')?sessionStorage.getItem('ticknumbar3'):null,
                            mark:that.shenum,
                            openId:localStorage.getItem("openid"),
                            // openId:'oOKex1Ow5nB_qymzrzj4L7Gm7snU',
                            money:0,
                            longTime:that.b
                            })
                        }).then(res=>{
                        MessageBox({
                            title:'提示',
                            message:'本次停车免费',
                            closeOnClickModal:false
                        }).then(action=>{
                                axios({
                                    method:'post',
                                    url:that.httpUrl+'app/reserve/selectResId',
                                    data:Qs.stringify({
                                        resId:that.$route.query.orderg
                                    })
                                }).then(res=>{
                                    console.log(res)
                                })
                            that.$router.push({path:'/return'})
                        })
                        
                    })
                }else if(message.data.resCode==2){
                    MessageBox('提示', message.data.result).then(action=>{
                        sessionStorage.clear('ticknumbar1')
                        sessionStorage.clear('ticknumbar2')
                        sessionStorage.clear('ticknumbar3')
                    })
                }
                        

            })
        },
          getFormatDate(){
    var nowDate = new Date();
    //alert(11);
    var year = nowDate.getFullYear();
    var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
    var date = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
    var hour = nowDate.getHours()< 10 ? "0" + nowDate.getHours() : nowDate.getHours();
    var minute = nowDate.getMinutes()< 10 ? "0" + nowDate.getMinutes() : nowDate.getMinutes();
    var second = nowDate.getSeconds()< 10 ? "0" + nowDate.getSeconds() : nowDate.getSeconds();
    //alert(year + "-" + month + "-" + date+" "+hour+":"+minute+":"+second);
    return year + "-" + month + "-" + date+" "+hour+":"+minute+":"+second;
},
        onBridgeReady(){
            let that=this;
            // alert(that.appId)
            // alert(that.timeStamp)
            // alert(that.nonceStr)
            // alert(that.package)
            // alert(that.paySign)
            // alert(that.signType)
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest', {
                "appId":that.appId,     //公众号名称，由商户传入     
                "timeStamp":that.timeStamp,         //时间戳，自1970年以来的秒数     
                "nonceStr":that.nonceStr, //随机串     
                "package":that.package,     
                "signType":that.signType,         //微信签名方式：     
                "paySign":that.paySign //微信签名 
                },
                function(res){
                //  alert(res.err_msg)
                if(res.err_msg == "get_brand_wcpay_request:ok"){
                 
                    //    alert(res.err_msg)
                    //     alert(that.getFormatDate())
                    //    alert(localStorage.getItem("carnumber"))
                    //     alert(sessionStorage.getItem('ticknumbar3')?sessionStorage.getItem('ticknumbar3'):null)
                    //     alert(that.shenum)
                    //     alert(localStorage.getItem("openid"))
                    //     alert(that.y)
                    
               
                that.$http({
                    method:'post',
                    url:'http://39.104.113.112:2088/Park/recvStatus',
                    // url:'http://114.55.168.103:2088/Park/recvStatus',
                    data:Qs.stringify({
                        pay_status: res.err_msg,
                        pay_time:that.getFormatDate(),
                        car_number:localStorage.getItem("carnumbar"),
                        ticketNumber:sessionStorage.getItem('ticknumbar3')?sessionStorage.getItem('ticknumbar3'):null,
                        mark:that.shenum,
                        openId:localStorage.getItem("openid"),
                        money:that.moneys,
                        longTime:that.b
                    })
                }).then(res=>{
                    axios({
                        method:'post',
                        url:that.httpUrl+'app/reserve/selectResId',
                        data:Qs.stringify({
                            resId:that.$route.query.orderg
                        })
                    }).then(res=>{
                        console.log(res)
                    })
                    that.$router.push({path:'/return'})
                })
                }
            }); 
            }
    }
}
</script>
<style scoped>
    .payul li,.footsa{display: flex;justify-content: space-between;width:92%;margin:0 auto;margin-left: 4%;
    line-height: 0.94rem;
    color: #b9b9b9;
    font-size: 14px;}
    .paytoot{
    width: 94%;
    margin: 0.2rem auto;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    font-size: 14px;
    border-radius: 5px;
    background: #f68b1b;
    color: #fff;
    cursor: pointer;
    margin-top:0.4rem;
    
}
.payul li div{color:#999;}
.payul .meiyong{border-bottom:1px solid #f5f5f5;}
.sanli{color:#303030!important;}
</style>


