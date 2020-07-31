<template>
    <section>
        <!-- <ul>
            <li v-for="item in table">
                <div class="left">
                    <div>{{item.cname}}</div>
                    <div class="detail" v-if="item.cname=='精洗'">内部精洗+外部清洗</div>
                    <div class="price">￥{{item.money}}</div>
                </div>
                <div class="right">
                    <div @click="subscribe">
                        下单预约
                    </div>
                    <p>已售{{item.sold}}</p>
                </div>
            </li>
        </ul> -->
        <ulli :tabDate="table"></ulli>
    </section>
</template>
<script>
import {Order} from './api/api.js'
import {mapMutations} from 'vuex'
import ulli from './index/ulli.vue'
export default {
    name:'homeesection',
    data(){
        return{
            table:[],
            inner:false
        }
    },
    methods:{
       
    },
    components:{
        ulli
    },
    mounted(){
        document.title=this.$route.meta.title
        let that=this;
        let data={
            page:1,
            pageSize:10
        }
        Order(data).then(res=>{
            if(res.status==200){
                that.table=res.data.result
            }
            console.log(res)
        })
        this.$store.dispatch('defalt',88)
        console.log(this.$store.state.num)
    }
}
</script>
<style lang="scss" scoped>
    
</style>


