import React from "react"

function CountryInfo(props) {
  const { flags, coatOfArms, name, capital, languages, area, population } =
    props.country

  const languageList = Object.values(languages)

  return (
    <>
      <div className="countryName">
        <h2>{name[Object.keys(name)[0]]}</h2>
      </div>
      <img className="countryFlag" src={flags[Object.keys(flags)[0]]} />
      <img
        className="countryCoat"
        src={coatOfArms[Object.keys(coatOfArms)[0]]}
      />
      <div className="countryDesc">
        <p>Capital: {capital}</p>
        <ul>Primary Languages: 
          {languageList.map(lan => {
            return <li>{lan}</li>
          })}
        </ul>
        <p>Area: {area.toLocaleString()} km²</p>
        <p>Population: {population.toLocaleString()} people</p>
      </div>
    </>
  )
}

export default CountryInfo
