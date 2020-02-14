import { baseApi } from './base'

export default {

  getUser: async function (username) {
    const response = await baseApi.get(`users/${username}`)
    return response
  },
  getUserRepos: async function (username) {
    const response = await baseApi.get(`users/${username}/repos`)
    return response
  }
}
