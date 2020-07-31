<template>
  <section id="home">
    <panel-group />
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="24">
        <div class="chart-wrapper">
          <div class="echartTitle">设备工作状态</div>
          <pie-chart />
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
import AMap from "AMap";
import PanelGroup from "./PanelGroup";
import PieChart from "./PieChart";

export default {
  components: {
    PanelGroup,
    PieChart
  },
  data() {
    return {
      
    };
  },

  methods: {},

  mounted() {},

  activated() {}
};
</script>

<style scoped lang="scss">
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
.echartTitle {
  text-align: center;
  background-color: #f4f3f4;
  height: 60px;
  line-height: 60px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  color: #2d353c;
  font-size: 18px;
  margin-bottom: 16px;
}
</style>