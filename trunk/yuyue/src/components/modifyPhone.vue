<template>
	<div id="modifyPhone">
		<p class="tit">您已绑定手机号码</p>
		<p class="phone">{{phone}}</p>
		<router-link to='/setPhone'><div class="btn">更换</div></router-link>
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
			this.phone = localStorage.getItem('phone').substr(0,3)+'****'+localStorage.getItem('phone').substr(7,11)
		},
		methods: {}
	}
</script>

<style scoped="scoped">
	#modifyPhone{width: 100%;}
	.tit{text-align: center;width: 100%;color: #787878;padding: 0.5rem 0;}
	.phone{width: 100%;text-align: center;font-size: 0.48rem}
	.btn{width: 1rem;border: 1px solid #D8D8D8;height: 0.5rem;text-align: center;line-height: 0.5rem;background-color: #FFFFFF;margin:0.5rem auto;}
	.btn:active{background-color: #787878;color: #FFFFFF;}
</style>