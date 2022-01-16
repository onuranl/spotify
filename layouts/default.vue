<template>
  <div class="h-100">
    <div class="d-flex">
      <div>
        <Sidebar />
      </div>
      <div class="content">
        <Header />
        <Nuxt />
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
