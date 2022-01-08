<template>
  <div class="h-100">
    <div class="row mr-0">
      <div class="col-lg-2">
        <Sidebar />
      </div>
      <div class="content col-lg-10 p-0">
        <Header />
        <Nuxt />
      </div>
    </div>
    <PlayingBar class="playingbar" />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import PlayingBar from './components/PlayingBar.vue'

export default {
  components: { Sidebar, Header, PlayingBar },
}
</script>

<style lang="scss" scoped></style>
