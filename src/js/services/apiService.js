import axios from 'axios'
import config from '../config/api'


class Api {
  constructor(config) {
    this.config = config.url
  }
  async countries(){
    try{
      const response = await axios.get(`${this.url}/countries`)
      return response.data
    }catch(err) {
      return Promise.reject(err)
    }
  }
  async cities(){
    try{
      const response = await axios.get(`${this.url}/cities`)
      return response.data
    }catch(err) {
      return Promise.reject(err)
    }
  }
  async prices(){}
}

const api = new Api(сonfig)

export default api