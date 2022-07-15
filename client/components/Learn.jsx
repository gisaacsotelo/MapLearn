import React, { useState } from "react"
import WorldMap from "./WorldMap"
import CountryInfo from "./CountryInfo"
//Need to import an api function from './apiClient'

function Learn() {
  const fakeCountry = {
    "flags": {
      "png": "https://flagcdn.com/w320/nz.png",
      "svg": "https://flagcdn.com/nz.svg"
    },
    "coatOfArms": {
      "png": "https://mainfacts.com/media/images/coats_of_arms/nz.png",
      "svg": "https://mainfacts.com/media/images/coats_of_arms/nz.svg"
    },
    "name": {
      "common": "New Zealand",
      "official": "New Zealand",
      "nativeName": {
        "eng": {
          "official": "New Zealand",
          "common": "New Zealand"
        },
        "mri": {
          "official": "Aotearoa",
          "common": "Aotearoa"
        },
        "nzs": {
          "official": "New Zealand",
          "common": "New Zealand"
        }
      }
    },
    "cca2": "NZ",
    "unMember": true,
    "currencies": {
      "NZD": {
        "name": "New Zealand dollar",
        "symbol": "$"
      }
    },
    "capital": [
      "Wellington"
    ],
    "altSpellings": [
      "NZ",
      "Aotearoa"
    ],
    "languages": {
      "eng": "English",
      "mri": "Māori",
      "nzs": "New Zealand Sign Language"
    },
    "latlng": [
      -41.0,
      174.0
    ],
    "area": 270467.0,
    "population": 5084300,
    "car": {
      "signs": [
        "NZ"
      ],
      "side": "left"
    },
    "continents": [
      "Oceania"
    ]
  }
  const [country, setCountry] = useState([])

  //this function will run when a country is clicked in WorldMap
  const handleClick = (e) => {
    e.PreventDefault()
    apiFunction(e.target.value - clickedCountry) //From apiClient
      .then((countryInfo) => {
        //countryInfo is the API data
        setCountry(countryInfo)
      })
  }

  return (
    <>
      <WorldMap handleClick={handleClick} />
      {fakeCountry && <CountryInfo country={fakeCountry} />}
    </>
  )
}

export default Learn
