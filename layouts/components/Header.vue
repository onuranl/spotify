<template>
  <div class="header d-flex justify-content-between">
    <!-- fıx me -->
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
    <div class="header_user">
      <b-avatar size="28px"></b-avatar>
      <span class="header_user-name">onur3553</span>
      <!-- fıx me -->
      <div class="mr-1">
        <svg role="img" height="16" width="16" viewBox="0 0 16 16">
          <path d="M3 6l5 5.794L13 6z"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      window.history.back()
    },
    goForward() {
      window.history.forward()
    },
  },
}
</script>

<style></style>
