 <template>
    <div class="rating_page">
        <header class="header_style">备注</header>
        <textarea class="input_text" v-model="listremarks" placeholder="请输入备注内容"></textarea>
        <div class="determine" @click="confirmRemark">确定</div>
        <!-- <alert v-if="show==false" :zmeg="meg" @closeTip="show=true"></alert> -->
    </div>
</template>

<script>
    import {mapMutations,mapState} from 'vuex'
    import alert from '../index/alert.vue'
    import { MessageBox } from 'mint-ui';
    export default {
        name:'inputdetail',
        data(){
            return{
                listremarks:'',
                show:true,
                meg:'meg'
                // listadresss:''
            }
        },
        mounted(){
            document.title=this.$route.meta.title
            this.listremarks=this.mark
        },
        computed:{
            ...mapState(['mark'])
        },
        components:{
            alert
        },
        methods: {
            ...mapMutations(['MARK']),
           confirmRemark(){
                // this.detailshow=false
                // this.$emit('listremark',this.listremarks)
                // this.$emit('listdetail',this.detailshow)
                if(this.listremarks==''){
                    // this.show=false
                    // this.meg='备注不能为空'
                    MessageBox('提示','备注不能为空')
                }else{
                    this.MARK(this.listremarks)
                    // this.MARK({remac:this.listremarks,rec:this.inpute})
                    this.$router.go(-1)
                    // this.$router.push({path:'/list',query:{app:this.listremarks}})
                }
                 
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



