import "./App.css"
import React, { useState } from "react"
import Weather from "./Weather.js"
import Form from "./Form.js"

function App() {
  const [weather, setWeather] = useState({})
  async function fetchData(e) {
    e.preventDefault()
    const input = e.target.elements.input.value
    // const zipcode = e.target.elements.zipcode.value
    // fetching the city and zipcode data from openweathermap api
    const apiData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&zip=${input}&&APPID=f11458201179074467b6e643c81ecbd1`
    )
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => {
        console.log(err)
      })

    let timeAPI;
    // conditional for invalid input
    if (apiData.message === "city not found") {
      setWeather({
        city: "",
        temperature: "",
        time: "",
        error: "please input valid city or zipcode",
      })
    } else {
      // fetching from a second api to get time zone from longitude & latitude coords recieved from openweathermap data
      timeAPI = await fetch(
        `http://api.timezonedb.com/v2.1/get-time-zone?key=T9OIOFUI7OJG&format=json&by=position&lat=${apiData.coord.lat}&lng=${apiData.coord.lon}`
      )
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => {
          console.log(err)
        })
      setWeather({
        city: apiData.name,
        // converting from kelvin to farenheight
        temperature: Math.round((apiData.main.temp * 9) / 5 - 459.67),
        time: timeAPI.formatted,
        error: "",
      })
    }
  }

  return (
    <div className="page">
      <h1 className="localweather">Local Weather</h1>
      <Form getWeather={fetchData} />
      <Weather
        city={weather.city}
        temperature={weather.temperature}
        time={weather.time}
        error={weather.error}
      />
    </div>
  )
}

export default App
