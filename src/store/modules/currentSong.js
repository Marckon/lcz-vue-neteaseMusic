const currentSong={
  state:{
    currentSongInfo:null
  },
  mutations:{
    setCurrentSongInfo(state,songObj){
      state.currentSongInfo=songObj
    },
  },
  getters:{
    getCurrentSongInfo:(state)=>state.currentSongInfo
  }
}
export default currentSong
