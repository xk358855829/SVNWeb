<template>
	<div id="addReadHead">
		<div class="title">
			<el-row>
				<el-col :span="2" class='fP'>控制器信息：</el-col>
				<el-col :span="22" class='p'>
					<el-row>
						<el-col :span="2">控制器名称：</el-col>
						<el-col :span="4">{{control.controName}}</el-col>
					</el-row>
					<el-row>
						<el-col :span="2">控制器ID：</el-col>
						<el-col :span="4">{{control.controMac}}</el-col>
					</el-row>
					<el-row>
						<el-col :span="2">所属门店：</el-col>
						<el-col :span="4">{{control.storeName}}</el-col>
					</el-row>
					<el-row>
						<el-col :span="2">编号类别：</el-col>
						<el-col :span="4">{{control.controAlias}}</el-col>
					</el-row>
				</el-col>
			</el-row>
		</div>
		
		<div class="content">
			<div class="header">
				<div class="headerTitle">
					<span>关联读头</span>
				</div>
			</div>
			<div class="select">
				<el-button type="success" icon="el-icon-plus"  @click="add = true">添加</el-button>
			</div>
			<el-table :data="tableData" style="width: 100%">
				<el-table-column type="index" label="序号" width="100"> </el-table-column>
				<el-table-column prop="equipmentName" label="名称" width=""> </el-table-column>
				<el-table-column prop="equipmentAlias" label="读头ID" width=""> </el-table-column>
				<el-table-column prop="equipmentType" label="编号类别" width=""> </el-table-column>
				<el-table-column prop="" label="操作" width='150'>
					<template slot-scope="scope">
						<el-tooltip class="item" effect="dark" content="修改" placement="top">
    						<i class="el-icon-edit" @click="changeShow(scope.row)" ></i>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="删除" placement="top">
    						<i class="el-icon-delete" @click="deleteClick(scope.row)"></i>
						</el-tooltip>
						<!--<el-tooltip class="item" effect="dark" content="添加读头" placement="top">
    						<i class="el-icon-circle-plus-outline" @click="addReadHead(scope.row)"></i>
						</el-tooltip>-->
					</template>
				</el-table-column>
			</el-table>
			<el-dialog title="添加" :visible.sync="add">
				<span class="spanClass">读头名称：</span>
				<el-input v-model="storeAdd.equipmentName" clearable placeholder="请输入内容"></el-input><br /><br />
				
				<span class="spanClass">读头ID：</span>
				<el-input v-model="storeAdd.equipmentAlias" clearable placeholder="请输入内容"></el-input><br /><br />
				
				<span class="spanClass">读头类型：</span>
				<el-select v-model="storeAdd.equipmentType" placeholder="请选择">
    				<el-option v-for="item in equipmentTypeList" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select><br /><br />
				
				<span class="spanClass">编号类别：</span>
				<el-input v-model="storeAdd.equipmentType" :disabled="true" clearable placeholder="请输入内容"></el-input><br /><br />
				
				<div slot="footer" class="dialog-footer">
			    	<el-button @click="add = false">取 消</el-button>
			    	<el-button type="primary" @click="addClick()">确 定</el-button>
				</div>
			</el-dialog>
			<el-dialog title="修改" :visible.sync="change">
				<span class="spanClass">读头名称：</span>
				<el-input v-model="storeChange.equipmentName" clearable placeholder="请输入内容"></el-input><br /><br />
				
				<span class="spanClass">读头ID：</span>
				<el-input v-model="storeChange.equipmentAlias" clearable placeholder="请输入内容"></el-input><br /><br />
				
				<span class="spanClass">读头类型：</span>
				<el-select v-model="storeChange.equipmentType" placeholder="请选择">
    				<el-option v-for="item in equipmentTypeList" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select><br /><br />
				
				<span class="spanClass">编号类别：</span>
				<el-input v-model="storeChange.equipmentType" :disabled="true" clearable placeholder="请输入内容"></el-input><br /><br />
				
				<div slot="footer" class="dialog-footer">
			    	<el-button @click="change = false">取 消</el-button>
			    	<el-button type="primary" @click="changeClick()">确 定</el-button>
				</div>
			</el-dialog>
		</div>
	</div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
export default {
	name: 'addReadHead',
	data() {
		return {
			tableData:[],
			control:{
				controAlias:'',
				controId:'',
				controMac:'',
				controName:'',
				storeName:'',
				storeId:''
			},
			add:false,
			change:false,
			storeAdd:{
				equipmentName:'',
				equipmentAlias:'',
				equipmentType:'F0010',
				storeId:'',
				equipmentContro:''
			},
			storeChange:{
				equipmentId:'',
				equipmentName:'',
				equipmentAlias:'',
				equipmentType:'',
				storeId:'',
				equipmentContro:''
			},
			equipmentTypeList:[{label:'指静脉',value:'F0010'},{label:'动态二维码+RFID',value:'F0003'}]
		}
	},
	mounted: function() {
		console.log(this.$route.query.controId)
		this.searchClick();
	},
	methods: {
		changeShow:function(row){
			console.log(row)
			this.storeChange.equipmentId = row.equipmentId;
			this.storeChange.equipmentName = row.equipmentName;
			this.storeChange.equipmentAlias = row.equipmentAlias;
			this.storeChange.equipmentType = row.equipmentType;
			this.storeChange.storeId = row.storeId;
			this.storeChange.equipmentContro = this.$route.query.controId;
			this.change = true;
		},
		changeClick:function(){
			let that = this;
			let data = this.storeChange;
			console.log(data)
			axios({
				method:'post',
				url:this.$store.state.http +'/equipment/updEquipmenty',
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
		addClick:function(){
			let that = this;
			let data = that.storeAdd;
			data.storeId = that.control.storeId;
			data.equipmentContro = that.$route.query.controId
			console.log(data)
			axios({
				method: 'post',
				url: that.$store.state.http + '/equipment/add',
				data: Qs.stringify(data)
			}).then(function(message) {
				console.log(message.data)
				that.add = false;
				if(message.data.resCode == 0) {
					that.searchClick();
				}else{
					that.$alert(message.data.result, '系统确认框', {
						confirmButtonText: '确定'
					})
				}
			})
		},
		deleteClick:function(row){
			console.log(row)
			let that = this;
			that.$confirm('此操作将永久删除该条数据, 是否继续?', '系统确认框', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				axios({
					method: 'post',
					url: that.$store.state.http + '/equipment/del',
					data: Qs.stringify({
						equipmentId: row.equipmentId
					})
				}).then(function(message) {
					console.log(message.data)
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
			let that = this;
			axios({
				method: 'post',
				url: this.$store.state.http + '/equipment/list',
				data: Qs.stringify({
					controId:this.$route.query.controId
				})
			}).then(function(message){
				if(message.data.resCode == 0){
					console.log(message.data)
					that.control = message.data.result1;
					that.tableData = message.data.result2;
				}
			})
		}
	}
}</script>

<style scoped="scoped">
	.el-input,.el-select {width: 180px;}
	.content{margin-top: 20px;}
	.title {border: 1px solid #CCCCCC;}
	.fP{line-height: 144px;text-align: center;border-right:1px solid #C0C4CC;}
	.p>.el-row>.el-col:nth-of-type(1){height: 36px;line-height: 36px;text-align: right;}
	.p>.el-row>.el-col:nth-of-type(2){height: 36px;line-height: 36px;}
</style>