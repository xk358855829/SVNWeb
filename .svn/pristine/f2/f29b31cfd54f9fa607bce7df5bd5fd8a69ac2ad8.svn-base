<template>
	<div id="money">
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
			<p><span class="left">支付金额</span><span style="color: #FF0000;">{{detailed.amount}}元</span></p>
		</div>
		
		<div v-if="detailed.state!=0" @click="settlementClick()" class="control">付款</div>
		<div v-if="detailed.state==0" id="popup">
		<!--<div id="popup">-->
			<div class="popupBox">
				<p v-if="detailed.amount == 0">金额&nbsp;{{detailed.amount}}&nbsp;元，无需支付</p>
				<p v-if="detailed.amount != 0">付款成功&nbsp;{{detailed.amount}}&nbsp;元</p>
				<p><img src="../../static/image/dg.png"/></p>
				<!--<p @click="nextOk()">确定</p>-->
				<p class="complete"><span @click="nextOk()">返回首页</span><span @click="nextOnce()">再来一单</span></p>
			</div>
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
					'amount':0
				},
				cancel:0,
				popup:3,
				parameter:{}
			}
		},
		methods: {
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
			paymentOk(){
				let that = this;
				/*that.$router.push({path:'/'});*/
				this.$http({
					method:'post',
					url:this.httpUrl+'order/prepay',
					data:Qs.stringify({
						orderid:this.detailed.orderid
					})
				}).then(function(message){
					that.detailed.state=0;
				})
			},
			onBridgeReady(){
				let that = this;
				console.log(that.parameter)
	            WeixinJSBridge.invoke(
	               'getBrandWCPayRequest', {  
	                   "appId" : that.parameter.appId,     //公众号名称，由商户传入       
	                   "timeStamp": that.parameter.timeStamp,         //时间戳，自1970年以来的秒数       
	                   "nonceStr" : that.parameter.nonceStr, //随机串       
	                   "package" : that.parameter.package,       
	                   "signType" : that.parameter.signType,         //微信签名方式:       
	                   "paySign" : that.parameter.paySign    //微信签名   
	                },  
	                function(res){
	               		console.log(res)
	                    if(res.err_msg == "get_brand_wcpay_request:ok" ) {
	                    	that.paymentOk()
	                    }
	                }  
	            );
	        },
	        findPay(){
	        	let that = this;
	        	this.$http({
					method: 'post',
					url: this.httpUrl+'weChat/pay',
					data: Qs.stringify({
						out_trade_no:this.detailed.orderid,
						body:'suriot-car',
						openId:localStorage.getItem('openid'),
						money:this.detailed.amount,
						ip:returnCitySN.cip
					})
				}).then(function(message){
					that.parameter = message.data;
					console.log(that.parameter)
					that.find();
				})
	       	},
	       	find(){
				let that = this;
				this.$http({
					method: 'post',
					url: this.httpUrl+'weChat/find',
					data: Qs.stringify({
						out_trade_no:this.detailed.orderid
					})
				}).then(function(message){
					console.log(message.data.trade_state)
					if(message.data.trade_state == 'NOTPAY'){
						if (typeof WeixinJSBridge == "undefined"){
							if( document.addEventListener ){
							    document.addEventListener('WeixinJSBridgeReady', that.onBridgeReady, false);
							}else if (document.attachEvent){
							    document.attachEvent('WeixinJSBridgeReady', that.onBridgeReady); 
							    document.attachEvent('onWeixinJSBridgeReady', that.onBridgeReady);
							}
						}else{
							that.onBridgeReady();
						}
					}else if(message.data.trade_state == 'SUCCESS'){
						that.paymentOk()
					}
				})
				
			},
			settlementClick(){
				this.findPay();
			},
			nextOk(){
				this.$router.push({path:'/'})
			},
			nextOnce(){
				this.$router.push({path:'/search'})
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
				console.log(message.data)
				if(message.data.resCode==0){
					that.detailed = message.data.result;
					that.detailed.timeS = that.fmtDate(message.data.result.startdate.time);
					that.detailed.timeE = that.fmtDate(message.data.result.enddate.time);
					that.detailed.longTime =  ((((message.data.result.enddate.time-message.data.result.startdate.time)/1000)/60)/60).toFixed(0);
					if((new Date().getTime()-message.data.result.date.time-900000)>0){
						that.cancel=0;
					}else{
						that.cancel=1;
					}
					console.log(that.detailed)
				}
			})
		}
	}
</script>

<style scoped>
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
	.boxB p span:nth-of-type(1){color: #333333;}
	.boxB .left{text-align: left;}
	
	.control{color:#FFFFFF;border-radius: 8px; width: 85%;height: 0.9rem;border: 1px solid #F68B1B;text-align: center;line-height: 0.9rem;font-size: 0.32rem;background-color: #F68B1B;margin: 0.4rem auto;}
	.control:active{border-color:#EEE ;}
	
	#popup{width: 100%;height: 100%;background-color: rgba(0,0,0,0.3);position: absolute;left: 0;top: 0;}
	.popupBox{width: 60%;background-color: #FFFFFF;text-align: center;margin: 50% 20%;border-radius:0.1rem ;}
	.popupBox p{height: 0.6rem;line-height: 0.6rem;font-size: 0.28rem;color: #F68B1B;}
	.popupBox p:nth-of-type(1){padding-top: 5px;}
	.popupBox p:nth-of-type(2){margin: 9px 0;}
	.popupBox p:nth-of-type(3){border-top:1px solid #D8D8D8;height: 0.8rem;line-height: 0.8rem;}
	.popupBox img{width: 0.6rem;}
	/*.popupBox p:nth-of-type(3):active{background-color: #F68B1B;color: #FFFFFF;}*/
	.complete{display: flex;}
	.complete span{width: 50%;}
	.complete span:nth-of-type(1){border-bottom-left-radius: 0.1rem;}
	.complete span:nth-of-type(2){border-bottom-right-radius: 0.1rem;}
	.complete span:active{background-color: #F68B1B;color: #FFFFFF;}
</style>