<template>
	<div id="carMonitor">
		<div class='titleRight'><div id="allmap" v-if="poli==0"></div><div id="maps" v-if="poli==1"></div></div>
		<div class='titleLeft'>
			<!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="#ccc" active-text-color="#67C23A">
				<el-row>
					<el-col class='titleChoice' :span="8"><el-menu-item index="1">全部</el-menu-item></el-col>
					<el-col class='titleChoice' :span="8"><el-menu-item index="2">在线</el-menu-item></el-col>
					<el-col class='titleChoice' :span="8"><el-menu-item index="3">离线</el-menu-item></el-col>
				 </el-row>
			</el-menu> -->
			<!-- <el-tree v-if="activeIndex == 1" :data="data1" show-checkbox node-key="group" :props="defaultProps" @check="handleNodeClick"></el-tree>
			<el-tree v-if="activeIndex == 2" :data="data2" show-checkbox node-key="group" :props="defaultProps" @check="handleNodeClick"></el-tree>
			<el-tree v-if="activeIndex == 3" :data="data3" show-checkbox node-key="group" :props="defaultProps" @check="handleNodeClick"></el-tree> -->
			<el-input class='oYinp' v-model="inputDev" clearable placeholder="请输入查询的设备编号"></el-input>
			<el-button class="oyButton" type="success" icon="el-icon-search" @click='mapp("")'>查询</el-button>
			<el-table class='oyTable' :data="tableData" :row-class-name="tableRowClassName" :row-style="selectedHighlight" @row-click="rowClick"  style="width: 100%">
				<el-table-column label="设备编号">
					<template slot-scope="scope">
				        <el-popover trigger="click" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.deviceId}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide" @click="mapp(scope.row)">{{ scope.row.deviceId}}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
			</el-table>
			<div class="footer">
				<!-- <el-pagination
				small
				@current-change="handleCurrentChange"
				 @size-change="handleSizeChange" layout="prev, pager, next, jumper" :total="paging.total">
				</el-pagination> -->
				<!-- <el-pagination
					background

					small
					:page-sizes="[1,2,3,4]"
					:page-size="6"

					@current-change="handleCurrentChange"
					@size-change="handleSizeChange" layout="prev, pager, next" :total="paging.total">
				</el-pagination> -->
				<el-pagination background @current-change="handleCurrentChange"  @size-change="handleSizeChange" :current-page.sync="paging.page" :page-size="paging.pageSize" layout=" prev, pager, next" :total="paging.total"></el-pagination>
			<!-- <el-pagination background   :current-page.sync="paging.page" layout="sizes, prev, pager, next, jumper,total" :total="paging.total"></el-pagination> -->
			</div>
			<!-- <div class="footer"> -->
				<!-- <el-pagination
				small
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page.sync="paging.page"
				:page-size="paging.pageSize"
				layout="prev, pager, next, jumper ,total"
				>
				</el-pagination> -->
				<!-- <el-pagination background @current-change="handleCurrentChange"  @size-change="handleSizeChange" :current-page.sync="paging.page":page-sizes="[10, 11, 12]" :page-size="paging.pageSize" layout="sizes, prev, pager, next, jumper,total" :total="paging.total"></el-pagination> -->
			<!-- </div> -->
		</div>
		
	</div>
</template>
<style>
	 .btn-twinkle {
            color: #fff;
            border: none;
            animation: twinkle 0.1s alternate infinite;
			z-index: 33
        }
        @keyframes twinkle {
            from {
                background: #fff;
            }
            to {
                background: #ff6600;
            }
		}
		div{
			font-size: 13px;
			font-family: "Helvetica Neue",Helvetica,Tahoma,sans-serif
		}
		div p{
			font-size: 12px!important;
			line-height: 20px;
		}
		div .buttw{
			width: 50%;
			float: right;
			margin-top:-163px;
		}
		div .buttws{
			width: 50%;
			float: right;
			margin-top:-145px;
		}
