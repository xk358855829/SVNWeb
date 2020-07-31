<template>
    <div class="bosx">
        <div>
            <p style="padding-top:0.65rem;color:#303030;">您已绑定手机：{{meg}}</p>
            <p style="margin-top:0.25rem;color:#303030;">您的钥匙信息，</p>
            <p style="margin-top:0.12rem;color:#303030;">我们将通过短信的形式发送到您绑定的手机号上</p>
        </div>
        <div class="foot" style="margin-top:0.36rem;" @click="changenumcar">
            修改绑定手机号
        </div>
    </div>
</template>
<script>
export default {
    name:'bangding',
    data(){
        return{
            meg:''
        }
    },
    mounted(){
        console.log(this.$route.query.val)
        document.title=this.$route.meta.title
        this.meg=this.$route.query.val
    },
    methods:{
        changenumcar(){
            this.$router.push({path:'/changephone'})
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/style/mixin.scss';
    .bosx{@include wh(100%,100%);background: #f2f2f2;}
    div{text-align: center;@include sc(15px,#999)}
    .foot{@include wh(74%,0.5rem);@include sc(15px,#fff);margin:0 auto;background: #f68b1c;line-height: 0.5rem;border-radius: 5px;}
</style>


