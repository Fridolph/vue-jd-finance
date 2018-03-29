<template>
  <Panel title="更多福利" :class="$style.panel">
    <section :class="$style.content">
      <p :class="$style.arrow">更多福利 > </p>
      <div :class="$style.rowItem">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330" alt="">
      </div>
      <div :class="$style.rowItem">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330" alt="">
      </div>
      <div :class="$style.rowItem">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330" alt="">
      </div>
    </section>
  </Panel>
</template>

<script>
import Panel from '../../components/Panel'
import MenuLink from '../../components/MenuLink'

export default {
  name: 'More',
  components: {
    MenuLink,
    Panel
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" module>
@import '../../assets/css/element.scss';
@import '../../assets/css/layout.scss';

.panel {
  @include panel;
  .content {
    @include flex(row, block, nowrap);
    padding-bottom: 20px;
    position:relative;
    .arrow {
      position:absolute;
      right: 0;
      top: -112px;
      max-width: 40%;
      margin-right: 24px;
      color: #999;
      font-size: 28px;
      line-height: 112px;
      height: 112px;
    }
    .row-item {
      width: 33.33%;
      > img {
        width: 100%;
      }
    }
  }
}
</style>

