import React from "react"
import { AnimatePresence, motion } from "framer-motion"

function CountryInfo(props) {
  console.log(props)
  const {
    flags,
    coatOfArms,
    name,
    capital,
    languages,
    area,
    population,
    continents,
    currencies,
    latlng,
    car,
    altSpellings,
    unMember,
  } = props.country

  // NAMES //
  const countryName = name[Object.keys(name)[0]]
  const altSpelling = Object.values(altSpellings).map((altName) => {
    return <>{altName}</>
  })
  const currency = currencies[Object.keys(currencies)[0]]
  const drivingSide = car[Object.keys(car)[1]]
  const languageArr = Object.values(languages).map((lan) => {
    return <li key={lan}>{lan}</li>
  })

  // IMAGES //
  const flag = flags[Object.keys(flags)[1]]
  const coat = coatOfArms[Object.keys(coatOfArms)[1]]



  return (
    <>
      <AnimatePresence>
        <motion.div
          className="modal"
          onClick={() => props.closeInfo(props.country)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.span
            className="country-info"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="country-name">
              <h2>{countryName}</h2>
            </div>
            <section className="top-section">
              <img className="country-flag" src={flag} />
              <img className="country-coat" src={coat} />
            </section>
            <section className="bot-section">
              <div className="country-desc">
                <br></br>
                <p>
                  {countryName} is a country located in {continents}. It is alternatively known as {altSpelling[1]} and it's capital city is {capital[0]}
                </p>
                <br></br>
                <p>
                  In {countryName}, the people drive on the {drivingSide} side of the road. Language(s) spoken: {languageArr}
                </p>
                <br></br>
                <p>
                  {countryName} has a population of {population.toLocaleString()} and uses the {currency.name}({currency.symbol}) as
                  it's currency. {unMember && `They are a part of the UN`}.
                </p>
                <br></br>
                <p>
                  The area of {countryName} is {area.toLocaleString()} km² and it's exact location is {latlng[0]}° S by {latlng[1]}° E

                  {/* The country is located in the {continents} region, but its exact location is {latlng[0]}° S by {latlng[1]}° E, and its
                  Area is {area} km² */}
                </p>
              </div>
            </section>
          </motion.span>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default CountryInfo


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