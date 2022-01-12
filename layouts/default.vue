<template>
  <div class="h-100">
    <div class="d-flex">
      <div>
        <Sidebar />
      </div>
      <div class="content">
        <Header />
        <Nuxt class="app" />
      </div>
    </div>
    <PlayingBar />
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

<style lang="scss" scoped>
.app {
  margin-top: 64px;
  margin-bottom: 64px;
}
</style>
