<template>
  <div id="pageHome">
	  <el-container class='oyContainer'>
		<el-header class = 'oyHeader'>
			<span class="icommy"><img src='http://cloud.sokeed.com/phproot/image/index/logo_02.png' /></span>
			<span class="siaze">智慧泊车设备服务云平台</span>
			<div class="imgset">
				<router-link to='/pageHome'>
					<img src="../../static/image/powr2.png" alt="">
					<span class="titles">首页</span>
				</router-link>
				<!-- <router-link to='/pageHome/filter'>
					<img src="../../static/image/powr.png" alt="">
					<span class="titles">电量</span>
				</router-link>
				<router-link to='/pageHome/troProQuery'>
					<img src="../../static/image/powr1.png" alt="">
					<span class="titles">故障</span>
				</router-link> -->
				<el-dropdown trigger="click">
					<span class="el-dropdown-link">
						<img src="../../static/image/people.png" alt=""><i class="titles">{{userAlias}}</i>
					</span>
					<el-dropdown-menu slot="dropdown">
					<el-dropdown-item><span @click='personalClick'>个人中心</span></el-dropdown-item>
					<el-dropdown-item><span @click='signOut'>退出</span></el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		<el-dialog title="个人中心" :visible.sync="personal" class="perpon">
  			<div class="oYpersonal">
  				<span class="oYspan" :class="sty==1?'styles':''" @click="sty = 1">查看详情</span>
  				<span class="oYspan" :class="sty==2?'styles':''" @click="sty = 2">修改资料</span>
  				<span class="oYspan" :class="sty==3?'styles':''" @click="sty = 3">修改密码</span>
  			</div>
				<div v-if="sty == 1">
					<span class="oYperSty">账号：</span><span>{{data.userName}}</span><br /><br />
					<span class="oYperSty">用户类型：</span><span>{{data.type}}</span><br /><br />
					<span class="oYperSty">用户名：</span><span>{{data.userAlias}}</span><br /><br />
					<span class="oYperSty">绑定手机：</span><span>{{data.phoneNum}}</span><br /><br />
					<span class="oYperSty">绑定邮箱：</span><span>{{data.email}}</span><br /><br />
				</div>
				<div v-if="sty == 2">
					<span class="oYperSty">账号：</span><span>{{data.userName}}</span><br /><br />
					<span class="spanClass">用户名：</span>
					<el-input class='oYinp' v-model="data.userAlias" clearable placeholder="请输入内容"></el-input><br /><br />
					<span class="spanClass">绑定手机：</span>
					<el-input class='oYinp' v-model="data.phoneNum" clearable placeholder="请输入内容"></el-input><br /><br />
					<span class="spanClass">绑定邮箱：</span>
					<el-input class='oYinp' v-model="data.email" clearable placeholder="请输入内容"></el-input>
				</div>
				<div v-if="sty == 3">
					<span class="oYperSty">账号：</span><span>{{data.userName}}</span><br /><br />
					<span class="spanClass">旧密码：</span>
					<el-input class='oYinp' type='password' v-model="oldPassWord" clearable placeholder="请输入内容"></el-input><br /><br />
					<span class="spanClass">新密码：</span>
					<el-input class='oYinp' type='password' v-model="newPassWord" clearable placeholder="请输入内容"></el-input><br /><br />
					<span class="spanClass">重复密码：</span>
					<el-input class='oYinp' type='password' v-model="rNewPassWord" clearable placeholder="请输入内容"></el-input>
				</div>
				<div slot="footer" class="dialog-footer">
				  <el-button type="success" class="oyButton" @click="personal = false">取消</el-button>
				  <el-button v-if="sty == 2" type="success" class="oyButton" @click="changeData">保存</el-button>
					<el-button v-if="sty == 3" type="success" class="oyButton" @click="changePassWord">保存</el-button>
				</div>
			</el-dialog>		
		
		</el-header>
		<el-container>
			<el-aside :class="{lastadd:yes,firstadd:no}">
			  <el-radio-group v-model="isCollapse">
				  <span class="guide-nav-angle" @click="slidehide"> 
						<img class="guide-nav-angle-icon" src="../../static/image/nav.png" alt="">
					</span>
					 <!-- <el-radio-button :label="false">展开</el-radio-button>
  					<el-radio-button :label="true">收起</el-radio-button> -->
				</el-radio-group>
				<el-menu default-active="2" class="side el-menu-vertical-demo" :unique-opened="true" :collapse="isCollapse" text-color="#fff" active-text-color="#e6e6e6">
				<el-submenu index="1" v-for='(activeA,index) in this.$store.state.activeName' :index="index+''" :key='index' >
					<template slot="title">
					<i><img :src="'./static/image/icon/'+activeA.classA.menuAddress" alt=""></i>
					<span class="oYtitle" slot="title">{{activeA.classA.menuName}}</span>
					</template>
					 <el-menu-item-group class='oYmenuItemGroup'>
					<el-menu-item  class='oYelMenuItem' v-for="(activeB,indey) in activeA.classB" :index="index+'-'+indey" @click='toClick(activeB.menuPagename)' :key='indey'>
			          		<div><img :src="'./static/image/icon/'+activeB.menuAddress"/></div>
			          	<div class="oYname" v-if="timehide">{{activeB.menuName}}</div>
			          </el-menu-item>
					 </el-menu-item-group>
				</el-submenu>
				</el-menu>
			<!-- <div style="position: absolute;bottom: 10px;color: #FFFFFF;width: 180px;height: 80px;line-height: 40px;font-size: 24px;z-index: 99999999;" v-if="timehide">
				{{timeDate.day}}<br/>
				{{timeDate.time}}
			</div> -->
  		</el-aside>
			<el-main class='main'><router-view/></el-main>
		</el-container>
	</el-container>
  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
