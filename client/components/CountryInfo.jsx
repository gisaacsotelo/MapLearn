import React from "react"
import { motion } from "framer-motion"

function CountryInfo(props) {
  const { flags, coatOfArms, name, capital, languages, area, population } =
    props.country

  const languageList = Object.values(languages)
  console.log(props.country)
 
  
  return (
    <motion.div  initial={{ scale: 0 }}
    drag
    dragConstraints={{
      top: -0,
      left: -0,
      right: 0,
      bottom: 0,
    }}
    dragElastic={0.2}
    animate={{  scale: 1 }}
    
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}  className="country-info">
      <div className="country-name">
        <h2>{name[Object.keys(name)[0]]}</h2>
      </div>
      <div className="country-images">
        <img className="country-flag" src={flags[Object.keys(flags)[0]]} />
        <img className="country-coat" src={coatOfArms[Object.keys(coatOfArms)[0]]}
      />
      </div>
      <section className="countryDesc">
        <p>Capital: {capital}</p>
        <ul key >Primary Languages: 
          {languageList.map(lan => {
            return <li>{lan}</li>
          })}
        </ul>
        <p>Area: {area.toLocaleString()} km²</p>
        <p>Population: {population.toLocaleString()} people</p>
      </section>
    </motion.div>
  )
}

export default CountryInfo
