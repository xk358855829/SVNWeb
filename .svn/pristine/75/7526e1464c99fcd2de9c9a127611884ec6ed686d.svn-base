<template>
  <div class="avatar-nav-row">
    <div class="avatar-nav-img">
      <img :src="avatar">
    </div>
    <div class="avatar-nav-text">
      <p>{{name}}</p>
      <input v-model="phone"
             class="avatar-nav-row-input"
             type="tel"
             @change="handlePhoneChange">
    </div>
    <i class="icon-6"></i>
  </div>
</template>
<script>
export default {
  name: 'AvatarNavRow',
  props: ['avatar', 'name'],
  data () {
    return {
      phone: ''
    }
  },
  methods: {
    handlePhoneChange () {
      this.$emit('numberChange', this.phone)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../static/css/mixins';
.avatar-nav-row {
  height: 6.2rem;
  display: table;
  background: white;
  width: 100%;
  font-size: 2rem;
  img {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
  }
  p {
    font-size: 1.1rem;
    color: $font-color;
  }
  .avatar-nav-img {
    display: table-cell;
    width: 6.2rem;
    vertical-align: middle;
  }
  .avatar-nav-text {
    display: table-cell;
    vertical-align: middle;
    text-align: left;
  }
  i {
    vertical-align: middle;
    position: relative;
    display: table-cell;
    text-align: right;
    padding-right: 1.2rem;
  }
  .avatar-nav-row-input {
    border: 0;
  }
}
</style>
