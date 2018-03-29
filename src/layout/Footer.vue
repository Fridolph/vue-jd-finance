<template>
  <Panel title="公司信息" :showTitle="false" cname="panel-company" :class="$style.panel">
    <div :class="$style.content">
      <section :class="$style.helpWrapper">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252" alt="">
      </section>
      <dl>
        <dd>
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108" alt="">
          <p>客户端</p>
        </dd>
        <dd>
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108" alt="">
          <p>触屏版</p>
        </dd>
        <dd>
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108" alt="">
          <p>电脑版</p>
        </dd>
      </dl>
      <ul>
        <li>
          <p>Copyright © 2004-2018 京东JD.com 版权所有</p>
        </li>
        <li>
          <p>投资有风险，购买需谨慎</p>
        </li>
        <li>
          <p>京东金融平台服务协议</p>
        </li>
        <li>
          <p>京东金融隐私政策</p>
        </li>
      </ul>
    </div>
  </Panel>
</template>

<script>
import Panel from '../components/Panel'

export default {
  name: 'Footer',
  components: {
    Panel
  }
}
</script>

<style lang="scss" module>
@import '../assets/css/element.scss';
@import '../assets/css/layout.scss';
@import '../assets/css/text.scss';

.panel {
  @include panel;  
  .content {
    @include flex;
    .help-wrapper {
      width: 100%;
      > img {
        width: 100%;
        height: 142px;
      }
    }
    dl {
      @include flex(row, block, nowrap);
      background-color: #f5f5f5;
      justify-content: space-between;
      padding-top: 40px;
      margin-bottom: 20px;
      height: 144px;
      dd {
        width: 33.33%;
        text-align: center;
        font-size: 26px;
        @include ellipsis;
        img {
          width: 90px;
          height: 90px;
        }
        p {
          margin-top: 12px;
        }    
      }
    }
    ul {
      padding-bottom: 20px;
      background-color: #f5f5f5;
      li {
        color: #999;
        min-height: 72px;
        text-align: center;
        font-size: 24px;
        line-height: 72px;
        border-top: 1px solid #dedede;
        p {
          padding: 12px;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.panel-company {
  margin-bottom: 100px;
  background-color: #f5f5f5;  
}
</style>
