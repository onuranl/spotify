<template>
  <div></div>
</template>

<script>
export default {
  layout: 'login',
  middleware({ store, redirect, route }) {
    if (route.query.code) {
      store.commit('modules/auth/setCode', route.query.code)
      store
        .dispatch('modules/auth/initUser')
        .then(() => {
          redirect({ path: '/' })
        })
        .catch(() => {
          redirect('/auth')
        })
    } else {
      redirect('/auth')
    }
  },
}
</script>
