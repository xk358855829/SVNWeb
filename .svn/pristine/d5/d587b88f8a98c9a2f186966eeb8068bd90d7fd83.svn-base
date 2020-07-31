<template>
	<div id="test">
		<el-select v-model="value1" placeholder="请选择">
			<el-option
			    v-for="item in options1"
			    :key="item.value"
			    :label="item.label"
			    :value="item.value">
			</el-option>
		</el-select>
		<el-select v-model="value2" placeholder="请选择" @change='changes'>
			<el-option
			    v-for="item in options2"
			    :key="item.value"
			    :label="item.label"
			    :value="item.value">
			</el-option>
		</el-select>
		<div class="footer">
			<p v-if='value2==0'>输入时间请不要小于15秒</p>
			<p v-if='value2==0'>{{ts}}</p>
			<el-input type='number' v-if='value2==0'
			  placeholder="请输入内容"
			  v-model="input10"
			  clearable>
			</el-input><br /><br />
			<el-button type="danger" v-if='value2==0' round @click='automatic'>开始自动控制</el-button>
			<el-button type="danger" v-if='value2==0' round @click='automaticOut'>停止自动控制</el-button>
			<el-button v-if='value2==1' type="danger" round @click='openUp'>手动开锁</el-button>
		</div>
		<p>控制指令发送次数：<span>{{count}}</span></p>
		<p v-if='value2==0'>倒计时 {{countDown}} 秒</p>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	export default {
		name:'homePage',
		data() {
			return {
		        options1: [{
		          value: 'F262FEAA02CD',
		          label: 'F262FEAA02CD'
		        }, {
		          value: 'EB9FB85CB31C',
		          label: 'EB9FB85CB31C'
		        }, {
		          value: 'C9F703ECF51F',
		          label: 'C9F703ECF51F'
		        }, {
		          value: 'D3F7AC3F2A23',
		          label: 'D3F7AC3F2A23'
		        }],
		        value1: 'F262FEAA02CD',
		        options2: [{
		          value: '0',
		          label: '自动控制'
		        }, {
		          value: '1',
		          label: '手动控制'
		        }],
		        value2: '0',
		        input10: '15',
		        timer:'',
		        times:'',
		        count:0,
		        ts:'点击开始自动控制',
		        countDown:0
			}
		},
		methods:{
			changes(){
				clearInterval(this.timer)
				clearInterval(this.times)
				this.ts='点击开始自动控制'
			},
			automatic(){
				let that = this;
				that.ts='自动控制中...'
				if(that.input10<=15){
					that.input10=15;
				}
				that.timeOut(this.input10)
			},
			timeOut(time){
				let that = this;
				that.open()
				clearInterval(that.timer)
				clearInterval(that.times)
				that.timer = setInterval(function(){
					that.open()
				},(time*1000))
			},
			automaticOut(){
				this.ts='点击开始自动控制'
				clearInterval(this.timer)
				clearInterval(this.times)
			},
			openUp(){
				clearInterval(this.timer)
				clearInterval(this.times)
				this.open()
			},
			open(){
				let that = this;
				axios({
					method:'post',
					url:'http://39.104.99.181:8055/control/up',
					data: Qs.stringify({
						macid:this.value1,
						phone:'15770831539'
					})
				}).then(function(message) {
					console.log(message);
					clearInterval(that.times)
					that.countDownT(that.input10);
					that.count++
				})
			},
			countDownT(time){
				let that = this;
				that.countDown = time;
				that.times = setInterval(function(){
					that.countDown--
				},1000)
			}
		},
		mounted:function(){
			let that = this;
			document.body.addEventListener('touchstart', function () {});
			document.title=this.$route.meta.title;
		}
	}
</script>

<style>
	#test{text-align: center;padding-top: 20px;}
	.el-select{width: 60%;}
	.el-select:nth-of-type(2){margin:100px 0 120px 0 ;}
	.footer{text-align: center;}
	.footer>.el-input{width: 60%;}
	.footer .el-button:active{background-color: #999999;color: #FFFFFF;}
	p{text-align: center;margin-top: 10px;font-size: 14px;color: #333333;margin-bottom: 10px;}
	p>span{color: red;}
</style>