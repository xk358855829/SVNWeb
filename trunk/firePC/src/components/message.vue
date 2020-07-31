<template>
	<div id="addRole">
		<div class="header">
			<div class="headerTitle">
				<span>修改信息</span>
			</div>
		</div>
		<el-row>
		<el-col :span="12">
			<div class="select">
				<span>网站名称：</span><br><br>
				<el-input v-model="name" clearable placeholder="请输入内容"></el-input><br/><br/>
				<span v-if="showPic">版权名称：</span><br><br>
				<el-input v-model="copyright" clearable placeholder="请输入内容" v-if="showPic"></el-input>
				<div class="logo">网站logo：</div><br>
				<!-- <el-upload
					class="avatar-uploader"
					action="https://jsonplaceholder.typicode.com/posts/"
					:show-file-list="false"
					:on-success="handleAvatarSuccess"
					:before-upload="beforeAvatarUpload">
					<img v-if="imageUrl" :src="imageUrl" class="avatar">
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload> -->
				<div style="width: 180px;border:1px solid #CCCCCC;margin-left: 5px;height:70px">
							<img style="width: 100%;height:100%" :src="logo"/>
				</div>
				<el-upload
					class="upload-demo"
					action=""
					name="file"
					:limit="1"
					:before-upload="uploadFile1"
					list-type="picture"><br>
					<el-button size="small" type="primary" class="loadup">点击上传</el-button>
					<div slot="tip" class="el-upload__tip"><span class="aKey">*</span>只能上传jpg/png文件，规定图片尺寸：180*70</div>
					<!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
				</el-upload>
				<span v-if="showPic">网站背景：</span><br><br>
				<div v-if="showPic" style="width: 200px;border:1px solid #CCCCCC;margin-left: 5px;height:112px">
				<img style="width: 100%;height:100%" :src="background"/>
				</div>
				<el-upload
					class="upload-demo"
					v-if="showPic"
					action=""
					name="file"
					:limit="1"
					:before-upload="uploadFile"
					list-type="picture"><br>
					<el-button size="small" type="primary" class="loadup">点击上传</el-button>
					<div slot="tip" class="el-upload__tip"><span class="aKey">*</span>只能上传jpg/png文件，规定图片尺寸：1920*1080</div>
					<!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
				</el-upload>
				<!-- <el-upload
				class="upload-demo"
				:limit="1"
				name="file"
				drag
				action="https://jsonplaceholder.typicode.com/posts/"
				:before-upload="uploadFile"
				:beforeUpload="beforeAvatarUpload"
				multiple>
				<i class="el-icon-upload"></i>
				<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
				<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
				</el-upload> -->
			</div>
			<!-- <div slot="footer" class="dialog-footer"> -->
				<!-- <el-button type="success" class="oyButton" @click="personal = false">取消</el-button> -->
				<!-- <el-button class="oyButton" @click="changeData">保存</el-button> -->
				<el-button type="success" class="oyButton cun" @click="cunone">保存</el-button>
			<!-- </div> -->
		</el-col>
		<el-col :span="12">
			<div>
			<div class="oYspan" :class="sty==2?'styles':''" @click="sty = 2">修改资料</div>
			<!-- <span class="oYperSty">账号：</span><span>{{data.userName}}</span><br /><br /> -->
			<span class="spanClass">&nbsp;&nbsp;&nbsp;用户名：</span>
			<el-input class='oYinp' v-model="data.userAlias" clearable placeholder="请输入内容"></el-input><br /><br />
			<span class="spanClass">绑定手机：</span>
			<el-input class='oYinp' v-model="data.phoneNum" clearable placeholder="请输入内容"></el-input><br /><br />
			<span class="spanClass">绑定邮箱：</span>
			<el-input class='oYinp' v-model="data.email" clearable placeholder="请输入内容"></el-input>
			<!-- <div slot="footer" class="dialog-footer"> -->
				<!-- <el-button type="success" class="oyButton" @click="personal = false">取消</el-button> -->
				<!-- <el-button class="oyButton" @click="changeData">保存</el-button> -->
				
			</div>
			<el-button type="success" class="oyButton cun cunthree" @click="changeData">保存</el-button>
		</el-col>
		<!-- <el-col :span="8">
			<div>
			<div class="oYspan" :class="sty==3?'styles':''" @click="sty = 3">修改密码</div>
			<span class="spanClass">&nbsp;&nbsp;&nbsp;旧密码：</span>
			<el-input class='oYinp' type='password' v-model="oldPassWord" clearable placeholder="请输入内容"></el-input><br /><br />
			<span class="spanClass">&nbsp;&nbsp;&nbsp;新密码：</span>
			<el-input class='oYinp' type='password' v-model="newPassWord" clearable placeholder="请输入内容"></el-input><br /><br />
			<span class="spanClass">重复密码：</span>
			<el-input class='oYinp' type='password' v-model="rNewPassWord" clearable placeholder="请输入内容"></el-input>
			</div>
				<el-button type="success" class="oyButton cun cuntwo" @click="changePassWord">保存</el-button>
		</el-col> -->
		</el-row>

	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	export default {
		name: 'equipmentList',
		data() {
			return {
				background:'',
				name:'',
				copyright:'',
				copyright:'',
				logo:'',
				sty:'1',
				personal:false,
				showPic:false,
				timeDate:{
					day:'',
					time:''
				},
				logo:{
					names:''
				},
				userAlias:'',
				data:{},
				oldPassWord:'',
				newPassWord:'',
				rNewPassWord:'',
				imageUrl: '',
				universal:{
					add:false,
					change:false
				},
				paging:{
					page:1,
					pageSize:10,
					total:0
				},
				tableData:[],
				search:{
					roleName:''
				},
				add:{
					roleName:'',
					roleDescribe:''
				},
				change:{
					roleName:'',
					roleDescribe:''
				},
				img1:'',
				img2:''
			}
		},
		mounted: function() {
			document.title=this.$route.meta.title;
			if(sessionStorage.getItem('dealer')=='123'){
				this.showPic=true;
			}else{
				this.showPic=false;	
			}
			this.searchClick();
			let that = this;
			this.userAlias = sessionStorage.getItem('userAlias');
			this.$store.dispatch('getMenu')
			/*console.log(sessionStorage.getItem('userId'))*/
			if(!sessionStorage.getItem('userId')){
				that.$router.push('/pageLogin')
			}
			document.getElementsByClassName('side')[0].style.height = document.body.clientHeight-170+'px'

			this.personal = true;
			axios({
				method:'post',
				url:this.$store.state.http +'/user/selcBycompanyId',
				data:Qs.stringify({userId:sessionStorage.getItem('userId')})
			}).then(function(message){
				/*console.log(message.data.result)*/
					if(message.data.resCode==0){
						that.data = message.data.result;
						console.log(message.data.result);
					}
				})
			axios({
				method:'post',
				url:this.$store.state.http+'/website/findWebsite',
				data:Qs.stringify({dealer:sessionStorage.getItem('dealer')})
			}).then(function(message){
				that.logo=message.data.website.logo;
				that.name=message.data.website.name;
				that.background=message.data.website.background;
				that.copyright=message.data.website.copyright
			})
		},
		methods: {
			 handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			uploadFile(file){
                 var formData=new FormData();
                 formData.append('file',file);
				 var file = formData;
				 let that=this;
				  axios({
					method:'post',
					url:this.$store.state.http+'/website/upload',
					data:file
				}).then(function(message) {
					that.background=message.data.image_url
				})
			},
			// handlePreview(file){
			// 	var formData=new FormData();
            //      formData.append('file',file);
			// 	 var file = formData;
			// 	 let that=this;
			// 	  axios({
			// 		method:'post',
			// 		url:this.$store.state.http+'/website/upload',
			// 		data:file
			// 	}).then(function(message) {
			// 		console.log(message);
			// 		that.img2=message.data.image_url
			// 		console.log(that.img2)
			// 	})
			// },
			changePassWord(){
				let that = this;
				if(this.oldPassWord.length<6){
					this.$message.error('旧密码有误');
				}else	if(this.newPassWord != this.rNewPassWord){
					this.$message.error('两次新密码不一致');
				}else if(this.newPassWord.length>=6&&this.newPassWord.length<=20){
					let data = {
						oldpassword:this.oldPassWord,
						userId:sessionStorage.getItem('userId'),
						Password:this.newPassWord
					}
					axios({
							method:'post',
							url:this.$store.state.http +'/user/resetPassword',
							data:Qs.stringify(data)
						}).then(function(message){
							console.log(message.data)
							if(message.data.resCode==0){
								that.$message({
						message: '密码修改成功',
						type: 'success'
						});
							}else{
								that.$message.error(message.data.errMsg);
							}
						})
				}else{
					this.$message.error('密码长度应在6-20位之间');
				}
				
			},
			changeData(){
				let that = this;
				let regEmail = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
				let regPhone=/^[1][3,4,5,7,8][0-9]{9}$/;
				if(this.data.userAlias == ''){
					this.$message.error('用户名不能为空');
				}else if(!regPhone.test(this.data.phoneNum)){
					this.$message.error('手机号码格式有误');
				}else if(!regEmail.test(this.data.email)){
					this.$message.error('邮箱格式不正确');
				}else{
					let data = {
						userId:sessionStorage.getItem('userId'),
						phoneNum:this.data.phoneNum,
						email:this.data.email,
						userAlias:this.data.userAlias
					}
					axios({
							method:'post',
							url:this.$store.state.http +'/user/resetPassword',
							data:Qs.stringify(data)
						}).then(function(message){
							console.log(message.data)
							if(message.data.resCode==0){
								that.$message({
							message: '修改成功',
							type: 'success'
						});
							}else{
								that.$message.error(message.data.errMsg);
							}
						})
				}
			},
			beforeAvatarUpload(file) { 				
				var testmsg=file.name.substring(file.name.lastIndexOf('.')+1)				
				const extension = testmsg === 'jpg'
				const extension2 = testmsg === 'png'
				const isLt2M = file.size / 1024 / 1024 < 10
				if(!extension && !extension2) {
					this.$message({
						message: '上传文件只能是 xls、xlsx格式!',
						type: 'warning'
					});
				}
				if(!isLt2M) {
					this.$message({
						message: '上传文件大小不能超过 10MB!',
						type: 'warning'
					});
				}
				return extension || extension2 && isLt2M
			},
			cunone(){
				this.$confirm('是否修改?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					let data={
						name:this.name,
						background:this.background,
						logo:this.logo,
						id:1,
						dealer:sessionStorage.getItem("dealer"),
						copyright:this.copyright
					}
					let that=this
					console.log(data)
					axios({
						method:'post',
						url:this.$store.state.http +'/website/add',
						data:Qs.stringify(data)
					}).then(function(message){
						console.log(message)
						if(message.data.resCode==0){
							that.$message({
								message: '添加成功',
								type: 'success'
							});
						location.reload()
						}else{
							that.$message({
								message: '添加失败',
								type: 'error'
							});
						}
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
					
			},
			uploadFile1(file) {
				var formData=new FormData();
                 formData.append('file',file);
                 formData.append('dealer',sessionStorage.getItem("dealer"));
				 var file = formData;
				 let that=this;
				  axios({
					method:'post',
					url:this.$store.state.http+'/att/upload',
					data:file
				}).then(function(message) {
					console.log(message);
					that.img2=message.data.image_url
					that.logo=message.data.image_url
			 		console.log(that.img2)
				})
			},
			indexMethod(index) {
        		return index + (this.paging.page-1)*this.paging.pageSize+1;
    		},
			handleSizeChange(val){
				this.paging.pageSize = val;
				/*console.log(this.paging.pageSize)*/
				this.searchClick();
			},
			handleCurrentChange(val){
				this.searchClick();
			},
			addClick(){
				console.log(this.add)
				let data = this.add;
				let that = this;
				axios({
					method:'post',
					url:this.$store.state.http +'/role/add',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						that.searchClick();
					}else{
						that.$message({
				        	message: '添加失败',
				        	type: 'error'
				        });
					}
				})
				that.universal.add = false;
			},
			deleteClick(row){
				console.log(row)
				let that = this;
				this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					axios({
						method:'post',
						url:this.$store.state.http +'/role/delete',
						data:Qs.stringify({
							roleId:row.roleId
						})
					}).then(function(message){
						console.log(message.data)
						if(message.data.resCode==0){
							that.searchClick();
						}else{
							that.$message({
					        	message: '删除失败',
					        	type: 'error'
					        });
						}
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			changeShow(row){
				this.universal.change = true;
				this.change = Object.assign({},row);
				console.log(row)
			},
			hideclick(){
				this.universal.change = false;
			},
			changeClick(){
				console.log(this.change)
				let data = this.change;
				let that = this;
				axios({
					method:'post',
					url:this.$store.state.http +'/role/update',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						that.$message({
				        	message: '修改成功',
				        	type: 'success'
				        });
						that.searchClick();
					}else{
						that.searchClick();
						that.$message({
				        	message: '修改失败',
				        	type: 'error'
				        });
					}
				})
				that.universal.change = false;
			},
			searchClick(){
				let data = {
					page:this.paging.page,
					pageSize:this.paging.pageSize,
				};
				if(this.search.roleName){
					data.roleName = this.search.roleName
				}
				if(this.search.positioneStart){
					data.positioneStart = this.search.positioneStart
				}
				if(this.search.positionereEnd){
					data.positionereEnd = this.search.positionereEnd
				}
				console.log(data)
				let that = this;
				that.tableData = [];
				axios({
					method:'post',
					url:this.$store.state.http +'/role/findAll',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						that.paging.total = message.data.count;
						that.tableData = message.data.result;
					}else{
						that.tableData = [];
					}
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.el-input,.el-select{
		width: 200px;
	}
	#addRole{padding: 20px;}
	/*.textareaWidth{width: 200px;}*/
	.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 165px;
    height: 81px;
    line-height: 81px;
    text-align: center;
  }
  .avatar {
    width: 165px;
    height: 81px;
    display: block;
  }
  .logo{
	  font-size: 14px;
	  margin-left: 5px;
	  margin-top:20px;
  }
	.avatar-uploader{
		width: 200px;
		margin-left: 82px;
	}
	.avatar-uploader i{
		border: 1px solid #dcdfe6;
	}
	.cunlogo{
		margin-top:50px;
		margin-left: 200px;
	}
	.spanClass{width: 30%!important;margin-top:40px;}
	.oYinp{margin-top:40px;}
	.oYspan{
		font-size: 14px;
		width: 100%;
		text-align: center;
		margin-bottom: 30px;
		padding:0 0;
	}
	.cun{margin-top:10px;}
	.cuntwo{margin-top:278px!important;}
	.cunthree{margin-top:320px!important;}
	.upload-demo{float: right;height: 100px;;width: 100%;}
</style>