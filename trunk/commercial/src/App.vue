<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
}
</script>

<style lang="scss">
@import './static/css/base';
@import './static/css/mixins';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: $background-color;
  height: 100%;
}
#nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3.5rem;
  padding-top: 0.5rem;
  background: white;
  a {
    font-weight: bold;
    color: $unclick-color;
    &.router-link-exact-active {
      color: $click-color;
    }
  }
}
.order-content {
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  height: calc(100% - 2rem);
  position: relative;
}
</style>
