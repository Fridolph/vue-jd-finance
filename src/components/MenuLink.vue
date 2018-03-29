<template>
  <section v-if="list.length === 0" :class="[menuClass, cname]"></section>
  <section v-else :class="[menuClass, cname]">
    <div class="item" v-for="item in list" :key="item.title">
      <router-link :to="'/' + item.link">
        <img :src="item.src" :alt="item.title">
        <h4>{{item.title}}</h4>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MenuLink',
  props: {
    cname: { type: String, default: '' },
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      menuClass: 'menu-link'
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/layout.scss';

.menu-link {
  @include flex(row, block, wrap);
  background-color: #fff;
  padding-top: 40px;
  padding-bottom: 20px;
  justify-content: flex-start;

  .item {
    text-align: center;
    width: 25%;
    margin: 40px 0;
    &:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(4) {
      margin: 0;
    }   
    img {
      display: inline-block;
      width: 90px;
      height: 90px;
    }
    h4 {
      font-size: 26px;
      margin-top: 12px;
      color: #666;
    }
  }
}
</style>
