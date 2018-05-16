import Axios from './resources'

export default {
  // getCommonData: (url, params) => Axios.get(`${url}`, {params: params}),
  // getCommonData: (url, params) => Axios.post(`${url}`, { params }),
  getTopicsData: (url, params) => Axios.get(`${url}`, params),
}
