<template>
  <div id="pageHome">
    <!--<img src="./assets/logo.png">-->
  	<el-container>
  		<el-aside width="180px">
  			<div class="icon"></div>
	  		<el-collapse accordion>
				  <el-collapse-item v-for="(activeA,index) in this.$store.state.activeName" :title="activeA.classA.menuName" :name="index" :key='index'>
				    <div class="li" v-for="activeB in activeA.classB"><img :src="'./static/image/'+activeB.menuPagename+'.png'"/><router-link :to='activeB.menuPagename'>{{activeB.menuName}}</router-link></div>
				  </el-collapse-item>
				</el-collapse>
  		</el-aside>
  		<el-container>
		    <el-header><router-link to='/pageHome'><el-button type="info">首页</el-button></router-link>&nbsp;&nbsp;<router-link to='add'><el-button type="info">添加分支</el-button></router-link></el-header>
		    <el-main><router-view/></el-main>
		  </el-container>
		</el-container>
  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
export default {
  name: 'pageHome',
  data(){
  	return{}
  },
  mounted:function(){
  		this.$store.dispatch('getMenu')
  		console.log(sessionStorage.getItem('userId'))
  		if(!sessionStorage.getItem('userId')){
  			that.$router.push('/login')
  		}
  },
  methods:{
  	
  }
}
</script>

<style>
	/*.el-input {
		width: 180px;
	}*/
	input[type="text"]{border-radius: 5px;}
	.header{border-bottom: 1px solid #C0C4CC;margin-bottom: 20px;}
	.headerTitle{padding-bottom: 16px;}
	.headerTitle>span{border-bottom: 5px solid #A2CC6D;text-align: center;font-size: 14px;padding-bottom: 10px;}
	.select {
		margin-bottom: 10px;
		font-size: 14px;
	}
	.select>span {
		margin-left: 5px;
	}
	/*.cell{height: 22px;}*/
	.el-icon-delete{cursor: pointer;padding: 4px;background-color: #c9521e; color: #FFFFFF;border-radius: 3px;}
	.el-icon-edit{cursor: pointer;padding: 4px;background-color: #f8c541; color: #FFFFFF;border-radius: 3px;}
	.el-icon-tickets{cursor: pointer;padding: 4px;background-color: #369a8c; color: #FFFFFF;border-radius: 3px;}
	.el-icon-circle-plus-outline{cursor: pointer;padding: 4px;background-color: #369a8c; color: #FFFFFF;border-radius: 3px;}
	.el-button{width: 70px;padding: 0;border: 1px solid #a2cc6d;background: #a2cc6d;height: 30px;font-size: 12px;color: #FFFFFF;margin-left: 8px;cursor: pointer;}
	.el-button:hover{background: #67C23A;color: #FFFFFF;border-color: #67C23A;}
	.el-button:active{background: #a2cc6d;color: #FFFFFF;border-color: #a2cc6d;}
	.el-button--primary:focus, .el-button--primary:hover{background: #67C23A;color: #FFFFFF;border-color: #67C23A;}
	.el-table th:nth-of-type(1){border-bottom-left-radius:10px;border-top-left-radius:10px;}
	.el-table th:nth-last-of-type(2){border-bottom-right-radius:10px;border-top-right-radius:10px;}
	.el-table th{background-color: #e3eaf3;text-align: center;font-weight: 900;color: #666666;}
	.el-table tr{text-align: center;}
	.el-table__row:nth-of-type(even) {
		background-color: #f2f6fa;
	}
	.el-message-box {
		border: none;
		border-radius:10px ;
	}
	
	.el-message-box__header {
		background-color: #A2CC6D;
	}
	.el-message-box__header span{font-size: 18px;}
	.el-message-box__title{color: #FFFFFF;}
	.el-message-box__content{border-bottom: 1px dashed #CCCCCC;padding:30px 20px;}
	.el-radio__input.is-checked .el-radio__inner{background: #5DAF34;color: #5DAF34;border-color: #5DAF34;}
	.el-radio__inner:hover{border-color: #5DAF34;}
	.el-radio__input.is-checked+.el-radio__label{color: #5DAF34;}
	.el-dialog{border-radius: 20px;overflow: hidden;min-width: 750px;}
	.el-dialog__header,.el-dialog__footer{background-color: #ededed;font-weight: 900;}
	.el-dialog__header{padding-bottom: 15px;}
	.dialog-footer{margin-top: 15px;}
	.el-message-box__btns>.el-button {
		background-color: #A2CC6D;
		border-color: #A2CC6D;
		color: #FFFFFF;
	}
	.el-message-box__btns>.el-button:hover {
		background-color: #67C23A;
		border-color: #67C23A;
		color: #FFFFFF;
	}
	#pageHome{
		height: 100%;
	}
	.el-container{
		height: 100%;
	}
  .el-aside {
    background-color: #2C394B;
    color: #333;
    text-align: center;
    line-height: 200px;
    overflow: hidden;
  }
  .el-header{
  	background-color: #2C394B;
  	height: 70px!important;
  	text-align: right;
  }
  .el-header .el-button{
  	margin: 15px 0;
  }
  .el-main{background-color: #FFFFFF;}
	.el-collapse-item{}
  .el-collapse{
  	border-top:none;
  	border-bottom:none;
  }
  .el-collapse-item__header{
  	font-size: 16px;
  	border-bottom: none;
  }
  .el-collapse-item__header, .el-collapse-item__wrap{
  	background-color: #2C394B;
  	color: #FFFFFF;
  }
  .el-collapse-item__wrap{
  	border-bottom: none;
  }
  .el-collapse-item__content{
  	padding: 0;
  	border-bottom: none;
  }
  .icon {
  	height: 70px;
  	background: url(http://cloud.sokeed.com/phproot/image/index/logo_02.png) no-repeat scroll center;
  }
  .el-collapse-item{text-align: left;}
  .el-collapse-item__header{padding-left: 25px;}
  .el-collapse-item__header:hover{background-color: #3F4E61;}
  .el-icon-arrow-right{margin-right: 25px;}
  .li{padding-left: 25px;}
	.li img{width: 18px;float: left;margin: 8px 0;margin-right: 10px;}
	.li a{display: block; height: 36px;line-height: 36px;font-size: 14px;cursor: pointer;color: #FFFFFF;text-align: left;}
	.li:hover{background-color: #5DAF34;color: #FFFFFF;}
	.li:active{background-color: #5DAF34!important;}
	.el-dropdown-menu__item:hover{color: #A2CC6D!important;}
	.contentTitle{background-color: #e3eaf3;height: 45px;border-radius:10px;text-align: center;}
	.contentTitle div{line-height: 45px;font-size: 16px;}
	.contentContent>.el-row{height: 45px;text-align: center;font-size: 14px;}
	.contentContent>.el-row:nth-of-type(even){background-color: #f2f6fa;}
	.contentContent>.el-row:hover{background-color: #e3eaf3;}
	.contentContent>.el-row>div{line-height: 45px;}
	header{padding-bottom: 30px;}
	.el-tooltip{cursor: pointer;overflow: hidden;overflow: hidden;text-overflow:ellipsis;white-space:nowrap}
	.operation{display: flex;justify-content: center;}
	.operation>span{display: block;width: 20%;}
	.operation>span>i{border: 1px solid #D8D8D8;padding: 5px;cursor: pointer;}
	.operation>span>i:hover{background-color: #CCCCCC;}
	.operation>span>i:active{background-color: #e3eaf3;color: #FFFFFF;}
	.spanClass{display: block;float: left;line-height: 40px;width: 200px;text-align: right;}
</style>
