<template>
    <div>
        <ul>
            <li v-for="(item,index) in management" :key="index">
                <div>
                    <span>{{item.laber}}</span>
                    <span>{{item.value}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    // name:'valutide',
    props:['management','title'],
    data(){
        return{

        }
    },
    mounted(){
        // document.title=this.$route.meta.title
        console.log(this.management)
    }
}
</script>
<style lang="scss" scoped>
     @import '@/style/mixin.scss';
    ul{width:94%;background: #fff;margin:0 auto;border-radius: 5px;margin-bottom: 0.2rem;}
    ul li{@include wh(92%,0.5rem);margin:0 auto;line-height: 0.5rem;border-bottom: 1px solid rgb(239,239,239);}
    ul .imp{@include wh(94%,0.55rem);margin:0 auto;line-height: 0.55rem;font-size: 16px;}
    ul li div{display: flex;justify-content: space-between;}
    ul li div span:nth-child(1){@include sc(15px,rgb(48,48,48));}
     ul li div span:nth-child(2){@include sc(15px,rgb(104,104,104));}
</style>
