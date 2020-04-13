import "./App.css"
import React, { useState } from "react"
import Weather from "./Weather.js"
import Form from "./Form.js"

function App() {
  const [weather, setWeather] = useState([])
  async function fetchData(e) {
    e.preventDefault()
    const city = e.target.elements.city.value
    const zipcode = e.target.elements.zipcode.value
    const apiData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&zip=${zipcode}&&APPID=f11458201179074467b6e643c81ecbd1`
    )
      .then((res) => res.json())
      .then((data) => data)
    const timeAPI = await fetch(
      `http://api.timezonedb.com/v2.1/get-time-zone?key=T9OIOFUI7OJG&format=json&by=position&lat=${apiData.coord.lat}&lng=${apiData.coord.lon}`
    )
      .then((res) => res.json())
      .then((data) => data)

    setWeather({
      city: apiData.name,
      temperature: Math.round((apiData.main.temp * 9) / 5 - 459.67),
      time: timeAPI.formatted,
    })
  }

  return (
    <div className="page">
      <h1>Weather Service</h1>
      <Form getWeather={fetchData} />
      <Weather
        city={weather.city}
        temperature={weather.temperature}
        time={weather.time}
      />
    </div>
  )
}

export default App
