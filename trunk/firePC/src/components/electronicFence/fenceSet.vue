<template>
	<div id="fenceSet">
		<div class='titleRight'><div id="allmap"></div></div>
		<div class='titleLeft'>
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="#ccc" active-text-color="#67C23A">
				<el-row>
					<el-col class='titleChoice' :span="12"><el-menu-item index="1">自定义围栏</el-menu-item></el-col>
					<el-col class='titleChoice' :span="12"><el-menu-item index="2">行政区域围栏</el-menu-item></el-col>
				</el-row>
			</el-menu>
			<div class="height" v-if="activeIndex == 1" >
				<div class="head"><div>围栏名称</div><div>操作</div></div>
				<div class="head" v-for="(pro,index) in custom"><div @click="">{{pro.enclName}}</div><div><i  @click="changeCustom(index)" class="el-icon-edit-outline" style="font-size: 16px;"></i><i  @click="deleteCustom(pro.enclId)" class="el-icon-delete" style="font-size: 16px;"></i></div></div>
			</div>
			<div class="height" v-if="activeIndex == 2" >
				<div class="head"><div>围栏名称</div><div>操作</div></div>
				<div class="head" v-for="(pro,index) in province"><div @click="getBoundary(pro,0)">{{pro}}</div><div><i  @click="changexCity(pro)" class="el-icon-edit-outline" style="font-size: 16px;"></i><i  @click="getBoundary(pro,1)" class="el-icon-location-outline" style="font-size: 16px;"></i></div></div>
			</div>
			<div class="posi">
				<el-button @click = 'addEnclosure'>添加围栏</el-button><br /><br />
				<el-button @click = 'map.clearOverlays()'>取消</el-button>
			</div>
		</div>
		<el-dialog title="添加自定义围栏" :visible.sync="add">
			<div style="display: flex;">
				<div style="text-align: right;width: 40%;margin-right: 10%;">
					<span>围栏名称：</span>
					<el-input :disabled="false" v-model="addList.enclName" clearable placeholder="请输入内容"></el-input><br /><br />
					<span>经度：</span>
					<el-input :disabled="true" v-model="addList.enclLong" clearable placeholder="请输入内容"></el-input><br /><br />
					<span>纬度：</span>
					<el-input :disabled="true" v-model="addList.enclDimen" clearable placeholder="请输入内容"></el-input><br /><br />
					<span>半径：</span>
					<el-input :disabled="true" v-model="addList.endRadius" clearable placeholder="请输入内容"></el-input><br /><br />
					<span>设备：</span>
					<el-input :disabled="true" v-model="addList.positionerid" clearable placeholder="请输入内容"></el-input>
					
				</div>
				<div style="text-align: center;width: 50%;">
					<el-tree :data="data" :accordion = "true" node-key="group" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
				</div>
			</div>
			<div slot="footer" class="dialog-footer">
			    <el-button @click="add = false">取消</el-button>
				<el-button @click="addClick">保存</el-button>
			</div>
		</el-dialog>
				<el-dialog title="添加行政区域围栏" :visible.sync="addx">
			<div style="display: flex;">
				<div style="text-align: right;width: 40%;margin-right: 10%;">
					<span>行政区：</span>
					<el-input :disabled="true" v-model="addxList.enclSpe" clearable placeholder="请输入内容"></el-input><br /><br />
					<span>设备：</span>
					<el-input :disabled="true" v-model="addxList.positionerid" clearable placeholder="请输入内容"></el-input>
					
				</div>
				<div style="text-align: center;width: 50%;">
					<el-tree :data="data" :accordion = "true" node-key="group" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
				</div>
			</div>
			<div slot="footer" class="dialog-footer">
			    <el-button @click="addx = false">取消</el-button>
				<el-button @click="addxClick">保存</el-button>
			</div>
		</el-dialog>
		<el-dialog title="修改自定义围栏" :visible.sync="change">
			<div style="display: flex;">
				<div style="text-align: right;width: 40%;margin-right: 10%;">
					<span>围栏名称：</span>
					<el-input :disabled="false" v-model="changeList.enclName" clearable placeholder="请输入内容"></el-input><br /><br />
					<span>经度：</span>
					<el-input :disabled="true" v-model="changeList.enclLong" clearable placeholder="请输入内容"></el-input><br /><br />
					<span>纬度：</span>
					<el-input :disabled="true" v-model="changeList.enclDimen" clearable placeholder="请输入内容"></el-input><br /><br />
					<span>半径：</span>
					<el-input :disabled="true" v-model="changeList.endRadius" clearable placeholder="请输入内容"></el-input><br /><br />
					<span>设备：</span>
					<el-input :disabled="true" v-model="changeList.positionerid" clearable placeholder="请输入内容"></el-input>
					
				</div>
				<div style="text-align: center;width: 50%;">
					<el-tree :data="data" :accordion = "true" node-key="group" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
				</div>
			</div>
			<div slot="footer" class="dialog-footer">
			    <el-button @click="change = false">取消</el-button>
				<el-button @click="changeClick">保存</el-button>
			</div>
		</el-dialog>
		<el-dialog :title="title" :visible.sync="changex">
			<div style="display: flex;">
				<div style="text-align: center;width: 60%;padding: 0 20%;max-height: 300px;overflow-y: scroll;">
					<p class="p" v-for="data in datas"><span>{{data.positionerid}}</span><span style="margin-left: 20%;"><i @click="deleteCustom(data.enclId)" class="el-icon-delete"></i></span></p>
				</div>
			</div>
			<div slot="footer" class="dialog-footer">
			   <el-button @click="changex = false">取消</el-button>
				 <!--<el-button @click="changexClick">保存</el-button>-->
			</div>
		</el-dialog>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	export default {
		name: 'page',
		data () {
		    return {
		    	map:'',
		    	activeIndex:'1',
		    	province:['重庆市','北京市','江西省','陕西省','吉林省','浙江省','广东省','河南省','贵州省','河北省','青海省','福建省','辽宁省','海南省','台湾省','江苏省','湖南省','西藏自治区','内蒙古自治区','新疆维吾尔自治区','四川省','天津市','山东省','甘肃省','黑龙江省','安徽省','广西壮族自治区','上海市','湖北省','云南省','山西省','宁夏回族自治区'],
		    	custom:[],
		    	changeList:{
		    		enclId:'',
		    		enclName:'',
		    		enclLong:'',
		    		enclDimen:'',
		    		endRadius:'',
		    		positionerid:''
		    	},
		    	circle:'',
		    	add:false,
		    	addx:false,
		    	change:false,
		    	changex:false,
		    	title:'',
		    	addList:{
		    		enclName:'',
		    		enclLong:'',
		    		enclDimen:'',
		    		endRadius:'',
		    		positionerid:''
		    	},
		    	addxList:{
		    		positionerid:'',
		    		enclSpe:''
		    	},
		    	data:[],
		    	defaultProps: {
		        	children: 'children',
		        	label: 'positionerId'
		       },
		       datas:[]
		    }
		},
		mounted:function(){
			document.title=this.$route.meta.title;
			let that = this;
			that.customList();
		  	that.map = new BMap.Map("allmap");
		  	that.map.setMapStyle({
				styleJson:[{
				        "featureType": "water",
				        "elementType": "all",
				        "stylers": {
				        	"color": "#95c0fdff"
				        }
					},{
		                "featureType": "land",
		                "elementType": "all",
		                "stylers": {
		                	"color": "#ffffffff"
		                }
		        	}]
			});
			let point = new BMap.Point(120.21937542,30.25924446);
			that.map.centerAndZoom(point, 15);
			let geolocation = new BMap.Geolocation();
			geolocation.getCurrentPosition(function(r){
				if(this.getStatus() == BMAP_STATUS_SUCCESS){
					that.map.centerAndZoom(r.point, 15);
					that.map.enableScrollWheelZoom();
				}
				else {
					alert('failed'+this.getStatus());
				}
			},{enableHighAccuracy: true})
		  	
			this.map.addEventListener("click",function(e){
				console.log(e.point);
				that.map.clearOverlays();
				that.circle = new BMap.Circle(e.point,1000,{strokeColor:"#00ffcc", strokeWeight:2,fillColor:'#00ffcc',fillOpacity:'0.5'});//创建圆
				that.map.addOverlay(that.circle);//增加圆
				that.circle.enableEditing();
				/*that.circle.addEventListener('lineupdate',function(event){
					console.log(event)
				})*/
			});
		},
		methods:{
			addxClick(){
				let that = this;
				console.log(this.addxList)
				axios({
					method:'post',
					url:this.$store.state.http +'/enclose/add',
					data:Qs.stringify(this.addxList)
				}).then(function(message){
					if(message.data.resCode==0){
						that.$message({
				        	message: '添加成功',
				        	type: 'success'
				        });
				        that.addx = false;
					}else{}
				})
			},
			getBoundary(city,k){
				let that = this;
				that.dataList();
				
				that.addxList.enclSpe = city;
				let bdary = new BMap.Boundary();
				bdary.get(city, function(rs){//获取行政区域
					console.log(rs)
					that.map.clearOverlays();//清除地图覆盖物       
					let count = rs.boundaries.length;//行政区域的点有多少个
					if (count === 0) {
						alert('未能获取当前输入行政区域');
						return ;
					}
		          	let pointArray = [];
					if(k == 0){
						that.addx = true;
						for (let i = 0; i < count; i++) {
							let ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 2, strokeColor: "#ff0000"}); //建立多边形覆盖物
							that.map.addOverlay(ply);  //添加覆盖物
							pointArray = pointArray.concat(ply.getPath());
							that.map.setViewport(pointArray);
						}
					}else{
						for (let i = 0; i < count; i++) {
							let ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 2, strokeColor: "#ff0000"}); //建立多边形覆盖物
							pointArray = pointArray.concat(ply.getPath());
						}
						that.map.setViewport(pointArray);    //调整视野
						/*that.map.centerAndZoom(that.map.getCenter(), 8);*/
					}
				});
			},
			handleSelect(key, keyPath){
				this.activeIndex = key
			},
			addEnclosure(){
				if(this.circle){
					this.dataList();
					this.add = true;
					this.addList.enclLong=this.circle.getCenter().lng;
					this.addList.enclDimen=this.circle.getCenter().lat;
					this.addList.endRadius=parseInt(this.circle.getRadius(),10);
					this.addList.userId=sessionStorage.getItem('userId')
				}
			},
			dataList(){
				let that = this;
				axios({
					method:'post',
					url:this.$store.state.http +'/group/groupByCar',//查看分组信息
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
			},
			handleNodeClick(A){
				/*console.log(A)*/
				if(!A.children){
					console.log(A.positionerId)
					this.addList.positionerid = A.positionerId;
					this.addxList.positionerid = A.positionerId;
					this.changeList.positionerid = A.positionerId;
					
				}
			},
			addClick(){
				let that = this;
				console.log(this.addList)
				axios({
					method:'post',
					url:this.$store.state.http +'/enclose/add',
					data:Qs.stringify(this.addList)
				}).then(function(message){
					if(message.data.resCode==0){
						that.$message({
				        	message: '添加成功',
				        	type: 'success'
				        });
				        that.add = false;
				        that.customList();
					}else{}
				})
			},
			customList(){
				let that = this;
				console.log(this.addList)
				axios({
					method:'post',
					url:this.$store.state.http +'/enclose/list',//自定义围栏列表
					data:Qs.stringify({userId:sessionStorage.getItem('userId')})
				}).then(function(message){
					console.log(message.data.result)
					if(message.data.resCode==0){
						that.custom = message.data.result;
					}else{}
				})
			},
			changeCustom(index){
				this.changeList = {
		    		enclId:this.custom[index].enclId,
		    		enclName:this.custom[index].enclName,
		    		enclLong:this.custom[index].enclLong,
		    		enclDimen:this.custom[index].enclDimen,
		    		endRadius:this.custom[index].endRadius,
		    		positionerid:this.custom[index].positionerid
		    	}
				this.change = true;
				this.dataList();
				console.log(this.custom[index])
			},
			changeClick(){
				let that = this;
				console.log(this.changeList)
				axios({
					method:'post',
					url:this.$store.state.http +'/enclose/updateById',
					data:Qs.stringify(this.changeList)
				}).then(function(message){
					if(message.data.resCode==0){
						that.$message({
				        	message: '修改成功',
				        	type: 'success'
				        });
				        that.change = false;
				        that.customList();
					}else{
						that.$message({
				        	message: '修改失败',
				        	type: 'warning'
				        });
					}
				})
			},
			changexCity(city){
				console.log(city)
				this.title = city;
				let that = this;
				console.log(this.changeList)
				axios({
					method:'post',
					url:this.$store.state.http +'/enclose/listByenclSpe',
					data:Qs.stringify({
						enclSpe:city
					})
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						that.changex = true;
						that.datas = message.data.result
					}
				})
				
			},
			deleteCustom(index){
				let that = this;
				
				this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					axios({
						method:'post',
						url:this.$store.state.http +'/enclose/deleById',
						data:Qs.stringify({
							enclId:index
						})
					}).then(function(message){
						console.log(message.data)
						if(message.data.resCode==0){
							that.customList();
							that.$message({
					        	message: '删除成功',
					        	type: 'success'
					        });
					        that.changexCity(that.title);
						}else{
							that.$alert(message.data.result, '系统确认框', {
								confirmButtonText: '确定'
							})
						}
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			}
		}
	}
</script>

<style scoped="scoped">
	.el-input,.el-select {
		width: 180px;
	}
	.el-menu-item{padding: 0;}
	.titleChoice{text-align: center;}
	.titleLeft{position: relative;}
	.titleRight{width: 100%;}
	#fenceSet{display: flex;width: 100%;height: 100%;}
	#allmap{width: 100%;height:100%;}
	.el-tree{height: 50%;}
	.time{width: 200px!important;}
	.head{display: flex;justify-content: space-around;}
	.head>div{width: 50%;text-align: center;height: 36px;line-height: 36px;cursor: pointer;}
	.height{width: 300px; height: 90%;overflow-y: scroll;}
	.posi{position: absolute;left: -100px;top: 50px;width: 100px;}
	.p{height: 36px;line-height: 36px;}
</style>