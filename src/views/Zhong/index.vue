<template>
  <div>
    <LayoutHeader />
    <RSlider />
    <Daily />
    <In />
    <More />
    <LayoutFooter />
    <Navbar />
  </div>
</template>

<script>
import LayoutHeader from '../../layout/header'
import RSlider from './RSlider'
import More from './More'
import In from './In'
import Daily from './Daily'
import LayoutFooter from '../../layout/Footer'
import Navbar from '../../layout/Navbar'

export default {
  components: {
    LayoutHeader,
    Daily,
    RSlider,
    In,
    More,
    LayoutFooter,
    Navbar
  }
}
</script>
