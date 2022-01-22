<template>
  <b-avatar :src="src" :size="size"></b-avatar>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: '28px',
    },
    src: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
