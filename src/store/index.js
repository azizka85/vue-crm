import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'
import category from './category'
import record from './record'
import fixerConfig from '@/utils/fixer.config.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  actions: {
    async fetchCurrency({ commit }) {
      try {
        const key = fixerConfig.key
        const res = await fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,KZT,RUB`)
        return await res.json()        
      } catch(e) {
        commit('setError', e)
      }
    }
  },
  getters: {
    error: s => s.error
  },
  modules: { auth, info, category, record }
})
