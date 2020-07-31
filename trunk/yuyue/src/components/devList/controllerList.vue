<template>
	<div id="controllerList">
		<div class="header">
			<div class="headerTitle">
				<span>控制器列表</span>
			</div>
		</div>
		<!--<div class="select">
			<span>门店名称：</span>
			<el-input v-model="store.storeName" clearable placeholder="请输入内容"></el-input>
			<span>门店地址：</span>
			<el-input v-model="store.storeAddress" clearable placeholder="请输入内容"></el-input>
			<span>联系人员：</span>
			<el-input v-model="store.storeResponsible" clearable placeholder="请输入内容"></el-input>
			<span>联系电话：</span>
			<el-input v-model="store.storePhone" clearable placeholder="请输入内容"></el-input>
		</div>-->
		<!--<div class="select">
			<el-button type="success" icon="el-icon-plus"  @click="add = true">添加</el-button>
			<el-button type="success" icon="el-icon-search" @click='searchClick'>查询</el-button>
		</div>-->
		<div class="Content">
			<el-table :data="tableData" style="width: 100%">
				<el-table-column type="index" label="序号" width="50"></el-table-column>
				<el-table-column prop="deviceId" label="控制器ID" width=""></el-table-column>
				<el-table-column prop="devicegroupId" label="门店ID" width=""></el-table-column>
				<el-table-column prop="mac" label="mac地址" width=""></el-table-column>
				<!--<el-table-column prop="" label="操作">
					<template slot-scope="scope">
						<i class="el-icon-edit" @click="changeShow(scope.row)" ></i>
						<i class="el-icon-delete" @click="deleteClick(scope.row)"></i>
					</template>
				</el-table-column>-->
			</el-table>
		</div>
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
					storeName:'',
					storeAddress:'',
					storeResponsible:'',
					storePhone:''
				},
				storeAdd:{
					storeLongitude:'',
					storeLatitude:'',
					storeName:'',
					storeAddress:'',
					storeResponsible:'',
					storePhone:''
				},
				tableData:[],
				add: false,
				change:false,
				storeChange:{
					storeLongitude:'',
					storeLatitude:'',
					storeName:'',
					storeAddress:'',
					storeResponsible:'',
					storePhone:''
				}
			}
		},
		mounted: function() {
			this.searchClick()
		},
		methods: {
			searchClick:function(){
				let data = new Object();
				if(this.store.storeName){
					data.storeName = this.store.storeName
				}
				if(this.store.storeAddress){
					data.storeAddress = this.store.storeAddress
				}
				if(this.store.storeResponsible){
					data.storeResponsible = this.store.storeResponsible
				}
				if(this.store.storePhone){
					data.storePhone = this.store.storePhone
				}
				console.log(data)
				let that = this;
				axios({
					method:'post',
					url:this.$store.state.http +'/device/list',
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
	.el-input,.el-select {
		width: 180px;
	}
</style>