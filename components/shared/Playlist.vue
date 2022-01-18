<template>
  <div v-if="detail" class="playlist-page">
    <div class="playlist-page_top">
      <div
        class="playlist-page_top-background"
        :style="[
          backgroundColor
            ? {
                'background-color': `rgb(${backgroundColor.x}, ${backgroundColor.y}, ${backgroundColor.z})`,
              }
            : '',
        ]"
      ></div>
      <div
        class="playlist-page_top-background"
        style="
          background: linear-gradient(transparent 0, rgba(0, 0, 0, 0.5) 100%);
        "
      ></div>
      <div class="playlist-page_top-image">
        <div
          v-if="detail.images && detail.images[0].url"
          class="playlist-page_top-image-content"
        >
          <img :src="detail.images[0].url" />
        </div>
      </div>
      <div class="playlist-page_top-info">
        <h2>çalma listesi</h2>
        <h1>{{ detail.name }}</h1>
        <div>
          <div class="playlist-page_top-info-user">
            <s-avatar size="24px" />
            <nuxt-link to="/collection/tracks">onur3553</nuxt-link>
          </div>
          <span class="playlist-page_top-info-track">
            122 şarkı <span></span>
          </span>
        </div>
      </div>
    </div>
    <div
      class="playlist-page-background"
      :style="[
        backgroundColor
          ? {
              'background-color': `rgb(${backgroundColor.x}, ${backgroundColor.y}, ${backgroundColor.z})`,
            }
          : '',
      ]"
    ></div>
    <div class="playlist-page_play-button" id="scroll">
      <div>
        <button>play button</button>
      </div>
    </div>
    <div v-if="detail.tracks" class="playlist-page_table">
      <s-table :items="detail.tracks.items" />
    </div>
  </div>
</template>

<script>
import SAvatar from '~/components/common/SAvatar.vue'
import STable from '~/components/common/STable.vue'

import { mapState } from 'vuex'

export default {
  components: { SAvatar, STable },
  props: {
    detail: {},
  },
  computed: mapState(['backgroundColor']),
}
</script>
