<template>
    <div>
        <p>地址</p>
        <span>有效期</span><span>19-12-8</span>
        <div>
            <p>
                <img src="" alt="">
            </p>
            <p>电量不足</p>
        </div>
        <div>
            <p>上次使用时间</p>
            <p>19-11-14</p>
        </div>
        <div class="load">
            <div @click="up">
                升起
            </div>
            <div class="" @click="down">
                降下
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
// import { Indicator } from 'mint-ui';
import Qs from 'qs'
export default {
    data(){
        return{

        }
    },
    methods:{
        up(){
            Indicator.open({
                text: 'Loading...',
                spinnerType: '加载中'
            });
            let data = {
				devId: id,
				cmd:18,
				cmdValue:'11'
			};
            axios({
                method:'post',
                url:'http://39.104.113.112:8799/parkingData/queryGetDate',
                data:Qs.stringify(data)
            }).then(res=>{
                console.log(res)
            })
        },
        down(){
            Indicator.open({
                text: 'Loading...',
                spinnerType: '加载中'
            });
            let data = {
				devId: id,
				cmd:18,
				cmdValue:'11'
			};
            axios({
                method:'post',
                url:'http://39.104.113.112:8799/parkingData/queryGetDate',
                data:Qs.stringify(data)
            }).then(res=>{
                console.log(res)
            })
        }
    }
}
</script>
<style scoped>
    .load{width: 80%;margin:0 auto;display: flex;justify-content: space-between;}
    .load div{
        width: 2rem;
        height: 0.8rem;
        background: #f68b1b;
        line-height: 0.8rem;
        color: #fff;
        text-align: center;
    }
</style>
