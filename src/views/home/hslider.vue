<template>
  <article class="">
    <Slider :list="items" :cname="$style.slider" />
    <section :class="$style.list">
      <div :class="$style.item" v-for="enter in enters" :key="enter.img">
        <router-link :to="{name: enter.link}">
          <img :src="enter.img" :alt="enter.title">
          <h4>{{enter.title}}</h4>
        </router-link>
      </div>
    </section>
  </article>
</template>

<script>
import Slider from '../../components/Slider'

export default {
  name: 'hslider',
  components: {
    Slider
  },
  data() {
    return {
      items: [
        {
          href: 'home',
          src:
            'https://img12.360buyimg.com/jrpmobile/jfs/t18853/94/1057782448/42435/d084611f/5aba1d97N80d5eb08.jpg?width=750&height=320'
        },
        {
          href: 'home',
          src:
            'https://img12.360buyimg.com/jrpmobile/jfs/t19537/55/1092114132/37099/85051881/5aba1dcaN4f40b17f.png?width=750&height=320'
        },
        {
          href: 'home',
          src:
            'https://img12.360buyimg.com/jrpmobile/jfs/t15928/296/2730338551/16846/f046f30c/5ab8d046N9388ec34.png?width=750&height=320'
        },
        {
          href: 'home',
          src:
            'https://img12.360buyimg.com/jrpmobile/jfs/t19336/49/1103524122/49905/2c62f052/5aba1d5aN77b72fa9.jpg?width=750&height=320'
        }
      ],
      enters: [
        // {href: '', img: '', title: ''}
        {
          link: 'youhui',
          img:
            'https://img12.360buyimg.com/jrpmobile/jfs/t18853/94/1057782448/42435/d084611f/5aba1d97N80d5eb08.jpg?width=750&height=320',
          title: '优惠券'
        },
        {
          link: 'hongbao',
          img:
            'https://img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
          title: '领红包'
        },
        {
          link: 'gangbeng',
          img:
            'https://img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
          title: '抢钢镚'
        },
        {
          link: 'baitiao',
          img:
            'https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
          title: '白条提额'
        }
      ]
    }
  }
}
</script>

<style lang="scss" module>
@import '../../assets/css/element.scss';

.slider {
  margin-top: 120px;
  img {
    width: 100%;
  }
}
.list {
  @include list(row);
  background-color: #fff;
  padding-top: 40px;
  padding-bottom: 20px;
  justify-content: space-around;

  .item {
    text-align: center;
    img {
      display: inline-block;
      width: 90px;
      height: 90px;
    }
    h4 {
      font-size: 26px;
      margin-top: 12px;
      color: #666;
    }
  }
}
</style>
