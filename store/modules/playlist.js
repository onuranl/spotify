import request from '../../utils/api'

const playlist = {
  namespaced: true,
  state: {
    currentUserPlaylists: [],
    playlistID: '',
    playlistDetail: {},
  },
  mutations: {
    setCurrentUserPlaylists(state, data) {
      state.currentUserPlaylists = data
    },
    setPlaylistID(state, data) {
      state.playlistID = data
    },
    setPlaylistDetail(state, data) {
      state.playlistDetail = data
    },
  },
  actions: {
    async getCurrentUserPlaylists({ commit }) {
      const result = await request('get', 'me/playlists')
      commit('setCurrentUserPlaylists', result.data.items)
    },
    async getPlaylistDetail({ state, commit }) {
      const result = await request('get', 'playlists/' + state.playlistID)
      commit('setPlaylistDetail', result.data)
    },
  },
}

export default playlist
