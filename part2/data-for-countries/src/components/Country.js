import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Country = ({ matchedCountries }) => {
  const [weather, setWeather] = useState({})

  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY
    const country = matchedCountries()[0]
    
    axios
      .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
      .then((response) => {
        setWeather(response.data.current)
      })
  }, [matchedCountries])

  return (
    <div>
      <h2>{matchedCountries()[0].name}</h2>
      <p>capital: {matchedCountries()[0].capital}</p>
      <p>population: {matchedCountries()[0].population}</p>
      <h3>Spoken languages</h3>
      <ul>
        {matchedCountries()[0].languages.map((language) => <li key={language.iso639_1}>{language.name}</li>)}
      </ul>
      <div>
        <img src={matchedCountries()[0].flag} alt={matchedCountries()[0].name}/>
      </div>
      <h3>Weather in {matchedCountries()[0].capital}</h3>
      <p>temperature: {weather.temperature} Celcius</p>
      <img src={weather.weather_icons} alt={weather.weather_descriptions}/>
    </div>
  )
}

export default Country