const songSheets = {
  state: {
    songSheets: []
  },
  mutations: {
    setSongSheets(state, data) {
      if(data instanceof  Array){
        data.map(function (item) {
          state.songSheets.push(item)
        })
      }

    else{
       state.songSheets.push(data)
     }
    }
  },
  actions: {
    set_SongSheets({commit}, obj) {
      commit('setSongSheets', obj)
    }
  },
  getters: {
    getSongSheets: (state) => state.songSheets
  }
}

export default songSheets
