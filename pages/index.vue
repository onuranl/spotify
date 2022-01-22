<template>
  <div class="home">
    <s-card />
    <!-- <p v-if="$store.state.modules.user.currentUser">
      {{ $store.store.state.modules.user.currentUser }}
    </p> -->
  </div>
</template>

<script>
import SCard from '~/components/common/SCard.vue'
export default {
  components: { SCard },
  layout: 'default',
}
</script>
