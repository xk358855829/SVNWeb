<template>
	<div id="card">
		<div class="title">
			<div class="switch active" @click="news">普通车牌</div>
			<div class="switch" @click="used">新能源车牌</div>
		</div>
		<p class="prompt">点击对应输入框可单独修改输入文字</p>
		<div class="used" v-if="card == 0">
			<div class="a" @click="cardA('0')">{{a[0]}}</div>
			<div class="a" @click="cardA('1')">{{a[1]}}</div>
			<p></p>
			<div class="a" @click="cardA('2')">{{a[2]}}</div>
			<div class="a" @click="cardA('3')">{{a[3]}}</div>
			<div class="a" @click="cardA('4')">{{a[4]}}</div>
			<div class="a" @click="cardA('5')">{{a[5]}}</div>
			<div class="a" @click="cardA('6')">{{a[6]}}</div>
		</div>
		<div class="used" v-else-if="card == 1">
			<div class="a" @click="cardA('0')">{{b[0]}}</div>
			<div class="a" @click="cardA('1')">{{b[1]}}</div>
			<p></p>
			<div class="a" @click="cardA('2')">{{b[2]}}</div>
			<div class="a" @click="cardA('3')">{{b[3]}}</div>
			<div class="a" @click="cardA('4')">{{b[4]}}</div>
			<div class="a" @click="cardA('5')">{{b[5]}}</div>
			<div class="a" @click="cardA('6')">{{b[6]}}</div>
			<div class="a" @click="cardA('7')">{{b[7]}}</div>
		</div>
		<div class="addBox">
			<div v-if="add==0" class="unadd">添加</div>
			<div v-if="add==1" class="add" @click="addCard()">添加</div>
		</div>
		
		<div class="keyboard" v-if="hide == 1">
			<span v-if="zeroList==1" class="buttonOne" @click="choice(list)" v-for="list in oneList">{{list}}</span>
			<span v-if="zeroList==2" class="buttonTwo" @click="choice(list)" v-for="list in twoList">{{list}}</span>
			<span v-if="zeroList==3" class="buttonThree" @click="choice(list)" v-for="list in threeList">{{list}}</span>
		</div>
		<div v-if="code==0||code==1||code==2||code==3" id="popup">
			<div v-if="code==0" class="popupBox">
				<p>添加成功</p>
				<p><img src="../../static/image/dg.png"/></p>
				<p @click="next()">确定</p>
			</div>
			<div v-if="code==1" class="popupBox">
				<p>添加失败</p>
				<p><img src="../../static/image/dx.png"/></p>
				<p @click="next()">确定</p>
			</div>
			<div v-if="code==2" class="popupBox">
				<p>请勿重复添加相同车牌</p>
				<p><img src="../../static/image/dx.png"/></p>
				<p @click="next()">确定</p>
			</div>
			<div v-if="code==3" class="popupLod">
				<img src="../../static/image/loding.gif"/>
			</div>
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	export default {
		name: 'card',
		data() {
			return {
				parameter:0,
				add:0,
				card:0,
				a:['','','','','','',''],
				b:['','','','','','','',''],
				hide:0,
				zeroList:1,
				oneList:["京","沪","浙","苏","粤","鲁","晋","冀","豫","川","渝","辽","吉","黑","皖","鄂","津","贵","云","桂","琼","青","新","藏","蒙","宁","甘","陕","闽","赣","湘"],
            	twoList:['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'],
            	threeList:[0,1,2,3,4,5,6,7,8,9,'Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'],
            	code:4
			}
		},
		methods: {
			used(){
				this.add=0;
				this.card=1,
				this.parameter=0;
				this.zeroList=1;
				let swh = document.getElementsByClassName('switch');
				swh[1].classList.add('active');
				swh[0].classList.remove('active');
				let a = document.getElementsByClassName('a');
				let len = a.length
				for (let i=0;i<len;i++) {
					a[i].style.borderColor = '#cccccc';
					a[i].innerHTML='';
				}
				a[0].style.borderColor = '#F68B1B';
				this.a=['','','','','','',''];
			},
			news(){
				this.add=0;
				this.card=0;
				this.parameter=0;
				this.zeroList=1;
				let swh = document.getElementsByClassName('switch');
				swh[0].classList.add('active')
				swh[1].classList.remove('active')
				let a = document.getElementsByClassName('a');
				let len = a.length
				for (let i=0;i<len;i++) {
					a[i].style.borderColor = '#cccccc';
					a[i].innerHTML='';
				}
				a[0].style.borderColor = '#F68B1B';
				this.b=['','','','','','','','']
			},
			cardA(index){
				this.parameter=Number(index);
				let a = document.getElementsByClassName('a');
				let len = a.length
				for (let i=0;i<len;i++) {
					a[i].style.borderColor = '#cccccc';
				}
				a[index].style.borderColor = '#F68B1B';
				if(index==0){
					this.zeroList = 1;
					this.hide = 1
				}else if(index==1){
					this.zeroList = 2;
					this.hide = 1
				}else{
					this.zeroList = 3;
					this.hide = 1
				}
			},
			choice(con){
				let a = document.getElementsByClassName('a');
				let len = a.length
				a[this.parameter].innerHTML=con;
				if(this.card==0){
					this.a[this.parameter]=String(con);
				}else{
					this.b[this.parameter]=String(con);
				}
				
				
				for (let i=0;i<len;i++) {
					a[i].style.borderColor = '#cccccc';
				}
				a[this.parameter].style.borderColor = '#F68B1B';
				if(this.parameter==0){
					this.zeroList = 2;
					this.hide = 1
				}else{
					this.zeroList = 3;
					this.hide = 1
				}
				if(this.card==0){
					if(this.a[0]!=''&&this.a[1]!=''&&this.a[2]!=''&&this.a[3]!=''&&this.a[4]!=''&&this.a[5]!=''&&this.a[6]!=''){
						this.add=1;
					}else{
						this.add=0;
					}
					if(this.parameter<6){
						this.parameter=this.parameter+1;
					}else {
						for (let i=0;i<this.a.length;i++) {
							if(this.a[i]==''){
								this.add=0;
								console.log(this.a)
							}
						}
					}
				}else{
					if(this.b[0]!=''&&this.b[1]!=''&&this.b[2]!=''&&this.b[3]!=''&&this.b[4]!=''&&this.b[5]!=''&&this.b[6]!=''&&this.b[7]!=''){
						this.add=1;
					}else{
						this.add=0;
					}
					if(this.parameter<7){
						this.parameter=this.parameter+1;
					}
				}
			},
			addCard(){
				let brand;
				let that = this;
				that.code = 3;
				if(this.card==0){
					brand = this.a.join('')
				}else{
					brand = this.b.join('')
				}
				this.$http({
					method: 'get',
					url: this.httpUrl+'brand/add?openid='+localStorage.getItem('openid')+'&brandname='+brand
				}).then(function(message){
					console.log(message.data)
					that.code = message.data.resCode;
				})
			},
			next(){
				this.code=3;
				this.$router.go(-1);
			}
		},
		mounted: function() {
			document.title=this.$route.meta.title;
			this.parameter=0;
			let a = document.getElementsByClassName('a');
			a[0].style.borderColor = '#F68B1B';
			this.zeroList = 1;
			this.hide = 1;
		}
	}
