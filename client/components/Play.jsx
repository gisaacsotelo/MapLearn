import React, { useEffect, useState } from "react"
// import components
import WorldMap from "./WorldMap"
import CountryInfo from "./CountryInfo"
import LeaderBoard from "./LeaderBoard"
//import functions
import getCountry from "../apis/apiClient"
import { AnimatePresence } from "framer-motion"

function Play() {
  const [country, setCountry] = useState(null)
  const [showLeaderBoard, setyShowLeaderBoard] = useState(false)

  //this function will run when a country is clicked in WorldMap
  const countryClicked = async (e) => {
    const id = e.target.id
    // setCountry(await getCountry(id))
    const countriesDOM = document.querySelector(`path#${id}`)
    // const elMapaArray = Array.prototype.slice.call(elMapa)
    // elMapaArray[0].style.fill = '#aeeb2bcf';
    console.log(countriesDOM)
  }
  // function to close the Country Info
  const closeInfo = country => {}
 

  return (
    <>
      <AnimatePresence>
        <WorldMap countryClicked={countryClicked} />

        {country && <CountryInfo country={country} />}
      </AnimatePresence>
      {showLeaderBoard && <LeaderBoard />}
    </>
  )
}

export default Play
