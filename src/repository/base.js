import Axios from 'axios'

export const baseApi = Axios.create({
  baseURL: 'https://api.github.com/'
})
