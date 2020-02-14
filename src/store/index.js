import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../repository/api'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: [],
    username: ''
  },
  mutations: {
    pushUser (state, payload) {
      state.userInfo = payload
    },
    pushUsername (state, payload) {
      state.username = payload
    }
  },
  actions: {
    fetchUser ({ commit }) {
      Api.getUser(this.username)
        .then((res) => {
          commit('pushUser', res.data)
        })
        .catch()
    }
  },
  modules: {
  }
})
