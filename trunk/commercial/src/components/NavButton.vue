<template>
  <router-link v-bind:to="to"
               active-class="router-active">
    <div class="navbutton-block">
      <img :src="active ? clickImg : unclickImg"
           class="btnIcon">
      <p>{{text}}</p>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'NavButton',
  props: ['to', 'text', 'clickImg', 'unclickImg', 'active']
}
</script>
<style lang="scss" scoped>
@import '../static/css/mixins';
.navbutton-block {
  float: left;
  width: 100%;
  padding-top: 2px;
  p {
    font-size: 0.8rem;
  }
}
.btnIcon {
  width: 19px;
  height: 19px;
}
.router-active {
  color: $click-color;
}
</style>
