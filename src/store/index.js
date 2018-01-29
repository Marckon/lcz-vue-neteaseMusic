import Vue from 'vue'
import Vuex from 'vuex'
import Audio from './modules/audio'

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
  }
})

export default store
