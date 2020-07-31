<template>
    <div id="faultList">
        <div class="select">
            <el-tabs v-model="activeName">
				<el-tab-pane label="费用营业收入" name="search">
                    <div class="select">
                        <span> 开始时间 </span>
                        <el-date-picker
                            v-model="search.startdate"
                            type="date"
                            placeholder="选择日期"
                            value-format="yyyy-MM-dd"
                            >
                        </el-date-picker>
                        <span> 结束时间 </span>
                        <el-date-picker
                            v-model="search.payTime"
                            type="date"
                            placeholder="选择日期"
                            value-format="yyyy-MM-dd"
                            >
                        </el-date-picker>
                    </div>
                    <div class="select">
                        <el-button type="success" class="oyButton" icon="el-icon-search" @click='searchClick'>查询</el-button>
                    </div>
                </el-tab-pane>
				<el-tab-pane label="生成月账单" name="create">
                    <div class="select">
                        <span> 结束时间 </span>
                        <el-date-picker
                            v-model="create.pay_time"
                            type="date"
                            placeholder="选择日期"
                            value-format="yyyy-MM-dd"
                        >
                        </el-date-picker>
                    </div>
                    <div class="select">
                        <el-button type="success" class="oyButton" icon="el-icon-search" @click='createClick'>生成</el-button>
                    </div>
                </el-tab-pane>
			</el-tabs>
        </div>
        <el-tabs v-model="monthlyTab" @tab-click="handleClick">
				<el-tab-pane label="当前停车场月账单" name="current">
                    
                </el-tab-pane>
				<el-tab-pane label="月账单回收站" name="trash">
                    
                </el-tab-pane>
			</el-tabs>
        <el-table class="oyTable" :data="tableData">
            <el-table-column label="序号" :index="indexMethod"  type="index"></el-table-column>
            <el-table-column label="停车场号">
                <template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.parkingId }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.parkingId }}</div>
				        	</div>
				        </el-popover>
			      </template>
            </el-table-column>
            <el-table-column label="停车场名称">
                <template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.parkingName }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.parkingName }}</div>
				        	</div>
				        </el-popover>
			      </template>
            </el-table-column>
            <el-table-column label="收入">
                <template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.inCome }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.inCome }}</div>
				        	</div>
				        </el-popover>
			      </template>
            </el-table-column>
            <el-table-column label="收入笔数">
                <template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.inComeCNT }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.inComeCNT }}</div>
				        	</div>
				        </el-popover>
			      </template>
            </el-table-column>
            <el-table-column label="退款">
                <template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.refund }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.refund }}</div>
				        	</div>
				        </el-popover>
			      </template>
            </el-table-column>
            <el-table-column label="退款笔数">
                <template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.refundCNT }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.refundCNT }}</div>
				        	</div>
				        </el-popover>
			      </template>
            </el-table-column>
            <el-table-column label="日期">
                <template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				        	<p  class="TsMaxWidth">{{ scope.row.YM }}</p>
				        	<div slot="reference" class="name-wrapper">
				        		<div class="overflowHide">{{ scope.row.YM }}</div>
				        	</div>
				        </el-popover>
			      </template>
            </el-table-column>
            <el-table-column prop="" label="操作">
                <template slot-scope="scope">
                    <el-tooltip  class="item" effect="dark" content="删除" placement="top">
                        <i class="icon-delete el-icon-delete" @click="deleteClick(scope.row)"></i>
                    </el-tooltip>
                </template>
            </el-table-column>
        </el-table>
        <div class="footer">
			<el-pagination background @current-change="handleCurrentChange"  @size-change="handleSizeChange" :current-page.sync="paging.page" :page-sizes="[1,2,3,10,11,12]" :page-size="paging.pageSize" layout="sizes, prev, pager, next, jumper,total" :total="paging.total"></el-pagination>
		</div>
    </div>
