<template>
    <div class="zfbInfo">
        <el-form :inline="true" :model="data">
            <el-row>
                <el-form-item label="停车场编号">
                    <el-input
                        v-model="data.parking_id"
                        :disabled="true">
                    </el-input>
                </el-form-item>
            </el-row>        
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="停车场信息" name="1">
                    <el-form-item label="停车场名称" prop="parking_name">
                        <el-input v-model="formData.parking_name"></el-input>
                    </el-form-item>
                    <el-form-item label="停车场地址" prop="parking_address">
                        <el-input v-model="formData.parking_address"></el-input>
                    </el-form-item>
                    <el-form-item label="停车场类型：">
                        <el-select v-model="formData.parking_lot_type" placeholder="请选择">
                            <el-option value="">未选择</el-option>
                            <el-option v-for="type in gstylelast" :key="type.id" :label="type.type" :value="type.type"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="车位总数：" prop="carportcount">
                        <el-input v-model="formData.carportcount"></el-input>
                    </el-form-item>
                </el-collapse-item>
                <el-collapse-item title="费用信息" name="2">
                    <el-form-item label="停车单价">
                        <el-input v-model="formData.price"></el-input>&nbsp;&nbsp;元/小时
                    </el-form-item>
                    <el-form-item label="最高收费">
                        <el-input v-model="formData.high_price"></el-input>&nbsp;&nbsp;元
                    </el-form-item>
                    <el-form-item label="免费时长">
                        <el-input v-model="formData.free_time"></el-input>&nbsp;&nbsp;分钟
                    </el-form-item>
                </el-collapse-item>
                <el-collapse-item title="优惠方案" name="3">
                    <el-form-item label="添加优惠方案">
                        <el-select v-model="formData.salePlan.plans_name" placeholder="请选择">
                            <el-option value="">未绑定优惠方案</el-option>
                            <el-option v-for="type in mySalePlans" :key="type.plans_id" :label="type.plans_name" :value="type.plans_id"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-row v-if='formData.isBindSalePlants' type="flex" class="row-bg">
                        <el-col :span="6"><span>满优惠金额：</span>{{formData.salePlan.full}}元</el-col>
                        <el-col :span="6"><span>减优惠金额：</span>{{formData.salePlan.subtract}}</el-col>
                        <el-col :span="6"><span>打折优惠金额：</span>{{formData.salePlan.percent}}</el-col>
                    </el-row>
                    <el-row v-if='formData.isBindSalePlants' type="flex" class="row-bg">
                        <el-col :span="6"><span>优惠开始时间：</span>{{formData.salePlan.start_time}}</el-col>
                        <el-col :span="6"><span>优惠结束时间：</span>{{formData.salePlan.end_time}}</el-col>
                        <el-col :span="6"><span>优惠说明：</span>{{formData.salePlan.remark}}</el-col>
                    </el-row>
                    <span v-else>未绑定优惠方案</span>
                </el-collapse-item>
                <el-collapse-item title="状态信息" name="4">
                    <el-form-item label="超时时间">
                        <el-input v-model="formData.time_out"></el-input>&nbsp;&nbsp;分钟
                    </el-form-item>
                    <el-form-item label="最高时长：">
                        <el-input v-model="formData.high_time"></el-input>&nbsp;&nbsp;分钟
                    </el-form-item>
                </el-collapse-item>
                <el-collapse-item title="道闸信息" name="5">
                    <el-row>
                        <el-col :span="4">
                            <img src="../../static/image/jinru.png" alt="">
                            <p style="margin-left:10px">入场道闸</p>
					    </el-col>
                        <el-col :span="20">
                            <el-table>
                                <el-table-column label="序号">
                                    <el-popover 
                                        trigger="hover"
                                        content="这是一段内容"
                                    >

                                    </el-popover>
                                </el-table-column>
                                <el-table-column label="道闸名称">

                                </el-table-column>
                                <el-table-column label="道闸编号">

                                </el-table-column>
                                <el-table-column label="安装时间">

                                </el-table-column>
                                <el-table-column label="操作">

                                </el-table-column>
                            </el-table>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4">
                            <img src="../../static/image/likai.png" alt="">
                            <p style="margin-left:10px">出场道闸</p>
					    </el-col>
                        <el-col :span="20">
                            <el-table :data='formData.outBrake'>
                                <el-table-column label="序号">
                                    <el-popover 
                                        trigger="hover"
                                        content="这是一段内容"
                                    >

                                    </el-popover>
                                </el-table-column>
                                <el-table-column label="道闸名称">
                                    
                                </el-table-column>
                                <el-table-column label="道闸编号">

                                </el-table-column>
                                <el-table-column label="安装时间">

                                </el-table-column>
                                <el-table-column label="操作">

                                </el-table-column>
                            </el-table>
                        </el-col>
                    </el-row>
                </el-collapse-item>
                <el-collapse-item title="其他信息" name="6">
                    <el-form-item label="客服电话：">
                        <el-input v-model="formData.parking_mobile"></el-input>&nbsp;&nbsp;
                    </el-form-item>
                    <el-form-item label="收款方编号：">
                        <el-input v-model="formData.mchnt_id"></el-input>&nbsp;&nbsp;
                    </el-form-item>
                    <el-form-item label="地图标识：">
                        <el-input v-model="formData.parking_poiid"></el-input>&nbsp;&nbsp;
                    </el-form-item>
                </el-collapse-item>
                <el-collapse-item title="月账单" name="7">
                    
                </el-collapse-item>
            </el-collapse>
            <el-row type="flex">
                <el-col><el-button type="danger" round>删除停车场</el-button></el-col>
            </el-row>
        </el-form>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import { salePlans,bindDevice } from './api/api.js'
