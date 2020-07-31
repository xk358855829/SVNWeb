<template>
	<div class="hello">
		<div>
			<div class="rot"><span>基础信息</span></div>
			<ul>
				<li>
					<div class="talos">
						<div>头像</div>
						<div style="width:0.5rem;height:0.5rem;margin-top:0.04rem;">
							<!-- <i></i> -->
							<img :src='total.headimgurl' alt="" style="width:100%;height:100%;">
						</div>
					</div>
				</li>
				<li>
					<div class="talos">
						<span>昵称</span>
						<span>{{total.nickname}}</span>
					</div>
				</li>
				<li>
					<div class="talos">
						<span>性别</span>
						<span>{{total.sex}}</span>
						<!-- <div><img src="/static/image/arrow.png" alt=""></div> -->
					</div>
				</li>
				<li>
					<div class="talos">
						<span>地区</span>
						<span>{{total.province}}</span>
						<!-- <div><img src="/static/image/arrow.png" alt=""></div> -->
					</div>
				</li>
				<li @click="mycar">
					<div class="talos">
						<span>我的爱车</span>
						<input type="text" v-model="aiche" style="width:67%;border:none;outline:none;text-align:right;">
						<div class="imgat"><img src="../../../static/image/arrow.png" alt=""></div>
					</div>
				</li>
				<li @click="changephoto">
					<div class="talos">
						<span>手机号码</span>
						<input type="text" v-model="phonenum" style="width:67%;border:none;outline:none;text-align:right;">
						<div class="imgat"><img src="../../../static/image/arrow.png" alt=""></div>
					</div>
				</li>
			</ul>
		</div>
		<div>
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	import {mapState} from 'vuex'
	import {wodeaic} from '../api/api.js'
	export default {
		name: 'my',
		data() {
			return {
				ips:'',
				// mes:'11111111',
				// phonenum:localStorage.getItem('phones')
				phonenum:'',
				aiche:''
			}
		},
		methods: {
			changephoto(){
				this.$router.push({path:'/bangding',query:{val:this.phonenum}})
			},
			mycar(){
				this.$router.push({path:'/carnumber'})
			}
		},
		computed:{
			...mapState(['total'])
		},
		mounted: function() {
			document.title=this.$route.meta.title;
			let that=this;
			// that.$store.dispatch('lista',{openid:'oOKex1Ow5nB_qymzrzj4L7Gm7snU'})
			that.$store.dispatch('lista',{openid:localStorage.getItem('openid')})
			
			// var ip = returnCitySN["cip"];
			// console.log(ip)
			console.log(this.$route.query.emt)
			wodeaic({
				openid:localStorage.getItem('openid')
				// openid:'oOKex1Ow5nB_qymzrzj4L7Gm7snU'
				,status:1}).then(res=>{
				console.log(res)
				if(res.status==200){
					that.aiche=res.data.result.country
					that.phonenum=res.data.result.phone
				}
			})
		}
	}
</script>
<style lang="scss" scoped>
	@import '@/style/mixin.scss';
	.rot{@include wh(94%,0.42rem);margin:0 auto;line-height: 0.4rem;@include sc(16px,rgb(48,48,48));font-family: 'PingFang-SC-Regular';}
	ul{width: 94%;margin:0 auto;background: #fff;border-radius: 5px;}
	ul li{@include wh(100%,0.59rem);border-bottom: 1px solid rgb(239,239,239);line-height: 0.59rem;@include sc(16px,rgb(48,48,48));font-family: 'PingFang-SC-Regular';}
	ul li .talos{display: flex;justify-content: space-between;@include wh(94%,0.59rem);margin:0 auto;}
	.imgat{@include wh(4%,100%);text-align:right;margin-right: 0.1rem;margin-top:0.03rem;}
	.imgat img{@include wh(0.07rem,0.12rem)}
	// .hello{background: #F2F2F2;}
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
</style>
