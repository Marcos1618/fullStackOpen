import services from './services'
import {useState, useEffect, memo} from 'react'
import DisplayWeather from './DisplayWeather'

const DisplaySingleCountry = memo(({country, apiKey}) => {
    const [capitalGeocode, setCapitalGeocode] = useState(null)

    useEffect(() => {
        if (!country || !apiKey) return

        setCapitalGeocode(null)

        services.getCapitalGeocode(country, apiKey)
            .then(data => {
                setCapitalGeocode(data)
            })
    }, [country, apiKey])
    
    const langList = Object.values(country.languages).map((lang) => <div key={lang}>{lang}</div>)

    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>capital: {country.capital}</p>
            <p>area: {country.area}</p>
            <h3>Languages: </h3>
            <div>{langList}</div>
            <img src={country.flags.png}></img>
            <DisplayWeather capitalGeocode={capitalGeocode} apiKey={apiKey}/>
        </div>
        )
})

export default DisplaySingleCountry