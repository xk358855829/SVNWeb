<template>
	<div id="add">
		<select>
			<option v-for="op in opt" value="op.id">{{op.name}}</option>
		</select>
		<ul>
			<li class="aaa" v-for="da in das"><input type="checkbox"/><div><div>{{da.name}}</div><div>{{da.id}}</div></div></li>
		</ul>
		<button @click.prevent="tj()">提交</button>
	</div>
</template>

<script>
	let a;
	export default {
		name:'add',
		data(){
			return{
				opt:[{
					'name':'越秀地产',
					'id':1
				},{
					'name':'西湖',
					'id':2
				},{
					'name':'相互',
					'id':3
				},{
					'name':'蓝桥名苑',
					'id':4
				}],
				das:[{
					'name':'设备名0',
					'id':'000000000001'
				},{
					'name':'设备名1',
					'id':'000000000002'
				},{
					'name':'设备名2',
					'id':'000000000003'
				},{
					'name':'设备名3',
					'id':'000000000004'
				},{
					'name':'设备名4',
					'id':'000000000005'
				},{
					'name':'设备名5',
					'id':'000000000006'
				},{
					'name':'设备名6',
					'id':'000000000007'
				}],
				s:[]
			}
		},
		methods:{
			tj(){
				a = document.getElementsByTagName('input');
				for(var i=0;i<a.length;i++){
					if(a[i].checked){
						console.log(this.das[i].id)
						this.s.push(this.das[i].id)
					}
				}
				console.log(this.s)
			}
		}
	}
</script>

<style scoped>
	input{margin: 15px 0;}
	select{width: 100px;}
	ul{width: 200px;margin: 0;}
	li{list-style: none;display: flex;width: 200px;border-bottom: 1px solid #000000;}
	button{margin: 50px 80px;}
</style>