<template>
	<div id="detailed">
		<div class="boxT">
			<div><img src="../../static/image/pCart.png"/></div>
			<div>
				<p>{{detailed.orderid}}</p>
				<p>地址：{{detailed.address}}</p>
				<p>价格：<span>{{detailed.price}}元/小时</span></p>
			</div>
		</div>
		<div class="boxB">
			<p><span class="left">停车位置</span><span>{{detailed.lockalias}}</span></p>
			<p><span class="left">车&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;牌</span><span>{{detailed.carnumber}}</span></p>
			<p><span class="left">开始时间</span><span>{{detailed.timeS}}</span></p>
			<p><span class="left">结束时间</span><span>{{detailed.timeE}}</span></p>
			<p><span class="left">停车时长</span><span>{{detailed.longTime}}小时</span></p>
			<p v-if="detailed.state!=1"><span class="left">付款金额</span><span>{{detailed.amount}}元</span></p>
		</div>
		<p v-if="detailed.state==1" class="ts">注：下单15分钟内可免费取消订单</p>
		<div class="control" v-if="detailed.state==1">
			<router-link :to="{path:'/control',query:{id:detailed.carlockid}}" ><div>控制车位锁</div></router-link>
			<div @click="callMap()">地图导航</div>
		</div>
		<div class="delete" v-if="detailed.state==0||detailed.state==2" @click="deleteOrder()">删除订单记录</div>
		<div class="controlBox">
			<div @click="cancelClick()" v-if="cancel==1&&detailed.state==1" class="controlY">取消</div>
			<div v-if="cancel==0&&detailed.state==1" class="uncontrol">取消</div>
			<div v-if="detailed.state==1" @click="settlementClick()" class="settlement">结算</div>
		</div>
		<!--<router-link :to="{path:'/control',query:{id:detailed.id}}" ><div v-if="detailed.state==1" class="control">删除记录</div></router-link>-->
		
		
		<div v-if="popup==0||popup==1||popup==2||popup==3||popup==4" id="popup">
			<div v-if="popup==0" class="popupBox">
				<p>取消成功</p>
				<p><img src="../../static/image/dg.png"/></p>
				<p @click="nextOk()">确定</p>
			</div>
			<div v-if="popup==1" class="popupBox">
				<p>网络超时,取消失败</p>
				<p><img src="../../static/image/dx.png"/></p>
				<p @click="next()">确定</p>
			</div>
			<div v-if="popup==2" class="popupBox">
				<p>已超过可取消时间</p>
				<p><img src="../../static/image/dx.png"/></p>
				<p @click="next()">确定</p>
			</div>
			<div v-if="popup==3" class="popupBox">
				<p>请先离开车位并升起车位锁</p>
				<p><img src="../../static/image/dx.png"/></p>
				<div class="prompt">若车位锁无法升起请点击报修</div>
				<div class="err"><span  @click="nextErrB()">报修</span><span  @click="nextErrA()">确定</span></div>
			</div>
			<div v-if="popup==4" class="popupLod">
				<img src="../../static/image/loding.gif"/>
			</div>
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	export default {
		name: 'detailed',
		data() {
			return {
				detailed:{
					'address':'',
					'price':'',
					'orderid':'',
					'carnumber':'',
					'timeS': '',
					'timeE': '',
					'longTime':'',
					'carlockid':'',
					'money':0,
					'latitude':'',
					'longitude':''
				},
				cancel:0,
				popup:5
			}
		},
		methods: {
			deleteOrder(){
				let that = this;
				that.popup = 4;
				this.$http({
					method: 'post',
					url: this.httpUrl+'order/updateDelRecord',
					data: Qs.stringify({
						orderid:this.detailed.orderid,
						delrecord:'0'
					})
				}).then(function(message){
					if(message.data.resCode==0){
						 that.$router.go(-1);
					}
				})
			},
			callMap(){
				wx.openLocation({
					latitude: this.detailed.latitude, // 纬度，浮点数，范围为90 ~ -90
					longitude: this.detailed.longitude, // 经度，浮点数，范围为180 ~ -180。
					name: this.detailed.address, // 位置名
					address: '停车场', // 地址详情说明
					scale: 15, // 地图缩放级别,整形值,范围从1~28。默认为最大
					infoUrl: 'http://cloud.sokeed.com/' // 在查看位置界面底部显示的超链接,可点击跳转
				});
			},
			fmtDate(obj){
			    var date = new Date(obj);  
			    var y = date.getFullYear();    
			    var m = date.getMonth() + 1;    
			    m = m < 10 ? ('0' + m) : m;    
			    var d = date.getDate();    
			    d = d < 10 ? ('0' + d) : d;    
			    var h = date.getHours();  
			    h = h < 10 ? ('0' + h) : h;  
			    var minute = date.getMinutes();  
			    var second = date.getSeconds();  
			    minute = minute < 10 ? ('0' + minute) : minute;    
			    second = second < 10 ? ('0' + second) : second;   
			    return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
			},
			cancelClick(){
				console.log(this.detailed.orderid)
				let that = this;
				this.$http({
					method: 'post',
					url: this.httpUrl+'order/cancelorderid',
					data: Qs.stringify({
						orderid:this.detailed.orderid
					})
				}).then(function(message){
					console.log(message.data);
					that.popup = message.data.resCode;
				})
			},
			settlementZ(){
				let that = this;
				this.$http({
					method: 'post',
					url: this.httpUrl+'order/settlement',
					data: Qs.stringify({
						orderid:this.detailed.orderid
					})
				}).then(function(message){
					console.log(message.data);
					if(message.data.resCode==0){
						that.$router.push({path:'/money',query:{orderid:that.detailed.orderid}});
					}
				})
			},
			settlementClick(){
				let that = this;
				this.$http({
					method: 'post',
					url: this.httpUrl+'state/date',
					data: Qs.stringify({
						id:that.detailed.carlockid
					})
				}).then(function(message){
					console.log(message.data);
					if(message.data.date==0){
						that.settlementZ()
					}else if(message.data.date==1){
						that.popup = 3;
					}
				})
			},
			nextOk(){
				this.$router.push({path:'/'})
			},
			next(){
				this.popup=3;
				let that = this;
				this.$http({
					method: 'post',
					url: this.httpUrl+'order/findorderid',
					data: Qs.stringify({
						orderid:that.detailed.orderid
					})
				}).then(function(message){
					console.log(message.data);
					if(message.data.resCode==0){
						that.detailed = message.data.result;
						that.detailed.timeS = that.fmtDate(message.data.result.startdate.time);
						that.detailed.timeE = that.fmtDate(message.data.result.enddate.time);
						that.detailed.longTime = ((((message.data.result.enddate.time-message.data.result.startdate.time)/1000)/60)/60).toFixed(0);
						if((new Date().getTime()-message.data.result.date.time-900000)>0){
							that.cancel=0;
						}else{
							that.cancel=1;
						}
					}
				})
			},
			nextErrA(){
				this.$router.push({path:'/control',query:{id:this.detailed.carlockid}})
			},
			nextErrB(){
				this.settlementZ()
			}
		},
		mounted: function() {
			let that = this;
			document.title=this.$route.meta.title;
			/*console.log(this.$route.query.orderid)*/
			this.$http({
				method: 'post',
				url: this.httpUrl+'order/findorderid',
				data: Qs.stringify({
					orderid:this.$route.query.orderid
				})
			}).then(function(message){
				/*console.log(message.data);*/
				if(message.data.resCode==0){
					that.detailed = message.data.result;
					that.detailed.latitude =  message.data.result1.latitude;
					that.detailed.longitude =  message.data.result1.longitude;
					that.detailed.timeS = that.fmtDate(message.data.result.startdate.time);
					that.detailed.timeE = that.fmtDate(message.data.result.enddate.time);
					that.detailed.longTime =  ((((message.data.result.enddate.time-message.data.result.startdate.time)/1000)/60)/60).toFixed(2);
					if((new Date().getTime()-message.data.result.date.time-900000)>0){
						that.cancel=0;
					}else{
						that.cancel=1;
					}
					console.log(that.detailed)
				}
			})
			
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
					jsApiList: ['openLocation'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
				});
			})
		}
	}
