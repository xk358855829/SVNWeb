<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	export default {
		name: 'App',
		methods: {},
		mounted:function(){
			document.title=this.$route.meta.title;
			if(!localStorage.getItem('openid')){
				window.location.href = 'http://cloud.sokeed.com/mp/card/error.html'
			}
		}
	}
</script>
<style>
	#app {
		background: #efefef;
	}
</style>