</script>
<style>
	.title {display: flex;margin-bottom: 0.2rem;background-color: #FFFFFF;justify-content: space-around;border-bottom: 1px solid #D8D8D8;}
	.title div{text-align: center;font-size: 0.32rem;height: 0.72rem;line-height: 0.72rem;border-bottom: 2px solid #FFFFFF;color: #333333;}
	.title .active{border-bottom: 2px solid #f68b1b;color: #f68b1b;}
	.used{background-color: #FFFFFF; display: flex;width: 90%;justify-content: center;padding: 0.4rem 5%;margin: 0 auto; }
	.used div{width: 0.5rem;height: 0.5rem;border: 1px solid #CCCCCC;text-align: center;line-height: 0.5rem;margin:0 5px;border-radius:4px ;font-size: 0.24rem}
	.used p{width: 0.10rem;height: 0.10rem;background-color: #333333;margin: 0.23rem 0.1rem;border-radius: 50%;}
	.keyboard{ display: flex;flex-flow: wrap;justify-content: center; width: 100%;position: absolute;margin:0 auto;height: 6rem;bottom: 0.5rem;/*left: 50%;margin-left: -3rem;*/}
	.buttonOne{font-size: 0.32rem; display: block;border: 1px solid #F68B1B;margin: 0.12rem;width: 0.7rem;height: 0.7rem;text-align: center;line-height: 0.7rem;background-color: #FFFFFF;}
	.buttonTwo{font-size: 0.32rem; display: block;border: 1px solid #F68B1B;margin: 0.12rem;width: 0.7rem;height: 0.7rem;text-align: center;line-height: 0.7rem;background-color: #FFFFFF;}
	.buttonThree{font-size: 0.36rem; display: block;border: 1px solid #F68B1B;margin: 0.08rem;width: 0.5rem;height: 0.7rem;text-align: center;line-height: 0.7rem;background-color: #FFFFFF;}
	.buttonOne:active{background-color: #F68B1B;color: #FFFFFF;}
	.buttonTwo:active{background-color: #F68B1B;color: #FFFFFF;}
	.buttonThree:active{background-color: #F68B1B;color: #FFFFFF;}
	.addBox{background-color: #FFFFFF;padding-bottom: 1rem;}
	.add{border-radius: 5px; background-color: #F68B1B;width: 80%;text-align: center;height: 0.88rem;line-height: 0.88rem;font-size: 0.32rem;border: 1px solid #F68B1B;color: #FFFFFF;margin: 0 auto;}
	.add:active{border: 1px solid #20B2AA;}
	.unadd{border-radius: 5px;background-color: #CCCCCC;width: 80%;text-align: center;height: 0.88rem;line-height: 0.88rem;font-size: 0.32rem;border: 1px solid #CCCCCC;color: #FFFFFF;margin: 0 auto;}
	
	
	#popup{width: 100%;height: 100%;background-color: rgba(0,0,0,0.3);position: absolute;left: 0;top: 0;}
	.popupBox{width: 60%;background-color: #FFFFFF;text-align: center;margin: 50% 20%;border-radius:5px ;}
	.popupBox p{height: 0.6rem;line-height: 0.6rem;font-size: 0.28rem;color: #F68B1B;}
	.popupBox p:nth-of-type(1){padding-top: 0.1rem;}
	.popupBox p:nth-of-type(2){margin: 0.18rem 0;}
	.popupBox p:nth-of-type(3){border-top:1px solid #D8D8D8;height: 0.8rem;line-height: 0.8rem;}
	.popupBox img{width: 0.6rem;}
	.popupBox p:nth-of-type(3):active{background-color: #F68B1B;color: #FFFFFF;}
	.popupLod{width: 60%;text-align: center;margin: 50% 20%;}
	.popupLod img{width: 50%;}
	.prompt{background-color: #FFFFFF;text-align: center;color: #787878;padding: 0.1rem;}
</style>