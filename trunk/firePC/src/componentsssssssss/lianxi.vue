<template>
	<div id="roleList">
		<div v-for="(a,index) in classA">
			<el-checkbox @change="handleCheckAllChange">{{a.menuName}}</el-checkbox>
			<el-checkbox-group v-model="attClassB[index]" @change="handleCheckedCitiesChange">
			    <el-checkbox class="checkboxMarginLeft" v-for="id in classB[index]" :label="id.menuId" :key="id.menuId">{{id.menuName}}</el-checkbox>
			</el-checkbox-group>
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
				checkbox:{
					checkedCities:[]
				},
				checkAll:false,
				isIndeterminate:true,
				paging:{
					page:1,
					pageSize:10,
					total:0
				},
				dataUniversal:this.$store.state.activeName,
				updataUserId:'',
				classA:[],
				classB:[],
				attClassB:[]
			}
		},
		mounted: function() {
			let that = this;
				let classA = [];
				let classB = [];
				let attClassB = [];
				for (var i = 0; i < this.dataUniversal.length; i++) {
					classA.push(this.$store.state.activeName[i].classA);
					classB.push(this.$store.state.activeName[i].classB);
				}
				for (var i = 0; i < this.classB.length; i++) {
					let arry = [];
					for(var j = 0; j < this.classB[i].length; j++){
						arry.push(this.classB[i][j].menuId)
					}
					attClassB.push(arry);
				}
				that.attClassB = attClassB;
				that.classA = classA;
				that.classB = classB;
				console.log(that.attClassB)
		},
		methods: {}
	}
</script>

<style scoped="scoped">
	.el-input,.el-select{
		width: 200px;
	}
	#roleList{padding: 20px;}
	
	/*.textareaWidth{width: 200px;}*/
</style>