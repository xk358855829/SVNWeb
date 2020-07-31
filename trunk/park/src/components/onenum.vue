<template>
	<div id="serviceList">
		<router-view></router-view>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	export default {
		name: 'equipmentList',
		data() {
			return {
				
			}
		},
		mounted: function() {
			document.title=this.$route.meta.title;
			window.location.href="http://datav.aliyun.com/share/9e8cf5876efeede4430381ce5d565d6b"
		},
		methods: {
		}
	}
</script>

<style scoped="scoped">
	.el-input,.el-select{
		width: 200px;
	}
	#serviceList{padding: 20px;}
	
	/*.textareaWidth{width: 200px;}*/
</style>