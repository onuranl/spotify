import querystring from 'querystring'
import axios from 'axios'

const auth = {
  namespaced: true,
  state: {
    code: '',
    tokens: {},
  },
  mutations: {
    setCode(state, data) {
      state.code = data
    },
    setTokens(state, data) {
      state.tokens = data
    },
    clearState(state) {
      state.code = ''
      state.tokens = {}
      state.user = {
        images: [
          {
            url: '',
          },
        ],
      }

      // track
      state.recentlyPlayed = []
      state.currentPlayback = {}
    },
  },
  actions: {
    async initUser({ state, commit, dispatch }) {
      const payload = {
        code: state.code,
        redirect_uri: process.env.SPOTIFY_REDIRECT_URL,
        grant_type: 'authorization_code',
      }
      await axios
        .post(
          'https://accounts.spotify.com/api/token',
          querystring.stringify(payload),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization:
                'Basic ' +
                new Buffer(
                  process.env.SPOTIFY_CLIENT_ID +
                    ':' +
                    process.env.SPOTIFY_CLIENT_SECRET
                ).toString('base64'),
            },
            json: true,
          }
        )
        .then(async (res) => {
          if (res.status === 200) {
            process.env.TOKEN = res.data.access_token
            commit('setTokens', res.data)

            await dispatch('modules/user/getCurrentUser', '', { root: true })
            await dispatch('modules/playlist/getCurrentUserPlaylists', '', {
              root: true,
            })
          } else {
            console.log(res)
          }
        })
    },
  },
}

export default auth
