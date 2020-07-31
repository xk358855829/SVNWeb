<template>
	<div id="CarTrajectory">
		<div class='titleRight'><div id="allmap"></div></div>
		<div class='titleLeft'>
			<div class='heightTop'>
				<el-tree :data="data" :accordion = "true" node-key="group" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
			</div>
			<div>
				<span>&nbsp;车辆信息：</span>
				<el-input class='time' placeholder="请输入内容" v-model="trajectory.positionerId" :disabled="true"></el-input><br /><br />
				<span>&nbsp;开始时间：</span>
				<el-date-picker class='time'  value-format='yyyy-MM-dd HH:mm:ss' v-model="trajectory.positioneStart" type="datetime" placeholder="选择日期时间"></el-date-picker><br /><br />
				<span>&nbsp;结束时间：</span>
				<el-date-picker class='time'  value-format='yyyy-MM-dd HH:mm:ss' v-model="trajectory.positionereEnd" type="datetime" placeholder="选择日期时间"></el-date-picker><br /><br />
				<el-button type="success" class="oyButton" @click = 'exhibition'>展示轨迹</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	export default {
		name: 'page',
		data () {
		    return {
		    	data: [],
		        defaultProps: {
		        	children: 'children',
		        	label: 'positionerId'
		        },
		    	map:'',
		    	imgRise:'./static/image/rise.png',
		    	imgEnd:'./static/image/end.png',
		    	trajectory:{
		    		positionerId:'',
		    		positioneStart:'',
		    		positionereEnd:''
		    	}
		    }
		},
		mounted:function(){
			this.dataList();
			let that = this;
		  	that.map = new BMap.Map("allmap");
		  	var point = new BMap.Point(120.21937542,30.25924446);
		  	that.map.centerAndZoom(point, 12);
		  	/*that.map.setMapStyle({
				styleJson:[[
	          		{
	                    "featureType": "land",
	                    "elementType": "all",
	                    "stylers": {}
	          		}
				]]
			});*/
			var geolocation = new BMap.Geolocation();
			geolocation.getCurrentPosition(function(r){
				if(this.getStatus() == BMAP_STATUS_SUCCESS){
					that.map.centerAndZoom(r.point, 12);
		  			that.map.enableScrollWheelZoom();
				}
				else {
					alert('failed'+this.getStatus());
				}        
			},{enableHighAccuracy: true})
		  	
		  	document.title=this.$route.meta.title;
			document.getElementById('allmap').style.height = document.body.clientHeight-70+'px'
		},
		methods:{
			exhibition(){
				console.log(this.trajectory)
				this.map.clearOverlays();
				let that = this;
			
				axios({
					method:'post',
					url:this.$store.state.http +'/group/groupByPos',
					data:Qs.stringify(this.trajectory)
				}).then(function(message){
					if(message.data.resCode==0){
						/*console.log(message.data.result)*/
						let list = [];
						for (var i = 0; i < message.data.result.length; i++) {
							message.data.result[i]
							list.push(new BMap.Point(message.data.result[i].longtitude,message.data.result[i].latitude))
						}
						var sym = new BMap.Symbol
				            (
				                BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW, //百度预定义的 箭头方向向下的非闭合箭头
				                {
				                    fillColor : '#ff0000', //设置矢量图标的填充颜色。支持颜色常量字符串、十六进制、RGB、RGBA等格式
				                    fillOpacity : 1, //设置矢量图标填充透明度,范围0~1
				                    scale : 0.5, //设置矢量图标的缩放比例
				                    rotation : 90, //设置矢量图标的旋转角度,参数为角度
				                    strokeColor : '#FFF', //设置矢量图标的线填充颜色,支持颜色常量字符串、十六进制、RGB、RGBA等格式
				                    strokeOpacity : 1, //设置矢量图标线的透明度,opacity范围0~1
				                    strokeWeight : 0, //旋设置线宽。如果此属性没有指定，则线宽跟scale数值相
				                }
				            );
				            /*console.log(list)*/
						let iconSequence = new BMap.IconSequence(sym, '0', '1%', true);
						var polyline = new BMap.Polyline(list, {
							/*strokeStyle:'dashed',*/
							strokeColor:"#00ffcc",
							strokeWeight:10,
							strokeOpacity:1,
							/*icons:[iconSequence]*/
						});
						var imgRise = new BMap.Icon(that.imgRise, new BMap.Size(90,100),{
							imageSize:new BMap.Size(45,50),
							imageOffset:new BMap.Size(22,5)
						});
						var imgEnd = new BMap.Icon(that.imgEnd, new BMap.Size(90,100),{
							imageSize:new BMap.Size(45,50),
							imageOffset:new BMap.Size(22,5)
						});
						var marker1 = new BMap.Marker(list[0],{icon:imgRise});
						var marker2 = new BMap.Marker(list[list.length-1],{icon:imgEnd});
						that.map.addOverlay(marker1);
						that.map.addOverlay(marker2);
						that.map.addOverlay(polyline);
						that.map.panTo(list[0]);
					}
				})
			},
			handleNodeClick(A){
				/*console.log(A)*/
				if(!A.children){
					console.log(A.positionerId)
					this.trajectory.positionerId = A.positionerId;
					this.map.clearOverlays();
				}
			},
			dataList(){
				let that = this;
				axios({
					method:'post',
					url:this.$store.state.http +'/group/groupByCar',
					data:Qs.stringify({
						userId:sessionStorage.getItem('userId')
					})
				}).then(function(message){
					console.log(message.data)
					that.data = message.data.result;
					if(message.data.resCode==0){
						for (var i = 0,len =  message.data.result.length; i < len; i++) {
							that.data[i].positionerId = message.data.result[i].agroup
						}
						console.log(that.data)
					}else{
						that.data = [];
					}
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.el-menu-item{padding: 0;}
	.titleChoice{text-align: center;}
	.titleLeft{min-width: 300px;}
	.titleRight{width: 100%;}
	.el-main{overflow: hidden;}
	#CarTrajectory{width: 100%;height: 100%;display: flex;}
	#allmap{width: 100%;height: 1000px;}
	.heightTop{height: 50%;overflow-y: scroll;}
	.time{width: 200px!important;}
	
</style>