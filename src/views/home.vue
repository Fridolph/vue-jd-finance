<template lang="html">
  <div :class="$style.home">
    <layoutHeader />
  </div>
</template>

<script>
import layoutHeader from '../layout/header'
export default {
  components: {
    layoutHeader
  }
}
</script>

<style lang="scss" module>
.home {
  color: red;
  font-size: 80px;
}
</style>
