<template>
	<div>
		<header style="width:100%;height:0.74rem;color:#fff;font-family: 'MicrosoftYaHei';display:flex;justify-content: space-between;padding-bottom:0;" id="grad">
			<div style="font-size:16px;width:30%;line-height:0.74rem;margin-left:0.44rem;">{{timeDate.day}}{{timeDate.time}}</div>
			<div style="height:0.74rem;line-height:0.74rem;">
				<img src="../../../static/out.png" alt="">
				<span style="font-size:30px;color:#e7f7ff;font-family: 'PingFang-SC-Regular'">速利人脸识别系统</span>
			</div>
			<div style="width:30%;font-size:20px;text-align: right;margin-right:0.44rem;">
				<p><img src="" alt=""></p>
				<span style="font-size:20px;t">退出系统</span>
			</div>
			
		</header>
		<div style="width:100%;height:8.70rem;display:flex;background:#081831;padding-top:0.46rem;">
			<div style="width:3%;background:#081831;"></div>
			<div style="width:58%;height:5.78rem;border-radius:2%;border:0.02rem solid #65abf5;" class="grid">
				<div style="display:flex;justify-content: space-between;width:100%;">
					<div style="width:2.5rem;height:4rem;margin-top:1rem;margin-bottom:0.7rem;margin-left:0.46rem;">
						<div class="code-bg">
							<div class="line">
								<img src="../../../static/yadfa.png">
							</div>
							<img src="../../../static/pho.png" alt="" style="width:100%;height:100%;vertical-align: middle;">
						</div>
					</div>
					<div style="margin-bottom:0.7rem;margin-top:1rem;">
						<div style="width:1.84rem;height:1.84rem;border-radius:0.92rem;border:1px solid #00c2ff;margin:0 auto;margin-top:35%;font-size:35px;color:#fff;">
							<p style="margin-top:30%;text-align:center;">相似度</p>
							<p style="text-align:center;margin-top:5%;">100%</p>
						</div>
						<div style="width:3rem;height:0.68rem;line-height:0.68rem;border:1px solid #00c2ff;margin-top:0.8rem;border-radius:10px;color:#fff;font-size:35px;text-align:center;">审核成功</div>
					</div>
					<div style="width:2.5rem;height:4rem;margin-bottom:0.7rem;margin-top:1rem;border:1px solid #00c2ff;margin-right:0.4rem;"></div>
				</div>
				<div style="width:99%;height:2.92rem;border:2px solid #65abf5;background:#0c254c;margin-top:0.46rem;border-radius:10px;" class="my-container">
					<div class="photo-wrap">  <!-- 舞台 -->
						<div class="container">   <!-- 相册容器 -->
							<div class="img img01">
								<img :src="table[0].portrait" alt="">
							</div>
							<div class="img img02">
								<img :src="table[1].portrait" alt="">
							</div>
							<div class="img img03">
								<img :src="table[2].portrait" alt="">
							</div>
							<div class="img img04">
								<img :src="table[3].portrait" alt="">
							</div>
							<div class="img img05">
								<img :src="table[4].portrait" alt="">
							</div>
							<div class="img img06">
								<img :src="table[5].portrait" alt="">
							</div>
							<div class="img img07">
								<img :src="table[6].portrait" alt="">
							</div>
							<div class="img img08">
								<img :src="table[7].portrait" alt="">
							</div>
							<div class="img img09">
								<img :src="table[8].portrait" alt="">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div style="width:3%;background:#081831;"></div>
			<div style="width:33%;height:9.64rem;border:2px solid #65abf5;background:#0c254c;border-radius:10px;">
				<div class="right" style="display:flex;justify-content: space-between;height:0.5rem;line-height:0.5rem;text-align:center;color:#fff;font-family: 'MicrosoftYaHei';font-size:20px;border-bottom:1px solid #65abf5;">
					<div>抓拍照片</div>
					<div>对比照片</div>
					<div>姓名</div>
					<div>手机号</div>
					<div>识别时间</div>
				</div>
				<ul>
					<li style="display:flex;justify-content: space-between;">
						<div>抓拍照片</div>
						<div>对比照片</div>
						<div>姓名</div>
						<div>手机号</div>
						<div>识别时间</div>
					</li>
				</ul>
			</div>
			<div style="width:3%;background:#081831;"></div>
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	export default {
		name: 'equipmentList',
		data() {
			return {
				timeDate:{
					day:'',
					time:''
				},
				table:[]
			}
		},
		mounted: function() {
			document.title=this.$route.meta.title;
			let that=this;
			setInterval(function(){
				that.timeDate = that.getNowFormatDate()
			},1000)
			var timestamp1 = Date.parse(new Date());
			let data = {
				start_time:1543648179000,
				end_time:timestamp1,
				page:1,
				size:10,
				deviceSn:'28'
			};
			console.log(data)
			axios({
				method:'post',
				url:'http://39.104.113.112:7895/staff/search',
				data:Qs.stringify(data)
			}).then(function(message){
				console.log((JSON.parse(message.data.result)).data.data)
				that.table=(JSON.parse(message.data.result)).data.data
			})
		},
		methods: {
			getNowFormatDate(){
			let date = new Date();
			let seperator1 = "-";
			let seperator2 = ":";
			let month = date.getMonth() + 1;
			let strDate = date.getDate();
			let Hours = date.getHours()>9?date.getHours():'0'+date.getHours();
			let Minutes = date.getMinutes()>9?date.getMinutes():'0'+date.getMinutes();
			let Seconds = date.getSeconds()>9?date.getSeconds():'0'+date.getSeconds();
			if (month >= 1 && month <= 9) {
				month = "0" + month;
			}
			if (strDate >= 0 && strDate <= 9) {
				strDate = "0" + strDate;
			}
			let data = {
				day:date.getFullYear() + seperator1 + month + seperator1 + strDate,
				time:Hours + seperator2 + Minutes + seperator2 + Seconds
			};
			return data;
			},
		}
	}		
