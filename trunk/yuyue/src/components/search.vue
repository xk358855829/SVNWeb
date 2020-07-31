<template>
	<div id="search">
		<div class="input"><input @input="lookup($event)" v-model="val" placeholder='请输入需要去的地方' /><div @click="lookup()">搜索</div></div>
		<div id="container"></div>
		<ul>
			<li v-for="(search,index) in searchList"   @click ="goParkingLot(index)">
				<div><img src="../../static/image/dtwz.png"/></div>
				<div class="li">
					<p>{{search.title}}</p>
					<p>{{search.address}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'search',
		data() {
			return {
				val: '',
				searchList:[]
			}
		},
		methods: {
			lookup($event) {
				let that = this;
				let map = new BMap.Map("container");
				map.centerAndZoom(new BMap.Point(Number(sessionStorage.getItem('dLng')), Number(sessionStorage.getItem('dLat'))), 14);
				let options = {
					onSearchComplete: function(results) {
				        if (local.getStatus() == BMAP_STATUS_SUCCESS){
				            that.searchList=[];
				            let len = 0;
				            if(results.getCurrentNumPois()>=5){
				            	len = 5;
				            }else{
				            	len = results.getCurrentNumPois()
				            }
				            for (let i = 0; i < len; i ++){
				                that.searchList.push(results.getPoi(i));
				            }
				            console.log(that.searchList)
				        }      
				    }
				};
				let local = new BMap.LocalSearch(map, options);
				local.search(this.val);
			},
			goParkingLot(index){
				console.log(index)
				let that = this;
				sessionStorage.setItem('mLng',that.searchList[index].point.lng);
				sessionStorage.setItem('mLat',that.searchList[index].point.lat);
				this.$router.push('/parkingLot');
			}
		},
		mounted() {
			document.title=this.$route.meta.title;
			document.getElementsByTagName('input')[0].focus();
		}
	}
</script>
<style scoped="scoped">
#search{margin: 0;}
li{margin:0 5%;width: 90%; background-color: #FFFFFF;display: flex;}
li img{margin: 0.44rem 0.2rem;}
li .li{width: 90%;padding-top: 0.2rem;}
li p{overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-size: 0.32rem;line-height: 0.48rem;}
li p:nth-of-type(2){font-size: 0.24rem;border-bottom: 1px solid #D8D8D8;padding-bottom: 0.2rem;color: #787878;}
.input{width: 90%;margin:0 5%;padding: 5% 0; display: flex;height: 0.72rem;}
.input input{-webkit-appearance: none;width: 80%;text-indent:0.24rem ;font-size: 0.28rem;border-radius:0px;border: 1px solid #D8D8D8; border-bottom-left-radius:5px ;border-top-left-radius:5px ;border-right:none ;}
.input div{width: 20%;background-color: #F68B1B;text-align: center;line-height: 0.72rem;font-size: 0.32rem;color: #FFFFFF;border-bottom-right-radius:5px ;border-top-right-radius:5px ;}
</style>