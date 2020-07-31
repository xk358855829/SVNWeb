<template>
    <div style="background:#efefef;" id="vip">
        <div style="width:100%;background:#fff;">
            <div style="width:96%;margin:0 auto;">
            <!-- <mt-field type="text" label="车牌号码：" placeholder="请输入车牌号码" v-model="car_number" style="margin-bottom:0.2rem;"></mt-field>
             -->
             <div style="display:flex; " class="park">
                <p class="asz">停车场名称</p>
                <el-select v-model="parking_id" placeholder="请选择停车场名称" @change="changval(parking_id)">
                    <el-option v-for="item in arr" :key="item.parking_id" :label="item.parking_name" :value="item.parking_id"></el-option>
                </el-select>
                <p class="imgp"><img src="../../static/image/a (2).png" alt=""></p> 
            </div>
            <div style="display:flex;" class="park">
                <p style="" class="asz">会员类型</p>
                <el-select v-model="typecar" placeholder="请选择会员类型" @change="changvallop(typecar)">
                    <el-option>未选择</el-option>
                    <el-option v-for="item in req" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
                <p class="imgp"><img src="../../static/image/a (2).png" alt=""></p> 
            </div>
             <div style="display:flex;" class="park">
                <p style="" class="asz">车牌号码</p>
                <el-select v-model="car_number" placeholder="请选择车牌号码" @change="changvala">
                    <el-option>未选择</el-option>
                    <el-option v-for="item in List" :key="item" :label="item" :value="item"></el-option>
                </el-select>
                <p class="imgp"><img src="../../static/image/a (2).png" alt=""></p> 
            </div>
             <div style="display:flex;" class="park">
                <p style="" class="asz">车主姓名</p>
                <el-input placeholder="请输入车主姓名" style="width:1.8rem;margin-left: 0.2rem;" v-model="name" @blur="bottocent"></el-input>
            </div>
             <div style="display:flex;" class="park">
                <p style="" class="asz">车主电话</p>
                <el-input placeholder="请输入车主电话" style="width:1.8rem;margin-left: 0.2rem;" v-model="tel" @blur="bottocent"></el-input>
            </div>
            <!-- <mt-field type="text" label="车主姓名：" placeholder="请输入车主姓名" v-model="name" style="margin-bottom:0.2rem;">
                <span class="input-group-addon"></span>
            </mt-field> -->
            <!-- <mt-field type="number" label="车主电话：" placeholder="请输入车主电话" v-model="tel" style="margin-bottom:0.2rem;">
                <span class="input-group-addon"></span>
            </mt-field> -->
              <div style="display:flex;margin-bottom:0.2rem;" class="park" >
                <p style="width:23%;" class="asz">充值金额</p>
                <el-input style="width:1.8rem;margin-left: 0.2rem;"
                 placeholder="请输入充值金额"
                :disabled="lopop"
                v-model="money"
                @blur="bottocent"
                ></el-input>
                <p style="font-size:15px;line-height:0.35rem;width:18%;text-align:right;">元</p>
            </div>
             <div style="display:flex;margin-bottom:0.2rem;" v-if="shoz" class="park">
                 <p style="margin-right:0.2rem;" class="asz">开始时间</p>
                <div style="line-height:0.4rem;" @click="chosestart" v-if="start">选择开始时间</div>
                <div style="line-height:0.4rem" @click="chosestart" v-if="!start">{{value1}}</div>
                 <!-- <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
                </el-date-picker> -->
               <mt-datetime-picker
                lockScroll="true"
                ref="picker"
                v-model="sel"
                class="myPicker"
                type="datetime"
                year-format="{value}"
                month-format="{value}"
                date-format="{value}"
                hour-format="{value}"
                minute-format="{value}"
                second-format="{value}"
                @confirm="handleConfirms"
                >
                </mt-datetime-picker>
              </div>
              <div style="display:flex;margin-bottom:0.2rem;" v-if="shoz" class="park">
                 <p style="margin-right:0.2rem;" class="asz">结束时间</p>
                <div style="line-height:0.4rem" @click="choseend" v-if="end">选择结束时间</div>
                 <div style="line-height:0.4rem" @click="choseend" v-if="!end">{{value2}}</div>
                 <!-- <el-date-picker
                v-model="value2"
                type="date"
                placeholder="选择日期">
                </el-date-picker> -->
                 <mt-datetime-picker
                lockScroll="true"
                ref="pickers"
                v-model="sels"
                class="myPicker"
                type="datetime"
                year-format="{value}"
                month-format="{value}"
                date-format="{value}"
                hour-format="{value}"
                minute-format="{value}"
                @confirm="handleConfirm"
                >
            </mt-datetime-picker>
              </div>
        </div>
        </div>
        
        <div style="width:90%;margin:0.2rem auto;background:#fb861c;height:0.4rem;text-align:center;line-height:0.4rem;color:#fff;border-radius:5px;" @click="kai">
           开通
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import {kaitong,kaitongtwo,shaixuan,start} from './api/people.js'
import {valueop,isLicensePlate} from './api/api.js'
import { MessageBox } from 'mint-ui';
import Calendar from 'vue-calendar-component';
import Qs from 'qs'
export default {
    name:'vip',
    data(){
        return{
            start:true,
            end:true,
            dateVal:'',
            car_number:'',
            money:'',
            shoz:'',
            parking_id:'',
            arr:[],
            List:[],
            sel:'',
            sels:'',
            lopop:'',
            ida:'',
            idc:'',
            typecar:'',
            pickerValue:'',
            value1:'',
            value2:'',
            name:'',
            tel:'',
            req:[],
            start_time:'',
            end_time:'',
            moneyadd:'',

            az:'',
            appId:'',
            timeStamp:'',
            nonceStr:'',
            package:'',
            paySign:'',
            signType:''
        }
    },
     components: {
        Calendar
    },
    watch:{
    },
    methods:{
        bottocent(){
             window.scrollTo(0,0)
        },
        handelChange(val){
            console.log(this.formatDate(val).slice(0,10))
        },
        dateConfirm () { // 时间选择器确定按钮，并把时间转换成我们需要的时间格式
            this.selectedValue = formatDateMin(this.dateVal)
        },
        chosestart () {
            this.$refs.picker.open()
            this.sel=start()
            this.value1=start()
            this.start=false
        },
        parseTime(date) {

             var seperator1 = "-";
            var seperator2 = ":";
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            var strHours = date.getHours();
            var strMinutes = date.getMinutes();
            var strSeconds = date.getSeconds();
            
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            if (strHours >= 0 && strHours <= 9) {
                strHours = "0" + strHours;
            }
            if (strMinutes >= 0 && strMinutes <= 9) {
                strMinutes = "0" + strMinutes;
            }
            if (strSeconds >= 0 && strSeconds <= 9) {
                strSeconds = "0" + strSeconds;
            }
            
            var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                    + " " + strHours + seperator2 + strMinutes
                    + seperator2 + '00';
            return currentdate;
        },
        handleConfirms(val){
            console.log(val)
            this.value1=this.parseTime(val)
        },
        handleConfirm(val){
            this.value2=this.parseTime(val)
        },
        choseend(){
            this.$refs.pickers.open()
            this.sels=start()
            this.value2=start()
            this.end=false
        },

        // this.htime=
        changval(val){
            console.log(val)
            this.typecar=''
            this.ida=val
            let data={
                parking_id: val,
                page: 1,
                pageSize: 10,
                userId: 'SURIOT',
                dealer: 123
            }
            shaixuan(data).then(res=>{
                this.req=res.data.result
                this.req.find((a,y)=>{
                    if(a.name=='A'){
                        a.name='永久免费'
                    }else if(a.name=='B'){
                        a.name='月卡'
                    }else if(a.name=='C'){
                        a.name='年卡'
                    }else if(a.name=='D'){
                        a.name='限时'
                    }else if(a.name=='E'){
                        a.name='储值'
                    }else{
                        a.name='季卡'
                    }
                })
            })
        },
        changvallop(val){
            this.req.find((x,y)=>{
                if(x.id==val){
                    if(x.name=='限时'){
                        this.shoz=true
                        this.lopop=true
                        this.money=x.money

                        this.start_time=this.value1
                        this.end_time=this.value2

                    }else if(x.name=='储值'){
                        this.shoz=false
                        this.lopop=false
                        this.money=''
                        this.start_time=this.getNowFormatDate()
                        this.end_time='2099-05-24 11:07:57'
                    }else if(x.name=='月卡'){
                        this.lopop=true
                        this.shoz=false
                        this.money=x.money
                        this.start_time=this.getNowFormatDate()
                        this.end_time=this.getNowFormatDateap()
                    }else if(x.name=='年卡'){
                        this.lopop=true
                        this.shoz=false
                        this.money=x.money
                        this.start_time= this.getNowFormatDate()
                        this.end_time=this.getNowFormatDatemout()
                    }else if(x.name=='季卡'){
                        this.shoz=false
                        this.lopop=true
                        this.money=x.money
                        this.start_time=this.getNowFormatDate()
                        this.end_time=this.getNowFormatDateapsss()
                    }else if(x.name=='永久免费'){
                        this.shoz=false
                        this.lopop=true
                        this.money=''
                        this.start_time=this.getNowFormatDate()
                        this.end_time='2099-05-24 11:07:57'
                    }
                }
            })
        },
        changvala(val){
            this.idc=val
        },
        kai(){
            if(this.name==''){
                 MessageBox('提示','请输入车主姓名')
                 return false
            }
            if(this.tel==''){
                 MessageBox('提示','请输入车主电话')
                 return false
            }else{
                if(!valueop(this.tel)){
                     MessageBox('提示','请输入正确的车主电话')
                    return false
                }
            }
            if(this.ida==''){
                MessageBox('提示','请输入停车场名称')
                return false
            }
            if(this.typecar==''||this.typecar==undefined){
                 MessageBox('提示','请输入会员类型')
                 return false
            }else{
                this.req.find((x,y)=>{
                    if(x.id==this.typecar){
                        if(x.name=='储值'&&this.money==''){
                            MessageBox('提示','请输入充值金额')
                            return false
                        }else if(this.money<0){
                            MessageBox('提示','请输入充值金额')
                            return false
                        }
                    }
                })
            }
             if(this.idc==''||this.idc==undefined){
                 console.log(this.idc)
                MessageBox('提示','请输入车牌号码')
                return false
            }
            if(this.shoz){
                if(this.value2==''){
                 MessageBox('提示','请输入结束时间').then(action=>{
                     this.end=true
                 })
                 return false
                }
                if(this.value1==''){
                    MessageBox('提示','请输入开始时间').then(action=>{
                        this.start=true
                    })
                    return false
                }
            }
            
            let data={
                car_number:this.idc,
                // car_number:'浙AW19333',
                money:this.money,
                parking_id:this.ida,
                openId:localStorage.getItem('openid'),
                // openId:'oOKex1Ow5nB_qymzrzj4L7Gm7snU',
                ip:returnCitySN.cip
            }
            
            if(this.value1){
                this.start_time=this.value1
            }
             if(this.value2){
                this.end_time=this.value2
            }
            let a=new Date(this.end_time).getTime()
            let b=new Date(this.start_time).getTime()
            if(a<=b){
                MessageBox('提示','结束时间不能早于开始时间')
                return false
            }
            kaitong(data).then(res=>{
                console.log(res)
                if(res.data.resCode=="0"){
                     if(res.data.nowStatus.substring(0,1)=='E'){
                            this.moneyadd=res.data.nowStatus.substring(2,res.data.nowStatus.length-2)
                        }
                    console.log(this.moneyadd)
                    this.appId=res.data.appId
                    this.timeStamp=res.data.timeStamp
                    this.nonceStr=res.data.nonceStr
                    this.package=res.data.package
                    this.paySign=res.data.paySign
                    this.signType=res.data.signType
                    
                    this.az=Number(this.money)+Number(this.moneyadd)
                     if (typeof WeixinJSBridge == "undefined"){
                        if( document.addEventListener ){
                            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
                        }else if (document.attachEvent){
                            document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
                            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
                        }
                     }else{
                        this.onBridgeReady();
                       
                     }
                    
                }else{
                    MessageBox('提示',res.data.result)
                }
            })
        },
        onBridgeReady(){
            let that=this;
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest', {
                "appId":that.appId,     //公众号名称，由商户传入     
                "timeStamp":that.timeStamp,         //时间戳，自1970年以来的秒数     
                "nonceStr":that.nonceStr, //随机串     
                "package":that.package,     
                "signType":that.signType,         //微信签名方式：     
                "paySign":that.paySign //微信签名 
                },
                function(res){
                //  alert(res.err_msg)
                if(res.err_msg == "get_brand_wcpay_request:ok"){
                    let dataA={
                        car_number:that.idc,
                        money:that.az,
                        parking_id:that.ida,
                        dealer:123,
                        end_time:that.end_time,
                        start_time:that.start_time,
                        name:that.name,
                        tel:that.tel,
                        of_type:that.typecar,
                        openId:localStorage.getItem('openid')
                    }
                    
                     kaitongtwo(dataA).then(mes=>{
                       if(mes.data.resCode==0){
                            MessageBox('提示','开通成功').then(action=>{
                                this.$router.go(-1)
                            })
                       }else{
                            MessageBox('提示','开通失败').then(action=>{
                                this.$router.go(-1)
                            })
                       }
                    })
                }
            }); 
            },
        getNowFormatDate(){

				    var date = new Date();
				    var seperator1 = "-";
				    var seperator2 = ":";
				    var month = date.getMonth() + 1;
				    var strDate = date.getDate();
				    var strHours = date.getHours();
				    var strMinutes = date.getMinutes();
				    var strSeconds = date.getSeconds();
				    
				    if (month >= 1 && month <= 9) {
				        month = "0" + month;
				    }
				    if (strDate >= 0 && strDate <= 9) {
				        strDate = "0" + strDate;
				    }
				    if (strHours >= 0 && strHours <= 9) {
				        strHours = "0" + strHours;
				    }
				    if (strMinutes >= 0 && strMinutes <= 9) {
				        strMinutes = "0" + strMinutes;
				    }
				    if (strSeconds >= 0 && strSeconds <= 9) {
				        strSeconds = "0" + strSeconds;
				    }
				    
				    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
				            + " " + strHours + seperator2 + strMinutes
				            + seperator2 + strSeconds;
				    return currentdate;
							
			},
			getNowFormatDatemout(){

				    var date = new Date();
				    var seperator1 = "-";
				    var seperator2 = ":";
				
				    var month = date.getMonth() + 1;
				    var strDate = date.getDate();
				    var strHours = date.getHours();
				    var strMinutes = date.getMinutes();
				    var strSeconds = date.getSeconds();
				    
				    if (month >= 1 && month <= 9) {
				        month = "0" + month;
				    }
				    if (strDate >= 0 && strDate <= 9) {
				        strDate = "0" + strDate;
				    }
				    if (strHours >= 0 && strHours <= 9) {
				        strHours = "0" + strHours;
				    }
				    if (strMinutes >= 0 && strMinutes <= 9) {
				        strMinutes = "0" + strMinutes;
				    }
				    if (strSeconds >= 0 && strSeconds <= 9) {
				        strSeconds = "0" + strSeconds;
				    }
				    
				    var currentdate = date.getFullYear()+1 + seperator1 + month + seperator1 + strDate
				            + " " + strHours + seperator2 + strMinutes
				            + seperator2 + strSeconds;
				    return currentdate;
							
			},
			getNowFormatDateap(){

				    var date = new Date();
				    var seperator1 = "-";
				    var seperator2 = ":";
				    var month = date.getMonth() + 2;
				    var strDate = date.getDate();
				    var strHours = date.getHours();
				    var strMinutes = date.getMinutes();
				    var strSeconds = date.getSeconds();
				    
				    if (month >= 1 && month <= 9) {
				        month = "0" + month;
				    }
				    if (strDate >= 0 && strDate <= 9) {
				        strDate = "0" + strDate;
				    }
				    if (strHours >= 0 && strHours <= 9) {
				        strHours = "0" + strHours;
				    }
				    if (strMinutes >= 0 && strMinutes <= 9) {
				        strMinutes = "0" + strMinutes;
				    }
				    if (strSeconds >= 0 && strSeconds <= 9) {
				        strSeconds = "0" + strSeconds;
				    }
				    
				    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
				            + " " + strHours + seperator2 + strMinutes
				            + seperator2 + strSeconds;
				    return currentdate;
							
			},
			getNowFormatDateapsss(){

				    var date = new Date();
				    var seperator1 = "-";
				    var seperator2 = ":";
				    var month = date.getMonth() + 4;
				    var strDate = date.getDate();
				    var strHours = date.getHours();
				    var strMinutes = date.getMinutes();
				    var strSeconds = date.getSeconds();
				    
				    if (month >= 1 && month <= 9) {
				        month = "0" + month;
				    }
				    if (strDate >= 0 && strDate <= 9) {
				        strDate = "0" + strDate;
				    }
				    if (strHours >= 0 && strHours <= 9) {
				        strHours = "0" + strHours;
				    }
				    if (strMinutes >= 0 && strMinutes <= 9) {
				        strMinutes = "0" + strMinutes;
				    }
				    if (strSeconds >= 0 && strSeconds <= 9) {
				        strSeconds = "0" + strSeconds;
				    }
				    
				    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
				            + " " + strHours + seperator2 + strMinutes
				            + seperator2 + strSeconds;
				    return currentdate;
							
			},
    },
    mounted(){
        // document.title=this.$route.meta.title;
        if(localStorage.getItem('list')){
            this.List=(JSON.parse(localStorage.getItem('list'))).split(",")
        }else{
            this.List=[]
        }
        let data={
            page:1,
            pageSize:10000000,
            userId:'SURIOT',
            dealer:123
        }
        axios({
            method:'post',
            url:`${this.httpUrl}/Parking/selectLotInfo`,
            data:Qs.stringify(data)
        }).then(res=>{
            this.arr=res.data.result
        })
    },
}
</script>
<style>

    .asz{font-size: 15px;line-height: 0.4rem;width: 23%;text-align: right;}
    .input[type="text"]{border-radius: 5px;border: none;outline: none;}
    input{width: 1.8rem;height: 0.4rem;border-radius: 5px;text-indent: 0.1rem;}
    .el-input__inner{padding:0!important;width: 2.3rem!important;}
    .park{
        border-bottom: 1px solid #efefef;
        padding:0.1rem 0;
    }
    .el-icon-arrow-up:before{
        content:''!important;
    }
    .el-select{
        margin-left: 0.2rem;
    }
    input{
        border: none!important;
        outline: none!important;
    }
    .imgp{
        width: 0.07rem;
        height: 0.12rem;
        margin-top:0.12rem;
    }
    .imgp img{
        width: 100%;
        height: 100%;
    }
</style>
