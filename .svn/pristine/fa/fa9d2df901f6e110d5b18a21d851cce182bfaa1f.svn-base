<template>
    <div id="people">

            <div ref="lps" class="header">
				<img src="../../static/image/a (1).png" alt="">
				<div class="wximg">
                   	<p class="innerimg"><img :src="obk" alt="" style="border-radius:50%"></p>	
					<p>{{nickname}}</p>
				</div>
            </div>
			<div class="empty"></div>
			<div class="uldiv">
				 <ul ref="lp">
                <router-link to="/my" tag="li">
					
                    <div>
						<img src="../../static/image/j (2).png" alt="" style="width:0.16rem;height:0.17rem;vertical-align: middle;margin-top:-0.05rem;">
						个人信息</div>
                    <div>
						<img src="../../static/image/a (2).png" alt="">
                    </div>
                </router-link>
                <router-link :to="{path:'/fuzhi',query:{num:$route.query.c}}" tag="li">
                    <div>
						<img src="../../static/image/j (3).png" alt="" style="width:0.16rem;height:0.17rem;vertical-align: middle;margin-top:-0.05rem;">
						卡券列表</div>
                    <div>
                        <img src="../../static/image/a (2).png" alt="">
                    </div>
                </router-link>
                <router-link to="/sheng" tag="li">
                    <div>
						<img src="../../static/image/j (1).png" alt="" style="width:0.16rem;height:0.17rem;vertical-align: middle;margin-top:-0.05rem;">
						积分兑换</div>
                    <div>
                        <img src="../../static/image/a (2).png" alt="">
                    </div>
                </router-link>
				<router-link to="/vip" tag="li">
                    <div>
						<img src="../../static/image/j (4).png" alt="" style="width:0.19rem;height:0.16rem;vertical-align: middle;margin-top:-0.05rem;">
						会员开通</div>
                    <div>
                        <img src="../../static/image/a (2).png" alt="">
                    </div>
                </router-link>
				<!-- <router-link to="/list" tag="li">
                    <div>车牌列表</div>
                    <div>
                        
                    </div>
                </router-link> -->
            </ul> 
			</div>
           
        
    </div>
</template>

<script>
	import Qs from 'qs'
    import axios from 'axios'
	export default {
		name: 'people',
		data() {
			return {
				ips:'',
				Wacth:2,
                Colors:2,
                obk:'',
                urll:'',
				show:true,
				nickname:''
			}
        },
        watch:{
			
        },
		methods: {
			
		},
		mounted: function() {
			console.log()
			// console.log(this.$route.meta.title)
			// document.title=this.$route.meta.title;
			this.obk=localStorage.getItem('headimgurl')
			this.nickname=localStorage.getItem('nickname')
			
        },
	}
</script>
<style lang="scss" scoped>
	@import '@/style/mixin.scss';
	.header{
		@include wh(100%,1.45rem);
		position: relative;
		.wximg{
			width: 80%;
			margin-top:0.4rem;
			margin-left: 0.16rem;
			position: absolute;
			top:0;
			left: 0;
			display: flex;
			.innerimg{
				@include wh(0.64rem,0.64rem);
				img{
					@include wh(100%,100%)
				}
			}
			:nth-child(2){
				letter-spacing:2px;
				@include sc(16px,#fff);
				font-family: 'PingFang-SC-Regular';
				line-height: 0.64rem;
				margin-left: 0.16rem;
			}
		}
	}
	.empty{
		@include wh(100%,0.16rem);
		background: #efefef;
	}
	// .header div:nth-child(1){@include wh(0.57rem,0.57rem);border-radius: 50%;margin:0.24rem 0.15rem;}
	// .header div:nth-child(2){@include wh(69%,1.03rem);line-height: 1.03rem;font-size: 18px;font-family: 'PingFang-SC-Regular';@include sc(18px,rgb(48,48,48))}
	// .header div:nth-child(3){@include wh(0.07rem,0.12rem);line-height: 1.03rem;}
	// img{vertical-align: middle;@include wh(100%,100%);}
	.uldiv{
		width: 100%;
		background: #fff;
		ul{
			width: 91.4%;margin:0 auto;background: #fff;border-radius: 5px;
		}
	}
	li{@include wh(100%,0.57rem);line-height: 0.57rem;font-family: 'PingFang-SC-Regular';@include sc(16px,rgb(48,48,48));display: flex;justify-content: space-between;
	border-bottom: 1px solid rgb(239,239,239);}
	// li div:nth-child(1){text-indent: 0.15rem;}
	li div:nth-child(2){width: 20%;height: 100%;text-align: right;}
	.header img{@include wh(100%,100%);}
	img{@include wh(0.07rem,0.12rem);
	
	}
	.first-my-enter-active,.first-my-leave-active{
		transition: all .4s
		
	}
	.first-my-enter,.first-my-leave-active{
		transform: translate3d(2rem,0,0);
		opacity: 0;
		
	}
	// .hello{background: #F2F2F2;@include wh(100%,100%);}
	// .yes{@include wh(100%,3rem);}
	// .yes div{@include wh(1.18rem,1.18rem);margin:0 auto;padding-top:1rem;}
	// .yes div img{@include wh(100%,100%);}
	// .yes p{text-align: center;margin-top:0.21rem;font-family: 'PingFang-SC-Regular';@include sc(18px,rgb(48,48,48))}
	// .square{display: flex;width: 80%;margin:0 auto;}
	// .square div{text-align: center;@include wh(1.36rem,0.46rem);@include font(16px,0.46rem,'PingFang-SC-Regular');color: #fff;border-radius: 5px;}
	// .square div:nth-child(1){background:rgb(246,139,28);}
	// .square div:nth-child(2){background:#fff;border:1px solid rgb(246,139,28);color:rgb(246,139,28);margin-left: 0.2rem;}
	// .gong{@include sc(18px,#303030);font-family: 'PingFang-SC-Regular';}
	// .box .top{@include wh(6.86rem,2.12rem);border-radius: 5px;margin:0 auto;margin-top:0.37rem;background: #FFFFFF;margin-bottom: 0.52rem;}
	// .box .top p{text-align: center;@extend .gong;}
	// .box .top p:nth-child(1){padding-top:0.48rem;padding-bottom: 0.21rem;}
	// .bottom{@include wh(6.86rem,6.42rem);border-radius: 5px;margin:0 auto;background: #FFFFFF;}
	// .bottom div:nth-child(1){@include wh(6.86rem,3.89rem);margin-bottom: 0.53rem;}
	// .innert{@include wh(2.7rem!important,100%);margin:0 auto;}
	// .innert .ptuo{@include wh(2.7rem,1.35rem);background: #D3D3D3;border-radius:1.35rem;border-radius: 50%/50%;margin-top:-0.98rem;}
	// .innert p:nth-child(1){@include wh(1.74rem,2.64rem);margin:0 auto;padding-top:1.02rem;}
	// .innert p:nth-child(1) img{@include wh(100%,100%);}
	// .bottom div:nth-child(2) p{@extend .gong;text-align: center;margin-top:0.1rem;}
</style>
