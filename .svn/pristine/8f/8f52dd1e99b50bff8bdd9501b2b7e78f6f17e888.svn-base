<template>
	<div id="login">
		<div class="loginHeader">
			<div class="content">
				<div class="contentLeft">
					<div><img :src="data.logoUrl"/></div>
					<div>{{data.webName}}</div>
				</div>
				<div class="login"><router-link to='page'>平台首页</router-link></div>
			</div>
		</div>
		<div class="loginContent">
			<div class="content clearfix">
				<div class="clearfix"><img src="../../static/image/line_03.png"/></div>
				<div class="clearfix loginContentLogin">
					<p>登陆物联网云平台</p>
					<div class="user">
						<div>登陆账号</div>
						<div>|</div>
						<div><input type="text" v-model="username" @blur="testing(1,username)" placeholder="请输入您的账号"/></div>
					</div>
					<div class="userPrompt">{{userPrompt}}</div>
					<div class="pass">
						<div>登陆密码</div>
						<div>|</div>
						<div><input type="password" v-model="userpass" @blur="testing(2,userpass)" placeholder="请输入您的密码"/></div>
					</div>
					<div class="passPrompt">{{passPrompt}}</div>
					<div class="code">
						<div class="codeCon">
							<div>验证码&nbsp;&nbsp;</div>
							<div>|</div>
							<div><input type="text" v-model="usercode" @keyup.enter="login" @blur="testing(3,usercode)" placeholder="请输入验证码"/></div>
						</div>
						<div class="codeCode" @click="code">
							<canvas id="codeCanvas" width="90" height="40"></canvas>
						</div>
					</div>
					<div class="codePrompt">{{codePrompt}}</div>
					<div class="additional clearfix">
						<div><div v-if='memory===0' @click="memoryClick"></div><div @click="memoryClick" class="col" v-if='memory===1'></div>&nbsp;&nbsp;<span>记住密码</span></div>
						<div><router-link to='aaa'>找回密码</router-link></div>
					</div>
					<div><button class="button" @click="login">登录</button></div>
				</div>
			</div>
		</div>
		<div class="loginFooter">
			<div class="content">
				<ul>
					<li>
						<p>联系方式</p>
						<p class="p">
							<img src="../../static/image/icon-phone_10.png"/><span>{{data.conPhot}}</span>
						</p>
						<p class="p">
							<img src="../../static/image/icon-foxmail_20.png"/><span>{{data.contact}}</span>
						</p>
						<p class="p">
							<img src="../../static/image/icon-email_26.png"/><span>{{data.comEmail}}&nbsp;&nbsp;</span>
						</p>
					</li>
					<li>
						<p>网站声明</p>
						<p class="p">@copyright {{data.companyName}}</p><br />
						<p class="p">{{data.comNumber}}</p>
					</li>
					<li>
						<p>所在位置</p>
						<p class="mapF">
							<img @mouseenter="mapImg(1)" @mouseleave="mapImg(0)" src="../../static/image/map_07.png"/>
							<span class="mapS" id="allmap"></span>
						</p>
					</li>
					<li>
						<p>微信公众号</p>
						<p class="mpF">
							<img @mouseenter="mapImg(3)" @mouseleave="mapImg(2)" src="../../static/image/vmsg_17.png"/>
							<span class="mpS"><img :src="data.codeUrl"/></span>
						</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	export default {
	  name: 'login',
	  data () {
	    return {
	    	data:{},
	    	userPrompt:'',
	    	passPrompt:'',
	    	codePrompt:'',
	    	username:'',
	    	userpass:'',
	    	usercode:'',
	    	user:[0,0,0],
	    	Vcode:'',
	    	memory:0,
	    	maps:0
	    }
	  },
	  mounted:function(){
	  	this.code();
	  	this.username = localStorage.getItem('userName');
	  	if(localStorage.getItem('userName')){
	  		this.memory=1;
	  	}else{
	  		this.memory=0;
	  	}
		  this.userpass = localStorage.getItem('passWord');
		/*let map = new BMap.Map("allmap");
		let point=new BMap.Point(120.239057,30.273105);
		map.centerAndZoom(point,19);
		let marker=new BMap.Marker(point);
		let circle=new BMap.Circle(point,20,{
			strokeColor:"#D8E8F7",
			fillColor:"#C5D4E6",
			strokeWeight:2
		});
		map.addOverlay(circle);
		map.addOverlay(marker);*/
		this.searchClick();
		document.title=this.$route.meta.title;
	  },
	  methods:{
	  	mapImg(k){
	  		if(k==0){
	  			document.getElementById('allmap').style.opacity='0';
	  		}else if(k==1){
	  			document.getElementById('allmap').style.opacity='1';
	  		}else if(k==2){
	  			document.getElementsByClassName('mpS')[0].style.opacity='0';
	  		}else{
	  			document.getElementsByClassName('mpS')[0].style.opacity='1';
	  		}
	  	},
	  	code(){
	  		let list = [0,1,2,3,4,5,6,7,8,9,'q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
	  		let text='';
	  		
	  		for(let i=0;i<4;i++){
	  			text+=list[Math.floor(Math.random()*36)]
	  		}
	  		this.Vcode = text;
	  		console.log(this.Vcode);
	  		let context = document.getElementById('codeCanvas').getContext('2d');
	  		context.clearRect(0,0,100,40);
		  	context.font="24px Microsoft Yahei";
		  	context.fillStyle = "blue";
			context.fillText(text,15,29);
	  	},
	  	testing(k,userVal){
	  		/*console.log(userVal)*/
	  		let that = this;
	  		if(k==1){
	  			if(userVal==null){
	  				that.userPrompt = '您输入的账号为空';
	  				that.user[0]=0;
	  			}else if(userVal.length<6||userVal.length>20){
	  				that.userPrompt = '账号长度过短，请输入6-20位字符串';
	  				that.user[0]=0;
	  			}else{
	  				that.user[0]=1;
	  				that.userPrompt = ''
	  			}
	  		}else if(k==2){
	  			if(userVal==null){
	  				that.passPrompt = '请输入的您的密码';
	  				that.user[1]=0;
	  			}else if(userVal.length<6){
	  				that.passPrompt = '密码有误,请输入大于6位的密码，可包含字母、数字、特殊字符';
	  				that.user[1]=0;
	  			}else{
	  				that.user[1]=1;
	  				that.passPrompt = ''
	  			}
	  		}else if(k==3){
	  			if(userVal==that.Vcode){
	  				that.user[2]=1;
	  				that.codePrompt = ''
	  			}else{
	  				that.codePrompt = '验证码不正确'
	  				that.user[2]=0;
	  			}
	  		}
	  	},
	  	login(){
	  		let that = this;
	  		that.testing(1,that.username);
	  		that.testing(2,that.userpass);
	  		that.testing(3,that.usercode);
	  		if(this.user[0]==this.user[1]==this.user[2]==1){
	  			/*console.log(this.username+','+this.userpass+','+this.usercode);*/
	  			axios({
					method:'post',
					url:this.$store.state.http+'/user/login',
					data:Qs.stringify({
						userName:this.username,
						password:this.userpass
					})
				}).then(function(message){
					console.log(message.data.resCode)
					if(message.data.resCode==0){
						if(that.memory){
							localStorage.setItem('userName',that.username);
							localStorage.setItem('passWord',that.userpass);
						}else{
							localStorage.removeItem('userName');
							localStorage.removeItem('passWord');
						}
						sessionStorage.setItem('userAlias',message.data.result.userAlias);
						sessionStorage.setItem('userId',message.data.result.userId);
						sessionStorage.setItem('dealer',message.data.result.dealer)
						sessionStorage.setItem('orderDealer',message.data.result.orderDealer)
						that.$router.push('/pageHome')
					}else{
						that.$alert('用户名或密码错误', '系统提示', {
				        	confirmButtonText: '确定'
				        });
					}
					
				})
	  		}
	  	},
	  	memoryClick(){
	  		if(this.memory){
	  			this.memory=0;
	  		}else{
	  			this.memory=1;
	  		}
	  	},
	  	searchClick(){
			let that = this;
			axios({
				method:'post',
				url:this.$store.state.http +'/company/list'
			}).then(function(message){
				/*console.log(message.data.result)*/
				if(message.data.resCode==0){
					that.data = message.data.result;
					let map = new BMap.Map("allmap");
					let point=new BMap.Point(JSON.parse(message.data.result.position).lng,JSON.parse(message.data.result.position).lat);
					map.centerAndZoom(point,19);
					let marker=new BMap.Marker(point);
					let circle=new BMap.Circle(point,20,{
						strokeColor:"#D8E8F7",
						fillColor:"#C5D4E6",
						strokeWeight:2
					});
					map.addOverlay(circle);
					map.addOverlay(marker);
				}else{
					
				}
			})
		}
	  }
	}
</script>

<style>
	#login{background-color: #F4F4F4;height: 100%;}
	.login{line-height: 62px;}
	.login>a{border: 1px solid #A2CC6D;height: 38px;padding: 10px 15px;font-size: 12px;border-radius:5px;}
	.el-button--primary{background-color: #a2cc6d;border-color: #A2CC6D;}
	.el-button--primary:hover{background-color: #67c23a;border-color: #67c23a;}
	.loginHeader{height: 62px;}
	.loginHeader>.content{display: flex;justify-content: space-between;}
	.contentLeft{display: flex;height: 100%;}
	.contentLeft>div{font-size: 16px;line-height: 62px;}
	.contentLeft>div>img{padding: 13px;}
	.loginContent{background-color: #FFFFFF;}
	.loginContent>.content{padding: 120px 0;}
	.loginContent>.content>div:nth-of-type(1){float: left;margin-left: 80px;}
	.loginContent>.content>div:nth-of-type(2){float: right;margin-right: 80px;}
	.loginContent>.content>div>img{width: 410px;}
	.loginContentLogin{border: 1px solid #cdcdcd;height: 400px;width: 400px;text-align: center;}
	.loginContentLogin>p{font-size: 18px;color: #323232;margin: 18px;margin-bottom: 30px;}
	.user,.pass{border: 1px solid #CDCDCD;margin: 0 20px 0px;font-size: 14px;height: 40px;}
	.user>div{float: left;line-height: 40px;}
	.user>div:nth-of-type(1){padding-left: 10px;}
	.user>div:nth-of-type(2){margin: 0 20px;color: #dcdcdc;}
	.user>div:nth-of-type(3)>input{border: none;width: 240px;}
	.pass>div{float: left;line-height: 40px;}
	.pass>div:nth-of-type(1){padding-left: 10px;}
	.pass>div:nth-of-type(2){margin: 0 20px;color: #dcdcdc;}
	.pass>div:nth-of-type(3)>input{border: none;width: 240px;}
	.code{margin: 0 20px 0px;font-size: 14px;height: 40px;}
	.code>.codeCon{float: left;line-height: 40px;border: 1px solid #CDCDCD;}
	.code>.codeCon>div{float: left;line-height: 40px;}
	.code>.codeCon>div:nth-of-type(1){padding-left: 10px;}
	.code>.codeCon>div:nth-of-type(2){margin: 0 20px;color: #dcdcdc;}
	.code>.codeCon>div:nth-of-type(3)>input{border: none;}
	.code>.codeCode{border: 1px solid #DCDCDC;height: 40px;float: right;}
	.additional{margin: 10px 20px 40px;}
	.additional>div:nth-of-type(1){float: left;line-height: 20px;}
	.additional>div:nth-of-type(1)>div{float: left;width: 18px;height: 18px;border: 1px solid #DCDCDC;line-height: 18px;cursor: pointer;}
	
	.additional>div:nth-of-type(2){float:right;line-height: 20px;}
	.additional>div:nth-of-type(2)>a{color: #A2CC6D;}
	.loginFooter>.content>ul>li{float: left;width: 25%;text-align: center;padding-top: 85px;min-width: 220px;font-size: 16px;color: #323232;}
	.loginFooter>.content>ul>li:nth-of-type(1)>.p{height:28px;display: flex;justify-content: center;}
	.loginFooter>.content>ul>li:nth-of-type(1)>p:nth-of-type(1){padding-bottom: 10px;}
	.loginFooter>.content>ul>li:nth-of-type(1)>.p>img{margin: 4px;}
	.loginFooter>.content>ul>li:nth-of-type(1)>.p>span{line-height: 28px;font-size: 14px;}
	.loginFooter>.content>ul>li:nth-of-type(2)>p:nth-of-type(1){padding-bottom: 35px;}
	.loginFooter>.content>ul>li:nth-of-type(2)>.p{color: #323232;font-size: 14px;}
	.loginFooter>.content>ul>li:nth-of-type(3)>p:nth-of-type(1){padding-bottom: 20px;}
	.mapF{position: relative;}
	.mapS{position:absolute;width: 170px;height: 170px;border: 5px solid #C8C9CC;left: 70px;top: -200px;background-color: #FFFFFF;opacity: 0;}
	.mpF{margin-top: 30px;position: relative;}
	.mpS{position:absolute;width: 104px;height: 104px;border: 5px solid #C8C9CC;left: 100px;top: -140px;background-color: #FFFFFF;opacity: 0;padding: 5px;}
	.col{background-color: #A2CC6D;}
	.button{margin:0 20px;width: 360px;background: #A2CC6D;height: 44px;border: 1px solid #A2CC6D;color: #FFFFFF;font-size: 16px;letter-spacing:10px;}
	.button:active{border-color:blue ;}
	.codePrompt,.userPrompt,.passPrompt{height: 18px;text-align: left;margin-left: 20px;font-size: 12px;line-height: 18px;color: #909090;}
	.content{max-width: 1280px;margin: auto;height: 100%;min-width: 980px;}
	#codeCanvas{background-color: #CCCCCC;cursor:pointer;}
</style>