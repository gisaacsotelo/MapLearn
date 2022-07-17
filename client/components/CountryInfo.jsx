import React from "react"
import { motion } from "framer-motion"

function CountryInfo(props) {
  const { flags, coatOfArms, name, capital, languages, area, population, continents, currencies, latlng, car, altSpellings, unMember} = props.country

  // NAMES //
  const countryName = name[Object.keys(name)[0]]
  const altSpelling = Object.values(altSpellings).map(altName => {return <>{altName}</>})
  const currency = currencies[Object.keys(currencies)[0]]
  const drivingSide = car[Object.keys(car)[1]]
  const languageArr = Object.values(languages).map(lan => {return <>{lan}</>})

  
  // IMAGES //
  const flag = flags[Object.keys(flags)[1]]
  const coat = coatOfArms[Object.keys(coatOfArms)[1]]

  console.log(currency)
  return (
    <>

<motion.div  
    className="country-info"
    // drag
    // dragConstraints={{
    //   top: -0,
    //   left: -0,
    //   right: 0,
    //   bottom: 0,
    // }}
    // dragElastic={0.2}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}
    >
      <button onClick={props.closeInfo} className='close-info-button'></button>
      <section className='top-section'>
        <div className="title is-4 country-name">
          <h2>{countryName}</h2>
        </div>
          <img className="country-flag" src={flag}/>
          <img className="country-coat" src={coat}/>
      </section>
        <section className="bot-section">
          <div className='country-desc'>
          {/* <p key>Alternatively known as:{altSpell.map(altName => {return <li>{altName}</li>})}</p>
          <p>Capital City: {capital}</p>
          <p>Continent: {continents}</p>
          <p>They drive on the {drivingSide} side of the road!</p>
          {unMember && <p>They are a part of the UN</p>}
          <p>Population: {population.toLocaleString()} people</p>
          <p> {languageArr[0]} </p>
          <p>Currency: {currency.symbol}{currency.name}</p>

          <p>Latitude: {latlng[0]}° S, Longtitude: {latlng[1]}° E</p>
          <p>Area: {area.toLocaleString()} km²</p> */}

          <p>{countryName} is a country located in the continent of {continents}, it is alternatively known as {altSpelling[1]} and its capital is the city of {capital}</p>

          <p>In {countryName}, the people drive on the {drivingSide} side of the road. they primarily speak the language {languageArr[0]}, {languageArr[1] && `however they also commonly speak` }{languageArr[1]}</p>

          <p>The {countryName} has an average population of {population.toLocaleString()} people, the people of {countryName} use the {currency.name}({currency.symbol}) as their currency, {unMember && `They are a part of the UN`}</p>

          <p>The country is located in the {continents} region, but its exact location is {latlng[0]}° S by {latlng[1]}° E, and its Area is {area} km²</p>
          </div>

        </section>
        </motion.div>
    </>
  )
}

export default CountryInfo
