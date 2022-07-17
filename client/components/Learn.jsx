import React, { useEffect, useState } from "react"
import WorldMap from "./WorldMap"
import CountryInfo from "./CountryInfo"
//import functions
import getCountry from "../apis/apiClient"

function Learn() {
  const [country, setCountry] = useState(null)


  //this function will run when a country is clicked in WorldMap
  const countryClicked = async (e) => {
    const id = e.target.id
    setCountry(await getCountry(id))
  }
  // function to close the Country Info
  const closeInfo = e => {
    setCountry(false)
  }

  return (
    <>
      <WorldMap countryClicked={countryClicked} />

      {country && <CountryInfo country={country} closeInfo={closeInfo}/>}
    </>
  )
}

export default Learn
