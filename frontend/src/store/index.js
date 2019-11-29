import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    counter: 0,
    meetups: []
  },
  mutations: {
    SET_COUNTER(state, newCount) {
      state.counter = newCount
    },
    SET_MEETUPS(state, data) {
      state.meetups = data
    }
  },
  actions: {
    incrementCounter({ commit, state }) {
      const newCount = state.counter + 1
      commit('SET_COUNTER', newCount)
    },
    async fetchMeetups({ commit }) {
      const result = await axios
      .get('/Users/zuni4ka/Projects/wtmb-js-crash-course/frontend/src/data.json')
      commit('SET_MEETUPS', result.data)
    }
  },
  modules: {
  }
})