<template>
  <article class="">
    <Slider :list="items" cname="slider" />
    <MenuLink :list="menulist" />
  </article>
</template>

<script>
import Slider from '../../components/Slider'
import MenuLink from '../../components/MenuLink'

export default {
  name: 'hslider',
  components: {
    Slider,
    MenuLink
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
      menulist: [
        {
          link: 'download',
          src:
            'https://img12.360buyimg.com/jrpmobile/jfs/t18853/94/1057782448/42435/d084611f/5aba1d97N80d5eb08.jpg?width=750&height=320',
          title: '优惠券'
        },
        {
          link: 'download',
          src:
            'https://img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
          title: '领红包'
        },
        {
          link: 'download',
          src:
            'https://img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
          title: '抢钢镚'
        },
        {
          link: 'download',
          src:
            'https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
          title: '白条提额'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.slider {
  margin-top: 120px;
  img {
    width: 100%;
  }
}
</style>
