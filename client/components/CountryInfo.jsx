import React from "react"

function CountryInfo(props) {
  const { flags, coatOfArms, name, capital, languages, area, population, continents, currencies, latlng, car, altSpellings, unMember} = props.country

  const languageList = Object.values(languages)
  const altSpell = Object.values(altSpellings)
  const currency = currencies[Object.keys(currencies)[0]]
  const drivingSide = car[Object.keys(car)[1]]

  console.log(currency)
  return (
    <div className="country-info">
      <div className="country-name">
        <h2>{name[Object.keys(name)[0]]}</h2>
      </div>
      <div className="country-images">
        <img className="country-flag" src={flags[Object.keys(flags)[0]]} />
        <img className="country-coat" src={coatOfArms[Object.keys(coatOfArms)[0]]}/>
      </div>
      <section className="countryDesc">
        <p key>Alternatively known as:{altSpell.map(altName => {return <li>{altName}</li>})}</p>
        <p>Capital City: {capital}</p>
        <p>Continent: {continents}</p>
        <p>They drive on the {drivingSide} side of the road!</p>
        {unMember && <p>They are a part of the UN</p>}
        <p>Population: {population.toLocaleString()} people</p>
        <p key>Languages:{languageList.map(lan => {return <li>{lan}</li>})}</p>
        <p>Currency: {currency.symbol}{currency.name}</p>

        <p>Latitude: {latlng[0]}° S, Longtitude: {latlng[1]}° E</p>
        <p>Area: {area.toLocaleString()} km²</p>


      </section>
    </div>
  )
}

export default CountryInfo
