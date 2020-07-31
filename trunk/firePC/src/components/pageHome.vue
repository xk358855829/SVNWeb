<template>
  <div id="pageHome">
	  <el-container class='oyContainer'>
		<el-header class = 'oyHeader'>
			<span class="icommy"><img :src=logo /></span>
			<span class="siaze">{{name}}</span>
				<el-button v-if="showData" type="info" @click="linkOut">数据展示</el-button>
			&nbsp;&nbsp;&nbsp;&nbsp;
			<router-link to='/pageHome'>
				<el-button type="info">首页</el-button>
			</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
			<el-dropdown trigger="click">
					<el-button type="info">{{userAlias}}</el-button>
					<el-dropdown-menu slot="dropdown">
					<el-dropdown-item><span @click='personalClick'>密码</span></el-dropdown-item>
					<el-dropdown-item><span @click='signOut'>退出</span></el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>	
		</el-header>
		<el-container>
			<el-aside :class="{lastadd:yes,firstadd:no}">
  			
	  		<div :class="{lastadd:yes,firstadd:no}">
				<span :class="{lastadd:yes,firstadd:no}"  class="guide-nav-angle" @click="slidehide"> 
					<img class="guide-nav-angle-icon" src="../../static/image/nav.png" alt="">
				</span>
				<el-menu default-active="2" :class="{side:yes,sideno:no}" background-color="#2C394B" text-color="#fff" active-text-color="#a2cc6d" :unique-opened="true">
			      <el-submenu v-for='(activeA,index) in this.$store.state.activeName' :index="index+''" :key='index'>
			        <template slot="title">
			          <div class="oYtitle">{{activeA.classA.menuName}}</div>
			        </template>
			        <el-menu-item-group class='oYmenuItemGroup'>
			          <el-menu-item class='oYelMenuItem' v-for="(activeB,indey) in activeA.classB" :index="index+'-'+indey" @click='toClick(activeB.menuPagename)' :key='indey'>
			          	<div :class="{oYimg:yes,imgno:no}"><img :src="'./static/image/icon/'+activeB.menuAddress"/></div>
			          	<div class="oYname" v-if="timehide">{{activeB.menuName}}</div>
			          </el-menu-item>
			        </el-menu-item-group>
			      </el-submenu>
			    </el-menu>
	  		</div>
			<!-- <div style="position: absolute;bottom: 10px;color: #FFFFFF;width: 180px;height: 80px;line-height: 40px;font-size: 24px;z-index: 99999999;" v-if="timehide">
				{{timeDate.day}}<br/>
				{{timeDate.time}}
			</div> -->
  		</el-aside>
			<el-main class='main'><router-view/></el-main>
		</el-container>
	</el-container>

<el-dialog title="修改密码" :visible.sync="personal">
					<div>
					<!-- <div class="oYspan" :class="sty==3?'styles':''" @click="sty = 3">修改密码</div> -->
					<!-- <span class="oYperSty">账号：</span><span>{{data.userName}}</span><br /><br /> -->
					<span class="spanClass">&nbsp;&nbsp;&nbsp;旧密码：</span>
					<el-input class='oYinp' type='password' v-model="oldPassWord" clearable placeholder="请输入内容"></el-input><br /><br />
					<span class="spanClass">&nbsp;&nbsp;&nbsp;新密码：</span>
					<el-input class='oYinp' type='password' v-model="newPassWord" clearable placeholder="请输入内容"></el-input><br /><br />
					<span class="spanClass">重复密码：</span>
					<el-input class='oYinp' type='password' v-model="rNewPassWord" clearable placeholder="请输入内容"></el-input>
					</div>
					<!-- <div slot="footer" class="dialog-footer"> -->
						<!-- <el-button type="success" class="oyButton" @click="personal = false">取消</el-button> -->
						<!-- <el-button class="oyButton" @click="changeData">保存</el-button> -->
				    <el-button type="success" class="oyButton cun cuntwo" @click="changePassWord">保存</el-button>
			    </el-dialog>

  	<!-- <el-container class='oyContainer'>
  		
  		
  		<el-container class='oyContainer'>
		    
				
		  </el-container>
		</el-container> -->
  </div>
</template>