import {mapState,mapActions} from 'vuex'
export default {
  name: 'pageHome',
  data(){
  	return{
		yes:true,
		no:false,
		timehide:true,
		isCollapse:false,
  		sty:'1',
  		personal:false,
  		timeDate:{
  			day:'',
  			time:''
		  },
		name:'',
		imgtable:['../../static/image/icon/停车场.png','../../static/image/icon/咨询.png','../../static/image/icon/售后.png','../../static/image/icon/故障.png'],
  		userAlias:'',
  		data:{},
  		oldPassWord:'',
  		newPassWord:'',
		rNewPassWord:'',
		logo:'',
		isCollapse: true
  	}
  },
  mounted:function(){
  		let that = this;
		  that.userAlias = sessionStorage.getItem('userAlias');
		  that.getMenu()
		  console.log(998)
		  that.facility()
		  that.parktitle()
		  that.typepays()
  		// document.getElementsByClassName('side')[0].style.height = document.body.clientHeight-170+'px'
  		setInterval(function(){
  			that.timeDate = that.getNowFormatDate()
		},1000)

	},
	created(){
    this.$store.dispatch('getSalePlans')
	},
  methods:{
	...mapActions([
		'getMenu','parktitle','typepays','facility'
	]),
	slidehide(){
		this.yes=!this.yes;
		this.no=!this.no;
		this.isCollapse=!this.isCollapse
	},
  	changePassWord(){
  		let that = this;
  		if(this.oldPassWord.length<6){
  			this.$message.error('旧密码有误');
  		}else	if(this.newPassWord != this.rNewPassWord){
  			this.$message.error('两次新密码不一致');
  		}else if(this.newPassWord.length>=6&&this.newPassWord.length<=20){
  			let data = {
  				oldpassword:this.oldPassWord,
  				userId:localStorage.getItem('userId'),
  				Password:this.newPassWord
  			}
  			axios({
					method:'post',
					url:this.$store.state.url+'/s_user/resetPassword',
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
		  that.personal = false
		  that.oldPassWord=''
		  that.newPassWord=''
		  that.rNewPassWord=''
  	},
  	changeData(){
  		let that = this;
  		let regEmail = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
  		let regPhone=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
  		if(that.data.userAlias == ''){
  			that.$message.error('用户名不能为空');
  		}else if(!regPhone.test(that.data.phoneNum)){
  			that.$message.error('手机号码格式有误');
  		}else if(!regEmail.test(that.data.email)){
  			that.$message.error('邮箱格式不正确');
  		}else{
  			let data = {
	  			userName:that.data.userAlias,
				userId:localStorage.getItem('userId'),
				phoneNum:that.data.phoneNum,
				email:that.data.email
	  		}
	  		axios({
					method:'post',
					url:this.$store.state.url+'/s_user/update',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						that.$message({
							message: '修改成功',
							type: 'success'
						});
					}else{
						that.$message({
							message: '修改失败',
							type: 'error'
						});
					}
				})
		  }
		  that.personal = false
  	},
  	getNowFormatDate(){
	    let date = new Date();
	    let seperator1 = "-";
	    let seperator2 = ":";
	    let month = date.getMonth() + 1;
	    let strDate = date.getDate();
	    let Hours = date.getHours()>9?date.getHours():'0'+date.getHours();
	    let Minutes = date.getMinutes()>9?date.getMinutes():'0'+date.getMinutes();
	    let Seconds = date.getSeconds()>9?date.getSeconds():'0'+date.getSeconds();
	    if (month >= 1 && month <= 9) {
	        month = "0" + month;
	    }
	    if (strDate >= 0 && strDate <= 9) {
	        strDate = "0" + strDate;
	    }
	    let data = {
	    	day:date.getFullYear() + seperator1 + month + seperator1 + strDate,
	    	time:Hours + seperator2 + Minutes + seperator2 + Seconds
	    };
	    return data;
		},
		signOut(){
			sessionStorage.removeItem('userAlias');
			sessionStorage.removeItem('permissions');
			localStorage.removeItem('dealerId')
			localStorage.removeItem('userId')
			localStorage.removeItem('userType')
			localStorage.removeItem('dealer')
			this.$router.push('/pageLogin');
		},
		toClick(val){
			console.log(val)
			this.$router.push('/pageHome/'+val);
		},
		linkOut(){
			// window.location.href = "http://datav.aliyun.com/share/9e8cf5876efeede4430381ce5d565d6b";
			window.location.href="https://datav.aliyun.com/share/075f7fde7ced6a456223c7ed8939aa72"
		},
		personalClick(){
			let that = this;
			this.personal = true;
			axios({
				method:'post',
				url:this.$store.state.url+'/s_user/selectAllByUserId?userId='+localStorage.getItem('userId'),
			}).then(function(message){
				/*console.log(message.data.result)*/
				if(message.data.resCode==0){
					
					console.log(message.data.result);
					if(message.data.result.type=="0"){
						message.data.result.type='超级管理员'
					}else if(message.data.result.type=="1"){
						message.data.result.type='管理员'
					}else if(message.data.result.type=="2"){
						message.data.result.type='客户'
					}else if(message.data.result.type=="3"){
						message.data.result.type='客服人员'
					}else if(message.data.result.type=="4"){
						message.data.result.type='维修安装人员'
					}
					that.data = message.data.result;
				}
			})
		}
  }
}
</script>

<style>
	.oYinp{width: 250px!important;}
	.oYperSty{margin-left: 158px;}
	.oYpersonal{padding-bottom: 20px;}
	.oYimg{width: 18px;}
	.styles{color: #A2CC6D;}
	.oYspan{padding: 0 20px;cursor: pointer;}
	.el-input,.el-select {width: 180px;}
	.el-date-editor.el-input{width: 180px;}
	.oYname{width: 60%;text-align: left;}
	.oYtitle{text-align: left;padding-left: 0px;float: left;margin-left: 10px;}
	/* .oytitleno{margin-left: -200px!important;} */
	.oYmenuItemGroup{width: 200px;}
	.oYmenuItemGroup .oYelMenuItem:hover{
		background: #303133!important;
		color: #00a2ca!important;
	}
	.oYmenuItemGroup>div{display: none;}
	.oYelMenuItem{display: flex;min-width: 170px!important;padding:0 10px!important;}
	.oYelMenuItem>div:nth-of-type(1){width: 36px;color: #fff;}
	.oyInp{width: 200px;}
	.Content{padding-bottom: 92px;}
	.sideFa{width: 180px;overflow-x: hidden;}
	/* .side{overflow-y: scroll;width: 200px;border: none;transition: margin-left .3s linear .3s;} */
	.sideno{overflow-y: scroll;width: 200px;border: none;margin-left: -133px!important;transition: margin-left .3s linear .3s;}
	.el-checkbox__input.is-checked+.el-checkbox__label{color: #67C23A;}
	.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{border-color: #67C23A;background-color: #67C23A;}
	.TsMaxWidth{max-width: 200px;}
	.main{height:100%;padding: 0;}
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
	
	.icon-delete{cursor: pointer;padding: 4px;background-color: #c9521e; color: #FFFFFF;border-radius: 3px;}
	.icon-unclick{cursor: pointer;padding: 4px;background-color: #777777; color: #FFFFFF;border-radius: 3px;}
	.icon-change{cursor: pointer;padding: 4px;background-color: #f8c541; color: #FFFFFF;border-radius: 3px;}
	.icon-setup{cursor: pointer;padding: 4px;background-color: #3A8EE6; color: #FFFFFF;border-radius: 3px;}
	.icon-export{cursor: pointer;padding: 4px;background-color: #de9e32; color: #FFFFFF;border-radius: 3px;}
	.icon-See{cursor: pointer;padding: 4px;background-color: #5DAF34; color: #FFFFFF;border-radius: 3px;}
	.icon-menu{cursor: pointer;padding: 4px;background-color: #67C23A; color: #FFFFFF;border-radius: 3px;}
	
	.aKey{color: #FF0000;padding: 0 5px;}
	
	.oyButton{width: 70px;padding: 0;border: 1px solid #a2cc6d;background: #a2cc6d;height: 30px;font-size: 12px;color: #FFFFFF;margin-left: 8px;cursor: pointer;}
	.oyButton:hover{background: #67C23A;color: #FFFFFF;border-color: #67C23A;}
	.oyButton:active{background: #67C23A;color: #FFFFFF;border-color: #67C23A;}
	
	.oyUnButton{width: 70px;padding: 0;border: 1px solid #CCCCCC;background: #CCCCCC;height: 30px;font-size: 12px;color: #333333;margin-left: 8px;cursor: pointer;}
	.oyUnButton:hover{width: 70px;padding: 0;border: 1px solid #CCCCCC;background: #CCCCCC;height: 30px;font-size: 12px;color: #333333;margin-left: 8px;cursor: pointer;}
	.oyUnButton:active{width: 70px;padding: 0;border: 1px solid #CCCCCC;background: #CCCCCC;height: 30px;font-size: 12px;color: #333333;margin-left: 8px;cursor: pointer;}
	
	.oyTable th:nth-of-type(1){border-bottom-left-radius:10px;border-top-left-radius:10px;}
	.oyTable th:nth-last-of-type(2){border-bottom-right-radius:10px;border-top-right-radius:10px;}
	.textareaWidth{width: 200px;}
	.oyTable th{background-color: #e3eaf3;text-align: center;font-weight: 900;color: #666666;}
	.oyTable tr{text-align: center;}
	.oyTableR th:nth-of-type(1){border-bottom-left-radius:0px;border-top-left-radius:0px;}
	.oyTableR th:nth-last-of-type(2){border-bottom-right-radius:10px;border-top-right-radius:10px;}
	
	.oyTableR th{background-color: #e3eaf3;text-align: center;font-weight: 900;color: #666666;}
	.oyTableR tr{text-align: center;}
	
	
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
	.oyContainer{
		height: 100%;
		
	}
  .el-aside {
    background-color: #252a2f;
    color: #333;
    text-align: center;
    /* overflow-y: hidden; */
	    overflow: inherit;
  }
  .oyHeader{
  	background-color: #252a2f;
  	height: 50px!important;
	  text-align: right;
	   padding-left:0!important;
  }
  .oyHeader .el-button{
	  margin: 15px 0;
	 
  }
  .perpon{
	  text-align:left;
  }
  .main{background-color: #FFFFFF;position: relative;overflow: auto;}
  
  
  .oyCollapseItem .el-collapse-item__header{
  	font-size: 16px;
  	border-bottom: none;
  	margin-right: 20px;
  }
  .oyCollapseItem .el-collapse-item__header,.oyCollapseItem .el-collapse-item__wrap{
  	background-color: #252a2f;
  	color: #FFFFFF;
  }
  .oyCollapseItem .el-collapse-item__wrap{
  	border-bottom: none;
  }
  .oyCollapseItem .el-collapse-item__content{
  	padding: 0;
  	border-bottom: none;
  }
  .icon {
  	height: 70px;
  }
  .icon>img{width: 100%;height: 100%;padding: 0 0;}
  .oyCollapseItem{text-align: left;}
  /* .side{overflow-y: scroll;width: 200px;border: none;margin-left: -130px;} */
  .side{overflow-y: auto;}
  .oyCollapseItem .el-collapse-item__header{padding-left: 25px;}
  .oyCollapseItem .el-collapse-item__header:hover{background-color: #3F4E61;}
  

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
	.el-pagination.is-background .el-pager li:not(.disabled).active{background-color: #A2CC6D;color: #FFFFFF;}
	.overflowHide{width: 100%;height: 22px; line-height: 22px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;}
	.spanClassT{display: block;float: left;line-height: 40px;width: 120px;text-align: right;}
	.step{margin-top: 20px;}
	.footer{padding: 30px 0;position: fixed;bottom: 0;background-color: #FFFFFF;width: 100%;}
	.el-popover{background-color: #FFFFFF;color: #666;border-color:#CCCCCC ;min-width: auto;}
	.el-popper .popper__arrow{border-style:inset;}
	.checkboxMarginLeft{margin-left: 24px;}
	.checkboxMarginTop{margin-top: 15px;}
	.oyMenu{height: 36px!important;line-height: 36px!important;}
	.oySpanName{width: 100px;display: block;float: left;margin-left: 50px;}
	.echartTitle{text-align: center;background-color: #f4f3f4;height: 60px;line-height: 60px;border:1px solid #e5e5e5 ; border-radius:5px;color: #2d353c;font-size: 18px;}
	.siaze{float: left;font-size: 22px;color: #fff;padding: 12px 0;}
	.icommy{float: left;}
	.icommy img{margin:0 auto;padding:7px 56px;}
	.guide-nav-angle{
		height: 32px;
		display: block;
		text-align: center;
		background: #3F4E61;
		line-height: 32px;
		cursor: pointer;
	}
	.guide-nav-angle-icon{
		font-size: 22px;
		color: #ffffff;
		line-height: 40px;
		text-align: center;
	}
	.lastadd{
		/* transition: width .1s linear .1s; */
		transition:.5s;
		/* width: 64px!important; */
		width: 64px!important;
	}
	.firstadd{
		transition:.5s;
		/* transition: width .1s linear .1s; */
		width:183px!important;
	}
	.el-submenu__title i{
		color: #fff!important;
	}
	.aby{
		position: absolute;
		right: 130px!important;
	} */
	.imgno{
		margin-left: 138px;
	}
	
	.el-container{
		overflow: hidden;
		height: calc(100% - 0px);
	}
	.titles{
		font-size: 15px;
		color: #fff;
	}
	.imgset{
		padding: 12px 0;
	}
	.el-menu{
		background-color: #252a2f;
	}
	.el-submenu__title{
		color: #fff;
	}
	.el-submenu__title:hover{
		background-color: #00a2ca!important;
	}
	.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 217px;
    height: 100%;
  }
  .el-radio-group{
	  width: 100%;
  }
	.el-submenu__title i{
		float: left;
	}
	.el-menu-item:hover{
		 background:  #00a2ca!important;
	 }
	 .el-menu-item.focus{
		  background:  #00a2ca!important;
	 }
	 .el-menu-item.is-active {
		background-color:#3f4e61!important;
		}
		.el-submenu__icon-arrow{
			right: 23%!important;
		}	
</style>
