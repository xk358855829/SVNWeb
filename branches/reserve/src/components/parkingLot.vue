<template>
	<div id="parkingLot">
		<p v-if="parameterTwo==0" class="title"><span class="spanActive">可预约车位</span><span @click="active(2)">公共停车场</span></p>
		<p v-if="parameterTwo==1" class="title"><span @click="active(1)">可预约车位</span><span class="spanActive">公共停车场</span></p>
		<p class="titleZoom"></p>
		<ul v-if="parameter == 1&&parameterTwo == 0">
			<li @click="select(index)" v-for="(lis,index) in list">
				<div class="card">
					<img :src="lis.imageaddress" alt="" />
					<span class="name">{{lis.name}}</span>
				</div>
				<p class="na"><span>{{lis.name}}</span><span class="km"><img src="../../static/image/dtwz.png"/>{{lis.km}} km</span></p>
				<p class="many"><span><img src="../../static/image/app.png"/>APP预约</span><span><img src="../../static/image/zxzf.png"/>在线支付</span></p>
				<p class="cot">
					<span>
						<i class="dianR"></i>
						<i>车位总量</i>
						<i style="color: #F68B1B;">{{lis.totalNumber}}</i>
					</span>
					<span>
						<i class="dianB"></i>
						<i>预定余量</i>
						<i style="color: red;">{{lis.remaining}}</i>
					</span>
				</p>
			</li>
		</ul>
		<ul id="ggtcc" v-if="parameterTwo == 1">
			<a v-for="(allmap,index) in allmapList" :href="allmap.detailUrl">
				<li>
					<div class="img"><img src="../../static/image/ggtcc.png"/></div>
					<div>
						<p style="font-size:0.28rem ;color: #333333;line-height: 1;">{{allmap.title}}</p>
						<p style="color: #787878;line-height: 1;font-size: 0.24rem;">{{allmap.km}}km</p>
					</div>
					<div class="imgs">
						<img src="../../static/image/ggtccx.png"/>
					</div>
				</li>
			</a>
		</ul>
		<div v-if="parameter == 0&&parameterTwo == 0" class="kbBox">
			<img class="kb" src="../../static/image/kbym.png"/>
			<p>附近暂无停车场</p>
		</div>
		<div style="display: none;" id="allmap"></div>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	export default{
		name:'parkingLot',
		data(){
			return {
				list:[],
				allmapList:[],
				parameter:0,
				parameterTwo:0
			}
		},
		mounted: function() {
			document.title=this.$route.meta.title;
			let that = this;
			this.$http({
				method: 'post',
				url:  this.httpUrl+'parkinglot/parkingloglist',
				data: Qs.stringify({
					longitude:sessionStorage.getItem('mLng'),
					latitude:sessionStorage.getItem('mLat')
				})
			}).then(function(message){
				/*console.log(message.data);*/
				let a=message.data.result;
				if(a.length){
					that.parameter=1;
					for (let i=0;i<a.length;i++) {
						a[i].km=a[i].km.toFixed(1)
					}
					that.list = a;
				}
			})
			
			
			let map = new BMap.Map("allmap");
			let mPoint = new BMap.Point(sessionStorage.getItem('mLng'), sessionStorage.getItem('mLat'));  
			map.centerAndZoom(mPoint, 11);
			let options = {
			    onSearchComplete: function(results){
			        if (local.getStatus() == BMAP_STATUS_SUCCESS){
			            // 判断状态是否正确
			            let s = [];
			            for (let i = 0; i < results.getCurrentNumPois(); i ++){
			                results.getPoi(i).km = (that.getDisance(sessionStorage.getItem('mLat'),sessionStorage.getItem('mLng'),results.getPoi(i).point.lat,results.getPoi(i).point.lng)/1000).toFixed(2)
			            	s.push(results.getPoi(i));
			            }
			            that.allmapList = s;
			            console.log(that.allmapList);
			        }
			    }
			 };
			let local = new BMap.LocalSearch(map, options);
			local.searchNearby('停车场',mPoint,2000);
		},
		methods:{
			active(a){
				if(a==2){
					this.parameterTwo = 1;
				}else{
					this.parameterTwo = 0;
				}
			},
			select(index){
				console.log(index)
				sessionStorage.setItem('tLng',this.list[index].longitude),
				sessionStorage.setItem('tLat',this.list[index].latitude)
				this.$router.push({path:'/order',query:{
					'id':this.list[index].id,
					'price':this.list[index].price,
					'name':this.list[index].name,
					'km':this.list[index].km,
					'totalNumber':this.list[index].totalNumber,
					'remaining':this.list[index].remaining
				}})
			},
			toRad(d) {  return d * Math.PI / 180; },
			getDisance(lat1, lng1, lat2, lng2) { /*#lat为纬度, lng为经度, 一定不要弄错*/
			    var dis = 0;
			    var radLat1 = this.toRad(lat1);
			    var radLat2 = this.toRad(lat2);
			    var deltaLat = radLat1 - radLat2;
			    var deltaLng = this.toRad(lng1) - this.toRad(lng2);
			    var dis = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(deltaLat / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(deltaLng / 2), 2)));
			    return dis * 6378137;
			}
		}
	}
