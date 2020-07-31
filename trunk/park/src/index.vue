<template>
  <div id="index">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import Qs from 'qs'
import axios from 'axios'
import Component from 'vue-class-component'
// export default {
//   name: 'index',
//   data () {
//     return {}
//   },
//   mounted: function () { },
//   methods: {}
// }
export default class App extends Vue { }
</script>

<style>
#index {
  width: 100%;
  height: 100%;
}
.little {
  width: 600px;
  height: 40px;
  line-height: 40px;
  color: #ff0000;
}
</style>