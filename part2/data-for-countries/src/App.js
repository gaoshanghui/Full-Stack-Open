import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FindCountries from './components/FindCountries'
import MatchedCountries from './components/MatchedCountries'
import Country from './components/Country'

const App = () => {
  const [findCountry, setFindCountry] = useState('')
  const [foundCountries, setFoundCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        setFoundCountries(response.data)
      })
  }, [])

  const handleFindCountryChange = (event) => {
    setFindCountry(event.target.value)

  }

  const handleShowCountry = (event) => {
    // Find current clicked button's parent element and get the text content inside of it.
    const countryName = event.target.parentNode.textContent.split(' ')[0]
    setFindCountry(countryName)
  }

  const matchedCountries = () => {
    const countries = foundCountries.filter((country) => {
      const re = new RegExp(findCountry, 'gi');
      return re.test(country.name)
    })
    return countries
  }

  return (
    <div>
      <FindCountries findCountry={findCountry} handleFindCountryChange={handleFindCountryChange} />
      <div>
        {matchedCountries().length === 1 ? <Country matchedCountries={matchedCountries} /> : <MatchedCountries matchedCountries={matchedCountries} showCountry={handleShowCountry} />}
      </div>
    </div>
  )
}

export default App;
