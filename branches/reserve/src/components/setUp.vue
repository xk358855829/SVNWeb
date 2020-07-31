<template>
	<div id="setUp">
		<ul>
			<router-link to='/modifyPhone'>
				<li>
					<div>手机号码</div>
					<div>
						<div>{{phone}}</div>
						<div><img src="../../static/image/shangjiant.png"/></div>
					</div>
				</li>
			</router-link>
			<a href="http://mp.weixin.qq.com/s?__biz=MzU1ODU3NzA0OQ==&mid=100000003&idx=1&sn=79feaa1061ba8a1294c459b56168a19b&chksm=7c2525f54b52ace375b0ae9c2fd76fb572f2b6a6b20f3463dbba121b0d61fb5e4fb560252417&scene=18#wechat_redirect">
				<li>
					<div>关于我们</div>
					<div>
						<div><img src="../../static/image/shangjiant.png"/></div>
					</div>
				</li>
			</a>
			<a href="http://mp.weixin.qq.com/s?__biz=MzU1ODU3NzA0OQ==&mid=100000004&idx=1&sn=aebd9707f9a9edc11260dbba3b247837&chksm=7c2525f24b52ace4de10371f686e7168042a2bfed3e00f181fe20115b00f24806f233426400e&scene=18#wechat_redirect">
				<li>
					<div>用户指南</div>
					<div>
						<div><img src="../../static/image/shangjiant.png"/></div>
					</div>
				</li>
			</a>
		</ul>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	export default {
		name: 'homePage',
		data() {
			return {
				phone:'暂未填写'
			}
		},
		mounted: function() {
			document.title = this.$route.meta.title;
			this.phone = localStorage.getItem('phone')
		},
		methods: {}
	}
</script>

<style scoped="scoped">
	#setUp{margin: 0.2rem 0;}
	ul{
		background-color: #FFFFFF;
	}
	li {
		display: flex;
		background-color: #FFFFFF;
		height: 1.02rem;
		border-bottom: 1px solid #D8D8D8;
		line-height: 1.02rem;
		justify-content: space-between;
		margin: 0 0.24rem;
		font-size: 0.28rem;
	}
	li>div:nth-of-type(1){color: #333333;}
	li>div:nth-of-type(2){display: flex;color: #787878;}
	img{
		transform:rotate(90deg);
		-ms-transform:rotate(90deg);
		-moz-transform:rotate(90deg);
		-webkit-transform:rotate(90deg);
		-o-transform:rotate(90deg);
		width: 0.6rem;
		margin: 0.21rem 0;
	}
	a:nth-last-of-type(1) li{border: none;}
</style>