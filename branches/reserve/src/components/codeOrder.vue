<template>
	<div id="codeOrder">
		<div class="parking">
			<p>{{name}}</p>
		</div>
		<div class="parkingInformation">
			<p><span><span><img class="imgs" src="../../static/image/wz.png"/></span><span class="cLeft">停车位置：</span></span><span>{{position.alias}}</span></p>
			<p style="position: relative;">
				<span>
					<span>
						<img class="imgs" src="../../static/image/chepai.png"/>
					</span><span class="cLeft">选择车牌：</span>
				</span>
				<span @click="brandB()">{{brandname}}&nbsp;<img style="width: 0.3rem;" src="../../static/image/jt.png"/></span>
				<ul v-if="brand==1" id="brandnameList">
					<li @click="brandN(index)" v-for="(brand,index) in brandnameList">{{brand.brandname}}</li>
					<li><router-link class='addCard' to='/card'>+</router-link></li>
				</ul>
			</p>
			<p><span><span><img class="imgs" src="../../static/image/sf.png"/></span><span class="cLeft">收费单价：</span></span><span>{{unitPrice}}元/时</span></p>
			<p class="ktime">
				<span><span><img class="imgs" src="../../static/image/kssj.png"/></span><span class="cLeft">开始时间：</span></span>
				<!--<span class="ktimeP" @click="timeClick('k')">-->
				<span class="ktimeP">
					{{ktime[0]}}年{{ktime[1]}}月{{ktime[2]}}日{{ktime[3]}}时{{ktime[4]}}分
				</span>
			</p>
			<p class="mtime">
				<span><span><img class="imgs" src="../../static/image/jssj.png"/></span><span class="cLeft">结束时间：</span></span>
				<span class="ktimeP" @click="timeClick('m')">
					{{mtime[0]}}年{{mtime[1]}}月{{mtime[2]}}日{{mtime[3]}}时{{mtime[4]}}分
				</span>
			</p>
			<p><span><span><img class="imgs" src="../../static/image/yjsf.png"/></span><span class="cLeft">预计收费：</span></span><span>{{totalPrice}}元</span></p>
		</div>
		<div class="notice">注：结束时间仅作参考，实际收费以最终结算时间为准</div>
		<div class="setUp" @click="submission()"><div>确认下单</div></div>
		<div v-if="code==0||code==1||code==2||code==3||code==4||code==5||code==6" id="popup">
			<div v-if="code==0" class="popupBox">
				<p>恭喜您！预约成功</p>
				<p><img src="../../static/image/dg.png"/></p>
				<p @click="nextOk()">确定</p>
			</div>
			<div v-if="code==1" class="popupBox">
				<p>预约失败，请重试</p>
				<p><img src="../../static/image/dx.png"/></p>
				<p @click="nextRefresh()">确定</p>
			</div>
			<div v-if="code==2" class="popupBox">
				<p>预约失败！你还有未完成订单</p>
				<p><img src="../../static/image/dx.png"/></p>
				<p @click="next()">确定</p>
			</div>
			<div v-if="code==3" class="popupBox">
				<p>目标时间不能早于开始时间</p>
				<p><img src="../../static/image/dx.png"/></p>
				<p @click="next()">确定</p>
			</div>
			<div v-if="code==4" class="popupBox">
				<p>开始时间不要早于当前时间</p>
				<p><img src="../../static/image/dx.png"/></p>
				<p @click="next()">确定</p>
			</div>
			<div v-if="code==5" class="popupBox">
				<p>请先添加车牌</p>
				<p><img src="../../static/image/dx.png"/></p>
				<p @click="nextCard()">确定</p>
			</div>
			<div v-if="code==6" class="popupLod">
				<img src="../../static/image/loding.gif"/>
			</div>
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	import Picker from 'better-picker'
	export default {
		name: 'codeOrder',
		data() {
			return {
				position:[{alias:''}],
				brandname:'',
				brandnameList:[{brandname:''}],
				unitPrice:'5.00',
				name:'',
				dtime:[' ',' ',' ',' ',' '],
				ktime:[' ',' ',' ',' ',' '],
				mtime:[' ',' ',' ',' ',' '],
				totalPrice:'2.00',
				yearList:[
					{text: '2018',value: 0},
					{text: '2019',value: 1}
				],
				monthList:[
					{text: '01',value: 0},
					{text: '02',value: 1},
					{text: '03',value: 2},
					{text: '04',value: 3},
					{text: '05',value: 4},
					{text: '06',value: 5},
					{text: '07',value: 6},
					{text: '08',value: 7},
					{text: '09',value: 8},
					{text: '10',value: 9},
					{text: '11',value: 10},
					{text: '12',value: 11}
				],
				dayList:[],
				dayListA:[
					{text: '01',value: 0},
					{text: '02',value: 1},
					{text: '03',value: 2},
					{text: '04',value: 3},
					{text: '05',value: 4},
					{text: '06',value: 5},
					{text: '07',value: 6},
					{text: '08',value: 7},
					{text: '09',value: 8},
					{text: '10',value: 9},
					{text: '11',value: 10},
					{text: '12',value: 11},
					{text: '13',value: 12},
					{text: '14',value: 13},
					{text: '15',value: 14},
					{text: '16',value: 15},
					{text: '17',value: 16},
					{text: '18',value: 17},
					{text: '19',value: 18},
					{text: '20',value: 19},
					{text: '21',value: 20},
					{text: '22',value: 21},
					{text: '23',value: 22},
					{text: '24',value: 23},
					{text: '25',value: 24},
					{text: '26',value: 25},
					{text: '27',value: 26},
					{text: '28',value: 27},
					{text: '29',value: 28},
					{text: '30',value: 29},
					{text: '31',value: 30}
				],
				dayListB:[
					{text: '01',value: 0},
					{text: '02',value: 1},
					{text: '03',value: 2},
					{text: '04',value: 3},
					{text: '05',value: 4},
					{text: '06',value: 5},
					{text: '07',value: 6},
					{text: '08',value: 7},
					{text: '09',value: 8},
					{text: '10',value: 9},
					{text: '11',value: 10},
					{text: '12',value: 11},
					{text: '13',value: 12},
					{text: '14',value: 13},
					{text: '15',value: 14},
					{text: '16',value: 15},
					{text: '17',value: 16},
					{text: '18',value: 17},
					{text: '19',value: 18},
					{text: '20',value: 19},
					{text: '21',value: 20},
					{text: '22',value: 21},
					{text: '23',value: 22},
					{text: '24',value: 23},
					{text: '25',value: 24},
					{text: '26',value: 25},
					{text: '27',value: 26},
					{text: '28',value: 27}
				],
				dayListC:[
					{text: '01',value: 0},
					{text: '02',value: 1},
					{text: '03',value: 2},
					{text: '04',value: 3},
					{text: '05',value: 4},
					{text: '06',value: 5},
					{text: '07',value: 6},
					{text: '08',value: 7},
					{text: '09',value: 8},
					{text: '10',value: 9},
					{text: '11',value: 10},
					{text: '12',value: 11},
					{text: '13',value: 12},
					{text: '14',value: 13},
					{text: '15',value: 14},
					{text: '16',value: 15},
					{text: '17',value: 16},
					{text: '18',value: 17},
					{text: '19',value: 18},
					{text: '20',value: 19},
					{text: '21',value: 20},
					{text: '22',value: 21},
					{text: '23',value: 22},
					{text: '24',value: 23},
					{text: '25',value: 24},
					{text: '26',value: 25},
					{text: '27',value: 26},
					{text: '28',value: 27},
					{text: '29',value: 28},
					{text: '30',value: 29}
				],
				hourList:[
					{text: '00',value: 0},
					{text: '01',value: 1},
					{text: '02',value: 2},
					{text: '03',value: 3},
					{text: '04',value: 4},
					{text: '05',value: 5},
					{text: '06',value: 6},
					{text: '07',value: 7},
					{text: '08',value: 8},
					{text: '09',value: 9},
					{text: '10',value: 10},
					{text: '11',value: 11},
					{text: '12',value: 12},
					{text: '13',value: 13},
					{text: '14',value: 14},
					{text: '15',value: 15},
					{text: '16',value: 16},
					{text: '17',value: 17},
					{text: '18',value: 18},
					{text: '19',value: 19},
					{text: '20',value: 20},
					{text: '21',value: 21},
					{text: '22',value: 22},
					{text: '23',value: 23}
				],
				minuteList:[
					{text: '00',value: 0},
					{text: '01',value: 1},
					{text: '02',value: 2},
					{text: '03',value: 3},
					{text: '04',value: 4},
					{text: '05',value: 5},
					{text: '06',value: 6},
					{text: '07',value: 7},
					{text: '08',value: 8},
					{text: '09',value: 9},
					{text: '10',value: 10},
					{text: '11',value: 11},
					{text: '12',value: 12},
					{text: '13',value: 13},
					{text: '14',value: 14},
					{text: '15',value: 15},
					{text: '16',value: 16},
					{text: '17',value: 17},
					{text: '18',value: 18},
					{text: '19',value: 19},
					{text: '20',value: 20},
					{text: '21',value: 21},
					{text: '22',value: 22},
					{text: '23',value: 23},
					{text: '24',value: 24},
					{text: '25',value: 25},
					{text: '26',value: 26},
					{text: '27',value: 27},
					{text: '28',value: 28},
					{text: '29',value: 29},
					{text: '30',value: 30},
					{text: '31',value: 31},
					{text: '32',value: 32},
					{text: '33',value: 33},
					{text: '34',value: 34},
					{text: '35',value: 35},
					{text: '36',value: 36},
					{text: '37',value: 37},
					{text: '38',value: 38},
					{text: '39',value: 39},
					{text: '40',value: 40},
					{text: '41',value: 41},
					{text: '42',value: 42},
					{text: '43',value: 43},
					{text: '44',value: 44},
					{text: '45',value: 45},
					{text: '46',value: 46},
					{text: '47',value: 47},
					{text: '48',value: 48},
					{text: '49',value: 49},
					{text: '50',value: 50},
					{text: '51',value: 51},
					{text: '52',value: 52},
					{text: '53',value: 53},
					{text: '54',value: 54},
					{text: '55',value: 55},
					{text: '56',value: 56},
					{text: '57',value: 57},
					{text: '58',value: 58},
					{text: '59',value: 59}
				],
				selectors:0,
				parameter:'',
				canshu:'0',
				code:7,
				orderNumber:'',
				brand:0
			}
		},
		methods: {
			timeClick(km){
				let that = this;
				let selected=[];
				if(km === 'k'){
					if(that.ktime[0]==='2018'){
						selected[0]=0;
					}else if(that.ktime[0]==='2019'){
						selected[0]=1;
					}
					selected[1]=(Number(that.ktime[1])-1);
					selected[2]=(Number(that.ktime[2])-1);
					selected[3]=(Number(that.ktime[3]));
					selected[4]=(Number(that.ktime[4]));
				}else{
					if(that.mtime[0]==='2018'){
						selected[0]=0;
					}else if(that.mtime[0]==='2019'){
						selected[0]=1;
					}
					selected[1]=(Number(that.mtime[1])-1);
					selected[2]=(Number(that.mtime[2])-1);
					selected[3]=(Number(that.mtime[3]));
					selected[4]=(Number(that.mtime[4]));
				}
				let picker = new Picker({
					data: [that.yearList,that.monthList,that.dayListA,that.hourList,that.minuteList],
					selectedIndex: selected,
					title: '请选择时间'
				});
				
				picker.show();
				picker.on('picker.select', function (selectedVal, selectedIndex) {
					if(km === 'k'){
						that.ktime = [that.yearList[selectedVal[0]].text,that.monthList[selectedVal[1]].text,that.dayListA[selectedVal[2]].text,that.hourList[selectedVal[3]].text,that.minuteList[selectedVal[4]].text];
					}else{
						that.mtime = [that.yearList[selectedVal[0]].text,that.monthList[selectedVal[1]].text,that.dayListA[selectedVal[2]].text,that.hourList[selectedVal[3]].text,that.minuteList[selectedVal[4]].text]
					}
					that.money();
					console.log(that.ktime)
					//console.log(that.mtime)
				})
				picker.on('picker.change', function (selectedVal, selectedIndex) {
					//console.log(selectedVal)
					//console.log(selectedIndex)
					if(selectedVal === 1){
						if(selectedIndex === 0||selectedIndex === 2||selectedIndex === 4||selectedIndex === 6||selectedIndex === 7||selectedIndex === 9||selectedIndex === 11){
							picker.refillColumn(2, that.dayListA)
						}else if(selectedIndex === 1){
							picker.refillColumn(2, that.dayListB)
						}else{
							picker.refillColumn(2, that.dayListC)
						}
					}
				})
			},
			money(){
				let that = this;
				let time = new Date(that.mtime[0]+'/'+that.mtime[1]+'/'+that.mtime[2]+' '+that.mtime[3]+':'+that.mtime[4]).getTime()-new Date(that.ktime[0]+'/'+that.ktime[1]+'/'+that.ktime[2]+' '+that.ktime[3]+':'+that.ktime[4]).getTime()
				that.totalPrice = (((time/1000)/60)/60*that.unitPrice).toFixed(0);
			},
			brandB(){
				if(this.brand == 0){
					this.brand = 1;
				}else{
					this.brand = 0;
				}
			},
			brandN(index){
				console.log(index)
				this.brandname = this.brandnameList[index].brandname;
				this.brand = 0;
			},
			submission(){
				let d = new Date(this.dtime[0]+'/'+this.dtime[1]+'/'+this.dtime[2]+' '+this.dtime[3]+':'+this.dtime[4]).getTime();
				let k = new Date(this.ktime[0]+'/'+this.ktime[1]+'/'+this.ktime[2]+' '+this.ktime[3]+':'+this.ktime[4]).getTime();
				let m = new Date(this.mtime[0]+'/'+this.mtime[1]+'/'+this.mtime[2]+' '+this.mtime[3]+':'+this.mtime[4]).getTime();
				let that = this;
				if(k-d<0){
					this.code=4;
				}else if(m-k<0){
					this.code=3;
				}else{
					if(localStorage.getItem('openid')&&this.unitPrice&&this.brandname&&this.position[0].id&&this.name){
						this.$http({
							method: 'post',
							url: this.httpUrl+'order/add',
							data: Qs.stringify({
								openid:localStorage.getItem('openid'),
								startDate:this.ktime[0]+'-'+this.ktime[1]+'-'+this.ktime[2]+':'+this.ktime[3]+':'+this.ktime[4]+':00',
								endDate:this.mtime[0]+'-'+this.mtime[1]+'-'+this.mtime[2]+':'+this.mtime[3]+':'+this.mtime[4]+':00',
								price:this.unitPrice,
								carnumber:this.brandname,
								carlockid:this.position.id,
								address:this.name
							})
						}).then(function(message){
							console.log(message.data)
							if(message.data.resCode==0){
								that.code=0;
								that.orderNumber=message.data.result;
								console.log(that.orderNumber)
							}else{
								that.code=message.data.resCode;
							}
						})
					}else{
						alert('非法操作')
						that.$router.push({path:'/'})
					}
				}
			},
			nextOk(){
				this.$router.push({path:'/detailed',query:{orderid:this.orderNumber}})
			},
			next(){
				this.code=7;
			},
			nextCard(){
				this.$router.push({path:'/card'})
			},
			nextRefresh(){
				location.reload();
			}
		},
		mounted: function() {
			let that=this;
			//alert(this.$route.query.id);
			//this.unitPrice=this.$route.query.price;
			//this.name = this.$route.query.name;
			this.$http({
				method: 'post',
				url: this.httpUrl+'parkinglot/findCarId',
				data: Qs.stringify({
					carLockId:that.$route.query.id
				})
			}).then(function(message){
				console.log(message.data)
				if(message.data.resCode == 0){
					that.unitPrice = message.data.result1.price;
					that.name = message.data.result1.name;
					that.position = message.data.result;
					that.totalPrice = message.data.result1.price*2;
				}
			})
			this.$http({
				method: 'post',
				url:  this.httpUrl+'brand/list',
				data: Qs.stringify({
					openid:localStorage.getItem('openid')
				})
			}).then(function(message){
				console.log(message.data.result)
				if(message.data.result=='未添加车牌'){
					that.code=5;
				}else{
					that.brandnameList = message.data.result;
					let len=that.brandnameList.length;
					for (var i=0;i<len;i++) {
						if(that.brandnameList[i].priority==1){
							that.brandname = message.data.result[i].brandname;
						}
					}
					
				}
			})
			document.title=this.$route.meta.title;
			this.dtime[0] = String(new Date().getFullYear());
			this.dtime[1] = String((new Date().getMonth()+1)<=9?'0'+(new Date().getMonth()+1):(new Date().getMonth()+1));
			this.dtime[2] = String(new Date().getDate()<=9?'0'+(new Date().getDate()):(new Date().getDate()));
			this.dtime[3] = String(new Date().getHours()<=9?'0'+(new Date().getHours()):(new Date().getHours()));
			this.dtime[4] = String(new Date().getMinutes()<=9?'0'+(new Date().getMinutes()):(new Date().getMinutes()));
			this.mtime = [String(new Date().getFullYear()),String((new Date().getMonth()+1)<=9?'0'+(new Date().getMonth()+1):(new Date().getMonth()+1)),String(new Date().getDate()<=9?'0'+(new Date().getDate()):(new Date().getDate())),String((new Date().getHours()+2)<=9?'0'+(new Date().getHours()+2):(new Date().getHours()+2)),String(new Date().getMinutes()<=9?'0'+(new Date().getMinutes()):(new Date().getMinutes()))];
			this.ktime = [String(new Date().getFullYear()),String((new Date().getMonth()+1)<=9?'0'+(new Date().getMonth()+1):(new Date().getMonth()+1)),String(new Date().getDate()<=9?'0'+(new Date().getDate()):(new Date().getDate())),String(new Date().getHours()<=9?'0'+(new Date().getHours()):(new Date().getHours())),String(new Date().getMinutes()<=9?'0'+(new Date().getMinutes()):(new Date().getMinutes()))];
			this.money();
			/*console.log(new Date(this.dtime[0]+'/'+this.dtime[1]+'/'+this.dtime[2]+' '+this.dtime[3]+':'+this.dtime[4]).getTime())*/
			/*let time = new Date(that.mtime[0]+'/'+that.mtime[1]+'/'+that.mtime[2]+' '+that.mtime[3]+':'+that.mtime[4]).getTime()-new Date(that.ktime[0]+'/'+that.ktime[1]+'/'+that.ktime[2]+' '+that.ktime[3]+':'+that.ktime[4]).getTime()
			that.totalPrice = ((time/1000)/60)/60*that.unitPrice;*/
		}
	}
