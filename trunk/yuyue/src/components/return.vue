<template>
    <div class="body">
        <div id="index-center">
        <div class="index-top-upState">{{lk}}</div>
        <div class="index-center-top">
          <div class="index-top-span">{{address}}-{{id}}车位</div>
          <div style="text-align:center;padding-top:1rem;color:#fff;">车牌号码：{{car}}</div>
          <!-- <div class="index-top-upState">上方无物体</div> -->
          <!-- <img onclick="window.history.go(-1)" class="index-center-img1" src="img/back_w.png"/> -->
          <p>电量过低</p>
          <!-- <a href="remind.html"><img class="index-center-img2" src="img/logo.png"/></a> -->
        </div>
        <div class="index-center-center">
          <img class="index-switch" src="../../static/image/swith_3.png"/>
        </div>
        <div class="index-center-bottom">
          <div class="index-center-bottom-f">
            <div class="index-center-bottom-s"></div>
            <!-- <div>剩余电量：<span id="index-electricity"> <img id="loading" src="img/loading.gif"/></span><br />信号强度：<span class="signal">良好</span></div> -->
            <div>信号强度：<span class="signal">{{sm}}</span></div>
            <div class="index-center-bottom-n"></div>
          </div>
        </div>
		</div>





      <!-- <p style="font-size:15px;margin-left:0.2rem;padding-top:0.2rem;"></p>
      <p style="font-size:15px;margin-left:0.2rem;margin-top:0.2rem;">车牌号码：{{car}}</p> -->
       <!--  -->
       <!-- <div style="width:2.9rem;height:2.5rem;margin:2rem auto;">
         <img src="../../static/image/binds.png" alt="" style="width:100%;height:100%;">
       </div>
       <div class="leve">请于尽快驶离车位锁上方</div>
       <div style="margin:0.5rem auto;width:80%;display:flex;justify-content: space-between">
         <span>上次入场时间</span>
         <span>{{righ}}</span>
       </div> -->
       <div style="font-size:15px;text-align:center;width:80%;height:0.8rem;background:#fb851c;margin:0.5rem auto;border-radius:5px;line-height:0.8rem;color:#fff;" @click="go">升起</div>
    </div>
     
</template>
<script>
import Qs from 'qs'
  import { Indicator,MessageBox } from 'mint-ui';
  import {serchstates} from './api/api.js'
	import axios from 'axios'
