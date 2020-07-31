<template>
  <div class="page">
    <el-pagination background
                   @current-change="handleCurrentChange"
                   @size-change="handleSizeChange"
                   :current-page.sync="info.currentPage"
                   :page-sizes="pagesizes"
                   :page-size="info.pageSize"
                   layout="sizes, prev, pager, next, jumper,total"
                   :total="messages">
    </el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
import { bus } from './bus.js'
export default {
  props: {
    messages: ''
  },
  data () {
    return {
      pagesizes: [10, 20, 50, 100],
      info: {
        currentPage: 1,
        pageSize: 10,
      }
    };
  },
  methods: {
    handleSizeChange (val) {
      this.info.pageSize = val;
      this.info.currentPage = 1;
      this.$emit("code", this.info);
    },
    handleCurrentChange (val) {
      console.log("分页变化了，当前页数是" + val)
      this.info.currentPage = val;
      this.$emit("code", this.info);
    },
    getPage () {
      bus.$emit("pageOption", this.info);
    },

  },
  mounted () {
    this.getPage()
  }
};
</script>
