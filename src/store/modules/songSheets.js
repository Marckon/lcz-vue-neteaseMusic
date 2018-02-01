const songSheets = {
  state: {
    songSheets: []
  },
  mutations: {
    setSongSheets(state, data) {
       state.songSheets.push(data)
    }
  },
  actions: {
    set_SongSheets({commit}, obj) {
      commit('setSongSheets', obj)
    }
  },
  getters: {
    getSongSheets: (state) => {
        return  state.songSheets
    }
  }
}

export default songSheets
