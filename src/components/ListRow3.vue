<template>
  <ul :class="[listClass, cname]">
    <!-- <li :class="$style.listItem">
      <div :class="['flex-item', $style.icon]">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76" alt="">
      </div>
      <div :class="[$style.flexItem, $style.info]">
        <p>月度理财</p>
        <span>预期年化收益率4.50%</span>
      </div>
      <div :class="[$style.flexItem, $style.benifit]">
        去赚钱
      </div>
    </li> -->
    <li class="list-item" v-for="item in list" :key="item.title">
      <div class="flex-item icon">
        <img :src="item.iconsrc" :alt="item.title">
      </div>
      <div class="flex-item info">
        <p class="title">{{item.title}}</p>
        <span class="desc">{{item.desc}}</span>
      </div>
      <div class="flex-item benifit">
        {{item.actionText}}
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    cname: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      listClass: 'list-row-3'
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/layout.scss';
@import '../assets/css/text.scss';

.list-row-3 {
  overflow: hidden;
  .list-item {
    width: 100%;
    height: 140px;
    @include flex(row, block, nowrap);
    justify-content: space-between;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: #dedede;
      bottom: 1px;
      margin-left: 136px;
    }
    &:last-child {
      &::before {
        display: none;
      }
    }    
    .icon {
      flex: 0 0 88px;
      padding: 0 32px;
      padding-top: 26px;
      img {
        width: 88px;
        height: 88px;
      }
    }
    .info {
      // max-width: 35%;
      flex: 1;
      margin-top: 26px;
      p {
        @include ellipsis;
        font-size: 32px;
        color: #333;
        line-height: 44px;
        height: 44px;
      }
      span {
        @include ellipsis;
        display: block;
        line-height: 1.5;
        font-size: 22px;
        color: #999;
      }
    }
    .benifit {
      box-sizing: border-box;
      min-width: 156px;
      text-align: right;
      line-height: 140px;
      font-size: 28px;
      color: #ff801a;
      max-width: 39%;
      padding: 0 36px 0 20px;
      margin-right: 32px;
      background: url(//m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png) center
        right no-repeat;
      background-size: 18px 30px;
    }
  }
}
</style>
