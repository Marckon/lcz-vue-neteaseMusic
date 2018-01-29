const audio={
  state:{
    musicAllList:[]
  },
  mutations:{
    setMusicAllList(state,obj){
      state.musicAllList=obj
    }
  },
  actions:{
    set_MusicAllList({commit},obj){
      commit('setMusicAllList',obj)
    }
  },
  getters:{
    getMusicAllList: state=>state.musicAllList
  }
}

export default audio
