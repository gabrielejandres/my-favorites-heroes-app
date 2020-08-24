import { apikey, hash } from '../apiCredentials'
import axios from 'axios'

export const API_DEFAULT_PARAMS =  {
  ts: 1,
  apikey: apikey,
  hash: hash
}

export default axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public'
})
