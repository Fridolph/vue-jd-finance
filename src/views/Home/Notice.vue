<template>
  <Panel title="新手特权" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item">
        <h4>下载APP<span :class="$style.red">送888元礼包</span></h4>
        <p :class="$style.gray">新手专享</p>
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100" alt="">
      </div>
      <div :class="$style.item">
        <ul>
          <li>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png?width=200&height=200" alt="">
            <h4 :class="$style.red">领128元新手礼包</h4>
            <p :class="$style.gray">立即开通</p>
          </li>
          <li>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png?width=200&height=200" alt="">
            <h4>打白条<span :class="$style.red">享免息</span></h4>  
            <p :class="$style.gray">立即开通享好礼</p>
          </li>
        </ul>
      </div>
    </section>
  </Panel>
</template>

<script>
import Panel from '../../components/Panel'

export default {
  name: 'Notice',
  components: {
    Panel
  }
}
</script>

<style lang="scss" module>
@import '../../assets/css/element.scss';
.panel {
  @include panel;  
  .content {
    @include list(row);
    border-top: 1px solid #dedede;
    .item {
      width: 50%;
      box-sizing: border-box;
      &:first-child {
        padding: 32px 20px;
        text-align: center;
        border-right: 1px solid #dedede;
        img {
          width: 132px;
          height: 132px;
          margin: 20px auto 0
        }
      }
      h4 {
        font-size: 26px;
        line-height: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .red {color:red;}
      .gray {
        color:#999;
        font-size: 24px;
      }
      p{
        margin: 6px 0;
        font-size: 12px;
      }
      ul {
        width: 100%;
        li {
          height: 144px;
          width: 100%;
          padding: 32px 28px;
          box-sizing: border-box;
          &:first-child {
            border-bottom: 1px solid #dedede;
          }
          img{
            width: 80px;
            height: 80px;
            float: right;
          }
        }
      }
    }
  }
}
</style>