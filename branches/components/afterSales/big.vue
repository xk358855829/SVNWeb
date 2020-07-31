<template>
	<div style="height:100%;">
		<!-- <header>
			<div class="pimg">
				<img src="../../../static/logo.png" alt="">
			</div>
			<div class="right">
				<span>{{timeDate.day}}</span>
				<span>{{timeDate.time}}</span>
				<span>周五</span>
				<i style="width:36px;height:36px;border-radius:18px;background:#3672ec;display: inline-block;vertical-align: middle;margin-right:16px;margin-top:-8px;"></i>
				
				
				<el-dropdown trigger="click">
					<span class="el-dropdown-link">
						<span>吴彦祖11</span><p style="display: inline-block;"><img src="../../../static/ylse.png" style="margin-top:-8px;vertical-align: middle;" alt=""></p>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item><span>退出</span></el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<span class="icon-contain" style="margin-right:80px;cursor: pointer;" @click="getFullCreeen">
					全屏
				</span>
			</div>
		</header> -->
		<section>
			<div class="tol">
				<span style="width:5px;height:18px;background:#fff;display: inline-block;vertical-align: middle;margin-left:15px;"></span>
				<span>出入车抓拍：</span>
				<span>2号出入口</span>
				<span class="icon-contain" style="margin-right:80px;cursor: pointer;float:right" @click="getFullCreeen">
					全屏
				</span>
			</div>
			<div class="head">
				<div class="phtoo">
					<div class="liole">
						<div class="photo">
							<p><img :src="img" alt=""></p>
							<div style="display:flex;">
								<i>入</i>
								<span>浙A56666</span>
							</div>
						</div>
						<div class="vertical"></div>
						<div class="phone">
							<div>
								<p><img src="../../../static/tuo.png" alt=""></p>
								<p>暂无抓拍照片</p>
							</div>
							<i>
								出
							</i>
						</div>
						 <div class="clear"></div> 
					</div>
					<div class="titles">车辆监控</div>
					<div class="liole bottliloe">
						<div class="side">
							<img src="../../../static/xiao (1).png" alt="">
						</div>
						<ul>
							<li v-for="item in datas">
								<div class="liiner">
									<img :src="item.img" alt="">
								</div>
								<div>1号出口</div>
							</li>
						</ul>
						<div class="side">
							<img src="../../../static/da.png" alt="">
						</div>
					</div>
				</div>
				<div class="vertical"></div>
				<div class="detail">
					<div class="tops">
						<div class="innertops">
							<div class="however">
								<span>出车车牌</span>
								<input type="text" value="" v-model="tet" disabled="disabled" v-if="dis==0">
								<input type="text" value="" v-model="tet" v-if="dis==1">
							</div>
						</div>
						<div class="car_number">
							<div class="liscecar_number">
								<div class="cahnge" @click="changecarnumber" v-if="details==1">修改车牌</div>
								<div class="cahnge" @click="selectdetail" v-if="details==0">查询详情</div>
								<div class="cahnge" style="background:#ec5036" @click="anew">重新抓拍</div>
							</div>
						</div>
					</div>
					<div class="transverse"></div>
					<div class="botto">
						<div class="mesg">
							<div>
								<p>缴费信息</p>
								<hr>
								<p>
									<span>车型</span>
									<span>{{carType}}</span>
								</p>
								<hr>
								<p>
									<span>车辆性质</span>
									<span>{{propety}}</span>
								</p>
								<hr>
								<p>
									<span>停车时长</span>
									<span>{{longTime}}</span>
								</p>
								<hr>
								<p>
									<span>入场时间</span>
									<span>{{start_time}}</span>
								</p>
								<p class="last">
									<span>请收费</span>
									<span class="money">￥{{money}}</span>
								</p>
							</div>
						</div>
						<div class="car_number hecar">
							<div class="liscecar_number">
								<div class="cahnge" @click="discharged">收费放行</div>
								<div class="cahnge" style="background:#ec5036" @click="anomaly">异常放行</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
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
				dis:'',
				tet:'',
				wensocket: null,
				carNumber:'',
				carType:'',
				propety:'',
				longTime:'',
				start_time:'',
				img:'',
				isPay:'',
				money:'',
				exception:'',
				ips:'',
				details:1,
				timeDate:{
					day:'',
					time:''
				},
				n:0,
				datas:[{
					img:'../../static/a (1).jpg'
				},
				{
					img:'../../static/a (2).jpg'
				},
				{
					img:'../../static/a (3).jpg'
				},
				{
					img:'../../static/a (4).jpg'
				}
				]
			}
		},



	mounted:function(){
		let that=this;
		setInterval(function(){
  			that.timeDate = that.getNowFormatDate()
		},1000)
	},
    methods: {
		anew(){
			let that=this;
			axios({
				method: 'post',
				url: 'http://39.104.113.112:2088/wirite/single/openid',
				data: Qs.stringify({
					str:0,
					deviceid:'7029ae3301000009'
				})
				}).then(function(message) {
					console.log(message)
					if(message.data.code==0){
						that.selectdetail()
						that.$message({
							message: '抓拍成功',
							type: 'success'
						});
					}else{
						that.$message({
							message: '抓拍失败',
							type: 'error'
						});
					}
				})
		},
		anomaly(){
			let that=this;
			axios({
				method: 'post',
				url: 'http://39.104.113.112:2088/ExceptionCarNumberInfo/add',
				data: Qs.stringify({
					carNumber:that.tet,
					outTime:that.timeDate.day+' '+that.timeDate.time,
					outDeviceId:'7029ae3301000009',
					imgUrl:that.img
				})
				}).then(function(message) {
					console.log(message)
					if(message.data==1){
						that.discharged();
					}else{
						that.$message({
							message: '异常放行失败',
							type: 'error'
						});
					}
				})
		},
		changecarnumber(){
			this.dis=1
			this.details=0
		},
		discharged(){
			// this.carType=''
			// this.propety=''
			// this.longTime=''
			// this.start_time=''   
			// this.money=''
			// let that=this;
			// axios({
			// 	method: 'post',
			// 	url: 'http://39.104.113.112:2088/cash/payByCash',
			// 	data: Qs.stringify({
			// 		carNumber:that.set,
			// 		isTicket:1,
			// 	})
			// 	}).then(function(message) {
			// 		console.log(message)
			// 		if(res.data.resCode==0){
			// 			that.$message({
			// 				message: '支付成功',
			// 				type: 'success'
			// 			});
			// 		console.log(message)
			// 		if(message.data.code==0){
			// 		}else{
			// 			that.$message({
			// 				message: '支付失败',
			// 				type: 'error'
			// 			});
			// 		}
			// 	})
			let that=this;
			axios({
				method: 'post',
				url: 'http://39.104.113.112:2088/wirite/single/openid',
				data: Qs.stringify({
					str:1,
					deviceid:'7029ae3301000009'
				})
				}).then(function(message) {
					console.log(message)
					if(message.data.code==0){
						that.$message({
							message: '抬杆成功',
							type: 'success'
						});
					}else{
						that.$message({
							message: '抬杆失败',
							type: 'error'
						});
					}
				})
		},
		selectdetail(){
			let that=this;
			axios({
				method: 'post',
				url: 'http://39.104.113.112:2088/Order/orders',
				data: Qs.stringify({
					page: 1,
					is_del: 0,
					pageSize: 1,
					userId: 'SURIOT',
					dealer: 123,
					car_number: that.tet
				})
				}).then(function(message) {
					console.log(message)
					if(message.data.resCode==0){
						that.longTime=message.data.result[0].longdate
						that.start_time=message.data.result[0].startdate
						that.carType='小轿车'
						that.propety='普通车辆'
						that.money=message.data.result[0].price
					}
				})
		},
		getFullCreeen(){
            this.n++;
            this.n%2==0? 
            this.outFullCreeen(document):this.inFullCreeen(document.documentElement)
        },
        inFullCreeen(element){
            let el = element;
            let rfs = el.requestFullScreen || el.webkitRequestFullScreen ||
                el.mozRequestFullScreen || el.msRequestFullScreen;
            if (typeof rfs != "undefined" && rfs) { 
                rfs.call(el);
            } else if (typeof window.ActiveXObject != "undefined") {
                let wscript = new ActiveXObject("WScript.Shell");
                if (wscript != null) {
                    wscript.SendKeys("{F11}");
                }
            }
        },
        outFullCreeen(element){
            let el = element;
            let cfs = el.cancelFullScreen || el.webkitCancelFullScreen ||
                el.mozCancelFullScreen || el.exitFullScreen;
            if (typeof cfs != "undefined" && cfs) { 
                cfs.call(el);
            } else if (typeof window.ActiveXObject != "undefined") {
                let wscript = new ActiveXObject("WScript.Shell");
                if (wscript != null) {
                    wscript.SendKeys("{F11}");
                }
            }
        },
        //初始化weosocket
        initWebSocket() {
			// let userno="7029ae3301000009"
			let arr=['7029ae3301000009','7004b233010000a8','70501f2201000032','70eb56dc00000018']
			for(var i=0;i<arr.length;i++){
				let userno;
				userno=arr[i]
				 const wsuri = "ws://39.104.113.112:2088/websocket/" + userno; 
				this.websock = new WebSocket(wsuri); 
				this.websock.onmessage = this.websocketReceive; 
				this.websock.onopen = this.websocketOpen; 
				this.websock.onclose = this.websocketClose; 
				this.websock.onerror = this.wensocketError;
			}
           
        },
        //连接建立失败重连    
        wensocketError() {
            console.log("WebSocket连接发生错误,正在重新连接");
            // this.initWebSocket();
        },
        //重新建立连接
        websocketAgainOpen(){
            console.log(",正在重新连接");
            this.initWebSocket();
        },
        //连接建立之后回调函数
        websocketOpen() { 
            console.log("WebSocket连接成功，您看要不要发送消息");                     
        },    
        //数据接收    
        websocketReceive(e){          
            console.log("已接受到后台返回的数据");
			console.log(e.data) 
			let p1 = e.data.indexOf("carNumber=");
			let p2 = e.data.indexOf(",carType=");
			let p3 = e.data.indexOf(",propety=");
			let p4 = e.data.indexOf(",longTime=");
			let p5 = e.data.indexOf(",longTime=");
			let p6 = e.data.indexOf(",start_time=");
			let p7 = e.data.indexOf(",isPay=");
			let p8 = e.data.indexOf(",money=");
			let p9 = e.data.indexOf(",exception=");
			let p10 = e.data.indexOf(",img=");
			console.log(e.data.substring(p1+10,p2));
			console.log(e.data.substring(p2+9,p3));
			console.log(e.data.substring(p3+9,p4));
			console.log(e.data.substring(p5+10,p6));
			console.log(e.data.substring(p6+12,p7));
			console.log(e.data.substring(p7+7,p8));
			console.log(e.data.substring(p8+7,p9));
			console.log(e.data.substring(p9+11,e.data.length));
			this.tet=e.data.substring(p1+10,p2)
			this.carType=e.data.substring(p2+9,p3)
			this.propety=e.data.substring(p3+9,p4)
			this.longTime=e.data.substring(p5+10,p6)
			this.start_time=e.data.substring(p6+12,p7)
			this.isPay=e.data.substring(p7+7,p8)
			this.money=e.data.substring(p8+7,p9)
			this.carNumexceptionber=e.data.substring(p9+10,p10)
			this.img=e.data.substring(p10+13,e.data.length)
			// this.img='http://cloud.sokeed.com/phproot/image/SURIOT/SUR_2019_04_03_19_32_31_蓝_浙A25G1D_imageFile_.jpg'
        },   
        //数据发送     
        websocketSend(){    
            let actions = {"userno":"7029ae3301000009"};     
            this.websock.send(JSON.stringify(actions));  
            console.log("已发送数据给后台")
            console.log(JSON.stringify(actions))     
        },  
        //关闭    
        websocketClose(e){           
            console.log('断开连接',e);       
        },
			getNowFormatDate(){
	    let date = new Date();
	    let seperator1 = "-";
	    let seperator2 = ":";
	    let month = date.getMonth() + 1;
	    let strDate = date.getDate();
	    let Hours = date.getHours()>9?date.getHours():'0'+date.getHours();
	    let Minutes = date.getMinutes()>9?date.getMinutes():'0'+date.getMinutes();
	    let Seconds = date.getSeconds()>9?date.getSeconds():'0'+date.getSeconds();
	    if (month >= 1 && month <= 9) {
	        month = "0" + month;
	    }
	    if (strDate >= 0 && strDate <= 9) {
	        strDate = "0" + strDate;
	    }
	    let data = {
	    	day:date.getFullYear() + seperator1 + month + seperator1 + strDate,
	    	time:Hours + seperator2 + Minutes + seperator2 + Seconds
	    };
	    return data;
		},
    },
    created() {
        //判断当前浏览器是否支持WebSocket
        if ('WebSocket' in window) {
            this.initWebSocket()
        }
        else {
            alert('当前浏览器 Not support websocket')
        }

    },
    components: {

    }
}
</script>	
<style lang="scss" scoped>
	@import '../../styles/mixin.scss';
	// .hello{background: #F2F2F2;}
	header{@include wh(100%,100%);background: #2c3037;display:flex;justify-content: space-around;}
	.right{text-align: right;line-height: 0.95rem;@include sc(16px,#fefefe);font-family: 'PingFang-SC-Regular';}
	.right span:nth-child(3){margin-right:60px;display: inline-block;}
	header .pimg,.right{width: 50%;}
	.pimg img{@include wh(176px,34px);margin:27.5px 15px;}
	header span{@include sc(16px,#fefefe);}
	section{background: #363c46;@include wh(100%,985px);}
	.head{@include wh(98.5%,830px);display: flex;justify-content: space-between;margin:0 auto;}
	.phtoo{@include wh(70%,100%);background: #3f4551;}
	.phtoo .liole{@include wh(100%,auto);}
	.detail{@include wh(30%,100%);background: #3f4551;}
	.tol{background:#363c46;@include wh(100%,80px);}
	.tops{@include wh(100%,230px);@include sc(24px,#fefefe);}
	.tol span{@include sc(16px,#fefefe);font-family: 'PingFang-SC-Regular';line-height: 80px;vertical-align: middle;}
	.innertops,.car_number{@include wh(100%,59%);}
	// .car_number{display: flex;justify-content:space-around;}
	.liscecar_number{width: 80%;margin:0 auto;display: flex;flex-direction: row;
  justify-content: space-between}
	.car_number .cahnge{@include wh(46%,60px);background: #9ecc46;color: #fff;line-height: 60px;text-align: center;border-radius: 8px;@include sc(24px,#fefefe);}
	.mesg{@include wh(80%,472px);margin:0 auto;@include sc(24px,#fefefe);font-family: 'PingFang-SC-Regular';}
	.transverse{@include wh(100%,14px);background: #363c46;}
	.mesg p{margin:26px 0;@include sc(20px,#fefefe);display: flex;justify-content: space-between;}
	.mesg p:nth-child(1){margin:32px 0;@include sc(24px,#fefefe);}
	.mesg .last{margin:46px 0;@include sc(24px,#fefefe);}
	.botto{@include wh(100%,550px);}
	.vertical{@include wh(0.9%,414px);background: #363c46;float: left;}
	.photo{float: left;@include wh(49.5%,414px);position: relative;}
	.photo p{@include wh(100%,100%);}
	.photo p img{@include wh(100%,100%);}
	.photo div{@include wh(37%,60px);position: absolute;top:0;left: 0;@include sc(24px,#fefefe);}
	.photo i{@include wh(37%,100%);line-height: 60px;text-align: center;background: #353a44;}
	.photo span{background: rgba(146, 149, 153, .5);@include wh(63%,100%);text-align: center;line-height: 60px;}
	.phone{float:right;@include wh(49.5%,414px);background: #3f4551;position: relative;}
	.phone i{position: absolute;top:0;left: 0;display: inline-block;background: #353a44;@include wh(10.5%,60px);line-height: 60px;text-align: center;@include sc(24px,#fefefe);}
	.phone div{@include wh(36%,100%);margin:0 auto;margin-top:90px;}
	.phone div p:nth-child(2){@include sc(24px,#fefefe);text-align: center;margin-top:40px;}
	.phone div p img{@include wh(100%,100%);}
	.however{width: 80%;margin:0 auto;padding-top:50px;display: flex;flex-direction: row;
  justify-content: space-between}
	.however span{line-height: 60px;}
	.however input{background: #51596a;outline: none;border:none;text-align: center;@include wh(72%,60px);color: #fefefe;}
	.hecar{height: 0%!important;}
	.clear{ clear:both} 
	hr{background: #525b6d;  border: none;
	height: 1px;}
	.bottliloe{display: flex;justify-content: space-between;height: 40%!important;background: #363c46;}
	.bottliloe .side{@include wh(26px,88px);background: #202327;margin-top:10%;}
	.bottliloe .side img{margin-top:32px;}
	.bottliloe ul{@include wh(93.5%,100%);background: #363c46;
	display: flex;
    justify-content: space-evenly;}
	.titles{@include wh(100%,84px);@include sc(16px,#fefefe);font-family: 'PingFang-SC-Regular';line-height: 84px;background: #363c46;}
	.bottliloe ul li{@include wh(23%,100%);}
	.bottliloe ul li div:nth-child(1){@include wh(100%,264px);background: #3f4551;}
	.liiner img{width: 100%;height: 100%;}
	.money{@include sc(40px,#9bdd48);}
	.el-popper{margin-top:-23px;}
	.bottliloe ul li div:nth-child(2){@include wh(100%,58px);background: #3f4551;text-align: center;line-height: 58px;@include sc(20px,#fff);font-family: 'PingFang-SC-Regular';margin-top:10px;}
	// .gong{@include sc(18px,#303030);font-family: 'PingFang-SC-Regular';}
	// .box .top{@include wh(6.86rem,2.12rem);border-radius: 5px;margin:0 auto;margin-top:0.37rem;background: #FFFFFF;margin-bottom: 0.52rem;}
	// .box .top p{text-align: center;@extend .gong;}
	// .box .top p:nth-child(1){padding-top:0.48rem;padding-bottom: 0.21rem;}
	// .bottom{@include wh(6.86rem,6.42rem);border-radius: 5px;margin:0 auto;background: #FFFFFF;}
	// .bottom div:nth-child(1){@include wh(6.86rem,3.89rem);margin-bottom: 0.53rem;}
	// .innert{@include wh(3.71rem!important,100%);margin:0 auto;}
	// .innert .ptuo{@include wh(3.71rem,1.83rem);margin:0 auto;background: #D3D3D3;border-radius:1.35rem;border-radius: 50%/50%;margin-top:-1.3rem;}
	// .innert p:nth-child(1){@include wh(2.64rem,2.57rem);margin:0 auto;padding-top:0.8rem;}
	// .innert p:nth-child(1) img{@include wh(100%,100%);}
	// .bottom div:nth-child(2) p{@extend .gong;text-align: center;margin-top:0.1rem;}
	// @media screen and (min-width:1590px) and (max-width:1920px){
	// 	header{@include wh(100%,0.57rem);}
	// 	.right{text-align: right;line-height: 0.57rem;}
	// 	section{height: 892px;}
	// 	.pimg img{@include wh(176px,34px);margin-top:9px;}
	// 	.tol{background:#363c46;@include wh(100%,50px);}
	// 	.tol span{line-height: 0.5rem;}
	// }
	 @media screen and (min-width:1360px) and (max-width:1620px){
		 .however span{font-size: 21px;}
		 .photo div{font-size: 18px;}
	 }
</style>
