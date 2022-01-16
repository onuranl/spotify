<template>
  <playlist v-if="playlist" :detail="playlist" />
</template>

<script>
import Playlist from '~/components/shared/Playlist.vue'

import { mapMutations, mapActions } from 'vuex'

export default {
  components: { Playlist },
  data() {
    return {
      playlist: {},
      date: this.$moment().format('LTS'),
    }
  },
  async created() {
    await this.setPlaylistID(this.$route.params.id)
    await this.getPlaylistDetail().then(() => {
      this.playlist = this.$store.state.modules.playlist.playlistDetail
    })
  },
  methods: {
    ...mapMutations({
      setPlaylistID: 'modules/playlist/setPlaylistID',
    }),
    ...mapActions({
      getPlaylistDetail: 'modules/playlist/getPlaylistDetail',
    }),
  },
}
</script>
