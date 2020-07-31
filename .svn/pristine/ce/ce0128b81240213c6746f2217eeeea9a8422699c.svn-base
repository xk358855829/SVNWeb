<template>
	<div id="Edistribution">
		<div id="allmap"></div>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	import {searchClicks} from '../api/api.js'
	import iconCar from '../../../static/image/xxx.png'; //以import的方式导入图片文件
	import {wgs84togcj02} from '../../../common/common.js'
	export default {
		name: 'equipmentList',
		data() {
			return {
				// opts:{
				// 	width: 250, // 信息窗口宽度
				// 	height: 80, // 信息窗口高度
				// 	title: "信息窗口", // 信息窗口标题
				// 	enableMessage: true //设置允许信息窗发送短息
				// },
				mapchangelist:[],
				maxLists:[],
				con:{
					devVOL:'',
					waterMeter:'',
					waterTemperature:'',
					devDefence:'',
					devUnlockWay:'',
					devLockState:'',
					waterMeterTotal:'',
					waterMeterTemp:'',
					devHardVerison:'',
					waterPressure:'',
					devSoftVerison:'',
					devParaSn:'',
					devWarning:'',
					devIccid:'',
					devLongitude:'',
					devStatus:'',
					devLatitude:'',
					devUnlockTime:'',
					waterMeterTrip:''
				},
				ying:''
			}
		},
		mounted: function() {
			document.title=this.$route.meta.title;
			document.getElementById('allmap').style.height = document.body.clientHeight-70+'px';
			let that = this
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
			  let dealer=sessionStorage.getItem("dealer");
			  if(dealer==0){
					dealer=sessionStorage.getItem('orderDealers')
				}
			  let data={
			  	pageNum:1,
			  	pageSize:100000,
			  	userId:sessionStorage.getItem('userId'),
			  	dealer:dealer
			  }
			axios({
				method:"post",
				url:'http://39.104.113.112:8796/devices/conditionFind',
				data:Qs.stringify(data)
			}).then(function(message){
                console.log(message);
                if(message.data.resCode==0){
                	var  maxList=[];
                	for (let i = 0; i < message.data.result.length; i++) {
                		console.log(message.data.result[i].deviceId);
                		let deviceId=message.data.result[i].deviceId;
                		axios({
							method:'post',
							url:'http://39.104.113.112:8796/Datapoints/getData',
							data:Qs.stringify({
								devId:message.data.result[i].deviceId
							})
						}).then(function(message){
							console.log(message)
							let messData=message.data.errMsg
							if(message.data.resCode==0){
								let lat='';
								let lng='';
									let obj={};
								for(let j=0;j<messData.data.datastreams.length;j++){
									// if(messData.data.datastreams[j].id=="2002"){
									// 	if(messData.data.datastreams[j].datapoints[0].value/100000==''||messData.data.datastreams[j].datapoints[0].value/100000==0){
									// 		lat=30.2693046269
									// 	}
									// }
									if(messData.data.datastreams[j].id=="2002"){
										lat=messData.data.datastreams[j].datapoints[0].value/100000
										// if(lat==0||lat==''){
										// 	lat=30.2693046269
										// }
									}
									// if(messData.data.datastreams[j].id=="2002"){
									// 	if(messData.data.datastreams[j].datapoints[0].value/100000==''||messData.data.datastreams[j].datapoints[0].value/100000==0){
									// 		lng=120.2282128307
									// 	}
									// }
									if(messData.data.datastreams[j].id=="2003"){
										lng=messData.data.datastreams[j].datapoints[0].value/100000
										// if(lng==0||lng==''){
										// 	lng=120.2282128307
										// }
									}
								}
								that.mapchangelist=wgs84togcj02(lng,lat)
								obj.lat=that.mapchangelist[1];
								obj.lng=that.mapchangelist[0];
								if(obj.lat==0.008728984041221487||obj.lng==0.02200129584349762){
									obj.lat=30.2693046269
									obj.lng=120.2282128307
								}
								obj.id=deviceId;

                                    //Vue.set(maxList,i,obj);
									 maxList.push(obj)
									console.log(obj);
									console.log(maxList);
                            }
                                    console.log(maxList);
									let MAX = maxList.length;
									let markers = [];
									let pt = null;
									for (let i = 0; i < MAX; i++) {
										pt = new BMap.Point(maxList[i].lng, maxList[i].lat);
										let marker = new BMap.Marker(pt);
										const deviceSize = new BMap.Size(16,26);
										const deviceIcon = new BMap.Icon(iconCar, deviceSize, { //会以base64的方式传参iconCar
											imageSize: deviceSize
										});
										marker = new BMap.Marker(pt, {
											icon: deviceIcon
										})
										console.log(maxList[i].id)
										// that.dispose(maxList[i].id)
										that.addClickHandler('设备编号:'+maxList[i].id, marker);
										// that.addClickHandler('id:'+maxList[i].id+'<br/>'+'devVOL:'+that.con.devVOL, marker); 
										markers.push(marker);
									}
									//最简单的用法，生成一个marker数组，然后调用markerClusterer类即可。
									let markerClusterer = new BMapLib.MarkerClusterer(that.map, {markers:markers});											
							})
					}
				}else{
					
				}
			})
		  	
		},
		methods: {
			addClickHandler(idclose, marker) {
				let that = this;
				marker.addEventListener("click", function(e) {
					console.log(e.target)
					that.openInfo(idclose,e)
				});
			},
			openInfo(idclose,e) {
				console.log(idclose.slice(5,idclose.length))
				let that=this;
				axios({
					method:'post',
					url:that.$store.state.http+'/devices/findsn',
					data:Qs.stringify({
						devId:idclose.slice(5,idclose.length)
					})
				}).then(function(message){
					console.log(message)
					if(message.data.resCode==0){
						if(message.data.i.devParaSn==''){
							that.ying='无'
						}else{
							that.ying=message.data.i.devParaSn
						}
					}else{
						
					}
				})
				console.log(that.ying)
				searchClicks('/Datapoints/getData',{devId:idclose.slice(5,idclose.length)}).then(res=>{
					let messData=JSON.parse((res.data.errMsg).slice(6))
					console.log(messData)
					 for(let i=0;i<messData.data.datastreams.length;i++){
						console.log(messData.data.datastreams[i].id);
                         switch (messData.data.datastreams[i].id){
							 case '2001':that.con.devVOL=messData.data.datastreams[i].datapoints[0].value
							 			that.con.devVOL=that.con.devVOL+'mv'
							 break;
							 case '2011':that.con.devWarning=messData.data.datastreams[i].datapoints[0].value
							 break;
							 case '2010':that.con.devDefence=messData.data.datastreams[i].datapoints[0].value;
							 break;
							 case '2009':that.con.devUnlockWay=messData.data.datastreams[i].datapoints[0].value;
										 that.con.devUnlockTime=messData.data.datastreams[i].datapoints[0].at;
							 break;
							 case '2008':that.con.devLockState=messData.data.datastreams[i].datapoints[0].value
							 break;
							 case '2007':that.con.waterMeterTotal=messData.data.datastreams[i].datapoints[0].value
							 break;
							 case '1005':that.con.devHardVerison=messData.data.datastreams[i].datapoints[0].value
							 break;
							 case '2013':that.con.waterMeterTrip=messData.data.datastreams[i].datapoints[0].value
							 			that.con.waterMeterTrip=that.con.waterMeterTrip+'m³'
							 break;
							 case '2006':that.con.waterMeterTemp=messData.data.datastreams[i].datapoints[0].value
							 			that.con.waterMeterTemp=that.con.waterMeterTemp+'m³'
							 break;
							 case '1004':that.con.devSoftVerison=messData.data.datastreams[i].datapoints[0].value
							 break;
							 case '2005':that.con.waterPressure=messData.data.datastreams[i].datapoints[0].value
							 			that.con.waterPressure=that.con.waterPressure+'MPa'
							 break;
							 case '2004':that.con.waterTemperature=(messData.data.datastreams[i].datapoints[0].value)/10
							 			that.con.waterTemperature=that.con.waterTemperature+'℃'
							 break;
							 case '1002':that.con.devIccid=messData.data.datastreams[i].datapoints[0].value
							 break;
							 case '2003':that.con.devLongitude=messData.data.datastreams[i].datapoints[0].value;
										 that.con.devLongitude=that.con.devLongitude+'°'
										 
							 break;
							 case '1001':that.con.devStatus=messData.data.datastreams[i].datapoints[0].value
							 break;
							 case '2002':that.con.devLatitude=messData.data.datastreams[i].datapoints[0].value;
										 that.con.devLatitude=that.con.devLatitude+'°'
										  
							 break;
							 default:break;
						 }
					}
					
					if(that.con.devVOL>3550&&that.con.devVOL<4200){
						that.con.devVOL='正常'
					}else if(that.con.devVOL>3500&&that.con.devVOL<=3550){
						that.con.devVOL='低压'
					}else if(that.con.devVOL>3000&&that.con.devVOL<=3500){
						that.con.devVOL='更换电池'
					}else{
						that.con.devVOL='电量异常'
					}
					
					if(that.con.devStatus==17){
						that.con.devStatus='异常'
					}else{
						that.con.devStatus='正常'
					}
					 if(that.con.devLockState==17){
						that.con.devLockState='开启';
						that.value2=true;
					}else{
						that.con.devLockState='关闭'
						that.value2=false;
					}
					if(that.con.devDefence==17){
						that.con.devDefence='未布防'
						that.value3=true
					}else{
						that.con.devDefence='已布防'
						that.value3=false
					}
					
					if(that.con.devUnlockWay==17){
						that.con.devUnlockWay='IC卡'
					}else if(that.con.devUnlockWay==18){
						that.con.devUnlockWay='手机'
					}else if(that.con.devUnlockWay==20){
						that.con.devUnlockWay='应急开锁'
					}else{
						that.con.devUnlockWay='未激活'
					}

					if(that.con.devLockState==0x11){
						that.con.devLockState='倾斜报警'
					}
					if(that.con.devDefence==0x21){
						that.con.devDefence='温度压力传感器异常'
					}
					if(that.con.devDefence==0x24){
						that.con.devDefence='压力传感器初始化失败'
					}
					console.log(that.con.devUnlockWay)
					let p = e.target;
				
					var opts={
						width: 620,
						height: 240,
						// title:"<div class='totals'><div class='lefts'>"
						// +"<p>设备电量："+that.con.devVOL+"</p>"
						// +"<p>设备SN码："+that.ying+"</p>"
						// +"<p>流量卡号："+that.con.devIccid+"</p>"
						// +"<p>锁的状态："+that.con.devLockState+"</p>"
						// +"<p>设备经度："+that.con.devLongitude+"</p>"
						// +"<p>设备纬度："+that.con.devLatitude+"</p>"
						// +"<p>是否布放："+that.con.devDefence+"</p>"
						// +"</div><div class='rights'>"
						// +"<p>设备状态："+that.con.devStatus+"</p>"
						// +"<p>设备水温："+that.con.waterTemperature+"</p>"
						// +"<p>流量水压："+that.con.waterPressure+"</p>"
						// +"<p>结算流量："+that.con.waterMeterTrip+"</p>"
						// +"<p>瞬间流量："+that.con.waterMeterTemp+"</p>"
						// +"<p>硬件版本："+that.con.devHardVerison+"</p>"
						// +"<p>软件版本："+that.con.devSoftVerison+"</p>"
						// +"</div></div>"
						title:"<table border='1' style='border:1px solid #e6e6e6;margin-top:20px'>"
						+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery.png' alt=''>设备电量</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.devVOL+"</td>"
						+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (13).png' alt=''>设备SN码</td><td style='width:200px;height:25px;line-height:25px;'>"+that.ying+"</td></tr>"
						+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (4).png' alt=''>流量卡号</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.devIccid+"</td>"
						+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (2).png' alt=''>锁的状态</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.devLockState+"</td></tr>"
						+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (3).png' alt=''>设备经度</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.devLongitude+"</td>"
						+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (10).png' alt=''>设备纬度</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.devLatitude+"</td></tr>"
						+"<tr><td><img src='./static/image/icon/battery (14).png' alt=''>是否布放</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.devDefence+"</td>"
						+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (6).png' alt=''>设备状态</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.devStatus+"</td></tr>"
						+"<tr><td><img src='./static/image/icon/battery (7).png' alt=''>设备水温</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.waterTemperature+"</td>"
						+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (8).png' alt=''>流量水压</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.waterPressure+"</td></tr>"
						+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (12).png' alt=''>结算流量</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.waterMeterTrip+"</td>"
						+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (9).png' alt=''>瞬间流量</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.waterMeterTemp+"</td></tr>"
						+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (11).png' alt=''>硬件版本</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.devHardVerison+"</td>"
						+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (5).png' alt=''>软件版本</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.devSoftVerison+"</td></tr>"
						+"</table>"
					}
					let point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
					let infoWindow = new BMap.InfoWindow(idclose, opts); // 创建信息窗口对象 
					this.map.openInfoWindow(infoWindow, point); //开启信息窗口
				})
				
			}
		}
	}
</script>

<style scoped="scoped">
	/* .totals{width: 400px;height: 300px;border: 1px solid red;}
	.totals .lefts{width: 50%;height: 200px;display: inline-block;}
	.totals .rights{width: 50%;height: 200px;display: inline-block;} */
	/*.textareaWidth{width: 200px;}*/
</style>