import request from '../../utils/api'

const playlist = {
  namespaced: true,
  state: {
    currentUserPlaylists: [],
    playlistID: '',
    playlistDetail: {},
  },
  getters: {
    currentUserPlaylists: (state) => state.currentUserPlaylists,
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
      if (result.status === 200) {
        commit('setCurrentUserPlaylists', result.data.items)
      }
    },
    async getPlaylistDetail({ state, commit }) {
      const result = await request('get', 'playlists/' + state.playlistID)
      if (result.status === 200) {
        commit('setPlaylistDetail', result.data)
      }
    },
  },
}

export default playlist
