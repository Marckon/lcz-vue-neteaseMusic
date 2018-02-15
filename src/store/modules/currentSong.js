const currentSong={
  state:{
    currentSongInfo:null,
    isPlaying:false,
  },
  mutations:{
    setCurrentSongInfo(state,songObj){
      state.currentSongInfo=songObj
    },
    setPlayPause(state){
      state.isPlaying=!state.isPlaying
    }
  },
  getters:{
    getCurrentSongInfo:(state)=>state.currentSongInfo,
    getPlayState:state=>state.isPlaying
  }
}
export default currentSong
