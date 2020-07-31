<template>
  <div id="app">
  	<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :unique-opened="false">
      <el-submenu v-for='(activeA,index) in activeName' :index="index" >
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{activeA.classA.listname}}</span>
        </template>
        <el-menu-item-group class='oYmenuItemGroup'>
          <el-menu-item v-for="(activeB,indey) in activeA.classB" :index="index+'-'+indey"><i class="el-icon-location"></i>{{activeB.listname}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
  	</el-menu>
	  <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
export default {
  name: 'App',
  provide(){
	  return{
		  reload:this.reload
	  }
  },
  data(){
  	return{
		activeName:[],
		isRouterAlive:true
  	}
  },
  mounted:function(){
  	let that = this;
  	let list = [{
					"iconPath": "/index/icon-left.png ",
					"listId": 2,
					"listLevel": 1,
					"listname": "设备管理",
					"pagename": "idCodeMng",
					"preListId": 0,
					"propIndex": 2
				}, {
					"iconPath": "/index/icon-left.png",
					"listId": 1,
					"listLevel": 1,
					"listname": "智能硬件",
					"pagename": "webSetting",
					"preListId": 0,
					"propIndex": 1
				}, {
					"iconPath": "/index/icon-left.png",
					"listId": 3,
					"listLevel": 2,
					"listname": "设备分布",
					"pagename": "mapView",
					"preListId": 1,
					"propIndex": 3
				}, {
					"iconPath": "/index/icon-left.png",
					"listId": 4,
					"listLevel": 2,
					"listname": "设备状态",
					"pagename": "customerList",
					"preListId": 2,
					"propIndex": 4
				}]
				let len = list.length;
				let arr = [];
				for(let i=0;i<len;i++){
					if(list[i].listLevel==1){
						let obj = {
							classA:{},
							classB:[]
						}
						obj.classA = list[i];
						that.activeName.push(obj)
					}else{
						arr.push(list[i])
					}
				}
				for(let i=0;i<arr.length;i++){
					for(let j=0;j<that.activeName.length;j++){
						if(arr[i].preListId==that.activeName[j].classA.listId){
							that.activeName[j].classB.push(arr[i])
						}
					}
				}
  	axios({
					method:'get',
					url:this.$store.state.http+'/index/readyIndex'
			}).then(function(message){
				//console.log(message.data.leftLists)
				//let list = message.data.leftLists;
				let list = [{
					"iconPath": "/index/icon-left.png ",
					"listId": 2,
					"listLevel": 1,
					"listname": "设备管理",
					"pagename": "idCodeMng",
					"preListId": 0,
					"propIndex": 2
				}, {
					"iconPath": "/index/icon-left.png",
					"listId": 1,
					"listLevel": 1,
					"listname": "智能硬件",
					"pagename": "webSetting",
					"preListId": 0,
					"propIndex": 1
				}, {
					"iconPath": "/index/icon-left.png",
					"listId": 3,
					"listLevel": 2,
					"listname": "设备分布",
					"pagename": "mapView",
					"preListId": 1,
					"propIndex": 3
				}, {
					"iconPath": "/index/icon-left.png",
					"listId": 4,
					"listLevel": 2,
					"listname": "设备状态",
					"pagename": "customerList",
					"preListId": 2,
					"propIndex": 4
				}]
				let len = list.length;
				let arr = [];
				for(let i=0;i<len;i++){
					if(list[i].listLevel==1){
						let obj = {
							classA:{},
							classB:[]
						}
						obj.classA = list[i];
						that.activeName.push(obj)
					}else{
						arr.push(list[i])
					}
				}
				for(let i=0;i<arr.length;i++){
					for(let j=0;j<that.activeName.length;j++){
						if(arr[i].preListId==that.activeName[j].classA.listId){
							that.activeName[j].classB.push(arr[i])
						}
					}
				}
				/*console.log(that.activeName)*/
			})
  },
  methods:{
  	handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
	handleClose(key, keyPath) {
	console.log(key, keyPath);
	},
	reload(){
		this.isRouterAlive=false;
		this.$nextTick(function(){
			this.isRouterAlive=true;
		})
	}
  }
}
</script>

<style>
.oYmenuItemGroup>div{display: none;}
</style>
