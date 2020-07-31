<template>
	<div id="setPhone">
		<div id="editPhone">
			<p class="tit">绑定手机号码需要经过短信验证</p>
			<div class="phone">
				<div>
					<span>+86</span>
				</div>
				<div>
					<input type="number" v-model="phone" placeholder="请输入手机号码"/>
				</div>
			</div>
			<!--<div class="validate"><span>验证码：</span><span><input type="number" name="" id="" value="" /><span>获取验证码</span></span></div>-->
			<p v-if="prompt==1" style="text-align: center;padding-top: 0.1rem;color: #787878;">请输入正确的11位手机号码</p>
			<div class="next">
				<div class="yes" v-if="yes==1" @click="nextYes()">下一步</div>
				<div class="no" v-if="yes==0">下一步</div>
			</div>
			<div class="statement">
				<div @click="yesOrNo">
					<img v-if="yes==1" src="../../static/image/yes.png"/>
					<img v-if="yes==0" src="../../static/image/no.png"/>
				</div>
				<p>我已阅读并同意<a href="">服务声明</a></p>
			</div>
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	export default {
		name: 'homePage',
		data() {
			return {
				phone:'',
				yes:1,
				prompt:0
			}
		},
		mounted: function() {
			document.title = this.$route.meta.title;
		},
		methods: {
			nextYes(){
				console.log(this.phone)
				var sMobile = this.phone;
				if(!(/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(sMobile))){
					this.prompt=1;
				}else{
					this.$router.push({path:'/validate',query:{'phone':this.phone}});
				}
			},
			yesOrNo(){
				if(this.yes==1){
					this.yes=0
				}else{
					this.yes=1
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.tit{text-align: center;height: 1.1rem;line-height: 1.1rem;border-bottom: 1px solid #D8D8D8;color: #787878;}
	.phone{text-align: left; display: flex;justify-content: space-between;height: 1.02rem;line-height: 1.02rem;border-bottom: 1px solid #D8D8D8;font-size: 0.32rem}
	.phone>div:nth-of-type(1){color: #F68B1B;border-right:1px solid #D8D8D8 ; padding: 0 0.5rem;}
	.phone>div:nth-of-type(1) .operator{width: 0.15rem;overflow: hidden;}
	.phone>div:nth-of-type(2){width: 80%;padding:0 0.5rem;}
	.phone>div:nth-of-type(2)>input{width: 100%;height: 90%;border: none;background-color: #EEEEEE;}
	.next{width: 100%;display: flex;}
	.next .yes{width: 100%;margin: 0 0.5rem; height: 0.88rem;background-color: #F68B1B;border-radius:0.1rem ;text-align: center;line-height: 0.88rem;color: #FFFFFF;font-size: 0.36rem;margin-top: 0.4rem;}
	.next .yes:active{background-color: #FFFFFF;color: #787878;}
	.next .no{width: 100%;margin: 0 0.5rem; height: 0.88rem;background-color: #c9c9c9;border-radius:0.1rem ;text-align: center;line-height: 0.88rem;color: #FFFFFF;font-size: 0.36rem;margin-top: 0.4rem;}
	.statement{font-size: 0.28rem; display: flex;border: none;color: #787878;padding-left: 0.5rem;margin-top: 0.2rem;}
	.statement div{width: 0.3rem;height: 0.3rem;margin-right: 0.1rem;}
	.statement div img{width: 100%;}
	a{color: #F68B1B;}
</style>