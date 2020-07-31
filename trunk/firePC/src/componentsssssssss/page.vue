<template>
	<div id="page">
		<div class="loginHeader">
			<div class="content">
				<div class="contentLeft">
					<div><img :src="data.logoUrl"/></div>
					<div>{{data.webName}}</div>
				</div>
				<div class="login"><router-link to='login'>用户登入</router-link></div>
			</div>
		</div>
		<div class="loginContent">
			<el-carousel trigger="click" height="640px">
		      <el-carousel-item >
		        <img style="width: 100%;height: 100%;" :src="data.logoUrlIma"/>
		      </el-carousel-item>
		      <el-carousel-item >
		        <img style="width: 100%;height: 100%;" :src="data.logoUrlImb"/>
		      </el-carousel-item>
		      <el-carousel-item >
		        <img style="width: 100%;height: 100%;" :src="data.logoUrlImc"/>
		      </el-carousel-item>
		    </el-carousel>
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
	  name: 'page',
	  data () {
	    return {
	    	data:{}
	    }
	  },
	  mounted:function(){
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
	#page{background-color: #F4F4F4;height: 100%;}
	.login{line-height: 62px;}
	.login>a{border: 1px solid #A2CC6D;height: 38px;padding: 10px 15px;font-size: 12px;border-radius:5px;}
	.el-button--primary{background-color: #a2cc6d;border-color: #A2CC6D;}
	.el-button--primary:hover{background-color: #67c23a;border-color: #67c23a;}
	.loginHeader{height: 62px;}
	.loginHeader>.content{display: flex;justify-content: space-between;}
	.contentLeft{display: flex;height: 100%;}
	.contentLeft>div{font-size: 16px;line-height: 62px;}
	.contentLeft>div>img{padding: 13px;}
	.loginFooter>.content>ul>li{float: left;width: 25%;text-align: center;padding-top: 85px;min-width: 220px;font-size: 16px;color: #323232;}
	.loginFooter>.content>ul>li:nth-of-type(1)>.p{height:28px;display: flex;justify-content: center;}
	.loginFooter>.content>ul>li:nth-of-type(1)>p:nth-of-type(1){padding-bottom: 10px;}
	.loginFooter>.content>ul>li:nth-of-type(1)>.p>img{margin: 4px;}
	.loginFooter>.content>ul>li:nth-of-type(1)>.p>span{line-height: 28px;font-size: 14px;}
	.loginFooter>.content>ul>li:nth-of-type(2)>p:nth-of-type(1){padding-bottom: 35px;}
	.loginFooter>.content>ul>li:nth-of-type(2)>.p{color: #323232;font-size: 14px;}
	.loginFooter>.content>ul>li:nth-of-type(3)>p:nth-of-type(1){padding-bottom: 20px;}
	.mapF{position: relative;}
	.mapS{position:absolute;width: 170px;height: 170px;border: 5px solid #C8C9CC;left: 70px;top: -200px;background-color: #FFFFFF;opacity: 0;z-index: 9999;}
	.mpF{margin-top: 30px;position: relative;}
	.mpS{position:absolute;width: 104px;height: 104px;border: 5px solid #C8C9CC;left: 100px;top: -140px;background-color: #FFFFFF;opacity: 0;padding: 5px;z-index: 9999;}
	.col{background-color: #A2CC6D;}
	.button{margin:0 20px;width: 360px;background: #A2CC6D;height: 44px;border: 1px solid #A2CC6D;color: #FFFFFF;font-size: 16px;letter-spacing:10px;}
	.button:active{border-color:blue ;}
	.codePrompt,.userPrompt,.passPrompt{height: 18px;text-align: left;margin-left: 20px;font-size: 12px;line-height: 18px;color: #909090;}
	.content{max-width: 1280px;margin: auto;height: 100%;min-width: 980px;}
	#codeCanvas{background-color: #CCCCCC;cursor:pointer;}
</style>