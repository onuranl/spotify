<template>
  <Nuxt />
</template>

<script>
export default {
  middleware({ store, redirect }) {
    var user = store.state.modules.user.currentUser
    if (user) {
      redirect('/')
    }
  },
}
</script>
