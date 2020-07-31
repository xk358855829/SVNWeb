<template>
    <footer>
        <div class="first" @click="abc('/home')" :class="{Colorclick:1==Colors}">
            <p>
                <img :src="Wacth==1?require('../../../static/image/home.png'):require('../../../static/image/homes (1).png')" alt="">
            </p>
            <span>首页</span>
        </div>
        <!-- <div class="middle">
            <p @click="saoyisao">
                <img src="../../../static/image/sao.png" alt="">
            </p>
        </div> -->
        <div class="second"  @click="abc('/geren')" :class="{Colorclick:2==Colors}">
            <p>
                <img :src="Wacth==2?require('../../../static/image/mes.png'):require('../../../static/image/me.png')" alt="">
            </p>
            <span>我的</span>
        </div>
    </footer>
</template>
<script>
import {Wxin,soayisc} from '../api/api.js'
import { MessageBox } from 'mint-ui';
export default {
    props:['Wacth','Colors'],
    data(){
        return{
            ss:'99'
        }
    },
    watch: {
        
    },
    mounted(){
       
    },
    methods:{
        abc(val){
            this.$router.push(val)
            // this.$emit('ab',this.ss)
        },
        // saoyisao(){
        //     let that=this;
        //     console.log(window.location.href.split('#')[0])
        //     this.$http.get(
        //         `${that.httpUrl}scan/getJSSDKTicket?url=${window.location.href.split('#')[0]}`).then(message=>{
        //             wx.config({
        //                 debug:false,
        //                 appId:message.data.appid,
        //                 timestamp:message.data.timestamp,
        //                 nonceStr:message.data.nonceStr,
        //                  signature: message.data.signature, // 必填，签名，见附录1
        //                 jsApiList: [message.data.jsApiList] 
        //             })
        //             wx.ready(function(){
        //                 wx.scanQRCode({
        //                 needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        //                 scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        //                 success: function(res) {
        //                      let result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
        //                     let deviceId = result.substring(result.indexOf('state=')+6,result.indexOf('#'));
        //                          let pa={
        //                             // openid:'oOKex1Ow5nB_qymzrzj4L7Gm7snU',
        //                             openid:localStorage.getItem('openid'),
        //                             deviceId:deviceId
        //                         }
        //                         soayisc(pa).then(res=>{
        //                             if(res.data.resCode==0){
        //                                 MessageBox('提示','开柜成功').then(action=>[
        //                                     that.$router.push('/home')
        //                                 ])
        //                             }
        //                         })
        //                         // that.$axios
        //                         // .post(
        //                         // that.httpUrl+"wechatUser/addWechatDev",
        //                         // that.$qs.stringify({
        //                         //     weChatUsePhone:sessionStorage.getItem("weChatUsePhone"),
        //                         //     deviceId:result.substring(p1+6,p1+14)
        //                         // })
        //                         // )
        //                         // .then(res => {
        //                         //     // console.log(res)
        //                         // // that.$router.push({
        //                         // // path: '/equipitem',
        //                         // // query:{id:result.substring(p1+6,p1+18 )}
                                
        //                         // // });
        //                         // })
                               
                            
                            
        //                 }
        //                 });
        //             })
        //         })
        // }
    }
}
</script>
<style lang="scss" scoped>
 @import '@/style/mixin.scss';
 footer{position: fixed;bottom:0;@include wh(100%,0.98rem);background: #eaeaea;display: flex;justify-content: space-around;}
 footer .first p{@include wh(0.36rem,0.36rem);margin:0 auto;margin-bottom:0.02rem;}
 .first,.second{
     @include wh(10%,100%);
     margin-top:0.2rem;
     text-align: center;
    }
 footer .first p img,footer .second p img{@include wh(100%,100%);}
 .Colorclick span{color: rgb(246,139,28)!important;}
//  .first span{font-size: 10px;color: rgb(246,139,28);}
 footer .second p{@include wh(0.34rem,0.34rem);
    margin:0 auto;
    margin-bottom:0.04rem;
 }
//  footer .middle{@include wh(1.22rem,1.22rem);border-radius: 50%;background: rgb(246,139,28);line-height: 0.61rem;margin-top:-0.2rem;}
//  footer .middle p{@include wh(0.38rem,0.33rem);margin:0 auto;margin-top:0.13rem;}
//  footer .middle p img{@include wh(100%,100%);}
 span{@include sc(10px,rgb(180,180,180))}
</style>


