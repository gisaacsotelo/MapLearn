import React from "react"
import { AnimatePresence, motion } from "framer-motion"

function CountryInfo(props) {
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
    return <>{lan}</>
  })

  // IMAGES //
  const flag = flags[Object.keys(flags)[1]]
  const coat = coatOfArms[Object.keys(coatOfArms)[1]]

  return (
    <>
      <AnimatePresence>
        <motion.button
          className="modal"
          onClick={props.closeInfo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="country-info"
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

                <p>
                  {countryName} is a country located in the continent of{" "}
                  {continents}, it is alternatively known as {altSpelling[1]}{" "}
                  and its capital is the city of {capital}
                </p>

                <p>
                  In {countryName}, the people drive on the {drivingSide} side
                  of the road. they primarily speak the language{" "}
                  {languageArr[0]},{" "}
                  {languageArr[1] && `however they also commonly speak`}
                  {languageArr[1]}
                </p>

                <p>
                  {countryName} has an average population of{" "}
                  {population.toLocaleString()} people, the people of{" "}
                  {countryName} use the {currency.name}({currency.symbol}) as
                  their currency, {unMember && `They are a part of the UN`}
                </p>

                <p>
                  The country is located in the {continents} region, but its
                  exact location is {latlng[0]}° S by {latlng[1]}° E, and its
                  Area is {area} km²
                </p>
              </div>
            </section>
          </motion.div>
        </motion.button>
      </AnimatePresence>
    </>
  )
}

export default CountryInfo
