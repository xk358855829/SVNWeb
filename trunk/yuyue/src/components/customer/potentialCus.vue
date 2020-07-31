<template>
	<div id="potentialCus">
		<div class="header">
			<div class="headerTitle">
				<span>门店管理</span>
			</div>
		</div>
		<div class="select">
			<span>录入时间：</span>
			<el-input v-model="storeAdd.time" clearable placeholder="请输入内容"></el-input>
			<span>客户名称：</span>
			<el-input v-model="storeAdd.userName" clearable placeholder="请输入内容"></el-input>
			<span>客户手机：</span>
			<el-input v-model="storeAdd.phone" clearable placeholder="请输入内容"></el-input>
		</div>
		<div class="select">
			<el-button type="success" icon="el-icon-plus"  @click="add = true">添加</el-button>
			<!--<el-button type="success" icon="el-icon-plus"  @click="">入会</el-button>-->
			<el-button type="success" icon="el-icon-search" @click='searchClick'>查询</el-button>
		</div>
		<div class="Content">
			<el-table :data="tableData" style="width: 100%">
				<el-table-column type="index" label="序号"></el-table-column>
				<el-table-column prop="userName" label="客户名字"></el-table-column>
				<el-table-column prop="sex" label="性别"></el-table-column>
				<el-table-column prop="phone" label="手机号" width='200'></el-table-column>
				<el-table-column prop="birthday" label="生日"></el-table-column>
				<el-table-column prop="label" label="二维码标签" width='200'></el-table-column>
				<el-table-column prop="time" :formatter="timeStamp1" label="录入时间" width='200'></el-table-column>
				<el-table-column prop="" label="操作" width="150" >
					<template slot-scope="scope">
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
						<el-input v-model="storeAdd.userName" clearable placeholder="请填写姓名"></el-input><br /><br />
						<span class="spanClass"><i>*</i>手机号码：</span>
						<el-input v-model="storeAdd.phone" clearable placeholder="请填写手机号码"></el-input><br /><br />
						<span class="spanClass"><i>*</i>二维码标签：</span>
						<el-input v-model="storeAdd.label" clearable placeholder="请生成二维码标签">
						</el-input><el-button size="mini" type="primary" @click="getUUID">生成</el-button>
					</div>
					<div class="addBox">
						<span class="spanClass"><i>*</i>性别：</span>
						<el-radio v-model="storeAdd.sex" label="男">男</el-radio>
						<el-radio v-model="storeAdd.sex" label="女">女</el-radio><br /><br />
				   		<span class="spanClass"><i>*</i>生日：</span>
				   		<el-date-picker v-model="storeAdd.birthday" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker><br /><br />
				   		<!-- <span class="spanClass"><i>*</i>密码类型：</span>
				   		<el-select v-model="storeAdd.type" placeholder="请选择"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select><br /><br /> -->
					</div>
				</div>
				
			</div>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="add = false">取 消</el-button>
		    <el-button type="primary" @click="addClick">确 定</el-button>
		  </div>
		</el-dialog>
		<el-dialog title="修改" :visible.sync="change">
			<div class="cotDialog">
				<div class="clearfix">
					<div class="addBox">
						<span class="spanClass"><i>*</i>姓名：</span>
						<el-input v-model="storechange.userName" clearable placeholder="请填写姓名"></el-input><br /><br />
						<span class="spanClass"><i>*</i>手机号码：</span>
						<el-input v-model="storechange.phone" clearable placeholder="请填写手机号码"></el-input><br /><br />
						<span class="spanClass"><i>*</i>二维码标签：</span>
						<el-input v-model="storechange.label" clearable placeholder="请生成二维码标签">
						</el-input><el-button size="mini" type="primary" @click="getUUIDchange">生成</el-button>
					</div>
					<div class="addBox">
						<span class="spanClass"><i>*</i>性别：</span>
						<el-radio v-model="storechange.sex" label="男">男</el-radio>
						<el-radio v-model="storechange.sex" label="女">女</el-radio><br /><br />
				   		<span class="spanClass"><i>*</i>生日：</span>
				   		<el-date-picker v-model="storechange.birthday" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker><br /><br />
				   		<!-- <span class="spanClass"><i>*</i>密码类型：</span>
				   		<el-select v-model="storechange.type" placeholder="请选择"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select><br /><br /> -->
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
				storeAdd:{
					userName:'',//客户的名字
					sex:'',//客户性别
					phone:'',//客户手机号
					birthday:'2018-06-06',//客户生日
					label:'',//客户主键
					time:''
					// type:''
				},
				storechange:{
					userName:'',//客户的名字
					sex:'',//客户性别
					phone:'',//客户手机号
					birthday:'2018-06-06',//客户生日
					label:'',//客户主键
					time:''
					// type:''
				},
				// options:[{
    //                 value:0,
    //                 label:"动态"
				// },{
				// 	value:1,
    //                 label:"静态"
				// }],
				tableData:[],
				add: false,
				change:false,
				checked:false
			}
		},
		mounted: function() {
			this.searchClick()
		},
		methods: {
			addClick(){
				this.storeAdd.time=new  Date().getTime();
				let data=this.storeAdd;
                console.log(data);
                let that = this;
				axios({
					method:'post',
					url:'http://39.104.113.112:7895/user/save',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message)
					if(message.data.resCode==0){
						that.$message({
					        message: '添加成功',
					        type: 'success'
					    });
					    that.add=false;
					}else{
						that.$message({
					        message: '添加失败',
					        type: 'success'
					    });
					}
				}).catch(function(error){
					that.$message({
					        message: '添加失败',
					        type: 'success'
					});
				})
			},
			getUUID:function(){
            	this.storeAdd.label=this.uuid();
            },
            getUUIDchange:function(){
            	this.storechange.label=this.uuid();
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
            timeStamp1(timestamp1){
            	let time=parseInt(timestamp1.time);
		        var date = new Date(time);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
		        var Y = date.getFullYear() + '-';
		        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
		        var D = (date.getDate()>9?date.getDate():'0'+date.getDate()) + ' ';
		        var h = (date.getHours()>9?date.getHours():'0'+date.getHours()) + ':';
		        var m = (date.getMinutes()>9?date.getMinutes():'0'+date.getMinutes()) + ':'; 
		        var s = (date.getSeconds()>9?date.getSeconds():'0'+date.getSeconds()); 
		        return Y+M+D+h+m+s;
			},
			changeShow(row){
				this.storechange=row;
				this.change=true;
			},
			changeClick(){
				this.storeAdd.time=new  Date().getTime();
				let data=this.storechange;
                console.log(data);
                let that = this;
				axios({
					method:'post',
					url:'http://39.104.113.112:7895/user/save',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message)
					if(message.data.resCode==0){
						that.$message({
					        message: '修改成功',
					        type: 'success'
					    });
					    that.change=false;
					}else{
						that.$message({
					        message: '修改失败',
					        type: 'success'
					    });
					}
				}).catch(function(error){
					that.$message({
					        message: '修改失败',
					        type: 'success'
					});
				})
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
						id: row.userId
					}
					console.log(data);
					axios({
						method: 'post',
						url: 'http://39.104.113.112:7895/user/delete',
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
			searchClick:function(){
				let data = {
					page:0,
					size:10
				};
				// if(this.store.entryPeople){
				// 	data.entryPeople = this.store.entryPeople
				// }
				// if(this.store.entryTimes){
				// 	data.entryTimes = this.store.entryTimes
				// }
				// if(this.store.custPhone){
				// 	data.custPhone = this.store.custPhone
				// }
				// if(this.store.custName){
				// 	data.custName = this.store.custName
				// }
				console.log(data)
				let that = this;
				axios({
					method:'post',
					url:'http://39.104.113.112:7895/user/find',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
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
</style>