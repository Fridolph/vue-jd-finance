<template lang="html">
  <div :class="$style.pageHome">
    <LayoutHeader />
    <HSlider />
    <Notice />
    <Money />
    <Product />
    <Life />
    <LayoutFooter />
    <Navbar />
  </div>
</template>

<script>
import LayoutHeader from '../../layout/header'
import HSlider from './HSlider'
import Notice from './Notice'
import Money from './Money'
import Product from './Product'
import Life from './Life'
import LayoutFooter from '../../layout/Footer'
import Navbar from '../../layout/Navbar'

export default {
  components: {
    LayoutHeader,
    HSlider,
    Notice,
    Money,
    Product,
    Life,
    LayoutFooter,
    Navbar
  }
}
</script>

<style lang="scss" module>
.page-home {
  font-size: 80px;
}
</style>