</script>

<style scoped="scoped">
	.title{border-bottom: 1px solid #D8D8D8; display: flex;justify-content: space-around;font-size: 0.32rem;background-color: #FFFFFF;position: fixed;top: 0;width: 100%;z-index: 9999;}
	.titleZoom{height: 1.1rem;}
	.title span{border-bottom:2px solid #FFFFFF;height: 0.88rem;line-height: 0.88rem;color: #333333;}
	.title .spanActive{color: #F68B1B;border-bottom:2px solid #F68B1B;}
	.card{position: relative;height: 3rem;}
	.card img{width: 100%;height: 100%;}
	.name{display: block; position: absolute;width: 100%;text-align: center;font-size: 0.44rem;color: white;background-color: rgba(0,0,0,0.5);z-index: 999;height: 3rem;top: 0;left: 0;line-height: 3rem;}
	.na{font-size: 0.32rem;padding: 0.2rem;display: flex;justify-content: space-between;}
	.na>span:nth-of-type(2){font-size: 0.24rem;color: #787878;position: relative;bottom: 3px;}
	.na>span img{width: 0.16rem;margin-right: 5px;position: relative;top: 2px;}
	
	.many{color: #F68B1B;font-size: 0.24rem;}
	.many img{width: 0.32rem;position: relative;top: 3px;margin-right: 8px;margin-left: 0.2rem;}
	.many span:nth-last-of-type(1){margin-right: 0.6rem;}
	
	.cot{padding: 0.2rem;text-align: left;font-size: 0.28rem;color: #787878;display: flex;}
	.cot span{display: flex;}
	.cot span:nth-of-type(2){margin-left: 1rem;}
	.cot span i:nth-of-type(3){margin-left: 0.1rem;}
	.dianR,.dianB{width: 0.16rem;height: 0.16rem;display: block;border-radius:50% ;margin:0.06rem 0 ; margin-right: 0.1rem;margin-left: 0.05rem;}
	.dianR{background-color: #e94255;}
	.dianB{background-color: #49c58f;}
	
	
	.km{margin-left: 0.4rem;}
	.kbBox{width: 100%;text-align: center;color: #787878;padding-top: 2rem;}
	.kb{width: 30%;margin: auto;}
	.kbBox p{padding: 0.2rem 0;}
	#ggtcc{background-color: #FFFFFF;}
	#ggtcc li{display: flex;justify-content: space-between; background-color: #FFFFFF;border-bottom: 1px solid #D8D8D8;padding: 0.36rem 0;margin: 0 0.3rem;height: 0.82rem;}
	#ggtcc li div:nth-of-type(1){}
	#ggtcc li div:nth-of-type(2){width: 100%;padding-left: 0.38rem;display: flex;flex-direction: column;justify-content: space-between;}
	#ggtcc li div:nth-of-type(3){}
	#ggtcc li .img img{height: 0.6rem;margin: 0.11rem 0;}
	#ggtcc li .imgs img{height: 0.7rem;margin: 0.06rem 0;}
</style>