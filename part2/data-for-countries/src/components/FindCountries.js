import React from 'react'

const FindCountries = ({ findCountry, handleFindCountryChange }) => {
  return (
    <>
      <h2>Find countries</h2>
      <input value={findCountry} onChange={handleFindCountryChange} />
    </>
  )
}

export default FindCountries