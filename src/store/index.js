import Vue from 'vue'
import Vuex from 'vuex'
import Audio from './modules/audio'
import showManagement from './modules/showManagement'
import songSheets from './modules/songSheets'
import currentSong from './modules/currentSong'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    allInfo: []
  },
  mutations: {
    setAllInfo(state, obj) {
      state.allInfo = obj
    }
  },
  actions: {
    set_AllInfo({commit}, obj) {
      commit('setAllInfo', obj)
    }
  },
  modules: {
    Audio,
    showManagement,
    songSheets,
    currentSong
  }
})

export default store
