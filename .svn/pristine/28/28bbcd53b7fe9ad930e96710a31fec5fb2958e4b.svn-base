<template>
	<div class="box" style="">
		
			<div v-if="!detailshow" style="margin-bottom:0.99rem;height:100%;overflow-y:auto;-webkit-overflow-scrolling : touch;">
				<footer>
					<img src="../../../static/image/puxi.png" alt="">
					<div>{{this.orders.cname}}</div>
				</footer>
				<section class="top">
					<ul>
						<li class="time">
							<div>预约时间</div>
							<div>
								<span @click="openPickerstart">{{(dangtime).slice(5,16)}}</span>
								<mt-datetime-picker
									ref="picker"
									v-model="pickerVisible"
									type="datetime"
									year-format="{value}"
									month-format="{value}"
									date-format="{value}"
									hour-format="{value}"
									minute-format="{value}"
									@confirm="handleConfirm">
								</mt-datetime-picker>
								<span>-</span>
								<span @click="openPickerend">{{(dangtimes).slice(5,16)}}</span>
								<mt-datetime-picker
									ref="picekrs"
									v-model="pickerVisibles"
									type="datetime"
									year-format="{value}"
									month-format="{value}"
									date-format="{value}"
									hour-format="{value}"
									minute-format="{value}"
									@confirm="handleConfirms">
								</mt-datetime-picker>
								<img src="../../../static/image/arrow.png" alt="">
							</div>
						</li>
						<li>
							<div>支付方式</div>
							<div>微信
								
							</div>
						</li>
					</ul>
				</section>
				<section>
					<ul class="secul">
						<li>
							<div>联系人</div>
							<div>
								<input type="text" v-model="name" style="" placeholder="请输入联系人" @blur="bottocenter">
							</div>

						</li>
						<li>
							<div>联系方式</div>
							<div>
								<input type="text" v-model="phone" placeholder="请输入联系方式" @blur="bottocenter">
							</div>
							
						</li>
						<li>
							<div>车牌号</div>
							<div>
								<input type="text" v-model="carnumber" placeholder="请输入车牌号" @blur="bottocenter">
							</div>
							
						</li>
						<li>
							<div>停车地址</div>
							<div>
								<input type="text" v-model="arr" placeholder="请输入停车地址" @blur="bottocenter"></input>
								<!-- <img src="../../../static/image/arrow.png" alt=""> -->
							</div>
						</li>
						<li>
							<div>备注</div>
							<div>
								<input type="text" v-model="listremark" placeholder="请输入备注" @blur="bottocenter"></input>
							</div>
						</li>
					</ul>
				</section>
				
			</div>
		
		<div class="foot">
			<div>￥{{this.orders.money}}</div>
			<div @click="yesPay">确认下单</div>
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	import {bus} from '../bus/bus.js'
	import {formatDate,Login,showTime} from '../api/api.js'
	import {isLicensePlate} from '../api/filter.js'
	import { MessageBox ,DatetimePicker} from 'mint-ui';
	import {mapMutations,mapState} from 'vuex'
	export default {
		name: 'list',
		// inject:['reload'],
		data() {
			return {
				detailshow:false,
				listremark:'',
				listdetail:'',
				arr:'',
				carnumber:'',
				name:'',
				phone:'',
				pickerVisible:'',
				pickerVisibles:'',
				// birthday:'',
				objs:Object,
				dangtime:'',
				dangtimes:''
			}
		},
		created(){
			// var that=this;
			// bus.$on("nols",function(val){
			// 	that.arr=val
			// })
			// 111111111111111111111?
			console.log(this.mark)
		},
		watch:{
			$route(to,from){
				console.log(to.path);
				if(to.path=='/home'){
					that.USER({
						name:'',
						phone:'',
						carnumber:'',
						birthday:'',
						birthdays:''
					})
				}
			}
		},
		computed:{
			...mapState(['mark','address','userInfo','orders'])
		},
		methods: {
			...mapMutations(['ORDERDETAIL','USER']),
			bottocenter(){
				window.scrollTo(0,0)
			},
			nic(val){
				console.log(this.dangtime)
				this.USER({
					name:this.name,
					phone:this.phone,
					carnumber:this.carnumber,
					birthday:this.dangtime,
					birthdays:this.dangtimes
				})
				this.$router.push({path:val})
			},
			yesPay(){
				if(!this.name||!this.phone||!this.carnumber||!this.arr||!this.listremark){
					MessageBox('提示','请输入订单信息');
				}else{
					if(!(/^1[2|3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.phone))||!isLicensePlate(this.carnumber)){
						MessageBox('提示','手机号码或车牌号码不正确');
					}else{
						let that=this;
						let data={
							// openid:'oOKex1Ow5nB_qymzrzj4L7Gm7snU',
							openid:localStorage.getItem('openid'),
							payment:'微信',
							uname:that.name,
							money:that.orders.money,
							// sold:that.orders.sold,
							// sold:11,
							cname:that.orders.cname,  
							phone:that.phone,
							country:that.carnumber,  
							address:that.arr,  
							memarks:that.listremark,
							starTime:that.birthday?that.birthday:that.dangtime,
							endTime:that.birthdays?that.birthdays:that.dangtimes
						}
						console.log(data)
						let a=new Date(data.starTime).getTime()
						let b=new Date(data.endTime).getTime()
						let c=new Date().getTime()
						if(a>b){
							MessageBox('提示','开始时间不能早于结束时间')
							return
						}
						if(a<c||b<c){
							MessageBox('提示','预约时间不能晚于当前时间')
							return
						}
						console.log(a)
						console.log(b)
						Login(data).then(res=>{
							if(res.data.resCode=="0"){
								MessageBox({
									title:'提示',
									message:'下单成功',
									 closeOnClickModal:false,  
								}).then(action=>{
									that.USER({
										name:'',
										phone:'',
										carnumber:'',
										birthday:'',
										birthdays:'',
										address:'',
                						mark:''
									})
									localStorage.setItem('number','下单成功')
									that.$router.push('/success')
								})
								
							}else{
								MessageBox({
									title:'提示',
									message:res.data.result,
									closeOnClickModal:false, 
								})
							}
						})
					}
				}
				// this.$router.push('/success')
			},
			openPickerstart() {
				this.$refs.picker.open();
				console.log(this.pickerVisible)
				this.pickerVisible=this.dangtime
				console.log()
			},
			openPickerend(){
				this.$refs.picekrs.open()
				this.pickerVisibles=this.dangtimes
			},
			 openPicker() {
				this.$refs.picker.open();
			},

			handleConfirm (data) {
				this.dangtime = formatDate(data);   //获取的时间为时间戳，getdata是自己写的一个转换时间的方法
				console.log(this.birthday)
			},
			handleConfirms(data){
				this.dangtimes = formatDate(data);
			}
		},
		mounted: function() {
			document.title=this.$route.meta.title;
			this.dangtime=showTime()
			this.dangtimes=showTime()
			this.listremark=this.mark
			this.arr=this.address
			this.name=this.userInfo.name
			this.phone=this.userInfo.phone
			this.carnumber=this.userInfo.carnumber
			this.objs=this.$route.query.val
			if(this.userInfo.birthday){
				this.dangtime=this.userInfo.birthday
			}else{
				this.dangtime=this.dangtime
			}
			if(this.userInfo.birthday){
				this.dangtimes=this.userInfo.birthdays
			}else{
				this.dangtimes=this.dangtimes
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../style/mixin.scss';
	html,body{
		-webkit-overflow-scrolling: touch;
	}
	.square{@include font(15px,0.98rem,'PingFang-SC-Regul');color: #fff;}
	.box{background: #efefef;@include wh(100%,105%);}
	footer{@include wh(6.86rem,1.76rem);position: relative;margin:0 auto;padding-top:0.4rem;margin-bottom:0.4rem;}
	footer img{@include wh(100%,100%);}
	footer div{@include wh(100%,0.4rem);margin:0 auto;position: absolute;top:40%;text-align: center;@include font(34px,0.6rem,'PingFang-SC-Regul');color:rgb(254,254,254);}
	section,ul{width:6.86rem;margin:0 auto;}
	section li{margin:0 auto;display: flex;justify-content: space-between;@include wh(91%,1.2rem);background: #fff;padding:0 0.3rem;}
	section li div:nth-child(1){@include font(15px,1.2rem,'PingFang-SC-Regul');}
	.time{border-bottom: 0.02rem solid rgb(239,239,239);}
	section li div:nth-child(2){@include font(15px,1.2rem,'PingFang-SC-Regul');color: rgb(246,139,28)}
	.top{margin-bottom:0.4rem!important;}
	// li p{@include wh(0.07rem,0.12rem);}
	li img{@include wh(0.16rem,0.24rem);}
	input{border: none;outline: none;text-align: right;@include font(15px,1.2rem,'PingFang-SC-Regul');color:rgb(104,104,104);height: 0.8rem;}
	.foot{@include wh(100%,.98rem);display: flex;position: fixed;bottom:0;font-size: 15px;}
	.foot div {color: #fff;}
	.foot div:nth-child(1){@include wh(70%,100%);background: rgb(41,41,41);@extend .square;padding-left: 0.6rem;}
	.foot div:nth-child(2){@extend .square;@include wh(30%,100%);background: rgb(246,139,28);text-align: center;}
	.secul li{border-bottom: 0.02rem solid rgb(239,239,239);}
	// .time span{font-size:10px;}
	textarea{width:100%;height:98%;border:0;text-align:right;line-height: 30px;}
	input{line-height: 0.35rem!important;}
</style>
