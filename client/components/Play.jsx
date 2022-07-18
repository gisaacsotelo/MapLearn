import React, { useEffect, useState } from "react"
// import components
import WorldMap from "./WorldMap"
import CountryInfo from "./CountryInfo"
import LeaderBoard from "./LeaderBoard"
//import functions
import getCountry from "../apis/apiClient"
import { AnimatePresence } from "framer-motion"

function Play() {
  const [clicked, setClicked] = useState(false)
  const [randomCountry, setRandomCountry] = useState(null)
  const [showLeaderBoard, setyShowLeaderBoard] = useState(false)
  console.log(`country: `,randomCountry)

  useEffect(() => {
    const countriesDOM = Array.from(document.querySelectorAll('path'))
    console.log(`countriesDOM: `, countriesDOM)
    const rndInt = Math.floor(Math.random() * `${countriesDOM.length}`) + 1
    const rndmCntry = countriesDOM[rndInt].dataset
    setRandomCountry(rndmCntry)
  }, [])

  //// create array of all countries 
  //// select random country (#2) 
  //// display selected country to find by user
  // after clicked: 
  // check clicked if matched w array selection -> point?
  // if not: one chance used, restard selection #2

  //this function will run when a country is clicked in WorldMap
  const countryClicked = (e) => {
    const id = e.target.id
    const clickedCountry = Array.from(document.querySelectorAll(`path#${id}`))
    const correctCountry = Array.from(document.querySelectorAll(`path#${randomCountry.id}`))
    console.log(`selcted country: `, e.target)
    console.log(`correctCountry: `,correctCountry)
    correctCountry[0].style.fill = '#aeeb2bcf'
    setClicked(true)
    if (id === randomCountry.id){
      console.log(`Right`)
      
    }else {
      console.log(`You dumb fuck`)
      // correctCountry.style.fill = 'rgba(255, 255, 255, 0.512)'
      clickedCountry[0].style.fill = 'rgb(216, 48, 82)'
    }
    console.log(id)
  }

  const nextGuess = e => {
    setRandomCountry(null)
    console.log(`next!`)
  }

  return (
    <>
      {randomCountry && <h2 className="play-country-title">{randomCountry.name}</h2>}
      <WorldMap countryClicked={countryClicked} />
      {showLeaderBoard && <LeaderBoard />}
      {clicked && <button className="btn-next" onClick={nextGuess}>Next Guess</button>}
    </>
  )
}

export default Play
