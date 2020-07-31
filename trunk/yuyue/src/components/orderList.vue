<template>
	<div id="orderList" style="background:#efefef;">
		<div class="title">
			<div v-for="(tit,index) in title" :key="index" @click="active(index)" class="a">{{tit}}</div>
		</div>
		<div class="clear"></div>
		<div v-if="parameter==1||parameter==0" class="complete">
			<ul>
				<li @click="completeClick(complete)" v-for='complete in completeList' :key="complete.orderid">
					<h5><span>订单号：{{complete.resId}}</span><span v-if='complete.state==1'>进行中</span><span v-if='complete.state==3'>未付款</span></h5>
					<div class="la">
						<div>
							<div><i class="s"></i>开始时间: {{complete.startTime}}</div>
							<div><i class="e"></i>结束时间: {{complete.endTime?complete.endTime:'-'}}</div>
						</div>
						<div><img style="margin-top:-0.1rem;" src="../../static/image/shangjiant.png" /></div>
					</div>
				</li>
			</ul>
		</div>
		<div v-if="parameter==2||parameter==0" class="unComplete">
			<ul>
				<router-link :to="{path:'/detailed',query:{orderid:uncomplete.resId,ids:uncomplete.status}}"  v-for='uncomplete in uncompleteList' :key="uncomplete.orderid">
					<li>
						<h5><span>订单号：{{uncomplete.resId}}</span><span v-if="uncomplete.state==2">已取消</span><span v-if="uncomplete.state==0">已完成</span></h5>
						<div class="la">
							<div>
								<div><i class="s"></i>开始时间: {{uncomplete.startTime}}</div>
								<div><i class="e"></i>结束时间: {{uncomplete.endTime?complete.endTime:'-'}}</div>
							</div>
							<div><img style="margin-top:-0.1rem;" src="../../static/image/shangjiant.png" /></div>
						</div>
					</li>
				</router-link>
			</ul>
		</div>
		<div v-if="kbBox==0" class="kbBox">
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
				completeList: [],
				uncompleteList: [],
				parameter:1,
				title:['全部','进行中','已完成',],
				kbBox:'',
				pic:'-'
			}
		},
		methods: {
			completeClick(val){
				console.log(val)
				if(this.completeList[0].state==3){
					this.$router.push({path:'/money',query:{'orderid':val.orderid}})
				}else{
					console.log(190)
					this.$router.push({path:'/detailed',query:{'orderid':val.resId}})
				}
			},
			active(index){
				console.log(index)
				let a=document.getElementsByClassName('a');
				let len = a.length;
				for (let i=0;i<len;i++) {
					a[i].style.borderColor = '#FFFFFF';
					a[i].style.color = '#333333';
				}
				a[index].style.borderColor = '#f68b1b';
				a[index].style.color = '#f68b1b';
				this.parameter=index;
				if(index==0){
					if(this.completeList.length==0&&this.uncompleteList.length==0){
						this.kbBox=0;
					}else{
						this.kbBox=1;
					}
				}else if(index==1){
					if(this.completeList.length==0){
						this.kbBox=0;
					}else{
						this.kbBox=1;
					}
				}else{
					if(this.uncompleteList.length==0){
						this.kbBox=0;
					}else{
						this.kbBox=1;
					}
				}
			},
			fmtDate(obj){
				if(obj){
					var date = new Date(obj);  
			    var y = date.getFullYear();    
			    var m = date.getMonth() + 1;    
			    m = m < 10 ? ('0' + m) : m;    
			    var d = date.getDate();    
			    d = d < 10 ? ('0' + d) : d;    
			    var h = date.getHours();  
			    h = h < 10 ? ('0' + h) : h;  
			    var minute = date.getMinutes();  
			    var second = date.getSeconds();  
			    minute = minute < 10 ? ('0' + minute) : minute;    
					second = second < 10 ? ('0' + second) : second; 
			    return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;    					
				}else{
					return '无'
				}		      
			}
		},
		mounted: function() {
			/*console.log(this.fmtDate(1524533280000))*/
			document.title=this.$route.meta.title;
			let a=document.getElementsByClassName('a')[1];
			let that=this;
			a.style.borderColor = '#f68b1b';
			a.style.color = '#f68b1b';
			this.$http({
				method: 'post',
				url: this.httpUrl+'app/reserve/orderTinishType',
				data: Qs.stringify({
					// openid:this.testOpenid,
					openid:'o8Aq-5l7z77xAOW1E_8x18iEdAvU',
					// openid:localStorage.getItem('openid'),
					// 
					status:3
				})
			}).then(function(message){
				console.log(message.data);
				if(message.data.resCode==200){
					// if(message.data.result.vreserve
					// .vreserve.status==1||message.data.result.vreserve.status==3
					// ){
						// that.kbBox=1;
						// if(message.data.result.vreserve){
							// let len = message.data.result.vreserve.length;
							// that.completeList.push(message.data.result[0])
							// that.completeList[0].timeS = that.fmtDate(that.completeList[0].startdate.time)
							// that.completeList[0].timeE = that.fmtDate(that.completeList[0].enddate.time)
							/*console.log(that.completeList[0].startdate.time)*/
							// for (let i=0;i<message.data.result.vreserve.length;i++) {
								/*console.log(message.data.result[i+1])*/
								// that.uncompleteList.push(message.data.result.vreserve[i])
								// that.uncompleteList[i].timeS = that.fmtDate(message.data.result.vreserve[i].startTime)
								// that.uncompleteList[i].timeE = that.fmtDate(message.data.result.vreserve[i].endTime)
							// }
							/*console.log(that.uncompleteList)*/
						// }
					// }else{
					// 	that.kbBox=0;
					// 	let len = message.data.result.length;
					// 	for (let i=0;i<len;i++) {
					// 		that.uncompleteList.push(message.data.result[i])
					// 		that.uncompleteList[i].timeS = that.fmtDate(message.data.result[i].startdate.time)
					// 		that.uncompleteList[i].timeE = that.fmtDate(message.data.result[i].enddate.time)
					// 	}
					// 	that.active(0)
					// 	console.log(that.uncompleteList)
					// }
					if(message.data.result.vreserve){
						// that.uncompleteList=message.data.result.vreserve
						if(message.data.result.vreserve.length>0){
							
							for(let i =0;i<message.data.result.vreserve.length;i++){
								if(message.data.result.vreserve[i].status == 1){
									//未完成
									that.completeList.push(message.data.result.vreserve[i])
									// that.completeList.length==0?that.kbBox=0:that.kbBox=1
									
									
								//   that.completeList[i].timeS = that.fmtDate(message.data.result.vreserve[i].startTime)
								//   that.completeList[i].timeE = that.fmtDate(message.data.result.vreserve[i].endTime)
								}else{
									//已完成
									that.uncompleteList.push(message.data.result.vreserve[i])
									// that.uncompleteList.length==0?that.kbBox=0:that.kbBox=1
								//   that.uncompleteList[i].timeS = that.fmtDate(message.data.result.vreserve[i].startTime)
								//   that.uncompleteList[i].timeE = that.fmtDate(message.data.result.vreserve[i].endTime)
								}
							}
						}
					}
				}else{
					// that.kbBox=0
				}
			})
			console.log(that.completeList.length)
			if(that.completeList.length==0){
				that.kbBox=0
			}
		}
	}
