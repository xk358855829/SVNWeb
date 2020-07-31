<template>
	<div id="control">
		<div id="exhibition">
			<div class="picture">
				<img v-if="swith==1" src="../../static/image/swith_1.png" />
				<img v-else-if="swith==2" src="../../static/image/swith_2.png" />
				<img v-else src="../../static/image/swith_3.png" />
			</div>
			<div class="electricity">
				<div class="electricityF">
					<div class="electricityS"></div>
					<div class="electricityV">剩余电量<span>&nbsp;<img v-if="type==''" src="../../static/image/loading.gif"/><span v-else>{{type}}%</span></span></div>
				</div>
			</div>
			<div class="prompt">
				<div class="promptVal">{{prompt}}&nbsp;<img v-if="prompt=='获取状态中'" src="../../static/image/loading.gif"/></div>
			</div>
		</div>
		<div id="operation">
			<div class="operationF">
				<div class="operationT">
					<div v-if="onoffline==1&&data==1" class="operationBtn">
						<img class="index-active1" @touchstart.prevent ="query($event)" @touchend='rise($event)' src="../../static/image/control.png"/>
						<p class="index-active4">升起</p>
					</div>
					<div v-else class="operationBtn">
						<img @touchstart.prevent ="query($event)" @touchend='rise($event)' src="../../static/image/control.png"/>
						<p>升起</p>
					</div>
					<div class="y"></div>
					<div v-if="onoffline==1&&data==0" class="operationBtn">
						<img class="index-active1" @touchstart.prevent ="query($event)" @touchend='drop($event)' src="../../static/image/control.png"/>
						<p class="index-active4">降下</p>
					</div>
					<div v-else class="operationBtn">
						<img @touchstart.prevent ="query($event)" @touchend='drop($event)' src="../../static/image/control.png"/>
						<p>降下</p>
					</div>
				</div>
				<div class="x"></div>
				<div class="operationB">
					<div v-if="onoffline==0" class="operationBtn">
						<img @touchstart.prevent ="query($event)" @touchend='seek($event)' src="../../static/image/Seek.png"/>
						<p>寻车位</p>
					</div>
					<div v-else class="operationBtn">
						<img class="index-active1" @touchstart.prevent ="query($event)" @touchend='seek($event)' src="../../static/image/Seek.png"/>
						<p class="index-active4">寻车位</p>
					</div>
					<div class="y"></div>
					<div class="operationBtn">
						<img class="index-active1" @touchstart.prevent ="query($event)" @touchend='queryend($event)' src="../../static/image/query.png"/>
						<p class="index-active4">查询</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	export default {
		name: 'control',
		data() {
			return {
				id: '',
				swith: 3,
				type: '100',
				data:'',
				onoffline:'0',
				prompt:'',
				timer:'',
				time:0
			}
		},
		methods: {
			queryStateUp(){
				let that = this;
				if(that.time>=5&&that.time<30){
					that.prompt= '获取状态中';
					that.$http({
						method: 'post',
						url: 'http://39.104.99.181:8073/state/date',
						data: Qs.stringify({
							id: that.id
						})
					}).then(function(message){
						if(message.data.date==1){
							console.log(message.data)
							that.data=message.data.date;
							that.type=100//message.data.type;
							that.onoffline=message.data.onoffline?message.data.onoffline:'0';
							that.swith=that.data==1?0:1;
							that.prompt= '操作成功'
							clearInterval(that.timer)
						}
					})
				}else if(that.time>=30){
					that.prompt= '操作失败'
					clearInterval(that.timer)
					that.$http({
						method: 'post',
						url: 'http://39.104.99.181:8073/state/date',
						data: Qs.stringify({
							id: that.id
						})
					}).then(function(message){
						if(message.data.date==0){
							console.log(message.data)
							that.data=message.data.date;
							that.type=100//message.data.type;
							that.onoffline=message.data.onoffline?message.data.onoffline:'0';
							that.swith=that.data==1?0:1;
							clearInterval(that.timer)
						}
					})
				}else{
					that.$http({
						method: 'post',
						url: 'http://39.104.99.181:8073/state/date',
						data: Qs.stringify({
							id: that.id
						})
					}).then(function(message){
						if(message.data.date==1){
							console.log(message.data)
							that.data=message.data.date;
							that.type=100//message.data.type;
							that.onoffline=message.data.onoffline?message.data.onoffline:'0';
							that.swith=that.data==1?0:1;
							that.prompt= '操作成功'
							clearInterval(that.timer)
						}
					})
				}
			},
			queryStateDown(){
				let that = this;
				if(that.time>=5&&that.time<30){
					that.prompt= '获取状态中';
					that.$http({
						method: 'post',
						url: 'http://39.104.99.181:8073/state/date',
						data: Qs.stringify({
							id: that.id
						})
					}).then(function(message){
						if(message.data.date==0){
							console.log(message.data)
							that.data=message.data.date;
							that.type=100//message.data.type;
							that.onoffline=message.data.onoffline?message.data.onoffline:'0';
							that.swith=that.data==1?0:1;
							that.prompt= '操作成功'
							clearInterval(that.timer)
						}
					})
				}else if(that.time>=30){
					that.prompt= '操作失败'
					clearInterval(that.timer)
					that.$http({
						method: 'post',
						url: 'http://39.104.99.181:8073/state/date',
						data: Qs.stringify({
							id: that.id
						})
					}).then(function(message){
						if(message.data.date==1){
							console.log(message.data)
							that.data=message.data.date;
							that.type=100//message.data.type;
							that.onoffline=message.data.onoffline?message.data.onoffline:'0';
							that.swith=that.data==1?0:1;
							that.prompt= '操作成功'
							clearInterval(that.timer)
						}
					})
				}else{
					that.$http({
						method: 'post',
						url: 'http://39.104.99.181:8073/state/date',
						data: Qs.stringify({
							id: that.id
						})
					}).then(function(message){
						if(message.data.date==0){
							console.log(message.data)
							that.data=message.data.date;
							that.type=100//message.data.type;
							that.onoffline=message.data.onoffline?message.data.onoffline:'0';
							that.swith=that.data==1?0:1;
							that.prompt= '操作成功'
							clearInterval(that.timer)
						}
					})
				}
			},
			query($event) {
				$event.target.classList.add('index-active2')
			},
			queryend($event) {
				$event.target.classList.remove('index-active2')
				/*this.$router.push({path:'/demo1'});*/
			},
			rise($event) {
				$event.target.classList.remove('index-active2')
				let that = this;
				if(that.data==1){
					that.data=2;
					that.swith=2;
					that.prompt = '上升中...';
					this.$http({
						method: 'post',
						url: 'http://39.104.99.181:8073/car/parking',
						data: Qs.stringify({
							id: this.id,
							str:'0'
						})
					}).then(function(message){
						if(message.data.resCode==200){
							console.log('上升')
							that.time = 0;
							that.timer = setInterval(function(){
								that.time++;
								that.queryStateDown()
							},1000)
						}
					})
				}
			},
			drop($event) {
				$event.target.classList.remove('index-active2')
				let that = this;
				if(that.data==0){
					that.data=2;
					that.swith=2;
					that.prompt = '下降中...';
					this.$http({
						method: 'post',
						url: 'http://39.104.99.181:8073/car/parking',
						data: Qs.stringify({
							id: this.id,
							str:'1'
						})
					}).then(function(message){
						if(message.data.resCode==200){
							console.log('下降')
							that.time = 0;
							that.timer = setInterval(function(){
								that.time++;
								that.queryStateUp()
							},1000)
						}
					})
				}
			},
			seek($event) {
				$event.target.classList.remove('index-active2')
				
				this.$http({
					method: 'post',
					url: 'http://39.104.99.181:8073/car/parking',
					data: Qs.stringify({
						id: this.id,
						str:'2'
					})
				}).then(function(message){
					if(message.data.resCode==200){
						console.log('ok')
					}
				})
			}
		},
		mounted: function() {
			document.title=this.$route.meta.title;
			let that = this;
			this.id = this.$route.query.id;
			that.$http({
				method: 'post',
				url: 'http://39.104.99.181:8073/state/date',
				data: Qs.stringify({
					id: that.id
				})
			}).then(function(message){
				console.log(message.data)
				that.data=message.data.date;
				that.type=message.data.type;
				that.onoffline=message.data.onoffline?message.data.onoffline:'0';
				that.swith=that.data==1?0:1;
			})
		}
	}
