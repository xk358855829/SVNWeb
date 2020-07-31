<template>
	<div>
		<div style="position: relative;width:100%;height:4rem;">
			<img src="../../static/image/timag.jpg" alt="">
			<!-- <p style="position:absolute;top:40%;left:48%;color:#666;"></p> -->
		</div>
		<div>
			<div style="width:60%;margin:0 auto;margin-bottom:1rem;margin-top:0.5rem;">
				<span>进场设备：</span>
				<select name="" id="" v-model="selValue">
					<option :value="item.deviceld" v-for="item in table">{{item.alias}}</option>
				</select>
				<button @click="photo">拍照</button>
			</div>
		</div>
		<div>
			<div style="width:60%;margin:0 auto;margin-bottom:0.4rem;">
				<span>临时车牌：</span>
				<span>{{this.carnumber}}</span>
			
			</div>
		</div>
			
		<div>
			<p v-if="less==1" style="width:40%;height:0.8rem;line-height:0.8rem;margin:0 auto;color:#fff;font-size:18px;text-align:center;border-radius:5px;background:#999;">远程开阀</p>
			<p v-if="less==2" @click="switching" style="width:40%;height:0.8rem;line-height:0.8rem;margin:0 auto;color:#fff;font-size:18px;text-align:center;border-radius:5px;background:#F68B1B;">远程开阀</p>
		</div>
		<div v-if="carnum" class="moban">
			<div  class="lin">
			<p>获取临时车牌</p>
			<p style="display:flex;justify-content: space-around">
				<span @click="gain">是</span>
				<span @click="no">否</span>
			</p>
		</div>
		</div>
		
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	export default {
		name: 'visitors',
		inject:['reload'],
		data() {
			return {
				carnum:false,
				table:[],
				selValue:'',
				carnumber:'',
				less:1
			}
		},
		methods: {
			no(){
				this.carnum=false;
			},
			photo(){
				
				if(this.selValue==''||this.selValue=='ffff29410021ec2f'){
					alert('请选择进场设备')
				}else{
					let that = this;
					axios({
						method: 'post',
						url: 'http://39.104.113.112:2088/wirite/single/openid',
						data: Qs.stringify({
							str:0,
							deviceid:that.selValue
						})
					}).then(function(message){
						that.carnum=true;
					})
				}
				
			},
			switching(){
				let that = this;
				axios({
					method: 'post',
					url: 'http://39.104.113.112:2088/wirite/single/openid',
					data: Qs.stringify({
						str:1,
						deviceid:that.selValue
					})
				}).then(function(message){
					
				})
			},
			bexist(){
				this.$router.push({path:'/list'})
			},
			gain(){
				this.carnum=false;
				let that=this;
				axios({
					method: 'post',
					url: 'http://39.104.113.112:2088/NullCarNumber/getCarNumber',

				}).then(function(message){
					console.log(message)
					that.carnumber=message.data
					that.less=2
				})
			},
			quick(){
				let that=this;
				axios({
					method: 'get',
					url:'http://39.104.113.112:8091/scan/getJSSDKTicket?url=' + window.location.href.split('#')[0]
				}).then(function(message){
					console.log(message);
						wx.config({
						debug: false, // 开启调试模式,调用的所有api的返回值会在客户端弹出出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
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
						console.log(res)
						let result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
						let p1 = result.indexOf("state");
						let p2 = result.indexOf("redirect_uri");
						localStorage.setItem('venid',result.substring(p1+6,p1+14))
							that.$router.push({path:'/detail'})
						}
					});
				})	
			}	
		},
		mounted: function() {
			document.title=this.$route.meta.title;
			let that=this;
			axios({
				method: 'post',
				url: 'http://39.104.113.112:2088/Device/brakeList',
				data: Qs.stringify({
					page: 1,
					pageSize: 100000,
					userId: 'SURIOT',
					dealer: 123,
				})
			}).then(function(message){
				that.table=message.data.result
			})
			
		}
	}
</script>
<style lang="scss" scoped>
	@import '../style/mixin.scss';
	.moban{position: fixed;top:0;left:0;background: rgba(58, 51, 51,0.5);width: 100%;height: 100%;}
	.lin{height: 1.4rem;background: #fff;width: 86%;margin:0 auto;margin-top:60%;border-radius: 5px;text-align: center;}
	.lin{line-height: 0.7rem;}
	// .box{@include wh(100%,100%);background: #fff;}
	// .box .title{@include wh(100%,6.56rem);padding-top:3.56rem;}
	// .title .longt,.longb{@include wh(3.88rem,1.73rem);background: #00A0E9;border-radius: 10px;margin:0 auto;position: relative;}
	// .cerror{@include sc(30px,#fff);@include font(30px,1.73rem,'PingFang-SC-Regul');}
	// .square{@include wh(2.4rem,2.4rem);border-radius:1.2rem;border:5px solid #00A0E9;position: absolute;bottom: 0;z-index: 5;background: #fff;}
	// .title .longt{margin-bottom: 1.82rem;}
	// .title .longb p{@extend .cerror;text-align: left;margin-left: 0.8rem;}
	// .title .longt p{@extend .cerror;text-align: right;margin-right: 0.77rem;}
	// .title .longt div{@extend .square;left:-1.2rem;}
	// .title .longb div{@extend .square;right:-1.2rem;}
	// i{@include wh(1.15rem,1.08rem);display: inline-block;margin:0.66rem 62rem 0.66rem 0.66rem;}
	div img{@include wh(100%,100%);}
	// .quickmark{margin:0 auto;@include wh(0.96rem,0.96rem);}
</style>
