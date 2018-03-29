<template>
  <Panel :showTitle="false" title="下载APP" cname="page-download" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.imgWrapper"></div>
      <button :class="$style.btnDownload">立即下载</button>
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

html, body {
  background-color: #fff;
}

.panel {
  @include panel;
  margin: 0 !important;
  .content {
    @include flex;
    justify-content: center;
    align-items: center;
    height: 1136px;
    width: 100%;
    .img-wrapper {
      background: url(//img12.360buyimg.com/jrpmobile/jfs/t8956/285/1249806938/50853/8cd3c8f0/59b65f36N05367075.png) no-repeat center center;
      width: 600px;
      height: 800px;
      background-size: 100% auto;
      transform: translate3d(0, -200px, 0);
    }
    .btnDownload {
      @include btn($size: 30px, $padding: 20px);
      width: 470px;
      height: 100px;
      background-image: linear-gradient(270deg, #f75e34 0, #ee2d1b 75%);
      box-shadow: 16px 16px 32px rgba(220,45,30,0.15);
    }
  }
}
// http://img12.360buyimg.com/jrpmobile/jfs/t8956/285/1249806938/50853/8cd3c8f0/59b65f36N05367075.png
</style>
