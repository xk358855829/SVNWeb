<template>
	<div id="pageLogin">
		<div class="login">
			<div class="title"></div>
			<div class="center">
				<p>智慧泊车设备服务云平台</p>
				<div class="total">
					<div class="empty"></div>
					<div class="centerMain">
						<input style="display:none">
						<div class="user">
							<div class="textBox">
								<img class="textImg" src="../../static/image/user.png" />
							</div>
							<div class="textBox">
								<input class="textInput" type="text" v-model="userName" @blur="testing(1,userName)" placeholder='请输入您的账号' autocomplete="new-password"/>
							</div>
						</div>
						<div class="pass">
							<div class="textBox">
								<img class="textImg" src="../../static/image/pass.png" />
							</div>
							<div class="textBox">
								<input class="textInput" type="password" v-model="passWord" @blur="testing(2,passWord)" placeholder='请输入您的密码' autocomplete="new-password"/>
							</div>
						</div>
						<div class="veri">
							<div class="textBox">
								<img class="textImg" src="../../static/image/veri.png" />
							</div>
							<div class="textBox">
								<input class="veriInput" type="text" v-model="veri" @blur="testing(3,veri)" placeholder='请输入右侧验证码'/>
							</div>
							<div class="textCanvas">
								<canvas @click="code" id="codeCanvas"></canvas>
							</div>
						</div>
						<div class="memory clearfix">
							<div class="memoryOk" v-bind:style="styleMe" @click="meClick"></div><div class="meMe">记住密码</div>
						</div>
						<button class="buttonOk" @click="login">登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
					</div>
				</div>
			</div>
			<div class="Lfooter">
				<p>@copyright&nbsp;&nbsp;速利科技有限公司&nbsp;&nbsp;浙ICP备17053660号</p>
			</div>
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	import {searchClicks} from './api/api.js'
	export default {
		name: 'login',
		data () {
		    return {
		    	ps:0,
		    	styleMe:{
		    		backgroundColor:'initial'
				},
				 list:[0,1,2,3,4,5,6,7,8,9,10],
		    	userName:'',
		    	passWord:'',
		    	veri:'',
		    	user:[0,0,0]
		    }
		},
		mounted:function(){
		  	this.code();
		  	this.userName = localStorage.getItem('userName');
		  	if(localStorage.getItem('userName')){
		  		this.ps=1;
		  		this.styleMe.backgroundColor = '#A2CC6D';
		  	}else{
		  		this.ps=0;
		  		this.styleMe.backgroundColor = 'initial';
		  	}
		  	this.passWord = localStorage.getItem('passWord');
			document.title=this.$route.meta.title;
			let that=this;
			document.onkeydown=function(e){
				var key=window.event.keyCode;
				if(key==13){
					that.login();
				}
			}
		},
		methods:{
		  	meClick(){
		  		if(this.ps){
		  			this.styleMe.backgroundColor = 'initial';
		  			this.ps = 0;
		  		}else{
		  			this.styleMe.backgroundColor = '#A2CC6D';
		  			this.ps = 1;
		  		}
		  	},
		  	code(){
		  		let list = [0,1,2,3,4,5,6,7,8,9,'q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
		  		let text='';
		  		for(let i=0;i<4;i++){
		  			text+=list[Math.floor(Math.random()*36)]
		  		}
		  		this.Vcode = text;
		  		let context = document.getElementById('codeCanvas').getContext('2d');
		  		context.clearRect(0,0,500,500)
		  		context.font="80px Microsoft Yahei";
		  		context.fillStyle = "blue";
		  		context.textAlign="center";
				context.fillText(text,150,100);
		  	},
		  	testing(k,userVal){
		  		console.log(userVal)
		  		let that = this;
		  		if(k==1){
		  			if(userVal==null){
		  				that.user[0]=0;
		  				that.$message.error('您输入的账号为空');
		  			}else if(userVal.length<6||userVal.length>20){
		  				that.user[0]=0;
		  				that.$message.error('账号长度过短，请输入6-20位字符串');
		  			}else{
		  				that.user[0]=1;
		  			}
		  		}else if(k==2){
		  			if(userVal==null){
		  				that.$message.error('请输入的您的密码');
		  				that.user[1]=0;
		  			}else if(userVal.length<6){
		  				that.$message.error('密码有误,请输入大于6位的密码，可包含字母、数字、特殊字符');
		  				that.user[1]=0;
		  			}else{
		  				that.user[1]=1;
		  			}
		  		}else if(k==3){
		  			if(userVal.toLowerCase()==that.Vcode){
		  				that.user[2]=1;
		  			}else{
		  				that.$message.error('验证码不正确');
		  				that.user[2]=0;
		  			}
		  		}
		  	},
		  	login(){
		  		let that = this;
		  		that.testing(1,that.userName);
		  		that.testing(2,that.passWord);
		  		that.testing(3,that.veri);
		  		if(this.user[0]==1&&this.user[1]==1&&this.user[2]==1){
					//   searchClicks('/s_user/login',{
					//  		userName:this.userName,
					//  		password:this.passWord
					//   }).then(res=>{
					// 	  console.log(res)
					//   })
					//   console.log(998)
		  			axios({
						method:'post',
						url:this.$store.state.url+'/s_user/login',
						// url:'/api/s_user/login',
						data:Qs.stringify({
							userName:this.userName,
							password:this.passWord
						})
					}).then(function(message){
						console.log(message)
						if(message.data.resCode==0){
							if(that.ps){
								localStorage.setItem('userName',that.userName);
								localStorage.setItem('passWord',that.passWord);
							}else{
								localStorage.removeItem('userName');
								localStorage.removeItem('passWord');
							}
							sessionStorage.setItem('userAlias',message.data.result.userAlias);
							sessionStorage.setItem('permissions',message.data.result.permissions);
							localStorage.setItem('dealerId',message.data.result.associated);
							localStorage.setItem('userId',message.data.result.userId);



							localStorage.setItem('userType',message.data.result.type);
							localStorage.setItem('dealer',message.data.result.dealer);
							that.$router.push('/pageHome')
						}else{
							that.$alert('用户名或密码错误', '系统提示', {
					        	confirmButtonText: '确定'
					        });
						}
					})
		  		}
		  	}
		}
	}
</script>

<style scoped="scoped">
	canvas{width: 100%;height: 100%;}
	#pageLogin{
		background: url(../../static/image/pageLogin.png);
		position:fixed;
		top: 0;
		left: 0;
		width:100%;
		height:100%;
		min-width: 1000px;
		/* z-index:-10; */
		zoom: 1;
		background-color: #fff;
		background-repeat: no-repeat;
		background-size: cover;
		-webkit-background-size: cover;
		-o-background-size: cover;
		background-position: center 0;
		}
	.login{height: 100%;}
	.title{height: 2rem;}
	.title>img{width: 2.16rem;height: 0.43rem;margin: 0.3rem 0 0 0.3rem;}
	.center{height: 75%;text-align: center;position: relative;}
	.center>p{font-size: 0.3rem;color: #FFFFFF;margin-bottom: 1.4rem;padding-top: 2%;}
	.centerMain{width: 4.24rem;height: 2.64rem;background-color:rgba(195,195,195,0.5); border-radius:0.2rem;text-align: center;padding: 0.46rem 0;}
	.user,.pass,.veri{width: 3.24rem;height: 0.4rem;border: 1px solid #FFFFFF;margin: 0px 0.5rem;border-radius: 5px;text-align: left;}
	.textBox{float: left;height: 100%;}
	.textBox>img{height: 0.2rem;width: 0.2rem;}
	.textCanvas{background-color: rgb(45,45,45,0.17);float: left;border-bottom-right-radius:5px ;border-top-right-radius:5px ;overflow: hidden;width: 1.18rem;height: 0.4rem;}
	.textImg{margin:0.1rem 0.15rem;}
	.textInput{height: 100%;border: none;background-color:initial;color: #FFFFFF;font-size: 0.16rem;width: 2.74rem;border-radius:0;}
	.veriInput{height: 100%;border: none;background-color:initial;color: #FFFFFF;font-size: 0.16rem;width: 1.56rem;}
	
	.pass{margin: 0.2rem auto;}
	.memory{width: 3.24rem;margin:0.16rem auto 0.22rem;}
	.memoryOk{height: 0.16rem;width: 0.15rem;border: 1px solid #FFFFFF;border-radius:5px ;float: left;}
	.meMe{float: left;line-height:0.18rem ;margin-left: 0.12rem;color: #FFFFFF;font-size: 13px}
	.buttonOk{width: 3.24rem;background-color: #A2CC6D;height: 0.42rem;margin:0 auto;border-radius:5px ;text-align: center;line-height: 0.42rem;font-size:0.16rem; color: #FFFFFF;border: none;}
	.buttonOk:active{background-color: #67C23A;}
	.Lfooter{height: 5%;}
	.Lfooter>p{color: #FFFFFF;font-size: 0.13rem;text-align: center;}
	::-webkit-input-placeholder {color:#FFFFFF;font-size:0.16rem;}
　　	:-moz-placeholder {color:#FFFFFF;font-size:0.16rem;}
　　	::-moz-placeholder {color:#FFFFFF;font-size:0.16rem;}
　　	:-ms-input-placeholder {color:#FFFFFF;font-size:0.16rem;}
	.empty{width:  6.3rem;height: 100%;}
	.total .centerMain{}
	.total{display:flex;justify-content: center;}
	@media (max-width: 1680px){
		.title{height: 2rem;}
		.center{height: 70%;}
	}
	@media (max-width: 1450px){
		.title{height: 1rem;}
		.center{height: 75%;}
	}
	@media (max-width: 1367px){
		.title{height: 0.6rem;}
		.center{height: 75%;}
		.center>p{
			padding-top:0;
			margin-bottom: 0.4rem;
		}
	}
</style>