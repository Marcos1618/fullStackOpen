import DisplaySingleCountry from './DisplaySingleCountry'

const Display = ({countries, selectedCountry, setSelectedCountry, apiKey}) => {

    const handleSetSelectedCountry = (country) => {
        console.log('button pressed '+ country.name.common)
        setSelectedCountry(country)
    }

    if (selectedCountry){
        return (
            <div><DisplaySingleCountry country={selectedCountry} apiKey={apiKey}/></div>
        )
    }
    if (countries.length > 10){
        return (<div>Make a more specific search</div>)
    }
    if (countries.length > 1) {
        return (
            <div>
                {countries.map(country => 
                    <div key={country.cca3}>
                        {country.name.common} <button onClick={() => handleSetSelectedCountry(country)}>Show</button>
                    </div>)}
            </div>
        )
    }
    if (countries.length == 1){
        return(
            <DisplaySingleCountry country={countries[0]} apiKey={apiKey}/>
        )
    }
}

export default Display