</script>

<style scoped="scoped">
.code-bg{

    position: relative; 

    height: 100%; width: 100%; 

    margin: 0px auto;/*此处为了居中*/

    text-align: center; 

    /* background: url(../../../static/pho.png) center top no-repeat;  */

}

.code-bg img{ 

    position: absolute;

    top:  0; left: 0; 

    z-index: 1;

    height: 160px; width: 160px; 

}

.line{ 

    position: absolute; 

    top: 5px; left: 0.36rem; 

    z-index: 2; 

    /* height: 3px; width: 2.5rem;  */
	/* background: red; */

    /* background: url(../../../static/yadfa.png) no-repeat;  */

    /*动画效果*/

    animation: myScan 1s infinite alternate; 

    -webkit-animation: myScan 1s infinite alternate; 

}

@keyframes  myScan{

    from { top:0px; }

    to { top: 310px; }

}

-webkit-@keyframes  myScan{

    from { top:5px; }

    to { top: 170px; }

}
	p{
		/* font-family: 'MicrosoftYaHei' */
		/* font-family: 'PingFang-SC-Regular' */
		/* justify-content: space-between */
	
	}
	.right div{		
		border-right:1px solid #65abf5;
	}
	.photo-wrap {
    perspective: 800px;
    width: 800px;
}
.container {
    width: 100%;
    height: 50%;
    margin: 0 auto;
    position: relative;
    transform-style: preserve-3d;
	animation: rotateY360 15s ease-in-out infinite;
}
.img {
    /* width: 200px;
    height: 118px;
    line-height: 118px; */
    text-align: center;
    position: absolute;
    top: 60px;
    left: 300px;
    /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.9) inset; */
    /* background: pink; */
}
.img01 {
    transform: rotateY(0deg) translateZ(300px);
}
.img02 {
    transform: rotateY(40deg) translateZ(300px);
}
.img03 {
    transform: rotateY(80deg) translateZ(300px);
}
.img04 {
    transform: rotateY(120deg) translateZ(300px);
}
.img05 {
    transform: rotateY(160deg) translateZ(300px);
}
.img06 {
    transform: rotateY(200deg) translateZ(300px);
}
.img07 {
    transform: rotateY(240deg) translateZ(300px);
}
.img08 {
    transform: rotateY(280deg) translateZ(300px);
}
.img09 {
    transform: rotateY(320deg) translateZ(300px);
}
@keyframes rotateY360 {
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(360deg);
    }
}
	#grad {
		background: -webkit-linear-gradient(left, #134077 , #091b36,#134077,#091b36,#134077); /* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(right,  #134077 , #091b36,#134077,#091b36,#134077); /* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(right,  #134077 , #091b36,#134077,#091b36,#134077); /* Firefox 3.6 - 15 */
		background: linear-gradient(to right, #134077 , #091b36,#134077,#091b36,#134077); /* 标准的语法 */
		}
		.grid{
			background:#0c254c;
			background-image:
			 /* linear-gradient(white 2px,transparent 0), */
                /* linear-gradient(90deg, white 2px,transparent 0), */
               linear-gradient(rgba(7, 96,153, 0.9) 1px,transparent 0),
                linear-gradient(90deg,rgba(7,96,153,.9) 1px,transparent 0);
            background-size:40px 40px;
			
    /* background:
        -webkit-linear-gradient(top, transparent 39px,rgba(7,96,153,0.5) 40px),
        -webkit-linear-gradient(left, transparent 39px,rgba(7,96,153,0.5) 40px)
        ;
		
    background-size: 40px 40px; */
}
</style>