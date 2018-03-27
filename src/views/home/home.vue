<template lang="html">
  <div :class="$style.home">
    <layout-header />
    <hslider />
  </div>
</template>

<script>
import LayoutHeader from '../../layout/header'
import hslider from './hslider'

export default {
  components: {
    LayoutHeader,
    hslider
  }
}
</script>

<style lang="scss" module>
.home {
  color: red;
  font-size: 80px;
}
</style>
