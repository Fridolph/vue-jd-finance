<template lang="html">
  <div :class="$style.pageMoney">
    <LayoutHeader />
    <MSlider />   
    <AdA />
    <Money />
    <AdB />
    <Selectjx />
    <LayoutFooter />
    <Navbar />
  </div>
</template>

<script>
import LayoutHeader from '../../layout/header'
import MSlider from './MSlider'
import AdA from './AdA'
import AdB from './AdB'
import Money from './Money'
import Selectjx from './Selectjx'
import LayoutFooter from '../../layout/Footer'
import Navbar from '../../layout/Navbar'

export default {
  components: {
    LayoutHeader,
    MSlider,
    AdA,
    AdB,
    Money,
    Selectjx,
    LayoutFooter,
    Navbar
  }
}
</script>

<style lang="scss" module>
.page-money {
  font-size: 80px;
}
</style>
