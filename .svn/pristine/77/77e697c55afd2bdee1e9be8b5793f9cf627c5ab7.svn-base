<template>
	<div id="homePage">
		<div id="allmap"></div>
		<div id="select">
			<el-select v-model="value" placeholder="请选择" v-on:change="change()">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>
			<router-link to='test'><button class="test">测试</button></router-link>
		</div>
		<div id="button">
			<button  @click="open">立即开锁</button>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<button v-if='enclosure==1' @click="enclosureOpen">电子围栏外</button>
			<button v-if='enclosure==0' @click="enclosureClose">电子围栏内</button>
			<p v-if='enclosure==1'>当前锁处于电子围栏外，无法关锁</p>
			<p v-if='enclosure==0'>当前锁处于电子围栏内，可以锁上</p>
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	export default {
		name:'homePage',
		data() {
			return {
				icon:'./static/image/redBike.png',
				myIcon:'./static/image/my.png',
				kbTu:'./static/image/kbTu.png',
				enclosure:0,
		        options: [{
		          value: 'F262FEAA02CD',
		          label: 'F262FEAA02CD'
		        }, {
		          value: 'EB9FB85CB31C',
		          label: 'EB9FB85CB31C'
		        }, {
		          value: 'C9F703ECF51F',
		          label: 'C9F703ECF51F'
		        }, {
		          value: 'D3F7AC3F2A23',
		          label: 'D3F7AC3F2A23'
		        }],
		        value: 'F262FEAA02CD'
			}
		},
		methods:{
			change(){
				let that = this;
				axios({
					method:'post',
					url:'http://39.104.99.181:8055/fence/find',
					data: Qs.stringify({
						macId:this.value
					})
				}).then(function(message){
					console.log(message.data)
					that.enclosure = message.data.RESULT;
				})
			},
			enclosureOpen(){
				let that = this;
				axios({
					method:'post',
					url:'http://39.104.99.181:8055/fence/open',
					data: Qs.stringify({
						macId:this.value
					})
				}).then(function(message) {
					console.log(message.data);
					that.enclosure = 0;
				})
			},
			enclosureClose(){
				let that = this;
				axios({
					method:'post',
					url:'http://39.104.99.181:8055/fence/close',
					data: Qs.stringify({
						macId:this.value
					})
				}).then(function(message) {
					console.log(message.data);
					that.enclosure = 1;
				})
			},
			open(){
				axios({
					method:'post',
					url:'http://39.104.99.181:8055/control/up',
					data: Qs.stringify({
						macid:this.value,
						phone:'15770831539'
					})
				}).then(function(message) {
					console.log(message.data)
				})
			},
			_touchstart(){
				document.getElementsByTagName('button')[0].style.backgroundColor = '#ff2323';
			},
			_touchend(){
				document.getElementsByTagName('button')[0].style.backgroundColor = '#ff4646';
				this.open();
			}
		},
		mounted:function(){
			let that = this;
			document.body.addEventListener('touchstart', function () {});
			document.title=this.$route.meta.title;
			var map = new BMap.Map("allmap");
			var geolocation = new BMap.Geolocation();
			var Icon = new BMap.Icon(this.icon, new BMap.Size(30,30));
			var myIcon = new BMap.Icon(this.myIcon, new BMap.Size(44,44));
			var kbTu = new BMap.Icon(this.kbTu, new BMap.Size(5,5));
		    geolocation.getCurrentPosition(function(r){
		        if(this.getStatus() == BMAP_STATUS_SUCCESS){
		        	//console.log(r.point)
		        	var point = new BMap.Point(r.point.lng,r.point.lat);
					map.centerAndZoom(point, 15);
		            var mk = new BMap.Marker(point,{icon:myIcon});
		            var circle = new BMap.Circle(point,800,{
		            	strokeColor : "rgba(0,0,0,0.3)",
		            	strokeWeight : 1,
						fillColor : "rgba(0,0,0,0.3)",
						fillOpacity : 0.6
		            });

					map.addOverlay(circle);//增加圆
		            map.addOverlay(mk);//增加我的位置

		            var bounds = map.getBounds();//获取当前窗口范围
					var sw = bounds.getSouthWest();
					var ne = bounds.getNorthEast();
					var lngSpan = Math.abs(sw.lng - ne.lng);
					var latSpan = Math.abs(ne.lat - sw.lat);
					let pointArr = [];
					for (var i = 0; i < 25; i ++) {
						var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
						pointArr.push(new BMap.Point(point.lng,point.lat))
						
						var marker2 = new BMap.Marker(point,{icon:Icon});//创建标注
						marker2.addEventListener("click",attribute);
						map.addOverlay(marker2);//将标注添加到地图中
					}
		        }
		        else {
		            alert('failed'+this.getStatus());
		        }
		    },{enableHighAccuracy: true})
		    function attribute(){
		    	var p = this.getPosition();
				console.log(p)
			}
		    this.change();
		}
	}
</script>
<style scoped>
	#homePage{width: 100%;height: 100%;}
	#allmap{width: 100%;height: 100%;}
	#button{position: absolute;bottom:1rem;width: 100%;text-align: center;
				-webkit-touch-callout:none;
				-webkit-user-select:none;
				-khtml-user-select:none;
				-moz-user-select:none;
				-ms-user-select:none;
				user-select:none;
			}
	#button>button{letter-spacing:2px; border: none; background-color: #ff4646;width: 3rem;height: 1rem;border-radius:0.5rem ;font-size: 0.36rem;color: #FFFFFF;line-height: 1rem;margin: auto;box-shadow: 0px 2px 5px #787878;}
	#button>button:active{background-color: #787878;}
	#select{position: absolute;top: 0;left: 0;}
	.test{height: 0.75rem;width: 2rem;border: none;background-color: #f56c6c;color: #FFFFFF;box-shadow: 0px 2px 5px #787878;}
	.test:active{background-color: #787878;}
	p{background-color: #FFFFFF;font-weight: 900;padding: 10px 0;font-size: 16px;}
</style>