export default {
    name: "停车场详情",
    data() {
        return {
            data: {},
            formData: {
                parking_lot_type : '',
                parking_name:'',
                parking_address:'',
                isBindSalePlants:false,
                salePlan:{},
                price:0,
                high_price:0,
                free_time:'',
                time_out:'',
                high_time:'',
                parking_mobile:'',
                mchnt_id:'',
                parking_poiid:'',
                carportcount:'',
                parking_poiid:'',
                inBrake:{},
                outBrake:{}
            },
            rules:{
                parking_name: [
                    { required: true, message: '请输入停车场名称', trigger: 'blur' }
                ]
            } 
        }
    },
    mounted() {
        // console.log(this.mySalePlans)
    },
    created(){
        this.data = this.$route.query.data
        let data = this.data
        // console.log(data)
        this.formData.parking_lot_type = this.$store.getters.parkingLotType(this.data.parking_lot_type).type
        this.formData.parking_name = data.parking_name
        this.formData.parking_address = data.parking_address
        this.formData.price = data.price
        this.formData.high_price = data.high_price
        this.formData.free_time = data.free_time
        this.formData.time_out = data.time_out
        this.formData.high_time = data.high_time
        this.formData.parking_mobile = data.parking_mobile
        this.formData.mchnt_id = data.mchnt_id
        this.formData.parking_poiid = data.parking_poiid
        this.formData.carportcount = data.carportcount
        this.formData.parking_poiid = data.parking_poiid
        let ip = this.$store.state.url
        let param = {
            plans_id:data.isBindSalePlants,
            page:1,
            pageSize:10,
            userId:localStorage.getItem('userId'),
			dealer:localStorage.getItem('dealer')
        }
        if(param.plans_id === '未绑定优惠方案'){
            delete param.plans_id
            this.formData.isBindSalePlants = false
        }else{
            this.formData.isBindSalePlants = true
        }
        salePlans('/salePlans/selectAll',param).then(message => this.formData.salePlan = message.data.result[0])
        bindDevice({id:data.id}).then(message => {
            this.formData.inBrake = message.data.inBrake
            this.formData.outBrake = message.data.outBrake
        })
    },
    computed:{
        ...mapState(['gstylelast','mySalePlans'])
    },
    methods:{

    }
}
</script>
<style scoped="scoped">
    .zfbInfo{
        padding: 20px;
    }
</style>
