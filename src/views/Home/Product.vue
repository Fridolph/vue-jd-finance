<template>
  <Panel title="新品推荐" class="panel">
    <section class="content">
      <div class="arrow">更多尖货 > </div>
      <Slider :options="options" :list="list" cname="product-slider"></Slider>
    </section>
  </Panel>
</template>

<script>
import Panel from '../../components/Panel'
import Slider from '../../components/Slider'

export default {
  name: 'Product',
  components: {
    Panel,
    Slider
  },
  data() {
    return {
      list: [
        {
          href: 'home',
          src:
            '//img12.360buyimg.com/jrpmobile/jfs/t19063/263/1067257870/16513/d7360e92/5ab85da9N8af17d57.jpg?width=335&height=421'
        },
        {
          href: 'home',
          src:
            '//img12.360buyimg.com/jrpmobile/jfs/t12637/325/2370404484/14164/523e69a7/5ab85dd5Ndaf12da2.jpg?width=335&height=421'
        },
        {
          href: 'home',
          src:
            '//img12.360buyimg.com/jrpmobile/jfs/t17317/55/1066024964/35575/444c5252/5ab85ddeNaa593024.jpg?width=335&height=421'
        },
        {
          href: 'home',
          src:
            '//img12.360buyimg.com/jrpmobile/jfs/t16600/39/1049384083/42815/1727a973/5ab85debN56037cfc.jpg?width=335&height=421'
        }
      ],
      options: {
        slidesPerView: 2.3,
        spaceBetween: 30,
        freeMode: true
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true
        // }
      }
    }
  }
}
</script>

<style lang="scss">
.product-slider {
  .swiper-container {
    box-sizing: border-box;
    padding: 0 24px 10px;
    .swiper-slide {
      a {
        display: inline-block;
        width: 100%;
        img {
          width: 100%;
          display: block;
          height: 314px;
          border: 1px solid #fafafa;
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import '../../assets/css/element.scss';
.panel {
  @include panel;
  padding-bototm: 40px;
  .content {
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
  }
}
</style>
