<template>
    <div>
        <div class="head-top" style="">
            <div>
                <span>手机号</span>
                <input type="text"  placeholder="请输入11位手机号码" v-model="phone" @blur="bottocenter">
            </div>
            <div>
                <span>验证码</span>
                <input type="text" placeholder="请输入短信验证码" style="width:43%;" v-model="mess" @blur="bottocenter">
                <p class="sentMess" @click="loleval" v-if="t==''">{{plText}}</p>
                <p v-else>{{disText}}</p>
            </div>
        </div>
        <div class="foot" style="margin-top:0.3rem;" @click="binding">
            登录
        </div>
        <!-- <alert v-show="show==false" :zmeg='meg' @closeTip='show=true'></alert> -->
         <!-- <button ref="tar" type="button" name="button" @click="testClick">{{ content }}</button> -->
    </div>
</template>
<script>
import alert from '../index/alert'
import {regphone} from '../api/filter.js'
import {fasong,textchange,beforyan,stateus} from '../api/api.js'
import { MessageBox } from 'mint-ui';
export default {
    name:'login',
    data(){
        return{
            phone:'',
            plText:'获取验证码',
            mess:'',
            show:true,
            disText:'',
            meg:'',
            t:'',
            valsDat:''
            // content:'初始'
        }
    },
    components:{
        alert
    },
    computed:{
        
    },
    watch:{
        
    },
    methods:{
        bottocenter(){
            window.scrollTo(0,document.documentElement.clientHeight)
        },
        binding(){
            if(this.phone==''||this.mess==''){
                console.log(998)
                MessageBox('提示','手机号码和验证码不能为空')
                // this.meg='手机号码和验证码不能为空'
                // this.show=false
            }else if(this.phone){
                console.log(this.mess)
                console.log(this.valsDat)
                if(!regphone(this.phone)){
                    // this.show=false
                    // this.meg='手机号不正确'
                    MessageBox('提示','手机号不正确')
                }else if(this.valsDat!=this.mess){
                    // this.show=false
                    // this.meg='验证码不正确'
                     MessageBox('提示','验证码不正确')
                    // localStorage.getItem('openid')
                }else{
                    // textchange({phone:this.phone,
                    // openid:localStorage.getItem('openid'),
                    // name:localStorage.getItem('nickname')
                    // // openid:'oOKex1Ow5nB_qymzrzj4L7Gm7snU'
                    // }).then(res=>{
                    //     if(res.data.resCode=="0"){
                    //         // this.show=false
                    //         // this.meg='登录成功'
                    //          MessageBox('提示','登录成功').then(action=>{
                    //              this.$router.push({path:'/homePage'})
                    //                 localStorage.setItem('phones',this.phone)
                    //          })
                            
                    //     }
                    // })


                    let data={
                        openId:this.openid,
                        phoneNumber:this.name,
                        parkingId:'PI1540957659034816320'
                    }
                    let res=await stateus(data)
                    if(res.data.resCode==0){
                        this.lp=false
                        localStorage.setItem('tel',this.name)
                    }else{
                        MessageBox('提示', '登录失败，请重试');
                    }
                }
            }
        },
        loleval(){
            if(this.phone==''||!regphone(this.phone)){
                // this.meg='手机号码不正确'
                // this.show=false
                MessageBox('提示','手机号码不正确')
            }else{
                let that=this;
                if(that.t==''){
                    clearInterval(that.t)
                    let a = 60;
                    that.disText = '剩余'+a+'s';
                    that.t=setInterval(function(){
                        a--;
                        that.disText='剩余'+a+'s'
                        if(a<=0){
                            that.plText='重新获取'
                            clearInterval(that.t)
                            that.t = '';
                        }
                    },1000)
                }
                let data={
                        phoneNumber:that.name
                }
                let res=await fasong(data)
                if(res.data.resCode=="0"){
                    console.log(res)
                    that.valsDat=res.data.result
                }    
            }

        },
        // testClick(){
        //     this.content='改变'
        //     this.$nextTick(()=>{
        //         console.log(this.$refs.tar.innerText)
        //     })
            
        // }
    },
    mounted(){
        
        document.title=this.$route.meta.title
        
    }
}
</script>
<style lang="scss" scoped>
    @import '@/style/mixin.scss';
    .head-top{@include wh(91%,1.16rem);border-radius: 5px;margin:0 auto;margin-top:0.32rem;}
    .head-top div{@include wh(100%,0.6rem);line-height: 0.57rem;display: flex;justify-content: space-between;font-size: 14px;}
    .head-top div:nth-child(1){border-bottom:1px solid#efefef;}
    .head-top div span{text-indent: 0.2rem;color:#303030;}
    .head-top div input{width: 77%;outline: none;border: none;color:#999;height: 92%;}
    p{@include wh(0.78rem,0.55rem);background: #f68b1c;color: #fff;line-height: 0.55rem;text-align: center;}
    .foot{@include wh(82%,0.5rem);@include sc(15px,#fff);margin:0 auto;background: #f68b1c;line-height: 0.5rem;border-radius: 5px;text-align: center;}
    .sentMess{cursor:pointer}
</style>


