<template>
	<div id="Edistribution">
		<div id="allmap"></div>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	// import iconCar from '../../../static/image/xxx.png'; //以import的方式导入图片文件
	export default {
		name: 'equipmentList',
		data() {
			return {
				opts:{
					width: 250, // 信息窗口宽度
					height: 80, // 信息窗口高度
					title: "信息窗口", // 信息窗口标题
					enableMessage: true //设置允许信息窗发送短息
				}
			}
		},
		mounted: function() {
			document.title=this.$route.meta.title;
			document.getElementById('allmap').style.height = document.body.clientHeight-70+'px';
			let that = this;
		  	that.map = new BMap.Map("allmap");
		  	that.map.setMapStyle({
				styleJson:[{
				    "featureType": "land",
				    "elementType": "all",
				    "stylers": {
				        "color": "#ccccccff",
				        "hue": "#000000"
					}
				},{
				    "featureType": "boundary",
				    "elementType": "geometry.fill",
				    "stylers": {
				    	"color": "#999999ff"
				    }
				}]
			});
		  	let point = new BMap.Point(120.21937542,30.25924446);
		  	that.map.centerAndZoom(point, 5);
		  	that.map.enableScrollWheelZoom();
		  	let maxList = [
			  		{lng:120.070056,lat:30.306974},
			  		{lng:120.175266,lat:30.316951},
			  		{lng:120.108576,lat:30.265061},
			  		{lng:120.336817,lat:30.277038},
			  		{lng:120.399483,lat:30.077226},
			  		{lng:119.968296,lat:30.075225},
			  		{lng:120.415006,lat:30.427625},
			  		{lng:120.353491,lat:30.034713},
			  		{lng:120.242756,lat:30.233141},
			  		{lng:120.157669,lat:30.076753},
			  		{lng:119.702335,lat:30.026735},
			  		{lng:120.153069,lat:30.515801},
			  		
			  		{lng:116.254877,lat:39.948194},
			  		{lng:116.212908,lat:39.968104},
			  		{lng:116.375611,lat:40.04636},
			  		{lng:116.535436,lat:39.825508},
			  		{lng:116.227856,lat:39.843238},
			  		{lng:116.411829,lat:39.745666},
			  		{lng:116.552684,lat:39.813538},
			  		{lng:116.677441,lat:39.956159},
			  		{lng:115.960521,lat:39.957044},
			  		{lng:116.626848,lat:39.751879},
			  		
			  		{lng:120.743239,lat:28.061295},
			  		{lng:120.557541,lat:28.044463},
			  		{lng:120.468429,lat:27.952604},
			  		{lng:120.754162,lat:27.921457},
			  		{lng:120.822577,lat:28.017424},
			  		{lng:120.644353,lat:28.131145},
			  		{lng:120.980104,lat:28.005688},
			  		{lng:120.470729,lat:27.995481},
			  		{lng:120.424161,lat:27.834604},
			  		{lng:120.196494,lat:28.445155},
			  		
			  		
			  		{lng:106.327774,lat:29.336508},
			  		{lng:106.604883,lat:29.478474},
			  		{lng:106.654326,lat:29.417081},
			  		{lng:106.658351,lat:29.437717},
			  		{lng:106.842323,lat:29.309804},
			  		{lng:106.169097,lat:29.294685},
			  		{lng:106.079411,lat:29.526255},
			  		{lng:106.349621,lat:29.340538},
			  		{lng:106.202442,lat:29.312827},
			  		
			  		{lng:113.450825,lat:34.721688},
			  		{lng:113.885462,lat:34.792865},
			  		{lng:113.567533,lat:34.814681},
			  		{lng:113.716436,lat:34.844073},
			  		{lng:113.738858,lat:34.857818},
			  		{lng:113.894085,lat:34.740200},
			  		{lng:113.906159,lat:34.620036},
			  		{lng:113.397933,lat:34.603874},
			  		{lng:113.871089,lat:34.750641},
			  		{lng:113.539937,lat:34.868244},
			  		{lng:113.723911,lat:34.872982},
			  		{lng:113.891786,lat:34.675628},
			  		{lng:113.418631,lat:34.839333},
		  		];
		  	let MAX = maxList.length;
			let markers = [];
			let pt = null;
			let i = 0;
			for (; i < MAX; i++) {
				pt = new BMap.Point(maxList[i].lng, maxList[i].lat);
				let marker = new BMap.Marker(pt);
				const deviceSize = new BMap.Size(16,26);
				const deviceIcon = new BMap.Icon(iconCar, deviceSize, { //会以base64的方式传参iconCar
					imageSize: deviceSize
				});

				marker = new BMap.Marker(pt, {
					icon: deviceIcon
				})
				that.addClickHandler('lng:'+maxList[i].lng+'<br/>'+'lat:'+maxList[i].lat, marker); //添加点击事件
				markers.push(marker);
			}
			//最简单的用法，生成一个marker数组，然后调用markerClusterer类即可。
			let markerClusterer = new BMapLib.MarkerClusterer(that.map, {markers:markers});
		  	
		},
		methods: {
			addClickHandler(content, marker) {
				let that = this;
				marker.addEventListener("click", function(e) {
					that.openInfo(content, e)
				});
			},
			openInfo(content, e) {
				let p = e.target;
				let point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
				let infoWindow = new BMap.InfoWindow(content, this.opts); // 创建信息窗口对象 
				this.map.openInfoWindow(infoWindow, point); //开启信息窗口
			}
		}
	}
</script>

<style scoped="scoped">
	
	/*.textareaWidth{width: 200px;}*/
</style>