<template>
	<div id="order">
		<div id="allmap"></div>
		<div class="setUp">
			<p class="setUpT"><span>{{order.name}}</span><span><img src="../../static/image/dtwz.png"/>&nbsp;&nbsp;<i>{{order.km}}</i>km</span></p>
			<p class="setUpC"><span><img src="../../static/image/app.png"/>APP预约</span><span><img src="../../static/image/zxzf.png"/>在线支付</span><span>{{order.price}}元/小时</span></p>
			<p class="setUpB">
				<span>
					<i class="dianB"></i>
					<i>车位总量</i>
					<i style="color: #F68B1B;">{{order.totalNumber}}</i>
				</span>
				<span>
					<i class="dianR"></i>
					<i>预定余量</i>
					<i style="color: red;">{{order.remaining}}</i>
				</span>
			</p>
			<router-link :to="{path:'/orderTwo',query:{id:order.id,price:order.price,name:order.name}}"><div>进入预约</div></router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'order',
		data() {
			return {
				order:{
					name:"越秀维多利中心停车场",
					unitPrice:'5',
					num:'100',
					distance:'0.5',
					surplus:'20'
				}
			}
		},
		methods: {
			
		},
		mounted: function() {
			this.order = this.$route.query
			console.log(this.$route.query)
			document.title=this.$route.meta.title;
			var map = new BMap.Map("allmap");
			map.centerAndZoom(new BMap.Point(Number(sessionStorage.getItem('dLng')), Number(sessionStorage.getItem('dLat'))), 14);
			var p1 = new BMap.Point(Number(sessionStorage.getItem('dLng')), Number(sessionStorage.getItem('dLat')));
			var p2 = new BMap.Point(Number(sessionStorage.getItem('tLng')), Number(sessionStorage.getItem('tLat')));
			var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true}});
			driving.search(p1, p2);
		}
	}
</script>

<style scoped="scoped">
	#order{height: 100%;background: white;}
	#allmap{width: 100%;height: 100%;}
	.setUp{position: absolute;bottom: 0px;z-index: 9;width: 90%;background-color: white;text-align: center;margin:0 5%;border-top-left-radius: 0.2rem;border-top-right-radius: 0.2rem;}
	.setUp div{ border: 1px solid #F68B1B;width: 90%;margin:7px auto;height: 0.88rem;line-height: 0.88rem;font-size: 0.32rem;background-color: #F68B1B;border-radius:8px;color: white;margin-bottom: 30px}
	.setUpT{display: flex;padding: 0.2rem;justify-content: space-between;}
	.setUpT span:nth-of-type(1){font-size: 0.36rem;height: 0.64rem;line-height: 0.76rem;}
	.setUpT span:nth-of-type(2){color: ;font-size: 0.28rem;position: relative;top: 5px;color: #787878;}
	.setUpT span:nth-of-type(2) img{width: 0.2rem;position: relative;top: 3px;}
	
	.setUpC{color: #F68B1B;display: flex;justify-content: space-between;}
	.setUpC img{width: 16px;position: relative;top: 3px;margin-right: 8px;margin-left: 0.2rem;}
	.setUpC span:nth-last-of-type(1){font-size: 0.36rem;margin-right: 0.2rem;}
	.setUpC span:nth-last-of-type(2){margin-right: 0.6rem;}
	
	.setUpB{padding: 0.2rem;text-align: left;font-size: 0.28rem;color: #787878;display: flex;}
	.setUpB span{display: flex;}
	.setUpB span:nth-of-type(2){margin-left: 1rem;}
	.setUpB span i:nth-of-type(3){margin-left: 0.1rem;}
	.dianR,.dianB{width: 0.16rem;height: 0.16rem;display: block;border-radius:50% ;margin: 0.06rem 0;margin-right: 0.1rem;margin-left: 0.05rem;}
	.dianB{background-color: #e94255;}
	.dianR{background-color: #49c58f;}
</style>