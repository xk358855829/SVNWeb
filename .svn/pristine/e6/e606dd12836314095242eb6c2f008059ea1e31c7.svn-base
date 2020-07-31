<!-- 设备信息 -->
<template>
  <div class="deviceInfo">
    <ul class="deviceInfoList">
      <li><span><span>虚拟ID:</span><span>{{id}}</span></span><span @click="copy">复制</span></li>
      <li><span>IP地址:</span>{{ip}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "deviceInfo",
  data () {
    return {
      id:"XXXXXX",
      ip:"XXXXXXXX"
    };
  },

  components: {},

  mounted: {},

  methods: {
    copy(){
      
    }
  }
}

</script>
<style scoped>
  .deviceInfo{
    padding: 40px 16px 0;
    background: #fff;
    width: 100%;
    min-height: 100%;
  }
  .deviceInfoList>li{
    font-size: 15px;
    color: #303030;
    margin-bottom: 40px;
  }
  .deviceInfoList>li:first-of-type{
    display: flex;
    justify-content: space-between;
  }
  .deviceInfoList>li:first-of-type>span:last-of-type{
    color: #1466E5;
  }
</style>