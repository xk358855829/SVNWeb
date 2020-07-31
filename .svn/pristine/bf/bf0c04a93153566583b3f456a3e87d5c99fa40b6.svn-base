 <template>
    <div class="rating_page">
        <header class="header_style">停车场地址</header>
        <textarea class="input_text" v-model="listadres" placeholder="请输入备注内容"></textarea>
        <div class="determine" @click="confirmRemark">确定</div>
    </div>
</template>

<script>
    import {bus} from '../bus/bus.js'
    import {mapMutations,mapState} from 'vuex'
    export default {
        name:'inputadress',
        data(){
            return{
                listadres:'',
            }
        },
        computed:{
            ...mapState(['address'])
        },
        mounted(){
            document.title=this.$route.meta.title
            this.listadres=this.address
        },
        methods: {
            ...mapMutations(['ADDRESS']),
           confirmRemark(){
               this.ADDRESS(this.listadres)
               this.$router.go(-1)
           }
        }
    }
</script>
  
<style lang="scss" scoped>
   @import '@/style/mixin.scss';
    .header_style{@include sc(18px,#999)}
    .input_text{@include wh(99%,1rem)}
    .determine{text-align: right;font-size: 18px;}
</style>



