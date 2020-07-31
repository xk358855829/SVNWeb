<template>
	<div id="list">
		<div class="content">
			<div class="left">
				<ul>
					<router-link v-for="da in dalist" :to="{path:'/'+da.url, append:'true'}"><li v-if="da.str == 1">{{da.name}}</li></router-link>
				</ul>
			</div>
			<div class="right">
				<router-view/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'list',
		data() {
			return {
				dalist: [{
					'name': '添加停车场',
					'str': 1,
					'url':'deviceList'
				}, {
					'name': '添加停车场设备',
					'str': 1,
					'url':'addDevice'
				}]
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#list {
		height: 100%;
	}
	
	.content {
		height: 100%;
		display: flex;
	}
	
	.left {
		width: 180px;
		background-color: #eeeeee;
		height: 100%;
		margin: 0;
	}
	li{
		height: 44px;
		line-height: 44px;
		background-color: rgba(0,0,0,0.5);
		border-bottom: 1px solid #000;
	}
	.right {
		margin: 0;
		background-color: #42B983;
		width: 100%;
	}
	a{text-decoration: none;color:white;}
</style>