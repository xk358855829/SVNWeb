<template>
    <div style="background:#efefef;">
        <div class="login" v-if="lp">
            
            <div class="logo"><img src="../../../static/image/aa.png" alt=""></div>
            <div class="loginInput topp">
                <label>
                    <!-- <span>86</span>&nbsp; -->
                    <img src="../../../static/image/zh.png"/>
                </label>
                <div></div>
                <input type="text" v-model="name" @blur="bottocenter" placeholder="请输入您的手机号码"/>
            </div>
            <div class="loginInput bott">
                <label>
                    <img src="../../../static/image/mm.png"/>
                </label>
                <div class="mid"></div>
                <input v-model="pass" style="width:58%;" @blur="bottocenter" placeholder="请输入验证码"/>
                <div class="ma" @click="sendab" v-if="this.t==''">{{val}}</div>
                <div class="ma" v-else style="background:#999;">{{textsend}}</div>
            </div>
            <div @click="log" class="log">登录</div>
            <!-- <div class="aye">8888888888888888</div> -->
        </div>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
import axios from 'axios'
import {send,textchange,beforyan,fasong,stateus} from '../api/api.js'
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
        bottocenter(){
            window.scrollTo(0,0)
        },
        async sendab(){      
            if(this.name==''){
                MessageBox('提示', '请输入手机号码');
            }else{
                if(!(/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.name))){
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
                    let data={
                         phoneNumber:that.name
                    }
                    let res=await fasong(data)
                    if(res.data.resCode=="0"){
                        console.log(res)
                        that.yanz=res.data.result
                    }    
                    // that.$http({
                    //     method:'post',
                    //     url:'http://39.104.113.112:2088/SMS/checkTel',
                    //     data:Qs.stringify({
                    //         phoneNumber:that.name
                    //     })
                    // }).then(res=>{
                    //     console.log(res)
                    //     if(res.data.resCode=="0"){
                    //         console.log(res)
                    //         that.yanz=res.data.result
                    //     }         
                    // })
                }
            }
             
        },
        async log(){
            if(this.name==''||this.pass==''){
                MessageBox('提示', '手机号码和验证码不能为空');
            }else{
                this.b=1
            }
            if(!(/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.name))){
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
                //  let that=this;
                // that.$http({
                //     method:'post',
                //     url:'http://39.104.113.112:2088/SMS/checkTelStatus',
                //     data:Qs.stringify({
                //         openId:localStorage.getItem('openid'),
                //         // openId:'oOKex1F95KBTAurYO4Z5gvNelR6c',
                //         phoneNumber:that.name
                //     })
                // }).then(res=>{
                //     console.log(res)
                //     if(res.data.resCode==0){
                //         that.lp=false
                //         localStorage.setItem('phone',that.name)
                //         that.$router.push({path: '/homePage'});
                //     }else{
                //         MessageBox('提示', '登录失败，请重试');
                //     }
                // }).catch(error=>{
                //     MessageBox('提示', '登录失败，请重试');
                // })
                let data={
                    openId:localStorage.getItem('openid'),
                    phoneNumber:this.name,
                    parkingId:'PI1540957659034816320'
                }
                let res=await stateus(data)
                if(res.data.resCode==0){
                    // this.lp=false
                     this.$router.push({path:'/homePage'})
                    localStorage.setItem('phone',this.name)
                    localStorage.setItem('tel',this.name)
                }else{
                    MessageBox('提示', '登录失败，请重试');
                }
                
                // textchange({phone:this.name,
                //     openid:localStorage.getItem('openid'),
                //     // openid:'o8Aq-5l7z77xAOW1E_8x18iEdAvU',
                //     name:localStorage.getItem('nickname')
                //     // openid:'oOKex1Ow5nB_qymzrzj4L7Gm7snU'
                //     }).then(res=>{
                //         if(res.data.resCode=="0"){
                //             // this.show=false
                //             // this.meg='登录成功'
                //              MessageBox('提示','登录成功').then(action=>{
                //                  this.$router.push({path:'/homePage'})
                //                     localStorage.setItem('phone',this.name)
                //                     localStorage.setItem('tel',this.name)
                //              })
                            
                //         }
                //     })
            }
        }
    }
}
</script>
<style scoped>
    .login{width: 100%;}
    .logo{width:2rem;height: 0.8rem;margin:0 auto;padding: 1.68rem;}
    .logo img{width: 100%;}
    .loginInput input{outline: none;border: none;text-indent: 5px;font-size: 13px;font-family: 'PingFang-SC-Regular';color: #a4a4a4;background-color: transparent;width: 80%;}
    .loginInput label{height: 44px;width: 53px;text-align: center;color: #787878;font-size: 13px;font-family: 'PingFang-SC-Regular';}
    .loginInput{width: 81.6%;height: 44px;line-height: 44px;border-radius: 5px;border: 1px solid #bfbfbf;margin:0 auto;display: flex;}
    .topp{margin-bottom: 15px;}
    .topp div,.bott .mid{height: 33px;width: 1px;background: #bdbdbd;margin-top: 5.5px;}
    .topp label img{width:20px;height: 20px;vertical-align: middle;}
    .bott label img{width: 18px;height: 20px;vertical-align: middle;}
    .bott{position: relative;}
    .bott .ma{background: #f68b1c;color: #fff;width:77px;height: 46px;line-height: 46px;font-size: 13px;font-family: 'PingFang-SC-Regular';text-align: center;position: absolute;right: -1px;top: -1px;}
    .log{cursor :pointer;margin:0 auto;width: 81.6%;height: 44px;background: #f68b1c;border-radius:5px;color: #fff;margin-top: 20px;line-height: 44px;text-align: center;}
    .ma{cursor :pointer;border-bottom-right-radius: 5px;border-top-right-radius: 5px;}
    /* .curr{width: 0.4rem;height: 0.4rem;border-radius: 50%;} */
</style>
		