</script>

<style scoped="scoped">
	.boxB,.boxT{background-color: white;}
	.boxT{margin-bottom: 0.2rem;display: flex;}
	.boxT img{width:1.2rem;margin:0.4rem 0.36rem 0.4rem 0.24rem;}
	.boxT div:nth-of-type(2){padding: 0.3rem 0;}
	.boxT p:nth-of-type(1){font-size: 0.36rem;color: #333333;}
	.boxT p:nth-of-type(2){font-size: 0.26rem;color: #787878;padding: 0.2rem 0;}
	.boxT p:nth-of-type(3){font-size: 0.26rem;color: #787878;}
	.boxT p:nth-of-type(3) span{color: #F68B1B;}
	.boxB p{width: 90%;margin:0 5%; display: flex;justify-content: space-between;font-size: 0.28rem;color: #787878;height: 1.22rem;line-height:1.22rem;border-bottom: 1px solid #CCCCCC;}
	.boxB p:nth-last-of-type(1){border: none;}
	.boxB p span{display: block;width: 50%;text-align: right;}
	.boxB .left{text-align: left;color: #333333;}
	/*.boxB{margin-bottom: 30px;}*/
	.ts{padding:5%;color: #333333;}
	
	.controlBox{display: flex;margin: 0 auto ;border-radius: 0.16rem;position: fixed;width: 100%;bottom: 0;}
	.control{display: flex; color:#FFFFFF;border-radius: 0.16rem; width: 85%;height: 0.9rem;text-align: center;line-height: 0.9rem;font-size: 0.32rem;background-color: #F68B1B;margin: 0.2rem auto;}
	.control>div{width: 50%;color:#FFFFFF;}
	.control>div:active{color:#F68B1B;background-color: #FFFFFF;}
	.control>a{width: 50%;color:#ffffff;background-color: #F68B1B;border-top-left-radius: 0.16rem;border-bottom-left-radius: 0.16rem;border-right:1px solid #FFFFFF ;}
	.control>a:active{color:#F68B1B;background-color: #FFFFFF;}
	.controlY{color: #787878; width: 85%;height: 0.9rem;border: 1px solid #FFFFFF;text-align: center;line-height: 0.9rem;font-size: 0.32rem;background-color: #FFFFFF;}
	.uncontrol{color: #FFFFFF; width: 85%;height: 0.9rem;border: 1px solid #787878;text-align: center;line-height: 0.9rem;font-size: 0.32rem;background-color: #787878;}
	.settlement{color: #FFFFFF; width: 85%;height: 0.9rem;border: 1px solid #F68B1B;text-align: center;line-height: 0.9rem;font-size: 0.32rem;background-color: #F68B1B;}
	.settlement:active{border-color:#EEE ;}
	#popup{width: 100%;height: 100%;background-color: rgba(0,0,0,0.3);position: absolute;left: 0;top: 0;}
	.popupBox{width: 60%;background-color: #FFFFFF;text-align: center;margin: 50% 20%;border-radius:5px ;}
	.popupBox p{height: 30px;line-height: 0.6rem;font-size: 0.28rem;color: #F68B1B;}
	.popupBox p:nth-of-type(1){padding-top: 0.1rem;}
	.popupBox p:nth-of-type(2){margin: 0.18rem 0;}
	.popupBox p:nth-of-type(3){border-top:1px solid #D8D8D8;height: 0.8rem;line-height: 0.8rem;}
	.popupBox img{width: 0.6rem;}
	.popupBox p:nth-of-type(3):active{background-color: #F68B1B;color: #FFFFFF;}
	.popupLod{width: 60%;text-align: center;margin: 50% 20%;}
	.popupLod img{width: 50%;}
	
	.err{display: flex;justify-content: space-around;border-top:1px solid #D8D8D8;height: 0.8rem;line-height: 0.8rem;color: #F68B1B;}
	.err span{width: 50%;}
	.err span:active{color: #FFFFFF;background-color: #F68B1B;}
	.delete{ color:#FFFFFF;border-radius: 0.16rem; width: 85%;height: 0.9rem;line-height: 0.9rem;font-size: 0.32rem;background-color: #F68B1B;margin: 0.2rem auto;text-align: center;}
	.delete:active{background-color: #FFFFFF;color: #F68B1B;}
	.prompt{color: #788778;padding-bottom: 0.1rem;}
</style>