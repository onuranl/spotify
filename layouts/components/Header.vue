<template>
  <div>
    <div
      class="header d-flex justify-content-between"
      :style="[
        backgroundColor
          ? {
              'background-color': `rgb(${backgroundColor.x}, ${
                backgroundColor.y
              }, ${backgroundColor.z}, ${
                scrollPosition ? 0 + scrollPosition / 300 : ''
              } )`,
            }
          : '',
      ]"
    >
      <div class="d-flex">
        <button @click="goBack" class="header-button">
          <svg
            role="img"
            focusable="false"
            height="24"
            width="24"
            viewBox="0 0 24 24"
          >
            <polyline
              points="16 4 7 12 16 20"
              fill="none"
              stroke="#181818"
            ></polyline>
          </svg>
        </button>
        <button @click="goForward" class="header-button">
          <svg
            role="img"
            focusable="false"
            height="24"
            width="24"
            viewBox="0 0 24 24"
          >
            <polyline
              points="8 4 17 12 8 20"
              fill="none"
              stroke="#181818"
            ></polyline>
          </svg>
        </button>
      </div>
      <div
        class="dropdown"
        @click="dropdown = !dropdown"
        @focusout="dropdown = false"
        tabindex="0"
      >
        <div
          class="header_user"
          :style="[dropdown ? { background: '#282828' } : '']"
        >
          <s-avatar size="28px" />
          <span class="header_user-name">onur3553</span>
          <div class="mr-1">
            <svg role="img" height="16" width="16" viewBox="0 0 16 16">
              <path d="M3 6l5 5.794L13 6z"></path>
            </svg>
          </div>
        </div>
        <div v-if="dropdown" class="dropdown-content">
          <ul>
            <li>
              <button>
                <span> Hesap </span>
                <svg role="img" height="16" width="16" viewBox="0 0 16 16">
                  <path
                    fill-rule="evenodd"
                    d="M15 7V1H9v1h4.29L7.11 8.18l.71.71L14 2.71V7h1zM1 15h12V9h-1v5H2V4h5V3H1v12z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
            <li>
              <button>
                <span> Profil </span>
              </button>
            </li>
            <li>
              <button>
                <span> Oturumu kapat </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SAvatar from '~/components/common/SAvatar.vue'

import { mapState } from 'vuex'

export default {
  components: { SAvatar },
  data() {
    return {
      dropdown: false,
    }
  },
  methods: {
    goBack() {
      window.history.back()
    },
    goForward() {
      window.history.forward()
    },
  },
  computed: mapState(['scrollPosition', 'backgroundColor']),
}
</script>
