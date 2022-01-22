<template>
  <div class="h-100">
    <div class="d-flex">
      <div>
        <Sidebar />
      </div>
      <div id="content" class="content" @scroll="getScrollPosition()">
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

import { mapMutations, mapActions } from 'vuex'

export default {
  middleware({ store, redirect }) {
    var user = store.state.modules.user.currentUser
    if (!user) {
      redirect('/auth')
    }
  },
  components: { Sidebar, Header, PlayingBar },
  created() {
    this.getRandomColor()
  },
  methods: {
    ...mapActions(['getRandomColor']),
    ...mapMutations(['setScrollPosition']),
    getScrollPosition() {
      var element = document.getElementById('content')
      if (element.scrollTop < 600) {
        this.setScrollPosition(element.scrollTop)
      }
    },
  },
}
</script>
