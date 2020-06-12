import React from "react"

const Weather = ({ city, temperature, time, error }) => {
  return (
    <div className="weather-output">
      <div className="city-name">{city && <p>{city}</p>}</div>
      <div className="date-time">{time && <p>Date & Time: {time}</p>}</div>
      <div className="temp"> {temperature && <p>{temperature}°F</p>}</div>
     
  {error && <p>{error}</p>}
    </div>
  )
}

export default Weather
