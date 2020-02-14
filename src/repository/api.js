import { baseApi } from './base'

export default {

  getUser: async function (username) {
    const response = await baseApi.get(`users/${username}`)
    return response
  }
}
