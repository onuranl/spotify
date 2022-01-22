<template>
  <div @click="auth">
    <button style="margin-top: 52px">auth</button>
  </div>
</template>

<script>
import querystring from 'querystring'

export default {
  layout: 'login',
  methods: {
    auth() {
      let url =
        'https://accounts.spotify.com/authorize?' +
        querystring.stringify({
          response_type: 'code',
          client_id: process.env.SPOTIFY_CLIENT_ID,
          scope:
            'user-read-private user-read-email user-read-recently-played user-read-playback-state user-modify-playback-state user-read-currently-playing user-top-read',
          redirect_uri: process.env.SPOTIFY_REDIRECT_URL,
        })
      window.location.href = url
    },
  },
}
</script>

<style></style>
