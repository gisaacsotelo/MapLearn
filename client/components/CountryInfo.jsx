import React from "react"

function CountryInfo(props) {
  const { flags, coatOfArms, name, capital, languages, area, population } =
    props.country

  return (
    <>
      <div className="countryName">
        <h2>{name[Object.keys(name)[0]]}</h2>
      </div>
      <img className="countryFlag" src="https://flagcdn.com/w320/nz.png" />
      <img
        className="countryCoat"
        src={coatOfArms[Object.keys(coatOfArms)[0]]}
      />
      <div className="countryDesc">
        <p>Capital: {capital}</p>
        <p>Primary Language: {languages[Object.keys(languages)[0]]}</p>
        <p>Area: {area.toLocaleString()} km²</p>
        <p>Population: {population.toLocaleString()} people</p>
      </div>
    </>
  )
}

export default CountryInfo
