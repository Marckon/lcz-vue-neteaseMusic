const audio = {
  state: {
    musicAllList: [],
    playType: 'lbxh',
    playTypeIndex: 0,
    audioEle:{},
    isPlaying:false,
    musicDuration:0,
    musicCurrentTime:0,
    musicCanPlay:false,
  },
  mutations: {
    setMusicAllList(state, obj) {
      state.musicAllList = obj
    },
    setPlayPause(state){
      state.isPlaying=!state.isPlaying
      // console.log(state.audioEle)
      if(state.audioEle){
        //若有audio元素，根据当前的play状态控制音频的播放
        state.isPlaying?state.audioEle.play():state.audioEle.pause()
      }
    },
    setMusicCanPlay(state){
      state.musicCanPlay=true
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
    },
    setAudioEle(state,obj){
      state.audioEle=obj
    },
    setMusicDuration(state,audioEle){
      state.musicDuration=audioEle.duration
    },
    setMusicCurrentTime(state,audioEle){
      state.musicCurrentTime=audioEle.currentTime
    }
  },
  actions: {
    set_MusicAllList({commit}, obj) {
      commit('setMusicAllList', obj)
    },
    set_AudioEle({commit},obj){
      commit('setAudioEle',obj)
    }
  },
  getters: {
    getMusicAllList: state => state.musicAllList,
    getPlayType: state => state.playType,
    getPlayTypeIndex: state => state.playTypeIndex,
    getPlayState:state=>state.isPlaying,
    getMusicDuration:state=>state.musicDuration,
    getMusicCurrentTime:state=>state.musicCurrentTime,
    getMusicCanPlay:state=>state.musicCanPlay,
    getAudioEle:state=>state.audioEle
  }
}

export default audio
