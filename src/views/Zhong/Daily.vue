<template>
  <Panel title="每日签到" :class="$style.panel">
    <p :class="$style.tip">不抢白不抢</p>
    <section :class="$style.content">      
      <div :class="$style.item">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t17374/350/576442826/54240/a9918a9/5a97d2c0N021cf2e0.png?width=376&height=264" alt="">
      </div>
      <div :class="$style.item">
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
  position: relative;
  .tip {
    top: 0;
    position: absolute;
    right: 24px;
    font-size: 28px;
    color: #999;
    height: 112px;
    line-height: 112px;
  }
  .content {
    @include flex(row, block, nowrap);
    justify-content: center;
    padding-bottom: 20px;
    position:relative;    
    .item {
      width: 50%;
      > img {
        width: 100%;
      }
    }
  }
}
</style>
