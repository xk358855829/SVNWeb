<template>
  <div class="form-card">
    <div class="form-title">
      <span>{{title}}</span>
    </div>
    <div v-if="formList">
      <div v-for="( item, key ) in formList"
           :key="key"
           class="form-row">
        <div>{{item.label}}</div>
        <div class="table-right">{{item.content}}</div>
      </div>
    </div>
    <div v-if="formState">
      <div :class="[
        'form-state',
        'form-row',
        formState.color || ''
      ]">
        <div>{{formState.label}}:</div>
        <div class="table-left">{{formState.content}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FormCard',
  props: {
    formList: Array,
    title: String,
    formState: Object
  }
}
</script>
<style lang="scss" scoped>
@import '../static/css/mixins';
.form-card {
  display: inline-block;
  background: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 0.4rem;
  width: 100%;
  color: $font-color;
  margin-bottom: 1.6rem;
  .form-title {
    font-weight: 400;
    text-align: left;
    font-size: 1.3rem;
    line-height: 4.6rem;
    text-indent: 1.25rem;
  }
  .form-row {
    display: table;
    font-size: 1.25rem;
    text-indent: 1.25rem;
    text-align: left;
    line-height: 3.75rem;
    width: 100%;
    div {
      display: table-cell;
    }
    .table-right {
      text-align: right;
      padding-right: 1rem;
    }
    .table-left {
      text-align: left;
      text-indent: 1rem;
    }
  }
  .form-state {
    display: inline-table;
    font-size: 1.5rem;
    line-height: 5.1rem;
    div {
      display: inline-table;
      text-indent: 0;
    }
  }
  .warning {
    color: $click-color;
  }
  .danger {
    color: $red;
  }
  .finished {
    color: $gray;
  }
}
</style>
