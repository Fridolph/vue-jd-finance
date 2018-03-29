<template>
  <Panel title="生活服务" :class="$style.panel">
    <ul :class="$style.content">
      <li :class="$style.item" v-for="item in items" :key="item.desc">
        <div :class="$style.conWrap">
          <img :src="item.src" alt="" />
          <p>{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </Panel>
</template>

<script>
import Panel from '../../components/Panel'

export default {
  name: 'Life',
  components: {
    Panel
  },
  data() {
    return {
      items: [
        {
          desc: '旅游',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90'
        },
        {
          desc: '医美',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90'
        },
        {
          desc: '房抵贷',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t13051/63/2559290659/4702/e4068917/5a4f2693N937f1905.png?width=88&height=88'
        },
        {
          desc: '驾校',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90'
        },
        {
          desc: '分期用',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t14896/125/1435676873/3668/a8b392f7/5a4f26edN6cdfda66.png?width=88&height=88'
        }
      ]
    }
  }
}
</script>

<style module lang="scss">
@import '../../assets/css/element.scss';
@import '../../assets/css/layout.scss';
@import '../../assets/css/text.scss';

.panel {
  @include panel;
  .content {
    @include flex(row, block, nowrap);
    justify-content: space-between;
    text-align: center;
    padding-bottom: 40px;
    .item {
      flex: 1;      
      .con-wrap {
        width: 100%;        
      }
      p {
        font-size: 26px;
        color:#666;
        margin-top: 6px;
        @include ellipsis;
      }
    }
  }
}
</style>
