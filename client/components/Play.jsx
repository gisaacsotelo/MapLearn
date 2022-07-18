import React, { useEffect, useState } from "react"
// import components
import WorldMap from "./WorldMap"
import LeaderBoard from "./LeaderBoard"
//import functions


function Play() {
  const [clicked, setClicked] = useState(null)
  const [randomCountry, setRandomCountry] = useState(null)
  const [reset, setReset] = useState(false)
  const [showLeaderBoard, setyShowLeaderBoard] = useState(false)
  console.log(`Render component: `,randomCountry)

  useEffect(() => {
    const countriesDOM = Array.from(document.querySelectorAll('path'))
    console.log(`START ARRAY: `, countriesDOM)
    // console.log(`countriesDOM: `, countriesDOM)
    const rndInt = Math.floor(Math.random() * `${countriesDOM.length}`) + 1
    const rndmCntry = countriesDOM[rndInt].dataset
    setRandomCountry(rndmCntry)
  }, [reset])

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

    correctCountry[0].style.fill = '#aeeb2bcf'
    setClicked(clickedCountry)
    setReset(false)
    if (id === randomCountry.id){
      console.log(`Right`)
      
    }else {
      console.log(`You dumb fuck`)
      clickedCountry[0].style.fill = 'rgb(216, 48, 82)'
    }
    // console.log(id)
  }

  const nextGuess = e => {
    console.log(`CLICKED COUNTRY: `, clicked)
    const correctCountry = Array.from(document.querySelectorAll(`path#${randomCountry.id}`))
    console.log(`correctCountry: `,correctCountry)

    correctCountry[0].style.fill = 'rgba(255, 255, 255, 0.512)'
    clicked[0].style.fill = 'rgba(255, 255, 255, 0.512)'
    setRandomCountry(null)
    setClicked(null)
    setReset(true)
    console.log(`next!`)
  }

  return (
    <>
     
      <WorldMap countryClicked={countryClicked} />
      {showLeaderBoard && <LeaderBoard />}

      <div className="random-country-container">
      
      {randomCountry && <h2 className="play-country-title">{randomCountry.name}</h2>}
      {clicked && <button className="btn-next" role="button" onClick={nextGuess}></button>}
      </div>
    </>
  )
}

export default Play
