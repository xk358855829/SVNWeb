 <template>
  <div id="content">
    <mt-loadmore :bottom-method="loadBottom"
                 :bottom-all-loaded="allLoaded"
                 :auto-fill="false"
                 ref="loadmore">
      <div class="item"
           v-for="(item,index) in list"
           :key="index">
        <div class="name">{{item.title}} + {{index}}</div>
      </div>
    </mt-loadmore>
  </div>
</template>
<script>
import { Loadmore } from 'mint-ui';
import Vue from 'vue'


var p = 1;
export default {
  data () {
    return {
      list: [1, 2, 2, 31, 1],
      allLoaded: false,
    }
  },
  methods: {
    loadBottom: function () {
      this.$refs.loadmore.onBottomLoaded();
      // this.getList();
    },
    getList: function () {
      // this.$http.get("自己的接口信息?st=0&et=0&page=" + p + "&offset=条数").then(res => {
      let a = [2, 2]
      this.list = this.list.concat(a)
      console.log(this.list)

      // })

      p += 1
    }
  },
  mounted: function () {
    this.getList();
  }
}
</script>
<style scoped>
#content {
  overflow: scroll;
}
.item {
}
.item .name {
  height: 50px;
  background-color: green;
  margin-bottom: 10px;
}
</style>
        