import services from './services'
import {useEffect, useState} from 'react'

const DisplayWeather = ({capitalGeocode, apiKey}) => {

    const [weatherData, setWeatherData] = useState(null)
    const [weatherIconURL, setWeatherIconURL] = useState(null)

    useEffect(() => {
        if (!capitalGeocode) return
        services.getWeatherData(capitalGeocode.lat, capitalGeocode.lon, apiKey)
            .then(data => {
                setWeatherData(data)
                const URL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
                setWeatherIconURL(URL)
                console.log(URL)
            })
    }, [capitalGeocode])

    if (!capitalGeocode || !weatherData) {
         return <p>loading...</p>
    }
    

    return (
        <div>
            <h3>Weather in {weatherData.name}</h3>
            <p>Temp: {weatherData.main.temp}</p>
            <p>Wind speed: {weatherData.wind.speed} m/s</p>
            <img src={weatherIconURL}></img>
        </div>
    )
}

export default DisplayWeather