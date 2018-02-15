const audio = {
  state: {
    musicAllList: [],
    playType: 'lbxh',
    playTypeIndex: 0,
  },
  mutations: {
    setMusicAllList(state, obj) {
      state.musicAllList = obj
    },
    setPlayType(state, playTypeIndex) {
      /*
      * playTypeString:
      * 0.lbxh
      * 1.dqxh
      * 2.sjbf
      * 3.sxbf
      * */
      state.playTypeIndex = playTypeIndex
      switch (playTypeIndex) {
        case 0:
          state.playType = 'lbxh'
          break
        case 1:
          state.playType = 'dqxh'
          break
        case 2:
          state.playType = 'sjbf'
          break
        case 3:
          state.playType = 'sxbf'
          break
      }
    }
  },
  actions: {
    set_MusicAllList({commit}, obj) {
      commit('setMusicAllList', obj)
    }
  },
  getters: {
    getMusicAllList: state => state.musicAllList,
    getPlayType: state => state.playType,
    getPlayTypeIndex: state => state.playTypeIndex
  }
}

export default audio
