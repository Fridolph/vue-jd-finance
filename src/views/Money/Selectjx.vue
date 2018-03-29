<template>
  <Panel title="理财精选" :class="$style.panel" cname="panel-select">
    <ListRow3 :list="list" cname="licai-jx" />
  </Panel>
</template>

<script>
import Panel from '../../components/Panel'
import ListRow3 from '../../components/ListRow3'

export default {
  name: 'Select',
  components: {
    Panel,
    ListRow3
  },
  data() {
    return {
      list: [
        {
          title: '月度理财',
          desc: '预期年化收益率4.50%',
          iconsrc:
            'https://img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76',
          actionText: '去赚钱'
        },
        {
          title: '季度理财',
          desc: '历史年化回报率5.50%',
          iconsrc:
            'https://img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76',
          actionText: '去赚钱'
        },
        {
          title: '一年理财',
          desc: '历史年化回报率5.80%',
          iconsrc:
            'https://img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76',
          actionText: '去赚钱'
        }
      ]
    }
  }
}
</script>

<style lang="scss" module>
@import '../../assets/css/element.scss';
@import '../../assets/css/layout.scss';
@import '../../assets/css/text.scss';

.panel {
  @include panel;
}
</style>

<style lang="scss">
.panel-select {
  .licai-jx {
    .list-item {
      .info {
        .desc {
          color:#ff3232;
        }
      }
    }
  }
}
</style>