import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articals:[]
  },
  mutations: {
    setArtic(state,date){
      state.articals = data
    }
  },
  actions: {
  },
  modules: {
  }
})
