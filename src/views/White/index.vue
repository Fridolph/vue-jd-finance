<template>
  <div>
    <LayoutHeader />
    <AdA />
    <Fuli />
    <Activity />
    <More />
    <LayoutFooter />
    <Navbar />
  </div>
</template>

<script>
import LayoutHeader from '../../layout/header'
import AdA from './AdA'
import Fuli from './Fuli'
import Activity from './Activity'
import More from './More'
import LayoutFooter from '../../layout/Footer'
import Navbar from '../../layout/Navbar'

export default {
  components: {
    LayoutHeader,
    AdA,
    Fuli,
    Activity,
    More,
    LayoutFooter,
    Navbar
  }
}
</script>
