<template>
    <div style=" height:100%;
        overflow-y:scroll;">
        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="feiSeverPage.allLoaded" ref="loadmore">
        <ul class="track-list" v-if="list.length!==0">
          <li class="track-item" v-for="(item,index) in listlp" :key="index">
           <div style="height:80px;">{{item.parking_name}}</div>
          </li>
        </ul>
        <div class="no-data" v-else>暂无孩子轨迹位置信息</div>
      </mt-loadmore>
</div>
</template>
<script>
    export default {
        name: 'message',
        data() {
            return {
                // list:[],
                // allLoaded:false,
                // curPage:0,
                // pageSize:10,
                // bottomdropText:'数据加载完毕',
            }
        },
        props: ['listlp','feiSeverPage'],
        mounted() {
            //       console.log(this.personalMsgList)
        },
        methods: {
           loadTop(){
			this.feiSeverPage.curPage = 1
			this.getChildLocationList()
			},
			// 加载更多数据
			loadBottom(){
				console.log(98)
			this.feiSeverPage.curPage +=1
			this.getChildLocationList()
			},


    getChildLocationList(){
		
      this.feiSeverPage.allLoaded = false
	  let dateCreated = this.dateCreated
        


      
        //   if(res.data.resCode==0){
            // let _list = res.data.result
            // this.curPage = res.data.pageNum
            // this.pageSize = res.data.pageSize
            // let totalPages = res.data.count//总页数
            // 下拉刷新 加载更多
            // setTimeout(() => {
            //   this.$refs.loadmore.onTopLoaded();
            //   this.$refs.loadmore.onBottomLoaded();
            // }, 1000);
            // if(this.feiSeverPage.curPage==1){
            //   this.listlp = listlp;
            // }else{
			// 	console.log(this.curPage*this.pageSize)
            //   if(this.curPage*this.pageSize>=this.feiSeverPage.totalPages){
            //     this.feiSeverPage.allLoaded = true;// 若数据已全部获取完毕
            //   }
            //   this.list = this.list.concat(_list);//数组追加
            // }
        //   }else{
        //     this.$refs.loadmore.onTopLoaded();
        //     this.feiSeverPage.allLoaded = true;// 若数据已全部获取完毕
        //     this.list = []
        //   }
        
      
    },
            
        },
     
    }
</script>
<style>

</style>
