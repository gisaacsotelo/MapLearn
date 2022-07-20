import React, { useEffect, useState } from "react"
import WorldMap from "./WorldMap"
import CountryInfo from "./CountryInfo"
//import functions
import getCountry from "../apis/apiClient"
import { AnimatePresence } from "framer-motion"

function Learn() {
  const [country, setCountry] = useState(null)
  const countryGreen = 'rgba(113, 172, 102, 0.418)'



  //this function will run when a country is clicked in WorldMap
  const countryClicked = async (e) => {
    const id = e.target.id
    setCountry(await getCountry(id))
    const elMapa = document.querySelectorAll(`path#${id}`)
    const elMapaArray = Array.prototype.slice.call(elMapa)
    elMapaArray[0].style.fill = 'rgba(54, 97, 47, 0.624)';
  }
  // function to close the Country Info
  const closeInfo = country => {
    const code = country.cca2
    const selectedCountry = document.querySelectorAll(`path#${code}`)
    const selectedCountryArr = Array.prototype.slice.call(selectedCountry)
    selectedCountryArr[0].style.fill = countryGreen
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
