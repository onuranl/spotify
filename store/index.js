const index = {
  namespaced: true,
  state: {
    scrollPosition: 0,
    backgroundColor: {},
  },
  mutations: {
    setScrollPosition(state, data) {
      state.scrollPosition = data
    },
    setRandomColor(state, data) {
      state.backgroundColor = data
    },
  },
  actions: {
    getRandomColor({ commit }) {
      var x = Math.floor(Math.random() * 256)
      var y = Math.floor(Math.random() * 256)
      var z = Math.floor(Math.random() * 256)
      var bgColor = {
        x: x,
        y: y,
        z: z,
      }
      commit('setRandomColor', bgColor)
    },
  },
}

export default index
