<template>
    <div>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
import axios from 'axios'
import Qs from 'qs'
export default {
    mounted(){
    document.title = this.$route.meta.title;
      this.saoyisao()
    },
    methods:{
      saoyisao() {
      let that=this;
      this.$axios
        .get(
          
        'http://39.104.113.112:2088/User/getSignture?url=' + window.location.href.split('#')[0]
        )
        
        .then(function(message){
        console.log(message);
				 wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端弹出出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: message.data.appid, // 必填，公众号的唯一标识
                timestamp: message.data.timestamp, // 必填，生成签名的时间戳
                nonceStr: message.data.nonceStr, // 必填，生成签名的随机串
                signature: message.data.signature, // 必填，签名，见附录1
                jsApiList: [message.data.jsApiList] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
             wx.ready(function(){
             wx.scanQRCode({
              needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
              scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
              success: function(res) {
                 let result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                
    
               let ac = result.substring(result.indexOf('state=')+6,result.indexOf('#'));

          
                  localStorage.setItem('ac',ac)
                  that.$router.push('/setPhone')
                  
              }
            })
             })
			})
        }
    }
}
</script>
<style>

</style>

