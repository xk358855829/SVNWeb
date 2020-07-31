<template>
	<div id="potentialCus">
		<div class="header">
			<div class="headerTitle">
				<span>门店管理</span>
			</div>
		</div>
		<div class="select">
			<span>客户主键ID</span>
			<el-input v-model="store.staffKey" clearable placeholder="请输入内容"></el-input>
			<span>客户姓名：</span>
			<el-input v-model="store.staffName" clearable placeholder="请输入内容"></el-input>
			<span>客户手机：</span>
			<el-input v-model="store.staffPhone" clearable placeholder="请输入内容"></el-input>
			<span>客户性别：</span>
			<el-select v-model="store.staffSex" clearable placeholder="请输入内容">
			    <el-option key='男' label="男" value="男"></el-option>
			    <el-option key='女' label="女" value="女"></el-option>
			</el-select>
			<span>客户分组：</span>
			<el-select v-model="store.staffTeam" clearable placeholder="请输入内容">
			    <el-option v-for="item in options" :key="item.id" :label="item.teamName" :value="item.teamKey"></el-option>
			</el-select>
		</div>
		<div class="select">
			<el-button type="success" icon="el-icon-plus"  @click="add = true">添加</el-button>
			<el-button type="success" icon="el-icon-plus"  @click="addTeam = true">分组</el-button>
			<el-button type="success" icon="el-icon-plus"  @click="deletTeam = true">修改</el-button>
			<!--<el-button type="success" icon="el-icon-plus"  @click="">入会</el-button>-->
			<el-button type="success" icon="el-icon-search" @click='searchClick'>查询</el-button>
		</div>
		<div class="Content">
			<el-table :data="tableData" style="width: 100%">
				<el-table-column prop="staffKey" label="客户主键ID"></el-table-column>
				<el-table-column prop="staffName" label="客户名字"></el-table-column>
				<el-table-column prop="staffSex" label="性别"></el-table-column>
				<el-table-column prop="staffPhone" label="手机号" width='200'></el-table-column>
				<el-table-column prop="staffBirthday" label="生日"></el-table-column>
				<el-table-column label="客户照片">
					<template slot-scope="scope"><img  :src="scope.row.staffPortrait" alt="" style="height:100px"></template>
				</el-table-column>
				<el-table-column prop="staffTeam" label="分组"></el-table-column>
				<el-table-column prop="" label="操作" width="150" >
					<template slot-scope="scope">
						<i class="el-icon-success" @click="changeShow1(scope.row)" ></i>
						<i class="el-icon-edit" @click="changeShow(scope.row)" ></i>
						<i class="el-icon-delete" @click="deleteClick(scope.row)"></i>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<el-dialog title="添加" :visible.sync="add">
			<div class="cotDialog">
				<div class="clearfix">
					<div class="addBox">
						<span class="spanClass"><i>*</i>姓名：</span>
						<el-input v-model="storeAdd.staffName" clearable placeholder="请填写姓名"></el-input><br /><br />
						<span class="spanClass"><i>*</i>手机号码：</span>
						<el-input v-model="storeAdd.staffPhone" clearable placeholder="请填写手机号码"></el-input><br /><br />
						<span class="spanClass"><i>*</i>主键：</span>
						<el-input v-model="storeAdd.staffKey" clearable placeholder="请填写主键">
						</el-input><el-button size="mini" type="primary" @click="getUUID">生成</el-button>
					</div>
					<div class="addBox">
						<span class="spanClass"><i>*</i>性别：</span>
						<el-radio v-model="storeAdd.staffSex" label="男">男</el-radio>
						<el-radio v-model="storeAdd.staffSex" label="女">女</el-radio><br /><br />
				   		<span class="spanClass"><i>*</i>生日：</span>
				   		<el-date-picker v-model="storeAdd.staffBirthday" type="date" placeholder="选择日期"></el-date-picker><br /><br />
						<span class="spanClass"><i>*</i>分组：</span>
						<el-select v-model="storeAdd.teamVale" placeholder="请选择分组">
							<el-option v-for="item in options" :key="item.id" :label="item.teamName" :value="item"></el-option>
						</el-select>
					</div>
					<div class="addBox">
						<div style="width: 80px;border:1px solid #CCCCCC;margin-left: 5px;max-height: 100px;min-height: 80px;">
							<img style="width: 100%;" :src="image_url"/>
						</div>
						<el-upload
                           class="upload-demo"
                           action=""
                           :before-upload="uploadFile"
                           :on-success="handleAvatarSuccess"
                            multiple
                           :limit="1"
                           :on-exceed="handleExceed">
                           <el-button size="small" type="primary">点击上传</el-button>
                        </el-upload>
					</div>
				</div>
				
			</div>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="add = false">取 消</el-button>
		    <el-button type="primary" @click="addClick">确 定</el-button>
		  </div>
		</el-dialog>

		<el-dialog title="分组" :visible.sync="addTeam">
			<div class="cotDialogTeam">
						<span class="spanClass"><i>*</i>分组ID：</span>
						<el-input v-model="teamAdd.teamKey" clearable placeholder="请填写分组ID："></el-input><el-button size="mini" type="primary" @click="getUUIDTeam">生成</el-button><br /><br />
						<span class="spanClass"><i>*</i>分组名称：</span>
						<el-input v-model="teamAdd.teamName" clearable placeholder="请填写分组名称："></el-input>
			</div>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="addTeam = false">取 消</el-button>
		    <el-button type="primary" @click="addClickTeam">新 增</el-button>
		  </div>
		</el-dialog>
        
        <el-dialog title="修改分组" :visible.sync="deletTeam">
			<div class="cotDialogTeam">
				        <span class="spanClass"><i>*</i>删除分组：</span>
						<el-select v-model="teamUp.teamVale" placeholder="请选择分组">
							<el-option v-for="item in options" :key="item.id" :label="item.teamName" :value="item"></el-option>
						</el-select><br /><br />
						<span class="spanClass"><i>*</i>分组名称：</span>
						<el-input v-model="teamUp.teamName" clearable placeholder="请填写分组名称："></el-input>
			</div>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="deletTeam = false">取 消</el-button>
		    <el-button type="primary" @click="deleteTeam">修 改</el-button>
		  </div>
		</el-dialog>


		<el-dialog title="修改" :visible.sync="change">
			<div class="cotDialog">
				<div class="clearfix">
					<div class="addBox">
						<span class="spanClass"><i>*</i>姓名：</span>
						<el-input v-model="storeChange.custName" clearable placeholder="请填写姓名"></el-input><br /><br />
						<span class="spanClass"><i>*</i>手机号码：</span>
						<el-input v-model="storeChange.custPhone" clearable placeholder="请填写手机号码"></el-input><br /><br />
						<span class="spanClass"><i></i>微信：</span>
						<el-input v-model="storeChange.custWechat" clearable placeholder="请填写微信号"></el-input>
					</div>
					<div class="addBox">
						<span class="spanClass">性别：</span>
						<el-radio v-model="storeChange.custSex" label="1">男</el-radio>
						<el-radio v-model="storeChange.custSex" label="2">女</el-radio><br /><br />
				   		<span class="spanClass"><i></i>生日：</span>
				   		<el-date-picker v-model="storeChange.custBirthday" type="date" placeholder="选择日期"></el-date-picker>
						<!--<el-input v-model="storeChange.custBirthday" clearable placeholder="请输入门店名称"></el-input>-->
					</div>
					<div class="addBox">
						<div style="width: 80px;border:1px solid #CCCCCC;margin-left: 5px;max-height: 100px;min-height: 80px;">
							<img style="width: 100%;" :src="storeChange.custUrl"/>
						</div>
						<el-button>拍照</el-button><el-button>上传</el-button>
					</div>
				</div>
				
			</div>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="change = false">取 消</el-button>
		    <el-button type="primary" @click="changeClick">确 定</el-button>
		  </div>
		</el-dialog>
	</div>
