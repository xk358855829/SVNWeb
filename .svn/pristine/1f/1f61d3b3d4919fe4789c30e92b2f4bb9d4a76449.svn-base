<template>
	<div id="webSet">
		<div class="header">
			<div class="headerTitle">
				<span>网站设置</span>
			</div>
		</div>
		<div v-if="webTitle" class="webTitle">
			<div class="webContent" style="border: 1px solid #CCCCCC;border-bottom: 1px solid #FFFFFF;cursor: pointer;">修改基本信息</div>
			<div class="webContent" style="cursor: pointer;border: 1px solid #FFFFFF; border-bottom: 1px solid #C0C4CC;" @click="webTitle = false">设置首页轮播图</div>
			<div class="" style="width: 100%;border-bottom: 1px solid #C0C4CC;padding: 10px;">&nbsp;</div>
		</div>
		<div v-else="webTitle" class="webTitle">
			<div class="webContent" style="border: 1px solid #FFFFFF; border-bottom: 1px solid #CCCCCC;cursor: pointer;" @click="webTitle = true">修改基本信息</div>
			<div class="webContent" style="cursor: pointer;border: 1px solid #CCCCCC;border-bottom: 1px solid #FFFFFF;">设置首页轮播图</div>
			<div class="" style="width: 100%;border-bottom: 1px solid #C0C4CC;padding: 10px;">&nbsp;</div>
		</div>
		<div v-if="webTitle" class="webMain">
			<div class="line">
				<div class="img"><img :src="data.logoUrl"/></div>
				<span class="webMargin">图片规格为100*40</span>
			</div>
			<div class="line">
				<!--<div class="webLable">公司logo</div>
				<div class="oyDivInp">{{logoUrl}}</div>-->
				
				<div class="webLable">公司logo</div><el-input v-model="logoUrl" placeholder="请输入内容"></el-input>
				<div class="oyClick">选择文件 <input @change="imgChange('lg')" type="file" name="" id="logo" value="" /></div>
			</div>
			<div class="line">
				<div class="webLable">公司名称</div><el-input v-model="data.companyName" placeholder="请输入内容"></el-input>
			</div>
			<div class="line">
				<div class="webLable">公司地址</div><el-input v-model="data.position" placeholder="请输入内容"></el-input>
			</div>
			<div class="line">
				<div class="webLable">公司联系电话</div><el-input v-model="data.contact" placeholder="请输入内容"></el-input>
			</div>
			<div class="line">
				<div class="webLable">公共邮箱</div><el-input v-model="data.comEmail" placeholder="请输入内容"></el-input>
			</div>
		</div>
		<div v-else="webTitle" class="">
			<div class="line">
				<div class="webLable">首页轮播图1</div>
				<el-input v-model="logoUrlIma" placeholder="请输入内容"></el-input>
				<div class="oyClick">选择文件 <input type="file" name="" @change="imgChange('sA')" id="slideA" value="" /></div>
				<div class="oyImgDiv">
					<img style="width: 100%;" :src="data.logoUrlIma"/>
				</div>
				<p style="color: #FF0000;">* 图片规格为1920 × 650</p>
			</div>
			<div class="line">
				<div class="webLable">首页轮播图2</div>
				<el-input v-model="logoUrlImb" placeholder="请输入内容"></el-input>
				<div class="oyClick">选择文件 <input type="file" name="" @change="imgChange('sB')"  id="slideB" value="" /></div>
				<div class="oyImgDiv">
					<img style="width: 100%;" :src="data.logoUrlImb"/>
				</div>
				<p style="color: #FF0000;">* 图片规格为1920 × 650</p>
			</div>
			<div class="line">
				<div class="webLable">首页轮播图3</div>
				<el-input v-model="logoUrlImc" placeholder="请输入内容"></el-input>
				<div class="oyClick">选择文件 <input type="file" name="" @change="imgChange('sC')"  id="slideC" value="" /></div>
				<div class="oyImgDiv">
					<img style="width: 100%;" :src="data.logoUrlImc"/>
				</div>
				<p style="color: #FF0000;">* 图片规格为1920 × 650</p>
			</div>
		</div>
		<el-button class='oyButton dw' type="success" @click = 'changeClick'>保存</el-button>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	export default {
		name: 'page',
		data () {
	    	return {
	    		webTitle:true,
	    		input:'',
	    		data:{},
	    		logoUrl:'',
	    		logoUrlIma:'',
	    		logoUrlImb:'',
	    		logoUrlImc:''
	    	}
		},
		mounted:function(){
			this.searchClick();
			document.title=this.$route.meta.title;
		},
		methods:{
			changeClick(){
				let that = this;
				let data={
					logoUrl:this.logoUrl,
					logoUrlIma:this.logoUrlIma,
					logoUrlImb:this.logoUrlImb,
					logoUrlImc:this.logoUrlImc,
					companyName:this.data.companyName,
					conPhot:this.data.conPhot,
					position:this.data.position,
					comEmail:this.data.comEmail,
				}
				console.log(data)
				axios({
					method:'post',
					url:this.$store.state.http +'/company/update/',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						that.$message({
				        	message: '保存成功',
				        	type: 'success'
				        });
						that.searchClick();
					}else{
						that.$message.error('保存失败');
					}
				})
			},
	  		searchClick(){
				let that = this;
				axios({
					method:'post',
					url:this.$store.state.http +'/company/list'
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						that.data = message.data.result;
						console.log(JSON.parse(message.data.result.position))
						that.logoUrl = that.data.logoUrl;
						that.logoUrlIma = that.data.logoUrlIma;
						that.logoUrlImb = that.data.logoUrlImb;
						that.logoUrlImc = that.data.logoUrlImc;
					}else{
						that.$message.error('加载失败');
					}
				})
			},
			imgChange(f){
				let form = new FormData();
				let that = this;
				if(f == 'lg'){
					this.logoUrl = document.getElementById('logo').value;
					let file = document.getElementById("logo").files[0];
		            form.append("file", file);
				}else if(f == 'sA'){
					this.logoUrl = document.getElementById('slideA').value;
					let file = document.getElementById("slideA").files[0];
		            form.append("file", file);
				}else if(f == 'sB'){
					this.logoUrl = document.getElementById('slideB').value;
					let file = document.getElementById("slideA").files[0];
		            form.append("file", file);
				}else if(f == 'sC'){
					this.logoUrl = document.getElementById('slideC').value;
					let file = document.getElementById("slideA").files[0];
		            form.append("file", file);
				}
				axios({
					method:'post',
					url:this.$store.state.http +'/company/upload',
					data:form
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						if(f == 'lg'){
							that.logoUrl = message.data.imageUrl;
						}else if(f == 'sA'){
							that.logoUrlIma = message.data.imageUrl;
						}else if(f == 'sB'){
							that.logoUrlImb = message.data.imageUrl;
						}else if(f == 'sC'){
							that.logoUrlImc = message.data.imageUrl;
						}
					}else{
						that.$message.error('图片上传失败');
						if(f == 'lg'){
							that.logoUrl = '';
						}else if(f == 'sA'){
							that.logoUrlIma = '';
						}else if(f == 'sB'){
							that.logoUrlImb = '';
						}else if(f == 'sC'){
							that.logoUrlImc = '';
						}
					}
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.el-input{width: 280px;}
	#webSet{padding: 20px;}
	.webTitle{display: flex;}
	.webContent{padding:15px 10px;width: 150px;text-align: center;border-bottom: none;font-size: 14px;}
	.webBorder{border: 1px solid #C0C4CC;}
	.webMain{padding: 0px 0 0 50px;}
	.img{width: 140px;background-color: rgba(0,0,0,0.5);margin-left: 50px;text-align: center;padding: 32px 0;height: 36px;}
	.line{display: flex;align-items:center;margin-top: 10px;}
	.webMargin{margin-left: 50px;color: #FF0000;}
	.webLable{width: 100px;text-align: right;margin-right: 10px;font-weight: 900;font-size: 14px;}
	.oyDivInp{color: #606266;padding:0 10px ; line-height: 38px; border: 1px solid #CCCCCC;height: 38px;width: 175px;border-top-left-radius:5px ;border-bottom-left-radius:5px ;}
	.oyClick{border: 1px solid #5DAF34;background-color:#5DAF34; height: 38px;width: 80px;border-radius:5px ;line-height: 38px;text-align: center;color: #FFFFFF;position: relative;}
	#logo,#slideA,#slideB,#slideC{position: absolute;left: 0;top: 0;width: 80px;height: 38px;opacity: 0;overflow: hidden;}
	.oyImgDiv{width: 140px;height: 50px;margin:0 50px 0 50px;padding: 25px 0;}
	.dw{position: absolute;top: 20px;right: 50px;}
</style>