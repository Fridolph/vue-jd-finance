<template>
  <section :class="[panelClass, cname]">
    <div v-if="showTitle" class="caption">- {{title}} -</div>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'panel',
  props: {
    cname: { type: String, default: '' },
    title: { type: String, default: '' },
    showTitle: { type: Boolean, default: true }
  },
  data() {
    return {
      panelClass: 'panel'
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/element.scss';
.panel {
  @include panel;
  .caption {
    text-align: center;
    font-weight: bold;
    // border-bottom: 1px solid #ddd;
  }
}
</style>