</script>

<style scoped="scoped">
	#codeOrder{height: 100%;}
	.parking{top: 0;z-index: 9;background-color: #FFFFFF;width: 100%;}
	.parking p{font-size: 0.32rem;text-align: center;height:1.22rem; line-height: 1.22rem;}
	#allmap{width: 100%;height: 100%;}
	.parkingInformation{background-color: #FFFFFF;}
	.parkingInformation p{font-size: 0.26rem; border-top: 1px solid #D8D8D8;height: 1.22rem; line-height: 1.22rem;display: flex;justify-content: space-between;padding: 0 5%;}
	.parkingInformation p span:nth-of-type(1){width: 40%;}
	.parkingInformation p span:nth-of-type(2){text-align: right;color: #787878;}
	.cLeft {width: 100%;color: #333333!important;font-size: 0.26rem;margin-left: 0.25rem;}
	.parkingInformation p:nth-last-of-type(1){font-size: 0.24rem;}
	.timeSelector{ border-top: 1px solid #F68B1B; background-color:#FFFFFF ;position: absolute;bottom: 0;width: 100%;}
	.xianDA{width: 10%;border-bottom:1px solid #D8D8D8;height: 1.38rem;position: absolute;top: 0;left: 45%;}
	.xianDB{width: 10%;border-top:1px solid #D8D8D8;position: absolute;top: 2.2rem;height: 1.38rem;left: 45%;}
	.xianXA{width: 100%;position: absolute;height: 1px; top: 1.38rem;background-color: #D8D8D8;}
	.xianXB{width: 100%;position: absolute;height: 1px; top: 2.2rem; background-color: #D8D8D8;}
	.year,.month,.day,.hour,.minute{width: 100%;text-align: center;height: 0.8rem;overflow: scroll;padding: 1.4rem 0;}
	.timeSelector span{font-size: 0.32rem;display: block;width: 20%; height: 0.68rem;line-height: 0.72rem;margin: 0 auto;}
	.ktime,.mtime{display: flex;}
	.ktime .ktimeP span{border: 1px solid #D8D8D8;padding: 0 5px;}
	.mtime .ktimeP span{border: 1px solid #D8D8D8;padding: 0 5px;}
	.notice{text-align: center;margin: 0.44rem 0;color: #787878;}
	.setUp{z-index: 9;width: 100%;height: 0.92rem;text-align: center;}
	.setUp div{border: 1px solid #F68B1B;width: 90%;margin:7px auto;height: 0.88rem;line-height: 0.88rem;font-size: 0.34rem;background-color: #F68B1B;border-radius:8px;color: #FFFFFF;}
	.imgs{width: 0.44rem;height: 0.44rem; position: relative;top: 5px;}
	#popup{width: 100%;height: 100%;background-color: rgba(0,0,0,0.3);position: absolute;left: 0;top: 0;}
	.popupBox{width: 60%;background-color: #FFFFFF;text-align: center;margin: 50% 20%;border-radius:5px ;}
	.popupBox p{height: 0.6rem;line-height: 0.6rem;font-size: 0.28rem;color: #F68B1B;}
	.popupBox p:nth-of-type(1){padding-top: 5px;}
	.popupBox p:nth-of-type(2){margin: 9px 0;}
	.popupBox p:nth-of-type(3){border-top:1px solid #D8D8D8;height: 0.8rem;line-height: 0.8rem;}
	.popupBox img{width: 0.6rem;}
	.popupBox p:nth-of-type(3):active{background-color: #F68B1B;color: #FFFFFF;}
	.popupLod{width: 60%;text-align: center;margin: 50% 20%;}
	.popupLod img{width: 50%;}
	
	#brandnameList{position: absolute;width: 100px;background-color: #FFFFFF;z-index: 999;right: 0;top: 1.22rem;text-align: center;border:1px solid #D8D8D8 ;overflow: scroll;max-height: 3.7rem;}
	#brandnameList li{line-height: 0.72rem;border-bottom: 1px solid #D8D8D8;}
	#brandnameList li:nth-last-of-type(1){border:none;}
	.addCard{border: 1px solid #787878;width: 0.4rem;height: 0.4rem;display: block;line-height: 0.4rem;border-radius:50% ;margin: 0.16rem 0.8rem;color: #787878;}
</style>