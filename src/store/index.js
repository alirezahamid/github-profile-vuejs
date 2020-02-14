import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../repository/api'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: [],
    username: '',
    activeSection: false,
    showErrorMessage: false
  },
  mutations: {
    pushUser (state, payload) {
      state.userInfo = payload
    },
    pushUsername (state, payload) {
      state.username = payload
    },
    showSection (state, payload) {
      state.activeSection = payload
    },
    showError (state, payload) {
      state.showErrorMessage = payload
    }
  },
  actions: {
    fetchUser ({ commit }) {
      Api.getUser(this.state.username)
        .then((res) => {
          if (res.statusCode = 200) {
            commit('pushUser', res.data)
            commit('showSection', true)
          } else {
            commit('showError', true)
          }
        })
        .catch()
    }
  },
  modules: {
  }
})
