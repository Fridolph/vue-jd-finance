<template>
  <Panel title="白条福利" cname="white-fuli">
    <ListRow3 :list="list" />
  </Panel>
</template>

<script>
import Panel from '../../components/Panel'
import ListRow3 from '../../components/ListRow3'

export default {
  components: {
    Panel,
    ListRow3
  },
  data() {
    return {
      list: [
        {
          iconsrc: 'https://img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120',
          title: '开通白条',
          desc: '送百元元礼包',
          actionText: '立即查看'
        },
        {
          iconsrc: 'https://img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120',
          title: '白条提额',
          desc: '金融app专享提额礼包',
          actionText: '去提额'
        }
      ]
    }
  }
}
</script>
