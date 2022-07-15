import React from "react"

function CountryInfo(props) {
  const { capital, languages, area, population } = props.country

  return (
    <div>
      <p>Capital: {capital}</p>
      {/* {languages.map(language => {
        return <p>{language}</p>
      }) } */}
      <p>{area}</p>
      <p>{population}</p>
    </div>
  )
}

export default CountryInfo
