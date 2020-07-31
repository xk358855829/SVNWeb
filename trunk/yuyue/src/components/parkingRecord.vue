<template>
	<div id="parkingRecord">
		<div  v-if="parameter==1" class="unComplete">
			<ul>
				<li v-for='uncomplete in uncompleteList'>
					<h5>
						<span><img src="../../static/image/tesc.png"/></span>
						<span>{{uncomplete.timeS}}</span>
						
					</h5>
					<div class="la">
						<div>
							<div><i class="s"></i>停车位置: {{uncomplete.address}}</div>
							<div><i class="e"></i>停车时长: {{uncomplete.timeZ}}</div>
						</div>
					</div>
				</li>
			</ul>
			<p class="notes">没有更多了</p>
		</div>
		<div v-if="parameter==0" class="kbBox">
			<img class="kb" src="../../static/image/kbym.png"/>
			<p>暂无记录</p>
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	export default {
		name: 'orderList',
		data() {
			return {
				uncompleteList: [],
				parameter:0
			}
		},
		methods: {
			fmtDate(obj){
			    let date = new Date(obj);  
			    let y = date.getFullYear();    
			    let m = date.getMonth() + 1;    
			    m = m < 10 ? ('0' + m) : m;    
			    let d = date.getDate();    
			    d = d < 10 ? ('0' + d) : d;    
			    let h = date.getHours();  
			    h = h < 10 ? ('0' + h) : h;  
			    let minute = date.getMinutes();  
			    let second = date.getSeconds();  
			    minute = minute < 10 ? ('0' + minute) : minute;    
			    second = second < 10 ? ('0' + second) : second;
			    return y + ' 年 ' + m + ' 月 ' + d+' 日 '+h+':'+minute/*+':'+second*/;    
			},
			hoursTime(mss){
				let days = (mss / (1000 * 60 * 60 * 24)).toFixed(0);
        		let hours = ((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toFixed(0);
        		let minutes = ((mss % (1000 * 60 * 60)) / (1000 * 60)).toFixed(0);
        		if(days != '0'){
        			return days + " 日 " + hours + " 时 " + minutes + " 分 ";
        		}else{
        			return hours + " 时 " + minutes + " 分 ";
        		}
			}
		},
		mounted: function() {
			/*console.log(this.fmtDate(1524533280000))*/
			document.title=this.$route.meta.title;
			let that=this;
			this.$http({
				method: 'post',
				url: that.httpUrl+'order/find',
				data: Qs.stringify({
					openid:localStorage.getItem('openid')
				})
			}).then(function(message){
				console.log(message.data);
				if(message.data.resCode==0){
					that.parameter = 1;
					if(message.data.result[0].state==1||message.data.result[0].state==3){
						if(message.data.result){
							let len = message.data.result.length-1;
							for (let i=0;i<len;i++) {
								/*console.log(message.data.result[i+1])*/
								that.uncompleteList.push(message.data.result[i+1])
								that.uncompleteList[i].timeZ = that.hoursTime(message.data.result[i+1].enddate.time - message.data.result[i+1].startdate.time)
								that.uncompleteList[i].timeS = that.fmtDate(message.data.result[i+1].startdate.time);
							}
							console.log(that.uncompleteList)
						}
					}else{
						let len = message.data.result.length;
						for (let i=0;i<len;i++) {
							that.uncompleteList.push(message.data.result[i])
							that.uncompleteList[i].timeZ = that.hoursTime(message.data.result[i].enddate.time - message.data.result[i].startdate.time)
							that.uncompleteList[i].timeS = that.fmtDate(message.data.result[i].startdate.time)
						}
						console.log(that.uncompleteList)
					}
				}
			})
		}
	}
</script>

<style scoped="scoped">
	.notes{text-align: center;padding-bottom: 1rem;color: #787878;}
	.title {z-index: 999; width: 100%; position: fixed;top: 0; display: flex;margin-bottom: 10px;background-color: #FFFFFF;justify-content: space-around;border-bottom: 1px solid #D8D8D8;}
	.title div{text-align: center;font-size: 0.32rem;height: 36px;line-height: 36px;border-bottom: 2px solid #FFFFFF;color: #333333;}
	.title .active{border-bottom: 2px solid #f68b1b;color: #f68b1b;}
	.clear {height:50px ;}
	li {
		background-color: white;
		border-bottom: 1px solid #D8D8D8;
		border-top: 1px solid #D8D8D8;
		margin-bottom: 10px;
	}
	.la{display: flex;justify-content: space-between;}
	.la img{
		transform: rotate(90deg);
		-ms-transform: rotate(90deg);
		-moz-transform: rotate(90deg);
		-webkit-transform: rotate(90deg);
		-o-transform: rotate(90deg);
	}
	.la>div{padding: 5px 0;}
	.la div img{margin: 6px 0;}
	.la div div{color: #787878; font-size: 0.24rem;display: flex;height: 0.52rem;line-height: 0.52rem;}
	.la div i{display: block; width: 0.16rem;height: 0.16rem;border-radius: 50%;margin: 0.2rem 0.2rem 0.2rem 0.4rem;}
	.s{background-color: #49c58f;}
	.e{background-color: #e94255;}
	h5{color: #333333;display: flex;font-size: 0.32rem;font-weight: 600;height: 0.4rem;line-height: 0.4rem;padding-top: 0.2rem;padding-bottom:0.1rem;}
	h5 img{width: 0.4rem;padding: 0 0.1rem 0 0.3rem;}
	h5 span{}
	
	.kbBox{width: 100%;text-align: center;color: #787878;padding-top: 100px;}
	.kb{width: 30%;margin: auto;}
	.kbBox p{padding: 10px 0;}
</style>