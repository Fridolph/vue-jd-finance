<template>
  <Panel :showTitle="false" title="广告A" :class="$style.panel" cname="ad-a">
    <section :class="$style.adWrapper">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t14707/121/2335216734/37656/5611f3d9/5a97704dNca58d124.png?width=750&height=270" alt="">
    </section>
  </Panel>
</template>

<script>
import Panel from '../../components/Panel'

export default {
  name: 'Ada',
  components: {
    Panel
  }
}
</script>

<style lang="scss" module>
@import '../../assets/css/element.scss';

.panel {
  @include panel;
  .ad-wrapper {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>
