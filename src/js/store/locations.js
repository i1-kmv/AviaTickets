import api from '../services/apiService'

class Locations {
  constructor(api) {
    this.api = api
    this.countries = null
    this.cities = null
  }
  async init() {
    const responce = await Promise.all([
      this.api.countries(),
      this.api.cities()
    ])
    const [countries, cities] = responce
    this.countries = countries
    this.cities = cities
    return responce
  }
  getCitiesByCountryCode(code) {
    return this.cities.filter(city => city.country_code === code)
  }
}

const locations = new Locations(api)

export default locations