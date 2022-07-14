import React, { useState } from 'react'
import WorldMap from './WorldMap'
import CountryInfo from './CountryInfo'
//Need to import an api function from './apiClient'

function Learn() {
  
  const [country, setCountry] = useState([])

  //this function will run when a country is clicked in WorldMap
  const handleClick = (e) => {
    e.PreventDefault()
    apiFunction(e.target.value - clickedCountry) //From apiClient 
      .then(countryInfo => {    //countryInfo is the API data
        setCountry(countryInfo)
      })
  }
  
  return (
    <>
      <WorldMap handleClick={handleClick}/>
      {country && <CountryInfo country={country} />}
    </>
  )
}

export default Learn