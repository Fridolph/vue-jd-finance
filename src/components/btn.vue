<template>
  <div :class="[btnClass, cname]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'btn',
  props: {
    cname: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      btnClass: 'btn'
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/element.scss';

.btn {
  @include btn;
}
</style>
