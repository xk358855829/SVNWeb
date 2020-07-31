<template>
	<div id="saoyisao">
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	export default {
		name: 'saoyisao',
		mounted: function() {
			document.title = this.$route.meta.title;
			let that = this;
			this.$http({
				method: 'get',
				url: that.httpUrl + 'scan/getJSSDKTicket?url=' + window.location.href.split('#')[0]
			}).then(function(message) {
				console.log(message.data)
				wx.config({
					debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
					appId: message.data.appid, // 必填，公众号的唯一标识
					timestamp: message.data.timestamp, // 必填，生成签名的时间戳
					nonceStr: message.data.nonceStr, // 必填，生成签名的随机串
					signature: message.data.signature, // 必填，签名，见附录1
					jsApiList: [message.data.jsApiList] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
				});
			})
			wx.ready(function(){
				wx.scanQRCode({
					needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
					scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
					success: function(res) {
						let result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
						let p1 = result.indexOf("state");
						let p2 = result.indexOf("redirect_uri");
						if(result.substring(p2+13,p2+36 ) == 'http://cloud.sokeed.com'){
							that.$router.push({
								path: '/codeOrder',
								query:{id:result.substring(p1+6,p1+18 )}
							});
						}
					}
				});
			});
		},
		methods: {}
	}
</script>

<style>
</style>