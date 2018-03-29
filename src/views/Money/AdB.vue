<template>
  <Panel :showTitle="false" title="广告A" :class="$style.panel" cname="ad-b">
    <section :class="$style.adWrapper">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t10876/23/2566835181/40527/d7d27c08/59f97d68Ne53fda5b.png?width=1080&height=240" alt="">
    </section>
  </Panel>
</template>

<script>
import Panel from '../../components/Panel'

export default {
  name: 'Adb',
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
