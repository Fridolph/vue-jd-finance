<template>
  <Panel title="保险保障" cname="panel-safe">
    <Slider :list="items" :cname="$style.slider" />
  </Panel>
</template>

<script>
export default {}
</script>

<style lang="scss" module>
@import '../../assets/css/element.scss';

.panel {
  @include panel;
}
</style>

<style lang="scss">
.panel-safe {
}
</style>
