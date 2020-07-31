<template>
	<div id="app">
		<div class="title">
			管理员
		</div>
		<div class="content">
			<router-view/>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				dalist:[{
					'name':'设备列表',
					'str':1
				}, {
					'name':'设备列表',
					'str':0
				}, {
					'name':'设备列表',
					'str':1
				}]
			}
		}
	}
</script>

<style scoped>
	#app {
		height: 100%;
	}
	
	.title {
		width: 100%;
		height: 7%;
		background-color: #cccccc;
	}
	.content{height: 93%;}
</style>