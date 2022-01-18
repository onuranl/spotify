<template>
  <table v-if="items" class="table table-borderless">
    <thead
      :style="[
        scrollPosition && scrollPosition > 380
          ? {
              background: '#181818',
              'border-bottom': '1px solid rgba(255,255,255,.1)',
              'box-shadow': '0 -1px 0 0 #181818',
            }
          : '',
      ]"
    >
      <tr>
        <th scope="col" class="text-center" style="width: 5%">#</th>
        <th scope="col" style="width: 30%">Başlık</th>
        <th scope="col" style="width: 20%">Albüm</th>
        <th scope="col" style="width: 15%">Tarih Eklendi</th>
        <th scope="col" class="text-right" style="width: 10%">
          <svg
            role="img"
            style="margin-right: 32px"
            height="16"
            width="16"
            viewBox="0 0 16 16"
          >
            <path
              d="M7.999 3h-1v5h3V7h-2V3zM7.5 0a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 14C3.916 14 1 11.084 1 7.5S3.916 1 7.5 1 14 3.916 14 7.5 11.084 14 7.5 14z"
            ></path>
            <path fill="none" d="M16 0v16H0V0z"></path>
          </svg>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <th scope="row" class="text-center">
          <div style="margin-top: 12px">
            <span style="color: #b3b3b3">{{ index }}</span>
          </div>
        </th>
        <td class="d-flex align-items-center justify-self-start">
          <div v-if="item.track.album.images[2]">
            <img :src="item.track.album.images[2].url" />
          </div>
          <div>
            <p class="title m-0">{{ item.track.name }}</p>
            <span class="sub-title" style="color: #b3b3b3">
              <nuxt-link style="color: #b3b3b3" to="/">{{
                item.track.artists[0].name
              }}</nuxt-link>
            </span>
          </div>
        </td>
        <td>
          <p class="sub-title" style="margin-top: 12px">
            {{ item.track.album.name }}
          </p>
        </td>
        <td class="sub-title">
          <p class="sub-title" style="margin-top: 12px">
            {{ $moment(item.added_at).fromNow() }}
          </p>
        </td>
        <td>
          <div
            class="d-flex justify-content-end"
            style="margin-top: 12px; margin-right: 30px"
          >
            <div style="margin-right: 16px">
              <svg
                role="img"
                height="16"
                width="16"
                viewBox="0 0 16 16"
                class="text-success"
              >
                <path fill="none" d="M0 0h16v16H0z"></path>
                <path
                  d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"
                ></path>
              </svg>
            </div>
            <p class="sub-title" style="min-width: 36px">
              {{ millisToMinutesAndSeconds(item.track.duration_ms) }}
            </p>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    items: [],
  },
  computed: mapState(['scrollPosition']),
  methods: {
    millisToMinutesAndSeconds(millis) {
      var minutes = Math.floor(millis / 60000)
      var seconds = ((millis % 60000) / 1000).toFixed(0)
      return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
    },
  },
}
</script>
