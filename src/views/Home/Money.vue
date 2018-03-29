<template>
  <Panel title="理财精选" :class="$style.panel">
    <section :class="$style.content">
      <dl :class="$style.item" v-for="item in items" :key="item.title">
        <dt>{{item.title}} <label>{{item.label}}</label></dt>
        <dd :class="$style.value">{{item.value}}</dd>
        <dd :class="$style.desc">{{item.desc}}</dd>
      </dl>      
    </section>
  </Panel>
</template>

<script>
import Panel from '../../components/Panel'

export default {
  name: 'Money',
  components: {
    Panel
  },
  data() {
    return {
      items: [
        {
          title: '定期理财',
          label: '90天可质押',
          value: '5.50%',
          desc: '历史年化结算利率'
        },
        {
          title: '固收理财',
          label: '理财推荐',
          value: '5.80%',
          desc: '综合年化收益率'
        },
        {
          title: '基智账户',
          label: '组合投资',
          value: '8%-10%',
          desc: '止盈年化收益率'
        },
        {
          title: '小白基金',
          label: '超短期',
          value: '5.00%',
          desc: '7日年化收益率'
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
  .content {
    background-color: #fff;
    box-sizing: border-box;
    border-top: 1px solid #dedede;
    @include flex(row);
    justify-content: start;
    .item {
      width: 50%;
      box-sizing: border-box;
      padding-left: 32px;
      height: 220px;
      box-sizing: border-box;
      position: relative;
      &::after {
        content: '';
        position:absolute;
        right: 0;
        top: 48px;
        height: 136px;
        width: 1px;
        display: block;
        background-color: #ddd;
      }
      dt {
        margin: 34px 0 16px;
        font-size: 30px;
        font-weight: bold;
        height: 42px;
        line-height: 42px;        
        label {
          height: 34px;
          line-height: 34px;
          font-size: 22px;
          padding: 0 8px;
          color:#ff5155;
          text-align: center;
          position: relative;
          top: -3px;
          &::after {
            content: '';
            position:absolute;
            left: 0;
            top: 0;
            width: 200%;
            min-width: 104px;
            height: 200%;
            line-height: 200%;
            border: 2px solid #ff5155;
            transform-origin: 0 0;
            transform: scale(0.5, 0.5);
            border-radius: 4px;
          }
        }
      }
      .value {
        font-weight: bold;
        color:#ff5155;
        line-height: 58px;
        height: 58px;
        font-size: 40px;
        @include ellipsis;
      }
      .desc {
        font-size: 24px;
        height: 34px;
        line-height: 34px;
        color: #999;
        @include ellipsis;
      }
      &:nth-last-child(1), &:nth-last-child(2) {
        border-top: 1px solid #dedede;
      }
    }    
  }
}
</style>