export default {
  data(){
    return{
      name:'',
      address:'',
      id:'',
      righ:'',
      car:'',
      statePH:'',
      sm:'',
      lk:''
    }
  },
    mounted(){
      // document.title=this.$route.meta.title;
      this.name=localStorage.getItem('addres')
      this.address=localStorage.getItem('name')
      this.id=localStorage.getItem('devid')
      this.car=localStorage.getItem('carnumbar')
      this.righ=localStorage.getItem('startdate')
      let datas={
				devId: this.id,
				// devId: '56008352',
				datastreamIds:'3001,4002,4003'
      }
      let that=this;
			serchstates(datas).then(message=>{
				that.statePH=JSON.parse(message.data.errMsg.substring(6,message.data.errMsg.length)).data.datastreams[2].datapoints[0].value;
				let upState=JSON.parse(message.data.errMsg.substring(6,message.data.errMsg.length)).data.datastreams[0].datapoints[0].value;
				let xinState=JSON.parse(message.data.errMsg.substring(6,message.data.errMsg.length)).data.datastreams[1].datapoints[0].value;
				console.log(that.statePH)
				console.log(upState)
				console.log(xinState)
        if(xinState<15){
         that.sm='差'
        }else if(xinState>=15&&xinState<25){
          that.sm="良好"
        }else if(xinState>=25&&xinState<=31){
          that.sm="优"
        }else{
          that.sm="优"
        }
        if(upState==3){
          that.lk="上方无物体"
        }else if(upState==2){
         that.lk="上方有物体"
        }else{
          that.lk="超声波故障"
        }
			})
      // serchstates()
    },
    methods:{
      go(){
        if(this.statePH==0){
          MessageBox('提示','车位锁处于升起状态，请驶离')
        }else{
						Indicator.open({
					text: 'Loading...',
					spinnerType: '加载中'
				});
				let data = {
					devId: this.id,
					// devId:'56008352',
					cmd:18,
					cmdValue:'11'
				};
				axios({
					method:'post',
					url:'http://39.104.113.112:8799/parkingData/queryGetDate',
					data:Qs.stringify(data)
				}).then(res=>{
					console.log(res)
					if(res.data.resCode==10){
						Indicator.close();
						MessageBox('提示','设备离线')
					}else if(res.data.resCode==0){
							let that=this;
					var timeB = setInterval(function() {
						let data = {
							devId: that.id,
							// devId:'56008352',
							datastreamIds:'3001'
						};
						console.log(data);
						axios({
							method:'post',
							url:'http://39.104.113.112:8799/parkingData/getData',
							data:Qs.stringify(data)
						}).then(message=>{
							console.log(message)
							let state=JSON.parse(message.data.errMsg.substring(6,message.data.errMsg.length)).data.datastreams[0].datapoints[0].value;
							if(state == 0) {
									Indicator.close();
									MessageBox({
										title:'提示',
										message:'升起完成',
										closeOnClickModal:false
									}).then(action=>{
										that.$rouetr.push('/homePage')
									})
									clearInterval(timeB);
								
								
								} else{
									Indicator.close();
									MessageBox({
										title:'提示',
										message:'操作失败，请重新操作',
										closeOnClickModal:false
									}).then(action=>{
										that.$rouetr.push('/return')
									})
									clearInterval(timeB);
								}
						})

					}, 3000)
					}else  if(res.data.resCode==3){
						Indicator.close();
						MessageBox('提示','设备未入库')
					}
					
				})
				}
			
			}
      
    }
}
</script>
<style scoped>
 /* body{
        	background: #f5f5f5;
        	width: 100%;
        	height: 100%;
        }
    	.top{
    		width: 100%;
    		height: 1.5rem;
    		line-height: 1.5rem;
        text-align: center;
    	}
    	.top img{margin-top: 0.25rem;}
      .pay{
        width: 100%;
        height:0.24rem;
        line-height: 0.24rem;
        text-align: center;
        font-size: 24px;
        color:#00a0e9;
      }
      .emty{
        width: 100%;
        height: 28px;
      }
      .price{
        width: 100%;
        height: 0.28rem;
        line-height: 0.28rem;
        text-align: center;
        color: #000;
        font-weight: bold;
        font-size: 28px;

        font-family: "Microsoft Yahei"
      }
      .leve{
        width: 100%;
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: center;

        color:#666;
        font-size: 16px;
        font-family: "Microsoft Yahei"
      }
      .emtyTwo{
        width: 100%;
        height: 0.2rem;
        background: #fff;
      } */
      #index-center {
	width: 100%;
	background: -webkit-linear-gradient(#f2bc61, #f59326);
	/* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(#f2bc61, #f59326);
	/* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(#f2bc61, #f59326);
	/* Firefox 3.6 - 15 */
	background: linear-gradient(#f2bc61, #f59326);
	/* 标准的语法 */
	min-height: 6.4rem;
	height: 52%;
	position: relative;
}

.index-center-top {
	position: relative;
	width: 100%;
	height: 0.8rem;
	margin-bottom: 0.4rem;
}

.index-center-top p {
	position: absolute;
	left: 25%;
	bottom: 0;
	color: #FFFFFF;
	font-size: 1.4rem;
	width: 50%;
	height: 0.34rem;
	text-align: center;
	line-height: 0.34rem;
	display: none;
}

.index-center-top .index-center-img1 {
	width: 0.4rem;
	position: absolute;
	left: 5%;
	bottom: 0;
}
.index-top-span{
	width: 100%;
	height: 0.4rem;
	text-align: center;
	line-height: 0.4rem;
	font-size: 15px;
	color: #ffffff;
	position: absolute;
	left: 0%;
	bottom: 0
}
.index-top-upState{
	width: 100%;
	height: 20px;
	text-align: center;
	line-height: 20px;
	font-size: 14px;
	color: #ffffff;
	position: absolute;
	left: 0%;
	bottom: 5px;
}
.index-center-top .index-center-img2 {
	width: 22px;
	position: absolute;
	right: 5%;
	bottom: 0;
}

.index-center-center {
	width: 100%;
	text-align: center;
	position: relative;
}

.index-center-center .index-switch {
	width: 150px;
}

.index-center-center .index-bell {
	width: 22px;
	position: absolute;
	right: 5%;
	top: 0;
}

.index-center-bottom {
	width: 100%;
	text-align: center;
	position: relative;
}

.index-center-bottom-f {
	padding: 1px;
	border: 1px solid #ffffff;
	width: 150px;
	height: 7px;
	border-radius: 7px;
	color: #FFFFFF;
	margin-left: -76px;
	position: absolute;
	left: 50%;
	top: 15px;
}

.index-center-bottom-n {
	padding-top: 10px;
	font-size: 1.4rem
}

.index-center-bottom-s {
	background-color: #FFFFFF;
	width: 100%;
	height: 7px;
	border-radius: 7px;
	margin-bottom: 10px;
}
</style>
