import Axios from 'axios'

export const baseApi = Axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    'user-agent': 'Some cool app'
  },
  timeout: 5000
})
