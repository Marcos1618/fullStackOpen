import { useState, useEffect } from 'react'
import services from './services'
import Display from './Display'

const apiKey = import.meta.env.VITE_API_KEY

function App() {

  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    services.getAll()
      .then(countries => setAllCountries(countries))
    },
    [])

  useEffect(() => {
    setSelectedCountry(null)
  }, [country])

  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase()
    console.log('input ', value)
    setCountry(value)
  }
  
  useEffect(() => {
    const handler = setTimeout(() => {
      if (!country) {
        setCountries([])
        return
      }
      const filtered = allCountries.filter(c =>
        c.name.common.toLowerCase().includes(country)
      )
      setCountries(filtered)
    }, 200)

    return () => clearTimeout(handler)
  }, [country, allCountries])
  
  
  return (
    <>
      <div>
        <p>find countries</p>
        <input value={country} onChange={(handleInputChange)}></input>
      </div>
      <div>
        <Display countries={countries} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} apiKey={apiKey}/>
      </div>
    </>
  )
}

export default App