<script>
import Qs from 'qs'
import axios from 'axios'
export default {
  name: 'pageHome',
  inject:['reload'],
  data(){
  	return{
		yes:true,
		no:false,
		timehide:true,
  		sty:'1',
  		personal:false,
  		timeDate:{
  			day:'',
  			time:''
		  },
		name:'',
  		userAlias:'',
  		data:{},
  		oldPassWord:'',
  		newPassWord:'',
		rNewPassWord:'',
		showData:false,
		logo:''
  	}
  },
  mounted:function(){
  		let that = this;
  		if(sessionStorage.getItem('dealer')=='123'){
  			this.showData=true;
  		}else{
  			this.showData=false;
  		}
  		this.userAlias = sessionStorage.getItem('userAlias');
  		this.$store.dispatch('getMenu')
  		/*console.log(sessionStorage.getItem('userId'))*/
  		if(!sessionStorage.getItem('userId')){
  			that.$router.push('/pageLogin')
  		}
  		document.getElementsByClassName('side')[0].style.height = document.body.clientHeight-170+'px'
  		setInterval(function(){
  			that.timeDate = that.getNowFormatDate()
		},1000)
		axios({
			method:'post',
			url:this.$store.state.http+'/website/findWebsite',
			data:Qs.stringify({dealer:sessionStorage.getItem('dealer')})
		}).then(function(message){
			that.logo=message.data.website.logo;
			that.name=message.data.website.name;
		})
  },
  methods:{
	slidehide(){
		this.timehide=!this.timehide;
		this.yes=!this.yes;
		this.no=!this.no;
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
							that.personal=false;
						})
				}else{
					this.$message.error('密码长度应在6-20位之间');
				}
			},
  	// changeData(){
  	// 	let that = this;
  	// 	let regEmail = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
  	// 	let regPhone=/^[1][3,4,5,7,8][0-9]{9}$/;
  	// 	if(this.data.userAlias == ''){
  	// 		this.$message.error('用户名不能为空');
  	// 	}else if(!regPhone.test(this.data.phoneNum)){
  	// 		this.$message.error('手机号码格式有误');
  	// 	}else if(!regEmail.test(this.data.email)){
  	// 		this.$message.error('邮箱格式不正确');
  	// 	}else{
  	// 		let data = {
	//   			userId:sessionStorage.getItem('userId'),
	//   			phoneNum:this.data.phoneNum,
	//   			email:this.data.email,
	//   			userAlias:this.data.userAlias
	//   		}
	//   		axios({
	// 				method:'post',
	// 				url:this.$store.state.http +'/user/resetPassword',
	// 				data:Qs.stringify(data)
	// 			}).then(function(message){
	// 				console.log(message.data)
	// 				if(message.data.resCode==0){
	// 					that.$message({
	// 		         message: '修改成功',
	// 		         type: 'success'
	// 		       });
	// 				}else{
	// 					that.$message.error(message.data.errMsg);
	// 				}
	// 			})
  	// 	}
  	// },
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
			sessionStorage.removeItem('userId');
			this.$router.push('/pageLogin');
		},
		toClick(val){
			console.log(val)
			if(val=='carMonitor'){
				this.$router.push({path:'/pageHome/carMonitor',query:{
					price:8
				}});
			}
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
				url:this.$store.state.http +'/user/selcBycompanyId',
				data:Qs.stringify({userId:sessionStorage.getItem('userId')})
			}).then(function(message){
				/*console.log(message.data.result)*/
				if(message.data.resCode==0){
					that.data = message.data.result;
					console.log(message.data.result);
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
	.oYtitle{text-align: left;padding-left: 0px;}
	/* .oytitleno{margin-left: -200px!important;} */
	.oYmenuItemGroup{width: 178px;}
	.oYmenuItemGroup>div{display: none;}
	.oYelMenuItem{display: flex;min-width: 170px!important;padding:0 10px!important;}
	.oYelMenuItem>div:nth-of-type(1){width: 36px;}
	.oyInp{width: 200px;}
	.Content{padding-bottom: 92px;}
	.sideFa{width: 180px;overflow-x: hidden;}
	.side{overflow-y: scroll;width: 200px;border: none;transition: margin-left .3s linear .3s;}
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
    background-color: #2C394B;
    color: #333;
    text-align: center;
    overflow: hidden;
  }
  .oyHeader{
  	background-color: #2C394B;
  	height: 70px!important;
	  text-align: right;
	   padding-left:0!important;
  }
  .oyHeader .el-button{
	  margin: 15px 0;
	 
  }
  .main{background-color: #FFFFFF;position: relative;}
  
  
  .oyCollapseItem .el-collapse-item__header{
  	font-size: 16px;
  	border-bottom: none;
  	margin-right: 20px;
  }
  .oyCollapseItem .el-collapse-item__header,.oyCollapseItem .el-collapse-item__wrap{
  	background-color: #2C394B;
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
	.footer{padding: 30px 0;position: fixed;bottom: 0;background-color: #FFFFFF;width: 100%;z-index:999;}
	.el-popover{background-color: #FFFFFF;color: #666;border-color:#CCCCCC ;min-width: auto;}
	.el-popper .popper__arrow{border-style:inset;}
	.checkboxMarginLeft{margin-left: 24px;}
	.checkboxMarginTop{margin-top: 15px;}
	.oyMenu{height: 36px!important;line-height: 36px!important;}
	.oySpanName{width: 100px;display: block;float: left;margin-left: 50px;}
	.echartTitle{text-align: center;background-color: #f4f3f4;height: 60px;line-height: 60px;border:1px solid #e5e5e5 ; border-radius:5px;color: #2d353c;font-size: 18px;}
	.siaze{float: left;font-size: 28px;color: #fff;padding: 17px 0;}
	.icommy{width: 180px;height: 70px;float: left;}
	.icommy img{padding:0 0!important;width: 100%;height: 100%;}
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
		transition: width .3s linear .3s;
		width: 180px!important;
	}
	.firstadd{
		transition: width .3s linear .3s;
		width:50px!important;
	}
	/* .ab{
		position: absolute;
		right: 20px!important;
	}
	.aby{
		position: absolute;
		right: 130px!important;
	} */
	.imgno{
		margin-left: 138px;
	}
	.cun{float: right;margin-right:53px!important;margin-bottom: 50px!important;}
	.el-container{
		overflow: hidden;
		height: calc(100% - 0px);
	}
</style>
