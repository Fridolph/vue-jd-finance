<template>
  <Panel title="更多服务">
    <MenuLink :list="menulist" cname="white-more" />
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
      menulist: [
        {
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t4609/245/3975151339/11019/766e751d/590aca78Nf15a7947.png?width=135&height=135',
          title: '小白卡',
          link: 'home'
        },
        {
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t5269/224/1031852465/12646/40e0f799/590aca55N22a6f274.png?width=135&height=135',
          title: '白条商城',
          link: 'home'
        },
        {
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t5095/216/1045040184/12370/564ae632/590ac7deN9a0eac2a.png?width=135&height=135',
          title: '消费分期',
          link: 'home'
        },
        {
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t8311/300/1385281399/9501/130a0046/59b8da06N14f62cf3.png?width=120&height=120',
          title: '借钱',
          link: 'home'
        },
        {
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
          title: '白条提额',
          link: 'home'
        },
        {
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t4417/98/4154366136/13785/5433ca92/590ac8afN5dd91d6e.png?width=135&height=135',
          title: '白条闪付',
          link: 'home'
        },
        {
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t4453/75/4132459214/14188/939b7f34/590ac860N752d5738.png?width=135&height=135',
          title: '小白会玩',
          link: 'home'
        },
        {
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t5371/323/1038197138/12031/3ec72f6c/590aca20N089fd34a.png?width=135&height=135',
          title: '钢镚',
          link: 'home'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.white-more {
  padding-top: 0;
}
</style>

