<template>
	<div class="box" style="background:#efefef;">
		<ul style="padding-top:0.2rem;background:#efefef;" class="lpcile">
			<li v-for="item in tac" v-if="tac.length!=0">
				<div class="tan">
					<span>订单编号：{{item.number}}</span>
					<span>{{item.starTime}}</span>
				</div>
				<p class="rolo"></p>
				<div class="tan" @click="details(item.number)">
					<span>{{item.cname}}</span>
					<span>{{item.country}}</span>
				</div>
				<div class="tan" @click="details(item.number)">
					<span>￥{{item.money}}</span>
					<span v-if="item.state=='0'" :class="{active:item.state=='0'}">{{item.state | Chose}}</span>
					<span v-if="item.state=='1'" :class="{actives:item.state=='1'}">{{item.state | Chose}}</span>
					<span v-if="item.state=='2'" :class="{actives:item.state=='2'}">{{item.state | Chose}}</span>
					<span v-if="item.state=='3'" :class="{actives:item.state=='3'}">{{item.state | Chose}}</span>
					<span v-if="item.state=='4'" :class="{actives:item.state=='4'}">{{item.state | Chose}}</span>
					<span v-if="item.state=='7'" :class="{actives:item.state=='7'}">{{item.state | Chose}}</span>
					<!-- <span v-if="item.state=='7'" :class="{actives:item.state=='7'}">待支付</span> -->
				</div>
				<p class="rolo"></p>
				<div v-show="show" class="tans">
					<div v-if="item.state=='1'" style="color:#fff;background:rgb(255,168,0)" @click="abc(item.number)">存钥匙</div>
					<div v-if="item.state=='2'" style="color:#fff;background:rgb(255,168,0)" @click="">待洗车</div>
					<div v-if="item.state=='3'" style="color:#fff;background:rgb(255,168,0)" @click="">洗车中</div>
					<div v-if="item.state=='4'" style="color:#fff;background:rgb(255,168,0)" @click="pay(item)">支付</div>
					<div v-if="item.state=='5'" style="color:#fff;background:rgb(255,168,0)">带取件</div>
					<div v-if="item.state=='6'" style="color:#fff;background:rgb(255,168,0)">已完成</div>
					<div v-if="item.state=='7'" style="color:#fff;background:rgb(108,108,108)">订单已取消</div>
					<div v-if="item.state=='1'||item.state=='2'" style="color:rgb(247,92,76);border:1px solid rgb(247,92,76);" @click="monelis(item.number)">取消订单</div>
				</div>
				<div v-show="!show">
					<div>删除订单</div>
				</div>
			</li>
		</ul>
		<div style="width:100%;margin-top:2rem;" v-if="tac.length==0">
			<p style="width:2.24rem;height:1.4rem;margin:0 auto;">
				<img src="../../../static/image/kbym.png" style="width:100%;height:100%;" alt="">
				<p style="color:#787878;text-align:center;padding:10px 0;">暂无记录</p>
			</p>
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	import {detailP,detailS,soayisc,cancel} from '../api/api.js'
	import {Chose} from '../api/filter.js'
	import {mapMutations} from 'vuex'
	import {MessageBox,Indicator} from 'mint-ui'
	export default {
		name: 'detail',
		data() {
			return {
				olsei:'',
				show:true,
				tac:[],
				 appId:'',
				timeStamp:'',
				Obj:{},
				nonceStr:'',
				package:'',
				signType:'',
				paySign:'',
			}
		},
		watch:{
			
		},
		methods: {
			...mapMutations(['USEOBJ']),
			format(shijianchuo)
			{
			var time = new Date(shijianchuo);
			var y = time.getFullYear();
			var m = time.getMonth()+1;
			var d = time.getDate();
			var h = time.getHours();
			var mm = time.getMinutes();
			var s = time.getSeconds();
			return y+'-'+this.add0(m)+'-'+this.add0(d)+' '+this.add0(h)+':'+this.add0(mm)+':'+this.add0(s);
			},
			add0(m){return m<10?'0'+m:m },
			details(val){
				let that=this;
				detailS({number:val}).then(res=>{
					if(res.status==200){
						that.$router.push({path:'/order'})
						that.USEOBJ(res.data.result)
					}
					console.log(res)
				})
			},
			monelis(num){
				let data={
                    number:num
                }
                cancel(data).then(res=>{
					console.log(res);
					if(res.data.resCode==0){
						MessageBox({
							title:'提示',
							message:'取消成功',
							closeOnClickModal:false
						}).then(action=>{
							window.location.reload()
						})
					}
                })
			},
			pay(val){
				console.log(val)
				this.Obj=val
				let data={
					money:val.money,
					weiTrade:val.number,
					openId:val.openid,
					ip:returnCitySN.cip
				}
				console.log(data)
				 let that=this;
            axios({
                method:'post',
                url:`${that.httpUrl}Winxins/querySate`,
                data:Qs.stringify(data)
            }).then(message=>{
                console.log(message)
				// that.moneys=message.data.money
			
                if(message.data.resCode=='OK'){
                
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
                        that.onBridgeReady(val);
                       
                     }
                   
				}
				})
			},	
			 onBridgeReady(){
			let that=this;
			// alert(that.package)
			// alert(that.Obj.starTime)
			// 	alert(that.Obj.country)
			// 	alert(that.Obj.cname)
			// 	alert(that.Obj.number)
			// 	alert(that.Obj.money)
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
                 alert(res.err_msg)
                if(res.err_msg == "get_brand_wcpay_request:ok"){
                    
				
                that.$http({
                    method:'post',
                    url:`${that.httpUrl}users/queryByState`,
                    data:Qs.stringify({
                        paystatus: res.err_msg,
                        paytime:that.Obj.starTime,
                        carnumber:that.Obj.country,
						jixing:that.Obj.cname,
						number:that.Obj.number,
						openId:localStorage.getItem("openid"),
                        money:that.Obj.money
                    })
                }).then(res=>{
                    that.$router.push({path:'/home'})
                })
                }
            }); 
            },
    	
			abc(num){
			console.log(num)
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
							// alert(deviceId)
                                 let pa={
                                    number:num,
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
		mounted: function() {
			document.title=this.$route.meta.title;
			let data={
				// openid:'o8Aq-5l7z77xAOW1E_8x18iEdAvU',
				openid:localStorage.getItem('openid'),
				// phone:localStorage.getItem('phone'),
				// dealer:123,
				Page:1,  
				PageSize:10000
			}
			console.log(data)
			let that=this;
			detailP(data).then(res=>{
				console.log(res)
				if(res.status==200){
					that.tac=res.data.result
				}
			})
		}
	}
	// oOKex1Ow5nB_qymzrzj4L7Gm7snU
	// localStorage.getItem('venid')
	// localStorage.getItem('venid')
</script>
<style lang="scss" scoped>
	@import '@/style/mixin.scss';
	li{width: 92%;margin:0 auto;background: #fff;border-radius: 5px;margin-bottom:0.4rem;}
	.rolo{border-bottom:1px solid rgb(239,239,239)!important}
	li .tan{display: flex;justify-content: space-between;}
	li .tan:nth-child(1){@include wh(94%,0.8rem);line-height: 0.8rem;@include sc(12px,rgb(144,144,144));font-family: 'PingFang-SC-Regular';margin:0 auto;}
	li .tan:nth-of-type(2){@include wh(94%,0.74rem);@include sc(12px,rgb(144,144,144));font-family: 'PingFang-SC-Regular';margin:0 auto;margin-top:0.42rem;}
	li .tan:nth-of-type(2) span{font-size: 16px;font-family: 'PingFang-SC-Regular';color: rgb(48,48,48);padding:0!important;}
	li .tan:nth-of-type(3){@include wh(94%,0.48rem);@include sc(12px,rgb(144,144,144));font-family: 'PingFang-SC-Regular';margin:0 auto;}
	li .tan:nth-of-type(3) span{font-size: 16px;font-family: 'PingFang-SC-Regular';color: rgb(246,139,28);padding:0!important;}
	li .tans{@include wh(94%,1.18rem);}
	li .tans div{@include wh(1.6rem,0.56rem);border-radius: 5px;text-align: center;line-height: 0.56rem;margin-top:0.3rem;float: right;margin-bottom:0.3rem;}
	li .tans div:nth-child(2){margin-right: 0.16rem;}
	.active{color:rgb(255,65,54)!important}
	.activess{color:rgb(139,139,139)!important}
	.activesss{color:rgb(46,206,64)!important}
	.lpcile li:nth-last-child(){
		margin-bottom: 0;
	}
	// .box{background: #F2F2F2;height: 100%;}


</style>
