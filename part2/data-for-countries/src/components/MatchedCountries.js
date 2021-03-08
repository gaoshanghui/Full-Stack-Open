import React from 'react'

const MatchedCountries = ({ matchedCountries, showCountry}) => {
  return (
    <ul>
      {matchedCountries().length > 10 ? 
      "Too many matches, specify another filter" 
      : 
      matchedCountries().map((country) => <li key={country.numericCode}>{country.name} <button onClick={showCountry}>show</button></li>)}
    </ul>
  )
}

export default MatchedCountries