import React, { useEffect, useState } from "react"
// import components
import WorldMap from "./WorldMap"
import LeaderBoard from "./LeaderBoard"
import ScoreSumary from './ScoreSummary'
//import functions


function Play() {
  const [clickedCountry, setClickedCountry] = useState(null) // contains country clicked by user
  const [randomCountry, setRandomCountry] = useState(null) // contains random country for the round
  const [answer, setAnswer] = useState('')  // variable that hold if the answer was right or wrong to print
  const [turn, setTurn] = useState(0) // holds current turn
  const [score,setScore] = useState(0) // holds score of game
  const [reset, setReset] = useState(false) 
  const [showLeaderBoard, setyShowLeaderBoard] = useState(false)
  console.log(`Render component:`)

  // VARIABLES

  // colors:
  const green = '#aeeb2bcf'
  const red = 'rgb(216, 48, 82)'
  const grey = 'rgba(255, 255, 255, 0.512)'


  // on mounting & when reset is modified
  useEffect(() => {
    const countriesDOM = Array.from(document.querySelectorAll('path'))
    console.log(`Effect - Mx: `, Array.from(document.querySelectorAll('path#MX'))) // prints mexico for reference 
    const rndInt = Math.floor(Math.random() * `${countriesDOM.length}`) //random number from 0 to array.length
    const rndmCntry = countriesDOM[rndInt]
    setRandomCountry(rndmCntry)
  }, [reset])

  //  ^ FUNCTIONS


  // ~ countryClicked
  //this function will run when a country is clicked in WorldMap
  const countryClicked = (e) => {
    const id = e.target.id
    const clicked = Array.from(document.querySelectorAll(`path#${id}`))
    const clickedCountry = clicked[0]
    setClickedCountry(clickedCountry)
    randomCountry.style.fill = green
    if (id === randomCountry.id){
      setAnswer('CORRECT!')
    }else {
      setAnswer('WRONG!')
      clickedCountry.style.fill = red
    }
  }
  
  // ~nextGuess
  const nextGuess = e => {
    randomCountry.style.fill = grey
    clickedCountry.style.fill = grey
    setRandomCountry(null)
    setClickedCountry(null)
    setReset(!reset)
  }

  // ~unselect 
  const unselect = e => {
    e.stopPropagation()
  }

  // ! RETURN

  return (
    <>
      {randomCountry && <h2 className="play-country-title">{randomCountry.dataset.name}</h2>}
        <p className="turn">Turn: {turn}/10</p>
        {/* todo: score appears after turn 10 finishes */}
        <ScoreSumary score={score} />
        {/* <p className="score">Score: {turn}pts</p> */}
  
      <WorldMap countryClicked={countryClicked} />

      {showLeaderBoard && <LeaderBoard />}
      {clickedCountry &&
      <> 
        <div className="unselect">
          <div className="unselect-top"></div>
          <div className="unselect-bottom" onClick={unselect} ></div>
        </div>
        <button className="btn-next" onClick={nextGuess}>Next Guess</button>
        {<p className="answer">Your answer was: {answer}</p>}
      </>
      }
    </>
  )
}

export default Play
