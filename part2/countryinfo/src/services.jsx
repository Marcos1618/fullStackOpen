import axios from 'axios'

const baseURL = `https://studies.cs.helsinki.fi/restcountries/`

const getAll = () => axios.get(`${baseURL}api/all`).then(response => response.data)

const getCountry = (country) => axios.get(`${baseURL}api/name/${country}`)

const getCapitalGeocode = (country, apiKey) => {
    const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${country.capital[0]},${country.cca3}&limit=1&appid=${apiKey}`
    
    console.log('api call '+URL)
    return axios.get(URL)
        .then(response => 
            {console.log('services capital geocode: ', response.data[0])
            return response.data[0]
        })
}

const getWeatherData = (lat, lon, apiKey) => {
    console.log('services weather data '+lat, lon, apiKey)
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    return axios.get(URL)
        .then(response => {
            console.log('services weather data: ', response.data)
            return response.data
        })
}

export default {getAll, getCountry, getCapitalGeocode, getWeatherData}