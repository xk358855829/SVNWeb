<template>
	<div class="hello">
		<div class="yes">
			<div>
				<img src="../../static/image/yes.png" alt="">
			</div>
			<p>下单成功</p>
		</div>
		<div class="square">
			<div @click="abc">立即存钥匙</div>
			<div @click="shaohou">稍后再存{{val}}s</div>
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
import { mapState } from 'vuex';
import {soayisc} from './api/api.js'
import {MessageBox,Indicator} from 'mint-ui'
	export default {
		name: 'success',
		inject:['reload'],
		data() {
			return {
				ips:'',
				val:'',
				t:''
			}
		},
		computed:{
			...mapState(['userInfo'])	
		},
		methods: {
			rightrow(){
				this.$router.push('/detail')
			},
			shaohou(){
				this.$router.push('/home')
			},
			abc(num){
			
            let that=this;
            console.log(window.location.href.split('#')[0])
            // Wxin({url:window.location.href.split('#')[0]}).then({})
            this.$http.get(
                `http://39.104.99.181:8797/scan/getJSSDKTicket?url=${window.location.href.split('#')[0]}`).then(message=>{
                    wx.config({
                        debug:false,
                        appId:message.data.appid,
                        timestamp:message.data.timestamp,
                        nonceStr:message.data.nonceStr,
                         signature: message.data.signature, // 必填，签名，见附录1
                        jsApiList: [message.data.jsApiList] 
                    })
                    wx.ready(function(){
                        wx.scanQRCode({
                        needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                        scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                        success: function(res) {
                            let result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
							let deviceId = result.substring(result.indexOf('state=')+6,result.indexOf('#'));
							Indicator.open('Loading...');
                                 let pa={
                                    number:localStorage.getItem('number'),
                                    deviceId:deviceId

								}
				// 			let pa={
				// 	number:"751561022955722",
				// 	deviceId:"8cf710609228"

				// }
				soayisc(pa).then(res=>{
					console.log(res);
					if(res.data.resCode=="0"){
						Indicator.close();
						MessageBox({
							title:'提示',
							message:'开柜成功',
							closeOnClickModal:false,  
						}).then(action=>[
							that.$router.push('/home')
						])
					}else{
						Indicator.close();
						MessageBox({
							title:'提示',
							message:'柜子已满',
								closeOnClickModal:false,  
						}).then(action=>[
							that.$router.push('/home')
						])
					}
				})
                            
                        }
                        });
                    })
                })
			}
		},
		created(){
			let that=this;
			that.val=59
			var time=59
			that.t=setInterval(function(){
				if(time<=0){
					time=0
					that.$router.push('/home')
				}else{
					that.val=time--
				}
			},1000)
			console.log(that.val)
		},
		mounted: function() {
			
			document.title=this.$route.meta.title;
		},
		destroyed(){
			clearInterval(this.t)
		}
	}
</script>
<style lang="scss" scoped>
	@import '../style/mixin.scss';
	.hello{background: #F2F2F2;@include wh(100%,100%);}
	.yes{@include wh(100%,6rem);}
	.yes div{@include wh(2.36rem,2.36rem);margin:0 auto;padding-top:1rem;}
	.yes div img{@include wh(100%,100%);}
	.yes p{text-align: center;margin-top:0.42rem;font-family: 'PingFang-SC-Regular';@include sc(18px,rgb(48,48,48))}
	.square{display: flex;width: 80%;margin:0 auto;}
	.square div{text-align: center;@include wh(2.72rem,0.92rem);@include font(16px,0.92rem,'PingFang-SC-Regular');color: #fff;border-radius: 5px;}
	.square div:nth-child(1){background:rgb(246,139,28);}
	.square div:nth-child(2){background:#fff;border:1px solid rgb(246,139,28);color:rgb(246,139,28);margin-left: 0.4rem;}
	// .gong{@include sc(18px,#303030);font-family: 'PingFang-SC-Regular';}
	// .box .top{@include wh(6.86rem,2.12rem);border-radius: 5px;margin:0 auto;margin-top:0.37rem;background: #FFFFFF;margin-bottom: 0.52rem;}
	// .box .top p{text-align: center;@extend .gong;}
	// .box .top p:nth-child(1){padding-top:0.48rem;padding-bottom: 0.21rem;}
	// .bottom{@include wh(6.86rem,6.42rem);border-radius: 5px;margin:0 auto;background: #FFFFFF;}
	// .bottom div:nth-child(1){@include wh(6.86rem,3.89rem);margin-bottom: 0.53rem;}
	// .innert{@include wh(2.7rem!important,100%);margin:0 auto;}
	// .innert .ptuo{@include wh(2.7rem,1.35rem);background: #D3D3D3;border-radius:1.35rem;border-radius: 50%/50%;margin-top:-0.98rem;}
	// .innert p:nth-child(1){@include wh(1.74rem,2.64rem);margin:0 auto;padding-top:1.02rem;}
	// .innert p:nth-child(1) img{@include wh(100%,100%);}
	// .bottom div:nth-child(2) p{@extend .gong;text-align: center;margin-top:0.1rem;}
</style>
