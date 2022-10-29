import axios from 'axios'
import qs from 'qs'

const defaultOptions = {
  method: 'GET',
  baseUrl: 'https://www.dnd5eapi.co/api/',
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params: unknown) => qs.stringify(params, { arrayFormat: 'repeat' }),
}

const Fetch = axios.create(defaultOptions)

export default Fetch