</style>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	import iconCar from '../../../static/image/xxx.png'; //以import的方式导入图片文件
	import iconCarA from '../../../static/image/carss.png'; //以import的方式导入图片文件
	import {wgs84togcj02} from '../../../common/common.js'
	export default {
		name: 'page',
		data () {
		    return {
				one:'',
				two:'',
				three:'',
				four:'',
				five:'',
				six:'',
				seven:'',
				eight:'',
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
					waterTemperature:'',
					devParaSn:'',
					devWarning:'',
					devIccid:'',
					devLongitude:'',
					devStatus:'',
					devLatitude:'',
					devUnlockTime:'',
					waterMeterTrip:''
				},
				ying:'',
				kop:'',
				posac:'',
				abad:'',
				numw:[],
				obj:[],
				devLongitude:'',
				devLatitude:'',
		    	data1: [{
		        	positionerId: '',
		        	children: [{
		        		positionerId: '',
		        	}]
		        }, {
		        	positionerId: '',
		        	children: [{
		            	positionerId: '',
		        	}, {
		            	positionerId: '',
		        	}]
		        }, {
		        	positionerId: '',
		        	children: [{
		            	positionerId: '',
		        	}, {
		        		positionerId: '',
		        	}]
				}],
				none:'',
				paging:{
					page:1,
					pageSize:10,
					total:0
				},
				ccc:'',
				bbb:'',
		        data2:[],
				data3:[],
				tableData:[],
		        activeIndex:'1',
		        defaultProps: {
		        	children: 'children',
		        	label: 'positionerId'
		        },
		    	imgCar:'./static/image/car.png',
				map:'',
				mapchangelist:[],
				mk:'',
				weft:'',
				wie:'',
				inputDev:'',
				getIndex:'',
				rulefilet:'',
				  rulefilep:'',
				  poli:0
		    }
		},
		mounted:function(){
			console.log(this.$route.query.mouse)
			this.searchClick()
			this.abcd()
			
            // map.panTo(new_point); 
			// document.getElementById('allmap').style.height = document.body.clientHeight-70+'px';
			document.title=this.$route.meta.title;
			var loadCount = 1;


		},
		methods:{

			mapp(row){
				console.log(row);
				let deviceId='';
				if(row==''){
					deviceId=this.inputDev
				}else{
					deviceId=row.deviceId
				}
				// let deviceId=this.inputDev;
				// if(deviceId==''){
    //                 deviceId=row.deviceId
				// }else{
				// 	deviceId=this.inputDev
				// }
				this.poli=1
				console.log(99)
				console.log(deviceId);
				let that=this
				axios({
					method:'post',
					url:that.$store.state.http+'/devices/findsn',
					data:Qs.stringify({
						devId:deviceId
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
				that.con={
					devVOL:'无',
					waterMeter:'无',
					waterTemperature:'无',
					devDefence:'无',
					devUnlockWay:'无',
					devLockState:'无',
					waterMeterTotal:'无',
					waterMeterTemp:'无',
					devHardVerison:'无',
					waterPressure:'无',
					devSoftVerison:'无',
					waterTemperature:'无',
					devWarning:'无',
					devIccid:'无',
					devLongitude:'无',
					devStatus:'无',
					devLatitude:'无',
					devUnlockTime:'无',
					waterMeterTrip:'无'
				},
				 axios({
					method:"post",
					url:that.$store.state.http+'/Datapoints/getData',
					data:Qs.stringify({
						devId:deviceId
					})
				}).then(function(message){
					console.log(message);
					console.log(message.data.errMsg)
					let messData=message.data.errMsg
					for(let i=0;i<messData.data.datastreams.length;i++){
						console.log(messData.data.datastreams[i].id);
                         switch (messData.data.datastreams[i].id){
							  case '2001':that.con.devVOL=messData.data.datastreams[i].datapoints[0].value
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
							 break;
							 case '2006':that.con.waterMeterTemp=messData.data.datastreams[i].datapoints[0].value
							 break;
							 case '1004':that.con.devSoftVerison=messData.data.datastreams[i].datapoints[0].value
							 break;
							 case '2005':that.con.waterPressure=(messData.data.datastreams[i].datapoints[0].value)/100
							 break;

							 case '2004':that.con.waterTemperature=(messData.data.datastreams[i].datapoints[0].value)/100
							 break;
							 case '1001':that.con.devStatus=messData.data.datastreams[i].datapoints[0].value
							 break;
							 case '1002':that.con.devIccid=messData.data.datastreams[i].datapoints[0].value
							 break;
							 case '2003':that.devLongitude=messData.data.datastreams[i].datapoints[0].value;
							 break;
							 case '2002':that.devLatitude=messData.data.datastreams[i].datapoints[0].value;
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
					that.roomid=deviceId
					console.log(that.roomid)
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
					console.log(that.con.devUnlockWay)
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
					console.log(that.devLongitude,that.devLatitude)
		if(that.devLongitude===0||that.devLatitude===0||that.devLongitude==''||that.devLatitude===''){
			that.devLongitude=12022821.28307
			that.devLatitude=3026930.46269
		}
		function SquareOverlay(color, x, y) {
			this._length = 10;
			this._color = color;
			this._x = x;
			this._y = y;
		}
  		 SquareOverlay.prototype = new BMap.Overlay();
        // 实现初始化方法
        SquareOverlay.prototype.initialize = function (map) {
            // 保存map对象实例
            this._map = map;
            // 创建div元素，作为自定义覆盖物的容器
            var div = document.createElement("canvas");
            div.style.position = "absolute";
            // 可以根据参数设置元素外观
            div.style.width = this._length + "px";
            div.style.height = 1.6*(this._length) + "px";
            div.style.background = this._color;
            div.style.borderRadius = this._length / 2 + "px";
            // div.style.border = "solid rgb(" + this._length + "," + this._length + "," + this._length + ") 1px";
            if (this._color == "red") {
                div.className = "btn-twinkle";
            }
            map.getPanes().markerPane.appendChild(div);
            // 保存div实例
            this._div = div;
            // 需要将div元素作为方法的返回值，当调用该覆盖物的show、
            // hide方法，或者对覆盖物进行移除时，API都将操作此元素。
            return div;
        }
        //实现绘制方法
        SquareOverlay.prototype.draw = function () {
            // 根据地理坐标转换为像素坐标，并设置给容器
            // var position = this._map.pointToOverlayPixel(this._center);
            var position = this._map.pointToOverlayPixel(new BMap.Point(this._x, this._y));
            this._div.style.left = position.x - this._length / 2 + "px";
            this._div.style.top = position.y - this._length / 2 + "px";
        }

			var map = new BMap.Map("maps");
			var ggPoint = new BMap.Point((that.devLongitude)/100000,(that.devLatitude)/100000); 
			map.centerAndZoom(ggPoint, 15);
			map.addControl(new BMap.NavigationControl());

			setTimeout(function(){
				
				var convertor = new BMap.Convertor();
				var pointArr = [];
				pointArr.push(ggPoint);
				convertor.translate(pointArr, 1, 5, function (data){
				if(data.status === 0) {
					var marker = new BMap.Marker(data.points[0]);
					var label = new BMap.Label("",{offset:new BMap.Size(20,-10)});
					// marker.setLabel(label); //添加百度label
					map.setCenter(data.points[0]);
					console.log(data.points[0])
					that.rulefilet=data.points[0].lng
					that.rulefilep=data.points[0].lat  
					if(that.devLongitude != "" && that.devLatitude != ""){
						map.clearOverlays(); 
						var new_point = new BMap.Point(that.rulefilet,that.rulefilep);
						// var new_point = new BMap.Point(120.23905,30.27310);
						// 需要修改位置
						var marker = new BMap.Marker(new_point);  // 创建标注
						console.log(9090)
						if(that.con.devStatus=='异常'){
							var new_point = new BMap.Point(that.rulefilet,that.rulefilep);
							// var new_point = new BMap.Point(120.23905,30.27310);
							// 需要修改位置
							var marker = new BMap.Marker(new_point);  // 创建标注
							const deviceSize = new BMap.Size(16,26);
							const deviceIcon = new BMap.Icon(iconCarA, deviceSize, { //会以base64的方式传参iconCar
								imageSize: deviceSize
							});

							marker = new BMap.Marker(new_point, {
								icon: deviceIcon
							})
							map.addOverlay(marker);  
							var html="<table border='1' style='border:1px solid #e6e6e6;margin-top:20px'>"
								+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery.png' alt=''>设备电量</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.devVOL+"</td>"
								+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (13).png' alt=''>设备SN码</td><td style='width:200px;height:25px;line-height:25px;'>"+that.ying+"</td></tr>"
								+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (4).png' alt=''>流量卡号</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.devIccid+"</td>"
								+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (2).png' alt=''>锁的状态</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.devLockState+"</td></tr>"
								+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (3).png' alt=''>设备经度</td><td style='width:200px;height:25px;line-height:25px;'>"+(that.devLongitude)/100000+"°</td>"
								+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (10).png' alt=''>设备纬度</td><td style='width:200px;height:25px;line-height:25px;'>"+(that.devLatitude)/100000+"°</td></tr>"
								+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (14).png' alt=''>是否布放</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.devDefence+"</td>"
								+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (6).png' alt=''>设备状态</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.devStatus+"</td></tr>"
								+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (7).png' alt=''>设备水温</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.waterTemperature+'℃'+"</td>"
								+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (8).png' alt=''>流量水压</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.waterPressure+'MPa'+"</td></tr>"
								+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (12).png' alt=''>结算流量</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.waterMeterTrip+'m³'+"</td>"
								+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (9).png' alt=''>瞬间流量</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.waterMeterTemp+'m³'+"</td></tr>"
								+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (11).png' alt=''>硬件版本</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.devHardVerison+"</td>"
								+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (5).png' alt=''>软件版本</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.devSoftVerison+"</td></tr>"
								+"</table>"
							var mapb={
								width:620,
								height:250,
								title:'设备详情'
							}
							var infoWindow=new BMap.InfoWindow(html,mapb);
							marker.addEventListener('click',function(){
								map.openInfoWindow(infoWindow,data.points[0])
								setInterval(function(){
									that.con={
										devVOL:'无',
										waterMeter:'无',
										waterTemperature:'无',
										devDefence:'无',
										devUnlockWay:'无',
										devLockState:'无',
										waterMeterTotal:'无',
										waterMeterTemp:'无',
										devHardVerison:'无',
										waterPressure:'无',
										devSoftVerison:'无',
										waterTemperature:'无',
										devWarning:'无',
										devIccid:'无',
										devLongitude:'无',
										devStatus:'无',
										devLatitude:'无',
										devUnlockTime:'无',
										waterMeterTrip:'无'
									},
									axios({
										method:"post",
										url:that.$store.state.http+'/Datapoints/getData',
										data:Qs.stringify({
											devId:deviceId
										})
									}).then(function(message){
										console.log(message);
										console.log(message.data.errMsg)
										let messData=message.data.errMsg
										for(let i=0;i<messData.data.datastreams.length;i++){
											console.log(messData.data.datastreams[i].id);
											switch (messData.data.datastreams[i].id){
												case '2001':that.con.devVOL=messData.data.datastreams[i].datapoints[0].value
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
												break;
												case '2006':that.con.waterMeterTemp=messData.data.datastreams[i].datapoints[0].value
												break;
												case '1004':that.con.devSoftVerison=messData.data.datastreams[i].datapoints[0].value
												break;
												case '2005':that.con.waterPressure=(messData.data.datastreams[i].datapoints[0].value)/100
												break;

												case '2004':that.con.waterTemperature=(messData.data.datastreams[i].datapoints[0].value)/100
												break;
												case '1001':that.con.devStatus=messData.data.datastreams[i].datapoints[0].value
												break;
												case '1002':that.con.devIccid=messData.data.datastreams[i].datapoints[0].value
												break;
												case '2003':that.devLongitude=messData.data.datastreams[i].datapoints[0].value;
												break;
												case '2002':that.devLatitude=messData.data.datastreams[i].datapoints[0].value;
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
										that.roomid=deviceId
										console.log(that.roomid)
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
										console.log(that.con.devUnlockWay)
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
										console.log(that.devLongitude,that.devLatitude)
							if(that.devLongitude===0||that.devLatitude===0||that.devLongitude==''||that.devLatitude===''){
								that.devLongitude=12022821.28307
								that.devLatitude=3026930.46269
							}
									})
									map.openInfoWindow(infoWindow,data.points[0])
								},60000)
							})
							map.panTo(new_point); 
							// var mapb={
							// 	width:620,
							// 	height:250,
							// 	title:'设备详情'
							// }
							// map.addOverlay(new SquareOverlay("red",(that.devLongitude)/100000,(that.devLatitude)/100000))
							console.log(that.rulefilet,that.rulefilep)
							map.addOverlay(new SquareOverlay("red",that.rulefilet,that.rulefilep))
						}else{
							var new_point = new BMap.Point(that.rulefilet,that.rulefilep);
							var marker = new BMap.Marker(new_point);  // 创建标注
							const deviceSize = new BMap.Size(16,26);
							const deviceIcon = new BMap.Icon(iconCar, deviceSize, { //会以base64的方式传参iconCar
								imageSize: deviceSize
							});

							marker = new BMap.Marker(data.points[0], {
								icon: deviceIcon
							})
							map.addOverlay(marker);  
							var html="<table border='1' style='border:1px solid #e6e6e6;margin-top:20px'>"
								+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery.png' alt=''>设备电量</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.devVOL+"</td>"
								+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (13).png' alt=''>设备SN码</td><td style='width:200px;height:25px;line-height:25px;'>"+that.ying+"</td></tr>"
								+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (4).png' alt=''>流量卡号</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.devIccid+"</td>"
								+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (2).png' alt=''>锁的状态</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.devLockState+"</td></tr>"
								+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (3).png' alt=''>设备经度</td><td style='width:200px;height:25px;line-height:25px;'>"+(that.devLongitude)/100000+"°</td>"
								+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (10).png' alt=''>设备纬度</td><td style='width:200px;height:25px;line-height:25px;'>"+(that.devLatitude)/100000+"°</td></tr>"
								+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (14).png' alt=''>是否布放</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.devDefence+"</td>"
								+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (6).png' alt=''>设备状态</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.devStatus+"</td></tr>"
								+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (7).png' alt=''>设备水温</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.waterTemperature+'℃'+"</td>"
								+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (8).png' alt=''>流量水压</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.waterPressure+'MPa'+"</td></tr>"
								+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (12).png' alt=''>结算流量</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.waterMeterTrip+'m³'+"</td>"
								+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (9).png' alt=''>瞬间流量</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.waterMeterTemp+'m³'+"</td></tr>"
								+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (11).png' alt=''>硬件版本</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.devHardVerison+"</td>"
								+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (5).png' alt=''>软件版本</td><td style='width:200px;height:25px;line-height:25px;'>"+that.con.devSoftVerison+"</td></tr>"
								+"</table>"
							// var html="<div><p>设备Sn码："+that.ying+"</p><p>流量卡号："+that.con.devIccid+"</p><p>锁的状态："+that.con.devLockState+"</p><p>设备经度："+(that.devLongitude)/100000+"</p><p>设备纬度："+(that.devLatitude)/100000+"</p><p>是否布防："+that.con.devDefence+"</p><p>设备电量："+that.con.devVOL+"mv</p><p>设备状态："+that.con.devStatus+"</p><p>设备水温："+that.con.waterTemperature+"℃</p><p>设备水压："+that.con.waterPressure+"MPa</p><p>瞬间流量："+that.con.waterMeterTemp+"</p><p>结算流量："+that.con.waterMeterTrip+"</p><p>硬件版本："+that.con.devHardVerison+"</p><p>软件版本："+that.con.devSoftVerison+"</p><p>开锁方式："+that.con.devUnlockWay+"</p></div>"
							var mapb={
								width:620,
								height:250,
								title:'设备详情'
							}
							var infoWindow=new BMap.InfoWindow(html,mapb);
							marker.addEventListener('click',function(){
								map.openInfoWindow(infoWindow,data.points[0])
								setInterval(function(){
									that.con={
										devVOL:'无',
										waterMeter:'无',
										waterTemperature:'无',
										devDefence:'无',
										devUnlockWay:'无',
										devLockState:'无',
										waterMeterTotal:'无',
										waterMeterTemp:'无',
										devHardVerison:'无',
										waterPressure:'无',
										devSoftVerison:'无',
										waterTemperature:'无',
										devWarning:'无',
										devIccid:'无',
										devLongitude:'无',
										devStatus:'无',
										devLatitude:'无',
										devUnlockTime:'无',
										waterMeterTrip:'无'
									},
									axios({
										method:"post",
										url:that.$store.state.http+'/Datapoints/getData',
										data:Qs.stringify({
											devId:deviceId
										})
									}).then(function(message){
										console.log(message);
										console.log(message.data.errMsg)
										let messData=message.data.errMsg
										for(let i=0;i<messData.data.datastreams.length;i++){
											console.log(messData.data.datastreams[i].id);
											switch (messData.data.datastreams[i].id){
												case '2001':that.con.devVOL=messData.data.datastreams[i].datapoints[0].value
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
												break;
												case '2006':that.con.waterMeterTemp=messData.data.datastreams[i].datapoints[0].value
												break;
												case '1004':that.con.devSoftVerison=messData.data.datastreams[i].datapoints[0].value
												break;
												case '2005':that.con.waterPressure=(messData.data.datastreams[i].datapoints[0].value)/100
												break;

												case '2004':that.con.waterTemperature=(messData.data.datastreams[i].datapoints[0].value)/100
												break;
												case '1001':that.con.devStatus=messData.data.datastreams[i].datapoints[0].value
												break;
												case '1002':that.con.devIccid=messData.data.datastreams[i].datapoints[0].value
												break;
												case '2003':that.devLongitude=messData.data.datastreams[i].datapoints[0].value;
												break;
												case '2002':that.devLatitude=messData.data.datastreams[i].datapoints[0].value;
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
										that.roomid=deviceId
										console.log(that.roomid)
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
										console.log(that.con.devUnlockWay)
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
										console.log(that.devLongitude,that.devLatitude)
							if(that.devLongitude===0||that.devLatitude===0||that.devLongitude==''||that.devLatitude===''){
								that.devLongitude=12022821.28307
								that.devLatitude=3026930.46269
							}
									})
									map.openInfoWindow(infoWindow,data.points[0])
								},60000)
							})
							map.panTo(new_point); 
						}
						// var mapb={
						// 	width:620,
						// 	height:250,
						// 	title:'设备详情'
						// }
						// <p>设备SN码："+that.Snclass+"</p>
						
						
					}
				}
				})
			}, 1000);
					
				})
			},
			
			abcd(){
				let data={
					pageNum:this.paging.page,
					pageSize:this.paging.pageSize,
					dealer:sessionStorage.getItem("dealer")
				}
				// 动过
				if(data.dealer==0){
					data.dealer=sessionStorage.getItem('orderDealers')
				}
				let that=this;
				axios({
					method:'post',
					url:that.$store.state.http+'/devices/conditionFind',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message)
					if(message.data.resCode==0){
							let datap= {
								pageNum:that.paging.page,
								pageSize:that.paging.pageSize
							};
							console.log(that.$route.query.mouse)
							if(that.$route.query.mouse==undefined){
								console.log(message.data.result[0].deviceId)
								datap.devId=message.data.result[0].deviceId
							}else{
								datap.devId=that.$route.query.mouse.deviceIds
							}
							datap.dealer=sessionStorage.getItem("dealer")
							// 动过
							if(datap.dealer==0){
								datap.dealer=sessionStorage.getItem('orderDealers')
							}
							// datap.devId=localStorage.getItem("none")
							console.log(datap)
							axios({
								method:'post',
								url:that.$store.state.http+'/devices/findsn',
								data:Qs.stringify({
									devId:localStorage.getItem("none")
								})
							}).then(function(message){
								console.log(message)
								if(message.data.resCode==0){
									if(message.data.i.devParaSn==''){
										that.con.devParaSn='无'
									}else{
										that.con.devParaSn=message.data.i.devParaSn
										console.log(message.data.i.devParaSn)
										localStorage.setItem('srl',message.data.i.devParaSn)
									}
								}else{
									
								}
							})
							axios({
								method:'post',
								url:that.$store.state.http+'/Datapoints/getData',
								data:Qs.stringify(datap)
							}).then(function(message){
								console.log(8989)
								console.log()
								// if(localStorage.getItem("lon")!=null && localStorage.getItem("lat")!=null){
								// 	that.abad=localStorage.getItem("lat")
								// 	that.posac=localStorage.getItem("lon")
								// 	console.log(7869)
								// }else{
                                    if(message.data.resCode==0){
									let messData=message.data.errMsg
									console.log(messData)
									for(let i=0;i<messData.data.datastreams.length;i++){
										switch (messData.data.datastreams[i].id){
											case '2001':that.con.devVOL=messData.data.datastreams[i].datapoints[0].value
											// localStorage.setItem('more',(messData.data.datastreams[i].datapoints[0].value));
											break;
											case '2011':that.con.devWarning=messData.data.datastreams[i].datapoints[0].value
													localStorage.setItem('moretwo',(messData.data.datastreams[i].datapoints[0].value));
											break;
											case '2010':that.con.devDefence=messData.data.datastreams[i].datapoints[0].value;
													// localStorage.setItem('morethree',(messData.data.datastreams[i].datapoints[0].value));    
											break;
											case '2009':that.con.devUnlockWay=messData.data.datastreams[i].datapoints[0].value;
														that.kop=messData.data.datastreams[i].datapoints[0].at;
														// localStorage.setItem('morefour',(messData.data.datastreams[i].datapoints[0].value));
														// localStorage.setItem('gh',(messData.data.datastreams[i].datapoints[0].at));
											break;
											case '2008':that.con.devLockState=messData.data.datastreams[i].datapoints[0].value
													// localStorage.setItem('morefive',(messData.data.datastreams[i].datapoints[0].value));
											break;
											case '2007':that.con.waterMeterTotal=messData.data.datastreams[i].datapoints[0].value
													// localStorage.setItem('moresix',(messData.data.datastreams[i].datapoints[0].value));
											break;
											case '1005':that.con.devHardVerison=messData.data.datastreams[i].datapoints[0].value
													// localStorage.setItem('moreseven',(messData.data.datastreams[i].datapoints[0].value));
											break;
											case '2013':that.con.waterMeterTrip=messData.data.datastreams[i].datapoints[0].value
													// localStorage.setItem('moreigh',(messData.data.datastreams[i].datapoints[0].value));
											break;
											case '2006':that.con.waterMeterTemp=messData.data.datastreams[i].datapoints[0].value
													// localStorage.setItem('morenine',(messData.data.datastreams[i].datapoints[0].value));
											break;
											case '1004':that.con.devSoftVerison=messData.data.datastreams[i].datapoints[0].value
													// localStorage.setItem('moreten',(messData.data.datastreams[i].datapoints[0].value));
											break;
											case '2005':that.con.waterPressure=messData.data.datastreams[i].datapoints[0].value
													// localStorage.setItem('morele',(messData.data.datastreams[i].datapoints[0].value)/100);
											break;
											 case '1003':that.con.devParaSn=messData.data.datastreams[i].datapoints[0].value
											 		// localStorage.setItem('wei',(messData.data.datastreams[i].datapoints[0].value));
											 break;
											case '2004':that.con.waterTemperature=(messData.data.datastreams[i].datapoints[0].value)/10
													// localStorage.setItem('moretele',(messData.data.datastreams[i].datapoints[0].value)/10);
											break;
											case '1001':that.con.devStatus=messData.data.datastreams[i].datapoints[0].value
													// localStorage.setItem('morethir',(messData.data.datastreams[i].datapoints[0].value));
											break;
											case '1002':that.con.devIccid=messData.data.datastreams[i].datapoints[0].value
													localStorage.setItem('morethros',(messData.data.datastreams[i].datapoints[0].value));
											break;
											case '2003':that.ccc=messData.data.datastreams[i].datapoints[0].value;
											console.log(messData.data.datastreams[i].datapoints[0].value)
												localStorage.setItem("bbb",messData.data.datastreams[i].datapoints[0].value)
												that.posac=that.ccc
												console.log(that.posac)
											break;
											case '2002':that.bbb=messData.data.datastreams[i].datapoints[0].value;
											console.log(messData.data.datastreams[i].datapoints[0].value)
												localStorage.setItem("ccc",messData.data.datastreams[i].datapoints[0].value)
												that.abad=that.bbb
												console.log(that.abad)
											break;
											default:break;
										}
										
									}
									if(that.ccc==''||that.ccc==null||that.bbb==''||that.bbb==null){
										that.ccc='定位失败'
										that.bbb='定位失败'
									}else{

									}
								}
							// }
							// that.mapchangelist=wgs84togcj02((that.con.devLongitude)/100000,(that.con.devLatitude)/100000)
							// that.con.devLongitude=that.mapchangelist[0]
							// that.con.devLatitude=that.mapchangelist[1]
							var map = new BMap.Map("allmap");
							map.centerAndZoom(new BMap.Point(116.331398,39.897445),15);
							map.enableScrollWheelZoom(true);
							
							map.clearOverlays(); 


							setTimeout(function(){
								console.log(that.bbb,that.ccc)
								if(that.posac==0||that.abad==0){
									that.posac=120.2282128307
									that.abad=30.2693046269
								}else{
									that.posac=(that.posac)/100000
									that.abad=(that.abad)/100000
								}
								if(that.five=='异常'){
									var ggPoint = new BMap.Point(that.posac,that.abad); 
									var convertor = new BMap.Convertor();
									var pointArr = [];
									pointArr.push(ggPoint);
									convertor.translate(pointArr, 1, 5, function (data){
									if(data.status === 0) {
									var marker = new BMap.Marker(data.points[0]);
									const deviceSize = new BMap.Size(16,26);
									const deviceIcon = new BMap.Icon(iconCar, deviceSize, { //会以base64的方式传参iconCar
										imageSize: deviceSize
									});

									marker = new BMap.Marker(data.points[0], {
										icon: deviceIcon
									})
									map.addOverlay(marker);
									var html="<table border='1' style='border:1px solid #e6e6e6;margin-top:20px'>"
									+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery.png' alt=''>设备电量</td><td style='width:200px;height:25px;line-height:25px;'>"+that.four+"</td>"
									+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (13).png' alt=''>设备SN码</td><td style='width:200px;height:25px;line-height:25px;'>"+that.threes+"</td></tr>"
									+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (4).png' alt=''>流量卡号</td><td style='width:200px;height:25px;line-height:25px;'>"+that.one+"</td>"
									+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (2).png' alt=''>锁的状态</td><td style='width:200px;height:25px;line-height:25px;'>"+that.two+"</td></tr>"
									+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (3).png' alt=''>设备经度</td><td style='width:200px;height:25px;line-height:25px;'>"+that.eights+"°</td>"
									+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (10).png' alt=''>设备纬度</td><td style='width:200px;height:25px;line-height:25px;'>"+that.severns+"°</td></tr>"
									+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (14).png' alt=''>是否布放</td><td style='width:200px;height:25px;line-height:25px;'>"+that.three+"</td>"
									+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (6).png' alt=''>设备状态</td><td style='width:200px;height:25px;line-height:25px;'>"+that.five+"</td></tr>"
									+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (7).png' alt=''>设备水温</td><td style='width:200px;height:25px;line-height:25px;'>"+that.six+"℃"+"</td>"
									+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (8).png' alt=''>流量水压</td><td style='width:200px;height:25px;line-height:25px;'>"+that.seven+'MPa'+"</td></tr>"
									+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (12).png' alt=''>结算流量</td><td style='width:200px;height:25px;line-height:25px;'>"+that.eight+'m³'+"</td>"
									+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (9).png' alt=''>瞬间流量</td><td style='width:200px;height:25px;line-height:25px;'>"+that.nine+'m³'+"</td></tr>"
									+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (11).png' alt=''>硬件版本</td><td style='width:200px;height:25px;line-height:25px;'>"+that.sixs+"</td>"
									+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (5).png' alt=''>软件版本</td><td style='width:200px;height:25px;line-height:25px;'>"+that.nines+"</td></tr>"
									+"</table>"
									var mapb={
										width:620,
										height:250,
										title:'设备详情'
									}
										var infoWindow=new BMap.InfoWindow(html,mapb);
										marker.addEventListener('click',function(){
											map.openInfoWindow(infoWindow,data.points[0])
										})
									map.panTo(new_point); 
									map.addOverlay(new SquareOverlay("red",data.points[0].lng,data.points[0].lat))
									var label = new BMap.Label("",{offset:new BMap.Size(20,-10)});
									map.setCenter(data.points[0]);
									localStorage.setItem('ppp',data.points[0].lng)
									localStorage.setItem('lll',data.points[0].lat)
								}
								})
								}else{
								var ggPoint = new BMap.Point(that.posac,that.abad); 
								var convertor = new BMap.Convertor();
								var pointArr = [];
								pointArr.push(ggPoint);
								convertor.translate(pointArr, 1, 5, function (data){
								if(data.status === 0) {
									var ggPoint = new BMap.Point(that.posac,that.abad); 
									var marker = new BMap.Marker(data.points[0]);
									const deviceSize = new BMap.Size(16,26);
									const deviceIcon = new BMap.Icon(iconCar, deviceSize, { //会以base64的方式传参iconCar
										imageSize: deviceSize
									});

									marker = new BMap.Marker(data.points[0], {
										icon: deviceIcon
									})
									map.addOverlay(marker);
									var html="<table border='1' style='border:1px solid #e6e6e6;margin-top:20px'>"
								+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery.png' alt=''>设备电量</td><td style='width:200px;height:25px;line-height:25px;'>"+that.four+"</td>"
								+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (13).png' alt=''>设备SN码</td><td style='width:200px;height:25px;line-height:25px;'>"+that.threes+"</td></tr>"
								+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (4).png' alt=''>流量卡号</td><td style='width:200px;height:25px;line-height:25px;'>"+that.one+"</td>"
								+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (2).png' alt=''>锁的状态</td><td style='width:200px;height:25px;line-height:25px;'>"+that.two+"</td></tr>"
								+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (3).png' alt=''>设备经度</td><td style='width:200px;height:25px;line-height:25px;'>"+that.eights+"°</td>"
								+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (10).png' alt=''>设备纬度</td><td style='width:200px;height:25px;line-height:25px;'>"+that.severns+"°</td></tr>"
								+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (14).png' alt=''>是否布放</td><td style='width:200px;height:25px;line-height:25px;'>"+that.three+"</td>"
								+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (6).png' alt=''>设备状态</td><td style='width:200px;height:25px;line-height:25px;'>"+that.five+"</td></tr>"
								+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (7).png' alt=''>设备水温</td><td style='width:200px;height:25px;line-height:25px;'>"+that.six+"℃"+"</td>"
								+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (8).png' alt=''>流量水压</td><td style='width:200px;height:25px;line-height:25px;'>"+that.seven+'MPa'+"</td></tr>"
								+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (12).png' alt=''>结算流量</td><td style='width:200px;height:25px;line-height:25px;'>"+that.eight+'m³'+"</td>"
								+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (9).png' alt=''>瞬间流量</td><td style='width:200px;height:25px;line-height:25px;'>"+that.nine+'m³'+"</td></tr>"
								+"<tr><td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (11).png' alt=''>硬件版本</td><td style='width:200px;height:25px;line-height:25px;'>"+that.sixs+"</td>"
								+"<td style='width:90px;height:25px;line-height:25px;'><img style='width:15px;margin-right:5px;' src='./static/image/icon/battery (5).png' alt=''>软件版本</td><td style='width:200px;height:25px;line-height:25px;'>"+that.nines+"</td></tr>"
								+"</table>"
									// var html="<div><p>设备SN码："+that.threes+"</p><p>流量卡号："+that.one+"</p><p>锁的状态："+that.two+"</p><p>设备经度："+that.eights+"°</p><p>设备纬度："+that.severns+"°</p><p>是否布防："+that.three+"</p><p>设备电量："+that.four+"mv</p><p>设备状态："+that.five+"</p><p>设备水温："+that.six+"℃</p><p>设备水压："+that.seven+"MPa</p><p>结算流量："+that.eight+"</p><p>瞬间流量："+that.nine+"</p><p>硬件版本："+that.sixs+"</p><p>软件版本："+that.nines+"</p><p>开锁方式："+that.fours+"</p></div>"
									var mapb={
										width:620,
										height:250,
										title:'设备详情'
									}
										var infoWindow=new BMap.InfoWindow(html,mapb);
										marker.addEventListener('click',function(){
											map.openInfoWindow(infoWindow,data.points[0])
										})
									map.panTo(new_point); 
								
									var label = new BMap.Label("",{offset:new BMap.Size(20,-10)});
									map.setCenter(data.points[0]);
									localStorage.setItem('ppp',data.points[0].lng)
									localStorage.setItem('lll',data.points[0].lat)
								}
								})
								}
							}, 1000);
						
							//  var new_point = new BMap.Point(120.23905,30.27310);
							var new_point = new BMap.Point(localStorage.getItem('ppp'),localStorage.getItem('lll'));
							
							// var marker = new BMap.Marker(new_point);  // 创建标注
							// console.log(that.posac,that.abad)
							// const deviceSize = new BMap.Size(16,26);
							// const deviceIcon = new BMap.Icon(iconCar, deviceSize, { //会以base64的方式传参iconCar
							// 	imageSize: deviceSize
							// });

							// marker = new BMap.Marker(new_point, {
							// 	icon: deviceIcon
							// })
							// map.addOverlay(marker);  
							// map.panTo(new_point); 
						// var mapb={
						// 	width:620,
						// 	height:250,
						// 	title:'设备详情'
						// }
						
						// let that=this;
						// <p>设备SN码："+that.Snclass+"</p>
						if(localStorage.getItem("devIccid")==null){
							that.one=localStorage.getItem('morethros')
						}else{
							that.one=localStorage.getItem("devIccid")
						}
						// if(localStorage.getItem("devLockState")==null){
						// 	that.two=localStorage.getItem('morefive')
						// }else{
						// 	that.two=localStorage.getItem("devLockState")
						// }
						// if(localStorage.getItem("devDefence")==null){
						// 	that.three=localStorage.getItem('morethree')
						// }else{
						// 	that.three=localStorage.getItem("devDefence")
						// }
						// if(localStorage.getItem("devVOL")==null){
						// 	that.four=localStorage.getItem('more')
						// }else{
						// 	that.four=localStorage.getItem("devVOL")
						// }
						// if(localStorage.getItem("devStatus")==null){
						// 	that.five=localStorage.getItem('morethir')
						// }else{
						// 	that.five=localStorage.getItem("devStatus")
						// }
						// if(localStorage.getItem("waterTemperature")==null){
						// 	that.six=localStorage.getItem('moretele')
						// }else{
						// 	that.six=localStorage.getItem("waterTemperature")
						// }
						// if(localStorage.getItem("waterPressure")==null){
						// 	that.seven=localStorage.getItem('morele')
						// }else{
						// 	that.seven=localStorage.getItem("waterPressure")
						// }
						// if(localStorage.getItem("waterMeterTrip")==null){
						// 	that.eight=localStorage.getItem('moreigh')
						// }else{
						// 	that.eight=localStorage.getItem("waterMeterTrip")
						// }
						// if(localStorage.getItem("waterMeterTemp")==null){
						// 	that.nine=localStorage.getItem('morenine')
						// }else{
						// 	that.nine=localStorage.getItem("waterMeterTemp")
						// }
						// if(localStorage.getItem("devSoftVerison")==null){
						// 	that.nines=localStorage.getItem('moreten')
						// }else{
						// 	that.nines=localStorage.getItem("devSoftVerison")
						// }
						// if(localStorage.getItem("devLongitude")===null){
						// 	that.eights=localStorage.getItem('bbb')
						// }else{
						// 	that.eights=localStorage.getItem("devLongitude")
						// }
						console.log(that.$route.query.mouse)
						if(that.$route.query.mouse==undefined||that.$route.query.mouse=='[object Object]'){
							console.log(8981)
							console.log(that.eights)
							that.severns=(that.bbb)/100000
							that.eights=(that.ccc)/100000
							that.threes=that.con.devParaSn
							that.sixs=that.con.devHardVerison
							that.fives=that.con.waterMeterTotal
							that.fours=that.con.devUnlockWay
							that.two=that.con.devLockState
							that.three=that.con.devDefence
							that.four=that.con.devVOL
							that.five=that.con.devStatus
							that.six=that.con.waterTemperature
							that.seven=(that.con.waterPressure)/1000
							that.eight=that.con.waterMeterTrip
							that.nine=that.con.waterMeterTemp
							that.nines=that.con.devSoftVerison

							if(that.four>3550&&that.four<4200){
								that.four='正常'
							}else if(that.four>3500&&that.four<=3550){
								that.four='低压'
							}else if(that.four>3000&&that.four<=3500){
								that.four='更换电池'
							}else{
								that.four='电量异常'
							}
						}else{
							console.log(that.eights)
							console.log(8787)
							that.severns=that.$route.query.mouse.devLatitude
							that.eights=that.$route.query.mouse.devLongitude
							that.threes=that.$route.query.mouse.devParaSn
							that.sixs=that.$route.query.mouse.devHardVerison
							that.fives=that.$route.query.mouse.waterMeterTotal
							that.fours=that.$route.query.mouse.devUnlockWay
							that.two=that.$route.query.mouse.devLockState
							that.three=that.$route.query.mouse.devDefence
							that.four=that.$route.query.mouse.devVOL
							that.five=that.$route.query.mouse.devStatus
							console.log(that.five)
							that.six=that.$route.query.mouse.waterTemperature
							that.seven=that.$route.query.mouse.waterPressure
							that.eight=that.$route.query.mouse.waterMeterTrip
							that.nine=that.$route.query.mouse.waterMeterTemp
							that.nines=that.$route.query.mouse.devSoftVerison
						}
						if(that.eights==0||that.eights==''){
							that.severns=30.2693046269
							that.eights=120.2282128307
						}

						if(that.severns==0||that.severns==''){
							that.severns=30.2693046269
							that.eights=120.2282128307
						}
						// if(localStorage.getItem("devLatitude")===null){
						// 	that.severns=localStorage.getItem('ccc')
						// }else{
						// 	that.severns=localStorage.getItem("devLatitude")
						// }
						// if(that.$route.query.mouse==undefined){
						// 	that.severns=that.bbb
						// }else{
						// 	that.severns=that.$route.query.mouse.devLatitude
						// }
						// if(localStorage.getItem("devHardVerison")==null){
						// 	that.sixs=localStorage.getItem('moreseven')
						// }else{
						// 	that.sixs=localStorage.getItem("devHardVerison")
						// }
						// if(localStorage.getItem("waterMeterTotal")==null){
						// 	that.fives=localStorage.getItem('moresix')
						// }else{
						// 	that.fives=localStorage.getItem("waterMeterTotal")
						// }
						// if(localStorage.getItem("devUnlockWay")==null){
						// 	that.fours=localStorage.getItem('morefour')
						// }else{
						// 	that.fours=localStorage.getItem("devUnlockWay")
						// }
						// if(localStorage.getItem("devParaSn")==null){
						// 	that.threes=localStorage.getItem('srl')
						// }else{
						// 	that.threes=localStorage.getItem("devParaSn")
						// }
						console.log(localStorage.getItem("devLongitude"))
						if(localStorage.getItem("devUnlockTime")==''){
							console.log(991)
							that.twos=that.kop
						}else{
							console.log(990)
							that.twos=localStorage.getItem("devUnlockTime")
						}
						console.log(localStorage.getItem('devParaSn'))
						if(localStorage.getItem("devStatus")==17){
							that.five='异常'
						}else{
							that.five='正常'
						}
						if(localStorage.getItem("devLockState")==17){
							that.two='开启';
						}else{
							that.two='关闭'
						}
						if(localStorage.getItem("devDefence")==17){
							that.three='未布防'
						}else{
							that.three='已布防'
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
					function SquareOverlay(color, x, y) {

						this._length = 10;
						this._color = color;
						this._x = x;
						this._y = y;
					}
					// 继承API的BMap.Overlay
					SquareOverlay.prototype = new BMap.Overlay();
					// 实现初始化方法
					SquareOverlay.prototype.initialize = function (map) {
						// 保存map对象实例
						this._map = map;
						// 创建div元素，作为自定义覆盖物的容器
						var div = document.createElement("canvas");
						div.style.position = "absolute";
						// 可以根据参数设置元素外观
						div.style.width = this._length + "px";
						div.style.height = 1.6*(this._length) + "px";
						div.style.background = this._color;
						div.style.borderRadius = this._length / 2 + "px";
						// div.style.border = "solid rgb(" + this._length + "," + this._length + "," + this._length + ") 1px";
						if (this._color == "red") {
							div.className = "btn-twinkle";
						}
						// div.onclick = function (e, a) {
						// 	// map.openInfoWindow(new BMap.InfoWindow("地址：济南邦德激光股份公司", opts), new BMap.Point('117.684667', '36.233654')); //开启信息窗口
						// 	// debugger;
						// 	console.log(142)
						// 	var p = new BMap.Point(localStorage.getItem('ppp'),localStorage.getItem('lll'));
						// 	//var p1 = map.overlayPixelToPoint(e.screenX, e.screenY);
						// 	//var p2 = map.pixelToPoint(e.pageX, e.pageY);
						// 	map.openInfoWindow(new BMap.InfoWindow("地址：济南邦德激光股份公司", opts), p); //开启信息窗口
						// };
						// 将div添加到覆盖物容器中
						map.getPanes().markerPane.appendChild(div);
						// 保存div实例
						this._div = div;
						// 需要将div元素作为方法的返回值，当调用该覆盖物的show、
						// hide方法，或者对覆盖物进行移除时，API都将操作此元素。
						return div;
					}
					//实现绘制方法
					SquareOverlay.prototype.draw = function () {
						// 根据地理坐标转换为像素坐标，并设置给容器
						// var position = this._map.pointToOverlayPixel(this._center);
						var position = this._map.pointToOverlayPixel(new BMap.Point(this._x, this._y));
						this._div.style.left = position.x - this._length / 2 + "px";
						this._div.style.top = position.y - this._length / 2 + "px";
					}
					if(that.five=='异常'){
						var new_point = new BMap.Point(that.posac,that.abad);
						// var new_point = new BMap.Point(120.23905,30.27310);
						// 需要修改位置
						var marker = new BMap.Marker(new_point);  // 创建标注
						const deviceSize = new BMap.Size(16,26);
						const deviceIcon = new BMap.Icon(iconCarA, deviceSize, { //会以base64的方式传参iconCar
							imageSize: deviceSize
						});

						marker = new BMap.Marker(new_point, {
							icon: deviceIcon
						})
						map.addOverlay(marker);  
						map.addOverlay(new SquareOverlay("red",that.posac,that.abad))
						// map.addOverlay(new SquareOverlay("red",120.23905,30.27310))
					}
					
				})
			}
		})
		
			},
			selectedHighlight({row, rowIndex}) {
            //console.log(rowIndex);
			if ((this.getIndex) === rowIndex ) {

			return {

			"background-color": "#e3eaf3"

			};}},
			tableRowClassName ({row, rowIndex}) {

			//把每一行的索引放进row

			row.index = rowIndex;

			},
			rowClick (row) {

			//console.log(row,"row");

			this.getIndex=row.index

			},
			indexMethod(index) {
        		return index + (this.paging.page-1)*this.paging.pageSize+1;
    		},
			handleSizeChange(val){
				
				console.log(this.paging.pageSize)
				this.searchClick();
			},
			handleCurrentChange(val){
				this.paging.page = val;
				this.searchClick();
			},
			searchClick(){
				let that = this;
				console.log(22222222222);
				that.tableData = [];
				that.timeCrea=[];
				console.log(that.tableData)
				let data={
					pageNum:this.paging.page,
					pageSize:this.paging.pageSize,
					dealer:sessionStorage.getItem("dealer")
				}
				// 动过
				if(data.dealer==0){
					data.dealer=sessionStorage.getItem('orderDealers')
				}
				axios({
					method:'post',
					url:that.$store.state.http+'/devices/conditionFind',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message)
					if(message.data.resCode==0){
						console.log(message)
						that.tableData= message.data.result;
						// localStorage.setItem("none",message.data.result[0].deviceId)
						that.paging.total = message.data.result2;
						console.log(3333)
					}else{
						that.tableData = [];
					}
				})
			},
			handleSelect(key, keyPath){
				this.activeIndex = key
				// this.dataList(key);
			},
	
		}
	}
</script>

<style scoped="scoped">
	.el-menu-item{padding: 0;}
	.titleChoice{text-align: center;}
	.titleLeft{width: 272px;}
	.titleRight{width: 100%;}
	#allmap{height: 100%;width: 100%;z-index:8;}
	#maps{height: 100%;width: 100%;}
	#carMonitor{width: 100%;height: 100%;display: flex;}
	#carMonitor{width: 100%;height: 1000px;}
	ul li{width: 100%;text-align: center;line-height: 2;font-size: 15px;}
	.oyTable{
		cursor: pointer;
	}
	.cssText{
		display: none;
	}
	.tdimg{
		width: 100px!important;
	}
	.oYinp{
		margin:5px 5px;
	}
	.oyButton{
		width: 260px;
		margin-left: 4px;
		margin-bottom: 5px;
	}
</style>