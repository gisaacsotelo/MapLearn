import React, { useState } from "react"
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
    const elMapa = document.querySelectorAll('path')
    console.log(`I got: `, elMapa)
  }

  return (
    <>
      <WorldMap countryClicked={countryClicked} />

      {country && <CountryInfo country={country} />}
    </>
  )
}

export default Learn
