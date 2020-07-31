<template>
	<div id="serviceList">
		<div class="header">
			<div class="headerTitle">
				<span>临时登记</span>
			</div>
		</div>
		<div class="select">
			<span>来访姓名：</span>
			<el-input v-model="search.visName" clearable placeholder="请输入内容"></el-input>
			
			<span>手机号码：</span>
			<el-input v-model="search.visPhone" clearable placeholder="请输入内容"></el-input>
			
			<!-- <span>车牌号码：</span>
			<el-input v-model="search.ListNumber" clearable placeholder="请输入内容"></el-input> -->
		</div>
		<div class="select">
			<el-button type="success" class="oyButton" icon="el-icon-plus" @click='AddShow' v-show="showchose">添加</el-button>
			<el-button type="success" class="oyButton" icon="el-icon-search" @click='searchClick'>查询</el-button>
		</div>
		<div class="Content">
			<el-table class='oyTable' :data="tableData" style="width: 100%" >
				<el-table-column type="index" :index="indexMethod" label="序号" width="100"> </el-table-column>
				
				<el-table-column label="来访姓名">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.visName }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.visName }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>
				
				<el-table-column label="手机号码" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.visPhone }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.visPhone }}</div>
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="人脸图片" width="150" >
					<template slot-scope="scope">
				        <el-popover>
							<ul slot="reference" class="name-wrapper imgwidth">
								<li v-for="item in getimg(scope.row.imageList)">
									<img :src="item" alt="">
								</li>
								
							</ul>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column label="车牌号码" width="">
					<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ getnumber(scope.row.listNumber)}}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ getnumber(scope.row.listNumber)}}</div>
								<!-- <ul>
									<li v-for="item in scope.row.listNumber">{{item.brandName}}</li>
								</ul> -->
				        	</div>
				        </el-popover>
			      </template>
				</el-table-column>

				<el-table-column prop="" label="操作" width='150'>
					<template slot-scope="scope">
						<el-tooltip class="item" effect="dark" content="修改" placement="top">
    						<i class="icon-change el-icon-edit" @click="changeShow(scope.row)" ></i>
						</el-tooltip>
						
						<el-tooltip class="item" effect="dark" content="查看" placement="top">
    						<i class="icon-See el-icon-search" @click="changeGroupShow(scope.row)"></i>
						</el-tooltip>
						
						<el-tooltip  class="item" effect="dark" content="删除" placement="top">
    						<i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
						</el-tooltip>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<el-dialog title="添加" :visible.sync="universal.add" class="changediv">
			<div class="total">
				<el-row>
					<div class="changedivchild">
						<span class="spanClassT"><span class="aKey">*</span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span>
						<el-input :disabled="false" v-model="add.visName" clearable placeholder="请输入内容"></el-input><br /><br />

						<span class="spanClassT"><span class="aKey">*</span>手机号码：</span>
						<el-input :disabled="false" v-model="add.visPhone" clearable placeholder="请输入内容" maxlength="11"></el-input><br /><br />
						
						<span class="spanClassT">来访目的：</span>
						<el-input :disabled="false" v-model="add.visOrigin" clearable placeholder="请输入内容"></el-input><br /><br />

						<span class="spanClassT">来访人数：</span>
						<el-input :disabled="false" v-model="add.visNumber" clearable placeholder="请输入内容"></el-input><br /><br />
								
						<span class="spanClassT"><span class="aKey">*</span>来访公司：</span>
						<el-input :disabled="false" v-model="add.visUnitAdders" clearable placeholder="请输入内容"></el-input><br /><br />

						<span class="spanClassT"><span class="aKey">*</span>车牌号码：</span>
						<el-input :disabled="false" v-model="add.namenumber" clearable placeholder="请输入内容" maxlength="7"  class="namechapai"></el-input><img src="../../../static/image/index/add.png" alt="" class="imgadd" @click="ADDcarnumber"><br /><br />
						<ul slot="reference" class="chapai">
							<li v-for="(item,index) in carps">
								<div class="plate">
									<div>{{item}}</div>
									<p @click="DELETADD(item,index)">
										&nbsp;x
									</p>
								</div>
								
							</li>
						</ul>
					</div>	
					<div class="changedivchild">	
						<span class="spanClassT"><span class="aKey">*</span>开始时间：</span>
						<el-date-picker v-model="add.visStartDate" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />

						<span class="spanClassT"><span class="aKey">*</span>结束时间：</span>
						<el-date-picker v-model="add.visEndDate" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />

						<span class="spanClassT"><span class="aKey">*</span>人脸图片：</span>

						<div class="upload">
							<el-button>选择图片</el-button>
							<input @change='add_img'  type="file"> 
						</div><br /><br />
						<ul class="imgul">
							<li v-for="(item,index) in imgs">
								<img :src="item" alt="">
								<p @click="deleimg(item,index)">
									<img src="../../../static/image/rongle.png" alt="">
								</p>
							</li>
						</ul>
						
					</div>
					
				</el-row>
				<span class="spanClassT">备注：</span><div class="little">{{this.$store.state.size}}</div>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.add = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="addClick">提交</el-button>
			</div>
		</el-dialog>
		<el-dialog title="查看" :visible.sync="universal.look">
			<div class="letg">
				<el-row>
					<el-col :span="12"><div class="grid-content">来访姓名：</div>{{look.visName}}</el-col>
					<el-col :span="12"><div class="grid-content">开始时间：</div>{{look.visStartDate}}</el-col>
				</el-row>
				<el-row>
					<el-col :span="12"><div class="grid-content">手机号码：</div>{{look.visPhone}}</el-col>
					<el-col :span="12"><div class="grid-content">结束时间：</div>{{look.visEndDate}}</el-col>
				</el-row>
				<el-row>
					<el-col :span="12"><div class="grid-content">访问目的：</div><div>{{look.visOrigin}}</div></el-col>
					<el-col :span="12"><div class="grid-content">来访人数：</div>{{look.visNumber}}</el-col>
				</el-row>
				<el-row>
					<el-col :span="12"><div class="grid-content">访问公司：</div>{{look.visUnitAdders}}</el-col>
				</el-row>
			</div>
		</el-dialog>
		<el-dialog title="修改" :visible.sync="universal.change" class="changediv">
			<div class="total">
				<div class="changedivchild">
					<span class="spanClass">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span>
					<el-input :disabled="false" v-model="change.visName" clearable placeholder="请输入内容"></el-input><br /><br />
							
					<span class="spanClass">手机号码：</span>
					<el-input :disabled="false" v-model="change.visPhone" clearable placeholder="请输入内容" maxlength="11"></el-input><br /><br />
					
					<span class="spanClass">来访目的：</span>
					<el-input :disabled="false" v-model="change.visOrigin" clearable placeholder="请输入内容"></el-input><br /><br />
							
					<span class="spanClass">来访人数：</span>
					<el-input :disabled="false" v-model="change.visNumber" clearable placeholder="请输入内容"></el-input><br /><br />
							
					<span class="spanClass">访问公司：</span>
					<el-input :disabled="false" v-model="change.visUnitAdders" clearable placeholder="请输入内容"></el-input><br /><br />

					<span class="spanClass">车牌号码：</span>
					<el-input :disabled="false" v-model="ADDCAR" clearable placeholder="请输入车牌号"  class="namechapai"></el-input><img src="../../../static/image/index/add.png" alt="" class="imgadd" @click="ADD"><br /><br />
					<ul slot="reference" class="chapai" v-if="chepai">
						<li v-for="(item,index) in carp">
							<div class="plate">
								<div>{{item}}</div>
								<p @click="DELET(item,index)">
									&nbsp;x
								</p>
							</div>
							
						</li>
					</ul>
				</div>
				<div class="changedivchild">
				<span class="spanClass">开始时间：</span>
				<el-date-picker v-model="change.visStartDate" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />
				<span class="spanClass">结束时间：</span>
				<el-date-picker v-model="change.visEndDate" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker><br /><br />
				<span class="spanClass">人脸图片：</span>
				<div class="upload">
					<el-button>选择图片</el-button>
					<input @change='add_imgs'  type="file"> 
				</div><br /><br />
				 
				<ul class="imgul">
					<li v-for="(item,index) in cari">
						<img :src="item" alt="">
						<p @click="deleimgs(item,index)">
							<img src="../../../static/image/rongle.png" alt="">
						</p>
					</li>
				</ul>
			</div>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="hideclick">取消</el-button>
				<el-button type="success" class="oyButton" @click="changeClick">修改</el-button>
			</div>
		</el-dialog>
		
		<el-dialog title="权限" :visible.sync="universal.jurisdiction">
			<div>
				<el-checkbox-group class="checkboxMarginLeft" v-model="checkbox.checkedCities" @change="handleCheckedCitiesChange">
					<div v-for="activeA in this.$store.state.activeName">
						<el-checkbox  class="checkboxMarginTop"  @change="allClick(activeA.classA.menuId)" :label="activeA.classA.menuId" :key="activeA.classA.menuId">{{activeA.classA.menuName}}</el-checkbox><br />
						<el-checkbox class="checkboxMarginLeft" v-for="activeB in activeA.classB" :label="activeB.menuId" :key="activeB.menuId">{{activeB.menuName}}</el-checkbox><br /><br />
					</div>
				</el-checkbox-group>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" class="oyButton" @click="universal.jurisdiction = false">取消</el-button>
				<el-button type="success" class="oyButton" @click="updataClick">保存</el-button>
			</div>
		</el-dialog>
		
		<div class="footer">
			<el-pagination background @current-change="handleCurrentChange"  @size-change="handleSizeChange" :current-page.sync="paging.page":page-sizes="[10, 11, 12]" :page-size="paging.pageSize" layout="sizes, prev, pager, next, jumper,total" :total="paging.total"></el-pagination>
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
				carps:[],
				chepai:true,
				ADDCAR:'',
				checkbox:{
					checkedCities:[]
				},
				checked:true,
				universal:{
					add:false,
					change:false,
					jurisdiction:false,
					next:false,
					look:false
				},
				paging:{
					page:1,
					pageSize:10,
					total:0
				},
				empty:[[]],
				emptyTwo:'',
				tableData:[],
				search:{
					userName:'',
					userAlias:''
				},
				add:{
					visName:'',
					visNumber:'',
					visOrigin:'',
					visPhone:'',
					visEndDate:'',
					visUnitAdders:'',
					listNumber:'',
					visStartDate:'',
					namenumber:''
				},
				look:{
					visStartDate:'',
					visEndDate:'',
					visOrigin:'',
					visUnitAdders:'',
					visNumber:'',
					visName:'',
					visPhone:''
				},
				addDealers:{
					customerName:'',
					customerPhone:'',
					semail:'',
					area:'',
					address:''
				},
				bbbb:'',
				change:{
					visStartDate:'',
					visName:'',
					visNumber:'',
					visOrigin:'',
					visPhone:'',
					visEndDate:'',
					visUnitAdders:'',
					// imageList:'',
					listNumber:''
				},
			
				carp:[],
				cari:'',
				options:[],
				dataUniversal:this.$store.state.activeName,
				updataUserId:'',
				imgs:[],
				showchose:''
			}
		},
		mounted: function() {
			document.title=this.$route.meta.title;
			if(localStorage.getItem('dealer')!=0){
				this.showchose=true
			}else{
				this.showchose=false
			}
			this.searchClick();
			// this.downList();
			console.log(this.dataUniversal)
		},
		methods: {
			// 删除添加的车牌号
			DELETADD(item,index){
				let that = this;
				that.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					that.carps.splice(index,1)
				})
			},
			AddShow(){
				this.universal.add = true
				this.add.visName=''
				this.add.visNumber=''
				this.add.visOrigin=''
				this.add.visPhone=''
				this.add.visEndDate=''
				this.add.visUnitAdders=''
				this.add.visStartDate=''
				// this.add.namenumber=''
				this.carps=[];
				this.imgs=[]
			},
			add_img(event){  
				if(this.imgs.length>11){
					this.$message({
						message: '图片上限是',
						type: 'error'
					});
					return false;
				}  
	            let reader =new FileReader();  
	            let img1=event.target.files[0];  
	            let type=img1.type;
	            var uri = ''  
	            let form = new FormData();   
	            form.append('file',img1,img1.name);  
	            axios.post('http://39.104.113.112:2088/upload',form,{  
	                headers:{'Content-Type':'multipart/form-data'}  
	            }).then(response => {  
	                console.log(response.data)  
	                uri = response.data.image_url
	                reader.readAsDataURL(img1);  
	                var that=this;  
	                reader.onloadend=function(){  
	                    that.imgs.push(uri);  
	                }  
					console.log(that.imgs)
	            }).catch(error => {  
	                alert('上传图片出错！');  
	            })   
				let that=this;
                axios({
					method:'post',
					url:"http://39.104.113.112:7895/staff/upload",
					data:form
				}).then(function(message) {
					console.log(message);
					if(message.data.resCode==0){
						that.image_urls=message.data.image_url;
					}
				})   
			}, 
			add_imgs(event){  
				if(this.cari.length>11){
					this.$message({
						message: '图片上限是',
						type: 'error'
					});
					return false;
				}   
	            let reader =new FileReader();  
	            let img1=event.target.files[0];  
	            let type=img1.type;
	            var uri = ''  
	            let form = new FormData();   
	            form.append('file',img1,img1.name);  
	            axios.post('http://39.104.113.112:2088/upload',form,{  
	                headers:{'Content-Type':'multipart/form-data'}  
	            }).then(response => {  
	                console.log(response.data)  
	                uri = response.data.image_url
	                reader.readAsDataURL(img1);  
	                var that=this;  
	                reader.onloadend=function(){  
	                    that.cari.push(uri);  
	                }  
					console.log(that.cari)
	            }).catch(error => {  
	                alert('上传图片出错！');  
	            })   
				let that=this;
                axios({
					method:'post',
					// url:"http://39.104.113.112:129/staff/upload",
					url:'http://39.104.113.112:7895/staff/upload',
					data:form
				}).then(function(message) {
					if(message.data.resCode==0){
						that.image_urls=message.data.image_url;
					}
				})   
			},
			changeGroupShow(row){
				console.log(998)
				this.universal.look=true;
				let data={
					visId:row.visId
				}
				console.log(data)
				let that=this;
				axios({
					methods:'post',
					url:'http://39.104.113.112:2088/darkVisit/findByid?visId='+row.visId,
					data:Qs.stringify(data),
				}).then(function(res){
					if(res.data.code==0){
						that.look.visStartDate=res.data.dark.visStartDate
						that.look.visEndDate=res.data.dark.visEndDate
						that.look.visOrigin=res.data.dark.visOrigin
						that.look.visUnitAdders=res.data.dark.visUnitAdders
						that.look.visNumber=res.data.dark.visNumber
						that.look.visName=res.data.dark.visName
						that.look.visPhone=res.data.dark.visPhone
						if(that.look.visOrigin==''){
							that.look.visOrigin='无'
						}
						if(that.look.visNumber==''){
							that.look.visNumber='无'
						}
					}
				})
			},
			getimg(numbers){
				console.log(numbers);
				let result=[]
				for(let i=0;i<numbers.length;i++){
					result.push(numbers[i].imageUrl);
				}
				console.log(result.join(","));
				return result;
			},	
			getnumber(number){
			  console.log(number);
			  let getnumber=[]
			  for(let i=0;i<number.length;i++){
				getnumber.push(number[i].brandName);
			  }
			  console.log(getnumber.join(","));
			   return getnumber.join(",");
			},
			hideclick(){
				this.universal.change = false;
			},
			indexMethod(index) {
        		return index + (this.paging.page-1)*this.paging.pageSize+1;
    		},
			updataClick(){
				console.log(this.checkbox.checkedCities.join(','))
				let that = this;
				axios({
					method:'post',
					url:this.$store.state.http +'/user/update',
					data:Qs.stringify({
						permissions:this.checkbox.checkedCities.join(','),
						userId:this.updataUserId
					})
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						that.$message({
				        	message: '保存成功',
				        	type: 'success'
				        });
					}else{
						that.$message({
				        	message: '保存失败',
				        	type: 'error'
				        });
					}
				})
				this.universal.jurisdiction = false;
			},
		    handleCheckedCitiesChange(value) {
		    	/*console.log(value)*/
		    	/*console.log(this.$store.state.sideList)*/
		    	let that = this;
		    	let arr = value;
		    	let list = this.$store.state.sideList;
		    	let obj = this.$store.state.activeName;
		    	for (var i = 0; i < arr.length; i++) {/*选中二级菜单时同时选择对应的一级菜单*/
		    		for (var j = 0; j < list.length; j++) {
		    			if(arr[i]==list[j].menuId){
		    				if(list[j].menuAssociated!="0"){
		    					that.checkbox.checkedCities.push(list[j].menuAssociated)
		    				}
		    			}
		    		}
		    	}
		    	for(let i=0;i<obj.length;i++){/*取消所有二级菜单时同时取消对应的一级菜单*/
		    		let cs = obj[i].classA.menuId;
		    		for (let j=0;j<arr.length;j++) {
		    			for (let k = 0; k < obj[i].classB.length; k++) {
		    				if(obj[i].classB[k].menuId==arr[j]){
		    					cs = '';
		    				}
		    			}
		    		}
		    		let index = that.checkbox.checkedCities.indexOf(cs);
		    		if (index > -1) {
					    that.checkbox.checkedCities.splice(index, 1);
					}
		    	}
		    	that.checkbox.checkedCities = Array.from(new Set(that.checkbox.checkedCities));
		    	console.log(that.checkbox.checkedCities)
		    },
			handleSizeChange(val){
				this.paging.pageSize = val;
				this.searchClick();
			},
			handleCurrentChange(val){
				this.searchClick();
			},
			acTiveArrStringFun(obj){
                var arr = [];
                if (obj != null && obj.length != 0) {
                    for (var i = 0; i < obj.length; i++) {
                        arr.push(obj[i]);
                    }
                }
                return arr.toString();
			},
			DELET(item,index){
				console.log(index)
				let that = this;
				this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					that.carp.splice(index,1)
					let data={
						brandName:item
					}
					axios.post('http://39.104.113.112:2088/darkVisit/delbyId',Qs.stringify(data),{
						headers:{'Content-Type': 'application/x-www-form-urlencoded'}
		            }).then(response => {
						console.log(response)  
						if(response.data.code==0){
							that.$message({
								message: '删除成功',
								type: 'success'
							});
						}
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			deleimg(item,index){
				console.log(index)
				let that = this;
				this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					that.imgs.splice(index,1)
					let data={
						imageUrl:item
					}
					axios.post('http://39.104.113.112:2088/darkVisit/delbyId',Qs.stringify(data),{
						headers:{'Content-Type': 'application/x-www-form-urlencoded'}
		            }).then(response => {
						console.log(response)  
						if(response.data.code==0){
							that.$message({
								message: '删除成功',
								type: 'success'
							});
						}
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			deleimgs(item,index){
				console.log(index)
				let that = this;
				this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					that.cari.splice(index,1)
					let data={
						imageUrl:item
					}
					axios.post('http://39.104.113.112:2088/darkVisit/delbyId',Qs.stringify(data),{
						headers:{'Content-Type': 'application/x-www-form-urlencoded'}
		            }).then(response => {
						console.log(response)  
						if(response.data.code==0){
							that.$message({
								message: '删除成功',
								type: 'success'
							});
						}
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			addClick(){
				console.log(this.add)
				if(this.add.visName== ''||this.add.visPhone== ''||this.add.visEndDate== ''||this.add.visName== ''||this.add.visUnitAdders== ''||this.carps== []||this.add.visStartDate==''||this.imgs.length==0){
					this.$message.error('带*数据不能为空哦！');
					return false;
				}
				console.log(this.carps)
				if(this.carps.length==0){
					this.$message.error('带*数据不能为空哦！');
					return false;
				}
				let regPhone=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
				if(!regPhone.test(this.add.visPhone)){
					this.$message.error('手机号码格式有误');
					return false;
				}
				// let data = this.add;
				let data={
					visName:this.add.visName,
					visNumber:this.add.visNumber,
					visOrigin:this.add.visOrigin,
					visPhone:this.add.visPhone,
					visEndDate:this.add.visEndDate,
					visUnitAdders:this.add.visUnitAdders,
					dealer:localStorage.getItem('dealer'),
					listNumber:this.acTiveArrStringFun(this.carps),
					visStartDate:this.add.visStartDate,
					Listimage:this.acTiveArrStringFun(this.imgs),
				}
				let that = this;
				console.log(data)
				for(let h=0;h<that.imgs.length;h++){
					console.log(that.imgs[h]);
					let uuid=that.uuid()
					console.log(that.visName)
					axios({
							method: 'post',
							url: 'http://39.104.113.112:7895/staff/create',
							data: Qs.stringify({
								staffBirthday:'1980-01-01',
								staffKey:uuid,
								staffName:that.add.visName,
								staffPhone:that.add.visPhone,
								staffPortrait:that.imgs[h],
								staffSex:'男',
								teamKey:'414',
								staffTeam:'suriot',
								visitor:true,
								// 公司ID
								storeId:8,   
								// 闸机ID
								deviceId:''
							})
						}).then(function(message) {
							console.log(message)
							if(message.data.resCode == 0) {
								axios({
								method:'post',
								url:'http://39.104.113.112:2088/darkVisit/add',
								data:Qs.stringify(data)
							}).then(function(message){
								console.log(message.data)
								if(message.data.code==0){
									that.searchClick();
									that.$message({
										message: '添加成功',
										type: 'success'
									});
								}else{
									that.$message({
										message: '添加失败',
										type: 'error'
									});
								}
							})
						}else{
							that.$message({
								message: '添加失败',
								type: 'error'
							});
						}
					})
				}
				that.universal.add = false;
				that.add.visName=''
				that.add.visNumber=''
				that.add.visOrigin=''
				that.add.visPhone=''
				that.add.visEndDate=''
				that.add.visUnitAdders=''
				that.add.listNumber=''
				that.add.visStartDate=''
				that.imgs=[]
			},
			uuid(){
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
			deleteClick(row){
				console.log(row)
				let that = this;
				this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					axios({
						method:'post',
						// url:'http://39.104.99.181:2080/darkVisit/del',
						url:'http://39.104.113.112:2088/darkVisit/del',
						data:Qs.stringify({
							visId:row.visId
						})
					}).then(function(message){
						console.log(message.data)
						if(message.data.code==0){
							that.searchClick();
							that.$message({
					        	message: '删除成功',
					        	type: 'success'
					        });
						}else{
							that.$message({
					        	message: '删除失败',
					        	type: 'error'
					        });
						}
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			ADDcarnumber(){
				if(this.add.namenumber==''||this.add.namenumber.length<6){
					this.$message({
						message: '请输入正确的车牌号码',
						type: 'error'
					});
					return false;
				}
				if(this.carps.length>5){
					this.$message({
						message: '车牌上限为6个',
						type: 'error'
					});
					return false;
				}else{
					this.carps.push(this.add.namenumber)
					this.add.namenumber=''
				}
			},
			ADD(){
				if(this.ADDCAR==''||this.ADDCAR.length<6||this.ADDCAR.length>9){
					this.$message({
						message: '请输入正确的车牌号码',
						type: 'error'
					});
					return false;
				}
				if(this.carp.length>5){
					this.$message({
						message: '车牌上限为6个',
						type: 'error'
					});
					return false;
				}else{
					this.carp.push(this.ADDCAR)
					this.ADDCAR=''
				}
				
			},
			changeShow(row){
				this.universal.change = true;
				this.change = Object.assign({},row);
				console.log(row.listNumber.length)
				if(row.listNumber.length==0){
					this.chepai=false
				}
				this.carp=this.getnumber(this.change.listNumber).split(',')
				this.cari=this.getimg(this.change.imageList)
				this.num=row.visId
			},
			changeClick(){
				let data = {
					visStartDate:this.change.visStartDate,
					visName:this.change.visName,
					visNumber:this.change.visNumber,
					visOrigin:this.change.visOrigin,
					visPhone:this.change.visPhone,
					visEndDate:this.change.visEndDate,
					visUnitAdders:this.change.visUnitAdders,
					Listimage:(this.cari).toString(), 
					listNumber:(this.carp).toString(),
					visId:this.num
				}
				console.log(data)
				let that = this;
				axios({
					method:'post',
					url:'http://39.104.113.112:2088/darkVisit/updateReq',
					// url:'http://192.168.2.110:8080/SURBrake/darkVisit/updateReq',
					data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.code==0){
						that.searchClick();
						that.$message({
				        	message: '修改成功',
				        	type: 'success'
				        });
					}else{
						that.searchClick();
						that.$message({
				        	message: '修改失败',
				        	type: 'error'
				        });
					}
				})
				that.universal.change = false;
			},
			jurisdictionShow(row){
				let that = this;
				this.updataUserId = row.userId;
				axios({
					method:'post',
					url:this.$store.state.http +'/user/selecByUserId',
					data:Qs.stringify({
						userId:row.userId
					})
				}).then(function(message){
					console.log(message.data)
					if(message.data.resCode==0){
						if(message.data.result=='暂时无权限分配'){
							that.checkbox.checkedCities = [];
						}else{
                            that.checkbox.checkedCities = message.data.result.split(',');
						}
					}else{
						that.checkbox.checkedCities = [];
					}
				})
				console.log(row)
				this.universal.jurisdiction = true;
			},
		    allClick(id){
		    	console.log(this.$store.state.activeName)
		    	console.log(id);
		    	let that = this;
		    	let cs = that.checkbox.checkedCities.indexOf(id);
		    	console.log(cs)
		    	let pa;
		    	for (let i = 0; i < that.$store.state.activeName.length; i++) {
		    		if(that.$store.state.activeName[i].classA.menuId == id){
		    			pa = that.$store.state.activeName[i];
		    		}
		    	}
		    	console.log(pa);
		    	if (cs > -1) {
		    		for (let i = 0; i < pa.classB.length; i++) {
			    		that.checkbox.checkedCities.push(pa.classB[i].menuId);
			    		console.log(pa.classB[i].menuId)
			    	}
		    	}else{
		    		for (let i = 0; i < pa.classB.length; i++) {
			    		let index = that.checkbox.checkedCities.indexOf(pa.classB[i].menuId);
			    		if (index > -1) {
						    that.checkbox.checkedCities.splice(index, 1);
						}
			    	}
		    	}
		    	/*console.log(that.checkbox.checkedCities)*/
			},

			searchClick(){
				// let data = {
				// 	page:this.paging.page,
				// 	pageSize:this.paging.pageSize,
				// 	userId:localStorage.getItem('userId')
				// };
				// let data = {};
				// if(localStorage.getItem('userId')=='SURIOT'){
				// 	data = {
				// 	page:this.paging.page,
				// 	pageSize:this.paging.pageSize,
				//    };
				// }else{
				// 	data = {
				// 	page:this.paging.page,
				// 	pageSize:this.paging.pageSize,
				// 	userId:localStorage.getItem('userId'),
				//    };
				// }

				let data = {};
				// if(localStorage.getItem('userId')=='SURIOT'){
				// 	if(this.search.visName==true&&this.search.visPhone==true){
				// 		this.bbbb=this.$store.state.url +'/darkVisit/find?visPhone='+this.search.visPhone+'&visName='+this.search.visName+'&page='+this.paging.page+'&pageSize='+this.paging.pageSize
				// 	}else{
				// 		this.bbbb=this.$store.state.url +'/darkVisit/find?page='+this.paging.page+'&pageSize='+this.paging.pageSize
				// 	}
				// 	if(this.search.visPhone){
				// 		console.log(this.search.visPhone)
				// 		this.bbbb=this.$store.state.url +'/darkVisit/find?visPhone='+this.search.visPhone+'&page='+this.paging.page+'&pageSize='+this.paging.pageSize
				// 	}else{
				// 		// this.bbbb=this.$store.state.url +'/darkVisit/find?page='+this.paging.page+'&pageSize='+this.paging.pageSize
				// 	}
				// 	if(this.search.visName){
				// 		console.log(this.search.visName)
				// 		this.bbbb=this.$store.state.url +'/darkVisit/find?visName='+this.search.visName+'&page='+this.paging.page+'&pageSize='+this.paging.pageSize
				// 	}else{
				// 		// this.bbbb=this.$store.state.url +'/darkVisit/find?page='+this.paging.page+'&pageSize='+this.paging.pageSize
				// 	}

				// }else{
				if(this.search.visName==true&&this.search.visPhone==true){
					this.bbbb=this.$store.state.url +'/darkVisit/find?visPhone='+this.search.visPhone+'&visName='+this.search.visName+'&page='+this.paging.page+'&pageSize='+this.paging.pageSize+'&userId='+localStorage.getItem('userId')+'&dealer='+localStorage.getItem('dealer')
				}else{
					this.bbbb=this.$store.state.url +'/darkVisit/find?page='+this.paging.page+'&pageSize='+this.paging.pageSize+'&userId='+localStorage.getItem('userId')+'&dealer='+localStorage.getItem('dealer')
				}
				if(this.search.visPhone){
					this.bbbb=this.$store.state.url +'/darkVisit/find?visPhone='+this.search.visPhone+'&page='+this.paging.page+'&pageSize='+this.paging.pageSize+'&userId='+localStorage.getItem('userId')+'&dealer='+localStorage.getItem('dealer')
				}else{
					// this.bbbb=this.$store.state.url +'/darkVisit/find?page='+this.paging.page+'&pageSize='+this.paging.pageSize+'&userId='+localStorage.getItem('userId')
				}
				if(this.search.visName){
					console.log(this.search.visName)
					this.bbbb=this.$store.state.url +'/darkVisit/find?visName='+this.search.visName+'&page='+this.paging.page+'&pageSize='+this.paging.pageSize+'&userId='+localStorage.getItem('userId')+'&dealer='+localStorage.getItem('dealer')
				}else{
					// this.bbbb=this.$store.state.url +'/darkVisit/find?page='+this.paging.page+'&pageSize='+this.paging.pageSize+'&userId='+localStorage.getItem('userId')
				}
				// }
				console.log(data)
				let that = this;
				that.tableData = [];
				axios({
					method:'get',
					url:that.bbbb
					// data:Qs.stringify(data)
				}).then(function(message){
					console.log(message.data)
					if(message.data.code==0){
						that.paging.total = message.data.count;						
						that.tableData = message.data.result.reverse();
						// for(let i=0;i<message.data.result.length;i++){
						// 	for(let j=0;j<message.data.result[i].listNumber.length;j++){
						// 		console.log(message.data.result[i].listNumber[j].brandName);
						// 		that.empty[i].push(message.data.result[i].listNumber[j].brandName);
						// 		that.emptyTwo=that.empty.join("");
						//      }
					    // }
					}else{
						that.tableData = [];
					}
					console.log(that.empty)
					// for(let i=0;i<that.tableData.length;i++){
					// 	for(let j=0;j<that.tableData[i].imageList.length;j++){
					// 		that.tableData[i].imageList[j]=(that.tableData[i].imageList[j].imageUrl) 
					// 	}
					// }
				})
			},
			// downList(){
			// 	let that = this;
			// 	axios({
			// 		method:'post',
			// 		url:this.$store.state.http +'/role/findAll'
			// 	}).then(function(message){
			// 		console.log(message.data)
			// 		if(message.data.resCode==0){
			// 			/*console.log(message.data.result)*/
			// 			that.options = message.data.result;
			// 			that.options.shift();
			// 		}
			// 	})
			// }
		}
	}
</script>

<style scoped="scoped">
	.el-input,.el-select{
		width: 200px;
	}
	#serviceList{padding: 20px;}
	
	/*.textareaWidth{width: 200px;}*/
	.cell span{
		display: inline-block;
		text-align: center;
	}
	.name-wrapper img{
		height: 80px;
	}
	.name-wrapper li{float: left;}

	.changedivchild{
		width: 50%;
		float: left;
	}
	.changediv .total{
		height: 400px;
	}
	.spanClass{
		width: 130px!important;
	}
	.chepai{
		display: inline-block;
		height: 35px;
		padding-top:10px;
		padding-left: 85px;
	}
	.upload{
		width: 40%;
		display: inline-block;
		margin-top:5px;
		position: relative;
	}
	.upload input{
		position: absolute;
		top:0;
		left: 0;
		bottom: 0;
		right: 0;
		opacity: 0;
	}
	.imgul{
		width: 100%;
	}
	.imgul li{
		width:42px;
		height:60px;
		float: left;
		position: relative;
		margin-right: 10px;
		margin-top:5px;
	}
	.imgul li img{
		width: 100%;
		height: 100%;
	}
	.imgul li p{
		position: absolute;
		top:0;
		right: 0;
	}
	.imgul,.chapai {
		margin-left: 60px;
		width: 100%;
	}

.chapai li{
	width:90px;
	height: 32px;
	float: left;
	color: #fff;
	background: #a2cc6d;
	border-radius: 5px;
	overflow: hidden;
	margin-right: 10px;
	margin-top:5px;
}
.chapai .plate{
	height: 30px;
	width: 80px;
	position: relative;
}
.chapai .plate div{
	margin-top:9px;
	text-align: center;
}
.chapai li  p{
	width: 14px;
	height: 14px;
	position: absolute;
	top:-14px;
	right: -14px;
	border-radius: 7px;
	border: 1px solid #999;
	background: #999;
}
.addchap{
	float: right;
	margin-top:13px;
}
.namechapai{
	width:170px!important;
}
.imgadd{
	vertical-align: middle;
	margin-left: 3px;
}
.alipay{
		width: 50%;
		float: left;
}
.alipays{
	display:inline-block;
}
.letg div{font-size: 15px;line-height: 40px;}
.grid-content{width: 30%;float: left;text-align: right;margin-right: 10px;}
</style>