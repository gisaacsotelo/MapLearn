import React, { useEffect, useState } from "react"
// import components
import WorldMap from "./WorldMap"
import LeaderBoard from "./LeaderBoard"
//import functions


function Play() {
  const [clickedCountry, setClickedCountry] = useState(null) // contains country clicked by user
  const [randomCountry, setRandomCountry] = useState(null) // contains random country for the round
  const [answer, setAnswer] = useState('')  // variable that hold if the answer was right or wrong to print
  const [turn, setTurn] = useState(0) // holds current turn
  const [score,setScore] = useState(0) // holds score of game
  const [reset, setReset] = useState(false) 
  const [showLeaderBoard, setyShowLeaderBoard] = useState(false)
  console.log(`Render component: `,randomCountry)
  if (randomCountry) {console.log(`name: `,randomCountry.dataset.name)}

  // VARIABLES

  // colors:
  const green = '#aeeb2bcf'
  const red = 'rgb(216, 48, 82)'
  const grey = 'rgba(255, 255, 255, 0.512)'


  // on mounting & when reset is modified
  useEffect(() => {
    const countriesDOM = Array.from(document.querySelectorAll('path'))
    console.log(`Effect - Mx: `, countriesDOM[93]) // prints mexico for reference 
    // console.log(`countriesDOM: `, countriesDOM)
    const rndInt = Math.floor(Math.random() * `${countriesDOM.length}`) //random number from 0 to array.length
    const rndmCntry = countriesDOM[rndInt]
    console.log(`mount-country: `, rndmCntry.dataset.name)
    // console.log(`mount-id: `, rndmCntry.id)
    // console.log(`mount-name: `, rndmCntry.dataset.name)
    // console.log(`mount-name: `, rndmCntry.localName)
    setRandomCountry(rndmCntry)
  }, [reset])

  //  ^ FUNCTIONS


  // ~ countryClicked
  //this function will run when a country is clicked in WorldMap
  const countryClicked = (e) => {
    const id = e.target.id
    const clickedCountry = Array.from(document.querySelectorAll(`path#${id}`))
    console.log(`Country clicked: `,clickedCountry)
    setClickedCountry(clickedCountry)
    randomCountry.style.fill = green
    if (id === randomCountry.id){
      console.log(`Selectrion was RIGHT`)
      setAnswer('CORRECT!')
    }else {
      console.log(`Selection was WRONG`)
      setAnswer('WRONG!')
      clickedCountry[0].style.fill = red
    }
    setReset(false)
  }
  
  // ~nextGuess
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

  // ! RETURN
  console.log(`ANSWER: `, answer)
  return (
    <>
      {randomCountry && <h2 className="play-country-title">{randomCountry.dataset.name}</h2>}
        <p className="turn">Turn: {turn}/10</p>
        <p className="score">Score: {turn}pts</p>
      <WorldMap countryClicked={countryClicked} />
      {showLeaderBoard && <LeaderBoard />}
      {clickedCountry &&
      <> 
        <button className="btn-next" onClick={nextGuess}>Next Guess</button>
        {<p className="answer">Your answer was: {answer}</p>}
      </>
      }
    </>
  )
}

export default Play