</script>

<style>
	#control {
		height: 100%;
		text-align: center;
	}
	
	#exhibition {
		height: 58%;
		width: 100%;
		background: -webkit-linear-gradient(#f2bc61, #f59326);
		background: -o-linear-gradient(#f2bc61, #f59326);
		background: -moz-linear-gradient(#f2bc61, #f59326);
		background: linear-gradient(#f2bc61, #f59326);
	}
	
	.picture img {
		width: 50%;
		margin-top: 10%;
	}
	
	.electricity {
		width: 100%;
		text-align: center;
		position: relative;
	}
	
	.electricityF {
		margin: 5% auto 10%;
		padding: 1px;
		border: 1px solid #ffffff;
		width: 150px;
		height: 7px;
		border-radius: 7px;
		color: #FFFFFF;
		font-size: 14px;
		top: 15px;
	}
	
	.promptVal {
		color: #fff;
		padding-top: 10px;
		font-size: 14px;
	}
	
	.electricityV {
		font-size: 14px;
	}
	
	.electricityS {
		background-color: #FFFFFF;
		width: 100%;
		height: 7px;
		border-radius: 7px;
		margin-bottom: 10px;
	}
	
	#operation {
		display: flex;
		flex-wrap: wrap;
		height: 42%;
	}
	.operationF{margin:5% 10%;width: 100%;}
	.operationT,.operationB{display: flex;width: 100%;height: 50%;}
	.x{width: 100%;height: 1px;background-color: #D8D8D8;}
	.y{width: 1PX;height: 100%;background-color: #D8D8D8;}
	.operationBtn{width: 50%;height: 100%;}
	.operationBtn img{width: 55px;margin-top: 10px;border-radius: 50%;}
	.operationBtn p{font-size: 16px;line-height: 32px;color: #666666;}
	.operationT .operationBtn:nth-of-type(1) img{
		transform: rotate(180deg);
		-ms-transform: rotate(180deg);
		-moz-transform: rotate(180deg);
		-webkit-transform: rotate(180deg);
		-o-transform: rotate(180deg);
	}
	
	


	.index-active1 {
		background: -webkit-linear-gradient(#f68c1c, #f2bc60);
		background: -o-linear-gradient(#f68c1c, #f2bc60);
		background: -moz-linear-gradient(#f68c1c, #f2bc60);
		background: linear-gradient(#f68c1c, #f2bc60);
	}
	
	.index-active2 {
		box-shadow: 0px 0px 25px #f59326;
	}
	
	.index-active3 {
		box-shadow: 0px 0px 25px #f59326;
		background: -webkit-linear-gradient(#f68c1c, #f2bc60);
		background: -o-linear-gradient(#f68c1c, #f2bc60);
		background: -moz-linear-gradient(#f68c1c, #f2bc60);
		background: linear-gradient(#f68c1c, #f2bc60);
	}
	
	.index-active4 {
		color: #F68B1B!important;
	}
</style>