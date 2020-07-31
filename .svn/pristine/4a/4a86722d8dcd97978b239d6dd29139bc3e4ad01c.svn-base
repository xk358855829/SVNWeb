<template>
    <div>
        <ul>
            <li v-for="(item,index) in tabDate">
                <div class="left">
                    <div>{{item.cname}}</div>
                    <div class="detail" v-if="item.cname=='精洗'">内部精洗+外部清洗</div>
                    <div class="price">￥{{item.money}}</div>
                </div>
                <div class="right">
                    <div @click="subscribe(item)">
                        下单预约
                    </div>
                    <p>已售{{item.sold}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import {mapMutations,mapState} from 'vuex'
export default {
    props:['tabDate'],
    computed:{
        ...mapState(['mark']),
        
    },
    methods:{
        ...mapMutations(['ORDER','USER','MARK','ADDRESS']),
        subscribe(vals){
            console.log(vals)
            this.ORDER(vals)
            this.USER({
                name:'',
                phone:'',
                carnumber:'',
                birthday:'',
                birthdays:''
            })
            
            this.MARK(
                
            )
            this.ADDRESS(
                
            )
            console.log(this.mark)
            this.$router.push({path:'/list'})
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/style/mixin.scss';
    @import '@/style/home.scss';
</style>
