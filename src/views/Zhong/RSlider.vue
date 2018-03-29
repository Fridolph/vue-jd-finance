<template>
  <Panel :showTitle="false" title="金融头条" class="panel" cname="panel-zhong">
    <section class="content">
      <swiper :options="options">
        <swiper-slide>
          更多精彩，请访问的我的github  <em></em>
        </swiper-slide>
        <swiper-slide>
          欢迎访问本站！star一下嘛 <em></em>
        </swiper-slide>
        <swiper-slide>
          回到首页 www.fuyinsheng.top <em></em>
        </swiper-slide>
      </swiper>
    </section>
  </Panel>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import Panel from '../../components/Panel'

export default {
  name: 'RSlider',
  components: {
    swiper,
    swiperSlide,
    Panel
  },
  data() {
    return {
      options: {
        autoplay: true,
        loop: true,
        direction: 'vertical'
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/element.scss';
@import '../../assets/css/text.scss';

.panel {
  @include panel;
  .content {
    margin-top: 120px;
    height: 72px;
    line-height: 72px;
    overflow: hidden;    
    padding-left: 180px;
    background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left top no-repeat;
  }  
}

.swiper-container-vertical {
  height: 72px;
  .swiper-slide {
    font-size: 28px;
    color: #333;    
    position:relative;
    padding-right: 42px;
    @include ellipsis;
    em {
      display: inline-block;
      width: 18px;
      height: 30px;
      position:absolute;
      right: 20px;
      top: 22px;
      background: url(//m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png) center
      right no-repeat;
      background-size: 18px 24px;
    }
  }
}
</style>
