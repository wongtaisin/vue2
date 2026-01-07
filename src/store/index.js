import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import modules from './store'

Vue.use(Vuex)
const store = new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })],
  modules
})

export default store