</template>

<script>
	import Qs from 'qs'
	import axios from 'axios'
	export default {
		name: 'pageHome',
		data() {
			return {
				store:{
					staffKey:'',
					staffName:'',
					staffPhone:'',
					staffSex:'',
					staffTeam:''
				},
				teamUp:{
                    teamVale:'',
                    teamName:''
				},
				storeAdd:{
					staffPortrait:'./static/image/tx.png',//客户头像
					staffName:'',//客户的名字
					staffSex:'',//客户性别
					staffPhone:'',//客户手机号
					staffBirthday:'2018-06-06',//客户生日
					staffKey:'',//客户主键
					staffTeam:'',
					teamVale:''
				},
				tableData:[],
				add: false,
				addTeam:false,
				change:false,
				deletTeam:false,
				storeChange:{
					entryPeople:localStorage.getItem('userName'),//录入人
					custId:'',
					custUrl:'asdkjh',//客户头像
					custName:'',//客户的名字
					custSex:'',//客户性别
					custPhone:'',//客户手机号
					custBirthday:'2018-06-06',//客户生日
					custWechat:'',//客户微信
					mbeshipSales:'0',//分配会籍销售
					custAttribute:'0',//渠道属性
					custChannel:'',//获取渠道
					custWithGrade:'0',//跟进等级
					custType:'0',//证件类别
					custTypeNumber:'',//证件号
					custNationality:'',//国籍
					custFamily:'0',//民族
					custPost:'',//职业
					custMail:'',//邮箱
					custAddress:'',//家庭地址
					custCompany:'',//公司名称
					custCompanyPhone:'',//公司电话
					custWorkPlace:'',//工作地点
					custUrgent:'',//紧急联系人
					custUrgentPhone:'',//紧急联系人电话
					custObjective:'',//健身目的
					custWhether:'0',//是否参加过俱乐部
					custBrand:'',//品牌
					bookWhetherVip:'0',//是否曾是本俱乐部会员
					custLeave:'',//离开原因
					custBranch:'0',//客户分类
					custHabit:'',//获取资讯习惯
					custLike:'',//个人爱好
					custMarriage:'0',//婚姻情况
					custChildren:'0',//子女情况
					custRemarks:''//客户标签(备注)
				},
				teamAdd:{
                    teamKey:'',
                    teamName:''
				},
				options: {},
                fileList:[{
                	name:'默认',
                	url:'./static/image/tx.png',
                }],
                image_url:'./static/image/tx.png',
				checked:false
			}
		},
		mounted: function() {
			this.teamQuery();
			this.searchClick();
		},
		methods: {
			formatDateSex:function(row, column, cellValue){
				if(row.custSex==0){
					return '未填'
				}else if(row.custSex==1){
					return '男'
				}else{
					return '女'
				}
			},
			deleteTeam:function(){
				if(!this.teamUp.teamName){
					this.$message({
			        	message: '分组名称不能为空',
			        	type: 'warning'
			        });
			        return;
				}
				let that = this;
				let data = {
					teamKey:this.teamUp.teamVale.teamKey,
					teamName:this.teamUp.teamName
				}
				console.log(data);
				axios({
					method: 'post',
					url: 'http://39.104.113.112:7895/team/update',
					data: Qs.stringify(data)
				}).then(function(message) {
					console.log(message)
					that.deletTeam = false;
					// if(message.data.result.resCode == 200) {
					// 	that.searchClick();
					// }else{
					// 	that.$alert(message.data.result, '系统确认框', {
					// 		confirmButtonText: '确定'
					// 	})
					// }
				})
			},
			addClick:function(){
				let that = this;
				if(!this.storeAdd.staffBirthday){
					this.$message({
			        	message: '生日不能为空',
			        	type: 'warning'
			        });
			        return;
				}
				if(!this.storeAdd.staffKey){
					this.$message({
			        	message: '主键不能为空',
			        	type: 'warning'
			        });
			        return;
				}
				if(!this.storeAdd.staffName){
					this.$message({
			        	message: '姓名不能为空',
			        	type: 'warning'
			        });
			        return;
				}
				if(!this.storeAdd.staffPhone){
					this.$message({
			        	message: '手机号不能为空',
			        	type: 'warning'
			        });
			        return;
				}
				if(!this.storeAdd.staffSex){
					this.$message({
			        	message: '性别不能为空',
			        	type: 'warning'
			        });
			        return;
				}
				if(!this.storeAdd.teamVale.teamKey){
					this.$message({
			        	message: '分组不能为空',
			        	type: 'warning'
			        });
			        return;
				}
				let data = {
					staffBirthday:this.storeAdd.staffBirthday,
					staffKey:this.storeAdd.staffKey,
					staffName:this.storeAdd.staffName,
					staffPhone:this.storeAdd.staffPhone,
					staffPortrait:this.image_url,
					staffSex:this.storeAdd.staffSex,
					teamKey:this.storeAdd.teamVale.teamKey,
					staffTeam:this.storeAdd.teamVale.teamName
				}
				console.log(data)
				axios({
					method: 'post',
					url: 'http://39.104.113.112:7895/staff/create',
					data: Qs.stringify(data)
				}).then(function(message) {
					console.log(message)
					that.add = false;
					if(message.data.resCode == 0) {
						that.$message({
			        	message: '添加成功',
			        	type: 'success'
			           });
						that.searchClick();
					}else{
						that.$alert(message.data.result, '系统确认框', {
							confirmButtonText: '确定'
						})
					}
				})
			},
			teamQuery:function(){
				let data={};
				let that=this;
				console.log(11);
				axios({
					method: 'post',
					url: 'http://39.104.113.112:7895/team/query',
					data: Qs.stringify(data)
				}).then(function(message) {
					console.log(message)
					that.addTeam = false;
					if(message.data.resCode == 0) {
						that.options=message.data.teams;
						console.log(that.options);
					}else{
						that.$alert(message.data.result, '系统确认框', {
							confirmButtonText: '确定'
						})
					}
				})
			},
			addClickTeam:function(){
				let that = this;
				if(!this.teamAdd.teamKey){
					this.$message({
			        	message: '分组ID不能为空',
			        	type: 'warning'
			        });
				}else if(!this.teamAdd.teamName){
					this.$message({
			        	message: '分组名称不能为空',
			        	type: 'warning'
			        });
				}else{
					let data = that.teamAdd;
					console.log(data);
					axios({
					method: 'post',
					url: 'http://39.104.113.112:7895/team/create',
					data: Qs.stringify(data)
				}).then(function(message) {
					console.log(message)
					that.addTeam = false;
					if(message.data.resCode == 0) {
					}else{
						that.$alert(message.data.result, '系统确认框', {
							confirmButtonText: '确定'
						})
					}
				})
				}
			},
			deleteClick:function(row){
				console.log(row);
				let that = this;
				this.$confirm('此操作将永久删除该条数据, 是否继续?', '系统确认框', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					let data={
						staffKey: row.staffKey
					}
					console.log(data);
					axios({
						method: 'post',
						url: 'http://39.104.113.112:7895/staff/delete',
						data: Qs.stringify(data)
					}).then(function(message) {
						console.log(message)
						if(message.data.resCode == 0) {
							that.searchClick();
							that.$message({
								type: 'success',
								message: '删除成功'
							});
						} else {
							that.$alert(message.data.result, '系统确认框', {
								confirmButtonText: '确定'
							})
						}
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			changeShow:function(row){
				let that = this;
				let data={
					start_time:1543648179000,
					end_time:1545117915000,
					page:1,
					size:50
				};
				console.log(data)
				axios({
					method : 'post',
					url : 'http://39.104.113.112:7895/staff/search',
					data: Qs.stringify(data)
				}).then((message) => {
					console.log(message.data.result)
				})
			},
			changeShow1:function(row){
				let that = this;
				let data={
						id: "56014742-9e2b-4100-a6c9-1aec5f731950"
					}
				console.log(data)
				axios({
					method : 'post',
					url : 'http://192.168.2.123:7895/user/findByUser',
					data: Qs.stringify(data)
				}).then((message) => {
					console.log(message);
				})
			},
			changeClick:function(){
				let that = this;
				
				let data = this.storeChange;
				console.log(data)
				axios({
					method:'post',
					url:this.$store.state.http +'/customer/update',
					data:Qs.stringify(data)
				}).then(function(message) {
					console.log(message.data)
					that.change = false;
					if(message.data.resCode == 0) {
						that.searchClick();
					}else{
						that.$alert(message.data.result, '系统确认框', {
							confirmButtonText: '确定'
						})
					}
				})
				
			},
            handleRemove(file, fileList) {
              console.log(file, fileList);
            },
             handleAvatarSuccess(res, file) {
             this.fileList.url = URL.createObjectURL(file.raw);
            },
            handlePreview(file) {
              console.log(file);
            },
            uploadFile(file){
            	let that=this;
            	var formData=new FormData();
                formData.append('file',file);
                var file = formData;
                // axios("http://192.168.2.123:8090/staff/upload",file).then(function(message)=>{
                // 	console.log(res);
                //      if(res.data.code == 200){
                //          this.$message({
                //              message:"上传成功",
                //              type:'success'
                //          })
                //      }
                //     })
                console.log(file);
                axios({
					method:'post',
					url:"http://39.104.113.112:7895/staff/upload",
					data:file
				}).then(function(message) {
					that.image_url=message.data.image_url;
					console.log(message);
				})
            },
            handleExceed(files, fileList) {
              this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
              return this.$confirm(`确定移除 ${ file.name }？`);
            },
            getUUID:function(){
            	this.storeAdd.staffKey=this.uuid();
            },
            getUUIDTeam:function(){
            	this.teamAdd.teamKey=this.uuid();
            },
            uuid:function(){
                var s = [];
                var hexDigits = "0123456789abcdef";
                for (var i = 0; i < 36; i++) {
                    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
                }
                s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
                s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
                s[8] = s[13] = s[18] = s[23] = "-";
 
                var uuid = s.join("");
                return uuid;
            },
			searchClick:function(){
				let data = {
					pageNum:1,
					pageSize:10
				};
				if(this.store.staffKey){
					data.staffKey = this.store.staffKey
				}
				if(this.store.staffName){
					data.staffName = this.store.staffName
				}
				if(this.store.staffPhone){
					data.staffPhone = this.store.staffPhone
				}
				if(this.store.staffSex){
					data.staffSex = this.store.staffSex
				}
				if(this.store.staffTeam){
					data.staffTeam = this.store.staffTeam
				}
				console.log(data)
				let that = this;
				axios({
					method:'post',
					url:'http://39.104.113.112:7895/staff/query',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						that.tableData = message.data.Content;
					}else{
						that.tableData = [];
					}
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.spanClass{width: 110px;font-size: 12px;}
	.spanClass>i{color: #FF000c;}
	.el-radio{margin-top: 13px;}
	.el-input,.el-select {width: 150px;font-size: 12px;}
	.addBox{float: left;}
	.addBox:nth-last-of-type(1){padding:0 0 0px 50px;}
	.addBox>.el-button{font-size: 12px;width: 40px;margin-top: 15px;margin-left:0;}
	.addBox>.el-button:nth-last-of-type(1){margin-left: 10px;}
	.clearfix{border-bottom:1px solid #CCCCCC;margin-top: 30px;padding-bottom: 30px;}
	.clearfix:nth-of-type(1){margin-top: 0;}
	.addBoxT{width: 100%;}
	.long{width: 75%;}
	.longT{width: 60%;}
	.clear{border-bottom:none;margin-top: 30px;padding-bottom: 0px;}
	.clearT{margin-top: 0;border-bottom:1px solid #CCCCCC ;padding-bottom: 30px;}
	.addBoxInp>.el-select{width: 100px;}
	.addBoxInp>.el-input{width: 100px;}
	.addBoxInp{padding-left: 0!important;}
	.cotDialog{height: 200px;}
	.clearT:nth-last-of-type(1){border: none;padding-bottom: 0;}
	.el-input__icon{display: none;}
	.cotDialogTeam{height: 100px;}
</style>