</script>

<style scoped="scoped">
	.title {z-index: 999; width: 100%; position: fixed;top: 0; display: flex;margin-bottom: 10px;background-color: #FFFFFF;justify-content: space-around;border-bottom: 1px solid #D8D8D8;}
	.title div{text-align: center;font-size: 0.32rem;height: 36px;line-height: 36px;border-bottom: 2px solid #FFFFFF;color: #333333;}
	.title .active{border-bottom: 2px solid #f68b1b;color: #f68b1b;}
	.clear {height:50px ;}
	li {
		background-color: white;
		    width: 97%;
    		margin: 0 auto;
		/* border-bottom: 1px solid #D8D8D8;
		border-top: 1px solid #D8D8D8; */
		margin-bottom: 0.2rem;
		border-radius: 5px;
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
	.la div div{color: #787878; font-size: 0.24rem;display: flex;height: 26px;line-height: 26px;}
	.la div i{display: block; width: 8px;height: 8px;border-radius: 50%;margin: 10px 10px 10px 20px;}
	.s{background-color: #49c58f;}
	.e{background-color: #e94255;}
	h5{color: #333333;font-size: 0.28rem;display: flex;line-height: 24px;padding-top: 10px;padding-left: 10px;justify-content: space-between;}
	h5 span{display: block;padding:2px 5px;line-height: 1;margin-left: 10px;margin-right: 10px;}
	h5 span:nth-of-type(2){color: #f68b1b;font-size: 0.24rem;}
	.kbBox{width: 100%;text-align: center;color: #787878;padding-top: 100px;}
	.kb{width: 30%;margin: auto;}
	.kbBox p{padding: 10px 0;}
</style>