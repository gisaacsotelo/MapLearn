// ^ API FILE
import request from 'superagent'

//Add API requests here

// ~getCountry
// function makes a request to an external API to get spicific information
// from specific country
export default function getCountry(code) {
  return request
    .get(
      `https://restcountries.com/v3.1/alpha/${code}?fields=name,capital,currencies,cca2,unMember,altSpellings,languages,latlng,area,flags,continents,population,car,coatOfArms`
    )
    .then((countryInfo) => {
      return countryInfo.body
    })
    .catch((err) => console.log(err))
}
