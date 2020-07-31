<template>
    <div style="background:#efefef;height:100%">
        <div class="login" v-if="lp">
            
            <div class="logo"><img src="../../static/image/aa.png" alt=""></div>
            <div class="loginInput topp">
                <label>
                    <!-- <span>86</span>&nbsp; -->
                    <img src="../../static/image/zh.png"/>
                </label>
                <div></div>
                <input type="text" v-model="name" placeholder="请输入您的手机号码"/>
            </div>
            <div class="loginInput bott">
                <label>
                    <img src="../../static/image/mm.png"/>
                </label>
                <div class="mid"></div>
                <input v-model="pass" placeholder="请输入验证码"/>
                <div class="ma" @click="send" v-if="this.t==''">{{val}}</div>
                <div class="ma" v-else>{{textsend}}</div>
            </div>
            <div @click="log" class="log">登录</div>
            <!-- <div class="aye">8888888888888888</div> -->
        </div>
        <div style="position:fixed;top:20%;width:100%;" v-if="!lp">
            <div style="width:3rem;height:2.5rem;margin:0 auto;">
                <img src="../../static/image/xinren.png" alt="" style="width:100%;height:100%;" @click="lingqu">
            </div>
            <div style="width:0.59rem;margin:0 auto;">
                <img src="../../static/image/xinren (2).png" alt="" @click="bulingqu">
            </div>
        </div>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
import axios from 'axios'
import Qs from 'qs'
export default {
    name:'login',
    data(){
        return{
            val:'发送验证码',
            t:'',
            name:'',
            textsend:'',
            pass:'',
            yanz:'',
            lp:true,
            a:'',
            b:'',
            c:'',
            d:''
        }
    },
    mounted(){
        document.title=this.$route.meta.title;
        console.log(this.$store.state.num)
        // let that=this;
        //  that.$http({
        //     method:'get',
        //     url:'http://39.104.113.112:2088/GetInvoice/tic'
        // }).then(res=>{
        //     console.log(res)
                  
        // })
    },
    methods:{
        send(){
                
            if(this.name==''){
                MessageBox('提示', '请输入手机号码');
            }else{
                if(!(/^1[3|4|5|6|7|8][0-9]\d{8}$/.test(this.name))){
                      MessageBox('提示', '请输入正确的手机号码');
                }else{
                    let that=this;
                    that.textsend='剩余'+60+'s'
                    var time=59;
                    that.t=setInterval(function(){
                        if(time<=0){
                            clearInterval(that.t)
                            that.t=''
                            that.val='重新发送'
                        }else{
                            that.textsend='剩余'+time--+'s'
                        }
                    },1000)
                    
                    that.$http({
                        method:'post',
                        url:'http://39.104.113.112:2088/SMS/checkTel',
                        data:Qs.stringify({
                            phoneNumber:that.name
                        })
                    }).then(res=>{
                        console.log(res)
                        if(res.data.resCode=="0"){
                            console.log(res)
                            that.yanz=res.data.result
                        }         
                    })
                }
            }
             
        },
        lingqu(){
             let that=this;
            that.$http({
                method:'post',
                url:'http://39.104.113.112:2088/TicketInfo/bornTicket',
                data: Qs.stringify({
                //    openId:localStorage.getItem('openid'),
                    tel:localStorage.getItem('tel'),
                    // tel:17549206920,
                    // openId:"oOKex1Ow5nB_qymzrzj4L7Gm7snU",
                    parking_id: 'PI1540957659034816320',
                    ticketType: 1,
                    useWay: 2,
                    start_time: end(),
                    end_time: start(),
                    sub: 6,
                    issus_type: 1,
                    isTeam: 1,
                    // num:2,
                    remark: '免费',
                    dealer: 123,
                })
            }).then(message=>{
                console.log(message)
                if(message.data.resCode==0){
                    MessageBox('提示','领取成功').then(action=>{
                        that.$router.push('/card')
                    })
                }else{
                    MessageBox('提示','领取失败').then(action=>{
                        that.$router.push('/card')
                    })
                }
            })
        },
        bulingqu(){
            this.$router.push('/card')
        },
        log(){
            if(this.name==''||this.pass==''){
                MessageBox('提示', '手机号码和验证码不能为空');
            }else{
                this.b=1
            }
            if(!(/^1[3|4|5|6|7|8][0-9]\d{8}$/.test(this.name))){
                 MessageBox('提示', '请输入正确的手机号码');
            }else{
                this.c=1
            }
            console.log(this.yanz)
            console.log(this.pass)
            if(this.yanz!=this.pass){
                 MessageBox('提示', '请输入正确的验证码');
            }else{
                this.d=1
            }
            if(this.b==1&&this.c==1&&this.d==1){
                 let that=this;
                that.$http({
                    method:'post',
                    url:'http://39.104.113.112:2088/SMS/checkTelStatus',
                    data:Qs.stringify({
                        openId:localStorage.getItem('openid'),
                        // openId:'oOKex1Ow5nB_qymzrzj4L7Gm7snU',
                        phoneNumber:that.name,
                        parkingId:'PI1540957659034816320'
                    })
                }).then(res=>{
                    console.log(res)
                    if(res.data.resCode==0){
                        that.lp=false
                        localStorage.setItem('tel',that.name)
                    }else{
                        MessageBox('提示', '登录失败，请重试');
                    }
                }).catch(error=>{
                    MessageBox('提示', '登录失败，请重试');
                })
            }
        }
    }
}
</script>
<style scoped>
    .login{height: 100%;width: 100%;}
    .logo{width:1rem;height: 0.4rem;margin:0 auto;padding: 0.94rem;}
    .logo img{width: 100%;}
    .loginInput input{outline: none;border: none;text-indent: 5px;font-size: 13px;font-family: 'PingFang-SC-Regular';color: #a4a4a4;background-color: transparent;width: 58%;}
    .loginInput label{height: 44px;width: 53px;text-align: center;color: #787878;font-size: 13px;font-family: 'PingFang-SC-Regular';}
    .loginInput{width: 81.6%;height: 44px;line-height: 44px;border-radius: 5px;border: 1px solid #bfbfbf;margin:0 auto;display: flex;}
    .topp{margin-bottom: 15px;}
    .topp div,.bott .mid{height: 33px;width: 1px;background: #bdbdbd;margin-top: 5.5px;}
    .topp label img{width:20px;height: 20px;vertical-align: middle;}
    .bott label img{width: 18px;height: 20px;vertical-align: middle;}
    .bott .ma{background: #f68b1c;border-radius: 5px;color: #fff;width:77px;height: 44px;line-height: 44px;font-size: 13px;font-family: 'PingFang-SC-Regular';text-align: center;}
    .log{cursor :pointer;margin:0 auto;width: 81.6%;height: 44px;background: #f68b1c;border-radius:5px;color: #fff;margin-top: 20px;line-height: 44px;text-align: center;}
    .ma{cursor :pointer;}
    /* .curr{width: 0.4rem;height: 0.4rem;border-radius: 50%;} */
</style>
