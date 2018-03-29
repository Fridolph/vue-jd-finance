<template>
  <Panel title="精品活动" :class="$style.panel">
    <section :class="$style.whiteActivity">
      <div :class="$style.rowItem">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t17374/350/576442826/54240/a9918a9/5a97d2c0N021cf2e0.png?width=376&height=264" alt="">
      </div>
      <div :class="$style.rowItem">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t14653/159/1840910093/27778/53ebfb91/5a5c5cc9N28e0dc96.png?width=376&height=264" alt="">
      </div>
    </section>
  </Panel>
</template>

<script>
import Panel from '../../components/Panel'

export default {
  components: {
    Panel
  }
}
</script>

<style lang="scss" module>
@import '../../assets/css/element.scss';
@import '../../assets/css/layout.scss';
.panel {
  @include panel;  
}

.white-activity {
  padding-bottom: 20px;
  margin-bottom: 20px;
  width: 100%;
  @include flex(row, block, nowrap);
  .row-item {
    width: 50%;
    > img {
      width: 100%;
    }
  }
}
</style>
