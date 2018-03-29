<template>
  <Panel :showTitle="false" title="导航条" :class="$style.panel">
    <section :class="$style.content">
      <nav :class="$style.navList">
        <router-link :class="$style.item" to="/home">
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t3451/188/644771475/2428/800d7cb7/580f2435Nbfaa8055.png?width=66&height=66" alt="">
          <p>首页</p>
        </router-link>
        <router-link :class="$style.item" to="/money">
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66" alt="">
          <p>理财</p>
        </router-link>
        <router-link :class="$style.item" to="/white">
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66" alt="">
          <p>白条</p>
        </router-link>
        <router-link :class="$style.item" to="/zhong">
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66" alt="">
          <p>众筹</p>
        </router-link>
        <!-- <router-link :class="$style.item" to="/my">
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66" alt="">
          <p>我的</p>
        </router-link> -->
      </nav>
    </section>
  </Panel>
</template>

<script>
import Panel from '../components/Panel'

export default {
  name: 'Navbar',
  components: {
    Panel
  }
}
</script>

<style lang="scss" module>
@import '../assets/css/element.scss';
@import '../assets/css/layout.scss';

.panel {
  @include panel;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100px;
  margin: 0;
  z-index: 999;
  .caption {
    display: none;
  }  
  .navList {
    @include flex(row, block, nowrap);
    justify-content: space-around;
    .item {
      text-align: center;
      font-size: 22px;
      color: #666;
      img {
        width: 44px;
        height: 44px;
        display: inline-block;
        margin: 12px auto 6px;
      }
    }
  }
}
</style>

<style lang="scss">
.layout-navbar {
  .caption {
    display: none;
  }
  margin: 0;
  padding: 0;
}
</style>