</template>
<script>
import { Table } from "element-ui";
import axios from 'axios'
import Qs from 'qs'
export default {
    name:'',
    data(){
        return {
            tableData:[],
            activeName: 'search',
            monthlyTab:'current',
            parkingId: this.$route.query.parking_id,
            parkingName: this.$route.query.parking_name,
            paging:{
				page:1,
				pageSize:10,
				total:0
            },
            create :{
                parking_id : null,
                parking_lot_name : null,
                pay_time : '0000-00'
            },
            search : {
                startdate:'0000-00',
                payTime:'0000-00',
            }
        }
    },
    mounted: function(){
        let THIS = this
        let params = {
            parkingId : this.parkingId,
            parkingName : this.parkingName,
            userId : localStorage.getItem('userId'),
            page : this.paging.page,
            pageSize : this.paging.pageSize,
            is_del : 0,
            YM : '2019-02',
            dealer:localStorage.getItem('dealer')
        }
        axios({
            method: 'post',
            url:`${this.$store.state.url}/bills/queryBills`,
            data: Qs.stringify(params)
        }).then(function(msg){
            let data = msg.data
            if(data.resCode === "0"){
                THIS.tableData = data.result
                THIS.paging.total = data.count
            }
        })
        console.log(this.tableData)
    },
    methods:{
        searchClick(){
            let page = this
            let params = {
                parkingId : this.parkingId,
                userId : localStorage.getItem('userId'),
                dealer:localStorage.getItem('dealer'),
                startdate: this.search.startdate,
                pay_time: this.search.payTime
            }
            axios({
                method: 'post',
                url:`${this.$store.state.url}/Order/income`,
                data: Qs.stringify(params)
            }).then(function(msg){
                let data = msg.data
                if(data.resCode === "0"){
                    page.$message({message:`收入笔数 ${data.inComeCount?data.inComeCount:0} 收入金额 ${data.inComeSum?data.inComeSum:0}`,type:'success'})  
                }
                if(data.resCode === "1"){
                    page.$message({message:data.result,type:'error'})
                }
            }).catch(err => {
                page.$message({message:err,type:'error'})
            })
        },
        handleClick(tab, event) {
            if(tab.name === 'trash'){
                this.table(1)
            }
            if(tab.name === 'current'){
                this.table(0)
            }
        },
        handleCurrentChange(val){

        },
        handleSizeChange(val){
			this.paging.pageSize = val;
        },
        deleteClick(row){
            let page = this
            if(this.monthlyTab === 'current'){
                let params = {
                    is_del : 1,
                    id: row.id
                }
                this.$confirm('是否放入回收站?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(()=>{
                        axios({
                            method: 'post',
                            url:`${this.$store.state.url}/bills/putOnRecycleBin`,
                            data: Qs.stringify(params)
                        }).then(function(msg){
                            let data = msg.data
                            if(data.resCode === "0"){
                                page.$message({message:'成功放入回收站',type:'success'})
                                page.table(0)
                            }else{
                                page.$message({message:data.result,type:'error'})
                            }
                        }).catch(err => {
                            page.$message({message:err,type:'error'})
                        })
                    })
            }else{
                this.deleteFoever(row.id)
            }
            
        },
        createClick(){
            let page = this
            let YM = this.create.pay_time.substring(0,this.create.pay_time.length-3);
            let params = {
                parking_id : this.parkingId,
                parking_lot_name :this.parkingName,
                pay_time : YM
            }
            axios({
                method: 'post',
                url:`${this.$store.state.url}/bills/bornBill`,
                data: Qs.stringify(params)
            }).then(function(msg){
                let data = msg.data
                if(data.resCode === "0"){
                    page.$message({message:'生成账单成功',type:'success'})
                    page.table(0)
                }else{
                    page.$message({message:data.result,type:'error'})
                }
            }).catch(err => {
                page.$message({message:err,type:'error'})
            })
        },
        indexMethod(index) {
        	return index + (this.paging.page-1)*this.paging.pageSize+1;
        },
        table(is_del, YM){
            let THIS = this
            let params = {
                parkingId : this.parkingId,
                parkingName : this.parkingName,
                userId : localStorage.getItem('userId'),
                page : this.paging.page,
                pageSize : this.paging.pageSize,
                is_del : is_del,
                // YM : '2019-02',
                dealer:localStorage.getItem('dealer')
            }
            axios({
                method: 'post',
                url:`${this.$store.state.url}/bills/queryBills`,
                data: Qs.stringify(params)
            }).then(function(msg){
                let data = msg.data
                if(data.resCode === "0"){
                    THIS.tableData = data.result
                    THIS.paging.total = data.count
                }
            })
            console.log(this.tableData)
        },
        deleteFoever(id){
            let page = this
            let params = {
                id:id
            }
            this.$confirm('是否永久删除账单?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(()=>{
					axios({
                        method: 'post',
                        url:`${this.$store.state.url}/bills/delBill`,
                        data: Qs.stringify(params)
                    }).then(function(msg){
                        let data = msg.data
                        if(data.resCode === "0"){
                            page.$message({message:data.result,type:'success'})
                            page.table(1)
                        }else{
                            page.$message({message:data.result,type:'error'})
                        }
                    }).catch(err => {
                        page.$message({message:err,type:'error'})
                    })
				})
        }
    }
}
</script>
<style scoped="scoped">
	.el-input,.el-select{
		width: 200px;
	}
	#faultList{padding: 20px;}
	/*.textareaWidth{width: 200px;}*/
	.spanClass{
		width: 106px!important;
	}
	.alipay:nth-child(1){
		width: 49%;
		float: left;
	}
	.alipay:nth-child(2){
		width: 51%;
		float: right;
	}
	.alipays{
		width: 100%;
		display:inline-block;
	}
	.letg div{font-size: 15px;line-height: 40px;}
	.grid-content{width: 30%;float: left;text-align: right;margin-right: 10px;}
	.el-input--small .el-input__inner{
		width: 120px!important;
	}
	.el-tag{
		color:#fff;
		width: 50px;
		height: 26px;
		line-height: 26px!important;
		padding:0 0!important;
	}
	.el-tag span{
		margin:0 auto;
		
	}
	.select .boxselect{
		float: right;
	}
	.select .boxselect img{
		vertical-align: middle;
		margin-right:5px;
	}
	 .jilu{
		width: 22px;
		height: 22px;
		display: inline-block;
		background: #59CB18;
		border-radius: 3px;
		color: #fff;
	}
	.jilus{
		background: #777;
	}
</style>