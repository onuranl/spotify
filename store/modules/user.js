import request from '../../utils/api'

const user = {
  namespaced: true,
  state: {
    currentUser: null,
  },
  getters: { currentUser: (state) => state.currentUser },
  mutations: {
    setCurrentUser(state, data) {
      state.currentUser = data
    },
  },
  actions: {
    async getCurrentUser({ commit }) {
      const result = await request('get', 'me')
      if (result.status === 200) {
        commit('setCurrentUser', result.data)
      }
    },
  },
}

export default user
