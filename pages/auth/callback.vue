<template>
  <div></div>
</template>

<script>
export default {
  layout: 'login',
  async created() {
    if (this.$route.query.code) {
      this.$store.commit('modules/auth/setCode', this.$route.query.code)
      await this.$store.dispatch('modules/auth/initUser')
      await this.$router.push('/')
    } else {
      this.$router.push('/auth')
    }
  },
}
</script>
