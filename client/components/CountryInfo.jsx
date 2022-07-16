import React from "react"

function CountryInfo(props) {
  const { flags, coatOfArms, name, capital, languages, area, population } =
    props.country

  const languageList = Object.values(languages)
  console.log(props.country)

  return (
    <div className="country-info">
      <button onClick={props.closeInfo}>x</button>
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
          {languageList.map((lan, index) => {
            return <li key={index}>{lan}</li>
          })}
        </ul>
        <p>Area: {area.toLocaleString()} km²</p>
        <p>Population: {population.toLocaleString()} people</p>
      </section>
    </div>
  )
}

export default CountryInfo
