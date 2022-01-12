import request from '../../utils/api'

const playlist = {
  namespaced: true,
  state: {
    currentUserPlaylists: [],
  },
  mutations: {
    setCurrentUserPlaylists(state, data) {
      state.currentUserPlaylists = data
    },
  },
  actions: {
    async getCurrentUserPlaylists({ commit }) {
      const result = await request('get', 'me/playlists')
      commit('setCurrentUserPlaylists', result.data.items)
    },
  },
}

export default playlist
